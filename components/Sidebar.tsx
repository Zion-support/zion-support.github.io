<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Search,
  Brain,
  Shield,
  Cloud,
  Code,
  Network,
  Zap,
  Phone,
  Mail,
  MapPin,
  Building2,
} from 'lucide-react';
const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' },
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' },
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};
const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' },
];
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface SidebarProps {}
  isOpen: boolean;
  onClose: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const navigation = {
    'Services': [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
    ],
    'Solutions': [
      { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
      { name: 'Data Analytics', href: '/solutions/data-analytics' },
    ],
    'Industries': [
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
<<<<<<< HEAD
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
=======
          <motion.div
            initial={{ opacity: 0 ;}}
            animate={{ opacity: 1 ;}}
            exit={{ opacity: 0 ;}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          {/* Sidebar */}
          <motion.div;
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}'
            exit={{ x: '-100%' }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
            initial={{ x: '-100%' ;}}
            animate={{ x: 0 ;}}
            exit={{ x: '-100%' ;}}
            transition={{ type: 'tween';, duration: 0.3 ;}}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"

pr-12243
<<<<<<< HEAD
=======
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          >
=======

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="p-6">
              {/* Header */}"
              <div className="flex items-center justify-between mb-8">"
                <div className="flex items-center space-x-2">"
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">"
                    <Building2 className="w-8 h-8 text-white" />
                  </div>"
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button;
                  onClick={onClose}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"

pr-12243
=======
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                >
=======

                >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <X className="w-6 h-6" />
                </button>
              </div>

<<<<<<< HEAD
pr-12243
              {/* Navigation */}
=======
              {/* Navigation */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button;
                      onClick={() => handleDropdownToggle(title)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover:text-blue-600 transition-colors"
                    >
                      <span>{title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        activeDropdown === title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-2 mt-2"
                      >
                        {links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                            onClick={onClose}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      className="flex items-center justify-between w-full text-left py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{title}</span>
                      {openDropdowns.includes(title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openDropdowns.includes(title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 space-y-1"
                        >
                          {links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                              onClick={onClose}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  </div>
                ))}
              </nav>

                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover:text-blue-600 transition-colors"
                    >
                      <span>{title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        activeDropdown === title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === title && (
                      <motion.div
                        initial={{ opacity: 0;, height: 0 ;}}
                        animate={{ opacity: 1;, height: 'auto' ;}}
                        exit={{ opacity: 0;, height: 0 ;}}
                        className="ml-4 space-y-2 mt-2"
                      >
                        {links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                            onClick={onClose}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </div>
                ))}
              </nav>

pr-12243
              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
=======

              {/* Quick Links */}"
              <div className="mt-8 pt-8 border-t border-gray-200">"
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link;
                      key={link.name}
                      href={link.href}"
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>24/7 Support Available</p>
                </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 mt-1" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>

<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>24/7 Support Available</p>
                </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};

export default Sidebar;
}

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ;};
  }
  static getDerivedStateFromError(error) {
    return { hasError: true ;};
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  LogOut,
  Phone,
  Mail,
  ExternalLink;
} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;, onClose: () => void;
}
        : [...prev, title];
    );

  ];
  return (
    <AnimatePresence>;
      {isOpen && (;
        <>;
          {/* Backdrop */}
          <motion&& motion.div
            initial={{ opacity: 0 ;}}
            animate={{ opacity: 1 ;}}
            exit={{ opacity: 0 ;}}
            initial={{ x: -300 ;}}
            animate={{ x: 0 ;}}
            exit={{ x: -300 ;}}
            transition={{ type: 'spring';, damping: 25;, stiffness: 200 ;}}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
              {/* Header */}
              <div className="flex items-center justify-between mb-8">;
                <div className="flex items-center space-x-2">;
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">;
                    <Building2 className="w-8 h-8 text-white" />;
                  </div>;
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>;
                </div>;
                <button
                  onClick={onClose}
              {/* Navigation */}
              <nav className="space-y-4">;
                {Object && Object.entries(navigation).map(([title, links]) => (;
                  <div key={title}>;
                    <button
                      onClick={() => handleDropdownToggle(title)}
                    <Link
                      key={link && link.name}
                      href={link && link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}>;
                      {link && link.name}
                    </Link>;
                  ))}
              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">;
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>;
                <div className="space-y-3">;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Phone className="w-4 h-4" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-600">;
                    <Mail className="w-4 h-4" />;
                    <span>kleber@ziontechgroup && ziontechgroup.com</span>;
                  </div>;
                </div>;
                <div className="mt-4">;
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover: bg-blue-700 transition-colors";
}
const Sidebar: React.FC < SidebarProps> = ({ is_open;, on_close }) => {
  const [open_dropdowns, setOpenDropdowns] = useState < string[]>([]);
;
  const handleDropdownToggle = (title: string) =>: any {
    setOpenDropdowns (prev =>;
      prev.includes (title);
        ? prev.filter (item => item !== title);
        : [...prev, title]);
  }
;
  const navigation = {
    'Services': [;
      { name: 'Web Development';, href: '/services / web - development';, icon: Code ;},
      { name: 'Mobile Development';, href: '/services / mobile - development';, icon: Smartphone ;},
      { name: 'Cloud Solutions';, href: '/services / cloud - solutions';, icon: Cloud ;},
      { name: 'Cybersecurity';, href: '/services / cybersecurity';, icon: Shield ;},
      { name: 'Performance Optimization';, href: '/services / performance';, icon: Zap ;},
    ],
    'Solutions': [;
      { name: 'Enterprise Solutions';, href: '/solutions / enterprise';, icon: Building2 ;},
      { name: 'E - commerce Platforms';, href: '/solutions / ecommerce';, icon: ShoppingCart ;},
      { name: 'Healthcare Technology';, href: '/solutions / healthcare';, icon: Heart ;},
      { name: 'Educational Platforms';, href: '/solutions / education';, icon: GraduationCap ;},
    ],
    'Industries': [;
      { name: 'Manufacturing';, href: '/industries / manufacturing';, icon: Factory ;},
      { name: 'Logistics';, href: '/industries / logistics';, icon: Truck ;},
      { name: 'Finance';, href: '/industries / finance';, icon: CreditCard ;},
      { name: 'Healthcare';, href: '/industries / healthcare';, icon: Heart ;},
      { name: 'Education';, href: '/industries / education';, icon: GraduationCap ;},
    ],
  }
;
  const quick_links = [;
    { name: 'About Us';, href: '/about' ;},
    { name: 'Our Team';, href: '/team' ;},
    { name: 'Case Studies';, href: '/case - studies' ;},
    { name: 'Blog';, href: '/blog' ;},
    { name: 'Careers';, href: '/careers' ;},
    { name: 'Contact';, href: '/contact' ;},
  ];
;
  return (
    <AnimatePresence>;
      {is_open && (
        <>;
          {/* Backdrop */}
          <motion.div;
            initial={{ opacity: 0 ;}}
            animate={{ opacity: 1 ;}}
            exit={{ opacity: 0 ;}}
            className="fixed inset - 0 bg - black bg - opacity - 50 z - 40";
            on_click={on_close}
          />;
          <motion.div;
            initial={{ coordinate_x: -300 ;}}
            animate={{ coordinate_x: 0 ;}}
            exit={{ coordinate_x: -300 ;}}
            transition={{ type: 'spring';, damping: 25;, stiffness: 200 ;}}
            className="fixed left - 0 top - 0 h - full w - 80 bg - white shadow - xl z - 50";
            <div className="p - 6">;
              {/* Header */}
              <div className="flex items - center justify - between mb - 8">;
                <div className="flex items - center space - x-2">;
                  <div className="bg - gradient - to - r from - blue - 600 to - purple - 600 p - 2 rounded - lg">;
                    <Building2 className="w - 8 h - 8 text - white" />;
                  </div>;
                  <span className="text - xl font - bold text - gray - 900">Zion Tech Group</span>;
                </div>;
                <button;
                  on_click={on_close}
                  className="p - 2 hover:bg - gray - 100 rounded - lg transition - colors";
                  <X className="w - 6 h - 6" />;
                </button>;
              </div>;
              {/* Navigation */}
              <nav className="space - y-4">;
                {Object.entries (navigation).map (([title, links]) => (
                  <div key={title}>;
                    <button;
                      on_click={() => handleDropdownToggle (title)}
                      className="flex items - center justify - between w - full text - left text - lg font - semibold text - gray - 900 py - 2 hover: text - blue - 600 transition - colors";
              <div className="mt - 8 pt - 8 border - t border - gray - 200">;
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Quick Links</h3>;
                <div className="space - y-2">;
                  {quick_links.map ((link) => (
                    <Link;
                      key={link.name}
                      href={link.href}
                      className="block text - gray - 600 hover:text - blue - 600 transition - colors py - 1";
                      on_click={on_close}
                    >;
                      {link.name}
                    </Link>))}
                </div>;
              </div>;
              {/* Contact Info */}
              <div className="mt - 8 pt - 8 border - t border - gray - 200">;
                <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Contact Us</h3>;
                <div className="space - y-3">;
                  <div className="flex items - center space - x-3 text - gray - 600">;
                    <Phone className="w - 4 h - 4" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 600">;
                    <Mail className="w - 4 h - 4" />;
                    <span > kleber@ziontechgroup.com</span>;
                  </div>;
                </div>;
                <div className="mt - 4">;
                  <Link;
                    href="/contact";
                    className="inline - flex items - center space - x-2 bg - blue - 600 text - white px - 4 py - 2 rounded - lg hover:bg - blue - 700 transition - colors";
                    on_click={on_close}
                  >;
                    <span > Get Started</span>;
                    <ExternalLink className="w - 4 h - 4" />;
                  </Link>;
              </div>;
            </div>;
          </motion.div>;
        </>)}
    </AnimatePresence>);
}
;
export default Sidebar;
;
<<<<<<< HEAD
<<<<<<< HEAD

pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
  X, 
  ChevronDown, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin,
  Building2,
  User,
  LogOut,
  Search
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services';, href: '/ai-services' ;},
    { name: 'IT Services';, href: '/it-services' ;},
    { name: 'Micro SaaS';, href: '/micro-saas' ;},
    { name: 'Consulting';, href: '/consulting' ;}
  ],
  'Solutions': [
    { name: 'Enterprise';, href: '/enterprise' ;},
    { name: 'Startup';, href: '/startup' ;},
    { name: 'Industry';, href: '/industries' ;}
  ],
  'Company': [
    { name: 'About';, href: '/about' ;},
    { name: 'Team';, href: '/team' ;},
    { name: 'Careers';, href: '/careers' ;},
    { name: 'Contact';, href: '/contact' ;}
  ]
};

import React from 'react';
import { Home, Settings, User, LogOut } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
<<<<<<< HEAD
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const services = [
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
    { name: 'Security Services', href: '/services/security', icon: Shield },
    { name: 'Performance Optimization', href: '/services/performance', icon: Zap },
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
    { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart },
    { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },
    { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap },
  ];

  const industries = [
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
    { name: 'Logistics', href: '/industries/logistics', icon: Truck },
    { name: 'Finance', href: '/industries/finance', icon: CreditCard },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

=======
const Sidebar: React.FC<SidebarProps> = ({ isOpen;, onClose }) => {
  const menuItems = [
    { href: '/dashboard';, label: 'Dashboard';, icon: Home ;},
    { href: '/profile';, label: 'Profile';, icon: User ;},
    { href: '/settings';, label: 'Settings';, icon: Settings ;},
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ' + (isOpen ? 'translate-x-0' : '-translate-x-full')}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;





pr-12243
<<<<<<< HEAD
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
const navigationItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI Services', href: '/ai-services' },
      { label: 'IT Services', href: '/it-services' },
      { label: 'Micro SaaS', href: '/micro-saas' }
    ]
  },
  {
    label: 'About',
    href: '/about',
    icon: Users
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
<<<<<<< HEAD
                <h2 className="text-2xl font-bold text-gray-900">Zion Tech Group</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span>Services</span>
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={handleLinkClick}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <service.icon className="h-4 w-4" />
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Solutions Dropdown */}
                <div>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span>Solutions</span>
                    <motion.div
                      animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 space-y-1">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              onClick={handleLinkClick}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <solution.icon className="h-4 w-4" />
                              <span>{solution.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Dropdown */}
                <div>
                  <button
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span>Industries</span>
                    <motion.div
                      animate={{ rotate: isIndustriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 space-y-1">
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              onClick={handleLinkClick}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <industry.icon className="h-4 w-4" />
                              <span>{industry.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
=======
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                      onClick={onClose}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                      {item.children && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpanded(item.label);
                          }}
                          className="ml-auto"
                        >
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${
                              expandedItems.includes(item.label) ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </Link>
                    
                    {item.children && expandedItems.includes(item.label) && (
                      <div className="ml-8 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
<<<<<<< HEAD
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>info@ziontechgroup.com</span>
=======
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
};

export default Sidebar;
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
