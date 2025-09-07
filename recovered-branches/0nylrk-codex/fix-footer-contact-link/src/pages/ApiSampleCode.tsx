<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';

"
import React from "react","
import ApiDocsLayout from "@/components/developers/ApiDocsLayout","
import { CodeBlock } from "@/components/developers/CodeBlock","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

export function ApiSampleCode() {
  // JavaScript example with Axios
=======
<<<<<<< HEAD
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';
// Configure Axios with the base URL and headers
const api = axios.create($2);
=======
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
<<<<<<< HEAD
=======

<<<<<<< HEAD
"
import React from "react","
import ApiDocsLayout from "@/components/developers/ApiDocsLayout","
import { CodeBlock } from "@/components/developers/CodeBlock","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

<<<<<<< HEAD
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function ApiSampleCode() {
  // JavaScript example with Axios
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
}
// Configure Axios with the base URL and headers,
const api = axios.create({
<<<<<<< HEAD
  }
  "baseURL": '"https"://api.zionai.com/v1''
import React from './react';'
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";"
import { CodeBlock } from '@/components / developers / CodeBlock';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
=======
  const jsAxiosExample = `// Using Axios with JavaScript

import axios from 'axios';
// Configure Axios with the base URL and headers;
const api = axios.create({'
  baseURL: 'https://api.zionai.com/v1'

<<<<<<< HEAD
=======
=======
  baseURL: 'https://api.zionai.com/v1'
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
>>>>>>> origin/chore/fix-lint-and-merge
;
export /**;
 * ApiSampleCode - Function description;
 */
<<<<<<< HEAD
function ApiSampleCode() {
  // JavaScript example with Axios;
  }
=======
function ApiSampleCode() {}
  // JavaScript example with Axios;`
  const jsAxiosExample = `// Using Axios with JavaScript;'
import axios from 'axios';
>>>>>>> origin/chore/fix-lint-and-merge
// Configure Axios with the base URL and headers;
const api = axios.create ({'
  baseURL: 'https://api.zionai.com / v1',
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  headers: {

  headers: {}
export function ApiSampleCode() { return null; }
  headers: {}

  }
<<<<<<< HEAD
  "baseURL": '"https"://api.zionai.com / v1','
import { CodeBlock } from "@/components/developers/CodeBlock",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
export function ApiSampleCode() {;
  // JavaScript example with Axios;
<<<<<<< HEAD
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
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

  try {'
    const response = await api.post ('/api / jobs', job_data);
    return response.data;

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

=======
<<<<<<< HEAD
=======
=======
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
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
  }
}
// Post a new job;
async /**
 * create_job - Function description;
 */
<<<<<<< HEAD
function create_job() {}
  headers: {}
export function ApiSampleCode() { return null; }`
    'Authorization': \`Bearer \${YOUR_API_KEY}\`;

  try {'
    const response = await api.post ('/api / jobs', job_data);
    return response.data;

=======
function create_job() {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  try {
    const response = await api.post ('/api / jobs', job_data);
    return response.data;
  } catch (error) {
<<<<<<< HEAD
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});
>>>>>>> merged-prs-20250907-203621
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
    const response = await api.get($2);
    return response.data
  } catch (error) {
    console.error($2);
    throw error
  }
}
=======
    const response = await api.get('/api/talent', { params: filters })
    return response.data
  } catch (error) {
    console.error('Error searching talent:', error.response?.data |error.message);
    throw error
  }
}

=======

    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD

    const jobs = await getJobs({ status: 'open', limit: 5 }),

    // // // console.log('Jobs:', jobs),

    // Create a new job

    const newJob = await createJob({
      title: 'Frontend Developer'
      description: 'We need a skilled frontend developer...'

      category: 'development'
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

=======
<<<<<<< HEAD
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

=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const jobs = await getJobs({ status: 'open', limit: 5 }),

    // // // console.log('Jobs:', jobs),

<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Create a new job

    const newJob = await createJob({
      title: 'Frontend Developer'
      description: 'We need a skilled frontend developer...'
<<<<<<< HEAD

      category: 'development'
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
    const talent = await searchTalent({ skills: 'React', limit: 10 })
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}
main(),`;
>>>>>>> merged-prs-20250907-203621
  // Python example with requests
  const pythonExample = `# Using requests with Python
import requests
import json
API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.zionai.com/v1'
headers = {
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json'
<<<<<<< HEAD
}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

    console.error ('Error creating job:', error.response?.data || error.message);
    throw error;
  }
}
=======
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
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
<<<<<<< HEAD
    // // // console.log('Jobs:', jobs),;
=======
    console && console.log('Jobs:', jobs);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      };
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console && console.log('New job created:', newJob);

<<<<<<< HEAD
=======
    // Search for talent with React skills;
    const talent = await searchTalent({ skills: 'React', limit: 10 }),;
    console && console.log('Talent:', talent);
  } catch (error) {;
    console && console.error('Something went wrong:', error);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
main(),`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    console.error ('Error creating job:', error.response?.data || error.message);
    throw error;
  }
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
API_KEY = 'YOUR_API_KEY';
<<<<<<< HEAD

BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';

}
=======
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
    response = requests.get(url, params=filters, headers = $2;
                'max': 9000,
                'currency': 'USD'
            },
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
=======
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
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000;
                'max': 9000;
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,
                'currency': 'USD'
            }
            },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            'skills': ['PythonMachine LearningSQL']
        })
        print(f"New job created with ID: {new_job['id']}")
        # Search for talent with Python skills
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    method: 'POST'
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
=======
        talent = search_talent({'skills': 'Pythonlimit': 10})
        print(f"Found {len(talent['talent'])} talented people")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
        print(f"Response: {e.response.text}")
    except Exception as e:
        print(f"Error: {e}")`
  // Node.js example with fetch


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
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`,
  
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
=======
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
  }
  const response = await fetch(url, config);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message |\`API error: \${response.status}\`)
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers

  },

  const config = {
    ...options;
    headers

  // Python example with requests;

  const pythonExample = `# Using requests with Python;
import requests;
import json;

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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
<<<<<<< HEAD

;
def get_jobs(filters=None):;
    """Get all jobs with optional filters""";

=======
<<<<<<< HEAD
;
def get_jobs(filters=None):;
    """Get all jobs with optional filters""";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    url = f"{BASE_URL}/api/jobs";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response.json();
<<<<<<< HEAD
def create_job(job_data):;"
    """Create a new job posting""";"
=======
def create_job(job_data):;
    """Create a new job posting""";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    url = f"{BASE_URL}/api/jobs";
    response = requests.post(url, json=job_data, headers=headers);
    response.raise_for_status();
    return response.json();
<<<<<<< HEAD
def search_talent(filters=None):;"
    """Search for talent with optional filters""";"
    url = f"{BASE_URL}/api/talent";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status();
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}

// Post a new job
async function createJob(jobData) {
  return apiRequest('/api/jobs', {
    method: 'POST'
    body: JSON.stringify(jobData)
  })
}

'`
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';'`
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });

// Search for talent
async function searchTalent(filters = {}) {

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  return response.json()
}

// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    params.append(key, value)

;

// Search for talent;

}

// Example usage
async function main() {
  try {
    // Get all open jobs

}

// Post a new job;

    method: 'POST',;
    body: JSON && JSON.stringify(jobData);
  });
<<<<<<< HEAD
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

      category: 'development'
      budget: {}
        min: 6000;
        max: 8000'
        currency: 'USD'
'
      skills: ['Node.jsExpressMongoDB']
    });'
    console.log('New job created:', newJob);

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
=======
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
'`
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';'`
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });



<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Search for talent
async function searchTalent(filters = {}) {

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {}
    params.append(key, value)

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

// Search for talent;
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
}

// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
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

=======

=======
async function searchTalent(filters = {}) {;
  const params = new URLSearchParams(),;
  Object.entries(filters).forEach(([key, value]) => {;
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

}

// Example usage
async function main() {
  try {
    // Get all open jobs
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
// Post a new job;

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
<<<<<<< HEAD

=======
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Create a new job
    const newJob = await createJob({
      title: 'Backend Developer'
      description: 'We need a skilled backend developer...'

<<<<<<< HEAD
      category: 'development'
      budget: {}
        min: 6000;
        max: 8000'
        currency: 'USD'
'
      skills: ['Node.jsExpressMongoDB']
    });'
    console.log('New job created:', newJob);
=======
<<<<<<< HEAD
      }
      skills: ['Node.jsExpressMongoDB']
    });
    console.log('New job created:', newJob);
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 })
    console.log('Talent:', talent)
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (error) {

    console.error('Something went wrong:', error)
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
  Object.entries(filters).forEach(([key, value]) => {;
    }
    params.append(key, value);
  }),;
  const queryString = params.toString() ? \`?\${params.toString()}\` : '',;'  return apiRequest(\`/api/talent\${queryString}\`, { "method": 'GET' });  } catch (error) {'
    }
    console.error('Something went "wrong":', error)'
=======
}
<<<<<<< HEAD

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
>>>>>>> origin/chore/fix-lint-and-merge
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

=======
<<<<<<< HEAD
main(),`;

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
          which you can generate in the <a href = $2;
=======
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}

  return (

<<<<<<< HEAD
=======

<<<<<<< HEAD
}
export default ApiSampleCode;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
  }
}
;
main(),`,;
  return (;
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

    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Authentication</h2>;

        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
<<<<<<< HEAD
        ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.;
          </p>;
        </div>;
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Code Examples</h2>;
        <Tabs defaultValue="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
=======
            <TabsTrigger value="node">Node && Node.js (fetch)</TabsTrigger>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
"

=======
<<<<<<< HEAD
            <p>Using fetch with Node.js:</p>;
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
=======
            <p>Using fetch with Node && Node.js:</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <h2>Using the Examples</h2>;

          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.;
        </p>;
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
        <h2>Additional Resources</h2>;

          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
<<<<<<< HEAD

}

;

export default ApiSampleCode;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),;}
;
export default ApiSampleCode,;`
}main (), `;'"
return (<ApiDocsLayout> <div className="max-w-3xl prose prose-invert" > <h1>Sample Code</h1> <p> The following code examples demonstrate how to integrate with the Zion AI Marketplace API using different programming languages and libraries. </p> <h2>Authentication</h2> <p> All API requests require authentication using API keys. Make sure to include your API key in the Authorization header as shown in the examples below. </p> <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6" > <h3 className="text-yellow-500 text-sm font-medium mt-0" >Security Warning</h3> <p className="text-sm text-yellow-300/90 mb-0" > Never include your API key directly in client-side code. These examples are intended for server-side usage only. </p> </div> <h2>Code Examples</h2> <Tabs defaultValue="javascript" > <TabsList> <TabsTrigger value="javascript" >JavaScript (Axios) </TabsTrigger> <TabsTrigger value="python" >Python</TabsTrigger> <TabsTrigger value="node" >Node.js (fetch) </TabsTrigger> </TabsList> <TabsContent value="javascript" > <p>Using Axios with JavaScript:</p> </TabsContent> <TabsContent value="python" > <p>Using requests with Python:</p> </TabsContent> <TabsContent value="node" > <p>Using fetch with Node.js:</p> </TabsContent> </Tabs> <h2>Using the Examples</h2> <p> To use these examples, you'll need to replace 'YOUR API KEY' with your actual API key;"

which you can generate in the <a href="/developers/portal" className="text-zion-cyan" >Developer Portal</Link>. </p> <h2>Additional Resources</h2> <ul> <li>Download our <a href="#" className="text-zion-cyan" >Postman Collection</Link> for easy API testing</li> <li>Check out our <a href="#" className="text-zion-cyan" >GitHub repository</Link> for more code examples</li> <li>Join our <a href="#" className="text-zion-cyan" >Developer Discord</Link> for community support</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiSampleCode;
  );
<<<<<<< HEAD
}
;
export default ApiSampleCode;
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;
<<<<<<< HEAD
export default ApiSampleCode;
=======


export default ApiSampleCode;

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
