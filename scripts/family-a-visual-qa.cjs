const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4173';
const outDir = path.resolve(process.env.QA_SCREENSHOT_DIR || 'automation/reports/family-a-visual');
fs.mkdirSync(outDir, { recursive: true });

const routes = [
  ['home','/'],
  ['services','/services/'],
  ['discovery','/discovery/'],
  ['apps','/apps/'],
  ['apps-network','/apps/network.html'],
  ['roi-calc','/roi-calc/'],
  ['smart-hands','/ai-smart-hands-scheduler/'],
  ['batch74','/app-network-batch74-oct05.html']
];
const viewports = [
  ['desktop',{ width: 1440, height: 1100 }],
  ['mobile',{ width: 390, height: 844 }]
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  for (const [vpName, viewport] of viewports) {
    const context = await browser.newContext({ viewport });
    for (const [name, route] of routes) {
      const page = await context.newPage();
      const response = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 });
      if (!response || !response.ok()) failures.push(name + ' ' + vpName + ': HTTP ' + (response && response.status()));
      const sharedNav = await page.locator('header.nav').count();
      const sharedFooter = await page.locator('footer .foot').count();
      const bodyBg = await page.locator('body').evaluate(el => getComputedStyle(el).backgroundImage);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (sharedNav !== 1) failures.push(name + ' ' + vpName + ': expected exactly one Family A nav, got ' + sharedNav);
      if (sharedFooter !== 1) failures.push(name + ' ' + vpName + ': expected exactly one Family A footer, got ' + sharedFooter);
      if (!bodyBg || bodyBg === 'none') failures.push(name + ' ' + vpName + ': canonical background missing');
      if (overflow > 4) failures.push(name + ' ' + vpName + ': horizontal overflow ' + overflow + 'px');
      await page.screenshot({ path: path.join(outDir, name + '-' + vpName + '.png'), fullPage: true });
      await page.close();
    }
    await context.close();
  }
  await browser.close();
  if (failures.length) {
    console.error('Family A visual QA failed:\n' + failures.map(x => ' - ' + x).join('\n'));
    process.exit(1);
  }
  console.log('Family A visual QA passed for ' + routes.length + ' routes x ' + viewports.length + ' viewports.');
})();