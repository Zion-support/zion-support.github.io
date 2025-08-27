import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Plane,
  Car,
  Truck,
  Cloud,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Database,
  Server,
  Network,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  HardDrive,
  MemoryStick,
  Router,
  Switch,
  Hub,
  Modem,
  Firewall,
  LoadBalancer,
  Gateway,
  Proxy,
  VPN,
  SSL,
  TLS,
  SSH,
  FTP,
  HTTP,
  HTTPS,
  DNS,
  DHCP,
  NTP,
  SMTP,
  POP3,
  IMAP,
  LDAP,
  Kerberos,
  OAuth,
  JWT,
  SAML,
  OpenID,
  Radius,
  Tacacs,
  Syslog,
  SNMP,
  NetFlow,
  sFlow,
  IPFIX,
  BGP,
  OSPF,
  EIGRP,
  RIP,
  VLAN,
  VXLAN,
  GRE,
  IPSec,
  MPLS,
  SDN,
  NFV,
  VNF,
  Container,
  Pod,
  Service,
  Ingress,
  Egress,
  Cluster,
  Node,
  Namespace,
  ConfigMap,
  Secret,
  PersistentVolume,
  StorageClass,
  StatefulSet,
  DaemonSet,
  Job,
  CronJob,
  HorizontalPodAutoscaler,
  VerticalPodAutoscaler,
  NetworkPolicy,
  PodSecurityPolicy,
  Role,
  RoleBinding,
  ClusterRole,
  ClusterRoleBinding,
  ServiceAccount,
  Token,
  Certificate,
  CSR,
  CRL,
  OCSP,
  HSM,
  TPM,
  SecureEnclave,
  TrustZone,
  SGX,
  SEV,
  TDX,
  ARM,
  x86,
  RISC,
  CISC,
  GPU,
  TPU,
  FPGA,
  ASIC,
  SoC,
  SiP,
  PCB,
  Motherboard,
  Backplane,
  Chassis,
  Rack,
  Cabinet,
  Datacenter,
  Colocation,
  Edge,
  Fog,
  Cloud,
  Hybrid,
  Multi,
  Public,
  Private,
  Community,
  Government,
  Financial,
  Healthcare,
  Education,
  Retail,
  Manufacturing,
  Transportation,
  Energy,
  Utilities,
  Telecommunications,
  Media,
  Entertainment,
  Gaming,
  Social,
  Ecommerce,
  Fintech,
  Insurtech,
  Healthtech,
  Edtech,
  Proptech,
  Legaltech,
  Regtech,
  Adtech,
  MarTech,
  HRTech,
  SalesTech,
  SupportTech,
  SecurityTech,
  PrivacyTech,
  ComplianceTech,
  GovernanceTech,
  RiskTech,
  AuditTech,
  MonitoringTech,
  ObservabilityTech,
  LoggingTech,
  TracingTech,
  MetricsTech,
  AlertingTech,
  IncidentTech,
  ChangeTech,
  ReleaseTech,
  DeploymentTech,
  CI,
  CD,
  DevOps,
  GitOps,
  SecOps,
  DataOps,
  MLOps,
  AIOps,
  NoOps,
  SRE,
  Platform,
  Infrastructure,
  Application,
  Data,
  Security,
  Network,
  Storage,
  Compute,
  Memory,
  Cache,
  Buffer,
  Queue,
  Stream,
  Batch,
  RealTime,
  NearRealTime,
  Offline,
  Online,
  Hybrid,
  Multi,
  Single,
  Distributed,
  Centralized,
  Decentralized,
  Federated,
  Hierarchical,
  Flat,
  Mesh,
  Star,
  Ring,
  Bus,
  Tree,
  Graph,
  Matrix,
  Vector,
  Scalar,
  Tensor,
  Array,
  List,
  Stack,
  Queue,
  Deque,
  PriorityQueue,
  Heap,
  Tree,
  Graph,
  HashTable,
  BloomFilter,
  SkipList,
  Trie,
  BTree,
  RedBlackTree,
  AVLTree,
  SplayTree,
  Treap,
  SplayTree,
  RedBlackTree,
  AVLTree,
  BTree,
  Trie,
  SkipList,
  BloomFilter,
  HashTable,
  Graph,
  Tree,
  Heap,
  PriorityQueue,
  Deque,
  Queue,
  Stack,
  List,
  Array,
  Tensor,
  Scalar,
  Vector,
  Matrix,
  Graph,
  Tree,
  Ring,
  Star,
  Mesh,
  Flat,
  Hierarchical,
  Federated,
  Decentralized,
  Centralized,
  Distributed,
  Single,
  Multi,
  Hybrid,
  Online,
  Offline,
  NearRealTime,
  RealTime,
  Batch,
  Stream,
  Queue,
  Buffer,
  Cache,
  Memory,
  Compute,
  Storage,
  Network,
  Security,
  Data,
  Application,
  Infrastructure,
  Platform,
  SRE,
  NoOps,
  AIOps,
  MLOps,
  DataOps,
  SecOps,
  GitOps,
  DevOps,
  CD,
  CI,
  DeploymentTech,
  ReleaseTech,
  ChangeTech,
  IncidentTech,
  AlertingTech,
  MetricsTech,
  TracingTech,
  LoggingTech,
  ObservabilityTech,
  MonitoringTech,
  AuditTech,
  RiskTech,
  GovernanceTech,
  ComplianceTech,
  PrivacyTech,
  SecurityTech,
  SupportTech,
  SalesTech,
  HRTech,
  MarTech,
  Adtech,
  Regtech,
  Legaltech,
  Proptech,
  Edtech,
  Healthtech,
  Insurtech,
  Fintech,
  Ecommerce,
  Social,
  Gaming,
  Entertainment,
  Media,
  Telecommunications,
  Utilities,
  Energy,
  Transportation,
  Manufacturing,
  Retail,
  Education,
  Healthcare,
  Financial,
  Government,
  Community,
  Private,
  Public,
  Multi,
  Hybrid,
  Cloud,
  Fog,
  Edge,
  Colocation,
  Datacenter,
  Cabinet,
  Rack,
  Chassis,
  Backplane,
  Motherboard,
  PCB,
  SiP,
  SoC,
  ASIC,
  FPGA,
  TPU,
  GPU,
  CISC,
  RISC,
  x86,
  ARM,
  TDX,
  SEV,
  SGX,
  TrustZone,
  SecureEnclave,
  TPM,
  HSM,
  OCSP,
  CRL,
  CSR,
  Certificate,
  Token,
  ServiceAccount,
  ClusterRoleBinding,
  ClusterRole,
  RoleBinding,
  Role,
  PodSecurityPolicy,
  NetworkPolicy,
  VerticalPodAutoscaler,
  HorizontalPodAutoscaler,
  CronJob,
  Job,
  DaemonSet,
  StatefulSet,
  StorageClass,
  PersistentVolume,
  Secret,
  ConfigMap,
  Namespace,
  Node,
  Cluster,
  Egress,
  Ingress,
  Service,
  Pod,
  Container,
  VNF,
  NFV,
  SDN,
  MPLS,
  IPSec,
  GRE,
  VXLAN,
  VLAN,
  RIP,
  EIGRP,
  OSPF,
  BGP,
  IPFIX,
  sFlow,
  NetFlow,
  SNMP,
  Syslog,
  Tacacs,
  Radius,
  OpenID,
  SAML,
  JWT,
  OAuth,
  Kerberos,
  LDAP,
  IMAP,
  POP3,
  SMTP,
  NTP,
  DHCP,
  DNS,
  HTTPS,
  HTTP,
  FTP,
  SSH,
  TLS,
  SSL,
  VPN,
  Proxy,
  Gateway,
  LoadBalancer,
  Firewall,
  Modem,
  Hub,
  Switch,
  Router,
  MemoryStick,
  HardDrive,
  Signal,
  Battery,
  Bluetooth,
  Wifi,
  Network,
  Server,
  Database,
  Palette,
  Settings,
  Users,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Smartphone,
  Palette,
  Settings,
  Cloud,
  Truck,
  Car,
  Plane,
  Train,
  Ship,
  Box,
  Navigation,
  Route,
  Warehouse,
  Package,
  AlertTriangle,
  RefreshCw,
  Layers,
  MapPin,
  TrendingUp,
  BarChart3,
  Cog,
  Factory,
  Plane,
  Car,
  Building,
  Server,
  Network,
  Gauge,
  Lightbulb,
  Rocket,
  Target,
  Brain,
  Cpu,
  Wrench,
  FileText,
  Code,
  Database,
  Eye,
  Clock,
  Activity,
  Lock,
  Globe,
  Award,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Brain
} from 'lucide-react';

const ventureCapitalSolutions = [
  {
    id: 1,
    title: "AI Investment Analysis Platform",
    description: "Intelligent platform for analyzing investment opportunities and market trends.",
    icon: BarChart3,
    features: [
      "Market analysis",
      "Risk assessment",
      "Portfolio optimization",
      "Investment recommendations"
    ],
    price: "From $300,000",
    timeline: "32-44 weeks",
    category: "Investment Analysis",
    technologies: ["Machine Learning", "Data Analytics", "Financial Modeling", "AI Models"]
  },
  {
    id: 2,
    title: "Autonomous Deal Sourcing",
    description: "AI-powered system for identifying and evaluating investment opportunities.",
    icon: Target,
    features: [
      "Deal identification",
      "Company screening",
      "Market research",
      "Opportunity scoring"
    ],
    price: "From $250,000",
    timeline: "28-40 weeks",
    category: "Deal Sourcing",
    technologies: ["AI", "Data Mining", "Market Intelligence", "Machine Learning"]
  },
  {
    id: 3,
    title: "Portfolio Management System",
    description: "Intelligent system for managing and optimizing investment portfolios.",
    icon: Users,
    features: [
      "Portfolio tracking",
      "Performance analysis",
      "Risk management",
      "Rebalancing"
    ],
    price: "From $200,000",
    timeline: "24-36 weeks",
    category: "Portfolio Management",
    technologies: ["AI Optimization", "Portfolio Theory", "Analytics", "Machine Learning"]
  },
  {
    id: 4,
    title: "Predictive Market Intelligence",
    description: "AI-driven forecasting and market intelligence for investment decisions.",
    icon: TrendingUp,
    features: [
      "Market forecasting",
      "Trend analysis",
      "Sector insights",
      "Economic indicators"
    ],
    price: "From $350,000",
    timeline: "36-48 weeks",
    category: "Market Intelligence",
    technologies: ["Predictive Analytics", "Machine Learning", "Data Science", "AI Models"]
  },
  {
    id: 5,
    title: "Due Diligence Automation",
    description: "AI-powered system for automating due diligence processes.",
    icon: FileText,
    features: [
      "Document analysis",
      "Risk assessment",
      "Compliance checking",
      "Report generation"
    ],
    price: "From $180,000",
    timeline: "22-34 weeks",
    category: "Due Diligence",
    technologies: ["AI", "Document Processing", "Risk Analysis", "Compliance"]
  },
  {
    id: 6,
    title: "Exit Strategy Optimization",
    description: "AI-driven system for optimizing exit strategies and timing.",
    icon: Rocket,
    features: [
      "Exit timing",
      "Strategy optimization",
      "Market analysis",
      "Value maximization"
    ],
    price: "From $220,000",
    timeline: "26-38 weeks",
    category: "Exit Strategy",
    technologies: ["AI", "Exit Planning", "Market Analysis", "Optimization"]
  }
];

const vcTechnologies = [
  {
    name: "AI & Machine Learning",
    description: "Advanced AI algorithms for investment analysis",
    icon: Brain,
    useCase: "Investment Analysis",
    reliability: "Critical"
  },
  {
    name: "Financial Analytics",
    description: "Comprehensive financial data analysis",
    icon: BarChart3,
    useCase: "Financial Modeling",
    reliability: "Critical"
  },
  {
    name: "Market Intelligence",
    description: "Real-time market data and insights",
    icon: TrendingUp,
    useCase: "Market Analysis",
    reliability: "High"
  },
  {
    name: "Risk Management",
    description: "AI-powered risk assessment and management",
    icon: Shield,
    useCase: "Risk Analysis",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Innovation Capital Partners",
    industry: "Venture Capital",
    challenge: "Needed AI-powered investment analysis platform for portfolio management",
    solution: "Built comprehensive AI investment analysis platform with market intelligence and risk management",
    results: "45% better investment decisions, 60% faster due diligence, 35% improved returns, better risk management",
    logo: "ICP"
  },
  {
    id: 2,
    company: "Tech Growth Fund",
    industry: "Investment Fund",
    challenge: "Required autonomous deal sourcing and evaluation system",
    solution: "Implemented AI-driven deal sourcing and evaluation platform",
    results: "50% more deal flow, 40% faster evaluation, better quality investments, improved efficiency",
    logo: "TGF"
  },
  {
    id: 3,
    company: "Startup Ventures Ltd",
    industry: "Venture Capital",
    challenge: "Needed AI portfolio management and exit optimization",
    solution: "Built AI-powered portfolio management and exit strategy system",
    results: "30% better portfolio performance, 45% improved exit timing, better returns, optimized strategies",
    logo: "SVL"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Investment Strategy Assessment",
    description: "Evaluate current investment processes and identify AI opportunities",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "AI Strategy Development",
    description: "Develop AI strategy and implementation roadmap",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "System Implementation",
    description: "Build and deploy AI venture capital systems",
    icon: Wrench,
    duration: "22-48 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test systems and optimize performance",
    icon: Gauge,
    duration: "4-8 weeks"
  }
];

const vcBenefits = [
  {
    title: "Better Investment Decisions",
    description: "AI-powered insights enable data-driven investment decisions",
    icon: Brain,
    examples: ["Data-driven insights", "Market analysis", "Risk assessment", "Portfolio optimization"]
  },
  {
    title: "Increased Deal Flow",
    description: "AI systems identify more investment opportunities",
    icon: Zap,
    examples: ["Deal sourcing", "Market scanning", "Opportunity identification", "Better coverage"]
  },
  {
    title: "Improved Returns",
    description: "AI optimization leads to better portfolio performance",
    icon: TrendingUp,
    examples: ["Portfolio optimization", "Risk management", "Exit timing", "Better performance"]
  },
  {
    title: "Operational Efficiency",
    description: "Automation reduces manual effort and improves processes",
    icon: Rocket,
    examples: ["Process automation", "Due diligence", "Reporting", "Better efficiency"]
  }
];

export default function AIAutonomousVentureCapitalist() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Investment Analysis', 'Deal Sourcing', 'Portfolio Management', 'Market Intelligence', 'Due Diligence', 'Exit Strategy'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? ventureCapitalSolutions 
    : ventureCapitalSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <TrendingUp className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous &
              <span className="text-gradient block">Venture Capitalist</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform venture capital with intelligent AI investment systems. From deal sourcing 
              to portfolio management, we help you build the future of investment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Brain className="w-4 h-4" />
                <span>AI Intelligence</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <BarChart3 className="w-4 h-4" />
                <span>Investment Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Target className="w-4 h-4" />
                <span>Deal Sourcing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VC Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Venture Capital Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make AI venture capital essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vcBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VC Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Venture Capital Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading AI venture capital technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vcTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Venture Capital Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI venture capital implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Venture Capital Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for intelligent venture capital operations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Venture Capital Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with AI venture capital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Venture Capital?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how AI venture capital can revolutionize your operations, 
              improve investment decisions, and create competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start AI VC Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                AI VC Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}