
]
 ] 
] 
 ] 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}];
];</div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50" ></div> </div> <div> <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" > Zion Tech Group </h2> <p className="text-xs text-gray-400" >Navigation</p> </div> </div> </div> </div> </div> {
  section.badge
}</span>)
}</div>) : (<ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />)
}</button> <AnimatePresence> > <CloseIcon className="w-5 h-5" /> </button> </div> </div> </a>) )
}+ {
  filteredServices.length - 5
}more results </div>)
}</div>) : (<div className="text-sm text-gray-500 text-center py-2" > No services found </div>)
}</div>)
}</div> </div> </div> </div> </motion.div>) )
}</div> </div> </span> </a>) )
}</div> </div> </span> </div> <ChevronRight className= {
  `w-4 h-4 text-gray-400 transition-transform duration-200 $ {
  expandedCategory === item.name ? 'rotate-90' : ''
}`
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name
}{
  child.badge
}</span>)
}</a>) )
}</motion.div>)
}</AnimatePresence> </div>) )
}</div> </div> <span>Quick Links</span> </h3> <div className="space-y-2" > <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > Contact Us </div> <div className="text-xs text-gray-500" >Get in touch with our team</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > View Pricing </div> <div className="text-xs text-gray-500" >Explore our pricing plans</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > About Us </div> <div className="text-xs text-gray-500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-blue-400" >1000+</div> <div className="text-xs text-gray-400" >Clients</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-purple-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-green-400" >99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > <span>Get Started Today</span> <ArrowRight className="w-4 h-4 ml-2 inline" /> </a> </div> </div> </motion.aside>)
};export default EnhancedSidebar2025;


interface SidebarItem {
  name: string,
  href: string,
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const sidebarItems: SidebarItem[] = [
  {
    name: 'All Services'
    href: '/comprehensive-services-showcase-2025'
    icon: <Globe className="w-5 h-5" />
    description: 'Complete portfolio of all technology services'
    badge: 'Showcase'
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' }
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' }
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' }
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' }
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' }
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' }
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' }
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> }
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> }
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> }
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> }
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];
const supportLinks = [

  { name: 'Community', href: '/community', description: 'Connect with users' }
];

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}

            <span>{contactInfo.website}</span>
          </div>
        </div>
      </div>

                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (

            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div

                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}

=======
            </button>;

            <AnimatePresence>;
              {expandedSections && expandedSections.has(section && section.title) && (;
                <motion&& motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0 && 0.2 }}
                  className="ml-8 space-y-1">;
                  <CloseIcon className="w-5 h-5" />;
                </button>;
              </div>;


              {/* Search Bar */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;


              {/* Search Results */}

                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group">;
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                            {service && service.name}
                          </div>;
                          <div className="text-xs text-gray-500">;
                            {service && service.description}
                          </div>;
                        </Link>;
                      ))}
                      {filteredServices && filteredServices.length > 5 && (;
                        <div className="text-xs text-cyan-400 text-center">;
                          +{filteredServices && filteredServices.length - 5} more results;
                        </div>;
                      )}
                    </div>;
                  ) : (;
                    <div className="text-sm text-gray-500 text-center py-2">;
                      No services found;
                    </div>;
                  )}
                </div>;
              )}

              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.slice(0, 5).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                      {filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{filteredServices.length - 5} more results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      No services found
                    </div>
                  )}
                </div>
              )}
            </div>

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Star className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;
              <div className="space-y-2">;
                {quickLinks && quickLinks.map((link) => (;
                  <Link
                    key={link && link.name}
                    href={link && link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">;
                      {link && link.icon}
                    </div>;
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                      {link && link.name}
                    </span>;
                  </Link>;
                ))}

              </div>;
            </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Rocket className="w-5 h-5 text-cyan-400" />;
                <span>Service Categories</span>;
              </h3>;
              <div className="space-y-2">;
                {sidebarItems && sidebarItems.map((item) => (;
                  <div key={item && item.name}>;
                    <button

                  className="ml - 8 space - y-1";
                >;
                  <CloseIcon className="w - 5 h - 5" />;
                </button>;
              </div>;
              {/* Search Bar */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 2 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
                />;
              </div>;
              {/* Search Results */}
              {search_query && (
                <div className="mt - 4 space - y-2">;
                  <h4 className="text - sm font - medium text - gray - 300">Search Results</h4>;
                  {filtered_services.length > 0 ? (
                    <div className="space - y-1">;
                      {filtered_services.slice (0, 5).map ((service) => (
                        <Link;
                          key={service.name}
                          href={service.href}

            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div

                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
=======
className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30";
=======
                    className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  >;
                    <div className="text - 2xl font - bold text - white mb - 1">{stat.value}</div>;
                    <div className="text - xs text - gray - 400">{stat.label}</div>;
                  </motion.div>))}
              </div>;
            </div>;
=======
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div

            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item && item.name ? 'rotate-90' : ''
                        }`} 
                      />;
                    </button>;
                    <AnimatePresence>;
                      {expandedCategory === item && item.name && (;
                        <motion&& motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0 && 0.2 }}
                          className="ml-8 mt-2 space-y-1">;
                          {item && item.children?.map((child) => (;
                            <Link
                              key={child && child.name}
                              href={child && child.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group">;
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">;
                                {child && child.name}
                              </span>;
                              {child && child.badge && (;
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">;
                                  {child && child.badge}
                                </span>;
                              )}
                            </Link>;
                          ))}
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ))}

              </div>;
            </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Zap className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;
              <div className="space-y-2">;
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    Contact Us;
                  </div>;
                  <div className="text-xs text-gray-500">Get in touch with our team</div>;
                </Link>;
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    View Pricing;
                  </div>;
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>;
                </Link>;
                <Link
                  href="/about"
                  onClick={onClose}

                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    About Us;
                  </div>;
                  <div className="text-xs text-gray-500">Learn about Zion Tech Group</div>;
                </Link>;
              </div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-blue-400">1000+</div>;
              <div className="text-xs text-gray-400">Clients</div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-purple-400">24/7</div>;
              <div className="text-xs text-gray-400">Support</div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-green-400">99 && 99.9%</div>;
              <div className="text-xs text-gray-400">Uptime</div>;
            </div>;
          </div>;
        </div>;


        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">;
          <Link
            href="/contact"

                        </span>;
                      </div>;
                      <ChevronRight;
                        className={`w - 4 h - 4 text - gray - 400 transition - transform duration - 200 ${
                          expanded_category === item.name ? 'rotate - 90' : '';
                        }`}
                      />;
                    </button>;
                    <AnimatePresence>;
                      {expanded_category === item.name && (
                        <motion.div;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div

                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    Contact Us
                  </div>
                  <div className="text-xs text-gray-500">Get in touch with our team</div>
                </Link>
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    View Pricing
                  </div>
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>
                </Link>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    About Us
                  </div>
                  <div className="text-xs text-gray-500">Learn about Zion Tech Group</div>
                </Link>
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-blue-400">1000+</div>
              <div className="text-xs text-gray-400">Clients</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-green-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
    </motion.aside>
  )
=======
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import React, { useState, useEffect              } from 'react.ts;
import Link from 'next / link.ts;
import { motion, AnimatePresence               } from 'framer-motion.ts;

            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">;
            <span>Get Started Today</span>;
            <ArrowRight className="w-4 h-4 ml-2 inline" />;
          </Link>;
        </div>;
      </div>;
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>;
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>;
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>;
    </motion && motion.aside>;
  );
};

import React, { useState, useEffect              } from 'react.ts;
import Link from 'next/link.ts;
import { motion, AnimatePresence               } from 'framer-motion.ts;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown,'  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;
} from 'lucide-react && react.ts;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
