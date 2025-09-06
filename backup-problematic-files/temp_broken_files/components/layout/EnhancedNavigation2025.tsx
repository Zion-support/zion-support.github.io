use client',

import { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, ChevronDown,
  Brain, Rocket, Shield,
  Zap,
  Target, Atom,
  BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Palette, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
 from 'lucide-react',

const navigationItems = [
  {
    name: 'All Services',
    href: '/2025-innovative-services-showcase',
    icon: <Globe className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className=&quot;w-5 h-5&quot; />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
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
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' },
      { name: 'AI Quantum Financial Trading', href: '/ai-quantum-financial-trading', description: 'Quantum AI trading platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI diagnostics' },
      { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing-platform', description: 'Industrial AI automation' },
      { name: 'AI Cybersecurity Intelligence', href: '/ai-cybersecurity-threat-intelligence', description: 'AI threat detection' },
      { name: 'AI Content Creation Studio', href: '/ai-content-creation-studio', description: 'AI content generation' }
    ]
  },
  {
    name: 'AI Automation',
    href: '/ai-automation-services',
    icon: <Zap className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'AI Automation',
    href: '/ai-automation-services',
    icon: <Zap className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className=&quot;w-5 h-5&quot; />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
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
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Quantum-Ready Database', href: '/quantum-ready-database-platform', description: 'Quantum-resistant data storage' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity-services',
    icon: <Shield className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity-services',
    icon: <Shield className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Cpu className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'Blockchain & Web3',
    href: '/blockchain-web3-services',
    icon: <Globe className=&quot;w-5 h-5&quot; />,
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
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className=&quot;w-5 h-5&quot; />,
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
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech-services',
    icon: <Heart className=&quot;w-5 h-5&quot; />,
    description: 'AI-powered healthcare and biotechnology',
    badge: 'New',
    children: [
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'AI-powered drug development' },
      { name: 'Precision Medicine', href: '/precision-medicine-genomics', description: 'Personalized healthcare' },
      { name: 'Medical Imaging AI', href: '/ai-medical-imaging-analysis', description: 'AI image analysis' },
      { name: 'Digital Health Platform', href: '/digital-health-telemedicine', description: 'Telemedicine solutions' },
      { name: 'Clinical Trial Management', href: '/clinical-trial-management-optimization', description: 'Trial optimization' },
      { name: 'Healthcare Analytics', href: '/healthcare-analytics', description: 'Health data insights' },
      { name: 'Patient Engagement', href: '/patient-engagement-platform', description: 'Patient communication' },
      { name: 'Medical Device AI', href: '/medical-device-ai', description: 'Smart medical devices' },
      { name: 'Healthcare Security', href: '/healthcare-cybersecurity', description: 'Medical data protection' },
      { name: 'Biotech Research Tools', href: '/biotech-research-tools', description: 'Research automation' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-biotech-services',
    icon: <Heart className=&quot;w-5 h-5&quot; />,
    description: 'AI-powered healthcare and biotechnology',
    badge: 'New',
    children: [
      { name: 'AI Drug Discovery', href: '/ai-drug-discovery-platform', description: 'AI-powered drug development' },
      { name: 'Precision Medicine', href: '/precision-medicine-genomics', description: 'Personalized healthcare' },
      { name: 'Medical Imaging AI', href: '/ai-medical-imaging-analysis', description: 'AI image analysis' },
      { name: 'Digital Health Platform', href: '/digital-health-telemedicine', description: 'Telemedicine solutions' },
      { name: 'Clinical Trial Management', href: '/clinical-trial-management-optimization', description: 'Trial optimization' },
      { name: 'Healthcare Analytics', href: '/healthcare-analytics', description: 'Health data insights' },
      { name: 'Patient Engagement', href: '/patient-engagement-platform', description: 'Patient communication' },
      { name: 'Medical Device AI', href: '/medical-device-ai', description: 'Smart medical devices' },
      { name: 'Healthcare Security', href: '/healthcare-cybersecurity', description: 'Medical data protection' },
      { name: 'Biotech Research Tools', href: '/biotech-research-tools', description: 'Research automation' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className=&quot;w-5 h-5&quot; />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Cutting-edge research and development services',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Truck className=&quot;w-5 h-5&quot; />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  },
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className=&quot;w-5 h-5&quot; />,
    description: 'Flexible pricing options for all services',
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Educational resources and documentation',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className=&quot;w-5 h-5&quot; />,
    description: 'Technical support and customer service',
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }    ]
  }
,

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
,

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleMenu = () => setIsOpen(!isOpen),
  const closeMenu = () => setIsOpen(false),

  return (
    <>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-cyan-900 to-purple-900 text-white py-2&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex flex-col sm:flex-row justify-between items-center text-sm&quot;>
            <div className=&quot;flex items-center gap-4 mb-2 sm:mb-0&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <Phone className=&quot;w-4 h-4 text-cyan-300&quot; />
                <span>{contactInfo.phone}</span>
              </div>
              <div className=&quot;flex items-center gap-2&quot;>
                <Mail className=&quot;w-4 h-4 text-purple-300&quot; />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <MapPin className=&quot;w-4 h-4 text-green-300&quot; />
              <span className=&quot;text-xs&quot;>{contactInfo.address}</span>            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Star className=&quot;w-6 h-6 text-white&quot; />                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot;></div>
              </div>
              <div>
                <h1 className=&quot;text-xl font-bold text-white&quot;>Zion Tech Group</h1>
                <p className=&quot;text-xs text-gray-400&quot;>Innovation  Intelligence  Impact</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {navigationItems.map(item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu = = item.name ? null : item.name)}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2&quot;
                  >
                    <item.icon className=&quot;w-4 h-4&quot; />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu = = item.name ? 'rotate-180' : ''
                    }`} />                  </button>

                  {_/* Submenu */}
                  <AnimatePresence>
                    {activeSubmenu = = item.name && (
                      <motion.div
                        initial={ opacity: 0, y: 10 }
                        animate={ opacity: 1, y: 0 }
                        exit={ opacity: 0, y: 10 }
                        transition={ duration: 0.2 }
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden&quot;
                      >
                        <div className=&quot;p-6&quot;>
                          {item.submenu?.map(subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              onClick={() => setActiveSubmenu(null)}
                              className=&quot;group block p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200 mb-2 last:mb-0&quot;
                            >
                              <div className=&quot;flex items-start space-x-3&quot;>
                                {subitem.icon && (
                                  <div className=&quot;p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-200&quot;>
                                    <subitem.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                                  </div>
                                )}
                                <div className=&quot;flex-1&quot;>
                                  <h3 className=&quot;font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200&quot;>
                                    {subitem.name}
                                  </h3>
                                  <p className=&quot;text-sm text-gray-400 mt-1&quot;>
                                    {subitem.description}
                                  </p>
                                  {subitem.services && (
                                    <div className=&quot;mt-2 flex flex-wrap gap-1&quot;>
                                      {subitem.services.slice(0, 2).map(service) => (                                        <span
                                          key={service}
                                          className=&quot;px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md&quot;
                                        >
                                          {_service}
                                        </span>
                                      )}
                                      {subitem.services.length > 2 && (
                                        <span className=&quot;px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md&quot;>                                          +{subitem.services.length - 2} more
                                        </span>
                                      )}
                                    </div>;
                                  )}
                                </div>
                              </div>
                            </a>
                          )}
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              )}
            </div>;

            {/* CTA Buttons */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>              <Link
                href=&quot;/pricing&quot;
                className=&quot;px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200&quot;
              >
                Pricing
              </a>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
              >
                Get Started
              </a>
            </div>

            {_/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className=&quot;lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}            </button>
          </div>
        </div>
      </nav>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {_isOpen && (
          <motion.div
            initial={ opacity: 0, x: '100%' }
            animate={ opacity: 1, x: 0 }
            exit={ opacity: 0, x: '100%' }
            transition={ duration: 0.3 }
                      {item.badge && (
                        <span className=&quot;px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full&quot;>                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown = = item.name ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown = = item.name && (
                    <motion.div
                      initial={ opacity: 0, height: 0 }
                      animate={ opacity: 1, height: 'auto' }
                      exit={ opacity: 0, height: 0 }
                      transition={ duration: 0.2 }
                      className=&quot;ml-8 mt-2 space-y-2&quot;                    >
                      {_item.children?.map(child) => (_<Link
                          key={child.name}
                          href={child.href}
                          className=&quot;block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200&quot;
                          onClick={() => setIsOpen(false)}
                          className=&quot;block p-2 text-gray-300 hover:text-white transition-colors text-sm&quot;
                        >
                          <subItem.icon className=&quot;w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200&quot; />
                          <span className=&quot;text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                            {subItem.name}                          </span>
                        </a>
                      )}
                    </motion.div>;
                  )}
                </div>;
              )}

              {/* Mobile CTA */}
              <div className=&quot;pt-4&quot;>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                  onClick={() => setIsOpen(false)}                >
                  Get Started
                </a>
            className=&quot;fixed inset-0 z-50 lg:hidden&quot;
          >
            {_/* Backdrop */}
            <div
              className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot;
              onClick={closeMenu}
            />;
            {/* Menu Panel */}
            <div className=&quot;absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto&quot;>
              <div className=&quot;p-6&quot;>
                {/* Close Button */}
                <div className=&quot;flex justify-end mb-6&quot;>
                  <button
                    onClick={closeMenu}
                    className=&quot;p-2 text-gray-400 hover:text-white transition-colors duration-200&quot;                  >
                    <X className=&quot;w-6 h-6&quot; />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className=&quot;space-y-4&quot;>
                  {navigationItems.map(item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu = = item.name ? null : item.name)}
                        className=&quot;flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                      >
                        <div className=&quot;flex items-center space-x-3&quot;>
                          <item.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                          <span className=&quot;text-white font-medium&quot;>{item.name}</span>                        </div>
                        <ChevronDown className={_`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeSubmenu = = item.name ? 'rotate-180' : ''}`} />
                      </button>

                      {_/* Mobile Submenu */}
                      <AnimatePresence>
                        {activeSubmenu = = item.name && (
                          <motion.div
                            initial={ opacity: 0, height: 0 }
                            animate={ opacity: 1, height: 'auto' }
                            exit={ opacity: 0, height: 0 }
                            transition={ duration: 0.2 }
                            className=&quot;ml-8 space-y-2&quot;                          >
                            {_item.submenu?.map(subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMenu}
                                className=&quot;block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200&quot;
                              >
                                <h4 className=&quot;text-white font-medium&quot;>{subitem.name}</h4>
                                <p className=&quot;text-sm text-gray-400 mt-1&quot;>{subitem.description}</p>
                              </a>                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>;
                    </div>;
                  )}
                </div>;

                {/* Mobile CTA */}
                <div className=&quot;mt-8 space-y-4&quot;>
                  <Link
                    href=&quot;/pricing&quot;
                    onClick={closeMenu}
                    className=&quot;block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200&quot;                  >
                    View Pricing
                  </a>
                  <Link
                    href=&quot;/contact&quot;
                    onClick={closeMenu}
                    className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;                  >
                    Contact Us
                  </a>
                </div>

                {/* Mobile Contact Info */}
                <div className=&quot;mt-8 pt-6 border-t border-gray-700/50&quot;>
                  <div className=&quot;space-y-3 text-sm&quot;>
                    <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                      <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                      <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className=&quot;flex items-start space-x-3 text-gray-400&quot;>
                      <MapPin className=&quot;w-4 h-4 text-green-400 mt-0.5&quot; />
                      <span className=&quot;text-xs&quot;>{contactInfo.address}</span>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>;

      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot; />    </>
  )
,

export default EnhancedNavigation2025,