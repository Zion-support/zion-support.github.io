import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Globe, 
  Code, 
  Database, 
  Cpu,
  TrendingUp,
  Users,
  Award,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  Bookmark,
  Clock,
  Eye,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [featuredContent, setFeaturedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const contentCategories = {
    ai: {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    security: {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    blockchain: {
      title: "Blockchain & Web3",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    iot: {
      title: "IoT & Edge Computing",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    quantum: {
      title: "Quantum Computing",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    }
  };

  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Business Process Automation Suite",
      description: "Revolutionary AI automation that reduces operational costs by 40-60% and increases productivity by 300% with guaranteed ROI within 3 months.",
      price: "$299/month",
      marketPrice: "$500-800/month",
      category: "ai",
      features: [
        "Intelligent workflow automation",
        "Natural language processing",
        "Predictive analytics",
        "Real-time optimization"
      ],
      benefits: [
        "40-60% cost reduction",
        "300% productivity increase",
        "3-month ROI guarantee",
        "24/7 automated operations"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.9,
      reviews: 1247,
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Advanced Threat Detection System",
      description: "Next-generation cybersecurity with AI-powered threat detection that identifies and neutralizes threats 90% faster with 70% fewer false positives.",
      price: "$399/month",
      marketPrice: "$600-1200/month",
      category: "security",
      features: [
        "AI-powered threat hunting",
        "Behavioral analysis",
        "Zero-day detection",
        "Automated response"
      ],
      benefits: [
        "90% faster threat detection",
        "70% fewer false positives",
        "24/7 monitoring",
        "Compliance ready"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.8,
      reviews: 892,
      badge: "Enterprise Grade",
      badgeColor: "bg-gradient-to-r from-red-400 to-pink-500"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Automation Platform",
      description: "Complete cloud management solution that reduces infrastructure costs by 40% and enables 10x faster deployments with automated scaling.",
      price: "$599/month",
      marketPrice: "$800-2000/month",
      category: "cloud",
      features: [
        "Infrastructure as Code",
        "Auto-scaling capabilities",
        "Cost optimization",
        "Disaster recovery"
      ],
      benefits: [
        "40% cost reduction",
        "10x faster deployment",
        "99.9% uptime guarantee",
        "Global infrastructure"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.7,
      reviews: 1156,
      badge: "Cloud Native",
      badgeColor: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Enterprise Blockchain Development Platform",
      description: "Complete blockchain solution for enterprises with smart contracts, DeFi protocols, and NFT marketplace capabilities.",
      price: "$2,999/month",
      marketPrice: "$5000-15000/month",
      category: "blockchain",
      features: [
        "Smart contract development",
        "DeFi protocol creation",
        "NFT marketplace",
        "Cross-chain integration"
      ],
      benefits: [
        "Faster time to market",
        "Secure transactions",
        "Decentralized governance",
        "Scalable infrastructure"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.9,
      reviews: 743,
      badge: "Cutting Edge",
      badgeColor: "bg-gradient-to-r from-green-400 to-emerald-500"
    },
    {
      id: 5,
      title: "IoT Predictive Maintenance Platform",
      description: "AI-powered IoT solution that predicts equipment failures with 95% accuracy, reducing unplanned downtime by 50%.",
      price: "$1,200/month",
      marketPrice: "$1000-3000/month",
      category: "iot",
      features: [
        "Predictive analytics",
        "Real-time monitoring",
        "Maintenance scheduling",
        "Performance optimization"
      ],
      benefits: [
        "95% prediction accuracy",
        "50% downtime reduction",
        "30% maintenance savings",
        "Real-time insights"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.8,
      reviews: 634,
      badge: "Industry Leader",
      badgeColor: "bg-gradient-to-r from-indigo-400 to-purple-500"
    },
    {
      id: 6,
      title: "Quantum Algorithm Development Suite",
      description: "Revolutionary quantum computing platform for solving complex optimization problems with quantum advantage.",
      price: "$3,999/month",
      marketPrice: "$5000-20000/month",
      category: "quantum",
      features: [
        "Quantum circuit design",
        "Algorithm optimization",
        "Cryptography solutions",
        "Research collaboration"
      ],
      benefits: [
        "Quantum advantage access",
        "Complex problem solving",
        "Future-proof technology",
        "Research partnership"
      ],
      image: "/api/placeholder/600/400",
      rating: 4.9,
      reviews: 421,
      badge: "Next Gen",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI automation suite transformed our operations. We achieved 45% cost reduction and 280% productivity increase within 2 months.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Michael Rodriguez",
      role: "Security Director, FinanceFirst",
      content: "Their threat detection system is exceptional. We've reduced security incidents by 85% and improved our compliance posture significantly.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Lead, Quantum Labs",
      content: "The quantum computing platform opened new possibilities for our research. We're solving problems that were impossible before.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];

  const stats = [
    { label: "Active Clients", value: "10,000+", icon: Users },
    { label: "Services Deployed", value: "50,000+", icon: Rocket },
    { label: "Cost Savings", value: "$2.5B+", icon: TrendingUp },
    { label: "Success Rate", value: "99.2%", icon: Award }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredServices = featuredServices.filter(service => 
    activeTab === 'all' || service.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Revolutionary Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ultimate Content
              </span>
              <br />
              <span className="text-slate-800">Showcase 2026</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge technology solutions that are transforming businesses worldwide. 
              From AI automation to quantum computing, we deliver innovation that drives real results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200"
                >
                  <stat.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-800">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              All Services
            </button>
            {Object.entries(contentCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
                >
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 ${service.badgeColor} text-white text-xs font-bold rounded-full`}>
                    {service.badge}
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 ${contentCategories[service.category]?.bgColor} ${contentCategories[service.category]?.borderColor} border rounded-full`}>
                        <span className={`text-sm font-medium bg-gradient-to-r ${contentCategories[service.category]?.color} bg-clip-text text-transparent`}>
                          {contentCategories[service.category]?.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-slate-600">{service.rating}</span>
                        <span className="text-sm text-slate-400">({service.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-green-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">{service.price}</div>
                        <div className="text-sm text-slate-500">Market: {service.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">Save up to 70%</div>
                        <div className="text-xs text-slate-400">vs market rate</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                        Learn More
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our revolutionary technology solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateContentShowcase2026;