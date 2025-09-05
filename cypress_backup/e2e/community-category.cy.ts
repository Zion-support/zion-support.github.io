<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
describe('community category listing', () => {
  it('displays posts in Getting Hired category', () => {
    cy.visit('/community/getting-hired');
    cy.get('[data-testid="post-card"]')
      .its('length')
      .should('be.greaterThan', 0)})});
=======
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})});
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
describe("community category listing",() => { it("displays posts in Getting Hired category",() => { cy.visit("/community/getting-hired"); cy.get("[data-testid="post-card"]") .its("length") .should("be.greaterThan",0)})});'"'"
=======
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})}
});''
>>>>>>> main
>>>>>>> main
>>>>>>> main
