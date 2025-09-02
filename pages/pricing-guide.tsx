import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Phone,
  Mail,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Target,
  Brain,
  Server,
  Cloud,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Heart,
  Sparkles,
  Calculator,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Network,
} from 'lucide-react';

const PricingGuide: React.FC = () => {
  const pricingFactors = [
    {
      factor: 'Project Complexity',
      description:
        'The complexity of your AI solution directly impacts development time and cost',
      details: [
        'Simple automation: $2, 000 - $5,000',
        'Custom AI models: $5,000 - $15, 000',
        'Enterprise solutions: $15, 000 - $50,000+',
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      factor: 'Data Requirements',
      description:
        'Amount and quality of data needed for training and implementation',
      details: [
        'Small datasets: $1,000 - $3, 000',
        'Medium datasets: $3, 000 - $8,000',
        'Large datasets: $8,000 - $20, 000+',
      ],
      icon: Database,
      color: 'from-green-500 to-emerald-500',
    },
    {
      factor: 'Integration Needs',
      description:
        'Complexity of integrating with existing systems and platforms',
      details: [
        'Basic integrations: $1,500 - $4, 000',
        'Complex integrations: $4, 000 - $10,000',
        'Enterprise integrations: $10,000 - $25, 000+',
      ],
      icon: Network,
      color: 'from-purple-500 to-pink-500',
    },
    {
      factor: 'Timeline Requirements',
      description: 'How quickly you need the solution delivered',
      details: [
        'Standard timeline: Base price',
        'Rush delivery (50% faster): +30% cost',
        'Emergency delivery (75% faster): +50% cost',
      ],
      icon: Clock,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const pricingExamples = [
    {
      scenario: 'Micro SaaS - AI Analytics Dashboard',
      description: 'AI-powered business intelligence platform for small to medium businesses',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'API integrations with 100+ tools',
        'Multi-user collaboration',
        'Monthly maintenance and updates',
      ],
      price: '$299/month',
      timeline: '2-3 weeks',
      roi: '400% ROI within 6 months',
    },
    {
      scenario: 'IT Services - Cloud Infrastructure',
      description: 'Complete cloud migration and infrastructure optimization for enterprise',
      features: [
        'AWS/Azure/GCP setup and optimization',
        'Security hardening and compliance',
        'Automated monitoring and alerting',
        'Disaster recovery implementation',
        'Cost optimization and scaling',
        '24/7 support and maintenance',
      ],
      price: '$2,500 - $15,000',
      timeline: '4-8 weeks',
      roi: '300% ROI within 12 months',
    },
    {
      scenario: 'AI Services - Machine Learning Platform',
      description: 'Custom ML models for predictive analytics and automation',
      features: [
        'Custom model development and training',
        'Data preprocessing and feature engineering',
        'Model deployment and monitoring',
        'Integration with existing systems',
        'Performance optimization',
        'Ongoing maintenance and updates',
      ],
      price: '$10,000 - $50,000',
      timeline: '8-16 weeks',
      roi: '500% ROI within 12 months',
    },
    {
      scenario: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and vulnerability assessment',
      features: [
        'Penetration testing and vulnerability scanning',
        'Security policy review and recommendations',
        'Compliance audit (SOC2, HIPAA, PCI-DSS)',
        'Incident response planning',
        'Security awareness training',
        'Ongoing security monitoring',
      ],
      price: '$3,000 - $10,000',
      timeline: '2-4 weeks',
      roi: 'Prevent potential $100K+ breach costs',
    },
    {
      scenario: 'Document Management System',
      description: 'AI-driven document processing and intelligent search platform',
      features: [
        'Advanced OCR and text extraction',
        'Intelligent document categorization',
        'Full-text search capabilities',
        'Workflow automation',
        'Integration with existing systems',
        'Compliance and audit trails',
      ],
      price: '$199/month',
      timeline: '1-2 weeks',
      roi: '80% reduction in document processing time',
    },
    {
      scenario: 'Customer Support Automation',
      description: 'AI chatbot with natural language processing for 24/7 support',
      features: [
        'Natural conversation capabilities',
        'Multi-language support (50+ languages)',
        'Intelligent ticket routing',
        'CRM and helpdesk integration',
        'Analytics and performance tracking',
        'Custom training on your data',
      ],
      price: '$149/month',
      timeline: '1-2 weeks',
      roi: '60% reduction in support costs',
    },
  ];

  const costSavingTips = [
    {
      tip: 'Start with MVP',
      description:
        'Begin with a minimum viable product and iterate based on results',
      savings: 'Save 40-60% on initial development',
    },
    {
      tip: 'Use Existing Frameworks',
      description: 'Leverage our pre-built AI frameworks and templates',
      savings: 'Reduce development time by 50%',
    },
    {
      tip: 'Phased Implementation',
      description: 'Implement solution in phases to spread costs over time',
      savings: 'Improve cash flow and reduce risk',
    },
    {
      tip: 'Long-term Partnership',
      description: 'Sign annual contracts for ongoing development and support',
      savings: 'Get 20% discount on all services',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Pricing Guide - Zion Tech Group | AI, IT & Micro SaaS Solutions"
        description="Comprehensive pricing guide for AI services, IT solutions, and micro SaaS platforms. Get accurate estimates and find the best pricing strategy. Contact +1 302 464 0950 for custom quotes."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Pricing Guide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Solution Pricing Guide
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Understand the factors that influence AI solution costs and get
              accurate estimates for your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Affects AI Solution Pricing?
            </h2>
            <p className="text-xl text-gray-300">
              Several key factors determine the cost of your AI implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${factor.color} mr-4`}
                    >
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {factor.factor}
                      </h3>
                      <p className="text-gray-300">{factor.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {factor.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Examples */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Pricing Examples
            </h2>
            <p className="text-xl text-gray-300">
              See how different project types are priced
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingExamples.map((example, index) => (
              <motion.div
                key={example.scenario}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-8 h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {example.scenario}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {example.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {example.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      Timeline: {example.timeline}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {example.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Badge variant="secondary" className="text-green-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {example.roi}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Saving Tips */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Save on AI Development Costs
            </h2>
            <p className="text-xl text-gray-300">
              Smart strategies to maximize your AI investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costSavingTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 mr-4">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {tip.tip}
                      </h3>
                      <p className="text-gray-300 mb-3">{tip.description}</p>
                      <Badge variant="secondary" className="text-green-400">
                        {tip.savings}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Custom Quote Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business? Contact us for a personalized quote based on
              your specific requirements. Our experts are standing by to help you succeed.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available 24/7</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Quick response guaranteed</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Visit our full site</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Free Quote
                </Button>
              </a>
              <a href="mailto:kleber@ziontechgroup.com">
                <Button size="lg" variant="outline" className="hover:bg-blue-400 hover:text-white transition-all">
                  <Mail className="w-5 h-5 mr-2" />
                  Email for Consultation
                </Button>
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-slate-700/50 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>500+ successful projects completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>24/7 expert support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>Competitive pricing with ROI guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide;
