import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        "Personal information you provide when contacting us (name, email, phone number)",
        "Business information related to your project requirements and goals",
        "Technical information about your systems and infrastructure (with permission)",
        "Usage data and analytics to improve our services",
        "Communication records and correspondence"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <User className="w-6 h-6" />,
      content: [
        "To provide and improve our AI and IT services",
        "To communicate with you about your projects and our services",
        "To customize solutions based on your specific needs",
        "To process payments and manage your account",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Security",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data is encrypted in transit and at rest",
        "Access to your information is restricted to authorized personnel only",
        "We regularly audit our security practices and update them as needed",
        "We have incident response procedures in place for any security breaches"
      ]
    },
    {
      title: "Data Sharing",
      icon: <Eye className="w-6 h-6" />,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist us in delivering our services",
        "We may disclose information if required by law or to protect our rights",
        "Any third-party sharing is done with appropriate confidentiality agreements",
        "You will be notified of any significant changes to our data sharing practices"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta 
          name="description" 
          content="Learn about Zion Tech Group's privacy policy, data protection practices, and how we handle your personal and business information with the highest security standards." 
        />
        <meta 
          name="keywords" 
          content="privacy policy, data protection, GDPR compliance, information security, data privacy, Zion Tech Group privacy" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Data Protection & Privacy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Privacy Policy
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your privacy and data security are our top priorities. This policy explains how we collect, 
              use, and protect your information when you use our AI and IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Last Updated: {lastUpdated}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Commitment to Privacy
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal and business information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We adhere to the highest standards of data protection and comply with applicable privacy laws, including the General Data Protection Regulation (GDPR) 
                and other relevant regulations in the jurisdictions where we operate.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {section.title}
                      </span>
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Contact Us About Privacy
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-cyan-400">privacy@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Phone</h4>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Data Protection Officer</h4>
                  <p className="text-cyan-400">dpo@ziontechgroup.com</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Questions About Your Data?
                </h3>
                <p className="text-gray-300 mb-6">
                  We're here to help you understand your rights and our data practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/terms"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
