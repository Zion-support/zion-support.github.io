
<<<<<<< HEAD

import { defineConfig, devices } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;'
  testDir:'tests/e2e',;
  use:{;'
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';'
    trace:'on-first-retry'}



<<<<<<< HEAD
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace:'on-first-retry'},;

origin/cursor/expand-services-advertise-and-build-project-c28b
  projects:[;
=======

  projects:[;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    {name:'Desktop Chrome';
      use:{;'
        browserName:'chromium';'
        channel:'chrome'}
    }'
    {name:'Desktop Firefox';
      use:{;'
        browserName:'firefox'}
    }'
    {name:'Desktop Safari';
      use:{;'
        browserName:'webkit'}
    }
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
    {name:'Mobile Chrome';
      use:{;'
        browserName:'chromium';
<<<<<<< HEAD
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
    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'
      }
    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
      }
    }}    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
      }
    }}    },
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
  ]
        browserName: "webkit",
        ...devices["iPhone 12"]}}],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]});        browserName: 'chromium';
=======

  ]
  ]
        browserName: "webkit","
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: ['
    ['list'],'
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],'
  ],});        browserName: 'chromium';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        channel: 'chrome'}
    };
    {'
      name: 'Desktop Firefox';
      use: {'
        browserName: 'firefox'}
    };
    {'
      name: 'Desktop Safari';
      use: {'
        browserName: 'webkit'}
    };
    {'
      name: 'Mobile Chrome';
      use: {'
        browserName: 'chromium';
<<<<<<< HEAD
    trace: 'on-first-retry'
  }
  projects: [
import { define_config, devices } from '@playwright / test';
import { define_config, devices } from '@playwright / test';
;
export default define_config ({
  test_dir:'tests / e2e';
  use:{
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace:'on - first - retry'};
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
origin/cursor/expand-services-advertise-and-build-project-c28b
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ...devices['Pixel 5']}
    },
    {'
      name:'Mobile Safari',
      use:{'
        browser_name:'webkit','
        ...devices['i_phone 12']}
    }
  ],
  reporter:[;
<<<<<<< HEAD
]
]
=======

]'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  testDir: 'tests/e2e',;
  use: {;'
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;'
    trace: 'on-first-retry'},;
  projects: [;
    {;'
      name: 'Desktop Chrome',;
      use: {;'
        browserName: 'chromium',;'
        channel: 'chrome'  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;'
      name: 'Desktop Firefox',;
      use: {;'
        browserName: 'firefox'  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;'
      name: 'Desktop Safari',;
      use: {;'
        browserName: 'webkit'  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;'
      name: 'Mobile Chrome',;
      use: {;'
        browserName: 'chromium',;'
        ...devices['Pixel 5']  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;'
      name: 'Mobile Safari',;
      use: {;'
        browserName: 'webkit',;'
        ...devices['iPhone 12']  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  reporter: [;
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    ['list'];

    {"
      name: "Desktop Chrome"
      use: {}
'
        browser_name: 'chromium','
        channel: 'chrome';

<<<<<<< HEAD
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
});import { defineConfig, devices } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000'
=======
'
    ['list'];'
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];"
});import { defineConfig, devices } from "@playwright/test";'
import { defineConfig, devices } from '@playwright/test';'
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    trace: 'on-first-retry'
  }
  projects: []
    {"
      name: "Desktop Chrome"
<<<<<<< HEAD
      use: {
        browserName: 'chromium'
        channel: 'chrome'
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      use: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    }
    {"
      name: "Desktop Firefox"

<<<<<<< HEAD
export default defineConfig({
  testDir: 'tests/e2e';
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry'},
  projects: [
    {
      name: 'Desktop Chrome';
      use: {
        browserName: 'chromium';
        channel: 'chrome'}
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox',
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
origin/cursor/automate-test-improve-and-merge-code-2533
      use: {
        browser_name: 'firefox';
        browserName: 'firefox'
        browser_name: 'firefox';
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      use: {}
'
        browser_name: 'firefox';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    }
    {}
"
      name: "Desktop Safari"

<<<<<<< HEAD
      name: 'Desktop Safari';
origin/cursor/automate-test-improve-and-merge-code-2533
      use: {
        browser_name: 'webkit';
        browserName: 'webkit'
        browser_name: 'webkit';
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      use: {}
'
        browser_name: 'webkit';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    }
    {}
"
      name: "Mobile Chrome"
<<<<<<< HEAD
      use: {
origin/cursor/expand-services-advertise-and-build-project-c28b

        browser_name: 'chromium',
        ...devices['Pixel 5'];

        browserName: 'chromium'
        ...devices['Pixel 5']
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      use: {}
'
        browser_name: 'chromium','
        ...devices['Pixel 5'];






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    }
    {"
      name: "Mobile Safari"
<<<<<<< HEAD
      use: {

origin/cursor/expand-services-advertise-and-build-project-c28b
        browser_name: 'webkit',
=======
      use: {}
'
        browser_name: 'webkit','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ...devices['i_phone 12'];

      }

    }
'
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






'
    ['list'];
'
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======







>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ],
  reporter: [;'
    ['list'],'
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
        browserName: 'webkit'
        ...devices['iPhone 12']
      }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
ursor/fix-lint-push-and-merge-to-main-ae4e
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';
        ...devices['Pixel 5']}
    },
    {
      name: 'Mobile Safari';
      use: {
        browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ]
  reporter: [
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
    ['list']
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
]
origin/cursor/automate-test-improve-and-merge-code-2533
=======




'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
