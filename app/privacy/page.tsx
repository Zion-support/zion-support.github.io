'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react'
const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'
  const dataTypes = [
    {
=======
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
export default function PrivacyPage() {;
const lastUpdated = 'January 1, 2024';
  ;
const dataTypes = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      category: 'Personal Information',
      icon: User,
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company and job title',
        'Account credentials'
      ]
    },
        {
      category: 'Usage Data',
      icon: Database,
      items: [
        'Website usage patterns',
        'Service interaction data',
        'Device and browser information',
        'IP address and location data'
      ]
    },
        {
      category: 'Technical Data',
      icon: Server,
<<<<<<< HEAD
      items: [
        'Log files and error reports',
        'Performance metrics',
        'Security event data',
        'System configuration information'
      ]
    }
  ]

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services',
      icon: CheckCircle
=======
      description: 'IP address, browser type, operating system, cookies',
examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']]
    };
  ];
;
const purposes = [
[
        {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services']
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
        {
      title: 'Communication',
<<<<<<< HEAD
      description: 'To respond to inquiries and provide customer support',
      icon: Mail
=======
      icon: Mail,
      description: 'To communicate with you about our services']
    },
        {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features']
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    },
        {
      title: 'Security',
<<<<<<< HEAD
      description: 'To protect against fraud and ensure system security',
      icon: Shield
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services',
      icon: Eye
    }
  ]

  const rights = [
    {
=======
      icon: Shield,
description: 'To protect against fraud and abuse']
    };
  ];
;
const rights = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
      icon: AlertTriangle
    },
        {
      title: 'Portability',
      description: 'Receive your data in a structured format',
<<<<<<< HEAD
      icon: Database
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: Shield
    }
  ]

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information 
              when you use our AI and IT services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Secure by Design</h3>
                <p className="text-gray-300 text-sm">
                  We implement industry-standard security measures to protect your data
                </p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Transparent</h3>
                <p className="text-gray-300 text-sm">
                  We clearly explain what data we collect and how we use it
                </p>
              </div>
              <div className="text-center">
                <User className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Your Control</h3>
                <p className="text-gray-300 text-sm">
                  You have full control over your personal data and privacy settings
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{type.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Information */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {purposes.map((purpose, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <purpose.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{purpose.title}</h3>
                    <p className="text-gray-300">{purpose.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sharing */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Sharing and Disclosure</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">We Do Not Sell Your Data</h3>
                <p className="text-gray-300">
                  We do not sell, trade, or rent your personal information to third parties. Your data is only shared 
                  in the following limited circumstances:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">Service Providers</h4>
                  <p className="text-gray-300 text-sm">
                    We may share data with trusted service providers who assist us in operating our services, 
                    subject to strict confidentiality agreements.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-3">Legal Requirements</h4>
                  <p className="text-gray-300 text-sm">
                    We may disclose data when required by law or to protect our rights, property, or safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <right.icon className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Security */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Security Measures</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    End-to-end encryption for data transmission
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Secure data storage with access controls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Regular security audits and penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Employee training on data protection
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    GDPR compliance for EU users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    CCPA compliance for California users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SOC 2 Type II certification
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    ISO 27001 information security management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Questions?</h2>
            <p className="text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact our privacy team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Related Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/terms"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <FileText className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Terms of Service</div>
                  <div className="text-gray-300 text-sm">Our terms and conditions</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
              <a
                href="/cookies"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Database className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Cookie Policy</div>
                  <div className="text-gray-300 text-sm">Information about our use of cookies</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
              <a
                href="/contact"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Mail className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Contact Us</div>
                  <div className="text-gray-300 text-sm">Get in touch with our team</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPage
=======
icon: Database]
    };
  ];
  return (
    <div>
      <div>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6"></h1>
            Privacy Policy</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated};
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="max-w-4xl mx-auto space-y-12"></div>
            {/* Introduction */}</div>
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4"></p>
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>
            {/* Information We Collect */};
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Information We Collect</h2>
              <div className="grid md:grid-cols-3 gap-6"></div>
                {dataTypes.map((type, index) => (</div>
                  <div>
                    <div>
                      <type .icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900"></h>{type.category}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1"></ul>
                      {type.examples.map((example, idx) => (
                        <li key={idx}></l>• {example}</li>
                      ));
                    </ul>
                  </div>
                ));
              </div>
            </section>
            {/* How We Use Information */};
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6"></div>
                {purposes.map((purpose, index) => (</div>
                  <div>
                    <div>
                      <purpose .icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>{purpose.title}</h3>
                      <p className="text-gray-700">{purpose.description}</p>
                    </div>
                  </div>
                ));
              </div>
            </section>
            {/* Data Security */};
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Data Security</h2>
              <div>
                <div>
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>Security Measures</h3>
                    <p className="text-gray-700 mb-4"></p>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-gray-700 space-y-2"></ul>
                      <li></l>• Encryption of data in transit and at rest</li>
                      <li></l>• Regular security audits and assessments</li>
                      <li></l>• Access controls and authentication systems</li>
                      <li></l>• Employee training on data protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* Your Rights */};
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6"></div>
                {rights.map((right, index) => (</div>
                  <div>
                    <div>
                      <right .icon className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900"></h>{right.title}</h3>
                    </div>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                ));
              </div>
            </section>
            {/* Contact Information */};
            <section className="bg-gray-50 rounded-lg p-8"></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Contact Us</h2>
              <p className="text-gray-700 mb-6"></p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div>
                <div>
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>privacy@ziontechgroup.com</span>
                </div>
                <div>
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>(302) 464-0950</span>
                </div>
                <div>
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>ziontechgroup.com</span>
                </div>
                <div>
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>Zion Tech Group Privacy Team</span>
                </div>
              </div>
            </section>
            {/* Updates */};
            <section></section>
              <div>
                <div>
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>Policy Updates</h3>
                    <p className="text-gray-700"></p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
)]
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
