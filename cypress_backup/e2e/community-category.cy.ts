describe('community category listing', () => {
  it('displays posts in Getting Hired category', () => {
    cy.visit('/community/getting-hired');
    cy.get('[data-testid="post-card"]')
      .its('length')
      .should('be.greaterThan', 0)})});
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})});
describe("community category listing",() => { it("displays posts in Getting Hired category",() => { cy.visit("/community/getting-hired"); cy.get("[data-testid="post-card"]") .its("length") .should("be.greaterThan",0)})});'"'"
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})}
<<<<<<< HEAD
});''
=======
<<<<<<< HEAD
});''
=======
});''
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
