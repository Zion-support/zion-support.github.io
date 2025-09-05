import React from 'react'
import Head from 'next/head'

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
const data = await response.json()`
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
print(response.json())`
  }
]

export default function APIDocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
        
        <div className="space-y-8">
          {codeExamples.map((example, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{example.title} ({example.language})</h2>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}