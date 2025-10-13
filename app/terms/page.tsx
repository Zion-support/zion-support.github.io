import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, AlertTriangle, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Terms of Service - Legal Terms & Conditions | Zion Tech Group"
        description="Read our terms of service and legal conditions for using Zion Tech Group services. Understand your rights and obligations when using our platform."
        keywords="terms of service, terms and conditions, legal terms, user agreement, service terms"
        canonical="https://ziontechgroup.com/terms"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These terms govern your use of our services. Please read them carefully.
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
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Acceptance of Terms
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                Use License
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Permission is granted to temporarily download one copy of our services for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in our services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Availability</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. 
                  We may temporarily suspend or restrict access to our services for maintenance, updates, or other reasons.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">User Accounts</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Prohibited Uses</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  You may not use our services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Payment for our services is due in advance unless otherwise agreed in writing. All fees are non-refundable unless otherwise stated.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to change our pricing at any time. Price changes will be communicated to you in advance and will take effect at the beginning of your next billing cycle.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If payment is not received by the due date, we may suspend or terminate your access to our services.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Disclaimer
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The information on our services is provided on an "as is" basis. To the fullest extent permitted by law, we exclude:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>All representations and warranties relating to our services and the use of our services</li>
                  <li>All liability for damages arising out of or in connection with your use of our services</li>
                  <li>All liability for any indirect, special, or consequential loss or damage</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Nothing in this disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                  or due to business interruption) arising out of the use or inability to use our services, even if we or our authorized representative has been 
                  notified orally or in writing of the possibility of such damage.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, 
                  without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Delaware.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page 
                  and updating the "Last updated" date.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Your continued use of our services after any such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> legal@ziontechgroup.com</p>
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            If you have any questions about these terms or need clarification on any points, 
            please don't hesitate to contact us.
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
              to="/privacy"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;