import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileText, Lock, Eye, Database, Users } from 'lucide-react';

const GdprPage: React.FC = () => {
  const gdprPrinciples = [
    {
      title: 'Lawfulness, Fairness and Transparency',
      description: 'We process personal data lawfully, fairly and in a transparent manner.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Purpose Limitation',
      description: 'We collect personal data for specified, explicit and legitimate purposes.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Data Minimisation',
      description: 'We only collect data that is adequate, relevant and limited to what is necessary.',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Accuracy',
      description: 'We keep personal data accurate and up to date.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Storage Limitation',
      description: 'We retain personal data only for as long as necessary.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Integrity and Confidentiality',
      description: 'We process personal data in a secure manner.',
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const dataRights = [
    {
      title: 'Right to Access',
      description: 'You have the right to obtain confirmation of whether we process your personal data and access to that data.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to have inaccurate personal data corrected and incomplete data completed.',
      icon: <Edit className="w-6 h-6" />
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.',
      icon: <Trash2 className="w-6 h-6" />
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to restrict the processing of your personal data in certain situations.',
      icon: <Pause className="w-6 h-6" />
    },
    {
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.',
      icon: <Download className="w-6 h-6" />
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to the processing of your personal data for certain purposes.',
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  const dataTypes = [
    {
      category: 'Contact Information',
      data: ['Name', 'Email address', 'Phone number', 'Company name', 'Job title'],
      purpose: 'Communication and service delivery'
    },
    {
      category: 'Technical Data',
      data: ['IP address', 'Browser type', 'Device information', 'Usage analytics'],
      purpose: 'Website functionality and improvement'
    },
    {
      category: 'Business Data',
      data: ['Project requirements', 'Service preferences', 'Communication history'],
      purpose: 'Service customization and support'
    },
    {
      category: 'Marketing Data',
      data: ['Newsletter preferences', 'Marketing communications', 'Event attendance'],
      purpose: 'Marketing and promotional activities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zion Tech Group is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20 mb-16">
          <div className="flex items-start">
            <Shield className="w-8 h-8 text-cyan-400 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We take data protection seriously and have implemented comprehensive measures to ensure GDPR compliance. 
                Our privacy practices are designed to protect your personal information while enabling us to provide 
                you with the best possible service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This page outlines how we collect, use, store, and protect your personal data in accordance with GDPR requirements.
              </p>
            </div>
          </div>
        </div>

        {/* GDPR Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">GDPR Principles We Follow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gdprPrinciples.map((principle, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 text-cyan-400">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Types We Collect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Types of Data We Collect</h2>
          <div className="space-y-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{type.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Data Collected:</h4>
                    <ul className="space-y-2">
                      {type.data.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Purpose:</h4>
                    <p className="text-gray-300">{type.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Your Data Protection Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dataRights.map((right, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4 text-purple-400 flex-shrink-0">
                    {right.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Data Security Measures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <Lock className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
              <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Access Controls</h3>
              <p className="text-gray-300 text-sm">Strict access controls and authentication</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <Database className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure Storage</h3>
              <p className="text-gray-300 text-sm">Data stored in secure, compliant data centers</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Staff Training</h3>
              <p className="text-gray-300 text-sm">Regular privacy and security training</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Exercise Your Rights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Data Protection Officer</h3>
              <p className="text-gray-300 mb-4">
                For any questions about your personal data or to exercise your rights, contact our Data Protection Officer:
              </p>
              <div className="space-y-2">
                <p className="text-white">
                  <strong>Email:</strong> dpo@ziontechgroup.com
                </p>
                <p className="text-white">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-white">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Response Time</h3>
              <p className="text-gray-300 mb-4">
                We will respond to your request within 30 days of receipt. For complex requests, 
                we may extend this period by up to 60 days, but we will inform you of any delay.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong>Note:</strong> We may need to verify your identity before processing your request 
                  to ensure the security of your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GdprPage;