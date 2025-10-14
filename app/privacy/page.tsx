import React from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, Database, User, Mail, Phone, MapPin } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Privacy policy for Zion Tech Group services. Learn how we protect your data and privacy." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy, Zion Tech Group" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Privacy policy for Zion Tech Group services. Learn how we protect your data and privacy." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                Information We Collect
              </h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Your Information
              </h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our AI and IT services</li>
                    <li>Process transactions and manage accounts</li>
                    <li>Deliver customer support and technical assistance</li>
                    <li>Customize and improve our services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Communication</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Send service-related notifications</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Share important updates about our services</li>
                    <li>Send marketing communications (with consent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics and Improvement</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analyze usage patterns and performance</li>
                    <li>Improve our website and services</li>
                    <li>Develop new features and capabilities</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Data Protection and Security
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Secure data centers with physical security</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-cyan-400" />
                Your Rights and Choices
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We use cookies and similar technologies to enhance your experience and analyze usage patterns. 
                  You can control cookie preferences through your browser settings.
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Third-Party Services</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We may use third-party services for analytics, payment processing, and other functions. 
                  These services have their own privacy policies and data practices.
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Services We Use</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Stripe for payment processing</li>
                    <li>SendGrid for email communications</li>
                    <li>Cloudflare for content delivery and security</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required by law.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information: Until account closure + 7 years</li>
                  <li>Marketing data: Until consent is withdrawn</li>
                  <li>Analytics data: Up to 26 months</li>
                  <li>Legal compliance data: As required by applicable laws</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">International Transfers</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Us
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
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