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

const businessManagerSolutions = [
  {
    id: 1,
    title: "AI Business Intelligence",
    description: "Intelligent business analytics and insights powered by artificial intelligence.",
    icon: BarChart3,
    features: [
      "Predictive analytics",
      "Data visualization",
      "Real-time insights",
      "Automated reporting"
    ],
    price: "From $100,000",
    timeline: "16-24 weeks",
    category: "Analytics",
    technologies: ["Machine Learning", "Data Analytics", "Business Intelligence", "AI Models"]
  },
  {
    id: 2,
    title: "Autonomous Process Automation",
    description: "AI-powered automation of business processes and workflows.",
    icon: Cog,
    features: [
      "Process optimization",
      "Workflow automation",
      "Decision automation",
      "Performance monitoring"
    ],
    price: "From $150,000",
    timeline: "20-32 weeks",
    category: "Automation",
    technologies: ["RPA", "AI", "Workflow Engines", "Process Mining"]
  },
  {
    id: 3,
    title: "Smart Resource Management",
    description: "Intelligent allocation and optimization of business resources.",
    icon: Users,
    features: [
      "Resource optimization",
      "Capacity planning",
      "Cost optimization",
      "Performance tracking"
    ],
    price: "From $120,000",
    timeline: "18-28 weeks",
    category: "Resource Management",
    technologies: ["AI Optimization", "Resource Planning", "Analytics", "Machine Learning"]
  },
  {
    id: 4,
    title: "Predictive Business Planning",
    description: "AI-driven forecasting and strategic business planning.",
    icon: Target,
    features: [
      "Market forecasting",
      "Trend analysis",
      "Risk assessment",
      "Strategic planning"
    ],
    price: "From $200,000",
    timeline: "24-36 weeks",
    category: "Planning",
    technologies: ["Predictive Analytics", "Machine Learning", "Data Science", "AI Models"]
  },
  {
    id: 5,
    title: "Intelligent Customer Management",
    description: "AI-powered customer relationship and experience management.",
    icon: Users,
    features: [
      "Customer insights",
      "Personalization",
      "Predictive marketing",
      "Customer service"
    ],
    price: "From $180,000",
    timeline: "22-34 weeks",
    category: "Customer Management",
    technologies: ["AI", "CRM", "Machine Learning", "Customer Analytics"]
  },
  {
    id: 6,
    title: "Autonomous Financial Management",
    description: "AI-driven financial planning, analysis, and decision making.",
    icon: TrendingUp,
    features: [
      "Financial forecasting",
      "Risk management",
      "Investment analysis",
      "Budget optimization"
    ],
    price: "From $250,000",
    timeline: "28-40 weeks",
    category: "Financial",
    technologies: ["AI", "Financial Analytics", "Risk Models", "Machine Learning"]
  }
];

const businessTechnologies = [
  {
    name: "AI & Machine Learning",
    description: "Advanced AI algorithms for business intelligence",
    icon: Brain,
    useCase: "Business Intelligence",
    reliability: "Critical"
  },
  {
    name: "Data Analytics",
    description: "Comprehensive data analysis and visualization",
    icon: BarChart3,
    useCase: "Data Insights",
    reliability: "Critical"
  },
  {
    name: "Process Automation",
    description: "Intelligent automation of business processes",
    icon: Cog,
    useCase: "Process Optimization",
    reliability: "High"
  },
  {
    name: "Predictive Analytics",
    description: "AI-powered forecasting and planning",
    icon: Target,
    useCase: "Strategic Planning",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed AI-powered business intelligence for 50+ global facilities",
    solution: "Built comprehensive AI business manager with predictive analytics and process automation",
    results: "30% cost reduction, 40% efficiency improvement, 25% revenue increase, better decision making",
    logo: "GMC"
  },
  {
    id: 2,
    company: "Financial Services Group",
    industry: "Finance",
    challenge: "Required autonomous financial management and risk assessment",
    solution: "Implemented AI-driven financial planning and risk management system",
    results: "50% faster financial planning, 60% risk reduction, improved compliance, better ROI",
    logo: "FSG"
  },
  {
    id: 3,
    company: "Retail Chain Network",
    industry: "Retail",
    challenge: "Needed intelligent customer management and predictive marketing",
    solution: "Built AI-powered customer analytics and personalization platform",
    results: "35% customer satisfaction increase, 45% marketing ROI improvement, better customer retention",
    logo: "RCN"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Business Assessment",
    description: "Evaluate current business processes and identify AI opportunities",
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
    description: "Build and deploy AI business management systems",
    icon: Wrench,
    duration: "16-40 weeks"
  },
  {
    step: 4,
    title: "Optimization & Training",
    description: "Optimize systems and train business teams",
    icon: Gauge,
    duration: "4-8 weeks"
  }
];

const businessBenefits = [
  {
    title: "Intelligent Decision Making",
    description: "AI-powered insights enable better, data-driven business decisions",
    icon: Brain,
    examples: ["Data-driven insights", "Predictive analytics", "Risk assessment", "Strategic planning"]
  },
  {
    title: "Process Automation",
    description: "Automated workflows reduce manual effort and improve efficiency",
    icon: Zap,
    examples: ["Workflow automation", "Process optimization", "Reduced errors", "Faster execution"]
  },
  {
    title: "Cost Optimization",
    description: "AI identifies cost-saving opportunities and optimizes resource allocation",
    icon: TrendingUp,
    examples: ["Resource optimization", "Cost reduction", "Efficiency improvement", "Better ROI"]
  },
  {
    title: "Competitive Advantage",
    description: "AI capabilities provide strategic advantages in the marketplace",
    icon: Rocket,
    examples: ["Market insights", "Customer intelligence", "Innovation acceleration", "Strategic positioning"]
  }
];

export default function AIAutonomousBusinessManager() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Analytics', 'Automation', 'Resource Management', 'Planning', 'Customer Management', 'Financial'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? businessManagerSolutions 
    : businessManagerSolutions.filter(solution => solution.category === selectedCategory);

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
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous &
              <span className="text-gradient block">Business Manager</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with intelligent AI management systems. From autonomous 
              decision making to predictive analytics, we help you build the future of business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Brain className="w-4 h-4" />
                <span>AI Intelligence</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <BarChart3 className="w-4 h-4" />
                <span>Business Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Cog className="w-4 h-4" />
                <span>Process Automation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Manager Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Business Manager Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make AI business management essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessBenefits.map((benefit, index) => (
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

      {/* Business Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Business Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading AI business management platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Business Manager Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI business management implementation
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Business Manager Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for intelligent business management
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Business Manager Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with AI business management
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how AI business management can revolutionize your operations, 
              improve decision making, and create competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start AI Business Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                AI Business Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}