'use client';
import React, { useState } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { CheckCircle ArrowRight Zap Star Users TrendingUp Shield Cloud BarChart3 MessageSquare } from "lucide-react";
interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: MicroSaasProduct[] = [
      id: '1',
      icon: '📊',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'AI-powered insights',
        'Advanced reporting',
        'API integration',
        'Mobile-responsive dashboard'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
      id: '2',
      icon: '💬',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      features: [
        'Advanced AI chatbot with natural language processing',
        'Multi-channel support (web, mobile, social)',
        'Sentiment analysis and mood tracking',
        'Live chat integration',
        'Knowledge base management',
        'Performance analytics'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
      id: '3',
      icon: '🔐',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      features: [
        'Real-time threat monitoring',
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'Security analytics dashboard'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
      id: '4',
      icon: '☁️',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'Automated cloud backup',
        'Disaster recovery planning',
        'Version control and file history',
        'AI-powered storage optimization',
        'Cross-platform sync',
        'Advanced encryption'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
      id: '5',
      icon: '📈',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      features: [
        'Real-time performance monitoring',
        'AI-powered optimization suggestions',
        'Error tracking and alerting',
        'User experience analytics',
        'Database performance insights',
        'Mobile app performance tracking'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
      id: '6',
      icon: '🤖',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models and workflow optimization',
      features: [
        'Visual workflow builder',
        'AI-powered process optimization',
        'Custom automation rules',
        'Integration with 200+ tools',
        'Advanced analytics',
        'Multi-tenant architecture'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
      id: '7',
      icon: '📧',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation and personalization',
      features: [
        'AI-powered content generation',
        'Advanced audience segmentation',
        'Automated campaign optimization',
        'A/B testing and analytics',
        'Template library',
        'Deliverability optimization'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing'
      id: '8',
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      features: [
        'Automated bookkeeping',
        'AI-powered expense categorization',
        'Financial forecasting',
        'Invoice generation and tracking',
        'Tax preparation assistance',
        'Multi-currency support'
      ],
      price: '$179/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance'
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance'];

  const filteredProducts = selectedCategory === 'All' 
    ? products;
    : products.filter(product => product.category === selectedCategory);

  const stats = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Micro SaaS</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Solutions;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-8 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-4"></div>
              <button;
                ke, y={categor, y}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category;
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
            ))}</button>
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div, key={produc, t.i, d} classNam, e={`b, g-slat, e-80, 0/50, rounded-2xl, p-8, border transitio, n-all, duration-30, 0 ${
                product.popular ? 'border-cyan-500' : 'border-cyan-500/20 hover:border-cyan-500/40'
                  <div className="flex justify-center mb-4"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"></span>
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular;
                )}
                
                <div className="text-center mb-6"></div>
                  <div, className="tex, t-4xl, mb-4">{produc, t.ico, n}</di, v>
                  <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{produc, t.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4">{produc, t.descriptio, n}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400"></div>
                    <spa, n>{produc, t.user, s}</spa, n>
                  <div, className="tex, t-3xl, font-bold, text-cya, n-400, mt-4">{produc, t.pric, e}</di, v>
                
                <ul className="space-y-3 mb-8"></ul>
                    <li, key={inde, x} classNam, e="flex, items-star, t"></l, i>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span, className="tex, t-gra, y-30, 0">{featur, e}</spa, n>
                  ))}
                
                <div className="flex space-x-3"></div>
                  <Link;
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                    Get Started;
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"></button>
                    Learn More;
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our micro SaaS products are designed for quick deployment, easy integration, and immediate value.
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Zap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our streamlined onboarding process.</p>
            
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Shield className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <Cloud className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">Grow with confidence - our solutions scale with your business needs.</p>

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Ready to Get Started?
            <p className="text-xl text-gray-300 mb-8"></p>
              Choose from our collection of micro SaaS solutions or contact us for a custom solution tailored to your needs.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <Link;
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
  );

export default MicroSaasPage;