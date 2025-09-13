import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Network, 
  Users, 
  TrendingUp,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Target,
  Rocket
} from 'lucide-react';

const InteractiveServiceShowcase2025: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your business operations with intelligent automation that learns and adapts to your processes.",
      icon: Brain,
      category: "AI & Automation",
      price: "$299",
      period: "month",
      originalPrice: "$599",
      savings: "50%",
      features: [
        "Intelligent process automation",
        "Machine learning optimization",
        "Real-time analytics dashboard",
        "24/7 automated monitoring",
        "Custom workflow creation"
      ],
      benefits: [
        "Reduce operational costs by 60%",
        "Increase productivity by 300%",
        "Eliminate human errors",
        "Scale operations instantly"
      ],
      rating: 4.9,
      reviews: 1247,
      clients: "500+",
      color: "from-purple-600 to-pink-600",
      videoId: "ai-automation-demo"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Optimization",
      description: "Maximize your cloud performance while minimizing costs with our intelligent infrastructure management.",
      icon: Cloud,
      category: "Cloud & DevOps",
      price: "$399",
      period: "month",
      originalPrice: "$799",
      savings: "50%",
      features: [
        "Auto-scaling infrastructure",
        "Cost optimization algorithms",
        "Performance monitoring",
        "Disaster recovery planning",
        "Security compliance"
      ],
      benefits: [
        "Reduce cloud costs by 40%",
        "Improve performance by 200%",
        "99.9% uptime guarantee",
        "Automated scaling"
      ],
      rating: 4.8,
      reviews: 892,
      clients: "300+",
      color: "from-cyan-600 to-blue-600",
      videoId: "cloud-optimization-demo"
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Suite",
      description: "Protect your business with AI-driven cybersecurity that evolves with emerging threats.",
      icon: Shield,
      category: "Security",
      price: "$499",
      period: "month",
      originalPrice: "$999",
      savings: "50%",
      features: [
        "AI threat detection",
        "Real-time monitoring",
        "Automated incident response",
        "Compliance management",
        "Security training"
      ],
      benefits: [
        "Detect threats 90% faster",
        "Reduce security incidents by 95%",
        "Meet compliance requirements",
        "24/7 protection"
      ],
      rating: 4.9,
      reviews: 1563,
      clients: "750+",
      color: "from-green-600 to-emerald-600",
      videoId: "cybersecurity-demo"
    },
    {
      id: 4,
      title: "Data Analytics & Intelligence",
      description: "Unlock insights from your data with advanced analytics and predictive intelligence.",
      icon: Database,
      category: "Data & Analytics",
      price: "$349",
      period: "month",
      originalPrice: "$699",
      savings: "50%",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Data visualization",
        "Machine learning insights"
      ],
      benefits: [
        "Make data-driven decisions",
        "Predict future trends",
        "Optimize business processes",
        "Increase revenue by 25%"
      ],
      rating: 4.7,
      reviews: 1089,
      clients: "400+",
      color: "from-orange-600 to-red-600",
      videoId: "data-analytics-demo"
    },
    {
      id: 5,
      title: "IoT & Edge Computing",
      description: "Connect and manage your IoT devices with intelligent edge computing solutions.",
      icon: Network,
      category: "IoT & Edge",
      price: "$599",
      period: "month",
      originalPrice: "$1199",
      savings: "50%",
      features: [
        "Device management platform",
        "Edge AI processing",
        "Real-time data streaming",
        "Predictive maintenance",
        "Remote monitoring"
      ],
      benefits: [
        "Reduce maintenance costs by 35%",
        "Improve device efficiency",
        "Predict failures before they happen",
        "Scale IoT operations"
      ],
      rating: 4.8,
      reviews: 743,
      clients: "250+",
      color: "from-indigo-600 to-purple-600",
      videoId: "iot-edge-demo"
    },
    {
      id: 6,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations.",
      icon: Rocket,
      category: "Consulting",
      price: "$1,999",
      period: "month",
      originalPrice: "$3,999",
      savings: "50%",
      features: [
        "Strategic planning",
        "Technology assessment",
        "Implementation support",
        "Change management",
        "Training & support"
      ],
      benefits: [
        "Modernize legacy systems",
        "Improve operational efficiency",
        "Enhance customer experience",
        "Future-proof your business"
      ],
      rating: 4.9,
      reviews: 456,
      clients: "150+",
      color: "from-pink-600 to-rose-600",
      videoId: "digital-transformation-demo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[activeService];
  const Icon = currentService.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Premium Technology Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With Our Services</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of cutting-edge technology services, 
            all designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Side - Service Cards */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = index === activeService;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  onHoverStart={() => setHoveredCard(service.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`relative p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${service.color} border-transparent text-white shadow-xl`
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        isActive 
                          ? 'bg-white/20' 
                          : `bg-gradient-to-r ${service.color}`
                      }`}>
                        <ServiceIcon className={`w-6 h-6 ${
                          isActive ? 'text-white' : 'text-white'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1 truncate">
                          {service.title}
                        </h3>
                        <p className="text-sm opacity-90 truncate">
                          {service.category}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          isActive ? 'text-white' : 'text-white'
                        }`}>
                          {service.price}
                          <span className="text-sm opacity-75">/{service.period}</span>
                        </div>
                        <div className={`text-xs ${
                          isActive ? 'text-white/75' : 'text-green-400'
                        }`}>
                          Save {service.savings}
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-full"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Detailed View */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${currentService.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{currentService.title}</h3>
                      <p className="text-xl opacity-90">{currentService.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg opacity-90 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {currentService.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-3">
                        {currentService.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-2xl font-bold text-white">{currentService.rating}</span>
                      </div>
                      <p className="text-sm text-gray-400">{currentService.reviews} reviews</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        <span className="text-2xl font-bold text-white">{currentService.clients}</span>
                      </div>
                      <p className="text-sm text-gray-400">happy clients</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Clock className="w-5 h-5 text-green-400" />
                        <span className="text-2xl font-bold text-white">24/7</span>
                      </div>
                      <p className="text-sm text-gray-400">support</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 bg-gradient-to-r ${currentService.color} text-white py-4 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <span>Get Started Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="flex-1 border border-white/30 text-white py-4 px-6 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      <span>Watch Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Users, value: "2000+", label: "Happy Clients" },
            { icon: Award, value: "99.9%", label: "Success Rate" },
            { icon: Clock, value: "24/7", label: "Support" },
            { icon: DollarSign, value: "50%", label: "Average Savings" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceShowcase2025;