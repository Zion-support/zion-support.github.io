<<<<<<< HEAD
<<<<<<< HEAD
 trace: on-first-retry'
}
 trace: on-first-retry' 
// Playwright.config utility
export const Playwright.config = () => {
  // Implementation here
<<<<<<< HEAD
  return null
=======
  return null;
=======
trace: on-first-retry' 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
trace: on-first-retry' 
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
};

reporter: [ ['list'], ['json', {
  outputFile: playwright-logs/test-results.json'

}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'
}]];
// Configure the web server to be started by Playwright webServer: {
<<<<<<< HEAD

=======
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console' 
};

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD

  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  //   {
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   };
  // ]
});
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ]
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
