import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'

const TermsPage: React.FC = () => {
  const termsSections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      icon: Shield,
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the conditions for using Zion Tech Group's services and website." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, service conditions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>Last updated: December 2024</span>
              <span>•</span>
              <span>Effective immediately</span>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {termsSections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              If you have any questions about these terms of service, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsPage