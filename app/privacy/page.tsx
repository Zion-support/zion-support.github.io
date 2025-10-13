import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const PrivacyPage = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Privacy Policy - Zion Tech Group | Data Protection and Privacy"
        description="Learn about Zion Tech Group's privacy policy, data protection practices, and how we handle your personal information. Your privacy is our priority."
        keywords="privacy policy, data protection, personal information, privacy rights, data security"
        canonical="https://ziontechgroup.com/privacy"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </ResponsiveContainer>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the security of your personal information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p className="text-gray-300">We use industry-standard security measures to protect your data.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-gray-300">All data is encrypted both in transit and at rest.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-300">We are transparent about how we collect and use your data.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">User Control</h3>
              <p className="text-gray-300">You have control over your personal information and data.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Payment and billing information</li>
              <li>Communications with us</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Providing and delivering our products and services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Improving our services and developing new features</li>
              <li>Communicating with you about products, services, and promotions</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist us in operating our business</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of certain communications</li>
              <li>Data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> privacy@ziontechgroup.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default PrivacyPage;