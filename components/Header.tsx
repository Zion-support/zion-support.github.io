<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client';

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ChevronDown, 
  Menu, 
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


"use client";
<<<<<<< HEAD
"use client";
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"use client";
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
<<<<<<< HEAD
  Menu,

'use client';

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

"use client";
;
import React, { useState, useEffect } from './react';
import Link from './next / link';
<<<<<<< HEAD
import {
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
Phone,
  Mail, 
MapPin,
  MapPin,
  Brain,
  Network,
  Cloud,
  ArrowRight
} from 'lucide-react';
origin/main

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook, 
  Twitter, 
  Linkedin, 
Instagram,
  ChevronDown, 
  Menu, 

origin/automation-improvements-final
=======

import {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  X,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
<<<<<<< HEAD
  CreditCard
} from 'lucide-react';
=======

<<<<<<< HEAD


CreditCard,

  CreditCard,
=======
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
} from "lucide-react";

  CreditCard,;

  CreditCard,;
} from "lucide-react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const Header: React.FC = () => {
=======
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap } from 'lucide-react';
import { useRouter } from 'next/router';

ursor/automate-test-improve-and-merge-code-646c;
'use client';'use client';import React, { useState } from 'react';'
import Link from 'next/link';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { Menu, X, ChevronDown, Phone, Mail, MapPin  } from 'lucide-react';'

<<<<<<< HEAD
const Header = () => {const [isMenuOpen, setIsMenuOpen] =;
  }
  useState(false);
  const [activeDropdown, setActiveDropdown]  = useState<string | null>(null;
const navigation = [;
  {"name": 'Home',"href": '/';'
    },{"name": 'Services',"href": '/services',"dropdown": [;'
          { "name": 'AI Services', "href": '/ai-services','
},
  { "name": 'IT Services', "href": '/it-services','
},
  { "name": 'Micro SaaS', "href": '/micro-saas','
},
  { "name": 'Cloud Solutions', "href": '/solutions/cloud-migration','
},
  { "name": 'Cybersecurity', "href": '/services/cybersecurity','
},
{ "name": 'Data Analytics', "href": '/services/data-analytics','
}
      ];
    },{"name": 'Solutions',"href": '/solutions',"dropdown": [;'
          { "name": 'Enterprise Solutions', "href": '/solutions/enterprise','
},
  { "name": 'Healthcare', "href": '/solutions/healthcare','
},
  { "name": 'Finance', "href": '/solutions/finance','
},
  { "name": 'Government', "href": '/solutions/government','
},
  { "name": 'Retail', "href": '/solutions/retail','
},
{ "name": 'Education', "href": '/solutions/education','
}
      ];
    },{"name": 'Industries',"href": '/industries',"dropdown": [;'
          { "name": 'Financial Services', "href": '/industries/financial','
},
  { "name": 'Healthcare', "href": '/industries/healthcare','
},
  { "name": 'Manufacturing', "href": '/industries/manufacturing','
},
  { "name": 'Retail', "href": '/industries/retail','
},
{ "name": 'Government', "href": '/industries/government','
}
      ];
    },{"name": 'Company',"href": '/about',"dropdown": [;'
          { "name": 'About Us', "href": '/about','
},
  { "name": 'Our Team', "href": '/team','
},
  { "name": 'Careers', "href": '/careers','
},
  { "name": 'Partners', "href": '/partners','
},
{ "name": 'Case Studies', "href": '/case-studies','
}
      ];
    },{"name": 'Resources',"href": '/resources',"dropdown": [;'
          { "name": 'Blog', "href": '/blog','
},
  { "name": 'White Papers', "href": '/white-papers','
},
  { "name": 'Webinars', "href": '/webinars','
},
  { "name": 'Tutorials', "href": '/tutorials','
},
{ "name": 'API Documentation', "href": '/api-docs','
}
      ];
    },{"name": 'Contact',"href": '/contact';'
=======
'use client';
"use client";

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
=======
'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
=======

>>>>>>> origin/chore/fix-lint-and-merge
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
<<<<<<< HEAD

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Cloud Solutions', href: '/solutions/cloud-migration' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Finance', href: '/solutions/finance' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Government', href: '/industries/government' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'API Documentation', href: '/api-docs' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact'
>>>>>>> origin/resolved-merge-conflicts
    }
  ];

const toggleDropdown = ("name": string) => {setActiveDropdown(activeDropdown === name ? null : name);
  }
  return (<header className="bg-white shadow-lg sticky top-0 z-50">;"
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">;"
        <div className="container mx-auto px-4">;"
          <div className="flex flex-col "md":flex-row justify-between items-center text-sm">;"
            <div className="flex items-center space-x-6 mb-2 "md":mb-0">;"
              <div className="flex items-center space-x-2">;"
                <Phone className="w-4 h-4" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;"
                <Mail className="w-4 h-4" />;"
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-2">;"
              <MapPin className="w-4 h-4" />;"
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">;"
        <div className="flex justify-between items-center">;"
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;"
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;"
              <span className="text-white font-bold text-xl">Z</span>;"
            </div>;
            <div>;
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>;"
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>;"
            </div>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden "lg":flex items-center space-x-8">;"
            {navigation.map((item) => (<div key={item.name} className="relative group">;"
                <button;
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-700 "hover": text-blue-600 transition-colors duration-200 font-medium">"

                  <Link href={item.href}>{item.nam
}</Link>;
                  {item.dropdown && (<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';'                    }`} />;`                  )}
                </button>;
                {/* Dropdown Menu */}
                {item.dropdown && (<AnimatePresence>;
                    {activeDropdown === item.name && (<motion.div;
                        }
                        initial={ "opacity": 0, "y": 10 
}
                        animate={ "opacity": 1, "y": 0 
}
                        exit={ "opacity": 0, "y": 10 
}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">"

                        {item.dropdown.map((subItem) => (<Link;
                            }
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 "hover":bg-blue-50 "hover":text-blue-600 transition-colors duration-200";"
                            onClick={() => setActiveDropdown(null)}
                          >;
                            {subItem.name}
                          </Link>;
                        ))}
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          </div>;
          {/* Mobile Menu Button */}
          <button;
            onClick={toggleMenu}
            className=""lg": hidden p-2 text-gray-700 "hover":text-blue-600 transition-colors duration-200">"

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /,"
}
          </button>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isMenuOpen && (<motion.div;
              }
              initial={ "opacity": 0, "height": 0 
}
              animate={ "opacity": 1, "height": 'auto' ,'
}
              exit={ "opacity": 0, "height": 0 }
              className=""lg":hidden mt-4 border-t border-gray-200 pt-4">"

              {navigation.map((item) => (<div key={item.nam
} className="mb-2">;"
                  <div className="flex items-center justify-between">;"
                    <Link;
                      href={item.href}
                      className="text-gray-700 "hover":text-blue-600 transition-colors duration-200 font-medium py-2";"
                      onClick={() => setIsMenuOpen(false)}
                    >;
                      {item.name}
                    </Link>;
                    {item.dropdown && (<button;
                        }
                        onClick={() => toggleDropdown(item.name)}
                        className="p-1">"

                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';'
                        }`} />;`
                      </button>;
                    )}
                  </div>;
                  {item.dropdown && activeDropdown === item.name && (<div className="ml-4 mt-2 space-y-1">;"
                      {item.dropdown.map((subItem) => (<Link;
                          }
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-600 "hover":text-blue-600 transition-colors duration-200 py-1";"
                          onClick={() => setIsMenuOpen(false)}
                        >;
                          {subItem.name}
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">;"
                <Link;
                  href="/contact";"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg "hover":shadow-lg transition-all duration-300 font-semibold";"
                  onClick={() => setIsMenuOpen(false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>;
          )}
        </AnimatePresence>;
      </nav>;
    </header>;
  )}

export default Header;

export default Header;

export default Header;
}
import React, { useState, useEffect } from 'react';'
import { useRouter  } from 'next/router';'
import { Menu,X,Search,Phone,Mail,MapPin,ChevronDown,Building2;
 } from 'lucide-react';'

const navigation = {'Services': [;'
      { "name": 'AI Services', "href": '/ai-services','
},
  { "name": 'IT Services', "href": '/it-services','
},
  { "name": 'Micro SaaS', "href": '/micro-saas','
},
{ "name": 'Consulting', "href": '/consulting','
}
  ],'Solutions': [;'
      { "name": 'Enterprise', "href": '/enterprise','
},
  { "name": 'Startup', "href": '/startup','
},
{ "name": 'Industry', "href": '/industries','
}
  ],'Company': [;'
      { "name": 'About', "href": '/about','
},
  { "name": 'Team', "href": '/team','
},
  { "name": 'Careers', "href": '/careers','
},
{ "name": 'Contact', "href": '/contact','
}
  ];
}

export default function Header() {const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  }
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)const router = useRouter(;
  useEffect(() => ;
  const handleRouteChange = () => {setMobileMenuOpen(false)setActiveDropdown(null)}router.events.on('routeChangeStart', handleRouteChange)return () => {router.events.off('routeChangeStart', handleRouteChange)}, [router.events];'
  return (<header className="bg-white shadow-lg sticky top-0 z-50">;"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
        <div className="flex justify-between items-center h-16">;"
          <div className="flex items-center">;"
            <Link href="/" className="flex items-center space-x-2">;"
              <Building2 className="h-8 w-8 text-blue-600" />;"
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>;"
            </Link>;
          </div>;
          <nav className="hidden "md":flex space-x-8">;"
            {Object.entries(navigation).map(([key, items]) => (<div;
                }
                key={key}
                className="relative";"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >;
                <button className="flex items-center text-gray-700 "hover":text-blue-600 transition-colors">;"
                  {key}
                  <ChevronDown className="ml-1 h-4 w-4" />;"
                </button>;
                <AnimatePresence>;
                  {activeDropdown === key && (<motion.div;
                      }
                      initial={ "opacity": 0, "y": 10 
}
                      animate={ "opacity": 1, "y": 0 
}
                      exit={ "opacity": 0, "y": 10 
}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">"

                      {items.map((item) => (<Link;
                          }
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 "hover": bg-gray-100">"

                          {item.nam
}
                        </Link>;
                      ))}
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
          </nav>;
          <div className="hidden "md":flex items-center space-x-4">;"
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md "hover":bg-blue-700 transition-colors">;"
              Get Started;
            </Link>;
          </div>;
          <button;
            className=""md":hidden";"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >;
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
          </button>;
        </div>;
      </div>;
      <AnimatePresence>;
        {mobileMenuOpen && (<motion.div;
            }
            initial={ "opacity": 0, "height": 0 
}
            animate={ "opacity": 1, "height": 'auto' ,'
}
            exit={ "opacity": 0, "height": 0 
}
            className=""md":hidden bg-white border-t">"

            <div className="px-4 py-2 space-y-1">;"
              {Object.entries(navigation).map(([key, items]) => (<div key={key} className="py-2">;"
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>;"
                  {items.map((item) => (<Link;
                      }
                      key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 "hover": text-blue-600">"

                      {item.nam
}
                    </Link>;
                  ))}
                </div>;
              ))}
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </header>;
  )}
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram  } from 'lucide-react';'

const "Header": React.FC = () => {const [isMenuOpen, setIsMenuOpen]  =;
  }
  useState(false;
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  }
  return (<header className="bg-white shadow-lg">;"
      <div className="bg-blue-900 text-white py-2">;"
        <div className="container mx-auto px-4">;"
          <div className="flex flex-col "md":flex-row justify-between items-center text-sm">;"
            <div className="flex items-center space-x-6 mb-2 "md":mb-0">;"
              <div className="flex items-center">;"
                <Phone className="w-4 h-4 mr-2" />;"
                <a href=""tel":+13024640950" className=""hover":text-blue-300">+1 302 464 0950</a>;"
              </div>;
              <div className="flex items-center">;"
                <Mail className="w-4 h-4 mr-2" />;"
                <a href=""mailto":kleber@ziontechgroup.com" className=""hover":text-blue-300">kleber@ziontechgroup.com</a>;"
              </div>;
            </div>;
            <div className="flex items-center space-x-4">;"
              <span className="text-blue-200">24/7 Support Available</span>;"
              <div className="flex space-x-2">;"
                <a href="#" className=""hover":text-blue-300"><Facebook className="w-4 h-4" /></a>;"
                <a href="#" className=""hover":text-blue-300"><Twitter className="w-4 h-4" /></a>;"
                <a href="#" className=""hover":text-blue-300"><Linkedin className="w-4 h-4" /></a>;"
                <a href="#" className=""hover":text-blue-300"><Instagram className="w-4 h-4" /></a>;"
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <nav className="container mx-auto px-4">;"
        <div className="flex justify-between items-center py-4">;"
          <Link href="/" className="flex items-center">;"
            <span className="text-2xl font-bold text-blue-900">Zion Tech Group</span>;"
          </Link>;
          <div className="hidden "md":flex items-center space-x-8">;"
            <Link href="/" className="text-gray-700 "hover":text-blue-600 font-medium">Home</Link>;"
            <Link href="/services" className="text-gray-700 "hover":text-blue-600 font-medium">Services</Link>;"
            <Link href="/about" className="text-gray-700 "hover":text-blue-600 font-medium">About</Link>;"
            <Link href="/contact" className="text-gray-700 "hover":text-blue-600 font-medium">Contact</Link>;"
            <Link href="/blog" className="text-gray-700 "hover":text-blue-600 font-medium">Blog</Link>;"
          </div>;
          <button;
            onClick={toggleMenu}
            className=""md": hidden p-2 rounded-md text-gray-700 "hover":text-blue-600 "hover":bg-gray-100">"

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /,"
}
          </button>;
        </div>;
        {isMenuOpen && (<div className=""md":hidden py-4 border-t border-gray-200">;"
            <div className="flex flex-col space-y-4">;"
              <Link href="/" className="text-gray-700 "hover":text-blue-600 font-medium">Home</Link>;"
              <Link href="/services" className="text-gray-700 "hover":text-blue-600 font-medium">Services</Link>;"
              <Link href="/about" className="text-gray-700 "hover":text-blue-600 font-medium">About</Link>;"
              <Link href="/contact" className="text-gray-700 "hover":text-blue-600 font-medium">Contact</Link>;"
              <Link href="/blog" className="text-gray-700 "hover":text-blue-600 font-medium">Blog</Link>;"
            </div>;
          </div>;
        )}
      </nav>;
    </header>;
  )}

export default Header;ursor/automate-test-improve-and-merge-code-646c;

export default Header;
        </AnimatePresence>
      </nav>
    </header>
  )
};


export default Header;
import { useRouter } from 'next/router';'
import { motion, AnimatePresence } from 'framer-motion';'
import { 
  }
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';'

const navigation = {
  'Services': ['
      { "name": 'AI Services', "href": '/ai-services','
},

      { "name": 'IT Services', "href": '/it-services','
},

      { "name": 'Micro SaaS', "href": '/micro-saas','
},

    { "name": 'Consulting', "href": '/consulting','
}
  ],
  'Solutions': ['
      { "name": 'Enterprise', "href": '/enterprise','
},

      { "name": 'Startup', "href": '/startup','
},

    { "name": 'Industry', "href": '/industries','
}
  ],
  'Company': ['
      { "name": 'About', "href": '/about','
},

      { "name": 'Team', "href": '/team','
},

      { "name": 'Careers', "href": '/careers','
},

    { "name": 'Contact', "href": '/contact' }'
  ]
};

export default function Header() {
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

const router = useRouter();

  useEffect(() => {

    }

    const handleRouteChange = () => {
      }
      setMobileMenuOpen(false);
      setActiveDropdown(null)
};


    router.events.on('routeChangeStart', handleRouteChange);'
    return () => {
      }
      router.events.off('routeChangeStart', handleRouteChange)'
};

  }, [router.events]);

return (;
    <header className="bg-white shadow-lg sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
        <div className="flex justify-between items-center h-16">"
          <div className="flex items-center">"
            <Link href="/" className="flex items-center space-x-2">"
              <Building2 className="h-8 w-8 text-blue-600" />"
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>"
            </Link>
          </div>

          <nav className="hidden "md":flex space-x-8">"
            {Object.entries(navigation).map(([key, items]) => (
              <div
}
key={key}
                className="relative""
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 "hover": text-blue-600 transition-colors">"
                  {ke
}
                  <ChevronDown className="ml-1 h-4 w-4" />"
                </button>
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
}
initial={ "opacity": 0, "y": 10 
}
                      animate={ "opacity": 1, "y": 0 
}
                      exit={ "opacity": 0, "y": 10 }
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50""
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="p-1"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
}
key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 "hover":bg-gray-100""
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>

          <div className="hidden "md":flex items-center space-x-4">"
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md "hover":bg-blue-700 transition-colors">"
              Get Started
            </Link>
          </div>

          <button,
className=""md":hidden""
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /,"
}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
}
initial={ "opacity": 0, "height": 0 
}
            animate={ "opacity": 1, "height": 'auto' ,'
}
            exit={ "opacity": 0, "height": 0 
}
            className=""md":hidden bg-white border-t""
          >
            <div className="px-4 py-2 space-y-1">"
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key} className="py-2">"
                  <div className="text-sm font-medium text-gray-900 mb-2">{key}</div>"
                  {items.map((item) => (
                    <Link
}
key={item.name}
                      href={item.href}
                      className="block py-1 text-sm text-gray-600 "hover": text-blue-600""
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        
}
      </AnimatePresence>

    </header>
  );
=======
export default Header;
<<<<<<< HEAD
}
export default Header;

    </header>
  );
}
}
=======
=======
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
>>>>>>> origin/chore/fix-lint-and-merge
              </div>
            </motion.div>
          )}
        </AnimatePresence>
<<<<<<< HEAD
=======

      </div>
    </header>
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </nav>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9

const servicesDropdown = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for business automation',
    href: '/ai-services',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security and threat protection',
    href: '/it-services',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and migration',
    href: '/it-services',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored applications to meet your specific business needs',
    href: '/services',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Seamless integration of existing systems',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Complete digital overhaul of your business processes',
    href: '/services',
  }
];

const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
>>>>>>> merged-prs-20250907-203621
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
<<<<<<< HEAD
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          
=======
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
<<<<<<< HEAD
                className="text-gray-700 hover:text-blue-600 transition-colors"
=======
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >
                {item.name}
              </Link>
            ))}
          </nav>
<<<<<<< HEAD
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
=======

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="text-gray-700 hover:text-blue-600 transition-colors"
=======
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
<<<<<<< HEAD
=======
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Get Started
                </button>
              </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </nav>
          </div>
        )}
      </div>
    </header>
  );
<<<<<<< HEAD
};

export default Header;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
};

export default Header;
      {/* Top Bar */};
      <div className="bg- blue-900text-whitepy-2">;
        <div className=" containermx-autopx-4">;
          <div className=" flex flex-col md: flex-row justify-betweenitems-centertext-sm">;
            <div className=" flex items-center space-x-6mb-2md:mb-0">;
              <div className=" flexitems-center">;
                <Phone className="w-4h-4mr-2" />;
                <a href="tel:+13024640950" className=" hover:text-blue-300">+1 302 464 0950</a>;
              </div>;
              <div className=" flexitems-center">;
                <Mail className="w-4h-4mr-2" />;
                <a href="mailto:kleber@ziontechgroup.com" className=" hover:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>;
            </div>;
            <div className=" flexitems-centerspace-x-4">;
              <span className=" text-blue-200">24/7 Support Available</span>;
              <div className=" flexspace-x-2">;
                <a href="#" className=" hover:text-blue-300"><Facebook className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Twitter className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Linkedin className="w-4h-4" /></a>;
                <a href="#" className=" hover:text-blue-300"><Instagram className="w-4h-4" /></a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className=" containermx-autopx-4">;
        <div className=" flex justify-betweenitems-centerpy-4">;
          {/* Logo */};
          <Link href="/" className=" flexitems-centerspace-x-2">;
            <div className="w-10 h-10 bg- blue-600 rounded-lg flexitems-centerjustify-center">;
              <span className=" text-whitefont-boldtext-xl">Z</span>;
            </div>;
            <div>;
              <div className=" text-xlfont-boldtext-gray-900">Zion Tech Group</div>;
              <div className=" text-xstext-gray-500">Technology Solutions</div>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
            {/* Services Dropdown */};
            <div className=" relative group">
              <button
                className=" flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>;
              <AnimatePresence>;
                {isServicesOpen && (;
                  <motion.div;
                    initial={ opacity: 0, y: 10 };
                    animate={ opacity: 1, y: 0 };
                    exit={ opacity: 0, y: 10 };
                    className=" absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsServicesOpen(true)};
                    onMouseLeave={() => setIsServicesOpen(false)};
                  >;
                    <div className="p-6">;
                      <div className=" gridgrid-cols-2gap-4">;
                        {servicesDropdown.map((service) => (;
                          <Link key={service.title} href={service.href} className=" group">;
                            <div className=" flex items-start space-x-3 p-3 rounded-lghover:bg-gray-50transition-colors">;
                              <service.icon className="w-6 h-6 text-blue-600mt-1" />;
                              <div>;
                                <h3 className=" font-semibold text-gray-900group-hover:text-blue-600">{service.title}</h3>;
                                <p className=" text-smtext-gray-600">{service.description}</p>;
                              </div>;
                            </div>;
                          </Link>))};
            {/* Solutions Dropdown */};
            <div className=" relativegroup">;
              <button;
                className=" flex items-center text-gray-700 hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsSolutionsOpen(true)};
                onMouseLeave={() => setIsSolutionsOpen(false)};
              >;
                Solutions <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isSolutionsOpen && (;
                  <motion.div;
                    initial={ opacity: 0, y: 10 };
                    animate={ opacity: 1, y: 0 };
                    exit={ opacity: 0, y: 10 };
                    className=" absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsSolutionsOpen(true)};
                    onMouseLeave={() => setIsSolutionsOpen(false)};
                  >;
                    <div className="p-6">;
                      {solutionsDropdown.map((solution) => (;
                        <Link key={solution.title} href={solution.href} className=" group block mb-4last:mb-0">;
                          <div className=" flex items-start space-x-3 p-3 rounded-lghover:bg-gray-50transition-colors">;
                            <solution.icon className="w-6 h-6 text-blue-600mt-1" />;
                            <div>;
                              <h3 className=" font-semibold text-gray-900group-hover:text-blue-600">{solution.title}</h3>;
                              <p className=" text-smtext-gray-600">{solution.description}</p>;
                            </div>;
                          </div>;
                        </Link>))};
            {/* Industries Dropdown */};
            <div className=" relativegroup">;
              <button;
                className=" flex items-center text-gray-700 hover:text-blue-600font-mediumtransition-colors";
                onMouseEnter={() => setIsIndustriesOpen(true)};
                onMouseLeave={() => setIsIndustriesOpen(false)};
              >;
                Industries <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isIndustriesOpen && (;
                  <motion.div;
                    initial={ opacity: 0, y: 10 };
                    animate={ opacity: 1, y: 0 };
                    exit={ opacity: 0, y: 10 };
                    className=" absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xlborderz-50";
                    onMouseEnter={() => setIsIndustriesOpen(true)};
                    onMouseLeave={() => setIsIndustriesOpen(false)};
                  >;
                    <div className="p-4">;
                      {industriesDropdown.map((industry) => (;
                        <Link key={industry.name} href={industry.href} className=" group flex items-center space-x-3 p-2 rounded-lghover:bg-gray-50transition-colors">;
                          <industry.icon className="w-5h-5 text-blue-600" />;
                          <span className=" text-gray-700group-hover:text-blue-600">{industry.name}</span>;
                        </Link>))};
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
          {/* Mobile Menu Button */};
          <button;
            className="lg: hiddenp-2";
            onClick={() => setIsMenuOpen(!isMenuOpen)};
          >;
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
          </button>;
          <nav className=" hidden md:flexspace-x-8">;
            {navigation.map((item) => (;
              <div key={item.name} className=" relativegroup">;
                <Link;
                  href={item.href};
                  {item.name};
                </Link>;
                {item.submenu && (;
                  <div className=" absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-allduration-200z-50">;
                    <div className="py-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
          {/* Contact Info */};
          <div className=" hidden lg: flex items-center space-x-4text-smtext-gray-600">;
            <div className=" flexitems-center">;
              <Phone className="h-4w-4mr-1" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className=" flexitems-center">;
              <Mail className="h-4w-4mr-1" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
          </div>;
          {/* Mobile menu button */};
          <div className="md: hidden">;
            <button;
              onClick={toggleMenu};
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
            </button>;
          </div>;
        </div>;
      {/* Mobile Menu */};
      <AnimatePresence>;
        {isMenuOpen && (;
          <motion.div;
            initial={ opacity: 0, height: 0 ,};
            animate={ opacity: 1, height: 'auto' ,};
            exit={ opacity: 0, height: 0 ,};
        {/* Mobile Navigation */};
        {isMenuOpen && (;
          <div className="md: hidden">;
            <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3 bg-gray-50rounded-lgmt-2">;
              {navigation.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    href={item.href};
                    className=" text-gray-700 hover:text-blue-600 block px-3 py-2text-basefont-medium";
                    onClick={() => setIsMenuOpen(false)};
                  >;
                    {item.name};
                  </Link>;
                  {item.submenu && (;
                    <div className="ml-4 space-y-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className=" flex items-center text-gray-600 hover:text-blue-600 block px-3py-2text-sm";
                          onClick={() => setIsMenuOpen(false)};
                        >;
                          <subItem.icon className="h-4 w-4 mr-2" />;
                          {subItem.name};
                              {service.title};
                            </h3>;
                            <p className=" text-gray-600text-xs">;
                              {service.description};
                  onClick={closeMenu};
                  className=" block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200";
            {isMenuOpen ? <X className="w-6h-6" /> : <Menu className="w-6h-6" />};
          </button>;
        </div>;
        {/* Mobile Menu */};
}
export default Header;

    </header>
  );
}
}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
}
}
}
<<<<<<< HEAD
=======
export default Header;
=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
