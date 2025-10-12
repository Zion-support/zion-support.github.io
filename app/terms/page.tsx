import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
            <p className="text-gray-300 mb-6">
              Permission is granted to temporarily download one copy of our materials for personal, 
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
            <p className="text-gray-300 mb-6">
              We strive to maintain high service availability but do not guarantee uninterrupted access 
              to our services.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
              out of the use or inability to use our services.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}