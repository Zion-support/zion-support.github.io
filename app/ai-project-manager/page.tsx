'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Calendar Users CheckSquare BarChart3 Clock Target Zap ArrowRight Star Shield Globe Smartphone } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManagerPage: React.FC = () => {
  const features = [
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered project scheduling with automatic resource allocation and deadline optimization',
      benefits: ['Automatic task prioritization', 'Resource conflict detection', 'Deadline optimization', 'Team availability tracking']
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-driven communication and workflow management',
      benefits: ['Smart notifications', 'Automated standups', 'Progress tracking', 'Team performance insights']
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict project outcomes and identify potential risks',
      benefits: ['Risk prediction', 'Budget forecasting', 'Timeline estimation', 'Performance metrics']
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and streamline project workflows',
      benefits: ['Task automation', 'Report generation', 'Status updates', 'Integration management']
  ];

  const pricingPlans = [
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI insights',
        'Email support',
        'Mobile app access'
      ],
      popular: false;
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams and medium projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true;
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom training'
      ],
      popular: false;
  ];

  const testimonials = [
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI insights help us stay on track and deliver 40% faster.',
      rating: 5;
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The predictive analytics feature is a game-changer. We can now anticipate issues before they become problems.',
      rating: 5;
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'Our team productivity increased by 60% since implementing AI Project Manager. The automation features save us hours every week.',
      rating: 5;
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>AI Project Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management tool with smart scheduling, team collaboration, and predictive analytics. Start your free trial today." />
        <meta name="keywords" content="AI project management, project management software, team collaboration, project analytics, task automation" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Project Management;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              AI Project Manager</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your project management with AI-powered insights, smart scheduling, and predictive analytics. 
              Deliver projects 40% faster with intelligent automation and team collaboration tools.
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Watch Demo;
            <div className="text-sm text-gray-400"></div>
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Powerful AI Features;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leverage artificial intelligence to optimize your project management workflow and achieve better results.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
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
                Simple, Transparent Pricing;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your team size and project needs. All plans include our core AI features.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e={`b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, relative ${pla, n.popula, r ? 'rin, g-2, ring-cya, n-50, 0' : ''}`}></di, v>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"></div>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                What Our Customers Say;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Join thousands of teams who have transformed their project management with AI.
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
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Project Management?
              <p className="text-xl text-gray-300 mb-8"></p>
                Start your free trial today and experience the power of AI-driven project management.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  Schedule Demo;
              <div className="mt-6 text-sm text-gray-400"></div>
                Questions? Call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
      
      <Footer />
  );

export default AIProjectManagerPage;