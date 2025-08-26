import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Target, 
  Globe, 
  Shield, 
  Cpu,
  Truck,
  Leaf,
  Star,
  ArrowRight,
  Search,
  Zap,
  Award,
  Users,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';
import { cuttingEdgeInnovationServices2027 } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaasServices2027 } from '../data/2027-practical-micro-saas';

const AllServices2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...cuttingEdgeInnovationServices2027.map(service => ({ ...service, type: 'cutting-edge' })),
    ...practicalMicroSaasServices2027.map(service => ({ ...service, type: 'practical' }))
  ];

  const categories = [
    'all',
    'Financial Technology & AI',
    'AI Research & Innovation',
    'Metaverse & Virtual Reality',
    'Climate Technology & Sustainability',
    'Advanced Computing & AI',
    'Supply Chain & Logistics',
    'Cybersecurity & Quantum Security',
    'Space Technology & AI',
    'Customer Success & Automation',
    'Financial Management & Automation',
    'Human Resources & Recruitment',
    'Project Management & Collaboration',
    'Email Marketing & Automation',
    'Inventory & Supply Chain',
    'Analytics & Business Intelligence',
    'Customer Support & Help Desk'
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getServiceTypeBadge = (type: string) => {
    if (type === 'cutting-edge') {
      return (
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Cutting-Edge
        </span>
      );
    }
    return (
      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Practical
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Complete 2027 Services Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Discover our comprehensive collection of cutting-edge innovations and practical micro SAAS solutions. 
                From revolutionary AI platforms to business automation tools - we have everything you need to succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/request-quote" 
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Type Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cutting-edge-innovations-2027"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                <Rocket className="w-5 h-5" />
                Cutting-Edge Innovations
              </Link>
              <Link
                to="/practical-micro-saas-2027"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold"
              >
                <Target className="w-5 h-5" />
                Practical Micro SAAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search all 2027 services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="flex gap-2">
                      {getServiceTypeBadge(service.type)}
                      {service.popular && (
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm">{service.tagline}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-zion-blue">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{service.rating} ({service.reviews} reviews)</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Market Size:</span>
                      <span className="font-semibold text-gray-800">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">Growth Rate:</span>
                      <span className="font-semibold text-green-600">{service.growthRate}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm">
                      <div className="flex items-center gap-2 text-blue-800 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{service.customers} customers</span>
                      </div>
                      <div className="text-blue-600">
                        <p className="text-xs">{service.contactInfo.email}</p>
                        <p className="text-xs">{service.contactInfo.mobile}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-zion-cyan text-white text-center py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors text-sm font-semibold"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-zion-cyan text-zion-cyan text-center py-2 px-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-sm font-semibold"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No services found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Categories</h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive range of services across different domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Rocket, title: 'Cutting-Edge Innovations', description: 'Revolutionary technologies and breakthrough solutions', count: cuttingEdgeInnovationServices2027.length, link: '/cutting-edge-innovations-2027', color: 'from-purple-500 to-pink-500' },
                { icon: Target, title: 'Practical Micro SAAS', description: 'Real-world business solutions with immediate impact', count: practicalMicroSaasServices2027.length, link: '/practical-micro-saas-2027', color: 'from-blue-500 to-cyan-500' },
                { icon: Brain, title: 'AI & Machine Learning', description: 'Intelligent automation and predictive analytics', count: allServices.filter(s => s.category.includes('AI')).length, link: '/ai-solutions', color: 'from-green-500 to-teal-500' },
                { icon: Shield, title: 'Cybersecurity', description: 'Advanced security and compliance solutions', count: allServices.filter(s => s.category.includes('Security')).length, link: '/services/cybersecurity', color: 'from-red-500 to-orange-500' },
                { icon: Globe, title: 'Digital Transformation', description: 'Modernization and cloud migration services', count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Digital')).length, link: '/services/transformation', color: 'from-indigo-500 to-purple-500' },
                { icon: Cpu, title: 'Infrastructure & DevOps', description: 'Scalable infrastructure and automation', count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('DevOps')).length, link: '/services/infrastructure', color: 'from-gray-500 to-blue-500' }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{category.description}</p>
                  <div className="text-center mb-4">
                    <span className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count} Services
                    </span>
                  </div>
                  <Link
                    to={category.link}
                    className="w-full bg-zion-cyan text-white text-center py-2 px-4 rounded-lg hover:bg-zion-cyan-light transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Our Services Impact</h2>
              <p className="text-xl text-zion-slate-light">
                Transforming businesses across industries with innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, label: 'Total Services', value: allServices.length.toString() },
                { icon: TrendingUp, label: 'Average ROI', value: '400%+' },
                { icon: Award, label: 'Customer Rating', value: '4.8/5' },
                { icon: Clock, label: 'Setup Time', value: '2-6 weeks' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Ready to Explore Our Complete Service Portfolio?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover the perfect solution for your business needs from our comprehensive collection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-zion-cyan text-white px-8 py-4 rounded-lg hover:bg-zion-cyan-light transition-colors font-semibold text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg hover:bg-zion-cyan hover:text-white transition-colors font-semibold text-lg"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices2027;