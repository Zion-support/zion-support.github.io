<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
<<<<<<< HEAD

=======



=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios',
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function ApiSampleCode() {
  // JavaScript example with Axios
  const jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
<<<<<<< HEAD
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
export function ApiSampleCode() {;
  // JavaScript example with Axios;
  const jsAxiosExample = `// Using Axios with JavaScript;
import axios from 'axios';
// Configure Axios with the base URL and headers;
const api = axios && axios.create({;
  baseURL: 'https://api && api.zionai.com/v1',;
  headers: {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

    'Authorization': \`Bearer \${YOUR_API_KEY}\`;

========
    'Authorization': \`Bearer \${YOUR_API_KEY}\`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
    'Content - Type': 'application / json';
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
  try {
    const response = await api.post ('/api / jobs', job_data);
    return response.data;
  } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
// Configure Axios with the base URL and headers
const api = axios.create({
  baseURL: 'https://api.zionai.com/v1'
  headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD

<<<<<<< HEAD
=======

    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
=======
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD
    const talent = await searchTalent({ skills: 'React', limit: 10 })
    console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

;
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
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
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
=======
<<<<<<< HEAD
}
=======
    const talent = await searchTalent({ skills: 'React', limit: 10 }),
    // // // console.log('Talent:', talent)
  } catch (error) {
    console.error('Something went wrong:', error)
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
<<<<<<< HEAD
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    console && console.log('Jobs:', jobs);
=======
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    // // // console.log('Jobs:', jobs),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      };
      skills: ['ReactTypeScriptTailwind CSS'];
    });
    console && console.log('New job created:', newJob);
    // Search for talent with React skills;
    const talent = await searchTalent({ skills: 'React', limit: 10 }),;
    console && console.log('Talent:', talent);
  } catch (error) {;
    console && console.error('Something went wrong:', error);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

  }
}
main(),`;

========
  }
}
main(),`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
<<<<<<< HEAD
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';

}

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
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api.zionai.com/v1';
headers = {;
    'Authorization': f'Bearer {API_KEY}Content-Type': 'application/json';
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

                'currency': 'USD'

=======
BASE_URL = 'https://api.zionai.com / v1';

headers = {
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}


            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,

                'currency': 'USD'

            },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {;
                'min': 6000;
                'max': 9000;
=======
            'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
                'min': 6000,
                'max': 9000,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                'currency': 'USD'
<<<<<<< HEAD
            }
=======
            },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch';
const API_KEY = 'YOUR_API_KEY';
<<<<<<< HEAD
const BASE_URL = 'https: //api.zionai.com/v1'
// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  const nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch',
const API_KEY = 'YOUR_API_KEY',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const BASE_URL = 'https: //api.zionai.com/v1',

// Helper to handle API requests
async function apiRequest(endpoint, options = {}) {
  const url = \`\${BASE_URL}\${endpoint}\`,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`;
    'Content-Type': 'application/json';
    ...options.headers

<<<<<<< HEAD
=======

  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const config = {
    ...options;
    headers

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
========
BASE_URL = 'https://api.zionai.com / v1';
headers = {
    'Authorization': f'Bearer {API_KEY}Content - Type': 'application / json';
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
;
API_KEY = 'YOUR_API_KEY';
BASE_URL = 'https://api.zionai.com/v1';
;
headers = {;
    'Authorization':f'Bearer {API_KEY}Content-Type':'application/json';
}
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const headers = {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json',
    ...options.headers
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const config = {
    ...options,
    headers
<<<<<<< HEAD
  }
  const response = await fetch(url, config);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message |\`API error: \${response.status}\`)
=======
  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
def get_jobs(filters=None):;
    """Get all jobs with optional filters""";
    url = f"{BASE_URL}/api/jobs";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status()  # Raise exception for 4XX/5XX responses;
    return response.json();
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
def create_job(job_data):;
    """Create a new job posting""";
    url = f"{BASE_URL}/api/jobs";
    response = requests.post(url, json=job_data, headers=headers);
    response.raise_for_status();
    return response.json();
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
def search_talent(filters=None):;
    """Search for talent with optional filters""";
    url = f"{BASE_URL}/api/talent";
    response = requests.get(url, params=filters, headers=headers);
    response.raise_for_status();
    return response.json();
<<<<<<< HEAD
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
# Example usage;
if __name__ == "__main__":;
    try:;
        # Get all open jobs;
<<<<<<< HEAD
<<<<<<< HEAD
        jobs = get_jobs({'status': 'openlimit': 5});
        print(f"Found {len(jobs['jobs'])} jobs");
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
<<<<<<< HEAD
=======
        jobs = get_jobs({'status': 'openlimit': 5});
        print(f"Found {len(jobs['jobs'])} jobs");
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx

=======

  },
  
  const response = await fetch(url, config),
  
  if (!response.ok) {
    const error = await response.json(),
    throw new Error(error.message || \`API error: \${response.status}\`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  }
  return response.json()
}

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Get all jobs
async function getJobs(filters = {}) {
  // Convert filters to query string
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
  const params = new URLSearchParams();
  Object && Object.entries(filters).forEach(([key, value]) => {;
    params && params.append(key, value);
  });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
<<<<<<< HEAD
  const queryString = params.toString() ? \`?\${params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' })

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  return response.json()
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${queryString}\`, { method: 'GET' });
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Example usage
async function main() {
  try {
    // Get all open jobs
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx


    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 })
    console.log('Jobs:', jobs);
=======
    const jobs = await getJobs({ status: 'open', limit: 5 }),
    // // // console.log('Jobs:', jobs),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },
      skills: ['Node.jsExpressMongoDB']
    }),
    // // // console.log('New job created:', newJob),
    
    // Search for talent with Node.js skills
    const talent = await searchTalent({ skills: 'Node.js', limit: 10 }),
    // // // console.log('Talent:', talent)
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error('Something went wrong:', error)
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
main(),`;
=======

main(),`,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

export default ApiSampleCode;

=======


  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}




  return (

=======

=======
<<<<<<< HEAD
}
export default ApiSampleCode;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
  const queryString = params && params.toString() ? \`?\${params && params.toString()}\` : '';
  return apiRequest(\`/api/talent\${queryString}\`, { method: 'GET' });
}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;
<<<<<<< HEAD
    const jobs = await getJobs({ status: 'open', limit: 5 }),;
    console && console.log('Jobs:', jobs);
    // Create a new job;
    const newJob = await createJob({;
      title: 'Backend Developer',;
      description: 'We need a skilled backend developer...',;
      category: 'development',;
      budget: {;
        min: 6000,;
        max: 8000,;
        currency: 'USD';
      };
      skills: ['Node && Node.jsExpressMongoDB'];
    });
    console && console.log('New job created:', newJob);
    // Search for talent with Node && Node.js skills;
    const talent = await searchTalent({ skills: 'Node && Node.js', limit: 10 }),;
    console && console.log('Talent:', talent);
  } catch (error) {;
    console && console.error('Something went wrong:', error);
  }
}
main(),`;
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Sample Code</h1>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <p>;
          The following code examples demonstrate how to integrate with the Zion AI Marketplace API;
          using different programming languages and libraries.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h2>Authentication</h2>;
        <p>;
          All API requests require authentication using API keys. Make sure to include your API key;
          in the Authorization header as shown in the examples below.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">;
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Security Warning</h3>;
          <p className="text-sm text-yellow-300/90 mb-0">;
            Never include your API key directly in client-side code. These examples are intended for server-side usage only.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h2>Code Examples</h2>;
        <Tabs defaultValue="javascript">;
          <TabsList>;
            <TabsTrigger value="javascript">JavaScript (Axios)</TabsTrigger>;
            <TabsTrigger value="python">Python</TabsTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
            <TabsTrigger value="node">Node && Node.js (fetch)</TabsTrigger>;
=======
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <TabsTrigger value="node">Node.js (fetch)</TabsTrigger>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            <p>Using fetch with Node && Node.js:</p>;
=======
            <p>Using fetch with Node.js:</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CodeBlock code={nodeFetchExample} language="javascript" showLineNumbers={true} />;
          </TabsContent>;
        </Tabs>;
        <h2>Using the Examples</h2>;
        <p>;
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h2>Additional Resources</h2>;
        <ul>;
          <li>Download our <a href="#" className="text-zion-cyan">Postman Collection</a> for easy API testing</li>;
          <li>Check out our <a href="#" className="text-zion-cyan">GitHub repository</a> for more code examples</li>;
          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
}

;


export default ApiSampleCode;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
;
export default ApiSampleCode,;
}main (), `;
return (<ApiDocsLayout> <div className="max-w-3xl prose prose-invert" > <h1>Sample Code</h1> <p> The following code examples demonstrate how to integrate with the Zion AI Marketplace API using different programming languages and libraries. </p> <h2>Authentication</h2> <p> All API requests require authentication using API keys. Make sure to include your API key in the Authorization header as shown in the examples below. </p> <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6" > <h3 className="text-yellow-500 text-sm font-medium mt-0" >Security Warning</h3> <p className="text-sm text-yellow-300/90 mb-0" > Never include your API key directly in client-side code. These examples are intended for server-side usage only. </p> </div> <h2>Code Examples</h2> <Tabs defaultValue="javascript" > <TabsList> <TabsTrigger value="javascript" >JavaScript (Axios) </TabsTrigger> <TabsTrigger value="python" >Python</TabsTrigger> <TabsTrigger value="node" >Node.js (fetch) </TabsTrigger> </TabsList> <TabsContent value="javascript" > <p>Using Axios with JavaScript:</p> </TabsContent> <TabsContent value="python" > <p>Using requests with Python:</p> </TabsContent> <TabsContent value="node" > <p>Using fetch with Node.js:</p> </TabsContent> </Tabs> <h2>Using the Examples</h2> <p> To use these examples, you'll need to replace 'YOUR API KEY' with your actual API key;
which you can generate in the <a href="/developers/portal" className="text-zion-cyan" >Developer Portal</Link>. </p> <h2>Additional Resources</h2> <ul> <li>Download our <a href="#" className="text-zion-cyan" >Postman Collection</Link> for easy API testing</li> <li>Check out our <a href="#" className="text-zion-cyan" >GitHub repository</Link> for more code examples</li> <li>Join our <a href="#" className="text-zion-cyan" >Developer Discord</Link> for community support</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiSampleCode;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ApiSampleCode.tsx
=======
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ApiSampleCode;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
