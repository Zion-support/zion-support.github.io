import React from 'react';
import { Link } from 'react-router-dom';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">API Documentation</h1>
          
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              API Endpoints
            </h2>
            
            <div className='space-y-6'>
              <div className='border-l-4 border-blue-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  POST /api/content/create
                </h3>
                <p className='text-gray-600 mb-3'>
                  Create new content using AI
                </p>
                <div className='bg-gray-100 p-3 rounded'>
                  <code className='text-sm text-gray-800'>
                    Content-Type: application/json<br/>
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
              
              <div className='border-l-4 border-green-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  GET /api/content/list
                </h3>
                <p className='text-gray-600 mb-3'>
                  Retrieve all content
                </p>
                <div className='bg-gray-100 p-3 rounded'>
                  <code className='text-sm text-gray-800'>
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
              
              <div className='border-l-4 border-purple-500 pl-4'>
                <h3 className='text-lg font-medium text-gray-800 mb-2'>
                  PUT /api/content/update/:id
                </h3>
                <p className='text-gray-600 mb-3'>
                  Update existing content
                </p>
                <div className='bg-gray-100 p-3 rounded'>
                  <code className='text-sm text-gray-800'>
                    Content-Type: application/json<br/>
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
            </div>
          </div>
          
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Code Examples
            </h2>
            
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-medium text-gray-800 mb-3'>
                  JavaScript/Node.js
                </h3>
                <pre className='bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm'>
                  {`const axios = require('axios');

const apiKey = 'your-api-key';
const baseURL = 'https://api.ziontechgroup.com';

// Create content
async function createContent(contentData) {
  try {
    const response = await axios.post(\`\${baseURL}/api/content/create\`, contentData, {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Content created:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}`}
                </pre>
              </div>
              
              <div>
                <h3 className='text-lg font-medium text-gray-800 mb-3'>
                  Python
                </h3>
                <pre className='bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm'>
                  {`import requests
import json

api_key = 'your-api-key'
base_url = 'https://api.ziontechgroup.com'

def create_content(content_data):
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }
    
    try:
        response = requests.post(
            f'{base_url}/api/content/create',
            data=json.dumps(content_data),
            headers=headers
        )
        response.raise_for_status()
        print('Content created:', response.json())
    except requests.exceptions.RequestException as e:
        print('Error:', e)`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;
