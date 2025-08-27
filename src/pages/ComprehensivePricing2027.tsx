import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "../components/SEOHead"';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { 
  Check, 
  Star, 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Signal, 
  Users, 
  Truck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Award
} from 'lucide-react';

const ComprehensivePricing2027: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Services', 'Cybersecurity', 'Emerging Technology', 'IT Services', 'Telecommunications'];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

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
        title="Comprehensive Pricing 2027 - Zion Tech Group"
        description="Explore our comprehensive pricing for cutting-edge AI, cybersecurity, quantum computing, and emerging technology solutions. Find the perfect plan for your business needs."
        canonical="/comprehensive-pricing-2027"
        url="https://ziontechgroup.com/comprehensive-pricing-2027"
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
              Comprehensive Pricing 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for the most innovative technology solutions. 
              Choose the perfect plan to accelerate your business transformation.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  selectedPlan === 'yearly' ? 'bg-cyan-500' : 'bg-zion-slate-light'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    selectedPlan === 'yearly' ? 'transform translate-x-8' : 'transform translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
              </span>
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

      {/* Category Filter */}
      <section className="py-12 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-zion-slate-dark text-gray-300 hover:bg-zion-slate-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <PricingCard 
                key={service.id} 
                service={service} 
                selectedPlan={selectedPlan}
              />
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

      {/* Value Proposition Section */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise, 
              comprehensive support, and proven results for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">90% of clients see measurable improvements within 30 days</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored implementations for your specific business needs</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Leader</h3>
              <p className="text-gray-300">Recognized expertise in AI and emerging technologies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your specific needs and get a customized quote. 
              We're here to help you choose the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/innovative-services-2027" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Pricing Card Component
const PricingCard: React.FC<{ service: any; selectedPlan: string }> = ({ service, selectedPlan }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'Emerging Technology':
        return <Zap className="w-6 h-6" />;
      case 'IT Services':
        return <Code className="w-6 h-6" />;
      case 'Telecommunications':
        return <Signal className="w-6 h-6" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  const calculatePrice = (basePrice: number) => {
    if (selectedPlan === 'yearly') {
      return Math.round(basePrice * 12 * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  const getPricingPeriod = () => {
    return selectedPlan === 'yearly' ? 'year' : 'month';
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-zion-slate border border-zion-slate-light rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="p-6 border-b border-zion-slate-light">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getCategoryIcon(service.category)}
            <span className="text-sm font-medium text-cyan-400">{service.category}</span>
          </div>
          {service.featured && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              FEATURED
            </span>
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
      </div>

      {/* Pricing */}
      <div className="p-6 border-b border-zion-slate-light">
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-cyan-400">
            ${calculatePrice(service.price)}
            <span className="text-lg text-gray-400 font-normal">/{getPricingPeriod()}</span>
          </div>
          {selectedPlan === 'yearly' && (
            <div className="text-sm text-green-400 mt-1">
              Save ${Math.round(service.price * 12 * 0.2)} annually
            </div>
          )}
          <div className="text-sm text-gray-400 mt-1">
            Market: {service.marketPrice}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                }`}
              />
            ))}
          </div>
          <span className="text-white text-sm">{service.rating}</span>
          <span className="text-gray-400 text-sm">({service.reviewCount})</span>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 border-b border-zion-slate-light">
        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
        <ul className="space-y-3">
          {service.features.slice(0, 5).map((feature: string, index: number) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        {service.features.length > 5 && (
          <div className="text-center mt-4">
            <span className="text-cyan-400 text-sm">
              +{service.features.length - 5} more features
            </span>
          </div>
        )}
      </div>

      {/* Benefits */}
      <div className="p-6 border-b border-zion-slate-light">
        <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
        <ul className="space-y-2">
          {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Specs */}
      <div className="p-6 border-b border-zion-slate-light">
        <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Platform:</span>
            <span className="text-white text-sm">{service.technicalSpecs.platform}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">API Access:</span>
            <span className="text-white text-sm">{service.technicalSpecs.api ? 'Yes' : 'No'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Integrations:</span>
            <span className="text-white text-sm">{service.technicalSpecs.integrations.length}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6">
        <div className="space-y-3">
          <Link
            to={service.website}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="w-full border border-cyan-500 text-cyan-400 text-center py-3 px-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Contact Sales
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-zion-slate-dark text-xs text-gray-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ComprehensivePricing2027;