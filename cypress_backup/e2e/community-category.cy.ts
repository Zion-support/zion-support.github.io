describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})});
describe("community category listing",() => { it("displays posts in Getting Hired category",() => { cy.visit("/community/getting-hired"); cy.get("[data-testid="post-card"]") .its("length") .should("be.greaterThan",0)})});'"'"
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})}
<<<<<<< HEAD
});''
});''
});''
=======
});''
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
