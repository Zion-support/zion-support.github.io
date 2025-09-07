const { test, expect } = require('@playwright/test');

test.describe('e2e E2E', () => {
  test('should work', async ({ page }) => {
    await page.goto('/');
    expect(await page.title()).toBeTruthy();
  });
});
