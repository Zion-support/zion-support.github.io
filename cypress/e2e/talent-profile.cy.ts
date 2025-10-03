describe('talent profile page', () => {/* content */}
  it('shows the talent name', () => {/* content */}
    cy.visit('/talent/talent-001');
    cy.contains('Alexandra Chen');
  });

  it('displays skills for first talent slug', () => {/* content */}
    cy.visit('/talent/t-001');
    cy.contains('Alexandra Chen');
    cy.contains('Machine Learning');
  });
});
