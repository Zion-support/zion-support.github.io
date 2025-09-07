
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;
describe("talent detail page", () => {it("loads profile from API", () => {cy && cy.intercept("GET", "/api/talent/t-123", {statusCode: 200,body: {id: "t-123";
        full_name: "Cypress Talent";
        bio: "Testing bio";
        skills: ["Cypress"];
      }
    }).as("getTalent")cy && cy.visit("/talent/t-123")cy && cy.wait("@getTalent")cy && cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent")})})describe("talent detail page", () => {it("loads profile from API", () => {body: {id: "t-123";
        full_name: "Cypress Talent";
        bio: "Testing bio";
        skills: ["Cypress"];
      }
    }).as("getTalent")})})describe("talent detail page", () => {it("loads profile from API", () => {body: {id: "t-123";
        full_name: "Cypress Talent";
        bio: "Testing bio";
        skills: ["Cypress"];
      }
    }).as("getTalent")})})describe("talent detail page", () => {it("loads profile from API", () => {cy.intercept("GET", "/api/talent/t-123", {statusCode: 200;
      body: {id: "t-123";
        full_name: "Cypress Talent";
        bio: "Testing bio";
        skills: ["Cypress"];
      }
    }).as("getTalent")describe ("talent detail page", () => {it ("loads profile from API", () => {cy.intercept ("GET", "/api / talent / t-123", {status_code: 200,body: {id: "t - 123",full_name: "Cypress Talent",bio: "Testing bio",skills: ["Cypress"];
      }
    }).as ("get_talent")cy.visit ("/talent / t-123")cy.wait ("@get_talent")cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent")})})describe ("talent detail page", () => {it ("loads profile from API", () => {cy.intercept ("GET", "/api / talent / t-123", {status_code: 200,body: {id: "t - 123",full_name: "Cypress Talent",bio: "Testing bio",skills: ["Cypress"];
      }
    }).as ("get_talent")cy.visit ("/talent / t-123")cy.wait ("@get_talent")cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent")})ursor/automate-test-improve-and-merge-code-646c;
    cy.visit("/talent/t-123")cy.wait("@getTalent")cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent")})ursor/automate-test-improve-and-merge-code-646c;
describe('talent detail page', () => {it('loads profile from API', () => {cy.intercept('GET', '/api/talent/t-123', {"statusCode": 200,"body": {id: 't-123',"full_name": 'Cypress Talent',"bio": 'Testing bio',"skills": ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})});
ursor/automate-test-improve-and-merge-code-646c;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})});
ursor/automate-test-improve-and-merge-code-646c;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})})full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'];
      }
    }).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent')})})



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
      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");
  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {
      body: {
        id: "t-123"
        full_name: "Cypress Talent"
        bio: "Testing bio"
        skills: ["Cypress"]
      }
    }).as("getTalent");
  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {
    cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200
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
        skills: ["Cypress"]
      }
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
        skills: ["Cypress"]
      }
    }).as ("get_talent");
    cy.visit ("/talent / t-123");
    cy.wait ("@get_talent");
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });
describe('talent detail page', () => {
  it('loads profile from API', () => {
    cy.intercept('GET', '/api/talent/t-123', {
      "statusCode": 200,
      "body": {
        id: 't-123',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        "full_name": 'Cypress Talent',
        "bio": 'Testing bio',
        "skills": ['Cypress']}}).as('getTalent');
    cy.visit('/talent/t-123');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent')})});
<<<<<<< HEAD
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
<<<<<<< HEAD
=======
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
<<<<<<< HEAD
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        full_name: 'Cypress Talent',
        bio: 'Testing bio',
        skills: ['Cypress'],
      },
    }).as('getTalent');
    cy.visit('/talent/t-123');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent');
  });
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress']}}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
