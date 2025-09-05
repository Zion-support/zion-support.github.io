import React from 'react'
import Head from 'next/head'

const services = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning.',
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Forecasting and predictive modeling for business intelligence.',
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics'
  }
]

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services - Zion Tech Group</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">AI Services</h1>
        <p className="text-gray-600 mb-10">Explore our core AI offerings.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.description}</p>
              <div className="text-sm text-gray-500">{s.category} · {s.pricing}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}