'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, BarChart, Globe, Zap } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Enterprise Architecture',
      description: 'Scalable, secure, and robust architecture designed for large-scale operations.',
      benefits: ['Microservices', 'API Gateway', 'Load Balancing', 'High Availability']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security framework to protect your enterprise data and systems.',
      benefits: ['SSO Integration', 'Role-Based Access', 'Data Encryption', 'Compliance']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Advanced user management and collaboration tools for enterprise teams.',
      benefits: ['User Provisioning', 'Team Management', 'Permission Control', 'Audit Logs']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Enterprise-grade analytics and reporting capabilities for data-driven decisions.',
      benefits: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide deployment capabilities with multi-region support and CDN.',
      benefits: ['Multi-Region', 'CDN Integration', 'Edge Computing', 'Global Scaling']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimized performance for enterprise workloads and high-traffic scenarios.',
      benefits: ['Caching Strategies', 'Database Optimization', 'Resource Management', 'Monitoring']
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered Enterprise Platform',
      description: 'Complete AI integration for enterprise operations with machine learning capabilities.',
      technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      benefits: ['Automated Decision Making', 'Intelligent Automation', 'Predictive Insights', 'Cost Reduction']
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud infrastructure with modern architecture patterns.',
      technologies: ['AWS/Azure/GCP', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: ['Scalability', 'Cost Efficiency', 'Reliability', 'Flexibility']
    },
    {
      title: 'Enterprise Integration Hub',
      description: 'Centralized integration platform connecting all enterprise systems and applications.',
      technologies: ['API Management', 'Message Queues', 'Event Streaming', 'Data Pipelines'],
      benefits: ['System Connectivity', 'Data Synchronization', 'Process Automation', 'Real-time Updates']
    }
  ];
const Component = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations with AI, cloud, and security expertise."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive enterprise-grade solutions designed to scale with your business and drive digital transformation at enterprise level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Enterprise Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Enterprise Guide
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for scale, security, and performance to meet the demands of large enterprise operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored solutions designed to address the unique challenges of enterprise operations.
              </p>
            </div>
            
            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your enterprise needs and create a solution that scales with your business growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Enterprise Demo
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  ),
};

export default EnterprisePage;