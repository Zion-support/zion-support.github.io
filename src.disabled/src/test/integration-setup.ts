<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
// Integration test setup
import { setupServer } from 'msw/node';
import { rest } from 'msw';
const server = setupServer(
  rest && rest.get('/api/*', (req, res, ctx) => {
    return res(ctx && ctx.json({ "message": 'Mock response' }))})
);
beforeAll(() => server && server.listen());
afterEach(() => server && server.resetHandlers());
afterAll(() => server && server.close());
export { server };
<<<<<<< HEAD:src.disabled/src/test/integration-setup.ts
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
<<<<<<< HEAD
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
=======
<<<<<<< HEAD
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
=======
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/src.disabled/src/test/integration-setup.ts
