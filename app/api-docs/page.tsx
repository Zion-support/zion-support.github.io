'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default function APIDocsPage() {
  const [searchQuery, _setSearchQuery] = useState('')
  const apiEndpoints = [
    {
      name: 'AI Chat'
      method: 'POST'
      path: '/api/ai/chat'
      description: 'AI-powered chat completion'
      parameters: ['message', 'model', 'temperature'  ];
      example: {
        request: {
          message: "Hello, how can I help you?"
          model: "gpt-4"
          temperature: 0.7
            }
        response: {
          response: "Hello! I'm here to help you with any questions or tasks you might have."
          confidence: 0.95
          tokens_used: 25
        }
      }
    }
    ];
  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div className="...">
      <Navigation />
      
      <main className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              API Documentation
            </h1>
            <p className="...">
              Complete API documentation for Zion Tech Group's AI and IT solutions.
            </p>
          </div>

          <div className="...">
            {filteredEndpoints.map((endpoint, index) => (
              <div key={index} className="...">
                <div className="...">
                  <h3 className="text-2xl font-bold text-white">{endpoint.name}</h3>
                  <span className="...">
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <code className="...">
                  {endpoint.path}
                </code>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}