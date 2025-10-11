'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, FileText, Users, Globe, Settings } from 'lucide-react'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these terms and conditions.',
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      description: 'We provide AI and IT solutions including software development, consulting, and support services.',
      icon: Settings
    },
    {
      title: 'User Responsibilities',
      description: 'Users must comply with applicable laws and use our services in accordance with these terms.',
      icon: Users
    },
    {
      title: 'Intellectual Property',
      description: 'All content and materials provided through our services are protected by intellectual property laws.',
      icon: Shield
    },
    {
      title: 'Privacy and Data',
      description: 'We collect and process personal data in accordance with our privacy policy and applicable laws.',
      icon: Globe
    },
    {
      title: 'Limitation of Liability',
      description: 'Our liability is limited to the maximum extent permitted by applicable law.',
      icon: FileText
    }
  ]

  const keyPoints = [
    'Services are provided "as is" without warranties',
    'Users are responsible for compliance with applicable laws',
    'We reserve the right to modify these terms at any time',
    'Intellectual property rights remain with respective owners',
    'Data processing is subject to our privacy policy',
    'Disputes will be resolved through binding arbitration',
    'These terms are governed by Delaware state law',
    'Contact information is provided for legal notices'
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read our terms of service and legal conditions for using Zion Tech Group's AI and IT solutions. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />
      </Helmet>

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
                Please read these terms and conditions carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Download PDF
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Contact Legal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 15, 2024
              </p>
              <p className="text-gray-400 text-sm mt-2">
                These terms may be updated from time to time. We will notify users of any material changes.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Terms and Conditions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Important information about using our services and your rights and responsibilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Important Points
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key highlights from our terms of service that you should be aware of.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Legal Contact Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                For legal notices, questions about these terms, or to exercise your rights.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown, DE 19709</p>
                    <p>United States</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> (302) 464-0950</p>
                    <p><strong>Website:</strong> ziontechgroup.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              If you have any questions about these terms of service or need clarification on any points, 
              please don't hesitate to contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Legal Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Download Full Terms
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default TermsPage