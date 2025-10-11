'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Edit, Trash2, Download, Database, Server, Lock } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email, phone number, and other identifying information',
      icon: Database
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our services and website',
      icon: Server
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      icon: Lock
    }
  ];

  const purposes = [
    {
      title: 'Service Provision',
      description: 'To provide and maintain our services'
    },
    {
      title: 'Communication',
      description: 'To communicate with you about our services'
    },
    {
      title: 'Improvement',
      description: 'To improve and develop our services'
    },
    {
      title: 'Legal Compliance',
      description: 'To comply with legal obligations'
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
      description: 'Request correction of inaccurate data',
      icon: Edit
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a portable format',
      icon: Download
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <type.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {purposes.map((purpose, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{purpose.title}</h3>
                    <p className="text-gray-300 text-sm">{purpose.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have certain rights regarding your personal information under applicable data protection laws.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <right.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website and to analyze usage patterns.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. Third-Party Services</h2>
              <p className="text-gray-300 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 text-gray-300">
                <p>Zion Tech Group</p>
                <p>364 E Main St STE 1008</p>
                <p>Middletown, DE 19709</p>
                <p>Email: privacy@ziontechgroup.com</p>
                <p>Phone: +1-302-464-0950</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;