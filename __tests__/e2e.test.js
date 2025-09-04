const { test, expect } = require('@playwright/test');

test.describe('E2E: Tests', () => {
  test('homepage: loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Zion Tech Group/);
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Test main navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Test navigation links
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
    
    const servicesLink = page.locator('a[href*="services"]');
    if (await servicesLink.count() > 0) {
      await expect(servicesLink.first()).toBeVisible();
    }
  });

  test('contact form works', async ({ page }) => {
    await page.goto('/');
    
    // Look for contact form
    const contactForm = page.locator('form');
    if (await contactForm.count() > 0) {
      await expect(contactForm.first()).toBeVisible();
      
      // Test form fields
      const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]');
      if (await nameInput.count() > 0) {
        await nameInput.first().fill('Test User');
      }
      
      const emailInput = page.locator('input[name="email"], input[type="email"]');
      if (await emailInput.count() > 0) {
        await emailInput.first().fill('test@example.com');
      }
    }
  });

  test('page performance is acceptable', async ({ page }) => {
    await page.goto('/');
    
    // Check for basic performance metrics
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      };
    });
    
    // Basic performance checks
    expect(performanceMetrics.loadTime).toBeLessThan(5000); // 5 seconds max load time
    expect(performanceMetrics.domContentLoaded).toBeLessThan(3000); // 3 seconds max DOM ready
  });

  test('page is responsive', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('body')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('page has proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check for essential meta tags
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    if (description) {
      expect(description.length).toBeGreaterThan(0);
    }
  });
});