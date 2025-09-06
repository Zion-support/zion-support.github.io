<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  Users,
  Settings,
  DollarSign,
  Phone,
  Menu
} from 'lucide-react'
const Sidebar = () => {
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: Phone }
  ]
  return (
    <aside className="hidden lg:block w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Zion Tech</span>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
<<<<<<< HEAD
    </aside>
  )
}
export default Sidebar
=======
<<<<<<< HEAD
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
    >;
      <div className="p-6">;
        {/* Header */};
        <div className="flex items-center justify-between mb-8">;
          <Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <Brain className="w-5 h-5 text-white" />;
            </div>;
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>;
          </Link>;
          {onClose && (;
            <button;
              onClick={onClose};
              className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors", >,
              ×;
            </button>;
          );
        </div>;
        {/* Quick Links */};
        <div className="mb-8">;
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>;
          <div className="space-y-2">;
            {quickLinks.map((link) => {;
              const IconComponent = link.icon;
              return (;
                <button;
                  key={link.name};
                  onClick={() => handleLinkClick(link.href)};
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${;
                    link.highlight;
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg', : 'text-gray-700 hover:bg-gray-100',
                  }`};
                >;
                  <IconComponent className="w-5 h-5" />;
                  <span className="font-medium">{link.name}</span>;
                </button>;
              );
            })};
          </div>;
        </div>;
        {/* Navigation Sections */};
        <div className="space-y-6">;
          {navigationSections.map((section) => {;
            const isExpanded = expandedSections.includes(section.id);
            const IconComponent = section.icon;
;
            return (;
              <div key={section.id}>;
                <button;
                  onClick={() => toggleSection(section.id)};
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors", >,
                  <div className="flex items-center space-x-3">;
                    <IconComponent className="w-5 h-5" />;
                    <span className="font-medium">{section.title}</span>;
                  </div>;
                  {isExpanded ? (;
                    <ChevronDown className="w-4 h-4" />;
                  ) : (;
                    <ChevronRight className="w-4 h-4" />;
                  )};
                </button>;
                {isExpanded && (;
                  <motion.div;
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    className="mt-2 space-y-1";
                  >;
                    {section.items.map((item) => {;
                      const ItemIconComponent = item.icon;
                      return (;
                        <button;
                          key={item.name};
                          onClick={() => handleLinkClick(item.href)};
                          className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group", >,
                          <ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600" />, <div className="flex-1 min-w-0">,
                            <div className="font-medium text-sm group-hover:text-blue-600">{item.name}</div>;
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>;
                          </div>;
                        </button>;
                      );
                    })};
                  </motion.div>;
                )};
              </div>;
            );
          })};
        </div>;
        {/* Contact Info */};
        <div className="mt-8 pt-6 border-t border-gray-200">;
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
        {/* Trust Indicators */};
        <div className="mt-6 pt-6 border-t border-gray-200">;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    </div>
  );
};

export default Sidebar;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </aside>
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
