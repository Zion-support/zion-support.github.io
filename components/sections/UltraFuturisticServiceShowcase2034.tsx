import React, {_useState} from 'react';
import {_Star, _CheckCircle, _ArrowRight, _TrendingUp, _Users, _Award, _Clock, _Zap, _Shield, _Brain, _Atom, _Rocket, _ShoppingCart, _Cpu, _Globe, _Lock, _Video, _Palette, _BarChart, _UserCheck, _FileText, _Heart, _Eye, _Search, _Phone} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_id: 'ai-services', _title: '🧠 Revolutionary AI Services', _description: 'Next-generation AI consciousness and creativity', _icon: Brain, _color: 'from-violet-500 to-purple-500', _services: aiEmergingTechServices.filter(s => s.category.includes('AI')), _gradient: 'from-violet-500/20 to-indigo-500/20'},
  {_id: 'quantum-tech', _title: '⚛️ Quantum & Emerging Tech', _description: 'Quantum computing and beyond', _icon: Atom, _color: 'from-indigo-500 to-blue-500', _services: aiEmergingTechServices.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain')), _gradient: 'from-indigo-500/20 to-cyan-500/20'},
  {_id: 'enterprise-it', _title: '🏙️ Enterprise IT Solutions', _description: 'Autonomous operations and zero-trust security', _icon: Cpu, _color: 'from-blue-500 to-cyan-500', _services: realMarketServices.filter(s => s.category.includes('Security') || s.category.includes('HR') || s.category.includes('Project')), _gradient: 'from-blue-500/20 to-teal-500/20'},
  {_id: 'business-automation', _title: '🛒 Business Automation', _description: 'Streamline business operations', _icon: ShoppingCart, _color: 'from-teal-500 to-emerald-500', _services: realMarketServices.filter(s => s.category.includes('E-commerce') || s.category.includes('Marketing') || s.category.includes('Finance')), _gradient: 'from-teal-500/20 to-green-500/20'},
  {_id: 'robotics-automation', _title: '🤖 Robotics & Automation', _description: 'Intelligent automation solutions', _icon: Rocket, _color: 'from-green-500 to-yellow-500', _services: aiEmergingTechServices.filter(s => s.category.includes('Robotics') || s.category.includes('Edge')), _gradient: 'from-green-500/20 to-orange-500/20'},
  {_id: 'research-development', _title: '🔬 Research & Development', _description: 'Breakthrough technologies and innovations', _icon: Globe, _color: 'from-orange-500 to-red-500', _services: aiEmergingTechServices.filter(s => s.category.includes('Drug') || s.category.includes('Climate')), _gradient: 'from-orange-500/20 to-pink-500/20'}
];

export default function UltraFuturisticServiceShowcase2034() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');

  const _allServices = [...realMarketServices, _...aiEmergingTechServices];
  
  const _filteredServices = allServices.filter(service => {
    const _matchesCategory = selectedCategory === 'all' || 
      serviceCategories.some(cat => cat.services.includes(service));
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;});

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  };

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0}
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {_/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {_/* Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6}}
          viewport={_{ once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. 
            Each service is designed to transform your business and propel you into the future.
          </p>
          
          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {_[
              { label: 'Total Services', _value: allServices.length.toString(), _icon: Rocket},
              {_label: 'Happy Customers', _value: '50K+', _icon: Users},
              {_label: 'Success Rate', _value: '99.9%', _icon: CheckCircle},
              {_label: 'Global Reach', _value: '45+ Countries', _icon: Globe}
            ].map(_(stat, _index) => (
              <motion.div
                key={_stat.label}
                initial={_{ opacity: 0, _scale: 0.8}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{_stat.value}</div>
                <div className="text-sm text-gray-400">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {_/* Search and Filter */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.2}}
          viewport={_{ once: true}}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {_/* Category Filter */}
            <select
              value={_selectedCategory}
              onChange={_(_e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {_serviceCategories.map(category => (
                <option key={category.id} value={_category.id}>
                  {_category.title.split(' ')[0]}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {_/* Service Categories */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.4}}
          viewport={_{ once: true}}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_serviceCategories.map(_(category, _index) => (_<motion.div
                key={category.id}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'border-cyan-500 bg-cyan-500/10' 
                    : 'border-white/20 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5'}`}
                onClick={_() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={_`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{_category.title}</h3>
                    <p className="text-sm text-gray-400">{_category.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {_category.services.length} services available
                </div>
              </motion.div>
            ))}
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
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
            >
              {_/* Popular Badge */}
              {_service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Popular
                </div>
              )}

              {_/* Service Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={_`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {_service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{_service.price}</div>
                  <div className="text-sm text-gray-400">{_service.period}</div>
                </div>
              </div>

              {_/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {_service.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {_service.description}
              </p>

              {_/* Features */}
              <div className="space-y-2 mb-4">
                {_service.features.slice(0, _3).map(_(feature, _idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{_feature}</span>
                  </div>
                ))}
                {_service.features.length > 3 && (
                  <div className="text-sm text-cyan-400">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              {_/* Service Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{_service.setupTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{_service.customers.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{_service.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>{_service.growthRate}</span>
                </div>
              </div>

              {_/* Market Position */}
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-xs text-gray-400 mb-1">Market Position</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {_service.marketPosition}
                </div>
              </div>

              {_/* ROI */}
              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="text-xs text-green-400 mb-1 font-semibold">Expected ROI</div>
                <div className="text-sm text-green-300 font-medium">
                  {_service.roi}
                </div>
              </div>

              {_/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={_service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {_/* Trial Info */}
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-400">
                  <span className="text-cyan-400 font-semibold">{_service.trialDays} days</span> free trial
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* Call to Action */}
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.6, _delay: 0.6}}
          viewport={_{ once: true}}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge technology solutions. 
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
              >
                Start Your Free Trial
              </a>
                             <a
                 href="/pricing-2034"
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
               >
                 View Pricing
               </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <Phone className="w-4 h-4 inline mr-2" />
              Need help? Call us at {_contactInfo.mobile}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}