<<<<<<< HEAD


=======
<<<<<<< HEAD
import React from 'react';
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {;
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;
      <div className="p-6">;
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>;
        <nav className="space-y-2">;
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Home;
          </Link>;
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            About;
          </Link>;
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Services;
          </Link>;
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Contact;
          </Link>;
          <Link
            to="/pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Pricing;
          </Link>;
        </nav>;
      </div>;
    </div>;
  );
};

export default Sidebar;

>>>>>>> origin/merged-prs
  };
,
  const navigationSections = [,
    {,
      i: d: 'services',
      titl: e: 'Our Services',
      ico: n: Settings,
      item: s: [,
        { nam: e: 'AI Services', hre: f: '/ai-services', ico: n: Brain, descriptio: n: 'Cutting-edge AI solutions' },
        { nam: e: 'IT Services', hre: f: '/it-services', ico: n: Code, descriptio: n: 'Comprehensive IT solutions' },
        { nam: e: 'Micro SaaS', hre: f: '/micro-saas', ico: n: Cloud, descriptio: n: 'Scalable SaaS applications' },
        { nam: e: 'Cybersecurity', hre: f: '/cybersecurity', ico: n: Shield, descriptio: n: 'Advanced security solutions' },
        { nam: e: 'Cloud Solutions', hre: f: '/cloud-solutions', ico: n: Cloud, descriptio: n: 'Cloud infrastructure & services' },
        { nam: e: 'Database Solutions', hre: f: '/database-solutions', ico: n: Database, descriptio: n: 'Database management & optimization' };
      ],
    },
    {,
      i: d: 'solutions',
      titl: e: 'Solutions',
      ico: n: Building2,
      item: s: [,
        { nam: e: 'Enterprise Solutions', hre: f: '/enterprise-solutions', ico: n: Building2, descriptio: n: 'Large-scale business solutions' },
        { nam: e: 'Startup Solutions', hre: f: '/startup-solutions', ico: n: Rocket, descriptio: n: 'Scalable startup solutions' },
        { nam: e: 'Industry Solutions', hre: f: '/industries', ico: n: Factory, descriptio: n: 'Industry-specific solutions' },
        { nam: e: 'Custom Development', hre: f: '/custom-development', ico: n: Code, descriptio: n: 'Tailored software development' },
        { nam: e: 'Digital Transformation', hre: f: '/digital-transformation', ico: n: Network, descriptio: n: 'Complete digital transformation' },
        { nam: e: 'Technology Consulting', hre: f: '/consulting', ico: n: Users, descriptio: n: 'Strategic technology consulting' };
      ],
    },
    {,
      i: d: 'company',
      titl: e: 'Company',
      ico: n: Building2,
      item: s: [,
        { nam: e: 'About Us', hre: f: '/about', ico: n: Building2, descriptio: n: 'Learn about our company' },
        { nam: e: 'Our Team', hre: f: '/team', ico: n: Users, descriptio: n: 'Meet our expert team' },
        { nam: e: 'Careers', hre: f: '/careers', ico: n: Award, descriptio: n: 'Join our team' },
        { nam: e: 'Case Studies', hre: f: '/case-studies', ico: n: CheckCircle, descriptio: n: 'Success stories' },
        { nam: e: 'News & Updates', hre: f: '/news', ico: n: ArrowRight, descriptio: n: 'Latest news' },
        { nam: e: 'Partners', hre: f: '/partners', ico: n: Users, descriptio: n: 'Our partners' };
      ],
    };
  ],
,
  const quickLinks = [,
    { nam: e: 'Get Quote', hre: f: '/contact', ico: n: Phone, highligh: t: true },
    { nam: e: 'Schedule Call', hre: f: '/contact', ico: n: Clock },
    { nam: e: 'View Portfolio', hre: f: '/case-studies', ico: n: Award },
    { nam: e: 'Download Brochure', hre: f: '/resources', ico: n: ArrowRight };
  ],
,
  const contactInfo = {,
    phon: e: '+1 302 464 0950',
    emai: l: 'kleber@ziontechgroup.com',
    addres: s: '364 E Main St STE 1008, Middletown DE 19709',
  };
,
  const handleLinkClick = (hre: f: string) => {,
    if (onClose) onClose(),
    router.push(href),
  };
,
  return (,
    <motion.aside,

      initial={false};
      animate={{ x: isOpen ? 0 : -320 }};
      transition={{ duratio: n: 0.3, eas: e: 'easeInOut' }};
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`};

    >,
      <div className="p-6">,
        {/* Header */};
        <div className="flex items-center justify-between mb-8">,
          <Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>,
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <Brain className="w-5 h-5 text-white" />,
            </div>,
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>,
          </Link>,
          {onClose && (,
            <button,
              onClick={onClose};
              className="p-2 rounded-lg text-gray-500: hover: bg-gray-100 transition-colors",
            >,
              ×,
            </button>,
          )};
        </div>,
        {/* Quick Links */};
        <div className="mb-8">,
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>,
          <div className="space-y-2">,
            {quickLinks.map((link) => {,
              const IconComponent = link.icon,
              return (,
                <button,
                  key={link.name};
                  onClick={() => handleLinkClick(link.href)};
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${,
                    link.highlight,
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white: hover: shadow-lg',
                      : 'text-gray-700: hover: bg-gray-100',
                  }`};
                >,
                  <IconComponent className="w-5 h-5" />,
                  <span className="font-medium">{link.name}</span>,
                </button>,
              ),
            })};
          </div>,
        </div>,
        {/* Navigation Sections */};
        <div className="space-y-6">,
          {navigationSections.map((section) => {,
            const isExpanded = expandedSections.includes(section.id),
            const IconComponent = section.icon,
,
            return (,
              <div key={section.id}>,
                <button,
                  onClick={() => toggleSection(section.id)};
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700: hover: bg-gray-100 rounded-lg transition-colors",
                >,
                  <div className="flex items-center space-x-3">,
                    <IconComponent className="w-5 h-5" />,
                    <span className="font-medium">{section.title}</span>,
                  </div>,
                  {isExpanded ? (,
                    <ChevronDown className="w-4 h-4" />,
                  ) : (,
                    <ChevronRight className="w-4 h-4" />,
                  )};
                </button>,
                {isExpanded && (,
                  <motion.div,
                    initial={{ opacit: y: 0, heigh: t: 0 }};
                    animate={{ opacit: y: 1, heigh: t: 'auto' }};
                    exit={{ opacit: y: 0, heigh: t: 0 }};
                    className="mt-2 space-y-1",
                  >,
                    {section.items.map((item) => {,
                      const ItemIconComponent = item.icon,
                      return (,
                        <button,
                          key={item.name};
                          onClick={() => handleLinkClick(item.href)};
                          className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600: hover: bg-gray-50 rounded-lg transition-colors group",
                        >,
                          <ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hove: r: text-blue-600" />,
                          <div className="flex-1 min-w-0">,
                            <div className="font-medium text-sm group-hove: r:text-blue-600">{item.name}</div>,
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>,
                          </div>,
                        </button>,
                      ),
                    })};
                  </motion.div>,
                )};
              </div>,
            ),
          })};
        </div>,
        {/* Contact Info */};
        <div className="mt-8 pt-6 border-t border-gray-200">,
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>,
          <div className="space-y-3">,
            <div className="flex items-center space-x-3 text-sm text-gray-600">,
              <Phone className="w-4 h-4 text-blue-600" />,
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className="flex items-center space-x-3 text-sm text-gray-600">,
              <Mail className="w-4 h-4 text-blue-600" />,
              <span className="truncate">{contactInfo.email}</span>,
            </div>,
            <div className="flex items-start space-x-3 text-sm text-gray-600">,
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />,
              <span className="text-xs">{contactInfo.address}</span>,
            </div>,
          </div>,
        </div>,
        {/* Trust Indicators */};
        <div className="mt-6 pt-6 border-t border-gray-200">,
          <div className="grid grid-cols-2 gap-4">,
            <div className="text-center">,
              <div className="text-lg font-bold text-blue-600">99.9%</div>,
              <div className="text-xs text-gray-500">Uptime</div>,
            </div>,
            <div className="text-center">,
              <div className="text-lg font-bold text-green-600">500+</div>,
              <div className="text-xs text-gray-500">Projects</div>,
            </div>,
            <div className="text-center">,
              <div className="text-lg font-bold text-purple-600">50+</div>,
              <div className="text-xs text-gray-500">Experts</div>,
            </div>,
            <div className="text-center">,
              <div className="text-lg font-bold text-yellow-600">24/7</div>,
              <div className="text-xs text-gray-500">Support</div>,
            </div>,
          </div>,
        </div>,
      </div>,
    </motion.aside>,
  ),
<<<<<<< HEAD

};

=======
};
  );
};
export default Sidebar;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
