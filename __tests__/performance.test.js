

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
    expect(loadTime).toBeLessThan(3000)});


    // Run lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (typeof window.lighthouse !== 'undefined') {
          window

        }
      })});

    // Check performance score
    if (lighthouse.lhr && lighthouse.lhr.categories) {
      const performanceScore =
        lighthouse.lhr.categories.performance.score * 100;
      expect(performanceScore).toBeGreaterThan(80);
    }
  });

        consoleMessages.push(msg.text());
      }
    });
    
    await page.waitForTimeout(2000);

    // Should not have bundle size warnings
    expect(consoleMessages.length).toBe(0)})});



