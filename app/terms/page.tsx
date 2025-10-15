import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our services, you agree to be bound by these terms",
        "If you do not agree to these terms, please do not use our services",
        "We may update these terms from time to time, and continued use constitutes acceptance",
        "These terms apply to all users of our website and services"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Service Description",
      content: [
        "We provide AI and IT consulting services, software development, and technology solutions",
        "Services are provided on a project basis with specific terms outlined in individual contracts",
        "We reserve the right to modify or discontinue services with reasonable notice",
        "All services are subject to availability and our capacity"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information for project requirements",
        "Respect intellectual property rights and confidentiality agreements",
        "Use our services in compliance with applicable laws and regulations",
        "Maintain the security of any credentials or access provided"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services in the 12 months preceding the claim",
        "We are not liable for indirect, incidental, or consequential damages",
        "We provide services 'as is' without warranties beyond those explicitly stated",
        "Force majeure events may affect our ability to perform services"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand the legal terms and conditions governing the use of our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms, legal compliance" />
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
                Please read these terms carefully before using our services. By using our services, you agree to these terms.
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
                <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group&apos;s website and services. 
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you do not agree to these Terms, please do not use our services.
                </p>
              </div>

              {/* Terms Sections */}
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

              {/* Additional Terms */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mt-8">
                <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Payment Terms:</strong> Payment terms are specified in individual project agreements. 
                    Late payments may incur additional charges as outlined in the agreement.
                  </p>
                  <p>
                    <strong className="text-white">Intellectual Property:</strong> All work products and deliverables remain the property of the client 
                    unless otherwise specified in the project agreement.
                  </p>
                  <p>
                    <strong className="text-white">Confidentiality:</strong> We maintain strict confidentiality regarding all client information 
                    and project details in accordance with our confidentiality agreements.
                  </p>
                  <p>
                    <strong className="text-white">Termination:</strong> Either party may terminate services with written notice as specified 
                    in the project agreement.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 mt-12 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-white/90 mb-6">
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:legal@ziontechgroup.com" 
                    className="flex items-center justify-center bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    legal@ziontechgroup.com
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

export default TermsPage;
