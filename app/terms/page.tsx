import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain the availability of our services 24/7, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.'
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any unlawful or prohibited purpose.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, and other intellectual property on our website and services are owned by Zion Tech Group or our licensors. Users may not use, reproduce, or distribute any content without our written permission.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.'
    }
  ]

  const keyPoints = [
    'Service availability is not guaranteed 24/7',
    'Users are responsible for account security',
    'Intellectual property rights are protected',
    'Liability is limited as per applicable law',
    'Terms may be updated without notice',
    'Disputes are subject to Delaware law'
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
                Please read these terms of service carefully before using our website and services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                These Terms of Service ("Terms") govern your use of our website and services provided by 
                Zion Tech Group ("Company," "we," "us," or "our"). By accessing or using our services, 
                you agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do not agree to these Terms, please do not use our services. We reserve the right 
                to modify these Terms at any time, and your continued use of our services constitutes 
                acceptance of any changes.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Important Points
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to its conflict of law provisions. Any legal action or proceeding arising under these 
                Terms will be brought exclusively in the courts of Delaware.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
                limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain 
                in full force and effect.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Questions About These Terms?</h2>
              <p className="text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-4">
                <div className="text-cyan-400 font-semibold">Email: kleber@ziontechgroup.com</div>
                <div className="text-cyan-400 font-semibold">Phone: (302) 464-0950</div>
                <div className="text-gray-300">
                  Address: 364 E Main St STE 1008, Middletown, DE 19709
                </div>
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