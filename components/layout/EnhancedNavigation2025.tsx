"use client";

'use client';


};export default EnhancedNavigation2025;
export default function EnhancedNavigation2025() {;





import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, MessageCircle
} from 'lucide-react';
const navigationItems = [
  {
    name: 'All Services',
    href: '/2025-innovative-services-showcase',
icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'New',
    children: [
      { name: '2025 Innovative Services', href: '/2025-innovative-services-showcase', description: 'Latest innovative services portfolio' },
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Cutting-Edge 2025', href: '/cutting-edge-services-2025', description: 'Latest revolutionary services', badge: 'New' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'New 2025 Services', href: '/2025-cutting-edge-ai-services', description: 'Latest AI innovations' },
      { name: 'IT Infrastructure', href: '/2025-innovative-it-infrastructure-services', description: 'Advanced IT solutions' },
      { name: 'Micro SAAS Solutions', href: '/2025-innovative-micro-saas-solutions', description: 'Business solutions' }
    ]
};
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025/', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio-platform', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Autonomous decision making' },
      { name: 'AI Autonomous Code Generation', href: '/ai-autonomous-code-generation', description: 'AI that writes code' },
      { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
      { name: 'AI Autonomous Sales', href: '/ai-autonomous-sales-platform', description: 'AI that closes deals' },
      { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Autonomous support AI' },
      { name: 'AI Autonomous HR', href: '/ai-autonomous-hr-platform', description: 'Autonomous HR management' },
{ name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' };
      { name: 'AI Quantum Financial Trading', href: '/ai-quantum-financial-trading', description: 'Quantum AI trading platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI diagnostics' },
      { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing-platform', description: 'Industrial AI automation' },
      { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-threat-intelligence', description: 'AI threat detection' },
      { name: 'AI Content Creation Studio', href: '/ai-content-creation-studio', description: 'AI content generation' }
    ]
};
  {
    name: 'AI Automation',
    href: '/ai-automation-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Advanced AI-powered automation solutions',
    badge: 'Hot',
    children: [
      { name: 'AI Code Generation', href: '/ai-code-generation-review', description: 'Automated code generation and review' },
      { name: 'DevOps Automation', href: '/ai-devops-automation', description: 'Intelligent DevOps workflows' },
      { name: 'Customer Support AI', href: '/ai-customer-support-automation', description: 'AI-powered customer support' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing automation' },
      { name: 'Sales Intelligence', href: '/ai-sales-intelligence', description: 'AI-powered sales insights' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Advanced analytics and insights' },
      { name: 'Content Automation', href: '/ai-content-generation-platform', description: 'AI content creation' },
      { name: 'Process Automation', href: '/ai-process-automation', description: 'Intelligent workflow automation' },
      { name: 'Quality Assurance AI', href: '/ai-quality-assurance', description: 'Automated testing and QA' },
      { name: 'Data Processing AI', href: '/ai-data-processing', description: 'Intelligent data handling' }
    ]
};
  {
    name: 'AI Automation',
    href: '/ai-automation-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Advanced AI-powered automation solutions',
    badge: 'Hot',
    children: [
      { name: 'AI Code Generation', href: '/ai-code-generation-review', description: 'Automated code generation and review' },
      { name: 'DevOps Automation', href: '/ai-devops-automation', description: 'Intelligent DevOps workflows' },
      { name: 'Customer Support AI', href: '/ai-customer-support-automation', description: 'AI-powered customer support' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing automation' },
      { name: 'Sales Intelligence', href: '/ai-sales-intelligence', description: 'AI-powered sales insights' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Advanced analytics and insights' },
      { name: 'Content Automation', href: '/ai-content-generation-platform', description: 'AI content creation' },
      { name: 'Process Automation', href: '/ai-process-automation', description: 'Intelligent workflow automation' },
      { name: 'Quality Assurance AI', href: '/ai-quality-assurance', description: 'Automated testing and QA' },
      { name: 'Data Processing AI', href: '/ai-data-processing', description: 'Intelligent data handling' }
    ]
};
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform/', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Quantum-Ready Database', href: '/quantum-ready-database-platform', description: 'Quantum-resistant data storage' }
    ]
};
  {
    name: 'Cybersecurity',
    href: '/cybersecurity-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Next-generation cybersecurity solutions',
    badge: 'Hot',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Advanced zero trust implementation' },
      { name: 'AI Threat Intelligence', href: '/ai-threat-intelligence', description: 'AI-powered threat detection' },
      { name: 'Cloud Security Posture', href: '/cloud-security-posture', description: 'Multi-cloud security management' },
      { name: 'DevSecOps Security', href: '/devsecops-security-platform', description: 'Security in DevOps pipelines' },
      { name: 'IoT Security Platform', href: '/iot-security-platform', description: 'IoT device protection' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Incident Response AI', href: '/incident-response-ai', description: 'Automated incident handling' },
      { name: 'Compliance Automation', href: '/compliance-automation', description: 'Regulatory compliance tools' },
      { name: 'Vulnerability Management', href: '/vulnerability-management', description: 'Automated vulnerability scanning' },
      { name: 'Security Analytics', href: '/security-analytics', description: 'Advanced security insights' }
    ]
};
  {
    name: 'Cybersecurity',
    href: '/cybersecurity-services',
    icon: <Shield className="w-5 h-5" />,
    description: 'Next-generation cybersecurity solutions',
    badge: 'Hot',
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Advanced zero trust implementation' },
      { name: 'AI Threat Intelligence', href: '/ai-threat-intelligence', description: 'AI-powered threat detection' },
      { name: 'Cloud Security Posture', href: '/cloud-security-posture', description: 'Multi-cloud security management' },
      { name: 'DevSecOps Security', href: '/devsecops-security-platform', description: 'Security in DevOps pipelines' },
      { name: 'IoT Security Platform', href: '/iot-security-platform', description: 'IoT device protection' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Incident Response AI', href: '/incident-response-ai', description: 'Automated incident handling' },
      { name: 'Compliance Automation', href: '/compliance-automation', description: 'Regulatory compliance tools' },
      { name: 'Vulnerability Management', href: '/vulnerability-management', description: 'Automated vulnerability scanning' },
      { name: 'Security Analytics', href: '/security-analytics', description: 'Advanced security insights' }
    ]
};
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-healing IT infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent development automation' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud transitions' },
      { name: 'IT Asset Management', href: '/it-asset-management', description: 'Comprehensive asset tracking' },
      { name: 'Infrastructure Monitoring', href: '/infrastructure-monitoring', description: 'Real-time system monitoring' }
    ]
};
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-web3-services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Advanced blockchain and Web3 solutions',
    badge: 'New',
    children: [
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Intelligent yield farming' },
      { name: 'NFT Marketplace', href: '/nft-marketplace-management', description: 'Custom NFT platforms' },
      { name: 'DAO Governance', href: '/dao-governance-management', description: 'Decentralized governance' },
      { name: 'Cross-Chain Bridge', href: '/cross-chain-bridge-interoperability', description: 'Multi-chain interoperability' },
      { name: 'Web3 Identity', href: '/web3-identity-authentication', description: 'Decentralized identity' },
      { name: 'Smart Contract Development', href: '/smart-contract-development', description: 'Advanced contract creation' },
      { name: 'DeFi Protocol Development', href: '/defi-protocol-development', description: 'Custom DeFi protocols' },
      { name: 'Web3 Analytics', href: '/web3-analytics', description: 'Blockchain insights' },
      { name: 'Token Economics', href: '/token-economics', description: 'Token design and modeling' },
      { name: 'Regulatory Compliance', href: '/web3-compliance', description: 'Compliance automation' }
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
  },
  {
    name: 'Financial Technology',
    href: '/fintech',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Next-generation fintech and blockchain solutions',
    badge: 'FinTech',
    color: 'from-amber-500 to-orange-600',
    children: [
      { name: 'Quantum Trading Platform', href: '/quantum-trading-platform', description: 'Quantum-enhanced trading algorithms' },
      { name: 'AI Risk Management Suite', href: '/ai-risk-management-suite', description: 'Intelligent risk assessment' },
      { name: 'Blockchain Payment Gateway', href: '/blockchain-payment-gateway', description: 'Secure crypto payments' },
      { name: 'AI Credit Scoring Platform', href: '/ai-credit-scoring-platform', description: 'Advanced credit analysis' },
      { name: 'Quantum Portfolio Optimizer', href: '/quantum-portfolio-optimizer', description: 'Quantum portfolio management' },
      { name: 'DeFi Yield Farming Platform', href: '/defi-yield-farming-platform', description: 'Automated yield optimization' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech',
    icon: <Dna className="w-5 h-5" />,
    description: 'Revolutionary healthcare and biotechnology innovations',
    badge: 'HealthTech',
    color: 'from-pink-500 to-rose-600',
    children: [
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', description: 'AI-powered pharmaceutical research' },
      { name: 'Quantum Medical Imaging', href: '/quantum-medical-imaging', description: 'Quantum-enhanced diagnostics' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Individualized treatment plans' },
      { name: 'Biotech Lab Automation', href: '/biotech-lab-automation', description: 'Automated laboratory processes' },
      { name: 'AI Clinical Trial Manager', href: '/ai-clinical-trial-manager', description: 'Intelligent trial management' },
      { name: 'Quantum DNA Sequencing', href: '/quantum-dna-sequencing', description: 'Ultra-fast genetic analysis' }
    ]
};
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
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

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};
export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);

  }, []);

  const toggleItem = (name: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(name)) {
      newExpanded.delete(name);
    } else {
      newExpanded.add(name);
    }
    setExpandedItems(newExpanded);
  };

  const filteredItems = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light">Innovation • Intelligence • Impact</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleItem(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-zion-slate-light hover:text-white rounded-lg hover:bg-zion-slate-dark/50 transition-all duration-300"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-zion-cyan/20 text-zion-cyan rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      expandedItems.has(item.name) ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {expandedItems.has(item.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10"
                      >
                        <div className="p-4">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-zion-slate-light">{item.description}</p>
                          </div>
                          <div className="space-y-2">
                            {item.children?.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block p-3 rounded-lg hover:bg-zion-slate-dark/70 transition-all duration-300 group"
                              >
                                <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                  {child.name}
                                </h4>
                                <p className="text-sm text-zion-slate-light mt-1">
                                  {child.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact & Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-zion-slate-dark/95 backdrop-blur-xl border-l border-zion-cyan/20 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 rounded-lg transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => toggleItem(item.name)}
                      className="w-full flex items-center justify-between p-3 bg-zion-slate-dark/50 hover:bg-zion-slate-dark/70 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-xs text-zion-slate-light">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-zion-cyan/20 text-zion-cyan rounded-full">
                            {item.badge}
                          </span>
                        )}
                        <ChevronDown className={`w-4 h-4 text-zion-cyan transition-transform duration-300 ${
                          expandedItems.has(item.name) ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>

                    {/* Children */}
                    <AnimatePresence>
                      {expandedItems.has(item.name) && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobileMenu}
                              className="block p-3 bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 border border-zion-cyan/10 hover:border-zion-cyan/30 rounded-lg transition-all duration-300 group"
                            >
                              <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {child.name}
                              </h4>
                              <p className="text-sm text-zion-slate-light mt-1">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Contact Us</span>
                  </Link>
                  <div className="text-sm text-zion-slate-light space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-zion-cyan" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-zion-cyan transition-colors duration-300">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-zion-cyan" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors duration-300">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
