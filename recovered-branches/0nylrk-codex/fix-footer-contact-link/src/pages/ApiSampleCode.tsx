



import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
;
export /**
 * ApiSampleCode - Function description
 */
function ApiSampleCode() {
  // JavaScript example with Axios;
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
// Configure Axios with the base URL and headers;
const api = axios.create ({
  baseURL: 'https://api.zionai.com / v1',
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});
;
// Get all jobs;
async /**
 * get_jobs - Function description
 */
function get_jobs() {
  try {
    const response = await api.get ('/api / jobs', { params: filters }),
    return response.data;
  } catch (error) {
    console.error ('Error fetching jobs:', error.response?.data || error.message);
    throw error;
  }
}
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiSampleCode() {;
  // JavaScript example with Axios;
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios',;
// Configure Axios with the base URL and headers;
const api = axios.create({;
  baseURL: 'https://api.zionai.com/v1',;
  headers: {;
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,;
    'Content-Type': 'application/json';
  }
}),;
// Get all jobs;
async function getJobs(filters = {}) {;
  try {;
    const response = await api.get('/api/jobs', { params: filters }),;
    return response.data;
  } catch (error) {;
    console.error('Error fetching jobs:', error.response?.data || error.message),;
    throw error;
  }
}
// Search for talent
async function searchTalent(filters = {}) {
  try {
    const response = await api.get('/api/talent', { params: filters })
    return response.data
  } catch (error) {
    console.error('Error searching talent:', error.response?.data |error.message);
    throw error
  }
}
// Example usage
async function main() {
  try {
    // Get all open jobs
    // Create a new job
    const newJob = await createJob({
      title: 'Frontend Developer'
      description: 'We need a skilled frontend developer...'
      category: 'development'
      budget: {
        min: 5000
        max: 7500
        currency: 'USD'
      }
      skills: ['ReactTypeScriptTailwind CSS']
    });
    console.log('New job created:', newJob);
    // Search for talent with React skills
    const talent = await searchTalent({ skills: 'React', limit: 10 })
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}
main(),`;
  // Python example with requests
  const pythonExample = `# Using requests with Python
import requests
import json
API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.zionai.com/v1'
headers = {
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json'
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    // Create a new job;
    const newJob = await createJob({;
      title: 'Frontend Developer',;
      description: 'We need a skilled frontend developer...',;
      category: 'development',;
      budget: {;
        min: 5000,;
        max: 7500,;
        currency: 'USD';
  }
}
main(),`;
    console.error ('Error creating job:', error.response?.data || error.message);
    throw error;
  }
}
// Search for talent;
async /**
 * search_talent - Function description
 */
function search_talent() {
  try {
    const response = await api.get ('/api / talent', { params: filters }),
    return response.data;
  } catch (error) {
    console.error ('Error searching talent:', error.response?.data || error.message);
    throw error;
  }
}
// Example usage;
async /**
 * main - Function description
 */
function main() {
  try {
    // Get all open jobs;
    const jobs = await get_jobs ({ status: 'open', limit: 5 }),
    console.log ('Jobs:', jobs);
;
    // Create a new job;
    const new_job = await create_job ({
      title: 'Frontend Developer',
      description: 'We need a skilled frontend developer...',
      category: 'development',
      budget: {
        min: 5000,
        max: 7500,
        currency: 'USD';
      }
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console.log ('New job created:', new_job);
;
    // Search for talent with React skills;
    const talent = await search_talent ({ skills: 'React', limit: 10 }),
    console.log ('Talent:', talent);
  } catch (error) {
    console.error ('Something went wrong:', error);
  }
}
main (), `;
;
  // Python example with requests;
  const python_example = `# Using requests with Python;
import requests;
import json;
API_KEY = 'YOUR_API_KEY';
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
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()
    return response.json()
# Example usage
if __name__ == "__main__":
    try:
        # Get all open jobs
        jobs = get_jobs({'status': 'openlimit': 5})
        print(f"Found {len(jobs['jobs'])} jobs")
        # Create a new job
        new_job = create_job({
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000;
                'max': 9000;
                'currency': 'USD'
            'skills': ['PythonMachine LearningSQL']
        })
        print(f"New job created with ID: {new_job['id']}")
        # Search for talent with Python skills
        talent = search_talent({'skills': 'Pythonlimit': 10})
        print(f"Found {len(talent['talent'])} talented people")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
        print(f"Response: {e.response.text}")
    except Exception as e:
        print(f"Error: {e}")`
  // Node.js example with fetch
const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers
  const config = {
    ...options;
    headers
  }
  const response = await fetch(url, config);
  if (!response.ok) {
;
def get_jobs(filters=None):;
    """Get all jobs with optional filters""";
    url = f"{BASE_URL}/api/jobs";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response.json();
def create_job(job_data):;
    """Create a new job posting""";
    url = f"{BASE_URL}/api/jobs";
    response = requests.post(url, json=job_data, headers=headers);
    response.raise_for_status();
    return response.json();
def search_talent(filters=None):;
    """Search for talent with optional filters""";
    url = f"{BASE_URL}/api/talent";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status();
    return response.json();
# Example usage;
if __name__ == "__main__":;
    try:;
        # Get all open jobs;
        jobs = get_jobs({'status': 'openlimit': 5});
        print(f"Found {len(jobs['jobs'])} jobs");
        # Create a new job;
        new_job = create_job({;
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000,;
                'max': 9000,;
                'currency': 'USD';
            },;
            'skills': ['PythonMachine LearningSQL'];
        });
        print(f"New job created with ID: {new_job['id']}");
        # Search for talent with Python skills;
        talent = search_talent({'skills': 'Pythonlimit': 10});
        print(f"Found {len(talent['talent'])} talented people");
    except requests.exceptions.HTTPError as e:;
        print(f"HTTP Error: {e}");
        print(f"Response: {e.response.text}");
    except Exception as e:;
        print(f"Error: {e}")`,;
  // Node.js example with fetch;
  const nodeFetchExample = `// Using node-fetch with Node.js;
import fetch from 'node-fetch',;
const API_KEY = 'YOUR_API_KEY',;
const BASE_URL = 'https: //api.zionai.com/v1',;
// Helper to handle API requests;
async function apiRequest(endpoint, options = {}) {;
  const url = \`\${BASE_URL}\${endpoint}\`,;
  const headers = {;
    'Authorization': \`Bearer \${API_KEY}\`,;
    'Content-Type': 'application/json',;
    ...options.headers;
  },;
  const config = {;
    ...options,;
    headers;
  }
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });
;
// Get all jobs;
async function getJobs(filters = {}) {;
  // Convert filters to query string;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });
}
// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST'
    body: JSON.stringify(jobData)
  })
}

// Search for talent
async function searchTalent(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  });
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' })
;
// Search for talent;
async function searchTalent(filters = {}) {;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}

// Example usage
async function main() {
  try {
    // Get all open jobs
    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer'
      description: 'We need a skilled backend developer...'
      category: 'development'
      budget: {
        min: 6000
        max: 8000
        currency: 'USD'
      skills: ['Node.jsExpressMongoDB']
    });
    console.log('New job created:', newJob);
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 })
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
}

;
export default ApiSampleCode;
