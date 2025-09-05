import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
<p className="text-gray-600 mb-6">
                <strong>Last updated: </strong> January 15, 2024
              </p>
              
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account,
                  contact us, or use our services. This may include: </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Company information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                </ul>

                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Usage Information
                      </h3>
                      <p className="text-gray-600">
                        We automatically collect certain information about your use of our services, including 
                        your IP address, browser type, device information, pages visited, time spent on pages,
                        and other usage statistics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Cookies and Tracking
                      </h3>
                      <p className="text-gray-600">
                        We use cookies and similar tracking technologies to enhance your experience, analyze 
                        usage patterns, and provide personalized content. You can control cookie settings 
                        through your browser preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Your Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Service Delivery
                    </h3>
                    <p className="text-gray-600">
                      To provide, maintain, and improve our services, process transactions, and communicate with you.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personalization
                    </h3>
                    <p className="text-gray-600">
                      To customize your experience, provide relevant content, and improve our services.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Communication
                    </h3>
                    <p className="text-gray-600">
                      To send you updates, newsletters, and respond to your inquiries and support requests.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Analytics
                    </h3>
                    <p className="text-gray-600">
                      To analyze usage patterns, improve our services, and develop new features.
                    </p>
                  </div>
                </div>

<h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to: </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at: </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without 
                    your consent, except in the following circumstances:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                    <li>With trusted service providers who assist us in operating our services</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Data Security
                </h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">
                      We implement appropriate technical and organizational security measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or destruction. 
                      This includes encryption, secure servers, and regular security audits.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Rights
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    You have the right to:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your personal information</li>
                    <li>Object to or restrict processing of your information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify 
                    you of any material changes by posting the new Privacy Policy on this page and updating 
                    the "Last updated" date.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}