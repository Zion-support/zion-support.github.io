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

const autonomousVehicleSolutions = [
  {
    id: 1,
    title: "AI Vehicle Perception System",
    description: "Advanced computer vision and sensor fusion for autonomous vehicle perception.",
    icon: Eye,
    features: [
      "Computer vision",
      "Sensor fusion",
      "Object detection",
      "Environment mapping"
    ],
    price: "From $200,000",
    timeline: "24-36 weeks",
    category: "Perception",
    technologies: ["Computer Vision", "AI", "Sensor Fusion", "Machine Learning"]
  },
  {
    id: 2,
    title: "Autonomous Navigation System",
    description: "AI-powered navigation and path planning for autonomous vehicles.",
    icon: Navigation,
    features: [
      "Path planning",
      "Route optimization",
      "Traffic analysis",
      "Real-time navigation"
    ],
    price: "From $250,000",
    timeline: "28-40 weeks",
    category: "Navigation",
    technologies: ["AI Navigation", "Path Planning", "Traffic Analysis", "Machine Learning"]
  },
  {
    id: 3,
    title: "Vehicle Control System",
    description: "Intelligent control systems for autonomous vehicle operation.",
    icon: Cog,
    features: [
      "Vehicle control",
      "Safety systems",
      "Performance optimization",
      "Real-time control"
    ],
    price: "From $180,000",
    timeline: "22-34 weeks",
    category: "Control",
    technologies: ["AI Control", "Vehicle Systems", "Safety", "Real-time Processing"]
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    description: "AI-driven predictive maintenance for autonomous vehicle fleets.",
    icon: Wrench,
    features: [
      "Predictive maintenance",
      "Health monitoring",
      "Performance tracking",
      "Fleet management"
    ],
    price: "From $150,000",
    timeline: "20-32 weeks",
    category: "Maintenance",
    technologies: ["Predictive Analytics", "IoT", "Machine Learning", "Fleet Management"]
  },
  {
    id: 5,
    title: "Safety & Security System",
    description: "Comprehensive safety and security systems for autonomous vehicles.",
    icon: Shield,
    features: [
      "Safety monitoring",
      "Security protocols",
      "Emergency systems",
      "Compliance management"
    ],
    price: "From $300,000",
    timeline: "32-44 weeks",
    category: "Safety",
    technologies: ["AI Safety", "Security", "Compliance", "Emergency Systems"]
  },
  {
    id: 6,
    title: "Fleet Management Platform",
    description: "AI-powered platform for managing autonomous vehicle fleets.",
    icon: Users,
    features: [
      "Fleet optimization",
      "Route planning",
      "Performance analytics",
      "Operational efficiency"
    ],
    price: "From $220,000",
    timeline: "26-38 weeks",
    category: "Fleet Management",
    technologies: ["AI Platform", "Fleet Management", "Analytics", "Optimization"]
  }
];

const vehicleTechnologies = [
  {
    name: "Computer Vision",
    description: "Advanced computer vision for vehicle perception",
    icon: Eye,
    useCase: "Vehicle Perception",
    reliability: "Critical"
  },
  {
    name: "AI Navigation",
    description: "Intelligent navigation and path planning",
    icon: Navigation,
    useCase: "Vehicle Navigation",
    reliability: "Critical"
  },
  {
    name: "Sensor Fusion",
    description: "Multi-sensor data fusion and processing",
    icon: Cpu,
    useCase: "Data Processing",
    reliability: "High"
  },
  {
    name: "Machine Learning",
    description: "AI algorithms for autonomous decision making",
    icon: Brain,
    useCase: "Decision Making",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Autonomous Transport Corp",
    industry: "Transportation",
    challenge: "Needed AI-powered autonomous vehicle system for logistics fleet",
    solution: "Built comprehensive AI autonomous vehicle system with perception, navigation, and control",
    results: "40% efficiency improvement, 50% cost reduction, 100% safety record, better fleet utilization",
    logo: "ATC"
  },
  {
    id: 2,
    company: "Smart City Solutions",
    industry: "Government",
    challenge: "Required autonomous vehicle system for public transportation",
    solution: "Implemented AI-driven autonomous public transport system",
    results: "60% energy savings, 70% reduced emissions, improved accessibility, better service",
    logo: "SCS"
  },
  {
    id: 3,
    company: "Industrial Automation Ltd",
    industry: "Manufacturing",
    challenge: "Needed autonomous vehicle system for warehouse operations",
    solution: "Built AI-powered autonomous warehouse vehicle system",
    results: "45% productivity increase, 55% cost reduction, 24/7 operation, better efficiency",
    logo: "IAL"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Vehicle Assessment",
    description: "Evaluate current vehicle systems and identify AI opportunities",
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
    description: "Build and deploy AI autonomous vehicle systems",
    icon: Wrench,
    duration: "20-44 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test systems and optimize performance",
    icon: Gauge,
    duration: "4-8 weeks"
  }
];

const vehicleBenefits = [
  {
    title: "Enhanced Safety",
    description: "AI-powered systems provide superior safety and accident prevention",
    icon: Shield,
    examples: ["Accident prevention", "Safety monitoring", "Emergency response", "Risk assessment"]
  },
  {
    title: "Improved Efficiency",
    description: "Autonomous systems optimize vehicle performance and operations",
    icon: Zap,
    examples: ["Route optimization", "Fuel efficiency", "Performance optimization", "Operational efficiency"]
  },
  {
    title: "Cost Reduction",
    description: "AI systems reduce operational costs and improve resource utilization",
    icon: TrendingUp,
    examples: ["Fuel savings", "Maintenance optimization", "Labor reduction", "Better ROI"]
  },
  {
    title: "24/7 Operation",
    description: "Autonomous vehicles enable continuous operation without human limitations",
    icon: Clock,
    examples: ["Continuous operation", "No rest requirements", "Increased productivity", "Better utilization"]
  }
];

export default function AIAutonomousVehicle() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Perception', 'Navigation', 'Control', 'Maintenance', 'Safety', 'Fleet Management'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? autonomousVehicleSolutions 
    : autonomousVehicleSolutions.filter(solution => solution.category === selectedCategory);

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
              <Car className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous &
              <span className="text-gradient block">Vehicle Systems</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform transportation with intelligent AI autonomous vehicle systems. From perception 
              and navigation to safety and fleet management, we help you build the future of mobility.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Eye className="w-4 h-4" />
                <span>AI Perception</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Navigation className="w-4 h-4" />
                <span>Autonomous Navigation</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Shield className="w-4 h-4" />
                <span>Safety Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Autonomous Vehicle Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make AI autonomous vehicles essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleBenefits.map((benefit, index) => (
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

      {/* Vehicle Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Autonomous Vehicle Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading AI autonomous vehicle technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Autonomous Vehicle Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI autonomous vehicle implementation
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Autonomous Vehicle Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for intelligent autonomous vehicle systems
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Autonomous Vehicle Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with AI autonomous vehicles
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Transportation?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how AI autonomous vehicles can revolutionize your operations, 
              improve safety, and create competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Autonomous Vehicle Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Autonomous Vehicle Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}