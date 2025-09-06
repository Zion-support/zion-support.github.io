<<<<<<< HEAD


<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000',    trace: on-first-retry'}
<<<<<<< HEAD
pr-12243
=======


=======

    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  projects: [
      name: Desktop Chrome',      use: {
=======

  projects: []
      name: Desktop Chrome',      use: {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        browserName: chromium',        channel: chrome'}
    }
    {'
      name: Desktop Firefox',      use: {'
        browserName: firefox'}
    }
    {'
      name: Desktop Safari',      use: {'
        browserName: webkit'}
    }
    {'
      name: Mobile Chrome',      use: {'
        browserName: chromium',        ...devices['Pixel 5']}
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { define_config, devices } from @playwright / test';
default define_config ({
  test_dir: tests / e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on - first - retry'}
  projects: [;
      name: Desktop Chrome',      use: {
        browser_name: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox',      use: {
        browser_name: firefox'}
    }
    {
      name: Desktop Safari',      use: {
        browser_name: webkit'}
    }
    {
      name: Mobile Chrome',      use: {
        browser_name: chromium',        ...devices['Pixel 5']}
origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
pr-12243
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    {
      name: Mobile Safari',      use: {
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]

<<<<<<< HEAD
=======
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;
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

pr-12243
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]
=======




    }
    {'
      name: Mobile Safari',      use: {'
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

});
  reporter: [;'
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
});
});
projects: [ {
  name: Desktop Chrome', use: {
  browserName: chromium', channel: window.chrome' 

};
{
  name: Desktop Firefox', use: {
  browserName: firefox' 

};
{
  name: Desktop Safari', use: {
  browserName: webkit' 

};
{
  name: Mobile Chrome', use: {
  browserName: chromium', ...devices['Pixel 5'] 

};
{
  name: Mobile Safari', use: {
  browserName: webkit', ...devices['iPhone 12'] 

}];
reporter: [
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
