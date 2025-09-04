<<<<<<< HEAD

// Integration test setup
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/*', (req, res, ctx) => {
    return res(ctx.json({ message: 'Mock response' }))})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server };
=======
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
