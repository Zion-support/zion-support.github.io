<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
<<<<<<< HEAD
        <title>Privacy Policy - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Privacy policy of Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              This privacy policy describes how Zion Tech Group collects, uses, and protects your information.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account,
              use our services, or contact us for support.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, and communicate with you.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy, please contact us at privacy@ziontechgroup.com.
            </p>
          </div>

=======
        <meta name="description" content="Privacy Policy services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Privacy Policy solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Privacy page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Privacy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
=======
<<<<<<< HEAD
import {Helmet}}from 'react-helmet-async';
import {Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle}}from 'lucide-react';
  const dataTypes = [
    {category: 'Personal Information',
      icon: User,},
    {category: 'Usage Data',
      icon: Database,},
    {category: 'Technical Data',
      icon: Server,}];
  const purposes = [
    {}];
=======
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024';

  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']
    }
  ];

  const purposes = [
    {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services'
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services'
    },
    {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features'
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'To protect against fraud and abuse'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  const rights = [
    {title: 'Access',
      description: 'Request access to your personal data',
<<<<<<< HEAD
      icon: Eye;,},
    {title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',},
    {title: 'Erasure',
      description: 'Request deletion of your personal data',},
    {title: 'Portability',
      description: 'Receive your data in a structured format',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Database;,},
    {title: 'Restriction',
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      icon: Database
    },
    {
      title: 'Restriction',
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      description: 'Limit how we process your data',
      icon: Lock;,},
    {title: 'Objection',
      description: 'Object to certain types of processing',
<<<<<<< HEAD
      icon: Shield;,}]
=======
      icon: Shield
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c

<<<<<<< HEAD
  const contactInfo = {email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
<<<<<<< HEAD
    address: '364 E Main St STE 1008, Middletown, DE 19709'}return(<>)
      <Helmet />
        <title>Privacy Policy - Zion Tech Group</title>
=======
    address: '364 E Main St STE 1008, Middletown, DE 19709'
<<<<<<< HEAD
  }

<<<<<<< HEAD

=======
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
  return (
    <>
      <Helmet></Helmet>
        <title></titl>Privacy Policy - Zion Tech Group</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn about how we collect, use, and protect your information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center text-sm text-blue-200">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: {lastUpdated}
=======
import React from 'react';
// import { Metadata } from 'next'; // Removed for Vite

const metadata: Metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description:
    'Privacy policy and data protection information for Zion Tech Group services and website.',
};

export { metadata };

const PrivacyPage: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h1 className='text-4xl font-bold text-gray-900 mb-8'>
                Privacy Policy
              </h1>

              <div className='prose prose-lg max-w-none'>
                <p className='text-gray-600 mb-6'>
                  <strong>Last updated:</strong>{' '}
                  {new Date().toLocaleDateString()}
                </p>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Information We Collect
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We collect information you provide directly to us, such as
                    when you create an account, contact us, or use our services.
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>
                      Contact information (name, email address, phone number)
                    </li>
                    <li>Account information (username, password)</li>
                    <li>Business information (company name, job title)</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    How We Use Your Information
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We use the information we collect to provide, maintain, and
                    improve our services.
                  </p>
                  <ul className='list-disc list-inside text-gray-600 space-y-2'>
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Information Sharing
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy.
                  </p>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Data Security
                  </h2>
                  <p className='text-gray-600 mb-4'>
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Contact Us
                  </h2>
                  <p className='text-gray-600'>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                    <p className='text-gray-600'>
                      <strong>Email:</strong> privacy@ziontechgroup.com
                      <br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                      <br />
                      <strong>Address:</strong> 123 Tech Street, San Francisco,
                      CA 94105
                    </p>
                  </div>
                </section>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </div>
        </div>
        
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {dataTypes.map((type, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <type.icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">{type.category}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{type.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {purposes.map((purpose, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <purpose.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                        <p className="text-gray-700">{purpose.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {rights.map((right, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <right.icon className="h-6 w-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>
                      </div>
                      <p className="text-gray-700">{right.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                <div className="bg-gray-50 rounded-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Measures</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          SSL encryption for data transmission
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Secure data storage
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Regular security audits
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          GDPR compliance
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          CCPA compliance
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          Industry best practices
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">+1 (302) 464-0950</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Zion Tech Group Privacy Team</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <Footer />
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default PrivacyPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
};

export default PrivacyPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy page for Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Privacy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This is the Privacy page for Zion Tech Group.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
