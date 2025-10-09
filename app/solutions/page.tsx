'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart, 
  Target, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const solutions = [
    {
      id: 'ai-transformation',
      name: 'AI Business Transformation',
      icon: Brain,
      description: 'Complete AI transformation strategy and implementation for your business.',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation roadmap',
        'Change management',
        'ROI optimization',
        'Ongoing support'
      ],
      pricing: 'Custom',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-services'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Optimization',
      icon: Cloud,
      description: 'Seamless cloud migration with optimization for cost and performance.',
      features: [
        'Cloud strategy planning',
        'Migration execution',
        'Cost optimization',
        'Security implementation',
        'Performance tuning',
        'Ongoing management'
      ],
      pricing: 'Custom',
      color: 'from-blue-500 to-cyan-500',
      link: '/it-services'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      icon: Zap,
      description: 'End-to-end digital transformation to modernize your business operations.',
      features: [
        'Process digitization',
        'Workflow automation',
        'Data integration',
        'User training',
        'Change management',
        'Continuous improvement'
      ],
      pricing: 'Custom',
      color: 'from-yellow-500 to-orange-500',
      link: '/it-services'
    },
    {
      id: 'cybersecurity-framework',
      name: 'Cybersecurity Framework',
      icon: Shield,
      description: 'Comprehensive cybersecurity framework to protect your business assets.',
      features: [
        'Security assessment',
        'Framework implementation',
        'Threat monitoring',
        'Incident response',
        'Compliance management',
        'Staff training'
      ],
      pricing: 'Custom',
      color: 'from-red-500 to-pink-500',
      link: '/cybersecurity'
    },
    {
      id: 'data-analytics-platform',
      name: 'Data Analytics Platform',
      icon: BarChart,
      description: 'Advanced data analytics platform for business intelligence and insights.',
      features: [
        'Data integration',
        'Analytics dashboard',
        'Predictive modeling',
        'Real-time reporting',
        'Custom visualizations',
        'AI-powered insights'
      ],
      pricing: 'Custom',
      color: 'from-green-500 to-teal-500',
      link: '/ai-data-analytics'
    },
    {
      id: 'micro-saas-suite',
      name: 'Micro SAAS Suite',
      icon: Users,
      description: 'Complete suite of micro SAAS applications for business productivity.',
      features: [
        '100+ ready-to-use apps',
        'Custom development',
        'API integrations',
        'User management',
        'Analytics & reporting',
        'Scalable infrastructure'
      ],
      pricing: 'Starting at $79/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/micro-saas'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered medical solutions and healthcare IT infrastructure',
      icon: '🏥',
      link: '/ai-healthcare'
    },
    {
      name: 'Financial Services',
      description: 'Fintech solutions and financial AI applications',
      icon: '💰',
      link: '/ai-fintech'
    },
    {
      name: 'E-commerce',
      description: 'E-commerce AI solutions and digital transformation',
      icon: '🛒',
      link: '/ai-ecommerce-solutions'
    },
    {
      name: 'Manufacturing',
      description: 'Industrial AI and automation solutions',
      icon: '🏭',
      link: '/ai-automation'
    },
    {
      name: 'Education',
      description: 'Educational technology and AI learning platforms',
      icon: '🎓',
      link: '/ai-services'
    },
    {
      name: 'Real Estate',
      description: 'Property management and real estate AI solutions',
      icon: '🏠',
      link: '/ai-services'
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Solutions">
            Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive Technology Solutions for Your Business
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to transform your business, 
            drive innovation, and achieve sustainable growth in the digital age.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{solution.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {solution.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{solution.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-cyan-400">{solution.pricing}</div>
                </div>
                
                <Link
                  href={solution.link}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <Link
                  href={industry.link}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
              <p className="text-gray-300">
                15+ years of experience delivering successful technology solutions across industries.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">
                Get your solutions up and running quickly with our proven implementation methodology.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance with industry standards and regulations.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Measurable ROI</h3>
              <p className="text-gray-300">
                Our solutions deliver measurable business value and return on investment.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300">
                Solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                Dedicated account managers and technical specialists for ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right solutions for your business needs. 
            Schedule a free consultation to discuss your requirements and get a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;