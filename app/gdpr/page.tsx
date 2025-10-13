import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Users,
  Database,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

export default function GDPR() {
  const principles = [
    {
      title: "Lawfulness, Fairness and Transparency",
      description: "We process personal data lawfully, fairly and in a transparent manner",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Purpose Limitation",
      description: "We collect personal data for specified, explicit and legitimate purposes",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Data Minimisation",
      description: "We only collect data that is adequate, relevant and limited to what is necessary",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Accuracy",
      description: "We keep personal data accurate and up to date",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Storage Limitation",
      description: "We retain personal data only for as long as necessary",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Integrity and Confidentiality",
      description: "We process personal data in a manner that ensures appropriate security",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const rights = [
    {
      title: "Right of Access",
      description: "You have the right to obtain confirmation of whether we process your personal data and access to that data",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Right to Rectification",
      description: "You have the right to have inaccurate personal data corrected",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Right to Erasure",
      description: "You have the right to have your personal data deleted in certain circumstances",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Right to Restrict Processing",
      description: "You have the right to restrict the processing of your personal data",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Right to Data Portability",
      description: "You have the right to receive your personal data in a structured format",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Right to Object",
      description: "You have the right to object to the processing of your personal data",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const dataTypes = [
    {
      category: "Identity Data",
      examples: ["Name", "Email address", "Phone number", "Mailing address"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser type", "Device information", "Usage data"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Usage Data",
      examples: ["Service usage patterns", "Feature interactions", "Performance data"],
      purpose: "To analyze and improve our services"
    },
    {
      category: "Marketing Data",
      examples: ["Communication preferences", "Marketing responses", "Survey data"],
      purpose: "To send you relevant marketing communications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance, data protection practices, and your privacy rights under EU law." />
        <meta name="keywords" content="GDPR, data protection, privacy, compliance, EU law, personal data" />
        <link rel="canonical" href="https://ziontechgroup.com/gdpr" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">GDPR Compliance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              GDPR Compliance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring full compliance with the 
            General Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Commitment to Data Protection
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Zion Tech Group, we take data protection seriously. We have implemented 
                comprehensive measures to ensure compliance with GDPR and protect your personal data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Full GDPR compliance since May 2018</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Regular privacy impact assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Data Protection Officer appointed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Regular staff training and awareness</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Protection Officer</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Processing Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Processing Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow the six key principles of GDPR in all our data processing activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Data Protection Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Under GDPR, you have specific rights regarding your personal data. 
              We are committed to helping you exercise these rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rights.map((right, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {right.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {right.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {right.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types We Collect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Types of Data We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are transparent about the types of personal data we collect and how we use it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {dataType.category}
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {dataType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Purpose:</h4>
                    <p className="text-sm text-gray-300">{dataType.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Questions About Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            If you have any questions about how we process your personal data or want to 
            exercise your rights, please don't hesitate to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Our DPO
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/privacy"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Privacy Policy
              <FileText className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}