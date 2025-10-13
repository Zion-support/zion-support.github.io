'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies showcasing real-world implementations and results." />
        <meta name="keywords" content="case studies, AI solutions, IT implementations, success stories, technology projects" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Customer Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Implemented intelligent chatbots that reduced response time by 80% and improved customer satisfaction.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +80% Efficiency
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Data Analytics Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Built a comprehensive analytics platform that provided real-time insights and improved decision-making.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Real-time Insights
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cloud Migration
                </h3>
                <p className="text-gray-600 mb-4">
                  Successfully migrated legacy systems to cloud infrastructure, reducing costs by 60%.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                    -60% Costs
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesPage