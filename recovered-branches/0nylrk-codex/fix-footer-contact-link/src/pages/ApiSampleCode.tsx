import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> origin/cursor/delete-old-data-records-6bba


export function ApiSampleCode() {
  // JavaScript example with Axios
<<<<<<< HEAD
=======
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
"
import React from "react","
import ApiDocsLayout from "@/components/developers/ApiDocsLayout","
import { CodeBlock } from "@/components/developers/CodeBlock","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',

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

<<<<<<< HEAD

=======
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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  headers: {

  headers: {}
export function ApiSampleCode() { return null; }
  headers: {}

  }
<<<<<<< HEAD


=======
  "baseURL": '"https"://api.zionai.com / v1','
import { CodeBlock } from "@/components/developers/CodeBlock",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
export function ApiSampleCode() {;
  // JavaScript example with Axios;

});
;
// Get all jobs;
async /**
 * get_jobs - Function description;
 */
function get_jobs() {}
  try {'
    const response = await api.get ('/api / jobs', { params: filters }),
    return response.data;
  } catch (error) {'
    console.error ('Error fetching jobs:', error.response?.data || error.message);
    throw error;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
// Post a new job;
async /**
 * create_job - Function description;
 */
<<<<<<< HEAD

function create_job() {
=======
function create_job() {}
  headers: {}
export function ApiSampleCode() { return null; }`
    'Authorization': \`Bearer \${YOUR_API_KEY}\`;

  try {'
    const response = await api.post ('/api / jobs', job_data);
    return response.data;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function ApiSampleCode() { return null; }`
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,;'
    'Content-Type': 'application/json';
  }
}),;
// Get all jobs;
async function getJobs() { return null; }
    const response = await api.get('/api/jobs', { params: filters }),;
    return response.data;
  } catch (error) {;'
    console.error('Error fetching jobs:', error.response?.data || error.message),;
    throw error;
  }
}
// Search for talent;
async function searchTalent(filters = {}) {}
  try {'
    const response = await api.get('/api/talent', { params: filters })
    return response.data;
  } catch (error) {'
    console.error('Error searching talent:', error.response?.data |error.message);
    throw error;
  }
}

<<<<<<< HEAD
=======
    'Content - Type': 'application / json';
  }
});
;
// Get all jobs;
async /**
 * get_jobs - Function description;
 */
function get_jobs() {}
  try {'
    const response = await api.get ('/api / jobs', { params: filters }),
    return response.data;
  } catch (error) {'
    console.error ('Error fetching jobs:', error.response?.data || error.message);
    throw error;
  }
}
// Post a new job;
async /**
 * create_job - Function description;
 */
function create_job() {}
  headers: {}
export function ApiSampleCode() { return null; }`
    'Authorization': \`Bearer \${YOUR_API_KEY}\`;
>>>>>>> origin/cursor/delete-old-data-records-6bba

  try {'
    const response = await api.post ('/api / jobs', job_data);
    return response.data;

  try {
    const response = await api.post ('/api / jobs', job_data);
    return response.data;
  } catch (error) {
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});
// Get all jobs
async function getJobs(filters = {}) {
  try {
    const response = await api.get('/api/jobs', { params: filters })
    return response.data
  } catch (error) {
    console.error('Error fetching jobs:', error.response?.data |error.message);
    throw error
  }
}
// Post a new job
async function createJob(jobData) {
  try {
    const response = await api.post('/api/jobs', jobData);
    return response.data
  } catch (error) {
    console.error('Error creating job:', error.response?.data |error.message);
    throw error
  }
}
// Search for talent
async function searchTalent(filters = {}) {
  try {

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const jobs = await getJobs({ status: 'open', limit: 5 }),

    // // // console.log('Jobs:', jobs),

<<<<<<< HEAD


=======
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Create a new job

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
    // Search for talent with React skills
=======
      budget: {}
        min: 5000;
        max: 7500'
        currency: 'USD'
      }'
      skills: ['ReactTypeScriptTailwind CSS']
    });'
    console.log('New job created:', newJob);

    const talent = await searchTalent({ skills: 'React', limit: 10 })
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)

  }

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

}
    const talent = await searchTalent({ skills: 'React', limit: 10 }),
    // // // console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
;
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
<<<<<<< HEAD

    console && console.log('Jobs:', jobs);


=======
    console && console.log('Jobs:', jobs);

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Create a new job;
    const newJob = await createJob({;
      title: 'Frontend Developer',;
      description: 'We need a skilled frontend developer...',;
      category: 'development',;
      budget: {;
        min: 5000,;
        max: 7500,;
        currency: 'USD';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
main(),`;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error ('Error creating job:', error.response?.data || error.message);
    throw error;
  }
}
// Search for talent;
async /**
 * search_talent - Function description;
 */
function search_talent() {}
  try {'
    const response = await api.get ('/api / talent', { params: filters }),
    return response.data;
  } catch (error) {'
    console.error ('Error searching talent:', error.response?.data || error.message);
    throw error;
  }
}
// Example usage;
async /**
 * main - Function description;
 */
function main() {}
  try {}
    // Get all open jobs;'
    const jobs = await get_jobs ({ status: 'open', limit: 5 }),'
    console.log ('Jobs:', jobs);
;
    // Create a new job;
    const new_job = await create_job ({'
      title: 'Frontend Developer','
      description: 'We need a skilled frontend developer...','
      category: 'development',
      budget: {}
        min: 5000,
        max: 7500,'
        currency: 'USD';
      }'
      skills: ['ReactTypeScriptTailwind CSS'];
    });'
    console.log ('New job created:', new_job);
;
    // Search for talent with React skills;'
    const talent = await search_talent ({ skills: 'React', limit: 10 }),'
    console.log ('Talent:', talent);
  } catch (error) {'
    console.error ('Something went wrong:', error);
  }
}`
main (), `;
;
  // Python example with requests;`
  const python_example = `# Using requests with Python;
import requests;
import json;'
API_KEY = 'YOUR_API_KEY';

<<<<<<< HEAD
      },;
      skills: ['ReactTypeScriptTailwind CSS'];
    }),;
    // // // console.log('New job created:', newJob),;
    // Search for talent with React skills;
    const talent = await searchTalent({ skills: 'React', limit: 10 }),;
    // // // console.log('Talent:', talent);
  } catch (error) {;
    console.error('Something went wrong:', error);
  }
}
;
main(),`,;
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
<<<<<<< HEAD
API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';
}


=======

API_KEY = 'YOUR_API_KEY';

BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';

}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
BASE_URL = 'https://api.zionai.com / v1';

headers = {
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';


}


            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,

                'currency': 'USD'

            },



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

  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',

const API_KEY = 'YOUR_API_KEY',

'
const BASE_URL = 'https: //api.zionai.com/v1';
// Helper to handle API requests;
async function apiRequest(endpoint, options = {}) {}`
  const url = \`\${BASE_URL}\${endpoint}\`;`
  const nodeFetchExample = `// Using node-fetch with Node.js'
import fetch from 'node-fetch','
const API_KEY = 'YOUR_API_KEY',

const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers

<<<<<<< HEAD

  },
  

=======
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const config = {
    ...options;
    headers

<<<<<<< HEAD



  // Python example with requests;
=======
  // Python example with requests;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const pythonExample = `# Using requests with Python;
import requests;
import json;

<<<<<<< HEAD

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)


=======
  }
  },
  
  const config = {
    ...options,
    headers
  }
  const response = await fetch(url, config);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message |\`API error: \${response.status}\`)

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)

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

        # Create a new job;
        new_job = create_job({;
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000;
                'max': 9000;
                'currency': 'USD';
            };
            'skills': ['PythonMachine LearningSQL'];
        });
        print(f"New job created with ID: {new_job['id']}");
        # Search for talent with Python skills;
        talent = search_talent({'skills': 'Pythonlimit': 10});
        print(f"Found {len(talent['talent'])} talented people");
    except requests && requests.exceptions.HTTPError as e:;
        print(f"HTTP Error: {e}");
        print(f"Response: {e && e.response.text}");
    except Exception as e:;
        print(f"Error: {e}")`,;
  // Node && Node.js example with fetch;
  const nodeFetchExample = `// Using node-fetch with Node && Node.js;
import fetch from 'node-fetch';
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https: //api && api.zionai.com/v1',;
// Helper to handle API requests;
async function apiRequest(): any (endpoint, options = {}) {;
  const url = \`\${BASE_URL}\${endpoint}\`;
  const headers = {;
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options && options.headers;
  };
  const config = {;
    ...options;
    headers;
  };
  const response = await fetch(url, config);
  if (!response && response.ok) {;
    const error = await response && response.json();
    throw new Error(error && error.message || \`API error: \${response && response.status}\`);
  }
  return response && response.json();
}
// Get all jobs;
async function getJobs(): any (filters = {}) {;
  // Convert filters to query string;

>>>>>>> origin/cursor/delete-old-data-records-6bba

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

// Get all jobs;
async function getJobs(): any (filters = {}) {;
  // Convert filters to query string;

  }
  return response.json()
}

  }
}`
main(),`;
headers = {'
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';
}

<<<<<<< HEAD


// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });


<<<<<<< HEAD

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





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST'
    body: JSON.stringify(jobData)
  })
}
<<<<<<< HEAD



=======
'`
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';'`
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });


  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });





>>>>>>> origin/cursor/delete-old-data-records-6bba
// Search for talent
async function searchTalent(filters = {}) {

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {}
    params.append(key, value)


<<<<<<< HEAD

;

// Search for talent;
=======

}

}

// Example usage
async function main() {
  try {
    // Get all open jobs
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
    method: 'POST',;
    body: JSON && JSON.stringify(jobData);
  });
}
// Search for talent;
async function searchTalent(): any (filters = {}) {;
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });


    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer'
      description: 'We need a skilled backend developer...'



      },
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)
  } catch (error) {

    console.error('Something went wrong:', error)
  }
  Object.entries(filters).forEach(([key, value]) => {;
    }
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;'  return apiRequest(\`/api/talent\${queryString}\`, { "method": 'GET' });  } catch (error) {'
    }
    console.error('Something went "wrong":', error)'
  }
}
;
main(),`,;
  return (;

    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;

        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;

        <h2>Authentication</h2>;

        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.;
          </p>;
        </div>;

        <h2>Code Examples</h2>;
        <Tabs defaultValue="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;

          </TabsList>;
          <TabsContent value="javascript">;
            <p>Using Axios with JavaScript:</p>;

            <CodeBlock code={jsAxiosExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="python">;
            <p>Using requests with Python:</p>;"
            <CodeBlock code={pythonExample} language="python" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="node">;
"

            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;

        <h2>Using the Examples</h2>;

          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;

        <h2>Additional Resources</h2>;

          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;

}

;

export default ApiSampleCode;

main(),`;


  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}

  return (


// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    // // // console.log('Jobs:', jobs),;
    // Create a new job;
    const newJob = await createJob({;
      title: 'Backend Developer',;
      description: 'We need a skilled backend developer...',;
      category: 'development',;
      budget: {;
        min: 6000,;
        max: 8000,;
        currency: 'USD';
      },;
      skills: ['Node.jsExpressMongoDB'];
    }),;
    // // // console.log('New job created:', newJob),;
    // Search for talent with Node.js skills;
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),;
    // // // console.log('Talent:', talent);
  } catch (error) {;
    console.error('Something went wrong:', error);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
;
main(),`,;
  return (;
<<<<<<< HEAD


    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;


=======
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}
        jobs = get_jobs({'status':'openlimit':5});
        print(f"Found {len(jobs['jobs'])} jobs");
        ;
        # Create a new job;
        new_job = create_job({;
            'title':'Data Scientistdescription':'Looking for an experienced data scientist...category':'databudget':{;
                'min':6000,;
                'max':9000,;
                'currency':'USD';
            },;
            'skills':['PythonMachine Learning', 'SQL'];
        });
        print(f"New job created with ID:{new_job['id']}");
        ;
        # Search for talent with Python skills;
        talent = search_talent({'skills':'Pythonlimit':10});
        print(f"Found {len(talent['talent'])} talented people");
        ;
    except requests.exceptions.HTTPError as e:;
        print(f"HTTP Error:{e}");
        print(f"Response:{e.response.text}");
    except Exception as e:;
        print(f"Error:{e}")`,;
;
  // Node.js example with fetch;
  const nodeFetchExample = `// Using node-fetch with Node.js;
import fetch from 'node-fetch',;
;
const API_KEY = 'YOUR_API_KEY',;
const BASE_URL = 'https://api.zionai.com/v1',;
;
// Helper to handle API requests;
async function apiRequest(endpoint, options = {}) {;
  const url = \`\${BASE_URL}\${endpoint}\`,;
  ;
  const headers = {;
    'Authorization':\`Bearer \${API_KEY}\`,;
    'Content-Type':'application/json',;
    ...options.headers;
  },;
  ;
  const config = {;
    ...options,;
    headers;
  },;
  ;
  const response = await fetch(url, config),;
  ;
  if (!response.ok) {;
    const error = await response.json(),;
    throw new Error(error.message || \`API error:\${response.status}\`),;
  }
  ;
  return response.json(),;
}
;
// Get all jobs;
async function getJobs(filters = {}) {;
  // Convert filters to query string;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value),;
  }),;
  ;
  const queryString = params.toString() ? \`?\${params.toString()}\` :'',;
  return apiRequest(\`/api/jobs\${queryString}\`, { method:'GET' }),;
}
;
// Post a new job;
async function createJob(jobData) {;
  return apiRequest('/api/jobs', {;
    method:'POST',;
    body:JSON.stringify(jobData);
  }),;
}
;
// Search for talent;
async function searchTalent(filters = {}) {;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value),;
  }),;
  ;
  const queryString = params.toString() ? \`?\${params.toString()}\` :'',;
  return apiRequest(\`/api/talent\${queryString}\`, { method:'GET' }),;
}
;
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status:'open', limit:5 }),;
    // // // console.log('Jobs:', jobs),;
    ;
    // Create a new job;
    const newJob = await createJob({;
      title:'Backend Developer',;
      description:'We need a skilled backend developer...',;
      category:'development',;
      budget:{;
        min:6000,;
        max:8000,;
        currency:'USD';
      },;
      skills:['Node.jsExpress', 'MongoDB'];
    }),;
    // // // console.log('New job created:', newJob),;
    ;
    // Search for talent with Node.js skills;
    const talent = await searchTalent({ skills:'Node.js', limit:10 }),;
    // // // console.log('Talent:', talent),;
  } catch (error) {;
    console.error('Something went wrong:', error),;  }
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
;
main(),`,;
;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;
        ;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <h2>Authentication</h2>;

        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
<<<<<<< HEAD



=======
        ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.;
          </p>;
        </div>;
<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <h2>Code Examples</h2>;
        <Tabs defaultValue="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;


          </TabsList>;
          <TabsContent value="javascript">;
            <p>Using Axios with JavaScript:</p>;

            <CodeBlock code={jsAxiosExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="python">;
            <p>Using requests with Python:</p>;"
            <CodeBlock code={pythonExample} language="python" showLineNumbers={true} />;
          </TabsContent>;"
          <TabsContent value="node">;
<<<<<<< HEAD

=======

"

            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <h2>Using the Examples</h2>;

          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
<<<<<<< HEAD



=======
            <p>Using fetch with Node.js:</p>;
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
;
        <h2>Using the Examples</h2>;
        <p>;
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key,;
          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
        ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <h2>Additional Resources</h2>;

          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
<<<<<<< HEAD

  ),;}
;
export default ApiSampleCode,;
}main (), `;
return (<ApiDocsLayout> <div className="max-w-3xl prose prose-invert" > <h1>Sample Code</h1> <p> The following code examples demonstrate how to integrate with the Zion AI Marketplace API using different programming languages and libraries. </p> <h2>Authentication</h2> <p> All API requests require authentication using API keys. Make sure to include your API key in the Authorization header as shown in the examples below. </p> <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6" > <h3 className="text-yellow-500 text-sm font-medium mt-0" >Security Warning</h3> <p className="text-sm text-yellow-300/90 mb-0" > Never include your API key directly in client-side code. These examples are intended for server-side usage only. </p> </div> <h2>Code Examples</h2> <Tabs defaultValue="javascript" > <TabsList> <TabsTrigger value="javascript" >JavaScript (Axios) </TabsTrigger> <TabsTrigger value="python" >Python</TabsTrigger> <TabsTrigger value="node" >Node.js (fetch) </TabsTrigger> </TabsList> <TabsContent value="javascript" > <p>Using Axios with JavaScript:</p> </TabsContent> <TabsContent value="python" > <p>Using requests with Python:</p> </TabsContent> <TabsContent value="node" > <p>Using fetch with Node.js:</p> </TabsContent> </Tabs> <h2>Using the Examples</h2> <p> To use these examples, you'll need to replace 'YOUR API KEY' with your actual API key;
which you can generate in the <a href="/developers/portal" className="text-zion-cyan" >Developer Portal</Link>. </p> <h2>Additional Resources</h2> <ul> <li>Download our <a href="#" className="text-zion-cyan" >Postman Collection</Link> for easy API testing</li> <li>Check out our <a href="#" className="text-zion-cyan" >GitHub repository</Link> for more code examples</li> <li>Join our <a href="#" className="text-zion-cyan" >Developer Discord</Link> for community support</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiSampleCode;
  );

}
;



export default ApiSampleCode;




=======


}
;
export default ApiSampleCode;


  ),;}
;
export default ApiSampleCode,;`
}main (), `;'"
return (<ApiDocsLayout> <div className="max-w-3xl prose prose-invert" > <h1>Sample Code</h1> <p> The following code examples demonstrate how to integrate with the Zion AI Marketplace API using different programming languages and libraries. </p> <h2>Authentication</h2> <p> All API requests require authentication using API keys. Make sure to include your API key in the Authorization header as shown in the examples below. </p> <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6" > <h3 className="text-yellow-500 text-sm font-medium mt-0" >Security Warning</h3> <p className="text-sm text-yellow-300/90 mb-0" > Never include your API key directly in client-side code. These examples are intended for server-side usage only. </p> </div> <h2>Code Examples</h2> <Tabs defaultValue="javascript" > <TabsList> <TabsTrigger value="javascript" >JavaScript (Axios) </TabsTrigger> <TabsTrigger value="python" >Python</TabsTrigger> <TabsTrigger value="node" >Node.js (fetch) </TabsTrigger> </TabsList> <TabsContent value="javascript" > <p>Using Axios with JavaScript:</p> </TabsContent> <TabsContent value="python" > <p>Using requests with Python:</p> </TabsContent> <TabsContent value="node" > <p>Using fetch with Node.js:</p> </TabsContent> </Tabs> <h2>Using the Examples</h2> <p> To use these examples, you'll need to replace 'YOUR API KEY' with your actual API key;"

which you can generate in the <a href="/developers/portal" className="text-zion-cyan" >Developer Portal</Link>. </p> <h2>Additional Resources</h2> <ul> <li>Download our <a href="#" className="text-zion-cyan" >Postman Collection</Link> for easy API testing</li> <li>Check out our <a href="#" className="text-zion-cyan" >GitHub repository</Link> for more code examples</li> <li>Join our <a href="#" className="text-zion-cyan" >Developer Discord</Link> for community support</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiSampleCode;
  );
}
;
export default ApiSampleCode;
>>>>>>> origin/cursor/delete-old-data-records-6bba
