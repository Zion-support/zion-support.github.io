>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
describe('talent detail page', () => {
  it('loads profile from API', () => {
    cy.intercept('GET', '/api/talent/t-123', {
      "statusCode": 200,
      "body": {
        id: 't-123',
        "full_name": 'Cypress Talent',
        "bio": 'Testing bio',
        "skills": ['Cypress']}}).as('getTalent');
    cy.visit('/talent/t-123');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> main
>>>>>>> main
>>>>>>> main
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:cypress_backup/e2e/talent-detail.cy.ts
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
