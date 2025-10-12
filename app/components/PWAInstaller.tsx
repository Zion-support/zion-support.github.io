'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const PWAInstaller: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>PWA Installer | Zion Tech Group</title>
        <meta name="description" content="Professional PWA installation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="PWA Installer, AI solutions, IT services, Zion Tech Group, pwa installer" />
      </Helmet>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PWA Installer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional PWA installation services for your business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller