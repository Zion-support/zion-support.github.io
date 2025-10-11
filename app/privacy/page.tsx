'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, CheckCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const rights = [
    {
      title: 'Access',
      description: 'Request a copy of your personal data',
      icon: Eye
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
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-6">
                  You have certain rights regarding your personal information under applicable data protection laws.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rights.map((right, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <right.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                        <p className="text-gray-300 text-sm">{right.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Enterprise-grade security measures</span>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: privacy@ziontechgroup.com</p>
                  <p>Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;