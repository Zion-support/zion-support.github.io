describe('purchase flow', () => {/* content */}
  it('completes checkout with Stripe test mode', () => {/* content */}
    cy.intercept('POST', '/api/checkout_sessions', {/* content */}
      statusCode: 200,
      body: { sessionId: 'sess_test' },
    }).as('createSession');

    cy.visit('/checkout', {/* content */}
      onBeforeLoad(win) {/* content */}
        win.Stripe = function () {/* content */}
          return {/* content */}
            redirectToCheckout: cy.stub().as('redirect'),
          } as any;
        };
      },
    });

    cy.contains('Buy Now').click();
    cy.wait('@createSession');
    cy.get('@redirect').should('have.been.called');
  });
});
