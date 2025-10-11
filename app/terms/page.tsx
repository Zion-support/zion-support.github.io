'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, CheckCircle, ArrowRight, Shield, AlertTriangle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.'
    },
    {
      title: 'Links',
      content: 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.'
    },
    {
      title: 'Modifications',
      content: 'We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the United States.'
    }
  ]

  const importantPoints = [
    'Service availability is not guaranteed',
    'Users are responsible for their own data security',
    'We reserve the right to modify services at any time',
    'Intellectual property rights are protected',
    'Users must comply with applicable laws and regulations'
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms and Conditions</title>
        <meta name="description" content="Read our terms of service to understand the legal terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
                  <p className="text-gray-300">
                    These terms of service constitute a legally binding agreement between you and Zion Tech Group. 
                    Please read them carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Key Points to Remember
              </h2>
              <p className="text-xl text-gray-300">
                Important information about using our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms of service, 
                please contact our legal team for clarification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2 inline" />
                  Contact Legal Team
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Download Terms
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TermsPage