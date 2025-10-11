import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      icon: Users,
      category: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      purpose: 'To provide services and communicate with you'
    },
    {
      icon: Database,
      category: 'Usage Data',
      description: 'Information about how you use our website and services',
      purpose: 'To improve our services and user experience'
    },
    {
      icon: Mail,
      category: 'Communication Data',
      description: 'Records of our communications with you',
      purpose: 'To provide customer support and maintain service quality'
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct inaccurate data',
    'Delete your data',
    'Restrict data processing',
    'Data portability',
    'Object to processing',
    'Withdraw consent'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy policy, data protection practices, and how we handle your personal information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
              <div className="space-y-6">
                {dataTypes.map((dataType, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <dataType.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{dataType.category}</h3>
                      <p className="text-gray-300 mb-2">{dataType.description}</p>
                      <p className="text-cyan-400 text-sm">{dataType.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To provide, operate, and maintain our services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To improve, personalize, and expand our services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To understand and analyze how you use our services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To develop new products, services, features, and functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To communicate with you for customer service and support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>To send you marketing and promotional communications</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
                  <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <Lock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
                  <p className="text-gray-300 text-sm">Strict access controls and authentication</p>
                </div>
                <div className="text-center">
                  <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                  <p className="text-gray-300 text-sm">Continuous monitoring and auditing</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You have certain rights regarding your personal information. You can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;