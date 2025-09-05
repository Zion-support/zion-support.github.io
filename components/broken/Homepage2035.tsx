import React, {_useState, _useEffect} from 'react';
import Layout from './layout/Layout';
import {_ArrowRight, _Play, _Star, _Users, _Award, _TrendingUp, _Brain, _Shield, _Rocket, _Loader2, _ChevronDown, _Zap, _Globe, _Target, _Lightbulb, _Code, _Database, _Cloud, _Lock, _ChartBar, _Cpu, _Atom, _Satellite, _Gamepad2, _Palette} from 'lucide-react';
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035';
import UltraFuturisticServiceCard2035 from './ui/UltraFuturisticServiceCard2035';

// Loading fallback component
const _LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={_{ opacity: 0, _scale: 0.5}}
      animate={_{ opacity: 1, _scale: 1}}
      transition={_{ duration: 0.5}}
      className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group...</p>
      <p className="text-sm text-gray-500">Preparing your digital transformation journey</p>
    </motion.div>
  </div>
);

const Homepage2035: React.FC = () => {_const [isLoading, _setIsLoading] = useState(true);
  const [isVisible, _setIsVisible] = useState(false);
  const [activeCategory, _setActiveCategory] = useState('all');

  useEffect__(() => {
    const _timer = setTimeout__(() => {
      setIsLoading(false);
      setIsVisible(true);}, 800);

    return () => clearTimeout(timer);
  }, []);

  const _fadeInUp = {_initial: { opacity: 0, _y: 60},
    animate: {_opacity: 1, _y: 0},
    transition: {_duration: 0.6, _ease: "easeOut"}
  };

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  };

  const _backgroundVariants = {_initial: { opacity: 0, _scale: 0.8},
    animate: {_opacity: 1, _scale: 1, _transition: { duration: 1.5, _ease: "easeOut" as const}
    }
  };

  const _categories = [
    {_id: 'all', _name: 'All Services', _icon: <Globe className="w-5 h-5" />},
    {_id: 'ai', _name: 'AI & ML', _icon: <Brain className="w-5 h-5" />},
    {_id: 'it', _name: 'IT Enterprise', _icon: <Cpu className="w-5 h-5" />},
    {_id: 'quantum', _name: 'Quantum Tech', _icon: <Atom className="w-5 h-5" />},
    {_id: 'space', _name: 'Space Tech', _icon: <Satellite className="w-5 h-5" />},
    {_id: 'cyber', _name: 'Cybersecurity', _icon: <Shield className="w-5 h-5" />},
    {_id: 'cloud', _name: 'Cloud & DevOps', _icon: <Cloud className="w-5 h-5" />},
    {_id: 'fintech', _name: 'FinTech', _icon: <ChartBar className="w-5 h-5" />}
  ];

  const _allServices = [
    ...innovative2025MicroSaasBatch,
    ...innovative2025ITEnterpriseBatch,
    ...innovative2025AIServicesBatch
  ];

  const _filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {_if (activeCategory === 'ai') return service.category.includes('AI') || service.category.includes('Machine Learning');
        if (activeCategory === 'it') return service.category.includes('IT') || service.category.includes('Enterprise');
        if (activeCategory === 'quantum') return service.name.includes('Quantum');
        if (activeCategory === 'space') return service.category.includes('Space');
        if (activeCategory === 'cyber') return service.category.includes('Security') || service.category.includes('Cybersecurity');
        if (activeCategory === 'cloud') return service.category.includes('Cloud') || service.category.includes('DevOps');
        if (activeCategory === 'fintech') return service.category.includes('Financial') || service.category.includes('Trading');
        return true;});

  if (isLoading) {_return <LoadingFallback />;}

  return (_<Layout>
      <UltraFuturisticBackground2035>
        {_/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with cutting-edge AI, _Quantum Computing, _and Space Technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>

            {_/* Stats */}
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {_[
                { icon: <Users className="w-8 h-8" />, _value: '50K+', _label: 'Happy Clients'}, _{_icon: <Star className="w-8 h-8" />, _value: '4.9', _label: 'Average Rating'}, _{_icon: <Award className="w-8 h-8" />, _value: '200+', _label: 'Services'}, _{_icon: <TrendingUp className="w-8 h-8" />, _value: '99.9%', _label: 'Uptime'}
              ].map((stat, _index) => (
                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _scale: 0.5}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: 0.3 + index * 0.1}}
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-2 flex justify-center">{_stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{_stat.value}</div>
                  <div className="text-gray-400 text-sm">{_stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business
              </p>
            </motion.div>

            {_/* Category Filter */}
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              viewport={_{ once: true}}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {_categories.map(_(category) => (_<motion.button
                  key={category.id}
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  onClick={_() => setActiveCategory(category.id)}
                  className={_`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'}`}
                >
                  {_category.icon}
                  <span>{_category.name}</span>
                </motion.button>
              ))}
            </motion.div>

            {_/* Services Grid */}
            <motion.div
              variants={_staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={_{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {_filteredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  variants={_fadeInUp}
                  className="w-full"
                >
                  <UltraFuturisticServiceCard2035 service={_service} />
                </motion.div>
              ))}
            </motion.div>

            {_/* View All Services Button */}
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              viewport={_{ once: true}}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {_/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine innovation, expertise, and cutting-edge technology to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_[
                {
                  icon: <Brain className="w-12 h-12" />, _title: 'AI-Powered Solutions', _description: 'Leverage the latest AI and machine learning technologies for intelligent automation and insights'},
                {_icon: <Shield className="w-12 h-12" />, _title: 'Enterprise Security', _description: 'Military-grade security protocols and compliance standards to protect your business'},
                {_icon: <Rocket className="w-12 h-12" />, _title: 'Space Technology', _description: 'Pioneering space tech solutions for the next generation of innovation'},
                {_icon: <Atom className="w-12 h-12" />, _title: 'Quantum Computing', _description: 'Access to quantum computing power for complex problem-solving'},
                {_icon: <Cloud className="w-12 h-12" />, _title: 'Cloud-Native', _description: 'Built for the cloud with scalability, _reliability, _and performance in mind'},
                {_icon: <Target className="w-12 h-12" />, _title: 'Results-Driven', _description: 'Focused on delivering measurable business outcomes and ROI'}
              ].map(_(feature, _index) => (
                <motion.div
                  key={_index}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {_feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{_feature.title}</h3>
                  <p className="text-gray-300">{_feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraFuturisticBackground2035>
    </Layout>
  );
};

export default Homepage2035;