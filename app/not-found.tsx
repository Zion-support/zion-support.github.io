'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">Looking for something specific?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              to="/ai-services"
              className="block p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-cyan-400 font-medium">AI Services</div>
              <div className="text-gray-400 text-sm">Explore our AI solutions</div>
            </Link>
            
            <Link
              to="/it-services"
              className="block p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 font-medium">IT Services</div>
              <div className="text-gray-400 text-sm">Check our IT solutions</div>
            </Link>
            
            <Link
              to="/contact"
              className="block p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 font-medium">Contact Us</div>
              <div className="text-gray-400 text-sm">Get in touch</div>
            </Link>
            
            <Link
              to="/support"
              className="block p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-green-400 font-medium">Support</div>
              <div className="text-gray-400 text-sm">Get help</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage