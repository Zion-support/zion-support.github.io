import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.'
    },
    {
      icon: Shield,
      title: 'Disclaimer',
      content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.'
    },
    {
      icon: AlertCircle,
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and legal conditions for using our AI and IT services." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services. 
              By using our services, you agree to be bound by these terms.
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website and services operated by 
                Zion Tech Group ("us", "we", or "our"). By accessing or using our services, you agree to 
                be bound by these Terms.
              </p>
            </div>

            {/* Key Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Detailed Terms */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. Detailed Terms</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.1 Service Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We provide AI and IT services including but not limited to consulting, development, 
                    implementation, and support services. The specific services will be detailed in 
                    individual service agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.2 User Responsibilities</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Use our services in compliance with applicable laws</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Not interfere with or disrupt our services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Respect intellectual property rights</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.3 Payment Terms</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Payment terms will be specified in individual service agreements. Generally, 
                    payment is due within 30 days of invoice date unless otherwise specified.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.4 Intellectual Property</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All intellectual property rights in our services remain with us or our licensors. 
                    You may not copy, modify, or distribute our services without written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.5 Limitation of Liability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To the maximum extent permitted by law, we shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.6 Termination</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                without regard to its conflict of law provisions. Any disputes arising from these 
                Terms shall be subject to the exclusive jurisdiction of the courts in Delaware.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes by posting the new Terms on this page and updating the "Last updated" 
                date. Your continued use of our services after any such changes constitutes acceptance 
                of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
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

export default TermsPage;