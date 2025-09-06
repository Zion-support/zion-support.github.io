

  projects:[;
    {name:'Desktop Chrome';
      use:{;
        browserName:'chromium';
        channel:'chrome'}
    }
    {name:'Desktop Firefox';
      use:{;
        browserName:'firefox'}
    }
    {name:'Desktop Safari';
      use:{;
        browserName:'webkit'}
    }



    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
  ],;
  reporter:[;
    ['list'],;
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
}),;import { defineConfig, devices } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
  },
import { defineConfig, devices } from '@playwright/test';  },
ursor/fix-lint-push-and-merge-to-main-ae4e

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'

      }
    }
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e

    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'

      }
    }
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e

    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'

      }
    }
      }    }
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e

    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']

      }
    }
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e

    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';

  ]
        browserName: "webkit",
        ...devices["iPhone 12"]
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
  ]});        browserName: 'chromium';
        channel: 'chrome'}
    };
    {
      name: 'Desktop Firefox';
      use: {
        browserName: 'firefox'}
    };
    {
      name: 'Desktop Safari';
      use: {
        browserName: 'webkit'}
    };
    {
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';

    trace: 'on-first-retry'
  }
  projects: [
import { define_config, devices } from '@playwright / test';
import { define_config, devices } from '@playwright / test',
;
export default define_config ({
  test_dir:'tests / e2e',
  use:{
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace:'on - first - retry'},
  projects:[;
    {
      name:'Desktop Chrome',
      use:{
        browser_name:'chromium',
        channel:'chrome'}
    },
    {
      name:'Desktop Firefox',
      use:{
        browser_name:'firefox'}
    },
    {
      name:'Desktop Safari',
      use:{
        browser_name:'webkit'}
    },
    {
      name:'Mobile Chrome',
      use:{
        browser_name:'chromium',


        ...devices['Pixel 5']}
    },
    {
      name:'Mobile Safari',
      use:{
        browser_name:'webkit',
        ...devices['i_phone 12']}
    }
  ],
  reporter:[;

]

}
    }
    {
      name: "Desktop Firefox"

      use: {

        browserName: 'firefox'



}
    }
    {

      name: "Desktop Safari"

      use: {

        browserName: 'webkit'



}
    }
    {

      name: "Mobile Chrome"
      use: {



        browser_name: 'chromium',
        ...devices['Pixel 5'];


        browserName: 'chromium'
        ...devices['Pixel 5']



}
    }
    {
      name: "Mobile Safari"
      use: {



        browser_name: 'webkit',
        ...devices['i_phone 12'];

      }

    }

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});




    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});





  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];

        browserName: 'webkit'
        ...devices['iPhone 12']
      }

    }
  ]
  reporter: [

    ['list']
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
]

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
ursor/fix-lint-push-and-merge-to-main-ae4e






