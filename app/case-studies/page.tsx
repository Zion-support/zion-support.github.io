'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your data and operations.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with lightning-fast response times.',
      benefits: ['Fast loading', 'Quick responses', 'Efficient processing', 'Scalable architecture']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with customers and partners worldwide.',
      benefits: ['Multi-language support', 'Global deployment', '24/7 availability', 'Worldwide coverage']
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Optimization',
      company: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% boost in average order value',
        '50% reduction in cart abandonment'
      ],
      icon: TrendingUp
    },
    {
      title: 'Automated Financial Analysis',
      company: 'FinanceFlow Inc.',
      industry: 'Financial Services',
      challenge: 'Manual financial analysis was time-consuming and error-prone',
      solution: 'Deployed AI-powered financial analysis platform with automated reporting',
      results: [
        '80% reduction in analysis time',
        '95% accuracy in financial predictions',
        '70% cost savings on manual processes',
        '100% compliance with regulations'
      ],
      icon: BarChart
    },
    {
      title: 'Smart Manufacturing Optimization',
      company: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high operational costs',
      solution: 'Implemented AI-driven predictive maintenance and process optimization',
      results: [
        '25% increase in production efficiency',
        '30% reduction in maintenance costs',
        '45% decrease in downtime',
        '20% improvement in product quality'
      ],
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how our AI solutions have transformed businesses across various industries
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Success Stories
          </h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <study.icon className="w-12 h-12 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-lg text-purple-300 mb-1">{study.company}</p>
                    <p className="text-sm text-gray-400">{study.industry}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                    <p className="text-gray-300 mb-6">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that have already revolutionized their operations with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;