<<<<<<< HEAD
=======
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

<<<<<<< HEAD
  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})ursor/fix-website-loading-errors-and-merge-6662;
;
describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {cy && cy.intercept(\"GET\", \"/api/talent/t-123\", {statusCode: 200,body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")cy && cy.visit(\"/talent/t-123\")cy && cy.wait(\"@getTalent\")cy && cy.get('[data-testid=\"talent-name\"]').should(\"contain\", \"Cypress Talent\")})});
=======
<<<<<<< HEAD
cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")})});

  describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")})});

  describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {cy.intercept(\"GET\", \"/api/talent/t-123\", {statusCode: 200;
      body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")describe (\"talent detail page\", () => {it (\"loads profile from API\", () => {cy.intercept (\"GET\", \"/api / talent / t-123\", {status_code: 200,body: {id: \"t - 123\",full_name: \"Cypress Talent\",bio: \"Testing bio\",skills: [\"Cypress\"];}
      }
    }).as (\"get_talent\")cy.visit (\"/talent / t-123\")cy.wait (\"@get_talent\")cy.get ('[data - testid=\"talent - name\"]').should (\"contain\", \"Cypress Talent\")})});

  describe (\"talent detail page\", () => {it (\"loads profile from API\", () => {cy.intercept (\"GET\", \"/api / talent / t-123\", {status_code: 200,body: {id: \"t - 123\",full_name: \"Cypress Talent\",bio: \"Testing bio\",skills: [\"Cypress\"];}
      }
    }).as (\"get_talent\")cy.visit (\"/talent / t-123\")cy.wait (\"@get_talent\")cy.get ('[data - testid=\"talent - name\"]').should (\"contain\", \"Cypress Talent\")});
    cy.visit(\"/talent/t-123\")cy.wait(\"@getTalent\")cy.get('[data-testid=\"talent-name\"]').should(\"contain\", \"Cypress Talent\")});
describe('talent detail page', () => {it('loads profile from API', () => {cy.intercept('GET', '/api/talent/t-123', {\"statusCode\": 200,\"body\": {id: 't-123',\"full_name\": 'Cypress Talent',\"bio\": 'Testing bio',\"skills\": ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain', 'Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',
  body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',
  body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})});

  describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})full_name: 'Cypress Talent',
  bio: 'Testing bio',skills: ['Cypress'];
      }
    }).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain', 'Cypress Talent')})});

  describe(\"talent detail page\", () => {
  it(\"loads profile from API\", () => {

describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});

      statusCode: 200,

      body: {"
        id: "t-123""
        full_name: "Cypress Talent""
        bio: "Testing bio""
        skills: ["Cypress"]
      }"
    }).as("getTalent");"
    cy && cy.visit("/talent/t-123");"
    cy && cy.wait("@getTalent");"
    cy && cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
  });
});"
describe("talent detail page", () => {"
  it("loads profile from API", () => {}
      body: {"
        id: "t-123""
        full_name: "Cypress Talent""
        bio: "Testing bio""
        skills: ["Cypress"]
      }"
    }).as("getTalent");
  });
});"
describe("talent detail page", () => {"
  it("loads profile from API", () => {}
      body: {"
        id: "t-123""
        full_name: "Cypress Talent""
        bio: "Testing bio""
        skills: ["Cypress"]
      }"
    }).as("getTalent");
  });
});"
describe("talent detail page", () => {"
  it("loads profile from API", () => {"
    cy.intercept("GET", "/api/talent/t-123", {}
      statusCode: 200;
      body: {"
        id: "t-123""
        full_name: "Cypress Talent""
        bio: "Testing bio""
        skills: ["Cypress"]
      }"
    }).as("getTalent");"
describe ("talent detail page", () => {"
  it ("loads profile from API", () => {"
    cy.intercept ("GET", "/api / talent / t-123", {}

      status_code: 200,
      body: {"
        id: "t - 123","
        full_name: "Cypress Talent","
        bio: "Testing bio","
        skills: ["Cypress"],
      },"
    }).as ("get_talent");"
    cy.visit ("/talent / t-123");"
    cy.wait ("@get_talent");'"
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });
<<<<<<< HEAD
});"
describe ("talent detail page", () => {"
  it ("loads profile from API", () => {"
    cy.intercept ("GET", "/api / talent / t-123", {}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      status_code: 200,
      body: {"
        id: "t - 123","
        full_name: "Cypress Talent","
        bio: "Testing bio","
        skills: ["Cypress"],
      },"
    }).as ("get_talent");"
    cy.visit ("/talent / t-123");"
    cy.wait ("@get_talent");'"
    cy.get ('[data - testid="talent - name"]').should ("contain", "Cypress Talent");
  });

<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
<<<<<<< HEAD
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
=======
<<<<<<< HEAD

describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;

describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
=======
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe("talent detail page", () => {
  it("loads profile from API", () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
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
    cy && cy.visit("/talent/t-123");
    cy && cy.wait("@getTalent");
    cy && cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
  });
});
describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: "200",

    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: "200",
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

    cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200
    cy && cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200,
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

    cy.intercept("GET", "/api/talent/t-123", {
      statusCode: 200
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

  });
    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
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
    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
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
    cy.visit("/talent/t-123");
    cy.wait("@getTalent");
    cy.get('[data-testid="talent-name"]').should("contain", "Cypress Talent");
  });
});
origin/main
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
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
ursor/fix-lint-push-and-merge-to-main-ae4e
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
