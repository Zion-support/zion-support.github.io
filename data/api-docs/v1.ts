 const v1: ApiDocsSpec = {
  product: 'Zion OS', versions: ['v1'], defaultVersion: 'v1', lastUpdatedIso: new Date () .toISOString (), sections: [ {
  id: 'auth', title: 'Auth (JWT, OAuth, Wallet) ', description: 'Authenticate using JWT, OAuth 2.0, or connect a wallet.', endpoints: [ {
  code: 'INVALID CREDENTIALS', httpStatus: 401, message: 'Email or password incorrect' 
}];
versions: ['v1'] 
};
}] 
};
{
  id: 'talent', title: 'Talent Profiles', endpoints: [ {
  id: 'talent-get', title: 'Get Talent Profile', description: 'Fetch a talent profile by ID.', path: '/v1/talent/ {
  talentId 
}';
method: 'GET';
visibility: 'public';
auth: ['jwt'];
params: {
  talentId: 'The UUID of the talent' 
};
responseBodySchema: {
  type: 'object', properties: {
  id: {
  type: 'string' 
}, name: {
  type: 'string' 
}, skills: {
  type: 'array', items: {
  type: 'string' 
}
}
}
};
samples: [ versions: ['v1'] 
}] 
};
{
  id: 'jobs', title: 'Job Listings', endpoints: [ {
  id: 'jobs-list', title: 'List Jobs', description: 'List job postings with optional filters.', path: '/v1/jobs', method: 'GET', visibility: 'public', auth: ['jwt'], query: {
  q: 'Search text', status: 'open|closed' 
};
responseBodySchema: {
  type: 'object', properties: {
  items: {
  type: 'array', items: {
  type: 'object' 
}
}, nextPage: {
  type: 'string' 
}
}
};
samples: [ versions: ['v1'] 
}] 
};
{
  id: 'quotes', title: 'Quotes + Milestones', endpoints: [ {
  
}] 
};
{
  id: 'messages', title: 'Messages', endpoints: [ {
  
}] 
};
{
  id: 'wallet', title: 'ZION$ Wallet API', endpoints: [ {
  versions: ['v1'] 
}] 
};
{
  id: 'dao', title: 'DAO & Proposals', endpoints: [ {
  id: 'dao-proposals-list', title: 'List Proposals', description: 'List DAO proposals.', path: '/v1/dao/proposals', method: 'GET', visibility: 'public', auth: ['jwt'], responseBodySchema: {
  type: 'object', properties: {
  items: {
  type: 'array', items: {
  type: 'object' 
}
}
}
};
samples: [ versions: ['v1'] 
}] 
};
{
  id: 'voting', title: 'Voting + Treasury logs', endpoints: [ {
  id: 'treasury-logs', title: 'Get Treasury Logs', description: 'Fetch treasury transactions and snapshots.', path: '/v1/treasury/logs', method: 'GET', visibility: 'partner', auth: ['jwt'], responseBodySchema: {
  type: 'object', properties: {
  items: {
  type: 'array', items: {
  type: 'object' 
}
}
}
};
samples: [ versions: ['v1'] 
}] 
};
{
  id: 'nation', title: 'Nation Module', endpoints: [ {
  id: 'nation-stats', title: 'Nation Stats', description: 'Aggregate stats across the Zion Nation module.', path: '/v1/nation/stats', method: 'GET', visibility: 'internal', auth: ['jwt'], responseBodySchema: {
  type: 'object', properties: {
  members: {
  type: 'number' 
}, proposals: {
  type: 'number' 
}
}
};
samples: [ export default v1;
