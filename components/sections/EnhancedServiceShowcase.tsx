import React, {_useState, _useMemo} from 'react';
import {_Star, _Users, _TrendingUp, _DollarSign, _Clock, _CheckCircle, _ArrowRight, _Zap, _Shield, _Rocket, _Brain, _Globe, _Lock, _Code, _Database, _Cloud} from 'lucide-react';
import Button from '../ui/Button';

interface Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;};
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface EnhancedServiceShowcaseProps {_title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];
  maxServices?: number;}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = (_{_title, _subtitle, _showFilters = false, _services = [], _maxServices = 12}) => {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('popular');

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀'},
    {_id: 'ai', _name: 'AI & ML', _icon: '🧠'},
    {_id: 'quantum', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'blockchain', _name: 'Blockchain', _icon: '⛓️'},
    {_id: 'enterprise', _name: 'Enterprise', _icon: '🏢'},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: '🌟'}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices'},
    {_id: 'low', _name: 'Under $1K/month'},
    {_id: 'medium', _name: '$1K - $5K/month'},
    {_id: 'high', _name: '$5K - $20K/month'},
    {_id: 'premium', _name: '$20K+/month'}
  ];

  const _sortOptions = [
    {_id: 'popular', _name: 'Most Popular'},
    {_id: 'rating', _name: 'Highest Rated'},
    {_id: 'roi', _name: 'Best ROI'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'}
  ];

  const _filteredServices = useMemo__(() => {_let _filtered = services.filter(service => {
      const _matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('DeFi') || service.category.includes('NFT'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') || service.category.includes('Autonomous') || service.category.includes('Space') || service.category.includes('Biotech')));

      const _matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, _'')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, _'')) >= 1000 && parseFloat(service.price.replace(/[$]/g, _'')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, _'')) >= 5000 && parseFloat(service.price.replace(/[$]/g, _'')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, _'')) >= 20000);

      return matchesCategory && matchesPrice;});

    // Sort services
    switch (sortBy) {_case 'popular':
        filtered.sort(_(a, _b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort(_(a, _b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'roi':
        filtered.sort(_(a, _b) => {
          const _aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const _bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI;});
        break;
      case 'price-low':
        filtered.sort(_(a, _b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':
        filtered.sort(_(a, _b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, '')));
        break;
      default:
        break;
    }

    return filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);

  const _stats = [
    {_label: 'Total Services', _value: services.length, _icon: Rocket, _color: 'text-blue-400'},
    {_label: 'Active Customers', _value: services.reduce(_(sum, _s) => sum + (s.customers || 0), _0), _icon: Users, _color: 'text-green-400'},
    {_label: 'Average Rating', _value: (_services.reduce((sum, _s) => sum + (s.rating || 0), _0) / services.length).toFixed(1), _icon: Star, _color: 'text-yellow-400'},
    {_label: 'Market Growth', _value: '300%+', _icon: TrendingUp, _color: 'text-purple-400'}
  ];

  return (_<section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {_/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            {_title}
          </motion.h2>
          <motion.p
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {_subtitle}
          </motion.p>

          {_/* Stats */}
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {_stats.map((stat, _index) => (
              <div key={index} className="text-center">
                <div className={_`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{_stat.value}</div>
                <div className="text-sm text-gray-400">{_stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {_/* Filters */}
        {_showFilters && (_<motion.div
            initial={{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.6}}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {_/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                  <select
                    value={_selectedCategory}
                    onChange={_(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {_categories.map(_(category) => (
                      <option key={category.id} value={_category.id}>
                        {_category.icon} {_category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                  <select
                    value={_selectedPriceRange}
                    onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {_priceRanges.map(_(range) => (
                      <option key={range.id} value={_range.id}>
                        {_range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                  <select
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {_sortOptions.map(_(option) => (
                      <option key={option.id} value={_option.id}>
                        {_option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {_/* Services Grid */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.8}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 30, _scale: 0.9}}
                whileInView={_{ opacity: 1, _y: 0, _scale: 1}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                whileHover={_{ y: -5, _scale: 1.02}}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  {_/* Popular Badge */}
                  {_service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Most Popular
                    </div>
                  )}

                  {_/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{_service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{_service.price}</div>
                        <div className="text-sm text-gray-400">{_service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {_service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {_service.tagline}
                    </p>
                  </div>

                  {_/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {_service.features.slice(0, _4).map(_(feature, _idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {_feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {_/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{_service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{_service.customers?.toLocaleString() || '0'}</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{_service.trialDays}</div>
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>

                  {_/* ROI Highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {_service.roi}
                    </div>
                  </div>

                  {_/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {_service.marketPosition}
                    </div>
                  </div>

                  {_/* CTA */}
                  <div className="mt-auto">
                    <Button
                      href={_service.link}
                      variant="primary"
                      className="w-full group-hover:bg-cyan-500 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {_/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{_service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{_service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 1.0}}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. 
              Get started today and see the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
                View Pricing Plans
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServiceShowcase;