'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, Award, Target, BarChart, Globe, Brain, Cloud, Code, Settings, Lock, Zap, Database, Star, ArrowRight } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments with advanced threat protection and compliance.',
      benefits: ['Advanced threat detection', 'Compliance management', 'Data encryption', 'Access control']
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Built to handle millions of users and massive data volumes with auto-scaling and load balancing capabilities.',
      benefits: ['Auto-scaling', 'Load balancing', 'High availability', 'Global deployment']
    },
    {
      icon: Award,
      title: '24/7 Support',
      description: 'Round-the-clock enterprise support with dedicated account managers and priority response times.',
      benefits: ['Dedicated support', 'Priority response', 'SLA guarantees', 'Expert consultation']
    },
    {
      icon: Target,
      title: 'Custom Integration',
      description: 'Seamless integration with existing enterprise systems and workflows for maximum efficiency.',
      benefits: ['API integration', 'Legacy system support', 'Custom workflows', 'Data migration']
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics and business intelligence solutions powered by machine learning and AI.',
      icon: BarChart,
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Comprehensive cloud solutions with hybrid and multi-cloud deployment options.',
      icon: Cloud,
      features: ['Hybrid cloud', 'Multi-cloud strategy', 'Migration services', 'Cost optimization']
    },
    {
      title: 'Enterprise Applications',
      description: 'Custom enterprise applications built to meet specific business requirements and workflows.',
      icon: Code,
      features: ['Custom development', 'Workflow automation', 'User management', 'Integration APIs']
    },
    {
      title: 'Data Management',
      description: 'Enterprise-grade data management and governance solutions for large-scale operations.',
      icon: Database,
      features: ['Data governance', 'Master data management', 'Data quality', 'Compliance reporting']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant solutions for healthcare organizations' },
    { name: 'Finance', icon: '🏦', description: 'Secure financial services and banking solutions' },
    { name: 'Manufacturing', icon: '🏭', description: 'IoT and automation solutions for manufacturing' },
    { name: 'Retail', icon: '🛒', description: 'E-commerce and retail management platforms' },
    { name: 'Education', icon: '🎓', description: 'Learning management and educational technology' },
    { name: 'Government', icon: '🏛️', description: 'Secure government and public sector solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations including AI, cloud, security, and custom development."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      
      <main className="pt-20">
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
              Comprehensive enterprise-grade solutions designed for large-scale business operations,
              built to handle millions of users and massive data volumes with enterprise-level security and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Enterprise Quote
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
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
                Built for scale, security, and reliability with enterprise-level features and support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <feature.icon className="h-12 w-12 text-purple-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet the complex needs of large-scale enterprises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <solution.icon className="h-12 w-12 text-purple-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized solutions for various industries with deep domain expertise and compliance requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Enterprise Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your enterprise needs and create a custom solution that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Enterprise Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Enterprise Team
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnterprisePage;