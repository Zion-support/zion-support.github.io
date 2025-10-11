import React from 'react'
import { Helmet } from 'react-helmet-async'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage