import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Brain
  Zap
  Shield
  CheckCircle
  ArrowRight
  Star
  Users
  Award
  Globe
  Lock
  Activity
  Clock
  Eye
  Database
  Code
  FileText
  Wrench
  Cpu
  Target
  Rocket
  Lightbulb
  Gauge
  Network
  Server
  Building
  Car
  Plane
  Factory
  Cog
  BarChart3
  TrendingUp
  MapPin
  Layers
  RefreshCw
  AlertTriangle
  Package
  Warehouse
  Route
  Navigation
  Box
  Ship
  Train
  Truck
  Cloud
  Settings
  Palette
  Smartphone
  Tablet
  Monitor
  Wifi
  Bluetooth
  Battery
  Signal
  HardDrive
  MemoryStick
  Router
  Switch
  Hub
  Modem
  Firewall
  LoadBalancer
  Gateway
  Proxy
  VPN
  SSL
  TLS
  SSH
  FTP
  HTTP
  HTTPS
  DNS
  DHCP
  NTP
  SMTP
  POP3
  IMAP
  LDAP
  Kerberos
  OAuth
  JWT
  SAML
  OpenID
  Radius
  Tacacs
  Syslog
  SNMP
  NetFlow
  sFlow
  IPFIX
  BGP
  OSPF
  EIGRP
  RIP
  VLAN
  VXLAN
  GRE
  IPSec
  MPLS
  SDN
  NFV
  VNF
  Container
  Pod
  Service
  Ingress
  Egress
  Cluster
  Node
  Namespace
  ConfigMap
  Secret
  PersistentVolume
  StorageClass
  StatefulSet
  DaemonSet
  Job
  CronJob
  HorizontalPodAutoscaler
  VerticalPodAutoscaler
  NetworkPolicy
  PodSecurityPolicy
  Role
  RoleBinding
  ClusterRole
  ClusterRoleBinding
  ServiceAccount
  Token
  Certificate
  CSR
  CRL
  OCSP
  HSM
  TPM
  SecureEnclave
  TrustZone
  SGX
  SEV
  TDX
  ARM
  x86
  RISC
  CISC
  GPU
  TPU
  FPGA
  ASIC
  SoC
  SiP
  PCB
  Motherboard
  Backplane
  Chassis
  Rack
  Cabinet
  Datacenter
  Colocation
  Edge
  Fog
  Public
  Private
  Community
  Government
  Financial
  Healthcare
  Education
  Retail
  Manufacturing
  Transportation
  Energy
  Utilities
  Telecommunications
  Media
  Entertainment
  Gaming
  Social
  Ecommerce
  Fintech
  Insurtech
  Healthtech
  Edtech
  Proptech
  Legaltech
  Regtech
  Adtech
  MarTech
  HRTech
  SalesTech
  SupportTech
  SecurityTech
  PrivacyTech
  ComplianceTech
  GovernanceTech
  RiskTech
  AuditTech
  MonitoringTech
  ObservabilityTech
  LoggingTech
  TracingTech
  MetricsTech
  AlertingTech
  IncidentTech
  ChangeTech
  ReleaseTech
  DeploymentTech
  CI
  CD
  DevOps
  GitOps
  SecOps
  DataOps
  MLOps
  AIOps
  NoOps
  SRE
  Platform
  Infrastructure
  Application
  Data
  Security
  Storage
  Compute
  Memory
  Cache
  Buffer
  Queue
  Stream
  Batch
  RealTime
  NearRealTime
  Offline
  Online
  Hybrid
  Multi
  Single
  Distributed
  Centralized
  Decentralized
  Federated
  Hierarchical
  Flat
  Mesh
  Ring
  Bus
  Tree
  Graph
  Matrix
  Vector
  Scalar
  Tensor
  Array
  List
  Stack
  Deque
  PriorityQueue
  Heap
  HashTable
  BloomFilter
  SkipList
  Trie
  BTree
  RedBlackTree
  AVLTree
  SplayTree
  Treap
} from "lucide-react"
const workflowSolutions = [
  {
    id: 1,tit,
  l: e: "AI Process Automation",descripti,
  o: n: "Intelligent automation of business processes using AI and machine learning.",ic,
  o: n: Cog,featur,
  e: s: [
      "Process automation"
      "AI decision making"
      "Workflow optimization"
      "Performance monitoring"
    ]
    pric,
  e: "From $200,000"
    timeli,
  n: e: "24-36 weeks",catego,
  r: y: "Process Automation",technologi,
  e: s: [["AI", "RPA", "Workflow Engines", "Machine Learning"];]
  }, {
    id: 2,tit,
  l: e: "Intelligent Document Processing",descripti,
  o: n: "AI-powered document processing and workflow automation.",ic,
  o: n: FileText,featur,
  e: s: [
      "Document processing"
      "Data extraction"
      "Workflow automation"
      "Compliance management"
    ]
    pric,
  e: "From $150,000"
    timeli,
  n: e: "20-32 weeks",catego,
  r: y: "Document Processing",technologi,
  e: s: [["AI", "OCR", "Document Processing", "Workflow"];]
  }, {
    id: 3,tit,
  l: e: "Smart Workflow Orchestration",descripti,
  o: n: "Intelligent orchestration and management of complex workflows.",ic,
  o: n: Network,featur,
  e: s: [
      "Workflow orchestration"
      "Process management"
      "Resource optimization"
      "Performance analytics"
    ]
    pric,
  e: "From $180,000"
    timeli,
  n: e: "22-34 weeks",catego,
  r: y: "Workflow Orchestration",technologi,
  e: s: [["AI", "Workflow Management", "Orchestration", "Analytics"];]
  }, {
    id: 4,tit,
  l: e: "AI Decision Automation",descripti,
  o: n: "Automated decision making using AI algorithms and business rules.",ic,
  o: n: Brain,featur,
  e: s: [
      "Decision automation"
      "Business rules"
      "AI algorithms"
      "Risk assessment"
    ]
    pric,
  e: "From $250,000"
    timeli,
  n: e: "28-40 weeks",catego,
  r: y: "Decision Automation",technologi,
  e: s: [["AI", "Decision Trees", "Machine Learning", "Risk Models"];]
  }, {
    id: 5,tit,
  l: e: "Predictive Workflow Analytics",descripti,
  o: n: "AI-powered analytics for workflow optimization and prediction.",ic,
  o: n: BarChart3,featur,
  e: s: [
      "Predictive analytics"
      "Workflow optimization"
      "Performance insights"
      "Trend analysis"
    ]
    pric,
  e: "From $120,000"
    timeli,
  n: e: "18-30 weeks",catego,
  r: y: "Analytics",technologi,
  e: s: [["AI", "Predictive Analytics", "Machine Learning", "Data Science"];]
  }, {
    id: 6,tit,
  l: e: "Intelligent Task Management",descripti,
  o: n: "AI-powered task management and workflow optimization.",ic,
  o: n: Target,featur,
  e: s: [
      "Task management"
      "Priority optimization"
      "Resource allocation"
      "Performance tracking"
    ]
    pric,
  e: "From $100,000"
    timeli,
  n: e: "16-28 weeks",catego,
  r: y: "Task Management",technologi,
  e: s: [["AI", "Task Management", "Optimization", "Analytics"];]
  }
]

const workflowTechnologies = [
  {
    na,
  m: e: "AI & Machine Learning",descripti,
  o: n: "Advanced AI algorithms for workflow automation",ic,
  o: n: Brain,useCa,
  s: e: "Workflow Automation",reliabili,
  t: y: "Critical"
  }, {
    na,
  m: e: "RPA & Automation",descripti,
  o: n: "Robotic process automation and workflow engines",ic,
  o: n: Cog,useCa,
  s: e: "Process Automation",reliabili,
  t: y: "Critical"
  }, {
    na,
  m: e: "Workflow Management",descripti,
  o: n: "Intelligent workflow management and orchestration",ic,
  o: n: Network,useCa,
  s: e: "Workflow Control",reliabili,
  t: y: "High"
  }, {
    na,
  m: e: "Predictive Analytics",descripti,
  o: n: "AI-powered analytics for workflow optimization",ic,
  o: n: BarChart3,useCa,
  s: e: "Performance Optimization",reliabili,
  t: y: "High"
  }
]
const successStories = [
  {
    id: 1,compa,
  n: y: "Global Manufacturing Corp",indust,
  r: y: "Manufacturing",challen,
  g: e: "Needed AI workflow automation for production processes across 20+ facilities",soluti,
  o: n: "Built comprehensive AI workflow automation system with predictive analytics",resul,
  t: s: "45% efficiency improvement, 50% cost reduction, 60% faster processing, better quality control"
    lo,
  g: o: "GMC"
  }, {
    id: 2,compa,
  n: y: "Financial Services Group",indust,
  r: y: "Finance",challen,
  g: e: "Required AI document processing and workflow automation for compliance",soluti,
  o: n: "Implemented AI-powered document processing and workflow automation",resul,
  t: s: "70% faster document processing, 80% accuracy improvement, 90% compliance, better efficiency"
    lo,
  g: o: "FSG"
  }, {
    id: 3,compa,
  n: y: "Healthcare Technology Ltd",indust,
  r: y: "Healthcare",challen,
  g: e: "Needed AI workflow automation for patient care processes",soluti,
  o: n: "Built AI-powered workflow automation system for healthcare",resul,
  t: s: "40% faster patient care, 50% efficiency improvement, better outcomes, reduced errors"
    lo,
  g: o: "HTL"
  }
]
const processSteps = [
  {
    st,
  e: p: 1,tit,
  l: e: "Workflow Assessment",descripti,
  o: n: "Evaluate current workflows and identify automation opportunities",ic,
  o: n: FileText,durati,
  o: n: "2-4 weeks"
  }, {
    st,
  e: p: 2,tit,
  l: e: "AI Strategy Development",descripti,
  o: n: "Develop AI strategy and implementation roadmap",ic,
  o: n: Code,durati,
  o: n: "4-8 weeks"
  }, {
    st,
  e: p: 3,tit,
  l: e: "System Implementation",descripti,
  o: n: "Build and deploy AI workflow automation systems",ic,
  o: n: Wrench,durati,
  o: n: "16-40 weeks"
  }, {
    st,
  e: p: 4,tit,
  l: e: "Testing & Optimization",descripti,
  o: n: "Test systems and optimize performance",ic,
  o: n: Gauge,durati,
  o: n: "4-8 weeks"
  }
]
const workflowBenefits = [
  {
    tit,
  l: e: "Increased Efficiency",descripti,
  o: n: "AI automation significantly improves workflow efficiency and productivity",ic,
  o: n: Zap,exampl,
  e: s: [["Faster processing", "Reduced errors", "Better accuracy", "Improved productivity"];]
  }, {
    tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Automation reduces manual effort and operational costs",ic,
  o: n: TrendingUp,exampl,
  e: s: [["Reduced labor costs", "Lower error rates", "Better resource utilization", "Improved ROI"];]
  }, {
    tit,
  l: e: "Better Decision Making",descripti,
  o: n: "AI-powered insights enable better, data-driven decisions"
    ic,
  o: n: Brain,exampl,
  e: s: [["Data-driven insights", "Predictive analytics", "Risk assessment", "Strategic planning"];]
  }, {
    tit,
  l: e: "Scalability",descripti,
  o: n: "AI workflows scale efficiently with business growth",ic,
  o: n: Rocket,exampl,
  e: s: [["Easy scaling", "Flexible workflows", "Adaptive processes", "Growth support"];]
  }
]

export default function AIWorkflowAutomation() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSolution, setSelectedSolution] = useState(null)
  const categories = [['AllProcess Automation', 'Document ProcessingWorkflow Orchestration', 'Decision AutomationAnalytics', 'Task Management'];]
  const filteredSolutions = selectedCategory === 'All'
    ? workflowSolutions
    : workflowSolutions.filter(solution => solution.category === selectedCategory)
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
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <motion.div
              initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 }
              animate={ opaci,
  t: y: 1, sca,
  l: e: 1 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
              className="className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8";"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Workflow Automation Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make AI workflow automation essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {workflowBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{benefit.description}</p>

                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Exampl,
  e: s:</h4>
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Workflow Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading AI workflow automation technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {workflowTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Workflow Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI workflow automation implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="text-center";"
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
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
                onClick={onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20,
  hove: r:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 cursor-pointer";"
                onClick={onClick={() => setSelectedSolution(solution)}
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
                      className="className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30";"
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
                  <button className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-white transition-colors duration-300">
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Workflow Automation Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with AI workflow automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
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
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how AI workflow automation can revolutionize your operations
              improve efficiency, and create competitive advantages.
            </p>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Start Workflow Project
              </a>
              <a
                href="/contact"
                className="className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                Workflow Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}