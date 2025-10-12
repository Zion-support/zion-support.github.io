'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react'

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      icon: FileText,
      content: 'Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
    },
    {
      title: 'Service Availability',
      icon: Shield,
      content: 'We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.'
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.'
    },
    {
      title: 'Prohibited Uses',
      icon: AlertTriangle,
      content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.'
    },
    {
      title: 'Limitation of Liability',
      icon: Scale,
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="text-white">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these Terms of Service, please contact us.
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
                <h3 className="text-xl font-semibold text-white mb-4">Legal Notice</h3>
                <div className="space-y-2 text-gray-300">
                  <p>These terms are governed by the laws of Delaware, United States. Any disputes will be resolved in the courts of Delaware.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfServicePage