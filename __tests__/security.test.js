const { test, expect } = require('@playwright/test');

test.describe('security E2E', () => {
  test('should work', async ({ page }) => {
    await page.goto('/');
    const headers = await page.evaluate(() => {
      return document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.getAttribute('content');
    });
    expect(headers).toBeTruthy();
  });

  test('no sensitive data in console', async ({ page }) => {
    const consoleMessages = [];
    page.on('console', (msg) => {
      consoleMessages.push(msg.text());
    });

    await page.goto('/');

    const sensitivePatterns = [
      /password[:=]\s*['"][^'"]*['"]/i,
      /api[_-]?key[:=]\s*['"][^'"]*['"]/i,
      /secret[:=]\s*['"][^'"]*['"]/i,
      /token[:=]\s*['"][^'"]*['"]/i,
    ];

    for (const message of consoleMessages) {
      for (const pattern of sensitivePatterns) {
        expect(message).not.toMatch(pattern);
      }
    }
  });
});
