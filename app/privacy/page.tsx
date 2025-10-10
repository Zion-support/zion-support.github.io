'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle, Settings, BarChart, Users, Building, Clock, MapPin, PhoneCall, Mail as MailIcon, ExternalLink, Trash2 } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information (name, email, phone number)',
        'Business information (company name, job title)',
        'Usage data and analytics',
        'Communication preferences',
        'Payment and billing information'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Settings,
      content: [
        'Provide and improve our services',
        'Process transactions and payments',
        'Send important updates and notifications',
        'Personalize your experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Users,
      content: [
        'We do not sell your personal information',
        'Share only with trusted service providers',
        'Disclose when required by law',
        'Protect our rights and safety',
        'With your explicit consent'
      ]
    },
    {
      title: 'Data Security',
      icon: Shield,
      content: [
        'Encryption in transit and at rest',
        'Regular security audits',
        'Access controls and monitoring',
        'Secure data centers',
        'Employee training and awareness'
      ]
    }
  ];

  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of your personal data'
    },
    {
      icon: Settings,
      title: 'Right to Rectification',
      description: 'Correct inaccurate personal information'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data'
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'Limit how we process your data'
    },
    {
      icon: FileText,
      title: 'Right to Data Portability',
      description: 'Receive your data in a structured format'
    },
    {
      icon: AlertTriangle,
      title: 'Right to Object',
      description: 'Object to certain types of processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacySections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
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

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <right.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{right.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us About Privacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have any questions about this privacy policy or your personal data, please contact us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 font-medium">
                privacy@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak with our privacy team</p>
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

      {/* Legal Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Legal Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This privacy policy is effective as of January 15, 2024, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
              <p>
                We reserve the right to update or change our privacy policy at any time and you should check this privacy policy periodically. Your continued use of our service after we post any modifications to the privacy policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified privacy policy.
              </p>
              <p>
                If we make any material changes to this privacy policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
