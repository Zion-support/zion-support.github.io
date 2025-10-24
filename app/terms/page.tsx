import React from 'react';
import { Shield, CheckCircle, ArrowRight, Users, Globe, Database, Settings } from 'lucide-react';

const TermsPage = () => {
  const termsSections = [
    {
      icon: Users,
      title: 'User Agreement',
      description: 'Terms and conditions for using our services and platform.',
    },
    {
      icon: Shield,
      title: 'Service Terms',
      description: 'Terms governing the provision of our AI and IT services.',
    },
    {
      icon: Globe,
      title: 'Privacy Terms',
      description: 'How we handle and protect your personal information.',
    },
    {
      icon: Database,
      title: 'Data Terms',
      description: 'Terms regarding data ownership, usage, and protection.',
    },
  ];

  const keyTerms = [
    'Service Usage',
    'User Responsibilities',
    'Intellectual Property',
    'Limitation of Liability',
    'Termination',
    'Governing Law',
  ];

  const rights = [
    'Use Our Services',
    'Access Your Data',
    'Terminate Account',
    'Request Support',
    'File Complaints',
    'Data Portability',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. 
              By using our services, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key sections of our terms of service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <section.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important terms you should be aware of when using our services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTerms.map((term, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-lg font-semibold text-gray-900">{term}</div>
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
              Rights you have when using our services.
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
            Questions About Terms?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            If you have any questions about our terms of service, please contact us.
          </p>
          <a
            href="mailto:legal@ziontechgroup.com"
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

export default TermsPage;