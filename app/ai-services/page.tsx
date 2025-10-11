import React from 'react'
import { Helmet } from 'react-helmet-async'

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIServicesPage