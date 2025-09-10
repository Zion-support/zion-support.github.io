import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
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
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'AI Implementation', href: '/solutions/ai-implementation' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
    { name: 'API Development', href: '/solutions/api-development' }
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
    { name: 'Transportation', href: '/industries/transportation' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Media & Entertainment', href: '/industries/media' },
    { name: 'Legal', href: '/industries/legal' }
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
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Industry Reports', href: '/industry-reports' },
    { name: 'Newsletter', href: '/newsletter' }
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
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Investor Relations', href: '/investors' }
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
];


=======


CreditCard,

  CreditCard,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Menu
  X
  ChevronDown
  Code
  Smartphone
  Cloud
  Database
  Shield
  Zap
  Building
  ShoppingCart
  Heart
  GraduationCap
  Factory
  Truck
  CreditCard
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  CreditCard,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {;
  Menu,;
  X,;
  ChevronDown,;
  Code,;
  Smartphone,;
  Cloud,;
  Database,;
  Shield,;
  Zap,;
  Building,;
  ShoppingCart,;
  Heart,;
  GraduationCap,;
  Factory,;
  Truck,;
  CreditCard,;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
} from "lucide-react";

<<<<<<< HEAD
  CreditCard,;

  CreditCard,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "lucide-react";

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function Header() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from './lucide-react';
;
export default /**
 * Header - Function description
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const [isServicesOpen, setIsServicesOpen] = useState (false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState (false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
;
  const toggle_menu = () =>: any setIsMenuOpen (!isMenuOpen);
  const close_menu = () =>: any setIsMenuOpen (false);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 0);
    }
    window.addEventListener ("scroll", handle_scroll);
    return () => window.removeEventListener ("scroll", handle_scroll);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }, []);
;
  const services_dropdown = [;
    {
<<<<<<< HEAD

  const servicesDropdown = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
      href: "/services/web-development",
      icon: Code,
    },
    {
      title: "Mobile Development",
      description: "iOS and Android applications",
      href: "/services/mobile-development",
      icon: Smartphone,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      href: "/services/cloud-solutions",
      icon: Cloud,
    },
    {
      title: "Database Management",
      description: "Database design and optimization",
      href: "/services/database-management",
      icon: Database,
    },
    {
      title: "Security Services",
      description: "Cybersecurity and data protection",
      href: "/services/security",
      icon: Shield,
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency improvements",
      href: "/services/performance",
      icon: Zap,
    },
  ];

  const solutionsDropdown = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions",
      href: "/solutions/enterprise",
      icon: Building,
    },
    {
      title: "E-commerce Platforms",
      description: "Online store development and management",
      href: "/solutions/ecommerce",
      icon: ShoppingCart,
    },
    {
      title: "Healthcare Technology",
      description: "Specialized healthcare IT solutions",
      href: "/solutions/healthcare",
      icon: Heart,
    },
    {
      title: "Educational Platforms",
      description: "Learning management systems",
      href: "/solutions/education",
      icon: GraduationCap,
    },
  ];

ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {Object.entries(navigation).map(([title, links]) => (
              <div key={title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="font-medium">{title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === title && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-1">
                      {links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md mx-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;