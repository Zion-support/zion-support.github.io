import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Mail, Phone, Calendar } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        "Personal information you provide (name, email, phone number)",
        "Business information (company name, job title, industry)",
        "Usage data and analytics from our website and services",
        "Communication records and support interactions"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        "Provide and improve our services",
        "Communicate with you about projects and updates",
        "Process payments and manage accounts",
        "Send marketing communications (with your consent)",
        "Comply with legal obligations"
      ]
    },
    {
      title: "Information Sharing",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We do not sell your personal information to third parties",
        "We may share information with trusted service providers",
        "We may disclose information if required by law",
        "We may share information in case of business transfers"
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        "We use industry-standard encryption and security measures",
        "Access to personal information is restricted to authorized personnel",
        "We regularly review and update our security practices",
        "We have incident response procedures in place"
      ]
    }
  ];

  const rights = [
    "Access your personal information",
    "Correct inaccurate information",
    "Delete your personal information",
    "Object to processing of your information",
    "Data portability",
    "Withdraw consent at any time"
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to protecting your privacy and personal data" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center text-gray-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using our website or services, you consent to the data practices described in this policy. 
                  If you do not agree with our practices, please do not use our services.
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="text-cyan-400 mr-4">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-3 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Your Rights */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {rights.map((right, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>{right}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mt-6">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Cookies */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies are small data files stored on your device that help us:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Remember your preferences and settings</li>
                  <li>• Analyze website traffic and usage patterns</li>
                  <li>• Provide personalized content and advertisements</li>
                  <li>• Improve our website functionality</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies 
                  may affect the functionality of our website.
                </p>
              </div>

              {/* Data Retention */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                  When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              {/* International Transfers */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center text-white">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                </div>
                <div className="mt-4 text-white/90">
                  <p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;