
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})ursor/fix-website-loading-errors-and-merge-6662;
;
describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {cy && cy.intercept(\"GET\", \"/api/talent/t-123\", {statusCode: 200,body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")cy && cy.visit(\"/talent/t-123\")cy && cy.wait(\"@getTalent\")cy && cy.get('[data-testid=\"talent-name\"]').should(\"contain\", \"Cypress Talent\")})})describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")})})describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")})})describe(\"talent detail page\", () => {it(\"loads profile from API\", () => {cy.intercept(\"GET\", \"/api/talent/t-123\", {statusCode: 200;
      body: {id: \"t-123\";
        full_name: \"Cypress Talent\";
        bio: \"Testing bio\";}
        skills: [\"Cypress\"];}
      }
    }).as(\"getTalent\")describe (\"talent detail page\", () => {it (\"loads profile from API\", () => {cy.intercept (\"GET\", \"/api / talent / t-123\", {status_code: 200,body: {id: \"t - 123\",full_name: \"Cypress Talent\",bio: \"Testing bio\",skills: [\"Cypress\"];}
      }
    }).as (\"get_talent\")cy.visit (\"/talent / t-123\")cy.wait (\"@get_talent\")cy.get ('[data - testid=\"talent - name\"]').should (\"contain\", \"Cypress Talent\")})})describe (\"talent detail page\", () => {it (\"loads profile from API\", () => {cy.intercept (\"GET\", \"/api / talent / t-123\", {status_code: 200,body: {id: \"t - 123\",full_name: \"Cypress Talent\",bio: \"Testing bio\",skills: [\"Cypress\"];}
      }
    }).as (\"get_talent\")cy.visit (\"/talent / t-123\")cy.wait (\"@get_talent\")cy.get ('[data - testid=\"talent - name\"]').should (\"contain\", \"Cypress Talent\")});
    cy.visit(\"/talent/t-123\")cy.wait(\"@getTalent\")cy.get('[data-testid=\"talent-name\"]').should(\"contain\", \"Cypress Talent\")});
describe('talent detail page', () => {it('loads profile from API', () => {cy.intercept('GET', '/api/talent/t-123', {\"statusCode\": 200,\"body\": {id: 't-123',\"full_name\": 'Cypress Talent',\"bio\": 'Testing bio',\"skills\": ['Cypress']}}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain', 'Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',
  body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',
  body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',
  full_name: 'Cypress Talent',bio: 'Testing bio',}
  skills: ['Cypress'],}
}).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain','Cypress Talent')})})full_name: 'Cypress Talent',
  bio: 'Testing bio',skills: ['Cypress'];
      }
    }).as('getTalent')cy.visit('/talent/t-123')cy.wait('@getTalent')cy.get('[data-testid=\"talent-name\"]').should('contain', 'Cypress Talent')})})

describe(\"talent detail page\", () => {
  it(\"loads profile from API\", () => {

describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});

describe("talent detail page", () => {
  it("loads profile from API", () => {

    cy && cy.intercept("GET", "/api/talent/t-123", {
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
});"
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
describe('talent detail page', () => {
  it('loads profile from API', () => {
    cy.intercept('GET', '/api/talent/t-123', {
      "statusCode": 200,""
      "body": {""
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
});
;
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
});
;
main
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
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
        "full_name": 'Cypress Talent',
        "bio": 'Testing bio',')
        "skills": ['Cypress']}}).as('getTalent');
    cy.visit('/talent/t-123');
    cy.wait('@getTalent');
    cy.get('[data-testid="talent-name"]').should('contain', 'Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: '200',body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});

describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});

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
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
describe('talent detail page',() => { it('loads profile from API',() => { cy.intercept('GET','/api/talent/t-123',{ statusCode: 200,body: { id: 't-123',full_name: 'Cypress Talent',bio: 'Testing bio',skills: ['Cypress'],},}).as('getTalent'); cy.visit('/talent/t-123'); cy.wait('@getTalent'); cy.get('[data-testid="talent-name"]').should('contain','Cypress Talent')})});
