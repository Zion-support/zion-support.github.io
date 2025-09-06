<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
=======
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
=======


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    expect(consoleMessages.length).toBe(0);
  });
<<<<<<< HEAD
  
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
=======
<<<<<<< HEAD
});'
=======
});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
              "output"
<<<<<<< HEAD
          resolve({ "error"'"
=======
          resolve({ "error"

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    // Should not have bundle size warnings
<<<<<<< HEAD
    expect(consoleMessages.length).toBe(0)})})';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
});
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
