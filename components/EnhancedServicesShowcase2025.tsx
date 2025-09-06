import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
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
  FaSearch,;
=======
import { 
  FaRocket;
  FaBrain, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'react-icons/fa';
import { 
  SiNextdotjs;
  SiReact, 
  SiTypescript, 
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
  SiMicrosoftazure
} from 'react-icons/si';

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
  };
  technologies: string[],
  benefits: string[]
}

interface ServiceCategory {
<<<<<<< HEAD
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
=======
import { 
  FaRocket;
  FaBrain, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch
} from 'react-icons/fa';
import { 
  SiNextdotjs;
  SiReact, 
  SiTypescript, 
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
  SiMicrosoftazure
} from 'react-icons/si';

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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
<<<<<<< HEAD
<<<<<<< HEAD
    description:
      'Cutting-edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className='w-8 h-8' />,
    color: 'from-purple-500 to-pink-500',
  },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  };
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaCloud className='w-8 h-8' />,
    color: 'from-blue-500 to-cyan-500',
  },
=======
    icon: <FaCloud className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    icon: <FaCloud className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaShieldAlt className='w-8 h-8' />,
    color: 'from-red-500 to-orange-500',
  },
=======
    icon: <FaShieldAlt className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    icon: <FaShieldAlt className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaDatabase className='w-8 h-8' />,
    color: 'from-green-500 to-emerald-500',
  },
=======
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaNetworkWired className='w-8 h-8' />,
    color: 'from-indigo-500 to-purple-500',
  },
=======
    icon: <FaNetworkWired className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    icon: <FaNetworkWired className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaRobot className='w-8 h-8' />,
    color: 'from-yellow-500 to-orange-500',
  },
=======
    icon: <FaRobot className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500'
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    icon: <FaRobot className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500'
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

const services: Service[] = [
  {
    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
<<<<<<< HEAD
<<<<<<< HEAD
    description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className='w-6 h-6' />,
=======
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className="w-6 h-6" />,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    category: 'automation',
    features: [
      'Intelligent workflow automationNatural language processingPredictive analyticsReal-time decision makingCustom AI model trainingMulti-platform integration'
    ];
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    };
    technologies: ['TensorFlowPyTorchOpenAILangChainReactNode.js'],
    benefits: [
      'Reduce manual tasks by 80%Improve accuracy by 95%24/7 automated operationsScalable AI infrastructure'
    ]
  };
  {
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className="w-6 h-6" />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimizationHybrid classical-quantum computingQuantum machine learningCryptographic solutionsQuantum simulation toolsAPI access to quantum hardware'
    ];
    pricing: {
      starter: 999,
      professional: 2499,
      enterprise: 4999
    };
    technologies: ['QiskitCirqPennyLanePythonC++CUDA'],
    benefits: [
      'Solve previously impossible problemsExponential speed improvementsFuture-proof technologyResearch and development support'
    ]
  };
  {
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description: 'Distributed artificial intelligence at the edge for real-time processing',
    icon: <FaNetworkWired className="w-6 h-6" />,
    category: 'iot',
    features: [
      'Edge device optimizationReal-time AI inferenceDistributed learningLow-latency processingOffline AI capabilitiesEdge-to-cloud synchronization'
    ];
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499
    };
    technologies: ['TensorFlow LiteONNX RuntimeEdge TPURaspberry PiArduino'],
    benefits: [
      'Reduced latency by 90%Lower bandwidth costsEnhanced privacyScalable edge deployment'
    ]
  };
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description: 'Advanced security solutions leveraging quantum-resistant cryptography',
    icon: <FaShieldAlt className="w-6 h-6" />,
    category: 'security',
    features: [
      'Post-quantum cryptographyQuantum key distributionAdvanced threat detectionZero-trust architectureCompliance frameworksReal-time monitoring'
    ];
    pricing: {
      starter: 399,
      professional: 999,
      enterprise: 2499
    };
    technologies: ['NIST PQCQKD protocolsZero TrustSIEMSOAR'],
    benefits: [
      'Future-proof securityQuantum-resistant encryptionComprehensive complianceAdvanced threat protection'
    ]
  };
  {
    id: 'data-fabric-platform',
    title: 'Intelligent Data Fabric Platform',
    description: 'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className="w-6 h-6" />,
    category: 'data',
    features: [
      'Unified data accessReal-time analyticsData governanceAI-powered insightsMulti-cloud supportData lineage tracking'
    ];
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    };
    technologies: ['Apache KafkaApache SparkSnowflakeDatabricksAirflow'],
    benefits: [
<<<<<<< HEAD
      'Unified data view',
      'Real-time insights',
      'Improved data quality',
      'Reduced integration costs',
    ],
  },
=======
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className="w-6 h-6" />,
    category: 'automation',
    features: [
      'Intelligent workflow automationNatural language processingPredictive analyticsReal-time decision makingCustom AI model trainingMulti-platform integration'
    ];
    pricing: {
      
      starter: 299,
      professional: 799,
      enterprise: 1999
    
    },
    technologies: ['TensorFlowPyTorchOpenAILangChainReactNode.js'],
    benefits: [
      'Reduce manual tasks by 80%Improve accuracy by 95%24/7 automated operationsScalable AI infrastructure'
    ]
  };
  {
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className="w-6 h-6" />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimizationHybrid classical-quantum computingQuantum machine learningCryptographic solutionsQuantum simulation toolsAPI access to quantum hardware'
    ];
    pricing: {
      
      starter: 999,
      professional: 2499,
      enterprise: 4999
    
    },
    technologies: ['QiskitCirqPennyLanePythonC++CUDA'],
    benefits: [
      'Solve previously impossible problemsExponential speed improvementsFuture-proof technologyResearch and development support'
    ]
  };
  {
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description: 'Distributed artificial intelligence at the edge for real-time processing',
    icon: <FaNetworkWired className="w-6 h-6" />,
    category: 'iot',
    features: [
      'Edge device optimizationReal-time AI inferenceDistributed learningLow-latency processingOffline AI capabilitiesEdge-to-cloud synchronization'
    ];
    pricing: {
      
      starter: 199,
      professional: 599,
      enterprise: 1499
    
    },
    technologies: ['TensorFlow LiteONNX RuntimeEdge TPURaspberry PiArduino'],
    benefits: [
      'Reduced latency by 90%Lower bandwidth costsEnhanced privacyScalable edge deployment'
    ]
  };
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description: 'Advanced security solutions leveraging quantum-resistant cryptography',
    icon: <FaShieldAlt className="w-6 h-6" />,
    category: 'security',
    features: [
      'Post-quantum cryptographyQuantum key distributionAdvanced threat detectionZero-trust architectureCompliance frameworksReal-time monitoring'
    ];
    pricing: {
      
      starter: 399,
      professional: 999,
      enterprise: 2499
    
    },
    technologies: ['NIST PQCQKD protocolsZero TrustSIEMSOAR'],
    benefits: [
      'Future-proof securityQuantum-resistant encryptionComprehensive complianceAdvanced threat protection'
    ]
  };
  {
    id: 'data-fabric-platform',
    title: 'Intelligent Data Fabric Platform',
    description: 'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className="w-6 h-6" />,
    category: 'data',
    features: [
      'Unified data accessReal-time analyticsData governanceAI-powered insightsMulti-cloud supportData lineage tracking'
    ];
    pricing: {
      
      starter: 299,
      professional: 799,
      enterprise: 1999
    
    },
    technologies: ['Apache KafkaApache SparkSnowflakeDatabricksAirflow'],
    benefits: [
      'Unified data viewReal-time insightsImproved data qualityReduced integration costs'
    ]
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      'Unified data viewReal-time insightsImproved data qualityReduced integration costs'
    ]
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaCloud className='w-6 h-6' />,
=======
    icon: <FaCloud className="w-6 h-6" />,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    category: 'cloud',
    features: [
      'Kubernetes orchestrationMicroservices architectureCI/CD pipelinesAuto-scalingMulti-cloud deploymentDevOps automation'
    ];
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499
    };
    technologies: ['KubernetesDockerHelmArgoCDPrometheusGrafana'],
    benefits: [
<<<<<<< HEAD
      'Faster deployment',
      'Improved scalability',
      'Better resource utilization',
      'Enhanced reliability',
    ],
  },
=======
    icon: <FaCloud className="w-6 h-6" />,
    category: 'cloud',
    features: [
      'Kubernetes orchestrationMicroservices architectureCI/CD pipelinesAuto-scalingMulti-cloud deploymentDevOps automation'
    ];
    pricing: {
      
      starter: 199,
      professional: 599,
      enterprise: 1499
    
    },
    technologies: ['KubernetesDockerHelmArgoCDPrometheusGrafana'],
    benefits: [
      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability'
    ]
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability'
    ]
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = useMemo(() => {
    let filtered = services;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
<<<<<<< HEAD

=======
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);
<<<<<<< HEAD
<<<<<<< HEAD
        default:
          return a.title.localeCompare(b.title);
=======
        default: return a.title.localeCompare(b.title)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    })
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  };

  const closeModal = () => {
    setSelectedService(null)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-16'>
=======
        default: return a.title.localeCompare(b.title)
      }
    })
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  };

  const closeModal = () => {
    setSelectedService(null)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="container mx-auto px-4 py-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mb-16'
=======
          className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
<<<<<<< HEAD
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our cutting-edge technology solutions designed for the
            future. From AI-powered automation to quantum computing, we're
            building tomorrow's innovations today.
=======
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future. 
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future. 
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='mb-12'
=======
          className="mb-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
<<<<<<< HEAD
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
              <option value='category'>Sort by Category</option>
=======
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </select>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-4'>
=======
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
<<<<<<< HEAD
<<<<<<< HEAD
            {serviceCategories.map(category => (
=======
            {serviceCategories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            {serviceCategories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
=======
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'
=======
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={() => handleServiceSelect(service)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
<<<<<<< HEAD
                    className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'
=======
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => handleServiceSelect(service)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <span className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'>
=======
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

              <div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>
=======
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  ${service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
<<<<<<< HEAD
                <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
=======
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center py-16'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>
              No services found
            </h3>
            <p className='text-gray-400'>
              Try adjusting your search terms or category filters
            </p>
=======
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </motion.div>
        )}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
=======
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'
              onClick={e => e.stopPropagation()}
=======
              className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
<<<<<<< HEAD
                    <h2 className='text-3xl font-bold text-white mb-2'>
                      {selectedService.title}
                    </h2>
                    <p className='text-gray-400'>
                      {
                        serviceCategories.find(
                          c => c.id === selectedService.category
                        )?.name
                      }
                    </p>
=======
              className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>
                <button
                  onClick={closeModal}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'
=======
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
<<<<<<< HEAD
                      <li
                        key={index}
                        className='flex items-center gap-2 text-gray-300'
                      >
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
=======
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <h3 className='text-xl font-bold text-white mb-4'>
                    Key Benefits
                  </h3>
                  <ul className='space-y-2'>
                    {selectedService.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 text-gray-300'
                      >
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
=======
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Technologies
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {selectedService.technologies.map(tech => (
                    <span
                      key={tech}
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'
=======
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Pricing Plans
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {Object.entries(selectedService.pricing).map(
                    ([plan, price]) => (
                      <div
                        key={plan}
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center'
                      >
                        <h4 className='text-lg font-bold text-white capitalize mb-2'>
                          {plan}
                        </h4>
                        <div className='text-3xl font-bold text-blue-400 mb-2'>
                          ${price}
                          <span className='text-sm text-gray-400 font-normal'>
                            /month
                          </span>
                        </div>
                        <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
                          Get Started
                        </button>
                      </div>
                    )
                  )}
=======
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div
                      key={plan}
                      className="p-4 bg-white/5 border border-white/20 rounded-lg text-center"
                    >
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
=======
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div
                      key={plan}
                      className="p-4 bg-white/5 border border-white/20 rounded-lg text-center"
                    >
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default EnhancedServicesShowcase2025;
=======
  )
};

export default EnhancedServicesShowcase2025;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default EnhancedServicesShowcase2025;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
