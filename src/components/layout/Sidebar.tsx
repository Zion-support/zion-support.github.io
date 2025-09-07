



import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {;
  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;

import React from 'react';
export default function Sidebar() {return (<aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-80 bg-gray-100 border-r">;
      <div className="p-6">;
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>;
        <nav className="space-y-2">;
          <a href="/" className="block text-gray-600 hover:text-gray-900">Home</a>;
          <a href="/about" className="block text-gray-600 hover:text-gray-900">About</a>;
          <a href="/services" className="block text-gray-600 hover:text-gray-900">Services</a>;
          <a href="/pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>;
          <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</a>;
        </nav>;
      </div>;
    </aside>;
  )}ursor/automate-test-improve-and-merge-code-646c;
import { Link  } from 'react-router-dom';
const Sidebar: React.FC = () => {return (<div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;
      <div className="p-6">;
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>;
        <nav className="space-y-2">;
          <Link;
            to="/";
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Home;
          </Link>;
          <Link;
            to="/about";
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            About;
          </Link>;
          <Link;
            to="/services";
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Services;
          </Link>;
          <Link;
            to="/contact";
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;
            Contact;
          </Link>;
          <Link;
            to="/pricing";
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

  };
,

};
; const navigationSections = [; {; id: 'services', title: 'Our Services', icon: Settings, items: [
    , { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' }; { name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' }; { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' }; { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' }; { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' },
    { name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' }
  ]}; {; id: 'solutions', title: 'Solutions', icon: Building2, items: [
    , { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' }; { name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' }; { name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' }; { name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' }; { name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' },
    { name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' }
  ]}; {; id: 'company', title: 'Company', icon: Building2, items: [
    , { name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' }; { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' }; { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' }; { name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' }; { name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' }
  ]}; ];
; const quickLinks = [
    ; { name: 'Get Quote', href: '/contact', icon: Phone, highlight: true }; { name: 'Schedule Call', href: '/contact', icon: Clock }; { name: 'View Portfolio', href: '/case-studies', icon: Award },
    { name: 'Download Brochure', href: '/resources', icon: ArrowRight }
  ];
; const contactInfo = {; phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008, Middletown DE 19709'};
; const handleLinkClick = (href: string) = > {, if (onClose) onClose(), router.push(href)};
; return (; <motion.aside; initial = {false}; animate = {{ x: isOpen ? 0: -320 }}; transition = {{ duration: 0.3, ease: 'easeInOut' }}; className = {`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`}>; <div className = "p-6">; {/* Header */}; <div className = "flex items-center justify-between mb-8">; <Link href = "/" className = "flex items-center space-x-2" onClick = {() = > onClose?.()}>; <div className = "w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">; <Brain className = "w-5 h-5 text-white" />; </div>; <span className = "text-lg font-bold text-gray-900">Zion Tech</span>; </Link>; {onClose && (; <button; onClick = {onClose}; className = "p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors">, ×, </button>; )}; </div>; {/* Quick Links */}; <div className = "mb-8">; <h3 className = "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>; <div className = "space-y-2">; {quickLinks.map((link) = > {; const IconComponent = link.icon; return (; <button; key = {link.name}; onClick = {() = > handleLinkClick(link.href)}; className = {`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${; link.highlight; ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg';: 'text-gray-700 hover:bg-gray-100'}`}>; <IconComponent className = "w-5 h-5" />; <span className = "font-medium">{link.name}</span>; </button>; )})}; </div>; </div>; {/* Navigation Sections */}; <div className = "space-y-6">; {navigationSections.map((section) = > {; const isExpanded = expandedSections.includes(section.id); const IconComponent = section.icon;
; return (; <div key = {section.id}>; <button; onClick = {() = > toggleSection(section.id)}; className = "w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors">, <div className = "flex items-center space-x-3">, <IconComponent className = "w-5 h-5" />; <span className = "font-medium">{section.title}</span>; </div>; {isExpanded ? (; <ChevronDown className = "w-4 h-4" />; ): (; <ChevronRight className = "w-4 h-4" />; )}; </button>; {isExpanded && (; <motion.div; initial = {{ opacity: 0, height: 0 }}; animate = {{ opacity: 1, height: 'auto' }}; exit = {{ opacity: 0, height: 0 }}; className = "mt-2 space-y-1">; {section.items.map((item) = > {; const ItemIconComponent = item.icon; return (; <button; key = {item.name}; onClick = {() = > handleLinkClick(item.href)}; className = "w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group">, <ItemIconComponent className = "w-4 h-4 mt-0.5 text-gray-400 group-hover:text-blue-600" />, <div className = "flex-1 min-w-0">; <div className = "font-medium text-sm group-hover:text-blue-600">{item.name}</div>; <div className = "text-xs text-gray-500 mt-1">{item.description}</div>; </div>; </button>; )})}; </motion.div>; )}; </div>; )})}; </div>; {/* Contact Info */}; <div className = "mt-8 pt-6 border-t border-gray-200">; <h3 className = "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>; <div className = "space-y-3">; <div className = "flex items-center space-x-3 text-sm text-gray-600">; <Phone className = "w-4 h-4 text-blue-600" />; <span>{contactInfo.phone}</span>; </div>; <div className = "flex items-center space-x-3 text-sm text-gray-600">; <Mail className = "w-4 h-4 text-blue-600" />; <span className = "truncate">{contactInfo.email}</span>; </div>; <div className = "flex items-start space-x-3 text-sm text-gray-600">; <MapPin className = "w-4 h-4 text-blue-600 mt-0.5" />; <span className = "text-xs">{contactInfo.address}</span>; </div>; </div>; </div>; {/* Trust Indicators */}; <div className = "mt-6 pt-6 border-t border-gray-200">; <div className = "grid grid-cols-2 gap-4">; <div className = "text-center">; <div className = "text-lg font-bold text-blue-600">99.9%</div>; <div className = "text-xs text-gray-500">Uptime</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-green-600">500+</div>; <div className = "text-xs text-gray-500">Projects</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-purple-600">50+</div>; <div className = "text-xs text-gray-500">Experts</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-yellow-600">24/7</div>; <div className = "text-xs text-gray-500">Support</div>; </div>; </div>; </div>; </div>; </motion.aside>; )};

      initial={false};
      animate={{ x: isOpen ? 0 : -320 }};
      transition={{ duration: 0.3, ease: 'easeInOut' }};
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
              className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors",
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg',
                      : 'text-gray-700 hover: bg-gray-100',
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
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors",
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
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    className="mt-2 space-y-1",
                  >,
                    {section.items.map((item) => {,
                      const ItemIconComponent = item.icon,
                      return (,
                        <button,
                          key={item.name};
                          onClick={() => handleLinkClick(item.href)};
                          className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group",
                        >,
                          <ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600" />,
                          <div className="flex-1 min-w-0">,
                            <div className="font-medium text-sm group-hover:text-blue-600">{item.name}</div>,
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
  )}export default Sidebar;},const navigationSections = [,{,id: 'services',title: 'Our Services',icon: Settings,items: [,{ name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },{ name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' },{ name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' },{ name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },{ name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' },{ name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' }];
      ];
      ];
    },{,id: 'solutions',title: 'Solutions',icon: Building2,items: [,{ name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' },{ name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' },{ name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' },{ name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' },{ name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' },{ name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' }];
      ];
      ];
    },{,id: 'company',title: 'Company',icon: Building2,items: [,{ name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' },{ name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' },{ name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' },{ name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' },{ name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' },{ name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' }];
      ];
      ];
    }],,const quickLinks = [,{ name: 'Get Quote', href: '/contact', icon: Phone, highlight: true },{ name: 'Schedule Call', href: '/contact', icon: Clock },{ name: 'View Portfolio', href: '/case-studies', icon: Award },{ name: 'Download Brochure', href: '/resources', icon: ArrowRight }],,const contactInfo = {,phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008, Middletown DE 19709';
    address: '364 E Main St STE 1008, Middletown DE 19709';
    address: '364 E Main St STE 1008, Middletown DE 19709';
  },const handleLinkClick = (href: string) => {,if (onClose) onClose(),router.push(href)router.push(href)router.push(href)},return (,<motion.aside;
}const navigationSections = [; {id: 'services', title: 'Our Services', icon: Settings, items: [;
    , { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' }{ name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' }{ name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' }{ name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' }{ name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' },{ name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' }
  ]}{id: 'solutions', title: 'Solutions', icon: Building2, items: [;
    , { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' }{ name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' }{ name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' }{ name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' }{ name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' },{ name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' }
  ]}{id: 'company', title: 'Company', icon: Building2, items: [;
    , { name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' }{ name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' }{ name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' }{ name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' }{ name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' },{ name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' }
  ]}];const quickLinks  = [;{ name: 'Get Quote', href: '/contact', icon: Phone, highlight: true }{ name: 'Schedule Call', href: '/contact', icon: Clock }{ name: 'View Portfolio', href: '/case-studies', icon: Award },{ name: 'Download Brochure', href: '/resources', icon: ArrowRight }
  ];const contactInfo = {phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008, Middletown DE 19709'}const handleLinkClick  = (href: string) = > {, if (onClose) onClose(), router.push(href)}return (<motion.aside; initial = {false}animate = {{ x: isOpen ? 0: -320 }}transition = {{ duration: 0.3, ease: 'easeInOut' }}className = {`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`}>; <div className = "p-6">; {/* Header */}<div className = "flex items-center justify-between mb-8">; <Link href = "/" className = "flex items-center space-x-2" onClick = {() = > onClose?.()}>; <div className = "w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">; <Brain className = "w-5 h-5 text-white" />; </div>; <span className = "text-lg font-bold text-gray-900">Zion Tech</span>; </Link>; {onClose && (<button; onClick = {onClose}className = "p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors">, ×, </button>; )}</div>; {/* Quick Links */}<div className = "mb-8">; <h3 className = "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>; <div className = "space-y-2">; {quickLinks.map((link) = > {const IconComponent = link.icon; return (<button; key = {link.name}onClick = {() = > handleLinkClick(link.href)}className = {`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${link.highlight; ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg';: 'text-gray-700 hover:bg-gray-100'}`}>; <IconComponent className = "w-5 h-5" />; <span className = "font-medium">{link.name}</span>; </button>; )})}</div>; </div>; {/* Navigation Sections */}<div className = "space-y-6">; {navigationSections.map((section) = > {const isExpanded = expandedSections.includes(section.id)const IconComponent  = section.icon;return (<div key = {section.id}>; <button; onClick = {() = > toggleSection(section.id)}className = "w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors">, <div className = "flex items-center space-x-3">, <IconComponent className = "w-5 h-5" />; <span className = "font-medium">{section.title}</span>; </div>; {isExpanded ? (<ChevronDown className = "w-4 h-4" />; ): (<ChevronRight className = "w-4 h-4" />; )}</button>; {isExpanded && (<motion.div; initial = {{ opacity: 0, height: 0 }}animate = {{ opacity: 1, height: 'auto' }}exit = {{ opacity: 0, height: 0 }}className = "mt-2 space-y-1">; {section.items.map((item) = > {const ItemIconComponent = item.icon; return (<button; key = {item.name}onClick = {() = > handleLinkClick(item.href)}className = "w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group">, <ItemIconComponent className = "w-4 h-4 mt-0.5 text-gray-400 group-hover:text-blue-600" />, <div className = "flex-1 min-w-0">; <div className = "font-medium text-sm group-hover:text-blue-600">{item.name}</div>; <div className = "text-xs text-gray-500 mt-1">{item.description}</div>; </div>; </button>; )})}</motion.div>; )}</div>; )})}</div>; {/* Contact Info */}<div className = "mt-8 pt-6 border-t border-gray-200">; <h3 className = "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>; <div className = "space-y-3">; <div className = "flex items-center space-x-3 text-sm text-gray-600">; <Phone className = "w-4 h-4 text-blue-600" />; <span>{contactInfo.phone}</span>; </div>; <div className = "flex items-center space-x-3 text-sm text-gray-600">; <Mail className = "w-4 h-4 text-blue-600" />; <span className = "truncate">{contactInfo.email}</span>; </div>; <div className = "flex items-start space-x-3 text-sm text-gray-600">; <MapPin className = "w-4 h-4 text-blue-600 mt-0.5" />; <span className = "text-xs">{contactInfo.address}</span>; </div>; </div>; </div>; {/* Trust Indicators */}<div className = "mt-6 pt-6 border-t border-gray-200">; <div className = "grid grid-cols-2 gap-4">; <div className = "text-center">; <div className = "text-lg font-bold text-blue-600">99.9%</div>; <div className = "text-xs text-gray-500">Uptime</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-green-600">500+</div>; <div className = "text-xs text-gray-500">Projects</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-purple-600">50+</div>; <div className = "text-xs text-gray-500">Experts</div>; </div>; <div className = "text-center">; <div className = "text-lg font-bold text-yellow-600">24/7</div>; <div className = "text-xs text-gray-500">Support</div>; </div>; </div>; </div>; </div>; </motion.aside>; )}initial={false}animate={{ x: isOpen ? 0 : -320 }}transition={{ duration: 0.3, ease: 'easeInOut' }}className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`}>,<div className="p-6">,{/* Header */}<div className="flex items-center justify-between mb-8">,<Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>,<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,<Brain className="w-5 h-5 text-white" />,</div>,<span className="text-lg font-bold text-gray-900">Zion Tech</span>,</Link>,{onClose && (,<button,onClick={onClose}className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors",>,×,</button>,)}</div>,{/* Quick Links */}<div className="mb-8">,<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>,<div className="space-y-2">,{quickLinks.map((link) => {,const IconComponent = link.icon,return (,<button,key={link.name}onClick={() => handleLinkClick(link.href)}className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${,link.highlight,? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg',: 'text-gray-700 hover: bg-gray-100';
                      : 'text-gray-700 hover: bg-gray-100';
                      : 'text-gray-700 hover: bg-gray-100';
                  }`}>,<IconComponent className="w-5 h-5" />,<span className="font-medium">{link.name}</span>,</button>,)))})}</div>,</div>,{/* Navigation Sections */}<div className="space-y-6">,{navigationSections.map((section) => {,const isExpanded = expandedSections.includes(section.id),const IconComponent = section.icon,,return (,<div key={section.id}>,<button,onClick={() => toggleSection(section.id)}className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors",>,<div className="flex items-center space-x-3">,<IconComponent className="w-5 h-5" />,<span className="font-medium">{section.title}</span>,</div>,{isExpanded ? (,<ChevronDown className="w-4 h-4" />,) : (,<ChevronRight className="w-4 h-4" />,)}</button>,{isExpanded && (,<motion.div,initial={{ opacity: 0, height: 0 }}animate={{ opacity: 1, height: 'auto' }}exit={{ opacity: 0, height: 0 }}className="mt-2 space-y-1",>,{section.items.map((item) => {,const ItemIconComponent = item.icon,return (,<button,key={item.name}onClick={() => handleLinkClick(item.href)}className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group",>,<ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600" />,<div className="flex-1 min-w-0">,<div className="font-medium text-sm group-hover:text-blue-600">{item.name}</div>,<div className="text-xs text-gray-500 mt-1">{item.description}</div>,</div>,</button>,)))})}</motion.div>,)}</div>,)))})}</div>,{/* Contact Info */}<div className="mt-8 pt-6 border-t border-gray-200">,<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>,<div className="space-y-3">,<div className="flex items-center space-x-3 text-sm text-gray-600">,<Phone className="w-4 h-4 text-blue-600" />,<span>{contactInfo.phone}</span>,</div>,<div className="flex items-center space-x-3 text-sm text-gray-600">,<Mail className="w-4 h-4 text-blue-600" />,<span className="truncate">{contactInfo.email}</span>,</div>,<div className="flex items-start space-x-3 text-sm text-gray-600">,<MapPin className="w-4 h-4 text-blue-600 mt-0.5" />,<span className="text-xs">{contactInfo.address}</span>,</div>,</div>,</div>,{/* Trust Indicators */}<div className="mt-6 pt-6 border-t border-gray-200">,<div className="grid grid-cols-2 gap-4">,<div className="text-center">,<div className="text-lg font-bold text-blue-600">99.9%</div>,<div className="text-xs text-gray-500">Uptime</div>,</div>,<div className="text-center">,<div className="text-lg font-bold text-green-600">500+</div>,<div className="text-xs text-gray-500">Projects</div>,</div>,<div className="text-center">,<div className="text-lg font-bold text-purple-600">50+</div>,<div className="text-xs text-gray-500">Experts</div>,</div>,<div className="text-center">,<div className="text-lg font-bold text-yellow-600">24/7</div>,<div className="text-xs text-gray-500">Support</div>,</div>,</div>,</div>,</div>,</motion.aside>,)))})}export default Sidebar;ursor/automate-test-improve-and-merge-code-646c;


>;
      <div className="p-6">;
        {/* Header */}<div className="flex items-center justify-between mb-8">;
          <Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <Brain className="w-5 h-5 text-white" />;
            </div>;
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>;
          </Link>;
          {onClose && (<button;
              onClick={onClose}className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors", >,×;
            </button>;
          )</div>;
        {/* Quick Links */}<div className="mb-8">;
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>;
          <div className="space-y-2">;
            {quickLinks.map((link) => {const IconComponent = link.icon;
              return (<button;
                  key={link.name}onClick={() => handleLinkClick(link.href)}className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${link.highlight;
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg', : 'text-gray-700 hover:bg-gray-100';
                  }`}>;
                  <IconComponent className="w-5 h-5" />;
                  <span className="font-medium">{link.name}</span>;
                </button>;
              )})}</div>;
        </div>;
        {/* Navigation Sections */}<div className="space-y-6">;
          {navigationSections.map((section) => {const isExpanded = expandedSections.includes(section.id)const IconComponent  = section.icon;return (<div key={section.id}>;
                <button;
                  onClick={() => toggleSection(section.id)}className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors", >,<div className="flex items-center space-x-3">;
                    <IconComponent className="w-5 h-5" />;
                    <span className="font-medium">{section.title}</span>;
                  </div>;
                  {isExpanded ? (<ChevronDown className="w-4 h-4" />;
                  ) : (<ChevronRight className="w-4 h-4" />;
                  )}</button>;
                {isExpanded && (<motion.div;
                    initial={{ opacity: 0, height: 0 }}animate={{ opacity: 1, height: 'auto' }}exit={{ opacity: 0, height: 0 }}className="mt-2 space-y-1";
                  >;
                    {section.items.map((item) => {const ItemIconComponent = item.icon;
                      return (<button;
                          key={item.name}onClick={() => handleLinkClick(item.href)}className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group", >,<ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600" />, <div className="flex-1 min-w-0">,<div className="font-medium text-sm group-hover:text-blue-600">{item.name}</div>;
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>;
                          </div>;
                        </button>;
                      )})}</motion.div>;
                )}</div>;
            )})}</div>;
        {/* Contact Info */}<div className="mt-8 pt-6 border-t border-gray-200">;
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>;
          <div className="space-y-3">;
            <div className="flex items-center space-x-3 text-sm text-gray-600">;
              <Phone className="w-4 h-4 text-blue-600" />;
              <span>{contactInfo.phone}</span>;
            </div>;
            <div className="flex items-center space-x-3 text-sm text-gray-600">;
              <Mail className="w-4 h-4 text-blue-600" />;
              <span className="truncate">{contactInfo.email}</span>;
            </div>;
            <div className="flex items-start space-x-3 text-sm text-gray-600">;
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />;
              <span className="text-xs">{contactInfo.address}</span>;
            </div>;
          </div>;
        </div>;
        {/* Trust Indicators */}<div className="mt-6 pt-6 border-t border-gray-200">;
          <div className="grid grid-cols-2 gap-4">;
            <div className="text-center">;
              <div className="text-lg font-bold text-blue-600">99.9%</div>;
              <div className="text-xs text-gray-500">Uptime</div>;
            </div>;
            <div className="text-center">;
              <div className="text-lg font-bold text-green-600">500+</div>;
              <div className="text-xs text-gray-500">Projects</div>;
            </div>;
            <div className="text-center">;
              <div className="text-lg font-bold text-purple-600">50+</div>;
              <div className="text-xs text-gray-500">Experts</div>;
            </div>;
            <div className="text-center">;
              <div className="text-lg font-bold text-yellow-600">24/7</div>;
              <div className="text-xs text-gray-500">Support</div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </motion.aside>;
  );
};


