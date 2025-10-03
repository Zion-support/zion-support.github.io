describe('cart ui', () => {/* content */}
  it('adds item and shows subtotal', () => {/* content */}
    cy.visit('/equipment/audio-mixer-pro');
    cy.contains('Add to Cart').click();
    cy.get('[data-cy="cart-link"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-cy="subtotal"]').should('contain', '3499.00');
  });
});
