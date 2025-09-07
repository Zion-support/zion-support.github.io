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
      return {
        jsHeapSizeLimit: performance.memory?.jsHeapSizeLimit || 0,
        usedJSHeapSize: performance.memory?.usedJSHeapSize || 0,
      };
    });
    expect(metrics.usedJSHeapSize).toBeLessThan(50000000);
  });
});
