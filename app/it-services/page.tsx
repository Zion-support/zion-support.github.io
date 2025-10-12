'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, Shield, Code, Smartphone, Database, Server, CheckCircle, ArrowRight, 
  Zap, Users, Award, BarChart, Settings, Globe, Lock, Cpu, Workflow, 
  Target, TrendingUp, Heart, DollarSign, Package, Monitor, Wifi, 
  MessageCircle, FileText, Calendar, Clock, Star, Sparkles
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design, implement, and manage scalable cloud solutions for your business.',
      price: 'Starting at $4,999/month',
      features: ['AWS/Azure/GCP setup', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      color: 'from-blue-500 to-cyan-500',
      category: 'Infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Incident response'],
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      price: 'Starting at $8,999/project',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      price: 'Starting at $12,999/project',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize, secure, and maintain your database infrastructure for peak performance.',
      price: 'Starting at $2,999/month',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services'],
      color: 'from-indigo-500 to-purple-500',
      category: 'Infrastructure'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      price: 'Starting at $5,999/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring & alerting'],
      color: 'from-orange-500 to-red-500',
      category: 'Operations'
    },
    {
      icon: Users,
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services for your organization.',
      price: 'Starting at $1,999/month',
      features: ['24/7 support', 'Remote assistance', 'Hardware management', 'Software licensing'],
      color: 'from-teal-500 to-cyan-500',
      category: 'Support'
    },
    {
      icon: BarChart,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      price: 'Starting at $3,499/month',
      features: ['Data visualization', 'Business intelligence', 'Real-time dashboards', 'Custom reports'],
      color: 'from-yellow-500 to-orange-500',
      category: 'Analytics'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Improved Efficiency',
      description: 'Streamline operations and boost productivity with optimized IT infrastructure.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with comprehensive cybersecurity solutions and best practices.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow your business with IT solutions that scale with your needs and goals.'
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Reduce IT costs while improving performance and reliability.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze your current IT infrastructure and identify improvement opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive IT strategy aligned with your business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing support, monitoring, and optimization services.'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Operations', 'Support', 'Analytics'];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Transform your IT infrastructure with our comprehensive services including cloud solutions, cybersecurity, web development, and DevOps. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, IT support, data analytics" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions to modernize your infrastructure and drive business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  That Scale
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Modernize your IT infrastructure with our comprehensive services including cloud solutions, 
                cybersecurity, development, and ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category.toLowerCase())}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === category.toLowerCase()
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices
                .filter(service => activeTab === 'all' || service.category.toLowerCase() === activeTab)
                .map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xs text-purple-400 font-medium mb-2">{service.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions deliver measurable results and transform how you do business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful IT implementation and maximum ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your IT needs and discover how our solutions can drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your IT Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;