<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json'}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test, expect } = require('@playwright/test')'
test.describe('"Performance"
  test('"page"
    "await"
    "await"
            "output"
  test('"bundle"
    "await"
    page.on('console', "msg"
              "output"
          resolve({ "error"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('page load performance', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('lighthouse performance audit', async ({ page }) => {
    await page.goto('/');
    // Run lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (typeof window.lighthouse !== 'undefined') {
          window.lighthouse(window.location.href, {
            output: 'json'
          }).then(resolve);
        } else {
          resolve({ error: 'Lighthouse not available' });
        }
      });
    });
    
    // Check performance score
    if (lighthouse.lhr && lighthouse.lhr.categories) {
      const performanceScore = lighthouse.lhr.categories.performance.score * 100;
      expect(performanceScore).toBeGreaterThan(80);
    }
  });

  test('bundle size check', async ({ page }) => {
    await page.goto('/');
    // Check for large bundle warnings
    const consoleMessages = [];
    page.on('console', (msg) => {
      if (msg.type() === 'warning' && msg.text().includes('bundle')) {
        consoleMessages.push(msg.text());
      }
    });
    
    await page.waitForTimeout(2000);
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
    // Should not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    expect(consoleMessages.length).toBe(0);
  });
  
  test('memory usage check', async ({ page }) => {
    await page.goto('/');
    const metrics = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
        };
      }
      return null;
    });
    
    if (metrics) {
      expect(metrics.usedJSHeapSize).toBeLessThan(50 * 1024 * 1024); // 50MB
    }
  });
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const { test, expect } = require('@playwright/test')'
test && test.describe('"Performance"
  test('"page"
    "await"
    "await"
            "output"
  test('"bundle"
    "await"
    page && page.on('console', "msg"
<<<<<<< HEAD
              "output"
          resolve({ "error"
<<<<<<< HEAD

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
ursor/automate-test-improve-and-merge-code-2480
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
