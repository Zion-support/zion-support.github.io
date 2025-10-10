'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Users, Target, Clock, Award, TrendingUp, BarChart, Cpu, Database, Cloud, Code, Settings, Monitor, Lock, Workflow, MessageCircle, FileText, DollarSign, Star, CheckSquare, Calendar, Headphones, MessageSquare, Eye, Mic, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box } from 'lucide-react';

const ConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      icon: Brain,
      title: 'AI Strategy Consulting',
      description: 'Develop comprehensive AI strategies aligned with your business objectives',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning'],
      price: '$2,500/day',
      duration: '2-4 weeks'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Consulting',
      description: 'Expert guidance for seamless cloud migration and optimization',
      features: ['Migration planning', 'Cost optimization', 'Security assessment', 'Performance tuning'],
      price: '$3,000/day',
      duration: '3-6 weeks'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment and strategy development',
      features: ['Security audit', 'Compliance review', 'Risk assessment', 'Incident response planning'],
      price: '$2,800/day',
      duration: '2-5 weeks'
    },
    {
      icon: Database,
      title: 'Data Strategy Consulting',
      description: 'Transform your data into actionable business insights',
      features: ['Data architecture design', 'Analytics strategy', 'Governance framework', 'Quality assessment'],
      price: '$2,200/day',
      duration: '2-4 weeks'
    },
    {
      icon: Workflow,
      title: 'Process Optimization',
      description: 'Streamline operations with intelligent automation and workflow design',
      features: ['Process mapping', 'Automation opportunities', 'Efficiency analysis', 'Implementation support'],
      price: '$1,800/day',
      duration: '1-3 weeks'
    },
    {
      icon: Code,
      title: 'Technology Architecture',
      description: 'Design scalable and maintainable technology solutions',
      features: ['System architecture', 'Technology selection', 'Integration planning', 'Scalability design'],
      price: '$2,500/day',
      duration: '2-5 weeks'
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Proven methodologies and best practices',
    'Customized solutions for your industry',
    'Measurable ROI and business impact',
    'Ongoing support and implementation',
    'Comprehensive documentation and training',
    'Risk mitigation and compliance assurance',
    'Scalable and future-proof solutions'
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Industrial',
    'Retail & E-commerce',
    'Education & Training',
    'Government & Public Sector',
    'Technology & Software',
    'Energy & Utilities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consulting Services | Zion Tech Group</title>
        <meta name="description" content="Expert consulting services for AI, cloud migration, cybersecurity, and digital transformation. Get strategic guidance from certified professionals." />
        <meta name="keywords" content="consulting, AI strategy, cloud migration, cybersecurity, digital transformation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Expert Consulting
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with strategic guidance from our certified professionals. 
              We provide expert consulting across AI, cloud, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group">
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-300">Strategic guidance across all technology domains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Consulting?</h2>
            <p className="text-xl text-gray-300">Proven expertise and measurable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300">Specialized expertise across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-white font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Get expert guidance and strategic insights to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;