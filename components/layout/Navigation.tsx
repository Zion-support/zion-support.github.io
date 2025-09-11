=======
=======
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


  Globe,;
  ChevronDown,;
} from 'lucide-react';
=======
  Menu,
  X,
  Home,
  Brain,
  Cpu,
  Rocket,
  Phone,
  Mail,
  MapPin,  Globe,;
  ChevronDown,;
} from 'lucide-react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';import { ;
  Menu, X, Home, Brain, Cpu, Rocket, ;
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';

=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';


=======
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    };

    {
      name: 'Services'
      href: '/services'
      icon: Rocket
      dropdown: [

        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' },
        { name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' }

      ]
    }
import {
  Menu
  X
  Home
  Brain
  Cpu
  Rocket
  Phone
  Mail
  MapPin
  Globe
  ChevronDown;
} from 'lucide-react';
import Link from 'next/link';import {
  Menu, X, Home, Brain, Cpu, Rocket

  Phone, Mail, MapPin, Globe, ChevronDown
 } from 'lucide-react';
=======
==============
=======  Menu,
  X,
  Home,
  Brain,
  Cpu,
  Rocket,
  Phone,
  Mail,
  MapPin,
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = [
    {
      name: 'Home'
      href: '/'
      icon: Home
    },    {      icon: Home
    }
    {
      name: 'Services'
      href: '/services'
      icon: Rocket
      dropdown: [
        {
          name: 'AI Services'
          href: '/ai-services'
          icon: Brain
          description: 'Revolutionary AI solutions'
        }
        {
          name: 'IT Services'
          href: '/it-services'
          icon: Cpu
          description: 'Enterprise IT solutions'
        }
        {
          name: 'Micro SaaS'
          href: '/micro-saas'
          icon: Rocket
          description: 'Specialized software solutions'
        }
        {
          name: 'Innovative Showcase'
          href: '/innovative-services-showcase'
          icon: Globe
          description: 'Cutting-edge technology'
        }
      ]
    }
    {
      name: 'Solutions'
      href: '/solutions'
      icon: Cpu,    {
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: Home},
    {_name: 'Services', _href: '/services', _icon: Rocket, _dropdown: [
        { name: 'AI Services', _href: '/ai-services', _icon: Brain, _description: 'Revolutionary AI solutions'},
        {_name: 'IT Services', _href: '/it-services', _icon: Cpu, _description: 'Enterprise IT solutions'},
        {_name: 'Micro SaaS', _href: '/micro-saas', _icon: Rocket, _description: 'Specialized software solutions'},
        {_name: 'Innovative Showcase', _href: '/innovative-services-showcase', _icon: Globe, _description: 'Cutting-edge technology'}
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Cpu
    },
    {
      name: 'About',
      href: '/about',
      icon: Globe
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
};
    {
      name: 'About'
      href: '/about'
      icon: Globe
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: Phone
    },  ];      icon: Phone
    }
  ];
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }
=======
=======

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 50);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  const navigationItems = [;
    {;
      name: 'Home',;
      href: '/',;
      icon: Home,;
    },    {      icon: Home;
    };
    {;
      name: 'Services',;
      href: '/services',;
      icon: Rocket,;
      dropdown: [;
        {;
          name: 'AI Services',;
          href: '/ai-services',;
          icon: Brain,;
          description: 'Revolutionary AI solutions',;
        },;
        {;
          name: 'IT Services',;
          href: '/it-services',;
          icon: Cpu,;
          description: 'Enterprise IT solutions',;
        },;
        {;
          name: 'Micro SaaS',;
          href: '/micro-saas',;
          icon: Rocket,;
          description: 'Specialized software solutions',;
        },;
        {;
          name: 'Innovative Showcase',;
          href: '/innovative-services-showcase',;
          icon: Globe,;
          description: 'Cutting-edge technology',;
        },;
      ],;
    },;
    {;
      name: 'Solutions',;
      href: '/solutions',;
      icon: Cpu,    {;
      name: 'Solutions',;
      href: '/solutions',;
      icon: Cpu;
    };
    {;
      name: 'About',;
      href: '/about',;
      icon: Globe;
    };
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: Phone,;
    },;
    {;
      name: 'About',;
      href: '/about',;
      icon: Globe,;
    },;
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: Phone,;
    },  ];      icon: Phone;
    }
  ];
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';

  };
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'>;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {navigationItems && navigationItems.map(item => (;
                <div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (

                      {/* Dropdown Menu */}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}




                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'
                    >
                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />

                      <span className='font-medium'>{item.name}</span>                    </Link>

                    </Link>



                  )}
                </div>
              ))}
            </div>



            </div>;
            {/* CTA Button */}
            <div className='hidden lg:block'>



              <motion.a
                href='/contact'
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'>              <motion&& motion.a
            <div className="hidden lg:block">
              <motion.a
                href="/contact"

                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4"
                          >
                            className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'

                          >
                            <div className='grid grid-cols-1 gap-3'>
                              {item.dropdown.map(dropdownItem => {
                                const Icon = dropdownItem.icon;
                                  >
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>
                                      <Icon className='w-5 h-5 text-cyan-400' />
                                    </div>
                                    <div>
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>
                                        {dropdownItem.name}
                                      </div>
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                );                              })}                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                                return (
                                  <Link
=======                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item"
                                  >
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300">
                                      <Icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                                        {dropdownItem.name}
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                              })}
                            </div>;
                          </motion.div>)}
                      </AnimatePresence>;



                              })}


=======
                                );                                )
                              })}

                              })}
=======

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <Link
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'>;
                      <item && item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />;
                      <span className='font-medium'>{item && item.name}</span>                    </Link>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group";
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
=======
                    </div>) : (
                    <Link;
                      href={item.href}

                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'
                    >
                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                    </Link>


                  )}
                </div>
              ))}
            </div>
=======
            {/* CTA Button */}
            <div className='hidden lg:block'>
            {/* CTA Button */}
            <div className='hidden lg:block'>

=======
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <motion.a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                href='/contact'
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'>              <motion&& motion.a
=======
            <div className="hidden lg:block">
              <motion.a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">;
                Get Started;
              </motion && motion.a>;
            </div>;


                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'
                    >
                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Backdrop */}
            <div
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >


            />          >
            {/* Backdrop */}


            >
              <div className='p-6'>
=======
            {/* Backdrop */}
            {/* Mobile Menu */}
            <motion&& motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            >
              <div className='p-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Close Button */}
                <div className='flex justify-end mb-6'>;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}

            

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='text-gray-300 hover:text-white transition-colors duration-300';
                  >;
                    <X className='w-6 h-6' />                  </motion && motion.button>;
                </div>;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Mobile Menu Items */}
                <div className='space-y-4'>;
                  {navigationItems && navigationItems.map(item => (            >;
              <div className="p-6">;
              transition={{ duration: 0.3 }}
              className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'

            >
              <div className='p-6'>
                {/* Close Button */}
                <div className='flex justify-end mb-6'>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className='text-gray-300 hover:text-white transition-colors duration-300'
                  >
                    <X className='w-6 h-6' />                  </motion.button>
                </div>
                {/* Mobile Menu Items */}
                <div className='space-y-4'>
                  {navigationItems.map(item => (            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 group';
                    >;
                      <item.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform duration - 300' />;
                      <span className='font - medium'>{item.name}</span>                    </Link>                      className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 group";
                    >;
                      <item.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform duration - 300" />;
                      <span className="font - medium">{item.name}</span>)}
                </div>))}
            </div>;
            {/* CTA Button */}
            <div className='hidden lg:block'>;
              <motion.a;
                href='/contact';
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white font - semibold py - 2 px - 6 rounded - full transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40'              >              <motion.a;
                href="/contact";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className="bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 400 hover:to - purple - 500 text - white font - semibold py - 2 px - 6 rounded - full transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40";
              >;
                Get Started;
              </motion.a>;
            </div>;
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion.button;
                while_tap={{ scale: 0.95 }}
                on_click={() => setIsOpen (!is_open)}
                className='text - gray - 300 hover:text - white transition - colors duration - 300';
              >;
                {is_open ? (
                  <X className='w - 6 h - 6' />) : (
                  <Menu className='w - 6 h - 6' />)}              </motion.button>              <motion.button;
                while_tap={{ scale: 0.95 }}
                on_click={() => setIsOpen (!is_open)}
                className="text - gray - 300 hover:text - white transition - colors duration - 300";
              >;
                {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
              </motion.button>;
            </div>;
          </div>;
        </div>;
      </motion.nav>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset - 0 z - 40 lg:hidden';
          >;
            {/* Backdrop */}
            <div;
              className='absolute inset - 0 bg - black / 50 backdrop - blur - sm';
              on_click={() => setIsOpen (false)}
            />          >;
            {/* Backdrop */}
            <div;
              className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
              on_click={() => setIsOpen (false)}
            />;
            {/* Mobile Menu */}
            <motion.div;
              initial={{ coordinate_x: '100%' }}
              animate={{ coordinate_x: 0 }}
              exit={{ coordinate_x: '100%' }}
              transition={{ duration: 0.3 }}
              className='absolute right - 0 top - 0 h - full w - 80 bg - gray - 900 / 95 backdrop - blur - xl border - l border - cyan - 500 / 20 shadow - 2xl';
            >;
              <div className='p - 6'>;
                {/* Close Button */}
                <div className='flex justify - end mb - 6'>;
                  <motion.button;
                    while_tap={{ scale: 0.95 }}
                    on_click={() => setIsOpen (false)}
                    className='text - gray - 300 hover:text - white transition - colors duration - 300';
                  >;
                    <X className='w - 6 h - 6' />                  </motion.button>;
                </div>;
                {/* Mobile Menu Items */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {item.dropdown ? (
                        <div className='space - y-2'>;
                          <div className='text - gray - 400 font - medium text - sm uppercase tracking - wider'>;
                            {item.name}

                            })}
                          </div>
                        </div>
                      ) : (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <Link
                          href={item && item.href}
                          onClick={() => setIsOpen(false)}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                          </span>                        </Link>

                        </Link>

=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      )}
                    </div>;
                  ))}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Mail className='w-4 h-4 text-purple-400' />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <MapPin className='w-4 h-4 text-pink-400' />
                      <span className='text-xs'>{contactInfo.address}</span>                    </div>                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span className="text-xs">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
                </div>;
                {/* Contact Information */}
                <div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'>;
                  <h3 className='text-cyan-400 font-semibold mb-3'>;
                    Contact Information;
                  </h3>;
                  <div className='space-y-2 text-sm'>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Phone className='w-4 h-4 text-cyan-400' />;
                      <span>{contactInfo && contactInfo.mobile}</span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Mail className='w-4 h-4 text-purple-400' />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <MapPin className='w-4 h-4 text-pink-400' />;
                      <span className='text-xs'>{contactInfo && contactInfo.address}</span>                    </div>                      <span>{contactInfo && contactInfo.mobile}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <MapPin className="w-4 h-4 text-pink-400" />;
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Mobile CTA */}
=======                <div className="mt-6">
                  <motion.a

                    href="/contact"
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}



};
export default Navigation;  );
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default Navigation;


=======
export default Navigation;  )
}
export default Navigation;

};


<<<<<<< HEAD
export default Navigation;
export default Navigation;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
