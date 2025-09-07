import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { X, ChevronRight, Home, Star, Users;
  Settings, HelpCircle, Mail, Phone, MapPin;
  Brain, Atom, Shield, Rocket, DollarSign;
  Globe, Cpu, Database, Lock, Zap;
  TrendingUp, Award, CheckCircle, Clock;
  ArrowRight, Search, Menu, X as CloseIcon;
  Target, BookOpen, Truck, BarChart3;
}
  Sparkles, Eye, Lightbulb, Palette, Code}
 } from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  icon?: React.ReactNode;

  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;

}

    badge: 'New',;
    isNew: true,;
    children: [;'
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },;'
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },;'
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },;'
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },;'
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },;'
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },;'
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },;'
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },;'
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },;'
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },;'
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },;'
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },;'
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },;'
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }

    badge: 'Hot',;
    isHot: true,;
    children: [;'
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },;'
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },;'
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },;'
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },;'
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },;'
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },;'
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },;'
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },;'
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },;'
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },;'
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },;'
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },;'
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }

    color: 'text-blue-400',;
    items: [;'
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },;'
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },;'
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },;'
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },;'
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },;'
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },;'
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },;'
      { name: 'Quantum Networking', href: '/quantum-networking' },;'
      { name: 'Quantum Data Center', href: '/quantum-data-center' },;'
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },;'
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }

    badge: 'Popular',;
    children: [;'
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },;'
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },;'
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },;'
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },;'
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },;'
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },;'
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },;'
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },;'
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },;'
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }

}</div>);
}</div> </div> </div> </div> </motion.div>) );
}</div> </div> </span> </a>) );
}</div> </div> </span> </div> <ChevronRight className= {}`
  `w - 4 h - 4 text - gray - 400 transition - transform duration - 200 $ {'
  expanded_category === item.name ? 'rotate - 90' : '';`
}`;
}/> </button> <AnimatePresence> > {}
  item.children?.map ( (child) => (<Link key= {}
  child.name;
}{}
  child.badge;
}</span>);
}</a>) );
}</motion.div>);

    badge: 'Showcase',
    children: [;'
      { name: 'View All Services', href: '/comprehensive - services - showcase - 2025', description: 'Complete services portfolio' },'
      { name: 'Service Categories', href: '/comprehensive - services - showcase - 2025#categories', description: 'Browse by category' },'
      { name: 'Pricing Comparison', href: '/comprehensive - services - showcase - 2025#pricing', description: 'Compare service costs' },'
      { name: 'Service Search', href: '/comprehensive - services - showcase - 2025#search', description: 'Find specific services' },'
      { name: 'Latest Innovations', href: '/revolutionary - 2025 - services - showcase', description: 'Cutting - edge solutions' },'
      { name: '2026 Services', href: '/revolutionary - 2026 - services', description: 'Next generation solutions' },'
      { name: '2027 Services', href: '/revolutionary - 2027 - services - showcase', description: 'Future - ready services' },'
      { name: 'Ultimate 2026', href: '/ultimate - 2026 - services - showcase', description: 'Premium service collection' }
    ];
  }

    badge: 'New',
    is_new: true,
    children: [;'
      { name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2025', description: 'Emotional intelligence and self - awareness' },'
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network', description: 'Hybrid AI - Quantum computing platform' },'
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed AI research' },'
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training', description: 'EQ training platform' },'
      { name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform', description: 'Equipment failure prediction' },'
      { name: 'AI Content Personalization', href: '/ai - content - personalization - engine', description: 'Personalized content delivery' },'
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager', description: 'Self - managing AI systems' },'
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework', description: 'Ethical AI frameworks' },'
      { name: 'AI Creativity Studio', href: '/ai - creativity - studio', description: 'AI - powered creative content' },'
      { name: 'AI Education Platform', href: '/ai - education - platform', description: 'Personalized AI learning' },'
      { name: 'AI Healthcare Diagnostics', href: '/ai - healthcare - diagnostics', description: 'Medical AI solutions' },'
      { name: 'AI Financial Intelligence', href: '/ai - financial - intelligence', description: 'Financial AI analytics' },'
      { name: 'AI Sustainability Platform', href: '/ai - sustainability - platform', description: 'Environmental AI solutions' },'
      { name: 'AI Legal Contract Analyzer', href: '/ai - legal - contract - analyzer', description: 'Legal document analysis' }
    ];
  }

    badge: 'Hot',
    is_hot: true,
    children: [;'
      { name: 'Space Resource Mining', href: '/space - resource - mining - platform', description: 'Asteroid mining and space resources' },'
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - platform', description: 'Unbreakable encryption' },'
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform', description: 'Neural interface technology' },'
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },'
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform', description: 'Self - driving AI systems' },'
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform', description: 'Quantum - biological hybrid processing' },'
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform', description: 'Fusion power simulation' },'
      { name: 'Quantum Robotics', href: '/quantum - robotics', description: 'Quantum - enhanced robotics' },'
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity - platform', description: 'Next - gen security' },'
      { name: 'Quantum Logistics', href: '/quantum - logistics - optimization', description: 'Route optimization' },'
      { name: 'Quantum Metaverse', href: '/quantum - metaverse', description: 'Quantum - enhanced virtual worlds' },'
      { name: 'Quantum IoT Platform', href: '/quantum - iot', description: 'Quantum - secured IoT' },'
      { name: 'Quantum Financial Trading', href: '/quantum - financial - trading', description: 'Quantum trading algorithms' }
    ];
  }

    color: 'text - blue - 400',
    items: [;'
      { name: 'Quantum - Secure Cloud', href: '/quantum - secure - cloud - infrastructure', badge: 'New' },'
      { name: 'Autonomous IT Operations', href: '/autonomous - it - operations - center', badge: 'New' },'
      { name: 'Edge Computing Orchestration', href: '/edge - computing - orchestration', badge: 'New' },'
      { name: 'Blockchain Infrastructure', href: '/blockchain - infrastructure - platform', badge: 'New' },'
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops - platform', badge: 'New' },'
      { name: 'Quantum Cloud Infrastructure', href: '/quantum - cloud - infrastructure - platform' },'
      { name: 'Zero Trust Security', href: '/zero - trust - security - platform' },'
      { name: 'Quantum Networking', href: '/quantum - networking' },'
      { name: 'Quantum Data Center', href: '/quantum - data - center' },'
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity' },'
      { name: 'Quantum Cloud Migration', href: '/quantum - cloud - migration' }
    ];
  }

    badge: 'Popular',
    children: [;'
      { name: 'AI Business Intelligence', href: '/ai - business - intelligence - suite', description: 'Data - driven insights' },'
      { name: 'AI Content Generation', href: '/ai - content - generation - platform', description: 'Automated content creation' },'
      { name: 'AI Customer Service', href: '/ai - customer - service - automation', description: 'Intelligent support automation' },'
      { name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', description: 'Sales performance optimization' },'
      { name: 'AI Marketing Automation', href: '/ai - marketing - automation - suite', description: 'Campaign optimization' },'
      { name: 'AI Project Management', href: '/ai - project - management - platform', description: 'Intelligent project coordination' },'
      { name: 'AI Financial Analytics', href: '/ai - financial - analytics - platform', description: 'Financial insights and optimization' },'
      { name: 'AI HR Management', href: '/ai - hr - management - platform', description: 'HR operations automation' },'
      { name: 'AI Supply Chain', href: '/ai - supply - chain - optimization', description: 'Supply chain optimization' },'
      { name: 'AI Legal Analysis', href: '/ai - legal - document - analysis', description: 'Legal document processing' }
    ];
  }

    description: 'AI - powered creative and design solutions',
    children: [;'
      { name: 'AI Creativity Studio', href: '/ai - creativity - studio', description: 'AI - powered creative content' },'
      { name: 'Metaverse Development', href: '/metaverse - development - studio', description: '3D world creation' },'
      { name: 'Quantum Metaverse', href: '/quantum - metaverse - platform', description: 'Quantum - enhanced experiences' },'
      { name: '3D Design & Modeling', href: '/3d - design - platform', description: 'Advanced 3D creation tools' },'
      { name: 'AI Video Generation', href: '/ai - video - generation', description: 'Automated video content' },'
      { name: 'AI Music Composition', href: '/ai - music - composition', description: 'AI - generated music' }
    ];
  }

    description: 'Cutting - edge research and development services',
    children: [;'
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed research' },'
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },'
      { name: 'Space Technology Research', href: '/space - technology - research', description: 'Space exploration solutions' },'
      { name: 'Biotech AI Research', href: '/biotech - ai - research - platform', description: 'Biological research automation' },'
      { name: 'Neuroscience Research', href: '/neuroscience - research - platform', description: 'Brain research tools' },'
      { name: 'Climate Research AI', href: '/climate - research - ai', description: 'Environmental research automation' }
    ];
  }

    description: 'Specialized solutions for specific industries',
    children: [;'
      { name: 'Healthcare AI', href: '/healthcare - ai - solutions', description: 'Medical AI applications' },'
      { name: 'Financial Services', href: '/financial - ai - solutions', description: 'Fintech AI solutions' },'
      { name: 'Manufacturing AI', href: '/manufacturing - ai - solutions', description: 'Industrial automation' },'
      { name: 'Retail AI', href: '/retail - ai - solutions', description: 'Retail optimization' },'
      { name: 'Education AI', href: '/education - ai - solutions', description: 'Educational technology' },'
      { name: 'Transportation AI', href: '/transportation - ai - solutions', description: 'Smart transportation' }
    ];
  }

    description: 'Flexible pricing options for all services',
    children: [;'
      { name: '2025 Pricing', href: '/pricing - 2025', description: 'Current year pricing' },'
      { name: '2026 Pricing', href: '/pricing - 2026', description: 'Next year pricing' },'
      { name: 'Enterprise Plans', href: '/enterprise - pricing', description: 'Large organization pricing' },'
      { name: 'Startup Plans', href: '/startup - pricing', description: 'Small business pricing' },'
      { name: 'Custom Solutions', href: '/custom - pricing', description: 'Tailored pricing' },'
      { name: 'ROI Calculator', href: '/roi - calculator', description: 'Calculate your return on investment' }
    ];
  }

    description: 'Educational resources and documentation',
    children: [;'
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },'
      { name: 'API Reference', href: '/api - docs', description: 'API documentation' },'
      { name: 'Tutorials', href: '/tutorials', description: 'Step - by - step guides' },'
      { name: 'Case Studies', href: '/case - studies', description: 'Success stories' },'
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },'
      { name: 'Research Papers', href: '/research - papers', description: 'Academic publications' }
    ];
  }

    description: 'Technical support and customer service',
    children: [;'
      { name: 'Help Center', href: '/help', description: 'Self - service support' },'
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },'
      { name: 'Live Chat', href: '/live - chat', description: 'Real - time assistance' },'
      { name: 'Training Programs', href: '/training', description: 'Skill development' },'
      { name: 'Community Forum', href: '/community', description: 'User community' },'
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ];
  }
];'
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
  const toggleSection = (title: string) => {}
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {}
      newExpanded.delete(title)
    } else {}
      new_expanded.add (title);
    });
  return (
    <motion&& motion.aside;
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div;
    setExpandedSections (new_expanded);
  }
;
  const filtered_services = sidebar_items.flat_map (item =>;
    item.children?.filter (child =>;
      child.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      child.description?.toLowerCase ().includes (search_query.toLowerCase ())) || []);
;
  return (
    <motion.aside;
      initial={{ coordinate_x: -300, opacity: 0 }}

            <span>{contact_info.website}</span>;
          </div>;
        </div>;
      </div>;

            </button>;
            <AnimatePresence>;
              {expanded_sections.has (section.title) && (
                <motion.div;
    ]
  }
],

const resources = []
const supportLinks = ['
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },'
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },'
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },'
  { name: 'Status Page', href: '/status', description: 'Service status' },'
  { name: 'Training', href: '/training', description: 'Learn our platforms' },'
  { name: 'Community', href: '/community', description: 'Connect with users' }
],
  }, {
    title: 'Comp & Resources, '    icon: Users, color:, from-green-500 to-emerald-600
  ', '    items[
  '      {'
        name: 'About Us, href: '/about
  ', '        icon: Users, description:, Learn about Zion Tech Group', '        subItems['          { name: 'Our Mission, href:, /mission' }, '          { name: 'Leadership Team, href:, /leadership'
  ' },'          { name: 'Comp History, href:, /history' }, '          { name: 'Careers, href:, /careers
  ' }'        ]
  '      }, {'

        name: 'Resources,'        href: '/resources', icon: BookOpen, , description: 'Educational content and documentation, subItems[, { name: 'Documentation, href:, /docs' }, { name: 'API Reference, href:, /api-docs' }, { name: 'Blog & News, href:, /blog' }, { name: 'Case Studies, href:, /case-studies' }, { name: 'Whitepapers, href:, /whitepapers' }, { name: 'Webinars, href:, /webinars' }'
  '        ]'      }, {

        name: 'Support, , href: '/support, icon: HelpCircle, '        description:, Get help and support', subItems[
  '          { name: 'Contact Support, href:, /contact-support
  ' }, { name: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Training Programs, href:, /training'}, '          { name: 'Community Forum, href:, /community' },'          { name: 'Knowledge Base, href: '
  '/knowledge-base' }'        ]'      }]  }
]
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  };
  {'
    name: 'AI & Consciousness','
    href: '/ai-services',"
    icon: <Brain className="w-5 h-5" />,'
    description: 'Revolutionary AI consciousness and emotional intelligence','
    badge: 'New',
    isNew: true,
    children: ['
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },'
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },'
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },'
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },'
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },'
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },'
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },'
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },'
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },'
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },'
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },'
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },'
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },'
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  };
  {'
    name: 'Quantum & Emerging Tech','
    href: '/quantum-services',"
    icon: <Atom className="w-5 h-5" />,'
    description: 'Quantum computing and breakthrough technologies','
    badge: 'Hot',
    isHot: true,
    children: ['
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },'
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },'
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },'
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },'
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },'
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },'
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },'
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },'
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },'
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },'
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },'
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },'
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  };
  {'
    name: 'Enterprise IT','
    href: '/enterprise-it',"
    icon: <Shield className="w-5 h-5" />,'
    color: 'text-blue-400',
    items: ['
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },'
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },'
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },'
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },'
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },'
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },'
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },'
      { name: 'Quantum Networking', href: '/quantum-networking' },'
      { name: 'Quantum Data Center', href: '/quantum-data-center' },'
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },'
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  };
  {'
    name: 'Micro SAAS','
    href: '/micro-saas',"
    icon: <Rocket className="w-5 h-5" />,'
    description: 'Innovative business solutions for modern enterprises','
    badge: 'Popular',
    children: ['
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },'
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },'
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },'
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },'
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },'
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },'
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },'
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },'
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },'
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]
  };
  {'
    name: 'Creative & Design','
    href: '/creative-services',"
    icon: <Palette className="w-5 h-5" />,'
    description: 'AI-powered creative and design solutions',
    children: ['
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },'
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },'
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },'
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },'
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },'
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  };
  {'
    name: 'Research & Development','
    href: '/research-development',"
    icon: <BookOpen className="w-5 h-5" />,'
    description: 'Cutting-edge research and development services',
    children: ['
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },'
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },'
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },'
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },'
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },'
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  };
  {'
    name: 'Industry Solutions','
    href: '/industry-solutions',"
    icon: <Truck className="w-5 h-5" />,'
    description: 'Specialized solutions for specific industries',
    children: ['
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },'
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },'
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },'
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },'
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },'
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  };
  {'
    name: 'Pricing & Plans','
    href: '/pricing',"
    icon: <DollarSign className="w-5 h-5" />,'
    description: 'Flexible pricing options for all services',
    children: ['
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },'
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },'
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },'
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },'
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },'
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  };
  {'
    name: 'Resources','
    href: '/resources',"
    icon: <BookOpen className="w-5 h-5" />,'
    description: 'Educational resources and documentation',
    children: ['
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },'
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },'
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },'
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },'
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },'
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  };
  {'
    name: 'Support','
    href: '/support',"
    icon: <Settings className="w-5 h-5" />,'
    description: 'Technical support and customer service',
    children: ['
      { name: 'Help Center', href: '/help', description: 'Self-service support' },'
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },'
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },'
      { name: 'Training Programs', href: '/training', description: 'Skill development' },'
      { name: 'Community Forum', href: '/community', description: 'User community' },'
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]
  }
];

const resources = ['"
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }'"
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> }'"
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> }'"
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> }'"
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> }'"
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];
const supportLinks = ['
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
  const toggleSection = (title: string) => {}
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {}
      newExpanded.delete(title)
    } else {}
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)
  return (
    <motion.aside;
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
            <span>{contactInfo.website}</span>
          </div>
        </div>
      </div>
                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (
            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div;
                  initial={{ opacity: 0, height: 0 }}'
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
              {/* Search Bar */}"
              <div className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input"
                  type="text""
                  placeholder="Search services..."
                  value={searchQuery}
                        <Link;
                          key={service && service.name}
                          href={service && service.href}
                          onClick={onClose}"
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group">;"
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                            {service && service.name}
                          </div>;"
                          <div className="text-xs text-gray-500">;
                            {service && service.description}
                          </div>;
                        </Link>;
                      ))}
                      {filteredServices && filteredServices.length > 5 && (;"
                        <div className="text-xs text-cyan-400 text-center">;
                          +{filteredServices && filteredServices.length - 5} more results;
                        </div>;
                      )}
                    </div>;
                  ) : (;"
                    <div className="text-sm text-gray-500 text-center py-2">;
                      No services found;
                    </div>;
                  )}
                </div>;
              )}
            {/* Contact Information */}"
            <div className="p-6 border-b border-cyan-500/30">"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">"
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>"
              <div className="space-y-3">"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Phone className="w-4 h-4 text-cyan-400" />"`
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4 text-cyan-400" />"`
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>"
                <div className="flex items-start space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />"
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            {/* Quick Stats */}"
            <div className="p-6 border-b border-cyan-500/30">;"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;"
                <TrendingUp className="w-5 h-5 text-cyan-400" />;
                <span>Company Stats</span>;
              </h3>;"
              <div className="grid grid-cols-2 gap-4">;
                {stats && stats.map((stat, index) => (;
                  <motion&& motion.div;
                    key={stat && stat.label}
                    initial={{ opacity: 0, scale: 0 && 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0 && 0.3, delay: index * 0 && 0.1 }}"
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">;"
                    <div className="text-2xl font-bold text-white mb-1">{stat && stat.value}</div>;"
                    <div className="text-xs text-gray-400">{stat && stat.label}</div>;
                  </motion && motion.div>;
                ))}
            {/* Quick Links */}"
            <div className="p-6 border-b border-cyan-500/30">;"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;"
                <Star className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;"
              <div className="space-y-2">;
                {quickLinks && quickLinks.map((link) => (;
                  <Link;
                    key={link && link.name}
                    href={link && link.href}
                    onClick={onClose}"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;"
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">;
                      {link && link.icon}
                    </div>;"
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                      {link && link.name}
                    </span>;
                  </Link>;
                ))}
            {/* Service Categories */}"
            <div className="p-6 border-b border-cyan-500/30">;"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;"
                <Rocket className="w-5 h-5 text-cyan-400" />;
                <span>Service Categories</span>;
              </h3>;"
              <div className="space-y-2">;
                {sidebarItems && sidebarItems.map((item) => (;
                  <div key={item && item.name}>;

                      {filtered_services.slice (0, 5).map ((service) => (
                        <Link;
                          key={service.name}
                          href={service.href}
            {/* Contact Information */}"
            <div className="p-6 border-b border-cyan-500/30">"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">"
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>"
              <div className="space-y-3">"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Phone className="w-4 h-4 text-cyan-400" />"`
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-gray-300">"
                  <Mail className="w-4 h-4 text-cyan-400" />"`
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>"
                <div className="flex items-start space-x-3 text-gray-300">"
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />"
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            {/* Quick Stats */}"
            <div className="p-6 border-b border-cyan-500/30">"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">"
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>"
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div;
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}

                {quick_links.map ((link) => (
                  <Link;
                    key={link.name}
                    href={link.href}

                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

                          {item.name}
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div;
                      onClick={() => toggleCategory(item && item.name)}"
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group";
                    >;"
                      <div className="flex items-center space-x-3">;'`
                        <div className={`w-8 h-8 bg-gradient-to-r ${item && item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>;
                          {item && item.icon}
                        </div>;"
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                          {item && item.name}
                        </span>;
                      </div>;"
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >"
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>"
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Quick Links */}"
            <div className="p-6 border-b border-cyan-500/30">"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">"
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>"
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link;
                    key={link.name}
                    href={link.href}
                    onClick={onClose}"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >"
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.icon}
                    </div>"
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Service Categories */}"
            <div className="p-6 border-b border-cyan-500/30">"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">"
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>"
              <div className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.name}>
                    <button;
                      onClick={() => toggleCategory(item.name)}"
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >"
                      <div className="flex items-center space-x-3">'`
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>"
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight;`
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${'
                          expandedCategory === item && item.name ? 'rotate-90' : ''`
                        }`} 
                      />;
                    </button>;

                    <AnimatePresence>;
                      {expandedCategory === item && item.name && (;
                        <motion&& motion.div;
                          initial={{ opacity: 0, height: 0 }}'
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0 && 0.2 }}"
                          className="ml-8 mt-2 space-y-1">;
                          {item && item.children?.map((child) => (;
                            <Link;
                              key={child && child.name}
                              href={child && child.href}
                              onClick={onClose}"
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group">;"
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">;
                                {child && child.name}
                              </span>;
                              {child && child.badge && (;"
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">;
                                  {child && child.badge}
                                </span>;
                              )}
                            </Link>;
                          ))}
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ))}
            {/* Quick Links */}"
            <div className="p-6 border-b border-cyan-500/30">;"
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;"
                <Zap className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;"
              <div className="space-y-2">;
                <Link"
                  href="/contact"
                  onClick={onClose}"
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;"
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    Contact Us;
                  </div>;"
                  <div className="text-xs text-gray-500">Get in touch with our team</div>;
                </Link>;
                <Link"
                  href="/pricing"
                  onClick={onClose}"
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;"
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    View Pricing;
                  </div>;"
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>;
                </Link>;
                <Link"
                  href="/about"
                  onClick={onClose}
        {/* CTA Section */}"
        <div className="pt-4 border-t border-gray-800 px-3">;
          <Link"
            href="/contact"
                        </span>;
                      </div>;
                      <ChevronRight;`
                        className={`w - 4 h - 4 text - gray - 400 transition - transform duration - 200 ${'
                          expanded_category === item.name ? 'rotate - 90' : '';`
                        }`}
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, height: 0 }}'
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                                </span>)}
                            </Link>))}
                        </motion.div>)}
                    </AnimatePresence>;
                  </div>))}
              </div>;
            </div>;

                </Link>;
                <Link;"
                  href="/pricing";

                </Link>;
                <Link;"
                  href="/about";

          </Link>;
        </div>;
      </div>;
      {/* Floating Elements */}'
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown,'  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;'
} from 'lucide-react && react.ts;'
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown, '  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;'
} from 'lucide-react.ts;
interface SidebarItem {name: string;
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
category?: string}"
const sidebarSections = []"      } {";
  badge?: string,
  color?: string,
  is_new?: boolean,
  is_hot?: boolean,
  is_premium?: boolean,
category?: string}"
const sidebar_sections = []"      } {";"
";"
        name: "Quantum Computing", "        href: "/quantum - services", icon: Atom, "        description: "Next - generation quantum computing solutions", sub_items["          { name: "Quantum Cloud Infrastructure", href: "/quantum - cloud - infrastructure" } { name: "Quantum Bio - Computing", href: "/quantum - bio - computing" } { name: "Quantum Energy Platform", href: "/quantum - energy - platform" } { name: "Quantum Materials Discovery", href: "/quantum - materials - discovery" } { name: "Quantum Robotics", href: "/quantum - robotics" } { name: "Quantum Internet Security", href: "/quantum - internet - security" } { name: "Quantum Logistics", href: "/quantum - logistics - optimization" } { name: "Quantum Cybersecurity", href: "/quantum - cybersecurity - platform" }"        ]"      } {";"
";"
        name: "Enterprise IT", "        href: "/enterprise - it", icon: Shield, "        description: "Enterprise - grade IT infrastructure and security", sub_items["          { name: "Edge Computing Orchestrator", href: "/edge - computing - orchestration" } { name: "Zero Trust Security Platform", href: "/zero - trust - network - architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain - infrastructure - platform" } { name: "AI - Powered DevOps", href: "/ai - powered - devops" } { name: "Quantum Networking", href: "/quantum - networking" } { name: "Autonomous IT Operations", href: "/autonomous - it - operations" } { name: "Quantum Data Center", href: "/quantum - data - center" } { name: "Quantum Cloud Migration", href: "/quantum - cloud - migration" }"        ]"      } {";"
";"
        name: "Micro SAAS", "        href: "/micro - saas", icon: Rocket, "        description: "AI - powered micro SAAS solutions", sub_items["          { name: "AI Content Factory Platform", href: "/ai - content - factory" } { name: "CRM Intelligence & Automation", href: "/crm - intelligence - automation" } { name: "AI Decision Engine Platform", href: "/ai - decision - engine" } { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" } { name: "AI HR & Talent Platform", href: "/ai - hr - talent - platform" } { name: "Financial Analytics Platform", href: "/financial - analytics - platform" } { name: "Supply Chain Intelligence", href: "/supply - chain - intelligence" } { name: "Marketing Automation Platform", href: "/marketing - automation - platform" } { name: "Project Management AI", href: "/project - management - ai" }"        ]"      } {";"
";"
        name: "Space Technology", "        href: "/space - tech", icon: Globe, "        description: "Cutting - edge space exploration and mining", sub_items["          { name: "Space Mining Platform", href: "/space - mining - platform" } { name: "Satellite Technology", href: "/satellite - technology" } { name: "Space Resource Management", href: "/space - resource - management" } { name: "Interplanetary Communication", href: "/interplanetary - communication" }"        ]"      } {";"
";"
        name: "Emerging Tech", "        href: "/emerging - tech", icon: Sparkles, "        description: "Future technologies and innovations", sub_items["          { name: "Brain - Computer Interface", href: "/brain - computer - interface" } { name: "Autonomous Vehicle AI", href: "/autonomous - vehicle - ai" } { name: "Advanced Robotics", href: "/advanced - robotics" } { name: "Biotechnology Platform", href: "/biotechnology - platform" }"        ];
    ];"
";"
        name: "Healthcare", href: "/healthcare - solutions", "        icon: Heart, description: "AI - powered healthcare diagnostics and solutions", "        sub_items["          { name: "AI Healthcare Diagnostics", href: "/ai - healthcare - diagnostics" }, "          { name: "Medical Imaging AI", href: "/medical - imaging - ai" }, "          { name: "Drug Discovery Platform", href: "/drug - discovery - platform" }"        ]"      } {";"
";"
        name: "Financial Services", "        href: "/financial - solutions", icon: BarChart3, "        description: "Advanced financial intelligence and analytics", sub_items["          { name: "AI Financial Intelligence", href: "/ai - financial - intelligence" } { name: "Quantum Trading Platform", href: "/quantum - financial - trading" } { name: "Risk Assessment AI", href: "/risk - assessment - ai" }"        ]"      } {";"
";"
";"
        name: "Retail & E - commerce", "        href: "/retail - solutions", icon: Eye, "        description: "E - commerce optimization and retail intelligence", sub_items["          { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" } { name: "Customer Behavior AI", href: "/customer - behavior - ai" } { name: "Inventory Management AI", href: "/inventory - management - ai" }"        ]"      } {";"
";"
        name: "Government & Defense", "        href: "/government - solutions", icon: Shield, "        description: "Secure government and defense solutions", sub_items["          { name: "Cybersecurity Platform", href: "/quantum - cybersecurity - platform" } { name: "Data Protection AI", href: "/data - protection - ai" } { name: "Threat Detection AI", href: "/threat - detection - ai" }"        ]"      } {";"
";"
        name: "Education", "        href: "/education - solutions", icon: Award, "        description: "AI - powered education and learning platforms", sub_items["          { name: "AI Education Platform", href: "/ai - education - platform" } { name: "Personalized Learning AI", href: "/personalized - learning - ai" } { name: "Student Performance AI", href: "/student - performance - ai" }"        ];"
";"
  ","        icon: Users, description:,";"
  Learn about Zion Tech Group",";"
  "        subItems["          { name: "Our Mission, href:,";"
  /mission" },";"
  /careers";"
  " }"        ]";"
  "      } {";"
        name: "Resources", "        href: "/resources", icon: BookOpen, "        description: "Educational content and documentation", subItems["          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api-docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case-studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }"        ]"      } {";"
    title: "Comp & Resources", "    icon: Users, color: "from - green - 500 to - emerald - 600", "    items["      {";"
ursor / automate - test - fix - improve - and - merge - code - 99d1, ";"
name: "About Us, href: "/about","
  ", "        icon: Users, description:, ";"
  Learn about Zion Tech Group", ";"
  "        sub_items["          { name: "Our Mission, href:, ";"
  /mission" }, ";"
  "          { name: "Leadership Team, href:,"
  /leadership";"
  " }, "          { name: "Comp History, href:, ";"
  /history" }, ";"
  "          { name: "Careers, href:,"
  /careers";"
  " }"        ]";"
  "      } {"
";"
        name: "Resources", "        href: "/resources", icon: BookOpen, "        description: "Educational content and documentation", sub_items["          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api - docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case - studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }"        ]"      } {";"
";"
        name: "Support", "        href: "/support", icon: HelpCircle, "        description: "Get help and support", sub_items["          { name: "Contact Support", href: "/contact - support" } { name: anyanyanyanyanyanyanyanyanyanyanyanyany & apos, Training Programs", href: "/training", "}, "          { name: "Community Forum", href: "/community" }, "          { name: "Knowledge Base", href: "/knowledge - base" }"        ]"      }];"
    title: anyanyanyanyanyanyanyanyanyanyanyanyany"Revolutionary: Services, ", ";"
    icon: Za, p, ";"
    color: "from - cyan - 500: to - blue - 600, ", ";

          { name: "Interplanetary Communication", href: "/interplanetary-communication" }
        ];
const sidebar_sections = [];
},

          { name: "AI Legal Contract Analyzer", href: "/ai-legal-contract-analyzer" }
      new_expanded.delete (section_title)} else: {      new_expanded.add (section_title)}
    setExpandedSections (new_expanded)}
  const filtered_services = sidebar_sections.flat_map (section =>;
    section.items.flat_map (item: =>,
      item.sub_items?.filter (child: =>,
  is_open: boolean,
on_close: ()               => void}
export default function EnhancedSidebar2025 (...args[]: any):  {}
export default function EnhancedSidebar2025 (...args[]: any):  {};
;
  const [expanded_sections, setExpandedSections] = useState < Set < string>>(new Set ());
}
interface EnhancedSidebar2025Props {}
  on_close: () => void}
export default /**;
 * EnhancedSidebar2025 - Function description;
 */
function EnhancedSidebar2025() {}
export default /**;
 * EnhancedSidebar2025 - Function description;
 */
function EnhancedSidebar2025() {}
;
  const router = use_router ();
}
  const filtered_services = sidebar_sections.flat_map (section =>;
    section.items.flat_map (item =>;
      item.sub_items?.filter (child =>;
  const [expanded_sections, setExpandedSections] = useState < Set < string>>(new Set ());
}
  const [expanded_items, setExpandedItems] = useState < Set < string>>(new Set ());
}
}
      ) |[];
    );
}
    <>;
      {/* comment */}
      <AnimatePresence>;
        {isOpen && (;
          <motion && motion.div>;
initial = {{ opacity: 0}}"
            animate="{{" opacity: 1}}";"
            exit="{{" opacity: 0}}";"
            transition="{{" duration: 0 && 0.3}}";"
            className="fixed: inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden,";"
            onClick="{onClos,e}""return (
    <>;
  const filteredServices = sidebarSections.flatMap(section =>
    section.items.flatMap(item =>
      item.subItems?.filter(child =>
        child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        child.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    )
  )

      newExpanded.delete(itemName)} else {
      newExpanded.add(itemName)}
    setExpandedItems(newExpanded)}

  useEffect(() => {
    if (isOpen) {
document.body.style.overflow =
  'hidden'} else {''
  '      document.body.style.overflow = 'unset
  '}'
   return () => {
      document.body.style.overflow =
  'unset'}}, [isOpen])'  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === href;return ('
    <>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      {/* Backdrop */}
      <AnimatePresence>;
        {isOpen && (;
          <motion && motion.div>;
initial = {{ opacity: 0}}"
            animate="{{" opacity: 1}}";"
            exit="{{" opacity: 0}}";"
            transition="{{" duration: 0 && 0.3}}";"
            className="fixed: inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden,";"
            onClick="{onClos,e}"";
      new_expanded.delete (section_title)} else {}
      new_expanded.add (section_title)}
    setExpandedSections (new_expanded)}
  const filtered_services = sidebar_sections.flat_map (section =>;
    section.items.flat_map (item =>;
      item.sub_items?.filter (child =>;
child.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        child.description?.toLowerCase ().includes (search_query.toLowerCase ());
}
      ) || []);
}
      new_expanded.delete (item_name)} else: {,
      new_expanded.delete (item_name)} else {}
  const toggle_section = (section_title: string) =>: any {,
    const new_expanded = new Set (expanded_sections),
    if () {) {}
  $2;
}
      new_expanded.delete (section_title)} else {}
;
  const toggle_item = (item_name: string) =>: any {,
    const new_expanded = new Set (expanded_items),
    if () {) {}
  $2;
}
  ),
      new_expanded.delete (item_name)} else {child.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        child.description?.toLowerCase ().includes (search_query.toLowerCase ())) || []);
      new_expanded.delete (item_name)} else: {,
      new_expanded.delete (item_name)} else {}
  const toggle_section = (section_title: string) =>: any {,
    const new_expanded = new Set (expanded_sections),
    if () {) {}
  $2;
}
      new_expanded.delete (section_title)} else {}
  const toggle_item = (item_name: string) =>: any {,
    const new_expanded = new Set (expanded_items),
    if () {) {}
  $2;
}
  ),
      new_expanded.delete (item_name)} else {}
new_expanded.add (item_name)}
    setExpandedItems (new_expanded)}
  useEffect (() => {}
    if: (is_open) {"
","
      document.body.style.overflow = "hidden"} else {";"
";"
      document.body.style.overflow: = "unset"}";
;'
document.body.style.overflow = 'hidden'} else {'
      document.body.style.overflow = 'unset'}
    return () => {'
      document.body.style.overflow = 'unset'}}, [is_open]);
  const is_active = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               =>: any router.pathname === href;return (
    <>;
      {/* comment */}
      <AnimatePresence>;
        {is_open && (
          <motion.div>;

            on_click="{on_clos, e}""return (
    <>;
      {/* Backdrop */}
      <AnimatePresence>;
        {is_open && (
          <motion.div>;

            initial="{{" opacity: 0 }}
            initial = {{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
      </AnimatePresence>;

        </div>;
      {/* Sidebar */}'
    damping: 25,'  stiffness: 200 '}}`
className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto}

                <p className="text-gray-400 text-sm>Revolutionary Technology</p>              </div>"            </div>;
            <button;
              onClick={onClose}"
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"              <X className="w-5 h-5 text-gray-400 />            </button>"          </div>;
          {/* Contact Bar */}"
          <div className="space-y-3>            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Phone className="w-4 h-4 text-cyan-400 />              <span className="text-sm text-gray-300">{contactInfo && contactInfo.mobile}</span>"            </div>"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Mail className="w-4 h-4 text-cyan-400" />"              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>            </div>"          </div>;
        </div>;"
        {/* comment */}";
          {/* comment */}
        {/* Navigation Content */}"
        <div className="p-6 space-y-6>          {/* Home Link */}"          <Link"
            href="/""            onClick={onClose}"            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"            <Home className="w-5 h-5 text-cyan-400 />            <span className="text-white font-semibold">Home</span>"          </Link>";
          {/* Service Sections */}
          {sidebarSections && sidebarSections.map((section, sectionIndex) => (;"
            <div key={sectionIndex} className="space-y-3>              <button"                onClick={() => toggleSection(section && section.title)}"`
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover: bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group"                <div className="flex items-center gap-3>                  <div className={`w-8 h-8 bg-gradient-to-r ${section && section.color} rounded-lg flex items-center justify-center`}>"                    <section && section.icon className="w-4 h-4 text-white />                  </div>"                  <span className="text-white font-semibold>{section && section.title}</span>                </div>"                <ChevronDownclassName={w-4 h-4 text-gray-400 transition-transform duration-300 ${`'
                    expandedSections && expandedSections.has(section && section.title) ? 'rotate-180' : '`
'                  }`}'                />              </button><AnimatePresence>;'
initial={{ coordinate_x: '-100%' }}'        animate={{ coordinate_x: is_open ? 0 : '-100%' }}'        transition = {';'
  { type: 'spring','
    damping: 25, '  stiffness: 200 '}}`
className={`fixed left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto}

'                  }`}'                />              </button><AnimatePresence>;
                {expanded_sections.has (section.title) && (
                    initial = {}
const EnhancedSidebar2025: React.FC < EnhancedSidebar2025Props> = ({ is_open, on_close }) => {}
  const [expanded_sections, setExpandedSections] = useState < string[]>([]);
}
  const [expanded_items, setExpandedItems] = useState < string[]>([]);

          {/* comment */}";
          </Link>;
          {/* comment */}
            {/* Search */}"
            <div className="relative">;
              />;
            </div>;
          </div>;
                </div>;

                              href="{item.href}"";
                        {/* Sub-items: */}
                        {/* Sub-items */}
                            {expandedItems && expandedItems.has(item && item.name) && (;"
";
                                        {child.name}

                              <p className="text-gray-500" text-xs>{item && item.description}</p>;
                            </div>;"
}"}
                                  />;
                          )}
                        </button>;
                        {/* comment */}
initial = {}
  { opacity: 0,
  height: 0,
, ,,
}}
{ opacity: 1,'
  height: 'auto' 
}}
                                exit = {}
                            )}
                          </AnimatePresence>;
                        )}
                      </div>;
                    ))}
                )}
              </AnimatePresence>;
            </div>;
          ))}
;
{ opacity: 0, height: 0}}

                              </motion.div>)}
                          </AnimatePresence>)}
                      </div>))}
                  </motion.div>)}
              </AnimatePresence>;
            </div>))}

              </Link>;
            </div>;
      </motion && motion.div>;
    </>;"
";