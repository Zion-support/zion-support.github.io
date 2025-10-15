import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Eye, Lock, Database, User, Mail } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const privacySections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and other information you choose to provide.'
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.'
    },
    {
      icon: Lock,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our commitment to your privacy and data security." />
        <meta name="keywords" content="privacy policy, data protection, personal information, security, GDPR" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span>Last updated: December 2024</span>
              <span>•</span>
              <span>Effective immediately</span>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {privacySections.map((section, index) => (
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
              Questions About Privacy?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              If you have any questions about this privacy policy or our data practices, please contact us.
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

export default PrivacyPage