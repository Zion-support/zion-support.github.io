 trace: on-first-retry'
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
reporter: [ ['list'], ['json', {
  outputFile: playwright-logs/test-results.json'
}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'
}]];
// Configure the web server to be started by Playwright webServer: {
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console'
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// Optional: Define projects for different browsers // projects: [ // {
  // name: chromium', // use: {
  ...devices['Desktop Chrome']
}, //
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// {
  // name: firefox', // use: {
  ...devices['Desktop Firefox']
}, //
<<<<<<< HEAD
}
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// {
  // name: webkit', // use: {
  ...devices['Desktop Safari']
}, //
<<<<<<< HEAD
}
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
  // Configure the web server to be started by Playwright
  webServer: {
    command: npm run dev',    url: http://localhost:3000',    reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
  //   {
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
<<<<<<< HEAD
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   };
  // ]
=======
};
// ]
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
});
=======
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   }
  // ]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
