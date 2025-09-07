<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
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
      name: 'Desktop Firefox';
import { defineConfig, devices } from '@playwright/test';

;
import { defineConfig, devices  } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';}
import { defineConfig, devices } from '@playwright/test',export default defineConfig({testDir: 'tests/e2e'}
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';}
    trace:'on-first-retry'}export default defineConfig({testDir: 'tests/e2e'}
  use:{baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace:'on-first-retry'},projects:[;

=======

<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';

import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
>>>>>>> merged-prs-20250907-203621
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
<<<<<<< HEAD
  use:{;}
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';}
    trace:'on-first-retry'}

export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;}
    baseURL:process && process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;}
    trace:'on-first-retry'},;
  projects:[;
    {;
      name:'Desktop Chrome',;
      use:{;
        browserName:'chromium',;
        channel:'chrome'}
    }
    {name:'Desktop Firefox';}
      use:{browserName:'firefox'}
    }
    {name:'Desktop Safari';}
      use:{browserName:'webkit'}
    }{name:'Mobile Chrome';
      use:{browserName:'chromium';{name:'Mobile Chrome';
      use:{browserName:'chromium';}
  ],reporter:[;}
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open:'never' }]];
}),import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace: 'on-first-retry';
  },import { defineConfig, devices } from '@playwright/test';  },ursor/fix-lint-push-and-merge-to-main-ae4e;
      use:{;}
        browserName:'webkit'}
    },;
    {;
      name:'Mobile Chrome',;
      use:{;
        browserName:'chromium';
  ]
  ]
        browserName: \"webkit\"}
        ...devices[\"iPhone 12\"]}
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]
  ]});        browserName: 'chromium';
        channel: 'chrome'}
    };
    {
      name: 'Desktop Firefox';}
      use: {}
        browserName: 'firefox'}
    };
    {
      name: 'Desktop Safari';}
      use: {}
        browserName: 'webkit'}
    };
    {
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';}
    trace: 'on-first-retry'}
  }
  projects: [
import { define_config, devices } from '@playwright / test';
import { define_config, devices } from '@playwright / test';
;
export default define_config ({
  test_dir: 'tests / e2e';
  use:{}
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000'}
    trace:'on - first - retry'};
  projects:[;
    {
      name: 'Desktop Chrome',
  use:{}
        browser_name:'chromium'}
        channel:'chrome'}
    },
    {
      name: 'Desktop Firefox'}
  use:{}
        browser_name:'firefox'}
    },
    {
      name: 'Desktop Safari'}
  use:{}
        browser_name:'webkit'}
    },
    {
      name: 'Mobile Chrome',
  use:{}
        browser_name:'chromium'}
        ...devices['Pixel 5']}
    },
    {
      name: 'Mobile Safari',
  use:{}
        browser_name:'webkit'}
        ...devices['i_phone 12']}
    }
  ],
  reporter:[;
]
  testDir: 'tests/e2e',;
  use: {;}
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;}
    trace: 'on-first-retry'},;
  projects: [;
    {name: \"Desktop Chrome\",use: {browserName: 'chromium'}
  channel: 'chrome';}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Desktop Firefox\",use: {browserName: 'firefox';}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Desktop Safari\",use: {browserName: 'webkit';}
      }
    }
      }    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Mobile Chrome\",use: {browserName: 'chromium',...devices['Pixel 5'];}
      }
    }
      }    },ursor/fix-lint-push-and-merge-to-main-ae4e;
      }
    }}    },ursor/fix-lint-push-and-merge-to-main-ae4e;
    {name: \"Mobile Safari\",use: {browserName: 'webkit',...devices['iPhone 12'];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
    {name:'Mobile Chrome';
      use:{browserName:'chromium';];}
        browserName: \"webkit\",...devices[\"iPhone 12\"];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];
  ];}
        browserName: \"webkit\",...devices[\"iPhone 12\"];}
      }
    }
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
  ]})browserName: 'chromium';
    {name:'Mobile Chrome';
      use:{browserName:'chromium';
  ];}
  ];}
        browserName: \"webkit\",...devices[\"iPhone 12\"]}}],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]]})browserName: 'chromium';
        channel: 'chrome'}
    }{name: 'Desktop Firefox';}
      use: {browserName: 'firefox'}
    }{name: 'Desktop Safari';}
      use: {browserName: 'webkit'}
    }{name: 'Mobile Chrome';}
      use: {browserName: 'chromium';trace: 'on-first-retry';}
  }
  projects: [;
import { define_config, devices  } from '@playwright / test';
import { define_config, devices } from '@playwright / test',export default define_config ({test_dir: 'tests / e2e'}
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace:'on - first - retry'},export default define_config ({test_dir:'tests / e2e';}
  use:{baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';}
    trace:'on - first - retry'}projects:[;
    {name: 'Desktop Chrome',
  use:{browser_name: 'chromium'}
  channel:'chrome'}
    },{name: 'Desktop Firefox'}
  use:{browser_name:'firefox'}
    },{name: 'Desktop Safari'}
  use:{browser_name:'webkit'}
    },{name: 'Mobile Chrome'}
  use:{browser_name:'chromium',...devices['Pixel 5']}
    },{name: 'Mobile Safari'}
  use:{browser_name:'webkit',...devices['i_phone 12']}
    }
  ],reporter:[;];
];
];
  testDir: 'tests/e2e',
  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',trace: 'on-first-retry'},projects: [;
    {name: 'Desktop Chrome',
  use: {browserName: 'chromium'}
  channel: 'chrome'  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
    },{name: 'Desktop Firefox'}
  use: {browserName: 'firefox'  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
    },{name: 'Desktop Safari'}
  use: {browserName: 'webkit'  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
    },{name: 'Mobile Chrome'}
  use: {browserName: 'chromium',...devices['Pixel 5']  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
    },{name: 'Mobile Safari'}
  use: {browserName: 'webkit',...devices['iPhone 12']  } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
      } catch (error) {console.error(\"Error:\", error)return res.status(500).json({ error: \"Internal server error\" })}
}
  ],reporter: [;['list'];{name: \"Desktop Chrome\";
      use: {browser_name: 'chromium'}
  channel: 'chrome';['list'];}
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open:'never' }]];
})import { defineConfig, devices  } from '@playwright/test';
  ],;
  reporter: [;
    ['list'];

    {
      name: \"Desktop Chrome\"
      use: {

        browser_name: 'chromium',
  channel: 'chrome';
}
    ['list'];}
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open:'never' }]];
})import { defineConfig, devices  } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace: 'on-first-retry';
  }
  projects: [;
    {name: \"Desktop Chrome\";}
      use: {}
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
    trace: 'on-first-retry'},projects: [;
    {name: 'Desktop Chrome';}
      use: {browserName: 'chromium';}
        channel: 'chrome'}
    },{name: \"Desktop Firefox\",use: {browserName: 'firefox';}
      }
    },{name: \"Desktop Safari\",use: {browserName: 'webkit';}
      }
    },{name: \"Mobile Chrome\",use: {browserName: 'chromium',...devices['Pixel 5'];}
      }
    },{name: \"Mobile Safari\",use: {browserName: 'webkit',...devices['iPhone 12'];
=======
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium'}
  channel: 'chrome'}
}
    }
    {
      name: \"Desktop Firefox\"

      use: {

}
        browserName: 'chromium';}
        channel: 'chrome'}
    },
    {
      name: \"Desktop Firefox\"}
      use: {}
        browserName: 'firefox'}},
    {
      name: \"Desktop Safari\"}
      use: {}
        browserName: 'webkit'}},
    {
      name: \"Mobile Chrome\",
      use: {}
        browserName: 'chromium'}
        ...devices['Pixel 5']}},
    {
      name: \"Mobile Safari\",
      use: {}
        browserName: 'webkit'}
        ...devices['iPhone 12']}}],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]],

=======
        browserName: 'chromium',
        channel: 'chrome'
      }
    },
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Firefox",
>>>>>>> merged-prs-20250907-203621
      use: {
        browserName: 'firefox'
      }
    },
<<<<<<< HEAD
    {
      name: "Desktop Safari",
      use: {
        browser_name: 'webkit';}
        browser_name: 'webkit';}
}
    }
    {

      name: \"Mobile Chrome\"
      use: {

        browser_name: 'chromium',
        ...devices['Pixel 5'];}
}
}
    }
    {
      name: \"Mobile Safari\"
      use: {

        browser_name: 'webkit',
        ...devices['i_phone 12'];

    ['list'];}
}
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]]
});

  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report'}
  open: 'never' }];
];
        browserName: 'webkit'
      }
    },
=======
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
      }
    },
      }    },
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> merged-prs-20250907-203621
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
      }
    },
<<<<<<< HEAD
=======
      }    },
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> merged-prs-20250907-203621
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
<<<<<<< HEAD
  ],reporter: [;
    ['list'],['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
  ],use: {browser_name: 'firefox';}
        browserName: 'firefox';}
        browser_name: 'firefox';}
    }
    {name: \"Desktop Safari\";
      name: 'Desktop Safari';use: {browser_name: 'webkit';}
        browserName: 'webkit';}
        browser_name: 'webkit';}
    }
    {name: \"Mobile Chrome\";
      use: {browser_name: 'chromium',...devices['Pixel 5'];browserName: 'chromium';
        ...devices['Pixel 5'];
        browser_name: 'chromium',...devices['Pixel 5'];browserName: 'chromium';}
        ...devices['Pixel 5'];}
}
    }
    {name: \"Mobile Safari\";}
      use: {browser_name: 'webkit',...devices['i_phone 12'];}}['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]];
})['list'];['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]];
})ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
  ],reporter: [;
    ['list'],['html', { output_folder: 'playwright - logs / html - report'}
  open: 'never' }];
];browserName: 'webkit';
        ...devices['iPhone 12'];
      }}
  ];
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
];
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]];
})ursor/fix-lint-push-and-merge-to-main-ae4e;
      name: 'Mobile Chrome';
      use: {browserName: 'chromium';}
=======
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
=======

    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]];
})['list'];
    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }];
];
  ]
  reporter: [

    ['html', { outputFolder: 'playwright-logs/html-report'}
  open: 'never' }]]
});
    ['list']
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
]
=======
<<<<<<< HEAD
]
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ['list'];

    {
      name: "Desktop Chrome"
      use: {

        browser_name: 'chromium',
        channel: 'chrome';

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
    }
    {
      name: "Desktop Firefox"

      use: {
<<<<<<< HEAD
        browserName: 'firefox'
=======
        browser_name: 'firefox';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
    }
    {

      name: "Desktop Safari"

      use: {
<<<<<<< HEAD
        browserName: 'webkit'
=======
        browser_name: 'webkit';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
    }
    {

      name: "Mobile Chrome"
      use: {
<<<<<<< HEAD
        browserName: 'chromium'
        ...devices['Pixel 5']
=======

        browser_name: 'chromium',
        ...devices['Pixel 5'];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
    }
    {
      name: "Mobile Safari"
      use: {

<<<<<<< HEAD
=======
        browser_name: 'webkit',
        ...devices['i_phone 12'];

      }

    }

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
