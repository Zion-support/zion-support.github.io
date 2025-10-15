import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Database, Mail, Phone, Lock, User, Settings, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Business information for project requirements",
        "Website usage data and analytics",
        "Communication records and correspondence",
        "Payment and billing information",
        "Technical data from our services"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our services",
        "Communicate with you about projects and updates",
        "Process payments and manage accounts",
        "Send marketing communications (with consent)",
        "Analyze website usage and performance",
        "Comply with legal obligations"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted in transit and at rest",
        "Access to personal data is restricted to authorized personnel",
        "Regular security audits and updates",
        "Secure data centers with physical security",
        "Incident response procedures in place"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access your personal data we hold",
        "Request correction of inaccurate data",
        "Request deletion of your data",
        "Object to processing of your data",
        "Data portability rights",
        "Withdraw consent at any time"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and protection." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights, data security" />
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
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Privacy</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other 
                  relevant privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Data Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our business
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Consent:</strong> When you have given explicit consent for specific sharing
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                    unless a longer retention period is required or permitted by law.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Retention Periods</h3>
                      <ul className="space-y-2">
                        <li>• Client data: 7 years after project completion</li>
                        <li>• Marketing data: Until consent is withdrawn</li>
                        <li>• Website analytics: 26 months</li>
                        <li>• Legal compliance: As required by law</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Data Deletion</h3>
                      <ul className="space-y-2">
                        <li>• Automatic deletion after retention period</li>
                        <li>• Manual deletion upon request</li>
                        <li>• Secure deletion methods used</li>
                        <li>• Confirmation provided to users</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
              <p className="text-xl text-white/90 mb-8">
                If you have any questions about this Privacy Policy or how we handle your personal data, please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@ziontechgroup.com" 
                  className="flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  privacy@ziontechgroup.com
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;