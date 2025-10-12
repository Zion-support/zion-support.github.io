'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl sm:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage