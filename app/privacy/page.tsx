<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function PrivacyPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive privacy solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Database, Lock, Eye, CheckCircle, AlertTriangle, Info } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'

  const dataRights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Database
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Shield
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: AlertTriangle
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-cyan-400" />
                    Personal Information
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Company information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-400" />
                    Usage Information
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Website usage patterns</li>
                    <li>• IP address and location</li>
                    <li>• Browser and device information</li>
                    <li>• Cookies and tracking data</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, 
                and ensure the security of our platform. We do not sell, trade, or otherwise transfer your personal 
                information to third parties without your consent.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 mb-8">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Security Measures
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Regular security audits and assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Access controls and authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Employee training on data protection</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have certain rights regarding your personal information. These rights may vary depending on your location 
                and applicable laws.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {dataRights.map((right, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <right.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 mb-6">
                We may use third-party services for analytics, marketing, and other purposes. These services have their own 
                privacy policies, and we encourage you to review them.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
      </main>
      
      <Footer />
    </>
  )
}

export default PrivacyPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
