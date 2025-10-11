'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      icon: Database,
      category: 'Personal Information',
      description: 'Name, email address, phone number, and other contact details you provide to us.'
    },
    {
      icon: Eye,
      category: 'Usage Data',
      description: 'Information about how you use our website and services, including pages visited and time spent.'
    },
    {
      icon: Lock,
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and other technical details collected automatically.'
    },
    {
      icon: Shield,
      category: 'Security Data',
      description: 'Information related to security, authentication, and fraud prevention.'
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Data Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Types of Data We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                    <type.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.category}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• To provide and improve our services</li>
                  <li>• To communicate with you about our products and services</li>
                  <li>• To process transactions and provide customer support</li>
                  <li>• To analyze usage patterns and optimize our website</li>
                  <li>• To comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
                <p className="text-gray-300 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication mechanisms</li>
                  <li>• Employee training on data protection practices</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Your Rights</h3>
                <p className="text-gray-300 mb-4">
                  You have certain rights regarding your personal data, including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• The right to access your personal data</li>
                  <li>• The right to correct inaccurate data</li>
                  <li>• The right to delete your data</li>
                  <li>• The right to restrict processing</li>
                  <li>• The right to data portability</li>
                  <li>• The right to object to processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about our privacy practices or want to exercise your rights, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                privacy@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
