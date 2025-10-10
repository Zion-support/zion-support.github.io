'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, Globe, Zap, Target, Award, ArrowRight, Star, Clock, BarChart, Brain, Cloud, Code } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Enterprise Solutions',
      description: 'Advanced AI capabilities tailored for large-scale enterprise operations and decision-making.',
      features: [
        'Machine Learning at Scale',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Automated Decision Making',
        'Real-time Intelligence'
      ],
      benefits: [
        'Increase operational efficiency by 300%',
        'Reduce decision-making time by 80%',
        'Improve accuracy by 95%',
        'Enable data-driven insights'
      ]
    },
    {
      icon: Cloud,
      title: 'Enterprise Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions designed for enterprise workloads.',
      features: [
        'Multi-cloud Architecture',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Compliance & Security',
        'Cost Optimization',
        '24/7 Monitoring'
      ],
      benefits: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Instant scalability',
        'Enhanced security posture'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions to protect enterprise data and systems.',
      features: [
        'Zero Trust Architecture',
        'Advanced Threat Detection',
        'Identity & Access Management',
        'Data Encryption',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Zero security breaches',
        'Real-time threat monitoring',
        'Full compliance coverage',
        'Expert security team'
      ]
    },
    {
      icon: Code,
      title: 'Custom Enterprise Development',
      description: 'Tailored software solutions built specifically for your enterprise needs.',
      features: [
        'Custom Applications',
        'System Integration',
        'API Development',
        'Legacy Modernization',
        'Microservices Architecture',
        'DevOps Implementation'
      ],
      benefits: [
        'Perfect fit for your business',
        'Modern technology stack',
        'Scalable architecture',
        'Ongoing support & maintenance'
      ]
    },
    {
      icon: BarChart,
      title: 'Enterprise Data Analytics',
      description: 'Transform enterprise data into actionable insights and competitive advantages.',
      features: [
        'Big Data Processing',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Business Intelligence',
        'Data Warehousing',
        'Advanced Reporting'
      ],
      benefits: [
        'Data-driven decisions',
        'Real-time insights',
        'Improved ROI',
        'Competitive advantage'
      ]
    },
    {
      icon: Users,
      title: 'Enterprise Consulting',
      description: 'Strategic technology consulting to guide your digital transformation journey.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Change Management',
        'Training & Support',
        'Project Management'
      ],
      benefits: [
        'Expert guidance',
        'Strategic planning',
        'Risk mitigation',
        'Proven methodologies'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Building,
      description: 'HIPAA-compliant solutions for healthcare organizations',
      clients: '50+ healthcare providers'
    },
    {
      name: 'Financial Services',
      icon: BarChart,
      description: 'Secure, compliant solutions for financial institutions',
      clients: '30+ financial institutions'
    },
    {
      name: 'Manufacturing',
      icon: Target,
      description: 'IoT and automation solutions for manufacturing',
      clients: '40+ manufacturing companies'
    },
    {
      name: 'Retail & E-commerce',
      icon: Globe,
      description: 'Scalable solutions for retail and e-commerce',
      clients: '60+ retail companies'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure, compliant solutions for government agencies',
      clients: '20+ government agencies'
    },
    {
      name: 'Education',
      icon: Users,
      description: 'Technology solutions for educational institutions',
      clients: '35+ educational institutions'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords={["enterprise solutions","enterprise software","large-scale solutions","enterprise integration","business solutions"]}
        canonicalUrl="https://ziontechgroup.com/enterprise"
      />
      <Navigation />
      
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
            Comprehensive enterprise-grade solutions designed to scale with your business. 
            From AI and cloud computing to security and custom development, we deliver results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Enterprise Guide
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
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
              Comprehensive technology solutions designed to meet the unique challenges of large-scale enterprise operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Learn More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
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
              We have extensive experience working with enterprises across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 mb-3">{industry.description}</p>
                <p className="text-purple-400 font-medium text-sm">{industry.clients}</p>
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
            Let's discuss how our enterprise solutions can help you achieve your business goals. 
            Contact our enterprise team for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;