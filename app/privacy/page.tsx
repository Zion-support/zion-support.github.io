'use client';
import React from 'react';
<<<<<<< HEAD
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {,
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect'
      icon: Database;
      content: [
        {,
          subtitle: 'Personal Information',
          items: [,
            'Name, email address, phone number, and company information when you contact us',
            'Billing and payment information for service purchases',
            'Account credentials and preferences for our services',
            'Communication records including emails and support tickets'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [,
            'IP address, browser type, and device information',
            'Website usage data and analytics',
            'Cookies and similar tracking technologies',
            'Server logs and system performance data'
          ]
        },
        {
          subtitle: 'Business Information',
          items: [,
            'Project requirements and specifications',
            'Business goals and objectives',
            'Technical infrastructure details',
            'Performance metrics and outcomes'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information'
      icon: Eye;
      content: [
        {
          subtitle: 'Service Delivery',
          items: [,
            'Provide and maintain our AI and IT services',
            'Process transactions and manage accounts',
            'Deliver customer support and technical assistance',
            'Customize solutions to meet your specific needs'
          ]
        },
        {
          subtitle: 'Communication',
          items: [,
            'Send service updates and important notifications',
            'Respond to inquiries and support requests',
            'Share relevant industry insights and updates',
            'Conduct surveys and gather feedback'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [,
            'Improve our services and develop new solutions',
            'Analyze usage patterns and optimize performance',
            'Ensure security and prevent fraud',
            'Comply with legal and regulatory requirements'
          ]
        }
      ]
    },
    {
      title: 'Information Sharing'
      icon: UserCheck;
      content: [
        {,
          subtitle: 'We Do Not Sell Your Data',
          items: [,
            'We never sell, rent, or trade your personal information to third parties',
            'We do not share your data for marketing purposes without consent',
            'Your information is only shared as described in this policy'
          ]
        },
        {
          subtitle: 'Limited Sharing Scenarios',
          items: [,
            'With trusted service providers who assist in our operations',
            'When required by law or to protect our rights',
            'In case of business transfers or mergers',
            'With your explicit consent for specific purposes'
          ]
        }
      ]
    },
    {
      title: 'Data Security'
      icon: Lock;
      content: [
        {
          subtitle: 'Security Measures',
          items: [,
            'End-to-end encryption for all data transmission',
            'Secure data centers with physical and digital security',
            'Regular security audits and penetration testing',
            'Employee training on data protection best practices'
          ]
        },
        {
          subtitle: 'Access Controls',
          items: [,
            'Role-based access controls for all systems',
            'Multi-factor authentication for sensitive data',
            'Regular access reviews and permissions audits',
            'Secure development and deployment practices'
          ]
        }
      ]
    },
    {
      title: 'Your Rights'
      icon: Shield;
      content: [
        {
          subtitle: 'Access and Control',
          items: [,
            'Request access to your personal information',
            'Correct inaccurate or incomplete data',
            'Delete your personal information (right to be forgotten)',
            'Object to processing of your personal data'
          ]
        },
        {
          subtitle: 'Data Portability',
          items: [,
            'Receive a copy of your data in a structured format',
            'Transfer your data to another service provider',
            'Request data processing restrictions',
            'Withdraw consent for data processing'
          ]
        }
      ]
    },
    {
      title: 'Cookies and Tracking'
      icon: FileText;
      content: [
        {
          subtitle: 'Types of Cookies',
          items: [,
            'Essential cookies for website functionality',
            'Analytics cookies to understand usage patterns',
            'Preference cookies to remember your settings',
            'Marketing cookies for targeted content (with consent)'
          ]
        },
        {
          subtitle: 'Cookie Management',
          items: [,
            'You can control cookies through your browser settings',
            'Opt-out options for non-essential cookies',
            'Clear information about cookie purposes and duration',
            'Regular review and update of cookie policies'
          ]
        }
      ]
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Privacy Policy<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your privacy is important to us. This policy explains how we collect, use, and protect your information.<div className="text-sm text-gray-400">Last updated: {lastUpdated}</div>
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */})
        <section className="text-center mb-16">)
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">)
            Privacy Policy;)
          </h1>),
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">),
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: {lastUpdated}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Privacy Policy</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Introduction</h2><p className="text-gray-300 mb-4 leading-relaxed">Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p><p className="text-gray-300 leading-relaxed">By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not use our website or services.</p>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="space-y-12">{sections.map((section, index) => (</section>
            <div key={index} className="cyber-card p-8"></section>
              <div className="flex items-center mb-6"></div>
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2><div className="space-y-6">{section.content.map((subsection, subIndex) => (</section>
                  <div key={subIndex}></div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{subsection.subtitle}</h3><ul className="space-y-2">{subsection.items.map((item, itemIndex) => (</ul>
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">{item}</span>
                        </span>
=======
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';

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

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
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
    <div className="min-h-screen bg-white">
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
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <type.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{type.category}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
>>>>>>> origin/resolve-merge-conflicts
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
<<<<<<< HEAD
            </div>
          ))}
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us<p className="text-gray-300 mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us</h2><p className="text-gray-300 mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300">
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709<p>United States</p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p><p>United States</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Updates */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Policy Updates<p className="text-gray-300 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Policy Updates</h2><p className="text-gray-300 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
            </p>
            <ul className="space-y-2 text-gray-300"></u>
              <li className="flex items-start"></l>
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Posting the updated policy on our website</spa>
              </span>
              <li className="flex items-start"></l>
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Sending email notifications to registered users</spa>
              </span>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Updating the "Last Updated" date at the top of this policy<p className="text-gray-300 mt-4">Your continued use of our website or services after any changes to this Privacy Policy constitutes acceptance of the updated policy.</p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Policy Updates</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by: </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Posting the updated policy on our website;
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Sending email notifications to registered users;
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Updating the "Last Updated" date at the top of this policy;
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              Your continued use of our website or services after any changes to this Privacy Policy constitutes acceptance of the updated policy.
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Updating the "Last Updated" date at the top of this policy</span><p className="text-gray-300 mt-4">Your continued use of our website or services after any changes to this Privacy Policy constitutes acceptance of the updated policy.</p>
            </p>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Information We Collect
                  </h2>
                  <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Business information (company name, job title, industry)</li>
                    <li>Communication records (emails, phone calls, support tickets)</li>
                    <li>Usage data (website visits, service interactions)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                    2. How We Use Your Information
                  </h2>
                  <p>We use the information we collect to provide, maintain, and improve our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Provide and deliver our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-cyan-400 mr-3" />
                    3. Information Sharing
                  </h2>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                    4. Data Security
                  </h2>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    5. Your Rights
                  </h2>
                  <p>You have certain rights regarding your personal information, including:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                    6. International Transfers
                  </h2>
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                    7. Changes to This Policy
                  </h2>
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                    8. Contact Us
                  </h2>
                  <p>If you have any questions about this privacy policy, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      Email: privacy@ziontechgroup.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      Phone: (302) 464-0950
                    </p>
                    <p className="flex items-center">
                      <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                      Website: ziontechgroup.com
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Your Privacy Matters
                  </h3>
                  <p className="text-gray-300">
                    We are committed to protecting your privacy and ensuring the security of your personal information. 
                    If you have any concerns or questions about how we handle your data, please don't hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PrivacyPage;
=======
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {purposes.map((purpose, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <purpose.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                      <p className="text-gray-700">{purpose.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Measures</h3>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Regular security audits and assessments</li>
                      <li>• Access controls and authentication systems</li>
                      <li>• Employee training on data protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <right.icon className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>
                    </div>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
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
                  <span className="text-gray-700">(302) 464-0950</span>
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
            </section>

            {/* Updates */}
            <section>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Updates</h3>
                    <p className="text-gray-700">
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
  );
}
>>>>>>> origin/resolve-merge-conflicts
