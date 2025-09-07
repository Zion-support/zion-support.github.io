const { test, expect } = require('@playwright/test');

test.describe('accessibility E2E', () => {
  test('should work', async ({ page }) => {
    await page.goto('/');
    expect(await page.title()).toBeTruthy();
  });
});