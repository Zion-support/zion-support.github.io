
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Dna,
  Globe,
  Shield,
  Wifi,
  Package,
  Bot,
  Car,
  Building2,
  DollarSign,
  Monitor,
  Users,
  Cpu,
  Zap,
  Atom,
  Database,
  Cloud,
  Lock,
  Code,
} from 'lucide-react';
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin;

  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    {
      name: 'AI Services'
      href: '#'
      icon: Brain
      description: 'Cutting-edge AI solutions'
      dropdown: [
  Cpu, Zap, Atom, Database, Cloud, Lock, Code;
} from 'lucide-react';
import Link from 'next / link';
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 50);
    }
;
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      setIsScrolled (window.scroll_y > 50);
    }
;
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  const navigation_items = [;
    {
      name: 'Home',
      href: '/',
      icon: null,
    },    {      icon: null;
    }
    {
      name: 'AI Services',
      href: '#',
      icon: Brain,
      description: 'Cutting - edge AI solutions',
      dropdown: [;
        {
        {
          name: 'AI Cybersecurity',
          href: '/security',
          icon: Shield,
        {
          name: 'AI Healthcare Analytics',
          href: '/ai - data - analytics',
          icon: Dna,
          description: 'Patient outcome prediction',
        {
          name: 'AI Supply Chain',
          href: '/quantum - logistics',
          icon: Package,
        {
          name: 'AI Financial Risk',
          href: '/ai - financial - risk',
          icon: DollarSign,
          description: 'Advanced risk management',
      name: 'Quantum Computing',
      href: '#',
      icon: Atom,
      description: 'Quantum - powered solutions',
      dropdown: [;
        {
          name: 'Quantum AI Supercomputer',
          href: '/quantum - ai - cognitive',
          icon: Cpu,
          description: 'Enterprise quantum computing',
        {
          name: 'Quantum Internet Security',
          href: '/quantum - internet - security - platform',
          icon: Lock,
        {
          name: 'Quantum Drug Discovery',
          href: '/biotech - ai',
          icon: Dna,
          description: 'Accelerated drug development',
        {
          name: 'Quantum Financial Trading',
          href: '/quantum - financial - trading',
          icon: DollarSign,
          description: 'Nanosecond precision trading',
        {
          name: 'Quantum IoT Platform',
          href: '/quantum - iot',
          icon: Wifi,
      name: 'Space Technology',
      href: '#',
      icon: Rocket,
      description: 'Space mission management',
      dropdown: [;
        {
          name: 'Space Mission Control',
          href: '/space - technology',
          icon: Rocket,
          description: 'Complete mission management',
        {
          name: 'Space Debris Cleanup',
          href: '/space - technology',
          icon: Package,
      name: 'Enterprise IT',
      href: '#',
      icon: Building2,
      description: 'Enterprise solutions',
      dropdown: [;
        {
          name: 'Cloud Migration',
          href: '/cloud - platform',
          icon: Cloud,
        {
          name: 'DevOps Automation',
          href: '/automation',
          icon: Code,
        {
          name: 'Data Analytics',
          href: '/ai - data - analytics',
          icon: Database,
        {
          name: 'Security Operations',
          href: '/security',
          icon: Shield,
        {
          name: 'API Management',
          href: '/api - observability',
          icon: Code,
          description: 'Complete lifecycle management',
        {
          name: 'Digital Transformation',
          href: '/solutions',
          icon: Zap,
        {
          name: 'IoT Management',
          href: '/it - asset - discovery - agent',
          icon: Wifi,
    {
      name: 'Market Pricing',
      href: '/market - pricing',
      icon: DollarSign,
      description: 'Benchmarks & vendor references'
    }
    {
      name: 'About'
      href: '/about',          price: '$7,999/month'
        }
      ]
    }
      name: 'Micro SaaS'
      href: '/services'
      icon: Monitor
      description: '300+ micro SaaS services'
    },      description: '300+ micro SaaS services'
    }
    {
      name: 'Market Pricing'
      href: '/market-pricing'
      icon: DollarSign
      description: 'Benchmarks & vendor references'
    },    {
    {
      name: 'Contact'
      href: '/contact'
      icon: null
    }
    {
  ];
  };


    >;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex justify-between items-center h-20'>          {/* Logo */}  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-20">;
          <motion&& motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>
            transition={{ duration: 0 && 0.5 }}
            className='flex items-center'>;
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>;
                  Revolutionary Technology;
                </div>              </div>          >;
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                <Zap className="w-6 h-6 text-white" />;
              </div>;
              <div className="hidden sm:block">;
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </div>;
                <div className="text-xs text-gray-400">Revolutionary Technology</div>;
              </div>;
            </Link>;
          </motion && motion.div>;
          {/* Desktop Navigation */}
                {item.dropdown ? (
                  <button;
                    on_click={() => setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                    className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2";
                  >;
                    {item.icon && <item.icon className="w - 4 h - 4" />}
                    <span>{item.name}</span>;
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 300 ${
                      active_dropdown === item.name ? 'rotate - 180' : '';
                    }`} />;
                  </button>) : (
                  <Link;
                    href={item.href}
                )}
                {/* Dropdown Menu */}
                {item && item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>;
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <a
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-200';
            >;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </div>;

      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">;
                  Get Started;
                </motion && motion.a>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>;
    </nav>;
  );
};

export default UltraAdvancedNavigation;  );
};

export default UltraAdvancedNavigation;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.dropdown ? (
                    <div>;
                      <button            className="lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden";
          >;
            <div className="px - 4 py - 6 space - y-4">;
              {navigation_items.map ((item) => (
                  {item.dropdown ? (
                    <div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (
                            active_dropdown === item.name ? null : item.name);
                        }
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        <div className='flex items - center space - x-3'>;
                          {item.icon && <item.icon className='w - 5 h - 5' />}
                          <span>{item.name}</span>;
                        </div>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 200 ${
                            active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (
                        <div className='ml - 8 mt - 2 space - y-2'>;
                          {item.dropdown.map (dropdown_item => (                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                            >                        <div className="ml - 8 mt - 2 space - y-2">;
                          {item.dropdown.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                              className="block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200";
                            >;
                              {dropdown_item.name}
                            </Link>))}
                        </div>)}
                    </div>) : (
                    <Link;
                      href={item.href}
                      on_click={() => setIsOpen (false)}
                      className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                    >;
                      {item.icon && <item.icon className='w - 5 h - 5' />}                      <span>{item.name}</span>                      className="flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3";
                    >;
                      {item.icon && <item.icon className="w - 5 h - 5" />}
                      <span>{item.name}</span>;
                    </Link>)}
                </div>))}
              {/* Mobile Contact Info */}
              <div className='pt - 6 border - t border - gray - 800 / 50'>;
                <div className='space - y-3 text - sm text - gray - 400'>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Phone className='w - 4 h - 4' />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Mail className='w - 4 h - 4' />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className='flex items - start space - x-3'>;
                    <MapPin className='w - 4 h - 4 mt - 0.5' />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <motion.a;
                  href='/contact';
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='block w - full mt - 6 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - center py - 3 rounded - 2xl font - semibold hover:shadow - lg hover:shadow - cyan - 500 / 25 transition - all duration - 300'                >              {/* Mobile Contact Info */}
              <div className="pt - 6 border - t border - gray - 800 / 50">;
                <div className="space - y-3 text - sm text - gray - 400">;
                  <a href={`tel:${contact_info.mobile}`} className="flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200">;
                    <Phone className="w - 4 h - 4" />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contact_info.email}`} className="flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200">;
                    <Mail className="w - 4 h - 4" />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className="flex items - start space - x-3">;
                    <MapPin className="w - 4 h - 4 mt - 0.5" />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <motion.a;
                  href="/contact";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="block w - full mt - 6 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - center py - 3 rounded - 2xl font - semibold hover:shadow - lg hover:shadow - cyan - 500 / 25 transition - all duration - 300";
                >;
                  Get Started;
                </motion.a>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
;
export default UltraAdvancedNavigation);
}
;
export default UltraAdvancedNavigation;
;
