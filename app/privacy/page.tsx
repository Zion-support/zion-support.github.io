import React from 'react';
import { Shield, CheckCircle, ArrowRight, Users, Globe, Database, Settings } from 'lucide-react';

const PrivacyPage = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement robust security measures to protect your personal information.',
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and how it\'s used.',
    },
    {
      icon: Globe,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information.',
    },
    {
      icon: Database,
      title: 'Data Minimization',
      description: 'We only collect the data necessary to provide our services.',
    },
  ];

  const dataTypes = [
    'Personal Information',
    'Contact Information',
    'Usage Data',
    'Device Information',
    'Location Data',
    'Cookies',
  ];

  const rights = [
    'Access Your Data',
    'Correct Inaccuracies',
    'Delete Your Data',
    'Data Portability',
    'Opt-out of Marketing',
    'Withdraw Consent',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and being transparent about our practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <principle.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect information to provide and improve our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-lg font-semibold text-gray-900">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have certain rights regarding your personal information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{right}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            If you have any questions about our privacy practices, please contact us.
          </p>
          <a
            href="mailto:privacy@ziontechgroup.com"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;