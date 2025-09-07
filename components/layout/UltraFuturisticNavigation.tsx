import React, { useState, useEffect } from 'react',
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react';
interface UltraFuturisticNavigationProps {
<<<<<<< HEAD
  className?: string}
=======
window.addEventListener ('scroll', handleScroll)
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
const navigationItems = [ {
  name: 'Services', href: '/services', hasDropdown: true, dropdownItems: [ {
  name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' 
}
{
  name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' 
}
{
  name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' 
}
{
  name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' 
}
{
  name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' 
}] 
}
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-500 $ {
  isScrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' > <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl" > <Rocket className="w-7 h-7 text-white" /> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400 -mt-1" >Revolutionary Technology</div> </div> </motion.div> <div onMouseEnter= {
  () => setActiveDropdown (item.name) 
}onMouseLeave= {
  () => setActiveDropdown (null) 
}> </button> {
  /* Dropdown Menu */ 
}<AnimatePresence>) 
}</div> </a>) ) 
}</div> </div> </motion.div>) 
}</AnimatePresence> </div>) : (<Link) 
}</div>) ) 
}</div> </div> </div> {
  /* CTA Button */ 
}<motion.div whileHover= {
  {
  scale: 1.05 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}
=======
  className?: string
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
export default function UltraFuturisticNavigation({ className = '' }: UltraFuturisticNavigationProps) {
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Services'
      href: '/services'
      hasDropdown: true
      dropdownItems: [
{
          name: 'AI & Machine Learning',
          href: '/services/ai-ml',
          icon: Brain,
          color: 'from-purple-500 to-pink-600',
        },
        {
          name: 'Quantum Computing'
=======
'
export default function UltraFuturisticNavigation() { return null; }
  useEffect(() => {}
    const handleScroll = () => {}
      setIsScrolled(window.scrollY > 20);
    }'
    window.addEventListener('scroll', handleScroll);'
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 20)
    }'
    window.addEventListener('scroll', handleScroll);'
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = []
    {'
      name: 'Services''
      href: '/services'
      hasDropdown: true;
      dropdownItems: []
        {'
          name: 'AI & Machine Learning''
          href: '/services/ai-ml'
          icon: Brain'
          color: 'from-purple-500 to-pink-600'
        }
        {'
          name: 'Quantum Computing''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          href: '/services/quantum'
          icon: Atom'
          color: 'from-cyan-500 to-blue-600'
        }
        {'
          name: 'Cybersecurity''
          href: '/services/cybersecurity'
          icon: Shield'
          color: 'from-red-500 to-pink-600'
        }
        {'
          name: 'IT Solutions''
          href: '/services/it-solutions'
          icon: Rocket'
          color: 'from-green-500 to-emerald-600'
        }
        {'
    { name: 'Pricing', href: '/pricing' },  ];        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },'
        { name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },'
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },'
        { name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },'
        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ]
    };'
    { name: 'Solutions', href: '/solutions' },'
    { name: 'About', href: '/about' },'
    { name: 'Contact', href: '/contact' },'
    { name: 'Pricing', href: '/pricing' }'
    { name: 'Pricing', href: '/pricing' },  ];

          name: 'View All Services',
          href: '/services',
          icon: Rocket,
          color: 'from-gray-500 to-gray-600',
        },
      ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
<<<<<<< HEAD
    { name: 'Pricing', href: '/pricing' }
  ],

  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },

<<<<<<< HEAD
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (
=======
      { name: 'Pricing'}
  href: '/pricing'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
=======
    { name: 'Pricing', href: '/pricing' },
origin/cursor/automate-test-improve-and-merge-code-2533
  ];

<<<<<<< HEAD
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
address: '364 E Main St STE 1008 Middletown DE 19709',
  };

    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (

        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
origin/cursor/automate-test-improve-and-merge-code-2533
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
=======
  const contactInfo = {'
    mobile: '+1 302 464 0950''
    email: 'kleber@ziontechgroup.com''
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
    >'
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>'
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (

    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${}
      isScrolled'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
<<<<<<< HEAD
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
const [activeDropdown, setActiveDropdown] = useState<string | null />(null);

const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null />(null);

        { name: 'View All Services';}
  href: '/services';, icon: Rocket;, color: 'from-gray-500 to-gray-600';}
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

        { name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
        {{ name: 'Pricing', href: '/pricing' },  ];        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },{ name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },{ name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },{ name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },{ name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
        {{ name: 'Pricing', href: '/pricing' },  ];        { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' },{ name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' },{ name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },{ name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' },{ name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ];
<<<<<<< HEAD
    }{ name: 'Solutions', href: '/solutions' },{ name: 'About', href: '/about' },{ name: 'Contact', href: '/contact' },{ name: 'Pricing', href: '/pricing' }
    { name: 'Pricing', href: '/pricing' },  ];name: 'View All Services',href: '/services',icon: Rocket,color: 'from-gray-500 to-gray-600',},],},{ name: 'Solutions', href: '/solutions' },{ name: 'About', href: '/about' },{ name: 'Contact', href: '/contact' },{ name: 'Pricing', href: '/pricing' },];const contactInfo = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',}>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
<<<<<<< HEAD
          {/* Logo */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6 }}
            className='flex items-center space-x-3'
=======
    }  { name: 'Solutions';}
  href: '/solutions';}
},
  { name: 'About';}
  href: '/about';}
},
  { name: 'Contact';}
  href: '/contact';}
},
{ name: 'Pricing';}
  href: '/pricing';}
}
      { name: 'Pricing';}
  href: '/pricing';}
}
  ];name: 'View All Services';,
  href: '/services';,icon: Rocket;,color: 'from-gray-500 to-gray-600';}]},  { name: 'Solutions';}
  href: '/solutions';}
},
  { name: 'About';}
  href: '/about';}
},
  { name: 'Contact';}
  href: '/contact';}
},
  { name: 'Pricing';}
  href: '/pricing';}
}
];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const contactInfo = {mobile: '+1 302 464 0950';}
  email: 'kleber@ziontechgroup.com';,address: '364 E Main St STE 1008 Middletown DE 19709';}>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' />;

<<<<<<< HEAD
    >;'
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;'
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (`
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${}
      isScrolled '
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' '
        : 'bg-transparent'`
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="flex items-center justify-between h-20">
          <motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}'
            className='flex items-center space-x-3'


<<<<<<< HEAD
=======
        <div className = 'flex items-center justify-between h-20' />          {/* Logo */} ;
  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' }
        : 'bg-transparent'}
    } ${className}`} />
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\" />"
        <div className=\"flex items-center justify-between h-20\" />
          <motion.div;
initial={{ opacity: 0;, x: -20 ;}
}
            animate={{ opacity: 1;, x: 0 ;}}
            transition={{ duration: 0.6 ;}}
            className='flex items-center space-x-3'


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
className='flex items-center space-x-3'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>
=======
          >'
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Rocket className='w-7 h-7 text-white' />
            </div>
            <div>'
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                Zion Tech Group;
              </div>'
              <div className='text-xs text-gray-400 -mt-1'>
<<<<<<< HEAD
                Revolutionary Technology;
=======
                Revolutionary Technology
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>            </div>
          </motion.div>
          {/* Desktop Navigation */}'
          <div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => ('
              <div key={item.name} className='relative group'>                {item.hasDropdown ? (          >'
        : 'bg-transparent'`
    } ${className}`}>;"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="flex items-center justify-between h-20">;
<<<<<<< HEAD
          <motion&& motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}"
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">"
=======
          <motion&& motion.div
            initial={{ opacity: 0;, x: -20 ;}}
            animate={{ opacity: 1;, x: 0 ;}}
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>"
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
<<<<<<< HEAD
                Zion Tech Group
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
=======
                Zion Tech Group;
              </div>"
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>
          </motion.div>
<<<<<<< HEAD
            transition={{ duration: 0 && 0.6 }}'
            className='flex items-center space-x-3'>;'
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;'
=======
            transition={{ duration: 0 && 0.6 ;}}
            className='flex items-center space-x-3'>;
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Rocket className='w-7 h-7 text-white' />;
            </div>;
            <div>;'
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4


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
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (<div className='flex items-center justify-between h-20'>;
          {/* Logo */}<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl';
  const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null){ name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' }
      ];
    }{ name: 'Solutions', href: '/solutions' },{ name: 'About', href: '/about' },{ name: 'Contact', href: '/contact' },{ name: 'Pricing', href: '/pricing' }>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex items-center justify-between h-20'>          {/* Logo */}  return (<navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled;
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl';
        : 'bg-transparent';
    } ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-20">;
          <motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}className='flex items-center space-x-3';
className='flex items-center space-x-3';
          >;
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>;
              <Rocket className='w-7 h-7 text-white' />;
            </div>;
            <div>;
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                Zion Tech Group;
<<<<<<< HEAD
              </div>;
              <div className='text-xs text-gray-400 -mt-1'>;
                Revolutionary Technology;
              </div>            </div>;
          </motion.div>;
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
=======
<<<<<<< HEAD
              </div>;'
              <div className='text-xs text-gray-400 -mt-1'>;
=======
              </div>
              <div className='text-xs text-gray-400 -mt-1' />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Revolutionary Technology;
              </div>            </div>;
          </motion && motion.div>;"
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => ("
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  >;'
                    <button className='flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'>;
                      <span>{item && item.name}</span>;'
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                    </button>                      <span>{item && item.name}</span>;"
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />;
                    </button>;
          {/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => (
              <div key={item.name} className='relative group'>
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
              <div className="text-xs text-gray-400 -mt-1">Revolutionary Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD
              </div>            </div>
          </motion.div>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => (
              <div key={item.name} className='relative group'>                {item.hasDropdown ? (          >
        : 'bg-transparent'
    } ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex items-center justify-between h-20">;
          <motion&& motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
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
=======
                  >
<button className='flex items-center space-x-1 text-gray-300 hover: text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50' />
                      <span />{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />
                    </button>
origin/cursor/automate-test-improve-and-merge-code-2533
                    {/* Dropdown Menu */}
                    <AnimatePresence>;
                      {activeDropdown === item && item.name && (;
<<<<<<< HEAD
                        <motion&& motion.div;
                          initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}'
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'>;'
                          <div className='p-4'>;'
=======
                        <motion&& motion.div
                          initial={{ opacity: 0;, y: 10;, scale: 0 && 0.95 ;}}
                          animate={{ opacity: 1;, y: 0;, scale: 1 ;}}
                          exit={{ opacity: 0;, y: 10;, scale: 0 && 0.95 ;}}
                          transition={{ duration: 0 && 0.2 ;}}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'>;
                          <div className='p-4'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                                  <div;`
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;'
=======
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item: scale-110 transition-transform duration-300`;}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                                      </div>                                    )}                                >;`
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>;"
=======
                                      </div>                                    )}                                >;
                                  <div className={`w-10 h-10 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item: scale-110 transition-transform duration-300`;}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                    <dropdownItem && dropdownItem.icon className="w-5 h-5 text-white" />;
                                  </div>;
                                  <div>;"
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">;
                                      {dropdownItem && dropdownItem.name}
                                    </div>;'
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;"
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>;
<<<<<<< HEAD
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden'
                        >
                          <div className='p-4'>
                            <div className='grid gap-3'>
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
=======

                    {/* Dropdown Menu *}
}
                    <AnimatePresence />;
                      {activeDropdown === item && item.name && (<motion&& motion.div;}
                          initial={{ opacity: 0;, y: 10;, scale: 0 && 0.95 ;}
}

                          animate={{ opacity: 1;, y: 0;, scale: 1 ;}
}

                          exit={{ opacity: 0;, y: 10;, scale: 0.95 ;}}

                          transition={{ duration: 0.2 ;}
}
className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden' />

                          <div className='p-4' />;
                            <div className='grid gap-3' />;
                              {item.dropdownItems?.map((dropdownItem, idx) => (<Link;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item';
                                >;
                                  <div;
<<<<<<< HEAD
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                                  >;
=======
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item: scale-110 transition-transform duration-300;
} />

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                    <dropdownItem.icon className='w-5 h-5 text-white' />;
                                  </div>;
                                  <div>;
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>;
                                      {dropdownItem.name}
                                    </div>;
                                    {dropdownItem.name ===;
                                      'View All Services' && (<div className='text-xs text-gray-400'>;
                                        Explore our complete portfolio;
                                      </div>;
                                    )}
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>;
                                </Link>
                                  </div>;
                                </Link>;
                  >
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50">
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
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid gap-3">
                              {item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item"
                                >
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
origin/cursor/automate-test-improve-and-merge-code-2533
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
<<<<<<< HEAD
                  <Link
=======
<<<<<<< HEAD
                  <Link
                    href={item.href}
className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  >
                    {item.name}
                  </Link>
                  <Link;
href={item.href}
className='text-gray-300 hover: text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'
                   />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

                    href={item.href}
className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'

<<<<<<< HEAD
                  >
                    </AnimatePresence>;
                  </div>;
                ) : (<Link;
                    href={item.href}
className='text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50';
                  >;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  >
=======
<<<<<<< HEAD
                    href={item.href}"
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                  >'
                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden';
                        >;'
                          <div className='p - 4'>;'
                            <div className='grid gap - 3'>                              {item.dropdown_items?.map ((dropdown_item, idx) => (
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}'"
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item'                          className="absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden";
                        >;"
                          <div className="p - 4">;"
                            <div className="grid gap - 3">;
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}'
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item';
                                >;
                                  <div;`
                                    className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item:scale - 110 transition - transform duration - 300`}
                                  >;'
                                    <dropdown_item.icon className='w - 5 h - 5 text - white' />;
                                  </div>;
                                  <div>;'
                                    <div className='text - white font - medium group - hover / item:text - cyan - 300 transition - colors'>;
                                      {dropdown_item.name}
                                    </div>;
                                    {dropdown_item.name ===;'
                                      'View All Services' && ('
                                      <div className='text - xs text - gray - 400'>;
                                        Explore our complete portfolio;
                                      </div>                                    )}                                >;`
                                  <div className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item:scale - 110 transition - transform duration - 300`}>;"
                                    <dropdown_item.icon className="w - 5 h - 5 text - white" />;
                                  </div>;
                                  <div>;"
                                    <div className="text - white font - medium group - hover / item:text - cyan - 300 transition - colors">;
                                      {dropdown_item.name}
                                    </div>;'
                                    {dropdown_item.name === 'View All Services' && ("
                                      <div className="text - xs text - gray - 400">Explore our complete portfolio</div>)}
=======
                          className='absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden'>

                          <div className='p - 4' />;
                            <div className='grid gap - 3' />                              {item.dropdown_items?.map ((dropdown_item, idx) => (<Link;}
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}"
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item'                          className=\"absolute top - full left - 0 mt - 2 w - 80 bg - gray - 900 / 95 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl shadow - 2xl overflow - hidden\" />
"
                          <div className=\"p - 4\" />;"
                            <div className=\"grid gap - 3\" />;
                                <Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 300 group / item' />

                                  <div;
                                    className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item: scale - 110 transition - transform duration - 300;
} />

                                    <dropdown_item.icon className='w - 5 h - 5 text - white' />;
                                  </div>;
                                  <div />;
                                    <div className='text - white font - medium group - hover / item:text - cyan - 300 transition - colors' />;
                                      {dropdown_item.name}
                                    </div>;
                                    {dropdown_item.name ===;
                                      'View All Services' && (<div className='text - xs text - gray - 400' />;
                                        Explore our complete portfolio;
    </div>}
  );}
}                                >;
                                  <div className={`w - 10 h - 10 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center group - hover / item: scale - 110 transition - transform duration - 300;
} />
"
                                    <dropdown_item.icon className=\"w - 5 h - 5 text - white\" />;
                                  </div>;
                                  <div />;"
                                    <div className=\"text - white font - medium group - hover / item:text - cyan - 300 transition - colors\" />;
                                      {dropdown_item.name}
                                    </div>;"
                                    {dropdown_item.name === 'View All Services' && (<div className=\"text - xs text - gray - 400\" />Explore our complete portfolio</div>)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                  </div>;
                                </Link>))}
                            </div>;
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;
<<<<<<< HEAD
                  </div>) : (
                  <Link;
                    href={item.href}'"
                    className='text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50'                  >                    className="text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50";
                  >;
=======
                  </div>) : (<Link;
                    href={item.href}"
                    className='text - gray - 300 hover: text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50'                   />                    className=\"text - gray - 300 hover:text - white transition - colors duration - 300 py - 2 px - 3 rounded - lg hover:bg - gray - 800 / 50\">

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {item.name}
                  </Link>
                )}
<<<<<<< HEAD
          {/* Contact Info & CTA */}{/* Contact Info */}
          {/* Contact Info & CTA */}
<<<<<<< HEAD
            {/* Contact Info */}
          {/* Contact Info & CTA */}{/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <div className='flex items-center space-x-2'>;
                <Phone className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.mobile}</span>          <div className="hidden lg:flex items-center space-x-6">;
            {/* Contact Info */}{/* CTA Button */}<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>;
              <Link;
                href='/contact';
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'>;
                <Rocket className='w-4 h-4 mr-2' />                Get Started              <Link;
                href="/contact";
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>;{/* Mobile Menu Button */}
          <div className="lg:hidden">;
<div className='hidden lg:flex items-center space-x-6'>;
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <div className='flex items-center space-x-2'>;
=======
<<<<<<< HEAD
            {/* Contact Info */}'
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;'
              <div className='flex items-center space-x-2'>;'"
=======
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <div className='flex items-center space-x-2'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Phone className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.mobile}</span>          <div className="hidden lg:flex items-center space-x-6">;
            {/* Contact Info */}

<div className='hidden lg: flex items-center space-x-6' />

            {/* Contact Info *}
}
            <div className='flex items-center space-x-4 text-sm text-gray-300' />;
              <div className='flex items-center space-x-2' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <Phone className='w-4 h-4 text-cyan-400' />;
                <span>{contactInfo.mobile}</span>;
              </div>;
            </div>;
            {/* CTA Button */}
<<<<<<< HEAD
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>;
=======
<motion.div whileHover={{ scale: 1.05 ;}} whileTap={{ scale: 0.95 ;}
} />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <Link;
                href='/contact';
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30';
              >;
                <Rocket className='w-4 h-4 mr-2' />;
                Get Started;
              </Link>;
            </motion.div>;
          </div>;
          {/* Mobile Menu Button */}
          <div className='lg:hidden'>;

<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
              </div>
            ))}
          </div>

=======
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
              <Link'
                href='/contact''
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'>;'
                <Rocket className='w-4 h-4 mr-2' />                Get Started              <Link"
                href="/contact"
          {/* Mobile Menu Button */}'
          <div className='lg:hidden'>;

          {/* Mobile Menu Button */}"
          <div className="lg:hidden">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
            <button;
              onClick={() => setIsOpen(!isOpen)}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<div className='lg: hidden' />
            <button;
onClick={() = /> setIsOpen(!isOpen)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className='text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
              ) : ('
                <Menu className='w-6 h-6' />
<<<<<<< HEAD
              )}            </button>            <button;
              onClick={() => setIsOpen(!isOpen)}"
=======
              )}            </button>            <button
              onClick={() => setIsOpen(!isOpen)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
=======
                <Menu className='w-6 h-6' />}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              )}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
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
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </div>;


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}

            exit={{ opacity: 0, height: 0}}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            exit={{ opacity: 0, height: 0 }}transition={{ duration: 0.3 }}
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden';
          >;
            <div className='px-4 py-6 space-y-4'>;
=======
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
<<<<<<< HEAD
          <motion&& motion.div;
            initial={{ opacity: 0, height: 0 }}'
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
=======
          <motion&& motion.div
            initial={{ opacity: 0;, height: 0 ;}}
            animate={{ opacity: 1;, height: 'auto' ;}}
            exit={{ opacity: 0;, height: 0 ;}}

      {/* Mobile Menu *}
}
      <AnimatePresence />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0;, height: 0 ;}
}
            animate={{ opacity: 1;, height: 'auto' ;}
}

            exit={{ opacity: 0;, height: 0 ;}}

            transition={{ duration: 0.3 ;}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden'
           />
            <div className='px-4 py-6 space-y-4' />

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {/* Mobile Navigation Items */}
              {navigationItems.map(item => (<div key={item.name}>;
                  {item.hasDropdown ? (<div>;
                      <button;
onClick={() =>;
                          setActiveDropdown(activeDropdown === item.name ? null : item.name;
                          )}
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50';
                        <span>{item.name}</span>;
                        <ChevronDown;
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : '';
                          }`}
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
<<<<<<< HEAD
                      
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0}}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}

                          className='ml-4 mt-2 space-y-2'

                        >
                          {item.dropdownItems?.map(dropdownItem => (
                          transition={{ duration: 0 && 0.2 }}
                        />;
                      </button>;
<<<<<<< HEAD
                      {activeDropdown === item.name && (<motion.div;
                        />;
                      </button>;{activeDropdown === item && item.name && (<motion&& motion.div;
                          transition={{ duration: 0.2 }}className='ml-4 mt-2 space-y-2';
className='ml-4 mt-2 space-y-2';
                        >;
                          {item.dropdownItems?.map(dropdownItem => (transition={{ duration: 0 && 0.2 }}
=======

<<<<<<< HEAD
                      {activeDropdown === item && item.name && (;
                        <motion&& motion.div;
                          transition={{ duration: 0.2 }}'
=======
                      {activeDropdown === item && item.name && (;}
                        <motion&& motion.div;}
transition={{ duration: 0.2 ;}}

                          transition={{ duration: 0.2 ;}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          className='ml-4 mt-2 space-y-2'

className='ml-4 mt-2 space-y-2'
origin/cursor/automate-test-improve-and-merge-code-2533
                        >
                          {item.dropdownItems?.map(dropdownItem => (
<<<<<<< HEAD
                          transition={{ duration: 0 && 0.2 }}'
                          className='ml-4 mt-2 space-y-2'>;
                          {item && item.dropdownItems?.map(dropdownItem => (;
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}'
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300'
                              onClick={() => setIsOpen(false)}
                            >
                              <div;`
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center`}>;'
                                <dropdownItem && dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;'
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem && dropdownItem.name}                        >;
=======
                          transition={{ duration: 0 && 0.2 ;}}
className='ml-4 mt-2 space-y-2'
                         />
                          {item.dropdownItems?.map(dropdownItem => (}
                          transition={{ duration: 0 && 0.2 ;}
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                          className='ml-4 mt-2 space-y-2'>;
                          {item && item.dropdownItems?.map(dropdownItem => (<Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300';
<<<<<<< HEAD
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
                              </span>
                            </Link>
                            >;
=======
                              onClick={() = /> setIsOpen(false)}

                            >
                              <div
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center`}>;
                                <dropdownItem && dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;
                              <span className='text-gray-300 hover: text-white transition-colors'>                                {dropdownItem && dropdownItem.name;}                        >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          {item && item.dropdownItems?.map((dropdownItem) => (;
                            <Link;
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}"
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                              >
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                              <div;
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem && dropdownItem.color} rounded-lg flex items-center justify-center`}>;
                                <dropdownItem && dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;
                              <span className='text-gray-300 hover:text-white transition-colors'>                                {dropdownItem && dropdownItem.name}                        >;
                          {item && item.dropdownItems?.map((dropdownItem) => (<Link;
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300";
                              onClick={() => setIsOpen(false)}className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                              >;
                                <dropdownItem.icon className='w-4 h-4 text-white' />;
                              </div>;
                              <span className='text-gray-300 hover:text-white transition-colors'>;
                                {dropdownItem.name}</span>;
                            </Link>;
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-300 hover:text-white transition-colors">
                                {dropdownItem.name}
origin/cursor/automate-test-improve-and-merge-code-2533
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}

<<<<<<< HEAD
                      onClick={() => setIsOpen(false)}
=======
                  ) : (;
<<<<<<< HEAD
                    <Link'
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}
=======
                    <Link
                      className='block text-gray-300 hover: text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false);}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                      href={item.href}
className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
origin/cursor/automate-test-improve-and-merge-code-2533
                      onClick={() => setIsOpen(false)}

                    >
                      {item.name}
                    </Link>
                  )}
                </div>;
              ))}


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
<<<<<<< HEAD
                </div>'
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <MapPin className='w-4 h-4 text-green-400' />'
=======
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <MapPin className='w-4 h-4 text-green-400' />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

                    >
                  ) : (<Link;
                      className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'                      onClick={() => setIsOpen(false)}href={item.href}
className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50';
                      onClick={() => setIsOpen(false)}>;
                      {item.name}
                    </Link>;
<<<<<<< HEAD
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4 text-green-400" />"
=======
                  )}
                </div>;
              ))}{/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <span>{contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-green-400' />;
                  <span className='text-sm'>{contactInfo.address}</span>                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className='pt-4'>                  <span>{contactInfo.mobile}</span>;
                    >;
                      {item.name}
                    </Link>;
                  )}
                </div>;
              ))}

              {/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3' />
                <div className='flex items-center space-x-3 text-gray-300' />
                  <Phone className='w-4 h-4 text-cyan-400' />
                  <span />{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300' />
                  <Mail className='w-4 h-4 text-purple-400' />
                  <span />{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <span className="text-sm">{contactInfo.address}</span>
                  <span className='text-sm'>{contactInfo.address}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div className='flex items-center space-x-3 text-gray-300' />
                  <MapPin className='w-4 h-4 text-green-400' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

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
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              {/* Mobile Contact Info */}
                  <span>{contactInfo.mobile}</span>;
                      onClick={() => setIsOpen(false)}
                    >;
                      {item && item.name}
                    </Link>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-4 h-4 text-purple-400" />;
                  <span>{contactInfo.email}</span>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <MapPin className="w-4 h-4 text-green-400" />;
                  <span className="text-sm">{contactInfo.address}</span>;
                  <span className='text-sm'>{contactInfo.address}</span>;
                </div>;
              </div>;
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-700/50 space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
<<<<<<< HEAD
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
<<<<<<< HEAD
              </div>'
              <div className='pt-6 border-t border-gray-700/50 space-y-3'>;'
                <div className='flex items-center space-x-3 text-gray-300'>;'
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>{contactInfo && contactInfo.mobile}</span>;
                </div>;'
                <div className='flex items-center space-x-3 text-gray-300'>;'
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <span>{contactInfo && contactInfo.email}</span>;
                </div>;'
                <div className='flex items-center space-x-3 text-gray-300'>;'
                  <MapPin className='w-4 h-4 text-green-400' />;'
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>;
              </div>;
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
=======
              </div>
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
      {/* Mobile Menu */}
<<<<<<< HEAD
      <AnimatePresence>;
        {is_open && (<motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
=======
      <AnimatePresence />;
        {is_open && (<motion.div;}
            initial={{ opacity: 0;, height: 0 ;}
}
            animate={{ opacity: 1;, height: 'auto' ;}
}
            exit={{ opacity: 0;, height: 0 ;}}
            transition={{ duration: 0.3 ;}
}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 700 / 50 overflow - hidden' />

            <div className='px - 4 py - 6 space - y-4' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {/* Mobile Navigation Items */}
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.has_dropdown ? (<div>;
                      <button          >;
            <div className="px - 4 py - 6 space - y-4">;
              {/* Mobile Navigation Items */}
              {navigation_items.map ((item) => (<div key={item.name}>;
                  {item.has_dropdown ? (<div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50';
                        <span>{item.name}</span>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 300 ${active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
<<<<<<< HEAD
                      {active_dropdown === item.name && (<motion.div;
                          initial={{ opacity: 0, coordinate_y: -10 }}
                          animate={{ opacity: 1, coordinate_y: 0 }}
                          exit={{ opacity: 0, coordinate_y: -10 }}
                          transition={{ duration: 0.2 }}
                          className='ml - 4 mt - 2 space - y-2';
                        >;
                          {item.dropdown_items?.map (dropdown_item => (<Link;
=======
                      {active_dropdown === item.name && (<motion.div;}
                          initial={{ opacity: 0;, coordinate_y: -10 ;}
}
                          animate={{ opacity: 1;, coordinate_y: 0 ;}
}
                          exit={{ opacity: 0;, coordinate_y: -10 ;}}
                          transition={{ duration: 0.2 ;}
}
                          className='ml - 4 mt - 2 space - y-2' />

                          {item.dropdown_items?.map (dropdown_item => (<Link;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                              key={dropdown_item.name}
                              href={dropdown_item.href}'
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300';
                              on_click={() => setIsOpen (false)}
                            >;
<<<<<<< HEAD
                              <div;`
                                className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}
                              >;'
                                <dropdown_item.icon className='w - 4 h - 4 text - white' />;
                              </div>;'
                              <span className='text - gray - 300 hover:text - white transition - colors'>                                {dropdown_item.name}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}"
                              className="flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300";
                              on_click={() => setIsOpen (false)}
                            >;`
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}>;"
                                <dropdown_item.icon className="w - 4 h - 4 text - white" />;
                              </div>;"
                              <span className="text - gray - 300 hover:text - white transition - colors">;
=======
                              <div;
                                className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}
                              >;
                                <dropdown_item.icon className='w - 4 h - 4 text - white' />;
                              </div>;
<<<<<<< HEAD
                              <span className='text - gray - 300 hover:text - white transition - colors'>                                {dropdown_item.name}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (<Link;
=======
                              <span className='text - gray - 300 hover: text - white transition - colors' />                                {dropdown_item.nam;}
}                        >;
                          {item.dropdown_items?.map ((dropdown_item) => (<Link;}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className="flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300";
                              on_click={() => setIsOpen (false)}
                            >;
<<<<<<< HEAD
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`}>;
                                <dropdown_item.icon className="w - 4 h - 4 text - white" />;
                              </div>;
                              <span className="text - gray - 300 hover:text - white transition - colors">;
=======
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Mail className='w-4 h-4 text-purple-400'    />
                  <span    />{contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <MapPin className='w-4 h-4 text-green-400'    />

                  <span className='text-sm'    />{contactInfo.address}</span>
                </div>

                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300'
                              on_click={() =    /> setIsOpen (false)}
                            >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
                              <div className={`w - 8 h - 8 bg - gradient - to - r ${dropdown_item.color} rounded - lg flex items - center justify - center`} />
"
                                <dropdown_item.icon className=\"w - 4 h - 4 text - white\" />;
                              </div>;"
                              <span className=\"text - gray - 300 hover:text - white transition - colors\" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                {dropdown_item.name}
                              </span>;
                            </Link>))}
                        </motion.div>)}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>) : (<Link;
                      href={item.href}
                      className='block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() => setIsOpen (false)}                      className="block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50";
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
                    </div>) : (
                    <Link;
                      href={item.href}'"
                      className='block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() => setIsOpen (false)}                      className="block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50";
=======
                    </div>) : (<Link;
                      href={item.href}
                      className='block text - gray - 300 hover: text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50'                      on_click={() = /> setIsOpen (false;}"
}                      className=\"block text - gray - 300 hover:text - white transition - colors duration - 300 py - 3 px - 4 rounded - lg hover:bg - gray - 800 / 50\";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      on_click={() => setIsOpen (false)}
                    >;
                      {item.name}
                    </Link>)}
                </div>))}
<<<<<<< HEAD
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
=======
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
              {/* Mobile CTA */}<div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
              {/* Mobile CTA */}
<<<<<<< HEAD
              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
              {/* Mobile CTA */}<div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>;
                </div>;"
                <div className="flex items - center space - x-3 text - gray - 300">;"
                  <Mail className="w - 4 h - 4 text - purple - 400" />;
                  <span>{contact_info.email}</span>;
                </div>;"
                <div className="flex items - center space - x-3 text - gray - 300">;"
                  <MapPin className="w - 4 h - 4 text - green - 400" />;"
                  <span className="text - sm">{contact_info.address}</span>;
                </div>;
              </div>;
              {/* Mobile CTA */}'
              <div className='pt - 4'>;
<<<<<<< HEAD
                <Link;'
                  href='/contact';'
                  className='block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300';
                  on_click={() => setIsOpen (false)}
                >;'
                  <Rocket className='w - 5 h - 5 inline mr - 2' />                  Get Started                <Link;"
                  href="/contact";"
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl font - medium hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                  on_click={() => setIsOpen (false)}
                >;"
                  <Rocket className="w - 5 h - 5 inline mr - 2" />;
=======

<div className='pt-4' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
                  Get Started;
                </Link>;
              </div>;
            </div>;
        )}
}</AnimatePresence>;
    </nav>;
  )})}
}))}
          </motion.div>)}
      </AnimatePresence>;
    </nav>)}<div className='pt-4'>;
                <Link;
                  href='/contact';
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300';
                  onClick={() => setIsOpen(false)}
                >;
                  <Rocket className='w-5 h-5 inline mr-2' />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </nav>;
  )}
    </nav>);
}
  )}

<<<<<<< HEAD
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
=======

      </AnimatePresence>;
    </nav>;
  );
}

  );
}
}

  );

  );
}
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
<div className='pt-4'>
                <Link
                  href='/contact'
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className='w-5 h-5 inline mr-2' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
