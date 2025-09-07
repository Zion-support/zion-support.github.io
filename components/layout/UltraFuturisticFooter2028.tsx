<<<<<<< HEAD


<<<<<<< HEAD
import React from 'react';'
import Link from 'next/link';'

=======
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Shield, Users, Briefcase, BookOpen, MessageCircle, 
  Star, TrendingUp, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car, 
<<<<<<< HEAD
  GraduationCap, Scale, Building, Factory, Camera,
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets,
  Code
} from 'lucide-react',

const contactInfo = $2;
=======
  GraduationCap, Scale, Building, Factory, Camera;
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;
  Code
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
>>>>>>> merged-prs-20250907-203621
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform' }
    ]
  };
  {
    title: '🏙️ Smart City & Infrastructure',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' }
    ]
<<<<<<< HEAD
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: [
=======
  };
import Link from 'next / link';
import {
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from 'react';
import Link from 'next/link';

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Phone, Mail, MapPin, Globe, Rocket, Brain, Atom;
  Shield, Users, Briefcase, BookOpen, MessageCircle;
  Star, TrendingUp, Target, Layers, Cpu, Database;
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car;
  GraduationCap, Scale, Building, Factory, Camera;
<<<<<<< HEAD
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;
  Code;
  } from 'lucide-react';'

const contactInfo = null;
<<<<<<< HEAD
    "services": [;
      {"name": 'AI Climate Prediction Platform';'
        }
        "href": '/ai-climate-prediction-platform';'
      }
      {"name": 'Quantum Cybersecurity Firewall';'
        }
        "href": '/quantum-cybersecurity-firewall';'
      }
      {"name": 'Autonomous Drone Delivery Network';'
        }
        "href": '/autonomous-drone-delivery-network';'
      }
=======
import {
  Phone
  Mail
  MapPin
  Globe
  Rocket
  Brain
  Atom
  Shield
  Users
  Briefcase
  BookOpen
  MessageCircle
  Star
  TrendingUp
  Target
  Layers
  Cpu
  Database
  Cloud
  Lock
  ShieldCheck
  Heart
  Leaf
  Car
  GraduationCap
  Scale
  Building
  Factory
  Camera
  Video
  Music
  Gamepad2
  Sun
  Moon
  Wind
  Droplets
  Code;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom
  Shield, Users, Briefcase, BookOpen, MessageCircle
  Star, TrendingUp, Target, Layers, Cpu, Database
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car
import React from 'react';
import Link from 'next/link';
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
import React from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  Rocket,;
  Brain,;
  Atom,;
  Shield,;
  Users,;
  Briefcase,;
  BookOpen,;
  MessageCircle,;
  Star,;
  TrendingUp,;
  Target,;
  Layers,;
  Cpu,;
  Database,;
  Cloud,;
  Lock,;
  ShieldCheck,;
  Heart,;
  Leaf,;
  Car,;
  GraduationCap,;
  Scale,;
  Building,;
  Factory,;
  Camera,;
  Video,;
  Music,;
  Gamepad2,;
  Sun,;
  Moon,;
  Wind,;
  Droplets,;
  Code,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, ;
  Shield, Users, Briefcase, BookOpen, MessageCircle, ;
  Star, TrendingUp, Target, Layers, Cpu, Database, ;
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car, ;
  GraduationCap, Scale, Building, Factory, Camera;
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;
  Code;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Shield, Users, Briefcase, BookOpen, MessageCircle, 
  Star, TrendingUp, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car, 
  GraduationCap, Scale, Building, Factory, Camera,
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets,
  Code
<<<<<<< HEAD
} from 'lucide-react',
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const contactInfo = $2;
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const serviceCategories = $2;
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform' }
    ]
  },
=======
} from 'lucide-react';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const serviceCategories = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {
    title: '🏙️ Smart City & Infrastructure',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' }
    ]
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    services: [
      {
        name: 'AI Climate Prediction Platform'
        href: '/ai-climate-prediction-platform'
      }
      {
        name: 'Quantum Cybersecurity Firewall'
        href: '/quantum-cybersecurity-firewall'
      }
      {
        name: 'Autonomous Drone Delivery Network'
        href: '/autonomous-drone-delivery-network'
      }
      {
<<<<<<< HEAD
        }
        "name": 'Autonomous Manufacturing AI','
        "href": '/autonomous-manufacturing-ai','
      }
    ]
  },
  {
    }
    "title": '⚛️ Quantum & Advanced Tech','
    "services": [
      {
        }
        "name": 'Quantum Financial Trading Platform','
        "href": '/quantum-financial-trading-platform','
      },
      {
        }
        "name": 'Quantum Machine Learning Platform','
        "href": '/quantum-machine-learning-platform','
      },
      {
        }
        "name": 'Quantum Internet Security Gateway','
        "href": '/quantum-internet-security-gateway','
      },
        { "name": 'Quantum Internet Protocol', "href": '/quantum-internet-protocol','
}

    ]
  },
  {
    }
    "title": '🤖 AI & Machine Learning','
    "services": [
      {
        }
        "name": 'AI Customer Service Automation','
        "href": '/ai-customer-service-automation','
      },
        { "name": 'AI Education Platform', "href": '/ai-education-platform','
},

        { "name": 'AI Content Creation Suite', "href": '/ai-content-creation-suite','
},

      {
        }
        "name": 'AI Legal Research Platform','
        "href": '/ai-legal-research-platform','
      }
    ]
  }
];

const companyLinks = [;
  { "name": 'About Us', "href": '/about', "icon": Users,'
},
  { "name": 'Case Studies', "href": '/case-studies', "icon": Briefcase,'
},
  { "name": 'Blog & Resources', "href": '/blog', "icon": BookOpen,'
},
  { "name": 'Careers', "href": '/careers', "icon": TrendingUp,'
},
  { "name": 'Contact', "href": '/contact', "icon": MessageCircle,'
},
{ "name": 'Support', "href": '/support', "icon": ShieldCheck,'
}
];

const resourceLinks = [;
  { "name": 'Documentation', "href": '/docs', "icon": BookOpen,'
},
  { "name": 'API Reference', "href": '/api', "icon": Cpu,'
},
  { "name": 'Developer Tools', "href": '/dev-tools', "icon": Database,'
},
  { "name": 'Mobile Apps', "href": '/mobile', "icon": Globe,'
},
  { "name": 'Cloud Services', "href": '/cloud', "icon": Cloud,'
},
{ "name": 'Security Center', "href": '/security', "icon": Shield,'
}
];

const socialLinks = [;
  {
    }
    "name": 'LinkedIn','
    "href": '"https"://linkedin.com/company/ziontechgroup','
    "icon": Users
  },
  {
    }
    "name": 'Twitter','
    "href": '"https"://twitter.com/ziontechgroup','
    "icon": MessageCircle
  },
  { "name": 'YouTube', "href": '"https"://youtube.com/@ziontechgroup', "icon": Video,'
},
  { "name": 'GitHub', "href": '"https"://github.com/ziontechgroup', "icon": Code,'
}
];
export default function UltraFuturisticFooter2028() {
}
return (;
<footer className = 'bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>'
export default function UltraFuturisticFooter2028() {
 ;
}
return (;
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>;'
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-16'>;'
        <div className='grid grid-cols-1 "lg":grid-cols-4 gap-12'>;'
          {/* Company Info */}

          <div className='"lg":col-span-1'>'
            <div className='flex items-center space-x-3 mb-6'>'
              <div className='relative'>'
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>'
                  <Rocket className='w-6 h-6 text-white' />'
=======
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous-manufacturing-ai',
      },
    ],
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: [
>>>>>>> merged-prs-20250907-203621
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' }
<<<<<<< HEAD
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform' }
    ]
  }
],

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users},
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase},
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen},
  { name: 'Careers', href: '/careers', icon: TrendingUp},
  { name: 'Contact', href: '/contact', icon: MessageCircle},
  { name: 'Support', href: '/support', icon: ShieldCheck}
],

=======
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform' }
=======
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;}
  Code;}
  } from 'lucide-react';

const contactInfo = null;
    services: [;
      {name: 'AI Climate Prediction Platform';}
        href: '/ai-climate-prediction-platform';}
      }
      {name: 'Quantum Cybersecurity Firewall';}
        href: '/quantum-cybersecurity-firewall';}
      }
      {name: 'Autonomous Drone Delivery Network';}
        href: '/autonomous-drone-delivery-network';}
      }

      {
        name: 'Autonomous Manufacturing AI'}
  href: '/autonomous-manufacturing-ai'}
      }
    ]
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
  services: [
      {
        name: 'Quantum Financial Trading Platform'}
  href: '/quantum-financial-trading-platform'}
      },
      {
        name: 'Quantum Machine Learning Platform'}
  href: '/quantum-machine-learning-platform'}
      },
      {
        name: 'Quantum Internet Security Gateway'}
  href: '/quantum-internet-security-gateway'}
      },
        { name: 'Quantum Internet Protocol'}
  href: '/quantum-internet-protocol'}
}

    ]
  },
  {
    title: '🤖 AI & Machine Learning',
  services: [
      {
        name: 'AI Customer Service Automation'}
  href: '/ai-customer-service-automation'}
      },
        { name: 'AI Education Platform'}
  href: '/ai-education-platform'}
},

        { name: 'AI Content Creation Suite'}
  href: '/ai-content-creation-suite'}
},

      {
        name: 'AI Legal Research Platform'}
  href: '/ai-legal-research-platform'}
      }
>>>>>>> origin/chore/fix-lint-and-merge
    ]
  }
];];const socialLinks = [;
  {name: 'LinkedIn',href: 'https://linkedin && linkedin.com/company/ziontechgroup',icon: Users,},{name: 'Twitter',href: 'https://twitter && twitter.com/ziontechgroup',icon: MessageCircle,},{ name: 'YouTube', href: 'https://youtube && youtube.com/@ziontechgroup', icon: Video },{ name: 'GitHub', href: 'https://github && github.com/ziontechgroup', icon: Code },];export default function UltraFuturisticFooter2028() {import React from 'react';
import { Phone, Mail, MapPin, Globe, Rocket, Brain, Atom;
  Shield, Users, Briefcase, BookOpen, MessageCircle;
  Star, TrendingUp, Target, Layers, Cpu, Database;
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car;
=======
  };
<<<<<<< HEAD
import Link from 'next / link';
import {
import React from 'react';
import Link from 'next/link';

import {
  Phone
  Mail
  MapPin
  Globe
  Rocket
  Brain
  Atom
  Shield
  Users
  Briefcase
  BookOpen
  MessageCircle
  Star
  TrendingUp
  Target
  Layers
  Cpu
  Database
  Cloud
  Lock
  ShieldCheck
  Heart
  Leaf
  Car
  GraduationCap
  Scale
  Building
  Factory
  Camera
  Video
  Music
  Gamepad2
  Sun
  Moon
  Wind
  Droplets
  Code;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom
  Shield, Users, Briefcase, BookOpen, MessageCircle
  Star, TrendingUp, Target, Layers, Cpu, Database
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car
=======
=======
import Link from 'next / link';
import {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Phone,
  Mail,
  MapPin,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Target,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Heart,
  Leaf,
  Car,
  GraduationCap,
  Scale,
  Building,
  Factory,
  Camera,
  Video,
  Music,
  Gamepad2,
  Sun,
  Moon,
  Wind,
<<<<<<< HEAD
=======
  Droplets,
  Code,} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom,
  Shield, Users, Briefcase, BookOpen, MessageCircle,
  Star, TrendingUp, Target, Layers, Cpu, Database,
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  GraduationCap, Scale, Building, Factory, Camera;
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;
  Code;
  } from 'lucide-react';
const contactInfo = null;
    services: [;
<<<<<<< HEAD
      {name: 'AI Climate Prediction Platform';
        href: '/ai-climate-prediction-platform';
      }
      {name: 'Quantum Cybersecurity Firewall';
        href: '/quantum-cybersecurity-firewall';
      }
      {name: 'Autonomous Drone Delivery Network';
        href: '/autonomous-drone-delivery-network';
      }
];
],
=======
      {
        name: 'AI Climate Prediction Platform',
        href: '/ai - climate - prediction - platform',
      },
      {
        name: 'Quantum Cybersecurity Firewall',
        href: '/quantum - cybersecurity - firewall',
      },
      {
        name: 'Autonomous Drone Delivery Network',
        href: '/autonomous - drone - delivery - network',
      },
      {
        name: 'AI Healthcare Diagnosis Platform',
        href: '/ai - healthcare - diagnosis - platform',
      },
    ],
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    services: [;
      {
        name: 'Smart City Infrastructure Management',
        href: '/smart - city - infrastructure - management',
      },
      {
        name: 'IoT Energy Management System',
        href: '/iot - energy - management - system',
      },
      {
        name: 'Digital Twin Manufacturing Platform',
        href: '/digital - twin - manufacturing - platform',
      },
      {
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous - manufacturing - ai',
      },
    ],
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: [;
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum - financial - trading - platform',
      },
      {
        name: 'Quantum Machine Learning Platform',
        href: '/quantum - machine - learning - platform',
      },
      {
        name: 'Quantum Internet Security Gateway',
        href: '/quantum - internet - security - gateway',
      },
      { name: 'Quantum Internet Protocol', href: '/quantum - internet - protocol' },
    ],
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [;
      {
        name: 'AI Customer Service Automation',
        href: '/ai - customer - service - automation',
      },
      { name: 'AI Education Platform', href: '/ai - education - platform' },
      { name: 'AI Content Creation Suite', href: '/ai - content - creation - suite' },
      {
        name: 'AI Legal Research Platform',
        href: '/ai - legal - research - platform',
      },
    ],
  }, ];  {
    title: '🏙️ Smart City & Infrastructure',
    services: [;
      { name: 'Smart City Infrastructure Management', href: '/smart - city - infrastructure - management' },
      { name: 'IoT Energy Management System', href: '/iot - energy - management - system' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital - twin - manufacturing - platform' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous - manufacturing - ai' }
    ];
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {
    title: '⚛️ Quantum & Advanced Tech',
    services: [;
      { name: 'Quantum Financial Trading Platform', href: '/quantum - financial - trading - platform' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum - machine - learning - platform' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum - internet - security - gateway' },
      { name: 'Quantum Internet Protocol', href: '/quantum - internet - protocol' }
    ];
  }
  {
    title: '🤖 AI & Machine Learning',
    services: [;
      { name: 'AI Customer Service Automation', href: '/ai - customer - service - automation' },
      { name: 'AI Education Platform', href: '/ai - education - platform' },
      { name: 'AI Content Creation Suite', href: '/ai - content - creation - suite' },
      { name: 'AI Legal Research Platform', href: '/ai - legal - research - platform' }
    ];
  }
];
<<<<<<< HEAD
;
const company_links = [;

;
const company_links = [;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const companyLinks = [
<<<<<<< HEAD
  { name: 'About Us', href: '/about', icon: Users},
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase},
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen},
  { name: 'Careers', href: '/careers', icon: TrendingUp},
  { name: 'Contact', href: '/contact', icon: MessageCircle},
  { name: 'Support', href: '/support', icon: ShieldCheck}
],

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen},
  { name: 'API Reference', href: '/api', icon: Cpu},
  { name: 'Developer Tools', href: '/dev-tools', icon: Database},
  { name: 'Mobile Apps', href: '/mobile', icon: Globe},
  { name: 'Cloud Services', href: '/cloud', icon: Cloud},
  { name: 'Security Center', href: '/security', icon: Shield}
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Users},
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageCircle},
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video},
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code}
],
<<<<<<< HEAD

export default function UltraFuturisticFooter2028() {
=======

export default function UltraFuturisticFooter2028() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: TrendingUp },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { name: 'Support', href: '/support', icon: ShieldCheck }, ];  { name: 'Support', href: '/support', icon: ShieldCheck }
];
;
const resource_links = [;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Cpu },
  { name: 'Developer Tools', href: '/dev - tools', icon: Database },
  { name: 'Mobile Apps', href: '/mobile', icon: Globe },
  { name: 'Cloud Services', href: '/cloud', icon: Cloud },
<<<<<<< HEAD
const resourceLinks = [;
  { name: 'Documentation', href: '/docs', icon: BookOpen },;
  { name: 'API Reference', href: '/api', icon: Cpu },;
  { name: 'Developer Tools', href: '/dev-tools', icon: Database },;
  { name: 'Mobile Apps', href: '/mobile', icon: Globe },;
  { name: 'Cloud Services', href: '/cloud', icon: Cloud },;
  { name: 'Security Center', href: '/security', icon: Shield },;
];

const socialLinks = [;
  {;
    name: 'LinkedIn',;
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
    icon: Users,;
  },;
  {;
    name: 'Twitter',;
    href: 'https://twitter && twitter.com/ziontechgroup',;
    icon: MessageCircle,;
  },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/@ziontechgroup', icon: Video },;
  { name: 'GitHub', href: 'https://github && github.com/ziontechgroup', icon: Code },];

export default function UltraFuturisticFooter2028() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<<<<<<< HEAD
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-purple-300">2028 Future Technology</p>
              </div>
            </div>
            
            <p className="text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
=======
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16' />;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12' />;
          {/* Company Info */}

<<<<<<< HEAD
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>
          <div className='lg:col-span-1' />
            <div className='flex items-center space-x-3 mb-6' />
              <div className='relative' />
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center' />
                  <Rocket className='w-6 h-6 text-white' />
          {/* Company Info */}

          <div className='lg:col-span-1>
            <div className=flex items-center space-x-3 mb-6'>
              <div className='relative>
                <div className=w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>
          <div className='lg:col-span-1 />
            <div className=flex items-center space-x-3 mb-6' />
              <div className='relative />
                <div className=w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center' />
                  <Rocket className='w-6 h-6 text-white />
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10'></div>'
              </div>
              <div>
                <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>'
                  Zion Tech Group
                </h3>
                <p className='text-sm text-purple-300'>'
                  2028 Future Technology
                </p>
              </div>
<<<<<<< HEAD
            <p className='text-purple-200 mb-6 leading-relaxed'>'
              Leading the future with cutting-edge AI, quantum computing, and,
innovative technology solutions. Transforming businesses through,
intelligent automation and next-generation infrastructure.
            </p>
=======
            </div>
            
            <p className=text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
=======
  { name: 'About Us'}
  href: '/about', icon: Users}
},
  { name: 'Case Studies'}
  href: '/case-studies', icon: Briefcase}
},
  { name: 'Blog & Resources'}
  href: '/blog', icon: BookOpen}
},
  { name: 'Careers'}
  href: '/careers', icon: TrendingUp}
},
  { name: 'Contact'}
  href: '/contact', icon: MessageCircle}
},
{ name: 'Support'}
  href: '/support', icon: ShieldCheck}
}
];
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const resourceLinks = [
  { name: 'Documentation'}
  href: '/docs', icon: BookOpen}
},
  { name: 'API Reference'}
  href: '/api', icon: Cpu}
},
  { name: 'Developer Tools'}
  href: '/dev-tools', icon: Database}
},
  { name: 'Mobile Apps'}
  href: '/mobile', icon: Globe}
},
  { name: 'Cloud Services'}
  href: '/cloud', icon: Cloud}
},
{ name: 'Security Center'}
  href: '/security', icon: Shield}
}
];

const socialLinks = [
  {
    name: 'LinkedIn',
  href: 'https://linkedin.com/company/ziontechgroup'}
    icon: Users}
  },
  {
    name: 'Twitter',
  href: 'https://twitter.com/ziontechgroup'}
    icon: MessageCircle}
  },
  { name: 'YouTube'}
  href: 'https://youtube.com/@ziontechgroup', icon: Video}
},
  { name: 'GitHub'}
  href: 'https://github.com/ziontechgroup', icon: Code}
}
=======
  { name: 'Security Center', href: '/security', icon: Shield }
];
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  { name: 'Security Center', href: '/security', icon: Shield }
];


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const companyLinks = [;
  { name: 'About Us', href: '/about', icon: Users },;
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },;
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },;
  { name: 'Careers', href: '/careers', icon: TrendingUp },;
  { name: 'Contact', href: '/contact', icon: MessageCircle },;
  { name: 'Support', href: '/support', icon: ShieldCheck },];  { name: 'Support', href: '/support', icon: ShieldCheck }
];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const resourceLinks = [;
  { name: 'Documentation', href: '/docs', icon: BookOpen },;
  { name: 'API Reference', href: '/api', icon: Cpu },;
  { name: 'Developer Tools', href: '/dev-tools', icon: Database },;
  { name: 'Mobile Apps', href: '/mobile', icon: Globe },;
  { name: 'Cloud Services', href: '/cloud', icon: Cloud },;
  { name: 'Security Center', href: '/security', icon: Shield },;
];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const socialLinks = [;
  {;
    name: 'LinkedIn',;
    href: 'https://linkedin && linkedin.com/company/ziontechgroup',;
    icon: Users,;
  },;
  {;
    name: 'Twitter',;
    href: 'https://twitter && twitter.com/ziontechgroup',;
    icon: MessageCircle,;
  },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/@ziontechgroup', icon: Video },;
  { name: 'GitHub', href: 'https://github && github.com/ziontechgroup', icon: Code },];
<<<<<<< HEAD
export default function UltraFuturisticFooter2028() {;
  return (
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>];
const socialLinks = [;
  { name: 'LinkedIn', href: 'https://linkedin && linkedin.com/company/ziontechgroup', icon: Users },;
  { name: 'Twitter', href: 'https://twitter && twitter.com/ziontechgroup', icon: MessageCircle },;
  { name: 'YouTube', href: 'https://youtube && youtube.com/@ziontechgroup', icon: Video },;
  { name: 'GitHub', href: 'https://github && github.com/ziontechgroup', icon: Code }
];
export default function UltraFuturisticFooter2028() {;
  return (
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>;
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
          {/* Company Info */}
          <div className='lg:col-span-1'>;
            <div className='flex items-center space-x-3 mb-6'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10'></div>;
              </div>;
              <div>;
                <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h3>;
                <p className='text-sm text-purple-300'>;
;
const social_links = [;
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com / company / ziontechgroup',
    icon: Users,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com / ziontechgroup',
    icon: MessageCircle,
  },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video },
  { name: 'GitHub', href: 'https://github.com / ziontechgroup', icon: Code }, ];
;
export default /**
 * UltraFuturisticFooter2028 - Function description
 */
function UltraFuturisticFooter2028() {
  return (
    <footer className='bg - black / 95 backdrop - blur - xl border - t border - purple - 500 / 30'>];
;
const social_links = [;
  { name: 'LinkedIn', href: 'https://linkedin.com / company / ziontechgroup', icon: Users },
  { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: MessageCircle },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video },
  { name: 'GitHub', href: 'https://github.com / ziontechgroup', icon: Code }
];
;
export default /**
 * UltraFuturisticFooter2028 - Function description
 */
function UltraFuturisticFooter2028() {
  return (
    <footer className='bg - black / 95 backdrop - blur - xl border - t border - purple - 500 / 30'>;
      {/* Main Footer Content */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        <div className='grid grid - cols - 1 lg:grid - cols - 4 gap - 12'>;
          {/* Company Info */}
          <div className='lg:col - span - 1'>;
            <div className='flex items - center space - x-3 mb - 6'>;
              <div className='relative'>;
                <div className='w - 12 h - 12 bg - gradient - to - br from - purple - 500 to - blue - 600 rounded - xl flex items - center justify - center'>;
                  <Rocket className='w - 6 h - 6 text - white' />;
                </div>;
                <div className='absolute -inset - 1 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - xl blur opacity - 75 -z - 10'></div>;
              </div>;
              <div>;
                <h3 className='text - xl font - bold bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </h3>;
                <p className='text - sm text - purple - 300'>;
                  2028 Future Technology;
                </p>;
              </div>;
            </div>;

const _serviceCategories = [
  {_title: '🚀 2028 Futuristic Innovations', _services: [
      { name: 'AI Climate Prediction Platform', _href: '/ai-climate-prediction-platform'},
      {_name: 'Quantum Cybersecurity Firewall', _href: '/quantum-cybersecurity-firewall'},
      {_name: 'Autonomous Drone Delivery Network', _href: '/autonomous-drone-delivery-network'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _services: [
      { name: 'Smart City Infrastructure Management', _href: '/smart-city-infrastructure-management'},
      {_name: 'IoT Energy Management System', _href: '/iot-energy-management-system'},
      {_name: 'Digital Twin Manufacturing Platform', _href: '/digital-twin-manufacturing-platform'},
      {_name: 'Autonomous Manufacturing AI', _href: '/autonomous-manufacturing-ai'}
    ]
  },
  {_title: '⚛️ Quantum & Advanced Tech', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform'},
      {_name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Internet Protocol', _href: '/quantum-internet-protocol'}
    ]
  },
  {_title: '🤖 AI & Machine Learning', _services: [
      { name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite'},
      {_name: 'AI Legal Research Platform', _href: '/ai-legal-research-platform'}
    ]
  }
],

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: TrendingUp },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: ShieldCheck }
],

const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen },
  { name: 'API Reference', href: '/api', icon: Cpu },
  { name: 'Developer Tools', href: '/dev-tools', icon: Database },
  { name: 'Mobile Apps', href: '/mobile', icon: Globe },
  { name: 'Cloud Services', href: '/cloud', icon: Cloud },
  { name: 'Security Center', href: '/security', icon: Shield }
],

const socialLinks = [

  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Users },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageCircle },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code }
];
export default function UltraFuturisticFooter2028() {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
  Droplets,;
  Code,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Shield, Users, Briefcase, BookOpen, MessageCircle, 
  Star, TrendingUp, Target, Layers, Cpu, Database, 
  Cloud, Lock, ShieldCheck, Heart, Leaf, Car, ;
  GraduationCap, Scale, Building, Factory, Camera;
  Video, Music, Gamepad2, Sun, Moon, Wind, Droplets;
  Code
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations'
    services: [
      {
        name: 'AI Climate Prediction Platform'
        href: '/ai-climate-prediction-platform'
      }
      {
        name: 'Quantum Cybersecurity Firewall'
        href: '/quantum-cybersecurity-firewall'
      }
      {
        name: 'Autonomous Drone Delivery Network'
        href: '/autonomous-drone-delivery-network'
      }
      {
        name: 'AI Healthcare Diagnosis Platform'
        href: '/ai-healthcare-diagnosis-platform'
      }
    ]
  }
  {
    title: '🏙️ Smart City & Infrastructure'
    services: [
      {
        name: 'Smart City Infrastructure Management'
        href: '/smart-city-infrastructure-management'
      }
      {
        name: 'IoT Energy Management System'
        href: '/iot-energy-management-system'
      }
      {
        name: 'Digital Twin Manufacturing Platform'
        href: '/digital-twin-manufacturing-platform'
      }
      {
        name: 'Autonomous Manufacturing AI'
        href: '/autonomous-manufacturing-ai'
      }
    ]
  }
  {
    title: '⚛️ Quantum & Advanced Tech'
    services: [
      {
        name: 'Quantum Financial Trading Platform'
        href: '/quantum-financial-trading-platform'
      }
      {
        name: 'Quantum Machine Learning Platform'
        href: '/quantum-machine-learning-platform'
      }
      {
        name: 'Quantum Internet Security Gateway'
        href: '/quantum-internet-security-gateway'
      }
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' }
    ]
  }
  {
    title: '🤖 AI & Machine Learning'
    services: [
      {
        name: 'AI Customer Service Automation'
        href: '/ai-customer-service-automation'
      }
      { name: 'AI Education Platform', href: '/ai-education-platform' }
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' }
      {
        name: 'AI Legal Research Platform'
        href: '/ai-legal-research-platform'
      }
    ]
  },];  {
    title: '🏙️ Smart City & Infrastructure'
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management' }
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system' }
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform' }
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai' }
    ]
  }
  {
    title: '⚛️ Quantum & Advanced Tech'
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform' }
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform' }
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway' }
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' }
    ]
  }
  {
    title: '🤖 AI & Machine Learning'
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation' }
      { name: 'AI Education Platform', href: '/ai-education-platform' }
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' }
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform' }
    ]
  }
];
const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users }
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase }
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen }
  { name: 'Careers', href: '/careers', icon: TrendingUp }
  { name: 'Contact', href: '/contact', icon: MessageCircle }
  { name: 'Support', href: '/support', icon: ShieldCheck },];  { name: 'Support', href: '/support', icon: ShieldCheck }
];
const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: BookOpen }
  { name: 'API Reference', href: '/api', icon: Cpu }
  { name: 'Developer Tools', href: '/dev-tools', icon: Database }
  { name: 'Mobile Apps', href: '/mobile', icon: Globe }
  { name: 'Cloud Services', href: '/cloud', icon: Cloud }
  { name: 'Security Center', href: '/security', icon: Shield }
];
const socialLinks = [
  {
    name: 'LinkedIn'
    href: 'https://linkedin.com/company/ziontechgroup'
    icon: Users
  }
  {
    name: 'Twitter'
    href: 'https://twitter.com/ziontechgroup'
    icon: MessageCircle
  }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video }
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code },];
export default function UltraFuturisticFooter2028() {
  return (;
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Users }
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageCircle }
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video }
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
];

export default function UltraFuturisticFooter2028() {
  return (
<<<<<<< HEAD
<footer className = 'bg-black/95 backdrop-blur-xl border-t border-purple-500/30'    />
export default function UltraFuturisticFooter2028() {
 ;
  return (}
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'    />;}
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'    />;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'    />;
          {/* Company Info */}

          <div className='lg:col-span-1'    />
            <div className='flex items-center space-x-3 mb-6'    />
              <div className='relative'    />
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'    />
                  <Rocket className='w-6 h-6 text-white'    />
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10'    /></div>
              </div>
              <div    />
                <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />
                  Zion Tech Group;
                </h3>
                <p className='text-sm text-purple-300'    />
                  2028 Future Technology;
                </p>
              </div>
            </div>
            <p className='text-purple-200 mb-6 leading-relaxed'    />
              Leading the future with cutting-edge AI, quantum computing, and;
innovative technology solutions. Transforming businesses through;
intelligent automation and next-generation infrastructure.
>>>>>>> origin/chore/fix-lint-and-merge
            </p>
            {/* Contact Information */}
<<<<<<< HEAD
            <div className='space-y-3'>'
              <div className='flex items-center space-x-3 text-purple-200'>'
                <Phone className='w-4 h-4 text-purple-400' />'
                <span className='text-sm'>{contactInfo.mobile}</span>'
=======
<<<<<<< HEAD
            <div className="space-y-3>
              <div className=flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400 />
                <span className=text-sm">{contactInfo.mobile}</span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>
              <div className='flex items-center space-x-3 text-purple-200'>'
                <Mail className='w-4 h-4 text-purple-400' />'
                <span className='text-sm'>{contactInfo.email}</span>'
              </div>
              <div className='flex items-center space-x-3 text-purple-200'>'
                <MapPin className='w-4 h-4 text-purple-400' />'
                <span className='text-sm'>{contactInfo.address}</span>'
              </div>
<<<<<<< HEAD
              <div className='flex items-center space-x-3 text-purple-200'>'
                <Globe className='w-4 h-4 text-purple-400' />'
                <a,
href={contactInfo.website}
                  className='text-sm "hover": text-white transition-colors''
                >
origin/cursor/automate-test-improve-and-merge-code-2533
                <a;
href={contactInfo.website}
                  className='text-sm hover: text-white transition-colors'
                 />
                  {contactInfo.website}

=======
=======
            <div className='space-y-3'    />
              <div className='flex items-center space-x-3 text-purple-200'    />
                <Phone className='w-4 h-4 text-purple-400'    />
                <span className='text-sm'    />{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'    />
                <Mail className='w-4 h-4 text-purple-400'    />
                <span className='text-sm'    />{contactInfo.email}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'    />
                <MapPin className='w-4 h-4 text-purple-400'    />
                <span className='text-sm'    />{contactInfo.address}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'    />
                <Globe className='w-4 h-4 text-purple-400'    />
                <a;
href={contactInfo.website}
                  className='text-sm hover: text-white transition-colors'
                    />
                  {contactInfo.website}
>>>>>>> origin/chore/fix-lint-and-merge
=======
    <footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>
                  <Rocket className='w-6 h-6 text-white' />
                </div>
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10'></div>
              </div>
              <div>
                <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h3>
                <p className='text-sm text-purple-300'>
                  2028 Future Technology
                </p>
              </div>
            </div>
            <p className='text-purple-200 mb-6 leading-relaxed'>
              Leading the future with cutting-edge AI, quantum computing, and
              innovative technology solutions. Transforming businesses through
              intelligent automation and next-generation infrastructure.
>>>>>>> merged-prs-20250907-203621
            </p>
            {/* Contact Information */}
<<<<<<< HEAD
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div className="flex items-center space-x-3 text-purple-200">
                <Globe className="w-4 h-4 text-purple-400" />
                <a href={contactInfo.website} className="text-sm hover:text-white transition-colors">
                  {contactInfo.website}
<<<<<<< HEAD
<div className='lg:col-span-1' />
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />
=======
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
=======
            <div className='space-y-3'>
              <div className='flex items-center space-x-3 text-purple-200'>
                <Phone className='w-4 h-4 text-purple-400' />
                <span className='text-sm'>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'>
                <Mail className='w-4 h-4 text-purple-400' />
                <span className='text-sm'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'>
                <MapPin className='w-4 h-4 text-purple-400' />
                <span className='text-sm'>{contactInfo.address}</span>
              </div>
              <div className='flex items-center space-x-3 text-purple-200'>
                <Globe className='w-4 h-4 text-purple-400' />
                <a
                  href={contactInfo.website}
                  className='text-sm hover:text-white transition-colors'
                >                  {contactInfo.website}      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
=======

export default function UltraFuturisticFooter2028() {;
  return (

          {/* Company Info */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-3 mb-6">;
              <div className="relative">;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">;
                  <Rocket className="w-6 h-6 text-white" />;
                </div>;
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10"></div>;
              </div>;
              <div>;
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </h3>;
                <p className="text-sm text-purple-300">2028 Future Technology</p>;
              </div>;
            </div>;
            <p className="text-purple-200 mb-6 leading-relaxed">;
              Leading the future with cutting-edge AI, quantum computing, and innovative technology solutions. ;
              Transforming businesses through intelligent automation and next-generation infrastructure.;
            </p>;
            {/* Contact Information */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className="space-y-3">;
              <div className="flex items-center space-x-3 text-purple-200">;
                <Phone className="w-4 h-4 text-purple-400" />;
                <span className="text-sm">{contactInfo && contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center space-x-3 text-purple-200">;
                <Mail className="w-4 h-4 text-purple-400" />;
                <span className="text-sm">{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className="flex items-center space-x-3 text-purple-200">;
                <MapPin className="w-4 h-4 text-purple-400" />;
                <span className="text-sm">{contactInfo && contactInfo.address}</span>;
              </div>;
              <div className="flex items-center space-x-3 text-purple-200">;
                <Globe className="w-4 h-4 text-purple-400" />;
                <a href={contactInfo && contactInfo.website} className="text-sm hover:text-white transition-colors">;
                  {contactInfo && contactInfo.website}
                </a>;
              </div>;
            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  {contactInfo.website}
<<<<<<< HEAD
                  key={social && social.name}
                  href={social && social.href}'
                  target='_blank''
                  rel='noopener noreferrer'



<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                </a>
              </div>
            </div>
            {/* Social Links */}
<<<<<<< HEAD
                <a;
key={social && social.name}
=======
            <div className='flex space-x-4 mt-6'>
              {socialLinks.map(social => (



                <a
                  key={social && social.name}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  href={social && social.href}
                  target='_blank'
                  rel='noopener noreferrer'
>>>>>>> origin/chore/fix-lint-and-merge
                  {contactInfo.website}

                  {contactInfo.website}

                </a    />
              </div>
            </div>
            {/* Social Links */}
<<<<<<< HEAD
<div className='flex space-x-4 mt-6'>
              {socialLinks.map(social => (
                <a;
                  {contactInfo.website}

<<<<<<< HEAD
                  key={social.name}
                  href={social.href}
<div className='flex space-x-4 mt-6' />
=======
<div className='flex space-x-4 mt-6'    />
>>>>>>> origin/chore/fix-lint-and-merge
              {socialLinks.map(social => (}
                <a;}
key={social.name}
                  href={social.hre}
}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40'
<<<<<<< HEAD
                 />
                  <social.icon className='w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
                </a>
              </div>
            </div>'
              <div className='flex items-center space-x-3 text-purple-200'>;'
                <Globe className='w-4 h-4 text-purple-400' />;
                <a;
                  href={contactInfo && contactInfo.website}'
                  className='text-sm hover:text-white transition-colors'>                  {contactInfo && contactInfo.website}      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
              ))}
            </div>
      {name: 'Autonomous Manufacturing AI',href: '/autonomous-manufacturing-ai',},],},{title: '⚛️ Quantum & Advanced Tech',services: [;
      {name: 'Quantum Financial Trading Platform',href: '/quantum-financial-trading-platform',},{name: 'Quantum Machine Learning Platform',href: '/quantum-machine-learning-platform',},{name: 'Quantum Internet Security Gateway',href: '/quantum-internet-security-gateway',},{ name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol' },],},{title: '🤖 AI & Machine Learning',services: [;
      {name: 'AI Customer Service Automation',href: '/ai-customer-service-automation',},{ name: 'AI Education Platform', href: '/ai-education-platform' },{ name: 'AI Content Creation Suite', href: '/ai-content-creation-suite' },{name: 'AI Legal Research Platform',href: '/ai-legal-research-platform',},],},];
const companyLinks = [;
  { name: 'About Us', href: '/about', icon: Users },{ name: 'Case Studies', href: '/case-studies', icon: Briefcase },{ name: 'Blog & Resources', href: '/blog', icon: BookOpen },{ name: 'Careers', href: '/careers', icon: TrendingUp },{ name: 'Contact', href: '/contact', icon: MessageCircle },{ name: 'Support', href: '/support', icon: ShieldCheck },];
const resourceLinks = [;
  { name: 'Documentation', href: '/docs', icon: BookOpen },{ name: 'API Reference', href: '/api', icon: Cpu },{ name: 'Developer Tools', href: '/dev-tools', icon: Database },{ name: 'Mobile Apps', href: '/mobile', icon: Globe },{ name: 'Cloud Services', href: '/cloud', icon: Cloud },{ name: 'Security Center', href: '/security', icon: Shield },];const socialLinks = [;
  {name: 'LinkedIn',href: 'https://linkedin.com/company/ziontechgroup',icon: Users,},{name: 'Twitter',href: 'https://twitter.com/ziontechgroup',icon: MessageCircle,},{ name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Video },{ name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code },];export default function UltraFuturisticFooter2028() {return (<footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>;
export default function UltraFuturisticFooter2028() {return (<footer className='bg-black/95 backdrop-blur-xl border-t border-purple-500/30'>;
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>;
          {/* Company Info */}<div className='lg:col-span-1'>;
            <div className='flex items-center space-x-3 mb-6'>;
              <div className='relative'>;
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>;
                  <Rocket className='w-6 h-6 text-white' />;
                </div>;
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10'></div>;
              </div>;
              <div>;
                <h3 className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </h3>;
                <p className='text-sm text-purple-300'>;
                  2028 Future Technology;
                </p>;
              </div>;
            </div>;
            <p className='text-purple-200 mb-6 leading-relaxed'>;
              Leading the future with cutting-edge AI, quantum computing, and;
              innovative technology solutions. Transforming businesses through;
              intelligent automation and next-generation infrastructure.;
            </p>;
            {/* Contact Information */}
            <div className='space-y-3'>;
              <div className='flex items-center space-x-3 text-purple-200'>;
                <Phone className='w-4 h-4 text-purple-400' />;
                <span className='text-sm'>{contactInfo.mobile}</span>;
              </div>;
              <div className='flex items-center space-x-3 text-purple-200'>;
                <Mail className='w-4 h-4 text-purple-400' />;
                <span className='text-sm'>{contactInfo.email}</span>;
              </div>;
              <div className='flex items-center space-x-3 text-purple-200'>;
                <MapPin className='w-4 h-4 text-purple-400' />;
                <span className='text-sm'>{contactInfo.address}</span>;
              </div>;
              <div className='flex items-center space-x-3 text-purple-200'>;
                <Globe className='w-4 h-4 text-purple-400' />;
=======
                    />
                  <social.icon className='w-5 h-5'    />
                </a>
              </div>
            </div>

              <div className='flex items-center space-x-3 text-purple-200'    />;
                <Globe className='w-4 h-4 text-purple-400'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                <a;
                  href={contactInfo.website}
                  className='text-sm hover: text-white transition-colors'    />

                  {contactInfo.website}{contactInfo.websit}
}</a>;
              </div>;
            </div>;
            {/* Social Links */}
                <a;
                  key={social && social.name}
                  href={social && social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  {contactInfo.website}{contactInfo.website}</a    />;
              </div>;
            </div>;
            {/* Social Links */}
<div className='flex space-x-4 mt-6'    />;
              {socialLinks.map(social => (<a;}
                  {contactInfo.website}key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40'    />

                  <social.icon className='w-5 h-5'    />;
                </a>;
              </div>;
            </div>;
              <div className='flex items-center space-x-3 text-purple-200'    />;
                <Globe className='w-4 h-4 text-purple-400'    />;
                <a;
                  href={contactInfo && contactInfo.website}
<<<<<<< HEAD
                  className='text-sm hover:text-white transition-colors'>                  {contactInfo && contactInfo.website}      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
                  className='text-sm hover: text-white transition-colors' />                  {contactInfo && contactInfo.website;}      {/* Main Footer Content *}
}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\" />;"
        <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-12\" />;
=======
                  className='text-sm hover: text-white transition-colors'    />                  {contactInfo && contactInfo.website}      {/* Main Footer Content *}
}
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\"    />;"
        <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-12\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {/* Company Info */}
            {/* Social Links */}
              ))}
          {/* Service Categories */}
<<<<<<< HEAD
<div className='lg:col-span-2'>;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>;
                  <social.icon className='w-5 h-5' />                </a>

=======
<<<<<<< HEAD
            {/* Social Links */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
target="_blank"
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Globe className="w-4 h-4 text-purple-400" />
                <a href={contactInfo.website} className="text-sm hover:text-white transition-colors">
                  {contactInfo.website}

];

export default function UltraFuturisticFooter2028() {
  return (

                  {contactInfo.website}

                  {contactInfo.website}

                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex space-x-4 mt-6'>
              {socialLinks.map(social => (

                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40'
                >
                  <social.icon className='w-5 h-5' />                </a>                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <social.icon className="w-5 h-5" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </a>
<<<<<<< HEAD
              ))}
            </div>
          </div>
          {/* Service Categories */}
          <div className='lg:col-span-2'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>
=======

              ))}
            </div>
          </div>

          {/* Service Categories */}'
          <div className='lg:col-span-2'>'
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>

              🚀 Our Services;
            </h3>'
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {serviceCategories.map(category => ('
                <div key={category.title} className='space-y-3'>'
                  <h4 className='font-medium text-purple-300'>
                    {category.title}
                  </h4>'
                  <ul className='space-y-2'>
                    {category.services.map(service => (
                      <li key={service.name}>'
          <div className='lg:col-span-2'>;'
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>;
              🚀 Our Services;
            </h3>;'
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
              {serviceCategories && serviceCategories.map(category => (;'
                <div key={category && category.title} className='space-y-3'>;'
                  <h4 className='font-medium text-purple-300'>;
<div className='lg:col-span-2' />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />;
                  <social.icon className='w-5 h-5' />                </a>;
                </a>
              </div>

<<<<<<< HEAD

          {/* Company Info */}
            {/* Social Links */}
              ))}

                  <social.icon className='w-5 h-5 />                </a>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <social.icon className='w-5 h-5' />                </a>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                </a>

              ))}
>>>>>>> merged-prs-20250907-203621
            </div>
          </div>

          {/* Service Categories */}
<<<<<<< HEAD
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              🚀 Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h4 className="font-medium text-purple-300">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline"
=======
          <div className='lg:col-span-2'>
            <h3 className=text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>

<<<<<<< HEAD
              🚀 Our Services;
            </h3>'
            <div className=grid grid-cols-1 md:grid-cols-2 gap-8>
              {serviceCategories.map(category => ('
                <div key={category.title} className='space-y-3>
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              🚀 Our Services
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {serviceCategories.map(category => (
                <div key={category.title} className='space-y-3'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <h4 className='font-medium text-purple-300'>
                    {category.title}
                  </h4>
                  <ul className=space-y-2'>
                    {category.services.map(service => (
<<<<<<< HEAD
                      <li key={service.name}>'
          <div className=lg:col-span-2>;'
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2>;
              🚀 Our Services;
=======
                      <li key={service.name}>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <Link
                          href={service && service.href}
                          className='text-sm text-purple-200 hover:text-white transition-colors hover:underline'>              🚀 Our Services;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h3>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
              {serviceCategories && serviceCategories.map(category => (;
                <div key={category && category.title} className=space-y-3'>;'
                  <h4 className=font-medium text-purple-300>;
<div className='lg:col-span-2' />;
            <h3 className=text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2 />;
                  <social.icon className='w-5 h-5' />                </a>;
=======
<div className='lg:col-span-2'    />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />;
                  <social.icon className='w-5 h-5'    />                </a>;
>>>>>>> origin/chore/fix-lint-and-merge
                </a>;
              ))}
            </div>;
          </div>;
          {/* Service Categories */}
<<<<<<< HEAD

=======
          <div className='lg:col-span-2'    />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />;
              🚀 Our Services;
            </h3>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />;
              {serviceCategories.map(category => (<div key={category.title} className='space-y-3'    />;
                  <h4 className='font-medium text-purple-300'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    {category.title}
                  </h4>;
                  <ul className='space-y-2'    />;
                    {category.services.map(service => (<li key={service.name}    />;
          <div className='lg:col-span-2'    />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />;
              🚀 Our Services;
            </h3>;
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
              {serviceCategories && serviceCategories.map(category => (<div key={category && category.title} className='space-y-3'>;
                  <h4 className='font-medium text-purple-300'>;
                    {category && category.title}
                  </h4>;
                  <ul className='space-y-2'>;
          </div>
                    {category && category.title}
                  </h4>;'
                  <ul className='space-y-2'>;
                    {category && category.services.map(service => (;
                      <li key={service && service.name}>;
                        <Link;
                          href={service && service.href}'
                          className='text-sm text-purple-200 hover:text-white transition-colors hover:underline'>              🚀 Our Services;
            </h3>;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {serviceCategories && serviceCategories.map((category) => (;"
                <div key={category && category.title} className="space-y-3">;"
                  <h4 className="font-medium text-purple-300">{category && category.title}</h4>;"
                  <ul className="space-y-2">;
                    {category && category.services.map((service) => (;
                      <li key={service && service.name}>;
                        <Link;
                          href={service && service.href}"
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline">;
                          {service && service.name}
                        </Link>;
                      </li>;
<<<<<<< HEAD
                          href={service.href}
                          className="text - sm text - purple - 200 hover:text-white transition-colors hover:underline";
                        >;
                          {service.name}
                          href={service.href}
                          className='text-sm text-purple-200 hover:text-white transition-colors hover:underline'
>>>>>>> merged-prs-20250907-203621
                        >
                  <ul className='space-y-2' />;
=======
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />;
              {serviceCategories && serviceCategories.map(category => (<div key={category && category.title} className='space-y-3'    />;
                  <h4 className='font-medium text-purple-300'    />;
                    {category && category.title}
                  </h4>;
                  <ul className='space-y-2'    />;
>>>>>>> origin/chore/fix-lint-and-merge

                    {category && category.services.map(service => (;}
                      <li key={service && service.name}    />;
                        <Link;
href={service.href}
                          className='text-sm text-purple-200 hover: text-white transition-colors hover:underline'
                            />
                          {service.name}
                        </Link>
                      </li>
<<<<<<< HEAD
=======

                    )
}
                  </ul>;
                </div>;
              ))}
<<<<<<< HEAD
              Quick Links
<div className='lg:col-span-1' />
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2' />
          <div className=lg:col-span-2>;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>;
              🚀 Our Services;
            </h3>;

                    {category && category.title}
                  </h4>;
                  <ul className=space-y-2'>;
                    {category && category.services.map(service => (;
                      <li key={service && service.name}>;

                          className='text-sm text-purple-200 hover:text-white transition-colors hover:underline>              🚀 Our Services;
            </h3>;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8>;
              {serviceCategories && serviceCategories.map((category) => (;
                <div key={category && category.title} className="space-y-3">;
                  <h4 className=font-medium text-purple-300">{category && category.title}</h4>;"
                  <ul className=space-y-2>;
                    {category && category.services.map((service) => (;
                      <li key={service && service.name}>;
                        <Link;
                          href={service && service.href}"
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline>;
                          {service && service.name}
                        </Link>;
                      </li>;

<div className=lg:col-span-1' />
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2 />
=======

            </div>
          </div>
          {/* Quick Links */}
<div className='lg:col-span-1'    />
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              Quick Links;
            </h3>

            </div>;
<<<<<<< HEAD
=======
          </div>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          {/* Quick Links */}'
          <div className='lg:col-span-1'>;'
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>;
              Quick Links;
            </h3>;

            {/* Company Links */}'
            <div className='mb-6'>;'
              <h4 className='font-medium text-purple-300 mb-3'>Company</h4>;'
              <ul className='space-y-2'>;
                {companyLinks && companyLinks.map(link => (;
                  <li key={link && link.name}>;
                    <Link;
            {/* Company Links */}"
            <div className="mb-6">;"
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>;"
              <ul className="space-y-2">;
                {companyLinks && companyLinks.map((link) => (;
                  <li key={link && link.name}>;
                    <Link;
                      href={link && link.href}"
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2">;"
                      <link && link.icon className="w-4 h-4" />;
                      <span>{link && link.name}</span>;
                    </Link>;
                  </li>;
                ))}
            {/* Resource Links */}'
            <div className='mb-6'>'
              <h4 className='font-medium text-purple-300 mb-3'>Resources</h4>'
              <ul className='space-y-2'>
                {resourceLinks.map(link => (
                  <li key={link.name}>
                    <Link;
                      href={link.href}'
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'
                    >'
<<<<<<< HEAD
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'
=======
=======

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              🚀 Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h4 className="font-medium text-purple-300">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
            <p className='text - purple - 200 mb - 6 leading - relaxed'>;
              Leading the future with cutting - edge AI, quantum computing, and;
              innovative technology solutions. Transforming businesses through;
              intelligent automation and next - generation infrastructure.;
            </p>;
            {/* Contact Information */}
            <div className='space - y-3'>;
              <div className='flex items - center space - x-3 text - purple - 200'>;
                <Phone className='w - 4 h - 4 text - purple - 400' />;
                <span className='text - sm'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center space - x-3 text - purple - 200'>;
                <Mail className='w - 4 h - 4 text - purple - 400' />;
                <span className='text - sm'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center space - x-3 text - purple - 200'>;
                <MapPin className='w - 4 h - 4 text - purple - 400' />;
                <span className='text - sm'>{contact_info.address}</span>;
              </div>;
              <div className='flex items - center space - x-3 text - purple - 200'>;
                <Globe className='w - 4 h - 4 text - purple - 400' />;
                <a;
                  href={contact_info.website}
                  className='text - sm hover:text - white transition - colors';
                >                  {contact_info.website}      {/* Main Footer Content */}
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16">;
        <div className="grid grid - cols - 1 lg:grid - cols - 4 gap - 12">;
          {/* Company Info */}
          <div className="lg:col - span - 1">;
            <div className="flex items - center space - x-3 mb - 6">;
              <div className="relative">;
                <div className="w - 12 h - 12 bg - gradient - to - br from - purple - 500 to - blue - 600 rounded - xl flex items - center justify - center">;
                  <Rocket className="w - 6 h - 6 text - white" />;
                </div>;
                <div className="absolute -inset - 1 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - xl blur opacity - 75 -z - 10"></div>;
              </div>;
              <div>;
                <h3 className="text - xl font - bold bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent">;
                  Zion Tech Group;
                </h3>;
                <p className="text - sm text - purple - 300">2028 Future Technology</p>;
              </div>;
            </div>;
            <p className="text - purple - 200 mb - 6 leading - relaxed">;
              Leading the future with cutting - edge AI, quantum computing, and innovative technology solutions.;
              Transforming businesses through intelligent automation and next - generation infrastructure.;
            </p>;
            {/* Contact Information */}
            <div className="space - y-3">;
              <div className="flex items - center space - x-3 text - purple - 200">;
                <Phone className="w - 4 h - 4 text - purple - 400" />;
                <span className="text - sm">{contact_info.mobile}</span>;
              </div>;
              <div className="flex items - center space - x-3 text - purple - 200">;
                <Mail className="w - 4 h - 4 text - purple - 400" />;
                <span className="text - sm">{contact_info.email}</span>;
              </div>;
              <div className="flex items - center space - x-3 text - purple - 200">;
                <MapPin className="w - 4 h - 4 text - purple - 400" />;
                <span className="text - sm">{contact_info.address}</span>;
              </div>;
              <div className="flex items - center space - x-3 text - purple - 200">;
                <Globe className="w - 4 h - 4 text - purple - 400" />;
                <a href={contact_info.website} className="text - sm hover:text - white transition - colors">;
                  {contact_info.website}
                </a>;
              </div>;
            </div>;
            {/* Social Links */}
            <div className='flex space - x-4 mt - 6'>;
              {social_links.map (social => (
                <a;
                  key={social.name}
                  href={social.href}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='w - 10 h - 10 bg - purple - 900 / 30 hover:bg - purple - 900 / 50 border border - purple - 500 / 30 rounded - lg flex items - center justify - center text - purple - 300 hover:text - white transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 400 / 40';
                >;
                  <social.icon className='w - 5 h - 5' />                </a>                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="w - 10 h - 10 bg - purple - 900 / 30 hover:bg - purple - 900 / 50 border border - purple - 500 / 30 rounded - lg flex items - center justify - center text - purple - 300 hover:text - white transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 400 / 40";
                >;
                  <social.icon className="w - 5 h - 5" />;
                </a>))}
            </div>;
          </div>;
          {/* Service Categories */}
          <div className='lg:col - span - 2'>;
            <h3 className='text - lg font - semibold text - white mb - 6 border - b border - purple - 500 / 30 pb - 2'>;
              🚀 Our Services;
            </h3>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
              {service_categories.map (category => (
                <div key={category.title} className='space - y-3'>;
                  <h4 className='font - medium text - purple - 300'>;
                    {category.title}
                  </h4>;
                  <ul className='space - y-2'>;
                    {category.services.map (service => (
                      <li key={service.name}>;
                        <Link;
                          href={service.href}
<<<<<<< HEAD
=======
                          className='text - sm text - purple - 200 hover:text - white transition - colors hover:underline'                        >              🚀 Our Services;
            </h3>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
              {service_categories.map ((category) => (
                <div key={category.title} className="space - y-3">;
                  <h4 className="font - medium text - purple - 300">{category.title}</h4>;
                  <ul className="space - y-2">;
                    {category.services.map ((service) => (
                      <li key={service.name}>;
                        <Link;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          href={service.href}
                          className="text - sm text - purple - 200 hover:text - white transition - colors hover:underline";
                        >;
                          {service.name}



          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>



              Quick Links
            </h3>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
          {/* Quick Links */}
          <div className='lg:col-span-1'>;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>;
              Quick Links;
            </h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Company Links */}
            <div className="mb-6">;"
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>;"
              <ul className="space-y-2">;"
                {companyLinks && companyLinks.map((link) => (<li key={link && link.name}>;
                      <link.icon className='w-4 h-4' />                      <span>{link.name}</span>                  <li key={link.name}>
                    <Link;
                      href={link.href}"
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >"
                      <link.icon className="w-4 h-4" />
                      <link.icon className='w-4 h-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Resource Links */}
<div className='mb-6'>
              <h4 className='font-medium text-purple-300 mb-3'>Resources</h4>
              <ul className='space-y-2'>
                {resourceLinks.map(link => (
                  <li key={link.name}>
                    <Link;
                      href={link.href}'
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'
                    >
                      <link.icon className='w-4 h-4' />
                      <span>{link.name}</span>

                      className='text-sm text-purple-200 hover: text-white transition-colors hover:underline flex items-center space-x-2'
                     />

                      <link.icon className='w-4 h-4' />
                      <span />{link.name}</span>
                    </Link>
                  </li>

                )
}
              </ul>;
            </div>;

            {/* Newsletter Signup */}
<div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'>
              <h4 className='font-medium text-white mb-3'>Stay Updated</h4>
              <p className='text-sm text-purple-200 mb-3'>
                Get the latest insights on future technology and AI innovations.
              </p>'
              <div className='flex space-x-2'>
            {/* Resource Links */}'
            <div className='mb-6'>;'
              <h4 className='font-medium text-purple-300 mb-3'>Resources</h4>;'
              <ul className='space-y-2'>;
                {resourceLinks && resourceLinks.map(link => (;
                  <li key={link && link.name}>;
<<<<<<< HEAD
                    <Link;
                      href={link && link.href}'
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'>;'
                      <link && link.icon className='w-4 h-4' />                      <span>{link && link.name}</span>                  <li key={link && link.name}>;
                    <Link;
                      href={link && link.href}"
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2">;"
=======
                    <Link
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      href={link && link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'>;
                      <link && link.icon className='w-4 h-4' />                      <span>{link && link.name}</span>              Quick Links;
            </h3>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Company Links */}
            <div className="mb-6">;
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>;
              <ul className="space-y-2">;
                {companyLinks && companyLinks.map((link) => (;
                  <li key={link && link.name}>;
                    <Link
                      href={link && link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <link && link.icon className="w-4 h-4" />;
                      <span>{link && link.name}</span>;
                    </Link>;
                  </li>;
<<<<<<< HEAD
                ))}
            {/* Newsletter Signup */}'
            <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'>;'
              <h4 className='font-medium text-white mb-3'>Stay Updated</h4>;'
              <p className='text-sm text-purple-200 mb-3'>;
                Get the latest insights on future technology and AI innovations.;
              </p>;'
              <div className='flex space-x-2'>;
                <input'
                  type='email''
                  placeholder='Enter your email''
                  className='flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                <input"
                  type="email""
                  placeholder="Enter your email""
                  className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Quick Links
            </h3>
                        </Link>;
                      </li>))}
                  </ul>;
                </div>))}
            </div>;
          </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Quick Links */}
<div className='lg:col-span-1'    />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />;
              Quick Links;
            </h3>;
<<<<<<< HEAD
            </div>;
          </div>;{/* Quick Links */}
          <div className='lg:col-span-1'    />;
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'    />;
              Quick Links;
            </h3>;{/* Company Links */}
            <div className='mb-6'    />;
              <h4 className='font-medium text-purple-300 mb-3'    />Company</h4>;
              <ul className='space-y-2'    />;
                {companyLinks && companyLinks.map(link => (<li key={link && link.name}    />;
                    <Link;
            {/* Company Links */}"
            <div className=\"mb-6\"    />;"
              <h4 className=\"font-medium text-purple-300 mb-3\"    />Company</h4>;"
              <ul className=\"space-y-2\"    />;
                {companyLinks && companyLinks.map((link) => (<li key={link && link.name}    />;
                    <Link;
                      href={link && link.href}"
                      className=\"text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2\"    />;"
                      <link && link.icon className=\"w-4 h-4\"    />;
                      <span    />{link && link.name}</span>;
                    </Link>;
                  </li>;
                ))}
            {/* Resource Links */}
            <div className='mb-6'    />;
              <h4 className='font-medium text-purple-300 mb-3'    />Resources</h4>;
              <ul className='space-y-2'    />;
                {resourceLinks.map(link => (<li key={link.name}    />;
                    <Link;
                      href={link.href}

                      className='text-sm text-purple-200 hover: text-white transition-colors hover:underline flex items-center space-x-2'
                        />

                      <link.icon className='w-4 h-4'    />
                      <span    />{link.name}</span>
                    </Link>
                  </li>

                )
}
              </ul>;
            </div>;
            {/* Resource Links */}
<div className='mb-6'    />;
              <h4 className='font-medium text-purple-300 mb-3'    />Resources</h4>;
              <ul className='space-y-2'    />;
                {resourceLinks.map(link => (<li key={link.name}    />;
                    <Link;
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'    />

                      <link.icon className='w-4 h-4'    />;
                      <span    />{link.name}</span>;
                    </Link>;
                  </li>;
                ))}
              </ul>;
            </div>;
              </ul>;
            </div>;{/* Newsletter Signup */}
<div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'    />;
              <h4 className='font-medium text-white mb-3'    />Stay Updated</h4>;
              <p className='text-sm text-purple-200 mb-3'    />;
                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className='flex space-x-2'    />;
            {/* Resource Links */}
            <div className='mb-6'    />;
              <h4 className='font-medium text-purple-300 mb-3'    />Resources</h4>;
              <ul className='space-y-2'    />;
                {resourceLinks && resourceLinks.map(link => (<li key={link && link.name}    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    <Link;
                      href={link && link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'    />;
                      <link && link.icon className='w-4 h-4'    />                      <span    />{link && link.name}</span>                  <li key={link && link.name}    />;
                    <Link;
                      href={link && link.href}"
                      className=\"text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2\"    />;"
                      <link && link.icon className=\"w-4 h-4\"    />;
                      <span    />{link && link.name}</span>;
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
            {/* Resource Links */}
            <div className='mb-6>;
              <h4 className=font-medium text-purple-300 mb-3'>Resources</h4>;
              <ul className='space-y-2>;
                {resourceLinks.map(link => (<li key={link.name}>;
                    <Link;
          <div className='lg:col-span-2'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>
              🚀 Our Services
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {serviceCategories.map(category => (
                <div key={category.title} className=space-y-3'>'
                  <h4 className=font-medium text-purple-300>
                    {category.title}
                  </h4>'
                  <ul className='space-y-2>
                    {category.services.map(service => (
                      <li key={service.name}>
          <div className='lg:col-span-2'>;
            <h3 className=text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>
              🚀 Our Services
            </h3>;'
            <div className=grid grid-cols-1 md:grid-cols-2 gap-8>
              {serviceCategories && serviceCategories.map(category => (;'
                <div key={category && category.title} className='space-y-3>;
                  <h4 className='font-medium text-purple-300'>
                    {category && category.title}
                  </h4>;
                  <ul className=space-y-2'>
                    {category && category.services.map(service => (
                      <li key={service && service.name}>
                          className='text-sm text-purple-200 hover:text-white transition-colors hover:underline>              🚀 Our Services
            </h3>;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8>
              {serviceCategories && serviceCategories.map((category) => (;
                <div key={category && category.title} className="space-y-3">;
                  <h4 className=font-medium text-purple-300">{category && category.title}</h4>;"
                  <ul className=space-y-2>
                    {category && category.services.map((service) => (
                      <li key={service && service.name}>
                        <Link
                          href={service && service.href}"
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline>
                          {service && service.name}
                        </Link>
                      </li>
            </h3>

            </div>
          </div>
          {/* Quick Links */}
          <div className=lg:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2>
              Quick Links
            </h3>
            {/* Company Links */}
            <div className=mb-6'>
              <h4 className='font-medium text-purple-300 mb-3>Company</h4>
              <ul className=space-y-2'>
                {companyLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2
=======
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
>>>>>>> merged-prs-20250907-203621
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>

          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h3 className='text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2'>

              Quick Links
            </h3>
            {/* Company Links */}
            <div className='mb - 6'>;
              <h4 className='font - medium text - purple - 300 mb - 3'>Company</h4>;
              <ul className='space - y-2'>;
                {company_links.map (link => (
                  <li key={link.name}>;
                    <Link;
                      href={link.href}
<<<<<<< HEAD
                      className='text - sm text - purple - 200 hover:text - white transition - colors hover:underline flex items - center space - x-2';
                    >;
                      <link.icon className='w - 4 h - 4' />                      <span>{link.name}</span>              Quick Links;
            </h3>;
            {/* Company Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'
                    >
                      <link.icon className='w-4 h-4' />                      <span>{link.name}</span>                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    >
                      <link.icon className='w-4 h-4' />                      <span>{link.name}</span>                  <li key={link.name}>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Quick Links
            </h3>
            
            {/* Company Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
<<<<<<< HEAD
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    >;
                      <link.icon className='w-4 h-4' />                      <span>{link.name}</span>                  <li key={link.name}>;
                    <Link;
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2";
                    >;
                      <link.icon className="w-4 h-4" />;
                      <link.icon className='w-4 h-4' />;
                      <span>{link.name}</span>;
                    </Link>;
                  </li>;
<<<<<<< HEAD
                ))}
              </ul>
            </div>
=======
=======
>>>>>>> merged-prs-20250907-203621
                ))}
              </ul>
            </div>

            {/* Resource Links */}
            <div className='mb-6'>
              <h4 className='font-medium text-purple-300 mb-3'>Resources</h4>
              <ul className='space-y-2'>
                {resourceLinks.map(link => (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2'
                    >
                      <link.icon className='w-4 h-4' />                      <span>{link.name}</span>                  <li key={link.name}>
                    <Link
                      href={link.href}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  <li key={link.name}>
                    <Link
                      href={link.href}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Resource Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Newsletter Signup */}
            <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'>;'
              <h4 className='font-medium text-white mb-3'>Stay Updated</h4>;'
              <p className='text-sm text-purple-200 mb-3'>;'
                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className='flex space-x-2'>;'

                <input,
type='email''
                  placeholder='Enter your email''
                  className='flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm "focus": outline-none "focus":ring-2 "focus":ring-purple-500 "focus":border-transparent'' />
                <button className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm "hover":from-purple-700 "hover":to-blue-700 transition-all duration-300 transform "hover":shadow-xl "hover":shadow-cyan-500/30'>'
=======
=======
<<<<<<< HEAD
=======
              </ul>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Newsletter Signup */}
<<<<<<< HEAD
=======
            <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'>
              <h4 className='font-medium text-white mb-3'>Stay Updated</h4>
              <p className='text-sm text-purple-200 mb-3'>


<<<<<<< HEAD
                Get the latest insights on future technology and AI innovations.
              </p>
              <div className='flex space-x-2'>

                Get the latest insights on future technology and AI innovations.
              </p>
              <div className='flex space-x-2'>
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Get the latest insights on future technology and AI innovations.
              </p>
              <div className='flex space-x-2'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
<<<<<<< HEAD
=======
                />;
                <button className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                  Subscribe                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className="flex space-x-2">;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Newsletter Signup */}
>>>>>>> merged-prs-20250907-203621
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-sm text-purple-200 mb-3">
                Get the latest insights on future technology and AI innovations.
<<<<<<< HEAD
              </p>
              <div className="flex space-x-2">
=======
<<<<<<< HEAD
                />
                <button className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                  Subscribe                Get the latest insights on future technology and AI innovations.
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </p>
              <div className="flex space-x-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
<<<<<<< HEAD
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  Subscribe
=======
<<<<<<< HEAD
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
=======
            {/* Newsletter Signup */}
            <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-4'    />;
              <h4 className='font-medium text-white mb-3'    />Stay Updated</h4>;
              <p className='text-sm text-purple-200 mb-3'    />;
                Get the latest insights on future technology and AI innovations.;
              </p>;
              <div className='flex space-x-2'    />;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                <input;
type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

                   />
                <button className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'    />
                  Subscribe;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                </button>
              </div>

<<<<<<< HEAD
      {/* Bottom Bar *
}
<div className='border-t border-purple-500/20'>;'
        <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-6'>;'
          <div className='flex flex-col "md":flex-row items-center justify-between space-y-4 "md":space-y-0'>;'
            {/* Copyright */}
            <div className='text-sm text-purple-300'>;'
=======
<<<<<<< HEAD
      {/* Bottom Bar */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Bottom Bar *}
}
<div className='border-t border-purple-500/20'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />;
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'    />;
            {/* Copyright */}
            <div className='text-sm text-purple-300'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              © 2028 Zion Tech Group. All rights reserved. Leading the future;
              of technology.;
            </div>;
            {/* Legal Links */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='text-sm text-purple-300'>;
              © 2028 Zion Tech Group. All rights reserved. Leading the future;
              of technology.;
            </div>;
<<<<<<< HEAD
=======

            <div className='flex items-center space-x-6 text-sm'>'
              <Link,
href='/privacy''

<<<<<<< HEAD
                className='text-purple-300 "hover":text-white transition-colors'>;'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Legal Links */}
            <div className='flex items-center space-x-6 text-sm'>;
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className='border-t border-purple-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='text-sm text-purple-300'>
              © 2028 Zion Tech Group. All rights reserved. Leading the future
              of technology.
            </div>
            {/* Legal Links */}
            <div className='flex items-center space-x-6 text-sm'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Link
                href='/privacy'
            <div className='flex items-center space-x-6 text-sm'>;
                className='text-purple-300 hover:text-white transition-colors'>;

<<<<<<< HEAD
            <div className='flex items-center space-x-6 text-sm' />
              <Link;
                href='/privacy';
                className='text-purple-300 hover:text-white transition-colors'>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Privacy Policy;
              </Link>;
              <Link'
                href='/terms''
                className='text-purple-300 hover:text-white transition-colors'>;
<<<<<<< HEAD
                Terms of Service;
              </Link>;
              <Link'
                href='/cookies''
                className='text-purple-300 hover:text-white transition-colors'>;
                Cookie Policy;
              </Link>;
              <Link'
                href='/security'"
=======
                Terms of Service;
              </Link>;
              <Link'
                href='/cookies''
                className='text-purple-300 hover:text-white transition-colors'>;
                Cookie Policy;
              </Link>;
<<<<<<< HEAD
              <Link'
                href='/security'"
=======
              <Link
                href='/security'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>
            {/* Legal Links */}"
            <div className="flex items-center space-x-6 text-sm">"
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy;
              </Link>"
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service;
              </Link>"
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy;
              </Link>"
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                className='text-purple-300 hover:text-white transition-colors'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Security
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Security

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                Security
<<<<<<< HEAD
              </Link>
            </div>
      </div>"
          href="/contact""
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            <div className='flex items-center space-x-6 text-sm'    />
=======
              </Link>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="fixed bottom-6 right-6 z-50">
        <Link
      {/* Floating Action Button */}
      <div className='fixed bottom-6 right-6 z-50'>
        <Link
          href='/contact'
          className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group'
        >
          <MessageCircle className='w-8 h-8 group-hover:rotate-12 transition-transform duration-300' />        </Link>
      </div>
      {/* Background Effects */}        <Link
=======
<<<<<<< HEAD
className='text-purple-300 hover:text-white transition-colors'>                Security            {/* Copyright */}
            <div className="text-sm text-purple-300">;
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.;
            </div>;
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">;
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">;
      {/* Bottom Bar */}
      <div className='border - t border - purple - 500 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
          <div className='flex flex - col md:flex - row items - center justify - between space - y-4 md:space - y-0'>;
            {/* Copyright */}
            <div className='text - sm text - purple - 300'>;
              © 2028 Zion Tech Group. All rights reserved. Leading the future;
              of technology.;
            </div>;
            {/* Legal Links */}
            <div className='flex items - center space - x-6 text - sm'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Link;
href='/privacy'

                className='text-purple-300 hover:text-white transition-colors'    />;
                Privacy Policy;
              </Link>;
              <Link;
                href='/terms';
                className='text-purple-300 hover:text-white transition-colors'    />;
                Terms of Service;
              </Link>;
              <Link;
                href='/cookies';
                className='text-purple-300 hover:text-white transition-colors'    />;
                Cookie Policy;
              </Link>;

              <Link;
<<<<<<< HEAD
href='/security'

                className='text-purple-300 hover: text-white transition-colors'
                  />
                Security;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>
=======
<<<<<<< HEAD
      </div>"
          href="/contact""
=======
                href='/security';
                className='text - purple - 300 hover:text - white transition - colors';
              >                Security            {/* Copyright */}
            <div className="text - sm text - purple - 300">;
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.;
            </div>;
            {/* Legal Links */}
            <div className="flex items - center space - x-6 text - sm">;
              <Link href="/privacy" className="text - purple - 300 hover:text - white transition - colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text - purple - 300 hover:text - white transition - colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text - purple - 300 hover:text - white transition - colors">;
                Cookie Policy;
              </Link>;
              <Link href="/security" className="text - purple - 300 hover:text - white transition - colors">;
                Security;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;

      <div className="fixed bottom-6 right-6 z-50">
        <Link

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          href="/contact"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group"
        >"
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>"
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>"
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>"
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
);
}'
          className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group'>;'
          <MessageCircle className='w-8 h-8 group-hover:rotate-12 transition-transform duration-300' />        </Link>;
      </div>;
      {/* Background Effects */}        <Link"
          href="/contact""
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group">;"
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />;
        </Link>;
      </div>;
      {/* Background Effects */}
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
}
}'
      <div className='absolute inset-0 pointer-events-none'>;'
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;'
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;'
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>;
=======
"
}'
<<<<<<< HEAD
=======
      <div className=absolute inset-0 pointer-events-none>;'
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl></div>;
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;
        <div className=absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;
    </footer>;"
  );      <div className="absolute inset-0 pointer-events-none">;"
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>;"
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>;"
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>;
      </div>;
    </footer>;
  );
}
      {/* Background Effects */}
}
      {/* Floating Action Button */}
<div className='fixed bottom-6 right-6 z-50'>'
        <Link,
href='/contact''
          className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl "hover":shadow-purple-500/25 transition-all duration-300 transform "hover":shadow-lg "hover":shadow-cyan-400/40 group''
        >
          <MessageCircle className='w-8 h-8 group-"hover":rotate-12 transition-transform duration-300' />'
        </Link>
      </div>
<<<<<<< HEAD
      {/* Background Effects *
}
<div className='absolute inset-0 pointer-events-none'>'
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>'
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>'
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>'
      </div>
    </footer>
  );      <div className="absolute inset-0 pointer-events-none">
=======
<<<<<<< HEAD
      {/* Background Effects */}


      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
<<<<<<< HEAD
"
}'
>>>>>>> merged-prs-20250907-203621
      <div className='absolute inset-0 pointer-events-none'>;'
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;'
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;'
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>
      </div>
    </footer>
  );      <div className="absolute inset-0 pointer-events-none">
<<<<<<< HEAD
=======
=======

      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>
      </div>
    </footer>;
  );      <div className="absolute inset-0 pointer-events-none">
=======

      <div className="absolute inset-0 pointer-events-none">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
<<<<<<< HEAD
      {/* Background Effects */}

}
      <div className='absolute inset-0 pointer-events-none'>;
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;
=======
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD
=======
);
}
<<<<<<< HEAD
=======
=======
          className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group'>;
          <MessageCircle className='w-8 h-8 group-hover:rotate-12 transition-transform duration-300' />        </Link>;
      </div>;
      {/* Background Effects */}        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group">;
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />;
        </Link>;
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Background Effects */}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'></div>;
      </div>;
    </footer>;
  );      <div className="absolute inset-0 pointer-events-none">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>;
      </div>;
    </footer>;
  );
}
<<<<<<< HEAD
      {/* Background Effects */}
}
  )
}
  );
origin/cursor/automate-test-improve-and-merge-code-2533

"
=======
<<<<<<< HEAD
      {/* Background Effects */}
}
  )
  )
}
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
origin/cursor/automate-test-improve-and-merge-code-2533


"
=======
      </div>

      {/* Floating Action Button */}
<div className='fixed bottom-6 right-6 z-50'    />
        <Link;
href='/contact'
          className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group'
            />
          <MessageCircle className='w-8 h-8 group-hover:rotate-12 transition-transform duration-300'    />
        </Link>
      </div>
      {/* Background Effects *}
}
<div className='absolute inset-0 pointer-events-none'    />
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'    /></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'    /></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl'    /></div>
      </div>
    </footer>
  );

"
>>>>>>> origin/chore/fix-lint-and-merge
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating Action Button */}
      <div className='fixed bottom - 6 right - 6 z - 50'>;
        <Link;
          href='/contact';
          className='w - 16 h - 16 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - full flex items - center justify - center text - white shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 300 transform hover:shadow - lg hover:shadow - cyan - 400 / 40 group';
        >;
          <MessageCircle className='w - 8 h - 8 group - hover:rotate - 12 transition - transform duration - 300' />        </Link>;
      </div>;
      {/* Background Effects */}        <Link;
          href="/contact";
          className="w - 16 h - 16 bg - gradient - to - r from - purple - 600 to - blue - 600 rounded - full flex items - center justify - center text - white shadow - 2xl hover:shadow - purple - 500 / 25 transition - all duration - 300 transform hover:shadow - lg hover:shadow - cyan - 400 / 40 group";
        >;
          <MessageCircle className="w - 8 h - 8 group - hover:rotate - 12 transition - transform duration - 300" />;
        </Link>;
      </div>;
      {/* Background Effects */}
      <div className='absolute inset - 0 pointer - events - none'>;
        <div className='absolute top - 0 left - 0 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl'></div>;
        <div className='absolute bottom - 0 right - 0 w - 96 h - 96 bg - blue - 500 / 5 rounded - full blur - 3xl'></div>;
        <div className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 bg - gradient - to - r from - purple - 500 / 10 to - blue - 500 / 10 rounded - full blur - 2xl'></div>;
      </div>;
    </footer>);      <div className="absolute inset - 0 pointer - events - none">;
        <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl"></div>;
        <div className="absolute bottom - 0 right - 0 w - 96 h - 96 bg - blue - 500 / 5 rounded - full blur - 3xl"></div>;
        <div className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 bg - gradient - to - r from - purple - 500 / 10 to - blue - 500 / 10 rounded - full blur - 2xl"></div>;
      </div>;
    </footer>);


      {/* Background Effects */}


}
<<<<<<< HEAD

      {/* Background Effects */}

}
}
}
}

      {/* Background Effects */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
