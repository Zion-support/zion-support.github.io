



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
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };

