<<<<<<< HEAD
<<<<<<< HEAD
import {;
  Mail,;
  Phone,;
  MapPin,;
  Globe,;
  Twitter,;
  Linkedin,;
  Github,;
  ArrowUp,;
  Crown,;
  Zap,;
  Brain,;
  Rocket,;
  Shield,;
  Users,;
  BookOpen,;
  Briefcase,;
  Atom,;
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { motion } from 'framer-motion';


<<<<<<< HEAD
<<<<<<< HEAD


import {
  Mail
  Phone
  MapPin
  Globe
  Twitter
  Linkedin
  Github
  ArrowUp
  Crown
  Zap
  Brain
  Rocket
  Shield
  Users
  BookOpen
  Briefcase
  Atom;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Mail,
  Phone,
  MapPin,
  Globe,
  Twitter,
  Linkedin,
  Github,
  ArrowUp,
  Crown,
  Zap,
  Brain,
  Rocket,
  Shield,
  Users,
  BookOpen,
<<<<<<< HEAD
<<<<<<< HEAD
  external?: boolean;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Briefcase,;
  Atom,;


} from 'lucide-react';
import Link from 'next / link';
import { AnimatePresence } from 'framer-motion';
;
interface FooterLink {
interface FooterLink {;
  label: string;
  href: string;
  description?: string;

  external?: boolean;
;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface FooterSection {
interface FooterSection {;
  title: string;
  links: FooterLink[];} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowUp, Crown, Zap, Brain, Rocket;
  Shield, Users, BookOpen, Briefcase, Atom
} from 'lucide-react';
import Link from 'next/link';
import Link from 'next / link';
import { AnimatePresence } from 'framer-motion';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import Link from 'next/link';
import Link from 'next / link';
import { AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/ai-services', description: 'Advanced AI solutions' },
      { label: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen quantum tech' },
      { label: 'Space Technology', href: '/space-tech', description: 'Innovative space solutions' },
      { label: 'Q4 2025 Innovation', href: '/innovative-2025-q4-showcase', description: 'Latest revolutionary services' },
      { label: 'Pricing Guide', href: '/comprehensive-pricing-2025-q4', description: 'Comprehensive pricing' },
      { label: 'Cybersecurity', href: '/cybersecurity', description: 'Enterprise security' },
      { label: 'Cloud Solutions', href: '/cloud-platform', description: 'Scalable cloud infrastructure' },
      { label: 'View All Services', href: '/services', description: 'Complete service portfolio' }
<<<<<<< HEAD
<<<<<<< HEAD
    ]
  }
  {
    title: 'Solutions'
  Briefcase,;
  Atom,;
} from 'lucide-react';

import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
interface FooterLink {
  label: string;
  href: string;
  description?: string;

  external?: boolean;
interface FooterSection {
  title: string;
  links: FooterLink[];} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
interface FooterLink {
  label: string
  href: string
  description?: string;

  external?: boolean
}
interface FooterSection {

  title: string

  links: FooterLink[]
}
const footerSections: FooterSection[] = [
  {

    title: 'Services'

    links: [
      {
        label: 'AI & Machine Learning'
        href: '/ai-services'
        description: 'Advanced AI solutions'
      }
      {
        label: 'Quantum Computing'
        href: '/quantum-computing'
        description: 'Next-gen quantum tech'
      }
      {
        label: 'Space Technology'
        href: '/space-tech'
        description: 'Innovative space solutions'
      }
      {
        label: 'Q4 2025 Innovation'
        href: '/innovative-2025-q4-showcase'
        description: 'Latest revolutionary services'
      }
      {
        label: 'Pricing Guide'
        href: '/comprehensive-pricing-2025-q4'
        description: 'Comprehensive pricing'
      }
      {
        label: 'Cybersecurity'
        href: '/cybersecurity'
        description: 'Enterprise security'
      }
      {
        label: 'Cloud Solutions'
        href: '/cloud-platform'
        description: 'Scalable cloud infrastructure'
      }
      {
        label: 'View All Services'
        href: '/services'
        description: 'Complete service portfolio'
      }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ]
  }
  {

    title: 'Solutions'

    links: [
      {
        label: 'Healthcare & Biotech'
        href: '/healthcare-solutions'
        description: 'Medical technology'
      }
      {
        label: 'Financial Services'
        href: '/solutions?industry=financial'
        description: 'Fintech solutions'
      }
      {
        label: 'Manufacturing'
        href: '/solutions?industry=manufacturing'
        description: 'Industry 4.0'
      }
      {
        label: 'Retail & E-commerce'
        href: '/solutions?industry=retail'
        description: 'Digital commerce'
      }
      {
        label: 'Government'
        href: '/solutions?industry=government'
        description: 'Public sector'
      }
      {
        label: 'Education'
        href: '/solutions?industry=education'
        description: 'EdTech solutions'
      }
  {
    title: 'Solutions'
    links: [

      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' }
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' }
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' }
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' }
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' }
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  }
  {
    title: 'Company'
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' }
      { label: 'Careers', href: '/careers', description: 'Join our team' }
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
<<<<<<< HEAD

  };
  external?: boolean;
}
interface FooterSection {
  title: string,
  links: FooterLink[];
}
const footer_sections: FooterSection[] = [;
  {
    title: 'Services',
    links: [;
      {
        label: 'AI & Machine Learning',
        href: '/ai - services',
        description: 'Advanced AI solutions',
      },
      {
        label: 'Quantum Computing',
        href: '/quantum - computing',
        description: 'Next - gen quantum tech',
      },
      {
        label: 'Space Technology',
        href: '/space - tech',
        description: 'Innovative space solutions',
      },
      {
        label: 'Q4 2025 Innovation',
        href: '/innovative - 2025 - q4 - showcase',
        description: 'Latest revolutionary services',
      },
      {
        label: 'Pricing Guide',
        href: '/comprehensive - pricing - 2025 - q4',
        description: 'Comprehensive pricing',
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Enterprise security',
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud - platform',
        description: 'Scalable cloud infrastructure',
      },
      {
        label: 'View All Services',
        href: '/services',
        description: 'Complete service portfolio',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [;
      {
        label: 'Healthcare & Biotech',
        href: '/healthcare - solutions',
        description: 'Medical technology',
      },
      {
        label: 'Financial Services',
        href: '/solutions?industry = financial',
        description: 'Fintech solutions',
      },
      {
        label: 'Manufacturing',
        href: '/solutions?industry = manufacturing',
        description: 'Industry 4.0',
      },
      {
        label: 'Retail & E - commerce',
        href: '/solutions?industry = retail',
        description: 'Digital commerce',
      },
      {
        label: 'Government',
        href: '/solutions?industry = government',
        description: 'Public sector',
      },
      {
        label: 'Education',
        href: '/solutions?industry = education',
        description: 'EdTech solutions',
      },
  {
    title: 'Solutions',
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare - solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry = financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry = manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E - commerce', href: '/solutions?industry = retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry = government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry = education', description: 'EdTech solutions' }
    ];
  }
  {
    title: 'Company',
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },
  {
    title: 'Company',
    links: [;
      {
        label: 'About Us',
        href: '/about',
        description: 'Our mission and values',
      },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },  {
    title: 'Solutions',
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare - solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry = financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry = manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E - commerce', href: '/solutions?industry = retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry = government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry = education', description: 'EdTech solutions' }
    ];
  }
  {
    title: 'Company',
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ];
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];
<<<<<<< HEAD

      { label: 'Blog', href: '/blog', description: 'Industry insights' },

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  {
    title: 'Company'
    links: [
      {
        label: 'About Us'
        href: '/about'
        description: 'Our mission and values'
      }
      { label: 'Careers', href: '/careers', description: 'Join our team' }
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  },  {
    title: 'Resources'
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },  {
    title: 'Solutions'
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' }
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' }
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' }
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' }
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' }
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  }
  {
    title: 'Company'
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' }
      { label: 'Careers', href: '/careers', description: 'Join our team' }
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  }
  {
    title: 'Resources'
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' }
      {
        label: 'White Papers'
        href: '/white-papers'
        description: 'In-depth research'
      }
      {
        label: 'Webinars'
        href: '/webinars'
        description: 'Educational content'
      }
      {
        label: 'Documentation'
        href: '/docs'
        description: 'Technical guides'
      }
      {
        label: 'Case Studies'
        href: '/case-studies'
        description: 'Success stories'
      }
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ]
  }
  {
    title: 'Industries'
    links: [
      {
        label: 'Healthcare'
        href: '/healthcare-solutions'
        description: 'Medical technology'
      }
      {
        label: 'Finance'
        href: '/financial-solutions'
        description: 'Fintech solutions'
      }
      {
        label: 'Manufacturing'
        href: '/manufacturing-ai-solutions'
        description: 'Industry 4.0'
      }
      {
        label: 'Government'
        href: '/government-technology-solutions'
        description: 'Public sector'
      }
      {
        label: 'Education'
        href: '/education-technology-solutions'
        description: 'EdTech solutions'
      }
    ]
  }
];
const socialLinks = [
  {
    icon: <Linkedin className='w-5 h-5' />
    href: 'https://linkedin.com/company/ziontechgroup'
    label: 'LinkedIn'
    external: true
  }
  {
    icon: <Twitter className='w-5 h-5' />
    href: 'https://twitter.com/ziontechgroup'
    label: 'Twitter'
    external: true
  }
  {
    icon: <Github className='w-5 h-5' />
    href: 'https://github.com/ziontechgroup'
    label: 'GitHub'
    external: true
  }
];
const quickLinks = [
  { name: 'About Us', href: '/about', icon: <Users className='w-4 h-4' /> }
  { name: 'Contact', href: '/contact', icon: <Phone className='w-4 h-4' /> }
  {
    name: 'Support'
    href: '/support'
    icon: <HelpCircle className='w-4 h-4' />
  }
  {
    name: 'Documentation'
    href: '/docs'
    icon: <FileText className='w-4 h-4' />
  }
  { name: 'API Reference', href: '/api', icon: <Code className='w-4 h-4' /> }
  { name: 'Status', href: '/status', icon: <TrendingUp className='w-4 h-4' /> },];
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  };  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> }
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> }
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
      { label: 'Blog', href: '/blog', description: 'Industry insights' },

  };
<<<<<<< HEAD

=======
=======
  external?: boolean;
}
interface FooterSection {
  title: string,
  links: FooterLink[];
}
const footer_sections: FooterSection[] = [;
  {
    title: 'Services',
    links: [;
      {
        label: 'AI & Machine Learning',
        href: '/ai - services',
        description: 'Advanced AI solutions',
      },
      {
        label: 'Quantum Computing',
        href: '/quantum - computing',
        description: 'Next - gen quantum tech',
      },
      {
        label: 'Space Technology',
        href: '/space - tech',
        description: 'Innovative space solutions',
      },
      {
        label: 'Q4 2025 Innovation',
        href: '/innovative - 2025 - q4 - showcase',
        description: 'Latest revolutionary services',
      },
      {
        label: 'Pricing Guide',
        href: '/comprehensive - pricing - 2025 - q4',
        description: 'Comprehensive pricing',
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Enterprise security',
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud - platform',
        description: 'Scalable cloud infrastructure',
      },
      {
        label: 'View All Services',
        href: '/services',
        description: 'Complete service portfolio',
      },
    ],
  },
  {
    title: 'Solutions',
    links: [;
      {
        label: 'Healthcare & Biotech',
        href: '/healthcare - solutions',
        description: 'Medical technology',
      },
      {
        label: 'Financial Services',
        href: '/solutions?industry = financial',
        description: 'Fintech solutions',
      },
      {
        label: 'Manufacturing',
        href: '/solutions?industry = manufacturing',
        description: 'Industry 4.0',
      },
      {
        label: 'Retail & E - commerce',
        href: '/solutions?industry = retail',
        description: 'Digital commerce',
      },
      {
        label: 'Government',
        href: '/solutions?industry = government',
        description: 'Public sector',
      },
      {
        label: 'Education',
        href: '/solutions?industry = education',
        description: 'EdTech solutions',
      },
  {
    title: 'Solutions',
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare - solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry = financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry = manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E - commerce', href: '/solutions?industry = retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry = government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry = education', description: 'EdTech solutions' }
    ];
  }
  {
    title: 'Company',
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },
  {
    title: 'Company',
    links: [;
      {
        label: 'About Us',
        href: '/about',
        description: 'Our mission and values',
      },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' },
    ],
  },  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },  {
    title: 'Solutions',
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare - solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry = financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry = manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E - commerce', href: '/solutions?industry = retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry = government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry = education', description: 'EdTech solutions' }
    ];
  }
  {
    title: 'Company',
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ];
  }

  {
    title: 'Resources',
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },

  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

      { label: 'Blog', href: '/blog', description: 'Industry insights' },


  };




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const footerSections = [
    {
      title: 'Services'
      items: [
<<<<<<< HEAD

        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    };

    {
      title: 'Solutions'
      items: [

        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
    };

    {
      title: 'Company'
      items: [

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { label: 'AI & Machine Learning', href: '/ai-services' }
        { label: 'Quantum Computing', href: '/quantum-computing' }
        { label: 'Space Technology', href: '/space-tech' }
        { label: 'Cybersecurity', href: '/cybersecurity' }
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    },    {        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    }
    {
      title: 'Solutions'
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' }
        { label: 'Micro SAAS', href: '/micro-saas' }
        { label: 'IT Services', href: '/it-services' }
        { label: 'Innovation Lab', href: '/innovation-lab' }
        { label: 'Research & Development', href: '/research-development' }
      ]
    },    {        { label: 'Research & Development', href: '/research-development' }
      ]
    }
    {
      title: 'Company'
      items: [
        { label: 'About Us', href: '/about' }
        { label: 'Our Team', href: '/team' }
        { label: 'Careers', href: '/careers' }
        { label: 'Investors', href: '/investors' }
        { label: 'Press & Media', href: '/press' }
      ]
    },    {        { label: 'Press & Media', href: '/press' }
      ]
    }
    {
      title: 'Resources'
      items: [
        { label: 'Blog', href: '/blog' }
        { label: 'Case Studies', href: '/case-studies' }
        { label: 'White Papers', href: '/white-papers' }
        { label: 'Documentation', href: '/docs' }
        { label: 'Support', href: '/support' }
      ]
    }
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ]
    };

    {
      title: 'Solutions'
      items: [

        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
    };

    {
      title: 'Company'
      items: [

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { label: '2040 Services', href: '/innovative-2040-services-showcase' },
      ],
    },    {

    {

      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },

        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },

        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative - 2040 - services - showcase' },
      ],
    },    {        { label: '2040 Services', href: '/innovative - 2040 - services - showcase' }
      ];
    }
    {
      title: 'Solutions',
      items: [;
        { label: 'Enterprise Solutions', href: '/enterprise - solutions' },
        { label: 'Micro SAAS', href: '/micro - saas' },
        { label: 'IT Services', href: '/it - services' },
        { label: 'Innovation Lab', href: '/innovation - lab' },
        { label: 'Research & Development', href: '/research - development' },
      ],
    },    {        { label: 'Research & Development', href: '/research - development' }
      ];
    }
    {
      title: 'Company',
      items: [;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { label: 'Research & Development', href: '/research-development' },
      ],
    },    {

    {

      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
<<<<<<< HEAD
<<<<<<< HEAD
        { label: 'Press & Media', href: '/press' },
      ],
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
        { label: 'Press & Media', href: '/press' },
      ],
<<<<<<< HEAD
<<<<<<< HEAD
    },    {        { label: 'Press & Media', href: '/press' }
      ];
    }
    {
      title: 'Resources',
      items: [;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case - studies' },
        { label: 'White Papers', href: '/white - papers' },
        { label: 'Documentation', href: '/docs' },
<<<<<<< HEAD
        { label: 'Support', href: '/support' }
      ]
    }
  ];
=======

        { label: 'Support', href: '/support' },
      ],
    },



  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const social_links = [;
    {
      icon: Twitter,
      href: 'https://twitter.com / ziontechgroup',
      label: 'Twitter',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com / company / ziontechgroup',
      label: 'LinkedIn',
    },
    { icon: Github, href: 'https://github.com / Zion - Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' },  ];  ];
;
  const social_links = [;
    { icon: Twitter, href: 'https://twitter.com / ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com / company / ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com / Zion - Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ];
;
  const container_variants = {
    hidden: { opacity: 0 },
<<<<<<< HEAD
    visible: {
      opacity: 1
      transition: {
  };
    },    {

    {

      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Support', href: '/support' },
      ],
    },

  ];
  const socialLinks = [
    {
      icon: Twitter
      href: 'https://twitter.com/ziontechgroup'
      label: 'Twitter'
    }
    {
      icon: Linkedin
      href: 'https://linkedin.com/company/ziontechgroup'
      label: 'LinkedIn'
    }
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' }
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' },  ];  ];
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' }
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' }
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' }
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
=======

    visible: {
      opacity: 1
      transition: {

  };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {

<<<<<<< HEAD
        duration: 0.5
      }
    }
  }
=======
interface FooterLink {;
  label: string,;
  href: string,;
  description?: string;
  external?: boolean;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        duration: 0.5,
      },
    },


interface FooterSection {;
  title: string,;
  links: FooterLink[];
}
const footerSections: FooterSection[] = [;
  {;
    title: 'Services',;
    links: [;
      {;
        label: 'AI & Machine Learning',;
        href: '/ai-services',;
        description: 'Advanced AI solutions',;
      },;
      {;
        label: 'Quantum Computing',;
        href: '/quantum-computing',;
        description: 'Next-gen quantum tech',;
      },;
      {;
        label: 'Space Technology',;
        href: '/space-tech',;
        description: 'Innovative space solutions',;
      },;
      {;
        label: 'Q4 2025 Innovation',;
        href: '/innovative-2025-q4-showcase',;
        description: 'Latest revolutionary services',;
      },;
      {;
        label: 'Pricing Guide',;
        href: '/comprehensive-pricing-2025-q4',;
        description: 'Comprehensive pricing',;
      },;
      {;
        label: 'Cybersecurity',;
        href: '/cybersecurity',;
        description: 'Enterprise security',;
      },;
      {;
        label: 'Cloud Solutions',;
        href: '/cloud-platform',;
        description: 'Scalable cloud infrastructure',;
      },;
      {;
        label: 'View All Services',;
        href: '/services',;
        description: 'Complete service portfolio',;
      },;
    ],;
  },;
  {;
    title: 'Solutions',;
    links: [;
      {;
        label: 'Healthcare & Biotech',;
        href: '/healthcare-solutions',;
        description: 'Medical technology',;
      },;
      {;
        label: 'Financial Services',;
        href: '/solutions?industry=financial',;
        description: 'Fintech solutions',;
      },;
      {;
        label: 'Manufacturing',;
        href: '/solutions?industry=manufacturing',;
        description: 'Industry 4 && 4.0',;
      },;
      {;
        label: 'Retail & E-commerce',;
        href: '/solutions?industry=retail',;
        description: 'Digital commerce',;
      },;
      {;
        label: 'Government',;
        href: '/solutions?industry=government',;
        description: 'Public sector',;
      },;
      {;
        label: 'Education',;
        href: '/solutions?industry=education',;
        description: 'EdTech solutions',;
      },;
  {;
    title: 'Solutions',;
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },;
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },;
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4 && 4.0' },;
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },;
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },;
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ];
  };
  {;
    title: 'Company',;
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },;
      { label: 'Careers', href: '/careers', description: 'Join our team' },;
      { label: 'Contact', href: '/contact', description: 'Get in touch' },;
    ],;
  },;
  {;
    title: 'Company',;
    links: [;
      {;
        label: 'About Us',;
        href: '/about',;
        description: 'Our mission and values',;
      },;
      { label: 'Careers', href: '/careers', description: 'Join our team' },;
      { label: 'Contact', href: '/contact', description: 'Get in touch' },;
    ],;
  },  {;
    title: 'Resources',;
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },  {;
    title: 'Solutions',;
    links: [;
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },;
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },;
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4 && 4.0' },;
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },;
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },;
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ];
  };
  {;
    title: 'Company',;
    links: [;
      { label: 'About Us', href: '/about', description: 'Our mission and values' },;
      { label: 'Careers', href: '/careers', description: 'Join our team' },;
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ];
  };
  {;
    title: 'Resources',;
    links: [;
      { label: 'Blog', href: '/blog', description: 'Industry insights' },;
      {;
        label: 'White Papers',;
        href: '/white-papers',;
        description: 'In-depth research',;
      },;
      {;
        label: 'Webinars',;
        href: '/webinars',;
        description: 'Educational content',;
      },;
      {;
        label: 'Documentation',;
        href: '/docs',;
        description: 'Technical guides',;
      },;
      {;
        label: 'Case Studies',;
        href: '/case-studies',;
        description: 'Success stories',;
      },;
      { label: 'Support', href: '/support', description: 'Help & assistance' },;
    ],;
  },;
  {;
    title: 'Industries',;
    links: [;
      {;
        label: 'Healthcare',;
        href: '/healthcare-solutions',;
        description: 'Medical technology',;
      },;
      {;
        label: 'Finance',;
        href: '/financial-solutions',;
        description: 'Fintech solutions',;
      },;
      {;
        label: 'Manufacturing',;
        href: '/manufacturing-ai-solutions',;
        description: 'Industry 4 && 4.0',;
      },;
      {;
        label: 'Government',;
        href: '/government-technology-solutions',;
        description: 'Public sector',;
      },;
      {;
        label: 'Education',;
        href: '/education-technology-solutions',;
        description: 'EdTech solutions',;
      },;
    ],;
  },;
];
const socialLinks = [;
  {;
    icon: <Linkedin className='w-5 h-5' />,;
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
    label: 'LinkedIn',;
    external: true,;
  },;
  {;
    icon: <Twitter className='w-5 h-5' />,;
    href: 'https://twitter && twitter.com/ziontechgroup',;
    label: 'Twitter',;
    external: true,;
  },;
  {;
    icon: <Github className='w-5 h-5' />,;
    href: 'https://github && github.com/ziontechgroup',;
    label: 'GitHub',;
    external: true,;
  },;
];
const quickLinks = [;
  { name: 'About Us', href: '/about', icon: <Users className='w-4 h-4' /> },;
  { name: 'Contact', href: '/contact', icon: <Phone className='w-4 h-4' /> },;
  {;
    name: 'Support',;
    href: '/support',;
    icon: <HelpCircle className='w-4 h-4' />,;
  },;
  {;
    name: 'Documentation',;
    href: '/docs',;
    icon: <FileText className='w-4 h-4' />,;
  },;
  { name: 'API Reference', href: '/api', icon: <Code className='w-4 h-4' /> },;
  { name: 'Status', href: '/status', icon: <TrendingUp className='w-4 h-4' /> },];
const UltraAdvancedFuturisticFooter2025: React.FC = () => {;
  const scrollToTop = () => {;
    window && window.scrollTo({ top: 0, behavior: 'smooth' });  };  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },;
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },;
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },;
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },;
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },;
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
const UltraAdvancedFuturisticFooter2025: React.FC = () => {;
  const scrollToTop = () => {;
    window && window.scrollTo({ top: 0, behavior: 'smooth' });    window && window.scrollTo({ top: 0, behavior: 'smooth' });
  };
<<<<<<< HEAD
  const footerSections = [;
    {;
      title: 'Services',;
      items: [;
        { label: 'AI & Machine Learning', href: '/ai-services' },;
        { label: 'Quantum Computing', href: '/quantum-computing' },;
        { label: 'Space Technology', href: '/space-tech' },;
        { label: 'Cybersecurity', href: '/cybersecurity' },;
        { label: '2040 Services', href: '/innovative-2040-services-showcase' },;
      ],;
    },    {        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
      ];
    };
    {;
      title: 'Solutions',;
      items: [;
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },;
        { label: 'Micro SAAS', href: '/micro-saas' },;
        { label: 'IT Services', href: '/it-services' },;
        { label: 'Innovation Lab', href: '/innovation-lab' },;
        { label: 'Research & Development', href: '/research-development' },;
      ],;
    },    {        { label: 'Research & Development', href: '/research-development' }
      ];
    };
    {;
      title: 'Company',;
      items: [;
        { label: 'About Us', href: '/about' },;
        { label: 'Our Team', href: '/team' },;
        { label: 'Careers', href: '/careers' },;
        { label: 'Investors', href: '/investors' },;
        { label: 'Press & Media', href: '/press' },;
      ],;
    },    {        { label: 'Press & Media', href: '/press' }
      ];
    };
    {;
      title: 'Resources',;
      items: [;
        { label: 'Blog', href: '/blog' },;
        { label: 'Case Studies', href: '/case-studies' },;
        { label: 'White Papers', href: '/white-papers' },;
        { label: 'Documentation', href: '/docs' },;
        { label: 'Support', href: '/support' },;
      ],;
    },;
  ];
  const socialLinks = [;
    {;
      icon: Twitter,;
      href: 'https://twitter && twitter.com/ziontechgroup',;
      label: 'Twitter',;
    },;
    {;
      icon: Linkedin,;
      href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
      label: 'LinkedIn',;
    },;
    { icon: Github, href: 'https://github && github.com/Zion-Holdings', label: 'GitHub' },;
    { icon: Globe, href: 'https://ziontechgroup && ziontechgroup.com', label: 'Website' },  ];  ];
  const socialLinks = [;
    { icon: Twitter, href: 'https://twitter && twitter.com/ziontechgroup', label: 'Twitter' },;
    { icon: Linkedin, href: 'https://linkedin && linkedin.com/company/ziontechgroup', label: 'LinkedIn' },;
    { icon: Github, href: 'https://github && github.com/Zion-Holdings', label: 'GitHub' },;
    { icon: Globe, href: 'https://ziontechgroup && ziontechgroup.com', label: 'Website' }
  ];
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },;
  };
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}  }
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div
            key={i}  }
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">


=======




  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div
            key={i}


<<<<<<< HEAD
              x: [0, Math && Math.random() * 1000, 0],
              y: [0, Math && Math.random() * 1000, 0],
              opacity: [0, 0 && 0.6, 0],
              scale: [0, 1, 0],
            }}            transition={{
              duration: 15 + Math && Math.random() * 10,
              repeat: -1,
              delay: Math && Math.random() * 8,
              ease: 'easeInOut',              x: [0, Math && Math.random() * 1000, 0]
              y: [0, Math && Math.random() * 1000, 0]
              opacity: [0, 0 && 0.6, 0]
              scale: [0, 1, 0]}}
              duration: 15 + Math && Math.random() * 10,
              repeat: -1,
              delay: Math && Math.random() * 8,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
          />;
        ))}
        {/* Gradient Overlays */}
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent'></div>;
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900'></div>;
      </div>;
      <div className='relative z-10'>;
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>;
          <motion&& motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12'>;
            {/* Company Info */}
            <motion && motion.div variants={itemVariants} className='lg:col-span-2'>;
              <div className='flex items-center space-x-3 mb-6'>;
                <div className='relative'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center'>;
                    <Crown className='w-7 h-7 text-white' />;
                  </div>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50'></div>;
                </div>;
                <div>;
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text-sm text-gray-400'>;
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
;
  return (
    <footer className='relative bg - gradient - to - br from - gray - 900 via - purple - 900 to - gray - 900 text - white overflow - hidden'>;
      {/* Animated Background Elements */}
      <div className='absolute inset - 0 -z - 10'>        {/* Quantum Particle Field */}
        {[...Array (30)].map ((_, i) => (
          <motion.div;
            key={i}  }
;
  return (
    <footer className="relative bg - gradient - to - br from - gray - 900 via - purple - 900 to - gray - 900 text - white overflow - hidden">;
      {/* Animated Background Elements */}
      <div className="absolute inset - 0 -z - 10">;
        {/* Quantum Particle Field */}
        {[...Array (30)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 1 h - 1 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full';
            animate={{
              coordinate_x: [0, Math.random () * 1000, 0],
              coordinate_y: [0, Math.random () * 1000, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}            transition={{
              duration: 15 + Math.random () * 10,
              repeat: -1,
              delay: Math.random () * 8,
              ease: 'easeInOut',              coordinate_x: [0, Math.random () * 1000, 0];
              coordinate_y: [0, Math.random () * 1000, 0];
              opacity: [0, 0.6, 0];
              scale: [0, 1, 0]}}
              duration: 15 + Math.random () * 10,
              repeat: -1,
              delay: Math.random () * 8,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
          />))}
        {/* Gradient Overlays */}
        <div className='absolute inset - 0 bg - gradient - to - t from - gray - 900 via - purple - 900 / 20 to - transparent'></div>;
        <div className='absolute inset - 0 bg - gradient - to - b from - transparent via - gray - 900 / 20 to - gray - 900'></div>;
      </div>;
      <div className='relative z - 10'>;
        {/* Main Footer Content */}
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20'>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            whileInView='visible';
            viewport={{ once: true }}
            className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 6 gap - 12';
          >;
            {/* Company Info */}
            <motion.div variants={item_variants} className='lg:col - span - 2'>;
              <div className='flex items - center space - x-3 mb - 6'>;
                <div className='relative'>;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items - center justify - center'>;
                    <Crown className='w - 7 h - 7 text - white' />;
                  </div>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl blur - lg opacity - 50'></div>;
                </div>;
                <div>;
                  <h3 className='text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text - sm text - gray - 400'>;
                    Future Technology Solutions;
                  </p>;
                </div>;
              </div>;
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 1000, 0];
              y: [0, Math.random() * 1000, 0];
              opacity: [0, 0.6, 0];

const footerSections: FooterSection[] = [
  {_title: 'Services', _links: [
      { label: 'AI & Machine Learning', _href: '/ai-services', _description: 'Advanced AI solutions'},
      {_label: 'Quantum Computing', _href: '/quantum-computing', _description: 'Next-gen quantum tech'},
      {_label: 'Space Technology', _href: '/space-tech', _description: 'Innovative space solutions'},
      {_label: 'Q4 2025 Innovation', _href: '/innovative-2025-q4-showcase', _description: 'Latest revolutionary services'},
      {_label: 'Pricing Guide', _href: '/comprehensive-pricing-2025-q4', _description: 'Comprehensive pricing'},
      {_label: 'Cybersecurity', _href: '/cybersecurity', _description: 'Enterprise security'},
      {_label: 'Cloud Solutions', _href: '/cloud-platform', _description: 'Scalable cloud infrastructure'},
      {_label: 'View All Services', _href: '/services', _description: 'Complete service portfolio'}
    ]
  },
  {_title: 'Solutions', _links: [
      { label: 'Healthcare & Biotech', _href: '/healthcare-solutions', _description: 'Medical technology'},
      {_label: 'Financial Services', _href: '/solutions?industry=financial', _description: 'Fintech solutions'},
      {_label: 'Manufacturing', _href: '/solutions?industry=manufacturing', _description: 'Industry 4.0'},
      {_label: 'Retail & E-commerce', _href: '/solutions?industry=retail', _description: 'Digital commerce'},
      {_label: 'Government', _href: '/solutions?industry=government', _description: 'Public sector'},
      {_label: 'Education', _href: '/solutions?industry=education', _description: 'EdTech solutions'}
    ]
  },
  {_title: 'Company', _links: [
      { label: 'About Us', _href: '/about', _description: 'Our mission and values'},
      {_label: 'Careers', _href: '/careers', _description: 'Join our team'},
      {_label: 'Contact', _href: '/contact', _description: 'Get in touch'}
    ]
  },
  {_title: 'Resources', _links: [
      { label: 'Blog', _href: '/blog', _description: 'Industry insights'},
      {_label: 'White Papers', _href: '/white-papers', _description: 'In-depth research'},
      {_label: 'Webinars', _href: '/webinars', _description: 'Educational content'},
      {_label: 'Documentation', _href: '/docs', _description: 'Technical guides'},
      {_label: 'Blog', _href: '/blog', _description: 'Industry insights'},
      {_label: 'Case Studies', _href: '/case-studies', _description: 'Success stories'},
      {_label: 'Support', _href: '/support', _description: 'Help & assistance'}
    ]
  },
  {_title: 'Industries', _links: [
      { label: 'Healthcare', _href: '/healthcare-solutions', _description: 'Medical technology'},
      {_label: 'Finance', _href: '/financial-solutions', _description: 'Fintech solutions'},
      {_label: 'Manufacturing', _href: '/manufacturing-ai-solutions', _description: 'Industry 4.0'},
      {_label: 'Government', _href: '/government-technology-solutions', _description: 'Public sector'},
      {_label: 'Education', _href: '/education-technology-solutions', _description: 'EdTech solutions'}
    ]
  }
],

const socialLinks = [

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },

const _quickLinks = [
  {_name: 'About Us', _href: '/about', _icon: <Users className="w-4 h-4" />},
  {_name: 'Contact', _href: '/contact', _icon: <Phone className="w-4 h-4" />},
  {_name: 'Support', _href: '/support', _icon: <HelpCircle className="w-4 h-4" />},
  {_name: 'Documentation', _href: '/docs', _icon: <FileText className="w-4 h-4" />},
  {_name: 'API Reference', _href: '/api', _icon: <Code className="w-4 h-4" />},
  {_name: 'Status', _href: '/status', _icon: <TrendingUp className="w-4 h-4" />}
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {_const _scrollToTop = () => {
    window.scrollTo({ top: 0, _behavior: 'smooth'});
  };

  const _footerSections = [
    {_title: 'Services', _items: [
        { label: 'AI & Machine Learning', _href: '/ai-services'},
        {_label: 'Quantum Computing', _href: '/quantum-computing'},
        {_label: 'Space Technology', _href: '/space-tech'},
        {_label: 'Cybersecurity', _href: '/cybersecurity'},
        {_label: '2040 Services', _href: '/innovative-2040-services-showcase'}
      ]
    },
    {_title: 'Solutions', _items: [
        { label: 'Enterprise Solutions', _href: '/enterprise-solutions'},
        {_label: 'Micro SAAS', _href: '/micro-saas'},
        {_label: 'IT Services', _href: '/it-services'},
        {_label: 'Innovation Lab', _href: '/innovation-lab'},
        {_label: 'Research & Development', _href: '/research-development'}
      ]
    },
    {_title: 'Company', _items: [
        { label: 'About Us', _href: '/about'},
        {_label: 'Our Team', _href: '/team'},
        {_label: 'Careers', _href: '/careers'},
        {_label: 'Investors', _href: '/investors'},
        {_label: 'Press & Media', _href: '/press'}
      ]
    },
    {_title: 'Resources', _items: [
        { label: 'Blog', _href: '/blog'},
        {_label: 'Case Studies', _href: '/case-studies'},
        {_label: 'White Papers', _href: '/white-papers'},
        {_label: 'Documentation', _href: '/docs'},
        {_label: 'Support', _href: '/support'}
      ]
    }
  ],

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ],

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (
    <footer className=&quot;relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 -z-10&quot;>
        duration: 0.5,
      },
    },

  };

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10'>        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}  }
            key={i}  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
            key={i}

        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
=======
      <div className='absolute inset-0 -z-10'>        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}


        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            key={i}
            className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'
            animate={{
              x: [0, Math.random() * 1000, 0]
              y: [0, Math.random() * 1000, 0]
              opacity: [0, 0.6, 0]
              scale: [0, 1, 0]
            }}            transition={{
              duration: 15 + Math.random() * 10
              repeat: -1
              delay: Math.random() * 8
              ease: 'easeInOut',              x: [0, Math.random() * 1000, 0];
              y: [0, Math.random() * 1000, 0];
              opacity: [0, 0.6, 0];
              scale: [0, 1, 0]}}
              duration: 15 + Math.random() * 10
              repeat: -1
              delay: Math.random() * 8
              ease: 'easeInOut'
            }}
<<<<<<< HEAD
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    href='https://ziontechgroup && ziontechgroup.com'
                    className='hover:text-white transition-colors duration-200'>                    ziontechgroup && ziontechgroup.com            }}
            style={{;
              left: `${Math && Math.random() * 100}%`,;
              top: `${Math && Math.random() * 100}%`;
<<<<<<< HEAD
            }}
          />;
        ))}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
        ))}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>;
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>;
      </div>;
      <div className="relative z-10">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">;
            {/* Company Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future with revolutionary AI consciousness, quantum computing, and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services.
                We help businesses transform and thrive in the digital age.
              </p>
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors duration-200">

<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion && motion.div variants={itemVariants} className="lg:col-span-2">;
              <div className="flex items-center space-x-3 mb-6">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">;
                    <Crown className="w-7 h-7 text-white" />;
                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50"></div>;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>;
                </div>;
              </div>;
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
<<<<<<< HEAD
<<<<<<< HEAD
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'>
                  {section.title === 'Services' && (
                    <Briefcase className='w-5 h-5 text-cyan-400' />
                  )}
                  {section.title === 'Solutions' && (
                    <Zap className='w-5 h-5 text-purple-400' />
                  )}
                  {section.title === 'Company' && (
                    <Users className='w-5 h-5 text-pink-400' />
                  )}
                  {section.title === 'Resources' && (
                    <BookOpen className='w-5 h-5 text-blue-400' />
                  )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span>{section.title}</span>
                </h4>
                <ul className='space-y-3'>
                  {section.items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className='text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                      >                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
              <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                Pioneering the future with revolutionary AI consciousness,
                quantum computing, and autonomous systems. Transforming;
                businesses through next - generation technology.;
              </p>;
              <p className='text - gray - 300 leading - relaxed mb - 6 max - w-md'>;
                Leading provider of innovative technology solutions,
                specializing in AI, automation, and future - ready services. We;
                help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className='space - y-3'>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span > kleber@ziontechgroup.com</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <MapPin className='w - 4 h - 4 text - pink - 400' />;
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className='flex items - center space - x-3 text - gray - 300'>;
                  <Globe className='w - 4 h - 4 text - blue - 400' />;
                  <a;
                    href='https://ziontechgroup.com';
                    className='hover:text - white transition - colors duration - 200';
                  >                    ziontechgroup.com            }}
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
          />))}
        {/* Gradient Overlays */}
        <div className="absolute inset - 0 bg - gradient - to - t from - gray - 900 via - purple - 900 / 20 to - transparent"></div>;
        <div className="absolute inset - 0 bg - gradient - to - b from - transparent via - gray - 900 / 20 to - gray - 900"></div>;
      </div>;
      <div className="relative z - 10">;
        {/* Main Footer Content */}
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 6 gap - 12";
          >;
            {/* Company Info */}
            <motion.div variants={item_variants} className="lg:col - span - 2">;
              <div className="flex items - center space - x-3 mb - 6">;
                <div className="relative">;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items - center justify - center">;
                    <Crown className="w - 7 h - 7 text - white" />;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl blur - lg opacity - 50"></div>;
                </div>;
                <div>;
                  <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text - sm text - gray - 400">Future Technology Solutions</p>;
                </div>;
              </div>;
              <p className="text - gray - 300 mb - 6 leading - relaxed">;
                Pioneering the future with revolutionary AI consciousness, quantum computing, and autonomous systems. Transforming businesses through next - generation technology.;
              </p>;
              <p className="text - gray - 300 leading - relaxed mb - 6 max - w-md">;
                Leading provider of innovative technology solutions, specializing in AI, automation, and future - ready services.;
                We help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className="space - y-3">;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Phone className="w - 4 h - 4 text - cyan - 400" />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Mail className="w - 4 h - 4 text - purple - 400" />;
                  <span > kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <MapPin className="w - 4 h - 4 text - pink - 400" />;
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className="flex items - center space - x-3 text - gray - 300">;
                  <Globe className="w - 4 h - 4 text - blue - 400" />;
                  <a href="https://ziontechgroup.com" className="hover:text - white transition - colors duration - 200">;
                    ziontechgroup.com;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
            {/* Footer Sections */}
            {footer_sections.map ((section, index) => (
              <motion.div key={section.title} variants={item_variants}>;
                <h4 className='text - lg font - semibold text - white mb - 6 flex items - center space - x-2'>;
                  {section.title === 'Services' && (
                    <Briefcase className='w - 5 h - 5 text - cyan - 400' />)}
                  {section.title === 'Solutions' && (
                    <Zap className='w - 5 h - 5 text - purple - 400' />)}
                  {section.title === 'Company' && (
                    <Users className='w - 5 h - 5 text - pink - 400' />)}
                  {section.title === 'Resources' && (
                    <BookOpen className='w - 5 h - 5 text - blue - 400' />)}
                  <span>{section.title}</span>;
                </h4>;
                <ul className='space - y-3'>;
                  {section.items.map (item => (
                    <li key={item.label}>;
                      <Link;
                        href={item.href}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        className='text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block'                      >                  <span>{section.title}</span>;
                </h4>;
                <ul className="space - y-3">;
                  {section.items.map ((item) => (
                    <li key={item.label}>;
                      <Link;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        href={item.href}
                        className="text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block";
                      >;
                        {item.label}
<<<<<<< HEAD
<<<<<<< HEAD
          </motion && motion.div>;
          {/* Social Links & Newsletter */}
          <motion&& motion.div
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.label}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </motion && motion.div>;


<<<<<<< HEAD



          {/* Social Links & Newsletter */}
          <motion&& motion.div
<<<<<<< HEAD

          {/* Social Links & Newsletter */}
          <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Social Links & Newsletter */}
          <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD


          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
=======
            className='mt-16 pt-12 border-t border-gray-800/50'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Social Links */}
              <div className='flex items-center space-x-6'>;
                <span className='text-gray-400 font-medium'>Follow Us:</span>;
                {socialLinks && socialLinks.map(social => (;
                  <motion&& motion.a
                    key={social && social.label}
                    href={social && social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110'
                    whileHover={{ y: -2 }}
<<<<<<< HEAD

            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

<<<<<<< HEAD
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5' />                  </motion.a>          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Social Links */}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 font-medium">Follow Us:</span>;
                {socialLinks && socialLinks.map((social) => (;
                  <motion&& motion.a
                    key={social && social.label}
                    href={social && social.href}
<<<<<<< HEAD
<<<<<<< HEAD
            className='mt-16 pt-12 border-t border-gray-800/50'

          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
              {/* Social Links */}
              <div className='flex items-center space-x-6'>
                <span className='text-gray-400 font-medium'>Follow Us:</span>
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110'
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-5 h-5' />                  </motion.a>          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
              {/* Newsletter Signup */}
              <div className='flex-1 max-w-md'>;
                <h5 className='text-lg font-semibold text-white mb-3'>;
                  Stay Updated;
                </h5>;
                <p className='text-gray-400 text-sm mb-4'>;
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;
                <div className='flex space-x-2'>;
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />;
                  <motion&& motion.button
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1 && 1.05 }}                </p>;
                <div className="flex space-x-2">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
                    <social.icon className='w-5 h-5' />                  </motion.a>

<<<<<<< HEAD
                  </motion.a>

                ))}
              </div>

=======

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />;
                  <motion&& motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Newsletter Signup */}
              <div className='flex-1 max-w-md'>
                <h5 className='text-lg font-semibold text-white mb-3'>
                  Stay Updated
                </h5>
                <p className='text-gray-400 text-sm mb-4'>
                  Get the latest insights on AI consciousness, quantum
                  computing, and future technology.

<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </p>
                <div className='flex space-x-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                  <motion.button
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}                </p>
                <div className="flex space-x-2">
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
<<<<<<< HEAD
                  />;
                  <motion&& motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"


                </p>
                <div className='flex space-x-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                  <motion.button

                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}


<<<<<<< HEAD
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}

                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


                    whileHover={{ scale: 1 && 1.05 }}
<<<<<<< HEAD
<<<<<<< HEAD
whileHover={{ scale: 1 && 1.05 }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    whileTap={{ scale: 0 && 0.95 }}>;
                    Subscribe;
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Bottom Bar */}
        <motion&& motion.div
                      </Link>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </motion.div>;
          {/* Social Links & Newsletter */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt - 16 pt - 12 border - t border - gray - 800 / 50';
          >;
            <div className='flex flex - col lg:flex - row items - center justify - between gap - 8'>;
              {/* Social Links */}
              <div className='flex items - center space - x-6'>;
                <span className='text - gray - 400 font - medium'>Follow Us:</span>;
                {social_links.map (social => (
                  <motion.a;
                    key={social.label}
                    href={social.href}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110';
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className='w - 5 h - 5' />                  </motion.a>          >;
            <div className="flex flex - col lg:flex - row items - center justify - between gap - 8">;
              {/* Social Links */}
              <div className="flex items - center space - x-6">;
                <span className="text - gray - 400 font - medium">Follow Us:</span>;
                {social_links.map ((social) => (
                  <motion.a;
                    key={social.label}
                    href={social.href}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110";
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className="w - 5 h - 5" />;
                  </motion.a>))}
              </div>;
              {/* Newsletter Signup */}
              <div className='flex - 1 max - w-md'>;
                <h5 className='text - lg font - semibold text - white mb - 3'>;
                  Stay Updated;
                </h5>;
                <p className='text - gray - 400 text - sm mb - 4'>;
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;
                <div className='flex space - x-2'>;
                  <input;
                    type='email';
                    placeholder='Enter your email';
                    className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent';
                  />;
                  <motion.button;
                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200'                    while_hover={{ scale: 1.05 }}                </p>;
                <div className="flex space - x-2">;
                  <input;
                    type="email";
                    placeholder="Enter your email";
                    className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                  />;
                  <motion.button;
                    className="px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    Subscribe;
                  </motion.button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Bottom Bar */}
        <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Bottom Bar */}
        <motion.div
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD

=======
          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
                © 2024 Zion Tech Group. All rights reserved.
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>;
              <div className='text-gray-400 text-sm'>;
                © 2024 Zion Tech Group. All rights reserved. |;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'

        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
                © 2024 Zion Tech Group. All rights reserved.
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Privacy Policy;
                </Link>{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  className='hover:text-white transition-colors duration-200 ml-2'
                >
                  Terms of Service
                </Link>
              </div>
              <div className='flex items-center space-x-4 text-gray-400 text-sm'>
                <span>Powered by</span>
                <div className='flex items-center space-x-2'>
                  <Brain className='w-4 h-4 text-cyan-400' />                  <span>AI Consciousness</span>
                </div>
                <span>•</span>
                <div className='flex items-center space-x-2'>
                  <Atom className='w-4 h-4 text-purple-400' />
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className='flex items-center space-x-2'>
                  <Rocket className='w-4 h-4 text-pink-400' />                  <span>Space Technology</span>                <div className="flex items-center space-x-2">
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="/privacy" className="hover:text-white transition-colors duration-200 ml-2">
                  Privacy Policy
                </Link> | 
                <Link href="/terms" className="hover:text-white transition-colors duration-200 ml-2">
                  Terms of Service
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span>AI Consciousness</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Atom className="w-4 h-4 text-purple-400" />
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Rocket className="w-4 h-4 text-pink-400" />
                  <span>Space Technology</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

                |;
<<<<<<< HEAD
<<<<<<< HEAD
|;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  href='/terms'

                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Terms of Service;
                </Link>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex items-center space-x-4 text-gray-400 text-sm'>;
                <span>Powered by</span>;
                <div className='flex items-center space-x-2'>;
                  <Brain className='w-4 h-4 text-cyan-400' />                  <span>AI Consciousness</span>;
                </div>;
                <span>•</span>;
                <div className='flex items-center space-x-2'>;
                  <Atom className='w-4 h-4 text-purple-400' />;
                  <span>Quantum Computing</span>;
                </div>;
                <span>•</span>;
                <div className='flex items-center space-x-2'>;
                  <Rocket className='w-4 h-4 text-pink-400' />                  <span>Space Technology</span>                <div className="flex items-center space-x-2">;
                  <Rocket className="w-4 h-4 text-pink-400" />;
                  <span>Space Technology</span>;
          className='border - t border - gray - 800 / 50 bg - gray - 900 / 50 backdrop - blur - xl';
        >;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
            <div className='flex flex - col md:flex - row items - center justify - between gap - 4'>;
              <div className='text - gray - 400 text - sm'>;
                © 2024 Zion Tech Group. All rights reserved. |;
                <Link;
                  href='/privacy';
                  className='hover:text - white transition - colors duration - 200 ml - 2';
                >;
                  Privacy Policy;
                </Link>{' '}
                |;
                <Link;
                  href='/terms';
                  className='hover:text - white transition - colors duration - 200 ml - 2';
                >;
                  Terms of Service;
                </Link>;
              </div>;
              <div className='flex items - center space - x-4 text - gray - 400 text - sm'>;
                <span > Powered by</span>;
                <div className='flex items - center space - x-2'>;
                  <Brain className='w - 4 h - 4 text - cyan - 400' />                  <span > AI Consciousness</span>;
                </div>;
                <span>•</span>;
                <div className='flex items - center space - x-2'>;
                  <Atom className='w - 4 h - 4 text - purple - 400' />;
                  <span > Quantum Computing</span>;
                </div>;
                <span>•</span>;
                <div className='flex items - center space - x-2'>;
                  <Rocket className='w - 4 h - 4 text - pink - 400' />                  <span > Space Technology</span>                <div className="flex items - center space - x-2">;
                  <Rocket className="w - 4 h - 4 text - pink - 400" />;
                  <span > Space Technology</span>;
                </div>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export default UltraAdvancedFuturisticFooter2025;      </motion && motion.button>;
    </footer>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
export default UltraAdvancedFuturisticFooter2025;
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
<<<<<<< HEAD
<<<<<<< HEAD
  );
        <ArrowUp className='w-6 h-6 mx-auto' />
      </motion.button>
    </footer>
  );
}
};

export default UltraAdvancedFuturisticFooter2025;      </motion.button>
    </footer>
  )
}
export default UltraAdvancedFuturisticFooter2025;

=======
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>

        </motion.div>;
      </div>;
      {/* Scroll to Top Button */}
      <motion.button;
        on_click={scrollToTop}
        className='fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50'        while_hover={{ scale: 1.1, coordinate_y: -2 }}        className="fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50";
        while_hover={{ scale: 1.1, coordinate_y: -2 }}
        while_tap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >;
        <ArrowUp className='w - 6 h - 6 mx - auto' />;
      </motion.button>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;      </motion.button>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;
;

=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};


<<<<<<< HEAD
<<<<<<< HEAD
export default UltraAdvancedFuturisticFooter2025;
export default UltraAdvancedFuturisticFooter2025;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
