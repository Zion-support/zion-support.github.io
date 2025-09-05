<<<<<<< HEAD
import { ApiDocsSpec } from './types',
const baseUrl = 'https: //api.zion.os',
=======

const _baseUrl = 'https://api.zion.os';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const v1: ApiDocsSpec = {_product: 'Zion OS', _versions: ['v1'], _defaultVersion: 'v1', _lastUpdatedIso: new Date().toISOString(), _sections: [
    {
      id: 'auth', _title: 'Auth (JWT, _OAuth, _Wallet)', _description: 'Authenticate using JWT, _OAuth 2.0, _or connect a wallet.', _endpoints: [
        {
<<<<<<< HEAD
          id: 'auth-login-jwt',
          title: 'JWT Login',
          description: 'Obtain a JWT by providing credentials.',
          path: '/v1/auth/login',
          method: 'POST',
          visibility: 'public',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } }, required: ['emailpassword'] },
          responseBodySchema: { type: 'object', properties: { token: { type: 'string' }, expiresIn: { type: 'number' } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{"email":"user@zion.os","password":"***"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@zion.os', password: '***' }) }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={'email':'user@zion.ospassword':'***'})\nprint(resp.json())` }],
=======
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{&quot;email&quot;:&quot;user@zion.os&quot;,&quot;password&quot;:&quot;***&quot;}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: 'user@zion.os', password: '***' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={'email':'user@zion.os','password':'***'})\nprint(resp.json())` }],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          id: 'auth-login-jwt', _title: 'JWT Login', _description: 'Obtain a JWT by providing credentials.', _path: '/v1/auth/login', _method: 'POST', _visibility: 'public', _auth: ['none'], _requestBodySchema: { type: 'object', _properties: { email: { type: 'string'}, password: {_type: 'string'} }, required: ['email', 'password'] },
          responseBodySchema: {_type: 'object', _properties: { token: { type: 'string'}, expiresIn: {_type: 'number'} } },
          samples: [
            {_language: 'curl', _code: `curl -X POST ${baseUrl}/v1/auth/login -H 'Content-Type: application/json' -d '{_"email":"user@zion.os", _"password":"***"}'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/auth/login', {_method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_email: 'user@zion.os', _password: '***'}) }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nresp = requests.post('${baseUrl}/v1/auth/login', json={_'email':'user@zion.os', _'password':'***'})\nprint(resp.json())` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          errors: [
            {_code: 'INVALID_CREDENTIALS', _httpStatus: 401, _message: 'Email or password incorrect'}],
          versions: ['v1']},
<<<<<<< HEAD
        {
          id: 'oauth-token',
          title: 'OAuth Token',
          description: 'Exchange auth code for access token.',
          path: '/v1/oauth/token',
          method: 'POST',
          visibility: 'partner',
          auth: ['none'],
          requestBodySchema: { type: 'object', properties: { code: { type: 'string' }, redirect_uri: { type: 'string' } }, required: ['coderedirect_uri'] },
          responseBodySchema: { type: 'object', properties: { access_token: { type: 'string' }, refresh_token: { type: 'string' } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/oauth/token -H 'Content-Type: application/json' -d '{"code":"AUTH_CODE","redirect_uri":"https://app.partner.com/callback"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: 'AUTH_CODE', redirect_uri: 'https://app.partner.com/callback' }) }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/oauth/token', json={'code':'AUTH_CODEredirect_uri':'https://app.partner.com/callback'}).json()` }],
=======
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/oauth/token -H 'Content-Type: application/json' -d '{&quot;code&quot;:&quot;AUTH_CODE&quot;,&quot;redirect_uri&quot;:&quot;https://app.partner.com/callback&quot;}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: 'AUTH_CODE', redirect_uri: 'https://app.partner.com/callback' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/oauth/token', json={'code':'AUTH_CODE','redirect_uri':'https://app.partner.com/callback'}).json()` }],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        {_id: 'oauth-token', _title: 'OAuth Token', _description: 'Exchange auth code for access token.', _path: '/v1/oauth/token', _method: 'POST', _visibility: 'partner', _auth: ['none'], _requestBodySchema: { type: 'object', _properties: { code: { type: 'string'}, redirect_uri: {_type: 'string'} }, required: ['code', 'redirect_uri'] },
          responseBodySchema: {_type: 'object', _properties: { access_token: { type: 'string'}, refresh_token: {_type: 'string'} } },
          samples: [
            {_language: 'curl', _code: `curl -X POST ${baseUrl}/v1/oauth/token -H 'Content-Type: application/json' -d '{_"code":"AUTH_CODE", _"redirect_uri":"https://app.partner.com/callback"}'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/oauth/token', {_method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_code: 'AUTH_CODE', _redirect_uri: 'https://app.partner.com/callback'}) }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.post('${baseUrl}/v1/oauth/token', json={_'code':'AUTH_CODE', _'redirect_uri':'https://app.partner.com/callback'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'talent', _title: 'Talent Profiles', _endpoints: [
        {
          id: 'talent-get', _title: 'Get Talent Profile', _description: 'Fetch a talent profile by ID.', _path: '/v1/talent/{talentId}',
          method: 'GET',
          visibility: 'public',
          auth: ['jwt'],
          params: {_talentId: 'The UUID of the talent'},
          responseBodySchema: {_type: 'object', _properties: { id: { type: 'string'}, name: {_type: 'string'}, skills: {_type: 'array', _items: { type: 'string'} } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl '${baseUrl}/v1/talent/123' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/talent/123', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/talent/123', headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            {_language: 'curl', _code: `curl '${baseUrl}/v1/talent/123' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/talent/123', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/talent/123', headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'jobs', _title: 'Job Listings', _endpoints: [
        {
          id: 'jobs-list', _title: 'List Jobs', _description: 'List job postings with optional filters.', _path: '/v1/jobs', _method: 'GET', _visibility: 'public', _auth: ['jwt'], _query: { q: 'Search text', _status: 'open|closed'},
          responseBodySchema: {_type: 'object', _properties: { items: { type: 'array', _items: { type: 'object'} }, nextPage: {_type: 'string'} } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl '${baseUrl}/v1/jobs?q=engineer&status=open' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/jobs?q=engineer&status=open', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/jobs', params={'q':'engineerstatus':'open'}, headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            {_language: 'curl', _code: `curl '${baseUrl}/v1/jobs?q=engineer&status=open' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/jobs?q=engineer&status=open', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/jobs', params={_'q':'engineer', _'status':'open'}, headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'quotes', _title: 'Quotes + Milestones', _endpoints: [
        {
<<<<<<< HEAD
          id: 'quotes-create',
          title: 'Create Quote',
          description: 'Create a quote with milestones.',
          path: '/v1/quotes',
          method: 'POST',
          visibility: 'partner',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { jobId: { type: 'string' }, milestones: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, amount: { type: 'number' } } } } }, required: ['jobIdmilestones'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' }, status: { type: 'string' } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"jobId":"JOB123","milestones":[{"title":"Design","amount":1000}]}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>Content-Type': 'application/json' }, body: JSON.stringify({ jobId: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={'jobId':'JOB123milestones':[{'title':'Designamount':1000}]}, headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{&quot;jobId&quot;:&quot;JOB123&quot;,&quot;milestones&quot;:[{&quot;title&quot;:&quot;Design&quot;,&quot;amount&quot;:1000}]}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/quotes', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId: 'JOB123', milestones: [{ title: 'Design', amount: 1000 }] }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={'jobId':'JOB123','milestones':[{'title':'Design','amount':1000}]}, headers={'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          id: 'quotes-create', _title: 'Create Quote', _description: 'Create a quote with milestones.', _path: '/v1/quotes', _method: 'POST', _visibility: 'partner', _auth: ['jwt'], _requestBodySchema: { type: 'object', _properties: { jobId: { type: 'string'}, milestones: {_type: 'array', _items: { type: 'object', _properties: { title: { type: 'string'}, amount: {_type: 'number'} } } } }, required: ['jobId', 'milestones'] },
          responseBodySchema: {_type: 'object', _properties: { id: { type: 'string'}, status: {_type: 'string'} } },
          samples: [
            {_language: 'curl', _code: `curl -X POST ${baseUrl}/v1/quotes -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{_"jobId":"JOB123", _"milestones":[{"title":"Design", _"amount":1000}]}'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/quotes', {_method: 'POST', _headers: { Authorization: 'Bearer <token>', _'Content-Type': 'application/json'}, body: JSON.stringify({_jobId: 'JOB123', _milestones: [{ title: 'Design', _amount: 1000}] }) }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.post('${baseUrl}/v1/quotes', json={_'jobId':'JOB123', _'milestones':[{'title':'Design', _'amount':1000}]}, headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'messages', _title: 'Messages', _endpoints: [
        {
<<<<<<< HEAD
          id: 'messages-send',
          title: 'Send Message',
          description: 'Send a message between users.',
          path: '/v1/messages',
          method: 'POST',
          visibility: 'public',
          auth: ['jwt'],
          requestBodySchema: { type: 'object', properties: { to: { type: 'string' }, body: { type: 'string' } }, required: ['tobody'] },
          responseBodySchema: { type: 'object', properties: { id: { type: 'string' } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{"to":"USER123","body":"Hello"}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            { language: 'curl', code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{&quot;to&quot;:&quot;USER123&quot;,&quot;body&quot;:&quot;Hello&quot;}'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/messages', { method: 'POST', headers: { Authorization: 'Bearer <token>', 'Content-Type': 'application/json' }, body: JSON.stringify({ to: 'USER123', body: 'Hello' }) }).then(r => r.json());` },
            { language: 'python', code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={'to':'USER123','body':'Hello'}, headers={'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          id: 'messages-send', _title: 'Send Message', _description: 'Send a message between users.', _path: '/v1/messages', _method: 'POST', _visibility: 'public', _auth: ['jwt'], _requestBodySchema: { type: 'object', _properties: { to: { type: 'string'}, body: {_type: 'string'} }, required: ['to', 'body'] },
          responseBodySchema: {_type: 'object', _properties: { id: { type: 'string'} } },
          samples: [
            {_language: 'curl', _code: `curl -X POST ${baseUrl}/v1/messages -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' -d '{_"to":"USER123", _"body":"Hello"}'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/messages', {_method: 'POST', _headers: { Authorization: 'Bearer <token>', _'Content-Type': 'application/json'}, body: JSON.stringify({_to: 'USER123', _body: 'Hello'}) }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.post('${baseUrl}/v1/messages', json={_'to':'USER123', _'body':'Hello'}, headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'wallet', _title: 'ZION$ Wallet API', _endpoints: [
        {
<<<<<<< HEAD
          id: 'wallet-balance',
          title: 'Get Balance',
          description: 'Fetch wallet balance for the current user.',
          path: '/v1/wallet/balance',
          method: 'GET',
          visibility: 'public',
          auth: ['walletjwt'],
          responseBodySchema: { type: 'object', properties: { balance: { type: 'number' }, currency: { type: 'string' } } },
          samples: [
            { language: 'curl', code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/wallet/balance', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={'Authorization':'Bearer <token>'}).json()` }],
=======
          id: 'wallet-balance', _title: 'Get Balance', _description: 'Fetch wallet balance for the current user.', _path: '/v1/wallet/balance', _method: 'GET', _visibility: 'public', _auth: ['wallet', _'jwt'], _responseBodySchema: { type: 'object', _properties: { balance: { type: 'number'}, currency: {_type: 'string'} } },
          samples: [
            {_language: 'curl', _code: `curl '${baseUrl}/v1/wallet/balance' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/wallet/balance', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/wallet/balance', headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'dao', _title: 'DAO & Proposals', _endpoints: [
        {
          id: 'dao-proposals-list', _title: 'List Proposals', _description: 'List DAO proposals.', _path: '/v1/dao/proposals', _method: 'GET', _visibility: 'public', _auth: ['jwt'], _responseBodySchema: { type: 'object', _properties: { items: { type: 'array', _items: { type: 'object'} } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl '${baseUrl}/v1/dao/proposals' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/dao/proposals', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/dao/proposals', headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            {_language: 'curl', _code: `curl '${baseUrl}/v1/dao/proposals' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/dao/proposals', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/dao/proposals', headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'voting', _title: 'Voting + Treasury logs', _endpoints: [
        {
          id: 'treasury-logs', _title: 'Get Treasury Logs', _description: 'Fetch treasury transactions and snapshots.', _path: '/v1/treasury/logs', _method: 'GET', _visibility: 'partner', _auth: ['jwt'], _responseBodySchema: { type: 'object', _properties: { items: { type: 'array', _items: { type: 'object'} } } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl '${baseUrl}/v1/treasury/logs' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/treasury/logs', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/treasury/logs', headers={'Authorization':'Bearer <token>'}).json()` }],
=======
            {_language: 'curl', _code: `curl '${baseUrl}/v1/treasury/logs' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/treasury/logs', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/treasury/logs', headers={_'Authorization':'Bearer <token>'}).json()` }],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          versions: ['v1']}]},
    {_id: 'nation', _title: 'Nation Module', _endpoints: [
        {
          id: 'nation-stats', _title: 'Nation Stats', _description: 'Aggregate stats across the Zion Nation module.', _path: '/v1/nation/stats', _method: 'GET', _visibility: 'internal', _auth: ['jwt'], _responseBodySchema: { type: 'object', _properties: { members: { type: 'number'}, proposals: {_type: 'number'} } },
          samples: [
<<<<<<< HEAD
            { language: 'curl', code: `curl '${baseUrl}/v1/nation/stats' -H 'Authorization: Bearer <token>'` },
            { language: 'javascript', code: `await fetch('${baseUrl}/v1/nation/stats', { headers: { Authorization: 'Bearer <token>' } }).then(r => r.json()),` },
            { language: 'python', code: `import requests\nrequests.get('${baseUrl}/v1/nation/stats', headers={'Authorization':'Bearer <token>'}).json()` }],
          versions: ['v1']}]}]},
=======
            {_language: 'curl', _code: `curl '${baseUrl}/v1/nation/stats' -H 'Authorization: Bearer <token>'` },
            {_language: 'javascript', _code: `await fetch('${baseUrl}/v1/nation/stats', {_headers: { Authorization: 'Bearer <token>'} }).then(r => r.json());` },
            {_language: 'python', _code: `import requests\nrequests.get('${baseUrl}/v1/nation/stats', headers={_'Authorization':'Bearer <token>'}).json()` }],
          versions: ['v1']}]}]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default v1,