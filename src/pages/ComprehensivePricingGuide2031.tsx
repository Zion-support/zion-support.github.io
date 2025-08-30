import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target,
  Handshake,
  Eye,
  Workflow,
  Gamepad2,
  Coins,
  Activity,
  Palette,
  Users2,
  Settings as SettingsIcon,
  HardDrive,
  MessageSquare,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Info,
  AlertTriangle
} from 'lucide-react';

export default function ComprehensivePricingGuide2031() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge AI solutions for business transformation',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination & workflow automation',
          pricing: {
            starter: { price: '$2,999', period: '/month', features: ['Up to 10 agents', 'Basic workflows', 'Email support'] },
            professional: { price: '$5,999', period: '/month', features: ['Up to 50 agents', 'Advanced workflows', 'Priority support', 'API access'] },
            enterprise: { price: '$12,999', period: '/month', features: ['Unlimited agents', 'Custom workflows', 'Dedicated support', 'White-label'] }
          },
          marketComparison: '$3,500 - $15,000/month',
          savings: 'Save up to 20% vs market rates'
        },
        {
          name: 'AI Carbon Footprint Tracker',
          description: 'AI-powered sustainability and carbon monitoring',
          pricing: {
            starter: { price: '$299', period: '/month', features: ['Up to 5 locations', 'Basic tracking', 'Monthly reports'] },
            professional: { price: '$799', period: '/month', features: ['Up to 25 locations', 'Advanced analytics', 'Real-time monitoring'] },
            enterprise: { price: '$1,999', period: '/month', features: ['Unlimited locations', 'Custom models', 'White-label solutions'] }
          },
          marketComparison: '$400 - $2,500/month',
          savings: 'Save up to 25% vs market rates'
        },
        {
          name: 'AI Talent Acquisition Platform',
          description: 'Revolutionary AI-powered recruitment solution',
          pricing: {
            starter: { price: '$499', period: '/month', features: ['Up to 50 job postings', 'AI matching', 'Basic screening'] },
            professional: { price: '$1,299', period: '/month', features: ['Up to 200 job postings', 'Advanced AI', 'Custom assessments'] },
            enterprise: { price: '$2,999', period: '/month', features: ['Unlimited postings', 'Custom models', 'White-label solutions'] }
          },
          marketComparison: '$600 - $3,500/month',
          savings: 'Save up to 30% vs market rates'
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security solutions for modern threats',
      services: [
        {
          name: 'Zero Trust Network Architecture',
          description: 'Comprehensive zero-trust security framework',
          pricing: {
            starter: { price: '$4,999', period: '/month', features: ['Basic zero-trust', 'Up to 100 users', 'Standard support'] },
            professional: { price: '$8,999', period: '/month', features: ['Advanced zero-trust', 'Up to 500 users', 'Priority support'] },
            enterprise: { price: '$19,999', period: '/month', features: ['Full zero-trust', 'Unlimited users', 'Dedicated support'] }
          },
          marketComparison: '$6,000 - $25,000/month',
          savings: 'Save up to 20% vs market rates'
        },
        {
          name: 'SOC2 Compliance Tracker',
          description: 'Automated SOC2 compliance management',
          pricing: {
            starter: { price: '$1,299', period: '/month', features: ['Basic compliance', 'Up to 5 systems', 'Standard reports'] },
            professional: { price: '$2,999', period: '/month', features: ['Advanced compliance', 'Up to 20 systems', 'Custom reports'] },
            enterprise: { price: '$6,999', period: '/month', features: ['Full compliance', 'Unlimited systems', 'White-label'] }
          },
          marketComparison: '$1,500 - $8,000/month',
          savings: 'Save up to 15% vs market rates'
        }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      description: 'Next-generation quantum solutions',
      services: [
        {
          name: 'Quantum AI Hybrid Platform',
          description: 'Quantum-classical AI hybrid computing',
          pricing: {
            starter: { price: '$5,999', period: '/month', features: ['Basic quantum access', 'Standard algorithms', 'Email support'] },
            professional: { price: '$12,999', period: '/month', features: ['Advanced quantum', 'Custom algorithms', 'Priority support'] },
            enterprise: { price: '$29,999', period: '/month', features: ['Full quantum access', 'Custom solutions', 'Dedicated support'] }
          },
          marketComparison: '$7,000 - $35,000/month',
          savings: 'Save up to 15% vs market rates'
        }
      ]
    },
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      description: 'Specialized software solutions for specific needs',
      services: [
        {
          name: 'Micro CRM Platform',
          description: 'Lightweight CRM for small businesses',
          pricing: {
            starter: { price: '$99', period: '/month', features: ['Up to 1,000 contacts', 'Basic CRM', 'Email support'] },
            professional: { price: '$299', period: '/month', features: ['Up to 10,000 contacts', 'Advanced CRM', 'Priority support'] },
            enterprise: { price: '$799', period: '/month', features: ['Unlimited contacts', 'Custom CRM', 'White-label'] }
          },
          marketComparison: '$120 - $1,000/month',
          savings: 'Save up to 20% vs market rates'
        },
        {
          name: 'AI Project Management',
          description: 'Intelligent project planning and execution',
          pricing: {
            starter: { price: '$399', period: '/month', features: ['Up to 10 projects', 'Basic AI planning', 'Standard support'] },
            professional: { price: '$999', period: '/month', features: ['Up to 50 projects', 'Advanced AI', 'Priority support'] },
            enterprise: { price: '$2,499', period: '/month', features: ['Unlimited projects', 'Custom AI', 'White-label'] }
          },
          marketComparison: '$500 - $3,000/month',
          savings: 'Save up to 25% vs market rates'
        }
      ]
    },
    {
      name: 'IT Infrastructure & DevOps',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Modern infrastructure and development solutions',
      services: [
        {
          name: 'Cloud DevOps Platform',
          description: 'Comprehensive DevOps and cloud management',
          pricing: {
            starter: { price: '$1,499', period: '/month', features: ['Basic DevOps', 'Up to 5 environments', 'Standard support'] },
            professional: { price: '$3,999', period: '/month', features: ['Advanced DevOps', 'Up to 20 environments', 'Priority support'] },
            enterprise: { price: '$8,999', period: '/month', features: ['Full DevOps', 'Unlimited environments', 'White-label'] }
          },
          marketComparison: '$1,800 - $10,000/month',
          savings: 'Save up to 20% vs market rates'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingBenefits = [
    'Transparent pricing with no hidden fees',
    'Flexible plans that scale with your business',
    'Volume discounts for enterprise customers',
    'Custom pricing for unique requirements',
    'Free consultation and implementation support',
    '30-day money-back guarantee'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              2031 Pricing Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Guide 2031
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transparent, competitive pricing for all our AI, IT, and Micro SAAS solutions. 
              Compare our rates with market standards and discover significant savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Pricing Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {pricingBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-zion-slate-light"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing Breakdown
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore detailed pricing for each service category with market comparisons and savings calculations
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6"
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                        
                        {/* Market Comparison */}
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Info className="w-4 h-4 text-zion-cyan" />
                            <span className="text-zion-slate-light text-sm">Market Rate:</span>
                          </div>
                          <span className="text-zion-cyan font-medium">{service.marketComparison}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 text-sm font-medium">{service.savings}</span>
                        </div>
                      </div>

                      {/* Pricing Plans */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(service.pricing).map(([planName, plan], planIndex) => (
                          <div
                            key={planIndex}
                            className={`border rounded-lg p-4 ${
                              planName === 'professional' 
                                ? 'border-zion-cyan bg-zion-cyan/10' 
                                : 'border-zion-purple/30'
                            }`}
                          >
                            {planName === 'professional' && (
                              <div className="text-center mb-2">
                                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-2 py-1 rounded-full text-xs font-medium">
                                  Most Popular
                                </span>
                              </div>
                            )}
                            
                            <div className="text-center mb-4">
                              <h5 className="text-lg font-semibold text-white mb-1 capitalize">{planName}</h5>
                              <div className="flex items-baseline justify-center">
                                <span className="text-2xl font-bold text-white">{plan.price}</span>
                                <span className="text-zion-slate-light ml-1">{plan.period}</span>
                              </div>
                            </div>

                            <ul className="space-y-2 mb-4">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-zion-slate-light text-xs">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <button className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                              planName === 'professional'
                                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                                : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                            }`}>
                              Get Started
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Custom solutions for large organizations with unique requirements and dedicated support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Custom Enterprise Packages</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-zion-slate-light">Custom AI model development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-zion-slate-light">White-label solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-zion-slate-light">Dedicated account management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-zion-slate-light">24/7 priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-zion-slate-light">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                Contact Enterprise Sales
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Volume Discounts</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">5+ services</span>
                  <span className="text-zion-cyan font-semibold">15% discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">10+ services</span>
                  <span className="text-zion-cyan font-semibold">25% discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">20+ services</span>
                  <span className="text-zion-cyan font-semibold">35% discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Annual billing</span>
                  <span className="text-zion-cyan font-semibold">Additional 10% off</span>
                </div>
              </div>
              <button className="w-full py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Calculate Savings
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Ready to Get Started?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white font-medium hover:text-zion-cyan transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-zion-cyan transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Address</p>
                    <p className="text-white font-medium">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Your Custom Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                />
                
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                />
                
                <select className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors">
                  <option value="">Select Service Category</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity & Compliance</option>
                  <option value="quantum">Quantum Computing</option>
                  <option value="micro-saas">Micro SAAS Solutions</option>
                  <option value="it">IT Infrastructure & DevOps</option>
                  <option value="enterprise">Enterprise Solutions</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your requirements and budget..."
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}