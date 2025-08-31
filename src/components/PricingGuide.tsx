import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Star,
  Zap,
  Brain,
  Server,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Globe,
  Rocket,
  Award,
  DollarSign,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  X,
  BarChart3,
  Atom
} from 'lucide-react';

interface ServicePricing {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    custom: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const services: ServicePricing[] = [
  // AI & Automation Services
  {
    id: 'ai-enterprise-automation',
    name: 'AI Enterprise Automation Platform',
    category: 'AI & Automation',
    description: 'Comprehensive AI-powered automation platform for enterprise operations, workflow optimization, and process intelligence.',
    features: [
      'Intelligent workflow orchestration',
      'Process mining and optimization',
      'RPA integration capabilities',
      'Real-time analytics dashboard',
      'Custom automation workflows',
      'API-first architecture'
    ],
    pricing: {
      starter: 299,
      professional: 899,
      enterprise: 2499,
      custom: 'Contact Sales'
    },
    benefits: [
      'Reduce operational costs by 40-60%',
      'Increase productivity by 3x',
      '24/7 automated operations',
      'Scalable enterprise architecture'
    ],
    useCases: [
      'Customer service automation',
      'Invoice processing',
      'Data entry and validation',
      'Report generation'
    ],
    technologies: ['Machine Learning', 'RPA', 'API Integration', 'Cloud Native'],
    link: '/services/ai-enterprise-automation-platform',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity Platform',
    category: 'AI & Security',
    description: 'Advanced AI-powered cybersecurity platform with real-time threat detection, behavioral analysis, and automated response.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence feeds',
      'Compliance reporting',
      'Zero-trust architecture'
    ],
    pricing: {
      starter: 399,
      professional: 1299,
      enterprise: 3499,
      custom: 'Contact Sales'
    },
    benefits: [
      '99.9% threat detection accuracy',
      'Reduce response time by 90%',
      'Automated compliance management',
      '24/7 security monitoring'
    ],
    useCases: [
      'Network security monitoring',
      'Endpoint protection',
      'Cloud security',
      'Compliance management'
    ],
    technologies: ['AI/ML', 'Zero Trust', 'Threat Intelligence', 'Automation'],
    link: '/services/ai-cybersecurity-platform',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    category: 'AI & Analytics',
    description: 'Enterprise-grade AI-powered data analytics platform for business intelligence, predictive analytics, and data-driven insights.',
    features: [
      'Advanced predictive analytics',
      'Real-time data processing',
      'Interactive dashboards',
      'Natural language queries',
      'Data governance tools',
      'Multi-source integration'
    ],
    pricing: {
      starter: 199,
      professional: 699,
      enterprise: 1999,
      custom: 'Contact Sales'
    },
    benefits: [
      'Uncover hidden insights in data',
      'Make data-driven decisions faster',
      'Reduce manual analysis time by 80%',
      'Scale with your data growth'
    ],
    useCases: [
      'Business intelligence',
      'Customer analytics',
      'Financial forecasting',
      'Operational optimization'
    ],
    technologies: ['Machine Learning', 'Big Data', 'Real-time Processing', 'Cloud Analytics'],
    link: '/services/ai-data-analytics-platform',
    icon: <BarChart3 className="w-6 h-6" />
  },
  // Micro SaaS Solutions
  {
    id: 'ai-sales-copilot',
    name: 'AI Sales Copilot',
    category: 'Micro SaaS',
    description: 'Intelligent AI-powered sales assistant that helps sales teams close more deals with predictive analytics and automation.',
    features: [
      'Lead scoring and prioritization',
      'Sales forecasting',
      'Email automation',
      'Meeting scheduling',
      'Performance analytics',
      'CRM integration'
    ],
    pricing: {
      starter: 49,
      professional: 149,
      enterprise: 399,
      custom: 'Contact Sales'
    },
    benefits: [
      'Increase sales by 25-40%',
      'Reduce sales cycle time',
      'Improve lead conversion rates',
      'Automate repetitive tasks'
    ],
    useCases: [
      'B2B sales teams',
      'Real estate sales',
      'SaaS sales',
      'Consulting services'
    ],
    technologies: ['AI/ML', 'CRM Integration', 'Automation', 'Analytics'],
    link: '/services/ai-sales-copilot',
    icon: <TrendingUp className="w-6 h-6" />,
    popular: true
  },
  {
    id: 'cloud-finops-optimizer',
    name: 'Cloud FinOps Optimizer',
    category: 'Micro SaaS',
    description: 'Cloud cost optimization platform that helps organizations reduce cloud spending and improve resource utilization.',
    features: [
      'Cost monitoring and alerts',
      'Resource optimization',
      'Budget management',
      'Cost allocation',
      'Reserved instance planning',
      'Multi-cloud support'
    ],
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799,
      custom: 'Contact Sales'
    },
    benefits: [
      'Reduce cloud costs by 20-40%',
      'Improve resource utilization',
      'Better budget control',
      'ROI optimization'
    ],
    useCases: [
      'Cloud cost management',
      'Resource optimization',
      'Budget planning',
      'Multi-cloud governance'
    ],
    technologies: ['Cloud APIs', 'Cost Analytics', 'Automation', 'Multi-cloud'],
    link: '/services/cloud-finops-optimizer',
    icon: <DollarSign className="w-6 h-6" />
  },
  // IT Infrastructure Services
  {
    id: 'it-infrastructure-management',
    name: 'IT Infrastructure Management',
    category: 'IT & Infrastructure',
    description: 'Comprehensive IT infrastructure management services including monitoring, maintenance, and optimization.',
    features: [
      '24/7 infrastructure monitoring',
      'Proactive maintenance',
      'Performance optimization',
      'Security hardening',
      'Disaster recovery',
      'Capacity planning'
    ],
    pricing: {
      starter: 599,
      professional: 1499,
      enterprise: 3999,
      custom: 'Contact Sales'
    },
    benefits: [
      '99.9% uptime guarantee',
      'Reduce IT costs by 30%',
      'Improved performance',
      'Enhanced security posture'
    ],
    useCases: [
      'Enterprise IT management',
      'Data center operations',
      'Network infrastructure',
      'Cloud infrastructure'
    ],
    technologies: ['Monitoring Tools', 'Automation', 'Cloud Management', 'Security'],
    link: '/services/it-infrastructure-management',
    icon: <Server className="w-6 h-6" />
  },
  // Quantum Computing Solutions
  {
    id: 'quantum-ai-cybersecurity',
    name: 'Quantum AI Cybersecurity Platform',
    category: 'Quantum & AI',
    description: 'Next-generation cybersecurity platform combining quantum computing and AI for unbreakable security.',
    features: [
      'Quantum-resistant encryption',
      'AI threat detection',
      'Quantum key distribution',
      'Post-quantum cryptography',
      'Real-time monitoring',
      'Zero-day threat prevention'
    ],
    pricing: {
      starter: 799,
      professional: 1999,
      enterprise: 4999,
      custom: 'Contact Sales'
    },
    benefits: [
      'Future-proof security',
      'Unbreakable encryption',
      'Quantum advantage',
      'AI-powered protection'
    ],
    useCases: [
      'Government security',
      'Financial institutions',
      'Healthcare data',
      'Critical infrastructure'
    ],
    technologies: ['Quantum Computing', 'AI/ML', 'Post-quantum Crypto', 'Quantum Networks'],
    link: '/services/quantum-ai-cybersecurity-platform',
    icon: <Atom className="w-6 h-6" />
  }
];

const PricingGuide: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);

  const categories = Array.from(new Set(services.map(s => s.category)));

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Zion Tech Group
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-zion-cyan mb-4"
          >
            Comprehensive Pricing Guide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Discover our innovative micro SaaS, IT services, and AI solutions designed to transform your business. 
            All prices are in USD and include enterprise-grade support.
          </motion.p>
        </div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>

        {/* Services by Category */}
        <div className="space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zion-purple/10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    {category === 'AI & Automation' && <Brain className="w-6 h-6 text-zion-cyan" />}
                    {category === 'AI & Security' && <Shield className="w-6 h-6 text-zion-cyan" />}
                    {category === 'AI & Analytics' && <BarChart3 className="w-6 h-6 text-zion-cyan" />}
                    {category === 'Micro SaaS' && <Zap className="w-6 h-6 text-zion-cyan" />}
                    {category === 'IT & Infrastructure' && <Server className="w-6 h-6 text-zion-cyan" />}
                    {category === 'Quantum & AI' && <Atom className="w-6 h-6 text-zion-cyan" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
                {expandedCategory === category ? (
                  <ChevronUp className="w-6 h-6 text-zion-cyan" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-zion-cyan" />
                )}
              </button>

              {expandedCategory === category && (
                <div className="border-t border-zion-purple/20 p-6">
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {services
                      .filter(service => service.category === category)
                      .map((service) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`bg-zion-blue-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all ${
                            service.popular ? 'ring-2 ring-zion-cyan/50' : ''
                          }`}
                        >
                          {service.popular && (
                            <div className="flex items-center justify-center mb-4">
                              <span className="bg-zion-cyan text-zion-blue-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                <Star className="w-4 h-4 mr-1" />
                                Most Popular
                              </span>
                            </div>
                          )}

                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                              <p className="text-sm text-zion-slate-light">{service.description}</p>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="mb-6">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="text-zion-slate-light">Starter:</div>
                              <div className="text-white font-semibold">${service.pricing.starter}/mo</div>
                              <div className="text-zion-slate-light">Professional:</div>
                              <div className="text-white font-semibold">${service.pricing.professional}/mo</div>
                              <div className="text-zion-slate-light">Enterprise:</div>
                              <div className="text-white font-semibold">${service.pricing.enterprise}/mo</div>
                              <div className="text-zion-slate-light">Custom:</div>
                              <div className="text-white font-semibold">{service.pricing.custom}</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                                  <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h5>
                            <ul className="space-y-1">
                              {service.benefits.slice(0, 2).map((benefit, idx) => (
                                <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                                  <ArrowRight className="w-3 h-3 text-zion-cyan mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <div className="flex space-x-2">
                            <Link
                              to={service.link}
                              className="flex-1 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-cyan-light transition-colors text-center"
                            >
                              Learn More
                            </Link>
                            <button
                              onClick={() => setSelectedService(service)}
                              className="bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-purple/30 transition-colors"
                            >
                              Details
                            </button>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.name}</h3>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Description</h4>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>

                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Features</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-zion-purple/20 text-zion-cyan px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Pricing Plans</h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-zion-blue-darker p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Starter</span>
                        <span className="text-2xl font-bold text-zion-cyan">${selectedService.pricing.starter}</span>
                      </div>
                      <p className="text-zion-slate-light text-sm">Perfect for small teams and startups</p>
                    </div>
                    <div className="bg-zion-blue-darker p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Professional</span>
                        <span className="text-2xl font-bold text-zion-cyan">${selectedService.pricing.professional}</span>
                      </div>
                      <p className="text-zion-slate-light text-sm">Ideal for growing businesses</p>
                    </div>
                    <div className="bg-zion-blue-darker p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Enterprise</span>
                        <span className="text-2xl font-bold text-zion-cyan">${selectedService.pricing.enterprise}</span>
                      </div>
                      <p className="text-zion-slate-light text-sm">For large organizations</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Use Cases</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <ArrowRight className="w-4 h-4 text-zion-cyan mr-2" />
                        {useCase}
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-3">
                    <Link
                      to={selectedService.link}
                      className="flex-1 bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-center"
                    >
                      View Service Details
                    </Link>
                    <a
                      href="tel:+13024640950"
                      className="bg-zion-purple/20 text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-purple/30 transition-colors"
                    >
                      Call Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PricingGuide;