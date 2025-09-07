
  Menu,
ChevronDown
  X,
Phone
  Mail,
ArrowRight
  Brain,
Rocket
  Target,
Atom
  Shield,
DollarSign
  BarChart3,
Globe
  Grid,
Heart
  Database,
Cpu
  Palette,
Cloud
  Network,
TrendingUp
  ShoppingCart,
Settings
  Building,
Monitor
  Zap,
Eye
  Infinity,
Sparkles
  Users,
Lock
  Code,
Server
  Layers,
Globe2
  Star,
Award
  Clock,
CheckCircle
  Zap as ZapIcon,
Phone as PhoneIcon,
Search
  User,
Bell
  Cog,
LogOut
  Home,
Info
  FileText,
Users as UsersIcon,
Bot
  MessageCircle,
Linkedin
  Twitter,

} from 'lucide-react';
=======
  Github} from lucide-react';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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


interface NavigationItem {
  }
  "name": string;
  "href": string;
  icon?: React.ReactNode;
} from 'lucide-react';'


  name: string;
  href: string;  icon?: React.ReactNode;import {

  href: string;  icon?: React.ReactNode;import {

  Menu, ChevronDown, X, Phone, Mail, ArrowRight;

  description?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;


  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

const [activeDropdown, setActiveDropdown] = useState<string | null />(null);



const handleDropdownToggle = ("name": string) => {
}


  useEffect(() => {

    }

    const handleResize = () => {
      }
      if (window.innerWidth >= 1024) {
        }
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


                      <div className='space-y-4'>
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                        {item.children?.map(child => (
                      transition={{ duration: 0 && 0.2 }}'
                      className=absolute top-full left-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl p-6 z-50>;'
                      <div className='space-y-4>;
                        {item && item.children?.map(child => (;

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            </button>;
          </div>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;

                    <div className='flex items-center space-x-2>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                      {item && item.icon}
                      <span>{item && item.name}</span>;
                    </div>;


                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : }`} />;
                  </button>;
      {/* Mobile Navigation */}
      <AnimatePresence>;

                        className='ml-4 mt-2 space-y-1'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

                        transition={{ "duration": 0.2 }}

className='ml-4 mt-2 space-y-1''
                      >
                        {item.children?.map(child => (
                          <Link
}
key={child.name}
                            href={child.href}

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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

                      {contactInfo.email}

                    </a>
                  </div>

=======
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

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
const navigationItems: NavigationItem[] = [
  {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
