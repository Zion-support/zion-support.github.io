import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('HTTPS is enforced', async ({ page }) => {
    const response = await page.goto('http://localhost:3000');
    expect(response?.url()).toMatch(/^https:/);
  });

  test('security headers are present', async ({ page }) => {
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
