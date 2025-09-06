<<<<<<< HEAD
 trace: on-first-retry' 
=======
<<<<<<< HEAD
<<<<<<< HEAD
 trace: on-first-retry'
}
=======
 trace: on-first-retry' 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
// Playwright.config utility
export const Playwright.config = () => {
  // Implementation here
  return null;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
};
 trace: on-first-retry'
}
reporter: [ ['list'], ['json', {
  outputFile: playwright-logs/test-results.json'
}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'
}]];
// Configure the web server to be started by Playwright webServer: {
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console'
}
// Optional: Define projects for different browsers // projects: [ // {
  // name: chromium', // use: {
  ...devices['Desktop Chrome']
}, //
}
// {
  // name: firefox', // use: {
  ...devices['Desktop Firefox']
}, //
}
// {
  // name: webkit', // use: {
  ...devices['Desktop Safari']
}, //
}
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
import { defineConfig } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
      
    baseURL: http://localhost:3000',    // Ensures that the trace viewer assets are downloaded, useful for debugging.
    trace: on-first-retry'
    },
    reporter: [
    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
trace: on - first - retry';
}
reporter: [ ['list'], ['json', {
  output_file: playwright - logs / test - results.json';
}], ['html', {
  output_folder: playwright - logs / html - report', open: never';
}]];
// Configure the web server to be started by Playwright web_server: {
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console';
}
// Optional: Define projects for different browsers // projects: [ // {
  // name: chromium', // use: {
  ...devices['Desktop Chrome'];
}, //;
}
// {
  // name: firefox', // use: {
  ...devices['Desktop Firefox'];
}, //;
}
// {
  // name: webkit', // use: {
  ...devices['Desktop Safari'];
}, //;
}
// ] });    ['list'],    ['json', { output_file: playwright - logs / test - results.json' }],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
  // Configure the web server to be started by Playwright;
  web_server: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI;
    timeout: 120 * 1000, // 2 minutes timeout for server to start;
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers;
  // projects: [;
  //   {
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {

  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ]

  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ];
