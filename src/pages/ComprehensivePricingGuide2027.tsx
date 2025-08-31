import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Truck, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Phone,
  Mail,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Building2,
  Rocket,
  Lightbulb,
  Network,
  Server,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Atom,
  Flask,
  Microscope,
  Beaker,
  TestTube,
  Dna,
  Pill,
  Stethoscope,
  Eye,
  Car,
  Plane,
  Ship,
  Train,
  Factory,
  Warehouse,
  Store,
  Bank,
  Building,
  Leaf,
  Gamepad2,
  MessageCircle,
  Settings,
  Cog,
  Palette,
  Menu,
  X,
  Video,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Added missing import
import { SEO } from '../components/SEO'; // Kept existing import
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025'; // Kept existing import

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ComprehensivePricingGuide2027 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      id: 'ai-autonomous',
      name: 'AI Autonomous Platforms',
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 'ai-business',
      name: 'AI Business Solutions',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 'it-infrastructure',
      name: 'IT & Infrastructure',
      icon: <Server className="w-5 h-5" />
    }
  ];

  const allServices = [
    // AI Autonomous Platforms
    {
      id: 'ai-autonomous-logistics',
      name: 'AI Autonomous Logistics Platform',
      category: 'ai-autonomous',
      description: 'Revolutionary AI-powered logistics with route optimization and autonomous fleet management',
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      link: '/services/ai-autonomous-logistics-platform',
      pricing: {
        starter: { price: 299, features: ['Up to 100 shipments/month', 'Basic route optimization', 'Real-time tracking', 'Email support'] },
        professional: { price: 799, features: ['Up to 1,000 shipments/month', 'Advanced AI optimization', 'Predictive analytics', 'API access', 'Priority support'] },
        enterprise: { price: 1999, features: ['Unlimited shipments', 'Full AI suite', 'Custom AI models', 'Dedicated support', 'White-label options'] }
      },
      marketPrice: 'Industry average: $500-2,500/month',
      roi: 'Reduce costs by 20-35%',
      features: ['Route Optimization', 'Predictive Analytics', 'Real-time Tracking', 'Blockchain Security', 'Autonomous Fleet Management']
    },
    {
      id: 'ai-autonomous-financial',
      name: 'AI Autonomous Financial Advisor',
      category: 'ai-autonomous',
      description: 'Transform wealth management with AI-driven investment analysis and risk management',
      icon: <Brain className="w-8 h-8 text-green-500" />,
      link: '/services/ai-autonomous-financial-advisor-platform',
      pricing: {
        starter: { price: 199, features: ['Up to $100K portfolio', 'Basic AI recommendations', 'Portfolio monitoring', 'Email support'] },
        professional: { price: 499, features: ['Up to $1M portfolio', 'Advanced AI algorithms', 'Risk management tools', 'Tax optimization', 'Priority support'] },
        enterprise: { price: 1299, features: ['Unlimited portfolio size', 'Full AI suite', 'Custom AI models', 'Dedicated advisor', 'White-label options'] }
      },
      marketPrice: 'Industry average: $300-1,500/month',
      roi: 'Improve returns by 15-25%',
      features: ['Investment Analysis', 'Risk Management', 'Portfolio Optimization', '24/7 Monitoring', 'Predictive Analytics']
    },
    {
      id: 'ai-autonomous-healthcare',
      name: 'AI Autonomous Healthcare Diagnostics',
      category: 'ai-autonomous',
      description: 'Revolutionize medical diagnostics with AI-powered imaging analysis and clinical support',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      link: '/services/ai-autonomous-healthcare-diagnostics-platform',
      pricing: {
        starter: { price: 399, features: ['Up to 100 patients/month', 'Basic AI diagnostics', 'Medical imaging analysis', 'Email support'] },
        professional: { price: 1299, features: ['Up to 1,000 patients/month', 'Advanced AI algorithms', 'Predictive analytics', 'Clinical decision support', 'Priority support'] },
        enterprise: { price: 2999, features: ['Unlimited patients', 'Full AI suite', 'Custom AI models', 'Dedicated support', 'White-label options'] }
      },
      marketPrice: 'Industry average: $600-3,000/month',
      roi: 'Reduce diagnostic errors by 30-40%',
      features: ['Medical Imaging', 'Predictive Analytics', 'Clinical Support', 'Patient Monitoring', 'Population Health Analytics']
    },
    // AI Business Solutions
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Dashboard',
      category: 'ai-business',
      description: 'Comprehensive business analytics with real-time insights and predictive modeling',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      link: '/services/ai-business-intelligence-dashboard',
      pricing: {
        starter: { price: 199, features: ['Basic analytics', 'Standard reports', 'Email support', 'Mobile access'] },
        professional: { price: 499, features: ['Advanced analytics', 'Predictive modeling', 'Custom dashboards', 'API access', 'Priority support'] },
        enterprise: { price: 1299, features: ['Full BI suite', 'Custom AI models', 'White-label options', 'Dedicated support', 'Advanced security'] }
      },
      marketPrice: 'Industry average: $300-1,200/month',
      roi: 'Improve decision-making by 40-60%',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Automated Reporting', 'Custom Dashboards', 'Data Integration']
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      category: 'ai-business',
      description: 'Intelligent customer service with AI-powered chatbots and sentiment analysis',
      icon: <MessageCircle className="w-8 h-8 text-cyan-500" />,
      link: '/services/ai-customer-support-automation',
      pricing: {
        starter: { price: 149, features: ['Basic chatbot', 'Email support', 'Standard templates', 'Mobile access'] },
        professional: { price: 399, features: ['Advanced AI chatbot', 'Sentiment analysis', 'Ticket automation', 'API access', 'Priority support'] },
        enterprise: { price: 999, features: ['Full AI suite', 'Custom AI models', 'White-label options', 'Dedicated support', 'Advanced analytics'] }
      },
      marketPrice: 'Industry average: $200-800/month',
      roi: 'Reduce support costs by 30-50%',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Automation', '24/7 Support', 'Performance Analytics']
    },
    // IT Infrastructure
    {
      id: 'quantum-edge-computing',
      name: 'Quantum Edge Computing Solutions',
      category: 'it-infrastructure',
      description: 'Revolutionary quantum computing integration with edge computing for unprecedented processing power',
      icon: <Atom className="w-8 h-8 text-indigo-500" />,
      link: '/services/quantum-edge-computing-solutions',
      pricing: {
        starter: { price: 999, features: ['Basic quantum processing', 'Edge computing', 'Standard security', 'Email support'] },
        professional: { price: 2499, features: ['Advanced quantum processing', 'Hybrid architecture', 'Enhanced security', 'API access', 'Priority support'] },
        enterprise: { price: 4999, features: ['Full quantum suite', 'Custom quantum models', 'White-label options', 'Dedicated support', 'Advanced security'] }
      },
      marketPrice: 'Industry average: $1,500-5,000/month',
      roi: 'Improve processing speed by 100-1000x',
      features: ['Quantum Processing', 'Edge Computing', 'Hybrid Architecture', 'Advanced Security', 'Real-time Analytics']
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Intelligence Platform',
      category: 'it-infrastructure',
      description: 'Advanced threat detection and response with AI-powered security analytics',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/services/ai-cybersecurity-intelligence-platform',
      pricing: {
        starter: { price: 399, features: ['Basic threat detection', 'Standard monitoring', 'Email support', 'Mobile access'] },
        professional: { price: 999, features: ['Advanced AI analytics', 'Automated response', 'API access', 'Priority support', 'Custom integrations'] },
        enterprise: { price: 2499, features: ['Full security suite', 'Custom AI models', 'White-label options', 'Dedicated support', 'Advanced threat intelligence'] }
      },
      marketPrice: 'Industry average: $500-2,500/month',
      roi: 'Reduce security incidents by 60-80%',
      features: ['Threat Detection', 'AI Analytics', 'Automated Response', '24/7 Monitoring', 'Threat Intelligence']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getPlanFeatures = (service, plan) => {
    return service.pricing[plan]?.features || [];
  };

  const getPlanPrice = (service, plan) => {
    return service.pricing[plan]?.price || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT, and Micro SaaS services. Find competitive pricing, ROI projections, and detailed service breakdowns."
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Comprehensive Pricing Guide 2027
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing for
              <span className="text-zion-cyan"> Innovative AI Services</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover competitive pricing for our cutting-edge AI services. Compare plans, features, and ROI to find the perfect solution for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-slate-800 text-zion-slate-light hover:bg-slate-700'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {['starter', 'professional', 'enterprise'].map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors capitalize ${
                  selectedPlan === plan
                    ? 'bg-zion-cyan text-white'
                    : 'bg-slate-800 text-zion-slate-light hover:bg-slate-700'
                }`}
              >
                {plan === 'starter' && <Star className="w-4 h-4 mr-2" />}
                {plan === 'professional' && <CheckCircle className="w-4 h-4 mr-2" />}
                {plan === 'enterprise' && <Crown className="w-4 h-4 mr-2" />}
                {plan}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="flex items-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">
                    ${getPlanPrice(service, selectedPlan)}
                    <span className="text-sm text-zion-slate-light font-normal">/month</span>
                  </div>
                  <p className="text-sm text-zion-slate-light">{service.marketPrice}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">ROI:</h4>
                  <p className="text-sm text-green-400">{service.roi}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Plan Features:</h4>
                  <ul className="space-y-1">
                    {getPlanFeatures(service, selectedPlan).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">All Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-slate-700 text-xs text-zion-slate-light rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plan Comparison
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Compare our three pricing tiers to find the perfect fit for your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: 'From $149', description: 'Perfect for small businesses', color: 'border-slate-700' },
              { name: 'Professional', price: 'From $499', description: 'Ideal for growing companies', color: 'border-zion-cyan', popular: true },
              { name: 'Enterprise', price: 'From $1,299', description: 'For large-scale operations', color: 'border-slate-700' }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-zion-cyan">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Core AI features',
                    'Email support',
                    'Mobile app access',
                    'Standard integrations',
                    plan.name === 'Professional' ? 'API access' : '',
                    plan.name === 'Professional' ? 'Priority support' : '',
                    plan.name === 'Enterprise' ? 'Custom AI models' : '',
                    plan.name === 'Enterprise' ? 'White-label options' : '',
                    plan.name === 'Enterprise' ? 'Dedicated support' : ''
                  ].filter(Boolean).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Contact our sales team for custom pricing, volume discounts, and enterprise solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
                Contact Sales
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            Questions about our pricing or services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-zion-cyan">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
