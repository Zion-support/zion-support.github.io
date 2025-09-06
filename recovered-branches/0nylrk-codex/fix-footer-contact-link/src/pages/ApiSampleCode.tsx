 export function ApiSampleCode () {
  //JavaScript example with Axios const jsAxiosExample = `//Using Axios with JavaScript import axios from 'axios';
//Configure Axios with the base URL and headers const api = axios.create ({
  baseURL: 'https://api.zionai.com/v1';
headers: {
  YOUR API KEY 
}\`;
'Content-Type': 'application/json' 
}
});
//Get all jobs 
}//Example usage async function main () {
  try {
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
}main (), `;
//Python example with requests const pythonExample = `# Using requests with Python import requests import json API KEY = 'YOUR API KEY' BASE URL = 'https://api.zionai.com/v1' response = requests.get (url, params=filters, headers=headers) response.raise for status () # Raise exception for 4XX/5XX responses return response.json () def create job (job data) : response = requests.post (url, json=job data, headers=headers) response.raise for status () return response.json () def search talent (filters=None) : response = requests.get (url, params=filters, headers=headers) response.raise for status () return response.json () # Example usage if name == "main " : try: # Get all open jobs # Create a new job new job = create job ({
  'title': 'Data Scientistdescription': 'Looking for an experienced data scientist...category': 'databudget': {
  'min': 6000;
'max': 9000;
'currency': 'USD' 
};
'skills': ['PythonMachine LearningSQL'] 
}) print (f"New job created with ID: {
  new job['id'] 
}") # Search for talent with Python skills except requests.exceptions.HTTPError as e: print (f"HTTP Error: {
  e 
}") print (f"Response: {
  e.response.text 
}") except Exception as e: //Node.js example with fetch const nodeFetchExample = `//Using node-fetch with Node.js import fetch from 'node-fetch';
const API KEY = 'YOUR API KEY';
const BASE URL = 'https: //api.zionai.com/v1';
//Helper to handle API requests async function apiRequest (endpoint, options = {
  
}) {
  const url = \`\$ {
  BASE URL 
}\$ {
  endpoint 
}\`;
'Authorization': \`Bearer \$ {
  API KEY 
}\`;
'Content-Type': 'application/json';
...options.headers 
};
}return response.json () 
}//Get all jobs 
}//Example usage async function main () {
  try {
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
}main (), `;
return (<ApiDocsLayout> <div className="max-w-3xl prose prose-invert" > <h1>Sample Code</h1> <p> The following code examples demonstrate how to integrate with the Zion AI Marketplace API using different programming languages and libraries. </p> <h2>Authentication</h2> <p> All API requests require authentication using API keys. Make sure to include your API key in the Authorization header as shown in the examples below. </p> <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6" > <h3 className="text-yellow-500 text-sm font-medium mt-0" >Security Warning</h3> <p className="text-sm text-yellow-300/90 mb-0" > Never include your API key directly in client-side code. These examples are intended for server-side usage only. </p> </div> <h2>Code Examples</h2> <Tabs defaultValue="javascript" > <TabsList> <TabsTrigger value="javascript" >JavaScript (Axios) </TabsTrigger> <TabsTrigger value="python" >Python</TabsTrigger> <TabsTrigger value="node" >Node.js (fetch) </TabsTrigger> </TabsList> <TabsContent value="javascript" > <p>Using Axios with JavaScript:</p> </TabsContent> <TabsContent value="python" > <p>Using requests with Python:</p> </TabsContent> <TabsContent value="node" > <p>Using fetch with Node.js:</p> </TabsContent> </Tabs> <h2>Using the Examples</h2> <p> To use these examples, you'll need to replace 'YOUR API KEY' with your actual API key;
which you can generate in the <a href="/developers/portal" className="text-zion-cyan" >Developer Portal</Link>. </p> <h2>Additional Resources</h2> <ul> <li>Download our <a href="#" className="text-zion-cyan" >Postman Collection</Link> for easy API testing</li> <li>Check out our <a href="#" className="text-zion-cyan" >GitHub repository</Link> for more code examples</li> <li>Join our <a href="#" className="text-zion-cyan" >Developer Discord</Link> for community support</li> </ul> </div> </ApiDocsLayout>) 
}export default ApiSampleCode;
