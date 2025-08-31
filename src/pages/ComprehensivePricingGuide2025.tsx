import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  BarChart3,
  Code,
  Server,
  Chip,
  Atom,
  Rocket,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Satellite,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi,
  DollarSign,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2,
  Eye,
  Leaf,
  Factory,
  Car,
  Truck,
  Ship,
  Plane,
  Train,
  Filter,
  Search
} from 'lucide-react';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: DollarSign,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const allServices = [
    // Quantum Computing Services
    {
      id: 'ai-quantum-hybrid',
      title: 'AI-Powered Quantum Computing Platform',
      description: 'Revolutionary quantum computing enhanced with artificial intelligence for unprecedented computational capabilities',
      category: 'quantum',
      icon: Atom,
      pricing: [
        {
          plan: 'Starter',
          price: '$2,500',
          period: '/month',
          description: 'Perfect for research institutions and startups',
          features: [
            'Basic quantum computing access',
            'Standard AI integration',
            'Community support',
            '5 quantum processing hours/month',
            'Basic security protocols'
          ],
          popular: false
        },
        {
          plan: 'Professional',
          price: '$8,500',
          period: '/month',
          description: 'Ideal for growing businesses and research teams',
          features: [
            'Advanced quantum computing capabilities',
            'Full AI integration suite',
            'Priority support',
            '25 quantum processing hours/month',
            'Advanced security protocols',
            'Custom algorithm development'
          ],
          popular: true
        },
        {
          plan: 'Enterprise',
          price: '$25,000',
          period: '/month',
          description: 'For large organizations requiring maximum performance',
          features: [
            'Unlimited quantum computing access',
            'Custom AI model development',
            '24/7 dedicated support',
            'Unlimited quantum processing hours',
            'Military-grade security',
            'Custom infrastructure setup',
            'On-site consultation'
          ],
          popular: false
        }
      ],
      link: '/services/ai-quantum-computing-platform',
      color: 'from-indigo-500 to-purple-600',
      marketPrice: '$5,000 - $50,000/month',
      roi: '300-500%',
      delivery: '4-8 weeks'
    },
    // Space Technology Services
    {
      id: 'ai-space-tech',
      title: 'AI-Powered Space Technology Platform',
      description: 'Cutting-edge space technology solutions with AI-powered satellite systems and space exploration',
      category: 'space',
      icon: Rocket,
      pricing: [
        {
          plan: 'Explorer',
          price: '$3,500',
          period: '/month',
          description: 'Perfect for research institutions and space startups',
          features: [
            'Basic satellite data access',
            'Standard AI analytics',
            'Community support',
            '10GB data transfer/month',
            'Basic security protocols',
            'API access'
          ],
          popular: false
        },
        {
          plan: 'Pioneer',
          price: '$12,500',
          period: '/month',
          description: 'Ideal for growing space companies and research teams',
          features: [
            'Advanced satellite capabilities',
            'Full AI integration suite',
            'Priority support',
            '100GB data transfer/month',
            'Advanced security protocols',
            'Custom algorithm development',
            'Real-time monitoring'
          ],
          popular: true
        },
        {
          plan: 'Enterprise',
          price: '$45,000',
          period: '/month',
          description: 'For large organizations requiring maximum space capabilities',
          features: [
            'Unlimited satellite access',
            'Custom AI model development',
            '24/7 dedicated support',
            'Unlimited data transfer',
            'Military-grade security',
            'Custom infrastructure setup',
            'On-site consultation',
            'Exclusive space missions'
          ],
          popular: false
        }
      ],
      link: '/services/ai-space-technology-platform',
      color: 'from-purple-500 to-indigo-600',
      marketPrice: '$8,000 - $80,000/month',
      roi: '250-400%',
      delivery: '6-12 weeks'
    },
    // Financial Technology Services
    {
      id: 'ai-fintech',
      title: 'AI-Powered Financial Technology Platform',
      description: 'Next-generation fintech solutions with AI-powered trading, fraud detection, and risk management',
      category: 'fintech',
      icon: DollarSign,
      pricing: [
        {
          plan: 'Starter',
          price: '$1,500',
          period: '/month',
          description: 'Perfect for fintech startups and small financial institutions',
          features: [
            'Basic AI trading algorithms',
            'Standard fraud detection',
            'Community support',
            '5 API calls/second',
            'Basic security protocols',
            'Standard reporting'
          ],
          popular: false
        },
        {
          plan: 'Professional',
          price: '$5,500',
          period: '/month',
          description: 'Ideal for growing fintech companies and regional banks',
          features: [
            'Advanced AI trading capabilities',
            'Full fraud detection suite',
            'Priority support',
            '25 API calls/second',
            'Advanced security protocols',
            'Custom algorithm development',
            'Real-time analytics'
          ],
          popular: true
        },
        {
          plan: 'Enterprise',
          price: '$18,000',
          period: '/month',
          description: 'For large financial institutions requiring maximum performance',
          features: [
            'Unlimited AI trading access',
            'Custom AI model development',
            '24/7 dedicated support',
            'Unlimited API calls',
            'Military-grade security',
            'Custom infrastructure setup',
            'On-site consultation',
            'Exclusive financial products'
          ],
          popular: false
        }
      ],
      link: '/services/ai-financial-technology-platform',
      color: 'from-green-500 to-blue-600',
      marketPrice: '$3,000 - $30,000/month',
      roi: '200-350%',
      delivery: '3-6 weeks'
    },
    // AI Content Creation Services
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio Pro',
      description: 'Professional content creation platform powered by advanced AI algorithms',
      category: 'ai',
      icon: MessageSquare,
      pricing: [
        {
          plan: 'Creator',
          price: '$500',
          period: '/month',
          description: 'Perfect for content creators and small businesses',
          features: [
            'AI Writing Assistant',
            'Content Optimization',
            'Multi-format Support',
            'SEO Integration',
            'Basic Templates',
            'Email Support'
          ],
          popular: false
        },
        {
          plan: 'Professional',
          price: '$1,500',
          period: '/month',
          description: 'Ideal for marketing agencies and growing businesses',
          features: [
            'Advanced AI Writing',
            'Content Strategy Tools',
            'Priority Support',
            'Custom Templates',
            'Analytics Dashboard',
            'Team Collaboration',
            'API Access'
          ],
          popular: true
        },
        {
          plan: 'Enterprise',
          price: '$5,000',
          period: '/month',
          description: 'For large organizations requiring maximum content capabilities',
          features: [
            'Unlimited Content Creation',
            'Custom AI Models',
            '24/7 Dedicated Support',
            'White-label Solutions',
            'Advanced Analytics',
            'Custom Integrations',
            'On-site Training'
          ],
          popular: false
        }
      ],
      link: '/services/ai-content-creation-studio-pro',
      color: 'from-blue-500 to-purple-600',
      marketPrice: '$800 - $8,000/month',
      roi: '150-300%',
      delivery: '1-2 weeks'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = service.pricing.some(p => parseInt(p.price.replace(/[^0-9]/g, '')) <= 2000);
    } else if (priceRange === 'medium') {
      matchesPrice = service.pricing.some(p => {
        const price = parseInt(p.price.replace(/[^0-9]/g, ''));
        return price > 2000 && price <= 10000;
      });
    } else if (priceRange === 'high') {
      matchesPrice = service.pricing.some(p => parseInt(p.price.replace(/[^0-9]/g, '')) > 10000);
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2025
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Transparent pricing for all our cutting-edge AI, quantum computing, space technology, 
                and financial technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Download Pricing PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Price Ranges</option>
                <option value="low">$0 - $2,000/month</option>
                <option value="medium">$2,001 - $10,000/month</option>
                <option value="high">$10,001+/month</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeCategory === 'all' ? 'All Services' : `${serviceCategories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredServices.length} services found
            </p>
          </div>
          
          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">Market: {service.marketPrice}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">ROI: {service.roi}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-600" />
                            <span className="text-gray-700">Delivery: {service.delivery}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={service.link}
                      className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center gap-2`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Pricing Plans */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.pricing.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`relative rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                          plan.popular
                            ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg'
                            : 'border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="text-center mb-6">
                          <h4 className={`text-xl font-bold mb-2 ${
                            plan.popular ? 'text-gray-900' : 'text-gray-900'
                          }`}>
                            {plan.plan}
                          </h4>
                          <div className="flex items-baseline justify-center">
                            <span className={`text-3xl font-bold ${
                              plan.popular ? 'text-gray-900' : 'text-gray-900'
                            }`}>
                              {plan.price}
                            </span>
                            <span className={`ml-2 text-lg ${
                              plan.popular ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {plan.period}
                            </span>
                          </div>
                          <p className={`mt-2 text-sm ${
                            plan.popular ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {plan.description}
                          </p>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className={plan.popular ? 'text-gray-700' : 'text-gray-600'}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600'
                            : `bg-gradient-to-r ${service.color} text-white hover:opacity-90`
                        }`}>
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the perfect plan for your business and start your transformation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your technology needs? Contact our experts today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-blue-600 font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600 font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-blue-600 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;