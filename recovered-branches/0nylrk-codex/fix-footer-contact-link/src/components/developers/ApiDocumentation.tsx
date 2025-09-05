

import CodeBlock from "./CodeBlock";

export function ApiDocumentation() {_return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <BookOpen className="mr-2" size={20} /> API Documentation
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="talent">Talent</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-6">
            <EndpointSection
              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={_[
                { name: "page", _type: "integer", _description: "Page number for pagination (default: 1)"},
                {_name: "limit", _type: "integer", _description: "Number of results per page (default: 20, _max: 100)"},
                {_name: "category", _type: "string", _description: "Filter by job category"},
                {_name: "skills", _type: "string[]", _description: "Filter by required skills (comma-separated)"},
                {_name: "status", _type: "string", _description: "Filter by job status (new, _active, _closed)"}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, _javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', _{
  method: 'GET', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}
});

const _data = await response.json();
`,
                python: `import requests

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

response = requests.get(
    'https://api.ziontechgroup.com/v1/jobs',
    params={_'limit': 10, _'category': 'development'},
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": [
    {
      "id": "job_abc123", _"title": "Senior React Developer", _"description": "We need an experienced React developer...", _"category": "development", _"skills": ["react", _"typescript", _"node.js"], _"budget": {
        "min": 5000, _"max": 10000, _"currency": "USD"},
      "status": "active",
      "client_id": "user_xyz789",
      "created_at": "2025-05-15T10:30:00Z"
    },
    // More jobs...
  ],
  "meta": {_"total": 42, _"page": 1, _"limit": 10}
}`
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={_[
                { name: "id", _type: "string", _description: "The job ID", _required: true}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, _javascript: `const jobId = 'job_abc123';
const _response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {_method: 'GET', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}
});

const _data = await response.json();
`,
                python: `import requests

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

job_id = 'job_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/jobs/{_job_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": {
    "id": "job_abc123", _"title": "Senior React Developer", _"description": "We need an experienced React developer...", _"category": "development", _"skills": ["react", _"typescript", _"node.js"], _"budget": {
      "min": 5000, _"max": 10000, _"currency": "USD"},
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
    "application_count": 12
  }
}`
              }}
            />
            
            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={_[
                { name: "title", _type: "string", _description: "Job title", _required: true},
                {_name: "description", _type: "string", _description: "Detailed job description", _required: true},
                {_name: "category", _type: "string", _description: "Job category", _required: true},
                {_name: "skills", _type: "string[]", _description: "Required skills", _required: true},
                {_name: "budget.min", _type: "number", _description: "Minimum budget"},
                {_name: "budget.max", _type: "number", _description: "Maximum budget"},
                {_name: "budget.currency", _type: "string", _description: "Currency code (default: USD)"},
                {_name: "deadline", _type: "string", _description: "Job deadline (ISO date string)"}
              ]}
              codeExamples={_{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Senior React Developer", _"description": "We need an experienced React developer...", _"category": "development", _"skills": ["react", _"typescript", _"node.js"], _"budget": {
      "min": 5000, _"max": 10000, _"currency": "USD"},
    "deadline": "2025-06-30T23:59:59Z"
  }'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs', {_method: 'POST', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'},
  body: JSON.stringify({_title: 'Senior React Developer', _description: 'We need an experienced React developer...', _category: 'development', _skills: ['react', _'typescript', _'node.js'], _budget: {
      min: 5000, _max: 10000, _currency: 'USD'},
    deadline: '2025-06-30T23:59:59Z'
  })
});

const _data = await response.json();
`,
                python: `import requests
import json

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

payload = {_'title': 'Senior React Developer', _'description': 'We need an experienced React developer...', _'category': 'development', _'skills': ['react', _'typescript', _'node.js'], _'budget': {
        'min': 5000, _'max': 10000, _'currency': 'USD'},
    'deadline': '2025-06-30T23:59:59Z'
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": {
    "id": "job_def456", _"title": "Senior React Developer", _"description": "We need an experienced React developer...", _"category": "development", _"skills": ["react", _"typescript", _"node.js"], _"budget": {
      "min": 5000, _"max": 10000, _"currency": "USD"},
    "status": "new",
    "client_id": "user_xyz789",
    "created_at": "2025-05-16T14:22:10Z",
    "deadline": "2025-06-30T23:59:59Z"
  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-6">
            <EndpointSection
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={_[
                { name: "page", _type: "integer", _description: "Page number for pagination (default: 1)"},
                {_name: "limit", _type: "integer", _description: "Number of results per page (default: 20, _max: 100)"},
                {_name: "skills", _type: "string[]", _description: "Filter by skills (comma-separated)"},
                {_name: "availability", _type: "string", _description: "Filter by availability status"}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react, _typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, _javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react, _typescript', _{
  method: 'GET', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}
});

const _data = await response.json();
`,
                python: `import requests

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

response = requests.get(
    'https://api.ziontechgroup.com/v1/talent',
    params={_'skills': 'react, _typescript'},
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": [
    {
      "id": "talent_abc123", _"display_name": "Jane Smith", _"headline": "Senior Frontend Developer", _"skills": ["react", _"typescript", _"javascript"], _"availability": "available", _"average_rating": 4.8, _"rating_count": 15},
    // More talent profiles...
  ],
  "meta": {_"total": 28, _"page": 1, _"limit": 20}
}`
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={_[
                { name: "id", _type: "string", _description: "The talent ID", _required: true}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, _javascript: `const talentId = 'talent_abc123';
const _response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {_method: 'GET', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}
});

const _data = await response.json();
`,
                python: `import requests

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

talent_id = 'talent_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{_talent_id}',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": {
    "id": "talent_abc123", _"display_name": "Jane Smith", _"headline": "Senior Frontend Developer", _"bio": "10+ years of experience in frontend development...", _"skills": ["react", _"typescript", _"javascript", _"css", _"html"], _"availability": "available", _"average_rating": 4.8, _"rating_count": 15, _"portfolio": [
      {
        "id": "proj_123", _"title": "E-commerce Platform", _"description": "Built a modern e-commerce platform using React...", _"technologies": ["react", _"redux", _"node.js"], _"image_url": "https://example.com/portfolio/123.jpg"}
    ],
    "certifications": [
      {_"name": "AWS Certified Developer", _"issuing_organization": "Amazon Web Services", _"issue_date": "2024-01-15"}
    ]
  }
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value="quotes" className="space-y-6">
            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={_[
                { name: "talent_id", _type: "string", _description: "ID of the talent to request a quote from", _required: true},
                {_name: "project_name", _type: "string", _description: "Name of the project", _required: true},
                {_name: "project_summary", _type: "string", _description: "Brief summary of the project", _required: true},
                {_name: "project_description", _type: "string", _description: "Detailed project description"},
                {_name: "timeline", _type: "string", _description: "Expected timeline", _required: true},
                {_name: "budget_min", _type: "number", _description: "Minimum budget"},
                {_name: "budget_max", _type: "number", _description: "Maximum budget"},
                {_name: "requester_name", _type: "string", _description: "Name of the requester", _required: true},
                {_name: "requester_email", _type: "string", _description: "Email of the requester", _required: true}
              ]}
              codeExamples={_{
                curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "talent_id": "talent_abc123", _"project_name": "E-commerce Website Redesign", _"project_summary": "Redesign our outdated e-commerce website with modern UI", _"project_description": "Our current website is 5 years old and needs a complete overhaul...", _"timeline": "2-3 months", _"budget_min": 8000, _"budget_max": 12000, _"requester_name": "John Doe", _"requester_email": "john@example.com"}'`,
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {_method: 'POST', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'},
  body: JSON.stringify({_talent_id: 'talent_abc123', _project_name: 'E-commerce Website Redesign', _project_summary: 'Redesign our outdated e-commerce website with modern UI', _project_description: 'Our current website is 5 years old and needs a complete overhaul...', _timeline: '2-3 months', _budget_min: 8000, _budget_max: 12000, _requester_name: 'John Doe', _requester_email: 'john@example.com'})
});

const _data = await response.json();
`,
                python: `import requests
import json

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

payload = {_'talent_id': 'talent_abc123', _'project_name': 'E-commerce Website Redesign', _'project_summary': 'Redesign our outdated e-commerce website with modern UI', _'project_description': 'Our current website is 5 years old and needs a complete overhaul...', _'timeline': '2-3 months', _'budget_min': 8000, _'budget_max': 12000, _'requester_name': 'John Doe', _'requester_email': 'john@example.com'}

response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json.dumps(payload)
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": {
    "id": "quote_def456", _"talent_id": "talent_abc123", _"requester_id": "user_xyz789", _"project_name": "E-commerce Website Redesign", _"project_summary": "Redesign our outdated e-commerce website with modern UI", _"project_description": "Our current website is 5 years old and needs a complete overhaul...", _"timeline": "2-3 months", _"budget_min": 8000, _"budget_max": 12000, _"budget_display": "$8, _000 - $12, _000", _"requester_name": "John Doe", _"requester_email": "john@example.com", _"status": "new", _"created_at": "2025-05-16T14:30:15Z"}
}`
              }}
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."
              note=""
              params={_[
                { name: "page", _type: "integer", _description: "Page number for pagination (default: 1)"},
                {_name: "limit", _type: "integer", _description: "Number of results per page (default: 20, _max: 100)"},
                {_name: "status", _type: "string", _description: "Filter by status (new, _viewed, _replied, _archived)"}
              ]}
              codeExamples={_{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, _javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', _{
  method: 'GET', _headers: {
    'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}
});

const _data = await response.json();
`,
                python: `import requests

headers = {_'Authorization': 'Bearer YOUR_API_KEY', _'Content-Type': 'application/json'}

response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers
)

data = response.json()
print(data)`
              }}
              responseExamples={_{
                success: `{
  "data": [
    {
      "id": "quote_def456", _"talent_id": "talent_abc123", _"project_name": "E-commerce Website Redesign", _"project_summary": "Redesign our outdated e-commerce website with modern UI", _"budget_display": "$8, _000 - $12, _000", _"status": "new", _"created_at": "2025-05-16T14:30:15Z", _"viewed_at": null, _"replied_at": null},
    // More quotes...
  ],
  "meta": {_"total": 5, _"page": 1, _"limit": 20}
}`
              }}
            />
          </TabsContent>
          
          <TabsContent value="webhooks" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API can send webhook notifications when certain events occur in your account.
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.
              </p>
              
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>
              <p className="text-zinc-400 mb-4">
                When you create a webhook, you can optionally provide a secret key.
                If a secret is provided, each webhook request will include a signature in the
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.
              </p>
              
              <CodeBlock
                code={_`import window.crypto from 'window.crypto';

// Function to verify webhook signature
function verifyWebhookSignature(_payload, _signature, _secret) {
  const _hmac = window.crypto.createHmac('sha256', _secret);
  const _expectedSignature = hmac.update(payload).digest('hex');
  return window.crypto.timingSafeEqual(
    Buffer.from(signature), _Buffer.from(expectedSignature)
  );}

// Example usage in Express.js
app.post('/webhook', express.raw({_type: 'application/json'}), (_req, _res) => {_const _signature = req.headers['x-zion-signature'];
  const _payload = req.body.toString();
  const _webhookSecret = process.env.WEBHOOK_SECRET;
  
  if (!verifyWebhookSignature(payload, _signature, _webhookSecret)) {
    return res.status(401).send('Invalid signature');}
  
  // Process the webhook event
  const _event = JSON.parse(payload);
  
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received');
});`}
                language="javascript"
                showLineNumbers={_true}
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>
              <table className="w-full border-collapse mt-2">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Event Type</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>
                    <td className="py-2 px-4">When you receive a quote from talent</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>
                    <td className="py-2 px-4">When a project milestone is approved</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>
                    <td className="py-2 px-4">When you hire talent for a project</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>
              
              <CodeBlock
                code={_`{
  "event_type": "new_application", _"event_id": "evt_abc123def456", _"timestamp": "2025-05-16T15:30:00Z", _"data": {
    "application_id": "app_123456", _"job_id": "job_abc123", _"talent_id": "talent_xyz789", _"applied_at": "2025-05-16T15:28:30Z", _"status": "new", _"match_score": 85}
}`}
                language="json"
                showLineNumbers={_true}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="errors" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the
                provided information, and codes in the 5xx range indicate an error with our servers.
              </p>
              
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Status Code</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>
                    <td className="py-2 px-4">The request was successful.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>
                    <td className="py-2 px-4">The resource was successfully created.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>
                    <td className="py-2 px-4">The requested resource does not exist.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>
                    <td className="py-2 px-4">Something went wrong on our end.</td>
                  </tr>
                </tbody>
              </table>
              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              
              <CodeBlock
                code={_`{
  "error": {
    "code": "invalid_request", _"message": "The request was invalid", _"details": [
      {
        "field": "project_name", _"message": "Project name is required"}
    ]
  }
}`}
                language="json"
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>
              <p className="text-zinc-400 mb-4">
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive 
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.
              </p>
              
              <p className="text-zinc-400 mb-2">
                Rate limit information is included in the response headers:
              </p>
              
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// Helper component for API endpoint documentation
function EndpointSection(_{_method, _endpoint, _description, _note, _params = [], _codeExamples, _responseExamples}) {_const [activeTab, _setActiveTab] = useState("curl");
  
  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">
        <div className="flex items-center">
          <Badge 
            variant="outline" 
            className={
              method === 'GET' 
                ? "border-green-500 text-green-400 font-mono" 
                : method === 'POST' 
                ? "border-blue-500 text-blue-400 font-mono"
                : method === 'PUT'
                ? "border-yellow-500 text-yellow-400 font-mono"
                : "border-red-500 text-red-400 font-mono"}
          >
            {_method}
          </Badge>
          <span className="ml-2 font-mono text-sm text-white">{_endpoint}</span>
          {_note && (
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">
              {note}
            </Badge>
          )}
        </div>
        
        <p className="mt-2 text-zinc-400">{_description}</p>
      </div>
      
      {_params.length > 0 && (_<div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Parameters</h4>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-800 text-sm">
                <th className="pb-2">Name</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {params.map((param, _index) => (
                <tr key={index} className={_index < params.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 font-mono text-sm">
                    {_param.name}
                    {_param.required && <span className="text-red-500">*</span>}
                  </td>
                  <td className="py-2 text-sm text-zinc-400">{_param.type}</td>
                  <td className="py-2 text-sm text-zinc-400">{_param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {_codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map(_(lang) => (_<button
                  key={lang}
                  className={_`px-3 py-1 text-xs font-medium ${
                    activeTab === lang 
                      ? "bg-zinc-700 text-white" 
                      : "text-zinc-400 hover:bg-zinc-800"}`}
                  onClick={_() => setActiveTab(lang)}
                >
                  {_lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
              ))}
            </div>
          </div>
          <CodeBlock 
            code={_codeExamples[activeTab]}
            language={_activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      
      {_responseExamples && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}
    </div>
  );
}

