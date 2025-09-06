
=======
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

=======

    expect(consoleMessages.length).toBe(0);
  });'
  test('memory usage check', async ({ page }) => {'
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


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const { test, expect } = require('@playwright/test')'
test && test.describe('"Performance"'"
  test('"page"
    "await"
    "await"
            "output"'"
  test('"bundle"
    "await"'"
    page && page.on('console', "msg"
              "output"
=======
<<<<<<< HEAD
          resolve({ "error"'"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
