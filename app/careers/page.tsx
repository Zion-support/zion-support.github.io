import React from 'react'
import { Helmet } from 'react-helmet-async'

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help transform businesses with technology." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and help transform businesses with technology.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareersPage