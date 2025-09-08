import React, { useState, useEffect } from 'react',

<<<<<<< HEAD


=======

import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';
interface UltraFuturisticNavigationProps {
  className?: string}
}
  className?: string
}
  className?: string
}
export default function UltraFuturisticNavigation({ className;
}
return (;

export default function UltraFuturisticNavigation({ className;
  return (
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import {
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
} from 'lucide-react';
interface UltraFuturisticNavigationProps {
  className?: string;
export default function UltraFuturisticNavigation({
  className = ''
}: UltraFuturisticNavigationProps) {  const [isOpen, setIsOpen] = useState(false);
interface UltraFuturisticNavigationProps {
  className?: string
}

export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';



  className = '',;

>>>>>>> origin/cursor/delete-old-data-records-6bba
}: UltraFuturisticNavigationProps) {  const [isOpen, setIsOpen] = useState(false);
interface UltraFuturisticNavigationProps {;
  className?: string;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';
import React, { useState, useEffect } from 'react','
import Link from 'next/link';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';'

interface UltraFuturisticNavigationProps {
  className?: string}
}
}


<<<<<<< HEAD


export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {;

=======
export default function UltraFuturisticNavigation({ className;
}
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
export default function UltraFuturisticNavigation({ className = ' }: UltraFuturisticNavigationProps) {
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

<<<<<<< HEAD

const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

=======
    window.addEventListener('scroll, handleScroll);
    return () => window.removeEventListener(scroll', handleScroll);

  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const navigationItems = $2;
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },
        { name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' }
  ],

  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },

      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, []);

const navigationItems = [
  }, []);

const navigationItems = [;
    {

<<<<<<< HEAD

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

      name: 'Services',
  href: '/services'
      hasDropdown: true;
dropdownItems: [
{
          name: 'AI & Machine Learning',
  href: '/services/ai-ml',
          icon: Brain}
          color: 'from-purple-500 to-pink-600'}
        },
        {
          name: 'Quantum Computing',
  href: '/services/quantum'
          icon: Atom;
color: 'from-cyan-500 to-blue-600'
}
       }
}
        {name: 'Cybersecurity';
          href: '/services/cybersecurity';
          icon: Shield;}
          color: 'from-red-500 to-pink-600';}
        }
        {name: 'IT Solutions';
          href: '/services/it-solutions';
          icon: Rocket;}
          color: 'from-green-500 to-emerald-600';}
        }

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (
=======
        }
      ]
    },
      { name: 'Solutions'}
  href: '/solutions'}
},

      { name: 'About'}
  href: '/about'}
},


      { "name": 'Contact', "href": '/contact','
},

      { "name": 'Pricing', "href": '/pricing','
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
    { name: 'Pricing', href: '/pricing' },
origin/cursor/automate-test-improve-and-merge-code-2533
  ];

<<<<<<< HEAD

      { name: 'Contact'}
  href: '/contact'}
},

      { name: 'Pricing'}
  href: '/pricing'}
}

  ];

const contactInfo = {
    mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com'}
address: '364 E Main St STE 1008 Middletown DE 19709'}

=======
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
address: '364 E Main St STE 1008 Middletown DE 19709',
>>>>>>> origin/cursor/delete-old-data-records-6bba
  };

  
    >
      <div className = 'max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />

        <div className='flex items-center justify-between h-20'    />
          {/* Logo *}
}
<<<<<<< HEAD

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'
 ;

  const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);



export default function UltraFuturisticNavigation(): any ({ className = '' }: UltraFuturisticNavigationProps) {;


  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
'
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ];
    };'
    { name: 'Solutions', href: '/solutions' },;'
    { name: 'About', href: '/about' },;'
    { name: 'Contact', href: '/contact' },;'
    { name: 'Pricing', href: '/pricing' }

=======

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
    { name: Pricing, href: '/pricing' },
origin/cursor/automate-test-improve-and-merge-code-2533
  ];


<<<<<<< HEAD


=======

        ? bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl




        { name: 'View All Services', href: /services, icon: Rocket, color: 'from-gray-500 to-gray-600' }
        {{ name: Pricing, href: '/pricing' }];        { name: AI & Machine Learning, href: '/services/ai-ml', icon: Brain, color: from-purple-500 to-pink-600 },{ name: 'Quantum Computing', href: /services/quantum, icon: Atom, color: 'from-cyan-500 to-blue-600' },{ name: Cybersecurity, href: '/services/cybersecurity', icon: Shield, color: from-red-500 to-pink-600 },{ name: 'IT Solutions', href: /services/it-solutions, icon: Rocket, color: 'from-green-500 to-emerald-600' },{ name: View All Services, href: '/services', icon: Rocket, color: from-gray-500 to-gray-600 }
        {{ name: 'Pricing', href: /pricing }];        { name: 'AI & Machine Learning', href: /services/ai-ml, icon: Brain, color: 'from-purple-500 to-pink-600' },{ name: Quantum Computing, href: '/services/quantum', icon: Atom, color: from-cyan-500 to-blue-600 },{ name: 'Cybersecurity', href: /services/cybersecurity, icon: Shield, color: 'from-red-500 to-pink-600' },{ name: IT Solutions, href: '/services/it-solutions', icon: Rocket, color: from-green-500 to-emerald-600 },{ name: 'View All Services', href: /services, icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ];


className='flex items-center space-x-3''
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
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>"
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD

            transition={{ duration: 0 && 0.6 }}
            className='flex items-center space-x-3'>;
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;

              <Rocket className='w-7 h-7 text-white' />;
            </div>;
            <div>;'
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (<div className='flex items-center justify-between h-20'>;
          {/* Logo */}<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl';
  const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null){ name: View All Services, href: '/services', icon: Rocket, color: from-gray-500 to-gray-600 }
      ];
    }{ name: 'Solutions', href: /solutions },{ name: 'About', href: /about },{ name: 'Contact', href: /contact },{ name: 'Pricing', href: /pricing }>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className=flex items-center justify-between h-20>          {/* Logo */}  return (<navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl';
        : bg-transparent;
    } ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className=flex items-center justify-between h-20>;
<<<<<<< HEAD

=======
const contactInfo = {mobile: '+1 302 464 0950'}
  email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709'}>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;

        <div className = 'flex items-center justify-between h-20'    />          {/* Logo */} ;
  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' }
        : 'bg-transparent'}
    } ${className}`}    />
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />"
        <div className=\"flex items-center justify-between h-20\"    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <motion.div;
initial={{ opacity: 0, x: -20 }
}
            animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
=======
            transition={{ duration: 0.6 }}className='flex items-center space-x-3';
className=flex items-center space-x-3;
          >;
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;
              <Rocket className=w-7 h-7 text-white />;
            </div>;
            <div>;
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </div>;
              <div className='text-xs text-gray-400 -mt-1'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            transition={{ duration: 0.6 }}

className='flex items-center space-x-3'
              />
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'    />
              <Rocket className='w-7 h-7 text-white'    />
            </div>
            <div    />
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'    />
                Zion Tech Group;
              </div>
              <div className='text-xs text-gray-400 -mt-1'    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Revolutionary Technology;
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>;'
              <div className='text-xs text-gray-400 -mt-1'>;
                Revolutionary Technology;
              </div>            </div>;
<<<<<<< HEAD

          </motion && motion.div>;
          {/* Desktop Navigation */}

=======
          </motion && motion.div>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => ("
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
<<<<<<< HEAD


                  <div
                    onMouseEnter={() => setActiveDropdown(item && item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}

=======
                  >;'
                  >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <button className='flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'>;
                      <span>{item && item.name}</span>;'
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                    </button>                      <span>{item && item.name}</span>;"
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />;
                    </button>;
<<<<<<< HEAD




=======
          {/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => (
              <div key={item.name} className='relative group'>
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </motion.div>


                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50">
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {/* Dropdown Menu */}
                    <AnimatePresence>;
                      {activeDropdown === item && item.name && (<motion&& motion.div;
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'>;
                          <div className='p-4'>;
                            <div className='grid gap-3'>                              {item && item.dropdownItems?.map((dropdownItem, idx) => (<Link;
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;
                          <div className="p-4">;
                            <div className="grid gap-3">;
                                <Link;
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'>;
                                  <div;
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;
                                    <dropdownItem && dropdownItem.icon className='w-5 h-5 text-white' />;
                                  </div>;
                                  <div>;
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    {dropdownItem && dropdownItem.name ===;
                                      'View All Services' && (<div className='text-xs text-gray-400'>;
                                        Explore our complete portfolio;
                                      </div>                                    )}                                >;
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;
                                    <dropdownItem && dropdownItem.icon className="w-5 h-5 text-white" />;
                                  </div>;
                                  <div>;
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (<div className="text-xs text-gray-400">Explore our complete portfolio</div>;exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden';
                        >;
                          <div className='p-4'>;
                            <div className='grid gap-3'>;
                              {item.dropdownItems?.map((dropdownItem, idx) => (<Link;
                        <motion&& motion.div;
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}'
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'>;'
                          <div className='p-4'>;'
                            <div className='grid gap-3'>                              {item && item.dropdownItems?.map((dropdownItem, idx) => (;
                                <Link;
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}'"
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;"
                          <div className="p-4">;"
                            <div className="grid gap-3">;
                                <Link;
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}'
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'>;
                                  <div;`
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;'
                                    <dropdownItem && dropdownItem.icon className='w-5 h-5 text-white' />;
                                  </div>;
                                  <div>;'
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;
                                    {dropdownItem && dropdownItem.name ===;'
                                      'View All Services' && (;'
                                      <div className='text-xs text-gray-400'>;
                                        Explore our complete portfolio;
                                      </div>                                    )}                                >;`
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;"
                                    <dropdownItem && dropdownItem.icon className="w-5 h-5 text-white" />;
                                  </div>;
                                  <div>;"
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;'
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;"
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>;
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'
                        >
                          <div className='p-4'>
                            <div className='grid gap-3'>
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item';
                                >;
                                  <div;
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                                  >;
                                    <dropdownItem.icon className='w-5 h-5 text-white' />;
                                  </div>;
                                  <div>;
                                    <div className=text-white font-medium group-hover/item:text-cyan-300 transition-colors>;
                                      {dropdownItem.name}
                                    </div>;
                                    {dropdownItem.name ===;
                                      'View All Services' && (<div className=text-xs text-gray-400>;
                                        Explore our complete portfolio;
                                      </div>;
                                    )}
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;
                                      <div className='text-xs text-gray-400'>Explore our complete portfolio</div>;
                                </Link>
                                  </div>;
                                </Link>;
                  >
<<<<<<< HEAD
                    <button className=flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50>

                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1}}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className=absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden
                        >
                          <div className="p-4">
                            <div className=grid gap-3>
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item"
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className=w-5 h-5 text-white />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name === View All Services && (
                                      <div className=text-xs text-gray-400>Explore our complete portfolio</div>
                                    )}
                                  </div>

origin/cursor/automate-test-improve-and-merge-code-2533

                    </AnimatePresence>
                  </div>
                ) : (


                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden';
                        >;'
                          <div className='p - 4'>;'
                            <div className='grid gap - 3'>                              {item.dropdown_items?.map ((dropdown_item, idx) => (<Link;'
                                  }

=======

                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden'>'

                          <div className='p - 4'>;'
                            <div className='grid gap - 3'>                              {item.dropdown_items?.map ((dropdown_item, idx) => (<Link;'
                                  }
                  <Link;
href={item.href}
className='text-gray-300 hover: text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'
                      />

                    {item.nam}
}
                  </Link>;
                )}
              </div>;
            ))}href={item.href}"
                    className=\"text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50\">

                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden'>

                          <div className='p - 4'    />;
                            <div className='grid gap - 3'    />                              {item.dropdown_items?.map ((dropdown_item, idx) => (<Link;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}"
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item'                          className=\"absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden\"    />
"
                          <div className=\"p - 4\"    />;"
                            <div className=\"grid gap - 3\"    />;
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item'    />

                                  <div;
                                    className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item: scale - 110 transition - transform duration - 300
}    />

                                    <dropdown_item.icon className='w - 5 h - 5 text - white'    />;
                                  </div>;
                                  <div    />;
                                    <div className='text - white font - medium group - hover / item:text - cyan - 300 transition - colors'    />;
                                      {dropdown_item.name}
                                    </div>;
                                    {dropdown_item.name ===;
                                      'View All Services' && (<div className='text - xs text - gray - 400'    />;
                                        Explore our complete portfolio;
    </div>}
  );}
}                                >;
<<<<<<< HEAD

                                  <div className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item: scale - 110 transition - transform duration - 300
}    />
"
                                    <dropdown_item.icon className=\"w - 5 h - 5 text - white\"    />;
                                  </div>;
                                  <div    />;"
                                    <div className=\"text - white font - medium group - hover / item:text - cyan - 300 transition - colors\"    />;
                                      {dropdown_item.name}
                                    </div>;"
                                    {dropdown_item.name === 'View All Services' && (<div className=\"text - xs text - gray - 400\"    />Explore our complete portfolio</div>)}

                                  </div>;
                                </Link>))}
                            </div>;
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;

                  </div>) : (<Link;
                    href={item.href}"
                    className='text - gray - 300 hover: text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50'                      />                    className=\"text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50\">


                    {item.name}
                  </Link>
                )}
          {/* Contact Info & CTA */}{/* Contact Info */}
          {/* Contact Info & CTA */}



          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>



=======
                                  <div className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / "item": scale - 110 transition - transform duration - 300,`}>

                                    <dropdown_item.icon className='w - 5 h - 5 text - white' />;'
                                  </div>;
                                  <div>;
                                    <div className='text - white font - medium group - hover / 'item':text - cyan - 300 transition - colors'>;'
                                      {dropdown_item.name}
                                    </div>;'
                                    {dropdown_item.name === 'View All Services' && ("
                                      <div className="text - xs text - gray - 400">Explore our complete portfolio</div>)}


<div className='hidden lg: flex items-center space-x-6'    />

            {/* Contact Info *}
}
            <div className='flex items-center space-x-4 text-sm text-gray-300'    />;
              <div className='flex items-center space-x-2'    />;
                <Phone className='w-4 h-4 text-cyan-400'    />;
                <span    />{contactInfo.mobile}</span>;
              </div>;
            </div>;
            {/* CTA Button */}
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }
}    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Link;
                href='/contact';
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'    />

<<<<<<< HEAD

                <Rocket className='w-4 h-4 mr-2'    />;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                Get Started;
              </Link>;
            </motion.div>;
          </div>;
          {/* Mobile Menu Button */}

<<<<<<< HEAD
=======
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
            <div className="flex items-center space-x-4 text-sm text-gray-300">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-cyan-400" />;
              </div>;
            </div>;



            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >


          {/* Mobile Menu Button */}
          <div className='lg:hidden'>;
          {/* Mobile Menu Button */}
          <div className="lg:hidden">



            <button
=======

                    {item.name}
                  </Link>)}
              </div>)
}
          </div>;

          {/* Contact Info & CTA */}

<div className='hidden "lg": flex items-center space-x-6'>'

            {/* Contact Info *
}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;'
              <div className='flex items-center space-x-2'>;'
                <Phone className='w-4 h-4 text-cyan-400' />;'
                <span>{contactInfo.mobile}</span>;
              </div>;
            {/* CTA Button */}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>



              <Link
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'>;
                <Rocket className='w-4 h-4 mr-2' />                Get Started              <Link

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>

                <Rocket className='w-4 h-4 mr-2' />;'
                Get Started;
              </Link>;
            </motion && motion.div>;
          </div>;

            </button>
          </div>
<div className='lg:hidden'>;
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50';
            >;
              {isOpen ? (<X className='w-6 h-6' />;
              ) : (<Menu className='w-6 h-6' />;
              )}            </button>            <button;
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50";
            >;
              )}            </button>            <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}


<<<<<<< HEAD
              )}
            </button>

=======
          {/* Mobile Menu Button */}"
          <div className="lg:hidden">
<div className='hidden lg:flex items-center space-x-6'>
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-cyan-400' />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>
            {/* CTA Button */}
<motion.div whileHover={{ scale: 1.05 ;}} whileTap={{ scale: 0.95 ;}}>
              <Link
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'
              >
                <Rocket className='w-4 h-4 mr-2' />
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
<div className='lg:hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
            <button
              onClick={() => setIsOpen(!isOpen)}
<div className='lg: hidden' />
            <button;
onClick={() = /> setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
              ) : ('
                <Menu className='w-6 h-6' />
              )}            </button>            <button;
              onClick={() => setIsOpen(!isOpen)}"
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </div>;


              )}
            </button>
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD






=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
<<<<<<< HEAD

            exit={{ opacity: 0, height: 0 }}

=======
            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}

            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            exit={{ opacity: 0, height: 0 }}transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden';
          >;
            <div className='px-4 py-6 space-y-4'>;
          <motion&& motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden'
           />
            <div className=px-4 py-6 space-y-4 />

      {/* Mobile Menu *}
}
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}

            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden'
              />
            <div className='px-4 py-6 space-y-4'    />

              {/* Mobile Navigation Items */}
              {navigationItems.map(item => (<div key={item.nam}
}    />;
                  {item.hasDropdown ? (<div    />;
                      <button;
onClick={() =    />;}
                          setActiveDropdown(activeDropdown === item.name ? null : item.name;}
                          )}
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50';
                        <span    />{item.name}</span>;
                        <ChevronDown;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                        />;
                      </button>;
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
<<<<<<< HEAD



                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}

                          transition={{ duration: 0.2 }}
                          className='ml-4 mt-2 space-y-2'


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



                        >
                          {item.dropdownItems?.map(dropdownItem => (
<<<<<<< HEAD



=======
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className='ml-4 mt-2 space-y-2'

                        >
                          {item.dropdownItems?.map(dropdownItem => (
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300'
                              onClick={() => setIsOpen(false)}
                            >
                              <div
<<<<<<< HEAD



                          transition={{ duration: 0.2 }}

=======
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                              >
                                <dropdownItem.icon className='w-4 h-4 text-white' />
                              </div>

                          transition={{ duration: 0.2 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          className="ml-4 mt-2 space-y-2"
                        >
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem.name}                        >
                          {item.dropdownItems?.map((dropdownItem) => (
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                        <motion.div />;
                      </button>;
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div
}
transition={{ "duration": 0.2 }}

className='ml-4 mt-2 space-y-2''
                        >
                          {item.dropdownItems?.map(dropdownItem => (
                          }
                          transition={{ "duration": 0 && 0.2 
}

                          className='ml-4 mt-2 space-y-2'>;'
                          {item && item.dropdownItems?.map(dropdownItem => { return (<Link; }
                              }
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className='flex items-center space-x-3 p-3 rounded-lg "hover":bg-gray-800/50 transition-all duration-300';'
                              onClick={() => setIsOpen(false)}
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center`}>;
                                <dropdownItem && dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem && dropdownItem.name}                        >;
                          {item && item.dropdownItems?.map((dropdownItem) => (;
                            <Link
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />

<<<<<<< HEAD
=======
                      {activeDropdown === item && item.name && (;}
                        <motion&& motion.div;}
transition={{ duration: 0.2 }}

className='ml-4 mt-2 space-y-2'
                            />
                          {item.dropdownItems?.map(dropdownItem => (}
                          transition={{ duration: 0 && 0.2 }
}

                          className='ml-4 mt-2 space-y-2'>;
                          {item && item.dropdownItems?.map(dropdownItem => (<Link;}
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300';
                              onClick={() =    /> setIsOpen(false)}

                            >
                              <div;
className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                                  />
                                <dropdownItem.icon className='w-4 h-4 text-white'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                              </div>
                              <span className='text-gray-300 hover: text-white transition-colors'    />
                                {dropdownItem.name}
                              </span>
                            </Link>

<<<<<<< HEAD



                          ))}

                        </motion && motion.div>;
                      )}
                    </div>;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  ) : (;
                    <Link;
href={item.href}
className='block text-gray-300 hover: text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
                      onClick={() =    /> setIsOpen(false)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    >


<<<<<<< HEAD
                      {item.nam}
}
                    </Link>;
                  )}
                </div>;
              ))}{/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'    />;
                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <Phone className='w-4 h-4 text-cyan-400'    />;
                  <span    />{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <Mail className='w-4 h-4 text-purple-400'    />;
                  <span    />{contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <MapPin className='w-4 h-4 text-green-400'    />;
                  <span className='text-sm'    />{contactInfo.address}</span>                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt-4'    />                  <span    />{contactInfo.mobile}</span>>




              {/* Mobile Contact Info */}
                  <span>{contactInfo.mobile}</span>;

                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>


              <div className='pt-6 border-t border-gray-700/50 space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;

                  <span>{contactInfo && contactInfo.mobile}</span>;

=======
              {/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Phone className='w-4 h-4 text-cyan-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>{contactInfo.mobile}</span>
                </div>'
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <Mail className='w-4 h-4 text-purple-400' />
                  <span>{contactInfo.email}</span>
                </div>'
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <MapPin className='w-4 h-4 text-green-400' />'
                  <span className='text-sm'>{contactInfo.address}</span>                </div>
              </div>
              {/* Mobile CTA */}'
              <div className='pt-4'>                  <span>{contactInfo.mobile}</span>
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Contact Info */}
                  <span>{contactInfo.mobile}</span>
                      onClick={() => setIsOpen(false)}
                    >;
                      {item && item.name}
                    <Link;
href={item.href}
className='block text-gray-300 hover: text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
                      onClick={() = /> setIsOpen(false)}

                    >
                  ) : (<Link;
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}href={item.href}
className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50';
                      onClick={() => setIsOpen(false)}>;
                      {item.name}
                    </Link>;
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4 text-green-400" />"
                  <span className="text-sm">{contactInfo.address}</span>
                  <span className='text-sm'>{contactInfo.address}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div className='flex items-center space-x-3 text-gray-300' />
                  <MapPin className='w-4 h-4 text-green-400' />


                  <span>{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300>
                  <Mail className=w-4 h-4 text-purple-400' />
                  <span>{contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300>
                  <MapPin className=w-4 h-4 text-green-400' />
                  <span className='text-sm>{contactInfo.address}</span>                </div>
              </div>
              {/* Mobile CTA */}
              <div className=pt-4'>                  <span>{contactInfo.mobile}</span>
                    </div>
                  ) : (
                    <Link


              {/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'    />
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Phone className='w-4 h-4 text-cyan-400'    />
                  <span    />{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Mail className='w-4 h-4 text-purple-400'    />
                  <span    />{contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <MapPin className='w-4 h-4 text-green-400'    />

                  <span className='text-sm'    />{contactInfo.address}</span>
                </div>
              </div>

              <div className='pt-6 border-t border-gray-700/50 space-y-3'    />;
                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <Phone className='w-4 h-4 text-cyan-400'    />;
                  <span    />{contactInfo && contactInfo.mobile}</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <Mail className='w-4 h-4 text-purple-400'    />;
                  <span    />{contactInfo && contactInfo.email}</span>;
                </div>;
<<<<<<< HEAD

              {/* Mobile CTA */}

      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}'
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden';
          >;'
            <div className='px - 4 py - 6 space - y-4'>;
              {/* Mobile Navigation Items */}
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.has_dropdown ? (
                    <div>;
                      <button          >;"
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
                        }'
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50';
                        <span>{item.name}</span>;
                        <ChevronDown;`
                          className={`w - 4 h - 4 transition - transform duration - 300 ${'
                            active_dropdown === item.name ? 'rotate - 180' : '';`
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, coordinate_y: -10 }}
                          animate={{ opacity: 1, coordinate_y: 0 }}
                          exit={{ opacity: 0, coordinate_y: -10 }}
                          transition={{ duration: 0.2 }}'
                          className='ml - 4 mt - 2 space - y-2';
                        >;
                          {item.dropdown_items?.map (dropdown_item => (
                            <Link;
      <AnimatePresence>;
        {is_open && (<motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
      <AnimatePresence>;
        {is_open && (<motion.div;
            }
            initial={{ "opacity": 0, "height": 0 

=======
                <div className='flex items-center space-x-3 text-gray-300'>;'
                  <MapPin className='w-4 h-4 text-green-400' />;'
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>;
              </div>;

                <div className='flex items-center space-x-3 text-gray-300'    />;
                  <MapPin className='w-4 h-4 text-green-400'    />;
                  <span className='text-sm'    />{contactInfo && contactInfo.address}</span>                </div>;
              </div>;
      {/* Mobile Menu */}
      <AnimatePresence    />;
        {is_open && (<motion.div;}
            initial={{ opacity: 0, height: 0 }
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
            animate={{ opacity: 1, height: 'auto' }
}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }
}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden'    />

<<<<<<< HEAD

            <div className='px - 4 py - 6 space - y-4'    />;
              {/* Mobile Navigation Items */}
              {navigation_items.map (item => (                <div key={item.name}    />;
                  {item.has_dropdown ? (<div    />;
                      <button              />;}"
            <div className=\"px - 4 py - 6 space - y-4\"    />;}

=======
              {/* Mobile Navigation Items */}
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.has_dropdown ? (<div>;
                      <button          >;

>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Mobile Navigation Items */}
              {navigation_items.map ((item) => (<div key={item.name}    />;
                  {item.has_dropdown ? (<div    />;
                      <button;}
                        on_click={() =    />;}
                          setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50';
                        <span    />{item.name}</span>;
                        <ChevronDown;
<<<<<<< HEAD

                          className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === item.name ? 'rotate - 180' : '';}
                          }`}
                           />;
                      </button>;
                      {active_dropdown === item.name && (<motion.div;}
                          initial={{ opacity: 0, coordinate_y: -10 }
}
                          animate={{ opacity: 1, coordinate_y: 0 }
}
                          exit={{ opacity: 0, coordinate_y: -10 }}
                          transition={{ duration: 0.2 }
}
                          className='ml - 4 mt - 2 space - y-2'    />

                          {item.dropdown_items?.map (dropdown_item => (<Link;}
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300';
                              on_click={() =    /> setIsOpen (false)}
=======
                          className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (<motion.div;
                          initial={{ opacity: 0, coordinate_y: -10 }}
                          animate={{ opacity: 1, coordinate_y: 0 }}
                          exit={{ opacity: 0, coordinate_y: -10 }}
                          transition={{ duration: 0.2 }}
                          className='ml - 4 mt - 2 space - y-2';
                        >;
                          {item.dropdown_items?.map (dropdown_item => (<Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}'
                              className=flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300;
                              on_click={() => setIsOpen (false)}
                            >;
                              <div;`
                                className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}
                              >;'
                                <dropdown_item.icon className='w - 4 h - 4 text - white' />;
                              </div>;'
                              <span className='text - gray - 300 hover:text - white transition - colors'>                                {dropdown_item.name}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}'
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300';
                              on_click={() => setIsOpen (false)}
                            >;`
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}>;"
                                <dropdown_item.icon className="w - 4 h - 4 text - white" />;
                              </div>;"
                              <span className="text - gray - 300 hover:text - white transition - colors">;
                              <span className='text - gray - 300 hover:text - white transition - colors'>                                {dropdown_item.name}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (<Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className='flex items - center space - x-3 p - 3 rounded - lg 'hover':bg - gray - 800 / 50 transition - all duration - 300';'
                              on_click={() => setIsOpen (false)}
                            >;
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}>;
                                <dropdown_item.icon className="w - 4 h - 4 text - white" />;
                              </div>;
                              <span className="text - gray - 300 hover:text - white transition - colors">;
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`} />
"
                                <dropdown_item.icon className=\"w - 4 h - 4 text - white\" />;
                              </div>;"
                              <span className=\"text - gray - 300 hover:text - white transition - colors\" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            >;
                              <div;
                                className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}    />

                                <dropdown_item.icon className='w - 4 h - 4 text - white'    />;
                              </div>;
                              <span className='text - gray - 300 hover: text - white transition - colors'    />                                {dropdown_item.nam}
}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (<Link;}
                              key={dropdown_item.name}
                              href={dropdown_item.href}"
                              className=\'flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300\';
                              on_click={() =    /> setIsOpen (false)}
                            >;
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}    />
"
                                <dropdown_item.icon className=\"w - 4 h - 4 text - white\"    />;
                              </div>;"
                              <span className=\"text - gray - 300 hover:text - white transition - colors\"    />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                                {dropdown_item.name}
                              </span>;
                            </Link>))}
                        </motion.div>)}
                    </div>) : (<Link;
                      href={item.href}
<<<<<<< HEAD

                      className='block text - gray - 300 hover: text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() =    /> setIsOpen (false}"
}                      className=\'block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50\';

=======
                      className='block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() => setIsOpen (false)}                      className="block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50";
                    </div>) : (
                    <Link;
                      href={item.href}'"
                      className='block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() => setIsOpen (false)}                      className="block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50";
                    </div>) : (<Link;
                      href={item.href}
                      className='block text - gray - 300 hover: text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() = /> setIsOpen (false;}"
}                      className=\"block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50\";
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      on_click={() => setIsOpen (false)}
                    >;
                      {item.name}
                    </Link>)}
                </div>))}
<<<<<<< HEAD


                  Get Started;
                </Link>;
              </div>;
            </div>;

              {/* Mobile Contact Info */}
              <div className='pt - 6 border - t border - gray - 700 / 50 space - y-3'    />;
                <div className='flex items - center space - x-3 text - gray - 300'    />;
                  <Phone className='w - 4 h - 4 text - cyan - 400'    />;
                  <span    />{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'    />;
                  <Mail className='w - 4 h - 4 text - purple - 400'    />;
                  <span    />{contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'    />;
                  <MapPin className='w - 4 h - 4 text - green - 400'    />;
                  <span className='text - sm'    />{contact_info.address}</span>                </div>;
              </div>;

              {/* Mobile CTA */}

<div className='pt-4'    />
                <Link;
href='/contact'
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover: from-cyan-600 hover:to-purple-700 transition-all duration-300'

                  onClick={() =    /> setIsOpen(false}
}
                >;
                  <Rocket className='w-5 h-5 inline mr-2'    />;

                  Get Started;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}



              <div className="pt-4">
=======
              {/* Mobile Contact Info */}'
              <div className='pt - 6 border - t border - gray - 700 / 50 space - y-3'>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span>{contact_info.mobile}</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <MapPin className='w - 4 h - 4 text - green - 400' />;'
                  <span className='text - sm'>{contact_info.address}</span>                </div>;
              </div>;
              {/* Mobile CTA */}'
              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
              {/* Mobile CTA */}<div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <MapPin className='w - 4 h - 4 text - green - 400' />;
                  <span className='text - sm'>{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt - 4'>;
              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span>{contact_info.email}</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <MapPin className='w - 4 h - 4 text - green - 400' />;'
                  <span className='text - sm'>{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Mobile CTA */}'
              <div className='pt - 4'>;
                <Link;'
                  href='/contact';'
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300';
                  on_click={() => setIsOpen (false)}
                >;'
                  <Rocket className='w - 5 h - 5 inline mr - 2' />                  Get Started                <Link;'
                  href='/contact';'
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300';
                  on_click={() => setIsOpen (false)}
                >;"
                  <Rocket className="w - 5 h - 5 inline mr - 2" />;

<div className='pt-4'>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Link
                  href='/contact'
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
<div className='pt-4'>
                <Link
                  href=/contact
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className='w-5 h-5 inline mr-2' />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>

<<<<<<< HEAD

=======
        )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      </AnimatePresence>;
    </nav>;
  );
}

  );
}

  );

<<<<<<< HEAD



=======
        )}
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </AnimatePresence>
    </nav>
);
  );
}

<<<<<<< HEAD




=======
}
}
}
}
}
  );
}

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
