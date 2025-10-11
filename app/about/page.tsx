import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through AI and IT solutions." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI-powered solutions and comprehensive IT services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage