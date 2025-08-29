import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  Code,
  Database,
  Rocket,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
  pricing: string;
  rating: number;
  reviews: number;
  color: string;
  popular?: boolean;
  link: string;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Advanced analytics with AI-powered insights and predictive modeling',
    icon: Brain,
    category: 'AI & Machine Learning',
    features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
    pricing: '$2,999/month',
    rating: 4.9,
    reviews: 156,
    color: 'from-blue-500 to-cyan-500',
    popular: true,
    link: '/ai-services/business-intelligence'
  },
  {
    id: 'quantum-computing-suite',
    title: 'Quantum Computing Suite',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: Rocket,
    category: 'Emerging Tech',
    features: ['Quantum algorithms', 'Hybrid classical-quantum', 'Scientific computing', 'Optimization'],
    pricing: '$5,000/month',
    rating: 4.8,
    reviews: 89,
    color: 'from-purple-500 to-pink-500',
    link: '/emerging-tech/quantum-computing'
  },
  {
    id: 'cybersecurity-platform',
    title: 'AI-Powered Cybersecurity Platform',
    description: 'Intelligent threat detection and response with zero-trust architecture',
    icon: Shield,
    category: 'Cybersecurity',
    features: ['AI threat detection', 'Zero-trust architecture', 'Compliance automation', '24/7 monitoring'],
    pricing: '$2,500/month',
    rating: 4.9,
    reviews: 234,
    color: 'from-red-500 to-orange-500',
    popular: true,
    link: '/it-services/cybersecurity'
  },
  {
    id: 'cloud-devops-automation',
    title: 'Cloud & DevOps Automation',
    description: 'Scalable cloud infrastructure with intelligent automation',
    icon: Cloud,
    category: 'Cloud & DevOps',
    features: ['Multi-cloud management', 'CI/CD automation', 'Infrastructure as code', 'Cost optimization'],
    pricing: '$1,500/month',
    rating: 4.7,
    reviews: 189,
    color: 'from-green-500 to-emerald-500',
    link: '/it-services/cloud-devops'
  },
  {
    id: 'blockchain-defi-platform',
    title: 'Blockchain & DeFi Platform',
    description: 'Decentralized finance solutions with advanced blockchain technology',
    icon: Globe,
    category: 'Blockchain & Web3',
    features: ['DeFi protocols', 'Smart contracts', 'Yield optimization', 'Cross-chain support'],
    pricing: '$1,800/month',
    rating: 4.6,
    reviews: 123,
    color: 'from-yellow-500 to-orange-500',
    link: '/emerging-tech/blockchain-defi'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    description: 'End-to-end business transformation with cutting-edge technology',
    icon: TrendingUp,
    category: 'Digital Transformation',
    features: ['Strategy consulting', 'Process optimization', 'Change management', 'ROI tracking'],
    pricing: '$3,500/month',
    rating: 4.8,
    reviews: 167,
    color: 'from-indigo-500 to-purple-500',
    link: '/services/digital-transformation'
  },
  {
    id: 'micro-saas-platform',
    title: 'Micro SaaS Development Platform',
    description: 'Rapid development and deployment of SaaS applications',
    icon: Code,
    category: 'Micro SAAS',
    features: ['Rapid prototyping', 'Scalable architecture', 'Multi-tenancy', 'Analytics dashboard'],
    pricing: '$899/month',
    rating: 4.7,
    reviews: 98,
    color: 'from-cyan-500 to-blue-500',
    link: '/micro-saas/development-platform'
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI Solutions',
    description: 'AI-powered diagnostic and patient care optimization',
    icon: Users,
    category: 'Healthcare AI',
    features: ['Medical imaging AI', 'Predictive diagnostics', 'Patient monitoring', 'HIPAA compliant'],
    pricing: '$4,500/month',
    rating: 4.9,
    reviews: 78,
    color: 'from-emerald-500 to-teal-500',
    link: '/ai-services/healthcare'
  }
];

const categories = [
  'All Services',
  'AI & Machine Learning',
  'Emerging Tech',
  'Cybersecurity',
  'Cloud & DevOps',
  'Blockchain & Web3',
  'Digital Transformation',
  'Micro SAAS',
  'Healthcare AI'
];

export const EnhancedServiceShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('service-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredServices = selectedCategory === 'All Services'
    ? services
    : services.filter(service => service.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="service-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward with
            cutting-edge AI, cybersecurity, and innovative digital transformation services.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-light text-gray-300 hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-slate'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <Link to={service.link}>
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-light p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 h-full">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-zion-cyan">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* Pricing & Rating */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-slate">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-zion-cyan">{service.pricing}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-zion-cyan font-semibold">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our expert team help you implement cutting-edge technology solutions
              that drive real business results and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/enhanced-services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};