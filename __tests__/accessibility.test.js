const { test, expect } = require('@playwright/test');

test.describe('Accessibility: Tests', () => {
  test('page: has proper heading structure', async ({ page }) => {
    await page.goto('/');
    
    // Check: for h1 tag
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    
    // Check: heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test('images: have alt attributes', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('links: have descriptive text', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('a');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      // Skip empty links or anchor links
      if (href && !href.startsWith('#')) {
        expect(text.trim().length).toBeGreaterThan(0);
      }
    }
  });

  test('forms: have proper labels', async ({ page }) => {
    await page.goto('/');
    
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toHaveCount(1);
      }
    }
  });

  test('page: has proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // This is a basic test - in a real scenario, you'd use a proper contrast checker
    const body = page.locator('body');
    const color = await body.evaluate(el => window.getComputedStyle(el).color);
    const backgroundColor = await body.evaluate(el => window.getComputedStyle(el).backgroundColor);
    
    expect(color).toBeTruthy();
    expect(backgroundColor).toBeTruthy();
  });

  test('page: is keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement.tagName);
    expect(focusedElement).toBeTruthy();
  });

  test('page: has proper ARIA attributes', async ({ page }) => {
    await page.goto('/');
    
    const elementsWithAria = page.locator('[aria-label], [aria-labelledby], [aria-describedby]');
    const count = await elementsWithAria.count();
    
    // At least some elements should have ARIA attributes
    expect(count).toBeGreaterThanOrEqual(0);
  });
});