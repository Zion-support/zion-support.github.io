
// Integration test setup
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/*', (req, res, ctx) => {
    return res(ctx.json({ "message": 'Mock response' }))})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
