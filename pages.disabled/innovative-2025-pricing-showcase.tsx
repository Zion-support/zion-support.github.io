import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Grid,
  List,
  Filter,
  DollarSign,
  Brain,
  Atom,
  Shield,
  Target,
  Rocket,
  ArrowRight,
  Check,
  Palette,
  Heart,
  Truck,
  GraduationCap,
  Building,
  Cpu,
  Zap,
  Star,
  TrendingUp,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

// Import our new innovative 2025 services
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';

const Innovative2025PricingShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);

  // Combine all services
  const allServices = [
    ...innovativeAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasServices2025,
    ...innovativeBusinessSolutions2025,
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      icon: Brain,
      count: innovativeAIAutomationServices2025.length,
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: Cpu,
      count: innovativeITInfrastructureServices2025.length,
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Building,
      count: innovativeMicroSaasServices2025.length,
    },
    {
      id: 'business-solutions',
      name: 'Business Solutions',
      icon: Target,
      count: innovativeBusinessSolutions2025.length,
    },
  ];

  // Price ranges for filtering
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'all' },
    { id: 'budget', name: 'Budget ($0-$500)', range: '0-500' },
    { id: 'mid-range', name: 'Mid-Range ($500-$1500)', range: '500-1500' },
    { id: 'premium', name: 'Premium ($1500+)', range: '1500+' },
  ];

  useEffect(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai-automation')
          return innovativeAIAutomationServices2025.includes(service);
        if (selectedCategory === 'it-infrastructure')
          return innovativeITInfrastructureServices2025.includes(service);
        if (selectedCategory === 'micro-saas')
          return innovativeMicroSaasServices2025.includes(service);
        if (selectedCategory === 'business-solutions')
          return innovativeBusinessSolutions2025.includes(service);
        return true;
      });
    }

    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(service => {
        const starterPrice = parseFloat(
          service.pricing.starter.replace('$', '').replace('/month', '')
        );
        if (priceRange === '0-500') return starterPrice <= 500;
        if (priceRange === '500-1500')
          return starterPrice > 500 && starterPrice <= 1500;
        if (priceRange === '1500+') return starterPrice > 1500;
        return true;
      });
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, priceRange]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Automation'))
      return Brain;
    if (category.includes('IT') || category.includes('Infrastructure'))
      return Cpu;
    if (category.includes('Micro SAAS')) return Building;
    if (category.includes('Business')) return Target;
    return Globe;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Automation'))
      return 'from-purple-600 to-pink-600';
    if (category.includes('IT') || category.includes('Infrastructure'))
      return 'from-blue-600 to-cyan-600';
    if (category.includes('Micro SAAS')) return 'from-green-600 to-emerald-600';
    if (category.includes('Business')) return 'from-orange-600 to-red-600';
    return 'from-gray-600 to-slate-600';
  };

  const formatPrice = (price: string) => {
    return price.replace('/month', '');
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <SEO
        title='Innovative 2025 Pricing Showcase | Zion Tech Group'
        description='Explore comprehensive pricing for our innovative 2025 AI, IT infrastructure, micro SAAS, and business solutions. Competitive pricing with enterprise-grade features.'
        keywords='pricing, AI services, IT infrastructure, micro SAAS, business solutions, 2025, competitive pricing'
        image='https://ziontechgroup.com/og-innovative-2025-pricing.jpg'
      />

      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6'>
              <DollarSign className='w-4 h-4' />
              <span>Transparent Pricing</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent'>
                Innovative 2025
              </span>
              <br />
              <span className='text-white'>Pricing Showcase</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Discover competitive pricing for our comprehensive collection of
              cutting-edge AI, IT infrastructure, micro SAAS, and business
              solutions designed to transform your business in 2025.
            </p>

            {/* Contact Information */}
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 inline-block'>
              <div className='flex flex-col md:flex-row items-center justify-center gap-6 text-white'>
                <div className='flex items-center gap-2'>
                  <Phone className='w-5 h-5 text-green-400' />
                  <span>+1 302 464 0950</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Mail className='w-5 h-5 text-green-400' />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MapPin className='w-5 h-5 text-green-400' />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://ziontechgroup.com'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105'
              >
                Visit Our Website
                <ExternalLink className='w-5 h-5' />
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry for 2025 Services'
                className='inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-xl border border-white/20'
              >
                Get Custom Quote
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='px-4 sm:px-6 lg:px-8 mb-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10'>
            <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
              {/* Search */}
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                />
              </div>

              {/* Category Filter */}
              <div className='flex gap-2 flex-wrap'>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className='flex gap-4 items-center'>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className='px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value='price'>Price: Low to High</option>
                  <option value='popularity'>Most Popular</option>
                  <option value='rating'>Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className='px-4 sm:px-6 lg:px-8 mb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {Object.entries(priceRanges).map(([range, services]) => (
              <motion.div
                key={range}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'
              >
                <div className='text-center mb-6'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {range}
                  </h3>
                  <div className='text-4xl font-bold text-blue-400 mb-2'>
                    {services.length} Services
                  </div>
                  <p className='text-gray-300 text-sm'>
                    Perfect for{' '}
                    {range.includes('Budget')
                      ? 'startups and small businesses'
                      : range.includes('Professional')
                        ? 'growing companies'
                        : 'enterprise organizations'}
                  </p>
                </div>

                <div className='space-y-3'>
                  {services.slice(0, 3).map(service => (
                    <div
                      key={service.id}
                      className='flex items-center justify-between p-3 bg-white/5 rounded-lg'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center'>
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <div className='text-white font-semibold text-sm'>
                            {service.name}
                          </div>
                          <div className='text-gray-400 text-xs'>
                            {service.price}/month
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center gap-1'>
                        {getRatingStars(service.rating)}
                      </div>
                    </div>
                  ))}
                  {services.length > 3 && (
                    <div className='text-center text-blue-400 text-sm'>
                      +{services.length - 3} more services
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Pricing */}
      <section className='px-4 sm:px-6 lg:px-8 mb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              Detailed Service Pricing
            </h2>
            <p className='text-gray-400'>
              Compare features, pricing, and benefits across all our innovative
              services
            </p>
          </div>

          <div className='space-y-6'>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300'
              >
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                  {/* Service Info */}
                  <div className='lg:col-span-2'>
                    <div className='flex items-start gap-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center'>
                        {getServiceIcon(service.icon)}
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-white mb-2'>
                          {service.name}
                        </h3>
                        <p className='text-gray-300 text-sm leading-relaxed mb-3'>
                          {service.tagline}
                        </p>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Stats */}
                  <div className='lg:col-span-1'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-white mb-2'>
                        {service.price}
                      </div>
                      <div className='text-gray-400 text-sm mb-4'>
                        {service.period}
                      </div>

                      <div className='space-y-3 text-sm'>
                        <div className='flex justify-between'>
                          <span className='text-gray-400'>Setup Time:</span>
                          <span className='text-white'>
                            {service.setupTime}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-400'>Trial:</span>
                          <span className='text-white'>
                            {service.trialDays} days
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-400'>Customers:</span>
                          <span className='text-white'>
                            {service.customers.toLocaleString()}
                          </span>
                        </div>
                        <div className='flex justify-between'>
                          <span className='text-gray-400'>Rating:</span>
                          <div className='flex items-center gap-1'>
                            {getRatingStars(service.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA and Market Info */}
                  <div className='lg:col-span-1'>
                    <div className='text-center space-y-4'>
                      <a
                        href={service.link}
                        className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group'
                      >
                        Get Started
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                      </a>

                      <div className='p-3 bg-white/5 rounded-lg'>
                        <div className='text-white font-semibold text-sm mb-2'>
                          Market Position
                        </div>
                        <p className='text-gray-300 text-xs leading-relaxed'>
                          {service.marketPosition}
                        </p>
                      </div>

                      <div className='p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30'>
                        <div className='text-white font-semibold text-sm mb-2 flex items-center justify-center gap-1'>
                          <TrendingUp className='w-4 h-4 text-green-400' />
                          Expected ROI
                        </div>
                        <p className='text-gray-300 text-xs leading-relaxed'>
                          {service.roi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className='mt-6 pt-6 border-t border-white/20'>
                  <h4 className='text-white font-semibold mb-4 flex items-center gap-2'>
                    <Check className='w-4 h-4 text-green-400' />
                    Key Features & Capabilities
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-start gap-2 p-3 bg-white/5 rounded-lg'
                      >
                        <Check className='w-4 h-4 text-green-400 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300 text-sm'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className='mt-6 pt-6 border-t border-white/20'>
                  <h4 className='text-white font-semibold mb-4 flex items-center gap-2'>
                    <Brain className='w-4 h-4 text-blue-400' />
                    Technology Stack & Integrations
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h5 className='text-gray-300 font-medium mb-2'>
                        Technologies
                      </h5>
                      <div className='flex flex-wrap gap-2'>
                        {service.technology.map((tech, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className='text-gray-300 font-medium mb-2'>
                        Integrations
                      </h5>
                      <div className='flex flex-wrap gap-2'>
                        {service.integrations.map((integration, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30'
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className='px-4 sm:px-6 lg:px-8 mb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              Pricing Comparison Table
            </h2>
            <p className='text-gray-400'>
              Compare pricing across different service categories and tiers
            </p>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20'>
              <thead>
                <tr className='border-b border-white/20'>
                  <th className='text-left p-6 text-white font-semibold'>
                    Service
                  </th>
                  <th className='text-center p-6 text-white font-semibold'>
                    Price
                  </th>
                  <th className='text-center p-6 text-white font-semibold'>
                    Category
                  </th>
                  <th className='text-center p-6 text-white font-semibold'>
                    Rating
                  </th>
                  <th className='text-center p-6 text-white font-semibold'>
                    Customers
                  </th>
                  <th className='text-center p-6 text-white font-semibold'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr
                    key={service.id}
                    className='border-b border-white/10 hover:bg-white/5 transition-colors duration-200'
                  >
                    <td className='p-6'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center'>
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <div className='text-white font-semibold'>
                            {service.name}
                          </div>
                          <div className='text-gray-400 text-sm'>
                            {service.tagline}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='text-center p-6'>
                      <div className='text-2xl font-bold text-white'>
                        {service.price}
                      </div>
                      <div className='text-gray-400 text-sm'>
                        {service.period}
                      </div>
                    </td>
                    <td className='text-center p-6'>
                      <span className='px-3 py-1 bg-white/20 text-white text-sm rounded-full'>
                        {service.category}
                      </span>
                    </td>
                    <td className='text-center p-6'>
                      <div className='flex justify-center items-center gap-1 mb-1'>
                        {getRatingStars(service.rating)}
                      </div>
                      <div className='text-gray-400 text-sm'>
                        {service.rating}/5
                      </div>
                    </td>
                    <td className='text-center p-6'>
                      <div className='text-white font-semibold'>
                        {service.customers.toLocaleString()}
                      </div>
                      <div className='text-gray-400 text-sm'>active users</div>
                    </td>
                    <td className='text-center p-6'>
                      <a
                        href={service.link}
                        className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105'
                      >
                        Explore
                        <ArrowRight className='w-4 h-4' />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-gray-300 mb-8 text-lg'>
              Contact our team to discuss pricing, implementation, and how our
              innovative services can transform your business.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <div className='text-white font-semibold'>
                  Expert Consultation
                </div>
                <div className='text-gray-400 text-sm'>
                  Free initial consultation
                </div>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <Clock className='w-6 h-6 text-white' />
                </div>
                <div className='text-white font-semibold'>Quick Setup</div>
                <div className='text-gray-400 text-sm'>Get started in days</div>
              </div>
              <div className='text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <Award className='w-6 h-6 text-white' />
                </div>
                <div className='text-white font-semibold'>Proven Results</div>
                <div className='text-gray-400 text-sm'>Success guaranteed</div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
              >
                Get Pricing Quote
              </a>
              <a
                href='tel:+13024640950'
                className='bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 border border-white/30'
              >
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025PricingShowcase;
