import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "../components/SEOHead";
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Signal, 
  Users, 
  Truck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Rocket
} from 'lucide-react';

const AllServices2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', name: 'All Services', icon: Globe, color: 'from-cyan-500 to-blue-600' },
    { id: 'AI Services', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Zap, color: 'from-yellow-500 to-orange-600' },
    { id: 'IT Services', name: 'IT Services', icon: Code, color: 'from-green-500 to-teal-600' },
    { id: 'Telecommunications', name: 'Telecommunications', icon: Signal, color: 'from-blue-500 to-indigo-600' }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'All') {
      return {
        count: INNOVATIVE_SERVICES_2027.length,
        avgPrice: Math.round(INNOVATIVE_SERVICES_2027.reduce((sum, s) => sum + s.price, 0) / INNOVATIVE_SERVICES_2027.length),
        avgRating: Math.round((INNOVATIVE_SERVICES_2027.reduce((sum, s) => sum + s.rating, 0) / INNOVATIVE_SERVICES_2027.length) * 10) / 10
      };
    }
    const services = INNOVATIVE_SERVICES_2027.filter(s => s.category === categoryId);
    return {
      count: services.length,
      avgPrice: Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length),
      avgRating: Math.round((services.reduce((sum, s) => sum + s.rating, 0) / services.length) * 10) / 10
    };
  };

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
    <>
      <SEOHead 
        title="All Services 2027 - Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge technology services. From AI and cybersecurity to quantum computing and 5G solutions, we have everything your business needs to succeed."
        canonical="/all-services-2027"
        url="https://ziontechgroup.com/all-services-2027"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              All Services 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions portfolio designed to transform your business. 
              Discover the perfect combination of services to accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/comprehensive-pricing-2027" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services, each designed to address 
              specific business challenges and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const stats = getCategoryStats(category.id);
              const IconComponent = category.icon;
              
              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className={`bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.id ? 'border-cyan-500 bg-zion-slate' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span className="text-cyan-400 font-semibold">{stats.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Price:</span>
                      <span className="text-cyan-400 font-semibold">${stats.avgPrice}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. Rating:</span>
                      <span className="text-cyan-400 font-semibold">{stats.avgRating}/5</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <div className="text-gray-400">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} available
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories Deep Dive */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service category is designed with specific business needs in mind, 
              providing targeted solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Services */}
            <motion.div
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8 border border-zion-slate-light"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Leverage the power of artificial intelligence to automate processes, 
                gain insights from data, and create intelligent solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Machine Learning Models</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Natural Language Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Computer Vision</span>
                </div>
              </div>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              variants={itemVariants}
              className="bg-zion-slate-dark rounded-xl p-8 border border-zion-slate-light"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Protect your digital assets with comprehensive security solutions 
                that detect, prevent, and respond to cyber threats.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Threat Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Incident Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Security Audits</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our innovative services can drive your success and 
            create a competitive advantage in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-5 h-5" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'Emerging Technology':
        return <Zap className="w-5 h-5" />;
      case 'IT Services':
        return <Code className="w-5 h-5" />;
      case 'Telecommunications':
        return <Signal className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-zion-slate border border-zion-slate-light rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300"
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-cyan-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
          {getCategoryIcon(service.category)}
          <span className="text-white text-sm font-medium">{service.category}</span>
        </div>

        {/* AI Score Badge */}
        <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">AI Score: {service.aiScore}</span>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 2).map((feature: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center space-x-1 bg-zion-slate-dark px-2 py-1 rounded text-xs text-cyan-300"
              >
                <CheckCircle className="w-3 h-3" />
                <span>{feature}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-cyan-400">
            ${service.price}
            <span className="text-sm text-gray-400 font-normal">/month</span>
          </div>
          <div className="text-sm text-gray-400">
            Market: {service.marketPrice}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={service.website}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default AllServices2027;