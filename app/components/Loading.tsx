'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading page for Zion Tech Group" />
      </Helmet>
      
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-8"></div>
        <h1 className="text-2xl font-bold text-white mb-4">Loading...</h1>
        <p className="text-gray-300">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}

export default LoadingPage