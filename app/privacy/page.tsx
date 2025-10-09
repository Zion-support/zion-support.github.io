'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Privacy Policy - Data Protection & Privacy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices and your rights."
        keywords={['privacy policy', 'data protection', 'privacy rights', 'data handling', 'GDPR compliance']}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Privacy Policy</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="cyber-card p-8 space-y-8">
                <div>
                  <p className="text-gray-400 text-sm mb-8">
                    Last updated: January 15, 2025
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="text-gray-300 mb-4">
                    Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://ziontechgroup.com or use our services.
                  </p>
                  <p className="text-gray-300">
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-bold text-white mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Register for an account or use our services</li>
                    <li>Contact us through our website or email</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Participate in surveys or provide feedback</li>
                    <li>Apply for a job or career opportunity</li>
                  </ul>
                  <p className="text-gray-300 mb-4">
                    This information may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Company information and job title</li>
                    <li>Payment and billing information</li>
                    <li>Resume and employment history (for job applications)</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-300 mb-4">
                    We may automatically collect certain information about your device and usage patterns, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Device identifiers and characteristics</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Providing, operating, and maintaining our services</li>
                    <li>Improving, personalizing, and expanding our services</li>
                    <li>Understanding and analyzing how you use our website</li>
                    <li>Developing new products, services, features, and functionality</li>
                    <li>Communicating with you for customer service and support</li>
                    <li>Processing transactions and sending related information</li>
                    <li>Sending you marketing and promotional communications</li>
                    <li>Finding and preventing fraud and security issues</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-gray-300 mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <h3 className="text-xl font-bold text-white mb-3">4.1 Service Providers</h3>
                  <p className="text-gray-300 mb-4">
                    We may share your information with third-party service providers who perform services on our behalf, such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Cloud hosting and data storage providers</li>
                    <li>Email marketing and communication services</li>
                    <li>Analytics and performance monitoring tools</li>
                    <li>Payment processing services</li>
                    <li>Customer support platforms</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mb-3">4.2 Legal Requirements</h3>
                  <p className="text-gray-300 mb-4">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3">4.3 Business Transfers</h3>
                  <p className="text-gray-300 mb-4">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                  <p className="text-gray-300 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection practices</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-300 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="text-gray-300">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p className="text-gray-300">
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-300 mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-300 mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-300 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-2"><strong>Zion Tech Group</strong></p>
                    <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                    <p className="text-gray-300 mb-2">Middletown, DE 19709</p>
                    <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
                    <p className="text-gray-300">Phone: (302) 464-0950</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;