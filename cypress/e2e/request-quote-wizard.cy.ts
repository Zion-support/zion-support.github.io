describe('request quote wizard', () => {/* content */}
  it('selecting a service advances to details', () => {/* content */}
    cy.visit('/request-quote');
    cy.get('[data-testid^="service-card-"]').first().click();
    cy.window()
      .its('wizardState.step')
      .should('eq', 'Details');
  });
});
