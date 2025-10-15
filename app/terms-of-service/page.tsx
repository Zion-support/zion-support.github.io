import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, AlertTriangle, Scale, Mail, Phone, Calendar } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "By accessing and using our services, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time",
        "Your continued use of our services constitutes acceptance of any changes"
      ]
    },
    {
      title: "Description of Services",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "AI-powered micro SAAS solutions and business tools",
        "Custom AI development and machine learning services",
        "Web development, mobile app development, and IT services",
        "Cloud migration, cybersecurity, and DevOps solutions",
        "Consulting and technical support services"
      ]
    },
    {
      title: "User Responsibilities",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Provide accurate and complete information when using our services",
        "Maintain the confidentiality of your account credentials",
        "Use our services in compliance with applicable laws and regulations",
        "Not attempt to reverse engineer, hack, or compromise our systems",
        "Respect intellectual property rights and not infringe on third-party rights"
      ]
    },
    {
      title: "Payment Terms",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Payment terms are specified in individual service agreements",
        "All fees are non-refundable unless otherwise specified",
        "We reserve the right to change pricing with 30 days notice",
        "Late payments may result in service suspension",
        "All prices are exclusive of applicable taxes"
      ]
    }
  ];

  const prohibitedUses = [
    "Illegal activities or violation of any laws",
    "Transmission of malicious code or viruses",
    "Spam, phishing, or other fraudulent activities",
    "Infringement of intellectual property rights",
    "Harassment, abuse, or threatening behavior",
    "Unauthorized access to other systems or accounts"
  ];

  const limitations = [
    "Services are provided 'as is' without warranties",
    "We are not liable for indirect or consequential damages",
    "Our liability is limited to the amount paid for services",
    "We do not guarantee uninterrupted service availability",
    "Third-party integrations are subject to their own terms"
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the legal terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Legal terms and conditions for our services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Please read these terms carefully before using our services. 
                These terms govern your use of Zion Tech Group's services.
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
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services 
                  (collectively, the "Service") operated by Zion Tech Group ("us," "we," or "our").
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. 
                  If you disagree with any part of these terms, then you may not access the Service.
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

              {/* Prohibited Uses */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Prohibited Uses</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  You may not use our Service for any unlawful purpose or to solicit others to perform unlawful acts. 
                  You agree not to use the Service:
                </p>
                <ul className="space-y-2">
                  {prohibitedUses.map((use, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are and will remain the 
                  exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, 
                  trademark, and other laws.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our trademarks and trade dress may not be used in connection with any product or service without 
                  our prior written consent.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of the Service.
                </p>
                <div className="space-y-2">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <span className="text-yellow-400 mr-3 mt-1">⚠</span>
                      <span>{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Termination */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
                  or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                  not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue 
                  using the Service.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of 
                  these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;