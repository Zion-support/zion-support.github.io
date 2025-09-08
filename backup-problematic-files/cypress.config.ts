
;
export default define_config ({,
  e2e: {,



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



    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: cypress/support/e2e.ts',    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
ursor/fix-lint-push-and-merge-to-main-ae4e
    viewportWidth: 1280,
    viewportHeight: 720,






<

>



      // implement node event listeners here
    }
  }
})



