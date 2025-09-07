<<<<<<< HEAD
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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

=======

<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;
<<<<<<< HEAD
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

  Globe,;
  ChevronDown,;
} from 'lucide-react';
import Link from 'next/link';import { ;
  Menu, X, Home, Brain, Cpu, Rocket, ;
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';
import Link from 'next/link';


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { 
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown

<<<<<<< HEAD
 } from 'lucide-react';'
import Link from 'next/link';'
=======
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const "Navigation": React.FC = () => {

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
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
<<<<<<< HEAD
=======

        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' },
        { name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' }

      ]
    }
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Menu,
  X,
  Home,
  Brain,
  Cpu,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Globe,;
  ChevronDown,;
} from 'lucide-react';
<<<<<<< HEAD
import Link from 'next / link';import {
  Menu, X, Home, Brain, Cpu, Rocket,
 } from 'lucide-react';
import Link from 'next/link';
import { Menu, X, Home, Brain, Cpu, Rocket,import React, { useState, useEffect  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;Phone, Mail, MapPin, Globe, ChevronDown;
  } from 'lucide-react';
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';
    }
;
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      setIsScrolled (window.scroll_y > 50);
import Link from 'next/link';

const Navigation: React.FC = () => {
import Link from 'next/link';
=======
  Phone, Mail, MapPin, Globe, ChevronDown}
}
 } from 'lucide-react';
import Link from 'next/link';

const Navigation: React.FC = () => {

import Link from 'next/link';

const Navigation: React.FC;
>>>>>>> origin/chore/fix-lint-and-merge

origin/cursor/automate-test-improve-and-merge-code-2533
  Phone, Mail, MapPin, Globe, ChevronDown
 } from 'lucide-react';
import {}
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown';
} from 'lucide-react';'
import Link from 'next/link';
const Navigation: React.FC = () => {}
'
import Link from 'next/link';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const Navigation: React.FC;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
<<<<<<< HEAD

    const handleScroll = (
setIsScrolled(window.scrollY > 50)) => {
  return $3;}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

    const handleScroll = (
setIsScrolled(window.scrollY > 50)) => {
  return $3;}
}
};

<<<<<<< HEAD
=======
import Link from 'next/link';import { 
  Menu, X, Home, Brain, Cpu, Rocket, 
  Phone, Mail, MapPin, Globe, ChevronDown;
} from 'lucide-react';
import Link from 'next/link';

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [;
          name: 'IT Services',
          href: '/it - services',
          icon: Cpu,
          description: 'Enterprise IT solutions',
        },
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {
          name: 'Micro SaaS'
          href: '/micro-saas'
          icon: Rocket
          description: 'Specialized software solutions'
        }
        {
<<<<<<< HEAD
          name: 'Innovative Showcase',
          href: '/innovative - services - showcase',
          icon: Globe,
          description: 'Cutting - edge technology',
        },
      ],
    },
    {
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' },
        { name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' }
      ]
    };
    {
=======
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
<<<<<<< HEAD
      name: 'Solutions'
      href: '/solutions'
      icon: Cpu
    }
    {
      name: 'About'
      href: '/about'
      icon: Globe
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      name: 'Solutions',
      href: '/solutions',
      icon: Cpu
    };
    {
      name: 'About',
      href: '/about',
      icon: Globe
    };
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

<<<<<<< HEAD
=======

    window.addEventListener('scroll', handleScroll);
>>>>>>> origin/chore/fix-lint-and-merge
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    {
      name: 'Home',
  href: '/'}
icon: Home}
    },
    {
<<<<<<< HEAD
      name: 'Services'
    {'
      name: 'Services''
      href: '/services'
      icon: Rocket;
      dropdown: []
  Menu,
  X,
  Home,
  Brain,
  Cpu,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronDown,'
} from 'lucide-react';'
import Link from 'next / link';import {}
  Menu, X, Home, Brain, Cpu, Rocket,;
  Phone, Mail, MapPin, Globe, ChevronDown;'
} from 'lucide-react';
    }
;'
    window.addEventListener ('scroll', handle_scroll);'
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      setIsScrolled (window.scroll_y > 50);
    }
;'
    window.addEventListener ('scroll', handle_scroll);'
    return () => window.removeEventListener ('scroll', handle_scroll);
  const navigation_items = [;
    {'
      name: 'Home','
      href: '/',
      icon: Home,
    },    {      icon: Home;
    }
    {'
      name: 'Services','
      href: '/services',
      icon: Rocket,
      dropdown: [;
        {'
          name: 'AI Services','
          href: '/ai - services',
{
          name: 'AI Services',
          href: '/ai-services',
origin/cursor/automate-test-improve-and-merge-code-2533
          icon: Brain,
          description: 'Revolutionary AI solutions',
=======
      name: 'Services',
  href: '/services'
      icon: Rocket;
dropdown: [

{
          name: 'AI Services',
  href: '/ai-services',
          icon: Brain}
          description: 'Revolutionary AI solutions'}
>>>>>>> origin/chore/fix-lint-and-merge
        },
        {

          name: 'IT Services',
  href: '/it-services'
          icon: Cpu;}
description: 'Enterprise IT solutions'}
        }
        {
          name: 'Micro SaaS',
  href: '/micro-saas'
          icon: Rocket;
description: 'Specialized software solutions'}
       }
}
        {
          name: 'Innovative Showcase',
  href: '/innovative-services-showcase',
          icon: Globe}
          description: 'Cutting-edge technology'}
        }
      ]
    },
    {

      name: 'Solutions',
  href: '/solutions'}
      icon: Cpu}
    },
    {
      name: 'About',
  href: '/about'}
      icon: Globe}
    },
    {
      name: 'Contact',
  href: '/contact'}
      icon: Phone}
    }
  ];
<<<<<<< HEAD
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

      name: 'Solutions'
      href: '/solutions'
      icon: Cpu,    {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: Phone
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ];

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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <>;
import { Menu, X, Home, Brain, Cpu, Rocket,import React, { useState, useEffect  } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, Home, Brain, Cpu, Rocket;Phone, Mail, MapPin, Globe, ChevronDown;
  } from 'lucide-react';
  Phone, Mail, MapPin, Globe, ChevronDown;
 } from 'lucide-react';
const Navigation: React.FC = () => {const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown]  = useState<string | null>(null)const Navigation: React.FC;
  const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown] = useState<string | null>(null)useEffect(() => {const handleScroll = () => {setIsScrolled(window.scrollY > 50)}window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])const navigationItems = [;
    {name: 'Home',href: '/',icon: Home,},{name: 'Services';
      href: '/services';
      icon: Rocket;
      dropdown: [;
  Menu,X,Home,Brain,Cpu,Rocket,Phone,Mail,MapPin,Globe,ChevronDown,} from 'lucide-react';
import Link from 'next / link';import { Menu, X, Home, Brain, Cpu, Rocket,Phone, Mail, MapPin, Globe, ChevronDown;
 } from 'lucide-react';
    }window.addEventListener ('scroll', handle_scroll)return () => window.removeEventListener ('scroll', handle_scroll)}, [])setIsScrolled (window.scroll_y > 50)}window.addEventListener ('scroll', handle_scroll)return () => window.removeEventListener ('scroll', handle_scroll)const navigation_items = [;
    {name: 'Home',href: '/',icon: Home,},    {      icon: Home;
    }
    {name: 'Services',href: '/services',icon: Rocket,dropdown: [;
        {name: 'AI Services',href: '/ai - services',{name: 'AI Services',href: '/ai-services',icon: Brain,description: 'Revolutionary AI solutions',},{name: 'IT Services',href: '/it - services',icon: Cpu,description: 'Enterprise IT solutions',},{name: 'Micro SaaS',href: '/micro - saas',icon: Rocket,description: 'Specialized software solutions',},{name: 'Innovative Showcase',href: '/innovative - services - showcase',icon: Globe,description: 'Cutting - edge technology',name: 'IT Services';
          href: '/it-services';
          icon: Cpu;
          description: 'Enterprise IT solutions';
        }
        {name: 'Micro SaaS';
          href: '/micro-saas';
          icon: Rocket;
          description: 'Specialized software solutions';
        }
        {name: 'Innovative Showcase',href: '/innovative-services-showcase',icon: Globe,description: 'Cutting-edge technology',},],},{name: 'Solutions';
      href: '/solutions';
      icon: Cpu,    {}
    {name: 'Contact';
      href: '/contact';
      icon: Phone;
    }name: 'Solutions',href: '/solutions',icon: Cpu,},{name: 'About',href: '/about',icon: Globe,},{name: 'Contact',href: '/contact',icon: Phone,},];
  const contactInfo = {mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com',}return (<>;
  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'>;isScrolled;
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10';
            : 'bg-transparent';
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
=======
<<<<<<< HEAD
      name: 'Contact',
      href: '/contact',
      icon: Phone,
    },  ];      icon: Phone;
    }
  ];
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',  }    website: 'https://ziontechgroup.com';
  }
;
  return (
    <>;
      {/* Navigation Bar */}
      <motion.nav;
        initial={{ coordinate_y: -100 }}
        animate={{ coordinate_y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
          is_scrolled;
            ? 'bg - gray - 900 / 95 backdrop - blur - xl border - b border - cyan - 500 / 20 shadow - 2xl shadow - cyan - 500 / 10';
            : 'bg - transparent';
        }`}
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 16 lg:h - 20'>;
            {/* Logo */}
            <motion.div;
              while_hover={{ scale: 1.05 }}
              className='flex items - center space - x-2';
            >;
              <Link href='/' className='flex items - center space - x-2 group'>;
                <div className='w - 10 h - 10 lg:w - 12 lg:h - 12 bg - gradient - to - r from - cyan - 400 to - purple - 500 rounded - xl flex items - center justify - center group - hover:shadow - lg group - hover:shadow - cyan - 400 / 25 transition - all duration - 300'>;
                  <span className='text - white font - bold text - lg lg:text - xl'>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'>;
<<<<<<< HEAD
=======

const contactInfo = {
    mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'}
  website: 'https://ziontechgroup.com'}
  };

  return (
    <>;

>>>>>>> origin/chore/fix-lint-and-merge
      {/* Navigation Bar */}
      <motion&& motion.nav;
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0 && 0.5 }}

        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

isScrolled;
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
            : 'bg-transparent'}
}
        }
}    />

        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;"
          <div className=\"flex items-center justify-between h-16 lg:h-20\"    />;

            {/* Logo */}

            <motion.div;
whileHover={{ scale: 1.05 }
}
              className='flex items-center space-x-2'    />

<<<<<<< HEAD
              className='flex items-center space-x-2'    />

              <Link href='/' className='flex items-center space-x-2 group'    />
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'    />
                  <span className='text-white font-bold text-lg lg:text-xl'    />
                    Z
                  </span>
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'

<<<<<<< HEAD
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }`}
      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-16 lg:h-20">;
            {/* Logo */}{/* Desktop Navigation */}
            {/* Logo */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <motion&& motion.div
              whileHover={{ scale: 1 && 1.05 }}
              className="flex items-center space-x-2">;
              <Link href="/" className="flex items-center space-x-2 group">;
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">;
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>;
                </div>;
                <div className="hidden sm:block">;
                  <div className="text-white font-bold text-lg lg:text-xl">Zion Tech Group</div>;
                  <div className="text-cyan-400 text-xs">Revolutionary Technology</div>;
                </div>;
              </Link>;
            </motion && motion.div>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Desktop Navigation */}
            {/* Logo */}{/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
<<<<<<< HEAD
              {navigationItems && navigationItems.map(item => (<div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (<div;
=======
              {navigationItems && navigationItems.map(item => (;
                <div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (;

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
              <Link href='/' className='flex items-center space-x-2 group'    />;
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'    />;
                  <span className='text-white font-bold text-lg lg:text-xl'    />;
                    Z;
                  </span>;
                </div>;
                <div className='hidden sm:block'    />;
                  <div className='text-white font-bold text-lg lg:text-xl'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    Zion Tech Group;
                  </div>;
                  <div className='text-cyan-400 text-xs'    />;
                    Revolutionary Technology;
                  </div>;
                </div>;
              </Link>;
            </motion.div>;
            {/* Desktop Navigation */}
<<<<<<< HEAD
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
origin/cursor/automate-test-improve-and-merge-code-2533
                    <div
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
=======

<div className = 'hidden lg: flex items-center space-x-8'    />
              {navigationItems.map(item => (}
                <div key={item.name} className='relative group'    />
                  {item.dropdown ? (}
                    <div;}
onMouseEnter={() =    /> setActiveDropdown(item && item.name)}
>>>>>>> origin/chore/fix-lint-and-merge
                      onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
                      className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300'
                    >
                      <span className='font-medium'>{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />

                      {/* Dropdown Menu */}

                      {/* Dropdown Menu */}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <AnimatePresence>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        {activeDropdown === item.name && (
<<<<<<< HEAD
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
<<<<<<< HEAD
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4"
=======





>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          >
                            <div className='grid grid-cols-1 gap-3'>'
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
    mobile: '+1 302 464 0950',
    email: kleber@ziontechgroup.com,
    address: '364 E Main St STE 1008 Middletown DE 19709',

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}

        }`}
      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=flex items-center justify-between h-16 lg:h-20">;
            {/* Logo */}{/* Desktop Navigation */}
            {/* Logo */}
            {/* Desktop Navigation */}
            {/* Logo */}{/* Desktop Navigation */}
            <div className=hidden lg:flex items-center space-x-8>;
              {navigationItems && navigationItems.map(item => (<div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (<div;
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            <div className="hidden lg:flex items-center space-x-8>;
              {navigationItems && navigationItems.map((item) => (<div key={item && item.name} className=relative group">;
                  {item && item.dropdown ? (<motion.div;
              whileHover={{ scale: 1.05 }}
              className=flex items-center space-x-2;
            >;
              <Link href='/' className=flex items-center space-x-2 group>;
                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300'>;
                  <span className=text-white font-bold text-lg lg:text-xl>;
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${}
                    Z;
                  </span>;

        }`}
      >;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className="flex items-center justify-between h-16 lg:h-20">;
            {/* Logo */}
            {/* Desktop Navigation */}'
            <div className='hidden lg:flex items-center space-x-8>;
              {navigationItems && navigationItems.map(item => (;
                <div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (;
                    <div;
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            <div className=hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (;"
                <div key={item && item.name} className=relative group>;
                  {item && item.dropdown ? (;

                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
className=flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300

                                return (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item"
                                  >
                                    <div className=w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300>
                                      <Icon className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">
                    >
                      <span className='font-medium'>{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />
                      {/* Dropdown Menu */}
origin/cursor/automate-test-improve-and-merge-code-2533
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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
                                      </div>
                                    </div>
                                  </Link>
<<<<<<< HEAD
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
<<<<<<< HEAD
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'>;
                      <item && item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />;
                      <span className='font-medium'>{item && item.name}</span>                    </Link>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group";
=======
                                );                              })}                          >
                            <div className="grid grid-cols-1 gap-3">
                              {item.dropdown.map((dropdownItem) => {
                                const Icon = dropdownItem.icon;
                      className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300';
<<<<<<< HEAD
className='flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >;
                      <span className='font-medium'>{item && item.name}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180' />;
                      className="flex items-center space-x-1 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
<<<<<<< HEAD
=======
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />;
                      <AnimatePresence>;
                        {activeDropdown === item && item.name && (;
                          <motion&& motion.div
                            initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                            transition={{ duration: 0 && 0.2 }}
                            className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/25 p-4'>;
                            <div className='grid grid-cols-1 gap-3'>;
                              {item && item.dropdown.map(dropdownItem => {;
                                const Icon = dropdownItem && dropdownItem.icon;
                                  >;
                                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300'>;
                                      <Icon className='w-5 h-5 text-cyan-400' />;
                                    </div>;
                                    <div>;
                                      <div className='text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300'>;
                                        {dropdownItem && dropdownItem.name}
                                      </div>;
                                      <div className='text-gray-400 text-sm'>                                        {dropdownItem && dropdownItem.description}
                                      </div>;
                                    </div>;
                                  </Link>;
                                );                              })}                          >;
                            <div className="grid grid-cols-1 gap-3">;
                              {item && item.dropdown.map((dropdownItem) => {;
                                const Icon = dropdownItem && dropdownItem.icon;
                                return (
                                  <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                                    key={dropdownItem && dropdownItem.name}
                                    href={dropdownItem && dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border border-cyan-500/30 transition-all duration-300 group/item">;
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300">;
                                      <Icon className="w-5 h-5 text-cyan-400" />;
                                    </div>;
                                    <div>;
                                      <div className="text-white font-medium group-hover/item:text-cyan-400 transition-colors duration-300">;
                                        {dropdownItem && dropdownItem.name}
                                      </div>;
                                      <div className="text-gray-400 text-sm">;
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
<<<<<<< HEAD
=======

                              })}
                            </div>;
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ) : (;
                    <Link
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group'>;
                      <item && item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300' />;
                      <span className='font-medium'>{item && item.name}</span>                    </Link>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group";
                    >;
                      <item && item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />;
                      <span className="font-medium">{item && item.name}</span>;
                  )}
                </div>;
              ))}
<<<<<<< HEAD
                    </div>) : (
                    <Link;
                      href={item.href}

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
                                    key={dropdownItem.name}
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                              })}
                            </div>;
                          </motion.div>)}
                      </AnimatePresence>;
                  )}
                </div>
              ))}
            </div>;
                href="/contact";
            {/* Mobile Menu Button */}
            <div className='lg:hidden'>;
              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }}
            {/* Mobile Menu Button */}
            <div className="lg:hidden">;
              <motion.button;
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className=text-gray-300 hover:text-white transition-colors duration-300;
              >;
                {isOpen ? (<X className='w-6 h-6' />;
                ) : (<Menu className=w-6 h-6 />;
                )}              </motion && motion.button>              <motion&& motion.button;
                whileTap={{ scale: 0 && 0.95 }}
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
                      href={item.href}

className='flex items-center space-x-2 text-gray-300 hover: text-white transition-colors duration-300 group'
                        />

                      <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform duration-300'    />
                      <span className='font-medium'    />{item.name}</span>
                    </Link>

                  
}
                </div>;
              ))}

            </div>

<<<<<<< HEAD
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
<<<<<<< HEAD
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              >
=======
            {/* CTA Button */}
<div className='hidden lg: block'    />
              <motion.a;
href='/contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40'
                  />
>>>>>>> origin/chore/fix-lint-and-merge
                Get Started;
              </motion.a>
            </div>
            {/* Mobile Menu Button */}
<<<<<<< HEAD
                  )}
                </div>;
              ))}
=======

                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">;
                Get Started;
              </motion && motion.a>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>



=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
<<<<<<< HEAD
            transition={{ duration: 0.3 }}


          >
className="fixed inset-0 z-40 lg:hidden"
          >
            className='fixed inset-0 z-40 lg:hidden'

          >
=======


          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Backdrop */}
            <div
              className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className='text-gray-300 hover:text-white transition-colors duration-300';
                  >;
                    <X className='w-6 h-6' />                  </motion && motion.button>;
                </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 group';
                    >;
                      <item.icon className='w - 4 h - 4 group - hover:scale - 110 transition - transform duration - 300' />;
                      <span className='font - medium'>{item.name}</span>                    </Link>                      className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 group";
                    >;
                      <item.icon className="w - 4 h - 4 group - hover:scale - 110 transition - transform duration - 300" />;
                      <span className="font - medium">{item.name}</span>)}
                </div>))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <motion&& motion.div
<div className='lg:hidden'>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className='text-gray-300 hover:text-white transition-colors duration-300'
              >
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
=======

<div className='lg:hidden'    />
              <motion.button;
whileTap={{ scale: 0.95 }}
                onClick={() =    /> setIsOpen(!isOpen}
}
                className='text-gray-300 hover:text-white transition-colors duration-300'>

                {isOpen ? (<X className='w-6 h-6'    />;}
                ) : (<Menu className='w-6 h-6'    />;}
                )}

>>>>>>> origin/chore/fix-lint-and-merge
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
<<<<<<< HEAD
              </motion.button>;
            </div>;
          </div>;
        </div>;
      </motion.nav>;
        {isOpen && (;
          <motion&& motion.div

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (<motion.div;
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}'
            exit={{ opacity: 0, x: '100%' }}
=======

      {/* Mobile Navigation */}
      <AnimatePresence    />;
        {isOpen && (<motion.div;}
            initial={{ opacity: 0, x: '100%' }
}
            animate={{ opacity: 1, x: 0 }
}

            exit={{ opacity: 0, x: '100%' }}

            transition={{ duration: 0.3 }}
className='fixed inset-0 z-40 lg:hidden'
              />
            {/* Backdrop */}
            <div;
className='absolute inset-0 bg-black/50 backdrop-blur-sm'
              onClick={() =    /> setIsOpen(false)}
>>>>>>> origin/chore/fix-lint-and-merge

            />
            



            {/* Mobile Menu *}
}
            <motion&& motion.div;
<<<<<<< HEAD

              transition={{ duration: 0.3 }}
className='absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <div className='p-6'>
                {/* Close Button */}'
                <div className='flex justify-end mb-6'>;
                  <motion&& motion.button;
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}
                {/* Close Button */}
                    onClick={() => setIsOpen(false)}{/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <motion&& motion.button
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}{/* Close Button */}
                <div className="flex justify-end mb-6">;
                  <motion&& motion.button;
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}className='text-gray-300 hover:text-white transition-colors duration-300';
                  >;
                    <X className='w-6 h-6' />;
                  </motion.button>;
                </div>;
                {/* Mobile Menu Items */}
<<<<<<< HEAD
<div className='space-y-4'>;
                  {navigationItems.map(item => (<div key={item.name}>;
                      {item.dropdown ? (<div className='space-y-2'>;
=======
                <div className='space - y-4'>;
                  {navigation_items.map (item => (
                    <div key={item.name}>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {item.dropdown ? (
                        <div className='space - y-2'>;
                          <div className='text - gray - 400 font - medium text - sm uppercase tracking - wider'>;
                            {item.name}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="text-gray-300 hover:text-white transition-colors duration-300";
                  >;
                    <X className="w-6 h-6" />;
                  </motion && motion.button>;
                </div>;
                {/* Mobile Menu Items */}
                <div className='space-y-4'>;
                  {navigationItems && navigationItems.map(item => (;
                    <div key={item && item.name}>;
                      {item && item.dropdown ? (;
                        <div className='space-y-2'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          <div className='text-gray-400 font-medium text-sm uppercase tracking-wider'>;
                            {item.name}
                          </div>;
                          <div className='pl-4 space-y-2'>;
<<<<<<< HEAD
                            {item.dropdown.map(dropdownItem => {const Icon = dropdownItem.icon;
=======
                            {item && item.dropdown.map(dropdownItem => {;
                              const Icon = dropdownItem && dropdownItem.icon;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                                  onClick={() => setIsOpen(false)}
                                  className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300';
                                >;
                                  <Icon className='w-5 h-5 text-cyan-400' />;
                                  <div>;
                                    <div className='text-white font-medium'>;
                                      {dropdownItem.name}
                                    </div>;
                                    <div className='text-gray-400 text-sm'>;
=======
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

>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
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
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
=======
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
<<<<<<< HEAD
                              )})}
>>>>>>> origin/chore/fix-lint-and-merge
                          </div>;
                        </div>;
                      ) : (</div>;
                        </div>;
                      ) : (<Link;
=======
                              );                            })}                    <div key={item && item.name}>;
                      {item && item.dropdown ? (;
                        <div className="space-y-2">;
                          <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">;
                            {item && item.name}
                          </div>;
                          <div className="pl-4 space-y-2">;
                            {item && item.dropdown.map((dropdownItem) => {;
                              const Icon = dropdownItem && dropdownItem.icon;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {item.dropdown ? (
                        <div className="space - y-2">;
                          <div className="text - gray - 400 font - medium text - sm uppercase tracking - wider">;
                            {item.name}
<<<<<<< HEAD
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
=======


                            })}
<<<<<<< HEAD
</div>;
                        </div>;
                      ) : (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  </motion.button>
                </div>

                {/* Mobile Menu Items */}

                            })}

<<<<<<< HEAD
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
                        >
                          <item.icon className='w-5 h-5 text-cyan-400' />
                          <span className='text-white font-medium'>
                            {item.name}

                          </span>                        </Link>

                        </Link>


                      )}
                    </div>;
                  ))}





                {/* Contact Information */}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item && item.href}
                          onClick={() => setIsOpen(false)}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          </div>
                        </div>
                      ) : (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          href={item && item.href}

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
=======
                          onClick={() =    /> setIsOpen(false)}

className='flex items-center space-x-3 p-3 rounded-lg hover: bg-cyan-500/10 transition-all duration-300'
>>>>>>> origin/chore/fix-lint-and-merge
                        >
                          <item.icon className='w-5 h-5 text-cyan-400'    />
                          <span className='text-white font-medium'    />
                            {item.name}
<<<<<<< HEAD
                          </span>                        </Link>
className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
                        >
                          <item.icon className='w-5 h-5 text-cyan-400' />
                          <span className='text-white font-medium'>
<<<<<<< HEAD

                          <span className=text-white font-medium>
                            {item.name}
=======
                            {item.name}
<<<<<<< HEAD
                          </span>                        </Link>                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          </span>                        </Link>
=======
>>>>>>> origin/chore/fix-lint-and-merge

                          </span>
                        </Link>
<<<<<<< HEAD

                        </Link>

<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
                      )}
                    </div>;
                  ))}
                </div>

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      )}
                    </div>
                  ))}
                </div>
                      
}
                    </div>;
                  ))}





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Contact Information */}
<<<<<<< HEAD


<<<<<<< HEAD
                      <span>{contactInfo.mobile}</span>
                          onClick={() => setIsOpen(false)}className=flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300;
className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300';
                        >;
                          <item.icon className=w-5 h-5 text-cyan-400 />;
                          <span className='text-white font-medium'>;
                            {item.name}</span>                        </Link>;
                        </Link>;
                          </span>;
                        </Link>;
                      )}
                    </div>;
                  ))}
                </div>;
                      )}
                    </div>;
                  ))}{/* Contact Information */}
<div className=mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20>;
                  <h3 className='text-cyan-400 font-semibold mb-3'>;
                    Contact Information;
                  </h3>;
                  <div className=space-y-2 text-sm>;
                    <div className='flex items-center space-x-2 text-gray-300'>;
                      <Phone className=w-4 h-4 text-cyan-400 />;
                      <span>{contactInfo.mobile}</span>;
                        <Link;
                        <Link
                          href={item && item.href}
                          onClick={() => setIsOpen(false)}
                          className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300';
                        >;
                          <item && item.icon className=w-5 h-5 text-cyan-400 />;
                          <span className='text-white font-medium'>;
                            {item && item.name}
                          </span>                        </Link>                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300;
                        >;
                          <item && item.icon className="w-5 h-5 text-cyan-400" />;
                {/* Contact Information */}
<div className='mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20'>
                  <h3 className='text-cyan-400 font-semibold mb-3'>
                    Contact Information;
                  </h3>'
                  <div className='space-y-2 text-sm>
                    <div className='flex items-center space-x-2 text-gray-300'>
                      <Phone className=w-4 h-4 text-cyan-400' />

                      <span>{contactInfo.mobile}</span>
                        <Link;
                          href={item && item.href}
                          onClick={() => setIsOpen(false)}'
                          className=flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300;
                        >;'
                          <item && item.icon className='w-5 h-5 text-cyan-400 />;
                          <span className='text-white font-medium'>;
                            {item && item.name}"
                          </span>                        </Link>                          className=flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300;
                        >;"
                          <item && item.icon className="w-5 h-5 text-cyan-400" />;"
                          <span className="text-white font-medium">{item && item.name}</span>;
                      )}
                    </div>;
                  ))}
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-gray-300">;
                      <MapPin className="w-4 h-4 text-pink-400" />;
                      <span className="text-xs">{contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
=======



<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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
=======
                {/* Mobile CTA */}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="mt-6">
                  <motion.a

                    href="/contact"
                    whileTap={{ scale: 0 && 0.95 }}
                    onClick={() => setIsOpen(false)}


<<<<<<< HEAD
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
=======
};
export default Navigation;  );
};
export default Navigation;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          </div>;
                          <div className="pl - 4 space - y-2">;
                            {item.dropdown.map ((dropdown_item) => {const Icon = dropdown_item.icon;
                              return (<Link;
                                  key={dropdown_item.name}
                                  href={dropdown_item.href}
                                  on_click={() => setIsOpen (false)}
                                  className="flex items - center space - x-3 p - 3 rounded - lg hover: bg - cyan - 500 / 10 transition - all duration - 300";
                                >;
                                  <Icon className="w - 5 h - 5 text - cyan - 400" />;
                                  <div>;
                                    <div className="text - white font - medium">{dropdown_item.name}</div>;
                                    <div className="text - gray - 400 text - sm">{dropdown_item.description}</div>;
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
                          </span>                        </Link>                          className="flex items - center space - x-3 p - 3 rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300";
                        >;
                          <item.icon className="w - 5 h - 5 text - cyan - 400" />;
                          <span className="text - white font - medium">{item.name}</span>)}
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
                    <div className="flex items - center space - x-2 text - gray - 300">;
                      <Mail className="w - 4 h - 4 text - purple - 400" />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - gray - 300">;
                      <MapPin className="w - 4 h - 4 text - pink - 400" />;
                      <span className="text - xs">{contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
=======
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

>>>>>>> origin/chore/fix-lint-and-merge
                {/* Mobile CTA */}
<div className='mt-6'    />;
                  <motion.a;
                    href='/contact';
                    whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                    onClick={() => setIsOpen(false)}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25';
                  >;
=======
                    onClick={() =    /> setIsOpen(false}
}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25'>

>>>>>>> origin/chore/fix-lint-and-merge
                    Get Started Today;
                  </motion.a>;
                </div>;
              </div>;
            </motion.div>;
<<<<<<< HEAD
          </motion.div>;
        )}
=======
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
<<<<<<< HEAD
  );
  );
}
};

export default Navigation;  )
}
export default Navigation;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      </AnimatePresence>
    <   />
)
};
<<<<<<< HEAD
export default Navigation;
)}export default Navigation;
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
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
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                  <Icon className="w-5 h-5 text-cyan-400" />
                                  <div>
                                    <div className="text-white font-medium">{dropdownItem.name}</div>
                                    <div className="text-gray-400 text-sm">{dropdownItem.description}</div>
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
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                  <h3 className="text-cyan-400 font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.mobile}</span>
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

                {/* Mobile CTA */}
                <div className="mt-6">
                  <motion.a
                    href="/contact"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25"
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>'
                      <Mail className='w-4 h-4 text-purple-400' />'
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-300'>'
                      <MapPin className='w-4 h-4 text-pink-400' />'
                      <span className='text-xs'>{contactInfo.address}</span>'
                    </div>
                  </div>
                </div>
                {/* Mobile CTA */}
<div className='mt-6'>
                  <motion.a
                    href='/contact'
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className='block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/25'
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
  )
};

export default Navigation;

<<<<<<< HEAD
"
);
}

export default Navigation;
origin/cursor/automate-test-improve-and-merge-code-2533
'"`


  Phone, Mail, MapPin, Globe, ChevronDown}
}
 } from lucide-react';



const Navigation: React.FC;


=======


export default Navigation;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default Navigation;
export default Navigation;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
