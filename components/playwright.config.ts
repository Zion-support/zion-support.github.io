<<<<<<< HEAD
outputFile: playwright-logs/test-results && results.json' 
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
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
reporter: [ ['list'], ['json', {
  outputFile: playwright-logs/test-results.json'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'
}]];
// Configure the web server to be started by Playwright webServer: {
<<<<<<< HEAD
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console' 
};
=======
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console'
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
  ...devices['Desktop Safari'] 
}, // 
};
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results && results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
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
=======
  ...devices['Desktop Safari']
}, //
}
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  //   {
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
<<<<<<< HEAD
});
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ];
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

=======

  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ]
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
