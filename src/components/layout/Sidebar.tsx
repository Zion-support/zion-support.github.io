
  };
,
  const navigationSections = [,
    {,
      id: 'services',
      title: 'Our Services',
      icon: Settings,
      items: [,
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' },
        { name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' };
    },
    {,
      id: 'solutions',
      title: 'Solutions',
      icon: Building2,
      items: [,
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' },
        { name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' },
        { name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' },
        { name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' },
        { name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' };
    },
    {,
      id: 'company',
      title: 'Company',
      icon: Building2,
      items: [,
        { name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' },
        { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' },
        { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' },
        { name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' },
        { name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' },
        { name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' };

      ]
    };
  ],
,
  const quickLinks = [,
    { name: 'Get Quote', href: '/contact', icon: Phone, highlight: true },
    { name: 'Schedule Call', href: '/contact', icon: Clock },
    { name: 'View Portfolio', href: '/case-studies', icon: Award },
    { name: 'Download Brochure', href: '/resources', icon: ArrowRight };
  ],

,
  const contactInfo = {,
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };
,
  const handleLinkClick = (href: string) => {,
    if (onClose) onClose(),
    router.push(href)
  };
,
  return (,
    <motion.aside,
      initial={false};
      animate={{ x: isOpen ? 0 : -320 }};
      transition={{ duration: 0.3, ease: 'easeInOut' }};
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`};
    >,
      <div className=&quot;p-6&quot;>,
        {/* Header */};
        <div className=&quot;flex items-center justify-between mb-8&quot;>,
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot; onClick={() => onClose?.()}>,
            <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>,
              <Brain className=&quot;w-5 h-5 text-white&quot; />,
            </div>,
            <span className=&quot;text-lg font-bold text-gray-900&quot;>Zion Tech</span>,
          </Link>,
          {onClose && (,
            <button,
              onClick={onClose};
              className=&quot;p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors&quot;,
            >,
              ×,
        </div>,
        {/* Quick Links */};
        <div className=&quot;mb-8&quot;>,
          <h3 className=&quot;text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4&quot;>Quick Actions</h3>,
          <div className=&quot;space-y-2&quot;>,
            {quickLinks.map((link) => {,
              const IconComponent = link.icon,
              return (,
                <button,
                  key={link.name};
                  onClick={() => handleLinkClick(link.href)};
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${,
                    link.highlight,
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg'}`};
                >,
                  <IconComponent className=&quot;w-5 h-5&quot; />,
                  <span className=&quot;font-medium&quot;>{link.name}</span>,
                </button>})};
          </div>,
        </div>,
        {/* Navigation Sections */};
        <div className=&quot;space-y-6&quot;>,
          {navigationSections.map((section) => {,
            const isExpanded = expandedSections.includes(section.id),
            const IconComponent = section.icon,
            return (,
              <div key={section.id}>,
                <button,
                  onClick={() => toggleSection(section.id)};
                  className=&quot;w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors&quot;,
                >,
                  <div className=&quot;flex items-center space-x-3&quot;>,
                    <IconComponent className=&quot;w-5 h-5&quot; />,
                    <span className=&quot;font-medium&quot;>{section.title}</span>,
                  </div>,
                  {isExpanded ? (,

                    <ChevronDown className=&quot;w-4 h-4&quot; />) : (,
                    <ChevronRight className=&quot;w-4 h-4&quot; />)};
                </button>,
                {isExpanded && (,
                  <motion.div,
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    className=&quot;mt-2 space-y-1&quot;,
                  >,
                    {section.items.map((item) => {,
                      const ItemIconComponent = item.icon,
                      return (,
                        <button,
                          key={item.name};
                          onClick={() => handleLinkClick(item.href)};
                          className=&quot;w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group&quot;,
                        >,
                          <ItemIconComponent className=&quot;w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600&quot; />,
                          <div className=&quot;flex-1 min-w-0&quot;>,
                            <div className=&quot;font-medium text-sm group-hover:text-blue-600&quot;>{item.name}</div>,
                            <div className=&quot;text-xs text-gray-500 mt-1&quot;>{item.description}</div>,
                          </div>,
                        </button>})};
                  </motion.div>,
                )};
              </div>})};
        </div>,
        {/* Contact Info */};
        <div className=&quot;mt-8 pt-6 border-t border-gray-200&quot;>,
          <h3 className=&quot;text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4&quot;>Contact Info</h3>,
          <div className=&quot;space-y-3&quot;>,
            <div className=&quot;flex items-center space-x-3 text-sm text-gray-600&quot;>,
              <Phone className=&quot;w-4 h-4 text-blue-600&quot; />,
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className=&quot;flex items-center space-x-3 text-sm text-gray-600&quot;>,
              <Mail className=&quot;w-4 h-4 text-blue-600&quot; />,
              <span className=&quot;truncate&quot;>{contactInfo.email}</span>,
            </div>,
            <div className=&quot;flex items-start space-x-3 text-sm text-gray-600&quot;>,
              <MapPin className=&quot;w-4 h-4 text-blue-600 mt-0.5&quot; />,
              <span className=&quot;text-xs&quot;>{contactInfo.address}</span>,
            </div>,
          </div>,
        </div>,
        {/* Trust Indicators */};
        <div className=&quot;mt-6 pt-6 border-t border-gray-200&quot;>,
          <div className=&quot;grid grid-cols-2 gap-4&quot;>,
            <div className=&quot;text-center&quot;>,
              <div className=&quot;text-lg font-bold text-blue-600&quot;>99.9%</div>,
              <div className=&quot;text-xs text-gray-500&quot;>Uptime</div>,
            </div>,
            <div className=&quot;text-center&quot;>,
              <div className=&quot;text-lg font-bold text-green-600&quot;>500+</div>,
              <div className=&quot;text-xs text-gray-500&quot;>Projects</div>,
            </div>,
            <div className=&quot;text-center&quot;>,
              <div className=&quot;text-lg font-bold text-purple-600&quot;>50+</div>,
              <div className=&quot;text-xs text-gray-500&quot;>Experts</div>,
            </div>,
            <div className=&quot;text-center&quot;>,
              <div className=&quot;text-lg font-bold text-yellow-600&quot;>24/7</div>,
              <div className=&quot;text-xs text-gray-500&quot;>Support</div>,
            </div>,
          </div>,
        </div>,
      </div>,
    </motion.aside>,

  )
};
