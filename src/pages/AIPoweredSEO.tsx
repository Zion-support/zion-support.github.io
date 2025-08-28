import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Activity,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Database,
  Cloud,
  Eye,
  Brain,
  Network,
  Rocket,
  Shield
} from 'lucide-react';

export default function AIPoweredSEO() {
  const features = [
    {
      icon: Search,
      title: "AI Keyword Research",
      description: "Intelligent keyword discovery and analysis using machine learning",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "AI-powered content analysis and optimization recommendations",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Ranking Predictions",
      description: "Predictive analytics for search engine ranking improvements",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive SEO performance tracking and insights",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "AI-driven SEO improvements and technical optimizations",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global SEO",
      description: "Multi-language and international SEO optimization",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const services = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive website technical analysis and optimization",
      icon: Settings,
      benefits: ["Site speed optimization", "Mobile responsiveness", "Technical issues", "Schema markup"]
    },
    {
      title: "Content Strategy",
      description: "AI-powered content planning and optimization",
      icon: FileText,
      benefits: ["Keyword research", "Content planning", "SEO optimization", "Performance tracking"]
    },
    {
      title: "Local SEO",
      description: "Location-based search optimization and management",
      icon: Target,
      benefits: ["Google My Business", "Local citations", "Review management", "Local keywords"]
    },
    {
      title: "E-commerce SEO",
      description: "Product page optimization and search visibility",
      icon: ShoppingCart,
      benefits: ["Product optimization", "Category pages", "Internal linking", "Conversion tracking"]
    }
  ];

  const technologies = [
    "Machine Learning", "Natural Language Processing", "Predictive Analytics", "Big Data Analysis", 
    "AI Algorithms", "Search Engine APIs", "Web Crawling", "Data Mining", "Sentiment Analysis", "Competitive Intelligence"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your search engine visibility with cutting-edge AI technology. 
              Our intelligent SEO solutions deliver measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-blue-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI SEO Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered SEO platform combines machine learning with industry expertise 
              to deliver unprecedented search engine optimization results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions designed to improve your search rankings and drive organic traffic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI technologies for maximum SEO performance and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the AI SEO revolution with Zion Tech Group. Our intelligent optimization solutions 
              are designed to boost your search visibility and drive sustainable organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-blue-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}