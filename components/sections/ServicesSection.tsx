<<<<<<< HEAD
<<<<<<< HEAD
import { 
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain
  Cloud
  RefreshCw
  Wifi
  Shield
  BarChart3
  ArrowRight
  Zap;} from 'lucide-react';import {
  Brain,
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3,
  ArrowRight,;
  Zap,;} from 'lucide-react';import { ;
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
'use client';
;
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain;
  Cloud
  RefreshCw
  Wifi
  Shield
  BarChart3;
  ArrowRight;
  Zap
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

} from 'lucide-react';

=======
  Brain,
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3,
  ArrowRight,
  Zap,} from 'lucide-react';import {
  Brain;
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3;
  ArrowRight;
  Zap;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ServicesSection: React.FC = () => {
  const services = [;
    {
      icon: Brain,
      title: 'AI Development',
<<<<<<< HEAD
<<<<<<< HEAD
    };
=======

    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      description:;
        'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [;
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
      ],
      color: 'from - blue - 500 to - cyan - 500',
      href: '/services / ai - development',      color: 'from - blue - 500 to - cyan - 500',
      href: '/services / ai - development';
    }
<<<<<<< HEAD
<<<<<<< HEAD

const ServicesSection: React.FC = () => {_const _services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
<<<<<<< HEAD
<<<<<<< HEAD
features: ['AWS / Azure / GCPMicroservicesServerless ArchitectureDevOps Automation'],
=======
      features: ['AWS / Azure / GCPMicroservicesServerless ArchitectureDevOps Automation'],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      features: ['AWS / Azure / GCPMicroservicesServerless ArchitectureDevOps Automation'],
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: 'from - purple - 500 to - pink - 500',
      href: '/services / cloud - architecture';
    }
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'End - to - end digital transformation services to modernize your business.',
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy'],
      color: 'from - green - 500 to - emerald - 500',
      href: '/services / digital - transformation',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description:;
        'Scalable cloud solutions and infrastructure design for modern applications.',
      features: [;
        'AWS / Azure / GCP',
        'Microservices',
        'Serverless Architecture',
        'DevOps Automation',
      ],
      color: 'from - purple - 500 to - pink - 500',
      href: '/services / cloud - architecture',
    },
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description:;
        'End - to - end digital transformation services to modernize your business.',
      features: [;
        'Process Automation',
        'Legacy System Migration',
        'Change Management',
        'Digital Strategy',
      ],
      color: 'from - green - 500 to - emerald - 500',
      href: '/services / digital - transformation',
    },    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',      href: '/services / digital - transformation';
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
<<<<<<< HEAD
<<<<<<< HEAD
    };
=======

    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      features: [;
        'Sensor Networks',
        'Real - time Monitoring',
        'Data Analytics',
        'Edge Computing',
      ],
      color: 'from - orange - 500 to - red - 500',
      href: '/services / iot - platforms',      color: 'from - orange - 500 to - red - 500',
      href: '/services / iot - platforms';
    }
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Decentralized technology platforms and smart contract development.',
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],
<<<<<<< HEAD
<<<<<<< HEAD
color: 'from - indigo - 500 to - purple - 500',
=======
      color: 'from - indigo - 500 to - purple - 500',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      color: 'from - indigo - 500 to - purple - 500',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      href: '/services / blockchain - solutions',
    },
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description:;
        'Decentralized technology platforms and smart contract development.',
      features: [;
        'Smart Contracts',
        'DeFi Applications',
        'NFT Platforms',
        'Supply Chain Solutions',
      ],
      color: 'from - indigo - 500 to - purple - 500',
      href: '/services / blockchain - solutions',
    },    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',      href: '/services / blockchain - solutions';
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      features: [;
        'Big Data Processing',
        'Real - time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
      ],
      color: 'from - teal - 500 to - blue - 500',
      href: '/services / data - analytics',
    },  ];      features: ['Big Data ProcessingReal - time DashboardsPredictive ModelingData Visualization'],
      color: 'from - teal - 500 to - blue - 500',
      href: '/services / data - analytics';
    }
  const container_variants = {
    hidden: { opacity: 0 },

<<<<<<< HEAD
<<<<<<< HEAD

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain
      title: 'AI Development'
      description:
        'Custom AI solutions and machine learning models tailored to your business needs.'
      features: [
        'Machine Learning Models'
        'Natural Language Processing'
        'Computer Vision'
        'Predictive Analytics'
      ]
      color: 'from-blue-500 to-cyan-500'
      href: '/services/ai-development',      color: 'from-blue-500 to-cyan-500'
      href: '/services/ai-development'
    }
    {
      icon: Cloud
      title: 'Cloud Architecture'
      description: 'Scalable cloud solutions and infrastructure design for modern applications.'
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation']
      color: 'from-purple-500 to-pink-500'
      href: '/services/cloud-architecture'
    }
    {
      icon: RefreshCw
      title: 'Digital Transformation'
      description: 'End-to-end digital transformation services to modernize your business.'
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy']
      color: 'from-green-500 to-emerald-500'
      href: '/services/digital-transformation'
    }
    {
      icon: Cloud
      title: 'Cloud Architecture'
      description:
        'Scalable cloud solutions and infrastructure design for modern applications.'
      features: [
        'AWS/Azure/GCP'
        'Microservices'
        'Serverless Architecture'
        'DevOps Automation'
      ]
      color: 'from-purple-500 to-pink-500'
      href: '/services/cloud-architecture'
    }
    {
      icon: RefreshCw
      title: 'Digital Transformation'
      description:
        'End-to-end digital transformation services to modernize your business.'
      features: [
        'Process Automation'
        'Legacy System Migration'
        'Change Management'
        'Digital Strategy'
      ]
      color: 'from-green-500 to-emerald-500'
      href: '/services/digital-transformation'
    },    {
      icon: Wifi
      title: 'IoT Platforms'
      description: 'Connected device solutions and IoT platform development.',      href: '/services/digital-transformation'
    }
    {
      icon: Wifi
      title: 'IoT Platforms'
      description: 'Connected device solutions and IoT platform development.'
      features: [
        'Sensor Networks'
        'Real-time Monitoring'
        'Data Analytics'
        'Edge Computing'
      ]
      color: 'from-orange-500 to-red-500'
      href: '/services/iot-platforms',      color: 'from-orange-500 to-red-500'
      href: '/services/iot-platforms'
    }
    {
      icon: Shield
      title: 'Blockchain Solutions'
      description: 'Decentralized technology platforms and smart contract development.'
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions']
      color: 'from-indigo-500 to-purple-500'
      href: '/services/blockchain-solutions'
    }
    {
      icon: Shield
      title: 'Blockchain Solutions'
      description:
        'Decentralized technology platforms and smart contract development.'
      features: [
        'Smart Contracts'
        'DeFi Applications'
        'NFT Platforms'
        'Supply Chain Solutions'
      ]
      color: 'from-indigo-500 to-purple-500'
      href: '/services/blockchain-solutions'
    },    {
      icon: BarChart3
      title: 'Data Analytics'
      description: 'Advanced analytics and business intelligence solutions.',      href: '/services/blockchain-solutions'
    }
    {
      icon: BarChart3
      title: 'Data Analytics'
      description: 'Advanced analytics and business intelligence solutions.'
      features: [
        'Big Data Processing'
        'Real-time Dashboards'
        'Predictive Modeling'
        'Data Visualization'
      ]
      color: 'from-teal-500 to-blue-500'
      href: '/services/data-analytics'
    },  ];      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization']
      color: 'from-teal-500 to-blue-500'
      href: '/services/data-analytics'
    }
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: {
      opacity: 1
      transition: {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Brain,;
  Cloud,;
  RefreshCw,;
  Wifi,;
  Shield,;
  BarChart3,;
  ArrowRight,;
  Zap,;} from 'lucide-react';import { ;
  Brain;
  Cloud, ;
  RefreshCw, ;
  Wifi, ;
  Shield, ;
  BarChart3;
  ArrowRight;
  Zap;
const ServicesSection: React.FC = () => {;
  const services = [;
    {;
      icon: Brain,;
      title: 'AI Development',;
      description:;
        'Custom AI solutions and machine learning models tailored to your business needs.',;
      features: [;
        'Machine Learning Models',;
        'Natural Language Processing',;
        'Computer Vision',;
        'Predictive Analytics',;
      ],;
      color: 'from-blue-500 to-cyan-500',;
      href: '/services/ai-development',      color: 'from-blue-500 to-cyan-500',;
      href: '/services/ai-development';
    };
    {;
      icon: Cloud,;
      title: 'Cloud Architecture',;
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',;
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation'],;
      color: 'from-purple-500 to-pink-500',;
      href: '/services/cloud-architecture';
    };
    {;
      icon: RefreshCw,;
      title: 'Digital Transformation',;
      description: 'End-to-end digital transformation services to modernize your business.',;
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy'],;
      color: 'from-green-500 to-emerald-500',;
      href: '/services/digital-transformation',;
    },;
    {;
      icon: Cloud,;
      title: 'Cloud Architecture',;
      description:;
        'Scalable cloud solutions and infrastructure design for modern applications.',;
      features: [;
        'AWS/Azure/GCP',;
        'Microservices',;
        'Serverless Architecture',;
        'DevOps Automation',;
      ],;
      color: 'from-purple-500 to-pink-500',;
      href: '/services/cloud-architecture',;
    },;
    {;
      icon: RefreshCw,;
      title: 'Digital Transformation',;
      description:;
        'End-to-end digital transformation services to modernize your business.',;
      features: [;
        'Process Automation',;
        'Legacy System Migration',;
        'Change Management',;
        'Digital Strategy',;
      ],;
      color: 'from-green-500 to-emerald-500',;
      href: '/services/digital-transformation',;
    },    {;
      icon: Wifi,;
      title: 'IoT Platforms',;
      description: 'Connected device solutions and IoT platform development.',      href: '/services/digital-transformation';
    };
    {;
      icon: Wifi,;
      title: 'IoT Platforms',;
      description: 'Connected device solutions and IoT platform development.',;
      features: [;
        'Sensor Networks',;
        'Real-time Monitoring',;
        'Data Analytics',;
        'Edge Computing',;
      ],;
      color: 'from-orange-500 to-red-500',;
      href: '/services/iot-platforms',      color: 'from-orange-500 to-red-500',;
      href: '/services/iot-platforms';
    };
    {;
      icon: Shield,;
      title: 'Blockchain Solutions',;
      description: 'Decentralized technology platforms and smart contract development.',;
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],;
      color: 'from-indigo-500 to-purple-500',;
      href: '/services/blockchain-solutions',;
    },;
    {;
      icon: Shield,;
      title: 'Blockchain Solutions',;
      description:;
        'Decentralized technology platforms and smart contract development.',;
      features: [;
        'Smart Contracts',;
        'DeFi Applications',;
        'NFT Platforms',;
        'Supply Chain Solutions',;
      ],;
      color: 'from-indigo-500 to-purple-500',;
      href: '/services/blockchain-solutions',;
    },    {;
      icon: BarChart3,;
      title: 'Data Analytics',;
      description: 'Advanced analytics and business intelligence solutions.',      href: '/services/blockchain-solutions';
    };
    {;
      icon: BarChart3,;
      title: 'Data Analytics',;
      description: 'Advanced analytics and business intelligence solutions.',;
      features: [;
        'Big Data Processing',;
        'Real-time Dashboards',;
        'Predictive Modeling',;
        'Data Visualization',;
      ],;
      color: 'from-teal-500 to-blue-500',;
      href: '/services/data-analytics',;
    },  ];      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization'],;
      color: 'from-teal-500 to-blue-500',;
      href: '/services/data-analytics';
    }
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
  const cardVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },        staggerChildren: 0 && 0.1;
      }
    }
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const cardVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },;
  };
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
      </div>;
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 },

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };
        {/* Section Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    hidden: { opacity: 0, y: 20 },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">;
      {/* Background Elements */}

<<<<<<< HEAD
<<<<<<< HEAD
  const cardVariants = {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]" />;
      </div>;
      <div className="relative container mx-auto px-4">;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Section Header */}
        <motion&& motion.div
=======
        {/* Section Header */}
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Section Header */}

        <motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD

<<<<<<< HEAD
          className="text-center mb-16"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center mb-16'        >          className="text-center mb-16"
          className='text-center mb-16'        >

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <motion.div
        stagger_children: 0.1,
      },
    },  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 }
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
      }
    }
  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },
  }
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
      }
    }
=======
=======
=======
    hidden: { opacity: 0, y: 20 },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: { opacity: 1, y: 0 },

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

<<<<<<< HEAD
  return (
    <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden'>;
      {/* Background Elements */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>
<<<<<<< HEAD
      <div className='relative container mx-auto px-4'>        {/* Section Header */}  }
      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };
=======
      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Section Header */}

  return (
    <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden">;
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center mb-16'        >          className="text-center mb-16"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='text-center mb-16'        >

        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6'

          >
=======



          >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6'

          >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Zap className='w-5 h-5 text-blue-400' />
            <span className='text-blue-400 font-medium'>Our Services</span>
          </motion.div>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Comprehensive Technology
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Solutions
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            We deliver cutting-edge technology solutions that drive innovation,


            efficiency, and growth for businesses across all industries.          </p>
<<<<<<< HEAD
            We deliver cutting-edge technology solutions that drive innovation
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            We deliver cutting-edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>
<<<<<<< HEAD
=======
=======
            We deliver cutting-edge technology solutions that drive innovation,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            efficiency, and growth for businesses across all industries.          </p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
            We deliver cutting-edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth
            for businesses across all industries.

          </p>
<<<<<<< HEAD
        </motion.div>

<<<<<<< HEAD



=======
=======

        </motion.div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Zap className='w-5 h-5 text-blue-400' />;
            <span className='text-blue-400 font-medium'>Our Services</span>;
          </motion && motion.div>;
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
            Comprehensive Technology;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>;
              Solutions;
            </span>;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
            We deliver cutting-edge technology solutions that drive innovation,;
            efficiency, and growth for businesses across all industries.          </p>          ;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth ;
            for businesses across all industries.;
        </motion && motion.div>;
=======
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
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}


                {/* Content */}
                <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {service.title}

<<<<<<< HEAD

        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
            className='inline - flex items - center space - x-2 bg - blue - 600 / 20 border border - blue - 500 / 30 rounded - full px - 6 py - 3 mb - 6';
            <Zap className='w - 5 h - 5 text - blue - 400' />;
            <span className='text - blue - 400 font - medium'>Our Services</span>;
          </motion.div>;
          <h2 className='text - 4xl md:text - 6xl font - bold text - white mb - 6'>;
            Comprehensive Technology;
            <span className='block bg - gradient - to - r from - blue - 400 to - purple - 400 bg - clip - text text - transparent'>;
              Solutions;
            </span>;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;
            We deliver cutting - edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>;
          <p className="text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed">;
            We deliver cutting - edge technology solutions that drive innovation, efficiency, and growth;
            for businesses across all industries.;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          variants={container_variants}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'        >          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16";
          {services.map ((service, index) => (
            <motion.div;
              key={service.title}
              variants={card_variants}
              while_hover={{ coordinate_y: -10 }}
              className='group relative';
            >;
              <div className='relative h - full bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8 hover:border - gray - 700 transition - all duration - 300 overflow - hidden'>;
                {/* Background Gradient */}
                <div;
                  className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 0 group - hover:opacity - 5 transition - opacity duration - 300`}
                />;
                {/* Icon */}
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <service.icon className='w - 8 h - 8 text - white' />;
                </div>;
                {/* Content */}
                <h3 className='text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300'>;
                  {service.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className='relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden'>
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className='w-8 h-8 text-white' />
                </div>
                {/* Content */}
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-gray-300 mb-6 leading-relaxed'>                  {service.description}
                </p>
                {/* Features */}            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                </h3>;
                <p className='text - gray - 300 mb - 6 leading - relaxed'>                  {service.description}
                </p>;
                {/* Features */}            >;
              <div className="relative h - full bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8 hover:border - gray - 700 transition - all duration - 300 overflow - hidden">;
                {/* Background Gradient */}
                <div className={`absolute inset - 0 bg - gradient - to - br ${service.color} opacity - 0 group - hover:opacity - 5 transition - opacity duration - 300`} />;
                {/* Icon */}
                <div className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>;
                  <service.icon className="w - 8 h - 8 text - white" />;
                </div>;
                {/* Content */}
                <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {service.title}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}


                {/* Content */}
                <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {service.title}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className={`absolute inset-0 bg-gradient-to-br ${service && service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />;
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service && service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <service && service.icon className='w-8 h-8 text-white' />;
                </div>;
                {/* Content */}
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300'>;
                  {service && service.title}
                </h3>;
                <p className='text-gray-300 mb-6 leading-relaxed'>                  {service && service.description}
                </p>;
                {/* Features */}            >;
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">;
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service && service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />;
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service && service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <service && service.icon className="w-8 h-8 text-white" />;
                </div>;
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">;
                  {service && service.title}
                </h3>;
                <p className="text-gray-300 mb-6 leading-relaxed">;
                  {service && service.description}
                </p>;
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Features */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                {/* Features */}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </h3>;
                <p className="text - gray - 300 mb - 6 leading - relaxed">;
                  {service.description}
                </p>;
                {/* Features */}
                <ul className='space - y-2 mb - 8'>;
                  {service.features.map (feature => (
                    <li;
                      key={feature}
                      className='flex items - center space - x-3 text - gray - 400';
                    >;
                      <div className='w - 2 h - 2 bg - blue - 400 rounded - full' />;
                      <span className='text - sm'>{feature}</span>                    </li>                <ul className="space - y-2 mb - 8">;
                  {service.features.map ((feature) => (
                    <li key={feature} className="flex items - center space - x-3 text - gray - 400">;
                      <div className="w - 2 h - 2 bg - blue - 400 rounded - full" />;
                      <span className="text - sm">{feature}</span>))}
                </ul>;
<<<<<<< HEAD
<<<<<<< HEAD
                {/* CTA */}
                <Link;
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* CTA */}
                <Link;
                  href={service.href}

                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </ul>;
                {/* CTA */}
                <Link
                  href={service && service.href}
                  className='inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1'>;
                  <span className='font-medium'>Learn More</span>;
                  <ArrowRight className='w-4 h-4' />;
                </Link>;
                {/* Hover Effect */}
<<<<<<< HEAD
<<<<<<< HEAD
                </h3>

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
=======

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
=======
                </h3>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <p className='text-gray-300 mb-6 leading-relaxed'>                  {service.description}
                </p>

                {/* Features */}

                  {service.description}
                </p>

                {/* Features */}

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          ))}
        </motion.div>

        </motion && motion.div>;


<<<<<<< HEAD
<<<<<<< HEAD



        {/* Bottom CTA */}
        <motion&& motion.div
{/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />;
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;
        {/* Bottom CTA */}
        <motion&& motion.div

        {/* Bottom CTA */}
        <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Bottom CTA */}
        <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Bottom CTA */}
        <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
          viewport={{ once: true }}
<<<<<<< HEAD


<<<<<<< HEAD
          className="text-center"
        >
          className='text-center'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6'>
              Let&apos;s discuss how our technology solutions can drive your
              success and accelerate your growth.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD


            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <span>Get Started Today</span>
              <ArrowRight className='w-5 h-5' />            </Link>        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>;
              <span>Get Started Today</span>;
              <ArrowRight className='w-5 h-5' />            </Link>        >;
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-gray-300 mb-6">;
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.;
            </p>;
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">;
              <span>Get Started Today</span>;
              <ArrowRight className="w-5 h-5" />;
            </Link>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );


};
export default ServicesSection;  );
};
<<<<<<< HEAD
export default ServicesSection;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className='inline - flex items - center space - x-2 text - blue - 400 hover:text - blue - 300 transition - colors duration - 300 group - hover:translate - x-1';
                >;
                  <span className='font - medium'>Learn More</span>;
                  <ArrowRight className='w - 4 h - 4' />;
                </Link>;
                {/* Hover Effect */}
                <div className='absolute inset - 0 border - 2 border - transparent rounded - 2xl group - hover:border - blue - 500 / 30 transition - colors duration - 300' />              </div>                >;
                  <span className="font - medium">Learn More</span>;
                  <ArrowRight className="w - 4 h - 4" />;
                </Link>;
                {/* Hover Effect */}
                <div className="absolute inset - 0 border - 2 border - transparent rounded - 2xl group - hover:border - blue - 500 / 30 transition - colors duration - 300" />;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Bottom CTA */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text - center';
        >;
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - 2xl p - 8 max - w-2xl mx - auto'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - gray - 300 mb - 6'>;
              Let & apos;s discuss how our technology solutions can drive your;
              success and accelerate your growth.;
            </p>;
            <Link;
              href='/contact';
              className='inline - flex items - center space - x-2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1';
            >;
              <span > Get Started Today</span>;
              <ArrowRight className='w - 5 h - 5' />            </Link>        >;
          <div className="bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - 2xl p - 8 max - w-2xl mx - auto">;
            <h3 className="text - 2xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - gray - 300 mb - 6">;
              Let & apos, s discuss how our technology solutions can drive your success and accelerate your growth.;
            </p>;
            <Link;
              href="/contact";
              className="inline - flex items - center space - x-2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold hover: from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1";
            >;
              <span > Get Started Today</span>;
              <ArrowRight className="w - 5 h - 5" />;
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default ServicesSection);
}
;
export default ServicesSection;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ServicesSection;

export default ServicesSection;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

};


<<<<<<< HEAD
<<<<<<< HEAD
  );
}
};

export default ServicesSection;  )
}
export default ServicesSection;

export default ServicesSection;
export default ServicesSection;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
