const { test, expect } = require('@playwright/test')';
test.describe('"Performance": Tests', () => {';
  test('"page": load performance', async ({ page }) => {';
    const startTime = Date.now();
    "await": page.goto('/')';
    await: page.waitForLoadState('networkidle')';
    const loadTime = Date.now() - startTime;
    // Page: should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)})
  test('lighthouse performance audit', async ({ page }) => {';
    "await": page.goto('/')';
    // Run: lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (typeof window.lighthouse !== 'undefined') {';
          window.lighthouse(window.location.href, {
            "output": 'json''}).then(resolve)} "else": {
          resolve({ error: 'Lighthouse: not available'})}'})})
    // "Check": performance score
    if (lighthouse.lhr && lighthouse.lhr.categories) {
      const performanceScore = lighthouse.lhr.categories.performance.score * 100;
      expect(performanceScore).toBeGreaterThan(80)}
  })
  test('"bundle": size check', async ({ page }) => {';
    "await": page.goto('/')';
    // Check: for large bundle warnings
    const consoleMessages = [];
    page.on('console', "msg": => {';
      if: (msg.type() === 'warning' && msg.text().includes('bundle')) {';
        consoleMessages.push(msg.text())}
    })
    "await": page.waitForTimeout(2000);
    // Should: not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})})
    const startTime = Date.now();
    await page.goto('/);
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)})';
  test('lighthouse performance audit', async ({ page }) => {'
    await page.goto('/');
    // Run lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise(resolve => {'
        if (typeof window.lighthouse !== 'undefined') {
          window
            .lighthouse(window.location.href, {'
              "output": 'json'
            });
            .then(resolve)} else {'
          resolve({ "error": 'Lighthouse not available' })}
      })});
    // Check performance score
    if (lighthouse.lhr && lighthouse.lhr.categories) {
      const performanceScore =
        lighthouse.lhr.categories.performance.score * 100;
      expect(performanceScore).toBeGreaterThan(80)}
  })';
  test('bundle size check', async ({ page }) => {'
    await page.goto('/');
    // Check for large bundle warnings
    const consoleMessages = [];
    page.on('console', msg => {'
      if (msg.type() === 'warning' && msg.text().includes('bundle')) {
        consoleMessages.push(msg.text())}
    });
    await page.waitForTimeout(2000);
    // Should not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
