<<<<<<< HEAD
<<<<<<< HEAD

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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
} from 'react-icons/si';

interface Service {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

} from 'react-icons/si';

interface Service {;
} from 'react-icons/si';

interface Service {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  FaRobot,
  FaSearch,
=======
FaSearch,
  FaRobot,;
  FaSearch,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  FaRobot,
  FaSearch,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  SiGooglecloud,;
  SiMicrosoftazure,;

} from 'react-icons/si';


<<<<<<< HEAD
=======
  SiGooglecloud,;
  SiMicrosoftazure,;
} from 'react-icons/si';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface Service {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
  icon: React && React.ReactNode;
  category: string;
  features: string[];
  pricing: {;
=======
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    starter: number;
    professional: number;

    enterprise: number;
  }
  technologies: string[];
  benefits: string[];

<<<<<<< HEAD
<<<<<<< HEAD
;
interface ServiceCategory {

=======
interface ServiceCategory {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  color: string;  id: string
  name: string
  description: string
  icon: React.ReactNode

  color: string
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
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

const serviceCategories: ServiceCategory[] = [
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string;
}
const service_categories: ServiceCategory[] = [;
  {
    color: 'from-yellow-500 to-orange-500'
  }
];
const services: Service[] = [
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {
    id: 'ai-automation-suite'
    title: 'AI-Powered Automation Suite'
    description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization'
    icon: <FaRobot className='w-6 h-6' />
    features: [
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'Intelligent workflow automation',
      'Natural language processing',
      'Predictive analytics',
      'Real - time decision making',
      'Custom AI model training',
<<<<<<< HEAD
      'Multi - platform integration',
=======
      'Multi-platform integration',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    ],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    pricing: {
      
      starter: 299,
      professional: 799,
<<<<<<< HEAD
      enterprise: 1999
    
    },

    technologies: [;
=======
      enterprise: 1999,
    },
    technologies: [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'LangChain',
      'React',
      'Node.js',
    ],
<<<<<<< HEAD
    benefits: [;
      'Reduce manual tasks by 80%',
      'Improve accuracy by 95%',
      '24 / 7 automated operations',
      'Scalable AI infrastructure',
    ],
  },

  {
    id: 'quantum - computing - platform',
    title: 'Quantum Computing Platform',

=======
    benefits: [
      'Reduce manual tasks by 80%',
      'Improve accuracy by 95%',
      '24/7 automated operations',
      'Scalable AI infrastructure',
    ],
  },
  {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    description:;
      'Next - generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className='w - 6 h - 6' />,
    category: 'ai - ml',
    features: [;
      'Quantum algorithm optimization',
      'Hybrid classical - quantum computing',
<<<<<<< HEAD
=======
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description:
      'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className='w-6 h-6' />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimization',
      'Hybrid classical-quantum computing',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'Quantum machine learning',
      'Cryptographic solutions',
      'Quantum simulation tools',
      'API access to quantum hardware',
    ],
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pricing: {
      
=======
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
      starter: 299,
      professional: 799,
      enterprise: 1999
    
    },
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      starter: 999,
      professional: 2499,
<<<<<<< HEAD
      enterprise: 4999
    
    },
<<<<<<< HEAD

    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],
    benefits: [;
      'Solve previously impossible problems',
      'Exponential speed improvements',
      'Future - proof technology',
      'Research and development support',
    ],
  },

  {
    id: 'edge - ai - platform',
    title: 'Edge AI Computing Platform',

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    ],

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pricing: {
      
      starter: 199,
      professional: 599,
<<<<<<< HEAD
      enterprise: 1499
    
    },

    technologies: [;
=======
      enterprise: 1499,
    },
    technologies: [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'TensorFlow Lite',
      'ONNX Runtime',
      'Edge TPU',
      'Raspberry Pi',
      'Arduino',
    ],
<<<<<<< HEAD
    benefits: [;
=======
    benefits: [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'Reduced latency by 90%',
      'Lower bandwidth costs',
      'Enhanced privacy',
      'Scalable edge deployment',
    ],
  },
<<<<<<< HEAD

  {
    id: 'quantum - cybersecurity',
    title: 'Quantum Cybersecurity Suite',

=======
  {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
    ],

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pricing: {
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      starter: 399,
      professional: 999,
<<<<<<< HEAD
      enterprise: 2499
    
    },
<<<<<<< HEAD

    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
    benefits: [;
      'Future - proof security',
      'Quantum - resistant encryption',
=======
      enterprise: 2499,
    },
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
    benefits: [
      'Future-proof security',
      'Quantum-resistant encryption',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      'Comprehensive compliance',
      'Advanced threat protection',
    ],
  },
<<<<<<< HEAD

  {
    id: 'data - fabric - platform',
    title: 'Intelligent Data Fabric Platform',

=======
  {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
      'Data lineage tracking',
    ],

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pricing: {
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      starter: 299,
      professional: 799,
<<<<<<< HEAD
      enterprise: 1999
    
    },

    technologies: [;
<<<<<<< HEAD
=======
      enterprise: 1999,
    },
    technologies: [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Apache Kafka',
      'Apache Spark',
      'Snowflake',
      'Databricks',
      'Airflow',
    ],
<<<<<<< HEAD
<<<<<<< HEAD
    benefits: [;
      'Unified data view',
      'Real - time insights',
=======
    benefits: [
      'Unified data view',
      'Real-time insights',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Improved data quality',
      'Reduced integration costs',
    ],
  },  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    id: 'cloud - native - platform',
    title: 'Cloud - Native Development Platform',
    description: 'Modern cloud - native development and deployment platform',
    icon: <FaCloud className='w - 6 h - 6' />,      'Unified data view_real - time insights_improved data quality_reduced integration costs';
    ];
  {
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',
  }
  {

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
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
    id: 'cloud-native-platform',
    title: 'Cloud-Native Development Platform',
    description: 'Modern cloud-native development and deployment platform',

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );
    }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
    
    if (selectedCategory !== 'all') {
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

];
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const filteredServices = useMemo(() => {
    let filtered = services;
    if (selectedCategory !== 'all') {
    }
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      filtered = filtered.filter(service => service.category === selectedCategory)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
<<<<<<< HEAD

    

=======

    
    if (searchTerm) {
=======

    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    if (searchTerm) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {
<<<<<<< HEAD

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }, [selectedCategory, searchTerm, sortBy])

  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };

  const closeModal = () => {;
    setSelectedService(null);
  };
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search services, technologies, or features...'
                value={searchTerm}
<<<<<<< HEAD

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
              />;
              <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />;
            </div>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <select
              value={sortBy}
              onChange={e =>;
                setSortBy(e && e.target.value as 'name' | 'price' | 'category');
              }
<<<<<<< HEAD

<<<<<<< HEAD
=======
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >;
              <option value='name'>Sort by Name</option>;
              <option value='price'>Sort by Price</option>;
              <option value='category'>Sort by Category</option>            </select>        >;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                onChange={(e) => setSearchTerm(e && e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />;
            </div>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e && e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500";
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            >;
              <option value="name">Sort by Name</option>;
              <option value="price">Sort by Price</option>;
              <option value="category">Sort by Category</option>;
            </select>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD

              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              <option value='category'>Sort by Category</option>            </select>

            </select>

          </div>
        </motion.div>



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Category Tabs */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            <button




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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <button
                key={category && category.id}
                onClick={() => setSelectedCategory(category && category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category && category.id;
                    ? `bg-gradient-to-r ${category && category.color} text-white shadow-lg`;
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                }`}
              >;
                {category && category.icon}
                {category && category.name}
              </button>;
            ))}
<<<<<<< HEAD

          </div>;
        </motion && motion.div>;





<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          </div>;
        </motion && motion.div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'
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
<<<<<<< HEAD

          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  </p>;
                </div>;
              </div>;

              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;

              <div className='flex flex-wrap gap-2 mb-4'>;
                {service && service.technologies.slice(0, 3).map(tech => (;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                  >
                    className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'                  >

                  >

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  <span
                    key={tech}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {tech}
                  </span>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD

                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">

=======
                {service.technologies.length > 3 && (
                  <span className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'>                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.starter}

=======
              <div className='flex items-center justify-between'>
                <div className='text-2xl font-bold text-blue-400'>
                  ${service.pricing.starter}
                  <span className='text-sm text-gray-400 font-normal'>
                    /month
                  </span>
                </div>
                <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>                  Learn More                  ${service.pricing.starter}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD

              </div>;

<<<<<<< HEAD
=======
</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======





>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        )}
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD

=======


        )}

      </div>;


      </div>


            className="text-center py-16"
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
      </div>
            </p>          </motion.div>

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'            onClick={closeModal}

<<<<<<< HEAD
            onClick={closeModal}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0 && 0.9, opacity: 0 }}
=======
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              className='bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'

=======
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              onClick={e => e.stopPropagation()}




<<<<<<< HEAD
<<<<<<< HEAD
=======
              onClick={e => e.stopPropagation()}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      }
                    </p>                  </div>;
                </div>;
                <button
                  onClick={closeModal}
<<<<<<< HEAD
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'>;
              <div className="flex items-start justify-between mb-6">;
                <div className="flex items-center gap-4">;
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">;
                    {selectedService && selectedService.icon}
                  </div>;
                  <div>;
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService && selectedService.title}</h2>;
                    <p className="text-gray-400">{serviceCategories && serviceCategories.find(c => c && c.id === selectedService && selectedService.category)?.name}</p>;
                  </div>;
                </div>;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'
                >
                  <span className='text-2xl'>×</span>
                </button>
              </div>
              <p className='text-gray-300 text-lg mb-8'>
                {selectedService.description}
              </p>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
                        className='flex items-center gap-2 text-gray-300'
                      >
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>                        {feature}                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        className='flex items-center gap-2 text-gray-300'>;
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>                        {feature}                >;
                  <span className="text-2xl">×</span>;
                </button>;
              </div>;
<<<<<<< HEAD

              <p className="text-gray-300 text-lg mb-8">{selectedService && selectedService.description}</p>;

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                {/* Features */}
<<<<<<< HEAD


                        {feature}
                      </li>;
=======
=======
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


                        {feature}


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </li>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      </li>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    ))}

                  </ul>;
                </div>;


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                {/* Benefits */}


                    ))}
<<<<<<< HEAD
=======
                  </ul>;
                </div>;

                        {feature}

                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

=======
                {/* Features */}
                      </li>
                    ))}
                  </ul>
                </div>

                    ))}
                {/* Benefits */}
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
                    ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                  </ul>;
                </div>;
              </div>;


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Technologies */}


=======
=======



              {/* Technologies */}


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >

                    >


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {tech}
                    </span>;
                  ))}
=======
                      {tech}
                    </span>;
                  ))}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >

                    >

                      {tech}
                    </span>;
                  ))}
<<<<<<< HEAD
                </div>
              </div>

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                </div>;
              </div>;





              {/* Pricing */}


<<<<<<< HEAD
<<<<<<< HEAD
=======

                </div>


                </div>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>
            </motion.div>
          </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        )}
<<<<<<< HEAD

      </AnimatePresence>;
<<<<<<< HEAD
=======
</AnimatePresence>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>;
  );

=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};

export default EnhancedServicesShowcase2025;  );
=======
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
};

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default EnhancedServicesShowcase2025;
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default EnhancedServicesShowcase2025;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export default EnhancedServicesShowcase2025;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

};


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
