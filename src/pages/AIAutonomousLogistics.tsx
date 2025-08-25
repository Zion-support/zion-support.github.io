import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Route, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Cpu,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  PieChart,
  LineChart,
  Database,
  Settings,
  Monitor,
  Award,
  Clock,
  Star,
  MapPin,
  Navigation,
  BarChart3
} from 'lucide-react';

const AIAutonomousLogistics: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "Intelligent Route Optimization",
      description: "AI-powered route planning with real-time traffic and weather analysis"
    },
    {
      icon: Package,
      title: "Smart Inventory Management",
      description: "Automated inventory tracking and demand forecasting"
    },
    {
      icon: Route,
      title: "Dynamic Fleet Management",
      description: "Real-time fleet monitoring and autonomous vehicle coordination"
    },
    {
      icon: Shield,
      title: "Supply Chain Security",
      description: "Comprehensive security monitoring and risk assessment"
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhanced delivery tracking and customer communication"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Multi-region logistics coordination and optimization"
    }
  ];

  const benefits = [
    "Real-time route optimization and traffic avoidance",
    "Automated inventory management and demand forecasting",
    "Reduced delivery time by 30%",
    "Lower operational costs by 25%",
    "Improved customer satisfaction and delivery accuracy",
    "24/7 autonomous logistics operations",
    "Predictive maintenance and fleet optimization",
    "Enhanced supply chain visibility and transparency"
  ];

  const logisticsServices = [
    {
      title: "Route Optimization",
      description: "AI-powered route planning with real-time updates",
      icon: Route
    },
    {
      title: "Fleet Management",
      description: "Comprehensive fleet monitoring and optimization",
      icon: Truck
    },
    {
      title: "Inventory Control",
      description: "Smart inventory tracking and management",
      icon: Package
    },
    {
      title: "Supply Chain Analytics",
      description: "Advanced analytics and performance insights",
      icon: BarChart3
    }
  ];

  const useCases = [
    {
      title: "E-commerce Delivery",
      description: "Optimized last-mile delivery and customer experience",
      icon: "📦"
    },
    {
      title: "Manufacturing Supply Chain",
      description: "Streamlined production and distribution logistics",
      icon: "🏭"
    },
    {
      title: "Retail Operations",
      description: "Efficient inventory management and store replenishment",
      icon: "🛒"
    },
    {
      title: "International Shipping",
      description: "Global logistics coordination and customs optimization",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Truck className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Logistics Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Revolutionize logistics with intelligent, autonomous operations that optimize every aspect of your supply chain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Logistics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI logistics platform combines cutting-edge technology with industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Services Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Logistics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From route optimization to supply chain analytics, our platform handles all aspects of logistics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logisticsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous Logistics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and optimization in your logistics operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Logistics Operations
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Logistics Performance
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Delivery Speed</span>
                      <span className="font-semibold text-green-600">30% Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Route Efficiency</span>
                      <span className="font-semibold text-green-600">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logistics Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI logistics platform transforms operations across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{useCase.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the future of intelligent, autonomous logistics with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { SEOHead } from '../components/SEOHead';

const AIAutonomousLogistics: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Logistics | Zion Tech Group"
        description="Revolutionary AI autonomous logistics platform. Intelligent supply chain management, route optimization, and logistics excellence powered by artificial intelligence."
        keywords="AI autonomous logistics, supply chain automation, route optimization, logistics management, autonomous logistics, intelligent supply chain"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-logistics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Autonomous Logistics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your supply chain with AI Autonomous Logistics. 
              Intelligent management, route optimization, and logistics excellence without human intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Intelligent Supply Chain Management
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Logistics platform revolutionizes supply chain operations, 
                combining advanced AI with intelligent automation for optimal efficiency.
              </p>
              <p className="text-gray-300 text-lg">
                From route optimization to inventory management, our AI operates autonomously, 
                ensuring seamless logistics operations and cost-effective delivery around the clock.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Logistics Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  Route Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Inventory Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Supply Chain Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Demand Forecasting
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Platform Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Route Planning</h3>
                <p className="text-gray-400">Intelligent route optimization</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Inventory Control</h3>
                <p className="text-gray-400">Automated inventory management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
                <p className="text-gray-400">Supply chain insights</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Optimize Logistics
            </button>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d0e7
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
};

export default AIAutonomousLogistics;