
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
export function ApiSampleCode() {
  // JavaScript example with Axios,
const jsAxiosExample = `// Using Axios with JavaScript,
import axios from 'axios',
// Configure Axios with the base URL and headers,
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1',
  headers: {
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiSampleCode() {_// JavaScript example with Axios,
const jsAxiosExample = `// Using Axios with JavaScript,
import axios from 'axios';

// Configure Axios with the base window.URL and headers,
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1', headers: {
    'Authorization': \`Bearer \${YOURAPI_KEY}\`,
    'Content-Type': 'application/json'
  }
}),

// Get all jobs,
async function getJobs(filters = {}) {
  try {
    const response = await api.get('/api/jobs', { params: filters }),
    return response.data
  } catch (error) {
    console.error('Error fetching jobs:', error.response?.data || error.message),
    throw error
  }
}

// Post a new job,
async function createJob(jobData) {
  try {
    const response = await api.post('/api/jobs', jobData),
    return response.data
  } catch (error) {
    console.error('Error creating job:', error.response?.data || error.message),
    throw error
  }
}

// Search for talent,
async function searchTalent(filters = {}) {
  try {
    const response = await api.get('/api/talent', { params: filters }),
    return response.data
  } catch (error) {
    console.error('Error searching talent:', error.response?.data || error.message),
    throw error
  }}

// Example usage,
async function main() {try {
    // Get all open jobs,
const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),    
    // Create a new job,
const newJob = await createJob({
      title: 'Frontend Developer',
      description: 'We need a skilled frontend developer...',
      category: 'development',
      budget: {
        min: 5000,
        max: 7500,
        currency: 'USD'
      },
      skills: ['ReactTypeScriptTailwind CSS']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with React skills,
const talent = await searchTalent({ skills: 'React', limit: 10 }),
    // // // console.log('Talent:', talent)  } catch (error) {
    console.error('Something went wrong:', error)
  }
    const jobs = await getJobs({ status: 'open', limit: 5});

    // Create a new job,
const newJob = await createJob({title: 'Frontend Developer', description: 'We need a skilled frontend developer...', category: 'development', budget: {
        min: 5000, max: 7500, currency: 'USD'},
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    });

    // Search for talent with React skills,
const talent = await searchTalent({skills: 'React', limit: 10})
    
  } catch (error) {}
}

main(),`,

  // Python example with requests,
const pythonExample = `# Using requests with Python,
import requests,
import json,
APIKEY = 'YOURAPI_KEY'
BASEURL = 'https://api.zionai.com/v1'

headers = {
    'Authorization': f'Bearer {APIKEY}Content-Type': 'application/json'
}

def getjobs(filters=None):
    &quot;"&quot;Get all jobs with optional filters&quot;"&quot;
    url = f&quot;{BASEURL}/api/jobs&quot;    response = requests.get(url, params=filters, headers=headers)
    response.raisefor_status()  # Raise exception for 4XX/5XX responses,
return response.json()

def createjob(jobdata):
    &quot;"&quot;Create a new job posting&quot;"&quot;
    url = f&quot;{BASEURL}/api/jobs&quot;    response = requests.post(url, json=jobdata, headers=headers)
    response.raisefor_status()
    return response.json()

def searchtalent(filters=None):
    &quot;"&quot;Search for talent with optional filters&quot;"&quot;
    url = f&quot;{BASEURL}/api/talent&quot;    response = requests.get(url, params=filters, headers=headers)
    response.raisefor_status()
    return response.json()

# Example usage,
if _name__ == &quot;_main__&quot;:
    try:
        # Get all open jobs,
jobs = getjobs({'status': 'openlimit': 5})
        print(f"Found {len(jobs['jobs'])} jobs")        
        # Create a new job,
newjob = createjob({
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,
                'currency': 'USD'
            },
            'skills': ['PythonMachine LearningSQL']
        })
        print(f&quot;New job created with ID: {newjob['id']}&quot;)
        
        # Search for talent with Python skills,
talent = searchtalent({'skills': 'Pythonlimit': 10})
        print(f"Found {len(talent['talent'])} talented people")        
    except requests.exceptions.HTTPError as e:
        print(f&quot;HTTP Error: {e}&quot;)
        print(f&quot;Response: {e.response.text}&quot;)
    except Exception as e:
        print(f"Error: {e}")`,
  // Node.js example with fetch,
const nodeFetchExample = `// Using node-fetch with Node.js,
import fetch from 'node-fetch',
const APIKEY = 'YOURAPI_KEY',
const BASEURL = 'https: //api.zionai.com/v1',

// Helper to handle API requests,
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASEURL}\${endpoint}\`,
        jobs = getjobs({_'status': 'open', _'limit': 5})
        print(f"Found {len(jobs['jobs'])} jobs")
        
        # Create a new job,
newjob = createjob({_'title': 'Data Scientist', _'description': 'Looking for an experienced data scientist...', _'category': 'data', _'budget': {
                'min': 6000, _'max': 9000, _'currency': 'USD'},
            'skills': ['Python', 'Machine Learning', 'SQL']
        })
        print(f"New job created with ID: {new_job['id']}")
        
        # Search for talent with Python skills,
talent = searchtalent({_'skills': 'Python', _'limit': 10})
        print(f"Found {len(talent['talent'])} talented people")
        
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
        print(f"Response: {e.response.text}")
    except Exception as e:
        print(f"Error: {e}")`;

  // Node.js example with fetch,
const nodeFetchExample = `// Using node-fetch with Node.js,
import fetch from 'node-fetch';

const API_KEY = 'YOURAPI_KEY';
const BASE_URL = 'https://api.zionai.com/v1';

// Helper to handle API requests,
async function apiRequest(endpoint, options = {}) {const url = \`\${BASEURL}\${endpoint}\`;
  
  const headers = {_'Authorization': \`Bearer \${APIKEY}\`,
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
    throw new Error(error.message || \`API error: \${response.status}\`)  }
  
  return response.json()
}

// Get all jobs,
async function getJobs(filters = {}) {
  // Convert filters to query string,
const params = new URLSearchParams(),
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })
}

// Post a new job,
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST',
    body: JSON.stringify(jobData)
  })
}

// Search for talent,
async function searchTalent(filters = {}) {
  const params = new URLSearchParams(),
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' })}

// Example usage,
async function main() {try {
    // Get all open jobs,
const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),    
    // Create a new job,
const newJob = await createJob({
      title: 'Backend Developer',
      description: 'We need a skilled backend developer...',
      category: 'development',
      budget: {
        min: 6000,
        max: 8000,
        currency: 'USD'
      },
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills,
const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)  } catch (error) {
    console.error('Something went wrong:', error)
  }
    const jobs = await getJobs({ status: 'open', limit: 5});

    // Create a new job,
const newJob = await createJob({title: 'Backend Developer', description: 'We need a skilled backend developer...', category: 'development', budget: {
        min: 6000, max: 8000, currency: 'USD'},
      skills: ['Node.js', 'Express', 'MongoDB']
    });

    // Search for talent with Node.js skills,
const talent = await searchTalent({skills: 'Node.js', limit: 10})
    
  } catch (error) {}
}

main(),`,

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Sample Code</h1>
        
        <p>
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API,
using different programming languages and libraries.
        </p>

        <h2>Authentication</h2>
        <p>
          All API requests require authentication using API keys. Make sure to include your API key,
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
            <CodeBlock code={jsAxiosExample} language=&quot;javascript&quot; showLineNumbers={true} />          </TabsContent>
          <TabsContent value=&quot;python&quot;>
            <p>Using requests with Python:</p>
            <CodeBlock code={pythonExample} language=&quot;python&quot; showLineNumbers={true} />          </TabsContent>
          <TabsContent value=&quot;node&quot;>
            <p>Using fetch with Node.js:</p>
            <CodeBlock code={nodeFetchExample} language=&quot;javascript&quot; showLineNumbers={true} />          </TabsContent>
        </Tabs>

        <h2>Using the Examples</h2>
        <p>
          To use these examples, you'll need to replace 'YOURAPI_KEY' with your actual API key,
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
