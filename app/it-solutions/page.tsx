'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CodeBracketIcon, CloudIcon, ShieldCheckIcon, CogIcon, CircleStackIcon, DevicePhoneMobileIcon, GlobeAltIcon, CheckCircleIcon, ClockIcon, StarIcon, ArrowRightIcon, RocketLaunchIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      name: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies',
      icon: GlobeAltIcon,
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
      pricing: { basic: 199, pro: 399, enterprise: 799 },
      status: 'active',
      href: '/web-development'
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: DevicePhoneMobileIcon,
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
      pricing: { basic: 299, pro: 599, enterprise: 1199 },
      status: 'active',
      href: '/mobile-development'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: CloudIcon,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization'],
      pricing: { basic: 149, pro: 299, enterprise: 599 },
      status: 'active',
      href: '/cloud-infrastructure'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and management services',
      icon: CircleStackIcon,
      features: ['SQL/NoSQL', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security'],
      pricing: { basic: 99, pro: 199, enterprise: 399 },
      status: 'active',
      href: '/database-management'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      icon: CodeBracketIcon,
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Rate Limiting', 'Documentation'],
      pricing: { basic: 149, pro: 299, enterprise: 599 },
      status: 'active',
      href: '/api-development'
    },
    {
      name: 'DevOps Automation',
      description: 'CI/CD pipelines and infrastructure automation',
      icon: CogIcon,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Deployment Automation', 'Security Scanning'],
      pricing: { basic: 199, pro: 399, enterprise: 799 },
      status: 'active',
      href: '/devops-automation'
    }
  ];

  const solutionCategories = [
    {
      name: 'Development Services',
      icon: CodeBracketIcon,
      description: 'Custom software development and application building',
      gradient: 'from-blue-500 to-cyan-500',
      services: ['Web Development', 'Mobile Development', 'API Development', 'Custom Software']
    },
    {
      name: 'Infrastructure Services',
      icon: CloudIcon,
      description: 'Cloud infrastructure and system administration',
      gradient: 'from-green-500 to-emerald-500',
      services: ['Cloud Infrastructure', 'Database Management', 'Network Solutions', 'Server Management']
    },
    {
      name: 'Security Services',
      icon: ShieldCheckIcon,
      description: 'Cybersecurity and data protection solutions',
      gradient: 'from-red-500 to-pink-500',
      services: ['Security Audits', 'Threat Detection', 'Data Encryption', 'Compliance Management']
    },
    {
      name: 'Automation Services',
      icon: CogIcon,
      description: 'Process automation and workflow optimization',
      gradient: 'from-purple-500 to-indigo-500',
      services: ['DevOps Automation', 'Process Automation', 'Workflow Optimization', 'Integration Services']
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="IT Solutions - Enterprise IT Services | Zion Tech Group"
        description="Comprehensive IT solutions including web development, mobile development, cloud infrastructure, database management, and DevOps automation."
        keywords="IT solutions, web development, mobile development, cloud infrastructure, database management, DevOps automation"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="IT Solutions">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions for modern businesses. From web development to cloud infrastructure, 
              we provide the technology foundation your business needs to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-card px-6 py-3 text-cyan-400">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" />
                Full-Stack Development
              </div>
              <div className="glass-card px-6 py-3 text-green-400">
                <ClockIcon className="h-5 w-5 inline mr-2" />
                24/7 Support
              </div>
              <div className="glass-card px-6 py-3 text-purple-400">
                <StarIcon className="h-5 w-5 inline mr-2" />
                Enterprise Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT services designed to meet your business needs and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className={`glass-card p-8 card-hover transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4 icon-bounce">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-cyan-400">
                        <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                        <span className="text-2xl font-bold">${service.pricing.basic}</span>
                        <span className="text-sm ml-1">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Starting from</div>
                        <div className="text-xs text-gray-500">Basic Plan</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link 
                    to={service.href}
                    className="w-full btn-neon text-center py-3 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our IT solutions are organized into key categories to help you find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.name}
                  className={`glass-card p-8 text-center hover-lift transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.gradient} p-6 mx-auto mb-6 icon-bounce`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-sm text-gray-300">
                        • {service}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-6 icon-bounce">
                <CodeBracketIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team of experienced developers uses the latest technologies and best practices 
                to build robust, scalable solutions.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-4 mx-auto mb-6 icon-bounce">
                <CloudIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud-First Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                We design solutions with cloud scalability in mind, ensuring your applications 
                can grow with your business.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-6 icon-bounce">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Focused</h3>
              <p className="text-gray-400 leading-relaxed">
                Security is built into every solution we create, protecting your data and 
                ensuring compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us help you build the technology foundation your business needs to succeed. 
              Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                View Pricing
                <CurrencyDollarIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;
