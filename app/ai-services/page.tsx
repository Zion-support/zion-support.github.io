'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings;
const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses',
      icon: MessageSquare,
      category: 'Customer Service',
      price: 'Starting at $2 999/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', '24/7 availability', 'Custom training', 'Analytics dashboard']
      id: 2,
      title: 'Content Generation AI',
      description: 'Automated content creation for blogs, social media, marketing materials, and more',
      icon: FileText,
      category: 'Content',
      price: 'Starting at $1 999/month',
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'Product descriptions', 'SEO optimization', 'Brand voice consistency']
      id: 3,
      title: 'Predictive Analytics',
      description: 'Advanced data analysis and forecasting to drive business decisions',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $4 999/month',
      features: ['Sales forecasting', 'Customer behavior analysis', 'Risk assessment', 'Market trends', 'Real-time insights', 'Custom dashboards']
      id: 4,
      title: 'Computer Vision',
      description: 'Image and video analysis for quality control, security, and automation',
      icon: Eye,
      category: 'Computer Vision',
      price: 'Starting at $3 999/month',
      features: ['Object detection', 'Image classification', 'Quality inspection', 'Facial recognition', 'OCR processing', 'Real-time analysis']
      id: 5,
      title: 'Voice AI Solutions',
      description: 'Speech recognition and voice-enabled applications for enhanced user experience',
      icon: Mic,
      category: 'Voice AI',
      price: 'Starting at $2 499/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support', 'Noise cancellation', 'Custom voice models']
      id: 6,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and workflows',
      icon: Zap,
      category: 'Automation',
      price: 'Starting at $3 499/month',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Task scheduling', 'Error handling']
      id: 7,
      title: 'AI Security Solutions',
      description: 'Advanced threat detection and security monitoring using AI',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $4 499/month',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Access control', 'Incident response', 'Compliance monitoring']
      id: 8,
      title: 'Mobile AI Integration',
      description: 'AI-powered mobile applications with intelligent features',
      icon: Box,
      category: 'Mobile',
      price: 'Starting at $5 999/project',
      features: ['Mobile app AI', 'Offline processing', 'Real-time inference', 'Cross-platform support', 'Performance optimization', 'User personalization']
  ];

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Security', 'Mobile'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;

  const stats = [
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            AI Services</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              & Solutions;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we deliver AI that drives real results.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            <Link;
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              <span>Free Consultation</span>
              <ArrowRight className="w-5 h-5" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-10 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search AI services..."
                  valu, e={searchTer, m}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
            <div className="flex items-center space-x-2"></div>
              <select;
                valu, e={selectedCategor, y}
                onChange={(e) => setSelectedCategory(e.target.value)}</select>
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"</select>
                  <option, key={categor, y} valu, e={categor, y} classNam, e="capitaliz, e">
                ))}</option>
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div, key={servic, e.i, d} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-300, group"></di, v>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  <h3, className="tex, t-xl, font-semibold, text-whit, e">{servic, e.titl, e}</h, 3>
                
                <p, className="tex, t-gra, y-300, mb-6">{servic, e.descriptio, n}</p>
                
                <div className="mb-6"></div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2"></ul>
                      <li, key={inde, x} classNam, e="flex, items-center, text-sm, text-gra, y-30, 0"></l, i>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    ))}
                      <li, className="tex, t-cya, n-400, text-s, m">+{servic, e.feature, s.lengt, h - 4} more, features</l, i>
                    )}
                
                <div className="mb-6"></div>
                  <div, className="tex, t-lg, font-semibold, text-cya, n-40, 0">{servic, e.pric, e}</di, v>
                
                <div className="flex space-x-3"></div>
                  <Link;
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    Get Quote;
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"></button>
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI solutions are designed to deliver measurable results and drive business growth.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Business with AI?
            <p className="text-xl text-gray-300 mb-8"></p>
              Contact our AI experts to discuss your requirements and get a customized solution that drives real results.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
  );

export default AIServicesPage;