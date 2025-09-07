import React, { useState, useEffect } from 'react,
import Link from next/link';
import { motion, AnimatePresence } from 'framer-motion;
import { Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github} from lucide-react';
interface NavigationItem {}
  name: string;


class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error(Error caught by boundary:, error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React, { useState, useEffect } from 'react;
import Link from 'next / link';
import { motion, AnimatePresence } from framer-motion';

import {}
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  MapPin,'
} from lucide-react;



import {}
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  MapPin,'
} from 'lucide-react;
interface NavigationItem {}
  name: string;
  href: string;  icon?: React.ReactNode;import {}
  href: string;  icon?: React.ReactNode;import {

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Brain, Rocket, Target, Atom, Shield;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  DollarSign, BarChart3, Globe, Grid, Heart, Database;
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor;
  Zap, Eye, Infinity, Sparkles, Users, Lock, Code, Server, Layers, Globe2;
  Star, Award, Clock, CheckCircle, Zap as ZapIcon, Phone as PhoneIcon;




import {
  Menu,
  ChevronDown,
  X,
  Phone,
  Mail,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  Shield,
  DollarSign,
  BarChart3,
  Globe,
  Grid,
  Heart,
  Database,
  Cpu,
  Palette,
  Cloud,
  Network,
  TrendingUp,
  ShoppingCart,
  Settings,
  Building,
  Monitor,
  Zap,
  Eye,
  Infinity,
  Sparkles,
  Users,
  Lock,
  Code,
  Server,
  Layers,
  Globe2,
  Star,
  Award,
  Clock,
  CheckCircle,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Search,
  User,
  Bell,
  Cog,
  LogOut,
  Home,
  Info,
  FileText,
  Users as UsersIcon,
  Bot,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  MapPin} from lucide-react';
interface NavigationItem {
=======

  Search, User, Bell, Cog, LogOut, Home, Info, FileText, Users as UsersIcon;
  Bot, MessageCircle, Linkedin, Twitter, Github, Youtube, MapPin

 } from 'lucide-react;

interface NavigationItem {
  name: string;

  description?: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  name: string;
  href: string;  icon?: React.ReactNode;import {

  href: string;  icon?: React.ReactNode;import {

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;

}
  color?: string;
  color?: string;  color?: string;
}
  color?: string;


  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

const [activeDropdown, setActiveDropdown] = useState<string | null />(null);

const toggleMenu = () => setIsOpen(!isOpen);

const closeMenu = () => setIsOpen(false);

const handleDropdownToggle = (
setActiveDropdown(activeDropdown === name ? null : name),) => {
  return $3;}
}
}

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);

=======
  const handleDropdownToggle = (name: string) => {
setActiveDropdown(activeDropdown === name ? null : name);
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  useEffect(() => {}
    const handleResize = () => {}
      if (window.innerWidth >= 1024) {}
        setIsOpen(false);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
setActiveDropdown(null);
      }
    }

    window.addEventListener(resize', handleResize);
return () => window.removeEventListener('resize, handleResize);

              </span>
            </Link>
          </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                Zion Tech Group;
              </span>;
            </Link>;
          </div>;

                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}

                      <div className=space-y-4'>
                        {item.children?.map(child => (
                      transition={{ duration: 0 && 0.2 }}'
                      className=absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50>;'
                      <div className='space-y-4>;
                        {item && item.children?.map(child => (;

                            </div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

                className=flex items-center space-x-1 hover:text-white transition-colors'
              >'
                <Phone className=w-4 h-4 />                <span>{contactInfo.mobile}</span>
              </a>
            </div>"
            <Link          <div className=hidden lg:flex lg:items-center lg:space-x-4>"
            <div className="flex items-center space-x-4 text-sm text-gray-400>`
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-white transition-colors">
                <Phone className=w-4 h-4" />

              </a>
            </div>
            <Link'
              href='/contact
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link"
              href=/contact
"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'>;
              Get Started;
              <ArrowRight className=ml-2 w-4 h-4' />            </Link>;
          </div>;
                <Phone className='w-4 h-4 />
                <span>{contactInfo.mobile}</span>
              </a>
            </div>
            <Link
href=/contact'
              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200
            >
              Get Started
              <ArrowRight className=ml-2 w-4 h-4' />
            </Link>
          </div>
          {/* Mobile menu button */}
<div className='lg:hidden>
            <button
              onClick={toggleMenu}
              className=inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              <span className='sr-only>Open main menu</span>
              {isOpen ? (
                <X className=block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6 />
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </button>
          </div>
        </div>
      </div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;

            <div className=px-2 pt-2 pb-3 space-y-1'>
              {navigationItems.map(item => (
                <div key={item.name}>
                  <button;
                    onClick={() => handleDropdownToggle(item && item.name)}'
                    className=w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200;
                  >;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    <div className='flex items-center space-x-2>;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;

            <div className=px-2 pt-2 pb-3 space-y-1>
              {navigationItems.map((item) => (
                <div key={item.name}>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div;
                    onClick={() => handleDropdownToggle(item && item.name)}"
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200;
                  >;
                    <div className="flex items-center space-x-2">;
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;`
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : }`} />;
                  </button>;
      {/* Mobile Navigation */}
      <AnimatePresence>;

                        className='ml-4 mt-2 space-y-1'

                          <Link
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200
                            onClick={closeMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
                          >
            transition={{ duration: 0.3 }}transition={{ duration: 0.2 }}className='ml-4 mt-2 space-y-1';
                          <Link;
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200                            onClick={closeMenu}                      >;
                        {item.children?.map((child) => (<Link;
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200;
                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
              {/* Mobile Contact Info */}
              <div className='pt-4 pb-3 border-t border-slate-700/50'>;
                <div className=px-3 py-2 text-sm text-gray-400>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Phone className=w-4 h-4 />;
                      className='hover:text-white transition-colors'>;
                      {contactInfo && contactInfo.mobile}
                    </a>;
                  </div>;
                  <Link;
                    href=/contact;
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200';
                    onClick={closeMenu}>;
                    Get Started;
                    <ArrowRight className=ml-2 w-4 h-4 />                  </Link>              {/* Mobile Contact Info */}
              <div className="pt-4 pb-3 border-t border-slate-700/50">;
                <div className=px-3 py-2 text-sm text-gray-400>;
                  <div className="flex items-center space-x-2 mb-2">;
                    <Phone className=w-4 h-4 />;
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">;
                      {contactInfo.mobile}
                    </a>;
                  </div>;
                  <div className=flex items-center space-x-2 mb-2>;
                    <Mail className="w-4 h-4" />;
                    <a href={`mailto:${contactInfo.email}`} className=hover:text-white transition-colors>;
                      {contactInfo.email}
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <MapPin className=w-4 h-4 />;
                    <span>{contactInfo.address}</span>;
                  </div>;
                </div>;
                <div className="px-3 pt-2">;
              <div className=pt-4 pb-3 border-t border-slate-700/50>;
                    </a>;
                  </div>;
                  <div className="flex items-center space-x-2 mb-2">;
                    <Mail className=w-4 h-4 />;
                    <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-white transition-colors">;
                      {contactInfo && contactInfo.email}
                    </a>;
                  </div>;
                  <div className=flex items-center space-x-2>;
                    <MapPin className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
                      >;
                        {item.children?.map(child => (<Link;
                            key={child.name}
                            href={child.href}className='ml-4 mt-2 space-y-1';
                      >;
                        {item.children?.map(child => (<Link;
                            key={child.name}
                            href={child.href}
                          >
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200;
                            onClick={closeMenu}>;
                            {child.name}
                          </Link>;
=======
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}

                        transition={{ duration: 0.2 }}
                        className='ml-4 mt-2 space-y-1'

                          <Link;
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'                            onClick={closeMenu}                      >
                        {item.children?.map((child) => (
                          <Link;
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                        ))}
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
              {/* Mobile Contact Info */}'
              <div className=pt-4 pb-3 border-t border-slate-700/50>;'
                <div className='px-3 py-2 text-sm text-gray-400>;
                  <div className='flex items-center space-x-2 mb-2'>;
                    <Phone className=w-4 h-4' />;'
                      className=hover:text-white transition-colors>;
                      {contactInfo && contactInfo.mobile}
                    </a>;
                  </div>;
                  <Link'
                    href='/contact
                    className='w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200'
                    onClick={closeMenu}>;
                    Get Started;
                    <ArrowRight className=ml-2 w-4 h-4' />                  </Link>              {/* Mobile Contact Info */}"
              <div className=pt-4 pb-3 border-t border-slate-700/50>"
                <div className="px-3 py-2 text-sm text-gray-400>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className=w-4 h-4" />"`
                    <a href={`tel:${contactInfo.mobile}`} className=hover:text-white transition-colors>
                      {contactInfo.mobile}
                    </a>
                  </div>"
                  <div className="flex items-center space-x-2 mb-2>
                    <Mail className="w-4 h-4" />`
                    <a href={`mailto:${contactInfo.email}`} className=hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>"
                  <div className=flex items-center space-x-2>"
                    <MapPin className="w-4 h-4 />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="px-3 pt-2">
              <div className=pt-4 pb-3 border-t border-slate-700/50">;
                    </a>;
                  </div>;"
                  <div className=flex items-center space-x-2 mb-2>;"
                    <Mail className="w-4 h-4 />;`
                    <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-white transition-colors">;
                      {contactInfo && contactInfo.email}
                    </a>;
                  </div>;
                  <div className=flex items-center space-x-2">;"
                    <MapPin className=w-4 h-4 />;
                    <span>{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
                      >
                        {item.children?.map(child => (
                          <Link;
                            key={child.name}
                            href={child.href}
className='ml-4 mt-2 space-y-1
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className=block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200'
                            onClick={closeMenu}
origin/cursor/automate-test-improve-and-merge-code-2533
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

                    <Phone className='w-4 h-4 />
                    <a;`
                      href={`tel:${contactInfo.mobile}`}
                      className='hover:text-white transition-colors'
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className=flex items-center space-x-2 mb-2'>'
                    <Mail className=w-4 h-4 />
                    <a;`
                      href={`mailto:${contactInfo.email}`}'
                      className='hover:text-white transition-colors
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className=w-4 h-4' />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>'
                <div className='px-3 pt-2'>
                  <Link;
                  <Link"
                    href="/contact
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  </Link>;
                </div>;
              </div>;
            </div>;

export default UltraFuturisticNavigation2047;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
export default UltraFuturisticNavigation2047);
}
export default UltraFuturisticNavigation2047;
  );
export default UltraFuturisticNavigation2047;  )
}
export default UltraFuturisticNavigation2047;

export default UltraFuturisticNavigation2047;

=======
const navigationItems: NavigationItem[] = [
  {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
