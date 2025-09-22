
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
// Example usage;
async function main() {;
  try {;
    // Get all open jobs;

  // Python example with requests;
  const pythonExample = `# Using requests with Python;
import requests;
import json;

# Example usage;
if __name__ == "__main__":;
    try:;
        # Get all open jobs;

// Example usage;
async function main() {;
  try {;
    // Get all open jobs;

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
          </TabsContent>;
          <TabsContent value="python">;
            <p>Using requests with Python:</p>;
            <CodeBlock code={pythonExample} language="python" showLineNumbers={true} />;
          </TabsContent>;
          <TabsContent value="node">;

        <h2>Additional Resources</h2>;
        <ul>;
          <li>Download our <a href="#" className="text-zion-cyan">Postman Collection</a> for easy API testing</li>;
          <li>Check out our <a href="#" className="text-zion-cyan">GitHub repository</a> for more code examples</li>;
          <li>Join our <a href="#" className="text-zion-cyan">Developer Discord</a> for community support</li>;
        </ul>;
      </div>;
    </ApiDocsLayout>;
