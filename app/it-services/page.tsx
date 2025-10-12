'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Smartphone, Database, Server, CheckCircle, ArrowRight, Zap, Users, Award } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, and Google Cloud expertise.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-migration'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,500',
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
    },
    {
      icon: Code,
      title: 'Web Development',
<<<<<<< HEAD
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Maintenance support',
        'Mobile optimization',
        'Cross-browser compatibility'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting',
        'Authentication',
        'Performance monitoring'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance',
      price: 'Starting at $2,500',
      features: [
        'Database design',
        'Performance optimization',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenance',
        'Hardware support',
        'Software updates',
        'User training'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);
=======
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
      price: 'Starting at $3,000',
      color: 'from-green-500 to-emerald-500',
      link: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      price: 'Starting at $4,000',
      color: 'from-purple-500 to-pink-500',
      link: '/mobile-development'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Custom Dashboards'],
      price: 'Starting at $2,000',
      color: 'from-indigo-500 to-purple-500',
      link: '/data-analytics'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and infrastructure management.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $1,800',
      color: 'from-yellow-500 to-orange-500',
      link: '/devops-cicd'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design scalable, secure solutions tailored to your business needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal downtime and maximum efficiency.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing ensures everything works perfectly before going live.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                IT Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive IT services to build, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build, secure, and optimize your technology infrastructure 
              for maximum performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
=======
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, web development, mobile apps, data analytics, and DevOps solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, web development, mobile development, data analytics, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation. 
                From cloud migration to custom development, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to modernize your infrastructure and accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your investment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional IT solutions through expertise, innovation, and unwavering commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fast implementation with minimal downtime. We get your solutions up and running quickly.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Certified professionals with years of experience in enterprise IT solutions and cloud technologies.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300 leading-relaxed">
                  Track record of successful projects with measurable business impact and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ItServicesPage;
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
