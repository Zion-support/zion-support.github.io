'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services with reasonable notice.'
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must comply with all applicable laws and regulations.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, and intellectual property on this website are owned by Zion Tech Group or our licensors. Users may not reproduce, distribute, or create derivative works without permission.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use, arising out of or relating to the use of our services.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read our terms of service and legal conditions for using our AI and IT services. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms, legal compliance" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Terms of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Service
              </span>836
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>1011
          </div>
        </section>
        {/* Content Section */}

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
By accessing and using our services, you accept and agree to be bound by the terms
                  and provision of this agreement.
                </p>1601
                <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>1897
                <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes'
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>2220
                <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising
                  out of the use or inability to use the materials on our website.
                </p>2596
                <h2 className="text-2xl font-semibold text-white mb-4">Accuracy of Materials</h2>
                <p className="text-gray-300 mb-6">
                  The materials appearing on our website could include technical, typographical, or;
                  photographic errors. We do not warrant that any of the materials on its website are
                  accurate, complete, or current.
                </p>2954
                <h2 className="text-2xl font-semibold text-white mb-4">s</h2>
                <p className="text-gray-300 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible
                  for the contents of any such linked site.
                </p>3359
                <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
                <p className="text-gray-300 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms.
                </p>3685
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these terms of service, please contact us at
                  <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    legal@ziontechgroup.com
                  </a>4201.
                </p>
                <p className="text-gray-400 text-sm mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these terms of service, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Legal Team
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
