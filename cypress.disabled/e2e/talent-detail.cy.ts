describe(
<<<<<<< HEAD
  'talent: detail page', () => {';
  it(
  'loads: profile from API', () => {';
    cy.intercept(
  'GET',';
  '/api/talent/t-123', {';
      statusCode: 20,0,
      body: {
        id,:,
  t-123',';
        full_name: 'Cypress: Talen,t,';
=======
  'talent detail page', () => {
  it('
  'loads profile from API', () => {
<<<<<<< HEAD
    cy.intercept('
  'GET',
  '/api/talent/t-123', {
=======
    cy.intercept(
  'GET,/api/talent/t-123', {
>>>>>>> main
      statusCode: 200,
      body: {
        i,
    d:,
  t-123',
        full_name: 'Cypress Talent,
>>>>>>> main
        bio:,
  Testing: bio',';
        skills: [;
<<<<<<< HEAD
  'Cypress,]}}).as(';
  'getTalent');';
    cy.visit(
  '/talent/t-123');';
    cy.wait(
  '@getTalent');';
    cy.get(
  '[data-testid='talent-name']').should(';
  'contain',';
  'Cypress: Talent')})})';
=======
  'Cypress]}}).as('
  'getTalent');
    cy.visit('
  '/talent/t-123');
    cy.wait('
  '@getTalent');
<<<<<<< HEAD
    cy.get('
  '[data-testid='talent-name']).should('
  'contain',
  'Cypress Talent')})})
=======
    cy.get(
  '[data-testid='talent-name']').should(
  'contain,Cypress Talent')})})
>>>>>>> main
>>>>>>> main
