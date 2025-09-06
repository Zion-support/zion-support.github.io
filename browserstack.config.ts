<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { defineConfig, devices } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


import { defineConfig, devices } from '@playwright/test',;

export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace:'on-first-retry'},;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'

    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'

    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
<<<<<<< HEAD

=======
      }
    },
      }    },
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']

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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ]
  ]
        browserName: "webkit",
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],});        browserName: 'chromium';
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
]
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
]
  testDir: 'tests/e2e',;
  use: {;
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace: 'on-first-retry'},;
  projects: [;
    {;
      name: 'Desktop Chrome',;
      use: {;
        browserName: 'chromium',;
        channel: 'chrome'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Desktop Firefox',;
      use: {;
        browserName: 'firefox'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Desktop Safari',;
      use: {;
        browserName: 'webkit'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Mobile Chrome',;
      use: {;
        browserName: 'chromium',;
        ...devices['Pixel 5']  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Mobile Safari',;
      use: {;
        browserName: 'webkit',;
        ...devices['iPhone 12']  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  reporter: [;
<<<<<<< HEAD

    ['list'];
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    ['list'];

    {
      name: "Desktop Chrome"
      use: {

        browser_name: 'chromium',
        channel: 'chrome';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
});import { defineConfig, devices } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000'
    trace: 'on-first-retry'
  }
  projects: [
    {
      name: "Desktop Chrome"
      use: {
<<<<<<< HEAD
        browserName: 'chromium'
        channel: 'chrome'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
    }
    {
      name: "Desktop Firefox"

      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        browser_name: 'firefox';
=======
        browserName: 'firefox'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        browser_name: 'firefox';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
    }
    {

      name: "Desktop Safari"

      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        browser_name: 'webkit';
=======
        browserName: 'webkit'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        browser_name: 'webkit';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
    }
    {

      name: "Mobile Chrome"
      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

        browser_name: 'chromium',
        ...devices['Pixel 5'];

<<<<<<< HEAD
=======
        browserName: 'chromium'
        ...devices['Pixel 5']
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
    }
    {
      name: "Mobile Safari"
      use: {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        browser_name: 'webkit',
        ...devices['i_phone 12'];

      }

    }

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

=======

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
