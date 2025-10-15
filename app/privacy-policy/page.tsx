import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Business information (company name, project details)",
        "Usage data and analytics from our website",
        "Communication records and support interactions"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To communicate with you about projects and updates",
        "To process payments and manage accounts",
        "To comply with legal obligations"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted in transit and at rest",
        "We regularly audit our security practices",
        "Access to your data is limited to authorized personnel"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Right to access your personal data",
        "Right to correct inaccurate information",
        "Right to delete your data (with limitations)",
        "Right to data portability"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices and your rights." />
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
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Zion Tech Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal data. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using our website or services, you consent to the data practices described in this policy.
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 mt-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h2>
                <p className="text-white/90 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:privacy@ziontechgroup.com" 
                    className="flex items-center justify-center bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    privacy@ziontechgroup.com
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +1 302 464 0950
                  </a>
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
