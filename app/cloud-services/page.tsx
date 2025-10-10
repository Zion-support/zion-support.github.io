'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  Award,
  Target,
  Globe,
  Database
} from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud infrastructure and migration services with 99.9% uptime guarantee, auto-scaling, and multi-cloud support.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud Strategy', 'Cost Optimization'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2,199/month',
      freeTrial: '30 days',
      rating: 4.8,
      reviews: 892,
      users: 'Unlimited resources'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection, compliance management, and 24/7 monitoring.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', '24/7 Monitoring', 'Incident Response'],
      price: 'Starting at $599/month',
      marketPrice: '$999/month',
      freeTrial: '14 days',
      rating: 4.9,
      reviews: 456,
      users: 'Up to 1,000 endpoints'
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration Tools', 'Performance Optimization'],
      price: 'Starting at $799/month',
      marketPrice: '$1,299/month',
      freeTrial: '14 days',
      rating: 4.7,
      reviews: 567,
      users: 'Up to 50 developers'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability with AI-powered tuning.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring', 'AI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$699/month',
      freeTrial: '14 days',
      rating: 4.6,
      reviews: 234,
      users: 'Up to 10 databases'
    },
    {
      icon: Globe,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime, data integrity, and comprehensive testing.',
      features: ['Zero Downtime Migration', 'Data Integrity Validation', 'Cost Optimization', 'Security Compliance', '24/7 Support', 'Performance Testing'],
      price: 'Starting at $2,999/project',
      marketPrice: '$4,999/project',
      freeTrial: 'Assessment included',
      rating: 4.9,
      reviews: 234,
      users: 'Custom scope'
    },
    {
      icon: BarChart3,
      title: 'Cloud Analytics',
      description: 'Advanced cloud analytics and monitoring with real-time insights, cost optimization, and performance metrics.',
      features: ['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Custom Dashboards', 'Alerting', 'Reporting'],
      price: 'Starting at $299/month',
      marketPrice: '$499/month',
      freeTrial: '14 days',
      rating: 4.5,
      reviews: 123,
      users: 'Up to 100 resources'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Guaranteed high availability with our robust cloud infrastructure'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your cloud environment'
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with our optimization strategies'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our cloud experts'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Infrastructure & Migration</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services. From migration to security, we provide enterprise-grade cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud security, DevOps, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with enterprise-grade cloud solutions. 
              From migration to security, we provide comprehensive cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Cloud className="w-5 h-5" />
                <span>Get Cloud Consultation</span>
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Cloud Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    {service.users && (
                      <div className="text-sm text-gray-300 mb-2">{service.users}</div>
                    )}
                    {service.freeTrial && (
                      <div className="text-sm text-green-400 font-medium mb-2">{service.freeTrial} free trial</div>
                    )}
                    {service.rating && (
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-2">{service.rating} ({service.reviews} reviews)</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Cloud Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your cloud needs and create a migration strategy that works for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Cloud className="w-5 h-5" />
                  <span>Get Free Cloud Assessment</span>
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
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

export default CloudServicesPage;