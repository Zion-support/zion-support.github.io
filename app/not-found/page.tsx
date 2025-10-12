import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      title="Page Not Found - Zion Tech Group"
      description="The page you are looking for could not be found. Please check the URL or return to the homepage."
      keywords="404, not found, error, page not found"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                404
              </span>
              <br />
              <span className="text-white">Page Not Found</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The page you are looking for could not be found. Please check the URL or return to the homepage.
            </p>
          </div>

          <div className="text-center">
            <a 
              href="/" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage