<<<<<<< HEAD
=======
<<<<<<< HEAD
import Link from 'next/link';'


import { motion, AnimatePresence  } from 'framer-motion';'
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';'

export default function UltraAdvancedNavigation2026V2() {
  }
  const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
;

}

const handleScroll = () => {;
      }
      setIsScrolled(window && window.scrollY > 20)
};

    window && window.addEventListener('scroll', handleScroll);'
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20)'
};

    window && window.addEventListener('scroll', handleScroll);'
    return () => window && window.removeEventListener('scroll', handleScroll);'

const navigationItems = [;
  {;
      }
      "name": 'Home',;'
      "href": '/',;'
      "icon": <Zap className='w-4 h-4' />,;'
    },;
    {;
      }
      "name": 'Services',;'
      "href": '/services',;'
      "icon": <Brain className='w-4 h-4' />,;'
      "dropdown": [;
        {;
          }
          "name": 'AI & Machine Learning',;'
          "href": '/services?category=ai',;'
          "icon": <Brain className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Quantum & Space Tech',;'
          "href": '/services?category=quantum',;'
          "icon": <Atom className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Emerging Technologies',;'
          "href": '/services?category=emerging',;'
          "icon": <Microscope className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Micro SaaS',;'
          "href": '/services?category=micro-saas',;'
          "icon": <Code className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Metaverse & VR',;'
          "href": '/services?category=metaverse',;'
          "icon": <Gamepad2 className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Cybersecurity',;'
          "href": '/services?category=cybersecurity',;'
          "icon": <Shield className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Space Technology',;'
          "href": '/services?category=space',;'
          "icon": <Rocket className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Biotech & Healthcare',;'
          "href": '/services?category=biotech',;'
          "icon": <TestTube className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Blockchain & Web3',;'
          "href": '/services?category=blockchain',;'
          "icon": <Database className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Autonomous Vehicles',;'
          "href": '/services?category=transportation',;'
          "icon": <Car className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Cloud & Infrastructure',;'
          "href": '/services?category=cloud',;'
          "icon": <Cloud className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Edge Computing',;'
          "href": '/services?category=edge',;'
          "icon": <Server className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'IoT & Connectivity',;'
          "href": '/services?category=iot',;'
          "icon": <Network className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Semiconductor Tech',;'
          "href": '/services?category=semiconductor',;'
          "icon": <Cpu className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Creative & Design',;'
          "href": '/services?category=creative',;'
          "icon": <Palette className='w-4 h-4' />,;'
        },;
        {;
          }
          "name": 'Global Solutions',;'
          "href": '/services?category=global',;'
          "icon": <Globe className='w-4 h-4' />,;'
        },;
      ],;
    },    {;
      }
      "name": 'Showcase',;'
      "href": '/enhanced-services-showcase-2026-v2',;'
      "icon": <Rocket className='w-4 h-4' />,;'
    },;
    {;
      }
      "name": 'Pricing',;'
      "href": '/pricing-enhanced-2026',;'
      "icon": <Database className='w-4 h-4' />,;'
    },;
    {;
      }
      "name": 'About',;'
      "href": '/about',;'
      "icon": <Globe className='w-4 h-4' />,;'
    },;
    {;
      }
      "name": 'Contact',;'
      "href": '/contact',;'
      "icon": <Mail className='w-4 h-4' />,;'
    }  ];      "icon": <Mail className="w-4 h-4" />;"
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import Link from 'next/link';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
=======
import Link from 'next/link';

=======

<<<<<<< HEAD
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    }
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
<<<<<<< HEAD
const contactInfo = {
  }
  "mobile": '+1 302 464 0950',;'
    "email": 'kleber@ziontechgroup && ziontechgroup.com',;'
    "address": '364 E Main St STE 1008 Middletown DE 19709'  };    "address": '364 E Main St STE 1008 Middletown DE 19709';'
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);'
    return () => window.removeEventListener('scroll', handleScroll)'
=======
>>>>>>> origin/resolved-merge-conflicts
import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
export default function UltraAdvancedNavigation2026V2() {
=======
<<<<<<< HEAD
import {
  Menu
  X
  ChevronDown
  Search
  Phone
  Mail
  MapPin
  Zap
  Brain
  Atom
  Microscope
  Gamepad2
  Shield
  Rocket
  Database
  TestTube
  Car
  Globe
  Code
  Palette
  Cloud
  Server
  Network
  Cpu;
} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Zap,
  Brain,
  Atom,
  Microscope,
  Gamepad2,
  Shield,
  Rocket,
  Database,
  TestTube,
  Car,
  Globe,
  Code,
  Palette,
  Cloud,
  Server,
  Network,;
  Cpu,;
} from 'lucide-react';

} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {;
} from 'lucide-react';
>>>>>>> merged-prs-20250907-203621

import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const navigationItems = $2;
      href: '/',
      icon: <Zap className = $2;
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className = $2;
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: <Brain className = $2;
        { name: 'Quantum & Space Tech', href: '/services?category=quantum', icon: <Atom className = $2;
        { name: 'Emerging Technologies', href: '/services?category=emerging', icon: <Microscope className = $2;
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: <Code className = $2;
        { name: 'Metaverse & VR', href: '/services?category=metaverse', icon: <Gamepad2 className = $2;
        { name: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className = $2;
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className = $2;
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <TestTube className = $2;
        { name: 'Blockchain & Web3', href: '/services?category=blockchain', icon: <Database className = $2;
        { name: 'Autonomous Vehicles', href: '/services?category=transportation', icon: <Car className = $2;
        { name: 'Cloud & Infrastructure', href: '/services?category=cloud', icon: <Cloud className = $2;
        { name: 'Edge Computing', href: '/services?category=edge', icon: <Server className = $2;
        { name: 'IoT & Connectivity', href: '/services?category=iot', icon: <Network className = $2;
        { name: 'Semiconductor Tech', href: '/services?category=semiconductor', icon: <Cpu className = $2;
        { name: 'Creative & Design', href: '/services?category=creative', icon: <Palette className = $2;
        { name: 'Global Solutions', href: '/services?category=global', icon: <Globe className = $2;
    {
      name: 'Showcase',
      href: '/enhanced-services-showcase-2026-v2',
      icon: <Rocket className = $2;
    {
      name: 'Pricing',
      href: '/pricing-enhanced-2026',
      icon: <Database className = $2;
    {
      name: 'About',
      href: '/about',
      icon: <Globe className = $2;
    {
      name: 'Contact',
      href: '/contact',
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD
=======
  useEffect(() => {
    const handleScroll = () => {


      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = [
    {
      name: 'Home'
      href: '/'
      icon: <Zap className='w-4 h-4' />
    }
    {
      name: 'Services'
      href: '/services'
      icon: <Brain className='w-4 h-4' />
      dropdown: [
        {
          name: 'AI & Machine Learning'
          href: '/services?category=ai'
          icon: <Brain className='w-4 h-4' />
        }
        {
          name: 'Quantum & Space Tech'
          href: '/services?category=quantum'
          icon: <Atom className='w-4 h-4' />
        }
        {
          name: 'Emerging Technologies'
          href: '/services?category=emerging'
          icon: <Microscope className='w-4 h-4' />
        }
        {
          name: 'Micro SaaS'
          href: '/services?category=micro-saas'
          icon: <Code className='w-4 h-4' />
        }
        {
          name: 'Metaverse & VR'
          href: '/services?category=metaverse'
          icon: <Gamepad2 className='w-4 h-4' />
        }
        {
          name: 'Cybersecurity'
          href: '/services?category=cybersecurity'
          icon: <Shield className='w-4 h-4' />
        }
        {
          name: 'Space Technology'
          href: '/services?category=space'
          icon: <Rocket className='w-4 h-4' />
        }
        {
          name: 'Biotech & Healthcare'
          href: '/services?category=biotech'
          icon: <TestTube className='w-4 h-4' />
        }
        {
          name: 'Blockchain & Web3'
          href: '/services?category=blockchain'
          icon: <Database className='w-4 h-4' />
        }
        {
          name: 'Autonomous Vehicles'
          href: '/services?category=transportation'
          icon: <Car className='w-4 h-4' />
        }
        {
          name: 'Cloud & Infrastructure'
          href: '/services?category=cloud'
          icon: <Cloud className='w-4 h-4' />
        }
        {
          name: 'Edge Computing'
          href: '/services?category=edge'
          icon: <Server className='w-4 h-4' />
        }
        {
          name: 'IoT & Connectivity'
          href: '/services?category=iot'
          icon: <Network className='w-4 h-4' />
        }
        {
          name: 'Semiconductor Tech'
          href: '/services?category=semiconductor'
          icon: <Cpu className='w-4 h-4' />
        }
        {
          name: 'Creative & Design'
          href: '/services?category=creative'
          icon: <Palette className='w-4 h-4' />
        }
        {
          name: 'Global Solutions'
          href: '/services?category=global'
          icon: <Globe className='w-4 h-4' />
        }
      ]
    },    {
      name: 'Showcase'
      href: '/enhanced-services-showcase-2026-v2'
      icon: <Rocket className='w-4 h-4' />
    }
    {
      name: 'Pricing'
      href: '/pricing-enhanced-2026'
      icon: <Database className='w-4 h-4' />
    }
    {
      name: 'About'
      href: '/about'
      icon: <Globe className='w-4 h-4' />
    }
    {
      name: 'Contact'
      href: '/contact'
      icon: <Mail className='w-4 h-4' />
    },  ];      icon: <Mail className="w-4 h-4" />
    }
      name: 'Showcase',
      href: '/enhanced-services-showcase-2026-v2',
      icon: <Rocket className='w-4 h-4' />,
    },
    {
      name: 'Pricing',
      href: '/pricing-enhanced-2026',
      icon: <Database className='w-4 h-4' />,
    },
    {
      name: 'About',
      href: '/about',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Mail className='w-4 h-4' />,
    },  ];

<<<<<<< HEAD
=======


  ];
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709',  };    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Menu,;
  X,;
  ChevronDown,;
  Search,;
  Phone,;
  Mail,;
  MapPin,;
  Zap,;
  Brain,;
  Atom,;
  Microscope,;
  Gamepad2,;
  Shield,;
  Rocket,;
  Database,;
  TestTube,;
  Car,;
  Globe,;
  Code,;
  Palette,;
  Cloud,;
  Server,;
  Network,;
  Cpu,;
} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
export default function UltraAdvancedNavigation2026V2() { return null; }
    };'
    window && window.addEventListener('scroll', handleScroll);'
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20);
    };'
    window && window.addEventListener('scroll', handleScroll);'
    return () => window && window.removeEventListener('scroll', handleScroll);
  const navigationItems = [;
    {;
      name: 'Home',;
      href: '/',;
      icon: <Zap className='w-4 h-4' />,;
    },;
    {;'
      name: 'Services',;'
      href: '/services',;'
      icon: <Brain className='w-4 h-4' />,;
=======

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
;

const handleScroll = (;
      setIsScrolled(window && window.scrollY > 20)) => {
  return $3;}
}
};

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window && window.scrollY > 20)
};

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);

const navigationItems = [
  {;
      name: 'Home',;
      href: '/',;}
      icon: <Zap className='w-4 h-4'    />,;}
    },;
    {;
      name: 'Services',;
      href: '/services',;
      icon: <Brain className='w-4 h-4'    />,;
>>>>>>> origin/chore/fix-lint-and-merge
      dropdown: [;
        {;
          name: 'AI & Machine Learning',;
          href: '/services?category=ai',;}
          icon: <Brain className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Quantum & Space Tech',;
          href: '/services?category=quantum',;}
          icon: <Atom className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Emerging Technologies',;
          href: '/services?category=emerging',;}
          icon: <Microscope className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Micro SaaS',;
          href: '/services?category=micro-saas',;}
          icon: <Code className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Metaverse & VR',;
          href: '/services?category=metaverse',;}
          icon: <Gamepad2 className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Cybersecurity',;
          href: '/services?category=cybersecurity',;}
          icon: <Shield className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Space Technology',;
          href: '/services?category=space',;}
          icon: <Rocket className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Biotech & Healthcare',;
          href: '/services?category=biotech',;}
          icon: <TestTube className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Blockchain & Web3',;
          href: '/services?category=blockchain',;}
          icon: <Database className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Autonomous Vehicles',;
          href: '/services?category=transportation',;}
          icon: <Car className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Cloud & Infrastructure',;
          href: '/services?category=cloud',;}
          icon: <Cloud className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Edge Computing',;
          href: '/services?category=edge',;}
          icon: <Server className='w-4 h-4'    />,;}
        },;
        {;
          name: 'IoT & Connectivity',;
          href: '/services?category=iot',;}
          icon: <Network className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Semiconductor Tech',;
          href: '/services?category=semiconductor',;}
          icon: <Cpu className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Creative & Design',;
          href: '/services?category=creative',;}
          icon: <Palette className='w-4 h-4'    />,;}
        },;
        {;
          name: 'Global Solutions',;
          href: '/services?category=global',;}
          icon: <Globe className='w-4 h-4'    />,;}
        },;
      ],;
    },    {;
      name: 'Showcase',;
      href: '/enhanced-services-showcase-2026-v2',;}
      icon: <Rocket className='w-4 h-4'    />,;}
    },;
    {;
      name: 'Pricing',;
      href: '/pricing-enhanced-2026',;}
      icon: <Database className='w-4 h-4'    />,;}
    },;
    {;
      name: 'About',;
      href: '/about',;}
      icon: <Globe className='w-4 h-4'    />,;}
    },;
    {;
      name: 'Contact',;
<<<<<<< HEAD
      href: '/contact',;
      icon: <Mail className='w-4 h-4' />,;
    },  ];      icon: <Mail className="w-4 h-4" />;
    }
  ];
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',  };    address: '364 E Main St STE 1008 Middletown DE 19709';
<<<<<<< HEAD
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);
import Link from 'next/link';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { motion, AnimatePresence  } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = null;
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
  const contactInfo = {;'
    mobile: '+1 302 464 0950',;'
    email: 'kleber@ziontechgroup && ziontechgroup.com',;'
    address: '364 E Main St STE 1008 Middletown DE 19709',  };    address: '364 E Main St STE 1008 Middletown DE 19709';
      setIsScrolled(window.scrollY > 20)
    };'
    window.addEventListener('scroll', handleScroll);'
    return () => window.removeEventListener('scroll', handleScroll)'
import { motion, AnimatePresence } from framer-motion;
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState($2);
  const [isScrolled, setIsScrolled] = useState($2);

  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => window.removeEventListener(scroll, handleScroll)
  }, []),
  const contactInfo = {'
    mobile: '+1 302 464 0950,
    email: 'kleber@ziontechgroup && ziontechgroup.com',
    address: 364 E Main St STE 1008 Middletown DE 19709'}    address: '364 E Main St STE 1008 Middletown DE 19709;
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener(scroll', handleScroll)
=======
<<<<<<< HEAD
      href: '/contact',;}
      icon: <Mail className='w-4 h-4'    />,;}
    }  ];      icon: <Mail className=\"w-4 h-4\"    />;
    }
  ];

const contactInfo = {
  mobile: '+1 302 464 0950',;}
    email: 'kleber@ziontechgroup && ziontechgroup.com',;}
    address: '364 E Main St STE 1008 Middletown DE 19709'  };    address: '364 E Main St STE 1008 Middletown DE 19709';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsScrolled(window.scrollY > 20)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  }, []);
<<<<<<< HEAD


  useEffect(() => {
<<<<<<< HEAD

    }


export default function UltraAdvancedNavigation2026V2() {
  }
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {}
    const handleScroll = () => {}
      setIsScrolled(window.scrollY > 20);
  Network,
  Cpu,'
} from lucide-react;import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';
export default /**;
 * UltraAdvancedNavigation2026V2 - Function description;
 */
function UltraAdvancedNavigation2026V2() {}
  const [is_open, setIsOpen] = useState (false);
  const [is_scrolled, setIsScrolled] = useState (false);
  const [active_dropdown, setActiveDropdown] = useState < string | null>(null);
  useEffect (() => {}
    const handle_scroll = () =>: any {}
      setIsScrolled (window.scroll_y > 20);
    }
    }
      name: Showcase','
      href: /enhanced - services - showcase - 2026 - v2,'
      icon: <Rocket className='w - 4 h - 4 />},
    {
      name: 'Pricing',
      href: /pricing - enhanced - 2026','
      icon: <Database className=w - 4 h - 4 />},
    {'
      name: 'About,
      href: '/about'},
    {
      name: Contact','
      href: /contact];
  const contact_info = {'
    mobile: '+1 302 464 0950,
    email: 'kleber@ziontechgroup.com'}


  }, []);

    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
      "name": 'Home','
      "href": '/','
"icon": <Zap className='w-4 h-4' />,'
    },
    {
      }
      "name": 'Services','
      "href": '/services','
      "icon": <Brain className='w-4 h-4' />,'
      "dropdown": [
        {
          }
          "name": 'AI & Machine Learning','
          "href": '/services?category=ai','
          "icon": <Brain className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Quantum & Space Tech','
          "href": '/services?category=quantum','
          "icon": <Atom className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Emerging Technologies','
          "href": '/services?category=emerging','
          "icon": <Microscope className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Micro SaaS','
          "href": '/services?category=micro-saas','
          "icon": <Code className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Metaverse & VR','
          "href": '/services?category=metaverse','
          "icon": <Gamepad2 className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Cybersecurity','
          "href": '/services?category=cybersecurity','
          "icon": <Shield className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Space Technology','
          "href": '/services?category=space','
          "icon": <Rocket className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Biotech & Healthcare','
          "href": '/services?category=biotech','
          "icon": <TestTube className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Blockchain & Web3','
          "href": '/services?category=blockchain','
          "icon": <Database className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Autonomous Vehicles','
          "href": '/services?category=transportation','
          "icon": <Car className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Cloud & Infrastructure','
          "href": '/services?category=cloud','
          "icon": <Cloud className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Edge Computing','
          "href": '/services?category=edge','
          "icon": <Server className='w-4 h-4' />,'
        },
        {
          }
          "name": 'IoT & Connectivity','
          "href": '/services?category=iot','
          "icon": <Network className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Semiconductor Tech','
          "href": '/services?category=semiconductor','
          "icon": <Cpu className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Creative & Design','
          "href": '/services?category=creative','
          "icon": <Palette className='w-4 h-4' />,'
        },
        {
          }
          "name": 'Global Solutions','
          "href": '/services?category=global','
          "icon": <Globe className='w-4 h-4' />,'
=======
>>>>>>> origin/resolved-merge-conflicts
      name: 'Home',
  const navigationItems = $2;
      href: '/',
      icon: <Zap className = $2;
=======
}
    const handleScroll = null;}
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu;
X,
ChevronDown;
Search,
Phone;
Mail,
MapPin;
Zap,
Brain;
Atom,
Microscope;
Gamepad2,
Shield;
Rocket,
Database;
TestTube,
Car;
Globe,
Code;
Palette,
Cloud;
Server,
Network;}
Cpu;}
} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu } from 'lucide-react';

export default function UltraAdvancedNavigation2026V2() {;}
} from 'lucide-react';

export default function UltraAdvancedNavigation2026V2() {
  const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {

    const handleScroll = (

setIsScrolled(window.scrollY > 20)) => {
  return $3;}
}
};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navigationItems = [
    {
      name: 'Home',
  href: '/'}
icon: <Zap className='w-4 h-4'    />}
    },
>>>>>>> origin/chore/fix-lint-and-merge
    {
      name: 'Services',
  href: '/services',
      icon: <Brain className='w-4 h-4'    />,
      dropdown: [
        {
          name: 'AI & Machine Learning',
  href: '/services?category=ai'}
          icon: <Brain className='w-4 h-4'    />}
        },
        {
          name: 'Quantum & Space Tech',
  href: '/services?category=quantum'}
          icon: <Atom className='w-4 h-4'    />}
        },
        {
          name: 'Emerging Technologies',
  href: '/services?category=emerging'}
          icon: <Microscope className='w-4 h-4'    />}
        },
        {
          name: 'Micro SaaS',
  href: '/services?category=micro-saas'}
          icon: <Code className='w-4 h-4'    />}
        },
        {
          name: 'Metaverse & VR',
  href: '/services?category=metaverse'}
          icon: <Gamepad2 className='w-4 h-4'    />}
        },
        {
          name: 'Cybersecurity',
  href: '/services?category=cybersecurity'}
          icon: <Shield className='w-4 h-4'    />}
        },
        {
          name: 'Space Technology',
  href: '/services?category=space'}
          icon: <Rocket className='w-4 h-4'    />}
        },
        {
          name: 'Biotech & Healthcare',
  href: '/services?category=biotech'}
          icon: <TestTube className='w-4 h-4'    />}
        },
        {
          name: 'Blockchain & Web3',
  href: '/services?category=blockchain'}
          icon: <Database className='w-4 h-4'    />}
        },
        {
          name: 'Autonomous Vehicles',
  href: '/services?category=transportation'}
          icon: <Car className='w-4 h-4'    />}
        },
        {
          name: 'Cloud & Infrastructure',
  href: '/services?category=cloud'}
          icon: <Cloud className='w-4 h-4'    />}
        },
        {
          name: 'Edge Computing',
  href: '/services?category=edge'}
          icon: <Server className='w-4 h-4'    />}
        },
        {
          name: 'IoT & Connectivity',
  href: '/services?category=iot'}
          icon: <Network className='w-4 h-4'    />}
        },
        {
          name: 'Semiconductor Tech',
  href: '/services?category=semiconductor'}
          icon: <Cpu className='w-4 h-4'    />}
        },
        {
          name: 'Creative & Design',
  href: '/services?category=creative'}
          icon: <Palette className='w-4 h-4'    />}
        },
        {
          name: 'Global Solutions',
  href: '/services?category=global'}
          icon: <Globe className='w-4 h-4'    />}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        }
      ]
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
      "name": 'Showcase','
      "href": '/enhanced-services-showcase-2026-v2','
      "icon": <Rocket className='w-4 h-4' />,'
    },
    {
      }
      "name": 'Pricing','
      "href": '/pricing-enhanced-2026','
      "icon": <Database className='w-4 h-4' />,'
    },
    {
      }
      "name": 'About','
      "href": '/about','
      "icon": <Globe className='w-4 h-4' />,'
    },
    {
      }
      "name": 'Contact','
      "href": '/contact','
      "icon": <Mail className='w-4 h-4' />,'
    }
  ];
=======
>>>>>>> origin/resolved-merge-conflicts
      name: 'Showcase',
  href: '/enhanced-services-showcase-2026-v2'}
      icon: <Rocket className='w-4 h-4'    />}
    },
    {
      name: 'Pricing',
  href: '/pricing-enhanced-2026'}
      icon: <Database className='w-4 h-4'    />}
    },
    {
      name: 'About',
  href: '/about'}
      icon: <Globe className='w-4 h-4'    />}
    },
    {
      name: 'Contact',
  href: '/contact'}
      icon: <Mail className='w-4 h-4'    />}
    }
<<<<<<< HEAD
    }
=======
  const navigationItems = [
    {
      name: 'Home',
      href: '/',
icon: <Zap className="w-4 h-4" />
    };
    {
      name: 'Services',
      href: '/services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: <Brain className="w-4 h-4" /> },
        { name: 'Quantum & Space Tech', href: '/services?category=quantum', icon: <Atom className="w-4 h-4" /> },
        { name: 'Emerging Technologies', href: '/services?category=emerging', icon: <Microscope className="w-4 h-4" /> },
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: <Code className="w-4 h-4" /> },
        { name: 'Metaverse & VR', href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4" /> },
        { name: 'Cybersecurity', href: '/services?category=cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { name: 'Space Technology', href: '/services?category=space', icon: <Rocket className="w-4 h-4" /> },
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <TestTube className="w-4 h-4" /> },
        { name: 'Blockchain & Web3', href: '/services?category=blockchain', icon: <Database className="w-4 h-4" /> },
        { name: 'Autonomous Vehicles', href: '/services?category=transportation', icon: <Car className="w-4 h-4" /> },
        { name: 'Cloud & Infrastructure', href: '/services?category=cloud', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Edge Computing', href: '/services?category=edge', icon: <Server className="w-4 h-4" /> },
        { name: 'IoT & Connectivity', href: '/services?category=iot', icon: <Network className="w-4 h-4" /> },
        { name: 'Semiconductor Tech', href: '/services?category=semiconductor', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Creative & Design', href: '/services?category=creative', icon: <Palette className="w-4 h-4" /> },
        { name: 'Global Solutions', href: '/services?category=global', icon: <Globe className="w-4 h-4" /> }
      ]
    },    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      name: 'Showcase',
      href: '/enhanced - services - showcase - 2026 - v2',
      icon: <Rocket className='w - 4 h - 4' />,
    },
    {
      name: 'Pricing',
      href: '/pricing - enhanced - 2026',
      icon: <Database className='w - 4 h - 4' />,
<<<<<<< HEAD
      name: 'Showcase',
      href: '/enhanced-services-showcase-2026-v2',
      icon: <Rocket className='w-4 h-4' />,
    },
    {
      name: 'Pricing',
      href: '/pricing-enhanced-2026',
      icon: <Database className='w-4 h-4' />,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
    {
      name: 'About',
      href: '/about',
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: <Globe className='w-4 h-4' />,
=======
      icon: <Globe className='w - 4 h - 4' />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    },
    {
      name: 'Contact',
      href: '/contact',
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      icon: <Mail className = $2;
  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
<span>{contactInfo.mobile}</span>
      icon: <Mail className='w-4 h-4' />,
    },  ];

  ];
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709',  };    address: '364 E Main St STE 1008 Middletown DE 19709'
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-2 text-sm'>
            <div className='flex items-center space-x-6 text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-purple-400' />
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


<<<<<<< HEAD
=======
const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null />(null);
  useEffect(() => {

<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

=======
      icon: <Mail className='w - 4 h - 4' />,
    },  ];      icon: <Mail className="w - 4 h - 4" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

return (;
    <>
      {/* Top Contact Bar */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className = 'bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10'>'
 ;
return (;
                <span>{contactInfo.mobile}</span>

=======
>>>>>>> origin/resolved-merge-conflicts
  ];
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
  };
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.mobile}</span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { motion, AnimatePresence  } from 'framer-motion';
import {Menu,X,ChevronDown,Search,Phone,Mail,MapPin,Zap,Brain,Atom,Microscope,Gamepad2,Shield,Rocket,Database,TestTube,Car,Globe,Code,Palette,Cloud,Server,Network,Cpu,} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu  } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {import { motion, AnimatePresence   } from 'framer-motion';
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
import {Menu,X,ChevronDown,Search,Phone,Mail,MapPin,Zap,Brain,Atom,Microscope,Gamepad2,Shield,Rocket,Database,TestTube,Car,Globe,Code,Palette,Cloud,Server,Network,Cpu} from lucide-react;import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu  } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {import { motion, AnimatePresence   } from framer-motion;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu  } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown] = useState<string | null>(null)useEffect(() => {const handleScroll = () => {setIsScrolled(window && window.scrollY > 20)}window && window.addEventListener(scroll, handleScroll)return () => window && window.removeEventListener('scroll', handleScroll)}, [])setIsScrolled(window && window.scrollY > 20)}window && window.addEventListener(scroll, handleScroll)return () => window && window.removeEventListener('scroll', handleScroll)const navigationItems = [;
    {name: Home,href: '/',icon: <Zap className=w-4 h-4 />},{name: 'Services',href: /services,icon: <Brain className='w-4 h-4' />,dropdown: [;
        {name: AI & Machine Learning,href: '/services?category=ai',icon: <Brain className=w-4 h-4 />},{name: 'Quantum & Space Tech',href: /services?category=quantum,icon: <Atom className='w-4 h-4' />},{name: Emerging Technologies,href: '/services?category=emerging',icon: <Microscope className=w-4 h-4 />},{name: 'Micro SaaS',href: /services?category=micro-saas,icon: <Code className='w-4 h-4' />},{name: Metaverse & VR,href: '/services?category=metaverse',icon: <Gamepad2 className=w-4 h-4 />},{name: 'Cybersecurity',href: /services?category=cybersecurity,icon: <Shield className='w-4 h-4' />},{name: Space Technology,href: '/services?category=space',icon: <Rocket className=w-4 h-4 />},{name: 'Biotech & Healthcare',href: /services?category=biotech,icon: <TestTube className='w-4 h-4' />},{name: Blockchain & Web3,href: '/services?category=blockchain',icon: <Database className=w-4 h-4 />},{name: 'Autonomous Vehicles',href: /services?category=transportation,icon: <Car className='w-4 h-4' />},{name: Cloud & Infrastructure,href: '/services?category=cloud',icon: <Cloud className=w-4 h-4 />},{name: 'Edge Computing',href: /services?category=edge,icon: <Server className='w-4 h-4' />},{name: IoT & Connectivity,href: '/services?category=iot',icon: <Network className=w-4 h-4 />},{name: 'Semiconductor Tech',href: /services?category=semiconductor,icon: <Cpu className='w-4 h-4' />},{name: Creative & Design,href: '/services?category=creative',icon: <Palette className=w-4 h-4 />},{name: 'Global Solutions',href: /services?category=global,icon: <Globe className='w-4 h-4' />}]},    {name: Showcase,href: '/enhanced-services-showcase-2026-v2',icon: <Rocket className=w-4 h-4 />},{name: 'Pricing',href: /pricing-enhanced-2026,icon: <Database className='w-4 h-4' />},{name: About,href: '/about',icon: <Globe className=w-4 h-4 />},{name: 'Contact',href: /contact,icon: <Mail className='w-4 h-4' />}];      icon: <Mail className=w-4 h-4" />;
    }
  ];
  const contactInfo = {mobile: +1 302 464 0950,email: 'kleber@ziontechgroup && ziontechgroup.com',address: 364 E Main St STE 1008 Middletown DE 19709}address: '364 E Main St STE 1008 Middletown DE 19709';
      setIsScrolled(window.scrollY > 20)}window.addEventListener(scroll, handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])const navigationItems = [;
    {name: Home,href: '/',icon: <Zap className="w-4 h-4 />;
    }{name: Services,href: '/services',icon: <Brain className=w-4 h-4" />,dropdown: [;
        { name: AI & Machine Learning, href: '/services?category=ai', icon: <Brain className="w-4 h-4 /> },{ name: Quantum & Space Tech, href: '/services?category=quantum', icon: <Atom className=w-4 h-4" /> },{ name: Emerging Technologies, href: '/services?category=emerging', icon: <Microscope className="w-4 h-4 /> },{ name: Micro SaaS, href: '/services?category=micro-saas', icon: <Code className=w-4 h-4" /> },{ name: Metaverse & VR, href: '/services?category=metaverse', icon: <Gamepad2 className="w-4 h-4 /> },{ name: Cybersecurity, href: '/services?category=cybersecurity', icon: <Shield className=w-4 h-4" /> },{ name: Space Technology, href: '/services?category=space', icon: <Rocket className="w-4 h-4 /> },{ name: Biotech & Healthcare, href: '/services?category=biotech', icon: <TestTube className=w-4 h-4" /> },{ name: Blockchain & Web3, href: '/services?category=blockchain', icon: <Database className="w-4 h-4 /> },{ name: Autonomous Vehicles, href: '/services?category=transportation', icon: <Car className=w-4 h-4" /> },{ name: Cloud & Infrastructure, href: '/services?category=cloud', icon: <Cloud className="w-4 h-4 /> },{ name: Edge Computing, href: '/services?category=edge', icon: <Server className=w-4 h-4" /> },{ name: IoT & Connectivity, href: '/services?category=iot', icon: <Network className="w-4 h-4 /> },{ name: Semiconductor Tech, href: '/services?category=semiconductor', icon: <Cpu className=w-4 h-4" /> },{ name: Creative & Design, href: '/services?category=creative', icon: <Palette className="w-4 h-4 /> },{ name: Global Solutions, href: '/services?category=global', icon: <Globe className=w-4 h-4" /> }
      ];
    },    {{name: Showcase,href: '/enhanced-services-showcase-2026-v2',icon: <Rocket className="w-4 h-4 />;
    }{name: Pricing,href: '/pricing-enhanced-2026',icon: <Database className=w-4 h-4" />;
    }{name: About,href: '/about',icon: <Globe className="w-4 h-4 />;
    }{name: Contact,href: '/contact',icon: <Mail className=w-4 h-4" />;
  Menu,X,ChevronDown,Search,Phone,Mail,MapPin,Zap,Brain,Atom,Microscope,Gamepad2,Shield,Rocket,Database,TestTube,Car,Globe,Code,Palette,Cloud,Server,useEffect(() => {const handleScroll = null;
  Menu;
  X;
  ChevronDown;
  Search;
  Phone;
  Mail;
  MapPin;
  Zap;
  Brain;
  Atom;
  Microscope;
  Gamepad2;
  Shield;
  Rocket;
  Database;
  TestTube;
  Car;
  Globe;
  Code;
  Palette;
  Cloud;
  Server;
  Network;
  Cpu;} from lucide-react;import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu  } from 'lucide-react';
export default function UltraAdvancedNavigation2026V2() {} from lucide-react;export default function UltraAdvancedNavigation2026V2() {const [isOpen, setIsOpen] = useState(false)const [isScrolled, setIsScrolled] = useState(false)const [activeDropdown, setActiveDropdown] = useState<string | null>(null)useEffect(() => {const handleScroll = () => {setIsScrolled(window.scrollY > 20)Network,Cpu} from 'lucide-react';import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Zap, Brain, Atom, Microscope, Gamepad2, Shield, Rocket, Database, TestTube, Car, Globe, Code, Palette, Cloud, Server, Network, Cpu  } from lucide-react;
export default /**;
 * UltraAdvancedNavigation2026V2 - Function description;
 */;
    }
      name: 'Showcase',href: /enhanced - services - showcase - 2026 - v2,icon: <Rocket className='w - 4 h - 4' />},{name: Pricing,href: '/pricing - enhanced - 2026',icon: <Database className=w - 4 h - 4 />},{name: 'About',href: /about},{name: 'Contact',href: /contact];const contact_info = {mobile: '+1 302 464 0950',email: kleber@ziontechgroup.com}setIsScrolled(window.scrollY > 20)}window.addEventListener('scroll', handleScroll)return () => window.removeEventListener(scroll, handleScroll)}, [])const navigationItems = [;
    {name: 'Home',href: /,icon: <Zap className='w-4 h-4' />},{name: Services,href: '/services',icon: <Brain className=w-4 h-4 />,dropdown: [;
        {name: 'AI & Machine Learning',href: /services?category=ai,icon: <Brain className='w-4 h-4' />},{name: Quantum & Space Tech,href: '/services?category=quantum',icon: <Atom className=w-4 h-4 />},{name: 'Emerging Technologies',href: /services?category=emerging,icon: <Microscope className='w-4 h-4' />},{name: Micro SaaS,href: '/services?category=micro-saas',icon: <Code className=w-4 h-4 />},{name: 'Metaverse & VR',href: /services?category=metaverse,icon: <Gamepad2 className='w-4 h-4' />},{name: Cybersecurity,href: '/services?category=cybersecurity',icon: <Shield className=w-4 h-4 />},{name: 'Space Technology',href: /services?category=space,icon: <Rocket className='w-4 h-4' />},{name: Biotech & Healthcare,href: '/services?category=biotech',icon: <TestTube className=w-4 h-4 />},{name: 'Blockchain & Web3',href: /services?category=blockchain,icon: <Database className='w-4 h-4' />},{name: Autonomous Vehicles,href: '/services?category=transportation',icon: <Car className=w-4 h-4 />},{name: 'Cloud & Infrastructure',href: /services?category=cloud,icon: <Cloud className='w-4 h-4' />},{name: Edge Computing,href: '/services?category=edge',icon: <Server className=w-4 h-4 />},{name: 'IoT & Connectivity',href: /services?category=iot,icon: <Network className='w-4 h-4' />},{name: Semiconductor Tech,href: '/services?category=semiconductor',icon: <Cpu className=w-4 h-4 />},{name: 'Creative & Design',href: /services?category=creative,icon: <Palette className='w-4 h-4' />},{name: Global Solutions,href: '/services?category=global',icon: <Globe className=w-4 h-4 />}]},{name: 'Showcase',href: /enhanced-services-showcase-2026-v2,icon: <Rocket className='w-4 h-4' />},{name: Pricing,href: '/pricing-enhanced-2026',icon: <Database className=w-4 h-4 />},{name: 'About',href: /about,icon: <Globe className='w-4 h-4' />},{name: Contact,href: '/contact',icon: <Mail className=w-4 h-4 />}];
  const contactInfo = {mobile: '+1 302 464 0950',email: kleber@ziontechgroup.com,address: '364 E Main St STE 1008 Middletown DE 19709'}return (<>;
      {/* Top Contact Bar */}
<div className=bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10>;
  return (<span>{contactInfo.mobile}</span>;
    <>;
      {/* Top Contact Bar */}'
      <div className='bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10'>;'
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;'
          <div className='flex items-center justify-between py-2 text-sm'>;'
            <div className='flex items-center space-x-6 text-gray-300'>;'
              <div className='flex items-center space-x-2'>;'
                <Phone className='w-4 h-4 text-purple-400' />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </div>;'
              <div className='flex items-center space-x-2'>;'
                <Mail className='w-4 h-4 text-blue-400' />;
                <span>{contactInfo && contactInfo.email}</span>;
              </div>;'
              <div className='flex items-center space-x-2'>;'
<<<<<<< HEAD
=======
<<<<<<< HEAD
              </Link>;
            </div>;
              </Link>;
            </div>;
=======
>>>>>>> origin/resolved-merge-conflicts
              <div className='flex items-center space-x-2'>;
                <MapPin className='w-4 h-4 text-green-400' />;
                <span>{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className='flex items-center space-x-4'>;
      <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <span>{contactInfo.mobile}</span>
>>>>>>> merged-prs-20250907-203621
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center space-x-4">
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
=======
<<<<<<< HEAD
            <div className="flex items-center space-x-4">
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                🚀 New 2026 Services
              </div>"
              <div className="flex items-center space-x-2">"
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>"
            <div className="flex items-center space-x-4">"
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                className='text-purple-400 hover:text-purple-300 transition-colors'
              >
>>>>>>> merged-prs-20250907-203621
                🚀 New 2026 Services
            <div className='flex items-center space-x-4' />;
=======
  ];
=======
            <div className='flex items-center space-x-4'>
<<<<<<< HEAD
              <Link
                href='/enhanced-services-showcase-2026-v2'
                className='text-purple-400 hover:text-purple-300 transition-colors'
              >                🚀 New 2026 Services                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">
                🚀 New 2026 Services
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <Link
                href='/enhanced-services-showcase-2026-v2'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const contactInfo = {
    mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com'}
address: '364 E Main St STE 1008 Middletown DE 19709'}
  };

  return (
    <>
      {/* Top Contact Bar */}
<div className = 'bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10'    />
 ;
  return (
                <span    />{contactInfo.mobile}</span>

    <>;
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-white/10'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex items-center justify-between py-2 text-sm'    />;
            <div className='flex items-center space-x-6 text-gray-300'    />;
              <div className='flex items-center space-x-2'    />;
                <Phone className='w-4 h-4 text-purple-400'    />;
                <span    />{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-2'    />;
                <Mail className='w-4 h-4 text-blue-400'    />;
                <span    />{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2'    />;
                <MapPin className='w-4 h-4 text-green-400'    />;
                <span    />{contactInfo && contactInfo.address}</span>;
              </div>;
            </div>;
            <div className='flex items-center space-x-4'    />;
>>>>>>> origin/chore/fix-lint-and-merge

              <Link;
href='/enhanced-services-showcase-2026-v2'

                className='text-purple-400 hover: text-purple-300 transition-colors'
<<<<<<< HEAD
               />
                🚀 New 2026 Services;
              >
                🚀 New 2026 Services

=======
                  />
                🚀 New 2026 Services;
>>>>>>> origin/chore/fix-lint-and-merge
              </Link>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Main Navigation */}
=======
<<<<<<< HEAD
              <Link;
                href='/enhanced-services-showcase-2026-v2';
              </div>;
              <div className='flex items-center space-x-2'>;
                <Mail className='w-4 h-4 text-blue-400' />;
                <span>{contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <MapPin className='w-4 h-4 text-green-400' />;
                <span>{contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex items-center space-x-4">;
              <Link href="/enhanced-services-showcase-2026-v2" className="text-purple-400 hover:text-purple-300 transition-colors">;
<<<<<<< HEAD
                className='text-purple-400 hover:text-purple-300 transition-colors';
              >;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    address: '364 E Main St STE 1008 Middletown DE 19709',  }    address: '364 E Main St STE 1008 Middletown DE 19709';
  }
;
  return (
    <>;
      {/* Top Contact Bar */}
      <div className='bg - gradient - to - r from - purple - 900 / 80 to - blue - 900 / 80 backdrop - blur - sm border - b border - white / 10'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between py - 2 text - sm'>;
            <div className='flex items - center space - x-6 text - gray - 300'>;
              <div className='flex items - center space - x-2'>;
                <Phone className='w - 4 h - 4 text - purple - 400' />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <Mail className='w - 4 h - 4 text - blue - 400' />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <MapPin className='w - 4 h - 4 text - green - 400' />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className='flex items - center space - x-4'>;
              <Link;
                href='/enhanced - services - showcase - 2026 - v2';
                className='text - purple - 400 hover:text - purple - 300 transition - colors';
              >                🚀 New 2026 Services                <span>{contact_info.mobile}</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <Mail className="w - 4 h - 4 text - blue - 400" />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <MapPin className="w - 4 h - 4 text - green - 400" />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            <div className="flex items - center space - x-4">;
              <Link href="/enhanced - services - showcase - 2026 - v2" className="text - purple - 400 hover:text - purple - 300 transition - colors">;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                🚀 New 2026 Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
=======
<<<<<<< HEAD
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='relative'>;
                <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300'>;
                  Z;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text-xl font-bold text-white'>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>Innovation 2026</div>              </div>;
            </Link>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>;
              {navigationItems && navigationItems.map(item => (<div key={item && item.name} className='relative group'>                  {item && item.dropdown ? (<button;
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            {/* Logo */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="relative">;
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
=======
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300'>
>>>>>>> merged-prs-20250907-203621
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
<<<<<<< HEAD
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Innovation 2026</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
=======
              <div className='hidden sm:block'>
                <div className='text-xl font-bold text-white'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>Innovation 2026</div>              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
              {navigationItems.map(item => (
                <div key={item.name} className='relative group'>                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  Z
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Innovation 2026</div>
              </div>
            </Link>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="relative">;
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">;
                  Z;
                </div>;"
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
              </div>;"
              <div className="hidden sm:block">;"
                <div className="text-xl font-bold text-white">Zion Tech Group</div>;"
                <div className="text-xs text-gray-400">Innovation 2026</div>;
              </div>;
            </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      {/* Main Navigation */}
<nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl
            : 'bg-transparent'
        }`}
      >
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href=/ className='flex items-center space-x-3 group'>
              <div className=relative>
                <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300'>
                  Z
                </div>
                <div className=absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300></div>
              </div>
              <div className='hidden sm:block'>
                <div className=text-xl font-bold text-white>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>Innovation 2026</div>
              </div>
            </Link>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Desktop Navigation */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className='hidden "lg":flex items-center space-x-8'>;'
              {navigationItems.map(item => (<div key={item.name} className='relative group'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  {item.dropdown ? (<button;
                      }
>>>>>>> merged-prs-20250907-203621
                      onMouseEnter={() => setActiveDropdown(item.name)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
<<<<<<< HEAD
                    <button
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
className='flex items-center space-x-2 text-gray-300 "hover": text-white transition-colors duration-200 py-2'>'

                      {item.icon}
                      <span>{item.nam
}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-"hover":rotate-180' />;'
                    </button>;
                  ) : (<Link;
                      href={item.href}
className='flex items-center space-x-2 text-gray-300 "hover": text-white transition-colors duration-200 py-2'>'

                      {item.icon}
            </Link>;
                    </Link>

                      className='flex items-center space-x-2 text-gray-300 "hover":text-white transition-colors duration-200 py-2'>'

                      {item && item.icon}
                      <span>{item && item.nam
}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-"hover":rotate-180' />                    </button>;'
                  ) : (<Link;
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 "hover": text-white transition-colors duration-200 py-2'>                      className="flex items-center space-x-2 text-gray-300 "hover":text-white transition-colors duration-200 py-2">"

                      {item && item.icon}
                      <span>{item && item.nam
}</span>;
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-"hover":rotate-180" />;"
                  ) : (<Link;
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 "hover":text-white transition-colors duration-200 py-2'                      className="flex items-center space-x-2 text-gray-300 "hover":text-white transition-colors duration-200 py-2">;"
=======
>>>>>>> origin/resolved-merge-conflicts
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                    >                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
=======

                    <button
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      onMouseLeave={() => setActiveDropdown(null)}
<<<<<<< HEAD
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
=======

                      {item.icon}
                      <span>{item.name}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />;
=======

      {/* Main Navigation */}
<nav;
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled;
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'}
}
        }
}    />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex items-center justify-between h-20'    />;
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-3 group'    />;
              <div className='relative'    />;
                <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300'    />;
                  Z;
                </div>;
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'    /></div>;
              </div>;
              <div className='hidden sm:block'    />;
                <div className='text-xl font-bold text-white'    />;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'    />Innovation 2026</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}
<div className='hidden lg:flex items-center space-x-8'    />;
              {navigationItems.map(item => (<div key={item.name} className='relative group'    />;
                  {item.dropdown ? (<button;}
                      onMouseEnter={() =    /> setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
className='flex items-center space-x-2 text-gray-300 hover: text-white transition-colors duration-200 py-2'>

                      {item.icon}
                      <span    />{item.nam}
}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    </button>;
                  ) : (<Link;
                      href={item.href}
className='flex items-center space-x-2 text-gray-300 hover: text-white transition-colors duration-200 py-2'    />

                      {item.icon}

                      <span    />{item.name}</span>
                    </Link>
<<<<<<< HEAD

                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'>

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      {item && item.icon}
                      <span    />{item && item.nam}
}</span>;
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180'    />                    </button>;
                  ) : (<Link;
                      href={item && item.href}"
                      className='flex items-center space-x-2 text-gray-300 hover: text-white transition-colors duration-200 py-2'    />                      className=\"flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2\">

                      {item && item.icon}
                      <span    />{item && item.nam}
}</span>;"
                      <ChevronDown className=\"w-4 h-4 transition-transform duration-200 group-hover:rotate-180\"    />;
                  ) : (<Link;
<<<<<<< HEAD
                      href={item && item.href}
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2">;
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2';
                    >;
                      {item && item.icon}
                      <span>{item && item.name}</span>;'
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />                    </button>;
                  ) : (;
                    <Link;
                      href={item && item.href}'"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2";
                    >;
                      {item && item.icon}
                      <span>{item && item.name}</span>;"
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />;
                  ) : (;
                    <Link;
                      href={item && item.href}'"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2">;

                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'
                    >
                      {item && item.icon}
                      <span>{item && item.name}</span>;'
                      <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180' />                    </button>
                  ) : (
                    <Link
                      href={item && item.href}'"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'>                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item && item.icon}
                      <span>{item && item.name}</span>;"
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  ) : (
                    <Link
                      href={item && item.href}'"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span />{item && item.nam}
}</span>;"
                      <ChevronDown className=\"w-4 h-4 transition-transform duration-200 group-hover:rotate-180\" />;
                  ) : (<Link;
                      href={item && item.href}"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                      className=\"flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2\" />;
=======
                      href={item && item.href}"
                      className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2'                      className=\"flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {item && item.icon}
                      <span    />{item && item.name}</span>;
                    </Link>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  )}
                  {/* Dropdown Menu */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {item && item.dropdown && activeDropdown === item && item.name && (<div;
                      }
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                  {item && item.dropdown && activeDropdown === item && item.name && (<div;
                      }
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                  {item && item.dropdown && activeDropdown === item && item.name && (;
                    <div;
                      onMouseEnter={() => setActiveDropdown(item && item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
className='absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  {item && item.dropdown && activeDropdown === item && item.name && (<div;}
                      onMouseEnter={() =    /> setActiveDropdown(item && item.name)}

                      onMouseLeave={() => setActiveDropdown(null)}
>>>>>>> origin/chore/fix-lint-and-merge

className='absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4'
                    >
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
<<<<<<< HEAD
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
=======
                      <div className='grid grid-cols-1 gap-2'>
                        {item.dropdown.map(dropdownItem => (
                          <Link;
                            key={dropdownItem.name}
                            href={dropdownItem.href}'
                            className='flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group'
                          >'
                            <div className='text-purple-400 group-hover:text-purple-300 transition-colors'>
                              {dropdownItem.icon}
                            </div>
                            <span className='text-gray-300 group-hover:text-white transition-colors'>
                              {dropdownItem.name}
                            <span className='text-gray-300 group-hover:text-white transition-colors'>                              {dropdownItem.name}

                              {dropdownItem.name}


                            </span>
                          </Link>
                      <div className='grid grid-cols-1 gap-2' />
=======
                      <div className='grid grid-cols-1 gap-2'    />
>>>>>>> origin/chore/fix-lint-and-merge
                        {item.dropdown.map(dropdownItem => (}
                          <Link;}
key={dropdownItem.name}
                            href={dropdownItem.href}
<<<<<<< HEAD
                            className='flex items-center space-x-3 p-3 rounded-xl "hover":bg-white/10 transition-colors duration-200 group'>'
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      onMouseLeave={() => setActiveDropdown(null)}


<<<<<<< HEAD
=======
<<<<<<< HEAD
                            <div className='text-purple-400 group-"hover":text-purple-300 transition-colors'>;'
                              {dropdownItem.icon}
                            </div>;
                            <span className='text-gray-300 group-"hover":text-white transition-colors'>;'
                              {dropdownItem.name}
                            <span className='text-gray-300 group-"hover": text-white transition-colors'>                              {dropdownItem.name}{dropdownItem.nam,'
}</span>;
                          </Link>;
                        ))}
                      </div>;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
                            className='flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group'    />

                            <div className='text-purple-400 group-hover:text-purple-300 transition-colors'    />;
                              {dropdownItem.icon}
                            </div>;
                            <span className='text-gray-300 group-hover:text-white transition-colors'    />;
                              {dropdownItem.name}
                            <span className='text-gray-300 group-hover: text-white transition-colors'    />                              {dropdownItem.name}{dropdownItem.nam}
>>>>>>> origin/chore/fix-lint-and-merge
}</span>;
                          </Link>;
=======
<<<<<<< HEAD
                            </span>
                          </Link>
>>>>>>> merged-prs-20250907-203621
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4"
                    >
                      className='absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4'

                    >
                      <div className='grid grid-cols-1 gap-2'>
                        {item.dropdown.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className='flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group'
                          >
                            <div className='text-purple-400 group-hover:text-purple-300 transition-colors'>
                              {dropdownItem.icon}
                            </div>
                            <span className='text-gray-300 group-hover:text-white transition-colors'>                              {dropdownItem.name}                    >
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className='flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group'
                          >
                            <div className='text-purple-400 group-hover:text-purple-300 transition-colors'>
                              {dropdownItem.icon}
                            </div>
                            <span className='text-gray-300 group-hover:text-white transition-colors'>
                              {dropdownItem.name}
                            <span className='text-gray-300 group-hover:text-white transition-colors'>                              {dropdownItem.name}

                              {dropdownItem.name}

                            </span>
                          </Link>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                            </span>
                          </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        ))}
                      </div>;
                    </div>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  )}
                </div>;

<<<<<<< HEAD
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4
                    >
                      <div className=grid grid-cols-1 gap-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                      onMouseLeave={() => setActiveDropdown(null)}className=absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4';
                    >;
                      <div className='grid grid-cols-1 gap-2>;
                        {item.dropdown.map(dropdownItem => (<Link;
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group
                          >
                            <div className=text-purple-400 group-hover:text-purple-300 transition-colors">
                              {dropdownItem.icon}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors>
                              {dropdownItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* CTA Button */}
<div className='hidden 'lg':flex items-center space-x-4'>'
              <Link href='/contact'>'
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 'hover':from-purple-700 'hover':to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform 'hover':scale-105 'hover':shadow-lg'>'
                  Get Started
=======
<<<<<<< HEAD
            {/* CTA Button */}

            </div>
            {/* CTA Button */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">

            {/* CTA Button */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started

<<<<<<< HEAD
=======
<<<<<<< HEAD
            </div>

            {/* CTA Button */}
              ))}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                  Get Started
                </button>
              </Link>
            </div>

=======

<<<<<<< HEAD
            </div>;
            {/* CTA Button */}
<div className='hidden lg:flex items-center space-x-4'>;
              <Link href='/contact'>;
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>;
                  Get Started;
                </button>;
              </Link>;
            </div>;
            </div>;
            {/* CTA Button */}'
            <div className='hidden lg:flex items-center space-x-4'>;'
              <Link href='/contact'>;'"
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">;"
              <Link href="/contact">;"
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 "hover":from-purple-700 "hover":to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform "hover":scale-105 "hover":shadow-lg">;"
=======
              ))}

            </div>
            {/* CTA Button */}
<div className='hidden lg:flex items-center space-x-4'    />
              <Link href='/contact'    />
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'    />
                  Get Started;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                </button>
              </Link>
            </div>


<<<<<<< HEAD
=======
                      {item.icon}
                      <span>{item.nam
}</span>;
                      <ChevronDown className='w - 4 h - 4 transition - transform duration - 200 group - "hover":rotate - 180' />                    </button>) : (<Link;'
                      href={item.href}
                      className='flex items - center space - x-2 text - gray - 300 "hover": text - white transition - colors duration - 200 py - 2'                    >                      className="flex items - center space - x-2 text - gray - 300 "hover":text - white transition - colors duration - 200 py - 2">"

                      {item.icon}
                      <span>{item.nam
}</span>;
                      <ChevronDown className="w - 4 h - 4 transition - transform duration - 200 group - "hover":rotate - 180" />) : (<Link;"
                      href={item.href}
                      className='flex items - center space - x-2 text - gray - 300 "hover": text - white transition - colors duration - 200 py - 2'                      className="flex items - center space - x-2 text - gray - 300 "hover":text - white transition - colors duration - 200 py - 2">"

<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

            </div>;
            {/* CTA Button */}
            <div className='hidden lg:flex items-center space-x-4'    />;
              <Link href='/contact'    />;"
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'    />                  Get Started            <div className=\"hidden lg:flex items-center space-x-4\"    />;"
              <Link href=\"/contact\"    />;"
                <button className=\"bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}            </button>              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>



=======

            </div>;
            {/* CTA Button */}
            <div className='hidden lg:flex items-center space-x-4'>;
              <Link href='/contact'>;
                <button className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started            <div className="hidden lg:flex items-center space-x-4">;
              <Link href="/contact">;
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Main Navigation */}
      <nav;
        className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;
            ? 'bg - black / 90 backdrop - blur - xl border - b border - white / 10 shadow - 2xl';}
            : 'bg - transparent';}
        }`}    />

        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'    />;
          <div className='flex items - center justify - between h - 20'    />;
            {/* Logo */}
<<<<<<< HEAD
            <Link href='/' className='flex items - center space - x-3 group'>;'
              <div className='relative'>;'
                <div className='w - 10 h - 10 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl flex items - center justify - center text - white font - bold text - xl group - hover:scale - 110 transition - transform duration - 300'>;
                  Z;
                </div>;'
                <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300'></div>;
              </div>;'
              <div className='hidden sm:block'>;'
                <div className='text - xl font - bold text - white'>;
                  Zion Tech Group;
                </div>;'
                <div className='text - xs text - gray - 400'>Innovation 2026</div>              </div>;
            </Link>;
            {/* Desktop Navigation */}'
            <div className='hidden lg:flex items - center space - x-8'>;
              {navigation_items.map (item => ('
                <div key={item.name} className='relative group'>                  {item.dropdown ? (
                    <button;
                      onMouseEnter={() => setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}            {/* Logo */}"
            <Link href="/" className="flex items - center space - x-3 group">;"
              <div className="relative">;"
                <div className="w - 10 h - 10 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl flex items - center justify - center text - white font - bold text - xl group - hover:scale - 110 transition - transform duration - 300">;
                  Z;
                </div>;"
                <div className="absolute inset - 0 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300"></div>;
              </div>;"
              <div className="hidden sm:block">;"
                <div className="text - xl font - bold text - white">Zion Tech Group</div>;"
                <div className="text - xs text - gray - 400">Innovation 2026</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}'
            <div className='hidden lg:flex items - center space - x-8'>;
              {navigation_items.map (item => ('"
                <div key={item.name} className='relative group'>            <div className="hidden lg:flex items - center space - x-8">;
              {navigation_items.map ((item) => ("
                <div key={item.name} className="relative group">;
                  {item.dropdown ? (
                    <button;
                      onMouseEnter={() => setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}'
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2';
                    >;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      {item.icon}
                      <span>{item.name}</span>;'
                      <ChevronDown className='w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180' />                    </button>) : (
                    <Link;
                      href={item.href}'"
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2'                    >                      className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2";
                    >;
                      {item.icon}
                      <span>{item.name}</span>;"
                      <ChevronDown className="w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180" />) : (
                    <Link;
                      href={item.href}'"
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2'                      className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2";
                    >;
                      <span>{item.name}</span>;
                      <ChevronDown className="w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180" />) : (<Link;
                      href={item.href}
                      className='flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2'                      className="flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2";
                    >;
=======
            <Link href='/' className='flex items - center space - x-3 group'    />;
              <div className='relative'    />;
                <div className='w - 10 h - 10 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl flex items - center justify - center text - white font - bold text - xl group - hover:scale - 110 transition - transform duration - 300'    />;
                  Z;
                </div>;
                <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300'    /></div>;
              </div>;
              <div className='hidden sm:block'    />;
                <div className='text - xl font - bold text - white'    />;
                  Zion Tech Group;
                </div>;
                <div className='text - xs text - gray - 400'    />Innovation 2026</div>              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'    />;
              {navigation_items.map (item => (<div key={item.name} className='relative group'    />                  {item.dropdown ? (<button;}
                      onMouseEnter={() =    /> setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}            {/* Logo */}"
            <Link href=\"/\" className=\"flex items - center space - x-3 group\"    />;"
              <div className=\"relative\"    />;"
                <div className=\"w - 10 h - 10 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl flex items - center justify - center text - white font - bold text - xl group - hover:scale - 110 transition - transform duration - 300\"    />;
                  Z;
                </div>;"
                <div className=\"absolute inset - 0 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - xl blur - lg opacity - 50 group - hover:opacity - 75 transition - opacity duration - 300\"    /></div>;
              </div>;"
              <div className=\"hidden sm:block\"    />;"
                <div className=\"text - xl font - bold text - white\"    />Zion Tech Group</div>;"
                <div className=\"text - xs text - gray - 400\"    />Innovation 2026</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <div className='hidden lg:flex items - center space - x-8'    />;"
              {navigation_items.map (item => (<div key={item.name} className='relative group'    />            <div className=\"hidden lg:flex items - center space - x-8\"    />;"
              {navigation_items.map ((item) => (<div key={item.name} className=\"relative group\"    />;
                  {item.dropdown ? (<button;}
                      onMouseEnter={() =    /> setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}
                      className='flex items - center space - x-2 text - gray - 300 hover: text - white transition - colors duration - 200 py - 2'>

                      {item.icon}
                      <span    />{item.nam}
}</span>;
                      <ChevronDown className='w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180'    />                    </button>) : (<Link;
                      href={item.href}"
                      className='flex items - center space - x-2 text - gray - 300 hover: text - white transition - colors duration - 200 py - 2'                        />                      className=\"flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2\">

                      {item.icon}
                      <span    />{item.nam}
}</span>;"
                      <ChevronDown className=\"w - 4 h - 4 transition - transform duration - 200 group - hover:rotate - 180\"    />) : (<Link;
                      href={item.href}"
                      className='flex items - center space - x-2 text - gray - 300 hover: text - white transition - colors duration - 200 py - 2'                      className=\"flex items - center space - x-2 text - gray - 300 hover:text - white transition - colors duration - 200 py - 2\"    />

>>>>>>> origin/chore/fix-lint-and-merge
                      {item.icon}
                      <span    />{item.nam}
}</span>;
                    </Link>)}
                  {/* Dropdown Menu */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {item.dropdown && active_dropdown === item.name && (<div;
                      }
                      onMouseEnter={() => setActiveDropdown (item.name)}
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                  {item.dropdown && active_dropdown === item.name && (<div;
                      }
                      onMouseEnter={() => setActiveDropdown (item.name)}
                  {item.dropdown && active_dropdown === item.name && (
                    <div;
                      onMouseEnter={() => setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}'
                      className='absolute top - full left - 0 mt - 2 w - 80 bg - black / 95 backdrop - blur - xl border border - white / 10 rounded - 2xl shadow - 2xl p - 4';
                    >;'
                      <div className='grid grid - cols - 1 gap - 2'>;
                        {item.dropdown.map (dropdown_item => (
                          <Link;
=======
                  {item.dropdown && active_dropdown === item.name && (<div;}
                      onMouseEnter={() =    /> setActiveDropdown (item.name)}
                      onMouseLeave={() => setActiveDropdown (null)}
                      className='absolute top - full left - 0 mt - 2 w - 80 bg - black / 95 backdrop - blur - xl border border - white / 10 rounded - 2xl shadow - 2xl p - 4'>

                      <div className='grid grid - cols - 1 gap - 2'    />;
                        {item.dropdown.map (dropdown_item => (<Link;}
>>>>>>> origin/chore/fix-lint-and-merge
                            key={dropdown_item.name}
                            href={dropdown_item.href}
                            className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - white / 10 transition - colors duration - 200 group'    />

                            <div className='text - purple - 400 group - hover:text - purple - 300 transition - colors'    />;
                              {dropdown_item.icon}
                            </div>;
                            <span className='text - gray - 300 group - hover: text - white transition - colors'    />                              {dropdown_item.nam}
}                    >;"
                      <div className=\"grid grid - cols - 1 gap - 2\"    />;
                        {item.dropdown.map ((dropdown_item) => (<Link;}
                            key={dropdown_item.name}
                            href={dropdown_item.href}"
                            className=\"flex items - center space - x-3 p - 3 rounded - xl hover:bg - white / 10 transition - colors duration - 200 group\"    />
"
                            <div className=\"text - purple - 400 group - hover:text - purple - 300 transition - colors\"    />;
                              {dropdown_item.icon}
                            </div>;"
<<<<<<< HEAD
                            <span className="text - gray - 300 group - hover:text - white transition - colors">;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      onMouseLeave={() => setActiveDropdown (null)}
                      className='absolute top - full left - 0 mt - 2 w - 80 bg - black / 95 backdrop - blur - xl border border - white / 10 rounded - 2xl shadow - 2xl p - 4'>'

                      <div className='grid grid - cols - 1 gap - 2'>;'
                        {item.dropdown.map (dropdown_item => { return (<Link; }
                            }
                            key={dropdown_item.name}
                            href={dropdown_item.href}
                            className='flex items - center space - x-3 p - 3 rounded - xl 'hover':bg - white / 10 transition - colors duration - 200 group'>'

                            <div className='text - purple - 400 group - 'hover':text - purple - 300 transition - colors'>;'
                              {dropdown_item.icon}
                            </div>;
                            <span className='text - gray - 300 group - hover:text - white transition - colors'>                              {dropdown_item.name}                    >;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {item.dropdown.map ((dropdown_item) => (<Link;
                            key={dropdown_item.name}
                            href={dropdown_item.href}
                            className='flex items - center space - x-3 p - 3 rounded - xl 'hover':bg - white / 10 transition - colors duration - 200 group'>'

                            <div className='text - purple - 400 group - 'hover':text - purple - 300 transition - colors'>;'
                              {dropdown_item.icon}
                            </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                            <span className="text - gray - 300 group - "hover":text - white transition - colors">;"
=======
>>>>>>> origin/resolved-merge-conflicts
                            <span className="text - gray - 300 group - hover:text - white transition - colors">;
=======
                            <span className=\"text - gray - 300 group - hover:text - white transition - colors\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                              {dropdown_item.name}
                            </span>;
                          </Link>))}
                      </div>
    </div>
  );
}
                </div>))}
            </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            {/* CTA Button */}'
            <div className='hidden lg:flex items - center space - x-4'>;'
              <Link href='/contact'>;'"
                <button className='bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg'>                  Get Started            <div className="hidden lg:flex items - center space - x-4">;"
              <Link href="/contact">;"
                <button className="bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
            <div className='hidden lg:flex items - center space - x-4'>;
              <Link href='/contact'>;
                <button className='bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg'>                  Get Started            <div className="hidden lg:flex items - center space - x-4">;
              <Link href="/contact">;
                <button className="bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg">;
<<<<<<< HEAD
=======
            {/* CTA Button */}
            <div className='hidden lg:flex items - center space - x-4'    />;
              <Link href='/contact'    />;"
                <button className='bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg'    />                  Get Started            <div className=\"hidden lg:flex items - center space - x-4\"    />;"
              <Link href=\"/contact\"    />;"
                <button className=\"bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  Get Started;
                </button>;
              </Link>;
            </div>;{/* Mobile Menu Button */}
            <button;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
<<<<<<< HEAD
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
            {/* Mobile Menu Button */}
            <button
              onClick={() =    /> setIsOpen(!isOpen)}
className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors'>

            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}



<<<<<<< HEAD

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </button>
          </div>
        </div>
      </nav>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: '100%' }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======


                <button
                  onClick={() => setIsOpen(false)}

                  className='p-2 text-gray-300 hover:text-white transition-colors';
                >;
                  <X className='w-6 h-6' />;
                </button>;
              </div>;
              <div className='space-y-6'>;
                {navigationItems && navigationItems.map(item => (;
                  <div key={item && item.name}>;
                    {item && item.dropdown ? (;
                      <div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <button
                          onClick={() =>;
                            setActiveDropdown(;
                              activeDropdown === item && item.name ? null : item && item.name;
                            );
                          }
                          className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3';
                        >;
                          <div className='flex items-center space-x-3'>;
                            {item && item.icon}
                            <span>{item && item.name}</span>;
                          </div>;
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item && item.name ? 'rotate-180' : ''
                            }`}
                          />;
                        </button>;
                        {activeDropdown === item && item.name && (;
                          <div className='ml-6 mt-2 space-y-2'>;
                            {item && item.dropdown.map(dropdownItem => (;
                              <Link
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className='flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white';
                              >;
                                {dropdownItem && dropdownItem.icon}
                                <span>{dropdownItem && dropdownItem.name}</span>;
                              </Link>;
                            ))}
                          </div>;
                        )}
<<<<<<< HEAD
                      </div>                    ) : (;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
          >
            <div className='p-6'>
              <div className='flex items-center justify-between mb-8'>
                <div className='text-xl font-bold text-white'>Menu</div>
                <button
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            transition={{ duration: 0.3 }}className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden';
className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden';
          >;
            <div className='p-6'>;
              <div className='flex items-center justify-between mb-8'>;
                <div className='text-xl font-bold text-white'>Menu</div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
              onClick={() =    /> setIsOpen(!isOpen)}
className='lg:hidden p-2 text-gray-300 hover:text-white transition-colors'>

              {isOpen ? (<X className='w-6 h-6'    />;}
              ) : (<Menu className='w-6 h-6'    />;}
              )}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </button>;
          </div>;
        </div>;
      </nav>;
            </button>;
          </div>;
        </div>;
      </nav>;{/* Mobile Navigation */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <AnimatePresence>;
        {isOpen && (<motion&& motion.div;
            }
            initial={{ "opacity": 0, "x": '100%' ,'
}
            animate={{ "opacity": 1, "x": 0 
}
            exit={{ "opacity": 0, "x": '100%' ,'
}
                <button;
                  onClick={() => setIsOpen(false)}className='p-2 text-gray-300 "hover":text-white transition-colors'>'

                  <X className='w-6 h-6' />;'
                </button>;
              </div>;
              <div className='space-y-6'>;'
                {navigationItems && navigationItems.map(item => (<div key={item && item.name}>;
                    {item && item.dropdown ? (<div>;<button;
                          }
                          onClick={() =>;
                            }
                            setActiveDropdown(activeDropdown === item && item.name ? null : item && item.name;
                            )}
                          className='flex items-center justify-between w-full text-left text-gray-300 "hover":text-white transition-colors duration-200 py-3'>'

                          <div className='flex items-center space-x-3'>;'
                            {item && item.icon}
                            <span />{item && item.name}</span>;
                          </div>;
                          <ChevronDown;
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : '';'
                            }`}` />;                        </button>;
                        {activeDropdown === item && item.name && (<div className='ml-6 mt-2 space-y-2'>;'
                            {item && item.dropdown.map(dropdownItem => { return (<Link; }
                                }
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className='flex items-center space-x-3 p-2 rounded-lg "hover": bg-white/10 transition-colors duration-200 text-gray-400 "hover":text-white'>'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
      <AnimatePresence />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0;, x: '100%' ;}
}
            animate={{ opacity: 1;, x: 0 ;}
}
            exit={{ opacity: 0;, x: '100%' ;}
}
                <button;
                  onClick={() = /> setIsOpen(false)}className='p-2 text-gray-300 hover:text-white transition-colors'>

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (<motion&& motion.div;
            }
            initial={{ "opacity": 0, "x": '100%' ,'
=======
      <AnimatePresence    />;
        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, x: '100%' }
>>>>>>> origin/chore/fix-lint-and-merge
}
            animate={{ opacity: 1, x: 0 }
}
            exit={{ opacity: 0, x: '100%' }
}
                <button;
                  onClick={() =    /> setIsOpen(false)}className='p-2 text-gray-300 hover:text-white transition-colors'>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

<<<<<<< HEAD
                        <button;
                          onClick={() =>;
                            setActiveDropdown(;
                              activeDropdown === item && item.name ? null : item && item.name;
                            );
                          }'
                          className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3';
                        >;'
                          <div className='flex items-center space-x-3'>;
=======
                  <X className='w-6 h-6'    />;
                </button>;
              </div>;
              <div className='space-y-6'    />;
                {navigationItems && navigationItems.map(item => (<div key={item && item.name}    />;
                    {item && item.dropdown ? (<div    />;<button;
                          onClick={() =    />;}
                            setActiveDropdown(activeDropdown === item && item.name ? null : item && item.name;}
                            )}
                          className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'>

                          <div className='flex items-center space-x-3'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                            {item && item.icon}
                            <span    />{item && item.name}</span>;
                          </div>;
<<<<<<< HEAD
                          <ChevronDown;`
                            className={`w-4 h-4 transition-transform duration-200 ${'
                              activeDropdown === item && item.name ? 'rotate-180' : ''`
                            }`}
                          />;
                        </button>;
                        {activeDropdown === item && item.name && (;'
                          <div className='ml-6 mt-2 space-y-2'>;
                            {item && item.dropdown.map(dropdownItem => (;
                              <Link;
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}
                                onClick={() => setIsOpen(false)}'
                                className='flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white';
                              >;
=======
                          <ChevronDown;
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item && item.name ? 'rotate-180' : '';}
                            }`}
                             />;
                        </button>;
                        {activeDropdown === item && item.name && (<div className='ml-6 mt-2 space-y-2'    />;}
                            {item && item.dropdown.map(dropdownItem => (<Link;}
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}
                                onClick={() =    /> setIsOpen(false)}
                                className='flex items-center space-x-3 p-2 rounded-lg hover: bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white'>

>>>>>>> origin/chore/fix-lint-and-merge
                                {dropdownItem && dropdownItem.icon}
                                <span    />{dropdownItem && dropdownItem.nam}
}</span>;
                              </Link>;
                            ))}
                          </div>;
                        )}
                      <Link;
href={item && item.href}
                        onClick={() =    /> setIsOpen(false)}
      {/* Mobile Navigation */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <AnimatePresence>;
        {isOpen && (<motion.div;
            }
            initial={{ "opacity": 0, "x": '100%' ,'
}
            animate={{ "opacity": 1, "x": 0 
}
            exit={{ "opacity": 0, "x": '100%' }}'

            transition={{ "duration": 0.3 }}

className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 "lg":hidden''
          >
            <div className='p-6'>'
              <div className='flex items-center justify-between mb-8'>'
                <div className='text-xl font-bold text-white'>Menu</div>'
                <button,
onClick={() => setIsOpen(false
}
                  className='p-2 text-gray-300 "hover":text-white transition-colors'>'

                  <X className='w-6 h-6' />;'
                </button>;
              </div>;
              <div className='space-y-6'>;'
                {navigationItems.map(item => (<div key={item.name}>;
                    {item.dropdown ? (<div>;
                        <button;
                          }
                          onClick={() =>;
                            }
                            setActiveDropdown(activeDropdown === item.name ? null : item.name;
                            )}
                          className='flex items-center justify-between w-full text-left text-gray-300 "hover":text-white transition-colors duration-200 py-3'>'

                          <div className='flex items-center space-x-3'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
      <AnimatePresence>
        {isOpen && (
          <motion.div'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}'
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}'
            className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden'
className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden'
           />
            <div className='p-6' />
              <div className='flex items-center justify-between mb-8' />
                <div className='text-xl font-bold text-white' />Menu</div>
                <button;
                  onClick={() => setIsOpen(false)}
                  className='p-2 text-gray-300 hover:text-white transition-colors';
                >;
                  <X className='w-6 h-6' />;
                </button>;
              </div>;
              <div className=space-y-6>;
                {navigationItems.map(item => (<div key={item.name}>;
                    {item.dropdown ? (<div>;
=======
      <AnimatePresence    />;
        {isOpen && (<motion.div;}
            initial={{ opacity: 0, x: '100%' }
}
            animate={{ opacity: 1, x: 0 }
}
            exit={{ opacity: 0, x: '100%' }}

            transition={{ duration: 0.3 }}

className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden'
              />
            <div className='p-6'    />
              <div className='flex items-center justify-between mb-8'    />
                <div className='text-xl font-bold text-white'    />Menu</div>
                <button;
onClick={() =    /> setIsOpen(false}
}
                  className='p-2 text-gray-300 hover:text-white transition-colors'>

                  <X className='w-6 h-6'    />;
                </button>;
              </div>;
              <div className='space-y-6'    />;
                {navigationItems.map(item => (<div key={item.name}    />;
                    {item.dropdown ? (<div    />;
>>>>>>> origin/chore/fix-lint-and-merge
                        <button;
                          onClick={() =    />;}
                            setActiveDropdown(activeDropdown === item.name ? null : item.name;}
                            )}
<<<<<<< HEAD

=======
                          className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'>

                          <div className='flex items-center space-x-3'    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                            {item.icon}
                            <span    />{item.name}</span>;
                          </div>;
                          <ChevronDown;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';'
                            }`}` />;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD

=======
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : '';}
                            }`}
                             />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        </button>;
                        {activeDropdown === item.name && (<div className='ml-6 mt-2 space-y-2'    />;}
                            {item.dropdown.map(dropdownItem => (<Link;}
                                key={dropdownItem.name}
                                href={dropdownItem.href}
<<<<<<< HEAD
                                onClick={() => setIsOpen(false)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                                className='flex items-center space-x-3 p-2 rounded-lg "hover": bg-white/10 transition-colors duration-200 text-gray-400 "hover":text-white'>'
=======
>>>>>>> origin/resolved-merge-conflicts
=======
                                onClick={() =    /> setIsOpen(false)}
                                className='flex items-center space-x-3 p-2 rounded-lg hover: bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white'>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

                                {dropdownItem.icon}
                                <span    />{dropdownItem.nam}
}</span>;
                              </Link>;
                            ))}
                          </div>;
                        )}
<<<<<<< HEAD
                      </div>;
                    ) : (<Link;
                        href={item && item.href}
                        onClick={() => setIsOpen(false)}className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3';
                      >;
>>>>>>> merged-prs-20250907-203621
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors
                >
                  <X className=w-6 h-6" />
                </button>
              </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className="space-y-6">
=======
>>>>>>> origin/resolved-merge-conflicts
              <div className="space-y-6>
=======
              <div className="space-y-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                              className=flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
=======
className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                            >
                              <div className="flex items-center space-x-3>
                                {item.icon}
                                <span>{item.name}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? rotate-180 : ''
                              }`} />
                            </button>
                            {activeDropdown === item.name && (
                              <div className=ml-6 mt-2 space-y-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    onClick={() => setIsOpen(false)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white
=======
className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                                  >
                                    {dropdownItem.icon}
                                    <span>{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                    ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <Link,
href={item && item.href}
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
=======
<<<<<<< HEAD
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                        href={item && item.href}
                        onClick={() => setIsOpen(false)}
className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3'
origin/cursor/automate-test-improve-and-merge-code-2533
                      <Link;
href={item && item.href}
                        onClick={() = /> setIsOpen(false)}

className='flex items-center space-x-3 text-gray-300 hover: text-white transition-colors duration-200 py-3'
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <Link
href={item && item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden'

          >
            <div className='p-6'>
              <div className='flex items-center justify-between mb-8'>
                <div className='text-xl font-bold text-white'>Menu</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-2 text-gray-300 hover:text-white transition-colors'
                >
                  <X className='w-6 h-6' />
                </button>
              </div>
              <div className='space-y-6'>
                {navigationItems.map(item => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'
                        >
                          <div className='flex items-center space-x-3'>
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className='ml-6 mt-2 space-y-2'>
                            {item.dropdown.map(dropdownItem => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className='flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white'
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3'                      >                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      </div>                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3'                      >                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}




<<<<<<< HEAD
                        className='flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3'                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
<<<<<<< HEAD
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10">
=======
<<<<<<< HEAD
                    )}
                  </div>
                ))}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden'
                      <Link
                        href={item && item.href}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        onClick={() => setIsOpen(false)}
=======

                      </div>
                    ) : (
                      <Link;
href={item && item.href}
                        onClick={() =    /> setIsOpen(false)}
>>>>>>> origin/chore/fix-lint-and-merge

className='flex items-center space-x-3 text-gray-300 hover: text-white transition-colors duration-200 py-3'
                      >

                        {item.icon}
                        <span    />{item.nam}
}</span>;
                      </Link>;
                    )}
                  </div>;
                ))}<div className='pt-6 border-t border-white/10'    />;
                  <Link href='/contact' onClick={() =    /> setIsOpen(false)}>;"
                    <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300'    />                      Get Started                <div className=\"pt-6 border-t border-white/10\"    />;
                    )}
                  </div>;
                ))}
'
                <div className='pt-6 border-t border-white/10'>'
                  <Link href='/contact' onClick={() => setIsOpen(false)}>'"
=======
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    )}
                  </div>;
                ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD
'
                <div className='pt-6 border-t border-white/10'>'
                  <Link href='/contact' onClick={() => setIsOpen(false)}>'"
=======
>>>>>>> origin/resolved-merge-conflicts


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======



<<<<<<< HEAD
<div className='pt-6 border-t border-white/10'    />
                  <Link href='/contact' onClick={() =    /> setIsOpen(false)}>
                    <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300'    />
                      Get Started;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className='pt-6 border-t border-white/10'>
                  <Link href='/contact' onClick={() => setIsOpen(false)}>
                    <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300'>                      Get Started                <div className="pt-6 border-t border-white/10">
>>>>>>> merged-prs-20250907-203621
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      Get Started
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </button>
                  </Link>
                </div>

<<<<<<< HEAD
                {/* Mobile Contact Info */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Mobile Contact Info */}'
                <div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'>;'
                  <div className='flex items-center space-x-2'>;'
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Mobile Contact Info */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                <div className="pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
<<<<<<< HEAD
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-xs">{contactInfo.address}</span>
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <Phone className='w-4 h-4 text-purple-400' />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;'
                  <div className='flex items-center space-x-2>;
                    <Mail className='w-4 h-4 text-blue-400' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className=flex items-center space-x-2'>;'
                    <MapPin className=w-4 h-4 text-green-400 />;'
                    <span className='text-xs>{contactInfo && contactInfo.address}</span>                  </div>                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Mail className=w-4 h-4 text-blue-400" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;"
                  <div className=flex items-center space-x-2>;"
                    <MapPin className="w-4 h-4 text-green-400 />;
                    <span className="text-xs">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;'
            initial={ opacity: 0, coordinate_x: '100%' }
            animate={ opacity: 1, coordinate_x: 0 }'
            exit={ opacity: 0, coordinate_x: '100%' }
            transition={ duration: 0.3 }'
            className='fixed top - 0 right - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - white / 10 z - 50 lg:hidden';'
            <div className='p - 6'>;'
              <div className='flex items - center justify - between mb - 8'>;'
                <div className='text - xl font - bold text - white'>Menu</div>;
                <button;
                  on_click={() => setIsOpen (false)}'
                  className=p - 2 text - gray - 300 hover:text - white transition - colors;
                >;'
                  <X className='w - 6 h - 6 />;
                </button>;
              </div>;
              <div className='space - y-6'>;
                {navigation_items.map (item => (
                  <div key={item.name}>;
                    {item.dropdown ? (
                      <div>;
                        <button;
                          on_click={() =>;
                            setActiveDropdown (
                              active_dropdown === item.name ? null : item.name);
                          }
                          className=flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        >;'
                          <div className=flex items - center space - x-3>;
                            {item.icon}
                            <span>{item.name}</span>;
                          </div>;
                          <ChevronDown;`
                            className={`w - 4 h - 4 transition - transform duration - 200 ${'
                              active_dropdown === item.name ? 'rotate - 180 : ';`
                            }`}
                          />;
                        </button>;
                        {active_dropdown === item.name && ('
                          <div className=ml - 6 mt - 2 space - y-2>;
                            {item.dropdown.map (dropdown_item => (
                              <Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                on_click={() => setIsOpen (false)}'
                                className='flex items - center space - x-3 p - 2 rounded - lg hover:bg - white / 10 transition - colors duration - 200 text - gray - 400 hover:text - white;
                              >;
                                {dropdown_item.icon}
                                <span>{dropdown_item.name}</span>;
                              </Link>))}
                          </div>)}
                      </div>                    ) : (
                      <Link;
                        href={item.href}
                        on_click={() => setIsOpen (false)}
                        className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3'                      >                    ) : (
                      <Link;
                        href={item.href}
                        on_click={() => setIsOpen (false)}
                        className=flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3'                        className=flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3";
                      >;
                        {item.icon}
                        <span>{item.name}</span>;
                      </Link>)}
                  </div>))}'
                <div className=pt - 6 border - t border - white / 10>;'
                  <Link href='/contact on_click={() => setIsOpen (false)}>;"
                    <button className='w - full bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300'>                      Get Started                <div className=pt - 6 border - t border - white / 10>;"
                  <Link href="/contact on_click={() => setIsOpen (false)}>;
                    <button className="w - full bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300">;
                      Get Started;
                    </button>;
                  </Link>;
                </div>;
                {/* Mobile Contact Info */}
                <div className=pt - 6 border - t border - white / 10 space - y-3 text - sm text - gray - 400'>;'
                  <div className=flex items - center space - x-2>;'
                    <Phone className='w - 4 h - 4 text - purple - 400 />;
                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className=w - 4 h - 4 text - blue - 400' />;
                    <span>{contact_info.email}</span>;
                  </div>;'
                  <div className=flex items - center space - x-2>;'
                    <MapPin className='w - 4 h - 4 text - green - 400 />;
                    <span className='text - xs'>{contact_info.address}</span>                  </div>                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className=flex items - center space - x-2">;"
                    <Mail className=w - 4 h - 4 text - blue - 400 />;
                    <span>{contact_info.email}</span>;
                  </div>;"
                  <div className="flex items - center space - x-2>;
                    <MapPin className="w - 4 h - 4 text - green - 400" />;
                    <span className=text - xs">{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Overlay *
}
      {isOpen && (<motion&& motion.div;
          </motion.div>)}
=======
>>>>>>> origin/resolved-merge-conflicts

<div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'>
                  <div className='flex items-center space-x-2'>

<div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400' />
                  <div className='flex items-center space-x-2' />
                    <Phone className='w-4 h-4 text-purple-400' />
                    <span />{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2>
                    <Mail className=w-4 h-4 text-blue-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2>
                    <MapPin className=w-4 h-4 text-green-400" />
                    <span className="text-xs>{contactInfo.address}</span>
=======
                {/* Mobile Contact Info */}

<div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'    />
                  <div className='flex items-center space-x-2'    />
                    <Phone className='w-4 h-4 text-purple-400'    />
                    <span    />{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center space-x-2'    />
                    <Mail className='w-4 h-4 text-blue-400'    />
                    <span    />{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-2'    />
                    <MapPin className='w-4 h-4 text-green-400'    />
                    <span className='text-xs'    />{contactInfo.address}</span>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
    </>
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <Link href="/contact" onClick={() => setIsOpen(false)}>;
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">;
<div className='pt-6 border-t border-white/10'>;
                  <Link href='/contact' onClick={() => setIsOpen(false)}>;
                    <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300'>;
=======

<<<<<<< HEAD
<div className='pt-6 border-t border-white/10'>;
                  <Link href='/contact' onClick={() => setIsOpen(false)}>;
                    <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300'>                      Get Started                <div className="pt-6 border-t border-white/10">;
                  <Link href="/contact" onClick={() => setIsOpen(false)}>;
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      Get Started;
                    </button>;
                  </Link>;
                </div>;
<<<<<<< HEAD
                {/* Mobile Contact Info */}<div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Mobile Contact Info */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'>;
                  <div className='flex items-center space-x-2'>;
                    <Phone className='w-4 h-4 text-purple-400' />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-4 h-4 text-blue-400' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-4 h-4 text-green-400' />;
                    <span className='text-xs'>{contactInfo && contactInfo.address}</span>                  </div>                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-4 h-4 text-blue-400' />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-4 h-4 text-green-400' />;
                    <span className='text-xs'>{contactInfo && contactInfo.address}</span>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (<motion.div;
            initial={ opacity: 0, coordinate_x: '100%' }
            animate={ opacity: 1, coordinate_x: 0 }
            exit={ opacity: 0, coordinate_x: '100%' }
            transition={ duration: 0.3 }
            className='fixed top - 0 right - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - l border - white / 10 z - 50 lg:hidden';
            <div className='p - 6'>;
              <div className='flex items - center justify - between mb - 8'>;
                <div className='text - xl font - bold text - white'>Menu</div>;
                <button;
                  on_click={() => setIsOpen (false)}
                  className='p - 2 text - gray - 300 hover:text - white transition - colors';
                >;
                  <X className='w - 6 h - 6' />;
                </button>;
              </div>;
              <div className='space - y-6'>;
                {navigation_items.map (item => (<div key={item.name}>;
                    {item.dropdown ? (<div>;
                        <button;
                          on_click={() =>;
                            setActiveDropdown (active_dropdown === item.name ? null : item.name)}
                          className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        >;
                          <div className='flex items - center space - x-3'>;
                            {item.icon}
                            <span>{item.name}</span>;
                          </div>;
                          <ChevronDown;
                            className={`w - 4 h - 4 transition - transform duration - 200 ${active_dropdown === item.name ? 'rotate - 180' : '';
                            }`}
                          />;
                        </button>;
                        {active_dropdown === item.name && (<div className='ml - 6 mt - 2 space - y-2'>;
                            {item.dropdown.map (dropdown_item => (<Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                on_click={() => setIsOpen (false)}
                                className='flex items - center space - x-3 p - 2 rounded - lg hover:bg - white / 10 transition - colors duration - 200 text - gray - 400 hover:text - white';
                              >;
                                {dropdown_item.icon}
                                <span>{dropdown_item.name}</span>;
                              </Link>))}
                          </div>)}
                      </div>                    ) : (<Link;
                        href={item.href}
                        on_click={() => setIsOpen (false)}
                        className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3'                      >                    ) : (<Link;
                        href={item.href}
                        on_click={() => setIsOpen (false)}
                        className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3'                        className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                      >;
                        {item.icon}
                        <span>{item.name}</span>;
                      </Link>)}
                  </div>))}
                <div className='pt - 6 border - t border - white / 10'>;
                  <Link href='/contact' on_click={() => setIsOpen (false)}>;
                    <button className='w - full bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300'>                      Get Started                <div className='pt - 6 border - t border - white / 10'>;
                  <Link href='/contact' on_click={() => setIsOpen (false)}>;
                    <button className='w - full bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 text - white font - semibold px - 6 py - 3 rounded - xl transition - all duration - 300'>;
                      Get Started;
                    </button>;
                  </Link>;
                </div>;
                {/* Mobile Contact Info */}
                <div className='pt - 6 border - t border - white / 10 space - y-3 text - sm text - gray - 400'>;
                  <div className='flex items - center space - x-2'>;
                    <Phone className='w - 4 h - 4 text - purple - 400' />;
                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className='w - 4 h - 4 text - blue - 400' />;
                    <span>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 4 h - 4 text - green - 400' />;
                    <span className='text - xs'>{contact_info.address}</span>                  </div>                    <span>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className='w - 4 h - 4 text - blue - 400' />;
                    <span>{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <MapPin className="w - 4 h - 4 text - green - 400" />;
                    <span className="text - xs">{contact_info.address}</span>;
<<<<<<< HEAD
                  </div>;
                </div>;
              </div>;
            </div>;<div className='pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400'>;
                  <div className='flex items-center space-x-2'>;
                    <Phone className='w-4 h-4 text-purple-400' />;
                    <span>{contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-4 h-4 text-blue-400' />;
                    <span>{contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-4 h-4 text-green-400' />;
                    <span className='text-xs'>{contactInfo.address}</span>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
      </AnimatePresence>;





=======


          </motion.div>;
        )}
<<<<<<< HEAD
      </AnimatePresence>;
<<<<<<< HEAD
      {/* Overlay */}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </AnimatePresence>;
<<<<<<< HEAD
      {/* Overlay */}
<<<<<<< HEAD
      {is_open && (<motion.div;
          }
          initial={{ "opacity": 0 }}
          animate={{ "opacity": 1 }}

          exit={{ "opacity": 0 }}

          transition={{ "duration": 0.3 }}
className='fixed inset-0 bg-black/50 z-40 "lg":hidden''

          transition={{ duration: 0.3 }}
      {is_open && (<motion.div;}
          initial={{ opacity: 0 ;}}
          animate={{ opacity: 1 ;}}

          exit={{ opacity: 0 ;}}
          transition={{ duration: 0.3 ;}}
className='fixed inset-0 bg-black/50 z-40 lg:hidden'
origin/cursor/automate-test-improve-and-merge-code-2533
          onClick={() => setIsOpen(false)}

          transition={{ duration: 0.3 ;}}
=======
>>>>>>> origin/resolved-merge-conflicts
      {isOpen && (<motion&& motion.div;
          </motion.div>)}
      </AnimatePresence>;
      {/* Overlay */}
=======

      {/* Overlay *}
}
      {isOpen && (<motion&& motion.div;}
          </motion.div    />)}
      </AnimatePresence>;
      {/* Overlay */}
      {is_open && (<motion.div;}
=======
=======
<<<<<<< HEAD
=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Overlay */}
      {isOpen && (;
        <motion&& motion.div
          </motion.div>)}
      </AnimatePresence>;
      {/* Overlay */}
      {is_open && (
        <motion.div;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
>>>>>>> origin/chore/fix-lint-and-merge

          exit={{ opacity: 0 }}

          transition={{ duration: 0.3 }}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
className='fixed inset-0 bg-black/50 z-40 lg:hidden'
<<<<<<< HEAD
          exit={{ opacity: 0 }}transition={{ duration: 0.3 }}
className=fixed inset-0 bg-black/50 z-40 lg:hidden;
          onClick={() => setIsOpen(false)}
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Spacer for fixed navigation *
}
      <div className='h-32'></div>;'
    </>;
  )<div className="h-32"></div>;"
    </>;
          className='fixed inset - 0 bg - black / 50 z - 40 "lg": hidden'          on_click={() => setIsOpen (false,'
}          className="fixed inset - 0 bg - black / 50 z - 40 "lg":hidden";"
          on_click={() => setIsOpen (false)}
        />)}
      {/* Spacer for fixed navigation */}
      <div className='h - 32'></div>;'

    </>);      <div className="h - 32"></div>;"
    </>);
}

'
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'          onClick={() => setIsOpen(false)}
      {/* Spacer for fixed navigation *}
}
      <div className='h-32' /></div>;
    </>;"
  )<div className=\"h-32\" /></div>;
    </>;
          className='fixed inset - 0 bg - black / 50 z - 40 lg: hidden'          on_click={() => setIsOpen (false;}"
}          className=\"fixed inset - 0 bg - black / 50 z - 40 lg:hidden\";
          on_click={() => setIsOpen (false)}
        />)}
      {/* Spacer for fixed navigation */}
      <div className='h - 32'></div>;
=======
>>>>>>> origin/resolved-merge-conflicts
      {/* Spacer for fixed navigation */}
      <div className='h-32'></div>;
    </>;
  )<div className='h-32'></div>;'
    </>;
<<<<<<< HEAD
=======


  );

}

<<<<<<< HEAD
          transition={{ duration: 0.3 }}


          className='fixed inset-0 bg-black/50 z-40 lg:hidden'          onClick={() => setIsOpen(false)}          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Spacer for fixed navigation */}
      <div className='h-32'></div>
    </>
);      <div className="h-32"></div>
    </>
  );
}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className='fixed inset - 0 bg - black / 50 z - 40 lg:hidden'          on_click={() => setIsOpen (false)}          className="fixed inset - 0 bg - black / 50 z - 40 lg:hidden";
          on_click={() => setIsOpen (false)}
        />)}
          on_click={() => setIsOpen (false)}
        />)}
      {/* Spacer for fixed navigation */}
      <div className='h - 32'></div>;
      {/* Spacer for fixed navigation */}
      <div className="h-32"></div>
      {/* Spacer for fixed navigation */}
<div className='h-32'></div>
      {/* Spacer for fixed navigation *}
}
<div className='h-32' /></div>
    </>
    </>)<div className="h - 32"></div>;
    </>)}className='fixed inset-0 bg-black/50 z-40 lg:hidden'          onClick={() => setIsOpen(false)}onClick={() => setIsOpen(false)}/>;
      {/* Spacer for fixed navigation */}


      {/* Spacer for fixed navigation *}
}
<div className='h-32' /></div>
    </>
    </>)<div className=h - 32"></div>;
    </>)}className=fixed inset-0 bg-black/50 z-40 lg:hidden          onClick={() => setIsOpen(false)}onClick={() => setIsOpen(false)}/>;
      )}{/* Spacer for fixed navigation */}
<div className='h-32'></div>;
    </>;
  )}}
}

}
  );
}



  )
  )
}

"
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
  );
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

          onClick={() =    /> setIsOpen(false)}
      )}
      {/* Spacer for fixed navigation *}
}
      <div className='h-32'    /></div>;
    <   />;"
  )<div className=\"h-32\"    /></div>;
    <   />;
          className='fixed inset - 0 bg - black / 50 z - 40 lg: hidden'          on_click={() => setIsOpen (false}"
}          className=\'fixed inset - 0 bg - black / 50 z - 40 lg:hidden\';
          on_click={() => setIsOpen (false)}
        />)}
      {/* Spacer for fixed navigation */}
      <div className='h - 32'    /></div>;
"
    <   />);      <div className=\"h - 32\"    /></div>;
    <   />);
}


          className='fixed inset-0 bg-black/50 z-40 lg: hidden'          onClick={() => setIsOpen(false)}

          onClick={() => setIsOpen(false)}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'          onClick={() => setIsOpen(false)}

          onClick={() => setIsOpen(false)}

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />
      )}

      {/* Spacer for fixed navigation *}
}
<div className='h-32'    /></div>
    <   />
  );

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  );
);      <div className="h-32"></div>
    </>
  );
}

}
  );
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
