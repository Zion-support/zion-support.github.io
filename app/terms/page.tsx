import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Terms of service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, Zion Tech Group" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms of service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing or using Zion Tech Group's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services. 
                  We reserve the right to update these terms at any time without prior notice.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Description of Services
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Zion Tech Group provides a comprehensive suite of AI and IT services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Artificial Intelligence solutions and automation</li>
                  <li>Cloud infrastructure and migration services</li>
                  <li>Cybersecurity solutions and monitoring</li>
                  <li>Web and mobile application development</li>
                  <li>Data analytics and business intelligence</li>
                  <li>5G network solutions and implementation</li>
                  <li>Micro SAAS applications and tools</li>
                  <li>Consulting and technical support services</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time without notice.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
                User Responsibilities
              </h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Account Security</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Ensure all account information is accurate and up-to-date</li>
                    <li>Use strong passwords and enable two-factor authentication</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Acceptable Use</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use our services only for lawful purposes</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not attempt to gain unauthorized access to our systems</li>
                    <li>Do not use our services to transmit malicious code or spam</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Prohibited Activities</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reverse engineering or attempting to extract source code</li>
                    <li>Distributing or reselling our services without permission</li>
                    <li>Using our services to compete with us</li>
                    <li>Engaging in any activity that could harm our reputation</li>
                    <li>Violating any third-party rights or agreements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Billing and Payment</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fees are due in advance for subscription services</li>
                    <li>One-time services are billed upon completion</li>
                    <li>Payment is due within 30 days of invoice date</li>
                    <li>We accept major credit cards and bank transfers</li>
                    <li>All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Refunds and Cancellations</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Subscription services can be cancelled at any time</li>
                    <li>Refunds are provided within 30 days of purchase</li>
                    <li>Custom development projects are non-refundable after 50% completion</li>
                    <li>Refunds are processed within 5-10 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Late Payments</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Late fees of 1.5% per month may apply</li>
                    <li>Services may be suspended for non-payment</li>
                    <li>Collection costs may be added to outstanding balances</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Our Intellectual Property</h3>
                  <p>
                    All content, software, and materials provided through our services are owned by 
                    Zion Tech Group or our licensors and are protected by copyright, trademark, and 
                    other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
                  <p>
                    You retain ownership of any content you provide to us. By using our services, 
                    you grant us a limited license to use your content solely for the purpose of 
                    providing our services to you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Work Product</h3>
                  <p>
                    Custom work developed specifically for you will be owned by you upon full payment. 
                    We retain rights to any pre-existing intellectual property incorporated into such work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Disclaimers and Limitations
              </h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
                  <p>
                    We strive to maintain high service availability but do not guarantee uninterrupted access. 
                    We may perform maintenance that temporarily affects service availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages, including but not 
                    limited to loss of profits, data, or business opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Warranty Disclaimer</h3>
                  <p>
                    Our services are provided "as is" without warranties of any kind, either express or implied. 
                    We disclaim all warranties, including but not limited to merchantability, fitness for a 
                    particular purpose, and non-infringement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Privacy and Data Protection</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is 
                  governed by our Privacy Policy, which is incorporated into these terms by reference.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your data 
                  and comply with applicable data protection laws, including GDPR and CCPA.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Termination by You</h3>
                  <p>
                    You may terminate your account at any time by contacting us or using the account 
                    termination features in our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Termination by Us</h3>
                  <p>
                    We may terminate or suspend your account immediately, without prior notice, for 
                    conduct that we believe violates these terms or is harmful to other users, us, 
                    or third parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Effect of Termination</h3>
                  <p>
                    Upon termination, your right to use our services ceases immediately. We may 
                    delete your account and data after a reasonable period, subject to legal 
                    requirements and our data retention policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Governing Law and Disputes</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  These terms are governed by the laws of the State of Delaware, United States, 
                  without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes arising from these terms or your use of our services will be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration 
                  Association.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of 
                  material changes by email or through our services. Your continued use of our 
                  services after such modifications constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about these terms, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">Email:</span>
                    <span>legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">Phone:</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">Address:</span>
                    <span>123 Tech Street, Innovation City, IC 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}