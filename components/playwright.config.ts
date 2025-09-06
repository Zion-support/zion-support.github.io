import { defineConfig } from @playwright/test'
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: http://localhost:3000',    // Ensures that the trace viewer assets are downloaded, useful for debugging.
default defineConfig({_testDir: tests/e2e', _use: {
    baseURL: http://localhost:3000', _// Ensures that the trace viewer assets are downloaded, _useful for debugging.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    trace: on-first-retry'},
  reporter: [
    ['list'],    ['json', {_outputFile: playwright-logs/test-results.json'}],    ['html', {_outputFolder: playwright-logs/html-report', _open: never'}]],
  // Configure the web server to be started by Playwright
  webServer: {_command: npm run dev', _url: http://localhost:3000', _reuseExistingServer: !process.env.CI, _// Reuse server locally, _start fresh in CI
    timeout: 120 * 1000, _// 2 minutes timeout for server to start
    stdout: pipe', _// Pipe stdout to the console'    stderr: pipe', _// Pipe stderr to the console'},
  // Optional: Define projects for different browsers
  // projects: [
  //   {_//     name: chromium', _//     use: { ...devices['Desktop Chrome']},  //   },
  //   {_//     name: firefox', _//     use: { ...devices['Desktop Firefox']},  //   },
  //   {_//     name: webkit', _//     use: { ...devices['Desktop Safari']},  //   },
  // ]
}),
