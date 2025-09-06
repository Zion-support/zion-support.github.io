<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};

=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000',    trace: on-first-retry'}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  projects: [
      name: Desktop Chrome',      use: {
        browserName: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox',      use: {
        browserName: firefox'}
    }
    {
      name: Desktop Safari',      use: {
        browserName: webkit'}
    }
    {
      name: Mobile Chrome',      use: {
        browserName: chromium',        ...devices['Pixel 5']}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
    {
      name: Mobile Safari',      use: {
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]

<<<<<<< HEAD
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;

});
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
