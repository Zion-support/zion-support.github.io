
;
ursor/automate-test-improve-and-merge-code-646c;
// Integration test setup;
import { setupServer  } from 'msw/node';
import { rest  } from 'msw';
const server = setupServer(rest && rest.get('/api/*', (req, res, ctx) => {return res(ctx && ctx.json({ "message": 'Mock response' }))}))beforeAll(() => server && server.listen())afterEach(() => server && server.resetHandlers())afterAll(() => server && server.close())export { server }import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) )beforeAll(() => server.listen())afterEach(() => server.resetHandlers())afterAll(() => server.close())export { server }ursor/automate-test-improve-and-merge-code-646c;
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) )beforeAll(() => server && server.listen())afterEach(() => server && server.resetHandlers())afterAll(() => server && server.close())export { server }ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
ursor/automate-test-improve-and-merge-code-646c;
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
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };



import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
