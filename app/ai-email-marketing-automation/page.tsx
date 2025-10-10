'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Mail BarChart3 Users Zap Target ArrowRight Star CheckSquare Globe Smartphone Heart TrendingUp } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
      icon: Mail,
      title: 'AI Email Generation',
      description: 'Create compelling email campaigns with AI-powered content generation and personalization',
      benefits: ['Subject line optimization', 'Content personalization', 'A/B testing automation', 'Send time optimization']
      icon: Users,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns',
      benefits: ['Behavioral segmentation', 'Demographic targeting', 'Engagement scoring', 'Dynamic lists']
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with AI-driven insights and predictive analytics for better ROI',
      benefits: ['Open rate prediction', 'Click-through optimization', 'Revenue attribution', 'Performance forecasting']
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Create complex email workflows with triggers, conditions, and automated follow-ups',
      benefits: ['Trigger-based campaigns', 'Drip sequences', 'Abandoned cart recovery', 'Welcome series']
  ];

  const automationWorkflows = [
      name: 'Welcome Series',
      description: 'Automatically onboard new subscribers with a personalized email sequence',
      emails: 5,
      openRate: '68%',
      clickRate: '24%'
      name: 'Abandoned Cart',
      description: 'Recover lost sales with intelligent cart abandonment email campaigns',
      emails: 3,
      openRate: '45%',
      clickRate: '18%'
      name: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted re-engagement campaigns',
      emails: 4,
      openRate: '52%',
      clickRate: '15%'
      name: 'Birthday Campaigns',
      description: 'Send personalized birthday offers and special promotions automatically',
      emails: 2,
      openRate: '78%',
      clickRate: '32%'
  ];

  const pricingPlans = [
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 000 contacts',
        'Unlimited emails',
        'Basic automation',
        'Email templates',
        'Email support'
      ],
      popular: false;
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 000 contacts',
        'Advanced automation',
        'AI content generation',
        'A/B testing',
        'Priority support',
        'API access'
      ],
      popular: true;
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced reporting',
        'Custom integrations'
      ],
      popular: false;
  ];

  const testimonials = [
      name: 'Sarah Thompson',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'Our email open rates increased by 85% since implementing AI Email Marketing Automation. The AI content generation is incredible.',
      rating: 5;
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'TechStartup',
      content: 'The automation workflows have saved us 20+ hours per week. Our revenue from email marketing increased by 300%.',
      rating: 5;
      name: 'Emily Chen',
      role: 'Digital Marketing Director',
      company: 'Global Brands',
      content: 'The AI segmentation and personalization features are game-changers. Our customers love the personalized experience.',
      rating: 5;
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation with content generation, smart segmentation, and advanced analytics. Boost ROI by 300%." />
        <meta name="keywords" content="AI email marketing, email automation, email marketing software, email campaigns, marketing automation" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Mail className="w-4 h-4 mr-2" />
              AI-Powered Email Marketing;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              AI Email Marketing Automation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your email marketing with AI-powered content generation, smart segmentation, and advanced automation. 
              Boost open rates by 85% and increase revenue by 300%.
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Watch Demo;
            <div className="text-sm text-gray-400"></div>
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Powerful AI Features;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leverage artificial intelligence to create, send, and optimize your email marketing campaigns automatically.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3, className="tex, t-xl, font-bold, text-white, mb-4">{featur, e.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-6">{featur, e.descriptio, n}</p>
                  <ul className="space-y-2"></ul>
                      <li, key={id, x} classNam, e="flex, items-center, text-sm, text-gra, y-40, 0"></l, i>
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                    ))}
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Pre-Built Automation Workflows;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Get started quickly with our proven automation workflows that deliver results.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="flex items-center justify-between mb-4"></div>
                    <h3, className="tex, t-xl, font-bold, text-whit, e">{workflo, w.nam, e}</h, 3>
                    <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"></div>
                  <p, className="tex, t-gra, y-300, mb-6">{workflo, w.descriptio, n}</p>
                  <div className="grid grid-cols-2 gap-4"></div>
                    <div className="text-center"></div>
                      <div, className="tex, t-2xl, font-bold, text-gree, n-40, 0">{workflo, w.openRat, e}</di, v>
                      <div className="text-sm text-gray-400">Open Rate</div>
                    <div className="text-center"></div>
                      <div, className="tex, t-2xl, font-bold, text-blu, e-40, 0">{workflo, w.clickRat, e}</di, v>
                      <div className="text-sm text-gray-400">Click Rate</div>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Simple, Transparent Pricing;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your email marketing needs. All plans include our core AI features.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e={`b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, relative ${pla, n.popula, r ? 'rin, g-2, ring-purpl, e-50, 0' : ''}`}></di, v>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium"></div>
                      Most Popular;
                  )}
                  <div className="text-center mb-8"></div>
                    <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>
                    <p, className="tex, t-gra, y-300, mb-4">{pla, n.descriptio, n}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span, className="tex, t-4xl, font-bold, text-whit, e">{pla, n.pric, e}</spa, n>
                      <span, className="tex, t-gra, y-400, ml-2">{pla, n.perio, d}</spa, n>
                  <ul className="space-y-4 mb-8"></ul>
                      <li, key={id, x} classNam, e="flex, items-center, text-gra, y-30, 0"></l, i>
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3" />
                    ))}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105' 
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                What Our Customers Say;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Join thousands of businesses who have transformed their email marketing with AI.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8"></di, v>
                  <div className="flex items-center mb-4"></div>
                      <Star, key={i} classNam, e="w-5, h-5, text-yello, w-400, fill-curren, t" />
                    ))}
                  <p, className="tex, t-gra, y-300, mb-6, italic">"{testimonia, l.conten, t}"</p>
                  <div></div>
                    <div, className="fon, t-semibold, text-whit, e">{testimonia, l.nam, e}</di, v>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Email Marketing?
              <p className="text-xl text-gray-300 mb-8"></p>
                Start your free trial today and experience the power of AI-driven email marketing automation.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Schedule Demo;
              <div className="mt-6 text-sm text-gray-400"></div>
                Questions? Call us at <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a>
      
      <Footer />
  );

export default AIEmailMarketingAutomationPage;