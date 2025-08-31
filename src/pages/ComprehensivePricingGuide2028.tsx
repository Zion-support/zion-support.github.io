import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  Globe,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Car,
  Building,
  Calculator,
  Award,
  Gift,
  ShieldCheck,
  Zap as Lightning
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const ComprehensivePricingGuide2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'emerging', name: 'Emerging Tech', icon: TrendingUp }
  ];

  const pricingPlans = [
    { id: 'starter', name: 'Starter', color: 'from-green-500 to-emerald-500' },
    { id: 'professional', name: 'Professional', color: 'from-blue-500 to-cyan-500' },
    { id: 'enterprise', name: 'Enterprise', color: 'from-purple-500 to-pink-500' }
  ];

  const comprehensiveServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      category: 'ai',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from strategy to execution.',
      features: {
        starter: [
          'Basic Business Monitoring',
          'Automated Reporting',
          'Performance Analytics',
          'Email Support'
        ],
        professional: [
          'Advanced Business Intelligence',
          'Predictive Analytics',
          'Automated Decision Making',
          'Priority Support',
          'Custom Integrations'
        ],
        enterprise: [
          'Full Business Autonomy',
          'Real-time Optimization',
          'Multi-location Management',
          'Dedicated Support Team',
          'Custom AI Training',
          'White-label Solutions'
        ]
      },
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      marketPrice: '$8,000 - $25,000/month',
      savings: 'Up to 70% savings',
      benefits: [
        'Reduce operational costs by 40-60%',
        'Improve decision-making speed by 80%',
        'Increase business efficiency by 50%',
        '24/7 autonomous operation',
        'Real-time market adaptation'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: '/services/ai-autonomous-business-manager',
      setupFee: {
        starter: '$5,000',
        professional: '$10,000',
        enterprise: '$25,000'
      },
      contractLength: {
        starter: '12 months',
        professional: '24 months',
        enterprise: '36 months'
      }
    },
    {
      id: 'ai-quantum-hybrid-platform',
      category: 'quantum',
      title: 'AI-Quantum Hybrid Computing Platform',
      description: 'Revolutionary platform combining AI and quantum computing for solving previously impossible problems.',
      features: {
        starter: [
          '100 Qubit Access',
          'Basic Quantum Algorithms',
          'AI Integration',
          'Email Support'
        ],
        professional: [
          '500 Qubit Access',
          'Advanced Quantum Algorithms',
          'AI-Quantum Hybrid Models',
          'Priority Support',
          'Custom Algorithm Development'
        ],
        enterprise: [
          '1000+ Qubit Access',
          'Full Quantum Computing Suite',
          'AI-Quantum Hybrid Platform',
          'Dedicated Quantum Team',
          'Custom Quantum Solutions',
          'Research Collaboration'
        ]
      },
      pricing: {
        starter: '$8,500/month',
        professional: '$18,000/month',
        enterprise: '$45,000/month'
      },
      marketPrice: '$25,000 - $100,000/month',
      savings: 'Up to 66% savings',
      benefits: [
        'Solve complex problems 1000x faster',
        'Unbreakable quantum encryption',
        'Revolutionary AI capabilities',
        'Future-proof technology',
        'Competitive advantage'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: '/services/quantum-ai-hybrid-platform',
      setupFee: {
        starter: '$15,000',
        professional: '$30,000',
        enterprise: '$75,000'
      },
      contractLength: {
        starter: '24 months',
        professional: '36 months',
        enterprise: '48 months'
      }
    },
    // Micro SAAS Services
    {
      id: 'ai-powered-seo-platform',
      category: 'micro-saas',
      title: 'AI-Powered SEO Platform',
      description: 'Complete SEO solution powered by AI for automatic optimization and ranking improvement.',
      features: {
        starter: [
          'AI Content Optimization',
          'Basic Keyword Research',
          'Performance Tracking',
          'Email Support',
          '5 Website Analysis'
        ],
        professional: [
          'Advanced AI Optimization',
          'Comprehensive Keyword Research',
          'Competitor Monitoring',
          'Priority Support',
          '25 Website Analysis',
          'Custom Reports'
        ],
        enterprise: [
          'Full AI SEO Suite',
          'Unlimited Analysis',
          'White-label Solutions',
          'Dedicated Account Manager',
          'API Access',
          'Custom AI Training'
        ]
      },
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$200 - $1,000/month',
      savings: 'Up to 50% savings',
      benefits: [
        'Improve search rankings by 40%',
        'Save 20+ hours per week',
        'Automated optimization',
        'Real-time performance tracking',
        'Competitive advantage'
      ],
      icon: Search,
      color: 'from-orange-500 to-red-500',
      featured: false,
      link: '/services/ai-seo',
      setupFee: {
        starter: '$0',
        professional: '$199',
        enterprise: '$499'
      },
      contractLength: {
        starter: 'Month-to-month',
        professional: '12 months',
        enterprise: '24 months'
      }
    },
    // IT Services
    {
      id: 'cloud-finops-optimizer',
      category: 'it',
      title: 'Cloud FinOps Optimization Platform',
      description: 'Complete cloud cost optimization and financial operations management platform.',
      features: {
        starter: [
          'Cost Monitoring',
          'Basic Optimization',
          'Monthly Reports',
          'Email Support'
        ],
        professional: [
          'Advanced Cost Analysis',
          'Automated Optimization',
          'Budget Management',
          'Priority Support',
          'Custom Alerts'
        ],
        enterprise: [
          'Full FinOps Platform',
          'Multi-cloud Management',
          'ROI Optimization',
          'Dedicated FinOps Team',
          'Custom Integrations',
          'Training & Consulting'
        ]
      },
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      savings: 'Up to 50% savings',
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Improve resource utilization',
        'Better budget control',
        'Automated optimization',
        'ROI maximization'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/cloud-finops-optimizer',
      setupFee: {
        starter: '$0',
        professional: '$499',
        enterprise: '$1,999'
      },
      contractLength: {
        starter: 'Month-to-month',
        professional: '12 months',
        enterprise: '24 months'
      }
    },
    // Cybersecurity Services
    {
      id: 'zero-trust-network-access',
      category: 'security',
      title: 'Zero Trust Network Access Platform',
      description: 'Advanced zero trust security platform for secure remote access and network protection.',
      features: {
        starter: [
          'Basic Identity Verification',
          'Access Control',
          'Security Monitoring',
          'Email Support'
        ],
        professional: [
          'Advanced Identity Management',
          'Network Segmentation',
          'Threat Detection',
          'Priority Support',
          'Compliance Reporting'
        ],
        enterprise: [
          'Full Zero Trust Platform',
          'Advanced Threat Protection',
          'Compliance Management',
          'Dedicated Security Team',
          'Custom Security Policies',
          '24/7 Security Operations'
        ]
      },
      pricing: {
        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,799/month'
      },
      marketPrice: '$600 - $3,000/month',
      savings: 'Up to 50% savings',
      benefits: [
        'Eliminate network vulnerabilities',
        'Comply with security standards',
        'Secure remote access',
        'Real-time threat protection',
        'Comprehensive audit trails'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      link: '/services/zero-trust-network-access',
      setupFee: {
        starter: '$299',
        professional: '$699',
        enterprise: '$1,999'
      },
      contractLength: {
        starter: '12 months',
        professional: '24 months',
        enterprise: '36 months'
      }
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? comprehensiveServices 
    : comprehensiveServices.filter(service => service.category === activeCategory);

  const selectedService = filteredServices[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="2028 Comprehensive Pricing Guide - Zion Tech Group"
        description="Complete pricing guide for Zion Tech Group's 2028 services: AI, Quantum Computing, Micro SAAS, and IT solutions. Get detailed pricing, features, and savings information."
        keywords="pricing guide, AI services pricing, quantum computing costs, micro SAAS pricing, IT services pricing, 2028 technology pricing, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-pricing-guide-2028"
      />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2028 Pricing Guide
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Comprehensive pricing for cutting-edge AI, Quantum Computing, Micro SAAS, and IT services. 
              Save up to 70% compared to market rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/innovative-services-showcase-2028" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Selector */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-slate-300">Select a pricing tier to see detailed features and costs</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {pricingPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured Service
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>

                {/* Pricing Information */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white">Pricing Plans</h4>
                    <div className="text-sm text-slate-400">
                      Market Average: {service.marketPrice}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {pricingPlans.map((plan) => (
                      <div key={plan.id} className="text-center p-4 bg-slate-700 rounded-lg">
                        <div className="text-sm text-slate-400 mb-2">{plan.name}</div>
                        <div className={`text-xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {service.pricing[plan.id as keyof typeof service.pricing]}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Setup: {service.setupFee[plan.id as keyof typeof service.setupFee]}
                        </div>
                        <div className="text-xs text-slate-500">
                          Contract: {service.contractLength[plan.id as keyof typeof service.contractLength]}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Gift className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">{service.savings}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                      vs. Market Rates
                    </div>
                  </div>
                </div>

                {/* Features for Selected Plan */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {pricingPlans.find(p => p.id === selectedPlan)?.name} Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features[selectedPlan as keyof typeof service.features]?.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing Comparison
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our competitive pricing compares to market rates across different service categories
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Service Category</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Our Pricing</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Market Average</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white">AI & Machine Learning</td>
                  <td className="px-6 py-4 text-center text-cyan-400 font-semibold">$2,500 - $12,000/month</td>
                  <td className="px-6 py-4 text-center text-slate-300">$8,000 - $25,000/month</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">Up to 70%</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white">Quantum Computing</td>
                  <td className="px-6 py-4 text-center text-cyan-400 font-semibold">$8,500 - $45,000/month</td>
                  <td className="px-6 py-4 text-center text-slate-300">$25,000 - $100,000/month</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">Up to 66%</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white">Micro SAAS</td>
                  <td className="px-6 py-4 text-center text-cyan-400 font-semibold">$79 - $999/month</td>
                  <td className="px-6 py-4 text-center text-slate-300">$150 - $1,500/month</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">Up to 50%</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="px-6 py-4 text-white">IT Services</td>
                  <td className="px-6 py-4 text-center text-cyan-400 font-semibold">$199 - $1,299/month</td>
                  <td className="px-6 py-4 text-center text-slate-300">$400 - $2,000/month</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">Up to 50%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white">Cybersecurity</td>
                  <td className="px-6 py-4 text-center text-cyan-400 font-semibold">$299 - $1,799/month</td>
                  <td className="px-6 py-4 text-center text-slate-300">$600 - $3,000/month</td>
                  <td className="px-6 py-4 text-center text-green-400 font-semibold">Up to 50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Contact us today for a custom quote tailored to your specific needs. 
              Our team will work with you to find the perfect solution within your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="text-slate-400 space-y-2">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="text-sm mt-4">All prices include setup, training, and ongoing support</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2028;
