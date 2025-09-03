
  /auth/login;
  ', method: 'POST, title:,
  User Login;
  ', description: 'Authenticate user with email and password, parameters: [ { nam,
    e:,
  email;
  ', type: 'string, required: true, description:,
  User email address;
  ' }, { name: 'password', type: 'string'
  ', required: true, description: 'User password;
  ' } ], responses: [ { cod,
    e: 200, description:,
  Login successful} }, { path: '/auth/register, method:,
  POST', title: 'User Registration, description:,
  Create a new user account', parameters: [ { nam,
    e:;
  'email, type:;
  'string', required: true, description:,
  User email address' }, { name: 'password', type:;
  'string', required: true, description:,
  Minimum 8 characters' }, { name: 'name', type:;
  'string', required: true, description:;

  /ai/generate;
  ', method: 'POST, title:,
  AI Content Generation;
  ', description: 'Generate content using AI models, parameters: [ { nam,
    e:,
  prompt;
  ', type: 'string, required: true, description:,
  Input prompt for generation;
  ' }, { name: 'model', type: 'string;
  ', required: false, description:,
  AI model to use;
  ', default: 'gpt-4 }, { name:,
  max_tokens;
  ', type: 'integer, required: false, description: 'Maximum tokens to generate;

  /analytics/query', method: 'POST, title:,
  Data Query', description: 'Query analytics data with SQL-like syntax, parameters: [' { nam,
    e:,
  query', type: 'string, required: true, description:,
  SQL query string' }, { name: 'format', type:;
  'string', required: false, description:,

  Official JavaScript/Node.js client library;
  ', version: 'v2.1.0, downloads:,
  125K+;
  ', language: 'JavaScript, features: [
  TypeScript support;
  ,Promise-based;
  ,Browser & Node.js;
  '] }, { name: 'Python SDK, description:',
  Python client library with async support;
  ', version: 'v1.8.2, downloads:,

  89K+;
  ', language: 'Pytho,n, features:  ,[',;
  Async/await;


  GET' ?;
  'bg-green-500/20 text-green-400':  endpoint.method ===;
  'POST' ?;
  'bg-blue-500/20 text-blue-400' : endpoint.method ===;
  'PUT' ?;
  'bg-yellow-500/20 text-yellow-400' : endpoint.method ===;
  'DELETE' ?;



