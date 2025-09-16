import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cloud, 
  Users, 
  Cpu, 
  Database, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Target,
  BarChart3,
  Smartphone,
  Server,
  Lock,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  Mail,
  Eye,
  Code,
  Settings
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { COMPREHENSIVE_REAL_SERVICES_2025 } from '../data/comprehensiveRealServices2025';

const ComprehensiveServicesShowcase2025 = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('All');
  const [searchTerm, setSearchTerm] = useState<any>('');

  const categories = ['All', 'Micro SAAS', 'IT Services', 'AI Services', 'Cloud Solutions', 'Cybersecurity', 'Digital Transformation'];

  const filteredServices = COMPREHENSIVE_REAL_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (props: any) => {
    switch (category) {
      case 'Micro SAAS': return <Smartphone className="w-6 h-6"  />;
      case 'IT Services': return <Server className="w-6 h-6"  />;
      case 'AI Services': return <Brain className="w-6 h-6"  />;
      case 'Cloud Solutions': return <Cloud className="w-6 h-6"  />;
      case 'Cybersecurity': return <Shield className="w-6 h-6"  />;
      case 'Digital Transformation': return <Zap className="w-6 h-6"  />;
      default: retur n <Settings className="w-6 h-6"  />;
    }
  };

  return (
    <>
      <SEOHead title="Comprehensive Technology Services - Zion Tech Group 2025"
        description="Discover our complete range of innovative micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology from Zion Tech Group."
        keywords={['micro SAAS', 'IT services', 'AI solutions', 'cloud computing', 'cybersecurity', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/comprehensive-services-2025"
       />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md: tex t-6xl font-bold text-white mb-6">
                Comprehensive Technology
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services 2025</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our complete suite of innovative micro SAAS, IT services, and AI solutions. 
                From cutting-edge AI platforms to comprehensive IT management, we deliver results that drive growth.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5"  />
                </Link>
                <Link 
                  to="/request-quote" 
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg hover: b g-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16">
          <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{COMPREHENSIVE_REAL_SERVICES_2025.length}+</div>
              <div className="text-gray-300">Services Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-8">
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 2 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover: b g-slate-800/70 transition-all duration-300 border border-slate-700 hover: borde r-blue-500/50"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {service.pricingModel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-700 text-gray-300">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-400"  />
                        {feature}
                      </span>
                    ))}
                  </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm ml-1">/{service.pricingModel === 'per-project' ? 'project' : service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-gray-300">{service.marketPrice}</div>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-4 p-3 bg-green-600/10 rounded-lg border border-green-600/20">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-2"  />
                    <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover: fro m-blue-700 hover: t o-purple-700 transition-all duration-300 text-center text-sm font-medium"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-gray-600 text-white px-4 py-2 rounded-lg hover: b g-gray-700 transition-all duration-300 text-center text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400">
                    <div className="flex items-center mb-1">
                      <MessageSquare className="w-3 h-3 mr-1"  />
                      {service.contactInfo.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-3 h-3 mr-1"  />
                      {service.contactInfo.email}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-blue-400"  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-purple-400"  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-400"  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="mt-8 text-white/80">
              <p className="mb-2">
                <strong>Zion Tech Group</strong> | 364 E Main St STE 1008 Middletown DE 19709
              </p>
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
</motion>
</div>
</motion>
</motion>
</motion>
</motion>
</motion>
</div>
</SEOHead>
</any>
</any>