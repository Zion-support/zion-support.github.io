'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react'

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.'
    },
    {
      title: 'Information Sharing',
      icon: UserCheck,
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business.'
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Your Rights',
      icon: Shield,
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: 'Cookies and Tracking',
      icon: AlertCircle,
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Protection Officer</h3>
                <div className="space-y-2 text-gray-300">
                  <p>For privacy-related inquiries, please contact our Data Protection Officer at the email address above.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage