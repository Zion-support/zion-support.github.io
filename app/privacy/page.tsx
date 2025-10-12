import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Name, email address, and contact information</li>
                <li>• Company information and job title</li>
                <li>• Payment and billing information</li>
                <li>• Communications with our support team</li>
                <li>• Usage data and analytics</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Develop new products and services</li>
                <li>• Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• With service providers who assist us in operating our business</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a merger, acquisition, or sale of assets</li>
                <li>• With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication</li>
                <li>• Employee training on data protection</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• Access to your personal information</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your personal information</li>
                <li>• Portability of your data</li>
                <li>• Objection to processing</li>
                <li>• Withdrawal of consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. International Transfers</h2>
              <p className="text-gray-300 mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Children's Privacy</h2>
              <p className="text-gray-300 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page 
                and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-6 mb-8">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> +1 (302) 464-0950
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}