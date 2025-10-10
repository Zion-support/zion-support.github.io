'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Settings, Eye, BarChart, Users, Building, Clock, MapPin, PhoneCall, Mail as MailIcon, ExternalLink } from 'lucide-react';

const TermsPage: React.FC = () => {
  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms.',
        'If you do not agree to these terms, you may not use our services.',
        'We reserve the right to modify these terms at any time.',
        'Your continued use of our services constitutes acceptance of any changes.'
      ]
    },
    {
      title: 'Use of Services',
      icon: Settings,
      content: [
        'You may use our services only for lawful purposes and in accordance with these terms.',
        'You agree not to use our services in any way that could damage or impair our systems.',
        'You are responsible for maintaining the confidentiality of your account information.',
        'You must notify us immediately of any unauthorized use of your account.'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Lock,
      content: [
        'All content, trademarks, and intellectual property on our website are owned by us.',
        'You may not reproduce, distribute, or create derivative works without permission.',
        'Any feedback or suggestions you provide may be used by us without compensation.',
        'You retain ownership of any content you submit to our services.'
      ]
    },
    {
      title: 'Privacy and Data',
      icon: Shield,
      content: [
        'Your privacy is important to us. Please review our Privacy Policy.',
        'We collect and use your information as described in our Privacy Policy.',
        'You consent to the collection and use of your information as described.',
        'We implement appropriate security measures to protect your data.'
      ]
    }
  ];

  const limitations = [
    {
      icon: AlertTriangle,
      title: 'Service Availability',
      description: 'We do not guarantee uninterrupted access to our services'
    },
    {
      icon: Database,
      title: 'Data Loss',
      description: 'We are not responsible for any data loss or corruption'
    },
    {
      icon: Globe,
      title: 'Third-Party Services',
      description: 'We are not responsible for third-party services or content'
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      description: 'Our liability is limited to the maximum extent permitted by law'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Read our terms of service to understand your rights and responsibilities when using Zion Tech Group's services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Effective immediately</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of our services and outline your rights and responsibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations and Disclaimers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Limitations and Disclaimers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important limitations and disclaimers regarding our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {limitations.map((limitation, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <limitation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{limitation.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{limitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Important Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms of service constitute a legally binding agreement between you and Zion Tech Group. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any material changes 
                by posting the new terms on our website and updating the "Last updated" date. Your continued use of 
                our services after such modifications constitutes your acceptance of the updated terms.
              </p>
              <p>
                If any provision of these terms is found to be unenforceable or invalid, that provision will be 
                limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in 
                full force and effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have any questions about these terms of service, please contact us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 font-medium">
                legal@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak with our legal team</p>
              <a href="tel:+13024640950" className="text-cyan-400 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our office location</p>
              <address className="text-cyan-400 font-medium not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
