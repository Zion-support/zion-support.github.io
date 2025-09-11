
describe('Application E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage', () => {
    cy.get('body').should('be.visible')
  })

  it('should have proper page title', () => {
    cy.title().should('not.be.empty')
  })

  it('should be responsive', () => {
    cy.viewport(375, 667) // Mobile
    cy.get('body').should('be.visible')
    
    cy.viewport(768, 1024) // Tablet
    cy.get('body').should('be.visible')
    
    cy.viewport(1920, 1080) // Desktop
    cy.get('body').should('be.visible')
  })
})
