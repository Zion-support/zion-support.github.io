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
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">API Documentation</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codeExamples.map((ex, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between">
                <span className="font-medium">{ex.language}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{ex.title}</h3>
                <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
                  <code>{ex.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}