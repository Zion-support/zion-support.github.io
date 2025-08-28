import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const UltimateServicesShowcase2025: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions',
      price: 'From $299/month',
      rating: 4.9,
      reviews: 127
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      href: '/services/cloud-devops',
      price: 'From $499/month',
      rating: 4.8,
      reviews: 89
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security and compliance solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      href: '/services/cybersecurity',
      price: 'From $399/month',
      rating: 4.7,
      reviews: 156
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital modernization services',
      icon: Zap,
      color: 'from-yellow-500 to-green-500',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Digital Strategy'],
      href: '/services/digital-transformation',
      price: 'From $799/month',
      rating: 4.6,
      reviews: 234
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data insights and business intelligence',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence'],
      href: '/services/data-analytics',
      price: 'From $599/month',
      rating: 4.8,
      reviews: 178
    },
    {
      title: 'IoT Solutions',
      description: 'Connected device ecosystems and smart infrastructure',
      icon: Globe,
      color: 'from-teal-500 to-blue-500',
      features: ['Sensor Networks', 'Edge Computing', 'Smart Cities', 'Industrial IoT'],
      href: '/services/iot-solutions',
      price: 'From $449/month',
      rating: 4.5,
      reviews: 92
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Technology Services 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our comprehensive suite of cutting-edge services 
            designed to transform your business and drive innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{service.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                  </div>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateServicesShowcase2025;