import React from 'react';
import Layout from '../src/components/Layout';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Shield, Scale, Users, Clock } from 'lucide-react';

const TermsPage = () => {
  return (
    <Layout 
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand the rules and guidelines for using our website and services."
      keywords="terms of service, terms and conditions, user agreement, legal terms"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Please read these terms carefully before using our services
              </p>
              <p className="text-lg text-blue-200">
                Last updated: January 15, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 mb-6">
                    Welcome to Zion Tech Group. By accessing and using our services, you agree to be bound by these Terms of Service.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Acceptance of Terms
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, 
                    applications, and related services (collectively, the "Services"). By accessing or using our Services, 
                    you agree to be bound by these Terms.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Description of Services
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Zion Tech Group provides technology consulting, software development, AI solutions, and related services. 
                    We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    User Responsibilities
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Security</h3>
                        <p className="text-gray-600">You are responsible for maintaining the confidentiality of your account credentials.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
                        <p className="text-gray-600">You must comply with all applicable laws and regulations when using our Services.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Uses</h3>
                        <p className="text-gray-600">You may not use our Services for any unlawful purpose or in any way that could damage our reputation.</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Intellectual Property
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    All content, trademarks, and intellectual property on our Services are owned by Zion Tech Group or our licensors. 
                    You may not use, reproduce, or distribute any content without our written permission.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Privacy Policy
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our Services, 
                    to understand our practices.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Limitation of Liability
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages resulting from your use of our Services.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Termination
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We may terminate or suspend your access to our Services immediately, without prior notice, for any reason, 
                    including breach of these Terms.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Changes to Terms
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                    by posting the new Terms on this page.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 302 464 0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> These Terms of Service are effective as of the date of last update and 
                      remain in effect until modified or terminated in accordance with the provisions herein.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsPage;