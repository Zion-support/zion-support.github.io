import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Star,
  Crown,
  Sparkles,
  Target,
  Award,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Gauge,
  GitFork,
  Atom,
  Eye,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2,
  PenTool,
  Image,
  Video,
  FileText,
  Layers,
  Type,
  Share2,
  ShoppingCart,
  Home,
  Palette,
  Camera,
  Mic,
  Play,
  Music,
  Network2,
  AlertTriangle,
  Key,
  Fingerprint,
  ServerCrash,
  Search,
  Filter,
  Activity
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-operations', name: 'AI Operations', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-sales', name: 'AI Sales', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-indigo-500 to-purple-500' },
    { id: 'content-creation', name: 'Content Creation', icon: PenTool, color: 'from-orange-500 to-red-500' }
  ];

  const allServices = [
    {
      id: 'ai-autonomous-business-operations',
      name: 'AI Autonomous Business Operations Platform',
      description: 'Transform your business with autonomous AI operations',
      category: 'ai-operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      pricing: {
        monthly: { starter: 299, professional: 799, enterprise: 1999 },
        annual: { starter: 2990, professional: 7990, enterprise: 19990 }
      },
      features: {
        starter: [
          'Basic AI decision support',
          'Process automation (up to 10 workflows)',
          'Standard analytics dashboard',
          'Email support',
          'Up to 5 users',
          'Basic integrations'
        ],
        professional: [
          'Advanced AI decision making',
          'Unlimited workflow automation',
          'Predictive analytics',
          'Real-time monitoring',
          'Priority support',
          'Up to 25 users',
          'Advanced integrations',
          'Custom reporting'
        ],
        enterprise: [
          'Full AI autonomy',
          'Custom AI model development',
          'Dedicated account manager',
          '24/7 priority support',
          'Unlimited users',
          'White-label solutions',
          'SLA guarantees',
          'On-site training'
        ]
      },
      benefits: [
        'Reduce operational costs by up to 40%',
        'Increase efficiency by 60%',
        'Improve decision accuracy by 95%',
        '24/7 autonomous operations'
      ]
    },
    {
      id: 'ai-sales-intelligence',
      name: 'AI Sales Intelligence Platform',
      description: 'Revolutionize your sales with AI-powered intelligence',
      category: 'ai-sales',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      pricing: {
        monthly: { starter: 199, professional: 499, enterprise: 1299 },
        annual: { starter: 1990, professional: 4990, enterprise: 12990 }
      },
      features: {
        starter: [
          'AI lead scoring (up to 1000 leads/month)',
          'Basic sales analytics dashboard',
          'Email support',
          'Up to 5 users',
          'Standard integrations',
          'Monthly reports'
        ],
        professional: [
          'Advanced AI lead scoring (unlimited)',
          'Predictive sales analytics',
          'Real-time market intelligence',
          'Automated outreach sequences',
          'Priority support',
          'Up to 25 users',
          'Advanced integrations',
          'Custom reporting'
        ],
        enterprise: [
          'Full AI sales intelligence suite',
          'Custom AI model development',
          'Dedicated account manager',
          '24/7 priority support',
          'Unlimited users',
          'White-label solutions',
          'SLA guarantees',
          'On-site training'
        ]
      },
      benefits: [
        'Increase sales conversion rates by up to 300%',
        'Reduce lead qualification time by 80%',
        'Improve sales forecasting accuracy by 95%',
        'Automate repetitive sales tasks'
      ]
    },
    {
      id: 'quantum-ai-cybersecurity',
      name: 'Quantum AI Cybersecurity Platform',
      description: 'Future-proof your security with quantum-resistant encryption',
      category: 'cybersecurity',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      pricing: {
        monthly: { starter: 399, professional: 899, enterprise: 2499 },
        annual: { starter: 3990, professional: 8990, enterprise: 24990 }
      },
      features: {
        starter: [
          'Quantum-resistant encryption',
          'AI threat detection (basic)',
          'Zero-trust network access',
          'Email support',
          'Up to 10 users',
          'Standard security monitoring',
          'Monthly security reports'
        ],
        professional: [
          'Advanced quantum encryption',
          'Full AI threat detection suite',
          'Comprehensive zero-trust architecture',
          'Behavioral analytics',
          'Priority support',
          'Up to 100 users',
          'Advanced monitoring',
          'Custom security policies'
        ],
        enterprise: [
          'Full quantum cybersecurity suite',
          'Custom AI model development',
          'Dedicated security team',
          '24/7 priority support',
          'Unlimited users',
          'White-label solutions',
          'SLA guarantees',
          'On-site security training'
        ]
      },
      benefits: [
        'Protect against quantum computing attacks',
        'Reduce security incidents by up to 95%',
        'Real-time threat detection and response',
        'Compliance with international security standards'
      ]
    },
    {
      id: 'ai-content-creation-studio',
      name: 'AI Content Creation Studio',
      description: 'Transform your content strategy with AI-powered creation',
      category: 'content-creation',
      icon: PenTool,
      color: 'from-emerald-500 to-teal-500',
      pricing: {
        monthly: { starter: 99, professional: 299, enterprise: 799 },
        annual: { starter: 990, professional: 2990, enterprise: 7990 }
      },
      features: {
        starter: [
          'AI text generation (up to 50 articles/month)',
          'Basic image generation (up to 100 images/month)',
          'Standard templates',
          'Email support',
          'Up to 3 users',
          'Basic SEO tools',
          'Content analytics (basic)'
        ],
        professional: [
          'Unlimited AI text generation',
          'Advanced image and video generation',
          'Custom brand voice training',
          'Priority support',
          'Up to 10 users',
          'Advanced SEO optimization',
          'Comprehensive analytics',
          'Custom templates'
        ],
        enterprise: [
          'Full AI content creation suite',
          'Custom AI model training',
          'Dedicated content strategist',
          '24/7 priority support',
          'Unlimited users',
          'White-label solutions',
          'SLA guarantees',
          'On-site training'
        ]
      },
      benefits: [
        'Increase content production by up to 500%',
        'Reduce content creation costs by 70%',
        'Improve SEO rankings with optimized content',
        'Maintain consistent brand voice'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Explore our transparent pricing for all AI-powered micro SAAS services. From autonomous operations to quantum cybersecurity, find the perfect plan for your business."
        keywords="AI services pricing, micro SAAS pricing, business automation pricing, cybersecurity pricing, sales intelligence pricing, content creation pricing"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing 2027
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Guide 2027
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover transparent pricing for all our AI-powered micro SAAS services. 
              Choose the plan that fits your business needs and scale as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
              </span>
            </div>
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
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                    : 'border-purple-500/30 text-purple-300 hover:border-purple-500/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12">
                  {/* Service Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.name}</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.description}</p>
                  </div>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Plans */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['starter', 'professional', 'enterprise'].map((plan, planIndex) => (
                      <div
                        key={plan}
                        className={`relative ${plan === 'professional' ? 'scale-105' : ''}`}
                      >
                        {plan === 'professional' && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                              <Star className="w-4 h-4 mr-2" />
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 h-full">
                          <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                            <div className="text-4xl font-bold text-white">
                              ${service.pricing[billingCycle][plan]}
                              <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                            </div>
                          </div>
                          
                          <ul className="space-y-3 mb-8">
                            {service.features[plan].map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="space-y-3">
                            <Link
                              to={`/services/${service.id}`}
                              className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                plan === 'professional'
                                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                                  : 'border border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
                              }`}
                            >
                              Learn More
                            </Link>
                            <Link
                              to="/contact"
                              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for a personalized consultation and discover the perfect plan for your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Visit Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
