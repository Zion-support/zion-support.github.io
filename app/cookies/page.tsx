'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default function Page() {
return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" loading="lazy"></div>
        <Navigation />
        <main className="pt-20" loading="lazy">
          <div className="container mx-auto px-4 py-16" loading="lazy"></div>
            <div className="max-w-4xl mx-auto" loading="lazy"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" loading="lazy">
                Cookie Policy</h1>
              </h1>
              <div className="prose prose-lg max-w-none" loading="lazy"></div>
                <p className="text-xl text-gray-600 mb-8" loading="lazy">Last updated: {new Date().toLocaleDateString()}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4" loading="lazy">What Are Cookies</h2>
                <p className="text-gray-700 mb-6" loading="lazy">Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4" loading="lazy">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6" loading="lazy">We use cookies to improve your experience on our website, analyze site traffic, and personalize content.</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4" loading="lazy">Managing Cookies</h2>
                <p className="text-gray-700 mb-6" loading="lazy">You can control and/or delete cookies as you wish through your browser settings.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
};
export default CookiesPage

