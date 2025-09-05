import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Database,
  Cloud,
  Server,
  Lock,
  Code,
  Network,
  Atom,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  BarChart3 as BarChart3Icon,
  Cpu as CpuIcon,
  Leaf,
  Satellite,
  HelpCircle,
  Menu,
  X,
  Building2,
  Factory,
  Building
} from 'lucide-react';

const AIServicesPage = () => {
  const services = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
      icon: BarChart3,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Data Visualization"],
      price: "Starting at $2,999/month"
    },
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-driven workflow optimization.",
      icon: Workflow,
      features: ["RPA Integration", "Smart Document Processing", "Workflow Optimization", "Exception Handling"],
      price: "Starting at $1,999/month"
    },
    {
      title: "AI Customer Experience Platform",
      description: "Enhance customer interactions with intelligent chatbots and personalization engines.",
      icon: MessageCircle,
      features: ["Smart Chatbots", "Personalization", "Sentiment Analysis", "Multi-channel Support"],
      price: "Starting at $1,499/month"
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement advanced image recognition and video analytics for your business.",
      icon: Eye,
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Security Monitoring"],
      price: "Starting at $3,499/month"
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text data with our advanced NLP and text analytics platform.",
      icon: MessageSquare,
      features: ["Text Analysis", "Sentiment Detection", "Language Translation", "Content Generation"],
      price: "Starting at $2,499/month"
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Protect your business with intelligent threat detection and automated security responses.",
      icon: Shield,
      features: ["Threat Detection", "Anomaly Detection", "Automated Response", "Security Analytics"],
      price: "Starting at $2,999/month"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart, description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: DollarSign, description: "Fraud detection and risk assessment" },
    { name: "Manufacturing", icon: Factory, description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: ShoppingCart, description: "Personalized recommendations and inventory management" },
    { name: "Education", icon: BookOpen, description: "Personalized learning and assessment" },
    { name: "Transportation", icon: Truck, description: "Route optimization and autonomous systems" }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Delivered" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "40%", label: "Average Cost Reduction" },
    { number: "24/7", label: "AI System Monitoring" }
  ];

  return (
    <MainLayout 
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and intelligent automation."
      keywords="AI services, machine learning, artificial intelligence, computer vision, NLP, automation, business intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence solutions. 
                  From machine learning to computer vision, we deliver AI that drives real results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/ai-implementation" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI solutions tailored for your industry's unique challenges and opportunities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="p-6 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-all duration-300 mb-4">
                    <industry.icon className="h-12 w-12 text-gray-600 group-hover:text-blue-600 mx-auto transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/ai-implementation" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AIServicesPage;