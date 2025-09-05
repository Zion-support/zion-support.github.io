import React, {_useState} from 'react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

type Service = CuttingEdgeInnovation2029 | any;

interface UltraFuturistic2029ServiceShowcaseProps {_services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;}

const categoryColors: {_[key: string]: string} = {_'AI & Consciousness': 'from-purple-600 to-pink-600', _'Quantum & Neuroscience': 'from-indigo-600 to-purple-600', _'Space Colonization': 'from-red-600 to-orange-600', _'Space Mining': 'from-yellow-600 to-orange-600', _'Space Architecture': 'from-green-600 to-teal-600', _'Space Energy': 'from-yellow-500 to-orange-500', _'AI & Business': 'from-blue-600 to-cyan-600', _'Quantum & Time': 'from-green-600 to-emerald-600', _'AI & Augmented Reality': 'from-orange-600 to-red-600'};

const categoryIcons: {_[key: string]: unknown} = {_'AI & Consciousness': Brain, _'Quantum & Neuroscience': Cpu, _'Space Colonization': Rocket, _'Space Mining': Zap, _'Space Architecture': Globe, _'Space Energy': Sparkles, _'AI & Business': Database, _'Quantum & Time': Timer, _'AI & Augmented Reality': Eye};

const UltraFuturistic2029ServiceShowcase: React.FC<UltraFuturistic2029ServiceShowcaseProps> = (_{_services, _title = "2029 Ultra-Futuristic Innovations", _subtitle = "Experience the future of technology with our revolutionary services", _maxServices = 12}) => {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<'innovation' | 'price' | 'rating'>('innovation');

  // Get unique categories
  const _categories = ['all', _...Array.from(new Set(services.map(service => service.category)))];

  // Filter and sort services
  const _filteredServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort(_(a, _b) => {
      switch (sortBy) {
        case 'innovation':
          // Default to 'Advanced' if innovationLevel is not available
          const _aLevel = (a as any).innovationLevel || 'Advanced';
          const _bLevel = (b as any).innovationLevel || 'Advanced';
          const _innovationOrder = { 'Revolutionary': 4, _'Breakthrough': 3, _'Advanced': 2, _'Emerging': 1};
          return (innovationOrder[bLevel] || 0) - (innovationOrder[aLevel] || 0);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    })
    .slice(0, maxServices);

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
    }
  };

  return (_<section className="py-20 relative overflow-hidden">
      {_/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {_/* Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          className="text-center mb-16"
        >
          <motion.h2
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.1}}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6"
          >
            {_title}
          </motion.h2>
          <motion.p
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {_subtitle}
          </motion.p>
        </motion.div>

        {_/* Filters and Controls */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.3}}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
        >
          {_/* Category Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {_categories.map((category) => (_<button
                  key={category}
                  onClick={_() => setSelectedCategory(category)}
                  className={_`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-900/50 text-gray-300 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50'}`}
                >
                  {_category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>

          {_/* Sort Options */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">Sort by:</span>
            <select
              value={_sortBy}
              onChange={_(_e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
            >
              <option value="innovation">Innovation Level</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </motion.div>

        {_/* Services Grid */}
        <motion.div
          variants={_containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={_{ once: true}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {_filteredServices.map(_(service, _index) => (
            <motion.div
              key={service.id}
              variants={_itemVariants}
              className="group"
            >
              <UltraFuturisticServiceCard
                service={_service}
                className="h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.4}}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our revolutionary 2029 technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>

        {_/* Innovation Stats */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.5}}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {_[
              { label: 'Revolutionary Services', _value: services.filter(s => s.innovationLevel === 'Revolutionary').length, _icon: Rocket, _color: 'from-purple-500 to-pink-500'},
              {_label: 'Patent Pending', _value: services.filter(s => s.patentStatus === 'Patent Pending').length, _icon: Shield, _color: 'from-blue-500 to-cyan-500'},
              {_label: 'Total Customers', _value: services.reduce(_(sum, _s) => sum + s.customers, _0), _icon: Star, _color: 'from-yellow-500 to-orange-500'},
              {_label: 'Average Rating', _value: (_services.reduce((sum, _s) => sum + s.rating, _0) / services.length).toFixed(1), _icon: TrendingUp, _color: 'from-green-500 to-teal-500'}
            ].map(_(stat, _index) => (
              <motion.div
                key={_index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="text-center"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{_stat.value}</div>
                <div className="text-gray-400">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturistic2029ServiceShowcase;