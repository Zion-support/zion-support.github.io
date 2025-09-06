

export function ApiDocumentation() {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <BookOpen className='mr-2' size={20} /> API Documentation
        </CardTitle>
        <CardDescription className='text-zinc-400'>
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>
          <Terminal className='h-4 w-4' />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token
            in the Authorization header.
          </AlertDescription>
        </Alert>

=======
method: string;
endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];

code_examples?: Record < string string>;
response_examples?: {
  success: string;
}export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (<Card className="bg - zinc - 900 border - zinc - 800 text - white" > text - xl flex items - center"> <BookOpen className=" mr - 2"size= {
  20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc - 400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb - 6"> <Terminal className=" h - 4 w - 4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space - y-4"> <TabsList className=" bg - zinc - 800 border - zinc - 700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {

  {
  success: ` {";
  " data": [ {
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 


xport function ApiDocumentation() {
ursor/fix-website-loading-errors-and-merge-6662



export function ApiDocumentation() {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>
        <CardTitle className='text-xl flex items-center'>
          <BookOpen className='mr-2' size={20} /> API Documentation
        </CardTitle>
        <CardDescription className='text-zinc-400'>
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>
      
=======


      <CardContent>
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>
          <Terminal className='h-4 w-4' />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token
            in the Authorization header.
          </AlertDescription>
        </Alert>
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168


}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/jobs/\$ {
  jobId 
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 

export function ApiDocumentation() {
  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <BookOpen className='mr-2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>;
          <Terminal className='h-4 w-4' />;
}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\$ {
  job_id;
}\`, {
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <BookOpen className='mr - 2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Alert className='bg - blue - 900 / 30 border - blue - 800 mb - 6'>;
          <Terminal className='h - 4 w - 4' />;

          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;

        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;

            <TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>;
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>;
            <TabsTrigger value='errors'>Errors</TabsTrigger>;
          </TabsList>;

          <TabsContent value='jobs' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
              params={[;



        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="talent">Talent</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-6">
<<<<<<< HEAD
            <EndpointSection
              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[

              ]}

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {

  method: 'GET',
  headers: {
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
const data = await response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'
}job id '
}'
headers=headers) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {
}`
}'
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z'
})
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
}`
  }

}`,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              }}

            />;


            <EndpointSection
              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
              note=''
              params={[
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;
                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            />;
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs/:id";
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}
              codeExamples={{;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const jobId = 'job_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
job_id = 'job_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
data = response.json();
print(data)`;

            <EndpointSection
              method='POST'
              endpoint='/api/jobs'
              description='Create a new job listing.'
              note='Requires jobs:write scope'
              params={[

              ]}

  }'`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {
      "min": 5000,
      "max": 10000,
      "currency": "USD";
    },
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {

  method: 'POST',
  headers: {

    budget: {
      min: 5000
      max: 10000
      currency: 'USD'
    }
    deadline: '2025-06-30T23:59:59Z'
  })

                python: `import requests
import json
headers = {

          <TabsContent value="talent" className="space-y-6">

            <EndpointSection
              method='GET'
              endpoint='/api/talent'
              description='List talent profiles with optional filtering.'
              note=''
              params={[

              ]}
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
  headers: {

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)
data = response.json()

              }}
              response_examples={{
                success: `{
  "data": [;
    {
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4.8
      "rating_count": 15
    }
    // More talent profiles...

  "meta": {
    "total": 28
    "page": 1
    "limit": 20
  }

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
talent_id = 'talent_abc123'
response = requests.get(
    f'https://api.ziontechgroup.com/v1/talent/{talent_id}'
    headers=headers
)
data = response.json()
print(data)`
              }}
              responseExamples = {{


              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
<<<<<<< HEAD

            />;
          </TabsContent>;

          <TabsContent value='quotes' className='space-y-6'>;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

            <EndpointSection
              method='POST'
              endpoint='/api/quotes'
              description='Create a quote request for a talent.'
              note='Requires quotes:write scope'
              params={[

              ]}

              code_examples={{
                curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;

  -d '{

    "talent_id": "talent_abc123",
    "project_name": "E - commerce Website Redesign",
    "project_summary": "Redesign our outdated e - commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2 - 3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "requester_name": "John Doe",

  headers: {

}),

const data = await response.json(),
logInfo(data),`,

const data = await response.json(),
logInfo(data),`,
                python: `import requests
import json

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
payload = {
    'talent_id': 'talent_abc123',
    'project_name': 'E-commerce Website Redesign',
    'project_summary': 'Redesign our outdated e-commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2-3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',
    'requester_email': 'john@example.com'
response = requests.post(
    'https://api.ziontechgroup.com/v1/quotes',
    headers=headers,
    data=json.dumps(payload)
)

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
}
;
payload = {;
    'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000,;
    'budget_max': 12000,;
    'requester_name': 'John Doerequester_email': 'john@example.com';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/quotes',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;
              }}
              responseExamples={{

            <EndpointSection
              method='GET'
              endpoint='/api/quotes'
              description="List quote requests that you've created."
              note=''
              params={[

              ]}
              codeExamples = {{
                curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {
                  name: 'limit',
                  type: 'integer',
                  description:;
                    'Number of results per page (default: 20, max: 100)',
                },
                {
                  name: 'status',
                  type: 'string',
                  description:;
                    'Filter by status (new, viewed, replied, archived)',
                },
              ]}
              code_examples = {{
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {

  method: 'GET',
  headers: {

<<<<<<< HEAD
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/quotes',
    headers=headers
)
data = response.json()

              }}
              response_examples={{
                success: `{
  "data": [;
    {
      "id": "quote_def456"
      "talent_id": "talent_abc123"
      "project_name": "E-commerce Website Redesign"
      "project_summary": "Redesign our outdated e-commerce website with modern UI"
      "budget_display": "$8,000 - $12,000"
      "status": "new"
      "created_at": "2025-05-16T14:30:15Z"
      "viewed_at": null
      "replied_at": null
    }
    // More quotes...

  "meta": {
    "total": 5
    "page": 1
    "limit": 20

      "id": "quote_def456",
      "talent_id": "talent_abc123",
      "project_name": "E - commerce Website Redesign",
      "project_summary": "Redesign our outdated e - commerce website with modern UI",
      "budget_display": "$8, 000 - $12, 000",
      "status": "new",
      "created_at": "2025 - 05 - 16T14:30:15Z",
      "viewed_at": null,
      "replied_at": null;
    },
    // More quotes...;
  ],
  "meta": {
    "total": 5,
    "page": 1,
    "limit": 20;

  }

              }}
            />
          </TabsContent>
          <TabsContent value='webhooks' className='space-y-6'>
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>
              <p className='text-zinc-400 mb-4'>
                The Zion API can send webhook notifications when certain events
                occur in your account. You can configure webhooks in the
                Webhooks tab of the Developer Dashboard.
              </p>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Authentication
              </h4>
              <p className='text-zinc-400 mb-4'>
                When you create a webhook, you can optionally provide a secret
                key. If a secret is provided, each webhook request will include
                a signature in the
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  X-Zion-Signature
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request
                body using your webhook secret as the key.
              </p>
              <CodeBlock
                code={`import crypto from 'crypto'
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret)
  const expectedSignature = hmac.update(payload).digest('hex')


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return crypto.timingSafeEqual(
    Buffer.from(signature)
    Buffer.from(expectedSignature)
  )
              <CodeBlock
                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",

                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Status Code</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        200 OK
                      </code>
                    </td>
                    <td className='py-2 px-4'>The request was successful.</td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        201 Created
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The resource was successfully created.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        400 Bad Request
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was invalid or cannot be otherwise served.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        401 Unauthorized
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      Authentication credentials were missing or invalid.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        403 Forbidden
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request is understood, but it has been refused or
                      access is not allowed.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        404 Not Found
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The requested resource does not exist.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        422 Unprocessable Entity
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was well-formed but was unable to be followed
                      due to semantic errors.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        429 Too Many Requests
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      The request was rejected due to rate limiting.
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4'>
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                        500 Internal Server Error
                      </code>
                    </td>
                    <td className='py-2 px-4'>
                      Something went wrong on our end.
                    </td>
                  </tr>
                </tbody>
              </table>

=======
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;

          <TabsContent value='errors' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>;
              <p className='text-zinc-400 mb-4'>;
            />;
          </TabsContent>;
          <TabsContent value='webhooks' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Webhook Events</h3>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Authentication;
              </h4>;
              <p className='text - zinc - 400 mb - 4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  X - Zion - Signature;
                </code>{' '}
                header. This signature is an HMAC SHA - 256 hash of the request;
                body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
/**
 * verifyWebhookSignature - Function description
 */
function verifyWebhookSignature() {
  const hmac = crypto.create_hmac ('sha256', secret);
  const expected_signature = hmac.update (payload).digest ('hex');
  return crypto.timingSafeEqual (
    Buffer.from (signature),
    Buffer.from (expected_signature));
// Example usage in Express.js;
app.post ('/webhook', express.raw ({type: 'application / json'}), (req, res) => {
  const signature = req.headers['x - zion - signature'];
  const payload = req.body.to_string ();
  const webhook_secret = process.env.WEBHOOK_SECRET;
  if () {) {
  $2
}
    return res.status (401).send ('Invalid signature');
  }
  // Process the webhook event;
  const event = JSON.parse (payload);
  log_info ('Received valid webhook:', { data: event });
  // Respond to acknowledge receipt;
  res.status (200).send ('Webhook received');
});`}
                language='javascript';
                showLineNumbers={true}              />;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Event Types</h4>;
              <table className='w - full border - collapse mt - 2'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Event Type</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      new_application;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      quote_received;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      talent_hired;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Sample Payloads;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Here's an example of a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  new_application;
                </code>{' '}
                webhook payload:;
              </p>;
              <CodeBlock;
                code = {`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025 - 05 - 16T15:30:00Z",
  "data": {
    "application_id": "app_123456",
    "job_id": "job_abc123",
    "talent_id": "talent_xyz789",
    "applied_at": "2025 - 05 - 16T15:28:30Z",
    "status": "new",
    "match_score": 85;
  , }
}`}
                language='json';
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;
          <TabsContent value='errors' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Error Responses</h3>;
              <p className='text - zinc - 400 mb - 4'>;

                The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;

              <table className='w - full border - collapse mt - 4'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Status Code</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        200 OK;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>The request was successful.</td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        201 Created;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The resource was successfully created.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        400 Bad Request;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was invalid or cannot be otherwise served.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        401 Unauthorized;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      Authentication credentials were missing or invalid.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        403 Forbidden;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;

                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;

                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        404 Not Found;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The requested resource does not exist.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        422 Unprocessable Entity;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was well - formed but was unable to be followed;
                      due to semantic errors.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        429 Too Many Requests;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was rejected due to rate limiting.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        500 Internal Server Error;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;

                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;


              
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>
              


              <CodeBlock
                code = {`{
  "error": {
    "code": "invalid_request"
    "message": "The request was invalid"
    "details": [
      {
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
              </p>;

              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;

              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Limit;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Error Response Format;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Error responses include a consistent JSON object with the;
                following format:;
              </p>;
              <CodeBlock;
                code = {`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [;
      {
        "field": "project_name",
        "message": "Project name is required";
      , }
    ];
  }
}`}
                language='json';
              />;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Rate Limiting</h4>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per - API key basis. If you exceed the rate limits, you will;
                receive a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
                response.;
              </p>;
              <p className='text - zinc - 400 mb - 2'>;
                Rate limit information is included in the response headers:;
              </p>;
              <ul className='list - disc pl - 6 space - y-1 text - zinc - 400'>;
                <li>;
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Limit;

                  </code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;

                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;

                  </code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;

                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;

                  </code>;
                  : Unix timestamp when the rate limit resets;
                </li>;
              </ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  );
}
;
// Helper component for API endpoint documentation;
function EndpointSection({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
  codeExamples;
  responseExamples;
}: EndpointSectionProps) {;
  const [activeTab, setActiveTab] = useState("curl");
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={;
              method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;

  return (
    <div className='border border-zinc-800 rounded-md'>
      <div className='p-4'>
        <div className='flex items-center'>
          <Badge
            variant='outline'
            className={
              method === 'GET'
                ? 'border-green-500 text-green-400 font-mono'
                : method === 'POST'
                  ? 'border-blue-500 text-blue-400 font-mono'
                  : method === 'PUT'
                    ? 'border-yellow-500 text-yellow-400 font-mono'
                    : 'border-red-500 text-red-400 font-mono'
            }          >
            {method}
          </Badge>
          <span className='ml-2 font-mono text-sm text-white'>{endpoint}</span>
          {note && (
            <Badge className='ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800'>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {codeExamples && (
        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button

      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? "bg-zinc-700 text-white"
                      : "text-zinc-400 hover:bg-zinc-800"
                  }`}

    </Card>);
// Helper component for API endpoint documentation;
/**
 * EndpointSection - Function description
 */
function EndpointSection() {
  const [active_tab, setActiveTab] = useState ('curl');
  return (
    <div className='border border - zinc - 800 rounded - md'>;
      <div className='p - 4'>;
        <div className='flex items - center'>;
          <Badge;
            variant='outline';
            className={
              method === 'GET';
                ? 'border - green - 500 text - green - 400 font - mono';
                : method === 'POST';
                  ? 'border - blue - 500 text - blue - 400 font - mono';
                  : method === 'PUT';
                    ? 'border - yellow - 500 text - yellow - 400 font - mono';
                    : 'border - red - 500 text - red - 400 font - mono';
            }          >;
            {method}
          </Badge>;
          <span className='ml - 2 font - mono text - sm text - white'>{endpoint}</span>;
          {note && (
            <Badge className='ml - auto bg - amber - 800 text - amber - 200 hover:bg - amber - 800'>;
              {note}
            </Badge>)}
        </div>;
        <p className='mt - 2 text - zinc - 400'>{description}</p>;
      </div>;
      {params.length > 0 && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Parameters</h4>;
          <table className='w - full'>;
            <thead>;
              <tr className='text - left border - b border - zinc - 800 text - sm'>;
                <th className='pb - 2'>Name</th>;
                <th className='pb - 2'>Type</th>;
                <th className='pb - 2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (
                <tr;
                  key={index}
                  className={
                    index < params.length - 1 ? 'border - b border - zinc - 800' : '';
                  }
                >;
                  <td className='py - 2 font - mono text - sm'>                    {param.name}
                    {param.required && <span className='text - red - 500'>*</span>}
                  </td>;
                  <td className='py - 2 text - sm text - zinc - 400'>{param.type}</td>;
                  <td className='py - 2 text - sm text - zinc - 400'>;
                    {param.description}
                  </td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
      {code_examples && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <div className='flex items - center mb - 2'>;
            <h4 className='font - medium'>Request Example</h4>;
            <div className='ml - auto flex border border - zinc - 700 rounded - md overflow - hidden'>;
              {Object.keys (code_examples).map (lang => (                <button;
                  key = {lang, }
                  className={`px - 3 py - 1 text - xs font - medium ${
                    active_tab === lang;
                      ? 'bg - zinc - 700 text - white';
                      : 'text - zinc - 400 hover:bg - zinc - 800';
                  }`}
                  on_click = {(, ) => setActiveTab (lang), }

                >;
                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}

            code={codeExamples[activeTab] || '// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />;
        </div>;
      )}

      {responseExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Response</h4>;
          <CodeBlock code={responseExamples && responseExamples.success} language='json' />        </div>;
      )}
    </div>;
  );
}

                </button>))}
            </div>;
          </div>;
          <CodeBlock;
            code={code_examples[active_tab] || '// Code example not available'}
            language={active_tab === 'curl' ? 'bash' : active_tab}          />;
        </div>)}
      {response_examples && (
        <div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Response</h4>;
          <CodeBlock code={response_examples.success} language='json' />        </div>)}
    </div>);
}
;
                  onClick={() => setActiveTab(lang)}
<<<<<<< HEAD

        </div>
      )}
      {responseExamples && (

        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Response</h4>
          <CodeBlock code={responseExamples.success} language='json' />        </div>
      )}
    </div>
  )
}

        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}
      {responseExamples && (
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Response</h4>
          <CodeBlock code={responseExamples.success} language='json' />        </div>
      )}
    </div>
  )
}
          <CodeBlock 
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}
          />
        </div>
      )}
      
      {responseExamples && (

;
}
}
}
}
}
}
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />

        </div>
      )}
    </div>;
  );
}
;
