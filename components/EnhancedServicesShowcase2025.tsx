<<<<<<< HEAD
<<<<<<< HEAD
import {;
  FaRocket,;
  FaBrain,;
  FaCloud,;
  FaShieldAlt,;
  FaChartLine,;
  FaCogs,;
  FaLightbulb,;
  FaGlobe,;
  FaMobile,;
  FaDatabase,;
  FaNetworkWired,;
  FaRobot,;
  FaSearch,;
import {;
  SiNextdotjs,;
  SiReact,;
  SiTypescript,;
  SiTailwindcss,;
  SiPrisma,;
  SiSupabase,;
  SiVercel,;
  SiDocker,;
  SiKubernetes,;
  SiAws,;
  SiGooglecloud,;
  SiMicrosoftazure,;
} from 'react-icons/si';
interface Service {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
<<<<<<< HEAD

import {
  FaRocket
  FaBrain
  FaCloud
  FaShieldAlt
  FaChartLine
  FaCogs
  FaLightbulb
  FaGlobe
  FaMobile
  FaDatabase
  FaNetworkWired
  FaRobot
  FaSearch;
import {
  SiNextdotjs
  SiReact
  SiTypescript
  SiTailwindcss
  SiPrisma
  SiSupabase
  SiVercel
  SiDocker
  SiKubernetes
  SiAws
  SiGooglecloud
  SiMicrosoftazure;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'react-icons/si';

interface Service {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
FaSearch,
  FaRobot,;
  FaSearch,;
=======
<<<<<<< HEAD
  FaRobot,
  FaSearch,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  FaRobot,
  FaSearch,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  SiGooglecloud,;
  SiMicrosoftazure,;
} from 'react-icons/si';

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  SiGooglecloud,;
  SiMicrosoftazure,;

} from 'react-icons/si';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;

    enterprise: number;
  }
  technologies: string[];
  benefits: string[];

<<<<<<< HEAD
<<<<<<< HEAD
interface ServiceCategory {
=======
;
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
interface ServiceCategory {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
=======

interface ServiceCategory {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  description: string;

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
<<<<<<< HEAD
<<<<<<< HEAD
  color: string;  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
}
const serviceCategories: ServiceCategory[] = [
  icon: React.ReactNode;
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  color: string;  id: string
  name: string
  description: string
  icon: React.ReactNode

  color: string
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}


<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const serviceCategories: ServiceCategory[] = [
  {

    id: 'ai-ml'
    name: 'AI & Machine Learning'
    description:
      'Cutting-edge artificial intelligence and machine learning solutions'
    icon: <FaBrain className='w-8 h-8' />
    color: 'from-purple-500 to-pink-500'
  },  {
    id: 'cloud'
    name: 'Cloud & DevOps'
    description: 'Scalable cloud infrastructure and development operations'
    icon: <FaCloud className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
  },  {
    id: 'security'
    name: 'Cybersecurity'
    description: 'Advanced security solutions for modern threats'
    icon: <FaShieldAlt className='w-8 h-8' />
    color: 'from-red-500 to-orange-500'
  },  {
    id: 'data'
    name: 'Data & Analytics'
    description: 'Comprehensive data management and analytics platforms'
    icon: <FaDatabase className='w-8 h-8' />
    color: 'from-green-500 to-emerald-500'
  },  {
    id: 'iot'
    name: 'IoT & Edge Computing'
    description: 'Internet of Things and edge computing solutions'
    icon: <FaNetworkWired className='w-8 h-8' />
    color: 'from-indigo-500 to-purple-500'
  },  {
    id: 'automation'
    name: 'Process Automation'
    description: 'Intelligent automation for business processes'
    icon: <FaRobot className='w-8 h-8' />
    color: 'from-yellow-500 to-orange-500'
  },];    description: 'Cutting-edge artificial intelligence and machine learning solutions'
    icon: <FaBrain className="w-8 h-8" />
    color: 'from-purple-500 to-pink-500'
  }
    id: 'cloud'
    name: 'Cloud & DevOps'
    description: 'Scalable cloud infrastructure and development operations'
    icon: <FaCloud className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
  },    icon: <FaCloud className="w-8 h-8" />
    color: 'from-blue-500 to-cyan-500'
  }
  {
    id: 'security'
    name: 'Cybersecurity'
    description: 'Advanced security solutions for modern threats'
    icon: <FaShieldAlt className='w-8 h-8' />
    color: 'from-red-500 to-orange-500'
  },    icon: <FaShieldAlt className="w-8 h-8" />
    color: 'from-red-500 to-orange-500'
  }
  {
    id: 'data'
    name: 'Data & Analytics'
    description: 'Comprehensive data management and analytics platforms'
    icon: <FaDatabase className='w-8 h-8' />
    color: 'from-green-500 to-emerald-500'
  },    icon: <FaDatabase className="w-8 h-8" />
    color: 'from-green-500 to-emerald-500'
  }
  {
    id: 'iot'
    name: 'IoT & Edge Computing'
    description: 'Internet of Things and edge computing solutions'
    icon: <FaNetworkWired className='w-8 h-8' />
    color: 'from-indigo-500 to-purple-500'
  },    icon: <FaNetworkWired className="w-8 h-8" />
    color: 'from-indigo-500 to-purple-500'
  }
  {
    id: 'automation'
    name: 'Process Automation'
    description: 'Intelligent automation for business processes'
    icon: <FaRobot className='w-8 h-8' />
    color: 'from-yellow-500 to-orange-500'
  },    icon: <FaRobot className="w-8 h-8" />
<<<<<<< HEAD

const serviceCategories: ServiceCategory[] = [
=======
=======

const serviceCategories: ServiceCategory[] = [
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string;
}
const service_categories: ServiceCategory[] = [;
<<<<<<< HEAD
  {
    color: 'from-yellow-500 to-orange-500'
  }
];
const services: Service[] = [
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    id: 'ai-automation-suite'
    title: 'AI-Powered Automation Suite'
    description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization'
    icon: <FaRobot className='w-6 h-6' />
    features: [
<<<<<<< HEAD
    id: 'ai - ml',
    name: 'AI & Machine Learning',

    description:;
      'Cutting - edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className='w - 8 h - 8' />,
    color: 'from - purple - 500 to - pink - 500',
  },  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className='w - 8 h - 8' />,
    color: 'from - blue - 500 to - cyan - 500',
  },  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
    icon: <FaShieldAlt className='w - 8 h - 8' />,
    color: 'from - red - 500 to - orange - 500',
  },  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
    icon: <FaDatabase className='w - 8 h - 8' />,
    color: 'from - green - 500 to - emerald - 500',
  },  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: <FaNetworkWired className='w - 8 h - 8' />,
    color: 'from - indigo - 500 to - purple - 500',
  },  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
    icon: <FaRobot className='w - 8 h - 8' />,
    color: 'from - yellow - 500 to - orange - 500',
  }, ];    description: 'Cutting - edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className="w - 8 h - 8" />,
    color: 'from - purple - 500 to - pink - 500';
  }
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className='w - 8 h - 8' />,
    color: 'from - blue - 500 to - cyan - 500',
  },    icon: <FaCloud className="w - 8 h - 8" />,
    color: 'from - blue - 500 to - cyan - 500';
  }

  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',

    icon: <FaShieldAlt className='w - 8 h - 8' />,
    color: 'from - red - 500 to - orange - 500',
  },    icon: <FaShieldAlt className="w - 8 h - 8" />,
    color: 'from - red - 500 to - orange - 500';
  }

  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',

    icon: <FaDatabase className='w - 8 h - 8' />,
    color: 'from - green - 500 to - emerald - 500',
  },    icon: <FaDatabase className="w - 8 h - 8" />,
    color: 'from - green - 500 to - emerald - 500';
  }

  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',

    icon: <FaNetworkWired className='w - 8 h - 8' />,
    color: 'from - indigo - 500 to - purple - 500',
  },    icon: <FaNetworkWired className="w - 8 h - 8" />,
    color: 'from - indigo - 500 to - purple - 500';
  }

  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',

  icon: React && React.ReactNode;
  color: string;  id: string,;
  name: string,;
  description: string,;
  icon: React && React.ReactNode,;
  color: string;
}
const serviceCategories: ServiceCategory[] = [;
  {;
    id: 'ai-ml',;
    name: 'AI & Machine Learning',;
    description:;
      'Cutting-edge artificial intelligence and machine learning solutions',;
    icon: <FaBrain className='w-8 h-8' />,;
    color: 'from-purple-500 to-pink-500',;
  },  {;
    id: 'cloud',;
    name: 'Cloud & DevOps',;
    description: 'Scalable cloud infrastructure and development operations',;
    icon: <FaCloud className='w-8 h-8' />,;
    color: 'from-blue-500 to-cyan-500',;
  },  {;
    id: 'security',;
    name: 'Cybersecurity',;
    description: 'Advanced security solutions for modern threats',;
    icon: <FaShieldAlt className='w-8 h-8' />,;
    color: 'from-red-500 to-orange-500',;
  },  {;
    id: 'data',;
    name: 'Data & Analytics',;
    description: 'Comprehensive data management and analytics platforms',;
    icon: <FaDatabase className='w-8 h-8' />,;
    color: 'from-green-500 to-emerald-500',;
  },  {;
    id: 'iot',;
    name: 'IoT & Edge Computing',;
    description: 'Internet of Things and edge computing solutions',;
    icon: <FaNetworkWired className='w-8 h-8' />,;
    color: 'from-indigo-500 to-purple-500',;
  },  {;
    id: 'automation',;
    name: 'Process Automation',;
    description: 'Intelligent automation for business processes',;
    icon: <FaRobot className='w-8 h-8' />,;
    color: 'from-yellow-500 to-orange-500',;
  },];    description: 'Cutting-edge artificial intelligence and machine learning solutions',;
    icon: <FaBrain className="w-8 h-8" />,;
    color: 'from-purple-500 to-pink-500';
  };
    id: 'cloud',;
    name: 'Cloud & DevOps',;
    description: 'Scalable cloud infrastructure and development operations',;
    icon: <FaCloud className='w-8 h-8' />,;
    color: 'from-blue-500 to-cyan-500',;
  },    icon: <FaCloud className="w-8 h-8" />,;
    color: 'from-blue-500 to-cyan-500';
  };
  {;
    id: 'security',;
    name: 'Cybersecurity',;
    description: 'Advanced security solutions for modern threats',;
    icon: <FaShieldAlt className='w-8 h-8' />,;
    color: 'from-red-500 to-orange-500',;
  },    icon: <FaShieldAlt className="w-8 h-8" />,;
    color: 'from-red-500 to-orange-500';
  };
  {;
    id: 'data',;
    name: 'Data & Analytics',;
    description: 'Comprehensive data management and analytics platforms',;
    icon: <FaDatabase className='w-8 h-8' />,;
    color: 'from-green-500 to-emerald-500',;
  },    icon: <FaDatabase className="w-8 h-8" />,;
    color: 'from-green-500 to-emerald-500';
  };
  {;
    id: 'iot',;
    name: 'IoT & Edge Computing',;
    description: 'Internet of Things and edge computing solutions',;
    icon: <FaNetworkWired className='w-8 h-8' />,;
    color: 'from-indigo-500 to-purple-500',;
  },    icon: <FaNetworkWired className="w-8 h-8" />,;
    color: 'from-indigo-500 to-purple-500';
  };
  {;
    id: 'automation',;
    name: 'Process Automation',;
    description: 'Intelligent automation for business processes',;
    icon: <FaRobot className='w-8 h-8' />,;
    color: 'from-yellow-500 to-orange-500',;
  },    icon: <FaRobot className="w-8 h-8" />,;
    color: 'from-yellow-500 to-orange-500';
  }
    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className="w-6 h-6" />,
    category: 'automation',
    features: [
      'Intelligent workflow automationNatural language processingPredictive analyticsReal-time decision makingCustom AI model trainingMulti-platform integration'
    ];
    icon: <FaRobot className='w - 8 h - 8' />,
    color: 'from - yellow - 500 to - orange - 500',
  },    icon: <FaRobot className="w - 8 h - 8" />,
    color: 'from - yellow - 500 to - orange - 500';
  }
];
;
const services: Service[] = [;
  {
    id: 'ai - automation - suite',
    title: 'AI - Powered Automation Suite',
    description:;
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className='w - 6 h - 6' />,
    features: [;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Intelligent workflow automation'
      'Natural language processing'
      'Predictive analytics'
      'Real-time decision making'
      'Custom AI model training'
      'Multi-platform integration'
    ]
    pricing: {
      starter: 299
      professional: 799
      enterprise: 1999
    }
    technologies: [
      'TensorFlow'
      'PyTorch'
      'OpenAI'
      'LangChain'
      'React'
      'Node.js'
    ]
    benefits: [
      'Reduce manual tasks by 80%'
      'Improve accuracy by 95%'
      '24/7 automated operations'
      'Scalable AI infrastructure'
    ]
  }
  {
    id: 'quantum-computing-platform'
    title: 'Quantum Computing Platform'
    description:
      'Next-generation quantum computing solutions for complex problem solving'
    icon: <FaBrain className='w-6 h-6' />
    category: 'ai-ml'
    features: [
      'Quantum algorithm optimization'
      'Hybrid classical-quantum computing'
      'Quantum machine learning'
      'Cryptographic solutions'
      'Quantum simulation tools'
      'API access to quantum hardware'
    ]
    pricing: {
      starter: 999
      professional: 2499
      enterprise: 4999
    }
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA']
    benefits: [
      'Solve previously impossible problems'
      'Exponential speed improvements'
      'Future-proof technology'
      'Research and development support'
    ]
  }
  {
    id: 'edge-ai-platform'
    title: 'Edge AI Computing Platform'
    description:
      'Distributed artificial intelligence at the edge for real-time processing'
    icon: <FaNetworkWired className='w-6 h-6' />
    category: 'iot'
    features: [
      'Edge device optimization'
      'Real-time AI inference'
      'Distributed learning'
      'Low-latency processing'
      'Offline AI capabilities'
      'Edge-to-cloud synchronization'
    ]
    pricing: {
      starter: 199
      professional: 599
      enterprise: 1499
    }
    technologies: [
      'TensorFlow Lite'
      'ONNX Runtime'
      'Edge TPU'
      'Raspberry Pi'
      'Arduino'
    ]
    benefits: [
      'Reduced latency by 90%'
      'Lower bandwidth costs'
      'Enhanced privacy'
      'Scalable edge deployment'
    ]
  }
  {
    id: 'quantum-cybersecurity'
    title: 'Quantum Cybersecurity Suite'
    description:
      'Advanced security solutions leveraging quantum-resistant cryptography'
    icon: <FaShieldAlt className='w-6 h-6' />
    category: 'security'
    features: [
      'Post-quantum cryptography'
      'Quantum key distribution'
      'Advanced threat detection'
      'Zero-trust architecture'
      'Compliance frameworks'
      'Real-time monitoring'
    ]
    pricing: {
      starter: 399
      professional: 999
      enterprise: 2499
    }
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR']
    benefits: [
      'Future-proof security'
      'Quantum-resistant encryption'
      'Comprehensive compliance'
      'Advanced threat protection'
    ]
  }
  {
    id: 'data-fabric-platform'
    title: 'Intelligent Data Fabric Platform'
    description:
      'Unified data management and analytics across all sources and formats'
    icon: <FaDatabase className='w-6 h-6' />
    category: 'data'
    features: [
      'Unified data access'
      'Real-time analytics'
      'Data governance'
      'AI-powered insights'
      'Multi-cloud support'
      'Data lineage tracking'
    ]
    pricing: {
      starter: 299
      professional: 799
      enterprise: 1999
    }
    technologies: [
      'Apache Kafka'
      'Apache Spark'
      'Snowflake'
      'Databricks'
      'Airflow'
    ]
    benefits: [
      'Unified data view'
      'Real-time insights'
      'Improved data quality'
      'Reduced integration costs'
    ]
  },  {
<<<<<<< HEAD
    id: 'cloud-native-platform'
    title: 'Cloud-Native Development Platform'
    description: 'Modern cloud-native development and deployment platform'
    icon: <FaCloud className='w-6 h-6' />,      'Unified data viewReal-time insightsImproved data qualityReduced integration costs'
    ]
  }
  {
    id: 'cloud-native-platform'
    title: 'Cloud-Native Development Platform'
    description: 'Modern cloud-native development and deployment platform'
    icon: <FaCloud className='w-6 h-6' />
    features: [
      'Kubernetes orchestration'
      'Microservices architecture'
      'CI/CD pipelines'
      'Auto-scaling'
      'Multi-cloud deployment'
      'DevOps automation'
    ]
    pricing: {
      starter: 199
      professional: 599
      enterprise: 1499
    }
    technologies: [
      'Kubernetes'
      'Docker'
      'Helm'
      'ArgoCD'
      'Prometheus'
      'Grafana'
    ]
    benefits: [
      'Faster deployment'
      'Improved scalability'
      'Better resource utilization'
      'Enhanced reliability'
    ]
  },];      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability'
    ]
  }
=======


  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}


const serviceCategories: ServiceCategory[] = [
  {

    id: 'ai-ml'
    name: 'AI & Machine Learning'
    description:
      'Cutting-edge artificial intelligence and machine learning solutions'
    icon: <FaBrain className='w-8 h-8' />
    color: 'from-purple-500 to-pink-500'
  },  {
    id: 'cloud'
    name: 'Cloud & DevOps'
    description: 'Scalable cloud infrastructure and development operations'
    icon: <FaCloud className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
  },  {
    id: 'security'
    name: 'Cybersecurity'
    description: 'Advanced security solutions for modern threats'
    icon: <FaShieldAlt className='w-8 h-8' />
    color: 'from-red-500 to-orange-500'
  },  {
    id: 'data'
    name: 'Data & Analytics'
    description: 'Comprehensive data management and analytics platforms'
    icon: <FaDatabase className='w-8 h-8' />
    color: 'from-green-500 to-emerald-500'
  },  {
    id: 'iot'
    name: 'IoT & Edge Computing'
    description: 'Internet of Things and edge computing solutions'
    icon: <FaNetworkWired className='w-8 h-8' />
    color: 'from-indigo-500 to-purple-500'
  },  {
    id: 'automation'
    name: 'Process Automation'
    description: 'Intelligent automation for business processes'
    icon: <FaRobot className='w-8 h-8' />
    color: 'from-yellow-500 to-orange-500'
  },];    description: 'Cutting-edge artificial intelligence and machine learning solutions'
    icon: <FaBrain className="w-8 h-8" />
    color: 'from-purple-500 to-pink-500'
  }
    id: 'cloud'
    name: 'Cloud & DevOps'
    description: 'Scalable cloud infrastructure and development operations'
    icon: <FaCloud className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
  },    icon: <FaCloud className="w-8 h-8" />
    color: 'from-blue-500 to-cyan-500'
  }
  {
    id: 'security'
    name: 'Cybersecurity'
    description: 'Advanced security solutions for modern threats'
    icon: <FaShieldAlt className='w-8 h-8' />
    color: 'from-red-500 to-orange-500'
  },    icon: <FaShieldAlt className="w-8 h-8" />
    color: 'from-red-500 to-orange-500'
  }
  {
    id: 'data'
    name: 'Data & Analytics'
    description: 'Comprehensive data management and analytics platforms'
    icon: <FaDatabase className='w-8 h-8' />
    color: 'from-green-500 to-emerald-500'
  },    icon: <FaDatabase className="w-8 h-8" />
    color: 'from-green-500 to-emerald-500'
  }
  {
    id: 'iot'
    name: 'IoT & Edge Computing'
    description: 'Internet of Things and edge computing solutions'
    icon: <FaNetworkWired className='w-8 h-8' />
    color: 'from-indigo-500 to-purple-500'
  },    icon: <FaNetworkWired className="w-8 h-8" />
    color: 'from-indigo-500 to-purple-500'
  }
  {
    id: 'automation'
    name: 'Process Automation'
    description: 'Intelligent automation for business processes'
    icon: <FaRobot className='w-8 h-8' />
    color: 'from-yellow-500 to-orange-500'
  },    icon: <FaRobot className="w-8 h-8" />
=======

const serviceCategories: ServiceCategory[] = [
=======
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string;
}
const service_categories: ServiceCategory[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    id: 'ai - ml',
    name: 'AI & Machine Learning',

    description:;
      'Cutting - edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className='w - 8 h - 8' />,
    color: 'from - purple - 500 to - pink - 500',
  },  {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className='w - 8 h - 8' />,
    color: 'from - blue - 500 to - cyan - 500',
  },  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
    icon: <FaShieldAlt className='w - 8 h - 8' />,
    color: 'from - red - 500 to - orange - 500',
  },  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
    icon: <FaDatabase className='w - 8 h - 8' />,
    color: 'from - green - 500 to - emerald - 500',
  },  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: <FaNetworkWired className='w - 8 h - 8' />,
    color: 'from - indigo - 500 to - purple - 500',
  },  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
    icon: <FaRobot className='w - 8 h - 8' />,
    color: 'from - yellow - 500 to - orange - 500',
  }, ];    description: 'Cutting - edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className="w - 8 h - 8" />,
    color: 'from - purple - 500 to - pink - 500';
  }
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className='w - 8 h - 8' />,
    color: 'from - blue - 500 to - cyan - 500',
  },    icon: <FaCloud className="w - 8 h - 8" />,
    color: 'from - blue - 500 to - cyan - 500';
  }

  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',

    icon: <FaShieldAlt className='w - 8 h - 8' />,
    color: 'from - red - 500 to - orange - 500',
  },    icon: <FaShieldAlt className="w - 8 h - 8" />,
    color: 'from - red - 500 to - orange - 500';
  }

  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',

    icon: <FaDatabase className='w - 8 h - 8' />,
    color: 'from - green - 500 to - emerald - 500',
  },    icon: <FaDatabase className="w - 8 h - 8" />,
    color: 'from - green - 500 to - emerald - 500';
  }

  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',

    icon: <FaNetworkWired className='w - 8 h - 8' />,
    color: 'from - indigo - 500 to - purple - 500',
  },    icon: <FaNetworkWired className="w - 8 h - 8" />,
    color: 'from - indigo - 500 to - purple - 500';
  }

  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',

  icon: React && React.ReactNode;
  color: string;  id: string,;
  name: string,;
  description: string,;
  icon: React && React.ReactNode,;
  color: string;
}
const serviceCategories: ServiceCategory[] = [;
  {;
    id: 'ai-ml',;
    name: 'AI & Machine Learning',;
    description:;
      'Cutting-edge artificial intelligence and machine learning solutions',;
    icon: <FaBrain className='w-8 h-8' />,;
    color: 'from-purple-500 to-pink-500',;
  },  {;
    id: 'cloud',;
    name: 'Cloud & DevOps',;
    description: 'Scalable cloud infrastructure and development operations',;
    icon: <FaCloud className='w-8 h-8' />,;
    color: 'from-blue-500 to-cyan-500',;
  },  {;
    id: 'security',;
    name: 'Cybersecurity',;
    description: 'Advanced security solutions for modern threats',;
    icon: <FaShieldAlt className='w-8 h-8' />,;
    color: 'from-red-500 to-orange-500',;
  },  {;
    id: 'data',;
    name: 'Data & Analytics',;
    description: 'Comprehensive data management and analytics platforms',;
    icon: <FaDatabase className='w-8 h-8' />,;
    color: 'from-green-500 to-emerald-500',;
  },  {;
    id: 'iot',;
    name: 'IoT & Edge Computing',;
    description: 'Internet of Things and edge computing solutions',;
    icon: <FaNetworkWired className='w-8 h-8' />,;
    color: 'from-indigo-500 to-purple-500',;
  },  {;
    id: 'automation',;
    name: 'Process Automation',;
    description: 'Intelligent automation for business processes',;
    icon: <FaRobot className='w-8 h-8' />,;
    color: 'from-yellow-500 to-orange-500',;
  },];    description: 'Cutting-edge artificial intelligence and machine learning solutions',;
    icon: <FaBrain className="w-8 h-8" />,;
    color: 'from-purple-500 to-pink-500';
  };
    id: 'cloud',;
    name: 'Cloud & DevOps',;
    description: 'Scalable cloud infrastructure and development operations',;
    icon: <FaCloud className='w-8 h-8' />,;
    color: 'from-blue-500 to-cyan-500',;
  },    icon: <FaCloud className="w-8 h-8" />,;
    color: 'from-blue-500 to-cyan-500';
  };
  {;
    id: 'security',;
    name: 'Cybersecurity',;
    description: 'Advanced security solutions for modern threats',;
    icon: <FaShieldAlt className='w-8 h-8' />,;
    color: 'from-red-500 to-orange-500',;
  },    icon: <FaShieldAlt className="w-8 h-8" />,;
    color: 'from-red-500 to-orange-500';
  };
  {;
    id: 'data',;
    name: 'Data & Analytics',;
    description: 'Comprehensive data management and analytics platforms',;
    icon: <FaDatabase className='w-8 h-8' />,;
    color: 'from-green-500 to-emerald-500',;
  },    icon: <FaDatabase className="w-8 h-8" />,;
    color: 'from-green-500 to-emerald-500';
  };
  {;
    id: 'iot',;
    name: 'IoT & Edge Computing',;
    description: 'Internet of Things and edge computing solutions',;
    icon: <FaNetworkWired className='w-8 h-8' />,;
    color: 'from-indigo-500 to-purple-500',;
  },    icon: <FaNetworkWired className="w-8 h-8" />,;
    color: 'from-indigo-500 to-purple-500';
  };
  {;
    id: 'automation',;
    name: 'Process Automation',;
    description: 'Intelligent automation for business processes',;
    icon: <FaRobot className='w-8 h-8' />,;
    color: 'from-yellow-500 to-orange-500',;
  },    icon: <FaRobot className="w-8 h-8" />,;
    color: 'from-yellow-500 to-orange-500';
  }
<<<<<<< HEAD
=======
    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className="w-6 h-6" />,
    category: 'automation',
    features: [
      'Intelligent workflow automationNatural language processingPredictive analyticsReal-time decision makingCustom AI model trainingMulti-platform integration'
    ];
=======
    icon: <FaRobot className='w - 8 h - 8' />,
    color: 'from - yellow - 500 to - orange - 500',
  },    icon: <FaRobot className="w - 8 h - 8" />,
    color: 'from - yellow - 500 to - orange - 500';
  }
];
;
const services: Service[] = [;
  {
    id: 'ai - automation - suite',
    title: 'AI - Powered Automation Suite',
    description:;
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className='w - 6 h - 6' />,
    features: [;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Intelligent workflow automation',
      'Natural language processing',
      'Predictive analytics',
      'Real-time decision making',
      'Custom AI model training',
<<<<<<< HEAD
<<<<<<< HEAD
      'Multi-platform integration',
=======
      'Multi - platform integration',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'Multi - platform integration',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ],
    pricing: {
      starter: 299,
      professional: 799,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      enterprise: 1999
    
    },

    technologies: [;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      enterprise: 1999,
    },
    technologies: [
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'LangChain',
      'React',
      'Node.js',
    ],
    benefits: [
      'Reduce manual tasks by 80%',
      'Improve accuracy by 95%',
      '24/7 automated operations',
      'Scalable AI infrastructure',
    ],
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
=======

  {
<<<<<<< HEAD
    id: 'quantum - computing - platform',
    title: 'Quantum Computing Platform',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    description:;
      'Next - generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className='w - 6 h - 6' />,
    category: 'ai - ml',
    features: [;
      'Quantum algorithm optimization',
      'Hybrid classical - quantum computing',
=======

  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description:
      'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className='w-6 h-6' />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimization',
      'Hybrid classical-quantum computing',
      'Quantum machine learning',
      'Cryptographic solutions',
      'Quantum simulation tools',
      'API access to quantum hardware',
    ],
<<<<<<< HEAD
<<<<<<< HEAD
    pricing: {
      starter: 999,
      professional: 2499,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    pricing: {
      starter: 999,
      professional: 2499,
      enterprise: 4999
    
    },

    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],
    benefits: [;
      'Solve previously impossible problems',
      'Exponential speed improvements',
      'Future - proof technology',
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      enterprise: 4999,
    },
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],
    benefits: [
      'Solve previously impossible problems',
      'Exponential speed improvements',
      'Future-proof technology',
      'Research and development support',
    ],
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
=======

  {
<<<<<<< HEAD
    id: 'edge - ai - platform',
    title: 'Edge AI Computing Platform',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    description:;
      'Distributed artificial intelligence at the edge for real - time processing',
    icon: <FaNetworkWired className='w - 6 h - 6' />,
    category: 'iot',
    features: [;
      'Edge device optimization',
      'Real - time AI inference',
      'Distributed learning',
      'Low - latency processing',
      'Offline AI capabilities',
      'Edge - to - cloud synchronization',
<<<<<<< HEAD
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description:
      'Distributed artificial intelligence at the edge for real-time processing',
    icon: <FaNetworkWired className='w-6 h-6' />,
    category: 'iot',
    features: [
      'Edge device optimization',
      'Real-time AI inference',
      'Distributed learning',
      'Low-latency processing',
      'Offline AI capabilities',
      'Edge-to-cloud synchronization',
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499,
    },
    technologies: [
=======
    ],

    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499
    
    },

    technologies: [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'TensorFlow Lite',
      'ONNX Runtime',
      'Edge TPU',
      'Raspberry Pi',
      'Arduino',
    ],
=======

  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    benefits: [
      'Reduced latency by 90%',
      'Lower bandwidth costs',
      'Enhanced privacy',
      'Scalable edge deployment',
    ],
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
=======

  {
<<<<<<< HEAD
    id: 'quantum - cybersecurity',
    title: 'Quantum Cybersecurity Suite',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    description:;
      'Advanced security solutions leveraging quantum - resistant cryptography',
    icon: <FaShieldAlt className='w - 6 h - 6' />,
    category: 'security',
    features: [;
      'Post - quantum cryptography',
      'Quantum key distribution',
      'Advanced threat detection',
      'Zero - trust architecture',
      'Compliance frameworks',
      'Real - time monitoring',
=======

  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description:
      'Advanced security solutions leveraging quantum-resistant cryptography',
    icon: <FaShieldAlt className='w-6 h-6' />,
    category: 'security',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Advanced threat detection',
      'Zero-trust architecture',
      'Compliance frameworks',
      'Real-time monitoring',
    ],
<<<<<<< HEAD
<<<<<<< HEAD
    pricing: {
      starter: 399,
      professional: 999,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    pricing: {
      starter: 399,
      professional: 999,
      enterprise: 2499
    
    },

    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
    benefits: [;
      'Future - proof security',
      'Quantum - resistant encryption',
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      enterprise: 2499,
    },
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
    benefits: [
      'Future-proof security',
      'Quantum-resistant encryption',
      'Comprehensive compliance',
      'Advanced threat protection',
    ],
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
=======

  {
<<<<<<< HEAD
    id: 'data - fabric - platform',
    title: 'Intelligent Data Fabric Platform',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    description:;
      'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className='w - 6 h - 6' />,
    category: 'data',
    features: [;
      'Unified data access',
      'Real - time analytics',
      'Data governance',
      'AI - powered insights',
      'Multi - cloud support',
=======

  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'data-fabric-platform',
    title: 'Intelligent Data Fabric Platform',
    description:
      'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className='w-6 h-6' />,
    category: 'data',
    features: [
      'Unified data access',
      'Real-time analytics',
      'Data governance',
      'AI-powered insights',
      'Multi-cloud support',
      'Data lineage tracking',
    ],
<<<<<<< HEAD
<<<<<<< HEAD
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
    },
    technologies: [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    
    },

    technologies: [;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Apache Kafka',
      'Apache Spark',
      'Snowflake',
      'Databricks',
      'Airflow',
    ],
    benefits: [
      'Unified data view',
      'Real-time insights',
      'Improved data quality',
      'Reduced integration costs',
    ],
  },  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',

    id: 'cloud - native - platform',
    title: 'Cloud - Native Development Platform',
    description: 'Modern cloud - native development and deployment platform',
    icon: <FaCloud className='w - 6 h - 6' />,
    features: [;
      'Kubernetes orchestration',
      'Microservices architecture',
      'CI / CD pipelines',
      'Auto - scaling',
      'Multi - cloud deployment',
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
    icon: <FaCloud className='w-6 h-6' />,

  {
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'cloud - native - platform',
    title: 'Cloud - Native Development Platform',
    description: 'Modern cloud - native development and deployment platform',
    icon: <FaCloud className='w - 6 h - 6' />,      'Unified data view_real - time insights_improved data quality_reduced integration costs';
    ];
<<<<<<< HEAD
  }
  {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
    icon: <FaCloud className='w-6 h-6' />,

  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
  }
  {

  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',

<<<<<<< HEAD
<<<<<<< HEAD
    icon: <FaCloud className='w-6 h-6' />,
    features: [
      'Kubernetes orchestration',
      'Microservices architecture',
      'CI/CD pipelines',
      'Auto-scaling',
      'Multi-cloud deployment',
      'DevOps automation',
    ],
    pricing: {
      starter: 199,
      professional: 599,
      enterprise: 1499,
    },
    technologies: [
      'Kubernetes',
      'Docker',
      'Helm',
      'ArgoCD',
      'Prometheus',
      'Grafana',
    ],
    benefits: [
      'Faster deployment',
      'Improved scalability',
      'Better resource utilization',
      'Enhanced reliability',
    ],
    }    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => service && service.category === selectedCategory);
    
    if (selectedCategory !== 'all') {
  const filteredServices = useMemo(() => {;
    let filtered = services;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
const services: Service[] = [;
  {;
    id: 'ai-automation-suite',;
    title: 'AI-Powered Automation Suite',;
    description:;
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',;
    icon: <FaRobot className='w-6 h-6' />,;
    features: [;
      'Intelligent workflow automation',;
      'Natural language processing',;
      'Predictive analytics',;
      'Real-time decision making',;
      'Custom AI model training',;
      'Multi-platform integration',;
    ],;
    pricing: {;
      starter: 299,;
      professional: 799,;
      enterprise: 1999,;
    },;
    technologies: [;
      'TensorFlow',;
      'PyTorch',;
      'OpenAI',;
      'LangChain',;
      'React',;
      'Node && Node.js',;
    ],;
    benefits: [;
      'Reduce manual tasks by 80%',;
      'Improve accuracy by 95%',;
      '24/7 automated operations',;
      'Scalable AI infrastructure',;
    ],;
  },;
  {;
    id: 'quantum-computing-platform',;
    title: 'Quantum Computing Platform',;
    description:;
      'Next-generation quantum computing solutions for complex problem solving',;
    icon: <FaBrain className='w-6 h-6' />,;
    category: 'ai-ml',;
    features: [;
      'Quantum algorithm optimization',;
      'Hybrid classical-quantum computing',;
      'Quantum machine learning',;
      'Cryptographic solutions',;
      'Quantum simulation tools',;
      'API access to quantum hardware',;
    ],;
    pricing: {;
      starter: 999,;
      professional: 2499,;
      enterprise: 4999,;
    },;
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],;
    benefits: [;
      'Solve previously impossible problems',;
      'Exponential speed improvements',;
      'Future-proof technology',;
      'Research and development support',;
    ],;
  },;
  {;
    id: 'edge-ai-platform',;
    title: 'Edge AI Computing Platform',;
    description:;
      'Distributed artificial intelligence at the edge for real-time processing',;
    icon: <FaNetworkWired className='w-6 h-6' />,;
    category: 'iot',;
    features: [;
      'Edge device optimization',;
      'Real-time AI inference',;
      'Distributed learning',;
      'Low-latency processing',;
      'Offline AI capabilities',;
      'Edge-to-cloud synchronization',;
    ],;
    pricing: {;
      starter: 199,;
      professional: 599,;
      enterprise: 1499,;
    },;
    technologies: [;
      'TensorFlow Lite',;
      'ONNX Runtime',;
      'Edge TPU',;
      'Raspberry Pi',;
      'Arduino',;
    ],;
    benefits: [;
      'Reduced latency by 90%',;
      'Lower bandwidth costs',;
      'Enhanced privacy',;
      'Scalable edge deployment',;
    ],;
  },;
  {;
    id: 'quantum-cybersecurity',;
    title: 'Quantum Cybersecurity Suite',;
    description:;
      'Advanced security solutions leveraging quantum-resistant cryptography',;
    icon: <FaShieldAlt className='w-6 h-6' />,;
    category: 'security',;
    features: [;
      'Post-quantum cryptography',;
      'Quantum key distribution',;
      'Advanced threat detection',;
      'Zero-trust architecture',;
      'Compliance frameworks',;
      'Real-time monitoring',;
    ],;
    pricing: {;
      starter: 399,;
      professional: 999,;
      enterprise: 2499,;
    },;
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],;
    benefits: [;
      'Future-proof security',;
      'Quantum-resistant encryption',;
      'Comprehensive compliance',;
      'Advanced threat protection',;
    ],;
  },;
  {;
    id: 'data-fabric-platform',;
    title: 'Intelligent Data Fabric Platform',;
    description:;
      'Unified data management and analytics across all sources and formats',;
    icon: <FaDatabase className='w-6 h-6' />,;
    category: 'data',;
    features: [;
      'Unified data access',;
      'Real-time analytics',;
      'Data governance',;
      'AI-powered insights',;
      'Multi-cloud support',;
      'Data lineage tracking',;
    ],;
    pricing: {;
      starter: 299,;
      professional: 799,;
      enterprise: 1999,;
    },;
    technologies: [;
      'Apache Kafka',;
      'Apache Spark',;
      'Snowflake',;
      'Databricks',;
      'Airflow',;
    ],;
    benefits: [;
      'Unified data view',;
      'Real-time insights',;
      'Improved data quality',;
      'Reduced integration costs',;
    ],;
  },  {;
    id: 'cloud-native-platform',;
    title: 'Cloud-Native Development Platform',;
    description: 'Modern cloud-native development and deployment platform',;
    icon: <FaCloud className='w-6 h-6' />,      'Unified data viewReal-time insightsImproved data qualityReduced integration costs';
    ];
  };
  {;
    id: 'cloud-native-platform',;
    title: 'Cloud-Native Development Platform',;
    description: 'Modern cloud-native development and deployment platform',;
    icon: <FaCloud className='w-6 h-6' />,;
    features: [;
      'Kubernetes orchestration',;
      'Microservices architecture',;
      'CI/CD pipelines',;
      'Auto-scaling',;
      'Multi-cloud deployment',;
      'DevOps automation',;
    ],;
    pricing: {;
      starter: 199,;
      professional: 599,;
      enterprise: 1499,;
    },;
    technologies: [;
      'Kubernetes',;
      'Docker',;
      'Helm',;
      'ArgoCD',;
      'Prometheus',;
      'Grafana',;
    ],;
    benefits: [;
      'Faster deployment',;
      'Improved scalability',;
      'Better resource utilization',;
      'Enhanced reliability',;
    ],;
  },];      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability';
    ];
  }
<<<<<<< HEAD
];


  const filteredServices = useMemo(() => {;
    let filtered = services;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        service =>;
          service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.technologies.some(tech =>;
            tech && tech.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
          );
<<<<<<< HEAD
      );
    }    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => service && service.category === selectedCategory);
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
  },];      'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability'
    ]
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

];
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const filteredServices = useMemo(() => {
    let filtered = services;
    if (selectedCategory !== 'all') {
<<<<<<< HEAD
      filtered = filtered.filter(
        service => service.category === selectedCategory
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(
        service =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.technologies.some(tech =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }    if (selectedCategory !== 'all') {
=======

      );
    }    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => service && service.category === selectedCategory);
=======
    
    if (selectedCategory !== 'all') {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    
    if (searchTerm) {
<<<<<<< HEAD
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    if (searchTerm) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
    
    if (searchTerm) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

<<<<<<< HEAD
<<<<<<< HEAD
    

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);
<<<<<<< HEAD




=======
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (searchTerm) {;
      filtered = filtered && filtered.filter(service => ;
        service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.technologies.some(tech => tech && tech.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
      );
    }
    return filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return a && a.pricing.starter - b && b.pricing.starter;
        case 'category':;
          return a && a.category.localeCompare(b && b.category);
        default:;
          return a && a.title.localeCompare(b && b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);
  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>;
      {/* Header */}
      <div className='container mx-auto px-4 py-16'>        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'      }
    })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [selectedCategory, searchTerm, sortBy])
  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-16">;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [selected_service, setSelectedService] = useState < Service | null>(null);
  const [search_term, setSearchTerm] = useState ('');
  const [sort_by, setSortBy] = useState<'name' | 'price' | 'category'>('name');
;
  const filtered_services = useMemo (() => {
    let filtered = services;
;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service => service.category === selected_category);
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service =>;
          service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.technologies.some (tech =>;
            tech.toLowerCase ().includes (search_term.toLowerCase ())));
    }    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => service.category === selected_category);
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service =>;
        service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.technologies.some (tech => tech.toLowerCase ().includes (search_term.toLowerCase ())));
    }
    return filtered.sort ((a, b) => {
      switch (sort_by) {
        case 'price':;
          return a.pricing.starter - b.pricing.starter;
        case 'category':;
          return a.category.locale_compare (b.category);
        default:;
          return a.title.locale_compare (b.title);
      }
    });
  }, [selected_category, search_term, sort_by]);
;
  const handleServiceSelect = (service: Service) =>: any {
    setSelectedService (service);
  }
;
  const close_modal = () =>: any {
    setSelectedService (null);
  }
;
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - purple - 900 text - white'>;
      {/* Header */}
      <div className='container mx - auto px - 4 py - 16'>        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
          className='text - center mb - 16'      }
    });
  }, [selected_category, search_term, sort_by]);
;
  const handleServiceSelect = (service: Service) =>: any {
    setSelectedService (service);
  }
;
  const close_modal = () =>: any {
    setSelectedService (null);
  }
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            2025 Services Showcase
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our cutting-edge technology solutions designed for the
            future. From AI-powered automation to quantum computing, we're
            building tomorrow's innovations today.          </p>        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future.
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
          </p>
        </motion.div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - purple - 900 text - white">;
      {/* Header */}
      <div className="container mx - auto px - 4 py - 16">;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'>;
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
            2025 Services Showcase;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Discover our cutting-edge technology solutions designed for the;
            future. From AI-powered automation to quantum computing, we're;
            building tomorrow's innovations today.          </p>        >;
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
            2025 Services Showcase;
          </h1>;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Discover our cutting-edge technology solutions designed for the future. ;
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.;
          </p>;
        </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

=======
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-12'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative flex-1 max-w-md'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type='text'
                placeholder='Search services, technologies, or features...'
                value={searchTerm}

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
              />;
              <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <select
              value={sortBy}
              onChange={e =>;
                setSortBy(e && e.target.value as 'name' | 'price' | 'category');
              }
<<<<<<< HEAD

<<<<<<< HEAD
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className='text - center mb - 16';
        >;
          <h1 className='text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
            2025 Services Showcase;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Discover our cutting - edge technology solutions designed for the;
            future. From AI - powered automation to quantum computing, we're;
            building tomorrow's innovations today.          </p>        >;
          <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
            2025 Services Showcase;
          </h1>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Discover our cutting - edge technology solutions designed for the future.;
            From AI - powered automation to quantum computing, we're building tomorrow's innovations today.;
          </p>;
        </motion.div>;
        {/* Search and Filters */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb - 12';
        >;
          <div className='flex flex - col md:flex - row gap - 4 items - center justify - center'>;
            <div className='relative flex - 1 max - w-md'>;
              <input;
                type='text';
                placeholder='Search services, technologies, or features...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent';
              />;
              <FaSearch className='absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400' />;
            </div>;
            <select;
              value={sort_by}
              on_change={e =>;
                setSortBy (e.target.value as 'name' | 'price' | 'category');
              }
              className='px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - blue - 500';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <option value='name'>Sort by Name</option>;
              <option value='price'>Sort by Price</option>;
              <option value='category'>Sort by Category</option>            </select>        >;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
              <option value='category'>Sort by Category</option>            </select>        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </motion.div>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setSearchTerm(e && e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e && e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500";
          <div className="flex flex - col md:flex - row gap - 4 items - center justify - center">;
            <div className="relative flex - 1 max - w-md">;
              <input;
                type="text";
                placeholder="Search services, technologies, or features...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
              />;
              <FaSearch className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400" />;
            </div>;
            <select;
              value={sort_by}
              on_change={(e) => setSortBy (e.target.value as 'name' | 'price' | 'category')}
              className="px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - blue - 500";
            >;
              <option value="name">Sort by Name</option>;
              <option value="price">Sort by Price</option>;
              <option value="category">Sort by Category</option>;
            </select>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <option value='category'>Sort by Category</option>            </select>

            </select>

          </div>
        </motion.div>



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Category Tabs */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}


            <button





<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${;
                selectedCategory === 'all';
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg';
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
              }`}


              <button





                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
<<<<<<< HEAD
<<<<<<< HEAD
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category && category.id}
                onClick={() => setSelectedCategory(category && category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category && category.id;
                    ? `bg-gradient-to-r ${category && category.color} text-white shadow-lg`;
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                }`}
              >;
                {category && category.icon}
                {category && category.name}
              </button>;
            ))}
<<<<<<< HEAD
=======
          </div>
        </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </motion && motion.div>;


<<<<<<< HEAD



<<<<<<< HEAD
          </div>;
        </motion && motion.div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

=======
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={() => handleServiceSelect(service)}
            >;
              <div className='flex items-center gap-3 mb-4'>;
                <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>;
                  {service && service.icon}
                </div>;
                <div>;
                  <h3 className='text-xl font-bold text-white'>;
                    {service && service.title}
                  </h3>;
                  <p className='text-sm text-gray-400'>;
                    {;
                      serviceCategories && serviceCategories.find(c => c && c.id === service && service.category);
                        ?.name;
                    }

          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
        </motion.div>;
        {/* Category Tabs */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb - 12';
        >;
          <div className='flex flex - wrap justify - center gap - 4'>            <button          className="mb - 12";
        >;
          <div className="flex flex - wrap justify - center gap - 4">;
            <button;
              on_click={() => setSelectedCategory ('all')}
              className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 ${
                selected_category === 'all';
                  ? 'bg - gradient - to - r from - blue - 500 to - purple - 500 text - white shadow - lg';
                  : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
              }`}
            >;
              All Services;
            </button>;
            {service_categories.map (category => (              <button            {service_categories.map ((category) => (
              <button;
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? `bg - gradient - to - r ${category.color} text - white shadow - lg`;
                    : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
                }`}
              >;
                {category.icon}
                {category.name}
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          {filtered_services.map ((service, index) => (
            <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  </p>;
                </div>;
              </div>;
              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  </p>;
                </div>;
              </div>;

              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex flex-wrap gap-2 mb-4'>;
                {service && service.technologies.slice(0, 3).map(tech => (;
                  <span
                    key={tech}
<<<<<<< HEAD
<<<<<<< HEAD
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>;
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
    
    return filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter,
        case 'category':
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
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {
    setSelectedService(null);
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>
      {/* Header */}
      <div className='container mx-auto px-4 py-16'>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'      }
    })
  }, [selectedCategory, searchTerm, sortBy]);
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  }
  const closeModal = () => {
    setSelectedService(null)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            2025 Services Showcase
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our cutting-edge technology solutions designed for the
            future. From AI-powered automation to quantum computing, we're
            building tomorrow's innovations today.          </p>        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future.
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-12'

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search services, technologies, or features...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
            <select
              value={sortBy}
              onChange={e =>
                setSortBy(e.target.value as 'name' | 'price' | 'category')
              }
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
              <option value='category'>Sort by Category</option>            </select>        >
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
            </select>
          </div>
        </motion.div>
              <option value='category'>Sort by Category</option>            </select>

            </select>

          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-4'>            <button          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
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
            {serviceCategories.map(category => (              <button            {serviceCategories.map((category) => (
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
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >

        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'

              onClick={() => handleServiceSelect(service)}
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>
                  {service.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-gray-400'>
                    {
                      serviceCategories.find(c => c.id === service.category)
                        ?.name
                    }
                  </p>
                </div>
              </div>
              <p className='text-gray-300 mb-4 line-clamp-3'>
                {service.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {service.technologies.slice(0, 3).map(tech => (
                  <span
                    key={tech}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'                  >              onClick={() => handleServiceSelect(service)}
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
                  >
                    className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'                  >

                  >

<<<<<<< HEAD
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'>                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {tech}
                  </span>
                ))}

                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>
                  ${service.pricing.starter}
                  <span className='text-sm text-gray-400 font-normal'>
                    /month
                  </span>
                </div>
                <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>                  Learn More                  ${service.pricing.starter}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.starter}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

              </div>;

<<<<<<< HEAD
<<<<<<< HEAD
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex items-center justify-between'>;
                <div className='text-2xl font-bold text-blue-400'>                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">;
                    +{service && service.technologies.length - 3} more;
                  </span>;
                )}
              </div>;
              <div className='flex items-center justify-between'>;
                <div className='text-2xl font-bold text-blue-400'>;
                  ${service && service.pricing.starter}
                  <span className='text-sm text-gray-400 font-normal'>;
                    /month;
                  </span>;
                </div>;
                <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>                  Learn More                  ${service && service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>;
                </div>;
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">;
                  Learn More;
                </button>;
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD





=======
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD


        )}

      </div>;


      </div>


            className="text-center py-16"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center py-16'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>
              No services found
            </h3>
            <p className='text-gray-400'>
              Try adjusting your search terms or category filters
            </p>          </motion.div>            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
<<<<<<< HEAD
          </motion.div>
        )}

          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'>;
                  <span className='text-2xl'>×</span>;
                </button>;
              </div>;
              <p className='text-gray-300 text-lg mb-8'>;
                {selectedService && selectedService.description}
              </p>;
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
                {/* Features */}
                <div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    Key Features;
                  </h3>;
                  <ul className='space-y-2'>;
                    {selectedService && selectedService.features.map((feature, index) => (;
                      <li
                        key={index}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
=======
        )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
            </p>          </motion.div>

          </motion.div>

        )}
      </div>

<<<<<<< HEAD
      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}

            onClick={closeModal}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}

      </div>;


=======
      </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'

              onClick={e => e.stopPropagation()}




<<<<<<< HEAD
<<<<<<< HEAD
              onClick={e => e.stopPropagation()}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl'>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className='text-3xl font-bold text-white mb-2'>
                      {selectedService.title}
                    </h2>
                    <p className='text-gray-400'>
                      {
                        serviceCategories.find(
                          c => c.id === selectedService.category
                        )?.name
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      }
                    </p>                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
<<<<<<< HEAD

                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'>;
                  <span className='text-2xl'>×</span>;
                </button>;
              </div>;

              <p className='text-gray-300 text-lg mb-8'>;
                {selectedService && selectedService.description}
              </p>;

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;

<<<<<<< HEAD
className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'
                >
                  <span className='text-2xl'>×</span>
                </button>
              </div>
              <p className='text-gray-300 text-lg mb-8'>
                {selectedService.description}
              </p>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Features */}
                <div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    Key Features
                  </h3>
                  <ul className='space-y-2'>
                    {selectedService.features.map((feature, index) => (
                      <li
                        key={index}
<<<<<<< HEAD
<<<<<<< HEAD
                        className='flex items-center gap-2 text-gray-300'
                      >
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>                        {feature}                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        className='flex items-center gap-2 text-gray-300'>;
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>                        {feature}                >;
                  <span className="text-2xl">×</span>;
                </button>;
              </div>;
              <p className="text-gray-300 text-lg mb-8">{selectedService && selectedService.description}</p>;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
=======


                        {feature}
<<<<<<< HEAD
                      </li>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                        {feature}


<<<<<<< HEAD
<<<<<<< HEAD
                      </li>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </li>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    ))}

                  </ul>;
                </div>;


<<<<<<< HEAD



=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Benefits */}


                    ))}
<<<<<<< HEAD
                  </ul>;
                </div>;

                        {feature}

                      </li>
=======
                        {feature}


                      </li>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </li>
=======
                  </ul>;
                </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Benefits */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
=======
                  </ul>;
                </div>;
              </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Technologies */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Technologies
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {selectedService.technologies.map(tech => (
                    <span
                      key={tech}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  </ul>;
                </div>;
              </div>;


<<<<<<< HEAD



              {/* Technologies */}


=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Technologies */}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >

                    >


<<<<<<< HEAD
                      {tech}
                    </span>;
                  ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >

                    >

<<<<<<< HEAD
                      {tech}
                    </span>
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {tech}
                    </span>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}
                </div>
              </div>

<<<<<<< HEAD
=======
                </div>;
              </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Pricing */}
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
                  )}                </div>                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {tech}
                    </span>;
                  ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                </div>;
              </div>;





              {/* Pricing */}


<<<<<<< HEAD

                </div>


                </div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>;
<<<<<<< HEAD
<<<<<<< HEAD
</AnimatePresence>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );

};
export default EnhancedServicesShowcase2025;  );
  )
};
<<<<<<< HEAD
export default EnhancedServicesShowcase2025;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              while_hover={{ coordinate_y: -5, scale: 1.02 }}
              className='bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - xl p - 6 cursor - pointer hover:bg - white / 20 transition - all duration - 300';
              on_click={() => handleServiceSelect (service)}
            >;
              <div className='flex items - center gap - 3 mb - 4'>;
                <div className='p - 3 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg'>;
                  {service.icon}
                </div>;
                <div>;
                  <h3 className='text - xl font - bold text - white'>;
                    {service.title}
                  </h3>;
                  <p className='text - sm text - gray - 400'>;
                    {
                      service_categories.find (c => c.id === service.category);
                        ?.name;
                    }
                  </p>;
                </div>;
              </div>;
              <p className='text - gray - 300 mb - 4 line - clamp - 3'>;
                {service.description}
              </p>;
              <div className='flex flex - wrap gap - 2 mb - 4'>;
                {service.technologies.slice (0, 3).map (tech => (
                  <span;
                    key={tech}
                    className='px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300'                  >              on_click={() => handleServiceSelect (service)}
            >;
              <div className="flex items - center gap - 3 mb - 4">;
                <div className="p - 3 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg">;
                  {service.icon}
                </div>;
                <div>;
                  <h3 className="text - xl font - bold text - white">{service.title}</h3>;
                  <p className="text - sm text - gray - 400">{service_categories.find (c => c.id === service.category)?.name}</p>;
                </div>;
              </div>;
              <p className="text - gray - 300 mb - 4 line - clamp - 3">{service.description}</p>;
              <div className="flex flex - wrap gap - 2 mb - 4">;
                {service.technologies.slice (0, 3).map ((tech) => (
                  <span;
                    key={tech}
                    className="px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300";
                  >;
                    {tech}
                  </span>))}
                {service.technologies.length > 3 && (
                  <span className='px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300'>                    +{service.technologies.length - 3} more;
                  </span>)}
              </div>;
              <div className='flex items - center justify - between'>;
                <div className='text - 2xl font - bold text - blue - 400'>                  <span className="px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300">;
                    +{service.technologies.length - 3} more;
                  </span>)}
              </div>;
              <div className='flex items - center justify - between'>;
                <div className='text - 2xl font - bold text - blue - 400'>;
                  ${service.pricing.starter}
                  <span className='text - sm text - gray - 400 font - normal'>;
                    /month;
                  </span>;
                </div>;
                <button className='px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 300'>                  Learn More                  ${service.pricing.starter}
                  <span className="text - sm text - gray - 400 font - normal">/month</span>;
                </div>;
                <button className="px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 300">;
                  Learn More;
                </button>;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* No Results */}
        {filtered_services.length === 0 && (
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text - center py - 16';
          >;
            <div className='text - 6xl mb - 4'>🔍</div>;
            <h3 className='text - 2xl font - bold text - gray - 300 mb - 2'>;
              No services found;
            </h3>;
            <p className='text - gray - 400'>;
              Try adjusting your search terms or category filters;
            </p>          </motion.div>            className="text - center py - 16";
          >;
            <div className="text - 6xl mb - 4">🔍</div>;
            <h3 className="text - 2xl font - bold text - gray - 300 mb - 2">No services found</h3>;
            <p className="text - gray - 400">Try adjusting your search terms or category filters</p>)}
      </div>;
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selected_service && (
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 50 flex items - center justify - center p - 4'            on_click={close_modal}            className="fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 50 flex items - center justify - center p - 4";
            on_click={close_modal}
          >;
            <motion.div;
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='bg - gray - 900 border border - white / 20 rounded - 2xl p - 8 max - w-4xl w - full max - h-[90vh] overflow - y-auto';
              on_click={e => e.stop_propagation ()}
            >;
              <div className='flex items - start justify - between mb - 6'>;
                <div className='flex items - center gap - 4'>;
                  <div className='p - 4 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - xl'>;
                    {selected_service.icon}
                  </div>;
                  <div>;
                    <h2 className='text - 3xl font - bold text - white mb - 2'>;
                      {selected_service.title}
                    </h2>;
                    <p className='text - gray - 400'>;
                      {
                        service_categories.find (
                          c => c.id === selected_service.category)?.name;
                      }
                    </p>                  </div>;
                </div>;
                <button;
                  on_click={close_modal}
                  className='p - 2 hover:bg - white / 10 rounded - lg transition - colors'            >;
              <div className="flex items - start justify - between mb - 6">;
                <div className="flex items - center gap - 4">;
                  <div className="p - 4 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - xl">;
                    {selected_service.icon}
                  </div>;
                  <div>;
                    <h2 className="text - 3xl font - bold text - white mb - 2">{selected_service.title}</h2>;
                    <p className="text - gray - 400">{service_categories.find (c => c.id === selected_service.category)?.name}</p>;
                  </div>;
                </div>;
                <button;
                  on_click={close_modal}
                  className='p - 2 hover:bg - white / 10 rounded - lg transition - colors';
                >;
                  <span className='text - 2xl'>×</span>;
                </button>;
              </div>;
              <p className='text - gray - 300 text - lg mb - 8'>;
                {selected_service.description}
              </p>;
              <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
                {/* Features */}
                <div>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    Key Features;
                  </h3>;
                  <ul className='space - y-2'>;
                    {selected_service.features.map ((feature, index) => (
                      <li;
                        key={index}
                        className='flex items - center gap - 2 text - gray - 300';
                      >;
                        <div className='w - 2 h - 2 bg - blue - 500 rounded - full'></div>                        {feature}                >;
                  <span className="text - 2xl">×</span>;
                </button>;
              </div>;
              <p className="text - gray - 300 text - lg mb - 8">{selected_service.description}</p>;
              <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
                {/* Features */}
                <div>;
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>;
                  <ul className="space - y-2">;
                    {selected_service.features.map ((feature, index) => (
                      <li key={index} className="flex items - center gap - 2 text - gray - 300">;
                        <div className="w - 2 h - 2 bg - blue - 500 rounded - full"></div>;
                        {feature}
                      </li>))}
                  </ul>;
                </div>;
                {/* Benefits */}
                <div>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    Key Benefits;
                  </h3>;
                  <ul className='space - y-2'>;
                    {selected_service.benefits.map ((benefit, index) => (
                      <li;
                        key={index}
                        className='flex items - center gap - 2 text - gray - 300';
                      >;
                        <div className='w - 2 h - 2 bg - green - 500 rounded - full'></div>                        {benefit}                  <h3 className="text - xl font - bold text - white mb - 4">Key Benefits</h3>;
                  <ul className="space - y-2">;
                    {selected_service.benefits.map ((benefit, index) => (
                      <li key={index} className="flex items - center gap - 2 text - gray - 300">;
                        <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;
                      </li>))}
                  </ul>;
                </div>;
              </div>;
              {/* Technologies */}
              <div className='mt - 8'>;
                <h3 className='text - xl font - bold text - white mb - 4'>;
                  Technologies;
                </h3>;
                <div className='flex flex - wrap gap - 3'>;
                  {selected_service.technologies.map (tech => (
                    <span;
                      key={tech}
                      className='px - 3 py - 2 bg - white / 10 rounded - lg text - gray - 300'                    >              <div className="mt - 8">;
                <h3 className="text - xl font - bold text - white mb - 4">Technologies</h3>;
                <div className="flex flex - wrap gap - 3">;
                  {selected_service.technologies.map ((tech) => (
                    <span;
                      key={tech}
                      className="px - 3 py - 2 bg - white / 10 rounded - lg text - gray - 300";
                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Pricing */}
              <div className='mt - 8'>;
                <h3 className='text - xl font - bold text - white mb - 4'>;
                  Pricing Plans;
                </h3>;
                <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
                  {Object.entries (selected_service.pricing).map (
                    ([plan, price]) => (
                      <div;
                        key={plan}
                        className='p - 4 bg - white / 5 border border - white / 20 rounded - lg text - center';
                      >;
                        <h4 className='text - lg font - bold text - white capitalize mb - 2'>;
                          {plan}
                        </h4>;
                        <div className='text - 3xl font - bold text - blue - 400 mb - 2'>;
                          ${price}
                          <span className='text - sm text - gray - 400 font - normal'>;
                            /month;
                          </span>;
                        </div>;
                        <button className='w - full px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 300'>;
                          Get Started;
                        </button>;
                      </div>))}                </div>                      <button className="w - full px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover: from - blue - 600 hover:to - purple - 600 transition - all duration - 300">;
                        Get Started;
                      </button>;
                    </div>))}
              </div>;
            </motion.div>;
          </motion.div>)}
      </AnimatePresence>;
    </div>);
}
;
export default EnhancedServicesShowcase2025);
}
;
export default EnhancedServicesShowcase2025;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default EnhancedServicesShowcase2025;

export default EnhancedServicesShowcase2025;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};


<<<<<<< HEAD
<<<<<<< HEAD
      </AnimatePresence>
    </div>
);
}
};

export default EnhancedServicesShowcase2025;  )
}
export default EnhancedServicesShowcase2025;

export default EnhancedServicesShowcase2025;
export default EnhancedServicesShowcase2025;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
