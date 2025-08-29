import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building,
  Rocket,
  Award,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Calculator,
  FileText,
  Download,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Info,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
  Cloud,
  Package,
  Calendar,
  Settings
} from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses starting their digital transformation',
    icon: Star,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'Basic AI Analytics Dashboard',
      'Cloud Infrastructure Setup',
      '24/7 Basic Support',
      'Monthly Performance Reports',
      'Security Monitoring',
      'Backup & Recovery'
    ],
    limitations: [
      'Up to 5 users',
      'Basic integrations only',
      'Standard response time'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$7,500',
    period: '/month',
    description: 'Ideal for growing companies with advanced technology needs',
    icon: Award,
    color: 'from-purple-400 to-pink-500',
    features: [
      'Advanced AI & ML Solutions',
      'Custom Dashboard Development',
      'Priority Support (4hr response)',
      'Weekly Performance Reviews',
      'Advanced Security Suite',
      'Custom Integrations',
      'Training & Workshops',
      'Quarterly Strategy Sessions'
    ],
    limitations: [
      'Up to 25 users',
      'Advanced integrations',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large enterprises with complex requirements',
    icon: Building,
    color: 'from-orange-400 to-red-500',
    features: [
      'Full AI Suite Implementation',
      'Custom Solution Development',
      'Dedicated Support Team',
      'Real-time Monitoring',
      'Advanced Security & Compliance',
      'Unlimited Integrations',
      'Custom Training Programs',
      'Strategic Consulting',
      'On-site Support Available'
    ],
    limitations: [
      'Unlimited users',
      'Full customization',
      'Dedicated support'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI & Analytics Services',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500',
    services: [
      { name: 'AI Business Intelligence', price: '$3,500/month', description: 'Advanced analytics and insights' },
      { name: 'Machine Learning Models', price: '$5,000/month', description: 'Custom ML model development' },
      { name: 'Predictive Analytics', price: '$4,200/month', description: 'Future trend forecasting' },
      { name: 'Data Visualization', price: '$2,800/month', description: 'Interactive dashboards and reports' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-green-400 to-emerald-500',
    services: [
      { name: 'Cloud Migration', price: '$15,000', description: 'One-time migration service' },
      { name: 'DevOps Automation', price: '$4,500/month', description: 'CI/CD pipeline optimization' },
      { name: 'Infrastructure Management', price: '$3,200/month', description: '24/7 infrastructure monitoring' },
      { name: 'Security & Compliance', price: '$5,800/month', description: 'Comprehensive security suite' }
    ]
  },
  {
    name: 'Digital Solutions',
    icon: Zap,
    color: 'from-purple-400 to-pink-500',
    services: [
      { name: 'Digital Transformation', price: '$25,000', description: 'Strategic transformation consulting' },
      { name: 'MicroSaaS Development', price: '$12,000/month', description: 'Custom SaaS solution development' },
      { name: 'IoT Implementation', price: '$8,500/month', description: 'IoT infrastructure and management' },
      { name: 'Blockchain Solutions', price: '$18,000', description: 'Blockchain implementation and consulting' }
    ]
  }
];

const pricingFactors = [
  {
    factor: 'Project Complexity',
    description: 'More complex projects require additional resources and time',
    impact: 'High',
    examples: ['Custom integrations', 'Legacy system migration', 'Advanced AI models']
  },
  {
    factor: 'Team Size',
    description: 'Larger teams need more comprehensive solutions and support',
    impact: 'Medium',
    examples: ['User management', 'Training programs', 'Support scaling']
  },
  {
    factor: 'Data Volume',
    description: 'Higher data volumes require more robust infrastructure',
    impact: 'Medium',
    examples: ['Storage costs', 'Processing power', 'Backup solutions']
  },
  {
    factor: 'Compliance Requirements',
    description: 'Industry-specific compliance adds complexity and cost',
    impact: 'High',
    examples: ['HIPAA', 'SOC 2', 'GDPR', 'Industry standards']
  }
];

const costOptimization = [
  {
    title: 'Start Small, Scale Smart',
    description: 'Begin with essential services and add advanced features as needed',
    icon: TrendingUp,
    savings: '20-30%'
  },
  {
    title: 'Bundle Services',
    description: 'Combine multiple services for discounted package pricing',
    icon: Package,
    savings: '15-25%'
  },
  {
    title: 'Annual Commitments',
    description: 'Lock in rates with annual contracts and prepayment options',
    icon: Calendar,
    savings: '10-20%'
  },
  {
    title: 'Custom Solutions',
    description: 'Work with our team to design cost-effective custom solutions',
    icon: Settings,
    savings: '25-40%'
  }
];

export default function ComprehensivePricingGuide2027() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing information for Zion Tech Group's AI, cloud, and digital transformation services. Transparent pricing with flexible plans for businesses of all sizes."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Pricing Guide 2027
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for cutting-edge technology solutions. 
              Choose the plan that fits your business needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
              >
                Speak with Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-green-400 shadow-lg shadow-green-400/25' 
                    : 'border-slate-700/50 hover:border-green-400/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-400">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <p className="text-slate-300 mb-6">{tier.description}</p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {tier.limitations.length > 0 && (
                  <div className="space-y-3 mb-8">
                    <h4 className="text-white font-semibold mb-3">Limitations:</h4>
                    {tier.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center text-sm text-slate-400">
                        <AlertCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                        {limitation}
                      </div>
                    ))}
                  </div>
                )}
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600'
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <span className="text-green-400 font-bold">{service.price}</span>
                      </div>
                      <p className="text-slate-300 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding the factors that influence project costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-white">{factor.factor}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    factor.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    factor.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{factor.description}</p>
                <div className="space-y-2">
                  {factor.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-sm text-slate-400">
                      <ChevronRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cost Optimization Strategies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Smart ways to maximize value while minimizing costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costOptimization.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <strategy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{strategy.title}</h4>
                    <p className="text-slate-300 mb-3">{strategy.description}</p>
                    <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {strategy.savings}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a personalized quote tailored to your specific needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-400/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-colors duration-300"
              >
                Speak with Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
