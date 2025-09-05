import React, {_useState} from 'react';
import {_Brain, _Shield, _Rocket, _Globe, _Cpu, _Database, _TrendingUp, _Users, _Star, _Zap, _Lock, _Target, _ArrowRight, _Phone, _Mail, _MapPin, _ExternalLink} from 'lucide-react';

// Import our new innovative services

const Innovative2025ServicesShowcase: React.FC = () => {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');

  // Combine all innovative services
  const _allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025, _...innovativeITServicesExpansion2025V3, _...innovativeAIServicesExpansion2025V3
  ];

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: SparklesIcon, _color: 'from-purple-500 to-pink-500', _count: allInnovativeServices.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: BrainIcon, _color: 'from-cyan-500 to-blue-500', _count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length},
    {_id: 'it', _name: 'IT Infrastructure', _icon: Cpu, _color: 'from-yellow-500 to-orange-500', _count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length},
    {_id: 'cybersecurity', _name: 'Cybersecurity', _icon: ShieldIcon, _color: 'from-red-500 to-orange-500', _count: allInnovativeServices.filter(s => s.category.includes('Security')).length},
    {_id: 'cloud', _name: 'Cloud & FinOps', _icon: Database, _color: 'from-blue-500 to-indigo-500', _count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length},
    {_id: 'developer', _name: 'Developer Tools', _icon: Code, _color: 'from-green-500 to-teal-500', _count: allInnovativeServices.filter(s => s.category.includes('Developer')).length}
  ];

  const _filteredServices = allInnovativeServices.filter(service => {_const _matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
      (selectedCategory === 'it' && (service.category.includes('IT') || service.category.includes('Infrastructure'))) ||
      (selectedCategory === 'cybersecurity' && service.category.includes('Security')) ||
      (selectedCategory === 'cloud' && (service.category.includes('Cloud') || service.category.includes('FinOps'))) ||
      (selectedCategory === 'developer' && service.category.includes('Developer'));
    
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;});

  const _stats = [
    {_number: "15+", _label: "Innovative Services", _icon: Star},
    {_number: "99.9%", _label: "Uptime Guarantee", _icon: CheckCircle},
    {_number: "24/7", _label: "AI Support Available", _icon: Brain},
    {_number: "200+", _label: "Countries Served", _icon: Globe}
  ];

  const _fadeInUp = {_initial: { opacity: 0, _y: 30},
    animate: {_opacity: 1, _y: 0},
    transition: {_duration: 0.6, _ease: "easeOut"}
  };

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1}
    }
  };

  return (
    <>
      <Head>
        <title>Innovative 2025 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's innovative 2025 services including AI-powered solutions, advanced IT infrastructure, and cutting-edge micro SAAS platforms. Transform your business with our revolutionary technology solutions." />
        <meta name="keywords" content="innovative services 2025, AI services, IT infrastructure, micro SAAS, cybersecurity, cloud solutions, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {_/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {_/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {_[...Array(20)].map(_(_, _i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                style={_{
                  left: `${Math.random() * 100}%`,
                  top: `${_Math.random() * 100}%`,
                  animationDelay: `${_Math.random() * 2}s`,
                  animationDuration: `${_2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {_/* Content */}
        <div className="relative z-10">
          {_/* Header */}
          <motion.header 
            className="relative z-20 py-8 px-4 sm:px-6 lg:px-8"
            initial={_{ opacity: 0, _y: -20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
          >
            Experience the future of technology with our revolutionary AI platforms, quantum computing solutions, 
            autonomous systems, and innovative micro SAAS services that are transforming industries worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
          >
            <div className="max-w-7xl mx-auto">
              {_/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search innovative services..."
                    value={_searchTerm}
                    onChange={_(_e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
              </div>

              {_/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {_categories.map(_(category) => (_<button
                    key={category.id}
                    onClick={_() => setSelectedCategory(category.id)}
                    className={_`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white'}`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{_category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {_category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          {_/* Services Grid */}
          <motion.section 
            className="relative z-20 py-16 px-4 sm:px-6 lg:px-8"
            variants={_staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {_filteredServices.map(_(service) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    variants={_fadeInUp}
                    whileHover={_{ y: -10}}
                    transition={_{ duration: 0.3}}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
                      {_/* Service Icon and Header */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className={_`w-16 h-16 rounded-xl bg-gradient-to-r ${(service as any).color || 'from-blue-500 to-purple-500'} flex items-center justify-center text-3xl`}>
                            {_(service as any).icon || '🚀'}
                          </div>
                                                      {_(service as any).popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {_/* Service Name and Tagline */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {_service.name}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {_(service as any).tagline || service.description?.substring(0, _100) || 'Innovative service solution'}
                        </p>

                        {_/* Price */}
                        <div className="flex items-baseline mb-6">
                          <span className="text-3xl font-bold text-white">{_(service as any).price || (service as any).pricing?.starter || 'Contact Us'}</span>
                          <span className="text-gray-400 ml-2">{_(service as any).period || ''}</span>
                        </div>

                        {_/* Features */}
                        <div className="space-y-3 mb-8">
                          {_service.features.slice(0, _5).map(_(feature, _featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{_feature}</span>
                            </div>
                          ))}
                          {_service.features.length > 5 && (
                            <div className="text-gray-500 text-sm">
                              +{service.features.length - 5} more features
                            </div>
                          )}
                        </div>

                        {_/* Service Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).customers || '1000'}+</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).rating || '4.8'}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{_(service as any).reviews || '500'}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>

                        {_/* CTA Button */}
                        <Link
                          href={_`/services/${service.id}`}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {_/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {_filteredServices.length === 0 && (_<motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0}}
                  animate={_{ opacity: 1}}
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your search terms or category filters
                  </p>
                  <button
                    onClick={_() => {
                      setSearchTerm('');
                      setSelectedCategory('all');}}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {_/* Contact Section */}
          <motion.section 
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.2}}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Get in touch with our team to learn more about our innovative 2025 services 
                and how they can revolutionize your operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.section>

          {_/* Footer */}
          <motion.footer 
            className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 1.4}}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Transforming businesses with innovative technology solutions for the future.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/services" className="hover:text-white transition-colors">AI Services</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">IT Infrastructure</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                    <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
                  <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
};

export default Innovative2025ServicesShowcase;
