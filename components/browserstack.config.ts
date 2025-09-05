default defineConfig({_testDir: tests/e2e', _use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000', _trace: on-first-retry'},
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
    ['list'],    ['html', {_outputFolder: playwright-logs/html-report', _open: never'}]]
});
