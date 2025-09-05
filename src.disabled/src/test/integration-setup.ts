
// Integration test setup
const server = setupServer(
  rest.get('/api/*', (req, res, ctx) => {
    return res(ctx.json({ "message": 'Mock response' }))})
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
export { server };
