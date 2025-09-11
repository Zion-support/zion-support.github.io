
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {


const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',;
const companyLinks = [
  { name: 'Home', href: '/', icon: Home }
  { name: 'About Us', href: '/about', icon: Users }
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket }
  {
    name: 'Innovative 2026'
    href: '/2026-innovative-services-showcase'
    icon: Zap
  }
  {
    name: 'Ultimate 2026'
    href: '/ultimate-2026-services-showcase'
    icon: Sparkles
  }
  {
    name: '2026 Pricing'
    href: '/revolutionary-2026-pricing'
    icon: DollarSign
  }
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase }
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen }
  { name: 'Careers', href: '/careers', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Innovative 2026', href: '/2026-innovative-services-showcase', icon: Zap }
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles }
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign }
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase }
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen }
  { name: 'Careers', href: '/careers', icon: Users }
  { name: 'Contact', href: '/contact', icon: MessageCircle }
const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },
  { name: 'Innovative 2026', href: '/2026-innovative-services-showcase', icon: Zap },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles },
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

  const navigationItems = [
    {
      name: 'AI Services'
      href: '/services?category=ai'
      icon: Brain
      color: 'from-blue-500 to-cyan-500'
      description: 'Autonomous AI systems and consciousness interfaces'
      subItems: [




const companyLinks = [;
  { name: 'Home', href: '/', icon: Home },;
  { name: 'About Us', href: '/about', icon: Users },;
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },;
  {;
    name: 'Innovative 2026',;
    href: '/2026-innovative-services-showcase',;
    icon: Zap,;
  },;
  {;
    name: 'Ultimate 2026',;
    href: '/ultimate-2026-services-showcase',;
    icon: Sparkles,;
  },;
  {;
    name: '2026 Pricing',;
    href: '/revolutionary-2026-pricing',;
    icon: DollarSign,;
  },;
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: 'Careers', href: '/careers', icon: Users },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },];  { name: 'Innovative 2026', href: '/2026-innovative-services-showcase', icon: Zap },;
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles },;
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign },;
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: 'Careers', href: '/careers', icon: Users },;
  { name: 'Contact', href: '/contact', icon: MessageCircle }
const UltraAdvancedNavigation2026 = () => {;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  const navigationItems = [;
    {;
      name: 'AI Services',;
      href: '/services?category=ai',;
      icon: Brain,;
      color: 'from-blue-500 to-cyan-500',;
      description: 'Autonomous AI systems and consciousness interfaces',;
      subItems: [;
        {;
          name: 'AI Autonomous Agents',;
          href: '/services?category=ai-autonomous',;
          description: 'Fully autonomous AI systems',;
        },;
        {;
          name: 'AI Consciousness',;
          href: '/services?category=ai-consciousness',;
          description: 'Consciousness simulation and interfaces',;
        },;
        {;
          name: 'AI Healthcare',;
          href: '/services?category=ai-healthcare',;
          description: 'Medical AI and diagnostics',;
        },;
        {;
          name: 'AI Education',;
          href: '/services?category=ai-education',;
          description: 'Educational AI systems',;
        },;
        {;
          name: 'AI Legal',;
          href: '/services?category=ai-legal',;
          description: 'Legal AI and compliance',;
        },;
        {;
          name: 'AI Creative',;
          href: '/services?category=ai-creative',;
          description: 'Creative AI and content generation',;
        },;
      ],;
    },    {        { name: 'AI Autonomous Agents', href: '/services?category=ai-autonomous', description: 'Fully autonomous AI systems' },;
        { name: 'AI Consciousness', href: '/services?category=ai-consciousness', description: 'Consciousness simulation and interfaces' },;
        { name: 'AI Healthcare', href: '/services?category=ai-healthcare', description: 'Medical AI and diagnostics' },;
        { name: 'AI Education', href: '/services?category=ai-education', description: 'Educational AI systems' },;
        { name: 'AI Legal', href: '/services?category=ai-legal', description: 'Legal AI and compliance' },;
        { name: 'AI Creative', href: '/services?category=ai-creative', description: 'Creative AI and content generation' }
      ];
    };
      name: 'Quantum Tech',;
      href: '/services?category=quantum',;
      icon: Atom,;
      color: 'from-purple-500 to-indigo-500',;
      description: 'Quantum computing and space technology',;
      subItems: [;
        {;
          name: 'Quantum Space Tech',;
          href: '/services?category=quantum-space',;
          description: 'Space exploration and communication',;
        },;
        {;
          name: 'Quantum Computing',;
          href: '/services?category=quantum-computing',;
          description: 'Advanced quantum systems',;
        },;
        {;
          name: 'Quantum AI',;
          href: '/services?category=quantum-ai',;
          description: 'Quantum-powered AI',;
        },;
        {;
          name: 'Quantum Security',;
          href: '/services?category=quantum-security',;
          description: 'Quantum encryption and security',;
        },;
      ],;
    },    {        { name: 'Quantum Space Tech', href: '/services?category=quantum-space', description: 'Space exploration and communication' },;
        { name: 'Quantum Computing', href: '/services?category=quantum-computing', description: 'Advanced quantum systems' },;
        { name: 'Quantum AI', href: '/services?category=quantum-ai', description: 'Quantum-powered AI' },;
        { name: 'Quantum Security', href: '/services?category=quantum-security', description: 'Quantum encryption and security' }
      ];
    };
      name: 'Metaverse',;
      href: '/services?category=metaverse',;
      icon: Globe,;
      color: 'from-pink-500 to-rose-500',;
      description: 'Virtual worlds and digital reality',;
      subItems: [;
        {;
          name: 'Metaverse Platforms',;
          href: '/services?category=metaverse-platforms',;
          description: 'Virtual world platforms',;
        },;
        {;
          name: 'Digital Reality',;
          href: '/services?category=digital-reality',;
          description: 'Immersive experiences',;
        },;
        {;
          name: 'Holographic Tech',;
          href: '/services?category=holographic',;
          description: '3D holographic systems',;
        },;
        {;
          name: 'Consciousness Interface',;
          href: '/services?category=consciousness-interface',;
          description: 'Brain-computer interfaces',;
        },;
      ],;
    },    {        { name: 'Metaverse Platforms', href: '/services?category=metaverse-platforms', description: 'Virtual world platforms' },;
        { name: 'Digital Reality', href: '/services?category=digital-reality', description: 'Immersive experiences' },;
        { name: 'Holographic Tech', href: '/services?category=holographic', description: '3D holographic systems' },;
        { name: 'Consciousness Interface', href: '/services?category=consciousness-interface', description: 'Brain-computer interfaces' }

      ]
    }
      name: 'Enterprise IT'
      href: '/services?category=enterprise'
      icon: Zap
      color: 'from-green-500 to-emerald-500'
      description: 'Enterprise solutions and infrastructure'
      subItems: [
        {
          name: 'Cloud Solutions'
          href: '/services?category=cloud'
          description: 'Cloud infrastructure and services'
        }
        {
          name: 'Cybersecurity'
          href: '/services?category=security'
          description: 'Advanced security solutions'
        }
        {
          name: 'Data Analytics'
          href: '/services?category=analytics'
          description: 'Business intelligence and analytics'
        }
        {
          name: 'DevOps'
          href: '/services?category=devops'
          description: 'Development and operations'
        }
      ]
    },  ];        { name: 'Cloud Solutions', href: '/services?category=cloud', description: 'Cloud infrastructure and services' }
        { name: 'Cybersecurity', href: '/services?category=security', description: 'Advanced security solutions' }
        { name: 'Data Analytics', href: '/services?category=analytics', description: 'Business intelligence and analytics' }
        { name: 'DevOps', href: '/services?category=devops', description: 'Development and operations' }
      ]
    }
          name: 'DevOps',
          href: '/services?category=devops',
          description: 'Development and operations',
        },
      ],
    },  ];        { name: 'Cloud Solutions', href: '/services?category=cloud', description: 'Cloud infrastructure and services' },
        { name: 'Cybersecurity', href: '/services?category=security', description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services?category=analytics', description: 'Business intelligence and analytics' },



        { name: 'AI Autonomous Agents', href: '/services?category=ai-autonomous', description: 'Fully autonomous AI systems' },
        { name: 'AI Consciousness', href: '/services?category=ai-consciousness', description: 'Consciousness simulation and interfaces' },
        { name: 'AI Healthcare', href: '/services?category=ai-healthcare', description: 'Medical AI and diagnostics' },
        { name: 'AI Education', href: '/services?category=ai-education', description: 'Educational AI systems' },
        { name: 'AI Legal', href: '/services?category=ai-legal', description: 'Legal AI and compliance' },
        { name: 'AI Creative', href: '/services?category=ai-creative', description: 'Creative AI and content generation' }
      ]
    }
      name: 'Quantum Tech'
      href: '/services?category=quantum'
      icon: Atom
      color: 'from-purple-500 to-indigo-500'
      description: 'Quantum computing and space technology'
      subItems: [
        {
          name: 'Quantum Space Tech'
          href: '/services?category=quantum-space'
          description: 'Space exploration and communication'
        }
        {
          name: 'Quantum Computing'
          href: '/services?category=quantum-computing'
          description: 'Advanced quantum systems'
        }
        {
          name: 'Quantum AI'
          href: '/services?category=quantum-ai'
          description: 'Quantum-powered AI'
        }
        {
          name: 'Quantum Security'
          href: '/services?category=quantum-security'
          description: 'Quantum encryption and security'
        }
      ]
    },    {        { name: 'Quantum Space Tech', href: '/services?category=quantum-space', description: 'Space exploration and communication' }
        { name: 'Quantum Computing', href: '/services?category=quantum-computing', description: 'Advanced quantum systems' }
        { name: 'Quantum AI', href: '/services?category=quantum-ai', description: 'Quantum-powered AI' }
        { name: 'Quantum Security', href: '/services?category=quantum-security', description: 'Quantum encryption and security' }
      ]
    }
      name: 'Metaverse'
      href: '/services?category=metaverse'
      icon: Globe
      color: 'from-pink-500 to-rose-500'
      description: 'Virtual worlds and digital reality'
      subItems: [
        {
          name: 'Metaverse Platforms'
          href: '/services?category=metaverse-platforms'
          description: 'Virtual world platforms'
        }
        {
          name: 'Digital Reality'
          href: '/services?category=digital-reality'
          description: 'Immersive experiences'
        }
        {
          name: 'Holographic Tech'
          href: '/services?category=holographic'
          description: '3D holographic systems'
        }
        {
          name: 'Consciousness Interface'
          href: '/services?category=consciousness-interface'
          description: 'Brain-computer interfaces'
        }
      ]
    },    {        { name: 'Metaverse Platforms', href: '/services?category=metaverse-platforms', description: 'Virtual world platforms' }
        { name: 'Digital Reality', href: '/services?category=digital-reality', description: 'Immersive experiences' }
        { name: 'Holographic Tech', href: '/services?category=holographic', description: '3D holographic systems' }
        { name: 'Consciousness Interface', href: '/services?category=consciousness-interface', description: 'Brain-computer interfaces' }
      ]
    }
      name: 'Enterprise IT'
      href: '/services?category=enterprise'
      icon: Zap
      color: 'from-green-500 to-emerald-500'
      description: 'Enterprise solutions and infrastructure'
      subItems: [
        {
          name: 'Cloud Solutions'
          href: '/services?category=cloud'
          description: 'Cloud infrastructure and services'
        }
        {
          name: 'Cybersecurity'
          href: '/services?category=security'
          description: 'Advanced security solutions'
        }
        {
          name: 'Data Analytics'
          href: '/services?category=analytics'
          description: 'Business intelligence and analytics'
        }
        {
  ];

    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709',  };    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
const company_links = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026 - services - showcase', icon: Rocket },
  {
    name: 'Innovative 2026',
    href: '/2026 - innovative - services - showcase',
    icon: Zap,
  },
  {
    name: 'Ultimate 2026',
    href: '/ultimate - 2026 - services - showcase',
    icon: Sparkles,
  },
  {
    name: '2026 Pricing',
    href: '/revolutionary - 2026 - pricing',
    icon: DollarSign,
  },
  { name: 'Case Studies', href: '/case - studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Innovative 2026', href: '/2026 - innovative - services - showcase', icon: Zap },
  { name: 'Ultimate 2026', href: '/ultimate - 2026 - services - showcase', icon: Sparkles },
  { name: '2026 Pricing', href: '/revolutionary - 2026 - pricing', icon: DollarSign },
  { name: 'Case Studies', href: '/case - studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
const UltraAdvancedNavigation2026 = () =>: any {
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      setIsScrolled (window.scroll_y > 20);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);  }, []);      setIsScrolled (window.scroll_y > 20);
    }
    window.addEventListener ('scroll', handle_scroll);
    return () => window.removeEventListener ('scroll', handle_scroll);
  const navigation_items = [;
    {
      name: 'AI Services',
      href: '/services?category = ai',
      icon: Brain,
      color: 'from - blue - 500 to - cyan - 500',
      description: 'Autonomous AI systems and consciousness interfaces',
      sub_items: [;
        {
          name: 'AI Autonomous Agents',
          href: '/services?category = ai - autonomous',
          description: 'Fully autonomous AI systems',
        },
        {
          name: 'AI Consciousness',
          href: '/services?category = ai - consciousness',
          description: 'Consciousness simulation and interfaces',
        },
        {
          name: 'AI Healthcare',
          href: '/services?category = ai - healthcare',
          description: 'Medical AI and diagnostics',
        },
        {
          name: 'AI Education',
          href: '/services?category = ai - education',
          description: 'Educational AI systems',
        },
        {
          name: 'AI Legal',
          href: '/services?category = ai - legal',
          description: 'Legal AI and compliance',
        },
        {
          name: 'AI Creative',
          href: '/services?category = ai - creative',
          description: 'Creative AI and content generation',
        },
      ],
    },    {        { name: 'AI Autonomous Agents', href: '/services?category = ai - autonomous', description: 'Fully autonomous AI systems' },
        { name: 'AI Consciousness', href: '/services?category = ai - consciousness', description: 'Consciousness simulation and interfaces' },
        { name: 'AI Healthcare', href: '/services?category = ai - healthcare', description: 'Medical AI and diagnostics' },
        { name: 'AI Education', href: '/services?category = ai - education', description: 'Educational AI systems' },
        { name: 'AI Legal', href: '/services?category = ai - legal', description: 'Legal AI and compliance' },
        { name: 'AI Creative', href: '/services?category = ai - creative', description: 'Creative AI and content generation' }
      ];
    }=======
      name: 'Quantum Tech',
      href: '/services?category = quantum',
      icon: Atom,
      color: 'from - purple - 500 to - indigo - 500',
      description: 'Quantum computing and space technology',
      sub_items: [;
        {
          name: 'Quantum Space Tech',
          href: '/services?category = quantum - space',
          description: 'Space exploration and communication',
        },
        {
          name: 'Quantum Computing',
          href: '/services?category = quantum - computing',
          description: 'Advanced quantum systems',
        },
        {
          name: 'Quantum AI',
          href: '/services?category = quantum - ai',
          description: 'Quantum - powered AI',
        },
        {
          name: 'Quantum Security',
          href: '/services?category = quantum - security',
          description: 'Quantum encryption and security',
        },
      ],
    },    {        { name: 'Quantum Space Tech', href: '/services?category = quantum - space', description: 'Space exploration and communication' },
        { name: 'Quantum Computing', href: '/services?category = quantum - computing', description: 'Advanced quantum systems' },
        { name: 'Quantum AI', href: '/services?category = quantum - ai', description: 'Quantum - powered AI' },
        { name: 'Quantum Security', href: '/services?category = quantum - security', description: 'Quantum encryption and security' }
      ];
    }
      name: 'Metaverse',
      href: '/services?category = metaverse',
      icon: Globe,
      color: 'from - pink - 500 to - rose - 500',
      description: 'Virtual worlds and digital reality',
      sub_items: [;
        {
          name: 'Metaverse Platforms',
          href: '/services?category = metaverse - platforms',
          description: 'Virtual world platforms',
        },
        {
          name: 'Digital Reality',
          href: '/services?category = digital - reality',
          description: 'Immersive experiences',
        },
        {
          name: 'Holographic Tech',
          href: '/services?category = holographic',
          description: '3D holographic systems',
        },
        {
          name: 'Consciousness Interface',
          href: '/services?category = consciousness - interface',
          description: 'Brain - computer interfaces',
        },
      ],
    },    {        { name: 'Metaverse Platforms', href: '/services?category = metaverse - platforms', description: 'Virtual world platforms' },
        { name: 'Digital Reality', href: '/services?category = digital - reality', description: 'Immersive experiences' },
        { name: 'Holographic Tech', href: '/services?category = holographic', description: '3D holographic systems' },
        { name: 'Consciousness Interface', href: '/services?category = consciousness - interface', description: 'Brain - computer interfaces' }
      ];
    }
      name: 'Enterprise IT',
      href: '/services?category = enterprise',
      icon: Zap,
      color: 'from - green - 500 to - emerald - 500',
      description: 'Enterprise solutions and infrastructure',

            {/* Logo */}


            {/* Logo */}

      sub_items: [;
        {
          name: 'Cloud Solutions',
          href: '/services?category = cloud',
          description: 'Cloud infrastructure and services',
        },
        {
          name: 'Cybersecurity',
          href: '/services?category = security',
          description: 'Advanced security solutions',
        },
        {
          name: 'Data Analytics',
          href: '/services?category = analytics',
          description: 'Business intelligence and analytics',
        },
        {
          name: 'DevOps',
          href: '/services?category = devops',
          description: 'Development and operations',
        },
      ],
    },  ];        { name: 'Cloud Solutions', href: '/services?category = cloud', description: 'Cloud infrastructure and services' },
        { name: 'Cybersecurity', href: '/services?category = security', description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services?category = analytics', description: 'Business intelligence and analytics' },
        { name: 'DevOps', href: '/services?category = devops', description: 'Development and operations' }
      ];
    }
  const contact_info = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',  }    address: '364 E Main St STE 1008 Middletown DE 19709';
  }
;
  return (
    <>;
      {/* Enhanced Navigation Bar */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
          is_scrolled;
            ? 'bg - black / 90 backdrop - blur - xl border - b border - purple - 500 / 20 shadow - 2xl';
            : 'bg - transparent';
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>

            {/* Logo */}
            <Link href='/' className='flex items - center space - x-3 group'>;
              <div className='relative'>;
                <div className='w - 12 h - 12 bg - gradient - to - br from - purple - 500 via - pink - 500 to - cyan - 500 rounded - 2xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                  <Rocket className='w - 6 h - 6 text - white' />;
                </div>;
                <div className='absolute inset - 0 bg - gradient - to - br from - purple - 500 via - pink - 500 to - cyan - 500 rounded - 2xl blur - xl opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300'></div>;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text - 2xl font - bold bg - gradient - to - r from - purple - 400 via - pink - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text - xs text - gray - 400'>;
                  Revolutionary Technology Solutions;
                </div>              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'>;
              {navigation_items.map (item => (
                <div key={item.name} className='relative group'>            {/* Logo */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </Link>
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>;
                  Revolutionary Technology Solutions;
                </div>              </div>;
            </Link>;
            {/* Desktop Navigation */}

            {/* Desktop Navigation */}
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}


                              <Link
                                key={subItem && subItem.name}
                                href={subItem && subItem.href}
                                className="block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}

                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>;
                          <Link
                            href={item.href}
                            className="block w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {item.name}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}


                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Contact
                </Link>
              </div>
            </div>
                  className='text-gray-300 hover:text-white transition-colors duration-200 font-medium'>                  Contact                  All Services;
                </Link>;
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">;
                  Pricing;
                </Link>;
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">;
                              </p>;
                            </div>;
                          </div>;
                          <div className='space - y-2'>;
                            {item.sub_items.map (sub_item => (
                              <Link;
                                key={sub_item.name}
                                href={sub_item.href}
                                className='block p - 3 rounded - xl hover:bg - purple - 500 / 10 transition - colors duration - 200 group';
                                on_click={() => setActiveDropdown (null)}
                              >;
                                <div className='text - white font - medium group - hover:text - purple - 300 transition - colors duration - 200'>;
                                  {sub_item.name}
                                </div>;
                                <div className='text - gray - 400 text - sm group - hover:text - gray - 300 transition - colors duration - 200'>                                  {sub_item.description}                      >;
                        <div className="p - 4">;
                          <div className="flex items - center space - x-3 mb - 4">;
                            <div className={`w - 10 h - 10 bg - gradient - to - br ${item.color} rounded - xl flex items - center justify - center`}>;
                              <item.icon className="w - 5 h - 5 text - white" />;
                            </div>;
                            <div>;
                              <h3 className="text - white font - semibold">{item.name}</h3>;
                              <p className="text - gray - 400 text - sm">{item.description}</p>;
                            </div>;
                          </div>;
                          <div className="space - y-2">;
                            {item.sub_items.map ((sub_item) => (
                              <Link;
                                key={sub_item.name}
                                href={sub_item.href}
                                className="block p - 3 rounded - xl hover:bg - purple - 500 / 10 transition - colors duration - 200 group";
                                on_click={() => setActiveDropdown (null)}
                              >;
                                <div className="text - white font - medium group - hover:text - purple - 300 transition - colors duration - 200">;
                                  {sub_item.name}
                                </div>;
                                <div className="text - gray - 400 text - sm group - hover:text - gray - 300 transition - colors duration - 200">;
                                  {sub_item.description}
                                </div>;
                              </Link>))}
                          </div>;
                          <Link;
                            href={item.href}
                            className='block w - full mt - 4 p - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - center font - medium rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200'                            on_click={() => setActiveDropdown (null)}
                          <Link;
                            href={item.href}
                            className="block w - full mt - 4 p - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - center font - medium rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200";
                          >;
                            View All {item.name}
                          </Link>;
                        </div>;
                      </motion.div>)}
                  </AnimatePresence>;
                </div>))}
              {/* Quick Links */}
              <div className='flex items - center space - x-6'>;
                <Link;
                  href='/services';
                  className='text - gray - 300 hover:text - white transition - colors duration - 200 font - medium';
                >;
                  All Services;
                </Link>;
                <Link;
                  href='/pricing';
                  className='text - gray - 300 hover:text - white transition - colors duration - 200 font - medium';
                >;
                  Pricing;
                </Link>;
                <Link;
                  href='/contact';
                  className='text - gray - 300 hover:text - white transition - colors duration - 200 font - medium';
                >                  Contact                  All Services;
                </Link>;
                <Link href="/pricing" className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium">;
                  Pricing;
                </Link>;
                <Link href="/contact" className="text - gray - 300 hover:text - white transition - colors duration - 200 font - medium">;
                  Contact;
                </Link>;
              </div>;
            </div>;

            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started

                Get Started
              </Link>
            </div>
              </Link>;
            </div>;


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>


            {/* Mobile Menu Button */}
            <button;
              on_click={() => setIsOpen (!is_open)}
              className='lg:hidden p - 2 text - gray - 300 hover:text - white transition - colors duration - 200';
            >;
              {is_open ? (
                <X className='w - 6 h - 6' />) : (
                <Menu className='w - 6 h - 6' />)}            </button>              className="lg:hidden p - 2 text - gray - 300 hover:text - white transition - colors duration - 200";
            >;
              {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}


            </button>;
          </div>;
        </div>;
      </nav>;








      {/* Mobile Navigation Overlay */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div

            onClick={() => setIsOpen(false)}
          >;
            <motion&& motion.div

            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden'            onClick={() => setIsOpen(false)}            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden'            onClick={() => setIsOpen(false)}

            onClick={() => setIsOpen(false)}


          >
            <motion.div

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200";
                >;
                  <X className="w-6 h-6" />;
                </button>;
              </div>;
              {/* Mobile Navigation Items */}
              <div className="flex items-center justify-between mb-8">;
                <div className="flex items-center space-x-3">;
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">;
                    <Rocket className="w-5 h-5 text-white" />;
                  </div>;
                  <span className="text-white font-bold text-lg">Menu</span>;
                </div>;
                <button
                  onClick={() => setIsOpen(false)}


              {/* Mobile Navigation Items */}
            onClick={() => setIsOpen(false)}

          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-purple-500/20 p-6 overflow-y-auto'
              onClick={e => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center'>
                    <Rocket className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-white font-bold text-lg'>Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-2 text-gray-300 hover:text-white transition-colors duration-200'
                >
                  <X className='w-6 h-6' />                </button>
              </div>
              {/* Mobile Navigation Items */}            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Mobile Navigation Items */}
                {navigationItems.map(item => (
                  <div
                    key={item.name}
                    className='border-b border-gray-700/50 pb-4'
                  >
                      href={item.href}
                      className='flex items-center space-x-3 text-white hover:text-purple-300 transition-colors duration-200 py-2'
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                      >
                        <item.icon className='w-4 h-4 text-white' />
                      </div>
                      <span className='font-medium'>{item.name}</span>
                    </Link>
                    {/* Mobile Sub-items */}
                    <div className='mt-3 ml-11 space-y-2'>
                      {item.subItems.slice(0, 3).map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1'                          onClick={() => setIsOpen(false)}                          className="block text-gray-400 hover: text-white transition-colors duration-200 text-sm py-1"
                          onClick={() => setIsOpen(false)}

                        className={`w-8 h-8 bg-gradient-to-br ${item && item.color} rounded-lg flex items-center justify-center`}>;
                        <item && item.icon className='w-4 h-4 text-white' />;
                      </div>;
                      <span className='font-medium'>{item && item.name}</span>;
                    </Link>;

                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}


                {/* Quick Links */}
                <div className='space-y-3 pt-4'>                  <Link
                    href='/services'
                    className='block text-gray-300 hover:text-white transition-colors duration-200 font-medium'                    onClick={() => setIsOpen(false)}                <div className="space-y-3 pt-4">;
                  <Link
                    href="/services"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium">;
                    All Services;
                  </Link>;
                  <Link
                    href='/pricing'
                    className='block text-gray-300 hover:text-white transition-colors duration-200 font-medium'                    onClick={() => setIsOpen(false)}                    href="/pricing";
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium";

                {/* Quick Links */}
                <div className='space-y-3 pt-4'>
                  <Link
                    href='/services'
                    className='block text-gray-300 hover:text-white transition-colors duration-200 font-medium'                    onClick={() => setIsOpen(false)}                <div className="space-y-3 pt-4">
                <div className="space-y-3 pt-4">
                  <Link
                    href="/services"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"

                    onClick={() => setIsOpen(false)}
                  >;
                    Pricing;
                  </Link>;
                  <Link

                    onClick={() => setIsOpen(false)}

                {/* Get Started Button - Mobile */}
                <div className='pt-4'>;
                  <Link
                    href='/contact'
                <div className="pt-6 border-t border-gray-700/50 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
                    className='block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200'                    onClick={() => setIsOpen(false)}                  </div>;
                  <div className="flex items-center space-x-3 text-gray-300">;
                    <Mail className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-3 text-gray-300">;
                    <MapPin className="w-4 h-4" />;
                    <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
                {/* Get Started Button - Mobile */}
            className='fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 40 lg:hidden'            on_click={() => setIsOpen (false)}            className="fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 40 lg:hidden";
            on_click={() => setIsOpen (false)}
          >;
            <motion.div;
              initial={{ coordinate_x: '100%' }}
              animate={{ coordinate_x: 0 }}
              exit={{ coordinate_x: '100%' }}
              transition={{ duration: 0.3, ease: 'ease_out' }}
              className='absolute right - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - purple - 500 / 20 p - 6 overflow - y-auto';
              on_click={e => e.stop_propagation ()}
            >;
              {/* Mobile Menu Header */}
              <div className='flex items - center justify - between mb - 8'>;
                <div className='flex items - center space - x-3'>;
                  <div className='w - 10 h - 10 bg - gradient - to - br from - purple - 500 via - pink - 500 to - cyan - 500 rounded - xl flex items - center justify - center'>;
                    <Rocket className='w - 5 h - 5 text - white' />;
                  </div>;
                  <span className='text - white font - bold text - lg'>Menu</span>;
                </div>;
                <button;
                  on_click={() => setIsOpen (false)}
                  className='p - 2 text - gray - 300 hover:text - white transition - colors duration - 200';
                >;
                  <X className='w - 6 h - 6' />                </button>;
              </div>;
              {/* Mobile Navigation Items */}            >;
              {/* Mobile Menu Header */}
              <div className="flex items - center justify - between mb - 8">;
                <div className="flex items - center space - x-3">;
                  <div className="w - 10 h - 10 bg - gradient - to - br from - purple - 500 via - pink - 500 to - cyan - 500 rounded - xl flex items - center justify - center">;
                    <Rocket className="w - 5 h - 5 text - white" />;
                  </div>;
                  <span className="text - white font - bold text - lg">Menu</span>;
                </div>;
                <button;
                  on_click={() => setIsOpen (false)}
                  className="p - 2 text - gray - 300 hover:text - white transition - colors duration - 200";
                >;
                  <X className="w - 6 h - 6" />;
                </button>;
              </div>;
              {/* Mobile Navigation Items */}
              <div className='space - y-4'>;
                {navigation_items.map (item => (
                  <div;
                    key={item.name}
                    className='border - b border - gray - 700 / 50 pb - 4';
                  >;
                      href={item.href}
                      className='flex items - center space - x-3 text - white hover:text - purple - 300 transition - colors duration - 200 py - 2';
                      on_click={() => setIsOpen (false)}
                    >;
                      <div;
                        className={`w - 8 h - 8 bg - gradient - to - br ${item.color} rounded - lg flex items - center justify - center`}
                      >;
                        <item.icon className='w - 4 h - 4 text - white' />;
                      </div>;
                      <span className='font - medium'>{item.name}</span>;
                    </Link>;
                    {/* Mobile Sub - items */}
                    <div className='mt - 3 ml - 11 space - y-2'>;
                      {item.sub_items.slice (0, 3).map (sub_item => (
                        <Link;
                          key={sub_item.name}
                          href={sub_item.href}
                          className='block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm py - 1'                          on_click={() => setIsOpen (false)}                          className="block text - gray - 400 hover: text - white transition - colors duration - 200 text - sm py - 1";
                          on_click={() => setIsOpen (false)}
                        >;
                          {sub_item.name}
                        </Link>))}
                    </div>;
                  </div>))}
                {/* Quick Links */}
                <div className='space - y-3 pt - 4'>;
                  <Link;
                    href='/services';
                    className='block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium'                    on_click={() => setIsOpen (false)}                <div className="space - y-3 pt - 4">;
                  <Link;
                    href="/services";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
                  >;
                    All Services;
                  </Link>;
                  <Link;
                    href='/pricing';
                    className='block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium'                    on_click={() => setIsOpen (false)}                    href="/pricing";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
                    on_click={() => setIsOpen (false)}
                  >;
                    Pricing;
                  </Link>;
                  <Link;
                    href='/contact';
                    className='block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium'                    on_click={() => setIsOpen (false)}                    href="/contact";
                    className="block text - gray - 300 hover:text - white transition - colors duration - 200 font - medium";
                    on_click={() => setIsOpen (false)}
                  >;
                    Contact;
                  </Link>;
                </div>;
                {/* Contact Info - Mobile */}
                <div className='pt - 6 border - t border - gray - 700 / 50 space - y-3'>;
                  <div className='flex items - center space - x-3 text - gray - 300'>;
                    <Phone className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.phone}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 300'>;
                    <Mail className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-3 text - gray - 300'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span className='text - sm'>{contact_info.address}</span>                  </div>;
                </div>;
                {/* Get Started Button - Mobile */}
                <div className='pt - 4'>;
                  <Link;
                    href='/contact';
                    className='block w - full px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - center font - medium rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200'                    on_click={() => setIsOpen (false)}                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 300">;
                    <Mail className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center space - x-3 text - gray - 300">;
                    <MapPin className="w - 4 h - 4" />;
                    <span className="text - sm">{contact_info.address}</span>;
                  </div>;
                </div>;
                {/* Get Started Button - Mobile */}
                <div className='pt - 4'>;
                  <Link;
                    href='/contact';
                    className='block w - full px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - center font - medium rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200'                <div className="pt - 4">;
                  <Link;
                    href="/contact";
                    className="block w - full px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - center font - medium rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200";
                  >;
                    Get Started Today;
                  </Link>;
                </div>;
              </div>;

        )}
      </AnimatePresence>

      <div className="h-20"></div>
    </>

  );
}
export default UltraAdvancedNavigation2026;


        )}
      </AnimatePresence>





export default UltraAdvancedNavigation2026;    </>
  );
}
export default UltraAdvancedNavigation2026;

};


export default UltraAdvancedNavigation2026;
export default UltraAdvancedNavigation2026;
