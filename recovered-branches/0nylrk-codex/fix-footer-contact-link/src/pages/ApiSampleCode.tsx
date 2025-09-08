

import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiSampleCode() {
  // JavaScript example with Axios
<<<<<<< HEAD
=======
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
export function ApiSampleCode() {
  // JavaScript example with Axios
}
// Configure Axios with the base URL and headers,
const api = axios.create({
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const jsAxiosExample = `// Using Axios with JavaScript

import axios from 'axios';
// Configure Axios with the base URL and headers;
const api = axios.create({'
  baseURL: 'https://api.zionai.com/v1'
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
export /**;
 * ApiSampleCode - Function description;
 */
<<<<<<< HEAD

function ApiSampleCode() {}
  // JavaScript example with Axios;`
  const jsAxiosExample = `// Using Axios with JavaScript;'
import axios from 'axios';

=======
function ApiSampleCode() {
  // JavaScript example with Axios;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Configure Axios with the base URL and headers;
const api = axios.create ({'
  baseURL: 'https://api.zionai.com / v1',
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
    // Get all open jobs    // Create a new job
    const newJob = await createJob({
      title: 'Frontend Developer'
      description: 'We need a skilled frontend developer...'

      category: 'development'
<<<<<<< HEAD
      budget: {
        min: 5000
        max: 7500
        currency: 'USD'
      }
      skills: ['ReactTypeScriptTailwind CSS']
    });
    console.log('New job created:', newJob);
    // Search for talent with React skills  }
}

main(),`;
  // Python example with requests;`
  const pythonExample = `# Using requests with Python;
import requests;
import json'
API_KEY = 'YOUR_API_KEY''
BASE_URL = 'https://api.zionai.com/v1'
headers = {'
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json'
// Get all jobs;
async function getJobs(): any (filters = {}) {;
  try {;'
    const response = await api && api.get('/api/jobs', { params: filters }),;
    return response && response.data;
  } catch (error) {;'
    console && console.error('Error fetching jobs:', error && error.response?.data || error && error.message);
    throw error;
  }
}
// Post a new job;
async function createJob(): any (jobData) {;
  try {;'
    const response = await api && api.post('/api/jobs', jobData);
    return response && response.data;
  } catch (error) {;'
    console && console.error('Error creating job:', error && error.response?.data || error && error.message);
    throw error;
  }
}
// Search for talent;
async function searchTalent(): any (filters = {}) {;
  try {;'
    const response = await api && api.get('/api/talent', { params: filters }),;
    return response && response.data;
  } catch (error) {;'
    console && console.error('Error searching talent:', error && error.response?.data || error && error.message);
    throw error;
  }
}

// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;    // Create a new job;
    const newJob = await createJob({;
      title: 'Frontend Developer',,
  description: 'We need a skilled frontend developer...',;
      category: 'development',;
      budget: {;
        min: 5000,;
        max: 7500,;
        currency: 'USD'
};
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console && console.log('New job created:', newJob);

<<<<<<< HEAD

=======
    console.error ('Error creating job:', error.response?.data || error.message);
    throw error;
  }
}
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    // // // console.log('Jobs:', jobs),;
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
main(),`;        })
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



=======

                'currency': 'USD'

}

def get_jobs(filters=None):"
    """Get all jobs with optional filters""""
    url = f"{BASE_URL}/api/jobs"
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response.json()
def create_job(job_data):"
    """Create a new job posting""""
    url = f"{BASE_URL}/api/jobs"
    response = requests.post(url, json=job_data, headers=headers)
    response.raise_for_status()
    return response.json()
def search_talent(filters=None):"
    """Search for talent with optional filters""""
    url = f"{BASE_URL}/api/talent"
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()
    return response.json()
# Example usage"
if __name__ == "__main__":
    try:
        # Get all open jobs'
        jobs = get_jobs({'status': 'openlimit': 5})'"
        print(f"Found {len(jobs['jobs'])} jobs")
        # Create a new job;
        new_job = create_job({}
'
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;'
                'min': 6000;'
                'max': 9000;'
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {'
                'min': 6000,'
                'max': 9000,'
                'currency': 'USD'
            }
            },

            'skills': ['PythonMachine LearningSQL']
        })

        print(f"New job created with ID: {new_job['id']}")
        # Search for talent with Python skills'
        talent = search_talent({'skills': 'Pythonlimit': 10})'"
        print(f"Found {len(talent['talent'])} talented people")
    except requests.exceptions.HTTPError as e:"
        print(f"HTTP Error: {e}")"
        print(f"Response: {e.response.text}")
    except Exception as e:"`
        print(f"Error: {e}")`;

  // Node.js example with fetch  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers

  },
  

  const config = {
    ...options;
    headers

  // Python example with requests;
=======
  // Python example with requests;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const pythonExample = `# Using requests with Python;
import requests;
import json;

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)

headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';
}

def get_jobs(filters=None):;
    """Get all jobs with optional filters""";
    url = f"{BASE_URL}/api/jobs";
    response = requests && requests.get(url, params=filters, headers=headers);
    response && response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response && response.json();

def create_job(job_data):;
    """Create a new job posting""";
    url = f"{BASE_URL}/api/jobs";
    response = requests && requests.post(url, json=job_data, headers=headers);
    response && response.raise_for_status();
    return response && response.json();

def search_talent(filters=None):;
    """Search for talent with optional filters""";
    url = f"{BASE_URL}/api/talent";
    response = requests && requests.get(url, params=filters, headers=headers);
    response && response.raise_for_status();
    return response && response.json();
;
def get_jobs(filters=None):;
    """Get all jobs with optional filters""";

    url = f"{BASE_URL}/api/jobs";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response.json();
def create_job(job_data):;"
    """Create a new job posting""";"
    url = f"{BASE_URL}/api/jobs";
    response = requests.post(url, json=job_data, headers=headers);
    response.raise_for_status();
    return response.json();
def search_talent(filters=None):;"
    """Search for talent with optional filters""";"
    url = f"{BASE_URL}/api/talent";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status();
    return response.json();  }
  return response.json()
}

// Get all jobs;
async function getJobs(): any (filters = {}) {;
  // Convert filters to query string;

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
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
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });}
// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST'
    body: JSON.stringify(jobData)
  })
}

  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });

// Search for talent
async function searchTalent(filters = {}) {

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {}
    params.append(key, value)
  });
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
// Search for talent;
async function searchTalent(filters = {}) {;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });  } catch (error) {
    console.error('Something went wrong:', error)
  }
}        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
        <h2>Authentication</h2>;
;

export default ApiSampleCode;