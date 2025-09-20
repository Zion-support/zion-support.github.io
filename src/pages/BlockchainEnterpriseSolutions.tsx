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
const blockchainSolutions = [
  {
  id: 1,tit,
  l: e: "Enterprise Blockchain Platform",descripti,
  o: n: "Custom blockchain platform designed for enterprise use cases and requirements.",ic,
  o: n: Building,featur,
  e: s: [
  "Custom blockchain"
      "Smart contracts"
      "Consensus mechanisms"
      "Scalability solutions"
]
    pric,
  e: "From $500,000"
    timeli,
  n: e: "32-48 weeks",catego,
  r: y: "Platform",technologi,
  e: s: [["Blockchain", "Smart Contracts", "Consensus", "Scalability"],
  ],
  },
  {
  id: 2,tit,
  l: e: "Supply Chain Blockchain",descripti,
  o: n: "Transparent and traceable supply chain solutions using blockchain technology.",ic,
  o: n: Package,featur,
  e: s: [
  "Supply chain tracking"
      "Product verification"
      "Transparency"
      "Compliance management"
]
    pric,
  e: "From $300,000"
    timeli,
  n: e: "24-36 weeks",catego,
  r: y: "Supply Chain",technologi,
  e: s: [["Blockchain", "IoT", "Supply Chain", "Compliance"],
  ],
  },
  {
  id: 3,tit,
  l: e: "Financial Blockchain Solutions",descripti,
  o: n: "Blockchain-based financial services and payment solutions.",ic,
  o: n: DollarSign,featur,
  e: s: [
  "Digital payments"
      "Cross-border transfers"
      "Asset tokenization"
      "Regulatory compliance"
]
    pric,
  e: "From $400,000"
    timeli,
  n: e: "28-40 weeks",catego,
  r: y: "Financial",technologi,
  e: s: [["Blockchain", "Fintech", "Payments", "Compliance"],
  ],
  },
  {
  id: 4,tit,
  l: e: "Identity Management Blockchain",descripti,
  o: n: "Decentralized identity management and verification systems.",ic,
  o: n: Shield,featur,
  e: s: [
  "Digital identity"
      "Verification"
      "Privacy protection"
      "Access control"
]
    pric,
  e: "From $250,000"
    timeli,
  n: e: "20-32 weeks",catego,
  r: y: "Identity",technologi,
  e: s: [["Blockchain", "Identity", "Security", "Privacy"],
  ],
  },
  {
  id: 5,tit,
  l: e: "Smart Contract Development",descripti,
  o: n: "Custom smart contract development for business automation.",ic,
  o: n: Code,featur,
  e: s: [
  "Smart contracts"
      "Business logic"
      "Automation"
      "Security audit"
]
    pric,
  e: "From $150,000"
    timeli,
  n: e: "16-28 weeks",catego,
  r: y: "Smart Contracts",technologi,
  e: s: [["Smart Contracts", "Blockchain", "Automation", "Security"],
  ],
  },
  {
  id: 6,tit,
  l: e: "Blockchain Integration Services",descripti,
  o: n: "Integration services for existing enterprise systems with blockchain.",ic,
  o: n: Wrench,featur,
  e: s: [
  "System integration"
      "API development"
      "Data migration"
      "Legacy support"
]
    pric,
  e: "From $200,000"
    timeli,
  n: e: "18-30 weeks",catego,
  r: y: "Integration",technologi,
  e: s: [["Integration", "APIs", "Migration", "Legacy Systems"],
  ],
  },
  ]

const blockchainTechnologies = [
  {
  na,
  m: e: "Blockchain Platforms",descripti,
  o: n: "Enterprise blockchain platforms and frameworks",ic,
  o: n: Building,useCa,
  s: e: "Platform Development",reliabili,
  t: y: "Critical"
},
  {
  na,
  m: e: "Smart Contracts",descripti,
  o: n: "Self-executing contracts with business logic",ic,
  o: n: Code,useCa,
  s: e: "Business Automation",reliabili,
  t: y: "Critical"
},
  {
  na,
  m: e: "Consensus Mechanisms",descripti,
  o: n: "Blockchain consensus and validation protocols",ic,
  o: n: Network,useCa,
  s: e: "Network Security",reliabili,
  t: y: "High"
},
  {
  na,
  m: e: "Cryptography",descripti,
  o: n: "Advanced cryptographic security solutions",ic,
  o: n: Lock,useCa,
  s: e: "Security & Privacy",reliabili,
  t: y: "High"
},
  ]
const successStories = [
  {
  id: 1,compa,
  n: y: "Global Supply Chain Corp",indust,
  r: y: "Manufacturing",challen,
  g: e: "Needed transparent supply chain tracking across 50+ countries",soluti,
  o: n: "Built comprehensive blockchain supply chain platform with IoT integration",resul,
  t: s: "100% supply chain transparency, 40% cost reduction, 60% efficiency improvement, better compliance"
    lo,
  g: o: "GSC"
},
  {
  id: 2,compa,
  n: y: "Digital Bank International",indust,
  r: y: "Finance",challen,
  g: e: "Required blockchain-based cross-border payment system",soluti,
  o: n: "Implemented blockchain payment platform with smart contracts",resul,
  t: s: "80% faster payments, 70% cost reduction, 100% transparency, better compliance"
    lo,
  g: o: "DBI"
},
  {
  id: 3,compa,
  n: y: "Healthcare Identity Solutions",indust,
  r: y: "Healthcare",challen,
  g: e: "Needed secure patient identity management system",soluti,
  o: n: "Built blockchain-based identity management platform",resul,
  t: s: "100% data security, 90% faster verification, better privacy, improved compliance"
    lo,
  g: o: "HIS"
},
  ]
const processSteps = [
  {
  st,
  e: p: 1,tit,
  l: e: "Blockchain Assessment",descripti,
  o: n: "Evaluate business needs and identify blockchain opportunities",ic,
  o: n: FileText,durati,
  o: n: "2-4 weeks"
},
  {
  st,
  e: p: 2,tit,
  l: e: "Blockchain Strategy",descripti,
  o: n: "Develop blockchain strategy and implementation roadmap",ic,
  o: n: Code,durati,
  o: n: "4-8 weeks"
},
  {
  st,
  e: p: 3,tit,
  l: e: "Platform Development",descripti,
  o: n: "Build and deploy blockchain platform and applications",ic,
  o: n: Wrench,durati,
  o: n: "16-48 weeks"
},
  {
  st,
  e: p: 4,tit,
  l: e: "Testing & Deployment",descripti,
  o: n: "Test blockchain systems and deploy to production",ic,
  o: n: Gauge,durati,
  o: n: "4-8 weeks"
},
  ]
const blockchainBenefits = [
  {
  tit,
  l: e: "Transparency & Trust",descripti,
  o: n: "Blockchain provides immutable, transparent records that build trust"
    ic,
  o: n: Eye,exampl,
  e: s: [["Immutable records", "Transparent transactions", "Audit trails", "Trust building"],
  ],
  },
  {
  tit,
  l: e: "Security & Privacy",descripti,
  o: n: "Advanced cryptography ensures data security and privacy protection",ic,
  o: n: Shield,exampl,
  e: s: [["Cryptographic security", "Data privacy", "Access control", "Fraud prevention"],
  ],
  },
  {
  tit,
  l: e: "Automation & Efficiency",descripti,
  o: n: "Smart contracts automate business processes and reduce manual effort",ic,
  o: n: Zap,exampl,
  e: s: [["Process automation", "Smart contracts", "Reduced errors", "Faster execution"],
  ],
  },
  {
  tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Blockchain eliminates intermediaries and reduces operational costs",ic,
  o: n: TrendingUp,exampl,
  e: s: [["No intermediaries", "Reduced costs", "Better efficiency", "Improved ROI"],
  ],
  },
  ]

export default function BlockchainEnterpriseSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSolution, setSelectedSolution] = useState(null)
  const categories = [['AllPlatform', 'Supply ChainFinancial', 'IdentitySmart Contracts', 'Integration'],
  ]
  const filteredSolutions = selectedCategory === 'All'
    ? blockchainSolutions
    : blockchainSolutions.filter(solution => solution.category === selectedCategory)
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <motion.div
              initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
              animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8";"
            >
              <Building className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Blockchain
              <span className="text-gradient block">Enterprise Solutions</span>
            </h1>

            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your enterprise with cutting-edge blockchain solutions. From supply chain
              transparency to financial services, we help you leverage the power of blockchain technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Building className="w-4 h-4" />
                <span>Blockchain Platforms</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Code className="w-4 h-4" />
                <span>Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Shield className="w-4 h-4" />
                <span>Security & Privacy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Benefits */},
  }
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Enterprise Benefits</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make blockchain essential for enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {blockchainBenefits.map((benefit, index) => (
  <motion.div
                key={benefit.title},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
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

      {/* Blockchain Technologies */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading blockchain enterprise technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {blockchainTechnologies.map((technology, index) => (
  <motion.div
                key={technology.name},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
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

      {/* Process Section */},
  }
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Blockchain Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful blockchain enterprise implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
  <motion.div
                key={step.step},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step},
  }
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration},
  }
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Enterprise Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for blockchain enterprise transformation
            </p>
          </motion.div>

          {/* Category Filter */},
  }
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
  <button
                key={category},
  }
                onClick={onClick={() => setSelectedCategory(category)},
  },
  }
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20,
  hove: r:border-zion-cyan/40'
}`}
              >
                {category},
  }
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
  <motion.div
                key={solution.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 cursor-pointer";"
                onClick={onClick={() => setSelectedSolution(solution)},
  },
  }
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
                      key={techIndex},
  }
                      className="className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30";"
                    >
                      {tech},
  }
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category},
  }
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

      {/* Success Stories */},
  }
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Blockchain Enterprise Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with blockchain enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
  <motion.div
                key={story.id},
  }
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo},
  }
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

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform with Blockchain?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how blockchain enterprise solutions can revolutionize your operations
              improve transparency, and create competitive advantages.
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
                Start Blockchain Project
              </a>
              <a
                href="/contact"
                className="className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                Blockchain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}