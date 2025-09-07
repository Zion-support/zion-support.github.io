<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452


<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { defineConfig, devices } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
import { defineConfig, devices  } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
import { defineConfig, devices } from '@playwright/test',export default defineConfig({testDir:'tests/e2e',use:{baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}export default defineConfig({testDir:'tests/e2e',use:{baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace:'on-first-retry'},projects:[;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}



<<<<<<< HEAD
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace:'on-first-retry'},;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  projects:[;
    {name:'Desktop Chrome';
      use:{browserName:'chromium';
        channel:'chrome'}
    }
    {name:'Desktop Firefox';
      use:{browserName:'firefox'}
    }
    {name:'Desktop Safari';
      use:{browserName:'webkit'}
    }{name:'Mobile Chrome';
      use:{browserName:'chromium';{name:'Mobile Chrome';
      use:{browserName:'chromium';
  ],reporter:[;
    ['list'],['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
}),import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace: 'on-first-retry';
  },import { defineConfig, devices } from '@playwright/test';  },ursor/fix-lint-push-and-merge-to-main-ae4e;
      use:{;
        browserName:'webkit'}
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
  ]
  ]
        browserName: "webkit",
        ...devices["iPhone 12"]
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
<<<<<<< HEAD
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  ]
  ]
        browserName: "webkit",
        ...devices["iPhone 12"]}}],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]});        browserName: 'chromium';
=======
  ]});        browserName: 'chromium';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
=======
]

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
]
  testDir: 'tests/e2e',;
  use: {;
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace: 'on-first-retry'},;
  projects: [;
    {name: "Desktop Chrome",use: {browserName: 'chromium',channel: 'chrome';
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: "Desktop Firefox",use: {browserName: 'firefox';
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: "Desktop Safari",use: {browserName: 'webkit';
      }
    }
      }    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: "Mobile Chrome",use: {browserName: 'chromium',...devices['Pixel 5'];
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: "Mobile Safari",use: {browserName: 'webkit',...devices['iPhone 12'];
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
    {name:'Mobile Chrome';
      use:{browserName:'chromium';];
        browserName: "webkit",...devices["iPhone 12"];
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];
  ];
        browserName: "webkit",...devices["iPhone 12"];
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];
  ];
        browserName: "webkit",...devices["iPhone 12"]}}],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]})browserName: 'chromium';
        channel: 'chrome'}
    }{name: 'Desktop Firefox';
      use: {browserName: 'firefox'}
    }{name: 'Desktop Safari';
      use: {browserName: 'webkit'}
    }{name: 'Mobile Chrome';
      use: {browserName: 'chromium';trace: 'on-first-retry';
  }
  projects: [;
import { define_config, devices  } from '@playwright / test';
import { define_config, devices } from '@playwright / test',export default define_config ({test_dir:'tests / e2e',use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace:'on - first - retry'},export default define_config ({test_dir:'tests / e2e';
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace:'on - first - retry'}projects:[;
    {name:'Desktop Chrome',use:{browser_name:'chromium',channel:'chrome'}
    },{name:'Desktop Firefox',use:{browser_name:'firefox'}
    },{name:'Desktop Safari',use:{browser_name:'webkit'}
    },{name:'Mobile Chrome',use:{browser_name:'chromium',...devices['Pixel 5']}
    },{name:'Mobile Safari',use:{browser_name:'webkit',...devices['i_phone 12']}
    }
  ],reporter:[;];
];
];
  testDir: 'tests/e2e',use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace: 'on-first-retry'},projects: [;
    {name: 'Desktop Chrome',use: {browserName: 'chromium',channel: 'chrome'  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
    },{name: 'Desktop Firefox',use: {browserName: 'firefox'  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
    },{name: 'Desktop Safari',use: {browserName: 'webkit'  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
    },{name: 'Mobile Chrome',use: {browserName: 'chromium',...devices['Pixel 5']  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
    },{name: 'Mobile Safari',use: {browserName: 'webkit',...devices['iPhone 12']  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
      } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  ],reporter: [;['list'];{name: "Desktop Chrome";
      use: {browser_name: 'chromium',channel: 'chrome';['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
})import { defineConfig, devices  } from '@playwright/test';
  ],;
  reporter: [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    ['list'];

    {
      name: "Desktop Chrome"
      use: {

        browser_name: 'chromium',
        channel: 'chrome';

<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
})import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace: 'on-first-retry';
  }
  projects: [;
    {name: "Desktop Chrome";
      use: {}
      use: {browserName: 'chromium';
        channel: 'chrome';
}
    }
    {name: "Desktop Firefox";
      use: {browserName: 'firefox';
        browser_name: 'firefox';
}
    }
    {name: "Desktop Safari";
      use: {browserName: 'webkit';
        browser_name: 'webkit';
}
    }
    {name: "Mobile Chrome";
      use: {export default defineConfig({testDir: 'tests/e2e';
  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry'},projects: [;
    {name: 'Desktop Chrome';
      use: {browserName: 'chromium';
        channel: 'chrome'}
    },{name: "Desktop Firefox",use: {browserName: 'firefox';
      }
    },{name: "Desktop Safari",use: {browserName: 'webkit';
      }
    },{name: "Mobile Chrome",use: {browserName: 'chromium',...devices['Pixel 5'];
      }
    },{name: "Mobile Safari",use: {browserName: 'webkit',...devices['iPhone 12'];
  projects: [
    {
      name: "Desktop Chrome"
      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        browserName: 'chromium'
        channel: 'chrome'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
        browserName: 'chromium'
        channel: 'chrome'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
        browserName: 'chromium'
        channel: 'chrome'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

        browserName: 'chromium'
        channel: 'chrome'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
    }
    {
      name: "Desktop Firefox"

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export default defineConfig({
  testDir: 'tests/e2e';
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry'},
  projects: [
    {
      name: 'Desktop Chrome';
      use: {
<<<<<<< HEAD
=======
      use: {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        browserName: 'chromium';
        channel: 'chrome'}
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'}},
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'}},
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']}},
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']}}],
  reporter: [
    ['list'],
<<<<<<< HEAD
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
origin/cursor/automate-test-improve-and-merge-code-2533
      use: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
        browser_name: 'firefox';
        browser_name: 'firefox';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        browserName: 'firefox'


        browser_name: 'firefox';
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
    }
    {
      name: 'Desktop Safari';
origin/cursor/automate-test-improve-and-merge-code-2533
      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
        browser_name: 'webkit';
        browser_name: 'webkit';
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]],

      use: {
<<<<<<< HEAD
        browser_name: 'firefox';
        browser_name: 'firefox';
=======



        browser_name: 'firefox';


        browser_name: 'firefox';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
    }
    {

      name: "Desktop Safari"

      use: {
<<<<<<< HEAD
        browser_name: 'webkit';
        browser_name: 'webkit';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



        browser_name: 'webkit';


        browser_name: 'webkit';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
    }
    {

      name: "Mobile Chrome"
      use: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        browserName: 'webkit'


        browser_name: 'webkit';
origin/cursor/expand-services-advertise-and-build-project-c28b

}
    }
    {
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

        browser_name: 'chromium',
        ...devices['Pixel 5'];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        browserName: 'chromium'
        ...devices['Pixel 5']
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        browserName: 'chromium'
        ...devices['Pixel 5']


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

        browserName: 'chromium'
        ...devices['Pixel 5']

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
    }
    {
      name: "Mobile Safari"
      use: {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        browser_name: 'webkit',
        ...devices['i_phone 12'];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

=======




origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

<<<<<<< HEAD
<<<<<<< HEAD
=======


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        browserName: 'webkit'
        ...devices['iPhone 12']
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
  ],use: {browser_name: 'firefox';
        browserName: 'firefox';
        browser_name: 'firefox';}
    }
    {name: "Desktop Safari";
      name: 'Desktop Safari';use: {browser_name: 'webkit';
        browserName: 'webkit';
        browser_name: 'webkit';}
    }
    {name: "Mobile Chrome";
      use: {browser_name: 'chromium',...devices['Pixel 5'];browserName: 'chromium';
        ...devices['Pixel 5'];
        browser_name: 'chromium',...devices['Pixel 5'];browserName: 'chromium';
        ...devices['Pixel 5'];
}
    }
    {name: "Mobile Safari";
      use: {browser_name: 'webkit',...devices['i_phone 12'];}}['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
})['list'];['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
})ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
  ],reporter: [;
    ['list'],['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];browserName: 'webkit';
        ...devices['iPhone 12'];
      }}
  ];
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
})ursor/fix-lint-push-and-merge-to-main-ae4e;
      name: 'Mobile Chrome';
      use: {browserName: 'chromium';
        ...devices['Pixel 5']}
    },{name: 'Mobile Safari';
      use: {browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
})['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }];
];
  ]
  reporter: [
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
ursor/fix-lint-push-and-merge-to-main-ae4e
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======









>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
