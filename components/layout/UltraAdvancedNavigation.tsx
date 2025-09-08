



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


  Menu, X, ChevronDown, Search, Phone, Mail, MapPin;

  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;}
  Cpu, Zap, Atom, Database, Cloud, Lock, Code;}
  } from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC;

const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {


    const handleScroll = (
setIsScrolled(window.scrollY > 50)) => {
  return $3;}
}
};


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    {
      name: 'Home',

    {

      dropdown: [

        {
          name: 'AI Agent Orchestrator',
          href: '/ai-agents',
          icon: Bot,
          description: 'Multi-agent workflow automation',
          price: '$2,999/month'

        },
        {
          name: 'AI Cybersecurity',
          href: '/security',
          icon: Shield,
          description: 'AI-powered threat detection',
          price: '$4,999/month'
        },
        {
          name: 'AI Healthcare Analytics',
          href: '/ai-data-analytics',
          icon: Dna,
          description: 'Patient outcome prediction',
          price: '$3,999/month'
        },
        {
          name: 'AI Supply Chain',
          href: '/quantum-logistics',
          icon: Package,
          description: 'End-to-end optimization',
          price: '$2,499/month'
        },
        {
          name: 'AI Financial Risk',
          href: '/ai-financial-risk',
          icon: DollarSign,
          description: 'Advanced risk management',
          price: '$5,999/month'


    {

      name: 'Micro SaaS',
  href: '/services',
      icon: Monitor}
description: '300+ micro SaaS services'}
    },
    {

      name: 'Market Pricing',
  href: '/market-pricing',
      icon: DollarSign}
description: 'Benchmarks & vendor references'}
    },
    {
      name: 'About',
  href: '/about'}
      icon: null}
    },
    {

          >
            <Link href='/' className='flex items-center space-x-3 group'>'
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300'>'
                <Zap className='w-6 h-6 text-white' />'
              </div>
              <div className='hidden "sm":block'>'
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>'
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>'
                  Revolutionary Technology

                </div>              </div>          >
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
          </motion && motion.div>;{/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'>;
            {navigationItems.map((item, index) => (<div key={item.name} className='relative group'>;
                {item.dropdown ? (<button;
                    onClick={() =>;
                      setActiveDropdown(activeDropdown === item.name ? null : item.name;
                      )}
                    className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2';
                  >;
                    {item.icon && <item.icon className='w-4 h-4' />}
                    <span>{item.name}</span>;
                    <ChevronDown;
                      className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : '';
        <div className='flex justify-between items-center h-20'>          {/* Logo */}  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${}
      isScrolled 
        ? bg-black/90 backdrop-blur-xl border-b border-gray-800/50' '
        : bg-transparent


      name: 'Contact',
      href: '/contact',
      icon: null}
  ],

  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}


                                  {dropdownItem.price}

                                </div>
                              </Link>





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

<div className='hidden "lg": flex items-center space-x-6'>'
            <div className='flex items-center space-x-4 text-sm text-gray-300'>'
              <a



              <a

          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </a>



              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className=w-4 h-4 />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>
            
            <motion.a
              href=/contact
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
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-200'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>            <button


              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}




            </button>
          </div>
        </div>
      </div>





      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden'
          >
            <div className='px-4 py-6 space-y-4'>'
              {navigationItems.map(item => (
                <div key={item.name}>

            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden'
              />
            <div className='px-4 py-6 space-y-4'    />
              {navigationItems.map(item => (}
                <div key={item.name}    />


                  {item.dropdown ? (

                        <div className='flex items-center space-x-3'    />

                          {item.icon && <item.icon className='w-5 h-5'    />}
                          <span    />{item.nam}
}</span>;

                        </div>;
                        <ChevronDown;
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';}
                          }`}
                           />;
                      </button>;
                      {activeDropdown === item.name && (<div className='ml-8 mt-2 space-y-2'    />;}
                          {item.dropdown.map(dropdownItem => (<Link;}
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() =    /> setIsOpen(false)}
className='block py-2 text-gray-400 hover: text-white transition-colors duration-200'>

                  {item.dropdown ? (
                    <div    />
                      <button

                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'
                        <div className='flex items-center space-x-3'>
                          {item.icon && <item.icon className='w-5 h-5' />}
                          <span>{item.name}</span>

                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';}
                          }`}
                           />
                      </button>

                      {activeDropdown === item.name && (
                        <div className='ml-8 mt-2 space-y-2'>
                          {item.dropdown.map(dropdownItem => (                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className='block py-2 text-gray-400 hover:text-white transition-colors duration-200'                            >                        <div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className='block py-2 text-gray-400 hover:text-white transition-colors duration-200'                              className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>


                              {dropdownItem.name}



                            </Link>

                          )

                        </div>
                      )}

                    </div>;
                  ) : (<Link;
                      href={item.href}

                      onClick={() =    /> setIsOpen(false)}

className='flex items-center space-x-3 text-gray-300 hover: text-white transition-colors duration-200 py-3'
                    >
                      {item.icon && <item.icon className='w-5 h-5'    />}
                      <span    />{item.name}</span>


                      {item.icon && <item.icon className='w-5 h-5' />}                      <span>{item.name}</span>                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>

                      {item.icon && <item.icon className='w-5 h-5' />}                      <span>{item.name}</span>

                      <span>{item.name}</span>



                    </Link>

                  )}
                </div>
              ))}


              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>

                  </a>
                  <div className='flex items-start space-x-3'    />
                    <MapPin className='w-4 h-4 mt-0.5'    />
                    <span    />{contactInfo.address}</span>
                  </div>
                </div>


                    <Mail className='w-4 h-4' />;
                    <span>{contactInfo.email}</span>;
                  </a>;
                  <div className='flex items-start space-x-3'>;
                    <MapPin className='w-4 h-4 mt-0.5' />;
                    <span>{contactInfo.address}</span>;
                  </div>;
                </div>;

                <motion&& motion.a
                  href='/contact'
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'>              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">;
                <div className="space-y-3 text-sm text-gray-400">;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">;
                    <Phone className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">;
                    <Mail className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className="flex items-start space-x-3">;
                    <MapPin className="w-4 h-4 mt-0 && 0.5" />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
                <motion&& motion.a

                  href="/contact"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}

              {/* Mobile Contact Info */}"
              <div className="pt-6 border-t border-gray-800/50">"
                <div className="space-y-3 text-sm text-gray-400">"`
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">"
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>"`
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">"
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>"
                  <div className="flex items-start space-x-3">"
                    <MapPin className="w-4 h-4 mt-0.5" />
{/* Mobile Contact Info */}
              <div className='pt-6 border-t border-gray-800/50'>
                <div className='space-y-3 text-sm text-gray-400'>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200'
                  >
                    <Phone className='w-4 h-4' />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200'
                  >
                    <Mail className='w-4 h-4' />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className='flex items-start space-x-3'>
                    <MapPin className='w-4 h-4 mt-0.5' />
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <motion.a"
                  href="/contact"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}"
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



      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (<motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.dropdown ? (<div>;
                      <button            className="lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden";
          >;
            <div className="px - 4 py - 6 space - y-4">;
              {navigation_items.map ((item) => ({item.dropdown ? (<div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        <div className='flex items - center space - x-3'>;
                          {item.icon && <item.icon className='w - 5 h - 5' />}
                          <span>{item.name}</span>;
                        </div>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 200 ${active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (<div className='ml - 8 mt - 2 space - y-2'>;
                          {item.dropdown.map (dropdown_item => (                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                            >                        <div className="ml - 8 mt - 2 space - y-2">;
                          {item.dropdown.map ((dropdown_item) => (<Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                              className="block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200";
                            >;
                              {dropdown_item.name}
                            </Link>))}
                        </div>)}
                    </div>) : (<Link;
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
    </nav>)}export default UltraAdvancedNavigation)}export default UltraAdvancedNavigation;export default UltraAdvancedNavigation;
  )}href='/contact';
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300';
                >;

                  Get Started;
                </motion.a>;
              </div>;
            </div>;
          </motion.div>;
        )}

;


  );

};
export default UltraAdvancedNavigation;

"

export default UltraAdvancedNavigation;
  );

}



          </motion.div>
        )}




