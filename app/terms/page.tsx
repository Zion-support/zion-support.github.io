'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Users, Mail, Phone, MapPin, Calendar, CheckCircle, AlertTriangle, Info, Lock, Eye, Database, Globe, Settings, Heart, Star, Award, TrendingUp, Target, Zap, Brain, Cloud, Code, BarChart3, MessageSquare, Smartphone, Headphones, Package, Monitor, Wifi, Cpu, Server, Database as DatabaseIcon, Settings as SettingsIcon, Globe as GlobeIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: Users,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.'
    },
    {
      icon: Shield,
      title: 'Disclaimer',
      content: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group\'s website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
    },
    {
      icon: Eye,
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with this policy.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.'
    },
    {
      icon: Globe,
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.'
    },
    {
      icon: Settings,
      title: 'Service Availability',
      content: 'We strive to maintain the availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.'
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: 'All content, trademarks, and other intellectual property on this website are owned by Zion Tech Group or its licensors. Users may not reproduce, distribute, or create derivative works from any content without express written permission.'
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at kleber@ziontechgroup.com or call us at (302) 464-0950. Our office is located at 364 E Main St STE 1008, Middletown, DE 19709.'
    },
    {
      icon: Calendar,
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last Updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new terms.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms and Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and responsibilities when using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, privacy policy, data protection" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Terms of <span className="text-cyan-400">Service</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Last updated: {lastUpdated}
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Please read these Terms of Service carefully before using our website and services. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                        <p className="text-gray-300 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Important Notice</h3>
                    <p className="text-gray-300 mb-4">
                      These Terms of Service constitute a legally binding agreement between you and Zion Tech Group. 
                      If you do not agree with any part of these terms, you must not use our services.
                    </p>
                    <p className="text-gray-300">
                      For questions about these terms or to request clarification on any section, 
                      please contact our legal team at <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">legal@ziontechgroup.com</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  If you have any questions or concerns about our Terms of Service, 
                  please don't hesitate to contact us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">legal@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">(302) 464-0950</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                  <p className="text-sm text-gray-400">Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsPage;