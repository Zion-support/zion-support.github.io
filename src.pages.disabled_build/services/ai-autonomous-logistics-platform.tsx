import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer } from '../../components/SEOOptimizer';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Workflow,
  Cpu,
  Database,
  Network,
  Satellite,
  Activity,
  Target,
  Rocket,
  Lightbulb,
  Star,
  Award,
  Handshake,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';

const AIAutonomousLogisticsPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Route Optimization",
      description: "Advanced algorithms that continuously learn and optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 40%."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination that automatically assigns vehicles, predicts maintenance needs, and optimizes capacity utilization."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Inventory Management",
      description: "Predictive analytics for demand forecasting, automated reordering, and real-time inventory tracking across all locations."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with real-time tracking, predictive analytics, and automated alerts."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management & Compliance",
      description: "AI-powered risk assessment, compliance monitoring, and automated reporting for regulatory requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboards and reports showing KPIs, cost analysis, and optimization opportunities."
    }
  ];

  const benefits = [
    "Reduce logistics costs by 25-40%",
    "Improve delivery speed by 30-50%",
    "Increase fleet utilization by 35%",
    "Reduce carbon footprint by 20-30%",
    "Eliminate manual planning errors",
    "24/7 autonomous operations",
    "Real-time decision making",
    "Scalable to any fleet size"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small to medium logistics operations",
      features: [
        "Up to 50 vehicles",
        "Basic route optimization",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing logistics companies",
      features: [
        "Up to 200 vehicles",
        "Advanced AI optimization",
        "Real-time analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large-scale logistics operations",
      features: [
        "Unlimited vehicles",
        "Full AI suite",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Advanced security"
      ]
    }
  ];

  const seoData = {
    title: "AI Autonomous Logistics Platform | Zion Tech Group",
    description: "Revolutionary AI-powered logistics platform that autonomously optimizes routes, manages fleets, and streamlines supply chains. Reduce costs by 40% and improve efficiency.",
    keywords: "AI logistics, autonomous logistics, route optimization, fleet management, supply chain AI, logistics automation",
    url: "https://ziontechgroup.com/services/ai-autonomous-logistics-platform"
  };

  return (
    <>
      <SEOOptimizer {...seoData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Truck className="w-4 h-4 mr-2" />
                AI-Powered Logistics Platform
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Autonomous
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Logistics</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-purple to-zion-cyan">Platform</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Revolutionize your logistics operations with AI that thinks, learns, and optimizes autonomously. 
                Reduce costs by 40%, improve delivery speed by 50%, and eliminate manual planning forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-zion-cyan/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Logistics Operations
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform delivers measurable results that directly impact your bottom line
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <CheckCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <p className="text-white font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Cutting-edge artificial intelligence that continuously learns and improves your logistics operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the plan that fits your logistics operation size and requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-purple/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                        : 'bg-zion-slate-dark border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI platform to revolutionize their logistics operations. 
                Get started with a free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
              
              <div className="mt-8 text-zion-slate-light">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>📧 kleber@ziontechgroup.com</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousLogisticsPlatform;