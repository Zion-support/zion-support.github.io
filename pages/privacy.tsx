<<<<<<< HEAD
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';
=======
import React from 'react';
import Head from 'next/head';';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, User, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> main

export default function PrivacyPage() {
<<<<<<< HEAD
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Privacy Policy - Zion Tech Group</title>;
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />";
      </Head>;

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <motion.div
=======
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <Shield className="w-16 h-16 mx-auto mb-6" />";
            <h1 className="text-5xl font-bold mb-6">");
              Privacy Policy;
            </h1>;
            <p className="text-xl text-blue-100">";
              Your privacy is important to us. Learn how we collect, use, and protect your information.,
            </p>;
            <p className="text-sm text-blue-200 mt-4">";
              Last updated: January 15, 2024,
            </p>;
          </div>;
        </div>;
      </section>;
=======
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group protects your privacy and handles your personal information."
      keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>
>>>>>>> main

<<<<<<< HEAD
      {/* Content */}
<<<<<<< HEAD
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto">";
            <div className="bg-white rounded-lg shadow-lg p-8">";

              <motion.div;
>>>>>>> main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >,
                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Information We Collect;
                </h2>;
                
                <div className="space-y-6 mb-8">";
                  <div className="flex items-start gap-4">";
                    <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        Personal Information;
                      </h3>;
                      <p className="text-gray-600">";
                        We collect information you provide directly to us, such as when you create an account, 
                        contact us, or use our services. This may include your name, email address, phone number, 
<<<<<<< HEAD
                        company information, and any other information you choose to provide.
                      </p>
                    </div>
                  </div>
=======
                        company information, and any other information you choose to provide.,
                      </p>;
                    </div>;
                  </div>;
>>>>>>> main


                  <div className="flex items-start gap-4">";
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        Usage Information;
                      </h3>;
                      <p className="text-gray-600">";
                        We automatically collect certain information about your use of our services, including;
                        your IP address, browser type, device information, pages visited, time spent on pages, 
                        and other usage statistics.;
                      </p>;
                    </div>;
                  </div>;

                  <div className="flex items-start gap-4">";
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        Cookies and Tracking;
                      </h3>;
                      <p className="text-gray-600">";
                        We use cookies and similar tracking technologies to enhance your experience, analyze;
                        usage patterns, and provide personalized content. You can control cookie settings;
                        through your browser preferences.;
                      </p>;
                    </div>;
                  </div>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  How We Use Your Information;
                </h2>;
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">";
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Service Delivery;
                    </h3>;
                    <p className="text-gray-600">";
                      To provide, maintain, and improve our services, process transactions, and communicate with you.,
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Personalization;
                    </h3>;
                    <p className="text-gray-600">";
                      To customize your experience, provide relevant content, and improve our services.,
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Communication;
                    </h3>;
                    <p className="text-gray-600">";
                      To send you updates, newsletters, and respond to your inquiries and support requests.,
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Analytics;
                    </h3>;
                    <p className="text-gray-600">";
                      To analyze usage patterns, improve our services, and develop new features.,
                    </p>;
                  </div>;
                </div>;


                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Information Sharing;
                </h2>;
                
                <div className="space-y-4 mb-8">";

                  <p className="text-gray-600">";
                    We do not sell, trade, or otherwise transfer your personal information to third parties without;
                    your consent, except in the following circumstances:,
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>With your explicit consent</li>;
                    <li>To comply with legal obligations or court orders</li>;
                    <li>To protect our rights, property, or safety, or that of our users</li>,
                    <li>With trusted service providers who assist us in operating our services</li>;
                    <li>In connection with a business transfer or acquisition</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Data Security;
                </h2>;
                
                <div className="flex items-start gap-4 mb-6">";
                  <Lock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                  <div>;
                    <p className="text-gray-600">";
                      We implement appropriate technical and organizational security measures to protect your;
                      personal information against unauthorized access, alteration, disclosure, or destruction. 
                      This includes encryption, secure servers, and regular security audits.,
                    </p>;
                  </div>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Your Rights;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    You have the right to:;
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Access and receive a copy of your personal information</li>;
                    <li>Correct inaccurate or incomplete information</li>;
                    <li>Delete your personal information</li>;
                    <li>Object to or restrict processing of your information</li>;
                    <li>Data portability</li>;
                    <li>Withdraw consent at any time</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Contact Us;
                </h2>;
                
                <div className="bg-gray-50 rounded-lg p-6">";
                  <p className="text-gray-600 mb-4">";
                    If you have any questions about this Privacy Policy or our data practices, please contact us:,
                  </p>;
                  
                  <div className="space-y-2">";
                    <div className="flex items-center gap-2">";
                      <Mail className="w-5 h-5 text-blue-600" />";
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>";
                    </div>;
                    <div className="flex items-center gap-2">";
                      <Phone className="w-5 h-5 text-blue-600" />";
                      <span className="text-gray-700">+1 (555) 123-4567</span>";
                    </div>;
                  </div>;
                </div>;

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">";
                  <p className="text-yellow-800">";
                    <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify;
                    you of any material changes by posting the new Privacy Policy on this page and updating;
                    the "Last updated" date.";
                  </p>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
=======
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information Sharing
              </h2>
              
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-800">
                  <strong>Email:</strong> kleber@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </motion.div>
=======
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="text-yellow-800">
                    <strong>Last updated:</strong> January 1, 2024
                  </p>
                </div>

<<<<<<< HEAD
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Information Sharing
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without 
                    your consent, except in the following circumstances:
=======
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Information about how you use our services</li>
                  <li>Device information and IP address</li>
                  <li>Log data and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and ensure the security of our platform.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-6">
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
>>>>>>> main
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify 
                    you of any material changes by posting the new Privacy Policy on this page and updating 
                    the "Last updated" date.
                  </p>
                </div>
              </motion.div>
            </div>
>>>>>>> main
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
  );
}
