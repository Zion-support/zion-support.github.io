
<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import React from &quot;react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;
import { CodeBlock } from &quot;@/components/developers/CodeBlock&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1',
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
  }
}),

// Get all jobs
async function getJobs(filters = {}) {
  try {
    const response = await api.get('/api/jobs', { params: filters }),
    return response.data
  } catch (error) {
    console.error('Error fetching jobs:', error.response?.data || error.message),
    throw error
  }
}

// Post a new job
async function createJob(jobData) {
  try {
    const response = await api.post('/api/jobs', jobData),
    return response.data
  } catch (error) {
    console.error('Error creating job:', error.response?.data || error.message),
    throw error
  }
}

// Search for talent
async function searchTalent(filters = {}) {
  try {
    const response = await api.get('/api/talent', { params: filters }),
    return response.data
  } catch (error) {
    console.error('Error searching talent:', error.response?.data || error.message),
    throw error
  }
}

// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
=======
    const jobs = await getJobs({ status: 'open', limit: 5 });
    // console.log('Jobs:', jobs);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Create a new job
    const newJob = await createJob({
      title: 'Frontend Developer',
      description: 'We need a skilled frontend developer...',
      category: 'development',
      budget: {
        min: 5000,
        max: 7500,
        currency: 'USD'
      },
<<<<<<< HEAD
      skills: ['ReactTypeScriptTailwind CSS']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with React skills
    const talent = await searchTalent({ skills: 'React', limit: 10 }),
    // // // console.log('Talent:', talent)
=======
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    });
    // console.log('New job created:', newJob);
    
    // Search for talent with React skills
    const talent = await searchTalent({ skills: 'React', limit: 10 });
    // console.log('Talent:', talent);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}

main(),`,

  // Python example with requests
  const pythonExample = `# Using requests with Python
import requests
import json

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.zionai.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json'
}

def get_jobs(filters=None):
    &quot;"&quot;Get all jobs with optional filters&quot;"&quot;
    url = f&quot;{BASE_URL}/api/jobs&quot;
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()  # Raise exception for 4XX/5XX responses
    return response.json()

def create_job(job_data):
    &quot;"&quot;Create a new job posting&quot;"&quot;
    url = f&quot;{BASE_URL}/api/jobs&quot;
    response = requests.post(url, json=job_data, headers=headers)
    response.raise_for_status()
    return response.json()

def search_talent(filters=None):
    &quot;"&quot;Search for talent with optional filters&quot;"&quot;
    url = f&quot;{BASE_URL}/api/talent&quot;
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()
    return response.json()

# Example usage
if __name__ == &quot;__main__&quot;:
    try:
        # Get all open jobs
<<<<<<< HEAD
        jobs = get_jobs({'status': 'openlimit': 5})
        print(f"Found {len(jobs['jobs'])} jobs")
=======
        jobs = get_jobs({'status': 'open', 'limit': 5})
        print(f&quot;Found {len(jobs['jobs'])} jobs&quot;)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        # Create a new job
        new_job = create_job({
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,
                'currency': 'USD'
            },
            'skills': ['PythonMachine LearningSQL']
        })
        print(f&quot;New job created with ID: {new_job['id']}&quot;)
        
        # Search for talent with Python skills
<<<<<<< HEAD
        talent = search_talent({'skills': 'Pythonlimit': 10})
        print(f"Found {len(talent['talent'])} talented people")
=======
        talent = search_talent({'skills': 'Python', 'limit': 10})
        print(f&quot;Found {len(talent['talent'])} talented people&quot;)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
    except requests.exceptions.HTTPError as e:
        print(f&quot;HTTP Error: {e}&quot;)
        print(f&quot;Response: {e.response.text}&quot;)
    except Exception as e:
<<<<<<< HEAD
        print(f"Error: {e}")`,
=======
        print(f&quot;Error: {e}&quot;)`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Node.js example with fetch
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',
const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`,
  
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json',
    ...options.headers
  },
  
  const config = {
    ...options,
    headers
  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
  }
  
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
  const params = new URLSearchParams(),
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })
}

// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(jobData)
  })
}

// Search for talent
async function searchTalent(filters = {}) {
  const params = new URLSearchParams(),
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' })
}

// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
=======
    const jobs = await getJobs({ status: 'open', limit: 5 });
    // console.log('Jobs:', jobs);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer',
      description: 'We need a skilled backend developer...',
      category: 'development',
      budget: {
        min: 6000,
        max: 8000,
        currency: 'USD'
      },
<<<<<<< HEAD
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)
=======
      skills: ['Node.js', 'Express', 'MongoDB']
    });
    // console.log('New job created:', newJob);
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 });
    // console.log('Talent:', talent);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}

main(),`,

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Sample Code</h1>
        
        <p>
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API
          using different programming languages and libraries.
        </p>

        <h2>Authentication</h2>
        <p>
          All API requests require authentication using API keys. Make sure to include your API key
          in the Authorization header as shown in the examples below.
        </p>
        
        <div className=&quot;bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6&quot;>
          <h3 className=&quot;text-yellow-500 text-sm font-medium mt-0&quot;>Security Warning</h3>
          <p className=&quot;text-sm text-yellow-300/90 mb-0&quot;>
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.
          </p>
        </div>

        <h2>Code Examples</h2>
        <Tabs defaultValue=&quot;javascript&quot;>
          <TabsList>
            <TabsTrigger value=&quot;javascript&quot;>JavaScript (Axios)</TabsTrigger>
            <TabsTrigger value=&quot;python&quot;>Python</TabsTrigger>
            <TabsTrigger value=&quot;node&quot;>Node.js (fetch)</TabsTrigger>
          </TabsList>
          <TabsContent value=&quot;javascript&quot;>
            <p>Using Axios with JavaScript:</p>
            <CodeBlock code={jsAxiosExample} language=&quot;javascript&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;python&quot;>
            <p>Using requests with Python:</p>
            <CodeBlock code={pythonExample} language=&quot;python&quot; showLineNumbers={true} />
          </TabsContent>
          <TabsContent value=&quot;node&quot;>
            <p>Using fetch with Node.js:</p>
            <CodeBlock code={nodeFetchExample} language=&quot;javascript&quot; showLineNumbers={true} />
          </TabsContent>
        </Tabs>

        <h2>Using the Examples</h2>
        <p>
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key,
          which you can generate in the <a href=&quot;/developers/portal&quot; className=&quot;text-zion-cyan&quot;>Developer Portal</Link>.
        </p>
        
        <h2>Additional Resources</h2>
        <ul>
          <li>Download our <a href=&quot;#&quot; className=&quot;text-zion-cyan&quot;>Postman Collection</Link> for easy API testing</li>
          <li>Check out our <a href=&quot;#&quot; className=&quot;text-zion-cyan&quot;>GitHub repository</Link> for more code examples</li>
          <li>Join our <a href=&quot;#&quot; className=&quot;text-zion-cyan&quot;>Developer Discord</Link> for community support</li>
        </ul>
      </div>
    </ApiDocsLayout>
  )
}

export default ApiSampleCode,
