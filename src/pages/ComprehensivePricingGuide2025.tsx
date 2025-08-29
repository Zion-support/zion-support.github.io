import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  BarChart3, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Satellite, 
  FileText,
  Check,
  X,
  Info,
  AlertCircle,
  Zap,
  Crown,
  Gem,
  Diamond
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pricingPlans = {
    monthly: { multiplier: 1, label: 'Monthly', discount: 0 },
    quarterly: { multiplier: 0.9, label: 'Quarterly', discount: 10 },
    annual: { multiplier: 0.8, label: 'Annual', discount: 20 },
    biennial: { multiplier: 0.7, label: 'Biennial', discount: 30 }
  };

  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-indigo-700',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Advanced AI-powered business analytics and insights platform',
          monthlyPrice: 2500,
          features: [
            'Predictive Analytics & Forecasting',
            'Real-time Dashboards & Reports',
            'Custom Report Builder',
            'API Integration & Webhooks',
            'Advanced Data Visualization',
            'Multi-tenant Architecture',
            '24/7 Priority Support',
            'Custom Training & Onboarding'
          ],
          marketPrice: 3200,
          savings: 22,
          rating: 4.9,
          reviews: 127,
          link: '/services/ai-business-intelligence'
        },
        {
          name: 'AI Compliance Automation Suite',
          description: 'Automated compliance monitoring and reporting platform',
          monthlyPrice: 1800,
          features: [
            'Regulatory Monitoring & Updates',
            'Automated Compliance Reporting',
            'Risk Assessment & Scoring',
            'Audit Trail & Documentation',
            'Compliance Dashboard & Alerts',
            'Multi-regulation Support',
            'Custom Workflow Builder',
            'Expert Compliance Support'
          ],
          marketPrice: 2400,
          savings: 25,
          rating: 4.8,
          reviews: 89,
          link: '/services/ai-compliance-assistant'
        },
        {
          name: 'AI Sales Copilot Platform',
          description: 'Intelligent sales automation and optimization platform',
          monthlyPrice: 2200,
          features: [
            'AI-powered Lead Scoring',
            'Customer Behavior Analytics',
            'Sales Forecasting & Pipeline Management',
            'CRM Integration & Sync',
            'Performance Analytics & KPIs',
            'Sales Coaching & Training',
            'Multi-channel Lead Management',
            'Advanced Reporting Suite'
          ],
          marketPrice: 2800,
          savings: 21,
          rating: 4.9,
          reviews: 156,
          link: '/services/ai-sales-copilot'
        },
        {
          name: 'AI Content Marketing Suite',
          description: 'Complete AI-powered content creation and optimization platform',
          monthlyPrice: 1900,
          features: [
            'AI Content Generation & Writing',
            'SEO Optimization & Analysis',
            'Social Media Management',
            'Content Calendar & Planning',
            'Analytics Dashboard & Insights',
            'Multi-platform Publishing',
            'Brand Voice Consistency',
            'Content Performance Tracking'
          ],
          marketPrice: 2500,
          savings: 24,
          rating: 4.7,
          reviews: 94,
          link: '/services/ai-content-marketing-suite'
        },
        {
          name: 'AI Customer Support Automation',
          description: 'Intelligent customer service automation platform',
          monthlyPrice: 1600,
          features: [
            'Smart Chatbots & Virtual Agents',
            'Intelligent Ticket Routing',
            'Sentiment Analysis & Monitoring',
            'Knowledge Base Management',
            'Performance Metrics & Analytics',
            'Multi-language Support',
            'Integration with CRM Systems',
            'Custom Workflow Automation'
          ],
          marketPrice: 2100,
          savings: 24,
          rating: 4.8,
          reviews: 203,
          link: '/services/ai-customer-support-automation'
        },
        {
          name: 'AI Project Management Platform',
          description: 'Intelligent project planning and management platform',
          monthlyPrice: 2300,
          features: [
            'AI-powered Project Planning',
            'Resource Optimization & Allocation',
            'Risk Management & Mitigation',
            'Team Collaboration Tools',
            'Progress Tracking & Reporting',
            'Budget Management & Forecasting',
            'Integration with Development Tools',
            'Advanced Analytics & Insights'
          ],
          marketPrice: 2900,
          savings: 21,
          rating: 4.9,
          reviews: 178,
          link: '/services/ai-project-management'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Server,
      color: 'from-gray-600 to-slate-700',
      services: [
        {
          name: 'Cloud DevOps Automation Platform',
          description: 'Comprehensive DevOps automation and management platform',
          monthlyPrice: 3200,
          features: [
            'CI/CD Pipeline Automation',
            'Infrastructure as Code (IaC)',
            'Monitoring & Alerting Systems',
            'Security Scanning & Compliance',
            'Auto-scaling & Load Balancing',
            'Multi-cloud Management',
            'Performance Optimization',
            '24/7 Infrastructure Support'
          ],
          marketPrice: 4100,
          savings: 22,
          rating: 4.9,
          reviews: 234,
          link: '/services/cloud-devops'
        },
        {
          name: 'IT Infrastructure Management Suite',
          description: 'Complete IT infrastructure monitoring and optimization platform',
          monthlyPrice: 2800,
          features: [
            'Infrastructure Monitoring & Alerting',
            'Performance Optimization Tools',
            'Capacity Planning & Forecasting',
            'Security Management & Compliance',
            'Backup & Disaster Recovery',
            'Network Management & Optimization',
            'Asset Management & Tracking',
            'Proactive Maintenance Alerts'
          ],
          marketPrice: 3500,
          savings: 20,
          rating: 4.8,
          reviews: 167,
          link: '/services/it-infrastructure'
        },
        {
          name: 'AI-Powered Cybersecurity Platform',
          description: 'Advanced threat detection and security automation platform',
          monthlyPrice: 3500,
          features: [
            'AI Threat Detection & Analysis',
            'Vulnerability Assessment & Scanning',
            'Security Automation & Orchestration',
            'Incident Response & Management',
            'Compliance Reporting & Auditing',
            'Security Awareness Training',
            'Threat Intelligence Integration',
            '24/7 Security Operations Center'
          ],
          marketPrice: 4400,
          savings: 20,
          rating: 4.9,
          reviews: 289,
          link: '/services/ai-cybersecurity-platform'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      icon: Rocket,
      color: 'from-green-600 to-emerald-700',
      services: [
        {
          name: 'FinOps Cloud Cost Optimizer',
          description: 'Cloud cost optimization and financial operations platform',
          monthlyPrice: 1200,
          features: [
            'Cloud Cost Optimization',
            'Budget Management & Tracking',
            'Resource Utilization Analysis',
            'Cost Allocation & Tagging',
            'Savings Recommendations',
            'Multi-cloud Cost Management',
            'Cost Forecasting & Planning',
            'Financial Reporting & Analytics'
          ],
          marketPrice: 1600,
          savings: 25,
          rating: 4.7,
          reviews: 76,
          link: '/services/finops-advisor'
        },
        {
          name: 'Zero Trust Network Access Platform',
          description: 'Secure network access control and identity management platform',
          monthlyPrice: 2100,
          features: [
            'Identity Verification & Authentication',
            'Access Control & Authorization',
            'Continuous Monitoring & Analytics',
            'Threat Detection & Response',
            'Compliance Reporting & Auditing',
            'Multi-factor Authentication',
            'Single Sign-On (SSO)',
            'Advanced Security Policies'
          ],
          marketPrice: 2700,
          savings: 22,
          rating: 4.8,
          reviews: 134,
          link: '/services/zero-trust-network-access'
        },
        {
          name: 'Data Subject Rights Portal',
          description: 'GDPR compliance and privacy rights management platform',
          monthlyPrice: 900,
          features: [
            'Data Subject Request Management',
            'Data Mapping & Inventory',
            'Consent Management & Tracking',
            'Privacy Impact Assessment',
            'Compliance Reporting & Auditing',
            'Data Breach Notification',
            'Privacy Policy Management',
            'Regulatory Update Alerts'
          ],
          marketPrice: 1200,
          savings: 25,
          rating: 4.6,
          reviews: 89,
          link: '/services/dsr-portal'
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: Atom,
      color: 'from-purple-600 to-pink-700',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing services for optimization and cryptography',
          monthlyPrice: 5000,
          features: [
            'Quantum Algorithm Development',
            'Optimization Problem Solving',
            'Cryptography & Security',
            'Scientific Computing Support',
            'Research & Development',
            'Quantum Software Development',
            'Performance Benchmarking',
            'Expert Quantum Consulting'
          ],
          marketPrice: 6500,
          savings: 23,
          rating: 4.9,
          reviews: 45,
          link: '/services/quantum-computing'
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing for IoT and real-time applications',
          monthlyPrice: 2800,
          features: [
            'Edge Node Management',
            'Real-time Data Processing',
            'IoT Integration & Management',
            'Low Latency Optimization',
            'Scalable Architecture Design',
            'Edge Security & Compliance',
            'Performance Monitoring',
            'Edge Application Development'
          ],
          marketPrice: 3600,
          savings: 22,
          rating: 4.8,
          reviews: 123,
          link: '/services/edge-computing'
        },
        {
          name: 'Enterprise Blockchain Platform',
          description: 'Scalable blockchain solutions for enterprise applications',
          monthlyPrice: 3200,
          features: [
            'Smart Contract Development',
            'Supply Chain Tracking',
            'Digital Identity Management',
            'Token Management & Economics',
            'Consensus Mechanism Implementation',
            'Blockchain Security & Auditing',
            'Integration with Legacy Systems',
            'Performance Optimization'
          ],
          marketPrice: 4100,
          savings: 22,
          rating: 4.7,
          reviews: 167,
          link: '/services/blockchain'
        }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  const formatPrice = (price: number) => {
    const adjustedPrice = price * pricingPlans[selectedPlan].multiplier;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(adjustedPrice);
  };

  const calculateSavings = (originalPrice: number, marketPrice: number) => {
    const adjustedPrice = originalPrice * pricingPlans[selectedPlan].multiplier;
    const savings = ((marketPrice - adjustedPrice) / marketPrice) * 100;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Pricing Guide 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-blue-light max-w-4xl mx-auto mb-8"
          >
            Transparent pricing for all our innovative AI, IT, and micro SAAS services. 
            Compare plans, see market prices, and discover unbeatable value.
          </motion.p>
          
          {/* Pricing Plan Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 inline-flex mb-8"
          >
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPlan === key
                    ? 'bg-white text-zion-blue-dark shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {plan.label}
                {plan.discount > 0 && (
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                    Save {plan.discount}%
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-slate-dark py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-blue-light">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-blue text-white'
                  : 'bg-zion-slate text-zion-blue-light hover:bg-zion-slate-light'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>All Services</span>
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-blue text-white'
                    : 'bg-zion-slate text-zion-blue-light hover:bg-zion-slate-light'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedPlan}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-zion-slate-light"
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-5 mx-auto mb-6`}>
                      <category.icon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
                    <p className="text-zion-blue-light max-w-2xl mx-auto">
                      Comprehensive solutions designed to transform your business operations and drive innovation
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                        className="group relative bg-zion-slate-dark/50 rounded-2xl p-6 border border-zion-slate-light hover:border-zion-blue transition-all duration-300 hover:shadow-2xl hover:shadow-zion-blue/20"
                      >
                        {/* Service Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-blue-light transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-zion-blue-light text-sm mb-4">
                            {service.description}
                          </p>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-zion-slate-light'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-zion-blue-light">
                              {service.rating} ({service.reviews} reviews)
                            </span>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6 p-4 bg-zion-slate/50 rounded-xl">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">
                              {formatPrice(service.monthlyPrice)}
                              <span className="text-lg text-zion-blue-light">/{pricingPlans[selectedPlan].label.toLowerCase()}</span>
                            </div>
                            <div className="text-sm text-zion-blue-light line-through mb-1">
                              Market Price: {formatPrice(service.marketPrice)}
                            </div>
                            <div className="text-sm text-green-400 font-semibold">
                              Save {calculateSavings(service.monthlyPrice, service.marketPrice)}% vs. market
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-zion-blue-light mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="text-xs text-zion-blue-light flex items-start gap-2">
                                <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <Link
                          to={service.link}
                          className="w-full bg-gradient-to-r from-zion-blue to-zion-blue-light text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-blue-light hover:to-zion-blue transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-zion-blue/25"
                        >
                          Learn More & Get Started
                          <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-blue-light max-w-3xl mx-auto"
            >
              We deliver enterprise-grade solutions at competitive prices with unmatched support and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Crown,
                title: 'Premium Quality',
                description: 'Enterprise-grade solutions with cutting-edge technology and best practices'
              },
              {
                icon: DollarSign,
                title: 'Competitive Pricing',
                description: 'Up to 30% savings compared to market rates with flexible payment options'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management for all clients'
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Quick deployment and onboarding to get you up and running faster'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-slate-light"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-blue to-zion-blue-light p-4 mx-auto mb-4">
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-blue-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-blue-light max-w-3xl mx-auto mb-8"
          >
            Contact our team today to discuss your needs, get a custom quote, or schedule a personalized demo.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-blue-light transition-colors duration-300 text-lg"
            >
              Contact Sales Team
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors duration-300 text-lg"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}