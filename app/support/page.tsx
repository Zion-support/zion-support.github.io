'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Phone Mail MessageCircle Clock CheckCircle Search HelpCircle BookOpen Users Zap } from "lucide-react";
interface FAQ {
  question: string;
  answer: string;
  category: string;

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'Getting Started'
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular check-ins, system monitoring, and proactive maintenance. Our support team is always available to help you succeed.',
      category: 'Support'
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 and GDPR.',
      category: 'Security'
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with your existing systems through APIs, webhooks, and custom connectors. Our team will help you set up integrations during implementation.',
      category: 'Integration'
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'Training'
      question: 'What is your service level agreement?',
      answer: 'We offer different SLA tiers based on your needs. Our standard SLA includes 99.9% uptime, 4-hour response time for critical issues, and 24/7 monitoring. Enterprise clients can customize their SLA requirements.',
      category: 'Service Level'
      question: 'How do you handle data privacy?',
      answer: 'We take data privacy seriously and comply with all relevant regulations. Your data is encrypted in transit and at rest, and we never share your data with third parties without your explicit consent.',
      category: 'Data Management'
      question: 'Can you help with scaling our solutions?',
      answer: 'Absolutely! Our solutions are designed to scale with your business. We provide ongoing optimization and scaling support to ensure your systems can handle growth and increased demand.',
      category: 'Scaling'
  ];

  const supportChannels = [
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-blue-400'
      name: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7 Available',
      color: 'text-green-400'
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      color: 'text-purple-400'
  ];

  const categories = ['all', 'Getting Started', 'Support', 'Security', 'Integration', 'Training', 'Service Level', 'Data Management', 'Scaling'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  return (</number>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, contact, technical assistance" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Support</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Center;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Get help and support for our AI and IT solutions. We're here to help you succeed.
          
          <div className="max-w-2xl mx-auto relative mb-8"></div>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input;
              type="text"
              placeholder="Search for help..."
              valu, e={searchTer, m}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

          <div className="flex flex-wrap justify-center gap-2 mb-8"></div>
              <button;
                ke, y={categor, y}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category;
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
            ))}</button>
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the support channel that works best for you. We're here to help 24/7.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-300, text-cente, r"></di, v>
                <div className="flex justify-center mb-6"></div>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center"></div>
                    <channel.icon className="w-8 h-8 text-cyan-400" />
                <h3, className="tex, t-xl, font-semibold, text-white, mb-4">{channe, l.nam, e}</h, 3>
                <p, className="tex, t-gra, y-300, mb-4">{channe, l.descriptio, n}</p>
                <p, className={`tex, t-lg, font-medium, mb-2 ${channe, l.colo, r}`}>{channe, l.contac, t}</p>
                <p, className="tex, t-sm, text-gra, y-40, 0">{channe, l.availabilit, y}</p>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300"></p>
              Find answers to common questions about our services and solutions.
          
          <div className="space-y-4"></div>
              <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, border borde, r-cya, n-50, 0/2, 0"></di, v>
                <button;
                  onClick={() => toggleFAQ(index)}</button>
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"</button>
                  <span, className="tex, t-lg, font-semibold, text-whit, e">{fa, q.questio, n}</spa, n>
                  <div className="flex items-center space-x-2"></div>
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full"></span>
                    <div, className={`transform, transition-transfor, m ${expandedFA, Q === inde, x ? 'rotat, e-18, 0' : ''}`}></di, v>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M19, 9l-7, 7-7-7" /></p>
                  <div className="px-6 pb-4"></div>
                    <p, className="tex, t-gra, y-30, 0">{fa, q.answe, r}</p>
                )}
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Explore our documentation, guides, and other helpful resources.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"></div>
              <div className="flex justify-center mb-6"></div>
                <BookOpen className="w-12 h-12 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation</button>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"></div>
              <div className="flex justify-center mb-6"></div>
                <Users className="w-12 h-12 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">Connect with other users and get help from the community.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">Join Community</button>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center"></div>
              <div className="flex justify-center mb-6"></div>
                <Zap className="w-12 h-12 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Status Page</h3>
              <p className="text-gray-300 mb-6">Check the real-time status of our services and systems.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Status</button>
  );

export default SupportPage;