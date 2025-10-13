import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, Database } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Create an account or profile</li>
                    <li>Use our services or products</li>
                    <li>Contact us for support</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                  <p className="mb-4">
                    We automatically collect certain information about your use of our services, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device information and identifiers</li>
                    <li>Log data and analytics</li>
                    <li>Cookies and similar technologies</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Develop new products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Information Sharing</h3>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist us in operating our services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
                  <p className="mb-4">
                    We implement appropriate security measures to protect your personal information against:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Unauthorized access, alteration, or disclosure</li>
                    <li>Data loss or destruction</li>
                    <li>Malicious attacks and breaches</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
                  <p className="mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your personal information</li>
                    <li>Object to processing of your data</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking</h3>
                  <p className="mb-4">
                    We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
                  <p className="mb-4">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                  <p className="mb-4">
                    If you have any questions about this privacy policy, please contact us at:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-cyan-400">Email: privacy@ziontechgroup.com</p>
                    <p className="text-cyan-400">Phone: +1 (555) 123-4567</p>
                    <p className="text-cyan-400">Address: 123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're here to help. Contact us if you have any questions about how we handle your data.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}