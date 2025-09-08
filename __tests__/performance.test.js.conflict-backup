<<<<<<< HEAD
=======
<<<<<<< HEAD
describe('Performance Tests', () => {
  test('basic performance check', () => {
    // Test that basic performance APIs are available
    expect(typeof performance).toBe('object');
    expect(typeof performance.now).toBe('function');
  });

  test('memory usage check', () => {
    // Test that memory APIs are available in test environment
    if (typeof performance !== 'undefined' && performance.memory) {
      expect(typeof performance.memory.usedJSHeapSize).toBe('number');
      expect(typeof performance.memory.totalJSHeapSize).toBe('number');
      expect(typeof performance.memory.jsHeapSizeLimit).toBe('number');
    }
  });

  test('performance timing check', () => {
    // Test that timing APIs work
    const start = performance.now();
    const end = performance.now();
    expect(end - start).toBeGreaterThanOrEqual(0);
  });
});
=======
<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';

describe('performance', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
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

const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

    expect(consoleMessages.length).toBe(0);
  });
});

    expect(consoleMessages.length).toBe(0);
  });

    expect(consoleMessages.length).toBe(0);
  });

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

const { test, expect } = require('@playwright/test')'
test && test.describe('"Performance"
  test('"page"
    "await"
    "await"
            "output"
  test('"bundle"
    "await"
    page && page.on('console', "msg"

    // Should not have bundle size warnings
const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

const { test,expect } = require('@playwright/test')'; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')'; await: page.waitForLoadState('networkidle')'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')'; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')'; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';

    expect(consoleMessages.length).toBe(0);
  });
<<<<<<< HEAD
});
=======
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======    // Should not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




});

});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
