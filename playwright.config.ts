<<<<<<< HEAD

=======

const { defineConfig,devices } from "@playwright/test"; export default defineConfig({ testDir: "./tests/e2e"; fullyParallel: true; forbidOnly: !process.env.CI retries: process.env.C,I ? 2 :,0; workers: process.env.CI ? 1 : undefined; reporter: "html"; use: { baseURL: "http: trace: "on-first-retry"}; projects: [{ name: "chromium"; use: { .devices["Desktop Chrom,e"]}},{ name: "firefox"; use: { .devices["Desktop Firefo,x"]}},{ name: "webkit"; use: { .devices["Desktop Safar,i"]}},{ name: "Mobile Chrome"; use: { .devices["Pixe,l 5"]}},{ name: "Mobile Safari"; use: { .devices["iPhon,e 12"]}}]; webServer: { command: "npm run dev"; url: "http: reuseExistingServer: "!process.env.CI"}});'"'"
=======
=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
import React from 'react';
;
interface Playwright.configProps {;
  // Add props here as needed
<<<<<<< HEAD


=======
<<<<<<< HEAD
}
export default function Playwright.config({ }: Playwright.configProps) {
  return (
    <div>
      <h1>Playwright.config</h1>
      <p>This component is currently under development.</p>
    </div>
  );
=======
>>>>>>> origin/main
<<<<<<< HEAD
}}},
}
}}};
=======
<<<<<<< HEAD
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
};
export default function Playwright.config({ }: Playwright.configProps) {;
  return (,
    <div>,
      <h1>Playwright.config</h1>,
      <p>This component is currently under development.</p>,
    </div>)
};
};
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035




import { defineConfig } from '@playwright/test';

}}}
}
}}}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}}}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
}}},}}};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
