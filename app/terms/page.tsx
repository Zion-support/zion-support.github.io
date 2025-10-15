import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const TermsPage: React.FC = () => {
  const termsSections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Availability",
      content: "We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify or discontinue services at any time."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing."
    }
  ];

  const prohibitedUses = [
    "Use our services for any unlawful purpose or to solicit others to perform unlawful acts",
    "Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
    "Transmit or procure the sending of any advertising or promotional material without our prior written consent",
    "Impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity",
    "Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services"
  ];

  const userObligations = [
    "Provide accurate and complete information when using our services",
    "Maintain the confidentiality of your account credentials",
    "Notify us immediately of any unauthorized use of your account",
    "Comply with all applicable laws and regulations",
    "Respect the intellectual property rights of others"
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service, user agreements, and legal conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, conditions, AI services, IT services" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Legal terms and conditions for using our services." />
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
                Please read these terms and conditions carefully before using our services.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {termsSections.map((section, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{section.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Uses */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Prohibited Uses</h2>
                <p className="text-xl text-gray-300">
                  You may not use our services for any of the following purposes:
                </p>
              </div>
              
              <div className="space-y-4">
                {prohibitedUses.map((use, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-red-500/20">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{use}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">User Obligations</h2>
                <p className="text-xl text-gray-300">
                  As a user of our services, you agree to:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {userObligations.map((obligation, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{obligation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Terms?</h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms of service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Legal Team
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;