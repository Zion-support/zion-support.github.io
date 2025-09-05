<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  FaRocket,
  FaBrain, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs,
  FaLightbulb,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaNetworkWired,
  FaRobot,
  FaSearch
} from 'react-icons/fa',
import { 
  SiNextdotjs,
  SiReact, 
  SiTypescript, 
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiAws,
  SiGooglecloud,
  SiMicrosoftazure
} from 'react-icons/si',

interface Service {
  id: string,
  title: string,
  description: string,
  icon: React.ReactNode,
  category: string,
  features: string[],
  pricing: {
    starter: number,
    professional: number,
    enterprise: number
  },
  technologies: string[],
  benefits: string[]
}

interface ServiceCategory {
  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className=&quot;w-8 h-8&quot; />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className=&quot;w-8 h-8&quot; />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
    icon: <FaShieldAlt className=&quot;w-8 h-8&quot; />,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
    icon: <FaDatabase className=&quot;w-8 h-8&quot; />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: <FaNetworkWired className=&quot;w-8 h-8&quot; />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
    icon: <FaRobot className=&quot;w-8 h-8&quot; />,
    color: 'from-yellow-500 to-orange-500'
  }
],

const services: Service[] = [
  {
    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className=&quot;w-6 h-6&quot; />,
    category: 'automation',
    features: [
      'Intelligent workflow automationNatural language processingPredictive analyticsReal-time decision makingCustom AI model trainingMulti-platform integration'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    },
    technologies: ['TensorFlowPyTorchOpenAILangChainReactNode.js'],
=======
import React, {_useState, _useEffect, _useMemo} from 'react';
import {_FaRocket, _FaBrain, _FaCloud, _FaShieldAlt, _FaChartLine, _FaCogs, _FaLightbulb, _FaGlobe, _FaMobile, _FaDatabase, _FaNetworkWired, _FaRobot, _FaSearch} from 'react-icons/fa';
import {_SiNextdotjs, _SiReact, _SiTypescript, _SiTailwindcss, _SiPrisma, _SiSupabase, _SiVercel, _SiDocker, _SiKubernetes, _SiAws, _SiGooglecloud, _SiMicrosoftazure} from 'react-icons/si';

interface Service {_id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;};
  technologies: string[];
  benefits: string[];
}

interface ServiceCategory {_id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;}

const serviceCategories: ServiceCategory[] = [
  {_id: 'ai-ml', _name: 'AI & Machine Learning', _description: 'Cutting-edge artificial intelligence and machine learning solutions', _icon: <FaBrain className="w-8 h-8" />, _color: 'from-purple-500 to-pink-500'},
  {_id: 'cloud', _name: 'Cloud & DevOps', _description: 'Scalable cloud infrastructure and development operations', _icon: <FaCloud className="w-8 h-8" />, _color: 'from-blue-500 to-cyan-500'},
  {_id: 'security', _name: 'Cybersecurity', _description: 'Advanced security solutions for modern threats', _icon: <FaShieldAlt className="w-8 h-8" />, _color: 'from-red-500 to-orange-500'},
  {_id: 'data', _name: 'Data & Analytics', _description: 'Comprehensive data management and analytics platforms', _icon: <FaDatabase className="w-8 h-8" />, _color: 'from-green-500 to-emerald-500'},
  {_id: 'iot', _name: 'IoT & Edge Computing', _description: 'Internet of Things and edge computing solutions', _icon: <FaNetworkWired className="w-8 h-8" />, _color: 'from-indigo-500 to-purple-500'},
  {_id: 'automation', _name: 'Process Automation', _description: 'Intelligent automation for business processes', _icon: <FaRobot className="w-8 h-8" />, _color: 'from-yellow-500 to-orange-500'}
];

const services: Service[] = [
  {_id: 'ai-automation-suite', _title: 'AI-Powered Automation Suite', _description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization', _icon: <FaRobot className="w-6 h-6" />, _category: 'automation', _features: [
      'Intelligent workflow automation', _'Natural language processing', _'Predictive analytics', _'Real-time decision making', _'Custom AI model training', _'Multi-platform integration'
    ], _pricing: {
      starter: 299, _professional: 799, _enterprise: 1999},
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'React', 'Node.js'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduce manual tasks by 80%Improve accuracy by 95%24/7 automated operationsScalable AI infrastructure'
    ]
  },
<<<<<<< HEAD
  {
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className=&quot;w-6 h-6&quot; />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimizationHybrid classical-quantum computingQuantum machine learningCryptographic solutionsQuantum simulation toolsAPI access to quantum hardware'
    ],
    pricing: {
      starter: 999,
      professional: 2499,
      enterprise: 4999
    },
    technologies: ['QiskitCirqPennyLanePythonC++CUDA'],
=======
  {_id: 'quantum-computing-platform', _title: 'Quantum Computing Platform', _description: 'Next-generation quantum computing solutions for complex problem solving', _icon: <FaBrain className="w-6 h-6" />, _category: 'ai-ml', _features: [
      'Quantum algorithm optimization', _'Hybrid classical-quantum computing', _'Quantum machine learning', _'Cryptographic solutions', _'Quantum simulation tools', _'API access to quantum hardware'
    ], _pricing: {
      starter: 999, _professional: 2499, _enterprise: 4999},
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Solve previously impossible problemsExponential speed improvementsFuture-proof technologyResearch and development support'
    ]
  },
<<<<<<< HEAD
  {
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description: 'Distributed artificial intelligence at the edge for real-time processing',
    icon: <FaNetworkWired className=&quot;w-6 h-6&quot; />,
    category: 'iot',
    features: [
      'Edge device optimizationReal-time AI inferenceDistributed learningLow-latency processingOffline AI capabilitiesEdge-to-cloud synchronization'
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499
    },
    technologies: ['TensorFlow LiteONNX RuntimeEdge TPURaspberry PiArduino'],
=======
  {_id: 'edge-ai-platform', _title: 'Edge AI Computing Platform', _description: 'Distributed artificial intelligence at the edge for real-time processing', _icon: <FaNetworkWired className="w-6 h-6" />, _category: 'iot', _features: [
      'Edge device optimization', _'Real-time AI inference', _'Distributed learning', _'Low-latency processing', _'Offline AI capabilities', _'Edge-to-cloud synchronization'
    ], _pricing: {
      starter: 199, _professional: 599, _enterprise: 1499},
    technologies: ['TensorFlow Lite', 'ONNX Runtime', 'Edge TPU', 'Raspberry Pi', 'Arduino'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduced latency by 90%Lower bandwidth costsEnhanced privacyScalable edge deployment'
    ]
  },
<<<<<<< HEAD
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description: 'Advanced security solutions leveraging quantum-resistant cryptography',
    icon: <FaShieldAlt className=&quot;w-6 h-6&quot; />,
    category: 'security',
    features: [
      'Post-quantum cryptographyQuantum key distributionAdvanced threat detectionZero-trust architectureCompliance frameworksReal-time monitoring'
    ],
    pricing: {
      starter: 399,
      professional: 999,
      enterprise: 2499
    },
    technologies: ['NIST PQCQKD protocolsZero TrustSIEMSOAR'],
=======
  {_id: 'quantum-cybersecurity', _title: 'Quantum Cybersecurity Suite', _description: 'Advanced security solutions leveraging quantum-resistant cryptography', _icon: <FaShieldAlt className="w-6 h-6" />, _category: 'security', _features: [
      'Post-quantum cryptography', _'Quantum key distribution', _'Advanced threat detection', _'Zero-trust architecture', _'Compliance frameworks', _'Real-time monitoring'
    ], _pricing: {
      starter: 399, _professional: 999, _enterprise: 2499},
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Future-proof securityQuantum-resistant encryptionComprehensive complianceAdvanced threat protection'
    ]
  },
<<<<<<< HEAD
  {
    id: 'data-fabric-platform',
    title: 'Intelligent Data Fabric Platform',
    description: 'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className=&quot;w-6 h-6&quot; />,
    category: 'data',
    features: [
      'Unified data accessReal-time analyticsData governanceAI-powered insightsMulti-cloud supportData lineage tracking'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    },
    technologies: ['Apache KafkaApache SparkSnowflakeDatabricksAirflow'],
=======
  {_id: 'data-fabric-platform', _title: 'Intelligent Data Fabric Platform', _description: 'Unified data management and analytics across all sources and formats', _icon: <FaDatabase className="w-6 h-6" />, _category: 'data', _features: [
      'Unified data access', _'Real-time analytics', _'Data governance', _'AI-powered insights', _'Multi-cloud support', _'Data lineage tracking'
    ], _pricing: {
      starter: 299, _professional: 799, _enterprise: 1999},
    technologies: ['Apache Kafka', 'Apache Spark', 'Snowflake', 'Databricks', 'Airflow'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Unified data viewReal-time insightsImproved data qualityReduced integration costs'
    ]
  },
<<<<<<< HEAD
  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
    icon: <FaCloud className=&quot;w-6 h-6&quot; />,
    category: 'cloud',
    features: [
      'Kubernetes orchestrationMicroservices architectureCI/CD pipelinesAuto-scalingMulti-cloud deploymentDevOps automation'
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499
    },
    technologies: ['KubernetesDockerHelmArgoCDPrometheusGrafana'],
=======
  {_id: 'cloud-native-platform', _title: 'Cloud-Native Development Platform', _description: 'Modern cloud-native development and deployment platform', _icon: <FaCloud className="w-6 h-6" />, _category: 'cloud', _features: [
      'Kubernetes orchestration', _'Microservices architecture', _'CI/CD pipelines', _'Auto-scaling', _'Multi-cloud deployment', _'DevOps automation'
    ], _pricing: {
      starter: 199, _professional: 599, _enterprise: 1499},
    technologies: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability'
    ]
  }
],

<<<<<<< HEAD
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedService, setSelectedService] = useState<Service | null>(null),
  const [searchTerm, setSearchTerm] = useState(''),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name'),

  const filteredServices = useMemo(() => {
    let filtered = services,
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
=======
const EnhancedServicesShowcase2025: React.FC = () => {_const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedService, _setSelectedService] = useState<Service | null>(null);
  const [searchTerm, _setSearchTerm] = useState('');
  const [sortBy, _setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const _filteredServices = useMemo__(() => {
    let _filtered = services;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (searchTerm) {_filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
<<<<<<< HEAD
      )
    }
=======
      );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter,
        case 'category':
<<<<<<< HEAD
          return a.category.localeCompare(b.category),
        default: return a.title.localeCompare(b.title)
      }
    })
  }, [selectedCategory, searchTerm, sortBy]),

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  },

  const closeModal = () => {
    setSelectedService(null)
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white&quot;>
      {/* Header */}
      <div className=&quot;container mx-auto px-4 py-16&quot;>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=&quot;text-center mb-16&quot;
=======
          return a.category.localeCompare(b.category);
        default:
          return a.title.localeCompare(b.title);}
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const _handleServiceSelect = (_service: Service) => {_setSelectedService(service);};

  const _closeModal = () => {_setSelectedService(null);};

  return (_<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {_/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
            2025 Services Showcase
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Discover our cutting-edge technology solutions designed for the future. 
            From AI-powered automation to quantum computing, _we're building tomorrow's innovations today.
          </p>
        </motion.div>

        {_/* Search and Filters */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=&quot;mb-12&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.2}}
          className="mb-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;flex flex-col md:flex-row gap-4 items-center justify-center&quot;>
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <input
<<<<<<< HEAD
                type=&quot;text&quot;
                placeholder=&quot;Search services, technologies, or features...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
=======
                type="text"
                placeholder="Search services, _technologies, _or features..."
                value={_searchTerm}
                onChange={_(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
              <FaSearch className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400&quot; />
            </div>
            
            <select
<<<<<<< HEAD
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className=&quot;px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
=======
              value={_sortBy}
              onChange={_(_e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <option value=&quot;name&quot;>Sort by Name</option>
              <option value=&quot;price&quot;>Sort by Price</option>
              <option value=&quot;category&quot;>Sort by Category</option>
            </select>
          </div>
        </motion.div>

        {_/* Category Tabs */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=&quot;mb-12&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.4}}
          className="mb-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            <button
              onClick={_() => setSelectedCategory('all')}
              className={_`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'}`}
            >
              All Services
            </button>
            {_serviceCategories.map(_(category) => (_<button
                key={category.id}
                onClick={_() => setSelectedCategory(category.id)}
                className={_`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {_category.icon}
                {_category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {_/* Services Grid */}
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
=======
          initial={_{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8, _delay: 0.6}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_filteredServices.map(_(service, _index) => (_<motion.div
              key={service.id}
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className=&quot;bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300&quot;
              onClick={() => handleServiceSelect(service)}
            >
              <div className=&quot;flex items-center gap-3 mb-4&quot;>
                <div className=&quot;p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg&quot;>
                  {service.icon}
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{service.title}</h3>
                  <p className=&quot;text-sm text-gray-400&quot;>{serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className=&quot;text-gray-300 mb-4 line-clamp-3&quot;>{service.description}</p>
              
              <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                {service.technologies.slice(0, 3).map((tech) => (
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: index * 0.1}}
              whileHover={_{ y: -5, _scale: 1.02}}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={_() => handleServiceSelect(service)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {_service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{_service.title}</h3>
                  <p className="text-sm text-gray-400">{_serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{_service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {_service.technologies.slice(0, _3).map(_(tech) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <span
                    key={tech}
                    className=&quot;px-2 py-1 bg-white/10 rounded text-xs text-gray-300&quot;
                  >
                    {_tech}
                  </span>
                ))}
<<<<<<< HEAD
                {service.technologies.length > 3 && (
                  <span className=&quot;px-2 py-1 bg-white/10 rounded text-xs text-gray-300&quot;>
=======
                {_service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
              
<<<<<<< HEAD
              <div className=&quot;flex items-center justify-between&quot;>
                <div className=&quot;text-2xl font-bold text-blue-400&quot;>
                  ${service.pricing.starter}
                  <span className=&quot;text-sm text-gray-400 font-normal&quot;>/month</span>
=======
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${_service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300&quot;>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {_/* No Results */}
        {_filteredServices.length === 0 && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=&quot;text-center py-16&quot;
=======
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            className="text-center py-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;text-6xl mb-4&quot;>🔍</div>
            <h3 className=&quot;text-2xl font-bold text-gray-300 mb-2&quot;>No services found</h3>
            <p className=&quot;text-gray-400&quot;>Try adjusting your search terms or category filters</p>
          </motion.div>
        )}
      </div>

      {_/* Service Detail Modal */}
      <AnimatePresence>
<<<<<<< HEAD
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot;
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className=&quot;bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto&quot;
              onClick={(e) => e.stopPropagation()}
            >
              <div className=&quot;flex items-start justify-between mb-6&quot;>
                <div className=&quot;flex items-center gap-4&quot;>
                  <div className=&quot;p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl&quot;>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>{selectedService.title}</h2>
                    <p className=&quot;text-gray-400&quot;>{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className=&quot;p-2 hover:bg-white/10 rounded-lg transition-colors&quot;
=======
        {_selectedService && (_<motion.div
            initial={{ opacity: 0}}
            animate={_{ opacity: 1}}
            exit={_{ opacity: 0}}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={_closeModal}
          >
            <motion.div
              initial={_{ scale: 0.9, _opacity: 0}}
              animate={_{ scale: 1, _opacity: 1}}
              exit={_{ scale: 0.9, _opacity: 0}}
              className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={_(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {_selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{_selectedService.title}</h2>
                    <p className="text-gray-400">{_serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
                  </div>
                </div>
                <button
                  onClick={_closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <span className=&quot;text-2xl&quot;>×</span>
                </button>
              </div>

<<<<<<< HEAD
              <p className=&quot;text-gray-300 text-lg mb-8&quot;>{selectedService.description}</p>

              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                {/* Features */}
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Key Features</h3>
                  <ul className=&quot;space-y-2&quot;>
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className=&quot;flex items-center gap-2 text-gray-300&quot;>
                        <div className=&quot;w-2 h-2 bg-blue-500 rounded-full&quot;></div>
                        {feature}
=======
              <p className="text-gray-300 text-lg mb-8">{_selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {_/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {_selectedService.features.map(_(feature, _index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>

                {_/* Benefits */}
                <div>
<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Key Benefits</h3>
                  <ul className=&quot;space-y-2&quot;>
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className=&quot;flex items-center gap-2 text-gray-300&quot;>
                        <div className=&quot;w-2 h-2 bg-green-500 rounded-full&quot;></div>
                        {benefit}
=======
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {_selectedService.benefits.map(_(benefit, _index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
              {/* Technologies */}
              <div className=&quot;mt-8&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Technologies</h3>
                <div className=&quot;flex flex-wrap gap-3&quot;>
                  {selectedService.technologies.map((tech) => (
=======
              {_/* Technologies */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {_selectedService.technologies.map(_(tech) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span
                      key={tech}
                      className=&quot;px-3 py-2 bg-white/10 rounded-lg text-gray-300&quot;
                    >
                      {_tech}
                    </span>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Pricing */}
              <div className=&quot;mt-8&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Pricing Plans</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
=======
              {_/* Pricing */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {_Object.entries(selectedService.pricing).map(_([plan, _price]) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div
                      key={plan}
                      className=&quot;p-4 bg-white/5 border border-white/20 rounded-lg text-center&quot;
                    >
<<<<<<< HEAD
                      <h4 className=&quot;text-lg font-bold text-white capitalize mb-2&quot;>{plan}</h4>
                      <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>
                        ${price}
                        <span className=&quot;text-sm text-gray-400 font-normal&quot;>/month</span>
=======
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{_plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${_price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      <button className=&quot;w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300&quot;>
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
},

export default EnhancedServicesShowcase2025,