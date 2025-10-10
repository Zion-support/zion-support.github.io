'use client';
import React from 'react';
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle, ArrowRight, Star, Brain, Cloud, Code, BarChart, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, Target, Clock, Zap, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck } from 'lucide-react';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      icon: Scale,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
    },
    {
      title: 'Service Availability',
      icon: Shield,
      content: 'We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.'
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.'
    },
    {
      title: 'Prohibited Uses',
      icon: AlertTriangle,
      content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.'
    },
    {
      title: 'Intellectual Property',
      icon: FileText,
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.'
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.'
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
              <FileText className="w-4 h-4 mr-2" />
              Legal Document
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Terms of
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of our services. 
              Please read these terms carefully before using our platform.
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
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these terms of service, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Email: legal@ziontechgroup.com</span>
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help. Contact us if you have any questions about our terms of service.
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

export default TermsPage;