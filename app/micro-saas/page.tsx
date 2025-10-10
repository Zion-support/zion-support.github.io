'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Users, Globe, Code, BarChart, Mail, Calendar, FileText, Target, Settings } from 'lucide-react';

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  category: string;
  popular: boolean;
}

const MicroSaasPage: React.FC = () => {
  const microSaasServices: MicroSaasService[] = [
    {
      id: '1',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI coding assistant with real-time suggestions, bug detection, and automated code generation for 50+ languages.',
      price: '$89/month',
      features: [
        'Real-time code suggestions',
        'Bug detection and fixes',
        '50+ programming languages',
        'Code documentation generation',
        'Team collaboration tools',
        'API integration support'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'text-cyan-400',
      category: 'Development',
      popular: true
    },
    {
      id: '2',
      name: 'AI Design Studio Pro',
      description: 'Professional design suite with AI-powered logo creation, brand identity, and marketing materials generation.',
      price: '$149/month',
      features: [
        'AI logo generation',
        'Brand identity creation',
        'Marketing materials',
        'Social media graphics',
        'Print design templates',
        'Team collaboration'
      ],
      icon: <Star className="w-8 h-8" />,
      color: 'text-pink-400',
      category: 'Design',
      popular: false
    },
    {
      id: '3',
      name: 'AI Sales Predictor',
      description: 'Predictive analytics for sales forecasting, lead scoring, and revenue optimization with 95% accuracy.',
      price: '$199/month',
      features: [
        'Sales forecasting',
        'Lead scoring',
        'Revenue optimization',
        'Customer behavior analysis',
        'Market trend insights',
        'ROI tracking'
      ],
      icon: <BarChart className="w-8 h-8" />,
      color: 'text-green-400',
      category: 'Sales',
      popular: true
    },
    {
      id: '4',
      name: 'AI Security Monitor',
      description: 'Real-time cybersecurity monitoring with AI threat detection, automated response, and compliance reporting.',
      price: '$299/month',
      features: [
        'Threat detection',
        'Automated response',
        'Compliance reporting',
        'Security analytics',
        'Incident management',
        '24/7 monitoring'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'text-red-400',
      category: 'Security',
      popular: false
    },
    {
      id: '5',
      name: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring system that increases conversion rates by 300% with AI insights.',
      price: '$129/month',
      features: [
        'Lead qualification',
        'Conversion optimization',
        'AI-powered insights',
        'CRM integration',
        'Automated follow-ups',
        'Performance analytics'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'text-blue-400',
      category: 'Marketing',
      popular: false
    },
    {
      id: '6',
      name: 'AI Financial Analyzer',
      description: 'Advanced financial analysis with AI-powered insights, risk assessment, and investment recommendations.',
      price: '$249/month',
      features: [
        'Financial analysis',
        'Risk assessment',
        'Investment recommendations',
        'Budget optimization',
        'Expense tracking',
        'Financial reporting'
      ],
      icon: <BarChart className="w-8 h-8" />,
      color: 'text-yellow-400',
      category: 'Finance',
      popular: false
    },
    {
      id: '7',
      name: 'AI Health Monitor',
      description: 'Personal health tracking with AI analysis, symptom monitoring, and predictive health insights.',
      price: '$79/month',
      features: [
        'Health tracking',
        'Symptom monitoring',
        'Predictive insights',
        'Wellness recommendations',
        'Medical record integration',
        'Emergency alerts'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-400',
      category: 'Health',
      popular: false
    },
    {
      id: '8',
      name: 'AI Learning Platform',
      description: 'Personalized learning experience with AI tutors, adaptive content, and progress tracking for any skill.',
      price: '$99/month',
      features: [
        'AI tutors',
        'Adaptive content',
        'Progress tracking',
        'Skill assessments',
        'Certification programs',
        'Community features'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'text-purple-400',
      category: 'Education',
      popular: false
    }
  ];

  const categories = Array.from(new Set(microSaasServices.map(service => service.category)));

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS solutions for modern businesses" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              50+ AI-powered micro SAAS solutions designed to solve specific business challenges. 
              Affordable, powerful, and ready to use in minutes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$15</div>
                <div className="text-gray-300">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">5min</div>
                <div className="text-gray-300">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold">
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-gray-800/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'border-2 border-cyan-400' : 'border border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
                    {service.category}
                  </span>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-2xl font-bold ${service.color}`}>
                      {service.price}
                    </div>
                    <Link
                      to={`/micro-saas/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with any of our micro SAAS solutions and see immediate results. 
              All plans include a 14-day free trial with no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;