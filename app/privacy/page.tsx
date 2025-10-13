import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Privacy Policy - Data Protection & Privacy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data collection, usage, and protection practices."
        keywords="privacy policy, data protection, privacy, personal data, GDPR, data security, privacy rights"
        canonical="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment and billing information</li>
                    <li>Communications with us (support tickets, feedback)</li>
                    <li>Survey responses and feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Usage Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We automatically collect certain information about your use of our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and preferences</li>
                    <li>Log data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Your Information
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Provide and deliver our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                    <li>Monitor and analyze usage and trends</li>
                    <li>Detect, investigate, and prevent security incidents</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                Information Sharing
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>With your explicit consent</li>
                    <li>To service providers who assist us in operating our services</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy 
                  on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            If you have any questions about our privacy practices or want to exercise your rights, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/cookies"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;