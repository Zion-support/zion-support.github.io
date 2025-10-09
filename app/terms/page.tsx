'use client';
import React from 'react';
import { Brain, FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Zap, Settings, Code, BarChart, Cloud, Target, MessageSquare, Cpu, Database, Users, Mail, Phone, MapPin, Lock, Eye, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing or using Zion Tech Group services, you agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Your continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      title: 'Description of Services',
      icon: Brain,
      content: [
        'AI-powered enterprise solutions and consulting services',
        'IT infrastructure management and cloud migration services',
        'Machine learning model development and deployment',
        'Custom software development and integration services',
        'Data analytics and business intelligence solutions',
        'Cybersecurity and compliance services'
      ]
    },
    {
      title: 'User Accounts and Registration',
      icon: Users,
      content: [
        'You must provide accurate and complete information when creating an account',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must notify us immediately of any unauthorized use of your account',
        'We reserve the right to suspend or terminate accounts that violate these terms',
        'One person or entity may not maintain multiple accounts without permission'
      ]
    },
    {
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: [
        'Use our services only for lawful purposes and in accordance with these terms',
        'Do not attempt to gain unauthorized access to our systems or other users\' accounts',
        'Do not use our services to transmit harmful, offensive, or illegal content',
        'Do not interfere with or disrupt our services or servers',
        'Do not use our services to compete with us or for reverse engineering purposes',
        'Respect intellectual property rights and do not infringe on others\' rights'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      icon: FileText,
      content: [
        'All content, trademarks, and intellectual property on our platform are owned by Zion Tech Group',
        'You may not copy, modify, distribute, or create derivative works without permission',
        'Any content you submit to our platform remains your property but grants us a license to use it',
        'We respect third-party intellectual property rights and expect you to do the same',
        'Report any intellectual property infringement to our legal team immediately'
      ]
    },
    {
      title: 'Payment Terms and Billing',
      icon: CreditCard,
      content: [
        'Fees for our services are as specified in your service agreement or pricing page',
        'Payment is due according to the billing cycle specified in your agreement',
        'We may change our pricing with 30 days\' notice to existing customers',
        'Late payments may result in service suspension or termination',
        'All fees are non-refundable unless otherwise specified in writing',
        'You are responsible for all applicable taxes and fees'
      ]
    },
    {
      title: 'Service Level Agreements',
      icon: Target,
      content: [
        'We provide services according to the specifications in your service agreement',
        'Uptime guarantees and performance metrics are detailed in your SLA',
        'We will provide reasonable notice for scheduled maintenance',
        'Service credits may be available for qualifying service interruptions',
        'Our liability is limited as specified in the liability section below'
      ]
    },
    {
      title: 'Data and Privacy',
      icon: Database,
      content: [
        'We handle your data according to our Privacy Policy and applicable laws',
        'You retain ownership of your data and grant us necessary licenses to provide services',
        'We implement appropriate security measures to protect your data',
        'We may use anonymized data to improve our services and develop new features',
        'You are responsible for ensuring your data complies with applicable laws and regulations'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'Our liability is limited to the amount you paid for the services in the 12 months preceding the claim',
        'We are not liable for indirect, incidental, special, or consequential damages',
        'We are not liable for damages resulting from third-party actions or circumstances beyond our control',
        'These limitations apply to the fullest extent permitted by applicable law',
        'Some jurisdictions may not allow these limitations, so they may not apply to you'
      ]
    },
    {
      title: 'Indemnification',
      icon: Shield,
      content: [
        'You agree to indemnify and hold us harmless from any claims arising from your use of our services',
        'This includes claims related to your violation of these terms or applicable laws',
        'You must cooperate with us in the defense of any such claims',
        'We reserve the right to assume exclusive defense and control of any matter subject to indemnification',
        'This indemnification obligation survives termination of these terms'
      ]
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: [
        'Either party may terminate these terms with 30 days\' written notice',
        'We may terminate immediately for material breach of these terms',
        'Upon termination, your right to use our services ceases immediately',
        'We may retain your data for a reasonable period as required by law or our policies',
        'Sections that by their nature should survive termination will remain in effect'
      ]
    },
    {
      title: 'Governing Law and Disputes',
      icon: Scale,
      content: [
        'These terms are governed by the laws of Delaware, United States',
        'Any disputes will be resolved through binding arbitration',
        'Arbitration will be conducted by the American Arbitration Association',
        'You waive your right to a jury trial and class action lawsuits',
        'Arbitration will be conducted in Delaware unless otherwise agreed'
      ]
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting harmful, threatening, or offensive content',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with or disrupting our services',
    'Using our services for illegal or unauthorized purposes',
    'Reverse engineering or attempting to extract source code',
    'Creating multiple accounts to circumvent restrictions',
    'Using automated systems to access our services without permission',
    'Distributing malware, viruses, or other harmful code',
    'Engaging in any form of harassment or abuse'
  ];

  const serviceModifications = [
    'We may modify or discontinue services with reasonable notice',
    'New features may be added or existing features may be changed',
    'We will provide notice of material changes via email or platform notification',
    'Your continued use after changes constitutes acceptance of new terms',
    'We may suspend services for maintenance, updates, or security reasons'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Read our Terms of Service to understand your rights and obligations when using Zion Tech Group's AI and IT services."
        keywords={['terms of service', 'terms and conditions', 'user agreement', 'Zion Tech Group', 'legal terms', 'service agreement']}
        canonicalUrl="https://ziontechgroup.com/terms"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 2024
          </div>
        </section>

        {/* Introduction */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 neon-text">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, services, and applications 
            (collectively, the "Services") provided by Zion Tech Group, Inc. ("Company," "we," "our," or "us").
          </p>
          <p className="text-gray-300 mb-4">
            By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
            then you may not access the Services.
          </p>
          <p className="text-gray-300">
            We reserve the right to update or change these Terms at any time. We will notify you of any material changes by posting 
            the new Terms on this page and updating the "Last updated" date.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="cyber-card p-8">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-300">
                    <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Prohibited Uses */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Prohibited Uses</h2>
          <p className="text-gray-300 mb-6">
            You may not use our Services for any unlawful purpose or to solicit others to perform unlawful acts. 
            You may not use our Services in any manner that could damage, disable, overburden, or impair our servers or networks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prohibitedUses.map((use, index) => (
              <div key={index} className="flex items-start text-gray-300">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                {use}
              </div>
            ))}
          </div>
        </section>

        {/* Service Modifications */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Service Modifications</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify, suspend, or discontinue any part of our Services at any time. 
            We will provide reasonable notice of any material changes.
          </p>
          
          <ul className="space-y-3">
            {serviceModifications.map((modification, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                {modification}
              </li>
            ))}
          </ul>
        </section>

        {/* Force Majeure */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Force Majeure</h2>
          <p className="text-gray-300 mb-4">
            We shall not be liable for any failure or delay in performance under these Terms which is due to fire, flood, earthquake, 
            elements of nature or acts of God, acts of war, terrorism, labor disputes, or any other cause which is beyond our reasonable control.
          </p>
          <p className="text-gray-300">
            In the event of a force majeure, we will use reasonable efforts to minimize the impact and resume normal operations as soon as possible.
          </p>
        </section>

        {/* Severability */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Severability</h2>
          <p className="text-gray-300">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum 
            extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
          </p>
        </section>

        {/* Entire Agreement */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Entire Agreement</h2>
          <p className="text-gray-300">
            These Terms, together with our Privacy Policy and any other legal notices published by us on the Services, 
            shall constitute the entire agreement between you and Zion Tech Group concerning the Services.
          </p>
        </section>

        {/* Contact Information */}
        <section className="cyber-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Legal Department</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:legal@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    legal@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">General Inquiries</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:support@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    support@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;