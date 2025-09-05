describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})});
describe("community category listing",() => { it("displays posts in Getting Hired category",() => { cy.visit("/community/getting-hired"); cy.get("[data-testid="post-card"]") .its("length") .should("be.greaterThan",0)})});'"'"
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});''
=======
});''
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
});''
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
});''
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
