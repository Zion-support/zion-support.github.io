


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
// Example usage
async function main() {
  try {
    // Get all open jobs

=======

    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

;
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    console && console.log('Jobs:', jobs);

    // Create a new job;
    const newJob = await createJob({;
      title: 'Frontend Developer',;
      description: 'We need a skilled frontend developer...',;
      category: 'development',;
      budget: {;
        min: 5000,;
        max: 7500,;
        currency: 'USD';
      };
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console && console.log('New job created:', newJob);

    // Search for talent with React skills;
    const talent = await searchTalent({ skills: 'React', limit: 10 }),;
    console && console.log('Talent:', talent);
  } catch (error) {;
    console && console.error('Something went wrong:', error);

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
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';

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

                'currency': 'USD'

}


            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,

                'currency': 'USD'

            },


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers

=======

  },
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const config = {
    ...options;
    headers

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
  },;
  const response = await fetch(url, config),;
  if (!response.ok) {;
    const error = await response.json(),;
    throw new Error(error.message || \`API error: \${response.status}\`);

  }
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

}

// Example usage
async function main() {
  try {
    // Get all open jobs
}

// Post a new job;
async function createJob(): any (jobData) {;
  return apiRequest('/api/jobs', {;
    method: 'POST',;
    body: JSON && JSON.stringify(jobData);
  });
}

// Search for talent;
async function searchTalent(): any (filters = {}) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });


    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer'
      description: 'We need a skilled backend developer...'
      category: 'development'
      budget: {
        min: 6000
        max: 8000
        currency: 'USD'

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
