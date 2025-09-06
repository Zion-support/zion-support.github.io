<<<<<<< HEAD

<<<<<<< HEAD

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

import Link from 'next/link';

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Link from 'next / link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import { motion, AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
=======

  className = '',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  className = '',;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}: UltraFuturisticNavigationProps) {  const [isOpen, setIsOpen] = useState(false);
interface UltraFuturisticNavigationProps {;
  className?: string;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';

interface UltraFuturisticNavigationProps {
  className?: string

}



export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {;
<<<<<<< HEAD


=======
import {;
  Menu,;
  X,;
  ChevronDown,;
  Search,;
  Phone,;
  Mail,;
  MapPin,;
  Rocket,;
  Brain,;
  Atom,;
  Shield,;
} from 'lucide-react';
interface UltraFuturisticNavigationProps {;
  className?: string;
export default function UltraFuturisticNavigation(): any ({;
  className = '',;
}: UltraFuturisticNavigationProps) {  const [isOpen, setIsOpen] = useState(false);
interface UltraFuturisticNavigationProps {;
  className?: string;
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';
interface UltraFuturisticNavigationProps {
  className?: string
}
export default function UltraFuturisticNavigation(): any ({ className = '' }: UltraFuturisticNavigationProps) {;
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Menu
  X
  ChevronDown
  Search
  Phone
  Mail
  MapPin
  Rocket
  Brain
  Atom
  Shield;
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Atom,;
  Shield,;
} from 'lucide-react';
interface UltraFuturisticNavigationProps {
  className?: string;
export default function UltraFuturisticNavigation({
}: UltraFuturisticNavigationProps) {  const [isOpen, setIsOpen] = useState(false);
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Menu,;
  X,;
  ChevronDown,;
  Search,;
  Phone,;
  Mail,;
  MapPin,;
  Rocket,;
  Brain,;
  Atom,;
  Shield,;
} from 'lucide-react';

interface UltraFuturisticNavigationProps {;
  className?: string;




export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const _navigationItems = [
    {_name: 'Services', _href: '/services', _hasDropdown: true, _dropdownItems: [
        { name: 'AI & Machine Learning', _href: '/services/ai-ml', _icon: Brain, _color: 'from-purple-500 to-pink-600'},
        {_name: 'Quantum Computing', _href: '/services/quantum', _icon: Atom, _color: 'from-cyan-500 to-blue-600'},
        {_name: 'Cybersecurity', _href: '/services/cybersecurity', _icon: Shield, _color: 'from-red-500 to-pink-600'},
        {_name: 'IT Solutions', _href: '/services/it-solutions', _icon: Rocket, _color: 'from-green-500 to-emerald-600'},
        {_name: 'View All Services', _href: '/services', _icon: Rocket, _color: 'from-gray-500 to-gray-600'}
      ]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = [
    {
      name: 'Services'
      href: '/services'
      hasDropdown: true
      dropdownItems: [
        {
          name: 'AI & Machine Learning'
          href: '/services/ai-ml'
          icon: Brain
          color: 'from-purple-500 to-pink-600'
        }
        {
          name: 'Quantum Computing'
          href: '/services/quantum'
          icon: Atom
          color: 'from-cyan-500 to-blue-600'
        }
        {
          name: 'Cybersecurity'
          href: '/services/cybersecurity'
          icon: Shield
          color: 'from-red-500 to-pink-600'
        }
        {
          name: 'IT Solutions'
          href: '/services/it-solutions'
          icon: Rocket
          color: 'from-green-500 to-emerald-600'
        }
        {
<<<<<<< HEAD


<<<<<<< HEAD
=======
          name: 'View All Services'
          href: '/services'
          icon: Rocket
          color: 'from-gray-500 to-gray-600'
        }
      ]
    }
    { name: 'Solutions', href: '/solutions' }
    { name: 'About', href: '/about' }
    { name: 'Contact', href: '/contact' }
    { name: 'Pricing', href: '/pricing' },  ];        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' }
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' }
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' }
        { name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' }
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ]
    }
    { name: 'Solutions', href: '/solutions' }
    { name: 'About', href: '/about' }
    { name: 'Contact', href: '/contact' }
    { name: 'Pricing', href: '/pricing' }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          name: 'View All Services',
          href: '/services',
          icon: Rocket,
          color: 'from-gray-500 to-gray-600',
        },
      ],
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    { name: 'Pricing', href: '/pricing' },  ];

  ];
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    { name: 'Pricing', href: '/pricing' },  ];        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },
        { name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ]
    };
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' }
    { name: 'Pricing', href: '/pricing' },  ];

  ];

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ];
    };
    { name: 'Solutions', href: '/solutions' },;
    { name: 'About', href: '/about' },;
    { name: 'Contact', href: '/contact' },;
    { name: 'Pricing', href: '/pricing' }


    >;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
<<<<<<< HEAD


<<<<<<< HEAD
=======
        : 'bg-transparent'
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center space-x-3'


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>
              <Rocket className='w-7 h-7 text-white' />
            </div>
            <div>
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                Zion Tech Group
              </div>
              <div className='text-xs text-gray-400 -mt-1'>
                Revolutionary Technology
              </div>            </div>
          </motion.div>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => (
              <div key={item.name} className='relative group'>                {item.hasDropdown ? (          >
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        : 'bg-transparent'
    } ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-20">;
          <motion&& motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </motion.div>
=======
            transition={{ duration: 0 && 0.6 }}
            className='flex items-center space-x-3'>;
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;
              <Rocket className='w-7 h-7 text-white' />;
            </div>;
            <div>;
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </div>;
              <div className='text-xs text-gray-400 -mt-1'>;
                Revolutionary Technology;
              </div>            </div>;
          </motion && motion.div>;
<<<<<<< HEAD
          {/* Desktop Navigation */}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
<<<<<<< HEAD

                  <div
                    onMouseEnter={() => setActiveDropdown(item && item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  >;
                    <button className='flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'>;
                      <span>{item && item.name}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                    </button>                      <span>{item && item.name}</span>;
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />;
                    </button>;
<<<<<<< HEAD
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {/* Dropdown Menu */}
                    <AnimatePresence>;
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'>;
                          <div className='p-4'>;
                            <div className='grid gap-3'>                              {item && item.dropdownItems?.map((dropdownItem, idx) => (;
                                <Link
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;
                          <div className="p-4">;
                            <div className="grid gap-3">;
                                <Link
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'>;
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;
                                    <dropdownItem && dropdownItem.icon className='w-5 h-5 text-white' />;
                                  </div>;
                                  <div>;
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    {dropdownItem && dropdownItem.name ===;
                                      'View All Services' && (;
                                      <div className='text-xs text-gray-400'>;
                                        Explore our complete portfolio;
                                      </div>                                    )}                                >;
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;
                                    <dropdownItem && dropdownItem.icon className="w-5 h-5 text-white" />;
                                  </div>;
                                  <div>;
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>;
<<<<<<< HEAD

                                    )}
                                  </div>;
                                </Link>;
                              ))}
                            </div>;
                          </div>;
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (;
                  <Link
                    href={item && item.href}
                    className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'>                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50";
                  >;
                    {item && item.name}
                  </Link>;
                )}
              </div>;
            ))}
<<<<<<< HEAD

                    {/* Dropdown Menu */}
                    <AnimatePresence>;
                      {active_dropdown === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                          exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}

                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                                  >
                                    <dropdownItem.icon className='w-5 h-5 text-white' />
                                  </div>
=======
          </div>;
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>;
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                  >
                    {item.name}
                  </Link>
                )}
              </div>;
            ))}

                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden';
                        >;
                          <div className='p - 4'>;
                            <div className='grid gap - 3'>                              {item.dropdown_items?.map ((dropdown_item, idx) => (
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item'                          className="absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden";
                        >;
                          <div className="p - 4">;
                            <div className="grid gap - 3">;
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item';
                                >;
                                  <div;
                                    className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item:scale - 110 transition - transform duration - 300`}
                                  >;
                                    <dropdown_item.icon className='w - 5 h - 5 text - white' />;
                                  </div>;
                                  <div>;
                                    <div className='text - white font - medium group - hover / item:text - cyan - 300 transition - colors'>;
                                      {dropdown_item.name}
                                    </div>;
                                    {dropdown_item.name ===;
                                      'View All Services' && (
                                      <div className='text - xs text - gray - 400'>;
                                        Explore our complete portfolio;
                                      </div>                                    )}                                >;
                                  <div className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item:scale - 110 transition - transform duration - 300`}>;
                                    <dropdown_item.icon className="w - 5 h - 5 text - white" />;
                                  </div>;
                                  <div>;
                                    <div className="text - white font - medium group - hover / item:text - cyan - 300 transition - colors">;
                                      {dropdown_item.name}
                                    </div>;
                                    {dropdown_item.name === 'View All Services' && (
                                      <div className="text - xs text - gray - 400">Explore our complete portfolio</div>)}
                                  </div>;
                                </Link>))}
                            </div>;
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;
                  </div>) : (
                  <Link;
                    href={item.href}
                    className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50'                  >                    className="text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50";
                  >;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {item.name}
                  </Link>)}
              </div>))}
          </div>;
          </div>;
          {/* Contact Info & CTA */}
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <div className='flex items-center space-x-2'>;
                <Phone className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.mobile}</span>          <div className="hidden lg:flex items-center space-x-6">;
            {/* Contact Info */}

<<<<<<< HEAD
                <span>{contactInfo.mobile}</span>

              </div>
            </div>

=======
                <span>{contactInfo.mobile}</span>
              </div>
            </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="flex items-center space-x-4 text-sm text-gray-300">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-cyan-400" />;
              </div>;
            </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* CTA Button */}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

              <Link
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'>;
                <Rocket className='w-4 h-4 mr-2' />                Get Started              <Link
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            {/* CTA Button */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
<<<<<<< HEAD
              <Link
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                href="/contact"

=======

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'
                        >
                          <div className='p-4'>
                            <div className='grid gap-3'>                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'
                                >
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                                  >
                                    <dropdownItem.icon className='w-5 h-5 text-white' />
                                  </div>
                                  <div>
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name ===
                                      'View All Services' && (
                                      <div className='text-xs text-gray-400'>
                                        Explore our complete portfolio
                                      </div>                                    )}                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name === 'View All Services' && (
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'                  >                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                    className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'                  >

                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-cyan-400' />                <span>{contactInfo.mobile}</span>          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

              <Link
                href="/contact"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">;
                <Rocket className="w-4 h-4 mr-2" />;
                Get Started;
              </Link>;
            </motion && motion.div>;
          </div>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>;
=======

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                href="/contact"
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>;

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </button>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </button>
          </div>
        </div>
      </div>



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {activeDropdown === item.name && (
                        <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden'
          >
            <div className='px-4 py-6 space-y-4'>
              {/* Mobile Navigation Items */}
              {navigationItems.map(item => (                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button


                      {activeDropdown === item.name && (
                        <motion.div
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>


                      {activeDropdown === item.name && (
                        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                      {activeDropdown === item.name && (
                        <motion.div
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        />;
                      </button>;

                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD


                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}

                          transition={{ duration: 0.2 }}
                          className='ml-4 mt-2 space-y-2'

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



                        >
                          {item.dropdownItems?.map(dropdownItem => (
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          transition={{ duration: 0.2 }}
                          className='ml-4 mt-2 space-y-2'

                        >
                          {item.dropdownItems?.map(dropdownItem => (
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                          transition={{ duration: 0 && 0.2 }}
                          className='ml-4 mt-2 space-y-2'>;
                          {item && item.dropdownItems?.map(dropdownItem => (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            <Link
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300'
                              onClick={() => setIsOpen(false)}
                            >;
                              <div
<<<<<<< HEAD
<<<<<<< HEAD
=======
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                              >
                                <dropdownItem.icon className='w-4 h-4 text-white' />
                              </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem.name}                        >
                          {item.dropdownItems?.map((dropdownItem) => (

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center`}>;
                                <dropdownItem && dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem && dropdownItem.name}                        >;
                          {item && item.dropdownItems?.map((dropdownItem) => (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            <Link
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                              </span>
                            </Link>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-300 hover:text-white transition-colors">
                                {dropdownItem.name}
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem.name}

                                {dropdownItem.name}

                              </span>
                            </Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          ))}
                        </motion && motion.div>;
                      )}
                    </div>;
                  ) : (;
                    <Link
<<<<<<< HEAD


<<<<<<< HEAD
                      onClick={() => setIsOpen(false)}
                    >;
                      {item && item.name}
                    </Link>;
=======
=======
                      href={item.href}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}

                      onClick={() => setIsOpen(false)}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    >
                      {item.name}
                    </Link>
                  )}
                </div>;
              ))}


                  <span>{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Mail className='w-4 h-4 text-purple-400' />
                  <span>{contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <MapPin className='w-4 h-4 text-green-400' />
                  <span className='text-sm'>{contactInfo.address}</span>                </div>
              </div>
              {/* Mobile CTA */}
              <div className='pt-4'>                  <span>{contactInfo.mobile}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <div className="pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
=======
                  )}
                </div>;
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}                      className="block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      onClick={() => setIsOpen(false)}
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}

                      onClick={() => setIsOpen(false)}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Contact Info */}
<<<<<<< HEAD
              <div className='pt-6 border-t border-gray-700/50 space-y-3'>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Phone className='w-4 h-4 text-cyan-400' />

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <span>{contactInfo.mobile}</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                  <span>{contactInfo.mobile}</span>
                      onClick={() => setIsOpen(false)}
                    >;
                      {item && item.name}
                    </Link>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className='pt-6 border-t border-gray-700/50 space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <span>{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-green-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>;
              </div>;
<<<<<<< HEAD
              {/* Mobile CTA */}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {/* Mobile Navigation Items */}
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.has_dropdown ? (
                    <div>;
                      <button          >;
            <div className="px - 4 py - 6 space - y-4">;
              {/* Mobile Navigation Items */}
              {navigation_items.map ((item) => (
                <div key={item.name}>;
                  {item.has_dropdown ? (
                    <div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (
                            active_dropdown === item.name ? null : item.name);
                        }
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50';
                        <span>{item.name}</span>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 300 ${
                            active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, coordinate_y: -10 }}
                          animate={{ opacity: 1, coordinate_y: 0 }}
                          exit={{ opacity: 0, coordinate_y: -10 }}
                          transition={{ duration: 0.2 }}
                          className='ml - 4 mt - 2 space - y-2';
                        >;
                          {item.dropdown_items?.map (dropdown_item => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300';
                              on_click={() => setIsOpen (false)}
                            >;
                              <div;
                                className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}
                              >;
                                <dropdown_item.icon className='w - 4 h - 4 text - white' />;
                              </div>;
                              <span className='text - gray - 300 hover:text - white transition - colors'>                                {dropdown_item.name}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className="flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300";
                              on_click={() => setIsOpen (false)}
                            >;
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}>;
                                <dropdown_item.icon className="w - 4 h - 4 text - white" />;
                              </div>;
                              <span className="text - gray - 300 hover:text - white transition - colors">;
                                {dropdown_item.name}
                              </span>;
                            </Link>))}
                        </motion.div>)}
                    </div>) : (
                    <Link;
                      href={item.href}
                      className='block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() => setIsOpen (false)}                      className="block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50";
                      on_click={() => setIsOpen (false)}
                    >;
                      {item.name}
                    </Link>)}
                </div>))}
              {/* Mobile Contact Info */}
              <div className='pt - 6 border - t border - gray - 700 / 50 space - y-3'>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <MapPin className='w - 4 h - 4 text - green - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Mail className="w - 4 h - 4 text - purple - 400" />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <MapPin className="w - 4 h - 4 text - green - 400" />;
                  <span className="text - sm">{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt - 4'>;
                <Link;
                  href='/contact';
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300';
                  on_click={() => setIsOpen (false)}
                >;
                  <Rocket className='w - 5 h - 5 inline mr - 2' />                  Get Started                <Link;
                  href="/contact";
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                  on_click={() => setIsOpen (false)}
                >;
                  <Rocket className="w - 5 h - 5 inline mr - 2" />;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Get Started;
                </Link>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        )}
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

      </AnimatePresence>;
    </nav>;
  );
}

  );
}
}

  );

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
  );
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        )}
      </AnimatePresence>
    </nav>
);
  );
}

}
}
}
}
}
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
