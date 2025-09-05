
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiSampleCode() {_// JavaScript example with Axios
  const _jsAxiosExample = `// Using Axios with JavaScript
import axios from 'axios';

// Configure Axios with the base window.URL and headers
const _api = axios.create({
  baseURL: 'https://api.zionai.com/v1', _headers: {
    'Authorization': \`Bearer \${YOUR_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

// Get all jobs
async function getJobs(_filters = {}) {_try {
    const _response = await api.get('/api/jobs', _{ params: filters});
    return response.data;
  } catch (error) {_throw error;}
}

// Post a new job
async function createJob(_jobData) {_try {
    const _response = await api.post('/api/jobs', _jobData);
    return response.data;} catch (error) {_throw error;}
}

// Search for talent
async function searchTalent(_filters = {}) {_try {
    const _response = await api.get('/api/talent', _{ params: filters});
    return response.data;
  } catch (error) {_throw error;}
}

// Example usage
async function main() {_try {
    // Get all open jobs
    const _jobs = await getJobs({ status: 'open', _limit: 5});
    
    
    // Create a new job
    const _newJob = await createJob({_title: 'Frontend Developer', _description: 'We need a skilled frontend developer...', _category: 'development', _budget: {
        min: 5000, _max: 7500, _currency: 'USD'},
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    });
    
    
    // Search for talent with React skills
    const _talent = await searchTalent({_skills: 'React', _limit: 10});
    
  } catch (error) {}
}

main();`;

  // Python example with requests
  const _pythonExample = `# Using requests with Python
import requests
import json

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.zionai.com/v1'

headers = {_'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

def get_jobs(filters=None):
    """Get all jobs with optional filters"""
    url = f"{_BASE_URL}/api/jobs"
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()  # Raise exception for 4XX/5XX responses
    return response.json()

def create_job(job_data):
    """Create a new job posting"""
    url = f"{_BASE_URL}/api/jobs"
    response = requests.post(url, json=job_data, headers=headers)
    response.raise_for_status()
    return response.json()

def search_talent(filters=None):
    """Search for talent with optional filters"""
    url = f"{_BASE_URL}/api/talent"
    response = requests.get(url, params=filters, headers=headers)
    response.raise_for_status()
    return response.json()

# Example usage
if __name__ == "__main__":
    try:
        # Get all open jobs
        jobs = get_jobs({_'status': 'open', _'limit': 5})
        print(f"Found {_len(jobs['jobs'])} jobs")
        
        # Create a new job
        new_job = create_job({_'title': 'Data Scientist', _'description': 'Looking for an experienced data scientist...', _'category': 'data', _'budget': {
                'min': 6000, _'max': 9000, _'currency': 'USD'},
            'skills': ['Python', 'Machine Learning', 'SQL']
        })
        print(f"New job created with ID: {_new_job['id']}")
        
        # Search for talent with Python skills
        talent = search_talent({_'skills': 'Python', _'limit': 10})
        print(f"Found {_len(talent['talent'])} talented people")
        
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {_e}")
        print(f"Response: {_e.response.text}")
    except Exception as e:
        print(f"Error: {_e}")`;

  // Node.js example with fetch
  const _nodeFetchExample = `// Using node-fetch with Node.js
import fetch from 'node-fetch';

const _API_KEY = 'YOUR_API_KEY';
const _BASE_URL = 'https://api.zionai.com/v1';

// Helper to handle API requests
async function apiRequest(_endpoint, _options = {}) {_const _url = \`\${BASE_URL}\${_endpoint}\`;
  
  const _headers = {_'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json',
    ...options.headers
  };
  
  const _config = {_...options, _headers};
  
  const _response = await fetch(url, config);
  
  if (!response.ok) {_const _error = await response.json();
    throw new Error(error.message || \`API error: \${response.status}\`);
  }
  
  return response.json();
}

// Get all jobs
async function getJobs(_filters = {}) {_// Convert filters to query string
  const _params = new URLSearchParams();
  Object.entries(filters).forEach(_([key, _value]) => {
    params.append(key, _value);});
  
  const _queryString = params.toString() ? \`?\${_params.toString()}\` : '';
  return apiRequest(\`/api/jobs\${_queryString}\`, {_method: 'GET'});
}

// Post a new job
async function createJob(_jobData) {_return apiRequest('/api/jobs', _{
    method: 'POST', _body: JSON.stringify(jobData)});
}

// Search for talent
async function searchTalent(_filters = {}) {_const _params = new URLSearchParams();
  Object.entries(filters).forEach(_([key, _value]) => {
    params.append(key, _value);});
  
  const _queryString = params.toString() ? \`?\${_params.toString()}\` : '';
  return apiRequest(\`/api/talent\${_queryString}\`, {_method: 'GET'});
}

// Example usage
async function main() {_try {
    // Get all open jobs
    const _jobs = await getJobs({ status: 'open', _limit: 5});
    
    
    // Create a new job
    const _newJob = await createJob({_title: 'Backend Developer', _description: 'We need a skilled backend developer...', _category: 'development', _budget: {
        min: 6000, _max: 8000, _currency: 'USD'},
      skills: ['Node.js', 'Express', 'MongoDB']
    });
    
    
    // Search for talent with Node.js skills
    const _talent = await searchTalent({_skills: 'Node.js', _limit: 10});
    
  } catch (error) {}
}

main();`;

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
            <CodeBlock code={_jsAxiosExample} language="javascript" showLineNumbers={_true} />
          </TabsContent>
          <TabsContent value="python">
            <p>Using requests with Python:</p>
            <CodeBlock code={_pythonExample} language="python" showLineNumbers={_true} />
          </TabsContent>
          <TabsContent value="node">
            <p>Using fetch with Node.js:</p>
            <CodeBlock code={_nodeFetchExample} language="javascript" showLineNumbers={_true} />
          </TabsContent>
        </Tabs>

        <h2>Using the Examples</h2>
        <p>
          To use these examples, you'll need to replace 'YOUR_API_KEY' with your actual API key,
          which you can generate in the <a href="/developers/portal" className="text-zion-cyan">Developer Portal</a>.
        </p>
        
        <h2>Additional Resources</h2>
        <ul>
          <li>Download our <a href="#" className="text-zion-cyan">Postman Collection</a> for easy API testing</li>
          <li>Check out our <a href="#" className="text-zion-cyan">GitHub repository</a> for more code examples</li>
          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>
        </ul>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiSampleCode;
