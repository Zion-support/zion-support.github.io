import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Calendar, Mail, Phone, User } from "lucide-react";

export default function Terms() {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        "By accessing or using our services, you agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Your continued use of our services constitutes acceptance of any changes",
        "These terms apply to all users of our website and services"
      ]
    },
    {
      title: "Service Description",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "Zion Tech Group provides AI and IT solutions including business intelligence, cybersecurity, and cloud services",
        "We offer consulting, implementation, and ongoing support for our solutions",
        "Services are provided on a project basis or through ongoing support agreements",
        "We reserve the right to modify or discontinue services with reasonable notice",
        "All services are subject to availability and our capacity to deliver"
      ]
    },
    {
      title: "User Responsibilities",
      icon: <User className="w-6 h-6" />,
      content: [
        "Provide accurate and complete information about your business needs",
        "Cooperate with our team during project implementation and support",
        "Maintain the security of your systems and data",
        "Comply with all applicable laws and regulations",
        "Respect intellectual property rights and confidentiality agreements"
      ]
    },
    {
      title: "Payment Terms",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Payment terms are specified in individual service agreements",
        "Invoices are due within 30 days of receipt unless otherwise specified",
        "Late payments may incur additional fees as outlined in the agreement",
        "We reserve the right to suspend services for non-payment",
        "All prices are subject to change with 30 days notice"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We retain ownership of our proprietary technology and methodologies",
        "You retain ownership of your data and business processes",
        "Work products are typically owned by the client unless otherwise specified",
        "We may use anonymized data for improving our services",
        "Confidential information must be protected by both parties"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Our liability is limited to the amount paid for the specific service",
        "We are not liable for indirect, incidental, or consequential damages",
        "We provide services on an 'as is' basis without warranties",
        "You are responsible for backing up your data and systems",
        "Force majeure events may excuse performance delays"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta 
          name="description" 
          content="Read Zion Tech Group's terms of service, legal terms, and conditions for using our AI and IT solutions. Understand your rights and responsibilities." 
        />
        <meta 
          name="keywords" 
          content="terms of service, legal terms, conditions, user agreement, Zion Tech Group terms, service agreement" 
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
              <FileText className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Legal Terms & Conditions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Terms of Service
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              These terms and conditions govern your use of our AI and IT services. 
              Please read them carefully before engaging with our solutions.
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
                  <span className="text-sm font-medium">Legally Binding</span>
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
                  Agreement Overview
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Zion Tech Group 
                regarding your use of our AI and IT services. By accessing or using our services, you acknowledge that 
                you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. We will notify you of any material changes by posting the 
                new Terms on our website and updating the "Last Updated" date. Your continued use of our services after 
                such changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Terms Sections */}
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

            {/* Additional Terms */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Additional Terms
                </span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Governing Law</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms are governed by the laws of Delaware, United States, without regard to conflict of law principles. 
                    Any disputes arising from these Terms will be resolved in the courts of Delaware.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Severability</h4>
                  <p className="text-gray-300 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will 
                    continue to be valid and enforceable to the fullest extent permitted by law.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Entire Agreement</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms, together with any service agreements, constitute the entire agreement between you and 
                    Zion Tech Group regarding the use of our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Questions About These Terms?
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-cyan-400">legal@ziontechgroup.com</p>
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
                  <h4 className="text-white font-semibold mb-2">Legal Department</h4>
                  <p className="text-cyan-400">legal@ziontechgroup.com</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Work With Us?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contact us to discuss your project and get started with our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/privacy"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                  >
                    Privacy Policy
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
