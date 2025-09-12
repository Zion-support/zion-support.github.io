export default {
  "e2e": {
    "baseUrl": "http://localhost:3000",
    "supportFile": "cypress/support/e2e.ts",
    "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    "viewportWidth": 1280,
    "viewportHeight": 720
  },
  "component": {
    "devServer": {
      "framework": "react",
      "bundler": "vite"
    }
  }
}