'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Server, Shield, Cloud, Database, Network, Code, Monitor, 
  Smartphone, Wrench, BarChart3, Eye, CheckCircle, ArrowRight,
  Sparkles, Layers, Award, Lightbulb, CircuitBoard, Atom, 
  Satellite, Zap, Target, Users, DollarSign, Phone, Mail, 
  MapPin, Calendar, Timer, Globe, TrendingUp, Star, Rocket
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      price: 'Starting at $2,999',
      features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Mobile-first approach'],
      link: '/web-development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      price: 'Starting at $4,999',
      features: ['Native performance', 'Cross-platform', 'App store optimization', 'Push notifications'],
      link: '/mobile-development'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud.',
      price: 'Starting at $1,999',
      features: ['Auto-scaling', 'High availability', 'Cost optimization', 'Security compliance'],
      link: '/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets.',
      price: 'Starting at $3,999',
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Compliance'],
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      price: 'Starting at $1,499',
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      link: '/database-management'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Robust network solutions for enterprise connectivity and security.',
      price: 'Starting at $2,499',
      features: ['Network design', 'Security implementation', 'Performance monitoring', '24/7 support'],
      link: '/network-infrastructure'
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code.',
      price: 'Starting at $2,999',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing'],
      link: '/devops-cicd'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights.',
      price: 'Starting at $3,499',
      features: ['Data visualization', 'Real-time dashboards', 'Predictive analytics', 'Custom reports'],
      link: '/data-analytics-bi'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design the optimal solution architecture for your needs.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using best practices.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, cloud infrastructure, cybersecurity, and more. Expert solutions for your business." />
        <meta name="keywords" content="IT services, web development, mobile development, cloud infrastructure, cybersecurity, DevOps, database management" />
      </Helmet>

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {' '}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive IT solutions. From web development 
              to cloud infrastructure, we deliver cutting-edge technology that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Free Consultation</span>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;