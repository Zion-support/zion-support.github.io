import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Lock, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  BarChart3,
  Rocket,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react';

export function InnovativeServicesShowcase() {
  const [activeTab, setActiveTab] = useState('ai');

  const serviceCategories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: 'digital',
      name: 'Digital Transformation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    }
  ];

  const services = {
    ai: [
      {
        title: 'AI-Powered Business Intelligence',
        description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
        features: ['Predictive Analytics', 'Natural Language Processing', 'Machine Learning Models', 'Real-time Insights'],
        icon: <BarChart3 className="w-8 h-8" />,
        price: 'From $2,999/month',
        popular: true
      },
      {
        title: 'Autonomous AI Agents',
        description: 'Deploy intelligent agents that automate complex business processes and decision-making.',
        features: ['Process Automation', 'Intelligent Decision Making', '24/7 Operation', 'Continuous Learning'],
        icon: <Cpu className="w-8 h-8" />,
        price: 'From $4,999/month',
        popular: false
      },
      {
        title: 'AI Content Generation',
        description: 'Create high-quality, engaging content at scale with our AI-powered content platform.',
        features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Consistency', 'Performance Analytics'],
        icon: <Globe className="w-8 h-8" />,
        price: 'From $1,999/month',
        popular: false
      }
    ],
    security: [
      {
        title: 'Advanced Threat Detection',
        description: 'Stay ahead of cyber threats with our AI-powered security monitoring and response system.',
        features: ['Real-time Monitoring', 'Threat Intelligence', 'Automated Response', 'Compliance Reporting'],
        icon: <Lock className="w-8 h-8" />,
        price: 'From $3,499/month',
        popular: true
      },
      {
        title: 'Zero Trust Architecture',
        description: 'Implement comprehensive security with our zero trust framework and identity management.',
        features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
        icon: <Shield className="w-8 h-8" />,
        price: 'From $5,999/month',
        popular: false
      },
      {
        title: 'Security Operations Center',
        description: '24/7 security monitoring and incident response with our expert security team.',
        features: ['24/7 Monitoring', 'Incident Response', 'Vulnerability Management', 'Security Training'],
        icon: <Network className="w-8 h-8" />,
        price: 'From $8,999/month',
        popular: false
      }
    ],
    cloud: [
      {
        title: 'Cloud Migration & Strategy',
        description: 'Seamlessly migrate to the cloud with our comprehensive migration and optimization services.',
        features: ['Migration Planning', 'Performance Optimization', 'Cost Management', 'Security Implementation'],
        icon: <Cloud className="w-8 h-8" />,
        price: 'From $15,000',
        popular: true
      },
      {
        title: 'Multi-Cloud Management',
        description: 'Manage multiple cloud platforms efficiently with our unified management platform.',
        features: ['Unified Dashboard', 'Cost Optimization', 'Security Compliance', 'Performance Monitoring'],
        icon: <Database className="w-8 h-8" />,
        price: 'From $2,999/month',
        popular: false
      },
      {
        title: 'Serverless Architecture',
        description: 'Build scalable applications with our serverless platform and managed services.',
        features: ['Auto-scaling', 'Pay-per-use', 'Managed Infrastructure', 'Developer Tools'],
        icon: <Rocket className="w-8 h-8" />,
        price: 'From $999/month',
        popular: false
      }
    ],
    digital: [
      {
        title: 'Digital Strategy Consulting',
        description: 'Transform your business with our comprehensive digital transformation strategy.',
        features: ['Business Analysis', 'Technology Roadmap', 'Change Management', 'ROI Optimization'],
        icon: <Zap className="w-8 h-8" />,
        price: 'From $25,000',
        popular: true
      },
      {
        title: 'Legacy System Modernization',
        description: 'Modernize your existing systems with our proven modernization approach.',
        features: ['System Assessment', 'Modernization Planning', 'Implementation', 'Training & Support'],
        icon: <Smartphone className="w-8 h-8" />,
        price: 'From $50,000',
        popular: false
      },
      {
        title: 'Digital Experience Platform',
        description: 'Create exceptional customer experiences with our integrated digital platform.',
        features: ['Customer Journey Mapping', 'Personalization', 'Omnichannel Integration', 'Analytics'],
        icon: <Globe className="w-8 h-8" />,
        price: 'From $3,999/month',
        popular: false
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovative Solutions for the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue"> Digital Age</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge technology solutions that drive innovation, enhance security, 
            and accelerate your business transformation journey.
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.color.split('-')[1]}-500/25`
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services[activeTab as keyof typeof services].map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                service.popular
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20'
                  : 'bg-white/5 border-white/10 hover:border-zion-cyan/20'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${serviceCategories.find(c => c.id === activeTab)?.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-zion-cyan mb-6">
                {service.price}
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can drive your digital transformation 
              and accelerate your growth in the competitive marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Schedule a Consultation
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}