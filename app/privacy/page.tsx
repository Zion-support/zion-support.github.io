'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Database, Server, Lock, Users, Globe, Settings, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      icon: Users
    },
    {
      category: 'Usage Data',
      description: 'How you interact with our website and services',
      icon: Database
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      icon: Server
    }
  ];

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and improve our AI and IT services',
      icon: Settings
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and send important updates',
      icon: Globe
    },
    {
      title: 'Analytics',
      description: 'To understand how our services are used and improve them',
      icon: Database
    },
    {
      title: 'Security',
      description: 'To protect against fraud and ensure system security',
      icon: Shield
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: FileText
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{type.category}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We collect personal information that you provide directly to us, such as when you create an account, 
                    request a consultation, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                  <p className="text-gray-300 mb-4">
                    We automatically collect certain information about how you use our website and services.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Pages visited and time spent on our website</li>
                    <li>Features used and interactions with our services</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking</h3>
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar technologies to enhance your experience and analyze usage patterns.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand usage patterns</li>
                    <li>Marketing cookies for personalized content</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Usage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-xl text-gray-300">
                We use your personal information for specific, legitimate business purposes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <purpose.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{purpose.title}</h3>
                  <p className="text-gray-300">{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>
              <p className="text-gray-300 mb-8">
                You have certain rights regarding your personal information. We are committed to helping you exercise these rights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <right.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                      <p className="text-gray-300">{right.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
                    <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Access Controls</h3>
                    <p className="text-gray-300">Strict access controls ensure only authorized personnel can access your data.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
                    <p className="text-gray-300">We regularly audit our security practices and update them as needed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
                    <p className="text-gray-300">We only collect and retain the minimum amount of data necessary.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about this privacy policy or want to exercise your rights, 
                please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Contact Privacy Team</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Data
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;