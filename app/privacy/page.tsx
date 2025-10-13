import { ArrowRight, Shield, Lock, Eye, Database, Users, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Privacy() {
  const privacySections = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us or use our services",
        "Business information (company name, industry, project details) for service delivery",
        "Technical information (IP address, browser type, device information) for website functionality",
        "Usage data (pages visited, time spent, interactions) to improve our services"
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our AI and IT services",
        "Communicate with you about projects and support",
        "Process payments and manage billing",
        "Send important updates about our services",
        "Analyze usage patterns to enhance user experience"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Protection & Security",
      content: [
        "All data is encrypted using industry-standard protocols",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures",
        "Secure data storage and transmission",
        "Compliance with GDPR, CCPA, and other privacy regulations"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "Information may be shared with trusted service providers",
        "Data may be disclosed if required by law or legal process",
        "Aggregated, anonymized data may be used for analytics",
        "Your consent is required for any other sharing purposes"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and protection." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, privacy rights, data security, personal information" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Privacy
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Policy
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information 
              when you use our services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {privacySections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                      <ul className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Your Privacy Rights
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over your personal information. Here are your rights and how to exercise them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Access Your Data</h3>
                <p className="text-gray-300">Request a copy of all personal information we have about you</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Correct Information</h3>
                <p className="text-gray-300">Update or correct any inaccurate personal information</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Delete Data</h3>
                <p className="text-gray-300">Request deletion of your personal information</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Database className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Portability</h3>
                <p className="text-gray-300">Receive your data in a structured, machine-readable format</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Restrict Processing</h3>
                <p className="text-gray-300">Limit how we process your personal information</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Object to Processing</h3>
                <p className="text-gray-300">Opt out of certain types of data processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about this privacy policy or want to exercise your rights, 
                please contact our privacy team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">privacy@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Privacy Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
