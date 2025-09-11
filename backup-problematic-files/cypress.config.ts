
<<<<<<< HEAD

=======
import { define_config } from 'cypress;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export default define_config ({,
  e2e: {,


<<<<<<< HEAD

import { defineConfig } from 'cypress;
import { defineConfig } from 'cypress;
;
export default define_config ({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    supportFile: cypress/support/e2e.ts',
supportFile: cypress/support/e2e.ts',;
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
import { defineConfig } from 'cypress;
;
export default defineConfig({,";
  e2e: {,'
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e.ts',
=======
=======

export default defineConfig({,
  e2e: {,
  baseUrl: 'http://localhost:3000',
    supportFile: cypress/support/e2e && e2e.ts',
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e && e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36






    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
ursor/fix-lint-push-and-merge-to-main-ae4e
    viewportWidth: 1280,
    viewportHeight: 720,
  base_url: 'http://localhost:3000',
support_file: cypress / support / e2e.ts',
import { define_config } from 'cypress'; export default define_config ({ e2e: { base_url: 'http: support_file: 'cypress / support / e2e.ts', spec_pattern: 'cypress / e2e*.cy.{js, jsx, ts, tsx}', viewport_width: 1280, viewport_height: 720, video: false, screenshotOnRunFailure: true, defaultCommandTimeout: 10000, request_timeout: 10000, response_timeout: 10000, setupNodeEvents () { }, }, component: { dev_server: { framework: 'react', bundler: 'vite', }, }, });
    spec_pattern: 'cypress / e2e/**/*.cy.{js, jsx, ts, tsx}',
    viewport_width: 1280,
    viewport_height: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    request_timeout: 10000,
    response_timeout: 10000,
    pageLoadTimeout: 30000,
    retries: {,
      run_mode: 2,
      open_mode: 0;
    },




    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }




import { defineConfig } from 'cypress;
<<<<<<< HEAD
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
origin/chore/fix-build-nav-links
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
  }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}),
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
});
origin/chore/fix-build-nav-links
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import { defineConfig } from 'cypress;
}),
}),
ursor/fix-lint-push-and-merge-to-main-ae4e
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
export default defineConfig({
  e2e: {
  baseUrl: 'http://localhost:3000'
supportFile: cypress/support/e2e.ts'
import { defineConfig } from 'cypress'; export default defineConfig({ e2e: { baseUrl: 'http: supportFile: 'cypress/support/e2e.ts',specPattern: 'cypress/e2e*.cy.{js,jsx,ts,tsx}',viewportWidth: 1280,viewportHeight: 720,video: false,screenshotOnRunFailure: true,defaultCommandTimeout: 10000,requestTimeout: 10000,responseTimeout: 10000,setupNodeEvents() { },},component: { devServer: { framework: 'react',bundler: 'vite',},},});
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    viewportWidth: 1280
    viewportHeight: 720
    video: false
    screenshotOnRunFailure: true
    defaultCommandTimeout: 10000
    requestTimeout: 10000
    responseTimeout: 10000
    pageLoadTimeout: 30000
    retries: {
      runMode: 2
      openMode: 0
    }
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
<<<<<<< HEAD


origin/main
=======

    setupNodeEvents (on, config) {,
      // implement node event listeners here;
    }
  }
}),

=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
