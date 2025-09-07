



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
pr-12325
;
import { defineConfig, devices  } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';}
import { defineConfig, devices } from '@playwright/test',export default defineConfig({testDir: 'tests/e2e';,}
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';}
    trace: 'on-first-retry';}export default defineConfig({testDir: 'tests/e2e';,}
  use: {baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,trace: 'on-first-retry';},projects:[;

;
export default defineConfig({;
  testDir: 'tests/e2e';,;
  use:{;}
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';}
    trace: 'on-first-retry';}



export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace:'on-first-retry'},;




  testDir: 'tests/e2e';,;
  use:{;}
    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,;}
    trace: 'on-first-retry';},;

origin/cursor/expand-services-advertise-and-build-project-c28b
  projects:[;
    {name:'Desktop Chrome';}
      use:{browserName:'chromium';}
        channel: 'chrome';}
    }
    {name:'Desktop Firefox';}
      use: {browserName:'firefox';}
    }
    {name:'Desktop Safari';}
      use: {browserName:'webkit';}
    }{name:'Mobile Chrome';
      use:{browserName:'chromium';{name:'Mobile Chrome';
      use:{browserName:'chromium';}
  ],reporter:[;}
    ['list'],['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]];
}),import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,trace: 'on-first-retry';
  },import { defineConfig, devices } from '@playwright/test';  },ursor/fix-lint-push-and-merge-to-main-ae4e;
      use:{;}
        browserName: 'webkit';}
    }





origin/cursor/expand-services-advertise-and-build-project-c28b

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
  ],;
  reporter:[;
    ['list'],;
    ['html', { outputFolder: 'playwright-logs/html-report';, open: 'never' ;}]];
}),;import { defineConfig, devices } from "@playwright/test";
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,
    trace: 'on-first-retry';
  },
import { defineConfig, devices } from '@playwright/test';  };
ursor/fix-lint-push-and-merge-to-main-ae4e
  projects: [
    {
      name: "Desktop Chrome";,
      use: {
        browserName: 'chromium';,
        channel: 'chrome';
      }
    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Firefox";,
      use: {
        browserName: 'firefox';
      }
    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Safari";,
      use: {
        browserName: 'webkit';
      }
    }}    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Mobile Chrome";,
      use: {
        browserName: 'chromium';,
        ...devices['Pixel 5']
      }
    }}    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Mobile Safari";,
      use: {
        browserName: 'webkit';,
        ...devices['iPhone 12']
  ]
  ]
        browserName: \"webkit\";,}
        ...devices[\"iPhone 12\"]}
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report';, open: 'never' ;}]
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';





  ]
  use: {;,
  baseURL:process.env.PLAYWRIGHT_BASE_URL |'http: //localhost:3000';',
  trace: 'on-first-retry';}
  baseURL: process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,;
    trace: 'on-first-retry';},;
  projects:[;
    {name: 'Desktop Chrome';',
  use:{;
        browserName: 'chromium';',
  channel: 'chrome';}
    }
    {name: 'Desktop Firefox';',
        browserName: 'firefox';}
    {name: 'Desktop Safari';',
        browserName: 'webkit';}

    {name: 'Mobile Chrome';',
        browserName:'chromium';']
pr-12325
  ]
        browserName: "webkit";,
        ...devices["iPhone 12"]}}],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report';, open: 'never' ;}]]});        browserName: 'chromium';
    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]
  ]});        browserName: 'chromium';
        channel: 'chrome';}
    };
    {
      name: 'Desktop Firefox';}
      use: {;}
        browserName: 'firefox';}
    };
    {
      name: 'Desktop Safari';}
      use: {;}
        browserName: 'webkit';}
    };
    {
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';

    trace: 'on-first-retry'
        browserName: 'chromium';}
    trace: 'on-first-retry';}
  }
  projects: [
import { define_config, devices } from '@playwright / test';
;
export default define_config ({
  test_dir:'tests / e2e';
  use:{
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on - first - retry';};
  test_dir: 'tests / e2e';,
  use: {;}
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,}
    trace: 'on - first - retry';},
  projects:[;
    {
      name: 'Desktop Chrome';,
  use: {;}
        browser_name: 'chromium';,}
        channel: 'chrome';}
    },
    {
      name: 'Desktop Firefox';,}
  use: {;}
        browser_name: 'firefox';}
    },
    {
      name: 'Desktop Safari';,}
  use: {;}
        browser_name: 'webkit';}
    },
    {
      name: 'Mobile Chrome';,
      use:{
        browser_name:'chromium',





        browser_name: 'chromium';,
origin/cursor/expand-services-advertise-and-build-project-c28b
      name: 'Mobile Chrome';,
  use: {;}
        browser_name: 'chromium';,}
        ...devices['Pixel 5']}
    },
    {
      name: 'Mobile Safari';,
  use: {;}
        browser_name: 'webkit';,}
        ...devices['i_phone 12']}
    }
  ],
  reporter:[;
]




]

]
  testDir: 'tests/e2e';,;
  use: {;
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,;
      name: 'Desktop Firefox';',
  use: {
        browserName: 'firefox';}
      name: 'Desktop Safari';',
        browserName: 'webkit';}
      name: 'Mobile Chrome';',
  trace: 'on-first-retry
  projects: [
export default define_config ({
  test_dir: 'tests / e2e';,
  use:{
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on - first - retry';};
      name: 'Desktop Chrome';,
      use: {;,
  browser_name: 'chromium';,
    },
      name: 'Desktop Firefox';,
  browser_name: 'firefox';}
      name: 'Desktop Safari';,
  browser_name: 'webkit';}
      name: 'Mobile Chrome';,
  browser_name: 'chromium';,']
        ...devices['Pixel 5']}
      name: 'Mobile Safari';,
  browser_name: 'webkit';,
        ...devices['i_phone 12']}
  ],
  reporter:[;]
  testDir: 'tests/e2e';,;
  baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,;
pr-12325
]
  testDir: 'tests/e2e';,;
  use: {;}
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,;}
    trace: 'on-first-retry';},;
  projects: [;
    {name: \"Desktop Chrome\";,use: {browserName: 'chromium';,}
  channel: 'chrome';}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Desktop Firefox\";,use: {browserName: 'firefox';}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Desktop Safari\";,use: {browserName: 'webkit';}
      }
    }
      }    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Mobile Chrome\";,use: {browserName: 'chromium';,...devices['Pixel 5'];}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Mobile Safari\";,use: {browserName: 'webkit';,...devices['iPhone 12'];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}];
    {name:'Mobile Chrome';
      use:{browserName:'chromium';];}
        browserName: \"webkit\";,...devices[\"iPhone 12\"];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];
  ];}
        browserName: \"webkit\";,...devices[\"iPhone 12\"];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];}
  ];}
        browserName: \"webkit\";,...devices[\"iPhone 12\"]}}],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]]})browserName: 'chromium';
        channel: 'chrome';}
    }{name: 'Desktop Firefox';}
      use: {browserName: 'firefox';}
    }{name: 'Desktop Safari';}
      use: {browserName: 'webkit';}
    }{name: 'Mobile Chrome';}
      use: {browserName: 'chromium';trace: 'on-first-retry';}
  }
  projects: [;
import { define_config, devices  } from '@playwright / test';
import { define_config, devices } from '@playwright / test',export default define_config ({test_dir: 'tests / e2e';,}
  use: {baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,trace: 'on - first - retry';},export default define_config ({test_dir:'tests / e2e';}
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';}
    trace: 'on - first - retry';}projects:[;
    {name: 'Desktop Chrome';,
  use: {browser_name: 'chromium';,}
  channel: 'chrome';}
    },{name: 'Desktop Firefox';,}
  use: {browser_name:'firefox';}
    },{name: 'Desktop Safari';,}
  use: {browser_name:'webkit';}
    },{name: 'Mobile Chrome';,}
  use: {browser_name:'chromium';,...devices['Pixel 5']}
    },{name: 'Mobile Safari';,}
  use: {browser_name:'webkit';,...devices['i_phone 12']}
    }
  ],reporter:[;];
];
];
  testDir: 'tests/e2e';,
  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';,trace: 'on-first-retry';},projects: [;
    {name: 'Desktop Chrome';,
  use: {browserName: 'chromium';,}
  channel: 'chrome'  ;} catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
    },{name: 'Desktop Firefox';,}
  use: {browserName: 'firefox'  ;} catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
    },{name: 'Desktop Safari';,}
  use: {browserName: 'webkit'  ;} catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
    },{name: 'Mobile Chrome';,}
  use: {browserName: 'chromium';,...devices['Pixel 5']  } catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
    },{name: 'Mobile Safari';,}
  use: {browserName: 'webkit';,...devices['iPhone 12']  } catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
      } catch (error) {console.error(\"Error: \";, error)return res.status(500).json({ error: \"Internal server error\" ;})}
}
  ],reporter: [;['list'];{name: \"Desktop Chrome\";
      use: {browser_name: 'chromium';,}
  channel: 'chrome';['list'];}
    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]];
})import { defineConfig, devices  } from '@playwright/test';
  ],;
  reporter: [;





origin/cursor/expand-services-advertise-and-build-project-c28b
    ['list'];

    {
      name: \"Desktop Chrome\"
      use: {

        browser_name: 'chromium';,
        channel: 'chrome';






    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report';, open: 'never' ;}]];
});import { defineConfig, devices } from "@playwright/test";
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000'
    trace: 'on-first-retry'
  channel: 'chrome';
}
    ['list'];}
    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]];
})import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace: 'on-first-retry';
  }
  projects: [;
    {name: \"Desktop Chrome\";}
      use: {;}
      use: {browserName: 'chromium';}
        channel: 'chrome';}
}
    }
    {name: \"Desktop Firefox\";
      use: {browserName: 'firefox';}
        browser_name: 'firefox';}
}
    }
    {name: \"Desktop Safari\";
      use: {browserName: 'webkit';}
        browser_name: 'webkit';}
}
    }
    {name: \"Mobile Chrome\";
      use: {export default defineConfig({testDir: 'tests/e2e';}
  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';}
    trace: 'on-first-retry';},projects: [;
    {name: 'Desktop Chrome';}
      use: {browserName: 'chromium';}
        channel: 'chrome';}
    },{name: \"Desktop Firefox\";,use: {browserName: 'firefox';}
      }
    },{name: \"Desktop Safari\";,use: {browserName: 'webkit';}
      }
    },{name: \"Mobile Chrome\";,use: {browserName: 'chromium';,...devices['Pixel 5'];}
      }
    },{name: \"Mobile Safari\";,use: {browserName: 'webkit';,...devices['iPhone 12'];
  projects: [
    {
      name: \"Desktop Chrome\"
      use: {
        browserName: 'chromium'
        channel: 'chrome'







origin/cursor/expand-services-advertise-and-build-project-c28b
        browserName: 'chromium';,}
  channel: 'chrome';}
}
    }
    {
      name: \"Desktop Firefox\"

export default defineConfig({
  testDir: 'tests/e2e';
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry';},
  projects: [
    {
      name: 'Desktop Chrome';

    },
    {

    {

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
      use: {browserName: 'chromium';}
        ...devices['Pixel 5']}
    },{name: 'Mobile Safari';}
      use: {browserName: 'webkit';}
        ...devices['iPhone 12']}
    }
  ];
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]];
})['list'];
    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}];
];
  ]
  reporter: [

    ['html', { outputFolder: 'playwright-logs/html-report';,}
  open: 'never' ;}]]
});


