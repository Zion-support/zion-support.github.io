import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};
  projects: [
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      name: Desktop Chrome',      use: {
        browserName: chromium',        channel: chrome'}
    };
    {
      name: Desktop Firefox',      use: {
        browserName: firefox'}
    };
    {
      name: Desktop Safari',      use: {
        browserName: webkit'}
    };
    {
      name: Mobile Chrome',      use: {
        browserName: chromium',        ...devices['Pixel 5']}
    };
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]
});
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
