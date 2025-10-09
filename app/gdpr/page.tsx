import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Download, Trash2, Edit, CheckCircle, AlertCircle, FileText, Mail } from 'lucide-react';

const GDPRPage: React.FC = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data.',
      icon: Eye,
      color: 'text-blue-400'
    },
    {
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate personal data.',
      icon: Edit,
      color: 'text-green-400'
    },
    {
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data.',
      icon: Trash2,
      color: 'text-red-400'
    },
    {
      title: 'Right to Portability',
      description: 'You have the right to receive your data in a structured format.',
      icon: Download,
      color: 'text-purple-400'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of data processing.',
      icon: Lock,
      color: 'text-orange-400'
    },
    {
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data.',
      icon: AlertCircle,
      color: 'text-yellow-400'
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Data',
      description: 'Name, email address, phone number, and other identifying information',
      examples: ['Full name', 'Email address', 'Phone number', 'Mailing address'],
      legalBasis: 'Contract performance and legitimate interest'
    },
    {
      category: 'Technical Data',
      description: 'Information about your device and how you use our services',
      examples: ['IP address', 'Browser type', 'Device information', 'Usage patterns'],
      legalBasis: 'Legitimate interest and consent'
    },
    {
      category: 'Marketing Data',
      description: 'Your preferences and communication history with us',
      examples: ['Marketing preferences', 'Communication history', 'Survey responses'],
      legalBasis: 'Consent'
    },
    {
      category: 'Financial Data',
      description: 'Payment information and billing details',
      examples: ['Payment methods', 'Billing address', 'Transaction history'],
      legalBasis: 'Contract performance'
    }
  ];

  const complianceMeasures = [
    {
      title: 'Data Protection by Design',
      description: 'We implement privacy safeguards from the start of any project',
      icon: Shield,
      status: 'Implemented'
    },
    {
      title: 'Data Minimization',
      description: 'We only collect data that is necessary for our services',
      icon: Lock,
      status: 'Implemented'
    },
    {
      title: 'Consent Management',
      description: 'Clear and granular consent mechanisms for data processing',
      icon: CheckCircle,
      status: 'Implemented'
    },
    {
      title: 'Data Subject Rights',
      description: 'Easy-to-use tools for exercising your GDPR rights',
      icon: FileText,
      status: 'Implemented'
    },
    {
      title: 'Data Breach Notification',
      description: 'Rapid notification system for any data breaches',
      icon: AlertCircle,
      status: 'Implemented'
    },
    {
      title: 'Privacy Impact Assessments',
      description: 'Regular assessments of data processing activities',
      icon: Eye,
      status: 'Implemented'
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance measures and how we protect your personal data in accordance with European data protection regulations." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, compliance, personal data" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to protecting your personal data and ensuring full compliance 
              with the General Data Protection Regulation (GDPR).
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 20, 2024
            </div>
          </section>

          {/* What is GDPR */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">What is GDPR?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                that came into effect on May 25, 2018. It applies to all organizations that process 
                personal data of EU residents, regardless of where the organization is located.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Enhanced Privacy</h3>
                  <p className="text-gray-300 text-sm">
                    Stronger protection for personal data and privacy rights
                  </p>
                </div>
                <div className="text-center">
                  <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                  <p className="text-gray-300 text-sm">
                    Clear information about how data is collected and used
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Control</h3>
                  <p className="text-gray-300 text-sm">
                    Greater control over your personal data and how it's processed
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <right.icon className={`w-8 h-8 ${right.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Personal Data We Collect</h2>
            <div className="space-y-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{dataType.category}</h3>
                      <p className="text-gray-300">{dataType.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-2">Examples:</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        {dataType.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Legal Basis:</h4>
                      <p className="text-gray-300 text-sm">{dataType.legalBasis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Compliance Measures */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our Compliance Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceMeasures.map((measure, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <measure.icon className="w-8 h-8 text-cyan-400" />
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {measure.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{measure.title}</h3>
                  <p className="text-gray-300 text-sm">{measure.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Processing */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">How We Process Your Data</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Purposes of Processing</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Providing and improving our AI services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Processing payments and billing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Communicating with you about our services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complying with legal obligations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Marketing and promotional activities (with consent)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Data Retention</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Account data: Until account closure + 7 years</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Marketing data: Until consent withdrawal</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technical data: 2 years maximum</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Financial data: 7 years for tax compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exercise Your Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Exercise Your Rights</h2>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <p className="text-gray-300 mb-6">
                You can exercise your GDPR rights by contacting our Data Protection Officer. 
                We will respond to your request within 30 days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>Data Protection Officer</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    We will acknowledge your request within 24 hours and provide a full response within 30 days.
                  </p>
                  <p className="text-gray-300 text-sm">
                    In complex cases, we may extend this period by up to 2 months with proper notification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Breach Notification */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Data Breach Notification</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Our Commitment</h3>
                  <p className="text-gray-300 mb-4">
                    In the unlikely event of a data breach that poses a risk to your rights and freedoms, 
                    we will notify you within 72 hours of becoming aware of the breach.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Immediate assessment of the breach and its impact</li>
                    <li>• Notification to relevant authorities within 72 hours</li>
                    <li>• Direct notification to affected individuals without undue delay</li>
                    <li>• Detailed information about the breach and steps taken</li>
                    <li>• Recommendations for protecting your data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About GDPR?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about our GDPR compliance or want to exercise your data protection rights, 
              please contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact DPO
              </a>
              <a
                href="/privacy"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GDPRPage;