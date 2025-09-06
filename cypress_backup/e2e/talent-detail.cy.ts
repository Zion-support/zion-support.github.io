



=======
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});


=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,

      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");
    cy && cy.visit("/talent/t-123");
    cy && cy.wait("@getTalent");
    cy && cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: "200",

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");

    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");

  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,

=======
    cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");

    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");

  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,

=======
    cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");

describe ("talent detail page", () => {
  it ("loads profile from API", () => {
    cy.intercept ("GET", "/api / talent / t-123", {
      status_code: 200,
      body: {
        id: "t - 123",
        full_name: "Cypress Talent",
        bio: "Testing bio",
        skills: ["Cypress"],
      },
    }).as ("get_talent");
    cy.visit ("/talent / t-123");
    cy.wait ("@get_talent");
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });
});
<<<<<<< HEAD
describe ("talent detail page", () => {
  it ("loads profile from API", () => {
    cy.intercept ("GET", "/api / talent / t-123", {
      status_code: "200",
      body: {
        id: "t - 123",
        full_name: "Cypress Talent",
        bio: "Testing bio",
        skills: ["Cypress"],
      },
    }).as ("get_talent");
    cy.visit ("/talent / t-123");
    cy.wait ("@get_talent");
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });
});
describe ("talent detail page", () => {
  it ("loads profile from API", () => {
    cy.intercept ("GET", "/api / talent / t-123", {
      status_code: 200,
      body: {
        id: "t - 123",
        full_name: "Cypress Talent",
        bio: "Testing bio",
        skills: ["Cypress"],
      },
    }).as ("get_talent");
    cy.visit ("/talent / t-123");
    cy.wait ("@get_talent");
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });
});
describe ("talent detail page", () => {
  it ("loads profile from API", () => {
    cy.intercept ("GET", "/api / talent / t-123", {
      status_code: 200,
      body: {
        id: "t - 123",
        full_name: "Cypress Talent",
        bio: "Testing bio",
        skills: ["Cypress"],
      },
    }).as ("get_talent");
    cy.visit ("/talent / t-123");
    cy.wait ("@get_talent");
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");

  });

    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
  });


=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});

=======
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
});
<<<<<<< HEAD
;
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
