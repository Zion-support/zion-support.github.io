<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
});'
});'
});'

<<<<<<< HEAD
=======
const { test, expect } = require('@playwright/test')'
test.describe('"Performance"
  test('"page"
    "await"
    "await"
            "output"
  test('"bundle"
    "await"
          resolve({ "error"'"
          resolve({ "error"'"
          resolve({ "error"'"
    page.on('console', "msg"
              "output"
          resolve({ "error"
describe('Performance Tests', () => {
  test('basic performance check', () => {
    // Test that basic performance APIs are available
    expect(typeof performance).toBe('object');
    expect(typeof performance.now).toBe('function');
  });
>>>>>>> origin/cursor/delete-old-data-records-6bba







<<<<<<< HEAD
=======
import { test, expect } from '@playwright/test';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('bundle size is reasonable', async ({ page }) => {
    await page.goto('/');
    const metrics = await page.evaluate(() => {

=======


import { test, expect } from '@playwright/test';

test.describe(Performance Tests, () => {
  test('page load performance', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(/);
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


const startTime = Date.now()await page.goto('/')await page.waitForLoadState('networkidle';'
    // Page should load within 3 seconds;
    expect(loadTime).toBeLessThan(3000)})test('lighthouse performance audit', async ({ page    }) => {'


}


await page.goto('/')// Run lighthouse audit;'

    
    
    
    // Check performance score

    
    
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
    // Should not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
const { test,expect } = require('@playwright/test')';; test.describe('Performance: Tests',() => {'; test('page: load performance',async ({ page }) => {'; const startTime = Date.now(); await: page.goto('/')';; await: page.waitForLoadState('networkidle')';; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit',async ({ page }) => {'; await: page.goto('/')';; const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== 'undefined') {'; window.lighthouse(window.location.href,{ output: 'json''}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available'})}'})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {'; await: page.goto('/')';; const consoleMessages = []; page.on('console',msg: => {'; if: (msg.type() === 'warning' && msg.text().includes('bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto('/); await page.waitForLoadState('networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test('lighthouse performance audit',async ({ page }) => {' await page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise(resolve => {' if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{' output: 'json' }); .then(resolve)} else {' resolve({ error: 'Lighthouse not available' })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check',async ({ page }) => {' await page.goto('/'); const consoleMessages = []; page.on('console',msg => {' if (msg.type() === 'warning' && msg.text().includes('bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';
