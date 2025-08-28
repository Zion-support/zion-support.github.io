import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  DollarSign, 
  Users, 
  Building, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Atom,
  ArrowRight,
  Info,
  TrendingUp,
  Target,
  Rocket,
  Globe,
  Lock,
  Eye,
  Heart,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  HelpCircle,
  FileText,
  Truck,
  Mail,
  Smartphone,
  CheckCircle,
  Sparkles,
  Award,
  Cpu,
  Network,
  Database,
  Server,
  Code,
  GitFork,
  Activity,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'AI Workflow Automation',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 User Licenses',
        'Standard Security',
        'Basic Integration'
      ],
      icon: Zap,
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Everything in Starter',
        'Advanced AI Analytics',
        'Priority Support',
        '25 User Licenses',
        'Enhanced Security',
        'Advanced Integration',
        'Custom Workflows',
        'Performance Monitoring'
      ],
      icon: Star,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 999, yearly: 9990 },
      features: [
        'Everything in Professional',
        'Custom AI Models',
        '24/7 Dedicated Support',
        'Unlimited Users',
        'Enterprise Security',
        'Full API Access',
        'Custom Development',
        'SLA Guarantees',
        'On-premise Options'
      ],
      icon: Building,
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Workflow Orchestrator', price: 'From $199/month' },
        { name: 'AI Data Governance', price: 'From $299/month' },
        { name: 'AI Customer Analytics', price: 'From $149/month' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', price: 'From $399/month' },
        { name: 'FinOps Advisor', price: 'From $199/month' },
        { name: 'IT Infrastructure', price: 'From $599/month' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'AI Cybersecurity Platform', price: 'From $499/month' },
        { name: 'Zero Trust Network', price: 'From $299/month' },
        { name: 'Security Headers & CSP', price: 'From $99/month' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      services: [
        { name: 'Micro CRM', price: 'From $49/month' },
        { name: 'Website Analytics', price: 'From $29/month' },
        { name: 'Helpdesk Platform', price: 'From $79/month' }
      ]
    }
  ];

  const savings = billingCycle === 'yearly' ? 0.17 : 0; // 17% savings for yearly

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing
              </span>
              <br />
              <span className="text-white">Guide 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our cutting-edge AI, cloud, and technology services. Choose the plan that fits your business needs.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 17%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingCycle === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Current Plan' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need specific services? Here's our à la carte pricing for individual solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={service.name} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="text-lg font-medium text-white mb-2">{service.name}</h4>
                      <p className="text-blue-400 font-semibold">{service.price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}