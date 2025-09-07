

import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Pricing
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

  };
,
  const navigationSections = $2;
    {,
      i: 'services',
      titl: 'Our Services',
      ico: Settings,
      item: [,
        { nam: 'AI Services', hre: f: '/ai-services', ico: Brain, descriptio: 'Cutting-edge AI solutions' },
        { nam: 'IT Services', hre: f: '/it-services', ico: Code, descriptio: 'Comprehensive IT solutions' },
        { nam: 'Micro SaaS', hre: f: '/micro-saas', ico: Cloud, descriptio: 'Scalable SaaS applications' },
        { nam: 'Cybersecurity', hre: f: '/cybersecurity', ico: Shield, descriptio: 'Advanced security solutions' },
        { nam: 'Cloud Solutions', hre: f: '/cloud-solutions', ico: Cloud, descriptio: 'Cloud infrastructure & services' },
        { nam: 'Database Solutions', hre: f: '/database-solutions', ico: Database, descriptio: 'Database management & optimization' }
      ]
    },
    {,
      i: 'solutions',
      titl: 'Solutions',
      ico: Building2,
      item: [,
        { nam: 'Enterprise Solutions', hre: f: '/enterprise-solutions', ico: Building2, descriptio: 'Large-scale business solutions' },
        { nam: 'Startup Solutions', hre: f: '/startup-solutions', ico: Rocket, descriptio: 'Scalable startup solutions' },
        { nam: 'Industry Solutions', hre: f: '/industries', ico: Factory, descriptio: 'Industry-specific solutions' },
        { nam: 'Custom Development', hre: f: '/custom-development', ico: Code, descriptio: 'Tailored software development' },
        { nam: 'Digital Transformation', hre: f: '/digital-transformation', ico: Network, descriptio: 'Complete digital transformation' },
        { nam: 'Technology Consulting', hre: f: '/consulting', ico: Users, descriptio: 'Strategic technology consulting' }
      ]
    },
    {,
      i: 'company',
      titl: 'Company',
      ico: Building2,
      item: [,
        { nam: 'About Us', hre: f: '/about', ico: Building2, descriptio: 'Learn about our company' },
        { nam: 'Our Team', hre: f: '/team', ico: Users, descriptio: 'Meet our expert team' },
        { nam: 'Careers', hre: f: '/careers', ico: Award, descriptio: 'Join our team' },
        { nam: 'Case Studies', hre: f: '/case-studies', ico: CheckCircle, descriptio: 'Success stories' },
        { nam: 'News & Updates', hre: f: '/news', ico: ArrowRight, descriptio: 'Latest news' },
        { nam: 'Partners', hre: f: '/partners', ico: Users, descriptio: 'Our partners' }
      ]
    }
  ],
,
  const quickLinks = $2;
    { nam: 'Get Quote', hre: f: '/contact', ico: Phone, highligh: true},
    { nam: 'Schedule Call', hre: f: '/contact', ico: Clock},
    { nam: 'View Portfolio', hre: f: '/case-studies', ico: Award},
    { nam: 'Download Brochure', hre: f: '/resources', ico: ArrowRight}
  ],
,
  const contactInfo = $2;
    phon: '+1 302 464 0950',
    emai: l: 'kleber@ziontechgroup.com',
    addres: '364 E Main St STE 1008, Middletown DE 19709'
  },
,
  const handleLinkClick = $2;
    if (onClose) onClose($2);
    router.push(href)
  },
,
  return (,
    <motion.aside,

      initial = $2;
      animate = $2;
      transition={{ duratio: 0.3, eas: 'easeInOut' }},
      className = $2;
    >,
      <div className = $2;
        {/* Header */},
        <div className = $2;
          <Link href = $2;
            <div className = $2;
              <Brain className = $2;
            </div>,
            <span className = $2;
          </Link>,
          {onClose && (,
            <button,
              onClick = $2;
              className = $2;
            >,
              ×,
            </button>)},
        </div>,
        {/* Quick Links */},
        <div className = $2;
          <h3 className = $2;
          <div className = $2;
            {quickLinks.map((link) => {,
              const IconComponent = $2;
              return (,
                <button,
                  key = $2;
                  onClick = $2;
                  className = $2;
                    link.highlight,
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white: hover:shadow-lg',
                      : 'text-gray-700: hover: bg-gray-100'
                  }`},
                >,
                  <IconComponent className = $2;
                  <span className = $2;
                </button>,
              )
            })},
          </div>,
        </div>,
        {/* Navigation Sections */},
        <div className = $2;
          {navigationSections.map((section) => {,
            const isExpanded = expandedSections.includes($2);
            const IconComponent = $2;
,
            return (,
              <div key = $2;
                <button,
                  onClick = $2;
                  className = $2;
                >,
                  <div className = $2;
                    <IconComponent className = $2;
                    <span className = $2;
                  </div>,
                  {isExpanded ? (,
                    <ChevronDown className = $2;
                    <ChevronRight className = $2;
                </button>,
                {isExpanded && (,
                  <motion.div,
                    initial={{ opacit: 0, heigh: 0}},
                    animate={{ opacit: 1, heigh: 'auto' }},
                    exit={{ opacit: 0, heigh: 0}},
                    className = $2;
                  >,
                    {section.items.map((item) => {,
                      const ItemIconComponent = $2;
                      return (,
                        <button,
                          key = $2;
                          onClick = $2;
                          className = $2;
                        >,
                          <ItemIconComponent className = $2;
                          <div className = $2;
                            <div className = $2;
                            <div className = $2;
                          </div>,
                        </button>,
                      )
                    })},
                  </motion.div>,
                )},
              </div>,
            )
          })},
        </div>,
        {/* Contact Info */},
        <div className = $2;
          <h3 className = $2;
          <div className = $2;
            <div className = $2;
              <Phone className = $2;
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className = $2;
              <Mail className = $2;
              <span className = $2;
            </div>,
            <div className = $2;
              <MapPin className = $2;
              <span className = $2;
            </div>,
          </div>,
        </div>,
        {/* Trust Indicators */},
        <div className = $2;
          <div className = $2;
            <div className = $2;
              <div className = $2;
              <div className = $2;
            </div>,
            <div className = $2;
              <div className = $2;
              <div className = $2;
            </div>,
            <div className = $2;
              <div className = $2;
              <div className = $2;
            </div>,
            <div className = $2;
              <div className = $2;
              <div className = $2;
            </div>,
          </div>,
        </div>,
      </div>,
    </motion.aside>,
  ),
};
  );
};
export default Sidebar;

