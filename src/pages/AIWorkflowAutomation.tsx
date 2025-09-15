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
  Truck,
  Cloud,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
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
  Deque,
  PriorityQueue,
  Heap,
  HashTable,
  BloomFilter,
  SkipList,
  Trie,
  BTree,
  RedBlackTree,
  AVLTree,
  SplayTree,
  Treap,
} from 'lucide-react';

const workflowSolutions = [
  {
    id: 1,
    title: "AI Process Automation",
    description: "Intelligent automation of business processes using AI and machine learning.",
    icon: Cog,
    features: [
      "Process automation",
      "AI decision making",
      "Workflow optimization",
      "Performance monitoring"
    ],
    price: "From $200,000",
    timeline: "24-36 weeks",
    category: "Process Automation",
    technologies: ["AI", "RPA", "Workflow Engines", "Machine Learning"]
  },
  {
    id: 2,
    title: "Intelligent Document Processing",
    description: "AI-powered document processing and workflow automation.",
    icon: FileText,
    features: [
      "Document processing",
      "Data extraction",
      "Workflow automation",
      "Compliance management"
    ],
    price: "From $150,000",
    timeline: "20-32 weeks",
    category: "Document Processing",
    technologies: ["AI", "OCR", "Document Processing", "Workflow"]
  },
  {
    id: 3,
    title: "Smart Workflow Orchestration",
    description: "Intelligent orchestration and management of complex workflows.",
    icon: Network,
    features: [
      "Workflow orchestration",
      "Process management",
      "Resource optimization",
      "Performance analytics"
    ],
    price: "From $180,000",
    timeline: "22-34 weeks",
    category: "Workflow Orchestration",
    technologies: ["AI", "Workflow Management", "Orchestration", "Analytics"]
  },
  {
    id: 4,
    title: "AI Decision Automation",
    description: "Automated decision making using AI algorithms and business rules.",
    icon: Brain,
    features: [
      "Decision automation",
      "Business rules",
      "AI algorithms",
      "Risk assessment"
    ],
    price: "From $250,000",
    timeline: "28-40 weeks",
    category: "Decision Automation",
    technologies: ["AI", "Decision Trees", "Machine Learning", "Risk Models"]
  },
  {
    id: 5,
    title: "Predictive Workflow Analytics",
    description: "AI-powered analytics for workflow optimization and prediction.",
    icon: BarChart3,
    features: [
      "Predictive analytics",
      "Workflow optimization",
      "Performance insights",
      "Trend analysis"
    ],
    price: "From $120,000",
    timeline: "18-30 weeks",
    category: "Analytics",
    technologies: ["AI", "Predictive Analytics", "Machine Learning", "Data Science"]
  },
  {
    id: 6,
    title: "Intelligent Task Management",
    description: "AI-powered task management and workflow optimization.",
    icon: Target,
    features: [
      "Task management",
      "Priority optimization",
      "Resource allocation",
      "Performance tracking"
    ],
    price: "From $100,000",
    timeline: "16-28 weeks",
    category: "Task Management",
    technologies: ["AI", "Task Management", "Optimization", "Analytics"]
  }
];

const workflowTechnologies = [
  {
    name: "AI & Machine Learning",
    description: "Advanced AI algorithms for workflow automation",
    icon: Brain,
    useCase: "Workflow Automation",
    reliability: "Critical"
  },
  {
    name: "RPA & Automation",
    description: "Robotic process automation and workflow engines",
    icon: Cog,
    useCase: "Process Automation",
    reliability: "Critical"
  },
  {
    name: "Workflow Management",
    description: "Intelligent workflow management and orchestration",
    icon: Network,
    useCase: "Workflow Control",
    reliability: "High"
  },
  {
    name: "Predictive Analytics",
    description: "AI-powered analytics for workflow optimization",
    icon: BarChart3,
    useCase: "Performance Optimization",
    reliability: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Needed AI workflow automation for production processes across 20+ facilities",
    solution: "Built comprehensive AI workflow automation system with predictive analytics",
    results: "45% efficiency improvement, 50% cost reduction, 60% faster processing, better quality control",
    logo: "GMC"
  },
  {
    id: 2,
    company: "Financial Services Group",
    industry: "Finance",
    challenge: "Required AI document processing and workflow automation for compliance",
    solution: "Implemented AI-powered document processing and workflow automation",
    results: "70% faster document processing, 80% accuracy improvement, 90% compliance, better efficiency",
    logo: "FSG"
  },
  {
    id: 3,
    company: "Healthcare Technology Ltd",
    industry: "Healthcare",
    challenge: "Needed AI workflow automation for patient care processes",
    solution: "Built AI-powered workflow automation system for healthcare",
    results: "40% faster patient care, 50% efficiency improvement, better outcomes, reduced errors",
    logo: "HTL"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Workflow Assessment",
    description: "Evaluate current workflows and identify automation opportunities",
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
    description: "Build and deploy AI workflow automation systems",
    icon: Wrench,
    duration: "16-40 weeks"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test systems and optimize performance",
    icon: Gauge,
    duration: "4-8 weeks"
  }
];

const workflowBenefits = [
  {
    title: "Increased Efficiency",
    description: "AI automation significantly improves workflow efficiency and productivity",
    icon: Zap,
    examples: ["Faster processing", "Reduced errors", "Better accuracy", "Improved productivity"]
  },
  {
    title: "Cost Reduction",
    description: "Automation reduces manual effort and operational costs",
    icon: TrendingUp,
    examples: ["Reduced labor costs", "Lower error rates", "Better resource utilization", "Improved ROI"]
  },
  {
    title: "Better Decision Making",
    description: "AI-powered insights enable better, data-driven decisions",
    icon: Brain,
    examples: ["Data-driven insights", "Predictive analytics", "Risk assessment", "Strategic planning"]
  },
  {
    title: "Scalability",
    description: "AI workflows scale efficiently with business growth",
    icon: Rocket,
    examples: ["Easy scaling", "Flexible workflows", "Adaptive processes", "Growth support"]
  }
];

export default function AIWorkflowAutomation() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Process Automation', 'Document Processing', 'Workflow Orchestration', 'Decision Automation', 'Analytics', 'Task Management'];

  const filteredSolutions = selectedCategory === 'All'
    ? workflowSolutions
    : workflowSolutions.filter(solution => solution.category === selectedCategory);

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
              AI Workflow
              <span className="text-gradient block">Automation</span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with intelligent AI workflow automation. From process
              automation to decision making, we help you build the future of work.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Brain className="w-4 h-4" />
                <span>AI Intelligence</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Cog className="w-4 h-4" />
                <span>Process Automation</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Network className="w-4 h-4" />
                <span>Workflow Management</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Benefits */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Workflow Automation Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make AI workflow automation essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflowBenefits.map((benefit, index) => (
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

      {/* Workflow Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Workflow Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading AI workflow automation technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowTechnologies.map((technology, index) => (
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
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Workflow Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI workflow automation implementation
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Workflow Automation Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for intelligent workflow automation
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Workflow Automation Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with AI workflow automation
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how AI workflow automation can revolutionize your operations,
              improve efficiency, and create competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Workflow Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Workflow Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}