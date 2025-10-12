import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our AI and IT solutions." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track with our AI and IT solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Popular Links */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2 text-cyan-400" />
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/ai-services"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                Micro SAAS
              </Link>
              <Link
                to="/contact"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="block p-4 bg-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Still can't find what you're looking for? 
              <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}