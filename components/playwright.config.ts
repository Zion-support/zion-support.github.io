<<<<<<< HEAD
import { defineConfig } from @playwright/test';
default defineConfig($2);
=======
<<<<<<< HEAD
trace: on-first-retry'
}'
 trace: on-first-retry' 
// Playwright.config utility;
export const Playwright.config = () => {};
  // Implementation here;
  return null;
=======
<<<<<<< HEAD
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
}], [html', {
  outputFolder: playwright-logs/html-report', open: never
=======
trace: on-first-retry' 
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
trace: on-first-retry' }
reporter: [ ['list'], ['json', {

  outputFile: playwright-logs/test-results && results.json' 
'
}], ['html', {'
=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
reporter: [ ['list'], ['json', {

  outputFile: playwright-logs/test-results && results.json' 

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}], ['html', {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  outputFolder: playwright-logs/html-report', open: never'
<<<<<<< HEAD
}]];
<<<<<<< HEAD
// Configure the web server to be started by Playwright webServer: {}
// Optional: Define projects for different browsers // projects: [ // {'
  // name: chromium', // use: {'
=======
// Configure the web server to be started by Playwright webServer: {
<<<<<<< HEAD
  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console'
}
=======

  command: npm run dev', url: http://localhost:3000', reuseExistingServer: !process && process.env.CI, // Reuse server locally, start fresh in CI timeout: 120 * 1000, // 2 minutes timeout for server to start stdout: pipe', // Pipe stdout to the console' stderr: pipe', // Pipe stderr to the console' 
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Optional: Define projects for different browsers // projects: [ // {
  // name: chromium', // use: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ...devices['Desktop Chrome']
}, //
}
// {'
  // name: firefox', // use: {'
  ...devices['Desktop Firefox']
}, //
}
<<<<<<< HEAD
// {'
  // name: webkit', // use: {}
    timeout: 120 * 1000, // 2 minutes timeout for server to start'
  outputFile: playwright-logs/test-results && results.json' }
,}
}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'

}]];
// Configure the web server to be started by Playwright webServer: {// Optional: Define projects for different browsers // projects: [ // {// name: chromium, // use: {...devices['Desktop Chrome'];
}, //;
}
// {// name: firefox, // use: {...devices[Desktop Firefox'];
}, //;
}
// {// name: webkit', // use: {timeout: 120 * 1000, // 2 minutes timeout for server to start;
=======
}]];
// Configure the web server to be started by Playwright webServer: {}
// Optional: Define projects for different browsers // projects: [ // {'
  // name: chromium', // use: {'
  ...devices['Desktop Chrome']
}, //
}
// {'
  // name: firefox', // use: {'
  ...devices['Desktop Firefox']
}, //
}
// {'
  // name: webkit', // use: {}
    timeout: 120 * 1000, // 2 minutes timeout for server to start'

>>>>>>> origin/chore/fix-lint-and-merge
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers;
  // projects: []
  //   {'
=======
// {
  // name: webkit', // use: {
<<<<<<< HEAD
import { defineConfig } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: http://localhost:3000',    // Ensures that the trace viewer assets are downloaded, useful for debugging.
    trace: on-first-retry'
    },
    reporter: [
    ['list'],    ['json', { outputFile: playwright-logs/test-results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];
=======

  ...devices['Desktop Safari'] 
}, // 
};
// ] });    ['list'],    ['json', { outputFile: playwright-logs/test-results && results.json' }],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]];

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    timeout: 120 * 1000, // 2 minutes timeout for server to start
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers
  // projects: [
  //   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
<<<<<<< HEAD
  //   {
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
<<<<<<< HEAD
  // ];
import { defineConfig } from @playwright/test';
default defineConfig($2);
    stdout: pipe', // Pipe stdout to the console'    stderr: pipe', // Pipe stderr to the console'  }
  // Optional: Define projects for different browsers;
  // projects: []
  //   {'
  //     name: chromium',  //     use: { ...devices['Desktop Chrome'] },  //   }
  //   {'
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
  //   {
  //     name: webkit',  //     use: { ...devices['Desktop Safari'] },  //   };
}
  //     name: webkit',  //     use: { ...devices['Desktop Safari'],}
},  //   };
  // ]
});
  //     "name": webkit',  //     "use": { ...devices['Desktop Safari'],'
},  //   }
  // ]
=======
  //   {'
  //     name: firefox',  //     use: { ...devices['Desktop Firefox'] },  //   }
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD




=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
