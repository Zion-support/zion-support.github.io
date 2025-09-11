

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}];
];</div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50" ></div> </div> <div> <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" > Zion Tech Group </h2> <p className="text-xs text-gray-400" >Navigation</p> </div> </div> </div> </div> </div> {
  section.badge
}</span>)
}</div>) : (<ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />)
}</button> <AnimatePresence> > <CloseIcon className="w-5 h-5" /> </button> </div> </div> </a>) )
}+ {
  filteredServices.length - 5
}more results </div>)
}</div>) : (<div className="text-sm text-gray-500 text-center py-2" > No services found </div>)
}</div>)
}</div> </div> </div> </div> </motion.div>) )
}</div> </div> </span> </a>) )
}</div> </div> </span> </div> <ChevronRight className= {
  `w-4 h-4 text-gray-400 transition-transform duration-200 $ {
  expandedCategory === item.name ? 'rotate-90' : ''
}`
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name
}{
  child.badge
}</span>)
}</a>) )
}</motion.div>)
}</AnimatePresence> </div>) )
}</div> </div> <span>Quick Links</span> </h3> <div className="space-y-2" > <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > Contact Us </div> <div className="text-xs text-gray-500" >Get in touch with our team</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > View Pricing </div> <div className="text-xs text-gray-500" >Explore our pricing plans</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > About Us </div> <div className="text-xs text-gray-500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-blue-400" >1000+</div> <div className="text-xs text-gray-400" >Clients</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-purple-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-green-400" >99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > <span>Get Started Today</span> <ArrowRight className="w-4 h-4 ml-2 inline" /> </a> </div> </div> </motion.aside>)
};export default EnhancedSidebar2025;
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin;
  Brain, Atom, Shield, Rocket, DollarSign;
  Globe, Cpu, Database, Lock, Zap;
  TrendingUp, Award, CheckCircle, Clock;
  ArrowRight, Search, Menu, X as CloseIcon;
  Target, BookOpen, Truck, BarChart3;
  Sparkles, Eye, Lightbulb, Palette, Code
} from 'lucide-react';

interface SidebarItem {
  name: string,
  href: string,
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const sidebarItems: SidebarItem[] = [
  {
    name: 'All Services'
    href: '/comprehensive-services-showcase-2025'
    icon: <Globe className="w-5 h-5" />
    description: 'Complete portfolio of all technology services'
    badge: 'Showcase'
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' }
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' }
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' }
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' }
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' }
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' }
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' }
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
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
  {
    name: 'Micro SAAS'
    href: '/micro-saas'
    icon: <Rocket className="w-5 h-5" />
    description: 'Innovative business solutions for modern enterprises'
    badge: 'Popular'
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' }
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' }
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' }
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' }
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' }
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' }
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' }
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' }
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' }
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]
  }
  {
    name: 'Creative & Design'
    href: '/creative-services'
    icon: <Palette className="w-5 h-5" />
    description: 'AI-powered creative and design solutions'
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' }
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' }
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' }
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' }
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' }
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  }
  {
    name: 'Research & Development'
    href: '/research-development'
    icon: <BookOpen className="w-5 h-5" />
    description: 'Cutting-edge research and development services'
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' }
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' }
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' }
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' }
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' }
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  }
  {
    name: 'Industry Solutions'
    href: '/industry-solutions'
    icon: <Truck className="w-5 h-5" />
    description: 'Specialized solutions for specific industries'
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' }
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' }
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' }
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' }
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' }
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  }
  {
    name: 'Pricing & Plans'
    href: '/pricing'
    icon: <DollarSign className="w-5 h-5" />
    description: 'Flexible pricing options for all services'
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' }
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' }
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' }
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' }
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' }
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  }
  {
    name: 'Resources'
    href: '/resources'
    icon: <BookOpen className="w-5 h-5" />
    description: 'Educational resources and documentation'
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' }
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' }
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' }
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' }
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' }
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  }
  {
    name: 'Support'
    href: '/support'
    icon: <Settings className="w-5 h-5" />
    description: 'Technical support and customer service'
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' }
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' }
      { name: 'Training Programs', href: '/training', description: 'Skill development' }
      { name: 'Community Forum', href: '/community', description: 'User community' }
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]
  }
];
  };
  {;
    name: 'AI & Consciousness',;
    href: '/ai-services',;
    icon: <Brain className="w-5 h-5" />,;
    description: 'Revolutionary AI consciousness and emotional intelligence',;
    badge: 'New',;
    isNew: true,;
    children: [;
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },;
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },;
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },;
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },;
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },;
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },;
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },;
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },;
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },;
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },;
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },;
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },;
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },;
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ];
  };
  {;
    name: 'Quantum & Emerging Tech',;
    href: '/quantum-services',;
    icon: <Atom className="w-5 h-5" />,;
    description: 'Quantum computing and breakthrough technologies',;
    badge: 'Hot',;
    isHot: true,;
    children: [;
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },;
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },;
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },;
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },;
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },;
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },;
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },;
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },;
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },;
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },;
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },;
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },;
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ];
  };
  {;
    name: 'Enterprise IT',;
    href: '/enterprise-it',;
    icon: <Shield className="w-5 h-5" />,;
    color: 'text-blue-400',;
    items: [;
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },;
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },;
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },;
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },;
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },;
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },;
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },;
      { name: 'Quantum Networking', href: '/quantum-networking' },;
      { name: 'Quantum Data Center', href: '/quantum-data-center' },;
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },;
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ];
  };
  {;
    name: 'Micro SAAS',;
    href: '/micro-saas',;
    icon: <Rocket className="w-5 h-5" />,;
    description: 'Innovative business solutions for modern enterprises',;
    badge: 'Popular',;
    children: [;
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },;
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },;
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },;
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },;
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },;
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },;
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },;
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },;
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },;
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ];
  };
  {;
    name: 'Creative & Design',;
    href: '/creative-services',;
    icon: <Palette className="w-5 h-5" />,;
    description: 'AI-powered creative and design solutions',;
    children: [;
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },;
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },;
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },;
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },;
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },;
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ];
  };
  {;
    name: 'Research & Development',;
    href: '/research-development',;
    icon: <BookOpen className="w-5 h-5" />,;
    description: 'Cutting-edge research and development services',;
    children: [;
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },;
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },;
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },;
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },;
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },;
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ];
  };
  {;
    name: 'Industry Solutions',;
    href: '/industry-solutions',;
    icon: <Truck className="w-5 h-5" />,;
    description: 'Specialized solutions for specific industries',;
    children: [;
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },;
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },;
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },;
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },;
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },;
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ];
  };
  {;
    name: 'Pricing & Plans',;
    href: '/pricing',;
    icon: <DollarSign className="w-5 h-5" />,;
    description: 'Flexible pricing options for all services',;
    children: [;
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },;
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },;
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },;
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },;
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },;
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ];
  };
  {;
    name: 'Resources',;
    href: '/resources',;
    icon: <BookOpen className="w-5 h-5" />,;
    description: 'Educational resources and documentation',;
    children: [;
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },;
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },;
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },;
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },;
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },;
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ];
  };
  {;
    name: 'Support',;
    href: '/support',;
    icon: <Settings className="w-5 h-5" />,;
    description: 'Technical support and customer service',;
    children: [;
      { name: 'Help Center', href: '/help', description: 'Self-service support' },;
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },;
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },;
      { name: 'Training Programs', href: '/training', description: 'Skill development' },;
      { name: 'Community Forum', href: '/community', description: 'User community' },;
];
}];
];</div> <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg blur - lg opacity - 50" ></div> </div> <div> <h2 className="text - lg font - bold bg - gradient - to - r from - cyan - 400 to - blue - 400 bg - clip - text text - transparent" > Zion Tech Group </h2> <p className="text - xs text - gray - 400" >Navigation</p> </div> </div> </div> </div> </div> {
  section.badge;
}</span>);
}</div>) : (<ChevronRight className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />);
}</button> <AnimatePresence> > <CloseIcon className="w - 5 h - 5" /> </button> </div> </div> </a>) );
}+ {
  filtered_services.length - 5;
}more results </div>);
}</div>) : (<div className="text - sm text - gray - 500 text - center py - 2" > No services found </div>);
}</div>);
}</div> </div> </div> </div> </motion.div>) );
}</div> </div> </span> </a>) );
}</div> </div> </span> </div> <ChevronRight className= {
  `w - 4 h - 4 text - gray - 400 transition - transform duration - 200 $ {
  expanded_category === item.name ? 'rotate - 90' : '';
}`;
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name;
}{
  child.badge;
}</span>);
}</a>) );
}</motion.div>);
}</AnimatePresence> </div>) );
}</div> </div> <span > Quick Links</span> </h3> <div className="space - y-2" > <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > Contact Us </div> <div className="text - xs text - gray - 500" >Get in touch with our team</div> </a> <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > View Pricing </div> <div className="text - xs text - gray - 500" >Explore our pricing plans</div> </a> <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > About Us </div> <div className="text - xs text - gray - 500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - blue - 400" >1000+</div> <div className="text - xs text - gray - 400" >Clients</div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - purple - 400" >24 / 7</div> <div className="text - xs text - gray - 400" >Support</div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - green - 400" >99.9%</div> <div className="text - xs text - gray - 400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w - full text - center px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium rounded - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25" > <span > Get Started Today</span> <ArrowRight className="w - 4 h - 4 ml - 2 inline" /> </a> </div> </div> </motion.aside>);
}export default EnhancedSidebar2025;
const sidebar_items: SidebarItem[] = [;
  {
    name: 'All Services',
    href: '/comprehensive - services - showcase - 2025',
    icon: <Globe className="w - 5 h - 5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    children: [;
      { name: 'View All Services', href: '/comprehensive - services - showcase - 2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive - services - showcase - 2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive - services - showcase - 2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive - services - showcase - 2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary - 2025 - services - showcase', description: 'Cutting - edge solutions' },
      { name: '2026 Services', href: '/revolutionary - 2026 - services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary - 2027 - services - showcase', description: 'Future - ready services' },
      { name: 'Ultimate 2026', href: '/ultimate - 2026 - services - showcase', description: 'Premium service collection' }
    ];
  }
  {
    name: 'AI & Consciousness',
    href: '/ai - services',
    icon: <Brain className="w - 5 h - 5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    is_new: true,
    children: [;
      { name: 'AI Consciousness Evolution', href: '/ai - consciousness - evolution - 2025', description: 'Emotional intelligence and self - awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai - quantum - neural - network', description: 'Hybrid AI - Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai - predictive - maintenance - platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai - content - personalization - engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem - manager', description: 'Self - managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance - framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai - creativity - studio', description: 'AI - powered creative content' },
      { name: 'AI Education Platform', href: '/ai - education - platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai - healthcare - diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai - financial - intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai - sustainability - platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai - legal - contract - analyzer', description: 'Legal document analysis' }
    ];
  }
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum - services',
    icon: <Atom className="w - 5 h - 5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    is_hot: true,
    children: [;
      { name: 'Space Resource Mining', href: '/space - resource - mining - platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum - internet - security - platform', description: 'Unbreakable encryption' },
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface - platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai - platform', description: 'Self - driving AI systems' },
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing - platform', description: 'Quantum - biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum - robotics', description: 'Quantum - enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity - platform', description: 'Next - gen security' },
      { name: 'Quantum Logistics', href: '/quantum - logistics - optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum - metaverse', description: 'Quantum - enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum - iot', description: 'Quantum - secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum - financial - trading', description: 'Quantum trading algorithms' }
    ];
  }
  {
    name: 'Enterprise IT',
    href: '/enterprise - it',
    icon: <Shield className="w - 5 h - 5" />,
    color: 'text - blue - 400',
    items: [;
      { name: 'Quantum - Secure Cloud', href: '/quantum - secure - cloud - infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous - it - operations - center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge - computing - orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain - infrastructure - platform', badge: 'New' },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops - platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum - cloud - infrastructure - platform' },
      { name: 'Zero Trust Security', href: '/zero - trust - security - platform' },
      { name: 'Quantum Networking', href: '/quantum - networking' },
      { name: 'Quantum Data Center', href: '/quantum - data - center' },
      { name: 'Quantum Cybersecurity', href: '/quantum - cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum - cloud - migration' }
    ];
  }
  {
    name: 'Micro SAAS',
    href: '/micro - saas',
    icon: <Rocket className="w - 5 h - 5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [;
      { name: 'AI Business Intelligence', href: '/ai - business - intelligence - suite', description: 'Data - driven insights' },
      { name: 'AI Content Generation', href: '/ai - content - generation - platform', description: 'Automated content creation' },
      { name: 'AI Customer Service', href: '/ai - customer - service - automation', description: 'Intelligent support automation' },
      { name: 'AI Sales Intelligence', href: '/ai - sales - intelligence - platform', description: 'Sales performance optimization' },
      { name: 'AI Marketing Automation', href: '/ai - marketing - automation - suite', description: 'Campaign optimization' },
      { name: 'AI Project Management', href: '/ai - project - management - platform', description: 'Intelligent project coordination' },
      { name: 'AI Financial Analytics', href: '/ai - financial - analytics - platform', description: 'Financial insights and optimization' },
      { name: 'AI HR Management', href: '/ai - hr - management - platform', description: 'HR operations automation' },
      { name: 'AI Supply Chain', href: '/ai - supply - chain - optimization', description: 'Supply chain optimization' },
      { name: 'AI Legal Analysis', href: '/ai - legal - document - analysis', description: 'Legal document processing' }
    ];
  }
  {
    name: 'Creative & Design',
    href: '/creative - services',
    icon: <Palette className="w - 5 h - 5" />,
    description: 'AI - powered creative and design solutions',
    children: [;
      { name: 'AI Creativity Studio', href: '/ai - creativity - studio', description: 'AI - powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse - development - studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum - metaverse - platform', description: 'Quantum - enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d - design - platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai - video - generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai - music - composition', description: 'AI - generated music' }
    ];
  }
  {
    name: 'Research & Development',
    href: '/research - development',
    icon: <BookOpen className="w - 5 h - 5" />,
    description: 'Cutting - edge research and development services',
    children: [;
      { name: 'AI Autonomous Research', href: '/ai - autonomous - research - assistant', description: 'Self - directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum - materials - discovery - platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space - technology - research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech - ai - research - platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience - research - platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate - research - ai', description: 'Environmental research automation' }
    ];
  }
  {
    name: 'Industry Solutions',
    href: '/industry - solutions',
    icon: <Truck className="w - 5 h - 5" />,
    description: 'Specialized solutions for specific industries',
    children: [;
      { name: 'Healthcare AI', href: '/healthcare - ai - solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial - ai - solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing - ai - solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail - ai - solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education - ai - solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation - ai - solutions', description: 'Smart transportation' }
    ];
  }
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className="w - 5 h - 5" />,
    description: 'Flexible pricing options for all services',
    children: [;
      { name: '2025 Pricing', href: '/pricing - 2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing - 2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise - pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup - pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom - pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi - calculator', description: 'Calculate your return on investment' }
    ];
  }
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w - 5 h - 5" />,
    description: 'Educational resources and documentation',
    children: [;
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api - docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step - by - step guides' },
      { name: 'Case Studies', href: '/case - studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research - papers', description: 'Academic publications' }
    ];
  }
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className="w - 5 h - 5" />,
    description: 'Technical support and customer service',
    children: [;
      { name: 'Help Center', href: '/help', description: 'Self - service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live - chat', description: 'Real - time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ];
  }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> }
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> }
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> }
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> }
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];
const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' }
  { name: 'Documentation', href: '/docs', description: 'Technical guides' }
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' }
  { name: 'Status Page', href: '/status', description: 'Service status' }
  { name: 'Training', href: '/training', description: 'Learn our platforms' }
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
=======
;
const resources = [;
  { name: 'Documentation', href: '/docs', icon: <FileText className="w - 4 h - 4" /> },
  { name: 'API Reference', href: '/api - documentation', icon: <Settings className="w - 4 h - 4" /> },
  { name: 'Case Studies', href: '/case - studies', icon: <BookOpen className="w - 4 h - 4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w - 4 h - 4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w - 4 h - 4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w - 4 h - 4" /> }
];
;
const support_links = [;
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api - documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
;
  const toggle_section = (title: string) =>: any {
    const new_expanded = new Set (expanded_sections),
    if () {) {
  $2
}
      new_expanded.delete (title);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } else {
      new_expanded.add (title);
    }


const resources = [;
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },;
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },;
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },;
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },;
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },;
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];
const supportLinks = [;
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },;
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },;
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },;
  { name: 'Status Page', href: '/status', description: 'Service status' },;
  { name: 'Training', href: '/training', description: 'Learn our platforms' },;
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
  const toggleSection = (title: string) => {;
    const newExpanded = new Set(expandedSections),;
    if (newExpanded && newExpanded.has(title)) {;
      newExpanded && newExpanded.delete(title);
    } else {;
      newExpanded && newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };
  const filteredServices = sidebarItems && sidebarItems.flatMap(item =>;
    item && item.children?.filter(child =>;
      child && child.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      child && child.description?.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    ) || [];

  );
  return (
    <motion&& motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0 && 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent">;
      {/* Header */}

      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">;
        <div className="flex items-center space-x-3 mb-4">;
          <div className="relative">;
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">;
              <Zap className="w-6 h-6 text-white" />;
            </div>;
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50"></div>;
          </div>;
          <div>;
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
              Zion Tech Group;
            </h2>;
            <p className="text-xs text-gray-400">Navigation</p>;
          </div>;
        </div>;
        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">;
          <div className="flex items-center space-x-2">;
            <Phone className="w-3 h-3 text-cyan-400" />;
            <span>{contactInfo && contactInfo.mobile}</span>;
          </div>;
          <div className="flex items-center space-x-2">;
            <Mail className="w-3 h-3 text-cyan-400" />;
            <span>{contactInfo && contactInfo.email}</span>;
          </div>;
          <div className="flex items-center space-x-2">;
            <Globe className="w-3 h-3 text-cyan-400" />;
            <span>{contactInfo && contactInfo.website}</span>;
          </div>;
        </div>;
      </div>;


      {/* Navigation Sections */}
      <div className="p-4 space-y-2">;
        {sidebarSections && sidebarSections.map((section) => (;
          <div key={section && section.title} className="space-y-1">;
            <button
              onClick={() => toggleSection(section && section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group";
            >;
              <div className="flex items-center space-x-3">;
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">;
                  {section && section.icon}
                </div>;
                <span className="font-medium">{section && section.title}</span>;
                {section && section.badge && (;
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">;
                    {section && section.badge}
                  </span>;
                )}
              </div>;
              {expandedSections && expandedSections.has(section && section.title) ? (;
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />;
              ) : (;
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />;
              )}

      {/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {section.icon}
                </div>
                <span className="font-medium">{section.title}</span>
                {section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              )}
            </button>




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div
=======
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
      animate={{ coordinate_x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "ease_out" }}
      className="fixed left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - cyan - 500 / 20 shadow - 2xl shadow - cyan - 500 / 20 z - 40 overflow - y-auto scrollbar - thin scrollbar - thumb - cyan - 500 / 50 scrollbar - track - transparent";
    >;
      {/* Header */}
      <div className="sticky top - 0 bg - black / 95 backdrop - blur - xl border - b border - cyan - 500 / 20 p - 4">;
        <div className="flex items - center space - x-3 mb - 4">;
          <div className="relative">;
            <div className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg flex items - center justify - center">;
              <Zap className="w - 6 h - 6 text - white" />;
            </div>;
            <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg blur - lg opacity - 50"></div>;
          </div>;
          <div>;
            <h2 className="text - lg font - bold bg - gradient - to - r from - cyan - 400 to - blue - 400 bg - clip - text text - transparent">;
              Zion Tech Group;
            </h2>;
            <p className="text - xs text - gray - 400">Navigation</p>;
          </div>;
        </div>;
        {/* Contact Info */}
        <div className="space - y-2 text - xs text - gray - 300">;
          <div className="flex items - center space - x-2">;
            <Phone className="w - 3 h - 3 text - cyan - 400" />;
            <span>{contact_info.mobile}</span>;
          </div>;
          <div className="flex items - center space - x-2">;
            <Mail className="w - 3 h - 3 text - cyan - 400" />;
            <span>{contact_info.email}</span>;
          </div>;
          <div className="flex items - center space - x-2">;
            <Globe className="w - 3 h - 3 text - cyan - 400" />;
            <span>{contact_info.website}</span>;
          </div>;
        </div>;
      </div>;
      {/* Navigation Sections */}
      <div className="p - 4 space - y-2">;
        {sidebar_sections.map ((section) => (
          <div key={section.title} className="space - y-1">;
            <button;
              on_click={() => toggle_section (section.title)}
              className="w - full flex items - center justify - between p - 3 text - left text - gray - 300 hover:text - white hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 200 group";
            >;
              <div className="flex items - center space - x-3">;
                <div className="text - cyan - 400 group - hover:text - cyan - 300 transition - colors duration - 200">;
                  {section.icon}
                </div>;
                <span className="font - medium">{section.title}</span>;
                {section.badge && (
                  <span className="px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - full">;
                    {section.badge}
                  </span>)}
              </div>;
              {expanded_sections.has (section.title) ? (
                <ChevronDown className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />) : (
                <ChevronRight className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />)}
            </button>;
            <AnimatePresence>;
              {expanded_sections.has (section.title) && (
                <motion.div;
    ]
  }
],

const resources = [

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
],

=======
=======
  };
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    isNew: true,
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  };
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    isHot: true,
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  };
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  };
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]
  };
  {
    name: 'Creative & Design',
    href: '/creative-services',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative and design solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  };
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Cutting-edge research and development services',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  };
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Truck className="w-5 h-5" />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  };
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Flexible pricing options for all services',
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  };
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Educational resources and documentation',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  };
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className="w-5 h-5" />,
    description: 'Technical support and customer service',
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]
  }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> }
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> }
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> }
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> }
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
];
const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];
  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)
  }
  const filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) |
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) |[]
  );
  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
    >
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h2>
            <p className="text-xs text-gray-400">Navigation</p>
          </div>
        </div>
        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.website}</span>
          </div>
        </div>
      </div>
      {/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {section.icon}
                </div>
                <span className="font-medium">{section.title}</span>
                {section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              )}
            </button>

            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div

                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}

            </button>;

            <AnimatePresence>;
              {expandedSections && expandedSections.has(section && section.title) && (;
                <motion&& motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0 && 0.2 }}
                  className="ml-8 space-y-1">;
                  <CloseIcon className="w-5 h-5" />;
                </button>;
              </div>;


              {/* Search Bar */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50";
                />;
              </div>;


              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.slice(0, 5).map((service) => (
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group">;
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                            {service && service.name}
                          </div>;
                          <div className="text-xs text-gray-500">;
                            {service && service.description}
                          </div>;
                        </Link>;
                      ))}
                      {filteredServices && filteredServices.length > 5 && (;
                        <div className="text-xs text-cyan-400 text-center">;
                          +{filteredServices && filteredServices.length - 5} more results;
                        </div>;
                      )}
                    </div>;
                  ) : (;
                    <div className="text-sm text-gray-500 text-center py-2">;
                      No services found;
                    </div>;
                  )}
                </div>;
              )}

              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.slice(0, 5).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                      {filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{filteredServices.length - 5} more results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      No services found
                    </div>
                  )}
                </div>
              )}
            </div>




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
=======
            </div>;
            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Mail className="w-5 h-5 text-cyan-400" />;
                <span>Contact Information</span>;
              </h3>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className="flex items-center space-x-3 text-gray-300">;
                  <Mail className="w-4 h-4 text-cyan-400" />;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex items-start space-x-3 text-gray-300">;
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />;
                  <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;
            </div>;
            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <TrendingUp className="w-5 h-5 text-cyan-400" />;
                <span>Company Stats</span>;
              </h3>;
              <div className="grid grid-cols-2 gap-4">;
                {stats && stats.map((stat, index) => (;
                  <motion&& motion.div
                    key={stat && stat.label}
                    initial={{ opacity: 0, scale: 0 && 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0 && 0.3, delay: index * 0 && 0.1 }}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">;
                    <div className="text-2xl font-bold text-white mb-1">{stat && stat.value}</div>;
                    <div className="text-xs text-gray-400">{stat && stat.label}</div>;
                  </motion && motion.div>;
                ))}

              </div>;
            </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Star className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;
              <div className="space-y-2">;
                {quickLinks && quickLinks.map((link) => (;
                  <Link
                    key={link && link.name}
                    href={link && link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">;
                      {link && link.icon}
                    </div>;
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                      {link && link.name}
                    </span>;
                  </Link>;
                ))}

              </div>;
            </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Rocket className="w-5 h-5 text-cyan-400" />;
                <span>Service Categories</span>;
              </h3>;
              <div className="space-y-2">;
                {sidebarItems && sidebarItems.map((item) => (;
                  <div key={item && item.name}>;
                    <button

                  className="ml - 8 space - y-1";
                >;
                  <CloseIcon className="w - 5 h - 5" />;
                </button>;
              </div>;
              {/* Search Bar */}
              <div className="relative">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 2 bg - gray - 800 / 50 border border - gray - 700 / 50 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50";
                />;
              </div>;
              {/* Search Results */}
              {search_query && (
                <div className="mt - 4 space - y-2">;
                  <h4 className="text - sm font - medium text - gray - 300">Search Results</h4>;
                  {filtered_services.length > 0 ? (
                    <div className="space - y-1">;
                      {filtered_services.slice (0, 5).map ((service) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          onClick={onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                      {filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{filteredServices.length - 5} more results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-2">
                      No services found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30";
                  >;
                    <div className="text - 2xl font - bold text - white mb - 1">{stat.value}</div>;
                    <div className="text - xs text - gray - 400">{stat.label}</div>;
                  </motion.div>))}
              </div>;
            </div>;
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            {/* Quick Links */}
            <div className="p - 6 border - b border - cyan - 500 / 30">;
              <h3 className="text - lg font - semibold text - white mb - 4 flex items - center space - x-2">;
                <Star className="w - 5 h - 5 text - cyan - 400" />;
                <span > Quick Links</span>;
              </h3>;
              <div className="space - y-2">;
                {quick_links.map ((link) => (
                  <Link;
                    key={link.name}
                    href={link.href}
                    on_click={on_close}
                    className="flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors duration - 200 group";
                  >;
                    <div className="text - gray - 400 group - hover:text - cyan - 400 transition - colors duration - 200">;
                      {link.icon}
                    </div>;
                    <span className="text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                      {link.name}
                    </span>;
                  </Link>))}
              </div>;
            </div>;
            {/* Service Categories */}
            <div className="p - 6 border - b border - cyan - 500 / 30">;
              <h3 className="text - lg font - semibold text - white mb - 4 flex items - center space - x-2">;
                <Rocket className="w - 5 h - 5 text - cyan - 400" />;
                <span > Service Categories</span>;
              </h3>;
              <div className="space - y-2">;
                {sidebar_items.map ((item) => (
                  <div key={item.name}>;
                    <button;
                      on_click={() => toggle_category (item.name)}
                      className="w - full flex items - center justify - between p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors duration - 200 group";
                    >;
                      <div className="flex items - center space - x-3">;
                        <div className={`w - 8 h - 8 bg - gradient - to - r ${item.is_hot ? 'from - indigo - 500 to - purple - 600' : 'from - cyan - 500 to - blue - 600'} rounded - lg flex items - center justify - center`}>;

                          {item.icon}
                        </div>;
                        <span className="text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div
=======
                      onClick={() => toggleCategory(item && item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group";
                    >;
                      <div className="flex items-center space-x-3">;
                        <div className={`w-8 h-8 bg-gradient-to-r ${item && item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>;
                          {item && item.icon}
                        </div>;
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                          {item && item.name}
                        </span>;
                      </div>;
=======
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">;
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">;
                <Zap className="w-5 h-5 text-cyan-400" />;
                <span>Quick Links</span>;
              </h3>;
              <div className="space-y-2">;
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    Contact Us;
                  </div>;
                  <div className="text-xs text-gray-500">Get in touch with our team</div>;
                </Link>;
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    View Pricing;
                  </div>;
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>;
                </Link>;
                <Link
                  href="/about"
                  onClick={onClose}

                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group">;
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">;
                    About Us;
                  </div>;
                  <div className="text-xs text-gray-500">Learn about Zion Tech Group</div>;
                </Link>;
              </div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-blue-400">1000+</div>;
              <div className="text-xs text-gray-400">Clients</div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-purple-400">24/7</div>;
              <div className="text-xs text-gray-400">Support</div>;
            </div>;
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">;
              <div className="text-lg font-bold text-green-400">99 && 99.9%</div>;
              <div className="text-xs text-gray-400">Uptime</div>;
            </div>;
          </div>;
        </div>;


        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">;
          <Link
            href="/contact"

                        </span>;
                      </div>;
                      <ChevronRight;
                        className={`w - 4 h - 4 text - gray - 400 transition - transform duration - 200 ${
                          expanded_category === item.name ? 'rotate - 90' : '';
                        }`}
                      />
                    </button>
=======
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
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
            {/* Quick Links */}
            <div className="p - 6 border - b border - cyan - 500 / 30">;
              <h3 className="text - lg font - semibold text - white mb - 4 flex items - center space - x-2">;
                <Zap className="w - 5 h - 5 text - cyan - 400" />;
                <span > Quick Links</span>;
              </h3>;
              <div className="space - y-2">;
                <Link;
                  href="/contact";
                  on_click={on_close}
                  className="block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors duration - 200 group";
                >;
                  <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                    Contact Us;
                  </div>;
                  <div className="text - xs text - gray - 500">Get in touch with our team</div>;
                </Link>;
                <Link;
                  href="/pricing";
                  on_click={on_close}
                  className="block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors duration - 200 group";
                >;
                  <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                    View Pricing;
                  </div>;
                  <div className="text - xs text - gray - 500">Explore our pricing plans</div>;
                </Link>;
                <Link;
                  href="/about";
                  on_click={on_close}
                  className="block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors duration - 200 group";
                >;
                  <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                    About Us;
                  </div>;
                  <div className="text - xs text - gray - 500">Learn about Zion Tech Group</div>;
                </Link>;
              </div>;
            </div>;
            <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg">;
              <div className="text - lg font - bold text - blue - 400">1000+</div>;
              <div className="text - xs text - gray - 400">Clients</div>;
            </div>;
            <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg">;
              <div className="text - lg font - bold text - purple - 400">24 / 7</div>;
              <div className="text - xs text - gray - 400">Support</div>;
            </div>;
            <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg">;
              <div className="text - lg font - bold text - green - 400">99.9%</div>;
              <div className="text - xs text - gray - 400">Uptime</div>;
            </div>;
          </div>;
        </div>;
        {/* CTA Section */}
        <div className="pt - 4 border - t border - gray - 800 px - 3">;
          <Link;
            href="/contact";
            className="block w - full text - center px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium rounded - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25";
          >;
            <span > Get Started Today</span>;
            <ArrowRight className="w - 4 h - 4 ml - 2 inline" />;
          </Link>;
        </div>;
      </div>;
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
    </motion.aside>
  )
}
;

import React, { useState, useEffect              } from 'react.ts;
import Link from 'next / link.ts;
import { motion, AnimatePresence               } from 'framer-motion.ts;

            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">;
            <span>Get Started Today</span>;
            <ArrowRight className="w-4 h-4 ml-2 inline" />;
          </Link>;
        </div>;
      </div>;
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>;
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>;
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>;
    </motion && motion.aside>;
  );
};

import React, { useState, useEffect              } from 'react.ts;
import Link from 'next/link.ts;
import { motion, AnimatePresence               } from 'framer-motion.ts;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown,'  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;
} from 'lucide-react && react.ts;
=======
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown, '  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;
} from 'lucide-react.ts;
interface SidebarItem {name: string;
  href: string;

  icon: React && React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string,;
  color?: string,;
  isNew?: boolean,;
  isHot?: boolean,;
  isPremium?: boolean,;
category?: string}


  badge?: string
  color?: string
  isNew?: boolean
  isHot?: boolean
  isPremium?: boolean
category?: string}
const sidebarSections = []"      } {";
  badge?: string,
  color?: string,
  is_new?: boolean,
  is_hot?: boolean,
  is_premium?: boolean,
category?: string}
const sidebar_sections = []"      } {";
";
        name: "Quantum Computing", "        href: "/quantum - services", icon: Atom, "        description: "Next - generation quantum computing solutions", sub_items["          { name: "Quantum Cloud Infrastructure", href: "/quantum - cloud - infrastructure" } { name: "Quantum Bio - Computing", href: "/quantum - bio - computing" } { name: "Quantum Energy Platform", href: "/quantum - energy - platform" } { name: "Quantum Materials Discovery", href: "/quantum - materials - discovery" } { name: "Quantum Robotics", href: "/quantum - robotics" } { name: "Quantum Internet Security", href: "/quantum - internet - security" } { name: "Quantum Logistics", href: "/quantum - logistics - optimization" } { name: "Quantum Cybersecurity", href: "/quantum - cybersecurity - platform" }"        ]"      } {";
";
        name: "Enterprise IT", "        href: "/enterprise - it", icon: Shield, "        description: "Enterprise - grade IT infrastructure and security", sub_items["          { name: "Edge Computing Orchestrator", href: "/edge - computing - orchestration" } { name: "Zero Trust Security Platform", href: "/zero - trust - network - architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain - infrastructure - platform" } { name: "AI - Powered DevOps", href: "/ai - powered - devops" } { name: "Quantum Networking", href: "/quantum - networking" } { name: "Autonomous IT Operations", href: "/autonomous - it - operations" } { name: "Quantum Data Center", href: "/quantum - data - center" } { name: "Quantum Cloud Migration", href: "/quantum - cloud - migration" }"        ]"      } {";
";
        name: "Micro SAAS", "        href: "/micro - saas", icon: Rocket, "        description: "AI - powered micro SAAS solutions", sub_items["          { name: "AI Content Factory Platform", href: "/ai - content - factory" } { name: "CRM Intelligence & Automation", href: "/crm - intelligence - automation" } { name: "AI Decision Engine Platform", href: "/ai - decision - engine" } { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" } { name: "AI HR & Talent Platform", href: "/ai - hr - talent - platform" } { name: "Financial Analytics Platform", href: "/financial - analytics - platform" } { name: "Supply Chain Intelligence", href: "/supply - chain - intelligence" } { name: "Marketing Automation Platform", href: "/marketing - automation - platform" } { name: "Project Management AI", href: "/project - management - ai" }"        ]"      } {";
";
        name: "Space Technology", "        href: "/space - tech", icon: Globe, "        description: "Cutting - edge space exploration and mining", sub_items["          { name: "Space Mining Platform", href: "/space - mining - platform" } { name: "Satellite Technology", href: "/satellite - technology" } { name: "Space Resource Management", href: "/space - resource - management" } { name: "Interplanetary Communication", href: "/interplanetary - communication" }"        ]"      } {";
";
        name: "Emerging Tech", "        href: "/emerging - tech", icon: Sparkles, "        description: "Future technologies and innovations", sub_items["          { name: "Brain - Computer Interface", href: "/brain - computer - interface" } { name: "Autonomous Vehicle AI", href: "/autonomous - vehicle - ai" } { name: "Advanced Robotics", href: "/advanced - robotics" } { name: "Biotechnology Platform", href: "/biotechnology - platform" }"        ];
    ];

} {
";
    title: "Industry Solutions", "    icon: Target, color: "from - purple - 500 to - pink - 600", "    items["      {";

";
        name: "Healthcare", href: "/healthcare - solutions", "        icon: Heart, description: "AI - powered healthcare diagnostics and solutions", "        sub_items["          { name: "AI Healthcare Diagnostics", href: "/ai - healthcare - diagnostics" }, "          { name: "Medical Imaging AI", href: "/medical - imaging - ai" }, "          { name: "Drug Discovery Platform", href: "/drug - discovery - platform" }"        ]"      } {";
";
        name: "Financial Services", "        href: "/financial - solutions", icon: BarChart3, "        description: "Advanced financial intelligence and analytics", sub_items["          { name: "AI Financial Intelligence", href: "/ai - financial - intelligence" } { name: "Quantum Trading Platform", href: "/quantum - financial - trading" } { name: "Risk Assessment AI", href: "/risk - assessment - ai" }"        ]"      } {";
";

        name: "Manufacturing", "        href: "/manufacturing - solutions", icon: Settings, "        description: "Industry 4.0 and smart manufacturing", sub_items["          { name: "Smart Factory Platform", href: "/smart - factory - platform" } { name: "Predictive Maintenance AI", href: "/predictive - maintenance - ai" } { name: "Quality Control AI", href: "/quality - control - ai" }"        ]"      } {";

";
        name: "Retail & E - commerce", "        href: "/retail - solutions", icon: Eye, "        description: "E - commerce optimization and retail intelligence", sub_items["          { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" } { name: "Customer Behavior AI", href: "/customer - behavior - ai" } { name: "Inventory Management AI", href: "/inventory - management - ai" }"        ]"      } {";
";
        name: "Government & Defense", "        href: "/government - solutions", icon: Shield, "        description: "Secure government and defense solutions", sub_items["          { name: "Cybersecurity Platform", href: "/quantum - cybersecurity - platform" } { name: "Data Protection AI", href: "/data - protection - ai" } { name: "Threat Detection AI", href: "/threat - detection - ai" }"        ]"      } {";
";
        name: "Education", "        href: "/education - solutions", icon: Award, "        description: "AI - powered education and learning platforms", sub_items["          { name: "AI Education Platform", href: "/ai - education - platform" } { name: "Personalized Learning AI", href: "/personalized - learning - ai" } { name: "Student Performance AI", href: "/student - performance - ai" }"        ];
";

name: "About Us, href: "/about",;

  ","        icon: Users, description:,";
  Learn about Zion Tech Group",";
  "        subItems["          { name: "Our Mission, href:,";
  /mission" },";

  "          { name: "Leadership Team, href:,;
  /leadership";
  " },"          { name: "Comp History, href:,";
  /history" },";
  "          { name: "Careers, href:,;

  /careers";
  " }"        ]";
  "      } {";
        name: "Resources", "        href: "/resources", icon: BookOpen, "        description: "Educational content and documentation", subItems["          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api-docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case-studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }"        ]"      } {";
    title: "Comp & Resources", "    icon: Users, color: "from - green - 500 to - emerald - 600", "    items["      {";
ursor / automate - test - fix - improve - and - merge - code - 99d1, ";
name: "About Us, href: "/about",
  ", "        icon: Users, description:, ";
  Learn about Zion Tech Group", ";
  "        sub_items["          { name: "Our Mission, href:, ";
  /mission" }, ";
  "          { name: "Leadership Team, href:,
  /leadership";
  " }, "          { name: "Comp History, href:, ";
  /history" }, ";
  "          { name: "Careers, href:,
  /careers";
  " }"        ]";
  "      } {
";
        name: "Resources", "        href: "/resources", icon: BookOpen, "        description: "Educational content and documentation", sub_items["          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api - docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case - studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }"        ]"      } {";
";
        name: "Support", "        href: "/support", icon: HelpCircle, "        description: "Get help and support", sub_items["          { name: "Contact Support", href: "/contact - support" } { name: anyanyanyanyanyanyanyanyanyanyanyanyany & apos, Training Programs", href: "/training", "}, "          { name: "Community Forum", href: "/community" }, "          { name: "Knowledge Base", href: "/knowledge - base" }"        ]"      }];
    title: anyanyanyanyanyanyanyanyanyanyanyanyany"Revolutionary: Services, ", ";
    icon: Za, p, ";
    color: "from - cyan - 500: to - blue - 600, ", ";
category?: string;

},;
      {;
name: "Quantum Computing",";
        href: "/quantum-services",;

        icon: Atom,";
        description: "Next-generation quantum computing solutions",";
          { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" } { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" } { name: "Quantum Energy Platform", href: "/quantum-energy-platform" } { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" } { name: "Quantum Robotics", href: "/quantum-robotics" } { name: "Quantum Internet Security", href: "/quantum-internet-security" } { name: "Quantum Logistics", href: "/quantum-logistics-optimization" } { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }
        subItems[";
          { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" },";
          { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" },";
          { name: "Quantum Energy Platform", href: "/quantum-energy-platform" },";
          { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" },";
          { name: "Quantum Robotics", href: "/quantum-robotics" },";
          { name: "Quantum Internet Security", href: "/quantum-internet-security" },";
          { name: "Quantum Logistics", href: "/quantum-logistics-optimization" },";
          { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }
        ];

},;
      {;
name: "Enterprise IT",";
        href: "/enterprise-it",;

        icon: Shield,";
        description: "Enterprise-grade IT infrastructure and security",";
          { name: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" } { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" } { name: "AI-Powered DevOps", href: "/ai-powered-devops" } { name: "Quantum Networking", href: "/quantum-networking" } { name: "Autonomous IT Operations", href: "/autonomous-it-operations" } { name: "Quantum Data Center", href: "/quantum-data-center" } { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }
        subItems[";
          { name: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" },";
          { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" },";
          { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" },";
          { name: "AI-Powered DevOps", href: "/ai-powered-devops" },";
          { name: "Quantum Networking", href: "/quantum-networking" },";
          { name: "Autonomous IT Operations", href: "/autonomous-it-operations" },";
          { name: "Quantum Data Center", href: "/quantum-data-center" },";
          { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }
        ];

},;
      {;
name: "Micro SAAS",";
        href: "/micro-saas",;

        icon: Rocket,";
        description: "AI-powered micro SAAS solutions",";
          { name: "AI Content Factory Platform", href: "/ai-content-factory" } { name: "CRM Intelligence & Automation", href: "/crm-intelligence-automation" } { name: "AI Decision Engine Platform", href: "/ai-decision-engine" } { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" } { name: "AI HR & Talent Platform", href: "/ai-hr-talent-platform" } { name: "Financial Analytics Platform", href: "/financial-analytics-platform" } { name: "Supply Chain Intelligence", href: "/supply-chain-intelligence" } { name: "Marketing Automation Platform", href: "/marketing-automation-platform" } { name: "Project Management AI", href: "/project-management-ai" }
        subItems[";
          { name: "AI Content Factory Platform", href: "/ai-content-factory" },";
          { name: "CRM Intelligence & Automation", href: "/crm-intelligence-automation" },";
          { name: "AI Decision Engine Platform", href: "/ai-decision-engine" },";
          { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" },";
          { name: "AI HR & Talent Platform", href: "/ai-hr-talent-platform" },";
          { name: "Financial Analytics Platform", href: "/financial-analytics-platform" },";
          { name: "Supply Chain Intelligence", href: "/supply-chain-intelligence" },";
          { name: "Marketing Automation Platform", href: "/marketing-automation-platform" },";
          { name: "Project Management AI", href: "/project-management-ai" }
        ];

},;
      {;
name: "Space Technology",";
        href: "/space-tech",;

        icon: Globe,";
        description: "Cutting-edge space exploration and mining",";
          { name: "Space Mining Platform", href: "/space-mining-platform" } { name: "Satellite Technology", href: "/satellite-technology" } { name: "Space Resource Management", href: "/space-resource-management" } { name: "Interplanetary Communication", href: "/interplanetary-communication" }
        subItems[";
          { name: "Space Mining Platform", href: "/space-mining-platform" },";
          { name: "Satellite Technology", href: "/satellite-technology" },";
          { name: "Space Resource Management", href: "/space-resource-management" },";
          { name: "Interplanetary Communication", href: "/interplanetary-communication" }
        ];

},;
      {;
name: "Emerging Tech",";
        href: "/emerging-tech",;

        icon: Sparkles,";
        description: "Future technologies and innovations",";
          { name: "Brain-Computer Interface", href: "/brain-computer-interface" } { name: "Autonomous Vehicle AI", href: "/autonomous-vehicle-ai" } { name: "Advanced Robotics", href: "/advanced-robotics" } { name: "Biotechnology Platform", href: "/biotechnology-platform" }
const sidebar_sections = [];
},
      {
;
name: "Quantum Computing", ";
        href: "/quantum - services",
        icon: Atom, ";
        description: "Next - generation quantum computing solutions", ";
          { name: "Quantum Cloud Infrastructure", href: "/quantum - cloud - infrastructure" } { name: "Quantum Bio - Computing", href: "/quantum - bio - computing" } { name: "Quantum Energy Platform", href: "/quantum - energy - platform" } { name: "Quantum Materials Discovery", href: "/quantum - materials - discovery" } { name: "Quantum Robotics", href: "/quantum - robotics" } { name: "Quantum Internet Security", href: "/quantum - internet - security" } { name: "Quantum Logistics", href: "/quantum - logistics - optimization" } { name: "Quantum Cybersecurity", href: "/quantum - cybersecurity - platform" }
        sub_items[";
          { name: "Quantum Cloud Infrastructure", href: "/quantum - cloud - infrastructure" }, ";
          { name: "Quantum Bio - Computing", href: "/quantum - bio - computing" }, ";
          { name: "Quantum Energy Platform", href: "/quantum - energy - platform" }, ";
          { name: "Quantum Materials Discovery", href: "/quantum - materials - discovery" }, ";
          { name: "Quantum Robotics", href: "/quantum - robotics" }, ";
          { name: "Quantum Internet Security", href: "/quantum - internet - security" }, ";
          { name: "Quantum Logistics", href: "/quantum - logistics - optimization" }, ";
          { name: "Quantum Cybersecurity", href: "/quantum - cybersecurity - platform" }
        ];
},
      {
;
name: "Enterprise IT", ";
        href: "/enterprise - it",
        icon: Shield, ";
        description: "Enterprise - grade IT infrastructure and security", ";
          { name: "Edge Computing Orchestrator", href: "/edge - computing - orchestration" } { name: "Zero Trust Security Platform", href: "/zero - trust - network - architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain - infrastructure - platform" } { name: "AI - Powered DevOps", href: "/ai - powered - devops" } { name: "Quantum Networking", href: "/quantum - networking" } { name: "Autonomous IT Operations", href: "/autonomous - it - operations" } { name: "Quantum Data Center", href: "/quantum - data - center" } { name: "Quantum Cloud Migration", href: "/quantum - cloud - migration" }
        sub_items[";
          { name: "Edge Computing Orchestrator", href: "/edge - computing - orchestration" }, ";
          { name: "Zero Trust Security Platform", href: "/zero - trust - network - architecture" }, ";
          { name: "Blockchain Enterprise Platform", href: "/blockchain - infrastructure - platform" }, ";
          { name: "AI - Powered DevOps", href: "/ai - powered - devops" }, ";
          { name: "Quantum Networking", href: "/quantum - networking" }, ";
          { name: "Autonomous IT Operations", href: "/autonomous - it - operations" }, ";
          { name: "Quantum Data Center", href: "/quantum - data - center" }, ";
          { name: "Quantum Cloud Migration", href: "/quantum - cloud - migration" }
        ];
},
      {
;
name: "Micro SAAS", ";
        href: "/micro - saas",
        icon: Rocket, ";
        description: "AI - powered micro SAAS solutions", ";
          { name: "AI Content Factory Platform", href: "/ai - content - factory" } { name: "CRM Intelligence & Automation", href: "/crm - intelligence - automation" } { name: "AI Decision Engine Platform", href: "/ai - decision - engine" } { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" } { name: "AI HR & Talent Platform", href: "/ai - hr - talent - platform" } { name: "Financial Analytics Platform", href: "/financial - analytics - platform" } { name: "Supply Chain Intelligence", href: "/supply - chain - intelligence" } { name: "Marketing Automation Platform", href: "/marketing - automation - platform" } { name: "Project Management AI", href: "/project - management - ai" }
        sub_items[";
          { name: "AI Content Factory Platform", href: "/ai - content - factory" }, ";
          { name: "CRM Intelligence & Automation", href: "/crm - intelligence - automation" }, ";
          { name: "AI Decision Engine Platform", href: "/ai - decision - engine" }, ";
          { name: "E - commerce Optimization", href: "/ecommerce - optimization - platform" }, ";
          { name: "AI HR & Talent Platform", href: "/ai - hr - talent - platform" }, ";
          { name: "Financial Analytics Platform", href: "/financial - analytics - platform" }, ";
          { name: "Supply Chain Intelligence", href: "/supply - chain - intelligence" }, ";
          { name: "Marketing Automation Platform", href: "/marketing - automation - platform" }, ";
          { name: "Project Management AI", href: "/project - management - ai" }
        ];
},
      {
;
name: "Space Technology", ";
        href: "/space - tech",
        icon: Globe, ";
        description: "Cutting - edge space exploration and mining", ";
          { name: "Space Mining Platform", href: "/space - mining - platform" } { name: "Satellite Technology", href: "/satellite - technology" } { name: "Space Resource Management", href: "/space - resource - management" } { name: "Interplanetary Communication", href: "/interplanetary - communication" }
        sub_items[";
          { name: "Space Mining Platform", href: "/space - mining - platform" }, ";
          { name: "Satellite Technology", href: "/satellite - technology" }, ";
          { name: "Space Resource Management", href: "/space - resource - management" }, ";
          { name: "Interplanetary Communication", href: "/interplanetary - communication" }
        ];
},
      {
;
name: "Emerging Tech", ";
        href: "/emerging - tech",
        icon: Sparkles, ";
        description: "Future technologies and innovations", ";
          { name: "Brain - Computer Interface", href: "/brain - computer - interface" } { name: "Autonomous Vehicle AI", href: "/autonomous - vehicle - ai" } { name: "Advanced Robotics", href: "/advanced - robotics" } { name: "Biotechnology Platform", href: "/biotechnology - platform" }
items[ ";
        name: "AI: & Consciousness, ", ";
        href: "/ai - services, ", ";
        icon: Brai, n, ";
        description: "Advanced: AI consciousness and evolution platforms, ", ";
        sub_items[";
          { name: "AI: Consciousness Evolution, ", href: "/ai - consciousness - evolution"}, " { name: "AI: Autonomous Ecosystem, ", href: "/ai - autonomous - ecosystem"}, " { name: "AI: Ethics & Governance, ", href: "/ai - ethics - governance"}, " { name: "AI: Creativity Studio, ", href: "/ai - creativity - studio"}, " { name: "AI: Education Platform, ", href: "/ai - education - platform"}, " { name: "AI: Healthcare Diagnostics, ", href: "/ai - healthcare - diagnostics"}, " { name: "AI: Financial Intelligence, ", href: "/ai - financial - intelligence"}, " { name: "AI: Sustainability Platform, ", href: "/ai - sustainability - platform"}, " { name: "AI: Emotional Intelligence, ", href: "/ai - emotional - intelligence - platform"}, " { name: "AI: Legal Contract Analyzer, ", href: "/ai - legal - contract - analyzer"}";
";
        name: "Quantum: Computing, ", ";
        href: "/quantum - services, ", ";
        icon: Ato, m, ";
        description: "Next - generation: quantum computing solutions, ", ";
          { name: "Quantum: Cloud Infrastructure, ", href: "/quantum - cloud - infrastructure"}, " { name: "Quantum: Bio - Computing, ", href: "/quantum - bio - computing"}, " { name: "Quantum: Energy Platform, ", href: "/quantum - energy - platform"}, " { name: "Quantum: Materials Discovery, ", href: "/quantum - materials - discovery"}, " { name: "Quantum: Robotics, ", href: "/quantum - robotics"}, " { name: "Quantum: Internet Security, ", href: "/quantum - internet - security"}, " { name: "Quantum: Logistics, ", href: "/quantum - logistics - optimization"}, " { name: "Quantum: Cybersecurity, ", href: "/quantum - cybersecurity - platform"}";
";
        name: "Enterprise: IT, ", ";
        href: "/enterprise - it, ", ";
        icon: Shiel, d, ";
        description: "Enterprise - grade: IT infrastructure and security, ", ";
          { name: "Edge: Computing Orchestrator, ", href: "/edge - computing - orchestration"}, " { name: "Zero: Trust Security Platform, ", href: "/zero - trust - network - architecture"}, " { name: "Blockchain: Enterprise Platform, ", href: "/blockchain - infrastructure - platform"}, " { name: "AI - Powered: DevOps, ", href: "/ai - powered - devops"}, " { name: "Quantum: Networking, ", href: "/quantum - networking"}, " { name: "Autonomous: IT Operations, ", href: "/autonomous - it - operations"}, " { name: "Quantum: Data Center, ", href: "/quantum - data - center"}, " { name: "Quantum: Cloud Migration, ", href: "/quantum - cloud - migration"}";
";
        name: "Micro: SAAS, ", ";
        href: "/micro - saas, ", ";
        icon: Rocke, t, ";
        description: "AI - powered: micro SAAS solutions, ", ";
          { name: "AI: Content Factory Platform, ", href: "/ai - content - factory"}, " { name: "CRM: Intelligence & Automation, ", href: "/crm - intelligence - automation"}, " { name: "AI: Decision Engine Platform, ", href: "/ai - decision - engine"}, " { name: "E - commerce: Optimization, ", href: "/ecommerce - optimization - platform"}, " { name: "AI: HR & Talent Platform, ", href: "/ai - hr - talent - platform"}, " { name: "Financial: Analytics Platform, ", href: "/financial - analytics - platform"}, " { name: "Supply: Chain Intelligence, ", href: "/supply - chain - intelligence"}, " { name: "Marketing: Automation Platform, ", href: "/marketing - automation - platform"}, " { name: "Project: Management AI, ", href: "/project - management - ai"}";
";
        name: "Space: Technology, ", ";
        href: "/space - tech, ", ";
        icon: Glob, e, ";
        description: "Cutting - edge: space exploration and mining, ", ";
          { name: "Space: Mining Platform, ", href: "/space - mining - platform"}, " { name: "Satellite: Technology, ", href: "/satellite - technology"}, " { name: "Space: Resource Management, ", href: "/space - resource - management"}, " { name: "Interplanetary: Communication, ", href: "/interplanetary - communication"}";
";

  email: "kleber@ziontechgroup && ziontechgroup.com",";
  address: "364 E Main St STE 1008, Middletown, DE 19709";,;

=======
        name: "Emerging: Tech, ", ";
        href: "/emerging - tech, ", ";
        icon: Sparkle, s, ";
        description: "Future: technologies and innovations, ", ";
          { name: "Brain - Computer: Interface, ", href: "/brain - computer - interface"}, " { name: "Autonomous: Vehicle AI, ", href: "/autonomous - vehicle - ai"}, " { name: "Advanced: Robotics, ", href: "/advanced - robotics"}, " { name: "Biotechnology: Platform, ", href: "/biotechnology - platform"}";
const contact_info = {";
  mobile: "+1 - 302 - 464 - 0950", ";
  email: "kleber@ziontechgroup.com", ";
  address: "364 E Main St STE 1008, Middletown, DE 19709";,
}
";
  {";
";

    title: "Revolutionary Services",;
    icon: Zap,";
    color: "from-cyan-500 to-blue-600",;
    items: [,;
name: "AI & Consciousness",";
        href: "/ai-services",;
        icon: Brain,";
        description: "Advanced AI consciousness and evolution platforms",;
        subItems: [",;

          { name: "AI Consciousness Evolution", href: "/ai-consciousness-evolution" } { name: "AI Autonomous Ecosystem", href: "/ai-autonomous-ecosystem" } { name: "AI Ethics & Governance", href: "/ai-ethics-governance" } { name: "AI Creativity Studio", href: "/ai-creativity-studio" } { name: "AI Education Platform", href: "/ai-education-platform" } { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" } { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" } { name: "AI Sustainability Platform", href: "/ai-sustainability-platform" } { name: "AI Emotional Intelligence", href: "/ai-emotional-intelligence-platform" } { name: "AI Legal Contract Analyzer", href: "/ai-legal-contract-analyzer" }
        nam,";
    e: "AI & Consciousness" {,";
href: "/ai-services", icon: Brain,";
        description: "Advanced AI consciousness and evolution platforms", subItems[;
        subItems[";
          { name: "AI Consciousness Evolution", href: "/ai-consciousness-evolution" },";
          { name: "AI Autonomous Ecosystem", href: "/ai-autonomous-ecosystem" },";
          { name: "AI Ethics & Governance", href: "/ai-ethics-governance" },";
          { name: "AI Creativity Studio", href: "/ai-creativity-studio" },";
          { name: "AI Education Platform", href: "/ai-education-platform" },";
          { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" },";
          { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" },";
          { name: "AI Sustainability Platform", href: "/ai-sustainability-platform" },";
          { name: "AI Emotional Intelligence", href: "/ai-emotional-intelligence-platform" },";
          { name: "AI Legal Contract Analyzer", href: "/ai-legal-contract-analyzer" }

        ];,;
},;
      {;
const sidebarSections = [;

  {;
    title: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Revolutionary Services', icon: Zap,'    color: 'from-cyan-500 to-blue-600', items['      {;

        name: 'AI & Consciousness',;
    name: '        href: '/ai-services',;
    icon: Brain,'        description: 'Advanced AI consciousness and evolution platforms', subItems['          { name: 'AI Consciousness Evolution',;
    href: '/ai-consciousness-evolution' }, { name: 'AI Autonomous Ecosystem',;
    href: '/ai-autonomous-ecosystem' }, { name: 'AI Ethics & Governance',;
    href: '/ai-ethics-governance' }, { name: 'AI Creativity Studio',;
    href: '/ai-creativity-studio' }, { name: 'AI Education Platform',;
    href: '/ai-education-platform' }, { name: 'AI Healthcare Diagnostics',;
    href: '/ai-healthcare-diagnostics' }, { name: 'AI Financial Intelligence',;
    href: '/ai-financial-intelligence' }, { name: 'AI Sustainability Platform',;
    href: '/ai-sustainability-platform' }, { name: 'AI Emotional Intelligence',;
    href: '/ai-emotional-intelligence-platform' }, { name: 'AI Legal Contract Analyzer',;
    href: '/ai-legal-contract-analyzer' }'        ]'      }, {;
        name: 'Quantum Computing',;
    name: '        href: '/quantum-services',;
    icon: Atom,'        description: 'Next-generation quantum computing solutions', subItems['          { name: 'Quantum Cloud Infrastructure',;
    href: '/quantum-cloud-infrastructure' }, { name: 'Quantum Bio-Computing',;
    href: '/quantum-bio-computing' }, { name: 'Quantum Energy Platform',;
    href: '/quantum-energy-platform' }, { name: 'Quantum Materials Discovery',;
    href: '/quantum-materials-discovery' }, { name: 'Quantum Robotics',;
    href: '/quantum-robotics' }, { name: 'Quantum Internet Security',;
    href: '/quantum-internet-security' }, { name: 'Quantum Logistics',;
    href: '/quantum-logistics-optimization' }, { name: 'Quantum Cybersecurity',;
    href: '/quantum-cybersecurity-platform' }'        ]'      }, {;
        name: 'Enterprise IT',;
    name: '        href: '/enterprise-it',;
    icon: Shield,'        description: 'Enterprise-grade IT infrastructure and security', subItems['          { name: 'Edge Computing Orchestrator',;
    href: '/edge-computing-orchestration' }, { name: 'Zero Trust Security Platform',;
    href: '/zero-trust-network-architecture' }, { name: 'Blockchain Enterprise Platform',;
    href: '/blockchain-infrastructure-platform' }, { name: 'AI-Powered DevOps',;
    href: '/ai-powered-devops' }, { name: 'Quantum Networking',;
    href: '/quantum-networking' }, { name: 'Autonomous IT Operations',;
    href: '/autonomous-it-operations' }, { name: 'Quantum Data Center',;
    href: '/quantum-data-center' }, { name: 'Quantum Cloud Migration',;
    href: '/quantum-cloud-migration' }'        ]'      }, {;
        name: 'Micro SAAS',;
    name: '        href: '/micro-saas',;
    icon: Rocket,'        description: 'AI-powered micro SAAS solutions', subItems['          { name: 'AI Content Factory Platform',;
    href: '/ai-content-factory' }, { name: 'CRM Intelligence & Automation',;
    href: '/crm-intelligence-automation' }, { name: 'AI Decision Engine Platform',;
    href: '/ai-decision-engine' }, { name: 'E-commerce Optimization',;
    href: '/ecommerce-optimization-platform' }, { name: 'AI HR & Talent Platform',;
    href: '/ai-hr-talent-platform' }, { name: 'Financial Analytics Platform',;
    href: '/financial-analytics-platform' }, { name: 'Supply Chain Intelligence',;
    href: '/supply-chain-intelligence' }, { name: 'Marketing Automation Platform',;
    href: '/marketing-automation-platform' }, { name: 'Project Management AI',;
    href: '/project-management-ai' }'        ]'      }, {;
        name: 'Space Technology',;
    name: '        href: '/space-tech',;
    icon: Globe,'        description: 'Cutting-edge space exploration and mining', subItems['          { name: 'Space Mining Platform',;
    href: '/space-mining-platform' }, { name: 'Satellite Technology',;
    href: '/satellite-technology' }, { name: 'Space Resource Management',;
    href: '/space-resource-management' }, { name: 'Interplanetary Communication',;
    href: '/interplanetary-communication' }'        ]'      }, {;
        name: 'Emerging Tech',;
    name: '        href: '/emerging-tech',;
    icon: Sparkles,'        description: 'Future technologies and innovations', subItems['          { name: 'Brain-Computer Interface',;
    href: '/brain-computer-interface' }, { name: 'Autonomous Vehicle AI',;
    href: '/autonomous-vehicle-ai' }, { name: 'Advanced Robotics',;
    href: '/advanced-robotics' }, { name: 'Biotechnology Platform',;
    href: '/biotechnology-platform' }'        ]';
    ];
},;
  {;
";
    title: "Comp & Resources",;
    icon: Users,";
    color: "from-green-500 to-emerald-600",;
    items[;
      {;
    title: 'Comp & Resources',;
    title: '    icon: Users, color: 'from-green-500 to-emerald-600','    items['      {;
        name: 'About Us',;
    href: '/about',;
    href: '        icon: Users, description: 'Learn about Zion Tech Group','        subItems['          { name: 'Our Mission',;
    href: '/mission' },'          { name: 'Leadership Team',;
    href: '/leadership' },'          { name: 'Comp History',;
    href: '/history' },'          { name: 'Careers',;
    href: '/careers' }'        ]'      }, {;
        name: 'Resources',;
    name: '        href: '/resources',;
    icon: BookOpen,'        description: 'Educational content and documentation', subItems['          { name: 'Documentation',;
    href: '/docs' }, { name: 'API Reference',;
    href: '/api-docs' }, { name: 'Blog & News',;
    href: '/blog' }, { name: 'Case Studies',;
    href: '/case-studies' }, { name: 'Whitepapers',;
    href: '/whitepapers' }, { name: 'Webinars',;
    href: '/webinars' }'        ]'      }, {;
        name: 'Support',;
    name: '        href: '/support',;
    icon: HelpCircle,'        description: 'Get help and support', subItems['          { name: 'Contact Support',;
    href: '/contact-support' }, { name: anyanyanyanyanyanyanyanyanyanyanyanyany&apos;Training Programs', href: '/training;
},'          { name: 'Community Forum',;
    href: '/community' },'          { name: 'Knowledge Base',;

    href: '/knowledge-base' };'        ];'      };];
}
];

interface EnhancedSidebar2025Props extends React && React.PropsWithChildren<{}> {;
  isOpen: boolean,;
  onClose: ()               => voi,d}
export: default function EnhancedSidebar2025(): any (...args[]: any):  {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
    title: anyanyanyanyanyanyanyanyanyanyanyanyany & apos, Revolutionary Services", icon: Zap, ";
    color: "from - cyan - 500 to - blue - 600", items[";
    title: "Revolutionary Services",
    icon: Zap, ";
    color: "from - cyan - 500 to - blue - 600",
    items: [,
name: "AI & Consciousness", ";
        href: "/ai - services",
        icon: Brain, ";
        description: "Advanced AI consciousness and evolution platforms",
        sub_items: [",
          { name: "AI Consciousness Evolution", href: "/ai - consciousness - evolution" } { name: "AI Autonomous Ecosystem", href: "/ai - autonomous - ecosystem" } { name: "AI Ethics & Governance", href: "/ai - ethics - governance" } { name: "AI Creativity Studio", href: "/ai - creativity - studio" } { name: "AI Education Platform", href: "/ai - education - platform" } { name: "AI Healthcare Diagnostics", href: "/ai - healthcare - diagnostics" } { name: "AI Financial Intelligence", href: "/ai - financial - intelligence" } { name: "AI Sustainability Platform", href: "/ai - sustainability - platform" } { name: "AI Emotional Intelligence", href: "/ai - emotional - intelligence - platform" } { name: "AI Legal Contract Analyzer", href: "/ai - legal - contract - analyzer" }
        nam, ";
    e: "AI & Consciousness" {, ";
href: "/ai - services", icon: Brain, ";
        description: "Advanced AI consciousness and evolution platforms", sub_items[;
        sub_items[";
          { name: "AI Consciousness Evolution", href: "/ai - consciousness - evolution" }, ";
          { name: "AI Autonomous Ecosystem", href: "/ai - autonomous - ecosystem" }, ";
          { name: "AI Ethics & Governance", href: "/ai - ethics - governance" }, ";
          { name: "AI Creativity Studio", href: "/ai - creativity - studio" }, ";
          { name: "AI Education Platform", href: "/ai - education - platform" }, ";
          { name: "AI Healthcare Diagnostics", href: "/ai - healthcare - diagnostics" }, ";
          { name: "AI Financial Intelligence", href: "/ai - financial - intelligence" }, ";
          { name: "AI Sustainability Platform", href: "/ai - sustainability - platform" }, ";
          { name: "AI Emotional Intelligence", href: "/ai - emotional - intelligence - platform" }, ";
          { name: "AI Legal Contract Analyzer", href: "/ai - legal - contract - analyzer" }
        ];,
},
      {
const sidebar_sections = [;
  {
;
    title: anyanyanyanyanyanyanyanyanyanyanyanyany & apos;Revolutionary Services', icon: Zap, '    color: 'from - cyan - 500 to - blue - 600', items['      {
        name: 'AI & Consciousness',
    name: '        href: '/ai - services',
    icon: Brain, '        description: 'Advanced AI consciousness and evolution platforms', sub_items['          { name: 'AI Consciousness Evolution',
    href: '/ai - consciousness - evolution' }, { name: 'AI Autonomous Ecosystem',
    href: '/ai - autonomous - ecosystem' }, { name: 'AI Ethics & Governance',
    href: '/ai - ethics - governance' }, { name: 'AI Creativity Studio',
    href: '/ai - creativity - studio' }, { name: 'AI Education Platform',
    href: '/ai - education - platform' }, { name: 'AI Healthcare Diagnostics',
    href: '/ai - healthcare - diagnostics' }, { name: 'AI Financial Intelligence',
    href: '/ai - financial - intelligence' }, { name: 'AI Sustainability Platform',
    href: '/ai - sustainability - platform' }, { name: 'AI Emotional Intelligence',
    href: '/ai - emotional - intelligence - platform' }, { name: 'AI Legal Contract Analyzer',
    href: '/ai - legal - contract - analyzer' }'        ]'      }, {
        name: 'Quantum Computing',
    name: '        href: '/quantum - services',
    icon: Atom, '        description: 'Next - generation quantum computing solutions', sub_items['          { name: 'Quantum Cloud Infrastructure',
    href: '/quantum - cloud - infrastructure' }, { name: 'Quantum Bio - Computing',
    href: '/quantum - bio - computing' }, { name: 'Quantum Energy Platform',
    href: '/quantum - energy - platform' }, { name: 'Quantum Materials Discovery',
    href: '/quantum - materials - discovery' }, { name: 'Quantum Robotics',
    href: '/quantum - robotics' }, { name: 'Quantum Internet Security',
    href: '/quantum - internet - security' }, { name: 'Quantum Logistics',
    href: '/quantum - logistics - optimization' }, { name: 'Quantum Cybersecurity',
    href: '/quantum - cybersecurity - platform' }'        ]'      }, {
        name: 'Enterprise IT',
    name: '        href: '/enterprise - it',
    icon: Shield, '        description: 'Enterprise - grade IT infrastructure and security', sub_items['          { name: 'Edge Computing Orchestrator',
    href: '/edge - computing - orchestration' }, { name: 'Zero Trust Security Platform',
    href: '/zero - trust - network - architecture' }, { name: 'Blockchain Enterprise Platform',
    href: '/blockchain - infrastructure - platform' }, { name: 'AI - Powered DevOps',
    href: '/ai - powered - devops' }, { name: 'Quantum Networking',
    href: '/quantum - networking' }, { name: 'Autonomous IT Operations',
    href: '/autonomous - it - operations' }, { name: 'Quantum Data Center',
    href: '/quantum - data - center' }, { name: 'Quantum Cloud Migration',
    href: '/quantum - cloud - migration' }'        ]'      }, {
        name: 'Micro SAAS',
    name: '        href: '/micro - saas',
    icon: Rocket, '        description: 'AI - powered micro SAAS solutions', sub_items['          { name: 'AI Content Factory Platform',
    href: '/ai - content - factory' }, { name: 'CRM Intelligence & Automation',
    href: '/crm - intelligence - automation' }, { name: 'AI Decision Engine Platform',
    href: '/ai - decision - engine' }, { name: 'E - commerce Optimization',
    href: '/ecommerce - optimization - platform' }, { name: 'AI HR & Talent Platform',
    href: '/ai - hr - talent - platform' }, { name: 'Financial Analytics Platform',
    href: '/financial - analytics - platform' }, { name: 'Supply Chain Intelligence',
    href: '/supply - chain - intelligence' }, { name: 'Marketing Automation Platform',
    href: '/marketing - automation - platform' }, { name: 'Project Management AI',
    href: '/project - management - ai' }'        ]'      }, {
        name: 'Space Technology',
    name: '        href: '/space - tech',
    icon: Globe, '        description: 'Cutting - edge space exploration and mining', sub_items['          { name: 'Space Mining Platform',
    href: '/space - mining - platform' }, { name: 'Satellite Technology',
    href: '/satellite - technology' }, { name: 'Space Resource Management',
    href: '/space - resource - management' }, { name: 'Interplanetary Communication',
    href: '/interplanetary - communication' }'        ]'      }, {
        name: 'Emerging Tech',
    name: '        href: '/emerging - tech',
    icon: Sparkles, '        description: 'Future technologies and innovations', sub_items['          { name: 'Brain - Computer Interface',
    href: '/brain - computer - interface' }, { name: 'Autonomous Vehicle AI',
    href: '/autonomous - vehicle - ai' }, { name: 'Advanced Robotics',
    href: '/advanced - robotics' }, { name: 'Biotechnology Platform',
    href: '/biotechnology - platform' }'        ]';
    ];
},
  {
";
    title: "Comp & Resources",
    icon: Users, ";
    color: "from - green - 500 to - emerald - 600",
    items[;
      {
;
    title: 'Comp & Resources',
    title: '    icon: Users, color: 'from - green - 500 to - emerald - 600', '    items['      {
        name: 'About Us',
    href: '/about',
    href: '        icon: Users, description: 'Learn about Zion Tech Group', '        sub_items['          { name: 'Our Mission',
    href: '/mission' }, '          { name: 'Leadership Team',
    href: '/leadership' }, '          { name: 'Comp History',
    href: '/history' }, '          { name: 'Careers',
    href: '/careers' }'        ]'      }, {
        name: 'Resources',
    name: '        href: '/resources',
    icon: BookOpen, '        description: 'Educational content and documentation', sub_items['          { name: 'Documentation',
    href: '/docs' }, { name: 'API Reference',
    href: '/api - docs' }, { name: 'Blog & News',
    href: '/blog' }, { name: 'Case Studies',
    href: '/case - studies' }, { name: 'Whitepapers',
    href: '/whitepapers' }, { name: 'Webinars',
    href: '/webinars' }'        ]'      }, {
        name: 'Support',
    name: '        href: '/support',
    icon: HelpCircle, '        description: 'Get help and support', sub_items['          { name: 'Contact Support',
    href: '/contact - support' }, { name: anyanyanyanyanyanyanyanyanyanyanyanyany & apos;Training Programs', href: '/training;
}, '          { name: 'Community Forum',
    href: '/community' }, '          { name: 'Knowledge Base',
    href: '/knowledge - base' }'        ];'      }];
}
];
interface EnhancedSidebar2025Props extends React.PropsWithChildren<{}> {
  is_open: boolean,
  on_close: ()               => voi, d}
export: default function EnhancedSidebar2025 (...args[]: any):  {
  const [expanded_sections, setExpandedSections] = useState < Set < string>>(new Set ());

}
  const [expanded_items, setExpandedItems] = useState < Set < string>>(new Set ());
}

      new_expanded.delete (section_title)} else: {      new_expanded.add (section_title)}
    setExpandedSections (new_expanded)}
  const filtered_services = sidebar_sections.flat_map (section =>;
    section.items.flat_map (item: =>,
      item.sub_items?.filter (child: =>,
  is_open: boolean,
on_close: ()               => void}
export default function EnhancedSidebar2025 (...args[]: any):  {
export default function EnhancedSidebar2025 (...args[]: any):  {
;
  const [expanded_sections, setExpandedSections] = useState < Set < string>>(new Set ());
}
interface EnhancedSidebar2025Props {
  on_close: () => void}
export default /**
 * EnhancedSidebar2025 - Function description
 */
function EnhancedSidebar2025() {
export default /**
 * EnhancedSidebar2025 - Function description
 */
function EnhancedSidebar2025() {
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

      newExpanded && newExpanded.delete(sectionTitle)} else {;
      newExpanded && newExpanded.add(sectionTitle)}
    setExpandedSections(newExpanded)}
  const filteredServices = sidebarSections && sidebarSections.flatMap(section =>;
    section && section.items.flatMap(item =>;
      item && item.subItems?.filter(child =>;
child && child.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        child && child.description?.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());

}
      ) |[];
    );
}

      newExpanded && newExpanded.delete(itemName)} else: {,;
      newExpanded && newExpanded.delete(itemName)} else {;
  const toggleSection = (sectionTitle: string) => {,;
    const newExpanded = new Set(expandedSections),;
    if (newExpanded && newExpanded.has(sectionTitle)) {;
      newExpanded && newExpanded.delete(sectionTitle)} else {;
  const toggleItem = (itemName: string) => {,;
    const newExpanded = new Set(expandedItems),;
    if (newExpanded && newExpanded.has(itemName)) {;
  ),;
      newExpanded && newExpanded.delete(itemName)} else {child && child.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        child && child.description?.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
      ) || [];
    );
      newExpanded && newExpanded.delete(itemName)} else: {,;
      newExpanded && newExpanded.delete(itemName)} else {;
  const toggleSection = (sectionTitle: string) => {,;
    const newExpanded = new Set(expandedSections),;
    if (newExpanded && newExpanded.has(sectionTitle)) {;
      newExpanded && newExpanded.delete(sectionTitle)} else {;
  const toggleItem = (itemName: string) => {,;
    const newExpanded = new Set(expandedItems),;
    if (newExpanded && newExpanded.has(itemName)) {;
  ),;
      newExpanded && newExpanded.delete(itemName)} else {;
newExpanded && newExpanded.add(itemName)}
    setExpandedItems(newExpanded)}
  useEffect(() => {;
    if: (isOpen) {;
",;
      document && document.body.style && style.overflow = "hidden"} else {";
";
      document && document.body.style && style.overflow: = "unset"}";
document && document.body.style && style.overflow = 'hidden'} else {;
      document && document.body.style && style.overflow = 'unset'};
    return () => {;
      document && document.body.style && style.overflow = 'unset'}}, [isOpen]);
  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router && router.pathname === href;return (

    <>;
      {/* comment */}
      <AnimatePresence>;
        {isOpen && (;
          <motion && motion.div>;
initial = {{ opacity: 0}}
            animate="{{" opacity: 1}}";
            exit="{{" opacity: 0}}";
            transition="{{" duration: 0 && 0.3}}";
            className="fixed: inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden,";
            onClick="{onClos,e}""return (
    <>;
      {/* Backdrop */}
      <AnimatePresence>;
        {isOpen && (;
          <motion && motion.div>;
initial = {{ opacity: 0}}
            animate="{{" opacity: 1}}";
            exit="{{" opacity: 0}}";
            transition="{{" duration: 0 && 0.3}}";
            className="fixed: inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden,";
            onClick="{onClos,e}"";
      new_expanded.delete (section_title)} else {
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
      new_expanded.delete (item_name)} else {
  const toggle_section = (section_title: string) =>: any {,
    const new_expanded = new Set (expanded_sections),
    if () {) {
  $2
}
      new_expanded.delete (section_title)} else {
;
  const toggle_item = (item_name: string) =>: any {,
    const new_expanded = new Set (expanded_items),
    if () {) {
  $2
}
  ),
      new_expanded.delete (item_name)} else {child.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        child.description?.toLowerCase ().includes (search_query.toLowerCase ())) || []);
      new_expanded.delete (item_name)} else: {,
      new_expanded.delete (item_name)} else {
  const toggle_section = (section_title: string) =>: any {,
    const new_expanded = new Set (expanded_sections),
    if () {) {
  $2
}
      new_expanded.delete (section_title)} else {
  const toggle_item = (item_name: string) =>: any {,
    const new_expanded = new Set (expanded_items),
    if () {) {
  $2
}
  ),
      new_expanded.delete (item_name)} else {
new_expanded.add (item_name)}
    setExpandedItems (new_expanded)}
  useEffect (() => {
    if: (is_open) {
",
      document.body.style.overflow = "hidden"} else {";
";
      document.body.style.overflow: = "unset"}";
;
document.body.style.overflow = 'hidden'} else {
      document.body.style.overflow = 'unset'}
    return () => {
      document.body.style.overflow = 'unset'}}, [is_open]);
  const is_active = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               =>: any router.pathname === href;return (
    <>;
      {/* comment */}
      <AnimatePresence>;
        {is_open && (
          <motion.div>;
initial = {{ opacity: 0}}
            animate="{{" opacity: 1}}";
            exit="{{" opacity: 0}}";
            transition="{{" duration: 0.3}}";
            className="fixed: inset - 0 bg - black / 50 backdrop - blur - sm z - 40 lg: hidden, ";
            on_click="{on_clos, e}""return (
    <>;
      {/* Backdrop */}
      <AnimatePresence>;
        {is_open && (
          <motion.div>;
initial = {{ opacity: 0}}
            animate="{{" opacity: 1}}";
            exit="{{" opacity: 0}}";
            transition="{{" duration: 0.3}}";
            className="fixed: inset - 0 bg - black / 50 backdrop - blur - sm z - 40 lg: hidden, ";
            on_click="{on_clos, e}"";
            initial="{{" opacity: 0 }}
            initial = {{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            transition={{ duration: 0.3 }}
className="fixed inset - 0 bg - black / 50 backdrop - blur - sm z - 40 lg:hidden            on_click={on_close}"          />)}

      </AnimatePresence>;
      {/* comment */}
initial="{{" coordinate_x: "-100%" }}"        animate="{{" coordinate_x: is_open ? 0 : "-100%" }}"        transition = {";
  { type "spring", damping: 25, "  stiffness: 200 "}}";
className="{"fixed" left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto"}";
        {/* comment */}";

            <button className="lg: " hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200""              <X className="w-5" h-5 text-gray-400       />"            </button>"          </div>,;

  onClos,    e: () => void}
          {/* Contact Bar */}";
          <div className="space-y-3">"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Phone className="w-4 h-4 text-cyan-400" />              <span className="text-sm" text-gray-300">{contactInfo && contactInfo.mobile}</span>"            </div>            <div className="flex" items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Mail className="w-4" h-4 text-cyan-400 />"              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>            </div>"          </div>";
        <div className="sticky" top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6>"          <div className="flex items - center justify - between mb - 6>            <div className="flex items - center gap - 3">              <div class_name = relative">"                <div className="w - 12" h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center>"                  <Zap className="w - 6 h - 6 text - white       />                </div>"                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20></div>              </div>"              <div>;
                <h2 className="text - xl" font - bold bg - gradient - to - r from - white to - cyan - 300 bg - clip - text text - transparent>"                  Zion Tech Group"                </h2>";
                <p className="text - gray - 400" text - sm > Revolutionary Technology</p>"              </div>"            </div>";
            <button className="lg: " hidden p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200""              <X className="w - 5" h - 5 text - gray - 400       />"            </button>"          </div>,
  on_clos,    e: () => void}
          {/* Contact Bar */}";
          <div className="space - y-3">"            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>              <Phone className="w - 4 h - 4 text - cyan - 400" />              <span className="text - sm" text - gray - 300">{contact_info.mobile}</span>"            </div>            <div className="flex" items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">"              <Mail className="w - 4" h - 4 text - cyan - 400 />"              <span className="text - sm text - gray - 300>{contact_info.email}</span>            </div>"          </div>";
        </div>;
      {/* Sidebar */}

      <motion&& motion.div
initial={{ x: '-100%' }}'        animate={{ x: isOpen ? 0 : '-100%' }}'        transition = {'
  { type: 'spring',

    damping: 25,'  stiffness: 200 '}}
className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto}
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6>          <div className="flex items-center justify-between mb-6">"            <div className="flex items-center gap-3>              <div className="relative">"                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center>                  <Zap className="w-6 h-6 text-white" />"                </div>"                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20></div>              </div>"              <div>;
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent>                  Zion Tech Group"                </h2>;
                <p className="text-gray-400 text-sm>Revolutionary Technology</p>              </div>"            </div>;
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"              <X className="w-5 h-5 text-gray-400 />            </button>"          </div>;
          {/* Contact Bar */}
          <div className="space-y-3>            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Phone className="w-4 h-4 text-cyan-400 />              <span className="text-sm text-gray-300">{contactInfo && contactInfo.mobile}</span>"            </div>"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Mail className="w-4 h-4 text-cyan-400" />"              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>            </div>"          </div>;
        </div>;
        {/* comment */}";

        <div className="p-6" space-y-6>"          {/* comment */}"          <Link href=/"            onClick={onClose}"            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group""            <Home className="w-5" h-5 text-cyan-400       />"            <span className="text-white font-semibold>Home</span>          </Link>",;

          {/* comment */}
        {/* Navigation Content */}
        <div className="p-6 space-y-6>          {/* Home Link */}"          <Link
            href="/""            onClick={onClose}"            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"            <Home className="w-5 h-5 text-cyan-400 />            <span className="text-white font-semibold">Home</span>"          </Link>";
          {/* Service Sections */}
          {sidebarSections && sidebarSections.map((section, sectionIndex) => (;
            <div key={sectionIndex} className="space-y-3>              <button"                onClick={() => toggleSection(section && section.title)}
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover: bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group"                <div className="flex items-center gap-3>                  <div className={`w-8 h-8 bg-gradient-to-r ${section && section.color} rounded-lg flex items-center justify-center`}>"                    <section && section.icon className="w-4 h-4 text-white />                  </div>"                  <span className="text-white font-semibold>{section && section.title}</span>                </div>"                <ChevronDownclassName={w-4 h-4 text-gray-400 transition-transform duration-300 ${`
                    expandedSections && expandedSections.has(section && section.title) ? 'rotate-180' : 
'                  }`}'                />              </button><AnimatePresence>;

                {expandedSections && expandedSections.has(section && section.title) && (;
                    initial = {;
const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {;

  const [expandedSections, setExpandedSections] = useState<string[]>([]);
initial={{ coordinate_x: '-100%' }}'        animate={{ coordinate_x: is_open ? 0 : '-100%' }}'        transition = {';
  { type: 'spring',
    damping: 25, '  stiffness: 200 '}}
className={`fixed left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto}
        {/* Header */}
        <div className="sticky top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6>          <div className="flex items - center justify - between mb - 6">"            <div className="flex items - center gap - 3>              <div className="relative">"                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center>                  <Zap className="w - 6 h - 6 text - white" />"                </div>"                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20></div>              </div>"              <div>;
                <h2 className="text - xl font - bold bg - gradient - to - r from - white to - cyan - 300 bg - clip - text text - transparent>                  Zion Tech Group"                </h2>;
                <p className="text - gray - 400 text - sm > Revolutionary Technology</p>              </div>"            </div>;
            <button;
              on_click={on_close}
              className="lg:hidden p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200"              <X className="w - 5 h - 5 text - gray - 400 />            </button>"          </div>;
;
          {/* Contact Bar */}
          <div className="space - y-3>            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">"              <Phone className="w - 4 h - 4 text - cyan - 400 />              <span className="text - sm text - gray - 300">{contact_info.mobile}</span>"            </div>"            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>              <Mail className="w - 4 h - 4 text - cyan - 400" />"              <span className="text - sm text - gray - 300>{contact_info.email}</span>            </div>"          </div>;
        </div>;
        {/* comment */}";
        <div className="p - 6" space - y-6>"          {/* comment */}"          <Link href=/"            on_click={on_close}"            className="flex" items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group""            <Home className="w - 5" h - 5 text - cyan - 400       />"            <span className="text - white font - semibold > Home</span>          </Link>",
          {/* comment */}
        {/* Navigation Content */}
        <div className="p - 6 space - y-6>          {/* Home Link */}"          <Link;
            href="/""            on_click={on_close}"            className="flex items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover:from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group"            <Home className="w - 5 h - 5 text - cyan - 400 />            <span className="text - white font - semibold">Home</span>"          </Link>";
          {/* Service Sections */}
          {sidebar_sections.map ((section, section_index) => (
            <div key={section_index} className="space - y-3>              <button"                on_click={() => toggle_section (section.title)}
                className="w - full flex items - center justify - between p - 3 bg - gray - 800 / 30 hover: bg - gray - 800 / 50 rounded - lg border border - gray - 700 / 30 transition - all duration - 300 group"                <div className="flex items - center gap - 3>                  <div className={`w - 8 h - 8 bg - gradient - to - r ${section.color} rounded - lg flex items - center justify - center`}>"                    <section.icon className="w - 4 h - 4 text - white />                  </div>"                  <span className="text - white font - semibold>{section.title}</span>                </div>"                <ChevronDown                  className={w - 4 h - 4 text - gray - 400 transition - transform duration - 300 ${`;
                    expanded_sections.has (section.title) ? 'rotate - 180' : ;
'                  }`}'                />              </button><AnimatePresence>;
                {expanded_sections.has (section.title) && (
                    initial = {
const EnhancedSidebar2025: React.FC < EnhancedSidebar2025Props> = ({ is_open, on_close }) => {
  const [expanded_sections, setExpandedSections] = useState < string[]>([]);
}
  const [expanded_items, setExpandedItems] = useState < string[]>([]);
}

          className = "fixed" inset-0 bg-black bg-opacity-50 z-40 lg: hidden,;
,;
      {/* comment */}
        initial="{{" x: "-100%"}}";
        animate="{{" x: isOpen: ? 0 : "-100%"}}";
        transition: = {;
",;

  { type "spring,", damping: 2,5,";
  stiffness: 200: }}";
        className = "{"fixed" left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto"}
";
      <motion&& motion.div"
        initial="{{" x: "-100%" }}
        animate="{{" x: isOpen ? 0 : "-100%" }}
        transition="{{" type "spring", damping: 25, stiffness: 200 }}"
        className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto>;
      >";
        <div className="sticky" top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">";";
          <div: className="flex" items-center justify-between mb-6>";";
            <div: className="flex items-center gap-3>,";
              <div: className="relative">,";

                <div: className="w-12" h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">",",;
                  <Zap: className = "w-6" h-6 text-white />",";
                <div: className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20></div>,;
      <motion&& motion.div,
initial="{{" x: "-100%" }}
        animate="{{" x: isOpen ? 0 : "-100%" }}
        transition = {
"
    setExpandedSections (prev = >;
      prev.includes (section_title);
}
        ? prev.filter (title => title !== section_title);
}
        : [...prev, section_title])}
    setExpandedItems (prev = >;
      prev.includes (item_name);
}
        ? prev.filter (name => name !== item_name);
}
        : [...prev, item_name];
;
      {/* comment */}";
          class_name = "fixed" inset - 0 bg - black bg - opacity - 50 z - 40 lg: hidden,
,
      {/* comment */}
        initial="{{" coordinate_x: "-100%"}}";
        animate="{{" coordinate_x: is_open: ? 0 : "-100%"}}";
        transition: = {
",
  { type "spring, ", damping: 2, 5, ";
  stiffness: 200: }}";
        class_name = "{"fixed" left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto"}
";
      <motion.div";
        initial="{{" coordinate_x: "-100%" }}
        animate="{{" coordinate_x: is_open ? 0 : "-100%" }}
        transition="{{" type "spring", damping: 25, stiffness: 200 }}";
        className="fixed left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto>;
      >";
        <div className="sticky" top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6">";";
          <div: className="flex" items - center justify - between mb - 6>";";
            <div: className="flex items - center gap - 3>, ";
              <div: className="relative">, ";
                <div: className="w - 12" h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center">", ",
                  <Zap: class_name = "w - 6" h - 6 text - white />", ";
                <div: className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20></div>,
      <motion.div,
initial="{{" coordinate_x: "-100%" }}
        animate="{{" coordinate_x: is_open ? 0 : "-100%" }}
        transition = {
";

  { type: "spring", damping: 25,
  stiffness: 200,>;
}}";

        className="{"fixed" left - 0 top - 0 h - full w - 80 bg - black / 95 backdrop - blur - xl border - r border - gray - 800 / 50 z - 50 overflow - y-auto"}

        {/* comment */}";
        <div className="sticky top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6">";
          <div className="flex" items - center justify - between mb - 6>";
            <div className="flex items - center gap - 3">";
              <div className="relative">";
                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center">";
                  <Zap className="w - 6" h - 6 text - white       />;
                </div>";
                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20"></div>;
              </div>;
              <div>";

                  Zion Tech Group,;

                </h2>";
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>;";
                <p className = "text-gray-400" text-sm">Revolutionary Technology</p>;
        exit="{{" x: "-100%" }}";

        className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 lg: translate-x-0 l,;
    g: static l,;
    g: shadow-none,;
      >";
        <div className="flex flex-col h-full">,;

=======
                <h2 className="text - xl" font - bold bg - gradient - to - r from - white to - cyan - 300 bg - clip - text text - transparent>;
                  Zion Tech Group,
                </h2>";
                <p className="text - gray - 400 text - sm">Revolutionary Technology</p>;";
                <p class_name = "text - gray - 400" text - sm">Revolutionary Technology</p>;
        exit="{{" coordinate_x: "-100%" }}";
        className="fixed top - 0 left - 0 h - full w - 80 bg - white shadow - 2xl z - 50 lg: translate - x-0 l,
    g: static l,
    g: shadow - none,
      >";
        <div className="flex flex - col h - full">,
          {/* comment */}";
          <div className="flex" items - center justify - between p - 6 border - b border - gray - 200">;
            <div className="flex" items - center>;
              <div className="w - 10 h - 10 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - xl flex items - center justify - center>";
                <span className="text - white font - bold text - lg">Z</span>;
              </div>";
              <div class_name = ml - 3">;
                <h1 className="text - xl" font - bold text - gray - 900 > Zion Tech</h1>;
                <p className="text - sm text - gray - 500 > 2025 Edition</p>";
        initial="{{" coordinate_x: -320 }}";
        animate="{{" coordinate_x: is_open ? 0 : -320 }}";
        transition="{{" type spring", stiffness: 300, damping: 30 }}";

                Zion Tech Group,;
              </span>",;

            <button: onClick="{onClose}
              className="lg: hidden: p-2 hover:bg-gray-800/50: rounded-lg transition-colors duration-200,"
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>;
        className="fixed top - 0 left - 0 h - full w - 80 bg - white shadow - xl z - 50 lg: translate - x-0 lg:static lg:shadow - none";
          <div className="flex" items - center justify - between p - 6 border - b border - gray - 200">";
            <div className="flex items - center>";
              <div className="w - 8" h - 8 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center">";
                <Zap className="w - 5 h - 5 text - white       />";
              <span className="ml - 3" text - xl font - bold text - gray - 900">;
                Zion Tech Group,
              </span>",
            <button: on_click="{on_close}
              className="lg: hidden: p - 2 hover:bg - gray - 800 / 50: rounded - lg transition - colors duration - 200, ";
                <p className="text - gray - 400 text - sm">Revolutionary Technology</p>;
              </div>;
            </div>";
            <button on_click="{on_close}
              className="lg: " hidden p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200>;
";
              <X className="w - 5 h - 5 text - gray - 400"  />;
            </button>;
          {/* comment */}";
        <div class_name = "p - 6 space - y-6"> {/* comment */}";
              on_click="{on_close}
              className="lg: hidden p - 2 rounded - lg hove, ";
    r: bg - gray - 100 transition - colors;
              className="lg:hidden" p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200";
              <X className="w - 5 h - 5 text - gray - 400"  />";
              className="lg:hidden" p - 2 rounded - lg hover:bg - gray - 100";
              <X className="w - 6 h - 6"  />;
          {/* comment */}";

                    onClick="{()" => toggleSection(section && section.title)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover: bg-gray-50 transition-colors",;
                      <div className="{"w-8" h-8 bg-gradient-to-r ${section && section.color} rounded-lg flex items-center justify-center mr-3"}>;
                        <section && section.icon className="w-4" h-4 text-white" />";
                      <span className="font-semibold text-gray-900>{section && section.title}</span>;
                    {expandedSections && expandedSections.includes(section && section.title) ? (";

                      <ChevronDown className="w-5 h-5 text-gray-500"  />;
                    ) : (";
                      <ChevronRight className="w-5" h-5 text-gray-500"  />;
          {/* comment */}";
          <div className="flex-1 overflow-y-auto p-4>";
            <nav className=space-y-2">;
              {sidebarSections && sidebarSections.map((section) => (";
                <div key="{section && section.title}" className="mb-6>";
                    onClick="{()" => toggleSection(section && section.title)}";
                    className="w-full" flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors hover: bg-gray-100;

                      <section && section.icon className="w-5 h-5 mr-3 text-gray-600 />",;
                      <span className="font-medium" text-gray-900">{section && section.title}</span>;
                    {expandedSections && expandedSections.includes(section && section.title) ? (";

                      <ChevronDown className="w-4 h-4       />;
                    ) : (";
                      <ChevronRight className="w-4" h-4"  />;
          <div className="flex - 1" overflow - y-auto p - 4">;
            <div className="space - y-6">";
                <div key="{section_index}">";
                    on_click="{()" => toggle_section (section.title)}
                    className="w - full flex items - center justify - between p - 3 rounded - lg hover: bg - gray - 50 transition - colors",
                      <div className="{"w - 8" h - 8 bg - gradient - to - r ${section.color} rounded - lg flex items - center justify - center mr - 3"}>;
                        <section.icon className="w - 4" h - 4 text - white" />";
                      <span className="font - semibold text - gray - 900>{section.title}</span>;
                    {expanded_sections.includes (section.title) ? (";
                      <ChevronDown className="w - 5 h - 5 text - gray - 500"  />) : (";
                      <ChevronRight className="w - 5" h - 5 text - gray - 500"  />;
          {/* comment */}";
          <div className="flex - 1 overflow - y-auto p - 4>";
            <nav class_name = space - y-2">;
              {sidebar_sections.map ((section) => (";
                <div key="{section.title}" className="mb - 6>";
                    on_click="{()" => toggle_section (section.title)}";
                    className="w - full" flex items - center justify - between px - 4 py - 3 text - left rounded - lg transition - colors hover: bg - gray - 100;
                      <section.icon className="w - 5 h - 5 mr - 3 text - gray - 600 />",
                      <span className="font - medium" text - gray - 900">{section.title}</span>;
                    {expanded_sections.includes (section.title) ? (";
                      <ChevronDown className="w - 4 h - 4       />) : (";
                      <ChevronRight className="w - 4" h - 4"  />;
";
        <div className="p - 6 space - y-6>;
          {/* comment */}";

            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group",;

          {/* comment */}";
          <div className="space-y-3>";
            <div className="flex" items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">";
              <Phone className="w-4 h-4 text-cyan-400       />";
              <span className="text-sm" text-gray-300">{contactInfo && contactInfo.mobile}</span>;
            </div>";
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>";
              <Mail className="w-4" h-4 text-cyan-400"  />";
              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>;
          <Link href=/"";";
            className="flex: " items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30: hover:to - purple - 600 / 30: rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group">;
">;
            <Home: class_name = "w - 5 h - 5 text - cyan - 400 />, ";
            <span: className="text - white font - semibold">Home</span>, ";
            className="flex" items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group",
          {/* comment */}";
          <div className="space - y-3>";
            <div className="flex" items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">";
              <Phone className="w - 4 h - 4 text - cyan - 400       />";
              <span className="text - sm" text - gray - 300">{contact_info.mobile}</span>;
            </div>";
            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>";
              <Mail className="w - 4" h - 4 text - cyan - 400"  />";
              <span className="text - sm text - gray - 300>{contact_info.email}</span>;
            </div>;
        {/* comment */}";
        <div className="p - 6" space - y-6">;
          {/* comment */}";

          <Link href="/";
            on_click="{on_close}
            className="flex" items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group";
            <Home className="w - 5 h - 5 text - cyan - 400       />";
            <span className="text - white" font - semibold">Home</span>;

          </Link>;
          {/* comment */}
            {/* Search */}
            <div className="relative">;

              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_query}
                on_change={(e) => setSearchQuery (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 2 bg - white / 10 border border - cyan - 500 / 30 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 400 focus:bg - white / 20 transition - all duration - 200";

              />;
            </div>;
          </div>;
                </div>;

                <ChevronDown className="{"w - 4" h - 4 text - gray - 400 transition - transform duration - 300 ${">;
                    expanded_sections.has (section.title) ? "rotate - 180" : "">;
}"}
";
                    expanded_sections.has (section.title) ? "rotate - 180" : ;
}"}
                  <motion.div: initial = {
  { opacity:  , 0,
  height: 0: }}
                    animate = {
;
{ opacity: 1,
  height: 'auto' ;
}}
                    exit = {
;
{ opacity: 0, height: 0}}

                    transition={{ duration: 0.3 }}
className="space - y-2 ml - 6"                    {section.items.map ((item, item_index) => (
                      <div key={item_index} className="space - y-2>                        <button"                          on_click={() => toggle_item (item.name)}
                          className="w - full flex items - center justify - between p - 2 hover: bg - gray - 800 / 30 rounded - lg transition - all duration - 300 group text - left"                          <div className="flex items - center gap - 3>                            <item.icon className="w - 4 h - 4 text - gray - 400 group - hover:text - cyan - 400 transition - colors duration - 200" />"                            <div>"                              <span className="text - gray - 300 group - hover:text - white transition - colors duration - 200 text - sm font - medium>                                {item.name}"                              </span>;
                              <p className="text - gray - 500 text - xs>{item.description}</p>                            </div>"                          </div>;
                          {item.sub_items && item.sub_items.length > 0 && (
                            <ChevronRight;


                  <motion&& motion.div: initial = {
  { opacity:  ,0,
  height: 0: }}
                    animate = {
{ opacity: 1,
  height: 'auto' 
}}
                    exit = {
{ opacity: 0, height: 0}}
                    transition={{ duration: 0 && 0.3 }}
className="space-y-2 ml-6"                    {section && section.items.map((item, itemIndex) => (;
                      <div key={itemIndex} className="space-y-2>                        <button"                          onClick={() => toggleItem(item && item.name)}
                          className="w-full flex items-center justify-between p-2 hover: bg-gray-800/30 rounded-lg transition-all duration-300 group text-left"                          <div className="flex items-center gap-3>                            <item && item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />"                            <div>"                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium>                                {item && item.name}"                              </span>;
                              <p className="text-gray-500 text-xs>{item && item.description}</p>                            </div>"                          </div>;
                          {item && item.subItems && item && item.subItems.length > 0 && (;
                            <ChevronRight
                              className={w-4 h-4 text-gray-500 transition-transform duration-300 ${`
                                expandedItems && expandedItems.has(item && item.name) ? 'rotate-90' : 

'                              }`}'                            />`                          )}</button>;
                        {/* comment */}
                        {/* comment */}


                            {expandedItems && expandedItems.has(item && item.name) && (;


";
                                className = "space-y-1: ml-6 {item && item.subItems.map((subItem, subIndex) => (";
                                  <Link: key="{subIndex}

                                    href="{subItem && subItem.href}
className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"                                    <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs">"                                      {subItem && subItem.name}                                    </span></Link>";
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20: rounded-lg transition-all duration-300 group",;
";
                                    <div: className="w-1 && 1.5" h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150: transition-transform duration-200"></div>",";
                                    <span: className="text-gray-400" group-hover:text-cyan-300: transition-colors duration-200 text-xs>" {subItem && subItem.nam,e}";
                                className="space-y-1 ml-6,;
                                {item && item.subItems.map((subItem, subIndex) => (;
                                {expandedItems && expandedItems.includes(item && item.name) && (";

                                    className="ml-8" mt-1 space-y-1";
                                    {item && item.children.map((child, childIndex) => (";
                                        key="{childIndex}

                                        href="{child && child.href}
                                        className="{"block" p-2 rounded-lg text-sm transition-colors ${;
                                          isActive(child && child.href);

                                            ? "bg-blue-50 text-blue-700";
                                            : "text-gray-600 hover: bg-gray-50",                    {section && section.items.map((item, itemIndex) => (";
                      <div key="{itemIndex}" className="space-y-2>";
                          onClick="{()" => toggleItem(item && item.name)}";
                          className="w-full" flex items-center justify-between p-2 hover: bg-gray-800/30 rounded-lg transition-all duration-300 group text-left"";

                              className={w - 4 h - 4 text - gray - 500 transition - transform duration - 300 ${`;
                                expanded_items.has (item.name) ? 'rotate - 90' : ;
'                              }`}'                            />`                          )}</button>;
;
                        {/* comment */}
                        {/* comment */}
                            {expanded_items.has (item.name) && (
;
";
                                class_name = "space - y-1: ml - 6 {item.sub_items.map ((sub_item, sub_index) => (";
                                  <Link: key="{sub_index}
                                    href="{sub_item.href}
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200"></div>                                    <span className="text - gray - 400" group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}                                    </span></Link>";
                                    className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20: rounded - lg transition - all duration - 300 group",
";
                                    <div: className="w - 1.5" h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150: transition - transform duration - 200"></div>", ";
                                    <span: className="text - gray - 400" group - hover:text - cyan - 300: transition - colors duration - 200 text - xs>" {sub_item.nam, e}";
                                className="space - y-1 ml - 6,
                                {item.sub_items.map ((sub_item, sub_index) => (
                                {expanded_items.includes (item.name) && (";
                                    className="ml - 8" mt - 1 space - y-1";
                                    {item.children.map ((child, child_index) => (";
                                        key="{child_index}
                                        href="{child.href}
                                        className="{"block" p - 2 rounded - lg text - sm transition - colors ${
                                          is_active (child.href);
                                            ? "bg - blue - 50 text - blue - 700";
                                            : "text - gray - 600 hover: bg - gray - 50",                    {section.items.map ((item, item_index) => (";
                      <div key="{item_index}" className="space - y-2>";
                          on_click="{()" => toggle_item (item.name)}";
                          className="w - full" flex items - center justify - between p - 2 hover: bg - gray - 800 / 30 rounded - lg transition - all duration - 300 group text - left"";
                            <item.icon className="w - 4 h - 4 text - gray - 400 group - hover:text - cyan - 400 transition - colors duration - 200 />",
                              <span: className="text - gray - 300" group - hover:text - white: transition - colors duration - 200 text - sm font - medium">" {item.nam, e}";
                              <p: className="text - gray - 500" text - xs>{item.description}</p>";
                          {item.sub_items: && item.sub_items.length > 0 && (";
                            <ChevronRight class_name = "{`w - 4" h - 4 text - gray - 500 transition - transform duration - 300 ${
">;
                                expanded_items.has (item.name) ? "rotate - 90" : "", ";
                                expanded_items.has (item.name) ? "rotate - 90" : "";
                    {expanded_sections.includes (section.title) && (";

                        initial="{{" opacity: 0, height: 0 }}"";
                        animate="{{" opacity: 1, height: auto }}";
                        className="ml - 4 mt - 2 space - y-1";
                        {section.items.map ((item) => (";
                          <div key="{item.name}">";
                              href="{item.href}"";

                              className="{`flex" items - center p - 3 rounded - lg transition - colors ${
                                is_active (item.href)`";
                                  ? "bg - blue - 50 text - blue - 700 border - l-4 border - blue - 600""";
                                  : "text - gray - 700 hover: bg - gray - 50"";
                            >`";
                              <item.icon className="w - 5" h - 5 mr - 3 />"";
                              <div className="flex - 1>",
                                <div className="font - medium">{item.name}</div>;

                                {item.description && (";
                                  <div className="text - sm" text - gray - 500">{item.description}</div>;
                              {item.children && (";

                            <item && item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 />",;
                              <span: className="text-gray-300" group-hover:text-white: transition-colors duration-200 text-sm font-medium">" {item && item.nam,e}";
                              <p: className="text-gray-500" text-xs>{item && item.description}</p>";
                          {item && item.subItems: && item && item.subItems.length > 0 && (";
                            <ChevronRightclassName = "{`w-4" h-4 text-gray-500 transition-transform duration-300 ${
">;
                                expandedItems && expandedItems.has(item && item.name) ? "rotate-90" : "",";
                                expandedItems && expandedItems.has(item && item.name) ? "rotate-90" : "";
                    {expandedSections && expandedSections.includes(section && section.title) && (";
                        initial="{{" opacity: 0, height: 0 }}"";
                        animate="{{" opacity: 1, height: auto }}";
                        className="ml-4 mt-2 space-y-1";
                        {section && section.items.map((item) => (";
                          <div key="{item && item.name}">";
                              href="{item && item.href}"";
                              className="{`flex" items-center p-3 rounded-lg transition-colors ${;
                                isActive(item && item.href)`";
                                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600""";
                                  : "text-gray-700 hover: bg-gray-50"";
                            >`";
                              <item && item.icon className="w-5" h-5 mr-3 />"";
                              <div className="flex-1>",;
                                <div className="font-medium">{item && item.name}</div>;
                                {item && item.description && (";
                                  <div className="text-sm" text-gray-500">{item && item.description}</div>;
                              {item && item.children && (";
                                  onClick="{(e)" => {;
                                    e && e.preventDefault();";
                                    toggleItem(item && item.name)}}"";
                                  className = "p-1" hover: bg-gray-200 rounded";
                                  {expandedItems && expandedItems.includes(item && item.name) ? ("";
                              className="{`flex" items-center px-4 py-3 rounded-lg transition-colors ${;
                                isActive(item && item.href)";
                                  ? "bg-blue-100 text-blue-700 font-medium"";
                                  : "text-gray-700 hover:bg-gray-100"";
                              <item && item.icon className="w-5 h-5 mr-3 />",;
                              <span className=flex-1">{item && item.name}</span>;
                              {item && item.badge && (";
                                <spanclassName="{`px-2" py-1 text-xs rounded-full ${"
                                  item && item.isNew ? "bg-green-100 text-green-800" :"
                                  item && item.isHot ? "bg-red-100 text-red-800" :"
                                  item && item.isPremium ? "bg-purple-100 text-purple-800" :"
                                  "bg-gray-100 text-gray-800">;,;
}`}>;
                                  {item && item.badge}


                        {/* Sub-items: */}
                        {/* Sub-items */}
                            {expandedItems && expandedItems.has(item && item.name) && (;
";

                                className = "space-y-1: ml-6 {item && item.subItems.map((subItem, subIndex) => (";
                                  <Link: key="{subIndex}""
                                    href="{subItem && subItem.href}""
className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"                                    <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs">"                                      {subItem && subItem.name}                                    </span></Link>";
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20: rounded-lg transition-all duration-300 group",;
";
                                    <div: className="w-1 && 1.5" h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150: transition-transform duration-200"></div>",";
                                    <span: className="text-gray-400" group-hover:text-cyan-300: transition-colors duration-200 text-xs>" {subItem && subItem.nam,e}";
                                className="space-y-1 ml-6,;
                                {item && item.subItems.map((subItem, subIndex) => (;
                                {expandedItems && expandedItems.includes(item && item.name) && (";

                                    className="ml-8" mt-1 space-y-1";
                                    {item && item.children.map((child, childIndex) => (";
                                        key="{childIndex}"";

                                  on_click="{(e)" => {
                                    e.prevent_default ();";
                                    toggle_item (item.name)}}"";
                                  class_name = "p - 1" hover: bg - gray - 200 rounded";
                                  {expanded_items.includes (item.name) ? ("";
                              className="{`flex" items - center px - 4 py - 3 rounded - lg transition - colors ${
                                is_active (item.href)";
                                  ? "bg - blue - 100 text - blue - 700 font - medium"";
                                  : "text - gray - 700 hover:bg - gray - 100"";
                              <item.icon className="w - 5 h - 5 mr - 3 />",
                              <span class_name = flex - 1">{item.name}</span>;
                              {item.badge && (";
                                <span className="{`px - 2" py - 1 text - xs rounded - full ${";
                                  item.is_new ? "bg - green - 100 text - green - 800" :";
                                  item.is_hot ? "bg - red - 100 text - red - 800" :";
                                  item.is_premium ? "bg - purple - 100 text - purple - 800" :";
                                  "bg - gray - 100 text - gray - 800">;,
}`}>;
                                  {item.badge}
                        {/* Sub - items: */}
                        {/* Sub - items */}
                            {expanded_items.has (item.name) && (
";
                                class_name = "space - y-1: ml - 6 {item.sub_items.map ((sub_item, sub_index) => (";
                                  <Link: key="{sub_index}"";
                                    href="{sub_item.href}"";
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200"></div>                                    <span className="text - gray - 400" group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}                                    </span></Link>";
                                    className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20: rounded - lg transition - all duration - 300 group",
";
                                    <div: className="w - 1.5" h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150: transition - transform duration - 200"></div>", ";
                                    <span: className="text - gray - 400" group - hover:text - cyan - 300: transition - colors duration - 200 text - xs>" {sub_item.nam, e}";
                                className="space - y-1 ml - 6,
                                {item.sub_items.map ((sub_item, sub_index) => (
                                {expanded_items.includes (item.name) && (";
                                    className="ml - 8" mt - 1 space - y-1";
                                    {item.children.map ((child, child_index) => (";
                                        key="{child_index}"";
                                        href="{child.href}"";
                                        className="{`block" p - 2 rounded - lg text - sm transition - colors ${
                                          is_active (child.href)`";
                                            ? "bg - blue - 50 text - blue - 700""";
                                            : "text - gray - 600 hover: bg - gray - 50",

                                        {child.name}
                                    ))}
                                  </motion.div>";
                              <div className="ml - 4 mt - 1 space - y-1>;
                                {item.children.map ((child) => (";
                                    key="{child.name}

                                        href="{child && child.href}"";
                                        className="{`block" p-2 rounded-lg text-sm transition-colors ${;
                                          isActive(child && child.href)`";
                                            ? "bg-blue-50 text-blue-700""";
                                            : "text-gray-600 hover: bg-gray-50",;
                                        {child && child.name}
                                    ))}
                                  </motion && motion.div>";
                              <div className="ml-4 mt-1 space-y-1>;
                                {item && item.children.map((child) => (";
                                    key="{child && child.name}
                                    className="{"block" px-4 py-2 text-sm rounded-lg transition-colors ${;
                                      isActive(child && child.href)";
                                        ? "bg-blue-50 text-blue-600 font-medium;
                                        : "text-gray-600 hover: bg-gray-50;
                                    className="flex" items-center gap-2 p-2 hover:bg-gray-800/20 rounded-lg transition-all duration-300 group;
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group,;
";
                                    <div className="w-1 && 1.5" h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>";
                                    <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-200 text-xs>,                                      {subItem && subItem.name}


=======
                                    className="{"block" px - 4 py - 2 text - sm rounded - lg transition - colors ${
                                      is_active (child.href)";
                                        ? "bg - blue - 50 text - blue - 600 font - medium;
                                        : "text - gray - 600 hover: bg - gray - 50;
                                    className="flex" items - center gap - 2 p - 2 hover:bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group;
                                    className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group,
";
                                    <div className="w - 1.5" h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200"></div>";
                                    <span className="text - gray - 400 group - hover:text - cyan - 300 transition - colors duration - 200 text - xs>,                                      {sub_item.name}
          {/* Quick Stats */}";
<div className="pt - 6" border - t border - gray - 800 / 50">"            <h4 className="text - sm" font - semibold text - gray - 400 mb - 3 uppercase tracking - wider > Quick Stats</h4>"            <div className="grid grid - cols - 2 gap - 3>              <div className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">                <div className="text - lg" font - bold text - cyan - 400">500+</div>"                <div className="text - xs" text - gray - 400 > Services</div>"              </div>"              <div className="text - center" p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>"                <div className="text - lg font - bold text - purple - 400 > 1000+</div>                <div className="text - xs text - gray - 400">Clients</div>              </div>            </div>";
          {/* Quick: Stats */}";

                <div: className="text-xs text-gray-400">Services</div>,",;
                <div: className = "text-lg" font-bold text-purple-400">1000+</div>",";
                <div: className="text-xs" text-gray-400>Clients</div>",;

=======
          <div className="pt - 6 border - t border - gray - 800 / 50>;";
            <h4: className="text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wider">Quick Stats</h4>;";
            <div: className="grid" grid - cols - 2 gap - 3">";";
              <div: className="text - center" p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>", ";
                <div: className="text - lg font - bold text - cyan - 400 > 500+</div>, ";
                <div: className="text - xs text - gray - 400">Services</div>, ",
                <div: class_name = "text - lg" font - bold text - purple - 400">1000+</div>", ";
                <div: className="text - xs" text - gray - 400 > Clients</div>",
          {/* comment */}";
<div className="pt - 6" border - t border - gray - 800 / 50">"            <h4 className="text - sm" font - semibold text - gray - 400 mb - 3 uppercase tracking - wider > Quick Stats</h4>"            <div className="grid grid - cols - 2 gap - 3>              <div className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">                <div className="text - lg" font - bold text - cyan - 400">500+</div>"                <div className="text - xs" text - gray - 400 > Services</div>"              </div>"              <div className="text - center" p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>"                <div className="text - lg font - bold text - purple - 400 > 1000+</div>                <div className="text - xs text - gray - 400">Clients</div>              </div>            </div>";
          {/* comment */}";

                <div: className="text-xs text-gray-400">Services</div>,",;
                <div: className = "text-lg" font-bold text-purple-400">1000+</div>",";
                <div: className="text-xs" text-gray-400>Clients</div>",;
          {/* comment */}";
            <div: className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30>,",;
              <h4: className = "text-sm font-semibold text-white mb-2">Ready to Transform?</h4>,";
              <p: className="text-gray-300" text-xs mb-3">",;

                Get: in touch to discuss your revolutionary technology needs.;
            </nav>;
          {/* comment */}
          <div className="p-4" border-t border-gray-200>;
            <div className="flex items-center space-x-4>";
              <ahref="https: // comment
                target=_blank"
                rel="noopener" noreferrer">;
          {/* comment */}";
          <div className="p-4 border-t border-gray-200>";
            <div className="flex" items-center justify-center space-x-4">";
              <ahref="https: // comment
target=_blank
                rel="noopener noreferrer,"
className="p-2" text-gray-400 hover: text-blue-600 transition-colors
                <Globe className="w-5 h-5       />;

              </a>",;
                href="mailt,;
    o: info@ziontechgroup && ziontechgroup.com"",;
                className="p-2" text-gray-400 hove,;

    r: text-gray-600 transition-colors";
                <Mail className="w-5 h-5"  />";
            <p className="mt-2" text-xs text-gray-500>;
              © 2025 Zion Tech Group. All rights reserved.";
                href="mailto:kleber@ziontechgroup && ziontechgroup.com;
                className="p-2" text-gray-400 hover:text-gray-600 transition-colors";
            <p className="text-center text-xs text-gray-500 mt-2">;
          <div className="pt - 6 border - t border - gray - 800 / 50>;";
            <h4: className="text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wider">Quick Stats</h4>;";
            <div: className="grid" grid - cols - 2 gap - 3">";";
              <div: className="text - center" p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>", ";
                <div: className="text - lg font - bold text - cyan - 400 > 500+</div>, ";
                <div: className="text - xs text - gray - 400">Services</div>, ",
                <div: class_name = "text - lg" font - bold text - purple - 400">1000+</div>", ";
                <div: className="text - xs" text - gray - 400 > Clients</div>",
          {/* comment */}";
            <div: className="p - 4 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 rounded - lg border border - cyan - 500 / 30>, ",
              <h4: class_name = "text - sm font - semibold text - white mb - 2">Ready to Transform?</h4>, ";
              <p: className="text - gray - 300" text - xs mb - 3">",
                Get: in touch to discuss your revolutionary technology needs.;
            </nav>;
          {/* comment */}
          <div className="p - 4" border - t border - gray - 200>;
            <div className="flex items - center space - x-4>";
              <a href="https: // comment;
                target = _blank";
                rel="noopener" noreferrer">;
          {/* comment */}";
          <div className="p - 4 border - t border - gray - 200>";
            <div className="flex" items - center justify - center space - x-4">";
              <a href="https: // comment;
target = _blank;
                rel="noopener noreferrer, ";
className="p - 2" text - gray - 400 hover: text - blue - 600 transition - colors;
                <Globe className="w - 5 h - 5       />;
              </a>",
                href="mailt,
    object: info@ziontechgroup.com"",
                className="p - 2" text - gray - 400 hove,
    r: text - gray - 600 transition - colors";
                <Mail className="w - 5 h - 5"  />";
            <p className="mt - 2" text - xs text - gray - 500>;
              © 2025 Zion Tech Group. All rights reserved.";
                href="mailto:kleber@ziontechgroup.com;
                className="p - 2" text - gray - 400 hover:text - gray - 600 transition - colors";
            <p className="text - center text - xs text - gray - 500 mt - 2">;
              © 2024 Zion Tech Group. All rights reserved.;

            </p>,;

          {/* comment */}";
          <div className="pt - 6" border - t border - gray - 800 / 50>"            <div className="p - 4 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 rounded - lg border border - cyan - 500 / 30>              <h4 className="text - sm font - semibold text - white mb - 2">Ready to Transform?</h4>              <p className="text - gray - 300" text - xs mb - 3">"                Get in touch to discuss your revolutionary technology needs.              </p>;
";

                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">,;
                                {item && item.name}


                              </span>";
                              <p className="text-gray-500" text-xs>{item && item.description}</p>;
                            </div>;

                          {item && item.subItems && item && item.subItems.length > 0 && (";
                            <ChevronRightclassName="{"w-4" h-4 text-gray-500 transition-transform duration-300 ${
"
                                expandedItems && expandedItems.has(item && item.name) ? "rotate-90" : 

}"}
                                  />;
                          )}
                        </button>;
                        {/* comment */}


                        {item && item.subItems && item && item.subItems.length > 0 && (;
                          <AnimatePresence>;
                            {expandedItems && expandedItems.has(item && item.name) && (;
                              <motion&& motion.div,
                          <div className="flex items - center gap - 3">";
                            <item.icon className="w - 4" h - 4 text - gray - 400 group - hover: text - cyan - 400 transition - colors duration - 200 />;
                            <div>";
                              <span className="text - gray - 300 group - hover:text - white transition - colors duration - 200 text - sm font - medium">,
                                {item.name}
                              </span>";
                              <p className="text - gray - 500" text - xs>{item.description}</p>;
                            </div>;
                          {item.sub_items && item.sub_items.length > 0 && (";
                            <ChevronRight className="{"w - 4" h - 4 text - gray - 500 transition - transform duration - 300 ${
";
                                expanded_items.has (item.name) ? "rotate - 90" : ;
}"}
                                  />)}
                        </button>;
                        {/* comment */}
                        {item.sub_items && item.sub_items.length > 0 && (
                          <AnimatePresence>;
                            {expanded_items.has (item.name) && (
                              <motion.div,

initial = {
  { opacity: 0,
  height: 0,
, ,,
}}

                                animate = {
;

{ opacity: 1,
  height: 'auto' 
}}
                                exit = {


                              </motion && motion.div>;

                            )}
                          </AnimatePresence>;
                        )}
                      </div>;
                    ))}


                  </motion && motion.div>;

                )}
              </AnimatePresence>;
            </div>;
          ))}
;
{ opacity: 0, height: 0}}
                                transition={{ duration: 0.3 }}
className="space - y-1 ml - 6"                                {item.sub_items.map ((sub_item, sub_index) => (<Link;
                                    key={sub_index}
                                    href={sub_item.href}
                                    on_click={on_close}
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200></div>                                    <span className="text - gray - 400 group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}"                                    </span></Link>))}
                              </motion.div>)}
                          </AnimatePresence>)}
                      </div>))}
                  </motion.div>)}
              </AnimatePresence>;
            </div>))}
          {/* Quick Stats */}
<div className="pt - 6 border - t border - gray - 800 / 50>            <h4 className="text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wider">Quick Stats</h4>"            <div className="grid grid - cols - 2 gap - 3>              <div className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">"                <div className="text - lg font - bold text - cyan - 400 > 500+</div>                <div className="text - xs text - gray - 400">Services</div>"              </div>"              <div className="text - center p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>                <div className="text - lg font - bold text - purple - 400">1000+</div>"                <div className="text - xs text - gray - 400 > Clients</div>              </div>"            </div>;
          </div>;

;
          {/* Contact CTA */}
          <div className="pt - 6 border - t border - gray - 800 / 50>            <div className="p - 4 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 rounded - lg border border - cyan - 500 / 30">"              <h4 className="text - sm font - semibold text - white mb - 2>Ready to Transform?</h4>              <p className="text - gray - 300 text - xs mb - 3">"                Get in touch to discuss your revolutionary technology needs."              </p>;
              <Link;
                href="/contact""                on_click={on_close}"                className="inline - flex items - center gap - 2 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover: from - cyan - 600 hover:to - purple - 700 text - white text - sm font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105"                Contact Us;
                <ChevronRight className="w - 4 h - 4 />              </Link>"            </div>;
          </div>;
        </div>;
      </motion.div>;
</>);

}
              </p>";
              <Link href=/contact"">;
                on_click="{on_close}
                className="inline - flex items - center gap - 2 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover: from - cyan - 600 hover:to - purple - 700 text - white text - sm font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105>;
Contact Us";
                <ChevronRight className="w - 4" h - 4"  />;
              </Link>;
            </div>;
      </motion && motion.div>;
    </>;
";
export default EnhancedSidebar2025, "),          <div className="pt - 6" border - t border - gray - 800 / 50>";
            <div className="p - 4 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 rounded - lg border border - cyan - 500 / 30">";
              <h4 className="text - sm" font - semibold text - white mb - 2>Ready to Transform?</h4>";
              <p className="text - gray - 300 text - xs mb - 3">;
                Get in touch to discuss your revolutionary technology needs.";
                href=/contact";";

                className = "inline-flex: items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600: hover:to-purple-700: text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105,;
                Contact: Us",;

                <ChevronRight className="w-4 h-4" />,";
                className="inline-flex" items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105";
                class_name = "inline - flex: items - center gap - 2 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover: from - cyan - 600: hover:to - purple - 700: text - white text - sm font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105,
                Contact: Us",
                <ChevronRight className="w - 4 h - 4" />, ";
                className="inline - flex" items - center gap - 2 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover: from - cyan - 600 hover:to - purple - 700 text - white text - sm font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105";
                Contact Us";
                <ChevronRight className="w - 4 h - 4 / />;
</>);
              </p>";
              <Link href=/contact"">;
                on_click="{on_close}"";
                className="inline - flex items - center gap - 2 px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover: from - cyan - 600 hover:to - purple - 700 text - white text - sm font - semibold rounded - lg transition - all duration - 300 transform hover:scale - 105>;
Contact Us";
                <ChevronRight className="w - 4" h - 4" />;
              </Link>;
            </div>;
      </motion && motion.div>;
    </>;
";

  ),,,;
}
