import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: string;
  popular?: boolean;
}

const EnhancedMainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      id: 'ai-platform',
      name: 'AI-Powered Platform',
      description: 'Next-generation artificial intelligence solutions for enterprise',
      icon: <Brain className="w-8 h-8" />,
      category: 'ai',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $2,999/month',
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions for modern threats',
      icon: <Shield className="w-8 h-8" />,
      category: 'security',
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Training'],
      pricing: 'Starting at $1,999/month'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for growing businesses',
      icon: <Cloud className="w-8 h-8" />,
      category: 'infrastructure',
      features: ['Multi-cloud Management', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      pricing: 'Starting at $999/month'
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation',
      description: 'Streamline development and deployment processes',
      icon: <Code className="w-8 h-8" />,
      category: 'development',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Performance Optimization'],
      pricing: 'Starting at $1,499/month'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Cutting-edge quantum solutions for complex problems',
      icon: <Zap className="w-8 h-8" />,
      category: 'quantum',
      features: ['Quantum Algorithms', 'Hybrid Computing', 'Research Support', 'Custom Solutions'],
      pricing: 'Contact for pricing'
    },
    {
      id: 'global-expansion',
      name: 'Global Expansion',
      description: 'International business development and localization',
      icon: <Globe className="w-8 h-8" />,
      category: 'business',
      features: ['Market Analysis', 'Localization', 'Compliance', 'Partnership Development'],
      pricing: 'Starting at $3,999/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI & Machine Learning', count: services.filter(s => s.category === 'ai').length },
    { id: 'security', name: 'Cybersecurity', count: services.filter(s => s.category === 'security').length },
    { id: 'infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'infrastructure').length },
    { id: 'development', name: 'Development', count: services.filter(s => s.category === 'development').length },
    { id: 'quantum', name: 'Quantum Computing', count: services.filter(s => s.category === 'quantum').length },
    { id: 'business', name: 'Business Services', count: services.filter(s => s.category === 'business').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-white">2032</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering the future with cutting-edge AI, cybersecurity, and quantum computing solutions. 
            Transform your business with our innovative services and expert guidance.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-gray-300 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>{contact.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{contact.address}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of innovative solutions designed to drive your business forward
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`bg-gray-800 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-blue-500 bg-gray-800/80' : 'border-gray-700 hover:border-blue-500'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {service.popular && (
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge solutions to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedMainPage;