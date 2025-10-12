'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Shield, Users, AlertTriangle, Scale, Mail, Phone, MapPin } from 'lucide-react'
import Layout from '../layout'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      icon: <Shield className="w-6 h-6 text-green-500" />,
      content: 'Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'User Accounts',
      icon: <Users className="w-6 h-6 text-purple-500" />,
      content: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.'
    },
    {
      title: 'Prohibited Uses',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.'
    },
    {
      title: 'Intellectual Property',
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group.'
    }
  ]

  return (
    <Layout 
      title="Terms of Service - Zion Tech Group"
      description="Terms and conditions for using Zion Tech Group services. Please read these terms carefully before using our services."
      keywords="terms of service, terms and conditions, user agreement, legal terms, service terms"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-purple-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Terms of <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            These terms and conditions outline the rules and regulations for the use of Zion Tech Group's services.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-gray-300 mb-6">
              Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website and services 
              (collectively, the "Service") operated by Zion Tech Group ("us", "we", or "our").
            </p>
            <p className="text-gray-300 mb-8">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, 
              then you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">2. Key Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{section.title}</h3>
                  </div>
                  <p className="text-gray-300">{section.content}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">3. Detailed Terms</h2>
            
            <h3 className="text-xl font-semibold text-white mb-4">3.1 Acceptance of Terms</h3>
            <p className="text-gray-300 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. 
              Additionally, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.2 Use License</h3>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 ml-6">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to reverse engineer any software contained on our website</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">3.3 User Accounts</h3>
            <p className="text-gray-300 mb-6">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.4 Prohibited Uses</h3>
            <p className="text-gray-300 mb-4">
              You may not use our services:
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 ml-6">
              <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>• To submit false or misleading information</li>
              <li>• To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">3.5 Intellectual Property Rights</h3>
            <p className="text-gray-300 mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group 
              and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
              in connection with any product or service without our prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.6 Privacy Policy</h3>
            <p className="text-gray-300 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices. You can find our Privacy Policy at{' '}
              <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                /privacy
              </a>.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.7 Service Availability</h3>
            <p className="text-gray-300 mb-6">
              We strive to provide continuous service availability, but we do not guarantee that our Service will be available at all times. 
              We may experience hardware, software, or other problems or need to perform maintenance related to our Service, 
              resulting in interruptions, delays, or errors.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.8 Limitation of Liability</h3>
            <p className="text-gray-300 mb-6">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.9 Disclaimer</h3>
            <p className="text-gray-300 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
              this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.10 Governing Law</h3>
            <p className="text-gray-300 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
              without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
              will not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.11 Changes to Terms</h3>
            <p className="text-gray-300 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3.12 Contact Information</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
              <p className="text-yellow-300 text-sm">
                These terms constitute a legally binding agreement between you and Zion Tech Group. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TermsPage