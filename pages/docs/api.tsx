import React from 'react';
import Layout from '../../components/Layout';

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Fetch Services',
    code: `const response = await fetch('https://ziontechgroup.com/api/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
const data = await response.json()
`
  },
  {
    language: 'Python',
    title: 'Submit Contact Form',
    code: `import requests
url = 'https://ziontechgroup.com/api/v1/contact'
headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
data = {
  'name': 'John Doe',
  'email': 'john@example.com',
  'message': 'Interested in AI services',
  'company': 'Tech Corp'
}
response = requests.post(url, json=data, headers=headers)
print(response.json())
`
  }
];

export default function APIDocumentationPage() {
  return (
    <Layout title="API Docs">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600">Reference content will return after fixes. Basic page added to restore build.</p>
      </div>
    </Layout>
  );
}