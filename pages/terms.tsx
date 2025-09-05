<<<<<<< HEAD
import React from 'react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>
    </Layout>
=======
import _React from 'react';,
import Head from 'next/head';';
import { motion } from 'framer-motion';,
import { FileText, Scale, AlertTriangle, Shield, Users, Mail, Phone } from 'lucide-react';,

export default function TermsPage() {}
  return (;,
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Terms of Service - Zion Tech Group</title>;
        <meta name="description" content="Read Zion Tech Group's terms of service and user agreement." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">",
        <div className="container mx-auto px-4">";,
          <div className="max-w-4xl mx-auto text-center">";
            <FileText className="w-16 h-16 mx-auto mb-6" />";
            <h1 className="text-5xl font-bold mb-6">");
              Terms of Service;
            </h1>;
            <p className="text-xl text-blue-100">";
              Please read these terms carefully before using our services.;
            </p>;
            <p className="text-sm text-blue-200 mt-4">";
              Last updated: January 15, 2024,
            </p>;,
          </div>;
        </div>;
      </section>;

      {/* Content */}
      <section className="py-16">",
        <div className="container mx-auto px-4">";,
          <div className="max-w-4xl mx-auto">";
            <div className="bg-white rounded-lg shadow-lg p-8">";

              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >,
                <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400">";,
                  <p className="text-blue-800">";
                    <strong>Important:</strong> By accessing or using our services, you agree to be bound by these Terms of Service.,

                  </p>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Acceptance of Terms;
                </h2>;
                
                <p className="text-gray-600 mb-6">";
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, ',
                  applications, and any related services (collectively, the "Services"). By accessing or using our Services, ",
                  you agree to be bound by these Terms.;,
                </p>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Description of Services;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    Zion Tech Group provides technology consulting, AI solutions, cloud services, and related technology;,
                    services. Our Services include but are not limited to:;,
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Artificial Intelligence and Machine Learning solutions</li>;
                    <li>Cloud computing and infrastructure services</li>;
                    <li>Cybersecurity consulting and implementation</li>;
                    <li>Custom software development</li>;
                    <li>Technology consulting and advisory services</li>;
                    <li>Training and support services</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  User Responsibilities;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    As a user of our Services, you agree to:,
                  </p>;,
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Provide accurate and complete information when required</li>;
                    <li>Use the Services only for lawful purposes</li>;
                    <li>Not attempt to gain unauthorized access to our systems</li>;
                    <li>Not use the Services to transmit harmful or malicious code</li>;
                    <li>Respect intellectual property rights</li>;
                    <li>Comply with all applicable laws and regulations</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Intellectual Property;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    All content, trademarks, and intellectual property rights in our Services are owned by Zion Tech Group;,
                    or our licensors. You may not use, reproduce, or distribute any content without our written permission.,
                  </p>;,
                  
                  <p className="text-gray-600">";
                    Any content you provide to us remains your property, but you grant us a license to use it in connection;,
                    with providing our Services.;,
                  </p>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Payment Terms;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    Payment terms are as specified in your service agreement or as displayed on our website. 
                    All fees are non-refundable unless otherwise specified in writing.;
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Fees are due according to the billing schedule specified in your agreement</li>;
                    <li>Late payments may result in service suspension</li>;
                    <li>We reserve the right to change pricing with 30 days' notice</li>';
                    <li>All prices are exclusive of applicable taxes</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Limitation of Liability;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of;,
                    profits, data, or business opportunities.,
                  </p>;,
                  
                  <p className="text-gray-600">";
                    Our total liability for any claims arising from these Terms or our Services shall not exceed;
                    the amount paid by you for the Services in the 12 months preceding the claim.;
                  </p>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Service Availability;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    While we strive to provide reliable Services, we cannot guarantee uninterrupted access. 
                    We reserve the right to modify, suspend, or discontinue any part of our Services at any time.,
                  </p>;,
                  
                  <p className="text-gray-600">";
                    We are not responsible for any downtime, data loss, or other issues that may occur due to;,
                    maintenance, updates, or technical problems.,
                  </p>;,
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Termination;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    Either party may terminate these Terms at any time with written notice. Upon termination:;
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Your right to use the Services will cease immediately</li>;
                    <li>We may delete your data after a reasonable period</li>;
                    <li>All outstanding fees become immediately due</li>;
                    <li>Provisions that by their nature should survive termination will remain in effect</li>;
                  </ul>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Governing Law;
                </h2>;
                
                <p className="text-gray-600 mb-8">";
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                  without regard to its conflict of law principles. Any disputes arising from these Terms shall be;
                  resolved in the courts of California.;
                </p>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Changes to Terms;
                </h2>;
                
                <p className="text-gray-600 mb-8">";
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes;
                  by posting the updated Terms on our website. Your continued use of our Services after such changes;
                  constitutes acceptance of the new Terms.;
                </p>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Contact Information;
                </h2>;
                
                <div className="bg-gray-50 rounded-lg p-6">";
                  <p className="text-gray-600 mb-4">";
                    If you have any questions about these Terms of Service, please contact us:,
                  </p>;,
                  
                  <div className="space-y-2">";
                    <div className="flex items-center gap-2">";
                      <Mail className="w-5 h-5 text-blue-600" />";
                      <span className="text-gray-700">legal@ziontechgroup.com</span>";
                    </div>;
                    <div className="flex items-center gap-2">";
                      <Phone className="w-5 h-5 text-blue-600" />";
                      <span className="text-gray-700">+1 (555) 123-4567</span>";
                    </div>;
                  </div>;
                </div>;

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">";
                  <p className="text-yellow-800">";
                    <strong>Note:</strong> These Terms of Service are effective as of the date listed above and will;
                    remain in effect until modified or terminated in accordance with the provisions herein.;
                  </p>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
  );
}