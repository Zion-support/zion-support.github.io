'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Database, Shield, Users, Eye } from 'lucide-react';

const PrivacyPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const lastUpdated = 'December 2024';

  const sections = const sections = const sections = [
=======
  const sections = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.',
        'We automatically collect certain information about your device and usage of our services, including your IP address, browser type, and pages visited.',
        'We may collect information from third-party sources, such as social media platforms, when you choose to connect your accounts.'
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        'To provide, maintain, and improve our services and customer support.',
        'To process transactions and send related information, including confirmations and invoices.',
        'To send technical notices, updates, security alerts, and support messages.',
        'To respond to your comments, questions, and requests and provide customer service.'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
        'We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.',
        'We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others\' rights, property, or safety.'
      ]
    },
    {
      icon: Eye,
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption to protect sensitive information transmitted online.',
        'We regularly review our data collection, storage, and processing practices to ensure we only collect, store, and process the minimum amount of data necessary.'
      ]
<<<<<<< HEAD
    };
<<<<<<< HEAD;
  ];
  const purposes = const purposes = const purposes = [
    {;
    };
  ];
  const rights = const rights = const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
    },
    {
      title: 'Portability',;
      description: 'Receive your data in a structured format',;
      icon: Database];
=======
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
  return ()
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed" /></p>
                By using our website or services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with the terms of this Privacy Policy, please do not use our services.
=======
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zion Tech Group - Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy." />
        <meta name="keywords" content="privacy policy, data protection, personal information, data security, privacy rights" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* Policy Sections */}
            <div className="space-y-8" /></div>
              {sections.map((section, index) => ()
                    {section.content.map((item, itemIndex) => ()
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Cookies Section */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. 
                  Cookies are small data files stored on your device that help us remember your preferences and improve our services.
                </p>
                <p></p>
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect 
                  the functionality of our website and services.
=======
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Your Rights
                </h3>
                <p className="text-green-800 mb-4">
                  You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
                </p>
                <p className="text-green-800">
                  To exercise these rights, please contact us at privacy@ziontechgroup.com.
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </p>
              </div>

<<<<<<< HEAD
            {/* Third-Party Services */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Services</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We may use third-party services for analytics, marketing, and other business purposes. These services 
                  may collect information about your use of our website and services.
                </p>
                <p></p>
                  We carefully select our third-party partners and ensure they comply with applicable privacy laws and 
                  maintain appropriate security measures.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p></p>
                  When we no longer need your personal information, we will securely delete or anonymize it in accordance 
                  with our data retention policies.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information from 
                  a child under 13, we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-slate-800/50 rounded-lg p-8 mt-8" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-300" /></div>
                <p></p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p></p>
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy 
                  Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8 mt-12" /></div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6" /></p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" /></div>
                <div className="flex items-center space-x-3" /></div>
                  <Mail className="w-5 h-5 text-cyan-400" / /></Mail>
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3" /></div>
                  <Phone className="w-5 h-5 text-cyan-400" / /></Phone>
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3" /></div>
                  <Calendar className="w-5 h-5 text-cyan-400 mt-1" / /></Calendar>
                  <div className="text-gray-300" /></div>
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown, DE 19709</div>
                  </div>
                </div>
=======
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Contact Information
                </h3>
                <p className="text-blue-800">
                  If you have any questions about this Privacy Policy, please contact us at privacy@ziontechgroup.com.
                </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're committed to protecting your privacy. Contact us if you have any questions or concerns.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Read our privacy policy to understand how we protect your data." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-8">
              Read our privacy policy to understand how we protect your data
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    </>
  );
};

<<<<<<< HEAD
export default PrivacyPage;
=======
export default PrivacyPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
