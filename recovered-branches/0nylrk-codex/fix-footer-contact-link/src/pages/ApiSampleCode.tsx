
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';
// Configure Axios with the base URL and headers
const api = axios.create($2);
// Get all jobs
async function getJobs(filters = {}) {
  try {
    const response = await api.get($2);
    return response.data
  } catch (error) {
    console.error($2);
    throw error
  }
}

// Post a new job
async function createJob(jobData) {
  try {
    const response = await api.post($2);
    return response.data
  } catch (error) {
    console.error($2);
    throw error
  }
}

// Search for talent
async function searchTalent(filters = {}) {
  try {
    const response = await api.get($2);
    return response.data
  } catch (error) {
    console.error($2);
    throw error
  }
}

// Example usage
async function main() {
  try {
    // Get all open jobs
    const jobs = await getJobs($2);
    console.log($2);
    // Create a new job
    const newJob = await createJob($2);
    console.log($2);
    // Search for talent with React skills
    const talent = await searchTalent($2);
    console.log('Talent:', talent)
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
    """Get all jobs with optional filters"""
    url = f"{BASE_URL}/api/jobs"
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()  # Raise exception for 4XX/5XX responses
    return response.json()

def create_job(job_data):
    """Create a new job posting"""
    url = f"{BASE_URL}/api/jobs"
    response = requests.post(url, json=job_data, headers=headers)
    response.raise_for_status()
    return response.json()

def search_talent(filters=None):
    """Search for talent with optional filters"""
    url = f"{BASE_URL}/api/talent"
    response = requests.get(url, params=filters, headers = $2;
                'max': 9000,
                'currency': 'USD'
            },
            'skills': ['PythonMachine LearningSQL']
        })
        print(f"New job created with ID: {new_job['id']}")
        
        # Search for talent with Python skills
        talent = $2;
  // Node.js example with fetch
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch';
const API_KEY = $2;
const BASE_URL = $2;
// Helper to handle API requests
async function apiRequest(endpoint, options = $2;
  const headers = $2;
    'Content-Type': 'application/json',
    ...options.headers
  },
  
  const config = $2;
    headers
  },
  
  const response = await fetch($2);
  if (!response.ok) {
    const error = await response.json($2);
    throw new Error(error.message || \`API error: \${response.status}\`)
  }
  
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
  const params = new URLSearchParams($2);
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = $2;
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
  const params = new URLSearchParams($2);
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  }),
  
  const queryString = $2;
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' })
}

// Example usage
async function main() {
  try {
    // Get all open jobs
    const jobs = await getJobs($2);
    console.log($2);
    // Create a new job
    const newJob = await createJob($2);
    console.log($2);
    // Search for talent with Node.js skills
    const talent = await searchTalent($2);
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}

main(),`,

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
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
        
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>
          <p className="text-sm text-yellow-300/90 mb-0">
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.
          </p>
        </div>

        <h2>Code Examples</h2>
        <Tabs defaultValue="javascript">
          <TabsList>
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>
          </TabsList>
          <TabsContent value="javascript">
            <p>Using Axios with JavaScript:</p>
            <CodeBlock code={jsAxiosExample} language="javascript" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="python">
            <p>Using requests with Python:</p>
            <CodeBlock code={pythonExample} language="python" showLineNumbers={true} />
          </TabsContent>
          <TabsContent value="node">
            <p>Using fetch with Node.js:</p>
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />
          </TabsContent>
        </Tabs>

        <h2>Using the Examples</h2>
        <p>
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key,
          which you can generate in the <a href = $2;