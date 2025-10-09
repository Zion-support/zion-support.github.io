'use client';
import React from 'react';
import { Brain, Zap, Target, Shield, BarChart, Users, Globe, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing'],
      price: 'Starting at $2,500/month',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-powered targeting, content generation, and optimization.',
      features: ['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1,200/month',
      color: 'text-pink-400'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate complex business processes with AI decision-making and exception handling.',
      features: ['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring'],
      price: 'Starting at $800/month',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and response using AI-powered security monitoring.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
      price: 'Starting at $1,500/month',
      color: 'text-red-400'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      features: ['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports'],
      price: 'Starting at $900/month',
      color: 'text-teal-400'
    },
    {
      icon: Users,
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with AI chatbots, sentiment analysis, and personalized experiences.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '24/7 Support'],
      price: 'Starting at $600/month',
      color: 'text-green-400'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months of implementation'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in 2-4 weeks'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Services & Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
