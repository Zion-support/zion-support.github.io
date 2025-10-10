'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, Users, FileText, CheckCircle, ArrowRight, Star, Brain, Cloud, Code, BarChart, Smartphone, Settings, Calendar, Target, Clock, Zap, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.'
    },
    {
      title: 'How We Use Your Information',
      icon: Settings,
      content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.'
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.'
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Your Rights',
      icon: CheckCircle,
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights.'
    },
    {
      title: 'Cookies and Tracking',
      icon: Eye,
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Legal Document
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use our services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Email: privacy@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Phone: +1 (302) 464-0950</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Database className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help. Contact us if you have any questions or concerns about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;