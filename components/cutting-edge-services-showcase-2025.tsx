
import {;
  Brain,;
  Atom,;
  Shield,;
  Rocket,;
  Star,;
  Award,;
  TrendingUp,;
  CheckCircle,;
  ArrowRight,;
  Zap,;
  Target,;
  Microscope,;
  Lock,;
  Cloud,;
  BarChart3,;
  Settings,;
  Eye,;
  Code,;
  Palette,;
  Search,;
  Filter,;
  Grid,;
  List,;
  ExternalLink,;
  Phone,;
  Mail,;
  MapPin,;} from 'lucide-react';import { ;
import { 
=======
=======class ErrorBoundary extends React.Component {
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
import Head from 'next / head';
import { motion } from 'framer-motion';


=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  Mail,;
  MapPin,;} from 'lucide-react';import { ;


  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;

  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin;

=======
} from 'lucide-react';const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
=======
import { Zap, Star } from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const heroStats = [
  {
    label: 'Cutting-Edge Services'
    value: '25+'
    icon: <Star className='w-5 h-5' />
  }
  {
    label: 'Innovation Areas'
    value: '8+'
    icon: <Brain className='w-5 h-5' />
  }
  {
    label: 'Market Coverage'
    value: '$500B+'
    icon: <TrendingUp className='w-5 h-5' />
  }
  {
    label: 'Success Rate'
    value: '99.9%'
    icon: <Award className='w-5 h-5' />
  },];  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className="w-5 h-5" /> }
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w-5 h-5" /> }
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w-5 h-5" /> }
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> }
const serviceCategories = [
  {
    title: 'AI & Consciousness'
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025
    icon: Brain
    color: 'from-violet-500 to-purple-600'
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',    description: 'Revolutionary AI platforms with consciousness and emotional intelligence'
    services: cuttingEdgeAIServices2025
    icon: Brain
    color: 'from-violet-500 to-purple-600'
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600'
    count: cuttingEdgeAIServices2025.length
  }
  {
    title: 'Quantum & Emerging Tech'
    description:
      'Breakthrough quantum computing and space technology solutions',    services: cuttingEdgeQuantumServices2025
    icon: Atom
    color: 'from-indigo-500 to-blue-600'
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600'
    count: cuttingEdgeQuantumServices2025.length
  },  {    count: cuttingEdgeAIServices2025.length
  }
  {
    title: 'Quantum & Emerging Tech'
    description: 'Breakthrough quantum computing and space technology solutions'
    icon: Atom
    color: 'from-indigo-500 to-blue-600'
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600'
    count: cuttingEdgeQuantumServices2025.length
  },    count: cuttingEdgeQuantumServices2025.length
  }
  {
    title: 'Enterprise IT'
    description: 'Advanced enterprise infrastructure and security solutions'
    services: cuttingEdgeEnterpriseITServices2025
    icon: Shield
    color: 'from-blue-500 to-cyan-600'
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600'
    count: cuttingEdgeEnterpriseITServices2025.length
  },  {    count: cuttingEdgeEnterpriseITServices2025.length
  }
  {
    title: 'Micro SAAS'
    description: 'Innovative business solutions for modern enterprises'
    services: cuttingEdgeMicroSaasServices2025
    icon: Rocket
    color: 'from-teal-500 to-emerald-600'
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600'
    count: cuttingEdgeMicroSaasServices2025.length
  },];    count: cuttingEdgeMicroSaasServices2025.length
  }
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',=======
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from - indigo - 500 to - blue - 600',=======

    color: 'from - indigo - 500 to - blue - 600',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    gradient: 'bg - gradient - to - r from - indigo - 500 to - blue - 600',
    count: cuttingEdgeQuantumServices2025.length,
  },    count: cuttingEdgeQuantumServices2025.length;
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from - blue - 500 to - cyan - 600',=======

    color: 'from - blue - 500 to - cyan - 600',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    gradient: 'bg - gradient - to - r from - blue - 500 to - cyan - 600',
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {    count: cuttingEdgeEnterpriseITServices2025.length;
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from - teal - 500 to - emerald - 600',
    gradient: 'bg - gradient - to - r from - teal - 500 to - emerald - 600',
    count: cuttingEdgeMicroSaasServices2025.length,
  }, ];    count: cuttingEdgeMicroSaasServices2025.length;

  }
];

    count: cuttingEdgeMicroSaasServices2025.length,
  },];



  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [

  });


const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
};
const heroStats = [;
  {;
    label: 'Cutting-Edge Services',;
    value: '25+',;
    icon: <Star className='w-5 h-5' />,;
  },;
  {;
    label: 'Innovation Areas',;
    value: '8+',;
    icon: <Brain className='w-5 h-5' />,;
  },;
  {;
    label: 'Market Coverage',;
    value: '$500B+',;
    icon: <TrendingUp className='w-5 h-5' />,;
  },;
  {;
    label: 'Success Rate',;
    value: '99 && 99.9%',;
    icon: <Award className='w-5 h-5' />,;
  },];  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className="w-5 h-5" /> },;
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w-5 h-5" /> },;
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w-5 h-5" /> },;
  { label: 'Success Rate', value: '99 && 99.9%', icon: <Award className="w-5 h-5" /> }
const serviceCategories = [;
  {;
    title: 'AI & Consciousness',;
    description:;
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025,;
    icon: Brain,;
    color: 'from-violet-500 to-purple-600',;
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',;
    services: cuttingEdgeAIServices2025,;
    icon: Brain,;
    color: 'from-violet-500 to-purple-600',;
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',;
    count: cuttingEdgeAIServices2025 && cuttingEdgeAIServices2025.length,;
  },;
  {;
    title: 'Quantum & Emerging Tech',;
    description:;
      'Breakthrough quantum computing and space technology solutions',    services: cuttingEdgeQuantumServices2025,;
    icon: Atom,;
    color: 'from-indigo-500 to-blue-600',;
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',;
    count: cuttingEdgeQuantumServices2025 && cuttingEdgeQuantumServices2025.length,;
  },  {    count: cuttingEdgeAIServices2025 && cuttingEdgeAIServices2025.length;
  };
  {;
    title: 'Quantum & Emerging Tech',;
    description: 'Breakthrough quantum computing and space technology solutions',;
    icon: Atom,;
    color: 'from-indigo-500 to-blue-600',;
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',;
    count: cuttingEdgeQuantumServices2025 && cuttingEdgeQuantumServices2025.length,;
  },    count: cuttingEdgeQuantumServices2025 && cuttingEdgeQuantumServices2025.length;
  };
  {;
    title: 'Enterprise IT',;
    description: 'Advanced enterprise infrastructure and security solutions',;
    services: cuttingEdgeEnterpriseITServices2025,;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-600',;
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',;
    count: cuttingEdgeEnterpriseITServices2025 && cuttingEdgeEnterpriseITServices2025.length,;
  },  {    count: cuttingEdgeEnterpriseITServices2025 && cuttingEdgeEnterpriseITServices2025.length;
  };
  {;
    title: 'Micro SAAS',;
    description: 'Innovative business solutions for modern enterprises',;
    services: cuttingEdgeMicroSaasServices2025,;
    icon: Rocket,;
    color: 'from-teal-500 to-emerald-600',;
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',;
    count: cuttingEdgeMicroSaasServices2025 && cuttingEdgeMicroSaasServices2025.length,;
  },];    count: cuttingEdgeMicroSaasServices2025 && cuttingEdgeMicroSaasServices2025.length;
  }
];
export default function CuttingEdgeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [;
    ...cuttingEdgeAIServices2025,;
    ...cuttingEdgeQuantumServices2025,;
    ...cuttingEdgeEnterpriseITServices2025,;
    ...cuttingEdgeMicroSaasServices2025,;
  ];
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tags.some(tag =>;
        tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tags.some(tag => tag && tag.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
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

  return (_<>
      <Head>
        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32&quot;>

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Brain
  Atom
  Shield
  Rocket
  Star
  Award
  TrendingUp
  CheckCircle
  ArrowRight
  Zap
  Target
  Microscope
  Lock
  Cloud
  BarChart3
  Settings
  Eye
  Code
  Palette
  Search
  Filter
  Grid
  List
  ExternalLink
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
  Brain,
  Atom,
  Shield,
  Rocket,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Code,
  Palette,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  Phone,
  Mail,;
  MapPin,;} from 'lucide-react';import { ;
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;

  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';

import { Zap, Star } from 'lucide-react';
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const heroStats = [
  {
    label: 'Cutting-Edge Services'
    value: '25+'
    icon: <Star className='w-5 h-5' />
  }
  {
    label: 'Innovation Areas'
    value: '8+'
    icon: <Brain className='w-5 h-5' />
  }
  {
    label: 'Market Coverage'
    value: '$500B+'
    icon: <TrendingUp className='w-5 h-5' />
  }
  {
    label: 'Success Rate'
    value: '99.9%'
    icon: <Award className='w-5 h-5' />
  },];  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className="w-5 h-5" /> }
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w-5 h-5" /> }
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w-5 h-5" /> }
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> }
const serviceCategories = [
  {
    title: 'AI & Consciousness'
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025
    icon: Brain
    color: 'from-violet-500 to-purple-600'
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',    description: 'Revolutionary AI platforms with consciousness and emotional intelligence'
    services: cuttingEdgeAIServices2025
    icon: Brain
    color: 'from-violet-500 to-purple-600'
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600'
    count: cuttingEdgeAIServices2025.length
  }
  {
    title: 'Quantum & Emerging Tech'
    description:
      'Breakthrough quantum computing and space technology solutions',    services: cuttingEdgeQuantumServices2025
    icon: Atom
    color: 'from-indigo-500 to-blue-600'
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600'
    count: cuttingEdgeQuantumServices2025.length
  },  {    count: cuttingEdgeAIServices2025.length
  }
  {
    title: 'Quantum & Emerging Tech'
    description: 'Breakthrough quantum computing and space technology solutions'
    icon: Atom
    color: 'from-indigo-500 to-blue-600'
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600'
    count: cuttingEdgeQuantumServices2025.length
  },    count: cuttingEdgeQuantumServices2025.length
  }
  {
    title: 'Enterprise IT'
    description: 'Advanced enterprise infrastructure and security solutions'
    services: cuttingEdgeEnterpriseITServices2025
    icon: Shield
    color: 'from-blue-500 to-cyan-600'
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600'
    count: cuttingEdgeEnterpriseITServices2025.length
  },  {    count: cuttingEdgeEnterpriseITServices2025.length
  }
  {
    title: 'Micro SAAS'
    description: 'Innovative business solutions for modern enterprises'
    services: cuttingEdgeMicroSaasServices2025
    icon: Rocket
    color: 'from-teal-500 to-emerald-600'
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600'
    count: cuttingEdgeMicroSaasServices2025.length
  },];    count: cuttingEdgeMicroSaasServices2025.length
  }
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',

    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',

    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',

  {

    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {

  {

    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length,
  },];

];
export default function CuttingEdgeServicesShowcase2025() {
export default function CuttingEdgeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [
    ...cuttingEdgeAIServices2025
    ...cuttingEdgeQuantumServices2025
    ...cuttingEdgeEnterpriseITServices2025
    ...cuttingEdgeMicroSaasServices2025
  ];
  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory
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
=======        duration: 0.5
      }
    },  };        duration: 0.5
      }
    }
  }
      }
    }
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        duration: 0.5,
      },
    },  };

  };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  return (
    <>
      <Head>
        <title>
          Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future
          Technology Solutions
        </title>
        <meta
          name='description'
          content='Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.'
        />
        <meta
          name='keywords'
          content='cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology'
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
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0.9 }}        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />
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
                Cutting-Edge Services
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Showcase 2025
                </span>
              </motion.h1>

      }
    }
  }

        duration: 0.5,
      },
    },  };

  };


  return (


=====================

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">

              <motion.p 


                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"

=======
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 

                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
==============
              transition={{ duration: 0 && 0.8 }}
              className='text-center'>;
              <motion&& motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'              className="text-center">;
              <motion&& motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0 && 0.2 }}>;
                Cutting-Edge Services;
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>;
                  Showcase 2025;
                </span>;
              </motion && motion.h1>;
              <motion&& motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">;
                  Showcase 2025;
                </span>;
              </motion && motion.h1>;
              <motion&& motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                Discover revolutionary technology solutions that are reshaping;
                industries and defining the future. From AI consciousness to;
                space mining, experience the cutting edge of innovation.;
              </motion && motion.p>;
              {/* Hero Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion && motion.p>;
              {/* Hero Stats */}
              <motion&& motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}

=======

=======                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
              </motion && motion.div>;

              {/* CTA Buttons */}

                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </motion && motion.div>;
              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
=======
=======
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion.div 

                className="flex flex-col sm:flex-row gap-4 justify-center"
                  </div>

                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}



              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}>;
              {/* Search */}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />;
              </div>;
              {/* Category Filter */}

                <button

                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  All ({allServices.length})
                </button>
                {serviceCategories.map(category => (                  <button                {serviceCategories.map((category) => (
                  <button

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input

=======


              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>                <button                <input                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}


              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;

=======
                />
              </div>

              {/* Category Filter */}                <button
=======
=======
              <div className="flex flex-wrap gap-2">

                <button
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex flex-wrap gap-2'>                <button

                />
              </div>

              {/* Category Filter */}

                <button


                <button

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === 'all';
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                  }`}

=======
=======

                  <button







              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button




              </div>;
              {/* View Mode Toggle */}
              <div className='flex items-center gap-2'>                <button              <div className="flex items-center gap-2">;
              </div>
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button

              {/* View Mode Toggle */}
              <div className='flex items-center gap-2'>                <button

                <button

=======
=======
              </div>;


              {/* View Mode Toggle */}
              <div className='flex items-center gap-2'>                <button              <div className="flex items-center gap-2">;

=======
              </div>


              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';
                  }`}
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
        {/* Services Grid */}
        <section
          id='services'
          className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }            >            <motion.div
=======
=======

                >;
                  <List className='w-5 h-5' />                </button>                  <List className="w-5 h-5" />;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}

=======
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}>;
                  {/* Service Header */}

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {service.name}
                        </h3>;
                        <p className='text - white / 70 text - sm leading - relaxed'>;
                          {service.description}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>;
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='flex-1'>;
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />                        </div>                          {service && service.name}
                        </h3>;
                        <p className="text-white/70 text-sm leading-relaxed">;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className="ml-4">;
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">;
                          <Star className="w-6 h-6 text-cyan-400" />;
                        </div>;
                      </div>;
                    </div>;
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >

                        >






                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>
                    </div>
                    </div>;
                    {/* Pricing */}
                    <div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service && service.pricing.starter && starter.price}
                        <span className='text-sm font-normal text-white/60'>;
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;
                    {/* CTA */}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"


=======
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />;
                </motion && motion.div>;
              ))}


              ))}
            </motion.div>

=======
=======
            </motion && motion.div>;
=======
=======

=======
            </motion.div>



              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-white/70 mb-6'>
                  Try adjusting your search terms or category filter
                </p>
=======
                <button
                  onClick={() => {;
                    setSearchTerm('');

                    setSelectedCategory('all');

                  }}


            )}
          </div>;
        </section>;


        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>;
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
=======
        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div




=======
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5' />;
                </a>;
                <a
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?

                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                  Start Your Journey;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </a>;
                <a

              {/* Contact Info */}


  );


  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const containerVariants = {
  hidden: {
  opacity: 0
}
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

                    href={`mailto:${contactInfo && contactInfo.email}`}
                        </span>                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>                        Starting From;
                      </h4>;
                      <div className="text - 2xl font - bold text - white">;
                        ${service.pricing.starter.price}
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
                        className="inline - flex items - center text - cyan - 400 hover: text - cyan - 300 transition - colors duration - 300 text - sm font - medium";
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
            {/* No Results */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text - center py - 20';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - white / 70 mb - 6'>;
                  Try adjusting your search terms or category filter;
                </p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                  }}
                  className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'                >              >;
                <div className="text - 6xl mb - 4">🔍</div>;
                <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
                <p className="text - white / 70 mb - 6">Try adjusting your search terms or category filter</p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                  }}
                  className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                >;
                  Clear Filters;
                </button>;
              </motion.div>)}
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
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - white / 80 mb - 8 leading - relaxed'>;
                Our cutting - edge services are designed to give you a competitive;
                advantage in the rapidly evolving technology landscape. Let's;
                discuss how we can help you achieve your goals.;
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
                  <Phone className='mr - 2 w - 5 h - 5' />                  Call Now                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - white / 80 mb - 8 leading - relaxed">;
                Our cutting - edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape.;
                Let's discuss how we can help you achieve your goals.;
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
;
  const matches_search = service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || const container_variants = {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const containerVariants = {
  hidden: {
  opacity: 0;
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
  duration: 0.5 


};
};}
};
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
