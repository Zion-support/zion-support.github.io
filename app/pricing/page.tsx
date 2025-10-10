'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { CheckCircle Star ArrowRight Phone Mail } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle ArrowRight Star Zap Shield Brain } from "lucide-react";
const PricingPage: React.FC = () => {
  const pricingPlans = [
      name: 'Starter',
      price: '$1 500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 AI models',
        'Email support',
        'Monthly reporting',
        'Basic analytics dashboard',
        'Standard security features'
        'Basic AI integration',
        'Email support',
        'Standard analytics',
        'Up to 5 users',
        'Basic automation'
      ],
      popular: false,
      cta: 'Get Started'
      name: 'Professional',
      price: '$3 999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI consultation',
        'Up to 20 AI models',
        'Priority support',
        'Weekly reporting',
        'Advanced analytics dashboard',
        'Enhanced security features',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Get Started'
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited AI consultation',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Real-time reporting',
        'Custom analytics dashboard',
        'Enterprise security features',
        'Custom integrations',
        'Dedicated team',
        'SLA guarantee',
        'On-site support'
        'Custom AI solutions',
        '24/7 dedicated support',
        'Custom analytics',
        'Unlimited users',
        'White-label options',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false,
      cta: 'Contact Sales'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, cost, enterprise" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />

      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Simple, Transparent</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Pricing;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.

      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div;
                ke, y={inde, x}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'border-2 border-cyan-500' : 'border border-cyan-500/20'
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"></div>
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular;
                )}

                <div className="text-center mb-8"></div>
                  <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>
                  <p, className="tex, t-gra, y-300, mb-4">{pla, n.descriptio, n}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span, className="tex, t-4xl, font-bold, text-whit, e">{pla, n.pric, e}</spa, n>
                    <span, className="tex, t-gra, y-400, ml-2">{pla, n.perio, d}</spa, n>

                <ul className="space-y-4 mb-8"></ul>
                    <li, key={featureInde, x} classNam, e="flex, items-star, t"></l, i>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span, className="tex, t-gra, y-30, 0">{featur, e}</spa, n>
                  ))}

                <div className="text-center"></div>
                    <Link;
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                      <Phone className="w-5 h-5" />
                      <span>Contact Sales</span>
                  ) : (
                    <Link;
                      to="/contact"
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        plan.popular;
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                          : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                      <spa, n>{pla, n.ct, a}</spa, n>
                      <ArrowRight className="w-5 h-5" />
                  )}
            ))}

      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="max-w-4xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6"></div>
            <div className="bg-slate-800/50 rounded-lg p-6"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            <div className="bg-slate-800/50 rounded-lg p-6"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all our plans. No credit card required to get started.</p>
            <div className="bg-slate-800/50 rounded-lg p-6"></div>
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
            <div className="bg-slate-800/50 rounded-lg p-6"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>

      <section className="py-16 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Contact our team to discuss your specific needs and find the perfect solution for your business.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            <Link;
              to="/contact"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              <Phone className="w-5 h-5" />
              <span>Free Consultation</span>
  const addOnServices = [
      name: 'AI Consulting',
      price: '$299/hour',
      description: 'Expert guidance on AI strategy and implementation'
      name: 'Cloud Migration',
      price: '$5 000/project',
      description: 'Seamless migration to cloud infrastructure'
      name: 'Security Audit',
      price: '$2 500/audit',
      description: 'Comprehensive security assessment and recommendations'
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Bespoke software development and integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs. Starting at $1 500/month." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services cost, enterprise pricing, custom solutions" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Transparent Pricing</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions;
              with no hidden fees.

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e={`b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, relative ${pla, n.popula, r ? 'rin, g-2, ring-blu, e-500, scale-10, 5' : ''}`}></di, v>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"></div>
                      Most Popular;
                  )}
                  <div className="text-center mb-8"></div>
                    <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>
                    <p, className="tex, t-gra, y-300, mb-6">{pla, n.descriptio, n}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span, className="tex, t-4xl, font-bold, text-whit, e">{pla, n.pric, e}</spa, n>
                      <span, className="tex, t-gra, y-400, ml-2">{pla, n.perio, d}</spa, n>
                  <ul className="space-y-4 mb-8"></ul>
                      <li, key={featureInde, x} classNam, e="flex, items-cente, r"></l, i>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span, className="tex, t-gra, y-30, 0">{featur, e}</spa, n>
                    ))}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Additional Services;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Enhance your solution with our specialized add-on services;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-6, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
                  <h3, className="tex, t-xl, font-bold, text-white, mb-3">{servic, e.nam, e}</h, 3>
                  <div, className="tex, t-2xl, font-bold, text-blu, e-400, mb-4">{servic, e.pric, e}</di, v>
                  <p, className="tex, t-gra, y-300, text-s, m">{servic, e.descriptio, n}</p>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Frequently Asked Questions;
            <div className="space-y-8"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan later?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-300">Absolutely! Our Enterprise plan includes custom solutions tailored to your specific business needs. Contact us to discuss your requirements.</p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs based on requirements.</p>

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Get Started?
              <p className="text-xl text-gray-300 mb-8"></p>
                Contact our team to discuss your needs and find the perfect solution for your business.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Get Free Consultation;
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  View Case Studies;
      <Footer />
  );

export default PricingPage;