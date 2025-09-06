import { defineConfig, devices } from @playwright/test',
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'},
default defineConfig({_testDir: tests/e2e', _use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000', _trace: on-first-retry'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  projects: [
    {_name: Desktop Chrome', _use: {
        browserName: chromium', _channel: window.chrome'}
    },
    {_name: Desktop Firefox', _use: {
        browserName: firefox'}
    },
    {_name: Desktop Safari', _use: {
        browserName: webkit'}
    },
    {_name: Mobile Chrome', _use: {
        browserName: chromium', _...devices['Pixel 5']}
    },
    {_name: Mobile Safari', _use: {
        browserName: webkit', _...devices['iPhone 12']}
    }
  ],
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]
}),
