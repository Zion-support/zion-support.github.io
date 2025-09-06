<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';

  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { defineConfig, devices } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    },
      }    },
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      }
    },
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    },
      }    },
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
<<<<<<< HEAD

=======
<<<<<<< HEAD
      }
    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    },
      }    },
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        ...devices['Pixel 5']}
    }
    {name:'Mobile Safari';
      use:{;
        browserName:'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter:[;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

]

=======
=======
]
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

    ['list'];

=======
    ['list'];

    {
      name: "Desktop Chrome"
      use: {

        browser_name: 'chromium',
        channel: 'chrome';

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        browserName: 'chromium'
        channel: 'chrome'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
    }
    {
      name: "Desktop Firefox"

      use: {
<<<<<<< HEAD
        browser_name: 'firefox';
=======
        browserName: 'firefox'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
    }
    {

      name: "Desktop Safari"

      use: {
<<<<<<< HEAD
        browser_name: 'webkit';
=======
        browserName: 'webkit'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
    }
    {

      name: "Mobile Chrome"
      use: {
<<<<<<< HEAD

        browser_name: 'chromium',
        ...devices['Pixel 5'];

=======
        browserName: 'chromium'
        ...devices['Pixel 5']
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
    }
    {
      name: "Mobile Safari"
      use: {
<<<<<<< HEAD

        browser_name: 'webkit',
        ...devices['i_phone 12'];

      }

    }

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

=======


    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
