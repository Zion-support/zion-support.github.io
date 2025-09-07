import { defineConfig } from 'cypress;
;
export default define_config ({,
  e2e: {,

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
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
});
origin/chore/fix-build-nav-links
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    setupNodeEvents(on, config) {,
      // implement node event listeners here
    }
}),
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/fix-lint-push-and-merge-to-main-ae4e
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
    setupNodeEvents(on, config) {
})
origin/main
