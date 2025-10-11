'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
    },
    {
      title: 'Service Availability',
      content: 'We strive to provide continuous service availability, but we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.'
    },
    {
      title: 'User Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on our website are the property of Zion Tech Group or their respective owners. You may not use, reproduce, or distribute any content without our written permission.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services.
            </p>
            <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-cyan-400 mr-3" />
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Important Notices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Data Protection</h3>
              </div>
              <p className="text-gray-300">
                We are committed to protecting your personal information and comply with all applicable data protection laws.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Changes to Terms</h3>
              </div>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these terms of service, please contact us.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: legal@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsPage