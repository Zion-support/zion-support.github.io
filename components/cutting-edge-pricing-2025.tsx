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
import React, { useState } from 'react';

import Head from 'next/head';

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Head from 'next / head';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import { motion } from 'framer-motion';


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
} from 'lucide-react';

=======
} from 'lucide-react';
=======
} from 'lucide-react';

import { motion } from 'framer-motion';
import {
  Check
  Zap
  Shield
  Brain
  Atom
  Target
  Rocket
  Star
  TrendingUp
  Award
  Users
  ArrowRight
  ExternalLink
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
import { motion } from 'framer-motion';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {;
  Check,;
  Zap,;
  Shield,;
  Brain,;
  Atom,;
  Target,;
  Rocket,;
  Star,;
  TrendingUp,;
  Award,;
  Users,;
  ArrowRight,;
  ExternalLink,;
  Phone,;
  Mail,;
  MapPin,;} from 'lucide-react';import { ;
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin;
import { 
<<<<<<< HEAD
import React, { useState } from 'react',
import React, { useState } from 'react';
import Head from 'next/head';

import { motion } from 'framer-motion';
import {
  Check
  Zap
  Shield
  Brain
  Atom
  Target
  Rocket
  Star
  TrendingUp
  Award
  Users
  ArrowRight
  ExternalLink
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin
} from 'lucide-react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin
} from 'lucide-react';

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025  } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025  } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025  } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';
<<<<<<< HEAD
<<<<<<< HEAD

=======
const contactInfo = {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
  Check,
  Zap,
  Shield,
  Brain,
  Atom,
  Target,
  Rocket,
  Star,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,;
  MapPin,;} from 'lucide-react';import { 
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
}
const pricingTiers = [
  {
    name: 'Starter'
    price: 99
    period: 'month'
    description: 'Perfect for small businesses and startups'
    features: [
      'Up to 5 team membersBasic AI content generationStandard supportCore integrationsBasic analyticsEmail support'
    ]
    icon: <Target className="w-6 h-6" />
    color: 'from-blue-500 to-cyan-500'
    cta: 'Start Free Trial'
    ctaLink: '/contact'
    popular: false
  }
  {
    name: 'Professional'
    price: 299
    period: 'month'
    description: 'Ideal for growing businesses and teams'
    features: [
      'Up to 25 team membersAdvanced AI featuresPriority supportAdvanced integrationsAdvanced analyticsPhone & email supportCustom brandingAPI access'
    ]
    icon: <Zap className="w-6 h-6" />
    color: 'from-purple-500 to-pink-500'
    cta: 'Start Free Trial'
    ctaLink: '/contact'
    popular: true
  }
  {
    name: 'Enterprise'
    price: 999
    period: 'month'
    description: 'For large organizations with complex needs'
    features: [
      'Unlimited team membersFull AI suite access24/7 dedicated supportCustom integrationsAdvanced analytics & reportingDedicated account managerCustom developmentSLA guarantees';
      'On-premise optionsCompliance certifications'
    ]
    icon: <Shield className="w-6 h-6" />
    color: 'from-green-500 to-emerald-500'
    cta: 'Contact Sales'
    ctaLink: '/contact'
    popular: false
  }
const serviceCategories = [
  {
    name: 'AI & Consciousness Services'
    icon: <Brain className='w-8 h-8' />
    services: cuttingEdgeAIServices2025.slice(0, 6)
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence'
  }
  {
    name: 'Quantum & Emerging Tech'
    icon: <Atom className='w-8 h-8' />
    color: 'from-purple-500 to-pink-500'
    services: cuttingEdgeQuantumServices2025.slice(0, 6)
    description:
      'Breakthrough quantum computing and space technology solutions'
  }
  {
    name: 'Enterprise IT Solutions'
    icon: <Shield className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
    services: cuttingEdgeEnterpriseITServices2025.slice(0, 6)
    description: 'Advanced enterprise infrastructure and security solutions'
  }
  {
    name: 'Micro SAAS Solutions'
    icon: <Rocket className='w-8 h-8' />
    color: 'from-teal-500 to-emerald-500'
    services: cuttingEdgeMicroSaasServices2025.slice(0, 6)
    description: 'Innovative business solutions for modern enterprises'
  }
];
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
}
const pricingTiers = [
  {
    name: 'Starter'
    price: 99
    period: 'month'
    description: 'Perfect for small businesses and startups'
    features: [
      'Up to 5 team membersBasic AI content generationStandard supportCore integrationsBasic analyticsEmail support'
    ]
    icon: <Target className="w-6 h-6" />
    color: 'from-blue-500 to-cyan-500'
    cta: 'Start Free Trial'
    ctaLink: '/contact'
    popular: false
  }
  {
    name: 'Professional'
    price: 299
    period: 'month'
    description: 'Ideal for growing businesses and teams'
    features: [
      'Up to 25 team membersAdvanced AI featuresPriority supportAdvanced integrationsAdvanced analyticsPhone & email supportCustom brandingAPI access'
    ]
    icon: <Zap className="w-6 h-6" />
    color: 'from-purple-500 to-pink-500'
    cta: 'Start Free Trial'
    ctaLink: '/contact'
    popular: true
  }
  {
    name: 'Enterprise'
    price: 999
    period: 'month'
    description: 'For large organizations with complex needs'
    features: [
      'Unlimited team membersFull AI suite access24/7 dedicated supportCustom integrationsAdvanced analytics & reportingDedicated account managerCustom developmentSLA guarantees';
      'On-premise optionsCompliance certifications'
    ]
    icon: <Shield className="w-6 h-6" />
    color: 'from-green-500 to-emerald-500'
    cta: 'Contact Sales'
    ctaLink: '/contact'
    popular: false
  }
const serviceCategories = [
  {
    name: 'AI & Consciousness Services'
    icon: <Brain className='w-8 h-8' />
    services: cuttingEdgeAIServices2025.slice(0, 6)
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence'
  }
  {
    name: 'Quantum & Emerging Tech'
    icon: <Atom className='w-8 h-8' />
    color: 'from-purple-500 to-pink-500'
    services: cuttingEdgeQuantumServices2025.slice(0, 6)
    description:
      'Breakthrough quantum computing and space technology solutions'
  }
  {
    name: 'Enterprise IT Solutions'
    icon: <Shield className='w-8 h-8' />
    color: 'from-blue-500 to-cyan-500'
    services: cuttingEdgeEnterpriseITServices2025.slice(0, 6)
    description: 'Advanced enterprise infrastructure and security solutions'
  }
  {
    name: 'Micro SAAS Solutions'
    icon: <Rocket className='w-8 h-8' />
    color: 'from-teal-500 to-emerald-500'
    services: cuttingEdgeMicroSaasServices2025.slice(0, 6)
    description: 'Innovative business solutions for modern enterprises'
  }
];

import { motion } from 'framer-motion';


} from 'lucide-react';

import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025  } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025  } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025  } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

const stats = [
  {
    number: '25+'
    label: 'Cutting-Edge Services'
    icon: Star
    color: 'text-cyan-400'
  }
  {
    number: '$500B+'
    label: 'Market Coverage'
    icon: TrendingUp
    color: 'text-purple-400'
  }
  {
    number: '99.9%'
    label: 'Success Rate'
    icon: Award
    color: 'text-green-400'
  }
  {
    number: '24/7'
    label: 'Expert Support'
    icon: Users
    color: 'text-pink-400'
  },];  { number: '25+', label: 'Cutting-Edge Services', icon: Star, color: 'text-cyan-400' }
  { number: '$500B+', label: 'Market Coverage', icon: TrendingUp, color: 'text-purple-400' }
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' }
  { number: '24/7', label: 'Expert Support', icon: Users, color: 'text-pink-400' }
<<<<<<< HEAD
<<<<<<< HEAD

];


export default function CuttingEdgePricing2025() {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export default function CuttingEdgePricing2025() {;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const allServices = [


<<<<<<< HEAD
=======
export default function CuttingEdgePricing2025() {

export default function CuttingEdgePricing2025() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allServices = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default function CuttingEdgePricing2025() {


export default function CuttingEdgePricing2025() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allServices = [


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
};
visible: {;
  opacity: 1, transition: {;
  staggerChildren: 0 && 0.1 ;

};
const itemVariants = {;
  hidden: {;
  y: 20, opacity: 0 ;
};
visible: {;
  y: 0, opacity: 1, transition: {;
  duration: 0 && 0.5 ;

};
const pricingTiers = [;
  {;
    name: 'Starter',;
    price: 99,;
    period: 'month',;
    description: 'Perfect for small businesses and startups',;
    features: [;
      'Up to 5 team membersBasic AI content generationStandard supportCore integrationsBasic analyticsEmail support';
    ],;
    icon: <Target className="w-6 h-6" />,;
    color: 'from-blue-500 to-cyan-500',;
    cta: 'Start Free Trial',;
    ctaLink: '/contact',;
    popular: false;
  };
  {;
    name: 'Professional',;
    price: 299,;
    period: 'month',;
    description: 'Ideal for growing businesses and teams',;
    features: [;
      'Up to 25 team membersAdvanced AI featuresPriority supportAdvanced integrationsAdvanced analyticsPhone & email supportCustom brandingAPI access';
    ],;
    icon: <Zap className="w-6 h-6" />,;
    color: 'from-purple-500 to-pink-500',;
    cta: 'Start Free Trial',;
    ctaLink: '/contact',;
    popular: true;
  };
  {;
    name: 'Enterprise',;
    price: 999,;
    period: 'month',;
    description: 'For large organizations with complex needs',;
    features: [;
      'Unlimited team membersFull AI suite access24/7 dedicated supportCustom integrationsAdvanced analytics & reportingDedicated account managerCustom developmentSLA guarantees';
      'On-premise optionsCompliance certifications';
    ],;
    icon: <Shield className="w-6 h-6" />,;
    color: 'from-green-500 to-emerald-500',;
    cta: 'Contact Sales',;
    ctaLink: '/contact',;
    popular: false;
  }

const serviceCategories = [;
  {;
    name: 'AI & Consciousness Services',;
    icon: <Brain className='w-8 h-8' />,;
    services: cuttingEdgeAIServices2025 && cuttingEdgeAIServices2025.slice(0, 6),;
    description:;
      'Revolutionary AI platforms with consciousness and emotional intelligence',;
  },;
  {;
    name: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-8 h-8' />,;
    color: 'from-purple-500 to-pink-500',;
    services: cuttingEdgeQuantumServices2025 && cuttingEdgeQuantumServices2025.slice(0, 6),;
    description:;
      'Breakthrough quantum computing and space technology solutions',;
  },;
  {;
    name: 'Enterprise IT Solutions',;
    icon: <Shield className='w-8 h-8' />,;
    color: 'from-blue-500 to-cyan-500',;
    services: cuttingEdgeEnterpriseITServices2025 && cuttingEdgeEnterpriseITServices2025.slice(0, 6),;
    description: 'Advanced enterprise infrastructure and security solutions',;
  },;
  {;
    name: 'Micro SAAS Solutions',;
    icon: <Rocket className='w-8 h-8' />,;
    color: 'from-teal-500 to-emerald-500',;
    services: cuttingEdgeMicroSaasServices2025 && cuttingEdgeMicroSaasServices2025.slice(0, 6),;
    description: 'Innovative business solutions for modern enterprises',;
  },;
];

const stats = [;
  {;
    number: '25+',;
    label: 'Cutting-Edge Services',;
    icon: Star,;
    color: 'text-cyan-400',;
  },;
  {;
    number: '$500B+',;
    label: 'Market Coverage',;
    icon: TrendingUp,;
    color: 'text-purple-400',;
  },;
  {;
    number: '99 && 99.9%',;
    label: 'Success Rate',;
    icon: Award,;
    color: 'text-green-400',;
  },;
  {;
    number: '24/7',;
    label: 'Expert Support',;
    icon: Users,;
    color: 'text-pink-400',;
  },];  { number: '25+', label: 'Cutting-Edge Services', icon: Star, color: 'text-cyan-400' },;
  { number: '$500B+', label: 'Market Coverage', icon: TrendingUp, color: 'text-purple-400' },;
  { number: '99 && 99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' },;
  { number: '24/7', label: 'Expert Support', icon: Users, color: 'text-pink-400' }
<<<<<<< HEAD

export default function CuttingEdgePricing2025() {;
  const [selectedCategory, setSelectedCategory] = useState('all');

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const allServices = [;
    ...cuttingEdgeAIServices2025,;
    ...cuttingEdgeQuantumServices2025,;
    ...cuttingEdgeEnterpriseITServices2025,;
    ...cuttingEdgeMicroSaasServices2025,;
  ];

  const filteredServices =;
    selectedCategory === 'all';
      ? allServices;
      : allServices && allServices.filter(service => service && service.category === selectedCategory);    ...cuttingEdgeAIServices2025;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    ...cuttingEdgeMicroSaasServices2025;
  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',

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
        duration: 0.5
      }
    },  };        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },  };

  };

  return (
    <>
      <Head>
        <title>
          Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology
          Solutions
        </title>
        <meta
          name='description'
          content='Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions.'
        />
        <meta
          name='keywords'
          content='cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />      </Head>
      <Layout>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0.9 }}        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions." />
        <meta name="keywords" content="cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      <Layout>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'              className="text-center"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Pricing 2025
                </span>
              </motion.h1>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  const filteredServices = selectedCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => service && service.category === selectedCategory);
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;

<<<<<<< HEAD
      }
    }
  }
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        duration: 0.5,
      },
    },  };

  };

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  return (
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


              <motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Pricing 2025
                </span>
              </motion.h1>


              <motion.p 


                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
<<<<<<< HEAD
                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 

=======
    ...cuttingEdgeAIServices2025;
  Check,
  Zap,
  Shield,
  Brain,
  Atom,
  Target,
  Rocket,
  Star,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,} from 'lucide-react';import {
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin;
} from 'lucide-react';
import Layout from '../components / layout / Layout';
import { cuttingEdgeAIServices2025 } from '../data / 2025 - cutting - edge - ai - services';
import { cuttingEdgeQuantumServices2025 } from '../data / 2025 - cutting - edge - quantum - services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data / 2025 - cutting - edge - enterprise - it';
import { cuttingEdgeMicroSaasServices2025 } from '../data / 2025 - cutting - edge - micro - saas';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
visible: {
  opacity: 1, transition: {
  stagger_children: 0.1;
}
const item_variants = {
  hidden: {
  coordinate_y: 20, opacity: 0;
}
visible: {
  coordinate_y: 0, opacity: 1, transition: {
  duration: 0.5;
}
const pricing_tiers = [;
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small businesses and startups',
features: [;
      'Up to 5 team members_basic AI content generation_standard support_core integrations_basic analytics_email support';
    ],
    icon: <Target className="w - 6 h - 6" />,
    color: 'from - blue - 500 to - cyan - 500',
    cta: 'Start Free Trial',
    cta_link: '/contact',
    popular: false;
  }
  {
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Ideal for growing businesses and teams',
features: [;
      'Up to 25 team members_advanced AI features_priority support_advanced integrations_advanced analytics_phone & email support_custom brandingAPI access';
    ],
    icon: <Zap className="w - 6 h - 6" />,
    color: 'from - purple - 500 to - pink - 500',
    cta: 'Start Free Trial',
    cta_link: '/contact',
    popular: true;
  }
  {
    name: 'Enterprise',
    price: 999,
    period: 'month',
    description: 'For large organizations with complex needs',
features: [;
      'Unlimited team members_full AI suite access24 / 7 dedicated support_custom integrations_advanced analytics & reporting_dedicated account manager_custom developmentSLA guarantees';
      'On - premise options_compliance certifications';
    ],
    icon: <Shield className="w - 6 h - 6" />,
    color: 'from - green - 500 to - emerald - 500',
    cta: 'Contact Sales',
    cta_link: '/contact',
    popular: false;
  }
const service_categories = [;
  {
    name: 'AI & Consciousness Services',
    icon: <Brain className='w - 8 h - 8' />,
    services: cuttingEdgeAIServices2025.slice (0, 6),
    description:;
      'Revolutionary AI platforms with consciousness and emotional intelligence',
  },
  {
    name: 'Quantum & Emerging Tech',
    icon: <Atom className='w - 8 h - 8' />,
    color: 'from - purple - 500 to - pink - 500',
    services: cuttingEdgeQuantumServices2025.slice (0, 6),
    description:;
      'Breakthrough quantum computing and space technology solutions',
  },
  {
    name: 'Enterprise IT Solutions',
    icon: <Shield className='w - 8 h - 8' />,
    color: 'from - blue - 500 to - cyan - 500',
    services: cuttingEdgeEnterpriseITServices2025.slice (0, 6),
    description: 'Advanced enterprise infrastructure and security solutions',
  },
  {
    name: 'Micro SAAS Solutions',
    icon: <Rocket className='w - 8 h - 8' />,
    color: 'from - teal - 500 to - emerald - 500',
    services: cuttingEdgeMicroSaasServices2025.slice (0, 6),
    description: 'Innovative business solutions for modern enterprises',
  },
];
;
const stats = [;
  {
    number: '25+',
    label: 'Cutting - Edge Services',
    icon: Star,
    color: 'text - cyan - 400',
  },
  {
    number: '$500B+',
    label: 'Market Coverage',
    icon: TrendingUp,
    color: 'text - purple - 400',
  },
  {
    number: '99.9%',
    label: 'Success Rate',
    icon: Award,
    color: 'text - green - 400',
  },
  {
    number: '24 / 7',
    label: 'Expert Support',
    icon: Users,
    color: 'text - pink - 400',
  }, ];  { number: '25+', label: 'Cutting - Edge Services', icon: Star, color: 'text - cyan - 400' },
  { number: '$500B+', label: 'Market Coverage', icon: TrendingUp, color: 'text - purple - 400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text - green - 400' },
  { number: '24 / 7', label: 'Expert Support', icon: Users, color: 'text - pink - 400' }
export default /**
 * CuttingEdgePricing2025 - Function description
 */
function CuttingEdgePricing2025() {
  const [selected_category, setSelectedCategory] = useState ('all');
;
  const all_services = [;
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025,
  ];
;
  const filtered_services =;
    selected_category === 'all';
      ? all_services;
      : all_services.filter (service => service.category === selected_category);    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    ...cuttingEdgeMicroSaasServices2025;
  ];
;
  const filtered_services = selected_category === 'all';
    ? all_services;
    : all_services.filter (service => service.category === selected_category);
  const container_variants = {
    hidden: { opacity: 0 },
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory);
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',

  const containerVariants = {
    hidden: { opacity: 0 }
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
    },  };

  };

  return (
    <>
      <Head>
        <title>
          Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology
          Solutions
        </title>
        <meta
          name='description'
          content='Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions.'
        />
        <meta
          name='keywords'
          content='cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />      </Head>
      <Layout>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>;
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
    <>
      <Head>
        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions." />
        <meta name="keywords" content="cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
              transition={{ duration: 0 && 0.8 }}
              className='text-center'>;
              <motion&& motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0 && 0.9 }}        <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>;
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions." />;
        <meta name="keywords" content="cutting-edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;
      <Layout>;
        {/* Hero Section */}
        <section className='relative overflow-hidden'>;
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>        <section className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>;
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'              className="text-center"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge
                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                Experience revolutionary technology at competitive prices. Our
                cutting-edge services are designed to give you a competitive
                advantage while maintaining affordability and value.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                a competitive advantage while maintaining affordability and value.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
<<<<<<< HEAD
=======
=======
      }
    }
  };

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },  };        duration: 0 && 0.5;
      }
    }
  }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              transition={{ duration: 0 && 0.8 }}
              className='text-center'>;
              <motion&& motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'              className="text-center">;
              <motion&& motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0 && 0.2 }}>;
                Cutting-Edge;
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>;
                  Pricing 2025;
                </span>;
              </motion && motion.h1>;

              <motion&& motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">;
                  Pricing 2025;
                </span>;
              </motion && motion.h1>;

              <motion&& motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                Experience revolutionary technology at competitive prices. Our;
                cutting-edge services are designed to give you a competitive;
                advantage while maintaining affordability and value.;
              </motion && motion.p>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Pricing 2025
                </span>
              </motion.h1>

              <motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Pricing 2025
                </span>
              </motion.h1>
              <motion.p
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience revolutionary technology at competitive prices. Our
                cutting-edge services are designed to give you a competitive
                advantage while maintaining affordability and value.
              </motion.p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {/* Hero Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you 
                a competitive advantage while maintaining affordability and value.
              </motion && motion.p>;
<<<<<<< HEAD

              {/* Hero Stats */}
              <motion&& motion.div 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
<<<<<<< HEAD
=======

                initial={{ opacity: 0, y: 20 }}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                initial={{ opacity: 0, y: 20 }}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div key={index} className='text-center'>
                    <div className='flex justify-center mb-2'>
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                      {stat.number}
                    </div>
<<<<<<< HEAD

                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>

                  </div>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                ))}

              </motion && motion.div>;
            </motion && motion.div>;
          </div>;
        </section>;


<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.6 }}>;
                {stats && stats.map((stat, index) => (;
                  <div key={index} className='text-center'>;
                    <div className='flex justify-center mb-2'>;
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>;
                        <stat && stat.icon className={`w-5 h-5 ${stat && stat.color}`} />;
                      </div>;
                    </div>;
                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>;
                      {stat && stat.number}
                    </div>;
                    <div className='text-sm text-white/70'>{stat && stat.label}</div>                  </div>                  <div key={index} className="text-center">;
                    <div className="flex justify-center mb-2">;
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">;
                        <stat && stat.icon className={`w-5 h-5 ${stat && stat.color}`} />;
                      </div>;
                    </div>;
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat && stat.number}</div>;
                    <div className="text-sm text-white/70">{stat && stat.label}</div>;
                ))}
<<<<<<< HEAD

                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Pricing Tiers Section */}
        <section className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>

                  </div>

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Pricing Tiers Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======






>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD


                </span>{' '}
                Pricing Plans;
              </h2>              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                </span>{' '}

              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology 

                and world-class support to ensure your success.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {pricingTiers.map((tier, index) => (

                <motion.div
=======
=======
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology 
                and world-class support to ensure your success.
              </p>
            </motion.div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                Pricing Plans;
              </h2>;
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
                Choose the perfect plan for your business needs. All plans;
                include our cutting-edge technology and world-class support to;
                ensure your success.;
              </p>;
            </motion && motion.div>;

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>              {pricingTiers && pricingTiers.map((tier, index) => (              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology ;
                and world-class support to ensure your success.;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
                <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>                  Flexible
                </span>{' '}
                Pricing Plans
              </h2>              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                </span>{' '}
                Pricing Plans
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Choose the perfect plan for your business needs. All plans
                include our cutting-edge technology and world-class support to
                ensure your success.
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>              {pricingTiers.map((tier, index) => (              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our cutting-edge technology
                and world-class support to ensure your success.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <motion.div
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group ${
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        </li>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                      ))}
                    </ul>

<<<<<<< HEAD
=======
        duration: 0.5,
      },
    },  }        duration: 0.5;
      }
    }
  }
;
  return (
    <>;
      <Head>;
        <title>;
          Cutting - Edge Pricing 2025 - Zion Tech Group | Future Technology;
          Solutions;
        </title>;
        <meta;
          name='description';
          content='Discover competitive pricing for our revolutionary cutting - edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions.';
        />;
        <meta;
          name='keywords';
          content='cutting - edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1' />;
        <link rel='icon' href='/favicon.ico' />      </Head>;
      <Layout>;
        {/* Hero Section */}
        <section className='relative overflow - hidden'>;
          <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'></div>;
          <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24 lg:py - 32'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center';
            >;
              <motion.h1;
                className='text - 4xl md:text - 6xl lg:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6'                initial={{ opacity: 0, scale: 0.9 }}        <title > Cutting - Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title>;
        <meta name="description" content="Discover competitive pricing for our revolutionary cutting - edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions." />;
        <meta name="keywords" content="cutting - edge pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SAAS pricing" />;
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
        <link rel="icon" href="/favicon.ico" />;
      <Layout>;
        {/* Hero Section */}
        <section className='relative overflow - hidden'>;
          <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'></div>;
          <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24 lg:py - 32'>        <section className="relative overflow - hidden">;
          <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black"></div>;
          <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24 lg:py - 32">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center';
            >;
              <motion.h1;
                className='text - 4xl md:text - 6xl lg:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6'              className="text - center";
            >;
              <motion.h1;
                className="text - 4xl md:text - 6xl lg:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6";
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >;
                Cutting - Edge;
                <span className='block text - 2xl md:text - 3xl lg:text - 4xl mt - 4 text - white / 90'>;
                  Pricing 2025;
                </span>;
              </motion.h1>;
              <motion.p;
                className='text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto mb - 12 leading - relaxed'                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text - 2xl md:text - 3xl lg:text - 4xl mt - 4 text - white / 90">;
                  Pricing 2025;
                </span>;
              </motion.h1>;
              <motion.p;
                className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto mb - 12 leading - relaxed";
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >;
                Experience revolutionary technology at competitive prices. Our;
                cutting - edge services are designed to give you a competitive;
                advantage while maintaining affordability and value.;
              </motion.p>;
              {/* Hero Stats */}
              <motion.div;
                className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12'                initial={{ opacity: 0, coordinate_y: 20 }}                Experience revolutionary technology at competitive prices. Our cutting - edge services are designed to give you;
                a competitive advantage while maintaining affordability and value.;
              </motion.p>;
              {/* Hero Stats */}
              <motion.div;
                className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12";
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >;
                {stats.map ((stat, index) => (
                  <div key={index} className='text - center'>;
                    <div className='flex justify - center mb - 2'>;
                      <div className='p - 3 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30'>;
                        <stat.icon className={`w - 5 h - 5 ${stat.color}`} />;
                      </div>;
                    </div>;
                    <div className='text - 2xl md:text - 3xl font - bold text - white mb - 1'>;
                      {stat.number}
                    </div>;
                    <div className='text - sm text - white / 70'>{stat.label}</div>                  </div>                  <div key={index} className="text - center">;
                    <div className="flex justify - center mb - 2">;
                      <div className="p - 3 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30">;
                        <stat.icon className={`w - 5 h - 5 ${stat.color}`} />;
                      </div>;
                    </div>;
                    <div className="text - 2xl md:text - 3xl font - bold text - white mb - 1">{stat.number}</div>;
                    <div className="text - sm text - white / 70">{stat.label}</div>))}
              </motion.div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Pricing Tiers Section */}
        <section className='py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>                  Flexible;
                </span>{' '}
                Pricing Plans;
              </h2>              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                </span>{' '}
                Pricing Plans;
              </h2>;
              <p className='text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
                Choose the perfect plan for your business needs. All plans;
                include our cutting - edge technology and world - class support to;
                ensure your success.;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8 max - w-6xl mx - auto'>              {pricing_tiers.map ((tier, index) => (              <p className="text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
                Choose the perfect plan for your business needs. All plans include our cutting - edge technology;
                and world - class support to ensure your success.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 max - w-6xl mx - auto">;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group ${
                    tier.popular ? 'scale - 105' : '';
                  }`}
                >
                  {tier.popular && (
                    <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                      <span className='bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 4 py - 2 rounded - full text - sm font - semibold'>                        Most Popular;
                      </span>;
                    </div>)}                    <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 4 py - 2 rounded - full text - sm font - semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div;
                    className={`relative p - 8 rounded - 2xl border border - cyan - 500 / 20 bg - gradient - to - br from - black / 80 via - purple - 900 / 10 to - black / 80 backdrop - blur - sm hover:border - cyan - 500 / 50 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 ${
                      tier.popular;
                        ? 'border - cyan - 500 / 50 shadow - cyan - 500 / 20';
                        : '';
                    }`}
                  >;
                    <div className='text - center mb - 8'>;
                      <div;
                        className={`inline - flex items - center justify - center w - 16 h - 16 rounded - full bg - gradient - to - r ${tier.color} mb - 4`}
                      >;
                        {tier.icon}
                      </div>;
                      <h3 className='text - 2xl font - bold text - white mb - 2'>;
                        {tier.name}
                      </h3>;
                      <p className='text - white / 70 mb - 6'>{tier.description}</p>;
                      <div className='text - 4xl font - bold text - white mb - 2'>;
                        ${tier.price}
                        <span className='text - lg font - normal text - white / 60'>;
                          /{tier.period}
                    tier.popular ? 'scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div
                    className={`relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      tier.popular
                        ? 'border-cyan-500/50 shadow-cyan-500/20'
                        : ''
                    }`}
                  >
                    <div className='text-center mb-8'>
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mb-4`}
                      >
                        {tier.icon}
                      </div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {tier.name}
                      </h3>
                      <p className='text-white/70 mb-6'>{tier.description}</p>
                      <div className='text-4xl font-bold text-white mb-2'>
                        ${tier.price}
                        <span className='text-lg font-normal text-white/60'>
                          /{tier.period}
                        </span>
                      </div>
                    </div>
                    <ul className='space-y-4 mb-8'>
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='flex items-start'>
                          <Check className='w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0' />
                          <span className='text-white/80'>{feature}</span>                        </li>                        {tier.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-white/70 mb-6">{tier.description}</p>
                      <div className="text-4xl font-bold text-white mb-2">
                        ${tier.price}
                        <span className="text-lg font-normal text-white/60">/{tier.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        </li>

                      ))}
                    </ul>



<<<<<<< HEAD
                        </li>

                      ))}
                    </ul>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <a
                      href={tier && tier.ctaLink}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier && tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        </span>;
                      </div>;
                    </div>;
                    <ul className='space - y-4 mb - 8'>;
                      {tier.features.map ((feature, feature_index) => (
                        <li key={feature_index} className='flex items - start'>;
                          <Check className='w - 5 h - 5 text - cyan - 400 mt - 0.5 mr - 3 flex - shrink - 0' />;
                          <span className='text - white / 80'>{feature}</span>                        </li>                        {tier.icon}
                      </div>;
                      <h3 className="text - 2xl font - bold text - white mb - 2">{tier.name}</h3>;
                      <p className="text - white / 70 mb - 6">{tier.description}</p>;
                      <div className="text - 4xl font - bold text - white mb - 2">;
                        ${tier.price}
                        <span className="text - lg font - normal text - white / 60">/{tier.period}</span>;
                      </div>;
                    </div>;
                    <ul className="space - y-4 mb - 8">;
                      {tier.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - start">;
                          <Check className="w - 5 h - 5 text - cyan - 400 mt - 0.5 mr - 3 flex - shrink - 0" />;
                          <span className="text - white / 80">{feature}</span>;
                        </li>))}
                    </ul>;
                    <a;
                      href={tier.cta_link}
                      className={`w - full inline - flex items - center justify - center px - 6 py - 3 rounded - lg font - semibold transition - all duration - 300 transform hover:scale - 105 ${
                        tier.popular;
                          ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white hover:from - cyan - 600 hover:to - purple - 700 shadow - lg hover:shadow - cyan - 500 / 25';
                          : 'border - 2 border - cyan - 500 / 50 text - cyan - 400 hover:bg - cyan - 500 / 10';
                      }`}
                    >
                      {tier.cta}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                    </a>
                  </div>
                </motion.div>
              ))}

            </div>;
          </div>;
        </section>;





<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Service Categories Section */}
        <section className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
<<<<<<< HEAD

=======

=======
                      <ArrowRight className='ml-2 w-4 h-4' />                    </a>                      <ArrowRight className="ml-2 w-4 h-4" />
                      <ArrowRight className='ml-2 w-4 h-4' />                    </a>

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Service Categories Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======






>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD


                </span>{' '}

                Categories;
              </h2>;
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
                Explore our comprehensive range of cutting-edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              </p>;
            </motion && motion.div>;


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              <buttonclassName="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                </span>{' '}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                Categories;
              </h2>;
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
                Explore our comprehensive range of cutting-edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
                Explore our comprehensive range of cutting-edge services across multiple technology domains. ;
                Each category offers specialized solutions for different business needs.;
              </p>;
            </motion && motion.div>;
<<<<<<< HEAD


            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>            <div className="flex flex-wrap justify-center gap-4 mb-12">;

=======
=======
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>            <div className="flex flex-wrap justify-center gap-4 mb-12">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of cutting-edge services across multiple technology domains. 
                Each category offers specialized solutions for different business needs.
              </p>
            </motion.div>
<<<<<<< HEAD

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <button
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button


<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
{/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>                  Service
                </span>{' '}
                Categories
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore our comprehensive range of cutting-edge services across
                multiple technology domains. Each category offers specialized
                solutions for different business needs.              </p>
            </motion.div>
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              <button              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                </span>{' '}
                Categories
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore our comprehensive range of cutting-edge services across
                multiple technology domains. Each category offers specialized
                solutions for different business needs.              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of cutting-edge services across multiple technology domains.
                Each category offers specialized solutions for different business needs.
              </p>
            </motion.div>
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === 'all';
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                    : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                }`}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                <button





<<<<<<< HEAD
=======


                <button





              >
                All Categories ({allServices.length})
              </button>
              {serviceCategories.map((category) => (
                <button


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                <button
                  key={category && category.name}
                  onClick={() => setSelectedCategory(category && category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === category && category.name;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  }`}
                >;
                  {category && category.name} ({category && category.services.length});
                </button>;
              ))}

<<<<<<< HEAD
            </div>;
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </div>




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Services Grid */}
            <motion&& motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              initial="hidden";
              whileInView="visible";
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  variants={itemVariants}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <ArrowRight className='ml - 2 w - 4 h - 4' />                    </a>                      <ArrowRight className="ml - 2 w - 4 h - 4" />;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Service Categories Section */}
        <section className='py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>                  Service;
                </span>{' '}
                Categories;
              </h2>;
              <p className='text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
                Explore our comprehensive range of cutting - edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              </p>;
            </motion.div>;
            {/* Category Filter */}
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              <button              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                </span>{' '}
                Categories;
              </h2>;
              <p className='text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
                Explore our comprehensive range of cutting - edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              <p className="text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
                Explore our comprehensive range of cutting - edge services across multiple technology domains.;
                Each category offers specialized solutions for different business needs.;
              </p>;
            </motion.div>;
            {/* Category Filter */}
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>            <div className="flex flex - wrap justify - center gap - 4 mb - 12">;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                  selected_category === 'all';
                    ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                    : 'bg - black / 50 border border - cyan - 500 / 30 text - cyan - 400 hover:bg - cyan - 500 / 10';
                }`}
              >;
                All Categories ({all_services.length});
              </button>;
              {service_categories.map (category => (                <button              {service_categories.map ((category) => (
                <button;
                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                      : 'bg - black / 50 border border - cyan - 500 / 30 text - cyan - 400 hover:bg - cyan - 500 / 10';
                  }`}
                >;
                  {category.name} ({category.services.length});
                </button>))}
            </div>;
            {/* Services Grid */}
            <motion.div;
              variants={container_variants}
              initial='hidden';
              whileInView='visible';
              viewport={{ once: true }}
              className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'            >              initial="hidden";
              whileInView="visible";
              viewport={{ once: true }}
              className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={item_variants}
                  className='group relative overflow - hidden rounded - 2xl border border - cyan - 500 / 20 bg - gradient - to - br from - black / 80 via - purple - 900 / 10 to - black / 80 backdrop - blur - sm hover:border - cyan - 500 / 50 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20';
                >;
                  <div className='p - 6'>;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='flex - 1'>;
                        <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          {service.name}
                        </h3>;
                        <p className='text - white / 70 text - sm leading - relaxed mb - 4'>;
                          {service.description}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
=======
                        </p>;
                      </div>;
                      <div className='ml - 4'>;
                        <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center'>;
                          <Star className='w - 6 h - 6 text - cyan - 400' />                        </div>                >;
                  <div className="p - 6">;
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="flex - 1">;
                        <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                          {service.name}
                        </h3>;
                        <p className="text - white / 70 text - sm leading - relaxed mb - 4">;
                          {service.description}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  className='group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'>;
                  <div className='p-6'>;
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='flex-1'>;
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed mb-4'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />                        </div>                >;
                  <div className="p-6">;
                    <div className="flex items-start justify-between mb-4">;
                      <div className="flex-1">;
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">;
                          {service && service.name}
                        </h3>;
                        <p className="text-white/70 text-sm leading-relaxed mb-4">;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className="ml-4">;
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">;
                          <Star className="w-6 h-6 text-cyan-400" />;
                        </div>;
                      </div>;
                    </div>;
<<<<<<< HEAD
=======
                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                    <div className="flex flex-wrap gap-2 mb-4">
<<<<<<< HEAD
=======
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >                    <div className="flex flex-wrap gap-2 mb-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
<<<<<<< HEAD
                        >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >

                        >

                          {tag}
                        </span>;
                      ))}
                    </div>
                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>

                      <span>Market: {service.marketSize}</span>
                      <span className='text-cyan-400'>{service.category}</span>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >

                        >

                          {tag}
                        </span>;
                      ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        </p>;
                      </div>;
                      <div className="ml - 4">;
                        <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center">;
                          <Star className="w - 6 h - 6 text - cyan - 400" />;
                        </div>;
                      </div>;
                    </div>;
                    {/* Tags */}
                    <div className='flex flex - wrap gap - 2 mb - 4'>;
                      {service.tags.slice (0, 3).map ((tag, tag_index) => (
                        <span;
                          key={tag_index}
                          className='px - 2 py - 1 text - xs font - medium bg - cyan - 500 / 10 text - cyan - 400 rounded - full border border - cyan - 500 / 20'                        >                    <div className="flex flex - wrap gap - 2 mb - 4">;
                      {service.tags.slice (0, 3).map ((tag, tag_index) => (
                        <span;
                          key={tag_index}
                          className="px - 2 py - 1 text - xs font - medium bg - cyan - 500 / 10 text - cyan - 400 rounded - full border border - cyan - 500 / 20";
                          {tag}
                        </span>))}
                    </div>;
                    {/* Market Info */}
                    <div className='flex items - center justify - between text - sm text - white / 60 mb - 4'>;
                      <span > Market: {service.market_size}</span>;
                      <span className='text - cyan - 400'>{service.category}</span>;
                    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 2 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}
<<<<<<< HEAD
<<<<<<< HEAD

                    </div>
=======
                    </div>
                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <span>Market: {service.marketSize}</span>

=======
                      <span>Market: {service.marketSize}</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <span className="text-cyan-400">{service.category}</span>
                    </div>
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        </span>                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>                      <span > Market: {service.market_size}</span>;
                      <span className="text - cyan - 400">{service.category}</span>;
                    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {/* Pricing */}
                    <div className="mb - 6">;
                      <h4 className="text - sm font - semibold text - cyan - 400 mb - 2 uppercase tracking - wider">;
                        Starting From;
                      </h4>;
                      <div className="text - 2xl font - bold text - white">;
                        ${service.pricing.starter.price}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </div>;

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>;
                      <span>Market: {service && service.marketSize}</span>;
                      <span className='text-cyan-400'>{service && service.category}</span>;
                    </div>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    {/* Pricing */}
                    <div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service && service.pricing.starter && starter.price}
                        <span className='text-sm font-normal text-white/60'>;
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;
<<<<<<< HEAD
                    {/* CTA */}
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>



              ))}
<<<<<<< HEAD

            </motion && motion.div>;
          </div>;
        </section>;





                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                        Get Started;
                        <ArrowRight className="ml-2 w-4 h-4" />;
                      </a>;
                    </div>;
                  </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>

              ))}
<<<<<<< HEAD

            </motion && motion.div>;
          </div>;
        </section>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            </motion.div>
          </div>
        </section>

              ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>;
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
<<<<<<< HEAD
=======
=======
            </motion.div>
          </div>
        </section>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div



              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

<<<<<<< HEAD
=======

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>;
                Ready to Get Started?;
              </h2>;
              <p className='text-xl text-white/80 mb-8 leading-relaxed'>;
                Our team of experts is ready to help you choose the perfect plan;
                and get you started with our cutting-edge technology solutions.;
                Contact us today for a personalized consultation.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5' />;
                </a>;
                <a
<<<<<<< HEAD
<<<<<<< HEAD

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?

=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our team of experts is ready to help you choose the perfect plan and get you started with our
                cutting-edge technology solutions. Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
=======
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'>;
                  <Phone className='mr-2 w-5 h-5' />                  Call Now                Ready to Get Started?;
              </h2>;
              <p className="text-xl text-white/80 mb-8 leading-relaxed">;
                Our team of experts is ready to help you choose the perfect plan and get you started with our ;
                cutting-edge technology solutions. Contact us today for a personalized consultation.;
              </p>;
<<<<<<< HEAD

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                  Start Your Journey;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </a>;
                <a
<<<<<<< HEAD
<<<<<<< HEAD


              {/* Contact Info */}

=======
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">;
                  <Phone className="mr-2 w-5 h-5" />;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex flex-col items-center'>;
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <MapPin className='w-6 h-6 text-cyan-400' />;
                  </div>;
                  <div className='text-white font-semibold'>Address</div>;
                  <div className='text-white/70 text-sm'>;
                    {contactInfo && contactInfo.address}
                  </div>                </div>                  </div>;
                  <div className="text-white font-semibold">Phone</div>;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">;
                    <Mail className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Email</div>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">;
                    <MapPin className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Address</div>;
                  <div className="text-white/70 text-sm">{contactInfo && contactInfo.address}</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>;
  );
<<<<<<< HEAD
=======
=======
                    href={`mailto:${contactInfo && contactInfo.email}`}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );

}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                        <span className="text - sm font - normal text - white / 60">/{service.pricing.starter.period}</span>;
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>;
                      <a;
                        href={service.website}
                        className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 text - sm font - medium';
                      >;
                        Learn More;
                        <ExternalLink className='ml - 1 w - 4 h - 4' />;
                      </a>;
                      <a;
                        href='/contact';
                        className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
                      >;
                        Get Started;
                        <ArrowRight className='ml - 2 w - 4 h - 4' />                      </a>                      <a;
                        href={service.website}
                        className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 text - sm font - medium";
                      >;
                        Learn More;
                        <ExternalLink className="ml - 1 w - 4 h - 4" />;
                      </a>;
                      <a;
                        href="/contact";
                        className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
                      >;
                        Get Started;
                        <ArrowRight className="ml - 2 w - 4 h - 4" />;
                      </a>;
                    </div>;
                  </div>;
                  {/* Hover Effect Overlay */}
                  <div className='absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer - events - none' />                </motion.div>                  <div className="absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer - events - none" />;
                </motion.div>))}
            </motion.div>;
          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'>;
          <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - br from - black via - purple - 900 / 20 to - black">;
          <div className="max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 6'>;
                Ready to Get Started?;
              </h2>;
              <p className='text - xl text - white / 80 mb - 8 leading - relaxed'>;
                Our team of experts is ready to help you choose the perfect plan;
                and get you started with our cutting - edge technology solutions.;
                Contact us today for a personalized consultation.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8'>;
                <a;
                  href='/contact';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25';
                >;
                  Start Your Journey;
                  <ArrowRight className='ml - 2 w - 5 h - 5' />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105';
                >;
                  <Phone className='mr - 2 w - 5 h - 5' />                  Call Now                Ready to Get Started?;
              </h2>;
              <p className="text - xl text - white / 80 mb - 8 leading - relaxed">;
                Our team of experts is ready to help you choose the perfect plan and get you started with our;
                cutting - edge technology solutions. Contact us today for a personalized consultation.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center mb - 8">;
                <a;
                  href="/contact";
                  className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25";
                >;
                  Start Your Journey;
                  <ArrowRight className="ml - 2 w - 5 h - 5" />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105";
                >;
                  <Phone className="mr - 2 w - 5 h - 5" />;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - center'>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <Phone className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Phone</div>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <Mail className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Email</div>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <MapPin className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Address</div>;
                  <div className='text - white / 70 text - sm'>;
                    {contact_info.address}
                  </div>                </div>                  </div>;
                  <div className="text - white font - semibold">Phone</div>;
                  <a href={`tel:${contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300">;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className="flex flex - col items - center">;
                  <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3">;
                    <Mail className="w - 6 h - 6 text - cyan - 400" />;
                  </div>;
                  <div className="text - white font - semibold">Email</div>;
                  <a href={`mailto:${contact_info.email}`} className="text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300">;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className="flex flex - col items - center">;
                  <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3">;
                    <MapPin className="w - 6 h - 6 text - cyan - 400" />;
                  </div>;
                  <div className="text - white font - semibold">Address</div>;
                  <div className="text - white / 70 text - sm">{contact_info.address}</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
);
  );
}
}
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
