'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Wrench BarChart3 AlertTriangle Zap ArrowRight Star CheckSquare Shield Smartphone Users Target Settings } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
      icon: Wrench,
      title: 'Failure Prediction',
      description: 'Predict equipment failures before they happen with 95% accuracy using machine learning algorithms',
      benefits: ['95% prediction accuracy', 'Real-time monitoring', 'Failure pattern recognition', 'Risk assessment']
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard with insights into equipment performance and optimization opportunities',
      benefits: ['Performance metrics', 'Trend analysis', 'Efficiency optimization', 'Cost tracking']
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Intelligent alert system that prioritizes maintenance tasks based on urgency and impact',
      benefits: ['Priority-based alerts', 'Custom thresholds', 'Multi-channel notifications', 'Escalation management']
      icon: Zap,
      title: 'Automated Scheduling',
      description: 'AI-powered maintenance scheduling that optimizes resources and minimizes downtime',
      benefits: ['Resource optimization', 'Downtime minimization', 'Workforce planning', 'Inventory management']
  ];

  const industries = [
      title: 'Manufacturing',
      description: 'Optimize production lines and reduce unplanned downtime',
      icon: Settings,
      benefits: ['Reduce downtime by 40%', 'Increase productivity by 25%', 'Lower maintenance costs by 30%', 'Improve safety by 60%']
      title: 'Energy & Utilities',
      description: 'Monitor power plants and grid infrastructure for optimal performance',
      icon: Zap,
      benefits: ['Prevent power outages', 'Optimize energy production', 'Reduce maintenance costs', 'Ensure grid stability']
      title: 'Transportation',
      description: 'Maintain fleets and infrastructure with predictive insights',
      icon: Target,
      benefits: ['Reduce vehicle breakdowns', 'Optimize routes', 'Lower fuel costs', 'Improve safety']
      title: 'Healthcare',
      description: 'Ensure medical equipment reliability and patient safety',
      icon: Users,
      benefits: ['Prevent equipment failures', 'Ensure patient safety', 'Reduce maintenance costs', 'Improve efficiency']
  ];

  const pricingPlans = [
      name: 'Starter',
      price: '$599',
      period: '/month',
      description: 'Perfect for small facilities and equipment',
      features: [
        'Up to 50 assets',
        'Basic analytics',
        'Email alerts',
        'Standard support',
        'Mobile app access'
      ],
      popular: false;
      name: 'Professional',
      price: '$1 299',
      period: '/month',
      description: 'Ideal for medium-sized operations',
      features: [
        'Up to 500 assets',
        'Advanced analytics',
        'Multi-channel alerts',
        'Priority support',
        'API access',
        'Custom dashboards'
      ],
      popular: true;
      name: 'Enterprise',
      price: '$2 999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited assets',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Advanced integrations'
      ],
      popular: false;
  ];

  const testimonials = [
      name: 'James Mitchell',
      role: 'Plant Manager',
      company: 'Industrial Manufacturing Co.',
      content: 'We reduced unplanned downtime by 45% and saved $2M annually. The AI predictions are incredibly accurate.',
      rating: 5;
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'PowerGrid Solutions',
      content: 'Our power plant efficiency increased by 20% while reducing maintenance costs by 35%. Game-changing technology.',
      rating: 5;
      name: 'Michael Rodriguez',
      role: 'Fleet Manager',
      company: 'Global Logistics',
      content: 'Vehicle breakdowns decreased by 60% and our maintenance costs dropped by 40%. The ROI was immediate.',
      rating: 5;
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>AI Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Prevent equipment failures with AI-powered predictive maintenance. 95% accuracy, reduce downtime by 40%, and save millions in maintenance costs." />
        <meta name="keywords" content="AI predictive maintenance, equipment monitoring, failure prediction, maintenance optimization, IoT analytics" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Wrench className="w-4 h-4 mr-2" />
              AI-Powered Predictive Maintenance;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              AI Predictive Maintenance</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Prevent equipment failures before they happen with AI-powered predictive maintenance. 
              Achieve 95% accuracy, reduce downtime by 40%, and save millions in maintenance costs.
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Watch Demo;
            <div className="text-sm text-gray-400"></div>
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Advanced AI Features;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leverage machine learning and IoT data to predict and prevent equipment failures.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
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
                Industry Applications;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Deploy predictive maintenance across various industries with proven results.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <industry.icon className="w-8 h-8 text-white" />
                  <h3, className="tex, t-xl, font-bold, text-white, mb-4">{industr, y.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-6">{industr, y.descriptio, n}</p>
                  <ul className="space-y-2"></ul>
                      <li, key={id, x} classNam, e="flex, items-center, text-sm, text-gra, y-40, 0"></l, i>
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                    ))}
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Simple, Transparent Pricing;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your maintenance needs. All plans include our core AI features.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e={`b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, relative ${pla, n.popula, r ? 'rin, g-2, ring-orang, e-50, 0' : ''}`}></di, v>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium"></div>
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
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform hover:scale-105' 
                      : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                What Our Customers Say;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Join thousands of organizations who have transformed their maintenance operations with AI.
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
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Maintenance?
              <p className="text-xl text-gray-300 mb-8"></p>
                Start your free trial today and experience the power of AI-driven predictive maintenance.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Schedule Demo;
              <div className="mt-6 text-sm text-gray-400"></div>
                Questions? Call us at <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300">kleber@ziontechgroup.com</a>
      
      <Footer />
  );

export default AIPredictiveMaintenancePage;