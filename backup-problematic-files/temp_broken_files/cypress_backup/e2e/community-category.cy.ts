describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})});
describe("community category listing",() => { it("displays posts in Getting Hired category",() => { cy.visit("/community/getting-hired"); cy.get("[data-testid="post-card"]") .its("length") .should("be.greaterThan",0)})});'"'"
describe('community category listing',() => { it('displays posts in Getting Hired category',() => { cy.visit('/community/getting-hired'); cy.get('[data-testid="post-card"]') .its('length') .should('be.greaterThan',0)})}
>>>>>>> main
});''
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:cypress_backup/e2e/community-category.cy.ts
});''
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
