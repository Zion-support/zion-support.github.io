import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Cloud, Shield, Zap, Search, Filter, Star, ArrowRight, CheckCircle,
  Phone, Mail, MapPin, Calendar, BookOpen, TrendingUp, Heart, DollarSign,
  ShoppingCart, GraduationCap, Leaf, Atom, Eye
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  pricing: { starter: number; professional: number; enterprise: string };
  benefits: string[];
  href: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const AddedServicesDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services: Service[] = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence Platform',
      description: 'Advanced analytics and insights powered by artificial intelligence to drive data-driven decision making.',
      category: 'AI & Analytics',
      icon: Brain,
      pricing: { starter: 299, professional: 899, enterprise: 'Custom' },
      benefits: ['Increase decision speed by 70%', 'Reduce analysis time by 80%', 'Improve forecast accuracy by 60%'],
      href: '/services/ai-business-intelligence',
      isNew: true,
      isPopular: true
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generation Suite',
      description: 'Create high-quality content at scale with our advanced AI writing and content creation platform.',
      category: 'AI & Analytics',
      icon: BookOpen,
      pricing: { starter: 99, professional: 299, enterprise: 'Custom' },
      benefits: ['Generate content 10x faster', 'Reduce content costs by 60%', 'Maintain consistent brand voice'],
      href: '/services/ai-content-generator',
      isNew: true
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'Intelligent sales assistant that helps close deals faster with AI-powered insights and recommendations.',
      category: 'AI & Analytics',
      icon: TrendingUp,
      pricing: { starter: 199, professional: 499, enterprise: 'Custom' },
      benefits: ['Increase close rates by 40%', 'Reduce sales cycle by 30%', 'Improve lead quality by 50%'],
      href: '/services/ai-sales-copilot',
      isPopular: true
    },
    {
      id: 'quantum-computing-platform',
      name: 'Quantum Computing Platform',
      description: 'Access quantum computing power for solving complex optimization and simulation problems.',
      category: 'Emerging Tech',
      icon: Atom,
      pricing: { starter: 999, professional: 2999, enterprise: 'Custom' },
      benefits: ['Solve complex problems 1000x faster', 'Breakthrough optimization capabilities', 'Future-proof technology'],
      href: '/services/quantum-computing',
      isNew: true
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Suite',
      description: 'Comprehensive zero-trust security architecture to protect your organization from modern threats.',
      category: 'Cybersecurity',
      icon: Shield,
      pricing: { starter: 399, professional: 999, enterprise: 'Custom' },
      benefits: ['Reduce security breaches by 90%', 'Ensure compliance', 'Protect remote workforce'],
      href: '/services/zero-trust-security',
      isPopular: true
    },
    {
      id: 'multi-cloud-management',
      name: 'Multi-Cloud Management Platform',
      description: 'Unified platform to manage and optimize your multi-cloud infrastructure across all providers.',
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      pricing: { starter: 299, professional: 799, enterprise: 'Custom' },
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 60%', 'Simplify management'],
      href: '/services/multi-cloud-management',
      isPopular: true
    },
    {
      id: 'smart-appointment-scheduler',
      name: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling system that optimizes appointments and reduces no-shows.',
      category: 'Micro SaaS',
      icon: Calendar,
      pricing: { starter: 29, professional: 79, enterprise: 'Custom' },
      benefits: ['Reduce no-shows by 60%', 'Save 10 hours/week', 'Increase bookings by 40%'],
      href: '/services/smart-appointment-scheduler',
      isNew: true,
      isPopular: true
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics',
      description: 'Advanced healthcare analytics platform for predictive diagnostics and patient care optimization.',
      category: 'Healthcare & Medical',
      icon: Heart,
      pricing: { starter: 999, professional: 2999, enterprise: 'Custom' },
      benefits: ['Improve diagnosis accuracy by 40%', 'Reduce treatment costs by 30%', 'Enhance patient outcomes'],
      href: '/services/ai-healthcare-analytics',
      isNew: true
    },
    {
      id: 'ai-personalization-engine',
      name: 'AI Personalization Engine',
      description: 'Personalize customer experiences with AI-driven product recommendations and content customization.',
      category: 'E-commerce & Retail',
      icon: ShoppingCart,
      pricing: { starter: 299, professional: 799, enterprise: 'Custom' },
      benefits: ['Increase sales by 35%', 'Improve customer satisfaction', 'Boost conversion rates by 25%'],
      href: '/services/ai-personalization-engine',
      isNew: true,
      isPopular: true
    },
    {
      id: 'ai-learning-platform',
      name: 'AI-Powered Learning Platform',
      description: 'Personalized learning experiences with adaptive AI tutoring and progress tracking.',
      category: 'Education & Training',
      icon: GraduationCap,
      pricing: { starter: 99, professional: 299, enterprise: 'Custom' },
      benefits: ['Improve learning outcomes by 50%', 'Reduce training time by 40%', 'Personalized education'],
      href: '/services/ai-learning-platform',
      isNew: true
    },
    {
      id: 'expense-tracking-ai',
      name: 'AI Expense Tracking',
      description: 'Intelligent expense management system that automatically categorizes and tracks business expenses.',
      category: 'Micro SaaS',
      icon: DollarSign,
      pricing: { starter: 19, professional: 49, enterprise: 'Custom' },
      benefits: ['Save 15 hours/month', 'Reduce expense errors by 95%', 'Maximize tax deductions'],
      href: '/services/expense-tracking-ai',
      isPopular: true
    },
    {
      id: 'carbon-footprint-tracker',
      name: 'Carbon Footprint Tracker',
      description: 'Comprehensive carbon footprint tracking and sustainability optimization platform.',
      category: 'Green Technology',
      icon: Leaf,
      pricing: { starter: 149, professional: 399, enterprise: 'Custom' },
      benefits: ['Reduce carbon footprint by 30%', 'Meet sustainability goals', 'Improve ESG scores'],
      href: '/services/carbon-footprint-tracker',
      isNew: true
    }
  ];

  const categories = ['all', 'AI & Analytics', 'Cybersecurity', 'Cloud & Infrastructure', 'Micro SaaS', 'Healthcare & Medical', 'E-commerce & Retail', 'Education & Training', 'Green Technology', 'Emerging Tech'];

  const filteredServices = services.filter(service => {
    const matchesSearch = searchTerm === '' || 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Services Directory
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our comprehensive portfolio of innovative micro SaaS, IT services, and AI solutions 
              designed to transform your business operations and drive growth.
            </p>
            
            {/* Contact Info Banner */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-cyan-500/30">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center text-gray-300">
                <span>{filteredServices.length} services found</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Badges */}
                  <div className="flex gap-2 mb-4">
                    {service.isNew && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        NEW
                      </span>
                    )}
                    {service.isPopular && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.pricing.starter}/month
                    </div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search criteria or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and discover how our services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AddedServicesDirectory;