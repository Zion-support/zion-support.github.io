import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: ChartBarIcon,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reports'],
      pricing: 'Starting at $2,500/month',
      category: 'AI Solutions',
      popular: true
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      icon: CloudIcon,
      features: ['Cost Optimization', 'Auto-scaling', 'Security Hardening', 'Performance Monitoring'],
      pricing: 'Starting at $1,200/month',
      category: 'Cloud Solutions'
    },
    {
      title: 'Cybersecurity Defense Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
      pricing: 'Starting at $2,000/month',
      category: 'Security'
    },
    {
      title: 'Micro SAAS Development Platform',
      description: 'Build and deploy custom micro SAAS applications tailored to your business needs.',
      icon: CodeBracketIcon,
      features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'Custom Features'],
      pricing: 'Starting at $3,000/month',
      category: 'Micro SAAS'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management with 24/7 monitoring and support.',
      icon: ServerIcon,
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Disaster Recovery'],
      pricing: 'Starting at $1,500/month',
      category: 'IT Services'
    },
    {
      title: 'Digital Transformation Suite',
      description: 'Comprehensive digital transformation solutions to modernize your business operations.',
      icon: GlobeAltIcon,
      features: ['Process Automation', 'System Integration', 'Workflow Optimization', 'Change Management'],
      pricing: 'Starting at $2,800/month',
      category: 'Digital Transformation'
    }
  ];

  const categories = ['All', 'AI Solutions', 'Cloud Solutions', 'Security', 'Micro SAAS', 'IT Services', 'Digital Transformation'];

  const benefits = [
    {
      title: 'Proven Results',
      description: '500+ successful projects with measurable business impact',
      icon: StarIcon
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience',
      icon: UserGroupIcon
    },
    {
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 40% through optimization',
      icon: CurrencyDollarIcon
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems run smoothly',
      icon: ClockIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive technology solutions including AI, cloud infrastructure, cybersecurity, micro SAAS, and digital transformation services." />
        <meta name="keywords" content="technology solutions, AI solutions, cloud solutions, cybersecurity, micro SAAS, digital transformation" />
        <meta property="og:title" content="Solutions - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive technology solutions including AI, cloud infrastructure, cybersecurity, micro SAAS, and digital transformation services." />
        <meta property="og:url" content="https://ziontechgroup.com/solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business and drive growth. 
            From AI-powered insights to cloud infrastructure, we provide end-to-end solutions.
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
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Solutions Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven solutions that deliver measurable results and business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solution Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to address your specific business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                solution.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {solution.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{solution.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, training & support</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;