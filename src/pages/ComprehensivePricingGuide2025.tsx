import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, 
  ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, 
  Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, 
  Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, 
  Database, Network, Clock, ArrowRight, Sparkles, Phone, Mail, 
  MapPin, Satellite, FileText, Zap, Palette, Camera, Video, 
  Music, Gamepad2, Car, Plane, Ship, Train, Leaf, Sun, Wind, 
  Droplets, Mountain, TreePine, Recycle, Lightbulb, Battery, 
  Wifi, Bluetooth, Radio, Telescope, Microscope, Flask, TestTube, 
  Beaker, Pill, Stethoscope, Syringe, HeartPulse, Activity, 
  Thermometer, Droplet, EyeOff, Key, Fingerprint, Scan, QrCode, 
  CreditCard, Wallet, PiggyBank, TrendingDown, BarChart, PieChart, 
  LineChart, ScatterChart, AreaChart, CandlestickChart, GanttChart, 
  Kanban, Calendar, Timer, Stopwatch, AlertTriangle, Search,
  CheckCircle, XCircle, Info
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: 0 },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: 0 },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: 0 },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: 0 }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      description: 'Comprehensive AI orchestration platform for enterprise-wide automation and decision-making.',
      category: 'AI & ML',
      monthlyPrice: 4500,
      yearlyPrice: 48600,
      features: [
        'Enterprise-wide AI automation',
        'Decision intelligence engine',
        'Process optimization algorithms',
        'Integration hub for all systems',
        'Scalable architecture design',
        '24/7 monitoring and support',
        'Custom AI model training',
        'Advanced analytics dashboard'
      ],
      benefits: [
        'Reduce operational costs by 40%',
        'Improve decision accuracy by 85%',
        'Automate 70% of repetitive tasks',
        'Scale operations without additional staff'
      ],
      icon: Brain,
      badge: 'Enterprise',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-enterprise-orchestrator',
      marketPrice: 5800,
      savings: '22%',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'ai-neural-architecture-optimizer',
      name: 'AI Neural Architecture Optimizer',
      description: 'Advanced neural network architecture optimization with automated hyperparameter tuning and model selection.',
      category: 'AI & ML',
      monthlyPrice: 5200,
      yearlyPrice: 56160,
      features: [
        'Automated architecture optimization',
        'Hyperparameter tuning algorithms',
        'Model selection automation',
        'Performance analysis tools',
        'AutoML integration',
        'Real-time optimization',
        'Custom model architectures',
        'Performance benchmarking'
      ],
      benefits: [
        'Reduce model training time by 60%',
        'Improve model accuracy by 25%',
        'Automate ML pipeline optimization',
        'Reduce ML engineer workload by 50%'
      ],
      icon: Brain,
      badge: 'Advanced AI',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-neural-architecture-optimizer',
      marketPrice: 6800,
      savings: '24%',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 'ai-federated-learning-platform',
      name: 'AI Federated Learning Platform',
      description: 'Privacy-preserving federated learning platform for distributed AI model training across organizations.',
      category: 'AI & ML',
      monthlyPrice: 4800,
      yearlyPrice: 51840,
      features: [
        'Federated learning algorithms',
        'Privacy preservation protocols',
        'Distributed training coordination',
        'Model aggregation engine',
        'Security compliance tools',
        'Multi-organization support',
        'Real-time collaboration',
        'Audit trail management'
      ],
      benefits: [
        'Maintain data privacy across organizations',
        'Collaborate on AI models without sharing data',
        'Reduce data transfer costs by 80%',
        'Comply with strict privacy regulations'
      ],
      icon: Network,
      badge: 'Privacy-First',
      color: 'from-green-600 to-emerald-700',
      link: '/services/ai-federated-learning-platform',
      marketPrice: 6200,
      savings: '23%',
      rating: 4.9,
      reviews: 67
    },

    // Micro SaaS Solutions
    {
      id: 'ai-powered-churn-predictor',
      name: 'AI-Powered Churn Predictor',
      description: 'Intelligent customer churn prediction with behavioral analysis and retention strategies.',
      category: 'Micro SaaS',
      monthlyPrice: 1200,
      yearlyPrice: 12960,
      features: [
        'Advanced churn prediction models',
        'Behavioral analysis engine',
        'Retention strategy recommendations',
        'Customer segmentation tools',
        'Predictive analytics dashboard',
        'Real-time alerts and notifications',
        'Integration with CRM systems',
        'Custom retention campaigns'
      ],
      benefits: [
        'Reduce customer churn by 30%',
        'Increase customer lifetime value by 40%',
        'Improve retention ROI by 200%',
        'Automate customer success workflows'
      ],
      icon: TrendingDown,
      badge: 'Retention',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-powered-churn-predictor',
      marketPrice: 1600,
      savings: '25%',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 'ai-interview-assessment-platform',
      name: 'AI Interview Assessment Platform',
      description: 'Intelligent interview assessment with AI-powered candidate evaluation and skill analysis.',
      category: 'Micro SaaS',
      monthlyPrice: 1800,
      yearlyPrice: 19440,
      features: [
        'AI-powered candidate evaluation',
        'Skill analysis and assessment',
        'Interview automation tools',
        'Bias detection algorithms',
        'Performance metrics dashboard',
        'Custom assessment templates',
        'Integration with ATS systems',
        'Candidate feedback system'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve hire quality by 35%',
        'Eliminate unconscious bias',
        'Reduce recruitment costs by 40%'
      ],
      icon: Users,
      badge: 'HR Tech',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/ai-interview-assessment-platform',
      marketPrice: 2400,
      savings: '25%',
      rating: 4.8,
      reviews: 98
    },

    // IT Infrastructure Services
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive cybersecurity platform with AI-powered threat prevention and response.',
      category: 'IT Infrastructure',
      monthlyPrice: 4200,
      yearlyPrice: 45360,
      features: [
        'AI-powered threat prevention',
        'Automated incident response',
        'Security analytics dashboard',
        'Compliance management tools',
        '24/7 security monitoring',
        'Threat intelligence feeds',
        'Vulnerability assessment',
        'Security training modules'
      ],
      benefits: [
        'Reduce security incidents by 90%',
        'Improve response time by 80%',
        'Ensure compliance with regulations',
        'Protect against zero-day threats'
      ],
      icon: Shield,
      badge: 'Premium',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-cybersecurity-suite',
      marketPrice: 5400,
      savings: '22%',
      rating: 4.9,
      reviews: 189
    },
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps automation with AI-powered deployment, testing, and monitoring.',
      category: 'IT Infrastructure',
      monthlyPrice: 4200,
      yearlyPrice: 45360,
      features: [
        'AI-powered deployment automation',
        'Intelligent testing strategies',
        'Performance monitoring tools',
        'Security integration',
        'Auto-scaling capabilities',
        'CI/CD pipeline optimization',
        'Real-time performance insights',
        'Predictive maintenance alerts'
      ],
      benefits: [
        'Reduce deployment time by 70%',
        'Improve system reliability by 95%',
        'Reduce operational costs by 45%',
        'Enable continuous innovation'
      ],
      icon: Workflow,
      badge: 'DevOps',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-devops-automation-platform',
      marketPrice: 5400,
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },

    // Emerging Technology Services
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',
      category: 'Emerging Tech',
      monthlyPrice: 7500,
      yearlyPrice: 81000,
      features: [
        'Quantum neural networks',
        'Quantum algorithm optimization',
        'Real-time quantum processing',
        'Quantum-safe security protocols',
        'Hybrid computing architecture',
        'Advanced research tools',
        'Enterprise-grade APIs',
        'Expert consultation support'
      ],
      benefits: [
        'Solve complex problems 1000x faster',
        'Enable breakthrough research',
        'Future-proof your technology stack',
        'Gain competitive advantage'
      ],
      icon: Atom,
      badge: 'Quantum AI',
      color: 'from-purple-600 to-pink-700',
      link: '/services/ai-quantum-hybrid-platform',
      marketPrice: 9800,
      savings: '23%',
      rating: 4.9,
      reviews: 45
    },
    {
      id: 'ai-space-technology-platform',
      name: 'AI Space Technology Platform',
      description: 'Advanced space technology platform with satellite data analytics, mission planning, and AI-powered insights.',
      category: 'Emerging Tech',
      monthlyPrice: 6200,
      yearlyPrice: 66960,
      features: [
        'Satellite data analytics',
        'Mission planning tools',
        'AI-powered insights engine',
        'Space weather monitoring',
        'Research support platform',
        'Real-time data processing',
        'Custom space applications',
        'Expert space consultation'
      ],
      benefits: [
        'Access cutting-edge space technology',
        'Enable space-based research',
        'Optimize satellite operations',
        'Support space exploration missions'
      ],
      icon: Satellite,
      badge: 'Space Tech',
      color: 'from-blue-600 to-purple-700',
      link: '/services/ai-space-technology-platform',
      marketPrice: 8100,
      savings: '23%',
      rating: 4.9,
      reviews: 67
    }
  ];

  // Calculate category counts
  useEffect(() => {
    const updatedCategories = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? services.length : services.filter(s => s.category === cat.id).length
    }));
    // Update categories state if needed
  }, [services]);

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    const savingsPercentage = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percentage: savingsPercentage };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-20">
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
            className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto mb-8"
          >
            Transparent pricing for all our innovative AI solutions, micro SAAS platforms, and cutting-edge IT services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200">
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

      {/* Pricing Toggle */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-white text-center">Choose Your Billing Cycle</h2>
            <div className="flex items-center gap-4 bg-slate-700 p-2 rounded-full">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPlan === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPlan === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Yearly Billing
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  Save up to 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-blue-200 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => {
              const currentPrice = selectedPlan === 'monthly' ? service.monthlyPrice : service.yearlyPrice;
              const savings = calculateSavings(service.monthlyPrice, service.yearlyPrice);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === 'Enterprise' ? 'bg-purple-600 text-white' :
                      service.badge === 'Advanced AI' ? 'bg-purple-600 text-white' :
                      service.badge === 'Privacy-First' ? 'bg-green-600 text-white' :
                      service.badge === 'Retention' ? 'bg-red-600 text-white' :
                      service.badge === 'HR Tech' ? 'bg-indigo-600 text-white' :
                      service.badge === 'Premium' ? 'bg-indigo-500 text-white' :
                      service.badge === 'DevOps' ? 'bg-orange-600 text-white' :
                      service.badge === 'Quantum AI' ? 'bg-purple-500 text-white' :
                      service.badge === 'Space Tech' ? 'bg-blue-600 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex-shrink-0`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-blue-200 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-800/50 rounded-xl">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">
                        {formatPrice(currentPrice)}
                      </span>
                      <span className="text-blue-200">
                        /{selectedPlan === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {selectedPlan === 'yearly' && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-400 font-semibold">
                          Save {formatPrice(savings.amount)} ({savings.percentage}%)
                        </span>
                        <span className="text-slate-400 line-through">
                          {formatPrice(service.monthlyPrice * 12)}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-blue-200 text-sm">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-blue-200">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-blue-300 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-green-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      Learn More
                      <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full border-2 border-blue-500 text-blue-400 py-3 px-6 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your business needs and start your digital transformation journey today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 text-lg"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}