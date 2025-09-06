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
'use client';
;
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';


=======
import { 
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const ServicesSection: React.FC = () => {
  const services = [;
    {
      icon: Brain,
      title: 'AI Development',
<<<<<<< HEAD
<<<<<<< HEAD

    };
=======
=======
    };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======

const ServicesSection: React.FC = () => {_const _services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
<<<<<<< HEAD
      features: ['AWS / Azure / GCPMicroservicesServerless ArchitectureDevOps Automation'],
=======
features: ['AWS / Azure / GCPMicroservicesServerless ArchitectureDevOps Automation'],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
<<<<<<< HEAD
<<<<<<< HEAD

    };
=======
=======
    };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      color: 'from - indigo - 500 to - purple - 500',
=======
color: 'from - indigo - 500 to - purple - 500',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    visible: {
      opacity: 1
      transition: {


=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  };

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const cardVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}

<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>;
      {/* Background Elements */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
      </div>;
=======
    }
  };

<<<<<<< HEAD


      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

    hidden: { opacity: 0, y: 20 },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    hidden: { opacity: 0, y: 20 },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">;
      {/* Background Elements */}

<<<<<<< HEAD
      <div className="absolute inset-0">;
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0 && 0.1),transparent_50%)]" />;
      </div>;

      <div className="relative container mx-auto px-4">;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  const cardVariants = {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Section Header */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}

<<<<<<< HEAD

=======
          className="text-center mb-16"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >
          <motion.div
=======
        stagger_children: 0.1,
      },
    },  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
<<<<<<< HEAD
=======
    hidden: { opacity: 0, y: 20 }
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      <div className='relative container mx-auto px-4'>        {/* Section Header */}  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">;
      {/* Background Elements */}
        {/* Section Header */}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },
  }
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (
    <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden'>;
      {/* Background Elements */}
      <div className='absolute inset - 0'>;
        <div className='absolute top - 0 left - 0 w - full h - full bg-[radial - gradient (circle_at_30%_20%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
        <div className='absolute top - 0 right - 0 w - full h - full bg-[radial - gradient (circle_at_70%_80%, rgba (147, 51, 234, 0.1), transparent_50%)]' />;
      </div>;
      <div className='relative container mx - auto px - 4'>        {/* Section Header */}  }
;
  return (
    <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden">;
      {/* Background Elements */}
      <div className="absolute inset - 0">;
        <div className="absolute top - 0 left - 0 w - full h - full bg-[radial - gradient (circle_at_30%_20%, rgba (59, 130, 246, 0.1), transparent_50%)]" />;
        <div className="absolute top - 0 right - 0 w - full h - full bg-[radial - gradient (circle_at_70%_80%, rgba (147, 51, 234, 0.1), transparent_50%)]" />;
      </div>;
      <div className="relative container mx - auto px - 4">;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text - center mb - 16'        >          className="text - center mb - 16";
        >;
          <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
      }
    }
    visible: { opacity: 1, y: 0 },

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden'>;
      {/* Background Elements */}

  return (
    <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden">;
      {/* Background Elements */}
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}

        >
          <motion.div
        stagger_children: 0.1,
      },
    },  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
      }
    }
  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },
  }
    hidden: { opacity: 0, y: 20 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden'>;
      {/* Background Elements */}

  return (
    <section className="py - 20 bg - gradient - to - b from - gray - 900 to - black relative overflow - hidden">;
      {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center mb-16'        >          className="text-center mb-16"
          className='text-center mb-16'        >

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >
          <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            initial={{ opacity: 0, scale: 0.8 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD



          >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            className='inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6'

          >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            className='inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
            We deliver cutting-edge technology solutions that drive innovation,


            efficiency, and growth for businesses across all industries.          </p>
            We deliver cutting-edge technology solutions that drive innovation
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            We deliver cutting-edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>
<<<<<<< HEAD
=======
            className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            efficiency, and growth for businesses across all industries.          </p>
            We deliver cutting-edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.          </p>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth
            for businesses across all industries.
        </motion.div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}


                {/* Content */}
                <h3 className="text - 2xl font - bold text - white mb - 4 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {service.title}

<<<<<<< HEAD
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16";
          {services && services.map((service, index) => (;
            <motion&& motion.div
              key={service && service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
                {/* Background Gradient */}
                <div
                {/* Content */}
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


                {/* Features */}

=======
=======
                {/* Features */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}

=======
                  ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

                {/* CTA */}
                <Link;
                  href={service.href}

                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >

=======
                {/* CTA */}
                <Link;
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
=======
                </ul>;

                {/* CTA */}
                <Link
                  href={service && service.href}
                  className='inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1'>;
                  <span className='font-medium'>Learn More</span>;
                  <ArrowRight className='w-4 h-4' />;
                </Link>;
<<<<<<< HEAD

                {/* Hover Effect */}
<<<<<<< HEAD

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
=======
                </h3>

=======
                </h3>

                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                <p className='text-gray-300 mb-6 leading-relaxed'>                  {service.description}
                </p>

                {/* Features */}

                  {service.description}
                </p>

                {/* Features */}

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
        </motion && motion.div>;


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Bottom CTA */}
        <motion&& motion.div
=======



        {/* Bottom CTA */}
        <motion&& motion.div
{/* Hover Effect */}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />;
              </div>;
            </motion && motion.div>;
          ))}
        {/* Bottom CTA */}
        <motion&& motion.div
<<<<<<< HEAD

        {/* Bottom CTA */}
        <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
          viewport={{ once: true }}

<<<<<<< HEAD

<<<<<<< HEAD
=======
          className="text-center"
        >
          className='text-center'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ServicesSection;


=======
=======


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default ServicesSection;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export default ServicesSection;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );

};


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  );
}
};

export default ServicesSection;  )
}
export default ServicesSection;

export default ServicesSection;
export default ServicesSection;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
