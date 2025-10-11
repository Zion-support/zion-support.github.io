'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Shield, Users, Mail, Phone, MapPin, Calendar, CheckCircle, AlertTriangle, Info, Lock, Eye, Globe, Settings, Heart, Star, Award, TrendingUp, Target, Zap, Brain, Cloud, Code, BarChart3, MessageSquare, Smartphone, Headphones, Package, Monitor, Wifi, Cpu, Server, FileText, ExternalLink, Download, Share2, ThumbsUp, MessageCircle, Clock, DollarSign, BookOpen, Lightbulb, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, company information, and any other information you choose to provide.'
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, communicate with you about products and services, and personalize your experience.'
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.'
    },
    {
      icon: Users,
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.'
    },
    {
      icon: Globe,
      title: 'International Data Transfers',
      content: 'Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.'
    },
    {
      icon: Settings,
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.'
    },
    {
      icon: Calendar,
      title: 'Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.'
    },
    {
      icon: AlertTriangle,
      title: 'Children\'s Privacy',
      content: 'Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.'
    },
    {
      icon: FileText,
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new privacy policy.'
    },
    {
      icon: Mail,
      title: 'Contact Us',
      content: 'If you have any questions about this privacy policy or our data practices, please contact us at privacy@ziontechgroup.com or call us at (302) 464-0950. Our office is located at 364 E Main St STE 1008, Middletown, DE 19709.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Read Zion Tech Group's Privacy Policy. Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="privacy policy, data protection, personal information, data security, privacy rights, GDPR compliance" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Privacy <span className="text-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Last updated: {lastUpdated}
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Your privacy is important to us. This Privacy Policy explains how we collect, 
                use, and protect your personal information when you use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
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

        {/* Data Protection Notice */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Data Protection Notice</h3>
                    <p className="text-gray-300 mb-4">
                      We are committed to protecting your privacy and ensuring the security of your personal information. 
                      We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) 
                      and the California Consumer Privacy Act (CCPA).
                    </p>
                    <p className="text-gray-300">
                      If you have any concerns about how we handle your personal information or if you believe your 
                      privacy rights have been violated, please contact our Data Protection Officer at 
                      <a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                        dpo@ziontechgroup.com
                      </a>.
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
                <h2 className="text-3xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  If you have any questions or concerns about our Privacy Policy or how we handle your data, 
                  please don't hesitate to contact us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">privacy@ziontechgroup.com</p>
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

export default PrivacyPage;