export default function UltraAdvancedNavigation() {
	return (
		<header className="w-full border-b border-gray-800 bg-black/80 backdrop-blur px-4 py-3">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<a href="/" className="text-white font-semibold">Zion Tech Group</a>
				<nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
					<a href="/services" className="hover:text-white">Services</a>
					<a href="/about" className="hover:text-white">About</a>
					<a href="/contact" className="hover:text-white">Contact</a>
				</nav>
			</div>
		</header>
	);
}=======
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

import {
  Menu
  X
  ChevronDown
  Search
  Phone
  Mail
  MapPin
  Brain
  Rocket
  Dna
  Globe
  Shield
  Wifi
  Package
  Bot
  Car
  Building2
  DollarSign
  Monitor
  Users
  Cpu
  Zap
  Atom
  Database
  Cloud
  Lock
  Code;
} from 'lucide-react';
import Link from 'next/link';import {
=======
==============
=======
import Link from 'next/link';import { ;


  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;
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
      icon: null
    },    {      icon: null
    }
=======
=======
  Cpu, Zap, Atom, Database, Cloud, Lock, Code;
} from 'lucide-react';

import Link from 'next/link';


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
      icon: null
    };

          name: 'AI Agent Orchestrator',
          href: '/ai - agents',
          icon: Bot,
      description: 'Benchmarks & vendor references'
    }
    {
      name: 'About'
      href: '/about',          price: '$7,999/month'
        }
      ]
    }
      name: 'Micro SaaS'
      href: '/services'
      icon: Monitor
      description: '300+ micro SaaS services'
    },      description: '300+ micro SaaS services'
    }
    {
      name: 'Market Pricing'
      href: '/market-pricing'
      icon: DollarSign
      description: 'Benchmarks & vendor references'
    },    {
      name: 'About',
      href: '/about',
      icon: null;
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: null
    }
    {
      name: 'Contact',
      href: '/contact',
      icon: null,
    },  ];      icon: null;

    }
  ];





  const contactInfo = {

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
      icon: null,;
    },    {      icon: null;
    };
    {;
      name: 'AI Services',;
      href: '#',;
      icon: Brain,;
      description: 'Cutting-edge AI solutions',;
      dropdown: [;
        {;
          name: 'AI Agent Orchestrator',;
          href: '/ai-agents',;
          icon: Bot,;
          description: 'Multi-agent workflow automation',;
          price: '$2,999/month',;
        },        {          price: '$2,999/month';
        };
        {;
          name: 'AI Cybersecurity',;
          href: '/security',;
          icon: Shield,;
          description: 'AI-powered threat detection',;
          price: '$4,999/month',;
        },        {          price: '$4,999/month';
        };
        {;
          name: 'AI Healthcare Analytics',;
          href: '/ai-data-analytics',;
          icon: Dna,;
          description: 'Patient outcome prediction',;
          price: '$3,999/month',;
        },        {          price: '$3,999/month';
        };
        {;
          name: 'AI Supply Chain',;
          href: '/quantum-logistics',;
          icon: Package,;
          description: 'End-to-end optimization',;
          price: '$2,499/month',;
        },        {          price: '$2,499/month';
        };
        {;
          name: 'AI Financial Risk',;
          href: '/ai-financial-risk',;
          icon: DollarSign,;
          description: 'Advanced risk management',;
          price: '$5,999/month',;
        },;
      ],;
    },    {          price: '$5,999/month';
        }
      ];
    };
      name: 'Quantum Computing',;
      href: '#',;
      icon: Atom,;
      description: 'Quantum-powered solutions',;
      dropdown: [;
        {;
          name: 'Quantum AI Supercomputer',;
          href: '/quantum-ai-cognitive',;
          icon: Cpu,;
          description: 'Enterprise quantum computing',;
          price: '$15,999/month',;
        },        {          price: '$15,999/month';
        };
        {;
          name: 'Quantum Internet Security',;
          href: '/quantum-internet-security-platform',;
          icon: Lock,;
          description: 'Future-proof encryption',;
          price: '$8,999/month',;
        },        {          price: '$8,999/month';
        };
        {;
          name: 'Quantum Drug Discovery',;
          href: '/biotech-ai',;
          icon: Dna,;
          description: 'Accelerated drug development',;
          price: '$12,999/month',;
        },        {          price: '$12,999/month';
        };
        {;
          name: 'Quantum Financial Trading',;
          href: '/quantum-financial-trading',;
          icon: DollarSign,;
          description: 'Nanosecond precision trading',;
          price: '$19,999/month',;
        },        {          price: '$19,999/month';
        };
        {;
          name: 'Quantum IoT Platform',;
          href: '/quantum-iot',;
          icon: Wifi,;
          description: 'Quantum-secured IoT',;
          price: '$4,999/month',;
        },;
      ],;
    },    {          price: '$4,999/month';
        }
      ];
    };
      name: 'Space Technology',;
      href: '#',;
      icon: Rocket,;
      description: 'Space mission management',;
      dropdown: [;
        {;
          name: 'Space Mission Control',;
          href: '/space-technology',;
          icon: Rocket,;
          description: 'Complete mission management',;
          price: '$25,999/month',;
        },        {          price: '$25,999/month';
        };
        {;
          name: 'Space Debris Cleanup',;
          href: '/space-technology',;
          icon: Package,;
          description: 'AI-powered debris removal',;
          price: '$35,999/month',;
        },;
      ],;
    },    {          price: '$35,999/month';
        }
      ];
    };
      name: 'Enterprise IT',;
      href: '#',;
      icon: Building2,;
      description: 'Enterprise solutions',;
      dropdown: [;
        {;
          name: 'Cloud Migration',;
          href: '/cloud-platform',;
          icon: Cloud,;
          description: 'Zero-downtime migration',;
          price: '$8,999/month',;
        },        {          price: '$8,999/month';
        };
        {;
          name: 'DevOps Automation',;
          href: '/automation',;
          icon: Code,;
          description: 'AI-powered automation',;
          price: '$5,999/month',;
        },        {          price: '$5,999/month';
        };
        {;
          name: 'Data Analytics',;
          href: '/ai-data-analytics',;
          icon: Database,;
          description: 'AI-powered insights',;
          price: '$6,999/month',;
        },        {          price: '$6,999/month';
        };
        {;
          name: 'Security Operations',;
          href: '/security',;
          icon: Shield,;
          description: '24/7 security monitoring',;
          price: '$12,999/month',;
        },        {          price: '$12,999/month';
        };
        {;
          name: 'API Management',;
          href: '/api-observability',;
          icon: Code,;
          description: 'Complete lifecycle management',;
          price: '$4,999/month',;
        },        {          price: '$4,999/month';
        };
        {;
          name: 'Digital Transformation',;
          href: '/solutions',;
          icon: Zap,;
          description: 'AI-powered transformation',;
          price: '$15,999/month',;
        },        {          price: '$15,999/month';
        };
        {;
          name: 'IoT Management',;
          href: '/it-asset-discovery-agent',;
          icon: Wifi,;
          description: 'AI-powered device management',;
          price: '$7,999/month',;
        },;
      ],;
    },    {;
      name: 'Micro SaaS',;
      href: '/services',;
      icon: Monitor,;
      description: '300+ micro SaaS services',;
    },    {;
      name: 'Market Pricing',;
      href: '/market-pricing',;
      icon: DollarSign,;
      description: 'Benchmarks & vendor references',;
    },;
    {;
      name: 'About',;
      href: '/about',          price: '$7,999/month';
        }
      ];
    };
      name: 'Micro SaaS',;
      href: '/services',;
      icon: Monitor,;
      description: '300+ micro SaaS services',;
    },      description: '300+ micro SaaS services';
    };
    {;
      name: 'Market Pricing',;
      href: '/market-pricing',;
      icon: DollarSign,;
      description: 'Benchmarks & vendor references',;
    },    {;
      name: 'About',;
      href: '/about',;
      icon: null;
    };
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: null,;
    },;
    {;
      name: 'Contact',;
      href: '/contact',;
      icon: null,;
    },  ];      icon: null;
    }
  ];
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;  };
    >;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='flex justify-between items-center h-20'>          {/* Logo */}  return (
    <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: null},
    {_name: 'AI Services', _href: '#', _icon: Brain, _description: 'Cutting-edge AI solutions', _dropdown: [
        {
          name: 'AI Agent Orchestrator', _href: '/ai-agents', _icon: Bot, _description: 'Multi-agent workflow automation', _price: '$2, _999/month'},
        {_name: 'AI Cybersecurity', _href: '/security', _icon: Shield, _description: 'AI-powered threat detection', _price: '$4, _999/month'},
        {_name: 'AI Healthcare Analytics', _href: '/ai-data-analytics', _icon: Dna, _description: 'Patient outcome prediction', _price: '$3, _999/month'},
        {_name: 'AI Supply Chain', _href: '/quantum-logistics', _icon: Package, _description: 'End-to-end optimization', _price: '$2, _499/month'},
        {_name: 'AI Financial Risk', _href: '/ai-financial-risk', _icon: DollarSign, _description: 'Advanced risk management', _price: '$5, _999/month'}
      ]
    },
    {_name: 'Quantum Computing', _href: '#', _icon: Atom, _description: 'Quantum-powered solutions', _dropdown: [
        {
          name: 'Quantum AI Supercomputer', _href: '/quantum-ai-cognitive', _icon: Cpu, _description: 'Enterprise quantum computing', _price: '$15, _999/month'},
        {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform', _icon: Lock, _description: 'Future-proof encryption', _price: '$8, _999/month'},
        {_name: 'Quantum Drug Discovery', _href: '/biotech-ai', _icon: Dna, _description: 'Accelerated drug development', _price: '$12, _999/month'},
        {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading', _icon: DollarSign, _description: 'Nanosecond precision trading', _price: '$19, _999/month'},
        {_name: 'Quantum IoT Platform', _href: '/quantum-iot', _icon: Wifi, _description: 'Quantum-secured IoT', _price: '$4, _999/month'}
      ]
    },
    {_name: 'Space Technology', _href: '#', _icon: Rocket, _description: 'Space mission management', _dropdown: [
        {
          name: 'Space Mission Control', _href: '/space-technology', _icon: Rocket, _description: 'Complete mission management', _price: '$25, _999/month'},
        {_name: 'Space Debris Cleanup', _href: '/space-technology', _icon: Package, _description: 'AI-powered debris removal', _price: '$35, _999/month'}
      ]
    },
    {_name: 'Enterprise IT', _href: '#', _icon: Building2, _description: 'Enterprise solutions', _dropdown: [
        {
          name: 'Cloud Migration', _href: '/cloud-platform', _icon: Cloud, _description: 'Zero-downtime migration', _price: '$8, _999/month'},
        {_name: 'DevOps Automation', _href: '/automation', _icon: Code, _description: 'AI-powered automation', _price: '$5, _999/month'},
        {_name: 'Data Analytics', _href: '/ai-data-analytics', _icon: Database, _description: 'AI-powered insights', _price: '$6, _999/month'},
        {_name: 'Security Operations', _href: '/security', _icon: Shield, _description: '24/7 security monitoring', _price: '$12, _999/month'},
        {_name: 'API Management', _href: '/api-observability', _icon: Code, _description: 'Complete lifecycle management', _price: '$4, _999/month'},
        {_name: 'Digital Transformation', _href: '/solutions', _icon: Zap, _description: 'AI-powered transformation', _price: '$15, _999/month'},
        {_name: 'IoT Management', _href: '/it-asset-discovery-agent', _icon: Wifi, _description: 'AI-powered device management', _price: '$7, _999/month'}
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/services',
      icon: Monitor,
      description: '300+ micro SaaS services'
    },
    {
      name: 'Market Pricing',
      href: '/market-pricing',
      icon: DollarSign,
      description: 'Benchmarks & vendor references'
    },
    {
      name: 'About',
      href: '/about',
      icon: null
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: null
    }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },

  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
      name: 'Contact'
      href: '/contact'
      icon: null
    },  ];      icon: null
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>          {/* Logo */}  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}


            className='flex items-center'

=======
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'

==============

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <div className='hidden sm:block'>
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>
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
          </motion && motion.div>;
          {/* Desktop Navigation */}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative group">
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  }
;
    >;
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='flex justify - between items - center h - 20'>          {/* Logo */}  return (
    <nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
      is_scrolled;
        ? 'bg - black / 90 backdrop - blur - xl border - b border - gray - 800 / 50';
        : 'bg - transparent';
    }`}>;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex justify - between items - center h - 20">;
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items - center';
          >;
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                <Zap className='w - 6 h - 6 text - white' />;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text - xs text - gray - 400'>;
                  Revolutionary Technology;
                </div>              </div>          >;
            <Link href="/" className="flex items - center space - x-3 group">;
              <div className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300">;
                <Zap className="w - 6 h - 6 text - white" />;
              </div>;
              <div className="hidden sm:block">;
                <div className="text - xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </div>;
                <div className="text - xs text - gray - 400">Revolutionary Technology</div>;
              </div>;
            </Link>;
          </motion.div>;
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items - center space - x-8'>;
            {navigation_items.map ((item, index) => (
              <div key={item.name} className='relative group'>;
                {item.dropdown ? (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {item.dropdown ? (
                  <button;
                    on_click={() => setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                    className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 300 py - 2";
                  >;
                    {item.icon && <item.icon className="w - 4 h - 4" />}
                    <span>{item.name}</span>;
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 300 ${
                      active_dropdown === item.name ? 'rotate - 180' : '';
                    }`} />;
                  </button>) : (
                  <Link;
                    href={item.href}

==============


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                  </Link>
                )}

                {/* Dropdown Menu */}
                {item && item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                      >
                        <div className="p-4">
                          <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                          <div className="space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                </div>
                                <div className="text-sm font-semibold text-cyan-400">
=======

=======
=======
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'

                      >
                        <div className='p-4'>
                          <div className='text-sm text-gray-400 mb-3'>
                            {item.description}
                          </div>
                          <div className='space-y-2'>
                            {item.dropdown.map(dropdownItem => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group'
                              >
                                <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
                                  <dropdownItem.icon className='w-5 h-5 text-cyan-400' />
                                </div>
                                <div className='flex-1'>
                                  <div className='text-white font-medium group-hover:text-cyan-400 transition-colors duration-200'>
                                    {dropdownItem.name}
                                  </div>
                                  <div className='text-sm text-gray-400'>
                                    {dropdownItem.description}                                  </div>
                                </div>
                                <div className='text-sm font-semibold text-cyan-400'>                                  {dropdownItem.price}                                <div className="text-sm font-semibold text-cyan-400">
                                  {dropdownItem.price}
                                </div>
                              </Link>
          </div>;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>;
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <a


              </a>
              <a

          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </a>

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'>;
                <Phone className='w-4 h-4' />;
                <span className='hidden xl:inline'>{contactInfo && contactInfo.mobile}</span>;
              </a>;
              <a
          </div>

          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <a
=======                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'
              >
                <Phone className='w-4 h-4' />
                <span className='hidden xl:inline'>{contactInfo.mobile}</span>



              </a>>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a

          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.mobile}</span>
              </a>

                href={`mailto:${contactInfo && contactInfo.email}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'>;
                <Mail className='w-4 h-4' />;
                <span className='hidden xl:inline'>{contactInfo && contactInfo.email}</span>;
              </a>;
            </div>;
            <motion&& motion.a
              href='/contact'
              whileHover={{ scale: 1 && 1.05 }}
              whileTap={{ scale: 0 && 0.95 }}
              className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'>              </a>;
              <a href={`mailto:${contactInfo && contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">;
                <Mail className="w-4 h-4" />;
                <span className="hidden xl:inline">{contactInfo && contactInfo.email}</span>;
              </a>;
            </div>;
            <motion&& motion.a
              href="/contact"
              whileHover={{ scale: 1 && 1.05 }}
              whileTap={{ scale: 0 && 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">;
              Get Started;
            </motion && motion.a>;
          </div>;


=======
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-8 mt-2 space-y-2">
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden'
          >
            <div className='px-4 py-6 space-y-4'>
              {navigationItems.map(item => (                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                  {item.dropdown ? (
                    <div>
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
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
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

                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      <span>{item.name}</span>

                  )}
                </div>
              ))}
=======
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200'>;
                    <Mail className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </a>;
                  <div className='flex items-start space-x-3'>;
                    <MapPin className='w-4 h-4 mt-0 && 0.5' />;
                    <span>{contactInfo && contactInfo.address}</span>;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  href="/contact"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
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



=======      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.dropdown ? (
                    <div>;
                      <button            className="lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden";
          >;
            <div className="px - 4 py - 6 space - y-4">;
              {navigation_items.map ((item) => (
                  {item.dropdown ? (
                    <div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (
                            active_dropdown === item.name ? null : item.name);
                        }
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        <div className='flex items - center space - x-3'>;
                          {item.icon && <item.icon className='w - 5 h - 5' />}
                          <span>{item.name}</span>;
                        </div>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 200 ${
                            active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (
                        <div className='ml - 8 mt - 2 space - y-2'>;
                          {item.dropdown.map (dropdown_item => (                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                            >                        <div className="ml - 8 mt - 2 space - y-2">;
                          {item.dropdown.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                              className="block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200";
                            >;
                              {dropdown_item.name}
                            </Link>))}
                        </div>)}
                    </div>) : (
                    <Link;
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
    </nav>);
}
;
export default UltraAdvancedNavigation);
}
;
export default UltraAdvancedNavigation;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default UltraAdvancedNavigation;

export default UltraAdvancedNavigation;
;=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

};


export default UltraAdvancedNavigation;  )
}
export default UltraAdvancedNavigation;

export default UltraAdvancedNavigation;
export default UltraAdvancedNavigation;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
