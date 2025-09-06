<<<<<<< HEAD
<<<<<<< HEAD

=======
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
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket;
  FaBrain;
  FaCloud;
  FaShieldAlt;
  FaChartLine;
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch
 } from 'react-icons/fa';
import { SiNextdotjs;
  SiReact;
  SiTypescript;
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
import {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

} from 'react-icons/si';
<<<<<<< HEAD

interface Service {;
} from 'react-icons/si';

interface Service {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  FaRobot,
  FaSearch,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

  SiGooglecloud,;
  SiMicrosoftazure,;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'react-icons/si';

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface Service {
  id: string;
  title: string,
  description: string;
<<<<<<< HEAD
=======
    starter: number;
    professional: number;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    enterprise: number;
  }
  technologies: string[];
  benefits: string[];
<<<<<<< HEAD
=======

<<<<<<< HEAD
;
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
=======
  color: string
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  color: string;  id: string
  name: string
  description: string
  icon: React.ReactNode

=======
    enterprise: number
  },
  technologies: string[];
  benefits: string[]
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  color: string
}

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string
}

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const serviceCategories: ServiceCategory[] = [
  {
<<<<<<< HEAD

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
  },],
  description: 'Cutting-edge artificial intelligence and machine learning solutions'
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
<<<<<<< HEAD
    color: 'from-yellow-500 to-orange-500'
  }
];
const services: Service[] = [
  {
    id: 'ai-automation-suite'
    title: 'AI-Powered Automation Suite'
    description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization'
    icon: <FaRobot className='w-6 h-6' />
    features: [

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    id: 'ai-ml';
    name: 'AI & Machine Learning';
    description: 'Cutting-edge artificial intelligence and machine learning solutions';
    icon: <FaBrain className;
export default EnhancedServicesShowcase2025;
];
const services: Service[] = [
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className='w-6 h-6' />,
    category: 'automation',
    features: [
<<<<<<< HEAD

  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
<<<<<<< HEAD

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
      'Intelligent workflow automation',
      'Natural language processing',
      'Predictive analytics',
      'Real-time decision making',
      'Custom AI model training',
      'Multi - platform integration',
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    ],
    pricing: {
      starter: 299,
      professional: 799,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'LangChain',
      'React',
      'Node.js',
    ],

      'Scalable AI infrastructure',
    ],
  },

  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      'Quantum machine learning',
      'Cryptographic solutions',
      'Quantum simulation tools',
      'API access to quantum hardware',
    ],

    pricing: {
      starter: 999,
      professional: 2499,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      'Research and development support',
    ],
  },

  {

    ],

    pricing: {
      starter: 199,
      professional: 599,

      'TensorFlow Lite',
      'ONNX Runtime',
      'Edge TPU',
      'Raspberry Pi',
      'Arduino',
    ],

      'Reduced latency by 90%',
      'Lower bandwidth costs',
      'Enhanced privacy',
      'Scalable edge deployment',
    ],
  },

  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    ],

    pricing: {
      starter: 399,
      professional: 999,

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      'Comprehensive compliance',
      'Advanced threat protection',
    ],
  },

  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      'Data lineage tracking',
    ],

    pricing: {
=======
      starter: 299,
      professional: 799,
      enterprise: 1999
    
    },
      starter: 999,
      professional: 2499,
      enterprise: 4999
    
    },
      starter: 399,
      professional: 999,
      enterprise: 2499
    
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      starter: 299,
      professional: 799,

<<<<<<< HEAD
=======
    technologies: [;
=======
      'Intelligent workflow automation'
      'Natural language processing'
      'Predictive analytics'
      'Real-time decision making'
      'Custom AI model training'
      'Multi-platform integration'
    ]
    pricing: {
      starter: 299,
      professional: 799,
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
  {
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
    pricing: {
      starter: 999,
      professional: 2499,
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
  {
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
      'TensorFlow Lite',
      'ONNX Runtime',
      'Edge TPU',
      'Raspberry Pi',
      'Arduino',
    ],
    benefits: [
      'Reduced latency by 90%',
      'Lower bandwidth costs',
      'Enhanced privacy',
      'Scalable edge deployment',
    ],
  },
  {
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
    pricing: {
      starter: 399,
      professional: 999,
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
  {
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
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999,
    },
    technologies: [
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      'Apache Kafka',
      'Apache Spark',
      'Snowflake',
      'Databricks',
      'Airflow',
    ],
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      'Improved data quality',
      'Reduced integration costs',
    ],
  },  {
<<<<<<< HEAD

];
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const filteredServices = useMemo(() => {
    let filtered = services;
    if (selectedCategory !== 'all') {
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
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    id: 'cloud - native - platform',
    title: 'Cloud - Native Development Platform',
    description: 'Modern cloud - native development and deployment platform',
    icon: <FaCloud className='w - 6 h - 6' />,      'Unified data view_real - time insights_improved data quality_reduced integration costs';
    ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
=======
    benefits: [
      'Unified data view',
      'Real-time insights',
      'Improved data quality',
      'Reduced integration costs',
    ],
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
  {

  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
];
const services: Service[] = [;
  {;
    id: 'ai-automation-suite',;
    title: 'AI-Powered Automation Suite',,
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
    title: 'Quantum Computing Platform',,
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
    title: 'Edge AI Computing Platform',,
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
    title: 'Quantum Cybersecurity Suite',,
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
    title: 'Intelligent Data Fabric Platform',,
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
    title: 'Cloud-Native Development Platform',,
  description: 'Modern cloud-native development and deployment platform',;
    icon: <FaCloud className='w-6 h-6' />,      'Unified data viewReal-time insightsImproved data qualityReduced integration costs';
    ]
};
  {;
    id: 'cloud-native-platform',;
    title: 'Cloud-Native Development Platform',,
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

=======
icon: <FaCloud className='w-6 h-6' />,
    category: 'cloud',
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
      'TensorFlow'
      'PyTorch'
      'OpenAI'
      'LangChain'
      'React'
      'Node.js'
    ]
    benefits: [
      'Faster deployment',
      'Improved scalability',
      'Better resource utilization',
      'Enhanced reliability',
    ],
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
];
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const filteredServices = useMemo(() => {
    let filtered = services;
<<<<<<< HEAD
    if (selectedCategory !== 'all') {
=======
if (selectedCategory !== 'all') {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    }
<<<<<<< HEAD
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {
    setSelectedService(null);
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>
      {/* Header */}
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-16'>        <motion.div
=======
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-16'>        <motion&& motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'      }
    })
<<<<<<< HEAD
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

        {/* Search and Filters */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}

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

        {/* Category Tabs */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}

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

              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}

        >
          {filteredServices.map((service, index) => (
            <motion.div

              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-16">;
        <motion&& motion.div
=======
      <div className='container mx-auto px-4 py-16'>
        <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - purple-900 text-white">;
      {/* Header */}
      <div className="container mx - auto px-4 py-16">;
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            2025 Services Showcase
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our cutting-edge technology solutions designed for the
            future. From AI-powered automation to quantum computing, we're
            building tomorrow's innovations today.
          </p>
        </motion.div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          transition={{ duration: 0.8, delay: 0.2 }}
className='mb-12'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search services, technologies, or features...'
                value={searchTerm}
            <select
              value={sortBy}
              onChange={e =>;
                setSortBy(e && e.target.value as 'name' | 'price' | 'category');
              }
<<<<<<< HEAD
          className='text - center mb - 16';
        >;
          <h1 className='text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
            2025 Services Showcase;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Discover our cutting - edge technology solutions designed for the;
            future. From AI - powered automation to quantum computing, we're;
            building tomorrow's innovations today.          </p>        >;
          <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 400 to - pink - 400 bg - clip-text text-transparent">;
            2025 Services Showcase;
          </h1>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx-auto leading-relaxed">;
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
            >;
              <option value='name'>Sort by Name</option>;
              <option value='price'>Sort by Price</option>;
              <option value='category'>Sort by Category</option>            </select>        >;
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e && e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500";
          <div className="flex flex - col md:flex - row gap - 4 items-center justify-center">;
            <div className="relative flex-1 max-w-md">;
              <input;
                type="text";
                placeholder="Search services, technologies, or features...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue-500 focus:border-transparent";
              />;
              <FaSearch className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text-gray-400" />;
            </div>;
            <select;
              value={sort_by}
              on_change={(e) => setSortBy (e.target.value as 'name' | 'price' | 'category')}
              className="px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring-blue-500";
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
<<<<<<< HEAD

              <option value='category'>Sort by Category</option>            </select>

            </select>

          </div>
        </motion.div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <option value='category'>Sort by Category</option>
            </select>
          </div>
        </motion.div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Category Tabs */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
          transition={{ duration: 0.8, delay: 0.4 }}
className='mb-12'
        >
          <div className='flex flex-wrap justify-center gap-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <button

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${;
                selectedCategory === 'all';
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg';
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
              }`}
<<<<<<< HEAD
<<<<<<< HEAD
            >
              All Services
            </button>
            {serviceCategories.map(category => (              <button            {serviceCategories.map((category) => (
              <button

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
            >
              All Services
            </button>
{serviceCategories.map(category => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              <button

<<<<<<< HEAD




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
              <button
                key={category && category.id}
                onClick={() => setSelectedCategory(category && category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category && category.id;
                    ? `bg-gradient-to-r ${category && category.color} text-white shadow-lg`;
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
                }`}
              >;
                {category && category.icon}
                {category && category.name}
              </button>;
            ))}
<<<<<<< HEAD
          </div>
        </motion.div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          transition={{ duration: 0.8, delay: 0.6 }}
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'
<<<<<<< HEAD
<<<<<<< HEAD

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
                  </p>;
                </div>;
              </div>;

              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;

              <div className='flex flex-wrap gap-2 mb-4'>;
                {service && service.technologies.slice(0, 3).map(tech => (;
                  <span
                    key={tech}
<<<<<<< HEAD
<<<<<<< HEAD
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

                    {tech}
                  </span>
                ))}

                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    {tech}
                  </span>
                ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    {tech}
                  </span>
                ))}
=======
                    className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
<span className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
=======
<div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>
                  ${service.pricing.starter}
                  <span className='text-sm text-gray-400 font-normal'>
                    /month
                  </span>
                </div>
                <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD

          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
          </motion.div>
=======
=======
className='text-center py-16'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>
              No services found
            </h3>
            <p className='text-gray-400'>
              Try adjusting your search terms or category filters
            </p>
          </motion.div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        )}

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
        )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeModal}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
=======
className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
=======
className='bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={e => e.stopPropagation()}

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
                      }
<<<<<<< HEAD
                    </p>                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'            >
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
=======
                    </p>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </div>
                </div>
                <button
                  onClick={closeModal}
<<<<<<< HEAD
<<<<<<< HEAD

                  <span className="text-2xl">×</span>
                </button>
              </div>
              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
=======
=======
=======
className='p-2 hover:bg-white/10 rounded-lg transition-colors'
                >
                  <span className='text-2xl'>×</span>
                </button>
              </div>
              <p className='text-gray-300 text-lg mb-8'>
                {selectedService.description}
              </p>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {/* Features */}
                <div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    Key Features;
                  </h3>;
                  <ul className='space-y-2'>;
                    {selectedService && selectedService.features.map((feature, index) => (;
                      <li
                        key={index}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        className='flex items-center gap-2 text-gray-300'>;
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>                        {feature}                >;
                  <span className="text-2xl">×</span>;
                </button>;
              </div>;
                {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD


                        {feature}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                        className='flex items-center gap-2 text-gray-300'
                      >
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                        {feature}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      </li>
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

              {/* Technologies */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Technologies
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {selectedService.technologies.map(tech => (
                    <span
                      key={tech}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                    ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Benefits */}
<<<<<<< HEAD
                <div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    Key Benefits;
                  </h3>;
                  <ul className='space-y-2'>;
                    {selectedService && selectedService.benefits.map((benefit, index) => (;
                      <li
                        key={index}
                        className='flex items-center gap-2 text-gray-300'>;
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>                        {benefit}                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>;
                  <ul className="space-y-2">;
                    {selectedService && selectedService.benefits.map((benefit, index) => (;
                      <li key={index} className="flex items-center gap-2 text-gray-300">;
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
                      </li>;
=======
                <div>
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
                        {benefit}
                      </li>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                    ))}
<<<<<<< HEAD
                  </ul>
                </div>
              </div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'
                    >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      {tech}
                    </span>;
                  ))}

<<<<<<< HEAD
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
=======
                </div>;
              </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                        Get Started
                      </button>
                    </div>
                  ))}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Pricing */}
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              {/* Pricing */}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
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
                </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            </motion.div>
          </motion.div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </AnimatePresence>
    </div>
);
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {/* Technologies */}
              <div className='mt-8'>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  Technologies;
                </h3>;
                <div className='flex flex-wrap gap-3'>;
                  {selectedService && selectedService.technologies.map(tech => (;
                    <span
                      key={tech}
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'>              <div className="mt-8">;
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>;
                <div className="flex flex-wrap gap-3">;
                  {selectedService && selectedService.technologies.map((tech) => (;
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
                      {tech}
                    </span>;
                  ))}
              {/* Pricing */}
              <div className='mt-8'>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  Pricing Plans;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
                  {Object && Object.entries(selectedService && selectedService.pricing).map(;
                    ([plan, price]) => (;
                      <div
                        key={plan}
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center'>;
                        <h4 className='text-lg font-bold text-white capitalize mb-2'>;
                          {plan}
                        </h4>;
                        <div className='text-3xl font-bold text-blue-400 mb-2'>;
                          ${price}
                          <span className='text-sm text-gray-400 font-normal'>;
                            /month;
                          </span>;
                        </div>;
                        <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>;
                          Get Started;
                        </button>;
                      </div>;
                    );
                  )}                </div>                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300">;
                        Get Started;
                      </button>;
                    </div>;
                  ))}
              </div>;
            </motion && motion.div>;
          </motion && motion.div>;
        )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};

export default EnhancedServicesShowcase2025;  );
  )
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default EnhancedServicesShowcase2025;

export default EnhancedServicesShowcase2025;
export default EnhancedServicesShowcase2025;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

export default EnhancedServicesShowcase2025;
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
              <div className="flex items - center gap-3 mb-4">;
                <div className="p - 3 bg - gradient - to - r from - blue - 500 to - purple-500 rounded-lg">;
                  {service.icon}
                </div>;
                <div>;
                  <h3 className="text - xl font-bold text-white">{service.title}</h3>;
                  <p className="text - sm text-gray-400">{service_categories.find (c => c.id === service.category)?.name}</p>;
                </div>;
              </div>;
              <p className="text - gray - 300 mb - 4 line-clamp-3">{service.description}</p>;
              <div className="flex flex - wrap gap-2 mb-4">;
                {service.technologies.slice (0, 3).map ((tech) => (
                  <span;
                    key={tech}
                    className="px - 2 py - 1 bg - white / 10 rounded text - xs text-gray-300";
                  >;
                    {tech}
                  </span>))}
                {service.technologies.length > 3 && (
                  <span className='px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300'>                    +{service.technologies.length - 3} more;
                  </span>)}
              </div>;
              <div className='flex items - center justify - between'>;
                <div className='text - 2xl font - bold text - blue - 400'>                  <span className="px - 2 py - 1 bg - white / 10 rounded text - xs text-gray-300">;
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
                  <span className="text - sm text - gray-400 font-normal">/month</span>;
                </div>;
                <button className="px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover:from - blue - 600 hover:to - purple - 600 transition-all duration-300">;
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
            </p>          </motion.div>            className="text-center py-16";
          >;
            <div className="text-6xl mb-4">🔍</div>;
            <h3 className="text - 2xl font - bold text - gray-300 mb-2">No services found</h3>;
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>)}
      </div>;
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selected_service && (
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 50 flex items - center justify - center p - 4'            on_click={close_modal}            className="fixed inset - 0 bg - black / 80 backdrop - blur - sm z - 50 flex items - center justify-center p-4";
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
              <div className="flex items - start justify-between mb-6">;
                <div className="flex items-center gap-4">;
                  <div className="p - 4 bg - gradient - to - r from - blue - 500 to - purple-500 rounded-xl">;
                    {selected_service.icon}
                  </div>;
                  <div>;
                    <h2 className="text - 3xl font - bold text-white mb-2">{selected_service.title}</h2>;
                    <p className="text-gray-400">{service_categories.find (c => c.id === selected_service.category)?.name}</p>;
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
                  <span className="text-2xl">×</span>;
                </button>;
              </div>;
              <p className="text - gray - 300 text-lg mb-8">{selected_service.description}</p>;
              <div className="grid grid - cols - 1 lg:grid - cols-2 gap-8">;
                {/* Features */}
                <div>;
                  <h3 className="text - xl font - bold text-white mb-4">Key Features</h3>;
                  <ul className="space-y-2">;
                    {selected_service.features.map ((feature, index) => (
                      <li key={index} className="flex items - center gap - 2 text-gray-300">;
                        <div className="w - 2 h - 2 bg - blue-500 rounded-full"></div>;
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
                        <div className='w - 2 h - 2 bg - green - 500 rounded - full'></div>                        {benefit}                  <h3 className="text - xl font - bold text-white mb-4">Key Benefits</h3>;
                  <ul className="space-y-2">;
                    {selected_service.benefits.map ((benefit, index) => (
                      <li key={index} className="flex items - center gap - 2 text-gray-300">;
                        <div className="w - 2 h - 2 bg - green-500 rounded-full"></div>;
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
                      className='px - 3 py - 2 bg - white / 10 rounded - lg text - gray - 300'                    >              <div className="mt-8">;
                <h3 className="text - xl font - bold text-white mb-4">Technologies</h3>;
                <div className="flex flex-wrap gap-3">;
                  {selected_service.technologies.map ((tech) => (
                    <span;
                      key={tech}
                      className="px - 3 py - 2 bg - white / 10 rounded - lg text-gray-300";
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
                      </div>))}                </div>                      <button className="w - full px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover: from - blue - 600 hover:to - purple - 600 transition-all duration-300">;
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

export default EnhancedServicesShowcase2025
};

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
      </AnimatePresence>
    </div>
);
};

export default EnhancedServicesShowcase2025;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
