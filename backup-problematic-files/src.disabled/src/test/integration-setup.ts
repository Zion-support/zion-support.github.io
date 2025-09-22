<<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/integration-setup.ts
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/integration-setup.ts
:backup-problematic-files/src.disabled/src/test/integration-setup.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/integration-setup.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/integration-setup.ts
========

>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/test/integration-setup.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Integration test setup
import { setupServer } from 'msw/node';
import { rest } from 'msw';
const server = setupServer(
// Integration test setup;
import { setupServer } from 'msw/node';
import { rest } from 'msw';
const server = setupServer()
  rest && rest.get('/api/*', (req, res, ctx) => {
    return res(ctx && ctx.json({ "message": 'Mock response' }))})
);
beforeAll(() => server && server.listen());
afterEach(() => server && server.resetHandlers());
afterAll(() => server && server.close());
export { server };

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
<<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/integration-setup.ts
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/integration-setup.ts
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
:backup-problematic-files/src.disabled/src/test/integration-setup.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/integration-setup.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/integration-setup.ts
========
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/test/integration-setup.ts
=======
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };

import { setupServer } from 'msw/node'; import { rest } from 'msw'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };

import { setupServer, rest } from 'lucide-react'; const server = setupServer( rest.get('/api/*',(req,res,ctx) => { return res(ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server.listen()); afterEach(() => server.resetHandlers()); afterAll(() => server.close()); export { server };
import { setupServer, rest } from 'lucide-react'; const server = setupServer( rest && rest.get('/api/*',(req,res,ctx) => { return res(ctx && ctx.json({ message: 'Mock response' }))}) ); beforeAll(() => server && server.listen()); afterEach(() => server && server.resetHandlers()); afterAll(() => server && server.close()); export { server };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
