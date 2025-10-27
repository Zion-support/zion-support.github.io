'use client'

import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Something went wrong</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            We're sorry, but something unexpected happened. Please try again or go back to the home page.
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center mx-auto mb-4"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <a 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center mx-auto"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
