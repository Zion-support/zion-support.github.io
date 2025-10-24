'use client';
import React from 'react';
import Head from 'next/head';
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Terms of Service
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Terms and Conditions</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-300 mb-4">
              These terms are currently being updated. Please contact us for the most current version of our terms of service.
            </p>
            <p className="text-gray-300">
              For questions about our terms of service, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}