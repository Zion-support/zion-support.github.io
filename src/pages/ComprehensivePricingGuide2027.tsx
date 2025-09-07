import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  Users,
  Building2,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  PenTool,
  Server,
  Smartphone,
  Truck,
  Gauge,
  GitFork,
  Award,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Code,
  Leaf,
  Scale,
  Building,
  Car,
  Home,
  Factory,
  City,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Clock,
  TrendingUp,
  Target,
  Heart,
  Atom,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../components/SEO';

const ComprehensivePricingGuide2027: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Content Generation (100/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5 User Accounts',
        'Basic API Access'
      ],
      limitations: [
        'Limited AI Credits',
        'Basic Support',
        'No Custom Branding'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Content Generation (1000/month)',
        'Advanced Analytics & Reporting',
        'Priority Email Support',
        'Enhanced Security Features',
        '25 User Accounts',
        'Full API Access',
        'Custom Branding',
        'Integration Support'
      ],
      limitations: [
        'Monthly AI Credit Limits',
        'Standard Business Hours Support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Model Training',
        'Dedicated Account Manager',
        '24/7 Phone & Email Support',
        'Unlimited User Accounts',
        'Custom Integrations',
        'White-label Solutions',
        'Advanced Security & Compliance',
        'SLA Guarantees',
        'On-site Training'
      ],
      limitations: [
        'Annual Contract Required',
        'Minimum 12-month Commitment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Content Generation', price: '$0.10 per 1000 words' },
        { name: 'AI Image Generation', price: '$0.05 per image' },
        { name: 'AI Code Generation', price: '$0.20 per 100 lines' },
        { name: 'AI Data Analysis', price: '$0.15 per MB processed' },
        { name: 'Custom AI Model Training', price: 'Custom pricing' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Hosting', price: '$0.50 per hour' },
        { name: 'Database Storage', price: '$0.10 per GB/month' },
        { name: 'CDN Services', price: '$0.08 per GB transferred' },
        { name: 'Load Balancing', price: '$0.15 per hour' },
        { name: 'Auto-scaling', price: '$0.05 per instance/hour' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Security Audits', price: '$500 per audit' },
        { name: 'Penetration Testing', price: '$1000 per test' },
        { name: 'Security Monitoring', price: '$200/month' },
        { name: 'Incident Response', price: '$150/hour' },
        { name: 'Compliance Consulting', price: '$300/hour' }
      ]
    },
    {
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Data Processing', price: '$0.20 per GB' },
        { name: 'Business Intelligence', price: '$500/month' },
        { name: 'Predictive Analytics', price: '$1000/month' },
        { name: 'Data Visualization', price: '$300/month' },
        { name: 'Custom Dashboards', price: '$2000 setup + $200/month' }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: '$150/hour',
      icon: Code
    },
    {
      name: 'Training & Workshops',
      description: 'Team training and skill development',
      price: '$200/hour',
      icon: Users
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock technical support',
      price: '$500/month',
      icon: MessageCircle
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your existing systems',
      price: '$1000 setup + $100/month',
      icon: Network
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Complete pricing information for all our AI, cloud, cybersecurity, and technology services. Transparent pricing with flexible plans for businesses of all sizes."
        keywords="pricing, AI services, cloud computing, cybersecurity, technology solutions, cost, plans, packages"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                  <DollarSign className="w-16 h-16 text-green-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Comprehensive
                </span>
                <br />
                <span className="text-white">Pricing Guide 2027</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transparent pricing for all our AI, cloud, cybersecurity, and technology services. 
                Choose the plan that fits your business needs and budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  View Pricing Plans
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business. 
                Start small and grow with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                    tier.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/70 to-slate-700/70' 
                      : 'border-slate-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-slate-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{tier.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.limitations.length > 0 && (
                    <div className="space-y-2 mb-8">
                      <h4 className="font-semibold text-orange-400 mb-3">Limitations:</h4>
                      {tier.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center text-slate-400">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                          <span className="text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Service-Specific Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Detailed pricing for individual services and add-ons. 
                Mix and match to create the perfect solution for your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                  
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-slate-300 text-sm">{service.name}</span>
                        <span className="text-cyan-400 font-medium text-sm">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Enhance your experience with our premium add-on services. 
                Customized solutions for your specific requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'Can I change my plan at any time?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
                },
                {
                  question: 'Do you offer discounts for annual payments?',
                  answer: 'Yes, we offer a 20% discount for annual payments on all plans. Contact our sales team for enterprise annual pricing.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely.'
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'We\'ll notify you when you\'re approaching limits. You can either upgrade your plan or purchase additional credits as needed.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Choose the plan that fits your needs, or contact our team for a custom solution.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Contact Sales
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Need Help Choosing?</h3>
                <p className="text-slate-300 mb-4">
                  Our team is here to help you find the perfect plan. Get in touch for personalized recommendations.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2027;
