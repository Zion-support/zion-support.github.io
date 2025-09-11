<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import {;
  CheckCircle,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Globe,;
  Brain,;
  Database,;
  Cloud,;
  Lock,;
  Rocket,;
  Users,;
  DollarSign,;
  Target,;
  Award,;
  Phone,;
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
import React from 'react';

import { motion } from 'framer-motion';
import {


import {
  CheckCircle
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Globe
  Brain
  Database
  Cloud
  Lock
  Rocket
  Users
  DollarSign
  Target
  Award
  Phone;
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
import React from 'react';

import { motion } from 'framer-motion';


=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Brain,
  Database,
  Cloud,
  Lock,
  Rocket,
  Users,
  DollarSign,
  Target,
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';

  Award,;
  Phone,;
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Award,;
  Phone,;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';

=======
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services'
      icon: Brain
      services: advancedAIAutomation2025
      gradient: 'from-purple-600 via-pink-600 to-blue-600'
      description:
        'Cutting-edge AI solutions that transform business operations'
    },      description: 'Cutting-edge AI solutions that transform business operations'
    }
    {
      title: 'Cybersecurity & Security'
      icon: Shield
      services: advancedCybersecurity2025
      gradient: 'from-red-600 via-orange-600 to-yellow-600'
      description: 'Advanced security solutions for the digital age'
    },    {      description: 'Advanced security solutions for the digital age'
    }
    {
      title: 'Blockchain & Web3'
      icon: Globe
      services: blockchainWeb32025
      gradient: 'from-green-600 via-teal-600 to-cyan-600'
      description: 'Next-generation blockchain and decentralized solutions'
    },    {      description: 'Next-generation blockchain and decentralized solutions'
    }
    {
      title: 'IoT & Edge Computing'
      icon: Cloud
      services: iotEdgeComputing2025
      gradient: 'from-blue-600 via-indigo-600 to-purple-600'
      description: 'Smart connected solutions for the Internet of Things'
    },    {      description: 'Smart connected solutions for the Internet of Things'
    }
    {
      title: 'Healthcare & Biotechnology'
      icon: Target
      services: healthcareBiotech2025
      gradient: 'from-pink-600 via-rose-600 to-red-600'
      description: 'Innovative healthcare and biotech solutions'
    },    {      description: 'Innovative healthcare and biotech solutions'
    }
    {
      title: 'Fintech & Financial'
      icon: DollarSign
      services: fintechFinancial2025
      gradient: 'from-emerald-600 via-green-600 to-teal-600'
      description: 'Revolutionary financial technology solutions'
    },    {      description: 'Revolutionary financial technology solutions'
    }
    {
      title: 'Education & E-Learning'
      icon: Award
      services: educationElearning2025
      gradient: 'from-amber-600 via-yellow-600 to-orange-600'
      description: 'Advanced learning and educational technology'
    },  ];      description: 'Advanced learning and educational technology'
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
<<<<<<< HEAD




  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },;
  };
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}
=======
=======
        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };

<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>;
      {/* Animated Background Elements */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 overflow-hidden'>;
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>;
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>;
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>;
      </div>;
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>;
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>;
      </div>;
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Header */}
        <motion&& motion.div

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

=======

        {/* Header */}
        <motion&& motion.div
=======

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

=======
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}

        {/* Header */}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Revolutionary 2025 Services
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
            your business and drive success in the digital age.          </p>        >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
          </p>
        </motion.div>


          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>;
            Revolutionary 2025 Services;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
            Discover our comprehensive suite of cutting-edge micro SAAS;
            services, IT solutions, and AI innovations designed to transform;
            your business and drive success in the digital age.          </p>        >;
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">;
            Revolutionary 2025 Services;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.;
          </p>;
        </motion && motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Service Categories */}
        <motion&& motion.div
          variants={containerVariants}


              {/* Category Header */}

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Service Categories */}
        <motion&& motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      gradient: 'from - amber - 600 via - yellow - 600 to - orange - 600',
      description: 'Advanced learning and educational technology',
    },  ];      description: 'Advanced learning and educational technology';
    }
  ];
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
;
  return (
    <section className='relative py - 20 bg - gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900 overflow - hidden'>;
      {/* Animated Background Elements */}
      <div className='absolute inset - 0 overflow - hidden'>;
        <div className='absolute -top - 40 -right - 40 w - 80 h - 80 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob'></div>;
        <div className='absolute -bottom - 40 -left - 40 w - 80 h - 80 bg - yellow - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob animation - delay - 2000'></div>;
        <div className='absolute top - 40 left - 40 w - 80 h - 80 bg - pink - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob animation - delay - 4000'></div>;
      </div>;
      <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>        {/* Header */}  }
;
  return (
    <section className="relative py - 20 bg - gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900 overflow - hidden">;
      {/* Animated Background Elements */}
      <div className="absolute inset - 0 overflow - hidden">;
        <div className="absolute -top - 40 -right - 40 w - 80 h - 80 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob"></div>;
        <div className="absolute -bottom - 40 -left - 40 w - 80 h - 80 bg - yellow - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob animation - delay - 2000"></div>;
        <div className="absolute top - 40 left - 40 w - 80 h - 80 bg - pink - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - blob animation - delay - 4000"></div>;
      </div>;
      <div className="relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        {/* Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='text - center mb - 16';
        >;
          <h2 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - white via - purple - 200 to - pink - 200 bg - clip - text text - transparent mb - 6'>;
            Revolutionary 2025 Services;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;
            Discover our comprehensive suite of cutting - edge micro SAAS;
            services, IT solutions, and AI innovations designed to transform;
            your business and drive success in the digital age.          </p>        >;
          <h2 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - white via - purple - 200 to - pink - 200 bg - clip - text text - transparent mb - 6">;
            Revolutionary 2025 Services;
          </h2>;
          <p className="text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed">;
            Discover our comprehensive suite of cutting - edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.;
          </p>;
        </motion.div>;
        {/* Service Categories */}
        <motion.div;
          variants={container_variants}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }}
          className='space - y-16'        >          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="space - y-16";
          {service_categories.map ((category, category_index) => (
            <motion.div;
              key={category.title}
              variants={item_variants}
              className='relative';
            >;
              {/* Category Header */}
              <div className='flex items - center mb - 8'>;
                <div;
                  className={`p - 3 rounded - xl bg - gradient - to - r ${category.gradient} mr - 4`}
                >;
                  <category.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <div>;
                  <h3 className='text - 3xl font - bold text - white mb - 2'>;
                    {category.title}
                  </h3>;
                  <p className='text - gray - 400 text - lg'>                    {category.description}            >;
              {/* Category Header */}
              <div className="flex items - center mb - 8">;
                <div className={`p - 3 rounded - xl bg - gradient - to - r ${category.gradient} mr - 4`}>;
                  <category.icon className="w - 8 h - 8 text - white" />;
                </div>;
                <div>;
                  <h3 className="text - 3xl font - bold text - white mb - 2">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {category.title}
                  </h3>;
                  <p className="text - gray - 400 text - lg">;
                    {category.description}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className='flex items-center mb-8'>
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}
                >
                  <category.icon className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-white mb-2'>
                    {category.title}
                  </h3>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  <p className='text-gray-400 text-lg'>                    {category.description}

                    {category.description}



                  </p>
                </div>
              </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="flex items-center mb-8">;
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category && category.gradient} mr-4`}>;
                  <category && category.icon className="w-8 h-8 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-3xl font-bold text-white mb-2">;
                    {category && category.title}
                  </h3>;
                  <p className="text-gray-400 text-lg">;
                    {category && category.description}
                  </p>;
                </div>;
              </div>;
              {/* Services Grid */}

<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (



              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (
    <section className=&quot;relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob&quot;></div>
        <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000&quot;></div>
        <div className=&quot;absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000&quot;></div>
      </div>

      <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },

  };

  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  }
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'

        >
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Revolutionary 2025 Services
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
            your business and drive success in the digital age.          </p>        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'        >          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className='relative'
            >
              {/* Category Header */}
              <div className='flex items-center mb-8'>
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}
                >
                  <category.icon className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-white mb-2'>
                    {category.title}
                  </h3>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className='text-gray-400 text-lg'>                    {category.description}            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {category.description}
                  <p className='text-gray-400 text-lg'>                    {category.description}

                    {category.description}

<<<<<<< HEAD
                  </p>
                </div>
              </div>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </p>
                </div>
              </div>
=======
              <div className="flex items-center mb-8">;
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category && category.gradient} mr-4`}>;
                  <category && category.icon className="w-8 h-8 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-3xl font-bold text-white mb-2">;
                    {category && category.title}
                  </h3>;
                  <p className="text-gray-400 text-lg">;
                    {category && category.description}
                  </p>;
                </div>;
              </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Services Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (

<<<<<<< HEAD
=======
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
=======

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD

className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    {/* Service Header */}
                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'

                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </p>;
                </div>;
              </div>;
              {/* Services Grid */}
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>                {category.services.map ((service, service_index) => (              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: service_index * 0.1 }}
                    className='group relative bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 30 backdrop - blur - xl rounded - 2xl p - 6 border border - slate - 700 / 50 hover:border - purple - 500 / 50 transition - all duration - 300 hover:transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                  >;
                    {/* Service Header */}
                    <div className='mb - 4'>;
                      <h4 className='text - xl font - semibold text - white mb - 2 group - hover:text - purple - 300 transition - colors'>;
                        {service.name}
                      </h4>;
                      <p className='text - gray - 400 text - sm leading - relaxed'>                        {service.description}                  >;
                    {/* Service Header */}
                    <div className="mb - 4">;
                      <h4 className="text - xl font - semibold text - white mb - 2 group - hover:text - purple - 300 transition - colors">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {service.name}
                      </h4>;
                      <p className="text - gray - 400 text - sm leading - relaxed">;
                        {service.description}

                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'




                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
<<<<<<< HEAD

                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

                        {service.description}
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

                        {service.description}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </p>
                    </div>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="mb-4">;
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">;
                        {service && service.name}
                      </h4>;
                      <p className="text-gray-400 text-sm leading-relaxed">;
                        {service && service.description}
                      </p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Features */}

=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

                        {service.description}

                      </p>
                    </div>
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />

<<<<<<< HEAD
<<<<<<< HEAD
                        )}





                    {/* Pricing */}

                    <div className="mb-4">

                            {feature}
                          </li>;
                        ))}
                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className='mb-4'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-gray-400'>
                          Starting from:
                        </span>
                        <span className='text-lg font-bold text-green-400'>
                          {service.price}
                          {service.period}
                        </span>
                      </div>
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service.marketPosition}                    <div className="mb-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {feature}
                          </li>;
                        ))}

                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{service.features.length - 3} more features
                          </li>

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        )}
=======
                        )}
                      </ul>
                    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {/* Pricing */}

                    <div className="mb-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
<<<<<<< HEAD
<<<<<<< HEAD
                        Market position: {service.marketPosition}
                      </div>
                    </div>
                    {/* ROI */}
                    <div className="mb-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        Market position: {service.marketPosition}

                      </div>
                    </div>
                    {/* ROI */}

                    <div className="mb-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
<<<<<<< HEAD
<<<<<<< HEAD
                          Setup time: {service.setupTime}
=======

                          Setup time: {service.setupTime}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                          Setup time: {service.setupTime}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                      </div>
                    </div>
</ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb-4'>;
                      <div className='flex items-center justify-between'>;
                        <span className='text-sm text-gray-400'>;
                          Starting from:;
                        </span>;
                        <span className='text-lg font-bold text-green-400'>;
                          {service && service.price}
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service && service.marketPosition}                    <div className="mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">Starting from:</span>;
                        <span className="text-lg font-bold text-green-400">;
                          {service && service.price}{service && service.period}
                        </span>;
                      </div>;
                      <div className="text-xs text-gray-500 mt-1">;
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb-4'>;
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>;
                        ROI & Benefits:;
                      </h5>;
                      <div className='text-xs text-gray-400'>;
                        <div className='flex items-center mb-1'>;
                          <TrendingUp className='w-3 h-3 text-blue-400 mr-2 flex-shrink-0' />;
                          {service && service.roi}
                        </div>;
                        <div className='text-xs text-gray-500'>                          Setup time: {service && service.setupTime}                    <div className="mb-4">;
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>;
                      <div className="text-xs text-gray-400">;
                        <div className="flex items-center mb-1">;
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />;
                          {service && service.roi}
                        </div>;
                        <div className="text-xs text-gray-500">;
                        </div>;
                      </div>;
                    </div>;
                    {/* Use Cases */}
<<<<<<< HEAD
<<<<<<< HEAD
                            </span>;
                          ))}                      </div>;
                    </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                            </span>;
                          ))}                      </div>;
                    </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* CTA Button */}
                    <div className='mt-6'>                    <div className="mb-4">;
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>;
                      <div className="flex flex-wrap gap-1">;
                        {service && service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (;
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full">;
                            {useCase}
                          </span>;
                        ))}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>
                    {/* CTA Button */}
                    <div className='mt-6'>
=======
                    </div>
                    {/* CTA Button */}
                    <div className='mt-6'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <a
                        href={service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'
                      >
                        Learn More
                        <ArrowRight className='w-4 h-4 ml-2' />                      </a>
                    </div>
                    {/* Hover Effect Overlay */}
<<<<<<< HEAD
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    </div>;


                    {/* CTA Button */}
                    <div className='mt-6'>;
                      <a


<<<<<<< HEAD
                    </div>;
                    {/* CTA Button */}
                    <div className='mt-6'>;
                      <a
                      </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  </motion.div>                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        </motion && motion.div>;


<<<<<<< HEAD
<<<<<<< HEAD



        {/* Call to Action */}
        <motion&& motion.div
{/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;
                  </motion && motion.div>;
                ))}
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
          className="text-center mt-20"
        >

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center mt-20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our cutting-edge
              solutions to drive innovation, efficiency, and growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a
                href='https://ziontechgroup && ziontechgroup.com/contact'
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                Get Started Today;
                <Rocket className='w-5 h-5 ml-2' />;
              </a>;
              <a
                href='tel:+13024640950'
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600'>;
                Call +1 302 464 0950;
                <Phone className='w-5 h-5 ml-2' />              </a>        >;
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href="https://ziontechgroup && ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30">;
                Get Started Today;
                <Rocket className="w-5 h-5 ml-2" />;
              </a>;
              <a
                href="tel:+13024640950"


<<<<<<< HEAD
<<<<<<< HEAD
              <a
                href='https://ziontechgroup.com/contact'
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'
              >
                Get Started Today
                <Rocket className='w-5 h-5 ml-2' />
              </a>
              <a
                href='tel:+13024640950'
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600'
              >
                Call +1 302 464 0950
                <Phone className='w-5 h-5 ml-2' />              </a>        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Call +1 302 464 0950
                <Phone className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
=======
};
export default ComprehensiveServicesShowcase2025;  );
};
=======
};
export default ComprehensiveServicesShowcase2025;  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default ComprehensiveServicesShowcase2025;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </p>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        Key Features:;
                      </h5>;
                      <ul className='space - y-1'>;
                        {service.features;
                          ?.slice (0, 3);
                          .map ((feature, feature_index) => (
                            <li;
                              key={feature_index}
                              className='flex items - center text - xs text - gray - 400';
                            >;
                              <CheckCircle className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />;
                              {feature}
                            </li>))}
                        {service.features && service.features.length > 3 && (
                          <li className='text - xs text - gray - 500 italic'>                            +{service.features.length - 3} more features                    <div className="mb - 4">;
                      <h5 className="text - sm font - medium text - purple - 300 mb - 2">Key Features:</h5>;
                      <ul className="space - y-1">;
                        {service.features?.slice (0, 3).map ((feature, feature_index) => (
                          <li key={feature_index} className="flex items - center text - xs text - gray - 400">;
                            <CheckCircle className="w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0" />;
                            {feature}
                          </li>))}
                        {service.features && service.features.length > 3 && (
                          <li className="text - xs text - gray - 500 italic">;
                          </li>)}
                      </ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb - 4'>;
                      <div className='flex items - center justify - between'>;
                        <span className='text - sm text - gray - 400'>;
                          Starting from:;
                        </span>;
                        <span className='text - lg font - bold text - green - 400'>;
                          {service.price}
                          {service.period}
                        </span>;
                      </div>;
                      <div className='text - xs text - gray - 500 mt - 1'>                        Market position: {service.market_position}                    <div className="mb - 4">;
                      <div className="flex items - center justify - between">;
                        <span className="text - sm text - gray - 400">Starting from:</span>;
                        <span className="text - lg font - bold text - green - 400">;
                          {service.price}{service.period}
                        </span>;
                      </div>;
                      <div className="text - xs text - gray - 500 mt - 1">;
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        ROI & Benefits:;
                      </h5>;
                      <div className='text - xs text - gray - 400'>;
                        <div className='flex items - center mb - 1'>;
                          <TrendingUp className='w - 3 h - 3 text - blue - 400 mr - 2 flex - shrink - 0' />;
                          {service.roi}
                        </div>;
                        <div className='text - xs text - gray - 500'>                          Setup time: {service.setup_time}                    <div className="mb - 4">;
                      <h5 className="text - sm font - medium text - purple - 300 mb - 2">ROI & Benefits:</h5>;
                      <div className="text - xs text - gray - 400">;
                        <div className="flex items - center mb - 1">;
                          <TrendingUp className="w - 3 h - 3 text - blue - 400 mr - 2 flex - shrink - 0" />;
                          {service.roi}
                        </div>;
                        <div className="text - xs text - gray - 500">;
                        </div>;
                      </div>;
                    </div>;
                    {/* Use Cases */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        Perfect for:;
                      </h5>;
                      <div className='flex flex - wrap gap - 1'>;
                        {service.use_cases;
                          ?.slice (0, 3);
                          .map ((use_case, useCaseIndex) => (
                            <span;
                              key={useCaseIndex}
                              className='px - 2 py - 1 bg - slate - 700 / 50 text - xs text - gray - 300 rounded - full';
                            >;
                              {use_case}
                            </span>))}                      </div>;
                    </div>;
                    {/* CTA Button */}
                    <div className='mt - 6'>                    <div className="mb - 4">;
                      <h5 className="text - sm font - medium text - purple - 300 mb - 2">Perfect for:</h5>;
                      <div className="flex flex - wrap gap - 1">;
                        {service.use_cases?.slice (0, 3).map ((use_case, useCaseIndex) => (
                          <span;
                            key={useCaseIndex}
                            className="px - 2 py - 1 bg - slate - 700 / 50 text - xs text - gray - 300 rounded - full";
                          >;
                            {use_case}
                          </span>))}
                    </div>;
                    {/* CTA Button */}
                    <div className='mt - 6'>;
                      <a;
                        href={service.link}
                        className='inline - flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - sm font - medium rounded - lg hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                      >;
                        Learn More;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />                      </a>;
                    </div>;
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                  </motion.div>                      <a;
                        href={service.link}
                        className="inline - flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - sm font - medium rounded - lg hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                      >;
                        Learn More;
                        <ArrowRight className="w - 4 h - 4 ml - 2" />;
                      </a>;
                    </div>;
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                    <div className="absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />;
                  </motion.div>))}
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text - center mt - 20';
        >;
          <div className='bg - gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - xl rounded - 3xl p - 8 border border - purple - 500 / 30'>;
            <h3 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Join thousands of businesses already leveraging our cutting - edge;
              solutions to drive innovation, efficiency, and growth.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='https://ziontechgroup.com / contact';
                className='inline - flex items - center justify - center px - 8 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white font - semibold rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;
                Get Started Today;
                <Rocket className='w - 5 h - 5 ml - 2' />;
              </a>;
              <a;
                href='tel:+13024640950';
                className='inline - flex items - center justify - center px - 8 py - 3 bg - slate - 700 / 50 text - white font - semibold rounded - xl hover:bg - slate - 600 / 50 transition - all duration - 200 border border - slate - 600';
              >;
                Call +1 302 464 0950;
                <Phone className='w - 5 h - 5 ml - 2' />              </a>        >;
          <div className="bg - gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - xl rounded - 3xl p - 8 border border - purple - 500 / 30">;
            <h3 className="text - 3xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
              Join thousands of businesses already leveraging our cutting - edge solutions to drive innovation, efficiency, and growth.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="https://ziontechgroup.com / contact";
                className="inline - flex items - center justify - center px - 8 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white font - semibold rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
              >;
                Get Started Today;
                <Rocket className="w - 5 h - 5 ml - 2" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="inline - flex items - center justify - center px - 8 py - 3 bg - slate - 700 / 50 text - white font - semibold rounded - xl hover:bg - slate - 600 / 50 transition - all duration - 200 border border - slate - 600";
              >;
                Call +1 302 464 0950;
                <Phone className="w - 5 h - 5 ml - 2" />;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default ComprehensiveServicesShowcase2025);
}
;
export default ComprehensiveServicesShowcase2025;
;
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
};

export default ComprehensiveServicesShowcase2025;  )
}
export default ComprehensiveServicesShowcase2025;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default ComprehensiveServicesShowcase2025;
export default ComprehensiveServicesShowcase2025;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
