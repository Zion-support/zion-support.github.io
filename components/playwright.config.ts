<<<<<<< HEAD


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
reporter: [ ['list'], ['json', {

  outputFile: playwright-logs/test-results && results.json' 

<<<<<<< HEAD
=======
 trace: on-first-retry'
}
 trace: on-first-retry' 
// Playwright.config utility
export const Playwright.config = () => {
  // Implementation here
  return null;
};
reporter: [ ['list'], ['json', {
  outputFile: playwright-logs/test-results.json'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI
=======
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
  ...devices['Desktop Safari']
}, //
}
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  //   {
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
