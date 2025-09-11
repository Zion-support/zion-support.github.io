
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

=======
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  headers: {


export function ApiSampleCode() {;
  // JavaScript example with Axios;
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
// Configure Axios with the base URL and headers;
const api = axios && axios.create({;
  baseURL: 'https://api && api.zionai.com/v1',;
  headers: {;
<<<<<<< HEAD
    'Authorization': \`Bearer \${YOUR_API_KEY}\`;
=======

    'Authorization': \`Bearer \${YOUR_API_KEY}\`;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'Content - Type': 'application / json';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
// Post a new job;
async /**
 * create_job - Function description
 */
function create_job() {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const response = await api.post ('/api / jobs', job_data);
    return response.data;
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
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
    const response = await api.get('/api/talent', { params: filters })
    return response.data
  } catch (error) {
    console.error('Error searching talent:', error.response?.data |error.message);
    throw error
  }
}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
// Post a new job;
async function createJob(jobData) {;
  try {;
    const response = await api.post('/api/jobs', jobData),;
    return response.data;
  } catch (error) {;
    console.error('Error creating job:', error.response?.data || error.message),;
    throw error;
  }
}
;
// Search for talent;
async function searchTalent(filters = {}) {;
  try {;
    const response = await api.get('/api/talent', { params: filters }),;
    return response.data;
  } catch (error) {;
    console.error('Error searching talent:', error.response?.data || error.message),;
    throw error;
  }
}




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Get all jobs;
async function getJobs(): any (filters = {}) {;
  try {;
    const response = await api && api.get('/api/jobs', { params: filters }),;
    return response && response.data;
  } catch (error) {;
    console && console.error('Error fetching jobs:', error && error.response?.data || error && error.message);
    throw error;
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Post a new job;
async function createJob(): any (jobData) {;
  try {;
    const response = await api && api.post('/api/jobs', jobData);
    return response && response.data;
  } catch (error) {;
    console && console.error('Error creating job:', error && error.response?.data || error && error.message);
    throw error;
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Search for talent;
async function searchTalent(): any (filters = {}) {;
  try {;
    const response = await api && api.get('/api/talent', { params: filters }),;
    return response && response.data;
  } catch (error) {;
    console && console.error('Error searching talent:', error && error.response?.data || error && error.message);
    throw error;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export function ApiSampleCode() {;
  // JavaScript example with Axios;
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios',;
;
// Configure Axios with the base URL and headers;
const api = axios.create({;
  baseURL:'https://api.zionai.com/v1',;
  headers:{;
    'Authorization':\`Bearer \${YOUR_API_KEY}\`,;
    'Content-Type':'application/json';
  }
}),;
;
// Get all jobs;
async function getJobs(filters = {}) {;
  try {;
    const response = await api.get('/api/jobs', { params:filters }),;
    return response.data,;
  } catch (error) {;
    console.error('Error fetching jobs:', error.response?.data || error.message),;
    throw error,;
  }
}
;
// Post a new job;
async function createJob(jobData) {;
  try {;
    const response = await api.post('/api/jobs', jobData),;
    return response.data,;
  } catch (error) {;
    console.error('Error creating job:', error.response?.data || error.message),;
    throw error,;
  }
}
;
// Search for talent;
async function searchTalent(filters = {}) {;
  try {;
    const response = await api.get('/api/talent', { params:filters }),;
    return response.data,;
  } catch (error) {;
    console.error('Error searching talent:', error.response?.data || error.message),;
    throw error,;
  }
}
;
}
    const talent = await searchTalent({ skills: 'React', limit: 10 }),
    // // // console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.log('Jobs:', jobs),;
=======
    console && console.log('Jobs:', jobs);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console && console.log('Jobs:', jobs);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      };
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console && console.log('New job created:', newJob);

    // Search for talent with React skills;
    const talent = await searchTalent({ skills: 'React', limit: 10 }),;
    console && console.log('Talent:', talent);
  } catch (error) {;
    console && console.error('Something went wrong:', error);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
main(),`;
=======
  }
}
main(),`;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';
=======
BASE_URL = 'https://api.zionai.com / v1';

headers = {
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000;
                'max': 9000;
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,
                'currency': 'USD'
            }
            },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',



const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch';
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https: //api.zionai.com/v1'
// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`;
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`,
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers
<<<<<<< HEAD


  },
  


  const config = {
    ...options;
    headers

<<<<<<< HEAD
BASE_URL = 'https://api.zionai.com / v1';
headers = {
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';
}
    const jobs = await getJobs({ status:'open', limit:5 }),;
    // // // console.log('Jobs:', jobs),;
    ;
    // Create a new job;
    const newJob = await createJob({;
      title:'Frontend Developer',;
      description:'We need a skilled frontend developer...',;
      category:'development',;
      budget:{;
        min:5000,;
        max:7500,;
        currency:'USD';
      },;
      skills:['ReactTypeScript', 'Tailwind CSS'];
    }),;
    // // // console.log('New job created:', newJob),;
    ;
    // Search for talent with React skills;
    const talent = await searchTalent({ skills:'React', limit:10 }),;
    // // // console.log('Talent:', talent),;
  } catch (error) {;
    console.error('Something went wrong:', error),;  try {
  //Get all open jobs //Create a new job const newJob = await createJob ({
  title: 'Frontend Developer';
description: 'We need a skilled frontend developer...';
category: 'development';
budget: {
  min: 5000;
max: 7500;
currency: 'USD' 
};
}catch (error) {
  console.error ('Something went wrong:', error) 
}

// Post a new job,
async function createJob(jobData) {  try {
  //Get all open jobs //Create a new job const newJob = await createJob ({
  title: 'Backend Developer';
description: 'We need a skilled backend developer...';
category: 'development';
budget: {
  min: 6000;
max: 8000;
currency: 'USD' 
};
}catch (error) {
  console.error ('Something went wrong:', error) 
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
;
main(),`,;
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
<<<<<<< HEAD
;
API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api.zionai.com/v1';
;
headers = {;
    'Authorization':f'Bearer {API_KEY}Content-Type':'application/json';
}
  
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json',
    ...options.headers
  }
  },
  
  const config = {
    ...options,
    headers
=======
  }
  },
  
  const config = {
    ...options;
    headers
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const response = await fetch(url, config);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message |\`API error: \${response.status}\`)
<<<<<<< HEAD
=======

API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api && api.zionai.com/v1';

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

# Example usage;
if __name__ == "__main__":;
    try:;
        # Get all open jobs;
        jobs = get_jobs({'status': 'openlimit': 5});
        print(f"Found {len(jobs['jobs'])} jobs");

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

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
<<<<<<< HEAD
<<<<<<< HEAD
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

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
  return response.json()
}



// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });
<<<<<<< HEAD

<<<<<<< HEAD
  }
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  });
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST'
    body: JSON.stringify(jobData)
  })
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });



<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Search for talent
async function searchTalent(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value)
  });
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' })

<<<<<<< HEAD
<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
// Search for talent;
async function searchTalent(filters = {}) {;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
<<<<<<< HEAD
<<<<<<< HEAD
}

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer'
      description: 'We need a skilled backend developer...'
      category: 'development'
      budget: {
        min: 6000
        max: 8000
        currency: 'USD'
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      skills: ['Node.jsExpressMongoDB']
    });
    console.log('New job created:', newJob);
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 })
    console.log('Talent:', talent)
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
main(),`;

main(),`,
=======
main(),`;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</Link>.
        </p>
        <h2>Additional Resources</h2>
        <ul>
          <li>Download our <a href="#" className="text-zion-cyan">Postman Collection</Link> for easy API testing</li>
          <li>Check out our <a href="#" className="text-zion-cyan">GitHub repository</Link> for more code examples</li>
          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</Link> for community support</li>
        </ul>
      </div>
    </ApiDocsLayout>
  )
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}




  return (

<<<<<<< HEAD

<<<<<<< HEAD
}
export default ApiSampleCode;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
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
  }
}
;
main(),`,;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Authentication</h2>;
        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Code Examples</h2>;
        <Tabs defaultValue="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
=======
            <TabsTrigger value="node">Node && Node.js (fetch)</TabsTrigger>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <TabsTrigger value="node">Node && Node.js (fetch)</TabsTrigger>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </TabsList>;
          <TabsContent value="javascript">;
            <p>Using Axios with JavaScript:</p>;
            <CodeBlock code={jsAxiosExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="python">;
            <p>Using requests with Python:</p>;
            <CodeBlock code={pythonExample} language="python" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="node">;
<<<<<<< HEAD
<<<<<<< HEAD
            <p>Using fetch with Node.js:</p>;
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p>Using fetch with Node && Node.js:</p>;
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Using the Examples</h2>;
        <p>;
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key;
          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h2>Additional Resources</h2>;
        <ul>;
          <li>Download our <a href="#" className="text-zion-cyan">Postman Collection</a> for easy API testing</li>;
          <li>Check out our <a href="#" className="text-zion-cyan">GitHub repository</a> for more code examples</li>;
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
<<<<<<< HEAD
}
;
export default ApiSampleCode;
=======
=======
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

;


export default ApiSampleCode;
<<<<<<< HEAD

=======
def get_jobs (filters = None):;
    """Get all jobs with optional filters""";
    url = f"{BASE_URL}/api / jobs";
    response = requests.get (url, params = filters, headers = headers);
    response.raise_for_status ()  # Raise exception for 4XX / 5XX responses;
    return response.json ();
def create_job (job_data):;
    """Create a new job posting""";
    url = f"{BASE_URL}/api / jobs";
    response = requests.post (url, json = job_data, headers = headers);
    response.raise_for_status ();
    return response.json ();
def search_talent (filters = None):;
    """Search for talent with optional filters""";
    url = f"{BASE_URL}/api / talent";
    response = requests.get (url, params = filters, headers = headers);
    response.raise_for_status ();
    return response.json ();
# Example usage;
if __name__ == "__main__":;
    try:;
        # Get all open jobs;
        jobs = get_jobs ({'status': 'openlimit': 5});
        print (f"Found {len (jobs['jobs'])} jobs");
        # Create a new job;
        new_job = create_job ({
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000;
                'max': 9000;
                'currency': 'USD';
            }
            'skills': ['PythonMachine LearningSQL'];
        });
        print (f"New job created with ID: {new_job['id']}");
        # Search for talent with Python skills;
        talent = search_talent ({'skills': 'Pythonlimit': 10});
        print (f"Found {len (talent['talent'])} talented people");
    except requests.exceptions.HTTPError as e:;
        print (f"HTTP Error: {e}");
        print (f"Response: {e.response.text}");
    except Exception as e:;
        print (f"Error: {e}")`,
  // Node.js example with fetch;
const nodeFetchExample = `// Using node - fetch with Node.js;
import fetch from 'node - fetch';
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https: //api.zionai.com / v1',
// Helper to handle API requests;
async /**
 * api_request - Function description
 */
function api_request() {
  const url = \`\${BASE_URL}\${endpoint}\`;
;
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content - Type': 'application / json';
    ...options.headers;
  }
;
  const config = {
    ...options;
    headers;
  }
;
  const response = await fetch (url, config);
;
  // Check condition
if ( {) {
  $2
}
    const error = await response.json ();
    throw new Error (error.message || \`API error: \${response.status}\`);
  }
  return response.json ();
}
// Get all jobs;
async /**
 * get_jobs - Function description
 */
function get_jobs() {
  // Convert filters to query string;
  const params = new URLSearchParams ();
  Object.entries (filters).for_each (([key, value]) => {
    params.append (key, value);
  });
;
  const query_string = params.to_string () ? \`?\${params.to_string ()}\` : '';
  return api_request (\`/api / jobs\${query_string}\`, { method: 'GET' });
}
// Post a new job;
async /**
 * create_job - Function description
 */
function create_job() {
  return api_request ('/api / jobs', {
    method: 'POST',
    body: JSON.stringify (job_data);
  });
}
// Search for talent;
async /**
 * search_talent - Function description
 */
function search_talent() {
  const params = new URLSearchParams ();
  Object.entries (filters).for_each (([key, value]) => {
    params.append (key, value);
  });
;
  const query_string = params.to_string () ? \`?\${params.to_string ()}\` : '';
  return api_request (\`/api / talent\${query_string}\`, { method: 'GET' });
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
      title: 'Backend Developer',
      description: 'We need a skilled backend developer...',
      category: 'development',
      budget: {
        min: 6000,
        max: 8000,
        currency: 'USD';
      }
      skills: ['Node.jsExpressMongoDB'];
    });
    console.log ('New job created:', new_job);
;
    // Search for talent with Node.js skills;
    const talent = await search_talent ({ skills: 'Node.js', limit: 10 }),
    console.log ('Talent:', talent);
  } catch (error) {
    console.error ('Something went wrong:', error);
  }
}
main (), `;
;
  return (
    <ApiDocsLayout>;
      <div className="max - w-3xl prose prose - invert">;
        <h1 > Sample Code</h1>;
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
        <h2 > Authentication</h2>;
        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
        <div className="bg - yellow - 900 / 20 border border - yellow - 700 / 50 rounded - md p - 4 my - 6">;
          <h3 className="text - yellow - 500 text - sm font - medium mt - 0">Security Warning</h3>;
          <p className="text - sm text - yellow - 300 / 90 mb - 0">;
            Never include your API key directly in client - side code. These examples are intended for server - side usage only.;
          </p>;
        </div>;
        <h2 > Code Examples</h2>;
        <Tabs default_value="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
          </TabsList>;
          <TabsContent value="javascript">;
            <p > Using Axios with JavaScript:</p>;
            <CodeBlock code={jsAxiosExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="python">;
            <p > Using requests with Python:</p>;
            <CodeBlock code={python_example} language="python" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="node">;
            <p > Using fetch with Node.js:</p>;
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
        <h2 > Using the Examples</h2>;
        <p>;
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key;
          which you can generate in the <a href="/developers / portal" className="text - zion - cyan">Developer Portal</a>.;
        </p>;
        <h2 > Additional Resources</h2>;
        <ul>;
          <li > Download our <a href="#" className="text - zion - cyan">Postman Collection</a> for easy API testing</li>;
          <li > Check out our <a href="#" className="text - zion - cyan">GitHub repository</a> for more code examples</li>;
          <li > Join our <a href="#" className="text - zion - cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiSampleCode;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
