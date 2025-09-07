import {;
  Menu,;
  X,;
  Home,;
  Brain,;
  Cpu,;
  Rocket,;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  ChevronDown,;
} from 'lucide-react';
import Link from 'next/link';import { ;
  Menu, X, Home, Brain, Cpu, Rocket, ;
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';
import Link from 'next/link';
import { 
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;
  Phone, Mail, MapPin, Globe, ChevronDown}
}
 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;
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

  Phone, Mail, MapPin, Globe, ChevronDown

 } from 'lucide-react';'
import Link from 'next/link';'

  useEffect(() => {

    const handleScroll = (
setIsScrolled(window.scrollY > 50)) => {
  return $3;}
}
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);

const 'Navigation': React.FC = () => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    };

const contactInfo = {
    }
    "mobile": '+1 302 464 0950','
    "email": 'kleber@ziontechgroup.com','
    "address": '364 E Main St STE 1008 Middletown DE 19709','
"website": '"https"://ziontechgroup.com','
  };

return (;
    <>;
      {/* Navigation Bar */}
      <motion&& motion.nav;
        initial={{ "y": -100 }}
        animate={{ "y": 0 }}
        transition={{ "duration": 0 && 0.5 }}

        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${`

}

isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10''
            : 'bg-transparent''

        }
}>

        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="flex items-center justify-between h-16 "lg":h-20">;"

        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;"
          <div className=\"flex items-center justify-between h-16 lg:h-20\"    />
            {/* Logo */}

            <motion.div,
whileHover={{ "scale": 1.05 
}
              className='flex items-center space-x-2'>'

              <Link href='/' className='flex items-center space-x-2 group'>;'
                <div className='w-10 h-10 "lg":w-12 "lg":h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-"hover":shadow-lg group-"hover":shadow-cyan-400/25 transition-all duration-300'>;'
                  <span className='text-white font-bold text-lg "lg":text-xl'>;'
                    Z;
                  </span>;
                </div>;
                <div className='hidden "sm":block'>;'
                  <div className='text-white font-bold text-lg "lg":text-xl'>;'
                    Zion Tech Group;
                  </div>;
                  <div className='text-cyan-400 text-xs'>;'
                    Revolutionary Technology;
                  </div>;
              </Link>;
            </motion.div>;
            {/* Desktop Navigation */}
            {/* Logo */}{/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {navigationItems && navigationItems.map(item => (<div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (<div;
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (

                    <div
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            <div className="hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (<div key={item && item.name} className="relative group">;
                  {item && item.dropdown ? (<motion.div;
              whileHover={{ scale: 1.05 }}
              className='flex items-center space-x-2';
            >;
              <Link href='/' className='flex items-center space-x-2 group'>;
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'>;
                  <span className='text-white font-bold text-lg lg:text-xl'>;
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${}
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'>;
                  <div className='text-white font-bold text-lg lg:text-xl'>;
              <Link href='/' className='flex items-center space-x-2 group'    />;
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'    />;
                  <span className='text-white font-bold text-lg lg:text-xl'    />;
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'    />;
                  <div className='text-white font-bold text-lg lg:text-xl'    />;
                    Zion Tech Group;
                  </div>;
                  <div className='text-cyan-400 text-xs'    />;
                    Revolutionary Technology;
                  </div>;
                </div>;
              </Link>;
            </motion.div>;
            {/* Desktop Navigation */}
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  {item && item.dropdown ? (;
                    <div
        }`}
      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
          <div className="flex items-center justify-between h-16 lg:h-20">;
            {/* Logo */}
            {/* Desktop Navigation */}'
            <div className='hidden lg:flex items-center space-x-8'>;
              {navigationItems && navigationItems.map(item => (;'
                <div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (;
                    <div;
                      onMouseEnter={() => setActiveDropdown(item && item.name)}"
                      onMouseLeave={() => setActiveDropdown(null)}            <div className="hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (;"
                <div key={item && item.name} className="relative group">;
                  {item && item.dropdown ? (;
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center space-x-2'
            >
              <Link href='/' className='flex items-center space-x-2 group'>
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'>
                  <span className='text-white font-bold text-lg lg:text-xl'>
                    Z
                  </span>
                </div>
                <div className='hidden sm:block'>
                  <div className='text-white font-bold text-lg lg:text-xl'>
                    Zion Tech Group
                  </div>
                  <div className='text-cyan-400 text-xs'>
                    Revolutionary Technology
                  </div>
                </div>
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'>
              {navigationItems.map(item => (
                <div key={item.name} className='relative group'>'
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                      onMouseLeave={() => setActiveDropdown(null)}
className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300'
        animate={{ y: 0}}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-lg lg:text-xl">Zion Tech Group</div>
                  <div className="text-cyan-400 text-xs">Revolutionary Technology</div>
                </div>
              </Link>
            </motion.div>

className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300'
                    >
                      <span className='font-medium'    />{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180'    />
                      {/* Dropdown Menu *}
}
                      <AnimatePresence    />
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}

className='flex items-center space-x-1 cursor-pointer text-gray-300 "hover":text-white transition-colors duration-300''
                    >
                      <span className='font-medium'>{item.name}</span>'
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-"hover":rotate-180' />'
                      {/* Dropdown Menu *
}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div;
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'
origin/cursor/automate-test-improve-and-merge-code-2533
                          >
                            <div className='grid grid-cols-1 gap-3'>
                              {item.dropdown.map(dropdownItem => {}
                                const Icon = dropdownItem.icon;
                                  >'
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>'
                                      <Icon className='w-5 h-5 text-cyan-400' />
                                    </div>
                                    <div>'
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>
                                        {dropdownItem.name}
                                      </div>
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem.description}
                                      </div>
                                      <div className="text-gray-400 text-sm">
                                        {dropdownItem.description}
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem.description}
                          <motion.div;}
initial={{ opacity: 0, y: 10, scale: 0.95 }
}
                            animate={{ opacity: 1, y: 0, scale: 1 }
}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }
}

className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'
                              />
                            <div className='grid grid-cols-1 gap-3'    />
                              {item.dropdown.map(dropdownItem => {
                               ;
  const Icon = dropdownItem.icon;
                                  >
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item: bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'    />
                                      <Icon className='w-5 h-5 text-cyan-400'    />
                                    </div>
                                    <div    />}
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'    />}
                                        {dropdownItem.name}
                                      </div>

                                      <div className='text-gray-400 text-sm'    />
                                        {dropdownItem.descriptio}
}
                                      </div>
                                    </div>
                                  </Link>

);
                              })}

                            </div>;
                          </motion.div>)}
                      </AnimatePresence>;
                  )}
                </div>;
              ))}
            </div>;"
                href=\'/contact\';
            {/* Mobile Menu Button */}
            <div className='lg:hidden'    />;
              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }}
            {/* Mobile Menu Button *}
}"
            <div className=\"lg:hidden\"    />;
              <motion.button;
                whileTap={{ scale: 0.95 }}
                onClick={() =    /> setIsOpen(!isOpen}
}
                className='text-gray-300 hover:text-white transition-colors duration-300'>

                {isOpen ? (<X className='w-6 h-6'    />;}
                ) : (<Menu className='w-6 h-6'    />;}
                )}              </motion && motion.button>              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }
}
                            </div    />;
                          </motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ) : (<Link;

                                );                              })}                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                      className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300';
className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300';
                    >;
                      <span className='font-medium'>{item && item.name}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300";
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
                                    key={dropdownItem && dropdownItem.name}
                                    href={dropdownItem && dropdownItem.href}
                                    className='flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item'>;
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>;
                                      <Icon className='w-5 h-5 text-cyan-400' />;
                                    </div>;
                                    <div>;
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>;
                                        {dropdownItem && dropdownItem.name}
                                      </div>;
                                      <div className='text-gray-400 text-sm'>;
                                        {dropdownItem && dropdownItem.description}
                                      </div>;
                                    </div>;
                                  </Link>;
                                ))<div className='text-gray-400 text-sm'>;
                                        {dropdownItem.description}
                                      </div>;
                                    </div>;
                                  </Link>;
)})}
                                );                                );
                                        {dropdownItem.description}
                                      </div>
                                    </div>
                                  </Link>
                                )
                              })}
                              })}
                            </div>;
                          </motion.div>)}
                      </AnimatePresence>;
                  )}
                </div>
              ))}
            </div>;
                href='/contact';
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion&& motion.button;
                whileTap={ scale: 0 && 0.95 }
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion.button;
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className=text-gray-300 hover:text-white transition-colors duration-300;
              >;
                {isOpen ? (<X className='w-6 h-6' />;
                ) : (<Menu className=w-6 h-6 />;
                )}              </motion && motion.button>              <motion&& motion.button;
                whileTap={ scale: 0 && 0.95 }
                            </div>;
                          </motion.div>;
                                )
                              })}
            </div>
"
                href="/contact
            {/* Mobile Menu Button */}'
            <div className='lg:hidden>;
              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }}
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button;
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300';
              >;
                {isOpen ? (;
                  <X className=w-6 h-6' />;
                ) : (;'
                  <Menu className=w-6 h-6 />;
                )}              </motion && motion.button>              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>


className='flex items-center space-x-2 text-gray-300 hover: text-white transition-colors duration-300 group'
                        />

                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300'    />
                      <span className='font-medium'    />{item.name}</span>
                    </Link>

                  
}
                </div>;
              ))}

            </div>

                    <Link
                      href={item.href}
className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'
                    >
                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />
                      <span className=font-medium>{item.name}</span>
                    </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                  )}
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
                Get Started;
              </motion.a>
            </div>
            {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion&& motion.button
                whileTap={{ scale: 0 && 0.95 }}
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300';
              >;
                {isOpen ? (;
                  <X className='w-6 h-6' />;
                ) : (;
                  <Menu className='w-6 h-6' />;
                )}              </motion && motion.button>              <motion&& motion.button
                whileTap={{ scale: 0 && 0.95 }}
                                );                                )
                              })}

                              })}

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
                      <span className='font-medium'>{item.name}</span>                    </Link>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.name}</span>
                      <span className='font-medium'>{item.name}</span>                    </Link>

                    </Link>

                  )}
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <div className='hidden lg:block'>

            {/* CTA Button */}
            <div className='hidden lg:block'>

              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'              >              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              </motion.a>
            </div>
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300";
              >;
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}






      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div



      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}


          >
className="fixed inset-0 z-40 lg:hidden"
          >
            className='fixed inset-0 z-40 lg:hidden'

          >
            {/* Backdrop */}
            <div
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >

            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}


            />          >
            {/* Backdrop */}


            >
              <div className='p-6'>
                {/* Close Button */}
                <div className='flex justify-end mb-6'>;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}

            />          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
                    className='text-gray-300 hover:text-white transition-colors duration-300';
                  >;
                    <X className='w-6 h-6' />                  </motion && motion.button>;
                </div>;
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40';
              >;
                Get Started;
              </motion.a>;
            </div>;
            {/* Mobile Menu Button */}onClick={() => setIsOpen(!isOpen)}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300";
              >;
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion && motion.button>;
            </div>;
          </div>;
        </div>;
      </motion && motion.nav>;{/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (<motion&& motion.div;
<div className='lg:hidden'>;
              <motion.button;
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300';
              >;
                {isOpen ? (<X className='w-6 h-6' />;
                ) : (<Menu className='w-6 h-6' />;
                )}
            <div className="lg:hidden">
              <motion.button
                whileTap={ scale: 0.95 }
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300'
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}

            />
            



            {/* Mobile Menu *}
}
            <motion&& motion.div;

              transition={{ duration: 0.3 }}
className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <div className='p-6'>
                {/* Close Button */}'
                <div className='flex justify-end mb-6'>;

              initial={{ x: '100%' }}
              animate={{ x: 0 }}

              exit={{ x: '100%' }}

              transition={{ duration: 0.3 }}
className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'
                />
              <div className='p-6'    />

                {/* Close Button *}
}
                <div className='flex justify-end mb-6'    />;
                  <motion&& motion.button;
                    whileTap={{ scale: 0 && 0.95 }}

                    onClick={() =    /> setIsOpen(false)}

                    className='text-gray-300 hover:text-white transition-colors duration-300'
                  >
                    <X className='w-6 h-6'    />
                  </motion.button>
                </div>
                {/* Mobile Menu Items */}
<div className='space-y-4'    />
                  {navigationItems.map(item => (}
                    <div key={item.name}    />
                      {item.dropdown ? (
                        <div className='space-y-2'>
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'>
                            {item.name}
                          </div>'
                          <div className='pl-4 space-y-2'>
                            {item.dropdown.map(dropdownItem => {}
                              const Icon = dropdownItem.icon;
                                  onClick={() => setIsOpen(false)}'
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                                >'
                                  <Icon className='w-5 h-5 text-cyan-400' />
                                  <div>'
                                    <div className='text-white font-medium'>
                                      {dropdownItem.name}
                                    </div>'
                                    <div className='text-gray-400 text-sm'>

                        <div className='space-y-2'    />
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'    />
}
                            {item.nam}
}
                          </div>;
                          <div className='pl-4 space-y-2'    />;
                            {item.dropdown.map(dropdownItem = > ;}
  const Icon = dropdownItem.icon;}
                                  onClick={() => setIsOpen(false)}
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'>

                                  <Icon className='w-5 h-5 text-cyan-400'    />;
                                  <div    />;
                                    <div className='text-white font-medium'    />;
                                      {dropdownItem.name}
                                    </div>;
                                    <div className='text-gray-400 text-sm'    />;
                                      {dropdownItem.description}
                                    </div>;
                                  </div>;
                                </Link>;
                              )})}
                          </div>;

                              );                            })}                    <div key={item && item.name}>;
                      {item && item.dropdown ? (;
                        <div className="space-y-2">;
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">;
                            {item && item.name}
                          </div>;
                          <div className="pl-4 space-y-2">;
                            {item && item.dropdown.map((dropdownItem) => {;
                              const Icon = dropdownItem && dropdownItem.icon;
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                <div className='space-y-4'>
                  {navigationItems.map(item => (
                    <div key={item.name}>
                          </div>;
                          <div className='pl - 4 space - y-2'>;
                            {item.dropdown.map (dropdown_item => {
                              const Icon = dropdown_item.icon;
;
                                  on_click={() => setIsOpen (false)}
                                  className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300';
                                >;
                                  <Icon className='w - 5 h - 5 text - cyan - 400' />;
                                  <div>;
                                    <div className='text - white font - medium'>;
                                      {dropdown_item.name}
                                    </div>;
                                    <div className='text - gray - 400 text - sm'>;
                                      {dropdown_item.description}
                                    </div>;
                                  </div>;
                                </Link>);                            })}                    <div key={item.name}>;
                      {item.dropdown ? (
                        <div className="space - y-2">;
                          <div className="text - gray - 400 font - medium text - sm uppercase tracking - wider">;
                            {item.name}
                          </div>
                          <div className='pl-4 space-y-2'>
                            {item.dropdown.map(dropdownItem => {
                              const Icon = dropdownItem.icon;
                                  onClick={() => setIsOpen(false)}
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                                >
                                  <Icon className='w-5 h-5 text-cyan-400' />
                                  <div>
                                    <div className='text-white font-medium'>
                                      {dropdownItem.name}
                                    </div>
                                    <div className='text-gray-400 text-sm'>
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              );                            })}                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => {
                              const Icon = dropdownItem.icon;
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-all duration-300"
                                >
                                  <Icon className="w-5 h-5 text-cyan-400" />
                                  <div>
                                    <div className="text-white font-medium">{dropdownItem.name}</div>
                                    <div className="text-gray-400 text-sm">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              )
                            })}


            />
            



            {/* Mobile Menu *
}
            <motion&& motion.div;
              initial={{ "x": '100%' }}'
              animate={{ "x": 0 }}

              exit={{ "x": '100%' }}'

              transition={{ "duration": 0.3 }}
className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl''
            >
              <div className='p-6'>'

                {/* Close Button *
}
                <div className='flex justify-end mb-6'>;'
                  <motion&& motion.button;
                    whileTap={{ "scale": 0 && 0.95 }}

                    onClick={() => setIsOpen(false)}

                    className='text-gray-300 "hover":text-white transition-colors duration-300''
                  >
                    <X className='w-6 h-6' />'
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}

                            })}



                          </div>;
                      ) : (;
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item && item.href}


className='flex items-center space-x-3 p-3 rounded-lg "hover": bg-cyan-500/10 transition-all duration-300''
                        >
                          <item.icon className='w-5 h-5 text-cyan-400' />'
                          <span className='text-white font-medium'>'
                            {item.name}
                          </span>                        </Link>
'
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                          onClick={() =    /> setIsOpen(false)}

className='flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-all duration-300'
                        >
                          <item.icon className='w-5 h-5 text-cyan-400'    />
                          <span className='text-white font-medium'    />
                            {item.name}
                          </span>                        </Link>
className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
                        >
                          <item.icon className='w-5 h-5 text-cyan-400' />
                          <span className='text-white font-medium'>

                          </span>                        </Link>

                          </span>
                        </Link>

                        </Link>


                      )}
                    </div>;
                  ))}
                </div>


                      )}
                    </div>
                  ))}
                </div>
                      
}
                    </div>;
                  ))}






                {/* Contact Information */}

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
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Mail className='w-4 h-4 text-purple-400' />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <MapPin className="w-4 h-4 text-pink-400" />;
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
                    </div>;

                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25";
                  >;
                    Get Started Today;
                  </motion && motion.a>;
                </div>;
              </div>;
            </motion && motion.div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>;
    </>;
  )}export default Navigation;  )}export default Navigation;

                {/* Mobile CTA */}
                <div className="mt-6">
                  <motion.a

                    href="/contact"
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}


                <div className="mt-6">
                  <motion.a
                    href="/contact"
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    Get Started Today
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
                          </div>;
                          <div className='pl - 4 space - y-2'>;
                            {item.dropdown.map ((dropdown_item) => {const Icon = dropdown_item.icon;
                              return (<Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  on_click={() => setIsOpen (false)}
                                  className='flex items - center space - x-3 p - 3 rounded - lg hover: bg - cyan - 500 / 10 transition - all duration - 300';
                                >;
                                  <Icon className='w - 5 h - 5 text - cyan - 400' />;
                                  <div>;
                                    <div className='text - white font - medium'>{dropdown_item.name}</div>;
                                    <div className='text - gray - 400 text - sm'>{dropdown_item.description}</div>;
                                  </div>;
                                </Link>)})}
                          </div>;
                        </div>) : (<Link;
                          href={item.href}
                          on_click={() => setIsOpen (false)}
                          className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300';
                        >;
                          <item.icon className='w - 5 h - 5 text - cyan - 400' />;
                          <span className='text - white font - medium'>;
                            {item.name}
                          </span>                        </Link>                          className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300';
                        >;
                          <item.icon className='w - 5 h - 5 text - cyan - 400' />;
                          <span className='text - white font - medium'>{item.name}</span>)}
                    </div>))}
                </div>;
                {/* Contact Information */}
                <div className='mt - 8 p - 4 bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 rounded - xl border border - cyan - 500 / 20'>;
                  <h3 className='text - cyan - 400 font - semibold mb - 3'>;
                    Contact Information;
                  </h3>;
                  <div className='space - y-2 text - sm'>;
                    <div className='flex items - center space - x-2 text - gray - 300'>;
                      <Phone className='w - 4 h - 4 text - cyan - 400' />;
                      <span>{contact_info.mobile}</span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - gray - 300'>;
                      <Mail className='w - 4 h - 4 text - purple - 400' />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - gray - 300'>;
                      <MapPin className='w - 4 h - 4 text - pink - 400' />;
                      <span className='text - xs'>{contact_info.address}</span>                    </div>                      <span>{contact_info.mobile}</span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - gray - 300'>;
                      <Mail className='w - 4 h - 4 text - purple - 400' />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - gray - 300">;
                      <MapPin className="w - 4 h - 4 text - pink - 400" />;
                      <span className="text - xs">{contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
<div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'    />
                  <h3 className='text-cyan-400 font-semibold mb-3'    />
                    Contact Information;
                  </h3>
                  <div className='space-y-2 text-sm'    />
                    <div className='flex items-center space-x-2 text-gray-300'    />
                      <Phone className='w-4 h-4 text-cyan-400'    />

                      <span    />{contactInfo.mobile}</span>

                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'    />
                      <Mail className='w-4 h-4 text-purple-400'    />
                      <span    />{contactInfo.email}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'    />
                      <MapPin className='w-4 h-4 text-pink-400'    />
                      <span className='text-xs'    />{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
<div className='mt-6'    />;
                  <motion.a;
                    href='/contact';
                    whileTap={{ scale: 0.95 }}

                    onClick={() =    /> setIsOpen(false}
}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25'>

                    Get Started Today;
                  </motion.a>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
          </motion.div>)}
      </AnimatePresence>;
    </>);
}
;
export default Navigation);
}
;
export default Navigation;
;
  );
  );
}
};

export default Navigation;  )
}
export default Navigation;

  );
                    onClick={() => setIsOpen(false)}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25';
                  >;
                    Get Started Today;
                  </motion.a>;
                </div>;
            </motion.div>;
        )}

      </AnimatePresence>
    <   />
)
};
export default Navigation;
)}export default Navigation;
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={ x: '100%' }
              animate={ x: 0 }
              exit={ x: '100%' }
              transition={ duration: 0.3 }
              className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'
            >
              <div className='p-6'>
                {/* Close Button */}
                <div className='flex justify-end mb-6'>
                  <motion.button
                    whileTap={ scale: 0.95 }
                    onClick={() => setIsOpen(false)}
                    className='text-gray-300 hover:text-white transition-colors duration-300'
                  >
                    <X className='w-6 h-6' />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className='space-y-4'>
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className='space-y-2'>
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'>
                            {item.name}
                          </div>
                          <div className='pl-4 space-y-2'>
                            {item.dropdown.map((dropdownItem) => {
                              const Icon = dropdownItem.icon;
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                                >
                                  <Icon className='w-5 h-5 text-cyan-400' />
                                  <div>
                                    <div className='text-white font-medium'>{dropdownItem.name}</div>
                                    <div className='text-gray-400 text-sm'>{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                        >
                          <item.icon className='w-5 h-5 text-cyan-400' />
                          <span className='text-white font-medium'>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'>
                  <h3 className='text-cyan-400 font-semibold mb-3'>Contact Information</h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Phone className='w-4 h-4 text-cyan-400' />
                      <span>{contactInfo.mobile}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Mail className='w-4 h-4 text-purple-400' />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <MapPin className='w-4 h-4 text-pink-400' />
                      <span className='text-xs'>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className='mt-6'>
                  <motion.a
                    href='/contact'
                    whileTap={ scale: 0.95 }
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25"



export default Navigation;

"
export default Navigation;
export default Navigation;
