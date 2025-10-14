import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import {
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LockClosedIcon,
  CogIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $2,500/month',
      category: 'AI Services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, cloud solutions, and digital transformation services.',
      href: '/it-services',
      icon: ServerIcon,
      features: ['Infrastructure Management', 'Cloud Migration', 'System Integration', 'Technical Support'],
      pricing: 'Starting at $1,500/month',
      category: 'IT Services'
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Custom micro software-as-a-service solutions tailored to your business needs.',
      href: '/micro-saas-solutions',
      icon: CodeBracketIcon,
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance & Support'],
      pricing: 'Starting at $3,000/month',
      category: 'Micro SAAS'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      href: '/cybersecurity',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: 'Starting at $2,000/month',
      category: 'Security'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with 99.9% uptime guarantee.',
      href: '/cloud-infrastructure',
      icon: CloudIcon,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      pricing: 'Starting at $1,200/month',
      category: 'Cloud Services'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      href: '/data-analytics',
      icon: ChartBarIcon,
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      pricing: 'Starting at $1,800/month',
      category: 'Analytics'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      href: '/web-development',
      icon: GlobeAltIcon,
      features: ['Responsive Design', 'Performance Optimization', 'SEO Optimization', 'Mobile-First Approach'],
      pricing: 'Starting at $2,200/month',
      category: 'Development'
    },
    {
      title: 'API Development',
      description: 'Robust and scalable API solutions for seamless system integration.',
      href: '/api-development',
      icon: CogIcon,
      features: ['RESTful APIs', 'GraphQL', 'API Documentation', 'Rate Limiting'],
      pricing: 'Starting at $1,600/month',
      category: 'Development'
    },
    {
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes with our DevOps expertise.',
      href: '/devops-services',
      icon: BriefcaseIcon,
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging', 'Infrastructure Automation'],
      pricing: 'Starting at $2,800/month',
      category: 'DevOps'
    }
  ];

  const categories = ['All', 'AI Services', 'IT Services', 'Micro SAAS', 'Security', 'Cloud Services', 'Analytics', 'Development', 'DevOps'];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, micro SAAS development, cybersecurity, cloud infrastructure, and data analytics. Starting from $1,200/month." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cybersecurity, cloud infrastructure, data analytics, web development, API development, DevOps" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services including AI solutions, IT services, micro SAAS development, cybersecurity, cloud infrastructure, and data analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to robust IT infrastructure, we provide end-to-end technology services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Flexible pricing options available</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={service.href} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest technologies and industry best practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Security</h3>
              <p className="text-gray-300">
                Enterprise-grade security measures to protect your data and infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300">
                We deliver quantifiable improvements in performance, efficiency, and ROI
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock technical support to ensure your systems run smoothly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored solutions designed specifically for your business requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-gray-300">
                Deep understanding of various industries and their unique challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;