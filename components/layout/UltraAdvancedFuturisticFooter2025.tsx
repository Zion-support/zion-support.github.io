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

<<<<<<< HEAD


<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowUp, Crown, Zap, Brain, Rocket,
  Shield, Users, BookOpen, Briefcase, Atom
} from 'lucide-react',
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
interface FooterLink {
  label: string,
  href: string,
  description?: string,
  external?: boolean
}

<<<<<<< HEAD
=======
interface FooterSection {
  title: string,
  links: FooterLink[]
}

=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';'
import { motion  } from 'framer-motion';'
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import { motion  } from 'framer-motion';
>>>>>>> origin/chore/fix-lint-and-merge
import { Mail, Phone, MapPin, Globe;
  Twitter, Linkedin, Github;
  ArrowUp, Crown, Zap, Brain, Rocket;
<<<<<<< HEAD

<<<<<<< HEAD
  Shield, Users, BookOpen, Briefcase, Atom
 } from 'lucide-react';'
=======
}
  Shield, Users, BookOpen, Briefcase, Atom}
 } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge
import {
  Mail;
Phone,
MapPin;
Globe,
Twitter;
Linkedin,
Github;
ArrowUp,
Crown;
Zap,
Brain;
Rocket,
Shield;
Users,
BookOpen;
Briefcase,
Atom;}
}
=======
<<<<<<< HEAD

  Shield, Users, BookOpen, Briefcase, Atom
 } from 'lucide-react';'
import {
  }
  Mail,
Phone
  MapPin,
Globe
  Twitter,
Linkedin
  Github,
ArrowUp
  Crown,
Zap
  Brain,
Rocket
  Shield,
Users
  BookOpen,
Briefcase
  Atom;

} from 'lucide-react';'


import Link from 'next/link';'
import { AnimatePresence  } from 'framer-motion';'
  Mail,Phone,MapPin,Globe,Twitter,Linkedin,Github,ArrowUp,Crown,Zap,Brain,Rocket,Shield,Users,BookOpen} from 'lucide-react';'

interface FooterLink {
  }
  interface FooterLink  {"label": string;
  }
  "href": string;

  description?: string;


  "links": FooterLink[];

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from 'lucide-react';


import Link from 'next/link';
import { AnimatePresence  } from 'framer-motion';
  Mail,Phone,MapPin,Globe,Twitter,Linkedin,Github,ArrowUp,Crown,Zap,Brain,Rocket,Shield,Users,BookOpen} from 'lucide-react';

interface FooterLink {
<<<<<<< HEAD
  }
  {title: 'Solutions';
  links: FooterLink[];external?: boolean;
} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
  interface FooterLink  {label: string;
  href: string;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  external?: boolean;
;
=======

  Briefcase,;
  Atom,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

} from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
;
<<<<<<< HEAD
interface FooterLink {}
=======
interface FooterLink {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface FooterLink {;
  label: string;
  href: string;
  description?: string;
<<<<<<< HEAD
interface FooterSection {}
interface FooterSection {;
  title: string;'
  links: FooterLink[];} from 'lucide-react';
=======

  external?: boolean;
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface FooterSection {
interface FooterSection {;
  title: string;
  links: FooterLink[];} from 'lucide-react';
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


import Link from 'next/link';
import Link from 'next / link';
import { AnimatePresence } from 'framer-motion';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4.0' },
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', description: 'Our mission and values' },
      { label: 'Careers', href: '/careers', description: 'Join our team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'White Papers', href: '/white-papers', description: 'In-depth research' },
      { label: 'Webinars', href: '/webinars', description: 'Educational content' },
      { label: 'Documentation', href: '/docs', description: 'Technical guides' },
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
      { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { label: 'Support', href: '/support', description: 'Help & assistance' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Finance', href: '/financial-solutions', description: 'Fintech solutions' },
      { label: 'Manufacturing', href: '/manufacturing-ai-solutions', description: 'Industry 4.0' },
      { label: 'Government', href: '/government-technology-solutions', description: 'Public sector' },
      { label: 'Education', href: '/education-technology-solutions', description: 'EdTech solutions' }
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    ]
  }
  {}
'
    title: 'Solutions'

<<<<<<< HEAD
  links: FooterLink[];}
}
<<<<<<< HEAD
  Shield, Users, BookOpen, Briefcase, Atom}
 } from 'lucide-react';

const "footerSections": FooterSection[] = [;
  {"title": 'Services';'
    }
    "links": [;
      {"label": 'AI & Machine Learning';'
        }
        "href": '/ai-services';'
        "description": 'Advanced AI solutions';'
=======
interface FooterSection  {title: string;
  links: FooterLink[];
}
=======

  links: FooterLink[];}
}
}

>>>>>>> origin/chore/fix-lint-and-merge
const footerSections: FooterSection[] = [;
  {title: 'Services';
    links: [;
      {label: 'AI & Machine Learning';
<<<<<<< HEAD
        href: '/ai-services';
        description: 'Advanced AI solutions';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      {"label": 'Quantum Computing';'
        }
        "href": '/quantum-computing';'
        "description": 'Next-gen quantum tech';'
      }
      {"label": 'Space Technology';'
        }
        "href": '/space-tech';'
        "description": 'Innovative space solutions';'
      }
      {"label": 'Q4 2025 Innovation';'
        }
        "href": '/innovative-2025-q4-showcase';'
        "description": 'Latest revolutionary services';'
      }
      {"label": 'Pricing Guide';'
        }
        "href": '/comprehensive-pricing-2025-q4';'
        "description": 'Comprehensive pricing';'
      }
      {"label": 'Cybersecurity';'
        }
        "href": '/cybersecurity';'
        "description": 'Enterprise security';'
      }
      {"label": 'Cloud Solutions';'
        }
        "href": '/cloud-platform';'
        "description": 'Scalable cloud infrastructure';'
      }
<<<<<<< HEAD
      {"label": 'View All Services';'
        }
        "href": '/services';'
        "description": 'Complete service portfolio';'
=======
      {label: 'View All Services;
        href: /services';
        description: 'Complete service portfolio;
=======
        href: '/ai-services';}
        description: 'Advanced AI solutions';}
      }
      {label: 'Quantum Computing';
        href: '/quantum-computing';}
        description: 'Next-gen quantum tech';}
      }
      {label: 'Space Technology';
        href: '/space-tech';}
        description: 'Innovative space solutions';}
      }
      {label: 'Q4 2025 Innovation';
        href: '/innovative-2025-q4-showcase';}
        description: 'Latest revolutionary services';}
      }
      {label: 'Pricing Guide';
        href: '/comprehensive-pricing-2025-q4';}
        description: 'Comprehensive pricing';}
      }
      {label: 'Cybersecurity';
        href: '/cybersecurity';}
        description: 'Enterprise security';}
      }
      {label: 'Cloud Solutions';
        href: '/cloud-platform';}
        description: 'Scalable cloud infrastructure';}
      }
      {label: 'View All Services';
        href: '/services';}
        description: 'Complete service portfolio';}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
    ];
  }

<<<<<<< HEAD
  {
    }
    "title": 'Solutions';'
    "links": [
      {
        }
        "label": 'Healthcare & Biotech''
        "href": '/healthcare-solutions''
        "description": 'Medical technology''

     
}
      {"label": 'Financial Services';'
        }
        "href": '/solutions?industry=financial';'
        "description": 'Fintech solutions';'
=======
<<<<<<< HEAD
    links: [
      {
        label: 'Healthcare & Biotech'
        href: '/healthcare-solutions'
        label: 'Healthcare & Biotech'
        href: '/healthcare-solutions'
        label: 'Healthcare & Biotech',
  href: '/healthcare-solutions'
        description: 'Medical technology'
<<<<<<< HEAD
  {title: 'Solutions';links: [;
      {label: 'Healthcare & Biotech';
        href: '/healthcare-solutions';
        description: 'Medical technology';
=======
=======
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

  };
  external?: boolean;
}
interface FooterSection {
  title: string,
  links: FooterLink[];
}
const footer_sections: FooterSection[] = [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {
    title: 'Solutions';
    links: [
      {
        label: 'Healthcare & Biotech',
  href: '/healthcare-solutions'
        description: 'Medical technology'
}
     }
}
      {label: 'Financial Services';
        href: '/solutions?industry=financial';}
        description: 'Fintech solutions';}
>>>>>>> origin/chore/fix-lint-and-merge
      }
      {label: 'Manufacturing';
        href: '/solutions?industry=manufacturing';}
        description: 'Industry 4.0';}
      }
<<<<<<< HEAD
      {'
        label: 'Financial Services''
        href: '/solutions?industry=financial''
        description: 'Fintech solutions'
=======
      {label: 'Retail & E-commerce';
        href: '/solutions?industry=retail';}
        description: 'Digital commerce';}
>>>>>>> origin/chore/fix-lint-and-merge
      }
      {label: 'Government';
        href: '/solutions?industry=government';}
        description: 'Public sector';}
      }
<<<<<<< HEAD
      {'
        label: 'Retail & E-commerce''
        href: '/solutions?industry=retail''
        description: 'Digital commerce'
      }
      {'
        label: 'Government''
        href: '/solutions?industry=government''
        description: 'Public sector'
      }
      {'
        label: 'Education''
        href: '/solutions?industry=education''
        description: 'EdTech solutions'
      }
  {'
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
    title: 'Solutions'
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry;
    links: [
      {
        label: 'About Us'
        href: '/about'
        description: 'Our mission and values'
      }
      { label: 'Careers', href: '/careers', description: 'Join our team' }
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
=======
      {label: 'Education';
        href: '/solutions?industry=education';}
        description: 'EdTech solutions';}
      }

  {
    title: 'Solutions',
  links: [

      { label: 'Healthcare & Biotech'}
  href: '/healthcare-solutions', description: 'Medical technology'}
},
      { label: 'Financial Services',
  href: '/solutions?industry;
    links: [
      {
        label: 'About Us',
  href: '/about'
        description: 'Our mission and values'}
     }
}
      { label: 'Careers'}
  href: '/careers', description: 'Join our team'}
}
      { label: 'Contact'}
  href: '/contact', description: 'Get in touch' }
>>>>>>> origin/chore/fix-lint-and-merge
    ]
 
},  {
    title: 'Resources',
  links: [
      { label: 'Blog'}
  href: '/blog', description: 'Industry insights'}
},  {
    title: 'Solutions',
<<<<<<< HEAD
  links: [

      { label: 'Healthcare & Biotech'}
  href: '/healthcare-solutions', description: 'Medical technology'}
}
      { label: 'Financial Services'}
  href: '/solutions?industry=financial', description: 'Fintech solutions'}
}
      { label: 'Manufacturing'}
  href: '/solutions?industry=manufacturing', description: 'Industry 4.0'}
}
      { label: 'Retail & E-commerce'}
  href: '/solutions?industry=retail', description: 'Digital commerce'}
}
      { label: 'Government'}
  href: '/solutions?industry=government', description: 'Public sector'}
}
      { label: 'Education'}
  href: '/solutions?industry=education', description: 'EdTech solutions'}
}
    ];
  }
  {title: 'Company';
    links: [;
      { label: 'About Us'}
  href: '/about', description: 'Our mission and values'}
}
      { label: 'Careers'}
  href: '/careers', description: 'Join our team'}
}
      { label: 'Contact'}
  href: '/contact', description: 'Get in touch' }

    ]

 
}
  {
    title: 'Resources',
  links: [

      { label: 'Blog'}
  href: '/blog', description: 'Industry insights'}
}
      {label: 'White Papers';
        href: '/white-papers';}
        description: 'In-depth research';}
      }
      {label: 'Webinars';
        href: '/webinars';}
        description: 'Educational content';}
      }
      {label: 'Documentation';
        href: '/docs';}
        description: 'Technical guides';}
      }

      {
        label: 'Education',
  href: '/education-technology-solutions'}
        description: 'EdTech solutions'}
      }
    ]
  }
];

const socialLinks = [
  {
    icon: <Linkedin className='w-5 h-5'    />,
    href: 'https://linkedin.com/company/ziontechgroup',
  label: 'LinkedIn'}
    external: true}
  },
  {
    icon: <Twitter className='w-5 h-5'    />,
    href: 'https://twitter.com/ziontechgroup',
  label: 'Twitter'}
    external: true}
  },
  {
    icon: <Github className='w-5 h-5'    />,
    href: 'https://github.com/ziontechgroup',
  label: 'GitHub'}
    external: true}
  }
];

const quickLinks = [
<<<<<<< HEAD
  { name: 'About Us', href: '/about', icon: <Users className = $2;
  { name: 'Contact', href: '/contact', icon: <Phone className = $2;
  { name: 'Support', href: '/support', icon: <HelpCircle className = $2;
  { name: 'Documentation', href: '/docs', icon: <FileText className = $2;
  { name: 'API Reference', href: '/api', icon: <Code className = $2;
  { name: 'Status', href: '/status', icon: <TrendingUp className = $2;
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
  }
  {'
    title: 'Company'
    links: ['
      { label: 'About Us', href: '/about', description: 'Our mission and values' }'
      { label: 'Careers', href: '/careers', description: 'Join our team' }'
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  {'
    title: 'Resources',
    links: [;'
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
        }
        "label": 'Education','
        "href": '/education-technology-solutions','
        "description": 'EdTech solutions','
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    ]
  }
];
<<<<<<< HEAD
=======
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

=======
=======

      { label: 'Blog', href: '/blog', description: 'Industry insights' },


  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const socialLinks = [;
  {
    }
    "icon": <Linkedin className='w-5 h-5' />,'
    "href": '"https"://linkedin.com/company/ziontechgroup','
    "label": 'LinkedIn','
    "external": true
  },
  {
    }
    "icon": <Twitter className='w-5 h-5' />,'
    "href": '"https"://twitter.com/ziontechgroup','
    "label": 'Twitter','
    "external": true
  },
  {
    }
    "icon": <Github className='w-5 h-5' />,'
    "href": '"https"://github.com/ziontechgroup','
    "label": 'GitHub','
    "external": true
  }
];

const quickLinks = [;
  { "name": 'About Us', "href": '/about', "icon": <Users className='w-4 h-4' />,'
},
  { "name": 'Contact', "href": '/contact', "icon": <Phone className='w-4 h-4' />,'
},
  {
    name: 'Support',
    href: '/support',
    icon: <HelpCircle className='w-4 h-4' />,
  },

<<<<<<< HEAD
  const footerSections = $2;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const footerSections = [
    {
      title: 'Services'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
>>>>>>> merged-prs-20250907-203621
  { name: 'About Us', href: '/about', icon: <Users className='w-4 h-4' /> }
  { name: 'Contact', href: '/contact', icon: <Phone className='w-4 h-4' /> }
  {
    name: 'Support'
    href: '/support'
    icon: <HelpCircle className='w-4 h-4' />
  }
  {
    name: 'Documentation',
<<<<<<< HEAD
  href: '/docs'}
    icon: <FileText className='w-4 h-4' />}
=======
    href: '/docs',
    icon: <FileText className='w-4 h-4' />,
>>>>>>> merged-prs-20250907-203621
  },
  { name: 'API Reference'}
  href: '/api', icon: <Code className='w-4 h-4' />}
},
  { name: 'Status'}
  href: '/status', icon: <TrendingUp className='w-4 h-4' />}
}
];

    name: 'Documentation'
    href: '/docs'
    icon: <FileText className='w-4 h-4' />
  }
  { name: 'API Reference', href: '/api', icon: <Code className='w-4 h-4' /> }
  { name: 'Status', href: '/status', icon: <TrendingUp className='w-4 h-4' /> },];
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
<<<<<<< HEAD
  const scrollToTop = () => {
  return $3;}
}
window.scrollTo({ top: 0, behavior: 'smooth' })
};

=======
=======
  { name: 'About Us'}
  href: '/about', icon: <Users className='w-4 h-4'    />}
},
  { name: 'Contact'}
  href: '/contact', icon: <Phone className='w-4 h-4'    />}
},
  {
    name: 'Support',
  href: '/support'}
    icon: <HelpCircle className='w-4 h-4'    />}
  },
  {
    name: 'Documentation',
  href: '/docs'}
    icon: <FileText className='w-4 h-4'    />}
  },
  { name: 'API Reference'}
  href: '/api', icon: <Code className='w-4 h-4'    />}
},
  { name: 'Status'}
  href: '/status', icon: <TrendingUp className='w-4 h-4'    />}
}
];

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
 ;
>>>>>>> origin/chore/fix-lint-and-merge
  const scrollToTop = () => {
  return $3;}
}
window.scrollTo({ top: 0, behavior: 'smooth' })
};
<<<<<<< HEAD
        description: Medical technology'
  {title: 'Solutions;links: [;
      {label: Healthcare & Biotech';
        href: '/healthcare-solutions;
        description: Medical technology';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      {"label": 'Manufacturing';'
        }
        "href": '/solutions?industry=manufacturing';'
        "description": 'Industry 4.0';'
      }
      {"label": 'Retail & E-commerce';'
        }
        "href": '/solutions?industry=retail';'
        "description": 'Digital commerce';'
      }
      {"label": 'Government';'
        }
        "href": '/solutions?industry=government';'
        "description": 'Public sector';'
      }
      {"label": 'Education';'
        }
        "href": '/solutions?industry=education';'
        "description": 'EdTech solutions';'
      }

<<<<<<< HEAD
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
=======
    title: Solutions'

      { label: 'Education, href: /solutions?industry=education', description: 'EdTech solutions }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ]
  }
  {'
    title: 'Company'
    links: ['
      { label: 'About Us', href: '/about', description: 'Our mission and values' }'
      { label: 'Careers', href: '/careers', description: 'Join our team' }'
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
  {'
    title: 'Resources',
    links: [;'
      { label: 'Blog', href: '/blog', description: 'Industry insights' },
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
        }
        "label": 'Education','
        "href": '/education-technology-solutions','
        "description": 'EdTech solutions','
      }
    ]
  }
];

<<<<<<< HEAD
const socialLinks = [;
  {
    }
    "icon": <Linkedin className='w-5 h-5' />,'
    "href": '"https"://linkedin.com/company/ziontechgroup','
    "label": 'LinkedIn','
    "external": true
  },
  {
    }
    "icon": <Twitter className='w-5 h-5' />,'
    "href": '"https"://twitter.com/ziontechgroup','
    "label": 'Twitter','
    "external": true
  },
  {
    }
    "icon": <Github className='w-5 h-5' />,'
    "href": '"https"://github.com/ziontechgroup','
    "label": 'GitHub','
    "external": true
  }
];

const quickLinks = [;
  { "name": 'About Us', "href": '/about', "icon": <Users className='w-4 h-4' />,'
},
  { "name": 'Contact', "href": '/contact', "icon": <Phone className='w-4 h-4' />,'
},
  {
    }
    "name": 'Support','
    "href": '/support','
    "icon": <HelpCircle className='w-4 h-4' />,'
  },

  const footerSections = $2;
      items: [
        { label: 'AI & Machine Learning', href: '/ai-services' },
        { label: 'Quantum Computing', href: '/quantum-computing' },
        { label: 'Space Technology', href: '/space-tech' },
        { label: 'Cybersecurity', href: '/cybersecurity' },
        { label: '2040 Services', href: '/innovative-2040-services-showcase' }
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


>>>>>>> merged-prs-20250907-203621
const footerSections = [
    {
      title: 'Services',
  items: [
<<<<<<< HEAD

=======
<<<<<<< HEAD

        { label: 'AI & Machine Learning'}
  href: '/ai-services'}
},
        { label: 'Quantum Computing'}
  href: '/quantum-computing'}
},
        { label: 'Space Technology'}
  href: '/space-tech'}
},
        { label: 'Cybersecurity'}
  href: '/cybersecurity'}
},
{ label: '2040 Services'}
  href: '/innovative-2040-services-showcase'}
}
      ]
    },
    {
      title: 'Solutions',
      items: [
        { label: 'Enterprise Solutions', href: '/enterprise-solutions' },
        { label: 'Micro SAAS', href: '/micro-saas' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Research & Development', href: '/research-development' }
      ]
<<<<<<< HEAD
    },
      ]
=======
    };

    {
      title: 'Company'
      items: [

<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      title: 'Company',
<<<<<<< HEAD
      items: [
{ label: 'Research & Development', href: '/research-development' },
      ],
    },
    {
      title: 'Company'
      items: [
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      items: [;
        { label: 'Research & Development', href: '/research-development' },
      ],
    },    {

    {

      title: 'Company',
      items: [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
<<<<<<< HEAD
        { label: 'Press & Media', href: '/press' }
      ]
    },
    {
      title: 'Resources',
      items: [
=======
<<<<<<< HEAD
        { label: 'Press & Media', href: '/press' },
      ],
=======

=======
        { label: 'Press & Media', href: '/press' },
      ],
<<<<<<< HEAD
    },    {        { label: 'Press & Media', href: '/press' }
      ];
    }
    {
      title: 'Resources',
      items: [;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
<<<<<<< HEAD
        { label: 'Support', href: '/support' }
      ]
    }
  ],
=======
<<<<<<< HEAD
        { label: 'Support', href: '/support' }
      ]
    }
  ];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ],

  ];
  const containerVariants = $2;
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
      "title": 'Services''
      "items": [
=======
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        { label: 'AI & Machine Learning'}
  href: '/ai-services'}
},
        { label: 'Quantum Computing'}
  href: '/quantum-computing'}
},
        { label: 'Space Technology'}
  href: '/space-tech'}
},
        { label: 'Cybersecurity'}
  href: '/cybersecurity'}
},
{ label: '2040 Services'}
  href: '/innovative-2040-services-showcase'}
}
      ]
    },
    {
      title: 'Solutions',
  items: [
        { label: 'Enterprise Solutions'}
  href: '/enterprise-solutions'}
},
        { label: 'Micro SAAS'}
  href: '/micro-saas'}
},
        { label: 'IT Services'}
  href: '/it-services'}
},
        { label: 'Innovation Lab'}
  href: '/innovation-lab'}
},

{ label: 'Research & Development'}
  href: '/research-development'}
<<<<<<< HEAD
}
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
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Press & Media', href: '/press' }
      ]
    },
    {
=======
}
      ]
    },
    {
      title: 'Company',
  items: [
        { label: 'About Us'}
  href: '/about'}
},
        { label: 'Our Team'}
  href: '/team'}
},
        { label: 'Careers'}
  href: '/careers'}
},
        { label: 'Investors'}
  href: '/investors'}
},

{ label: 'Press & Media'}
  href: '/press'}
}
      ]
    },
    {
      title: 'Resources',
  items: [
        { label: 'Blog'}
  href: '/blog'}
},
        { label: 'Case Studies'}
  href: '/case-studies'}
},
        { label: 'White Papers'}
  href: '/white-papers'}
},
        { label: 'Documentation'}
  href: '/docs'}
},
{ label: 'Support'}
  href: '/support'}
}
      ]
    }
  ];

const socialLinks = [
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const social_links = [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {
      icon: Twitter,
      href: 'https://twitter.com/ziontechgroup'}
  label: 'Twitter'}
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/ziontechgroup'}
  label: 'LinkedIn'}
    },
    { icon: Github, href: 'https://github.com/Zion-Holdings'}
  label: 'GitHub'}
},
    { icon: Globe, href: 'https://ziontechgroup.com'}
  label: 'Website'}
}
  ];
<<<<<<< HEAD

const containerVariants = {
    }
    "hidden": { "opacity": 0
}
    "visible": {
      }
      "opacity": 1,
"transition": {
}
"staggerChildren": 0.1
      }
=======
<<<<<<< HEAD
=======
;
  const container_variants = {
    hidden: { opacity: 0 },
<<<<<<< HEAD
    visible: {
      opacity: 1
      transition: {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
    },    {

    {

>>>>>>> merged-prs-20250907-203621
      title: 'Resources',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Documentation', href: '/docs' },
<<<<<<< HEAD
        { label: 'Support', href: '/support' }
      ]
    }
  ],

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Zion-Holdings', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' }
  ],

  const containerVariants = $2;
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
=======
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
<<<<<<< HEAD
  };
=======
    }
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const containerVariants = {}
    hidden: { opacity: 0}
}
    visible: {
      opacity: 1;
transition: {}
staggerChildren: 0.1}
>>>>>>> merged-prs-20250907-203621
      }
    }
  },

<<<<<<< HEAD
  const itemVariants = {
    hidden: { y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  },

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
=======
<<<<<<< HEAD
const itemVariants = {}
    hidden: { y: 20, opacity: 0}
}
    visible: {
      y: 0;
opacity: 1;
transition: {
}
duration: 0.5}
      }
    }
  };
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'    />
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10'    />
        {/* Quantum Particle Field */}
<<<<<<< HEAD
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div
            key={i}

    hidden: { y: 20, opacity: 0 }
    visible: {}
      y: 0;
      opacity: 1;
      transition: {}
interface FooterSection {;
  title: string,;
  links: FooterLink[];
}
const footerSections: FooterSection[] = [;
  {;'
    title: 'Services',;
    links: [;
      {;
        label: 'AI & Machine Learning',;
        href: '/ai-services',,
  description: 'Advanced AI solutions',;
      },;
      {;
        label: 'Quantum Computing',;
        href: '/quantum-computing',,
  description: 'Next-gen quantum tech',;
      },;
      {;
        label: 'Space Technology',;
        href: '/space-tech',,
  description: 'Innovative space solutions',;
      },;
      {;
        label: 'Q4 2025 Innovation',;
        href: '/innovative-2025-q4-showcase',,
  description: 'Latest revolutionary services',;
      },;
      {;
        label: 'Pricing Guide',;
        href: '/comprehensive-pricing-2025-q4',,
  description: 'Comprehensive pricing',;
      },;
      {;
        label: 'Cybersecurity',;
        href: '/cybersecurity',,
  description: 'Enterprise security',;
      },;
      {;
        label: 'Cloud Solutions',;
        href: '/cloud-platform',,
  description: 'Scalable cloud infrastructure',;
      },;
      {;
        label: 'View All Services',;
        href: '/services',,
  description: 'Complete service portfolio',;
      },;
    ],;
  },;
  {;'
    title: 'Solutions',;
    links: [;
      {;
        label: 'Healthcare & Biotech',;
        href: '/healthcare-solutions',,
  description: 'Medical technology',;
      },;
      {;
        label: 'Financial Services',;
        href: '/solutions?industry=financial',,
  description: 'Fintech solutions',;
      },;
      {;
        label: 'Manufacturing',;
        href: '/solutions?industry=manufacturing',,
  description: 'Industry 4 && 4.0',;
      },;
      {;
        label: 'Retail & E-commerce',;
        href: '/solutions?industry=retail',,
  description: 'Digital commerce',;
      },;
      {;
        label: 'Government',;
        href: '/solutions?industry=government',,
  description: 'Public sector',;
      },;
      {;
        label: 'Education',;
        href: '/solutions?industry=education',,
  description: 'EdTech solutions',;
      },;
  {;'
    title: 'Solutions',;
    links: [;'
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },;'
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },;'
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4 && 4.0' },;'
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },;'
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },;'
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
};
  {;
    title: 'Company',;
    links: [;'
      { label: 'About Us', href: '/about', description: 'Our mission and values' },;'
      { label: 'Careers', href: '/careers', description: 'Join our team' },;'
      { label: 'Contact', href: '/contact', description: 'Get in touch' },;
    ],;
  },;
  {;'
    title: 'Company',;
    links: [;
      {;
        label: 'About Us',;
        href: '/about',,
  description: 'Our mission and values',;
      },;
      { label: 'Careers', href: '/careers', description: 'Join our team' },;
      { label: 'Contact', href: '/contact', description: 'Get in touch' },;
    ],;
  },  {;'
    title: 'Resources',;
    links: [;'
      { label: 'Blog', href: '/blog', description: 'Industry insights' },  {;'
    title: 'Solutions',;
    links: [;'
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },;'
      { label: 'Financial Services', href: '/solutions?industry=financial', description: 'Fintech solutions' },;'
      { label: 'Manufacturing', href: '/solutions?industry=manufacturing', description: 'Industry 4 && 4.0' },;'
      { label: 'Retail & E-commerce', href: '/solutions?industry=retail', description: 'Digital commerce' },;'
      { label: 'Government', href: '/solutions?industry=government', description: 'Public sector' },;'
      { label: 'Education', href: '/solutions?industry=education', description: 'EdTech solutions' }
    ]
};
  {;
    title: 'Company',;
    links: [;'
      { label: 'About Us', href: '/about', description: 'Our mission and values' },;'
      { label: 'Careers', href: '/careers', description: 'Join our team' },;'
      { label: 'Contact', href: '/contact', description: 'Get in touch' }
    ]
};
  {;
    title: 'Resources',;
    links: [;'
      { label: 'Blog', href: '/blog', description: 'Industry insights' },;
      {;
        label: 'White Papers',;
        href: '/white-papers',,
  description: 'In-depth research',;
      },;
      {;
        label: 'Webinars',;
        href: '/webinars',,
  description: 'Educational content',;
      },;
      {;
        label: 'Documentation',;
        href: '/docs',,
  description: 'Technical guides',;
      },;
      {;
        label: 'Case Studies',;
        href: '/case-studies',,
  description: 'Success stories',;
      },;
      { label: 'Support', href: '/support', description: 'Help & assistance' },;
    ],;
  },;
  {;'
    title: 'Industries',;
    links: [;
      {;
        label: 'Healthcare',;
        href: '/healthcare-solutions',,
  description: 'Medical technology',;
      },;
      {;
        label: 'Finance',;
        href: '/financial-solutions',,
  description: 'Fintech solutions',;
      },;
      {;
        label: 'Manufacturing',;
        href: '/manufacturing-ai-solutions',,
  description: 'Industry 4 && 4.0',;
      },;
      {;
        label: 'Government',;
        href: '/government-technology-solutions',,
  description: 'Public sector',;
      },;
      {;
        label: 'Education',;
        href: '/education-technology-solutions',,
  description: 'EdTech solutions',;
      },;
    ],;
  },;
];
const socialLinks = [;
  {;'
    icon: <Linkedin className='w-5 h-5' />,;'
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;'
    label: 'LinkedIn',;
    external: true,;
  },;
  {;'
    icon: <Twitter className='w-5 h-5' />,;'
    href: 'https://twitter && twitter.com/ziontechgroup',;'
    label: 'Twitter',;
    external: true,;
  },;
  {;'
    icon: <Github className='w-5 h-5' />,;'
    href: 'https://github && github.com/ziontechgroup',;'
    label: 'GitHub',;
    external: true,;
  },;
];
<<<<<<< HEAD
const quickLinks = [;'
  { name: 'About Us', href: '/about', icon: <Users className='w-4 h-4' /> },;'
=======
const quickLinks = [;
  { name: 'About Us', href: '/about', icon: <Users className='w-4 h-4' /> },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  { name: 'Contact', href: '/contact', icon: <Phone className='w-4 h-4' /> },;
  {;'
    name: 'Support',;'
    href: '/support',;'
    icon: <HelpCircle className='w-4 h-4' />,;
  },;
  {;'
    name: 'Documentation',;'
    href: '/docs',;'
    icon: <FileText className='w-4 h-4' />,;
  },;'
  { name: 'API Reference', href: '/api', icon: <Code className='w-4 h-4' /> },;'
  { name: 'Status', href: '/status', icon: <TrendingUp className='w-4 h-4' /> },];
const UltraAdvancedFuturisticFooter2025: React.FC = () => {;
  const scrollToTop = () => {;
    window && window.scrollTo({ top: 0, behavior: 'smooth' })
};  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },;
  { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> },;
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },;
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },;
  { name: 'API Reference', href: '/api', icon: <Code className="w-4 h-4" /> },;
  { name: 'Status', href: '/status', icon: <TrendingUp className="w-4 h-4" /> }
const UltraAdvancedFuturisticFooter2025: React.FC = () => {;
  const scrollToTop = () => {;
<<<<<<< HEAD
    window && window.scrollTo({ top: 0, behavior: 'smooth' });    window && window.scrollTo({ top: 0, behavior: 'smooth' })
};
=======
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return ("
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}"
      <div className="absolute inset-0 -z-10">
  return ("
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}"
      <div className="absolute inset-0 -z-10">

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}
  return ("
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">;
      {/* Animated Background Elements */}"
      <div className="absolute inset-0 -z-10">;
duration: 0.5,
      },
    },
  };

<<<<<<< HEAD
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div;
            key={i}
<<<<<<< HEAD
className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'
            animate={{
              }
              "x": [0, Math.random() * 1000, 0],
              "y": [0, Math.random() * 1000, 0],
              "opacity": [0, 0.6, 0],
              "scale": [0, 1, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: -1,
              delay: Math.random() * 8,
ease: 'easeInOut',
            }}
          />;
        ))}
=======


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
          />;
        ))}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>;
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>;
      </div>;
      <div className="relative z-10">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Main Footer Content */}

        <div className='max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 py-20'>'
          <motion.div,
variants={containerVariant,;
}
            initial='hidden';'
            whileInView='visible';'
            viewport={{ "once": true }}
            className='grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-6 gap-12'>'

            {/* Company Info */}
>>>>>>> merged-prs-20250907-203621
      <div className="absolute inset-0 -z-10">
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
<<<<<<< HEAD
=======
      { label: About Us', href: '/about, description: Our mission and values' }'
      { label: Careers, href: '/careers', description: Join our team }'
      { label: 'Contact, href: /contact', description: 'Get in touch }
    ]
  {
    title: 'Resources',
    links: [;
      { label: Blog', href: '/blog, description: Industry insights' },

    name: 'Documentation
    href: /docs'
    icon: <FileText className='w-4 h-4 />
  }
  { name: API Reference', href: '/api, icon: <Code className=w-4 h-4' /> }
  { name: 'Status, href: /status', icon: <TrendingUp className='w-4 h-4 /> }];
const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  const scrollToTop = () => {


const footerSections = [
    {}
      ]
    },
    {
      title: Solutions',

      items: [
        { label: 'Enterprise Solutions, href: /enterprise-solutions' },
        { label: 'Micro SAAS, href: /micro-saas' },
        { label: 'IT Services, href: /it-services' },
        { label: 'Innovation Lab, href: /innovation-lab' }]
    }
    {
      title: 'Solutions
      items: [
        { label: Enterprise Solutions', href: '/enterprise-solutions }
        { label: Micro SAAS', href: '/micro-saas }
        { label: IT Services', href: '/it-services }
        { label: Innovation Lab', href: '/innovation-lab }
        { label: Research & Development', href: '/research-development }
      ]
    },    {        { label: Research & Development', href: '/research-development }
      ]
    }
    {
      title: Company',
      items: [
{ label: 'Research & Development, href: /research-development' }]},
    {
      title: 'Company
      items: [
origin/cursor/automate-test-improve-and-merge-code-2533
        { label: About Us', href: '/about },
        { label: Our Team', href: '/team },
        { label: Careers', href: '/careers },
        { label: Investors', href: '/investors },

      items: [
        { label: Blog', href: '/blog },
        { label: Case Studies', href: '/case-studies },
        { label: White Papers', href: '/white-papers },
        { label: Documentation', href: '/docs },

    hidden: { y: 20, opacity: 0 }
    visible: {}
      y: 0;
      opacity: 1;
      transition: {}
interface FooterSection {
  title: string,
  links: FooterLink[];
}
  {
    title: 'Services',
    links: [;

      }]},
  {
    title: Solutions',
    links: [;

      },
  {'
    title: Solutions,
    links: [;'
      { label: 'Healthcare & Biotech, href: /healthcare-solutions', description: 'Medical technology },
      { label: 'Financial Services', href: /solutions?industry=financial, description: 'Fintech solutions' },
      { label: Manufacturing', href: '/solutions?industry=manufacturing, description: Industry 4 && 4.0' },'
      { label: Retail & E-commerce, href: '/solutions?industry=retail', description: Digital commerce },'
      { label: 'Government, href: /solutions?industry=government', description: 'Public sector },
      { label: 'Education', href: /solutions?industry=education, description: 'EdTech solutions' }

    title: Company,
    links: [;'
      { label: 'About Us, href: /about', description: 'Our mission and values },
      { label: 'Careers', href: /careers, description: 'Join our team' },
      { label: Contact', href: '/contact, description: Get in touch' }]},
  {'
    title: Company,
    links: [;

      { label: 'Contact', href: /contact, description: 'Get in touch' }]},  {
    title: Resources',
    links: [;'
      { label: Blog, href: '/blog', description: Industry insights },  {'
    title: 'Solutions,
    links: [;
      { label: 'Healthcare & Biotech', href: /healthcare-solutions, description: 'Medical technology' },
      { label: Financial Services', href: '/solutions?industry=financial, description: Fintech solutions' },'
      { label: Manufacturing, href: '/solutions?industry=manufacturing', description: Industry 4 && 4.0 },'
      { label: 'Retail & E-commerce, href: /solutions?industry=retail', description: 'Digital commerce },
      { label: 'Government', href: /solutions?industry=government, description: 'Public sector' },
      { label: Education', href: '/solutions?industry=education, description: EdTech solutions' }

    title: 'Company,
    links: [;
      { label: 'About Us', href: /about, description: 'Our mission and values' },
      { label: Careers', href: '/careers, description: Join our team' },'
      { label: Contact, href: '/contact', description: Get in touch }

    title: 'Resources',
    links: [;
      { label: Blog', href: '/blog, description: Industry insights' },

      { label: 'Support, href: /support', description: 'Help & assistance }]},
  {
    title: 'Industries',
    links: [;

      }]}];
  {
    icon: <Linkedin className=w-5 h-5' />,'
    href: https://linkedin && linkedin.com/company/ziontechgroup,'
    label: 'LinkedIn,
    external: true},
  {
    icon: <Twitter className='w-5 h-5' />,
    href: https://twitter && twitter.com/ziontechgroup','
    label: Twitter,
    external: true},
  {'
    icon: <Github className='w-5 h-5 />,
    href: 'https://github && github.com/ziontechgroup',
    label: GitHub',
    external: true}];
const quickLinks = [;'
  { name: About Us, href: '/about', icon: <Users className=w-4 h-4 /> },'
  { name: 'Contact, href: /contact', icon: <Phone className='w-4 h-4 /> },
  {
    name: 'Support',
    href: /support','
    icon: <HelpCircle className=w-4 h-4 />},
  {'
    name: 'Documentation,
    href: '/docs',
    icon: <FileText className=w-4 h-4' />},'
  { name: API Reference, href: '/api', icon: <Code className=w-4 h-4 /> },'
  { name: 'Status, href: /status', icon: <TrendingUp className='w-4 h-4 /> }];


  return ("
    <footer className=relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden>
      {/* Animated Background Elements */}"
      <div className="absolute inset-0 -z-10>
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className=absolute inset-0 -z-10">


    <footer className=relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden'>;
      {/* Animated Background Elements */}
  return ("
    <footer className=relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden>;
      {/* Animated Background Elements */}"
      <div className="absolute inset-0 -z-10>;
duration: 0.5}}}

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden>
      {/* Animated Background Elements */}
      <div className=absolute inset-0 -z-10'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Quantum Particle Field */}
        {[...Array(30)].map((_, i) => (;
          <motion&& motion.div;
            key={i}
className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]}}
            transition = $2;
              repeat: -1,
              delay: Math.random() * 8,
<<<<<<< HEAD
              ease: "easeInOut"
            }}
            style = $2;
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900"></div>
      </div>

            <motion.div variants={itemVariant
} className='"lg":col-span-2'>'
              <div className='flex items-center space-x-3 mb-6'>'
                <div className='relative'>'
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center'>'
                    <Crown className='w-7 h-7 text-white' />'
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50'></div>'
                </div>
                <div>
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>'
                    Zion Tech Group
                  </h3>
                  <p className='text-sm text-gray-400'>'
                    Future Technology Solutions
                  </p>
                </div>
              <p className='text-gray-300 mb-6 leading-relaxed'>'
                Pioneering the future with revolutionary AI consciousness,
quantum computing, and autonomous systems. Transforming,
businesses through next-generation technology.
              </p>
              <p className='text-gray-300 leading-relaxed mb-6 max-w-md'>'
                Leading provider of innovative technology solutions,
specializing in AI, automation, and future-ready services. We,
help businesses transform and thrive in the digital age.
=======
ease: easeInOut',
=======
        {[...Array(30)].map((_, i) => (;}
          <motion&& motion.div;}
key={i}

<<<<<<< HEAD
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
          >
            {/* Company Info */}
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
                Pioneering the future with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
=======
className='absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'
            animate={{
              x: [0, Math.random() * 1000, 0],
              y: [0, Math.random() * 1000, 0],
              opacity: [0, 0.6, 0]}
              scale: [0, 1, 0]}
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: -1,
              delay: Math.random() * 8}
ease: 'easeInOut'}
            }}
             />;
        ))}
        {/* Main Footer Content */}
>>>>>>> origin/chore/fix-lint-and-merge

        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20'    />
          <motion.div;
variants={containerVariant}
}
            initial='hidden';
            whileInView='visible';
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12'    />

            {/* Company Info */}

            <motion.div variants={itemVariant}
} className='lg:col-span-2'    />
              <div className='flex items-center space-x-3 mb-6'    />
                <div className='relative'    />
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center'    />
                    <Crown className='w-7 h-7 text-white'    />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50'    /></div>
                </div>
                <div    />
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                    Zion Tech Group;
                  </h3>
<<<<<<< HEAD
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. Transforming businesses through next-generation technology.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of innovative technology solutions, specializing in AI, automation, and future-ready services. 
                We help businesses transform and thrive in the digital age.
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12'
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className='lg:col-span-2'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className='relative'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center'>
                    <Crown className='w-7 h-7 text-white' />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50'></div>
                </div>
                <div>
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                    Zion Tech Group
                  </h3>
                  <p className='text-sm text-gray-400'>
                    Future Technology Solutions
=======
                  <p className='text-sm text-gray-400'    />
                    Future Technology Solutions;
>>>>>>> origin/chore/fix-lint-and-merge
                  </p>
                </div>
              </div>
              <p className='text-gray-300 mb-6 leading-relaxed'    />
                Pioneering the future with revolutionary AI consciousness;
quantum computing, and autonomous systems. Transforming;
businesses through next-generation technology.
              </p>
<<<<<<< HEAD
              <p className='text-gray-300 leading-relaxed mb-6 max-w-md'>
                Leading provider of innovative technology solutions
                specializing in AI, automation, and future-ready services. We
                help businesses transform and thrive in the digital age.
=======
              <p className='text-gray-300 leading-relaxed mb-6 max-w-md'    />
                Leading provider of innovative technology solutions;
specializing in AI, automation, and future-ready services. We;
help businesses transform and thrive in the digital age.
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </p>
              {/* Contact Info */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
=======
              <div className='space-y-3'    />
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Phone className='w-4 h-4 text-cyan-400'    />
                  <span    />+1 302 464 0950</span>
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Mail className='w-4 h-4 text-purple-400'    />
                  <span    />kleber@ziontechgroup.com</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <MapPin className='w-4 h-4 text-pink-400'    />
                  <span    />364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">;
            {/* Company Info */}
<<<<<<< HEAD
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors duration-200">
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
=======

=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD
            <motion.div variants={itemVariants} className='lg:col-span-2'>;
              <div className='flex items-center space-x-3 mb-6'>;
                <div className='relative'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center'>;
                    <Crown className='w-7 h-7 text-white' />;
=======

<<<<<<< HEAD
=======
            <motion && motion.div variants={itemVariants} className="lg:col-span-2">;
              <div className="flex items-center space-x-3 mb-6">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center">;
                    <Crown className="w-7 h-7 text-white" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-xl blur-lg opacity-50'></div>;
                </div>;
                <div>;
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                    Zion Tech Group;
                  </h3>;
                  <p className='text-sm text-gray-400'>;
                    Future Technology Solutions;
                  </p>;
                </div>;
              </div>;
              <p className='text-gray-300 mb-6 leading-relaxed'>;
                Pioneering the future with revolutionary AI consciousness;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  {section.title === 'Services' && <Briefcase className="w-5 h-5 text-cyan-400" />}
                  {section.title === 'Solutions' && <Zap className="w-5 h-5 text-purple-400" />}
                  {section.title === 'Company' && <Users className="w-5 h-5 text-pink-400" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-blue-400" />}
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
<<<<<<< HEAD
                quantum computing, and autonomous systems. Transforming;
                businesses through next-generation technology.;
              </p>;
              <p className='text-gray-300 leading-relaxed mb-6 max-w-md'>;
                Leading provider of innovative technology solutions;
                specializing in AI, automation, and future-ready services. We;
                help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className='space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <span>kleber@ziontechgroup.com</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-pink-400' />;
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Globe className='w-4 h-4 text-blue-400' />;
                  <a;
                    href='https://ziontechgroup.com';
                    className='hover:text-white transition-colors duration-200';
                  >;
                  </a>
                </div>
              </div>
            </motion.div>"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </p>

              {/* Contact Info */}
              <div className='space-y-3'>'
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <Phone className='w-4 h-4 text-cyan-400' />'
                  <span>+1 302 464 0950</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <Mail className='w-4 h-4 text-purple-400' />'
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <MapPin className='w-4 h-4 text-pink-400' />'
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <Globe className='w-4 h-4 text-blue-400' />'
                  <a,
href='"https": //ziontechgroup.com''
                    className='"hover":text-white transition-colors duration-200''
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
                    ziontechgroup.com
                    ziontechgroup.com;
                  </a>
                </div>
<<<<<<< HEAD
            </motion.div>"
=======
              </div>
            </motion.div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link'
<<<<<<< HEAD
              <p className='text - gray - 300 mb - 6 leading - relaxed'>;
=======
              <p className=text - gray - 300 mb - 6 leading - relaxed>;
=======
              <p className='text - gray - 300 mb - 6 leading - relaxed'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Pioneering the future with revolutionary AI consciousness,
                quantum computing, and autonomous systems. Transforming;
                businesses through next - generation technology.;
              </p>;'
              <p className='text - gray - 300 leading - relaxed mb - 6 max - w-md'>;
                Leading provider of innovative technology solutions,
                specializing in AI, automation, and future - ready services. We;
                help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}'
              <div className='space - y-3'>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span>+1 302 464 0950</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span > kleber@ziontechgroup.com</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <MapPin className='w - 4 h - 4 text - pink - 400' />;
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;'
                <div className='flex items - center space - x-3 text - gray - 300'>;'
                  <Globe className='w - 4 h - 4 text - blue - 400' />;
                  <a;'
                    href='https://ziontechgroup.com';'
                    className='hover:text - white transition - colors duration - 200';
                  >                    ziontechgroup.com            }}
            style={{}
              left: `${Math.random () * 100}%`,`
              top: `${Math.random () * 100}%`;
            }}
          />))}
        {/* Gradient Overlays */}
        <div className="absolute inset - 0 bg - gradient - to - t from - gray - 900 via - purple-900 / 20 to-transparent"></div>;
        <div className="absolute inset - 0 bg - gradient - to - b from - transparent via - gray - 900 / 20 to-gray-900"></div>;
      </div>;
      <div className="relative z-10">;
        {/* Main Footer Content */}
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8 py-20">;
          <motion.div;
            variants={container_variants}"
            initial="hidden";"
            whileInView="visible";
            viewport={{ once: true }}
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-6 gap-12";
          >;
            {/* Company Info */}
            <motion.div variants={item_variants} className="lg:col-span-2">;
              <div className="flex items - center space-x-3 mb-6">;
                <div className="relative">;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items-center justify-center">;
                    <Crown className="w - 7 h-7 text-white" />;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl blur-lg opacity-50"></div>;
                </div>;
                <div>;
                  <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text - sm text-gray-400">Future Technology Solutions</p>;
                </div>;
<<<<<<< HEAD
=======
              </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <p className="text - gray - 300 mb-6 leading-relaxed">;
                Pioneering the future with revolutionary AI consciousness, quantum computing, and autonomous systems. Transforming businesses through next - generation technology.;
              </p>;
              <p className="text - gray - 300 leading - relaxed mb-6 max-w-md">;
                Leading provider of innovative technology solutions, specializing in AI, automation, and future - ready services.;
                We help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className="space-y-3">;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Phone className="w - 4 h - 4 text-cyan-400" />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Mail className="w - 4 h - 4 text-purple-400" />;
                  <span > kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <MapPin className="w - 4 h - 4 text-pink-400" />;
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Globe className="w - 4 h - 4 text-blue-400" />;
                  <a href="https://ziontechgroup.com" className="hover:text - white transition-colors duration-200">;
                    ziontechgroup.com;
                  </a>;
                </div>;
            </motion.div>;
                <ul className="space-y-3">;
                  {section.items.map((item) => (<li key={item.label}>;
                      <Link;
              <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                Pioneering the future with revolutionary AI consciousness,quantum computing, and autonomous systems. Transforming;
                businesses through next - generation technology.;
              </p>;
              <p className='text - gray - 300 leading - relaxed mb - 6 max - w-md'>;
                Leading provider of innovative technology solutions,specializing in AI, automation, and future - ready services. We;
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
            style={{left: `${Math.random () * 100}%`,top: `${Math.random () * 100}%`;
            }}
          />))}
        {/* Gradient Overlays */}
        <div className="absolute inset - 0 bg - gradient - to - t from - gray - 900 via - purple-900 / 20 to-transparent"></div>;
        <div className="absolute inset - 0 bg - gradient - to - b from - transparent via - gray - 900 / 20 to-gray-900"></div>;
      </div>;
      <div className="relative z-10">;
        {/* Main Footer Content */}
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8 py-20">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-6 gap-12";
          >;
            {/* Company Info */}
            <motion.div variants={item_variants} className="lg:col-span-2">;
              <div className="flex items - center space-x-3 mb-6">;
                <div className="relative">;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl flex items-center justify-center">;
                    <Crown className="w - 7 h-7 text-white" />;
                  </div>;
                  <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 rounded - xl blur-lg opacity-50"></div>;
                </div>;
                <div>;
                  <h3 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip-text text-transparent">;
                    Zion Tech Group;
                  </h3>;
                  <p className="text - sm text-gray-400">Future Technology Solutions</p>;
                </div>;
<<<<<<< HEAD
=======
              </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <p className="text - gray - 300 mb-6 leading-relaxed">;
                Pioneering the future with revolutionary AI consciousness, quantum computing, and autonomous systems. Transforming businesses through next - generation technology.;
              </p>;
              <p className="text - gray - 300 leading - relaxed mb-6 max-w-md">;
                Leading provider of innovative technology solutions, specializing in AI, automation, and future - ready services.;
                We help businesses transform and thrive in the digital age.;
              </p>;
              {/* Contact Info */}
              <div className="space-y-3">;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Phone className="w - 4 h - 4 text-cyan-400" />;
                  <span>+1 302 464 0950</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Mail className="w - 4 h - 4 text-purple-400" />;
                  <span > kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <MapPin className="w - 4 h - 4 text-pink-400" />;
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
                </div>;
                <div className="flex items - center space - x-3 text-gray-300">;
                  <Globe className="w - 4 h - 4 text-blue-400" />;
                  <a href="https://ziontechgroup.com" className="hover:text - white transition-colors duration-200">;
                    ziontechgroup.com;
                  </a>;
                </div>;
<<<<<<< HEAD
=======
              </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </motion.div>;
            {/* Footer Sections */}
            {footer_sections.map ((section, index) => (<motion.div key={section.title} variants={item_variants}>;
                <h4 className='text - lg font - semibold text - white mb - 6 flex items - center space - x-2'>;
                  {section.title === 'Services' && (<Briefcase className='w - 5 h - 5 text - cyan - 400' />)}
                  {section.title === 'Solutions' && (<Zap className='w - 5 h - 5 text - purple - 400' />)}
                  {section.title === 'Company' && (<Users className='w - 5 h - 5 text - pink - 400' />)}
                  {section.title === 'Resources' && (<BookOpen className='w - 5 h - 5 text - blue - 400' />)}
                  <span>{section.title}</span>;
<<<<<<< HEAD
                </h4>;
                <ul className='space - y-3'>;
                  {section.items.map (item => (<li key={item.label}>;
                      <Link;
                        href={item.href}
                        className='text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block'                      >                  <span>{section.title}</span>;
                </h4>;
                <ul className="space-y-3">;
                  {section.items.map ((item) => (<li key={item.label}>;
                      <Link;href={item.href}
                        className="text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate-x-1 inline-block";
                      >;{/* Footer Sections */}
            {footerSections.map((section, index) => (<motion.div key={section.title} variants={itemVariants}>;
<h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'>;
                  {section.title === 'Services' && (<Briefcase className='w-5 h-5 text-cyan-400' />;
                  )}
                  {section.title === 'Solutions' && (<Zap className='w-5 h-5 text-purple-400' />;'
                  )}
                  {section.title === 'Company' && (<Users className='w-5 h-5 text-pink-400' />;'
                  )}
                  {section.title === 'Resources' && (<BookOpen className='w-5 h-5 text-blue-400' />;'
                  )}
                  <span>{section.title}</span>;
                </h4>;
                <ul className='space-y-3'>;'
                  {section.items.map(item => (<li key={item.label}>;
                      <Link;
                        href={item.href}

                        className='text-gray-300 "hover": text-white transition-colors duration-200 "hover":translate-x-1 inline-block''
                      >
                        {item.label}
            {/* Footer Sections *
}
            {footerSections && footerSections.map((section, index) => (<motion && motion.div key={section && section.title} variants={itemVariants}>;
=======
=======
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Globe className='w-4 h-4 text-blue-400'    />
                  <a;
href='https: //ziontechgroup.com'
                    className='hover:text-white transition-colors duration-200'
                      />
                    ziontechgroup.com;
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections *}
}
            {footerSections.map((section, index) => (}
              <motion.div key={section.title} variants={itemVariants}    />
<h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'    />
                  {section.title === 'Services' && (
                    <Briefcase className='w-5 h-5 text-cyan-400'    />}
}
                  )}
                  {section.title === 'Solutions' && (<Zap className='w-5 h-5 text-purple-400'    />;}
                  )}
                  {section.title === 'Company' && (<Users className='w-5 h-5 text-pink-400'    />;}
                  )}
                  {section.title === 'Resources' && (<BookOpen className='w-5 h-5 text-blue-400'    />;}
                  )}
                  <span    />{section.title}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
                </h4>;
                <ul className='space-y-3'    />;
                  {section.items.map(item => (<li key={item.label}    />;
                      <Link;
                        href={item.href}
<<<<<<< HEAD
                        className='text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block'                      >                  <span>{section.title}</span>;
                </h4>;
                <ul className="space-y-3">;
                  {section.items.map ((item) => (<li key={item.label}>;
                      <Link;href={item.href}
                        className="text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate-x-1 inline-block";
                      >;{/* Footer Sections */}
            {footerSections.map((section, index) => (<motion.div key={section.title} variants={itemVariants}>;
<h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'>;
                  {section.title === 'Services' && (<Briefcase className='w-5 h-5 text-cyan-400' />;
=======

                        className='text-gray-300 hover: text-white transition-colors duration-200 hover:translate-x-1 inline-block'
                          />

                        {item.label}
            {/* Footer Sections *}
}
            {footerSections && footerSections.map((section, index) => (<motion && motion.div key={section && section.title} variants={itemVariants}    />;
                <h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'    />;
                  {section && section.title === 'Services' && (<Briefcase className='w-5 h-5 text-cyan-400'    />;}
                  )}
                  {section && section.title === 'Solutions' && (<Zap className='w-5 h-5 text-purple-400'    />;}
>>>>>>> origin/chore/fix-lint-and-merge
                  )}
                  {section && section.title === 'Company' && (<Users className='w-5 h-5 text-pink-400'    />;}
                  )}
                  {section && section.title === 'Resources' && (<BookOpen className='w-5 h-5 text-blue-400'    />;}
                  )}
<<<<<<< HEAD
                  {section.title === 'Resources' && (<BookOpen className='w-5 h-5 text-blue-400' />;
                  )}
                  <span>{section.title}</span>;
                </h4>;
                <ul className='space-y-3'>;'
                  {section.items.map(item => (<li key={item.label}>;
                      <Link;
                        href={item.href}

                        className='text-gray-300 "hover": text-white transition-colors duration-200 "hover":translate-x-1 inline-block''
>>>>>>> merged-prs-20250907-203621
                      >
                        {item.label}
                      </Link>
                    </li>
<<<<<<< HEAD
=======
                  ))}
                </ul>
              </motion.div>
            ))}
            viewport={{ once: true }}

          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            viewport={{ once: true }}className='mt-16 pt-12 border-t border-gray-800/50';
          >;
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>;
            viewport={{ once: true }}className='mt-16 pt-12 border-t border-gray-800/50';
          >;
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>;
              {/* Social Links */}
              <div className='flex items-center space-x-6'>;
                <span className='text-gray-400 font-medium'>Follow Us:</span>;
                {socialLinks && socialLinks.map(social => (<motion&& motion.a;
                    key={social && social.label}
                    href={social && social.href}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110';
                    whileHover={{ y: -2 }}{/* Social Links */}
              {/* Social Links */}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 font-medium">Follow Us:</span>;
                {socialLinks && socialLinks.map((social) => (<motion&& motion.a;
                    key={social && social.label}
                    href={social && social.href}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110";
                    whileHover={{ y: -2 }}
                  <input;
                    type='email';
                    placeholder='Enter your email';
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
                  />;
                  <motion&& motion.button;
                    whileTap={{ scale: 0.95 }}
                  >;
                    <social.icon className='w-5 h-5' />;
                  </motion.a>;
                ))}
                  <motion&& motion.button
          </motion.div>

          {/* Social Links & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true}}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex-1 max-w-md">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.button
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
                  <input;
                    type='email';
                    placeholder='Enter your email';
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
            {/* Footer Sections */}
            {footer_sections.map ((section, index) => (
              <motion.div key={section.title} variants={item_variants}>;'
                <h4 className='text - lg font - semibold text - white mb - 6 flex items - center space - x-2'>;'
                  {section.title === 'Services' && ('
                    <Briefcase className='w - 5 h - 5 text - cyan - 400' />)}'
                  {section.title === 'Solutions' && ('
                    <Zap className='w - 5 h - 5 text - purple - 400' />)}'
                  {section.title === 'Company' && ('
                    <Users className='w - 5 h - 5 text - pink - 400' />)}'
                  {section.title === 'Resources' && ('
                    <BookOpen className='w - 5 h - 5 text - blue - 400' />)}
                  <span>{section.title}</span>;
                </h4>;'
                <ul className='space - y-3'>;
                  {section.items.map (item => (
                    <li key={item.label}>;
                      <Link;
<<<<<<< HEAD
                        href={item.href}'
=======
                        href={item.href}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        className='text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate - x-1 inline - block'                      >                  <span>{section.title}</span>;
                </h4>;
                <ul className="space-y-3">;
                  {section.items.map ((item) => (
                    <li key={item.label}>;
                      <Link;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        href={item.href}
                        className="text - gray - 300 hover:text - white transition - colors duration - 200 hover:translate-x-1 inline-block";
                      >;
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
                  <span>{section.title}</span>
                </h4>
                <ul className='space-y-3'>
                  {section.items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className='text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'
                      >
origin/cursor/automate-test-improve-and-merge-code-2533
                        {item.label}
<<<<<<< HEAD
            {/* Footer Sections */}
            {footerSections && footerSections.map((section, index) => (;
              <motion && motion.div key={section && section.title} variants={itemVariants}>;'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <h4 className='text-lg font-semibold text-white mb-6 flex items-center space-x-2'>;'
                  {section && section.title === 'Services' && (<Briefcase className='w-5 h-5 text-cyan-400' />;'
                  )}
                  {section && section.title === 'Solutions' && (<Zap className='w-5 h-5 text-purple-400' />;'
                  )}
                  {section && section.title === 'Company' && (<Users className='w-5 h-5 text-pink-400' />;'
                  )}
                  {section && section.title === 'Resources' && (<BookOpen className='w-5 h-5 text-blue-400' />;'
                  )}
                  <span>{section && section.title}</span>;
                </h4>;
                <ul className='space-y-3'>;'
                  {section && section.items.map(item => (<li key={item && item.label}>;
<<<<<<< HEAD
                      <Link;
                        href={item && item.href}
                        className='text-gray-300 "hover": text-white transition-colors duration-200 "hover":translate-x-1 inline-block'>                  <span>{section && section.titl,'
}</span>;
                </h4>;
                <ul className="space-y-3">;"
                  {section && section.items.map((item) => (<li key={item && item.label}>;
                      <Link;
                        href={item && item.href}
                        className="text-gray-300 "hover":text-white transition-colors duration-200 "hover":translate-x-1 inline-block">;"
=======
=======
                  <span    />{section && section.title}</span>;
                </h4>;
                <ul className='space-y-3'    />;
                  {section && section.items.map(item => (<li key={item && item.label}    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      <Link;
                        href={item && item.href}
                        className='text-gray-300 hover: text-white transition-colors duration-200 hover:translate-x-1 inline-block'    />                  <span    />{section && section.titl}
}</span>;
                </h4>;
                <ul className=\"space-y-3\"    />;
                  {section && section.items.map((item) => (<li key={item && item.label}    />;
                      <Link;
                        href={item && item.href}"
                        className=\"text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block\"    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        {item && item.label}
                      </Link>;
                    </li>;
>>>>>>> merged-prs-20250907-203621
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Newsletter */}
<<<<<<< HEAD
          <motion&& motion.div;
            initial={{ "opacity": 0, "y": 20 
}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0 && 0.6 }}

            viewport={{ "once": true }}

className='mt-16 pt-12 border-t border-gray-800/50''
          >
            <div className='flex flex-col "lg":flex-row items-center justify-between gap-8'>'

              {/* Social Links *
}
              <div className='flex items-center space-x-6'>;'
                <span className='text-gray-400 font-medium'>Follow "Us":</span>;'
                {socialLinks && socialLinks.map(social => { return (<motion&& motion.a; }
                    }
                    key={social && social.label}
                    href={social && social.href}

                    target='_blank''
                    rel='noopener noreferrer''
                    className='w-10 h-10 bg-gray-800/50 "hover": bg-gradient-to-r "hover":from-cyan-500 "hover":to-purple-500 rounded-xl flex items-center justify-center text-gray-300 "hover":text-white transition-all duration-200 "hover":scale-110''
                    whileHover={{ "y": -2 }}


                    whileTap={{ "scale": 0.95 
}
                  >;
                    <social.icon className='w-5 h-5' />;'
                  </motion.a>;
                ))}
              </div>
origin/cursor/automate-test-improve-and-merge-code-2533
              {/* Newsletter Signup */}
<div className='flex-1 max-w-md'>'
                <h5 className='text-lg font-semibold text-white mb-3'>'
                  Stay Updated
                </h5>
                <p className='text-gray-400 text-sm mb-4'>'
                  Get the latest insights on AI consciousness, quantum,
computing, and future technology.
                </p>
                <div className='flex space-x-2'>'
                  <input,
type='email''
                    placeholder='Enter your email''
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 "focus": outline-none "focus":ring-2 "focus":ring-purple-500 "focus":border-transparent'' />
                  <motion.button,
className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold "hover":from-purple-600 "hover":to-pink-600 transition-all duration-200''

                    whileHover={{ "scale": 1.05 }}
                    whileTap={{ "scale": 0.95 
}
                  >;
=======
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true}}
            className="mt-16 pt-12 border-t border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">Follow Us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex-1 max-w-md">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on AI consciousness, quantum computing, and future technology.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
=======
          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }
}
=======
<<<<<<< HEAD
          </motion && motion.div>;
          {/* Social Links & Newsletter */}
          <motion&& motion.div
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </motion && motion.div>;





          {/* Social Links & Newsletter */}
          <motion&& motion.div
<<<<<<< HEAD

          {/* Social Links & Newsletter */}
          <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}

<<<<<<< HEAD
className='mt-16 pt-12 border-t border-gray-800/50'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
<<<<<<< HEAD
              {/* Social Links */}'
              <div className='flex items-center space-x-6'>;'
                <span className='text-gray-400 font-medium'>Follow "Us":</span>;'
                {socialLinks && socialLinks.map(social => { return (<motion&& motion.a; }
                    }
=======
            viewport={{ once: true }}

className='mt-16 pt-12 border-t border-gray-800/50'
              />
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'    />

              {/* Social Links *}
}
              <div className='flex items-center space-x-6'    />;
                <span className='text-gray-400 font-medium'    />Follow Us:</span>;
                {socialLinks && socialLinks.map(social => (<motion&& motion.a;}
>>>>>>> origin/chore/fix-lint-and-merge
=======
              {/* Social Links */}
              <div className='flex items-center space-x-6'>;
                <span className='text-gray-400 font-medium'>Follow Us:</span>;
                {socialLinks && socialLinks.map(social => (;
                  <motion&& motion.a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    key={social && social.label}
                    href={social && social.href}

                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-gray-800/50 hover: bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110'
                    whileHover={{ y: -2 }}

<<<<<<< HEAD

                    whileTap={{ scale: 0.95 }
}
<<<<<<< HEAD

=======
                      />;
                    <social.icon className='w-5 h-5'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  </motion.a>;
                ))}
=======
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
              {/* Social Links */}
              <div className="flex items-center space-x-6">;
                <span className="text-gray-400 font-medium">Follow Us:</span>;
                {socialLinks && socialLinks.map((social) => (;
                  <motion&& motion.a
                    key={social && social.label}
                    href={social && social.href}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
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
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
                    <social.icon className='w-5 h-5' />                  </motion.a>

                  </motion.a>

                ))}
              </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              </div>
              {/* Newsletter Signup */}
<<<<<<< HEAD
<div className='flex-1 max-w-md'>
                  <motion&& motion.button;
              {/* Newsletter Signup */}'
              <div className='flex-1 max-w-md'>'
                <h5 className='text-lg font-semibold text-white mb-3'>
                  Stay Updated;
                </h5>'
                <p className='text-gray-400 text-sm mb-4'>
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.
<<<<<<< HEAD
                </p>'
=======

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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />;
                  <motion&& motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"


                </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className='flex space-x-2'>
                  <input'
                    type='email''
                    placeholder='Enter your email''
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                  <motion.button
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'
origin/cursor/automate-test-improve-and-merge-code-2533
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
=======
<div className='flex-1 max-w-md'    />
                <h5 className='text-lg font-semibold text-white mb-3'    />
                  Stay Updated;
                </h5>
                <p className='text-gray-400 text-sm mb-4'    />
                  Get the latest insights on AI consciousness, quantum;
computing, and future technology.
                </p>
                <div className='flex space-x-2'    />
                  <input;
type='email'
                    placeholder='Enter your email'
                    className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                     />
                  <motion.button;
className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }
}
                      />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    Subscribe;
                  </motion.button>;
                </div>;
          </motion.div>;
        </div>;
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }
}>;
                    Subscribe;
                  </motion && motion.button>;
                </div>;
          </motion && motion.div>;
        </div>;{/* Bottom Bar */}
        <motion&& motion.div;
                      </Link    />;
                    </li>))}
                </ul>;
              </motion.div>))}
          </motion.div>;
          {/* Social Links & Newsletter */}
          <motion.div;
<<<<<<< HEAD
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}'
            className='mt - 16 pt - 12 border - t border - gray - 800 / 50';
          >;'
            <div className='flex flex - col lg:flex - row items - center justify - between gap - 8'>;
              {/* Social Links */}'
              <div className='flex items - center space - x-6'>;'
                <span className='text - gray - 400 font - medium'>Follow Us:</span>;
                {social_links.map (social => (
                  <motion.a;
                    key={social.label}
                    href={social.href}'
                    target='_blank';'
                    rel='noopener noreferrer';'
                    className='w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110';
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className='w - 5 h - 5' />                  </motion.a>          >;
            <div className="flex flex - col lg:flex - row items - center justify-between gap-8">;
=======
            initial={{ opacity: 0, coordinate_y: 20 }
}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }
}
            className='mt - 16 pt - 12 border - t border - gray - 800 / 50'    />

            <div className='flex flex - col lg:flex - row items - center justify - between gap - 8'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              {/* Social Links */}
              <div className='flex items - center space - x-6'    />;
                <span className='text - gray - 400 font - medium'    />Follow Us:</span>;
                {social_links.map (social => (<motion.a;}
                    key={social.label}
                    href={social.href}
<<<<<<< HEAD
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration-200 hover:scale-110";
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    <social.icon className="w-5 h-5" />;
                  </motion.a>))}
              </div>;
              {/* Newsletter Signup */}'
              <div className='flex - 1 max - w-md'>;'
                <h5 className='text - lg font - semibold text - white mb - 3'>;
                  Stay Updated;
                </h5>;'
                <p className='text - gray - 400 text - sm mb - 4'>;
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;'
                <div className='flex space - x-2'>;
                  <input;'
                    type='email';'
                    placeholder='Enter your email';'
                    className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent';
                  />;
                  <motion.button;
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200';

<<<<<<< HEAD
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
=======
<<<<<<< HEAD
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}

                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200'                    whileHover={{ scale: 1.05 }}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true}}
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
                  <Rocket className="w-4 h-4 text-pink-400" />
=======
<<<<<<< HEAD
        {/* Bottom Bar */}
          viewport={{ once: true }}


                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200'                    while_hover={{ scale: 1.05 }}                </p>;
                <div className="flex space-x-2">;
                  <input;
                    type="email";
                    placeholder="Enter your email";
                    className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple-500 focus:border-transparent";
                  />;
                  <motion.button;
                    className="px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition-all duration-200";
                  <motion.button;'
                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200'                    while_hover={{ scale: 1.05 }}                </p>;"
                <div className="flex space - x-2">;
                  <input;"
                    type="email";"
                    placeholder="Enter your email";"
                    className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
                  />;
                  <motion.button;"
                    className="px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 200";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
=======
=======

                    whileHover={{ scale: 1 && 1.05 }}
<<<<<<< HEAD
whileHover={{ scale: 1 && 1.05 }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    whileTap={{ scale: 0 && 0.95 }}>;
                    Subscribe;
                  </motion && motion.button>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
<<<<<<< HEAD



=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Bottom Bar */}
        <motion&& motion.div
                      </Link>;
                    </li>))}
                </ul>;
              </motion.div>))}
          </motion.div>;
          {/* Social Links & Newsletter */}
          <motion.div;
<<<<<<< HEAD
            initial={{ "opacity": 0, "coordinate_y": 20 
}
            whileInView={{ "opacity": 1, "coordinate_y": 0 }}
            transition={{ "duration": 0.6 }}
            viewport={{ "once": true 
}
            className='mt - 16 pt - 12 border - t border - gray - 800 / 50'>'

            <div className='flex flex - col "lg":flex - row items - center justify - between gap - 8'>;'
              {/* Social Links */}
              <div className='flex items - center space - x-6'>;'
                <span className='text - gray - 400 font - medium'>Follow "Us":</span>;'
                {social_links.map (social => { return (<motion.a; }
                    }
                    key={social.label}
                    href={social.href}
                    target='_blank';'
                    rel='noopener noreferrer';'
                    className='w - 10 h - 10 bg - gray - 800 / 50 "hover":bg - gradient - to - r "hover":from - cyan - 500 "hover":to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 "hover":text - white transition - all duration - 200 "hover":scale - 110';'
                    while_hover={{ "coordinate_y": -2 }}
                    while_tap={{ "scale": 0.95 
}
                  >;
                    <social.icon className='w - 5 h - 5' />                  </motion.a>          >;'
            <div className="flex flex - col "lg":flex - row items - center justify-between gap-8">;"
              {/* Social Links */}
              <div className="flex items-center space-x-6">;"
                <span className="text - gray-400 font-medium">Follow "Us":</span>;"
                {social_links.map ((social) => (<motion.a;
                    }
                    key={social.label}
                    href={social.href}
                    target="_blank";"
                    rel="noopener noreferrer";"
                    className="w - 10 h - 10 bg - gray - 800 / 50 "hover":bg - gradient - to - r "hover":from - cyan - 500 "hover":to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 "hover":text - white transition - all duration-200 "hover":scale-110";"
                    while_hover={{ "coordinate_y": -2 }}
                    while_tap={{ "scale": 0.95 
}
                  >;
                    <social.icon className="w-5 h-5" />;"
                  </motion.a>))}
              </div>;
              {/* Newsletter Signup */}
              <div className='flex - 1 max - w-md'>;'
                <h5 className='text - lg font - semibold text - white mb - 3'>;'
                  Stay Updated;
                </h5>;
                <p className='text - gray - 400 text - sm mb - 4'>;'
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;
                <div className='flex space - x-2'>;'
                  <input;
                    type='email';'
                    placeholder='Enter your email';'
                    className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 "focus":outline - none "focus":ring - 2 "focus":ring - purple - 500 "focus":border - transparent';' />;
                  <motion.button;
                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold "hover": from - purple - 600 "hover":to - pink - 600 transition - all duration - 200'                    while_hover={{ "scale": 1.05 ,'
}                </p>;
                <div className="flex space-x-2">;"
                  <input;
                    type="email";"
                    placeholder="Enter your email";"
                    className="flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 "focus":outline - none "focus":ring - 2 "focus":ring - purple-500 "focus":border-transparent";" />;
                  <motion.button;
                    className="px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold "hover":from - purple - 600 "hover":to - pink - 600 transition-all duration-200";"
                    while_hover={{ "scale": 1.05 }}
                    while_tap={{ "scale": 0.95 
}
                  >;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    target='_blank';
                    rel='noopener noreferrer';
                    className='w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration - 200 hover:scale - 110';
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }
}
                      />;
                    <social.icon className='w - 5 h - 5'    />                  </motion.a>          >;"
            <div className=\"flex flex - col lg:flex - row items - center justify-between gap-8\"    />;
              {/* Social Links */}"
              <div className=\"flex items-center space-x-6\"    />;"
                <span className=\"text - gray-400 font-medium\"    />Follow Us:</span>;
                {social_links.map ((social) => (<motion.a;}
                    key={social.label}
                    href={social.href}"
                    target=\'_blank\';"
                    rel=\'noopener noreferrer\';"
                    className=\'w - 10 h - 10 bg - gray - 800 / 50 hover:bg - gradient - to - r hover:from - cyan - 500 hover:to - purple - 500 rounded - xl flex items - center justify - center text - gray - 300 hover:text - white transition - all duration-200 hover:scale-110\';
                    while_hover={{ coordinate_y: -2 }}
                    while_tap={{ scale: 0.95 }
}
                      />;"
                    <social.icon className=\"w-5 h-5\"    />;
                  </motion.a>))}
              </div>;
              {/* Newsletter Signup */}
              <div className='flex - 1 max - w-md'    />;
                <h5 className='text - lg font - semibold text - white mb - 3'    />;
                  Stay Updated;
                </h5>;
                <p className='text - gray - 400 text - sm mb - 4'    />;
                  Get the latest insights on AI consciousness, quantum;
                  computing, and future technology.;
                </p>;
                <div className='flex space - x-2'    />;
                  <input;
                    type='email';
                    placeholder='Enter your email';
                    className='flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent';
                     />;
                  <motion.button;
                    className='px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover: from - purple - 600 hover:to - pink - 600 transition - all duration - 200'                    while_hover={{ scale: 1.05 }
}                </p    />;"
                <div className=\"flex space-x-2\"    />;
                  <input;"
                    type=\'email\';"
                    placeholder=\'Enter your email\';"
                    className=\'flex - 1 px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple-500 focus:border-transparent\';
                     />;
                  <motion.button;"
                    className=\'px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - xl font - semibold hover:from - purple - 600 hover:to - pink - 600 transition-all duration-200\';
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }
}
                      />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    Subscribe;
                  </motion.button>;
                </div>;
          </motion.div>;
        </div>;
        {/* Bottom Bar */}
        <motion.div;
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
          viewport={{ "once": true 
}

className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl''
        >
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-6'>'
            <div className='flex flex-col "md":flex-row items-center justify-between gap-4'>'
              <div className='text-gray-400 text-sm'>'

          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'>;'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-6'>;'
            <div className='flex flex-col "md":flex-row items-center justify-between gap-4'>;'
              <div className='text-gray-400 text-sm'>;'
                <Link;
                  href='/privacy';'
                  className='"hover":text-white transition-colors duration-200 ml-2'>;'
                  Privacy Policy;

                </Link>{' '}'

                <Link,
href='/terms''
                  className='"hover": text-white transition-colors duration-200 ml-2''
=======
        {/* Bottom Bar */}
        <motion.div
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0 && 0.6 }}

<<<<<<< HEAD
className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-gray-400 text-sm'>
<<<<<<< HEAD
          viewport={{ once: true }}className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl';
        >;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>;
              <div className='text-gray-400 text-sm'>;
=======
                © 2024 Zion Tech Group. All rights reserved.
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>;
              <div className='text-gray-400 text-sm'>;
<<<<<<< HEAD
                <Link;
                  href='/privacy';
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Privacy Policy;
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true}}
=======
                © 2024 Zion Tech Group. All rights reserved. |;
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
=======

                  className='hover:text-white transition-colors duration-200 ml-2'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                >
                  Terms of Service
                </Link>
              </div>
<<<<<<< HEAD
              <div className='flex items-center space-x-4 text-gray-400 text-sm'>'
                <span>Powered by</span>
                <div className='flex items-center space-x-2'>'
                  <Brain className='w-4 h-4 text-cyan-400' />                  <span>AI Consciousness</span>'
                </div>
                <span>•</span>
                <div className='flex items-center space-x-2'>'
                  <Atom className='w-4 h-4 text-purple-400' />'
                  <span>Quantum Computing</span>
                </div>
                <span>•</span>
                <div className='flex items-center space-x-2'>'
                  <Rocket className='w-4 h-4 text-pink-400' />'
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
                </Link>{' '}
=======
                <div className="flex items-center space-x-2">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <Rocket className="w-4 h-4 text-pink-400" />
                <div className="flex items-center space-x-2">
                  <Rocket className="w-4 h-4 text-pink-400" />
              <div className='text-gray-400 text-sm'>;
                <Link'
                  href='/privacy''
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Privacy Policy;'
                </Link>{' '}"
                  <Rocket className="w-4 h-4 text-pink-400" />
                <Link
                  href='/terms'
                  className='hover:text-white transition-colors duration-200 ml-2'
                >
                  Terms of Service
=======
          viewport={{ once: true }
}

className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'
            />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'    />
              <div className='text-gray-400 text-sm'    />

          className='border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />;
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'    />;
              <div className='text-gray-400 text-sm'    />;
                <Link;
                  href='/privacy';
                  className='hover:text-white transition-colors duration-200 ml-2'    />;
                  Privacy Policy;

                </Link>{' '}

                <Link;
href='/terms'
                  className='hover: text-white transition-colors duration-200 ml-2'
                    />
                  Terms of Service;
>>>>>>> origin/chore/fix-lint-and-merge
                </Link>
              </div>
              <div className='flex items-center space-x-4 text-gray-400 text-sm'    />
                <span    />Powered by</span>
                <div className='flex items-center space-x-2'    />
                  <Brain className='w-4 h-4 text-cyan-400'    />                  <span    />AI Consciousness</span>
                </div>
                <span    />•</span>
                <div className='flex items-center space-x-2'    />
                  <Atom className='w-4 h-4 text-purple-400'    />
                  <span    />Quantum Computing</span>
                </div>
<<<<<<< HEAD
                <span>•</span>
                <div className='flex items-center space-x-2'>
                  <Rocket className='w-4 h-4 text-pink-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <span>Space Technology</span>
=======
                <span    />•</span>
                <div className='flex items-center space-x-2'    />
                  <Rocket className='w-4 h-4 text-pink-400'    />
                  <span    />Space Technology</span>
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
        </motion.div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </Link>{' '}<Rocket className="w-4 h-4 text-pink-400" />;
                <Link;
                  href='/terms';
                  className='hover:text-white transition-colors duration-200 ml-2';
                >;
                  Terms of Service;
                </Link>;
              </div>;
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
                  <Rocket className='w-4 h-4 text-pink-400' />;
                  <span>Space Technology</span>;
                </div>;
<<<<<<< HEAD
        </motion.div>;
      </div>;
=======
              </div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
=======

                |;
<<<<<<< HEAD
|;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link
                  href='/terms'

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className='hover:text-white transition-colors duration-200 ml-2'>;
                  Terms of Service;
                </Link>;
              </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
                  <Rocket className='w - 4 h - 4 text - pink - 400' />                  <span > Space Technology</span>                <div className="flex items-center space-x-2">;
                  <Rocket className="w - 4 h - 4 text-pink-400" />;
                  <span > Space Technology</span>;
                </div>;
<<<<<<< HEAD
=======
              </div>;
            </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;{/* Scroll to Top Button */}
      <motion.button;
        onClick={scrollToTop}
className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50';
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      {/* Scroll to Top Button */}
      <motion.button;
onClick={scrollToTo}
}
className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
export default UltraAdvancedFuturisticFooter2025;      </motion && motion.button>;
    </footer>;
  );
<<<<<<< HEAD
};
export default UltraAdvancedFuturisticFooter2025;
>>>>>>> merged-prs-20250907-203621
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3, delay: 1}}
      >
        <ArrowUp className='w-6 h-6 mx-auto' />
=======
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
<<<<<<< HEAD
        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}

=======

        className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-200 z-50'        whileHover={{ scale: 1.1, y: -2 }}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }
}
        initial={{ opacity: 0, scale: 0 }
}
        animate={{ opacity: 1, scale: 1 }
}
        transition={{ duration: 0.3, delay: 1 }}
<<<<<<< HEAD
      >
<<<<<<< HEAD
export default UltraAdvancedFuturisticFooter2025;      </motion.button>
=======
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
<<<<<<< HEAD
  );
};

=======
  )
}
export default UltraAdvancedFuturisticFooter2025;

=======
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </footer>
  );
};

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default UltraAdvancedFuturisticFooter2025;
origin/cursor/automate-test-improve-and-merge-code-2533
      >;
export default UltraAdvancedFuturisticFooter2025;      </motion.button>;
    </footer>;
  )}
export default UltraAdvancedFuturisticFooter2025;export default UltraAdvancedFuturisticFooter2025;
export default UltraAdvancedFuturisticFooter2025;
}
}export default UltraAdvancedFuturisticFooter2025;
        </motion.div>;
      </div>;
      {/* Scroll to Top Button */}
      <motion.button;
        on_click={scrollToTop}
        className='fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50'        while_hover={{ scale: 1.1, coordinate_y: -2 }}        className="fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration-200 z-50";
<<<<<<< HEAD
=======
        on_click={scrollToTop}
        className='fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 200 z - 50'        while_hover={{ scale: 1.1, coordinate_y: -2 }}        className="fixed bottom - 8 right - 8 w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white rounded - full shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration-200 z-50";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        while_hover={{ scale: 1.1, coordinate_y: -2 }}
        while_tap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >;
        <ArrowUp className='w - 6 h - 6 mx - auto' />;
      </motion.button>;
    </footer>)}export default UltraAdvancedFuturisticFooter2025;      </motion.button>;
    </footer>)}export default UltraAdvancedFuturisticFooter2025;<ArrowUp className='w-6 h-6 mx-auto' />;
      </motion.button>;
    </footer>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;      </motion.button>;
    </footer>);
}
;
export default UltraAdvancedFuturisticFooter2025;
;
  )}export default UltraAdvancedFuturisticFooter2025;
<<<<<<< HEAD
=======


        whileHover={{ "scale": 1.1, "y": -2 }}
        whileTap={{ "scale": 0.9 
}
        initial={{ "opacity": 0, "scale": 0 
}
        animate={{ "opacity": 1, "scale": 1 
}
        transition={{ "duration": 0.3, "delay": 1 }}

      >
        <ArrowUp className = $2;
export default UltraAdvancedFuturisticFooter2025,

"
<ArrowUp className='w-6 h-6 mx-auto' />
=======

          />

<ArrowUp className='w-6 h-6 mx-auto'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
      </motion.button>
    </footer>
  );
}
export default UltraAdvancedFuturisticFooter2025;      </motion.button>
    </footer>
  )
<<<<<<< HEAD
}
export default UltraAdvancedFuturisticFooter2025;

"
=======
};
<<<<<<< HEAD
export default UltraAdvancedFuturisticFooter2025;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Scroll to Top Button */}
      <motion.button,
onClick={scrollToTo
}
className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl "hover":shadow-purple-500/25 transition-all duration-200 z-50''

<<<<<<< HEAD
        whileHover={{ "scale": 1.1, "y": -2 }}
        whileTap={{ "scale": 0.9 
}
        initial={{ "opacity": 0, "scale": 0 
}
        animate={{ "opacity": 1, "scale": 1 
}
        transition={{ "duration": 0.3, "delay": 1 }}

      >
        <ArrowUp className = $2;
export default UltraAdvancedFuturisticFooter2025,

=======
=======
<<<<<<< HEAD


export default UltraAdvancedFuturisticFooter2025;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default UltraAdvancedFuturisticFooter2025;
export default UltraAdvancedFuturisticFooter2025;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
