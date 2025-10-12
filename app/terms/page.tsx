import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Learn about our terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Last updated:</strong> January 8, 2025
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or copy the materials.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">3. Service Availability</h2>
              <p className="text-gray-300 mb-6">
                We strive to maintain the availability of our services 24/7, but we do not guarantee 
                uninterrupted service. We reserve the right to modify, suspend, or discontinue any 
                part of our services at any time without notice.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p className="text-gray-300 mb-6">
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account 
                or password. You must not use our services for any unlawful purpose or any purpose 
                prohibited under this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The service is protected 
                by copyright, trademark, and other laws.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li>Email: legal@ziontechgroup.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, Innovation City, IC 12345</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}