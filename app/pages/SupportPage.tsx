import React from 'react'
import { Helmet } from 'react-helmet-async'
const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for your Zion Tech Group services." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default SupportPage