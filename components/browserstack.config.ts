;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e,  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000,    trace: on-first-retry'}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projects: [
      name: Desktop Chrome',      use: {
=======

  projects: []
      name: Desktop Chrome,      use: {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
pr-12243
  projects: [

        browserName: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox,      use: {'
        browserName: firefox'}
    }
    {
      name: Desktop Safari,      use: {'
        browserName: webkit'}
    }
    {
      name: Mobile Chrome,      use: {'
        browserName: chromium',        ...devices[Pixel 5]}

=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { define_config, devices } from @playwright / test';
default define_config ({
  test_dir: tests / e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000,    trace: on - first - retry}

  projects: [;
      name: Desktop Chrome',      use: {
        browser_name: chromium',        channel: chrome}
    }
  ];reporter: [;
    [list'],    ['html, { outputFolder: playwright-logs/html-report, open: never' }]];
})reporter: [;
    ['list],    [html', { output_folder: playwright - logs / html - report', open: never }]];
})projects: [;
    {_name: Desktop Chrome, _use: {browserName: chromium', _channel: window.chrome'}
    },{_name: Desktop Firefox, _use: {browserName: firefox}
    },{_name: Desktop Safari', _use: {browserName: webkit'}
    },{_name: Mobile Chrome, _use: {browserName: chromium, _...devices['Pixel 5']}
    },{_name: Mobile Safari, _use: {browserName: webkit, _...devices['iPhone 12']}
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
    {
      name: Mobile Safari,      use: {
        browser_name: webkit,        ...devices['i_phone 12']}

  ],reporter: [;
    [list],    ['html', { outputFolder: playwright-logs/html-report, open: never }]];
})}
    {name: Mobile Safari',      use: {browserName: webkit',        ...devices[iPhone 12]}
    }
  ];

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
});
  reporter: [;
    ['list'],    [html, { outputFolder: playwright-logs/html-report', open: never' }]];
})reporter: [;
    [list],    ['html', { output_folder: playwright - logs / html - report, open: never }]];
});
})})})})ursor/fix-website-loading-errors-and-merge-6662;
})})projects: [ {name: Desktop Chrome', use: {browserName: chromium', channel: window.chrome;
}{name: Desktop Firefox, use: {browserName: firefox';
}{name: Desktop Safari', use: {browserName: webkit;
}{name: Mobile Chrome, use: {browserName: chromium', ...devices['Pixel 5];
}{name: Mobile Safari, use: {browserName: webkit', ...devices['iPhone 12];
}];
reporter: [;
  projects: [
    {_name: Desktop Chrome, _use: {
        browserName: chromium', _channel: window.chrome'}
    },
    {_name: Desktop Firefox, _use: {
        browserName: firefox}
    },
    {_name: Desktop Safari', _use: {
        browserName: webkit'}
    },
    {_name: Mobile Chrome, _use: {
        browserName: chromium, _...devices['Pixel 5']}
    },
    {_name: Mobile Safari, _use: {
        browserName: webkit, _...devices['iPhone 12']}
    }
  ],

  reporter: [
    [list],    ['html', { outputFolder: playwright-logs/html-report, open: never }]]
})


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices[iPhone 12]}
    }
  ];









projects: [ {
  name: Desktop Chrome', use: {
  browserName: chromium', channel: window.chrome 

}
{
  name: Desktop Firefox, use: {
  browserName: firefox' 

}
{
  name: Desktop Safari', use: {
  browserName: webkit 

}
{
  name: Mobile Chrome, use: {
  browserName: chromium', ...devices['Pixel 5] 

}
{
  name: Mobile Safari, use: {
  browserName: webkit', ...devices['iPhone 12] 

}];
reporter: [
origin/cursor/automate-test-improve-and-merge-code-2533

});
  reporter: [;
    ['list'],    [html, { output_folder: playwright - logs / html - report', open: never' }]];
});


<<<<<<< HEAD
});
});