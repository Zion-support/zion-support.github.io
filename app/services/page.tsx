'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Search,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring', '24/7 Support'],
      price: 'Starting at $800/month',
      category: 'IT Services',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audit', 'Threat Detection', 'Incident Response', 'Compliance'],
      price: 'Starting at $1,200/month',
      category: 'IT Services',
      popular: true
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Integration'],
      price: 'Starting at $2,000/month',
      category: 'Development',
      popular: false
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $1,000/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance to help you navigate the digital transformation journey.',
      features: ['Strategy Planning', 'Technology Assessment', 'Implementation', 'Training'],
      price: 'Starting at $500/hour',
      category: 'Consulting',
      popular: false
    }
  ];

  const categories = ['All', 'AI Services', 'IT Services', 'Development', 'Analytics', 'Consulting'];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI solutions and IT services. From AI automation to cloud computing and cybersecurity." />
        <meta name="keywords" content="AI services, IT solutions, cloud computing, cybersecurity, custom development, data analytics, consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.popular && (
                        <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-400">{service.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss your project and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get a Quote
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;