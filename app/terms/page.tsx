import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read the terms and conditions for using Zion Tech Group's website and services. Understand your rights and obligations." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using our website and services.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
                <p className="text-gray-600 mb-4">
                  These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at https://ziontechgroup.com (the "Service") operated by Zion Tech Group ("us," "we," or "our").
                </p>
                <p className="text-gray-600 mb-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Service.
                </p>
              </div>

              {/* Description of Service */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Description of Service</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group provides advanced AI and IT solutions, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>5G technology implementation and optimization</li>
                  <li>Cybersecurity services and solutions</li>
                  <li>Cloud services and infrastructure</li>
                  <li>Data analytics and business intelligence</li>
                  <li>DevOps and automation services</li>
                  <li>Consulting and professional services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  When using our Service, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt the Service</li>
                  <li>Not use the Service to transmit harmful or malicious code</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Uses</h2>
                <p className="text-gray-600 mb-4">
                  You may not use our Service:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
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

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-600">
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>

              {/* Service Availability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain the availability of our Service, but we do not guarantee that the Service will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Service.
                </p>
                <p className="text-gray-600">
                  We reserve the right to change, update, or discontinue the Service at any time without notice.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
                <p className="text-gray-600">
                  Our total liability to you for all damages shall not exceed the amount you paid us for the Service in the 12 months preceding the claim.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Excludes all representations and warranties relating to this Service and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this Service</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
                <p className="text-gray-600">
                  You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-600">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
                  <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;