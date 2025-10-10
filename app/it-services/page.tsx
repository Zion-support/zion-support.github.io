'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Database, Smartphone, Globe, Settings, Monitor, ArrowRight, CheckCircle, Star, Clock, Zap, Users, Target, Sparkles } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including migration, optimization, and management.',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Auto-scaling Solutions', 'Cost Optimization'],
      pricing: 'Starting at $3,500/month',
      href: '/ai-cloud-infrastructure',
      benefits: ['99.9% uptime', '50% cost reduction', 'Scalable infrastructure', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Auditing', 'Incident Response'],
      pricing: 'Starting at $2,800/month',
      href: '/ai-cybersecurity-suite',
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Compliance assurance']
    },
    {
      icon: Code,
      title: 'API Management & Development',
      description: 'Comprehensive API solutions for seamless integration and management.',
      features: ['API Design & Development', 'API Gateway Management', 'Documentation', 'Monitoring & Analytics'],
      pricing: 'Starting at $2,200/month',
      href: '/ai-api-management',
      benefits: ['Faster integration', 'Better performance', 'Enhanced security', 'Developer experience']
    },
    {
      icon: Database,
      title: 'Data Management & Analytics',
      description: 'Complete data solutions including storage, processing, and analytics.',
      features: ['Database Design', 'Data Migration', 'ETL Processes', 'Data Warehousing'],
      pricing: 'Starting at $2,500/month',
      href: '/ai-data-analytics',
      benefits: ['Improved data quality', 'Faster queries', 'Better insights', 'Cost optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      pricing: 'Starting at $4,000/month',
      href: '/mobile-development',
      benefits: ['Native performance', 'Cross-platform compatibility', 'Modern UI/UX', 'App store success']
    },
    {
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern web applications and e-commerce solutions for digital success.',
      features: ['Responsive Design', 'E-commerce Platforms', 'CMS Development', 'SEO Optimization'],
      pricing: 'Starting at $2,800/month',
      href: '/web-development',
      benefits: ['Mobile-first design', 'Fast loading times', 'SEO optimized', 'Conversion focused']
    },
    {
      icon: Monitor,
      title: 'Infrastructure Monitoring',
      description: '24/7 monitoring and management of your IT infrastructure.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning'],
      pricing: 'Starting at $1,500/month',
      href: '/ai-infrastructure-monitoring',
      benefits: ['Proactive monitoring', 'Faster issue resolution', 'Better performance', 'Reduced downtime']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Automated Testing'],
      pricing: 'Starting at $3,200/month',
      href: '/devops',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Scalable processes']
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services cloud platform' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure cloud solutions' },
    { name: 'Docker', icon: Code, description: 'Containerization platform' },
    { name: 'Kubernetes', icon: Settings, description: 'Container orchestration' },
    { name: 'React', icon: Globe, description: 'Modern web development' },
    { name: 'Node.js', icon: Code, description: 'Server-side JavaScript' }
  ];

  const stats = [
    { number: '200+', label: 'IT Projects Completed' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '50%', label: 'Cost Reduction Average' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Enterprise IT Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                IT Services
              </span>
              <br />
              <span className="text-3xl md:text-5xl">That Scale Your Business</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions including cloud infrastructure, cybersecurity, development, 
              and managed services. We help businesses modernize their technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to modernize your infrastructure and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-blue-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-blue-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, training & support</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to deliver robust solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can transform your business operations. 
            Get a free IT assessment and custom technology roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;