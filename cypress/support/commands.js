<<<<<<< HEAD
Cypress.Commands.add('loginByApi', (email, password) => {
  cy.request('POST', '/api/auth/login', { email, password }).then(resp => {
    window.localStorage.setItem('token', resp.body.token);
  });
});
=======
Cypress.Commands.add('loginByApi', (email, password) => {' cy.request('POST', '/api/auth/login', { email, password }).then((resp) => {' window.localStorage.setItem('token', resp.body.token) }) }) '
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
