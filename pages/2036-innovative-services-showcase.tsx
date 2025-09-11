
<<<<<<< HEAD
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
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
  
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React, { useState } from 'react';
import SEO from '../components / SEO';
import Layout from '../components / layout / Layout';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Star,
  TrendingUp,
  Users,
  Building,
  Lightbulb,
  ArrowRight,
  Filter,
  Search,
  Grid,
  List,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { real2036InnovativeServices } from '../data / real - 2036 - innovative - services';
import { real2036SpecializedServices } from '../data / real - 2036 - specialized - services';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const categories = [;
  'All Services',
  'AI & Data',
  'Quantum Technology',
  'Space Technology',
  'IT Infrastructure',
  'Cybersecurity',
  'Edge Computing',
  'Blockchain',
  'Manufacturing',
  'Healthcare AI',
  'Emerging Technology',
  'Biotechnology',
'Human - Computer Interaction',
  'Metaverse',
  'Autonomous Systems',
  'Climate Technology',
];
;
const category_icons: { [key: string]: React.ReactNode } = {
  'AI & Data': <Brain className='w - 5 h - 5' />,
  'Quantum Technology': <Atom className='w - 5 h - 5' />,
  'Space Technology': <Rocket className='w - 5 h - 5' />,
  'IT Infrastructure': <Cpu className='w - 5 h - 5' />,
  Cybersecurity: <Shield className='w - 5 h - 5' />,
  'Edge Computing': <Zap className='w - 5 h - 5' />,
  Blockchain: <Globe className='w - 5 h - 5' />,
  Manufacturing: <Building className='w - 5 h - 5' />,
  'Healthcare AI': <Eye className='w - 5 h - 5' />,
  'Emerging Technology': <Lightbulb className='w - 5 h - 5' />,
  Biotechnology: <Target className='w - 5 h - 5' />,
  'Human - Computer Interaction': <Users className='w - 5 h - 5' />,
  Metaverse: <Globe className='w - 5 h - 5' />,
  'Autonomous Systems': <Rocket className='w - 5 h - 5' />,
  'Climate Technology': <Globe className='w - 5 h - 5' />, }
;
export default /**
 * InnovativeServicesShowcase2036 - Function description
 */
function InnovativeServicesShowcase2036() {
  const [selected_category, setSelectedCategory] = useState ('All Services');
  const [search_term, setSearchTerm] = useState ('');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sort_by, setSortBy] = useState<;
    'name' | 'price' | 'rating' | 'market_size';
  >('name');
;
  const all_services = [;
    ...real2036InnovativeServices,
    ...real2036SpecializedServices,
  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_category =;
      selected_category === 'All Services' ||;
      service.category === selected_category;
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;  });
;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'price':;
        return (
          parse_float (a.price.replace ('$', '').replace (', ', '')) -;
          parse_float (b.price.replace ('$', '').replace (', ', '')));
      case 'rating':;
        return (b.rating || 0) - (a.rating || 0);
      case 'market_size':;
        return (
          parse_float (b.market_size?.replace ('$', '').replace ('B', '') || '0') -;
          parse_float (a.market_size?.replace ('$', '').replace ('B', '') || '0'));
      default:;
        return a.name.locale_compare (b.name);    }
  });
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
    }
  };
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },  };
  return (
      />;
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 overflow-hidden'>;
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20'>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0 && 0.1),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.1),transparent_50%)]' />;
        </div>;
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
        stagger_children: 0.1,
      },
    },  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },  }
;
  return (
    <Layout>;
      <SEO;
        title='2036 Innovative Services Showcase | Zion Tech Group';
        description='Discover our cutting - edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next - generation technology.';
        keywords='2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group';
      />;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center px - 4 overflow - hidden'>;
        {/* Animated Background */}
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - cyan - 900 / 20'>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (120, 119, 198, 0.1), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (120, 119, 198, 0.1), transparent_50%)]' />;
        </div>;
        {/* Floating Elements */}
        <div className='absolute inset - 0 overflow - hidden'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={i}
              className='absolute w - 2 h - 2 bg - cyan - 400 / 30 rounded - full';
              style={{
                left: `${Math && Math.random() * 100}%`,
                top: `${Math && Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0 && 0.3, 1, 0 && 0.3],
              }}
              transition={{
                duration: 3 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
              }}            />;
    <Layout>
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -100, 0];
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
            />
          ))}
        </div>;
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
      case 'rating':
        return (b.rating || 0) - (a.rating || 0),
      case 'marketSize':
      case 'rating':
        return (b.rating || 0) - (a.rating || 0),
      case 'marketSize':

        return parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0'),
      default: return a.name.localeCompare(b.name)
    }
  }),

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
    <Layout>
      <SEO 
        title=&quot;2036 Innovative Services Showcase | Zion Tech Group&quot;
        description=&quot;Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology.&quot;
        keywords=&quot;2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group&quot;
      />
      
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center px-4 overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]&quot; />
        </div>
        
        {/* Floating Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden&quot;>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className=&quot;absolute w-2 h-2 bg-cyan-400/30 rounded-full&quot;
              style={{
                left: `${Math.random() * 100}%`,
                top: `${_Math.random() * 100}%`}}
              animate={_{
                y: [0, _-100, _0], _opacity: [0.3, _1, _0.3]}}
              transition={_{
                duration: 3 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2}}
            />
          ))}
        </div>

        <div className=&quot;relative z-10 text-center max-w-6xl mx-auto&quot;>
          <motion.h1 
            className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;

            initial={{ opacity: 0, y: 30 }}
import React, { useState } from 'react',
import SEO from '../components/SEO',
import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

import {
  Brain
  Rocket
  Shield
  Zap
  Target
  Atom
  Globe
  Cpu
  Lock
  Cloud
  Settings
  Eye
  Award
  Clock
  Star
  TrendingUp
  Users
  Building
  Lightbulb
  ArrowRight
  Filter
  Search
  Grid
  List
  Phone
  Mail
  MapPin;
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const categories = [
  'All Services'
  'AI & Data'
  'Quantum Technology'
  'Space Technology'
  'IT Infrastructure'
  'Cybersecurity'
  'Edge Computing'
  'Blockchain'
  'Manufacturing'
  'Healthcare AI'
  'Emerging Technology'
  'Biotechnology'
  'Human-Computer Interaction'
  'Metaverse'
  'Autonomous Systems'
  'Climate Technology'
];
const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Data': <Brain className='w-5 h-5' />
  'Quantum Technology': <Atom className='w-5 h-5' />
  'Space Technology': <Rocket className='w-5 h-5' />
  'IT Infrastructure': <Cpu className='w-5 h-5' />
  Cybersecurity: <Shield className='w-5 h-5' />
  'Edge Computing': <Zap className='w-5 h-5' />
  Blockchain: <Globe className='w-5 h-5' />
  Manufacturing: <Building className='w-5 h-5' />
  'Healthcare AI': <Eye className='w-5 h-5' />
  'Emerging Technology': <Lightbulb className='w-5 h-5' />
  Biotechnology: <Target className='w-5 h-5' />
  'Human-Computer Interaction': <Users className='w-5 h-5' />
  Metaverse: <Globe className='w-5 h-5' />
  'Autonomous Systems': <Rocket className='w-5 h-5' />
  'Climate Technology': <Globe className='w-5 h-5' />,}
export default function InnovativeServicesShowcase2036() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<
    'name' | 'price' | 'rating' | 'marketSize'
  >('name');
<<<<<<< HEAD
=======
=======

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<;
    'name' | 'price' | 'rating' | 'marketSize';
  >('name');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const allServices = [;
    ...real2036InnovativeServices,;
    ...real2036SpecializedServices,;
  ];

  const filteredServices = allServices && allServices.filter(service => {;
    const matchesCategory =;
      selectedCategory === 'All Services' ||;
      service && service.category === selectedCategory;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price':;

        return (
          parseFloat(a && a.price.replace('$', '').replace(',', '')) -;
          parseFloat(b && b.price.replace('$', '').replace(',', ''));
        );

      case 'rating':;
        return (b && b.rating || 0) - (a && a.rating || 0);
      case 'marketSize':;
        return (
          parseFloat(b && b.marketSize?.replace('$', '').replace('B', '') || '0') -;
          parseFloat(a && a.marketSize?.replace('$', '').replace('B', '') || '0');

        );
      default:;
        return a && a.name.localeCompare(b && b.name);    }
  });



  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.5,;
      },;
    },  };



  return (


        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        stagger_children: 0.1,
      },
    },  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },  }
;
  return (
    <Layout>;
      <SEO;
        title='2036 Innovative Services Showcase | Zion Tech Group';
        description='Discover our cutting - edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next - generation technology.';
        keywords='2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group';
      />;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center px - 4 overflow - hidden'>;
        {/* Animated Background */}
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - cyan - 900 / 20'>;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (120, 119, 198, 0.1), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (120, 119, 198, 0.1), transparent_50%)]' />;
        </div>;
        {/* Floating Elements */}
        <div className='absolute inset - 0 overflow - hidden'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;

<<<<<<< HEAD
<<<<<<< HEAD
  const allServices = [
    ...real2036InnovativeServices
    ...real2036SpecializedServices
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'All Services' |
      service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });
  Brain,
  Rocket,
  Shield,
  Zap,
  Target,
  Atom,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Settings,
  Eye,
  Award,
  Clock,
  Star,
  TrendingUp,
  Users,
  Building,
  Lightbulb,
  ArrowRight,
  Filter,
  Search,
  Grid,
  List,
  Phone,
  Mail,;
  MapPin,;
} from 'lucide-react';
import { real2036InnovativeServices } from '../data/real-2036-innovative-services';
import { real2036SpecializedServices } from '../data/real-2036-specialized-services';
import React, { useState } from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import {
  Brain, Rocket, Shield, Zap, Target, Atom, Globe,
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock,
  Star, TrendingUp, Users, Building, Lightbulb,
  ArrowRight, Filter, Search, Grid, List, Phone, Mail, MapPin
} from 'lucide-react',
import { real2036InnovativeServices } from '../data/real-2036-innovative-services',
import { real2036SpecializedServices } from '../data/real-2036-specialized-services',
=======
              key={i}
              className='absolute w - 2 h - 2 bg - cyan - 400 / 30 rounded - full';
              style={{


                left: `${Math && Math.random() * 100}%`,
                top: `${Math && Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0 && 0.3, 1, 0 && 0.3],
              }}
              transition={{
                duration: 3 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
              }}            />;

=======
    <Layout>
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -100, 0];
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
            />

          ))}
        </div>;


=======
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const categories = [
  'All ServicesAI & DataQuantum TechnologySpace TechnologyIT InfrastructureCybersecurityEdge ComputingBlockchain',
  'ManufacturingHealthcare AIEmerging TechnologyBiotechnologyHuman-Computer InteractionMetaverseAutonomous SystemsClimate Technology'
],
const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Data': <Brain className='w-5 h-5' />,
  'Quantum Technology': <Atom className='w-5 h-5' />,
  'Space Technology': <Rocket className='w-5 h-5' />,
  'IT Infrastructure': <Cpu className='w-5 h-5' />,
  Cybersecurity: <Shield className='w-5 h-5' />,
  'Edge Computing': <Zap className='w-5 h-5' />,
  Blockchain: <Globe className='w-5 h-5' />,
  Manufacturing: <Building className='w-5 h-5' />,
  'Healthcare AI': <Eye className='w-5 h-5' />,
  'Emerging Technology': <Lightbulb className='w-5 h-5' />,
  Biotechnology: <Target className='w-5 h-5' />,
  'Human-Computer Interaction': <Users className='w-5 h-5' />,
  Metaverse: <Globe className='w-5 h-5' />,
  'Autonomous Systems': <Rocket className='w-5 h-5' />,
  'Climate Technology': <Globe className='w-5 h-5' />,};

export default function InnovativeServicesShowcase2036() {;
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<
    'name' | 'price' | 'rating' | 'marketSize'
  >('name');

  const allServices = [
    ...real2036InnovativeServices,
    ...real2036SpecializedServices,
  ];

  'AI & Data': <Brain className="w-5 h-5" />,
  'Quantum Technology': <Atom className="w-5 h-5" />,
  'Space Technology': <Rocket className="w-5 h-5" />,
  'IT Infrastructure': <Cpu className="w-5 h-5" />,
  'Cybersecurity': <Shield className="w-5 h-5" />,
  'Edge Computing': <Zap className="w-5 h-5" />,
  'Blockchain': <Globe className="w-5 h-5" />,
  'Manufacturing': <Building className="w-5 h-5" />,
  'Healthcare AI': <Eye className="w-5 h-5" />,
  'Emerging Technology': <Lightbulb className="w-5 h-5" />,
  'Biotechnology': <Target className="w-5 h-5" />,
  'Human-Computer Interaction': <Users className="w-5 h-5" />,
  'Metaverse': <Globe className="w-5 h-5" />,
  'Autonomous Systems': <Rocket className="w-5 h-5" />,
  'Climate Technology': <Globe className="w-5 h-5" />
},
export default function InnovativeServicesShowcase2036() {
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'marketSize'>('name'),
  const allServices = [...real2036InnovativeServices, ...real2036SpecializedServices],
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch
  }),
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
      case 'rating':
<<<<<<< HEAD
        return (b.rating |0) - (a.rating |0);
      case 'marketSize':
        return (
          parseFloat(b.marketSize?.replace('$', '').replace('B', '') |'0') -
          parseFloat(a.marketSize?.replace('$', '').replace('B', '') |'0')
        );
      default:
        return a.name.localeCompare(b.name);    }
  });
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        duration: 0.5
      }
    },  }
  return (
    <Layout>
      <SEO
        title='2036 Innovative Services Showcase | Zion Tech Group'
        description='Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology.'
        keywords='2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group'
      />
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]' />
        </div>
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400/30 rounded-full'
              style={{
=======
              key={i}
              className='absolute w-2 h-2 bg-cyan-400/30 rounded-full'
              style={{


                left: `${Math && Math.random() * 100}%`,
                top: `${Math && Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0 && 0.3, 1, 0 && 0.3],
              }}
              transition={{
                duration: 3 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
              }}            />;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Layout>
      <SEO 
        title="2036 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2036 innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with next-generation technology."
        keywords="2036 services, innovative micro SAAS, AI platforms, quantum technology, space technology, IT solutions, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -100, 0];
                opacity: [0.3, 1, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
            />

          ))}
        </div>;


        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}


const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const categories = [
  'All ServicesAI & DataQuantum TechnologySpace TechnologyIT InfrastructureCybersecurityEdge ComputingBlockchain',
  'ManufacturingHealthcare AIEmerging TechnologyBiotechnologyHuman-Computer InteractionMetaverseAutonomous SystemsClimate Technology'
],
const categoryIcons: { [key: string]: React.ReactNode } = {

  'AI & Data': <Brain className="w-5 h-5" />,
  'Quantum Technology': <Atom className="w-5 h-5" />,
  'Space Technology': <Rocket className="w-5 h-5" />,
  'IT Infrastructure': <Cpu className="w-5 h-5" />,
  'Cybersecurity': <Shield className="w-5 h-5" />,
  'Edge Computing': <Zap className="w-5 h-5" />,
  'Blockchain': <Globe className="w-5 h-5" />,
  'Manufacturing': <Building className="w-5 h-5" />,
  'Healthcare AI': <Eye className="w-5 h-5" />,
  'Emerging Technology': <Lightbulb className="w-5 h-5" />,
  'Biotechnology': <Target className="w-5 h-5" />,
  'Human-Computer Interaction': <Users className="w-5 h-5" />,
  'Metaverse': <Globe className="w-5 h-5" />,
  'Autonomous Systems': <Rocket className="w-5 h-5" />,
  'Climate Technology': <Globe className="w-5 h-5" />
},
export default function InnovativeServicesShowcase2036() {
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'marketSize'>('name'),
  const allServices = [...real2036InnovativeServices, ...real2036SpecializedServices],

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory,
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch
  }),

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
      case 'rating':


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            2036 Innovative Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0]
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
              }}            />
          ))}
        </div>
        <div className='relative z-10 text-center max-w-6xl mx-auto'>
          <motion.h1
            className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        return (b.rating || 0) - (a.rating || 0),
      case 'marketSize':
        return parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0'),
      default: return a.name.localeCompare(b.name)
        return parseFloat(b.marketSize?.replace('$', '').replace('B', '') || '0') - parseFloat(a.marketSize?.replace('$', '').replace('B', '') || '0'),
      default: return a.name.localeCompare(b.name)
          >
            2036 Innovative Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            Experience the future of technology with our cutting-edge micro SAAS services,
            AI platforms, and quantum solutions. Transform your business with next-generation innovation.
          </motion.p>
<<<<<<< HEAD
<<<<<<< HEAD
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.4 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            animate={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              Contact Us
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </button>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
=======


            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>;
              Explore Services;
            </button>;
            <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>              Contact Us;
            </button>;
          </motion && motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact Information */}
      <section className='py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>;
        <div className='max-w-6xl mx-auto'>;
          <motion&& motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'            initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      {/* Contact Information */}

=======
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact Information */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <Phone className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Phone</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.mobile}</p>;
            </div>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <Mail className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Email</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.email}</p>;
            </div>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <MapPin className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Address</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.address}</p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Services Section */}
      <section className='py-20 px-4'>;
        <div className='max-w-7xl mx-auto'>;
          {/* Section Header */}
          <motion&& motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 20 }}

<<<<<<< HEAD
      {/* Contact Information */}
      <section className='py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          >


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Revolutionary Services;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover our comprehensive portfolio of innovative micro SAAS;
              services, AI platforms, and cutting-edge technology solutions;
              designed for the future.            </p>;
          </motion && motion.div>;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services,
              AI platforms, and cutting-edge technology solutions designed for the future.
            </p>
          </motion.div>
<<<<<<< HEAD
      {/* Services Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      {/* Services Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover our comprehensive portfolio of innovative micro SAAS
              services, AI platforms, and cutting-edge technology solutions
              designed for the future.            </p>

          </motion.div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services,
              AI platforms, and cutting-edge technology solutions designed for the future.
            </p>
          </motion.div>
          {/* Filters and Controls */}
<<<<<<< HEAD
          <motion.div
            className='mb-12 space-y-6'            initial={{ opacity: 0, y: 20 }}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

          </motion.div>
          {/* Filters and Controls */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <motion.div 
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            {/* Search and View Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300';
                />;
              </div>;
              <div className='flex gap-4 items-center'>;
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value as any)}
                  className='px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300';
                left: `${Math.random () * 100}%`,
                top: `${Math.random () * 100}%`,
              }}
              animate={{
                coordinate_y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random () * 2,
                repeat: Infinity,
                delay: Math.random () * 2,
              }}            />))}
        </div>;
        <div className='relative z - 10 text - center max - w-6xl mx - auto'>;
          <motion.h1;
            className='text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent'            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            2036 Innovative Services;
          </motion.h1>;
          <motion.p;
            className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto leading - relaxed'            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Experience the future of technology with our cutting - edge micro SAAS;
            services, AI platforms, and quantum solutions. Transform your;
            business with next - generation innovation.;
          </motion.p>;
          <motion.div;
            className='flex flex - col sm:flex - row gap - 4 justify - center'            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <button className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25'>;
              Explore Services;
            </button>;
            <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'>              Contact Us;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className='py - 12 px - 4 bg - gradient - to - r from - gray - 900 to - gray - 800'>;
        <div className='max - w-6xl mx - auto'>;
          <motion.div;
            className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <div className='text - center p - 6 bg - gray - 800 / 50 rounded - lg border border - gray - 700 hover:border - cyan - 400 transition - all duration - 300'>;
              <Phone className='w - 8 h - 8 mx - auto mb - 4 text - cyan - 400' />;
              <h3 className='text - lg font - semibold mb - 2'>Phone</h3>;
              <p className='text - gray - 300'>{contact_info.mobile}</p>;
            </div>;
            <div className='text - center p - 6 bg - gray - 800 / 50 rounded - lg border border - gray - 700 hover:border - cyan - 400 transition - all duration - 300'>;
              <Mail className='w - 8 h - 8 mx - auto mb - 4 text - cyan - 400' />;
              <h3 className='text - lg font - semibold mb - 2'>Email</h3>;
              <p className='text - gray - 300'>{contact_info.email}</p>;
            </div>;
            <div className='text - center p - 6 bg - gray - 800 / 50 rounded - lg border border - gray - 700 hover:border - cyan - 400 transition - all duration - 300'>;
              <MapPin className='w - 8 h - 8 mx - auto mb - 4 text - cyan - 400' />;
              <h3 className='text - lg font - semibold mb - 2'>Address</h3>;
              <p className='text - gray - 300'>{contact_info.address}</p>            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className='py - 20 px - 4'>;
        <div className='max - w-7xl mx - auto'>;
          {/* Section Header */}
          <motion.div;
            className='text - center mb - 16'            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Revolutionary Services;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Discover our comprehensive portfolio of innovative micro SAAS;
              services, AI platforms, and cutting - edge technology solutions;
              designed for the future.            </p>;
          </motion.div>;
          {/* Filters and Controls */}
          <motion.div;
            className='mb - 12 space - y-6'            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            {/* Search and View Controls */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex-col lg:flex-row gap-4 justify-between items-center'>
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services,
              AI platforms, and cutting-edge technology solutions designed for the future.
            </p>
          </motion.div>
          {/* Filters and Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            {/* Search and View Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>
              <div className='flex gap-4 items-center'>
              <div className="flex gap-4 items-center">
                <select
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value as any)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="marketSize">Sort by Market Size</option>
                </select>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
                <div className='flex bg-gray-800/50 border border-gray-700 rounded-lg p-1'>                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className='w-5 h-5' />                  </button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">


                  <button
                    onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  >
                    <Grid className="w-5 h-5" />
                  </button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className='flex bg-gray-800/50 border border-gray-700 rounded-lg p-1'>                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className='w-5 h-5' />                  </button>
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>


<<<<<<< HEAD
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Category Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onClick={() => setSelectedCategory(category)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Category Filters */}
            <div className='flex flex-wrap gap-3 justify-center'>
              {categories.map(category => (                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category;
                      ? 'bg-cyan-500 text-black border-cyan-500';
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400';
<<<<<<< HEAD
<<<<<<< HEAD
                  }`}
                >
                  {categoryIcons[category] |<Star className='w-4 h-4' />}                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          {/* Services Grid */}
          <motion&& motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
              >
                {viewMode === 'list' && (
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl'>
                      {categoryIcons[service.category] |(
                        <Star className='w-8 h-8' />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                >;
                  {categoryIcons[category] || <Star className='w-4 h-4' />}                  {category}
                </button>;
              ))}
            </div>;
          </motion && motion.div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Services Grid */}
          <motion&& motion.div
            variants={containerVariants}


                variants={itemVariants}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex gap-6' : ''

                }`}>;
                {viewMode === 'list' && (;
                  <div className='flex-shrink-0'>;
                    <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl'>;
                      {categoryIcons[service && service.category] || (;
                        <Star className='w-8 h-8' />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    </div>;
                  </div>;
                )}
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex-1'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                <div className='flex-1'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Service Header */}
                  <div className='mb-4'>;
                    <div className='flex items-start justify-between mb-2'>;
                      <h3 className='text-xl font-bold text-white mb-2'>;
                        {service && service.name}
                      </h3>;
                      <div className='flex items-center gap-2'>;
                        <span className='text-cyan-400 font-semibold'>;
                          {service && service.price}
                        </span>;
                        {service && service.period && (;
                          <span className='text-gray-400 text-sm'>;
                            {service && service.period}
                          </span>;
                        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <option value='market_size'>Sort by Market Size</option>;
                </select>;
                <div className='flex bg - gray - 800 / 50 border border - gray - 700 rounded - lg p - 1'>                  <button;
                    on_click={() => setViewMode ('grid')}
                    className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - cyan - 500 text - black' : 'text - gray - 400 hover:text - white'}`}
                  >;
                    <Grid className='w - 5 h - 5' />                  </button>;
                  <button;
                    on_click={() => setViewMode ('list')}
                    className={`p - 2 rounded ${view_mode === 'list' ? 'bg - cyan - 500 text - black' : 'text - gray - 400 hover:text - white'}`}
                  >;
                    <List className='w - 5 h - 5' />                  </button>;
                </div>;
              </div>;
            </div>;
            {/* Category Filters */}
            <div className='flex flex - wrap gap - 3 justify - center'>;
              {categories.map (category => (                <button;
                  key={category}
                  on_click={() => setSelectedCategory (category)}
                  className={`px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category;
                      ? 'bg - cyan - 500 text - black border - cyan - 500';
                      : 'bg - gray - 800 / 50 text - gray - 300 border - gray - 700 hover:border - cyan - 400 hover:text - cyan - 400';
                  }`}
                >;
                  {category_icons[category] || <Star className='w - 4 h - 4' />}                  {category}
                </button>))}
            </div>;
          </motion.div>;
          {/* Services Grid */}
          <motion.div;
            variants={container_variants}
            initial='hidden';
            whileInView='visible';
            viewport={{ once: true }}
            className={
              view_mode === 'grid';
                ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                : 'space - y-6';
            }          >;
            {sorted_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                variants={item_variants}
                className={`bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 border border - gray - 700 rounded - xl p - 6 hover:border - cyan - 400 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 ${
                  view_mode === 'list' ? 'flex gap - 6' : '';
                }`}
              >;
                {view_mode === 'list' && (
                  <div className='flex - shrink - 0'>;
                    <div className='w - 16 h - 16 bg - gradient - to - br from - cyan - 500 to - blue - 600 rounded - lg flex items - center justify - center text - 2xl'>;
                      {category_icons[service.category] || (
                        <Star className='w - 8 h - 8' />)}
                    </div>;
                  </div>)}
                <div className='flex - 1'>;
                  {/* Service Header */}
                  <div className='mb - 4'>;
                    <div className='flex items - start justify - between mb - 2'>;
                      <h3 className='text - xl font - bold text - white mb - 2'>;
                        {service.name}
                      </h3>;
                      <div className='flex items - center gap - 2'>;
                        <span className='text - cyan - 400 font - semibold'>;
                          {service.price}
                        </span>;
                        {service.period && (
                          <span className='text - gray - 400 text - sm'>;
                            {service.period}
                          </span>)}
                      </div>;
                    </div>;
                    <p className='text - cyan - 400 font - medium mb - 2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {service.tagline}
                    </p>;
                    <p className='text - gray - 300 text - sm leading - relaxed'>;
                      {service.description}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>;
                    </div>;
                    <p className='text-cyan-400 font-medium mb-2'>;
                      {service && service.tagline}
                    </p>;
                    <p className='text-gray-300 text-sm leading-relaxed'>;
                      {service && service.description}
                    </p>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {categoryIcons[service.category] || <Star className="w-8 h-8" />}
                    </div>
                  </div>
                )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="flex-1">
                  {/* Service Header */}
                  <div className='mb-4'>
                    <div className='flex items-start justify-between mb-2'>
                      <h3 className='text-xl font-bold text-white mb-2'>
                        {service.name}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <span className='text-cyan-400 font-semibold'>
                          {service.price}
                        </span>
                        {service.period && (
                          <span className='text-gray-400 text-sm'>
                            {service.period}
                          </span>
                        )}
            {/* Category Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onClick={() => setSelectedCategory(category)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category;
                      ? 'bg-cyan-500 text-black border-cyan-500';
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  {categoryIcons[category] || <Star className="w-4 h-4" />  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  {category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </button>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </motion.div>;
          {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            {sortedServices.map((service, index) => (;
              <motion.div;
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${;
                  viewMode === 'list' ? 'flex gap-6' : '';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                {viewMode === 'list' && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {categoryIcons[service.category] || <Star className="w-8 h-8" />  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                  </div>
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex-1">
                  {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                <div className="flex-1">
                  {/* Service Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
<<<<<<< HEAD
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{service.tagline}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                    {/* Features */}

<<<<<<< HEAD
                  {/* Service Details */}
                  <div className='space-y-4'>;
                    {/* Category and Rating */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700">
                    </p>;
                  </div>;
                  {/* Service Details */}
                  <div className='space - y-4'>;
                    {/* Category and Rating */}
                    <div className='flex items - center justify - between'>;
                      <span className='px - 3 py - 1 bg - gray - 800 text - cyan - 400 text - sm rounded - full border border - gray - 700'>;
                        {service.category}
                      </span>;
                      {service.rating && (
<<<<<<< HEAD
                    </div>;
                    {/* Market Size */}
                    {service.marketSize && (
                      <div className="text-sm text-gray-400">
                        Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
                      </div>
                    )}

=======

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Features */}
                  {/* Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div className="space-y-4">
                    {/* Category and Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700">
<<<<<<< HEAD
                        {service.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                      {service.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {/* Market Size */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.marketSize && (
                      <div className="text-sm text-gray-400">
                        Market Size: <span className="text-green-400 font-medium">{service.marketSize}</span>
                      </div>
=======

                    </div>;
                    {/* Market Size */}

                    {/* Market Size */}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
                    </p>;
                  </div>;
                  {/* Service Details */}
                  <div className='space - y-4'>;
                    {/* Category and Rating */}
                    <div className='flex items - center justify - between'>;
                      <span className='px - 3 py - 1 bg - gray - 800 text - cyan - 400 text - sm rounded - full border border - gray - 700'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                        {service.category}
                      </span>;
                      {service.rating && (

                    </div>;
=======

                    {/* Market Size */}

                    {/* Market Size */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {service && service.marketSize && (;
                      <div className='text-sm text-gray-400'>;
                        Market Size:{' '}
                        <span className='text-green-400 font-medium'>;
                          {service && service.marketSize}
                        </span>                      </div>;
                    )}
                    {/* Features */}

=======
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                    {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
<<<<<<< HEAD

<<<<<<< HEAD
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-gray-400'
                          >
                            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full' />                            {feature}
                          </div>
                        ))}
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
<<<<<<< HEAD
=======

                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 4} more features
                          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      </div>;
                    </div>;

                    {/* Target Audience */}


                    )}
                    {/* Competitive Advantage */}

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        )}
                      </div>
                    </div>
                    {/* Target Audience */}
                    {service.targetAudience && (
                      <div>
<<<<<<< HEAD
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-400">{service.targetAudience}</p>
                      </div>
                    )}
                    {/* Competitive Advantage */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {service.competitiveAdvantage && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage:</h4>
                        <p className="text-sm text-gray-400">{service.competitiveAdvantage}</p>
                      </div>
<<<<<<< HEAD
=======
                        <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                          Target Audience:
                        </h4>
                        <p className='text-sm text-gray-400'>
                          {service.targetAudience}
                        </p>                      </div>
                    )}
                    {/* Competitive Advantage */}
                    {service.competitiveAdvantage && (
                      <div>
                        <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                          Competitive Advantage:
                        </h4>
                        <p className='text-sm text-gray-400'>
                          {service.competitiveAdvantage}
                        </p>                      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    )}
                    {/* CTA Button */}
                    <div className='mt-6'>
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                      </div>;
                    </div>;
                    {/* Target Audience */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.targetAudience && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Target Audience:</h4>
                        <p className="text-sm text-gray-400">{service.targetAudience}</p>
                      </div>
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                    {/* Competitive Advantage */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                      </div>;
                    </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Target Audience */}


                    )}
                    {/* Competitive Advantage */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {service.competitiveAdvantage && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage:</h4>
                        <p className="text-sm text-gray-400">{service.competitiveAdvantage}</p>
                      </div>
<<<<<<< HEAD
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                    {/* CTA Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="mt-6">
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <a
                        href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
          </motion.div>
=======

                      <a
                        href={service && service.link}
                        className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>;
                        Learn More;
                        <ArrowRight className='w-4 h-4' />                      </a>;
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;

            ))}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            whileInView={{ opacity: 1 }}

            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            Showing {sortedServices && sortedServices.length} of {allServices && allServices.length} services;
          </motion && motion.div>;
        </div>;
      </section>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Call to Action */}
      <section className='py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join the future of technology with our innovative services.;
              Contact us today to discuss how we can help you achieve your;
              goals.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}`}
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>;
                Get Started Today;
              </a>;
              <a
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Results Summary */}
          <motion.div
            className='mt-12 text-center text-gray-400'            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Showing {sortedServices.length} of {allServices.length} services
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className='py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* Results Summary */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div
            className="mt-12 text-center text-gray-400"
            initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            Showing {sortedServices.length} of {allServices.length} services;
          </motion.div>;
        </div>;
      </section>;
      {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
              Join the future of technology with our innovative services.
=======
              Join the future of technology with our innovative services. 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
<<<<<<< HEAD
                href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <a
<<<<<<< HEAD
              >
                Call Us Now
              </Link>

                href={`tel:${contactInfo.mobile}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </Link>
=======
<<<<<<< HEAD
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                Call Us Now
              </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>


),

};


<<<<<<< HEAD
)
}
),

};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const itemVariants = {
  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
}
}%`;
top: `$ {
  Math.random () * 100
}%`
}animate= {
  {
  y: [0, -100, 0], opacity: [0.3, 1, 0.3]
}transition= {
  {
  duration: 3 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2
}/>) )
}</div> <div className="relative z-10 text-center max-w-6xl mx-auto" > <motion.h1 > 2036 Innovative Services </motion.h1> <motion.p > Experience the future of technology with our cutting-edge micro SAAS services;
AI platforms, and quantum solutions. Transform your business with next-generation innovation. </motion.p> <motion.div > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25" > Explore Services </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Contact Us </button> </motion.div> </div> </section> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Revolutionary Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of innovative micro SAAS services
AI platforms, and cutting-edge technology solutions designed for the future. </p> </motion.div> {
  /* Filters and Controls */
}<motion.div /> </div> <div className="flex gap-4 items-center" > <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="rating" >Sort by Rating</option> <option value="marketSize" >Sort by Market Size</option> </select> <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1" > <button onClick= {
  () => setViewMode ('grid')
}className= {
  `p-2 rounded $ {
  viewMode === 'grid'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white'
}`
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list')
}className= {
  `p-2 rounded $ {
  viewMode === 'list'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white'
}`
}> <List className="w-5 h-5" /> </button> </div> </div> </div> key= {
  category
}onClick= {
  () => setSelectedCategory (category)
}className= {
  `px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category ? 'bg-cyan-500 text-black border-cyan-500': 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400'
}`
}> </button>) )
}</div> </motion.div> {
  /* Services Grid */
}<motion.div > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id
<<<<<<< HEAD
                href={`tel:${contactInfo && contactInfo.mobile}`}
<<<<<<< HEAD
href={`tel:${contactInfo && contactInfo.mobile}`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
                href={`tel:${contactInfo && contactInfo.mobile}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>;
                Call Us Now;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
  ),;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
const itemVariants = {;
  hidden: {;
  y: 20, opacity: 0 ;
};
visible: {;
  y: 0, opacity: 1, transition: {;
  duration: 0 && 0.5 ;
<<<<<<< HEAD
};
),

};
const itemVariants = {
  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
}
=======

};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}%`;
top: `$ {;
  Math && Math.random () * 100 ;
}%` ;
<<<<<<< HEAD
}animate= {;
  {;
  y: [0, -100, 0], opacity: [0 && 0.3, 1, 0 && 0.3] ;
}transition= {;
  {;
  duration: 3 + Math && Math.random () * 2, repeat: Infinity, delay: Math && Math.random () * 2 ;
=======

}animate= {;
  {;
  y: [0, -100, 0], opacity: [0 && 0.3, 1, 0 && 0.3] ;

}transition= {;
  {;
  duration: 3 + Math && Math.random () * 2, repeat: Infinity, delay: Math && Math.random () * 2 ;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}/>) ) ;
}</div> <div className="relative z-10 text-center max-w-6xl mx-auto" > <motion && motion.h1 > 2036 Innovative Services </motion && motion.h1> <motion && motion.p > Experience the future of technology with our cutting-edge micro SAAS services;
AI platforms, and quantum solutions. Transform your business with next-generation innovation. </motion && motion.p> <motion && motion.div > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25" > Explore Services </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Contact Us </button> </motion && motion.div> </div> </section> </div> </motion && motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Revolutionary Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of innovative micro SAAS services,;
AI platforms, and cutting-edge technology solutions designed for the future. </p> </motion && motion.div> {;
  /* Filters and Controls */ ;
}<motion && motion.div /> </div> <div className="flex gap-4 items-center" > <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="rating" >Sort by Rating</option> <option value="marketSize" >Sort by Market Size</option> </select> <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1" > <buttononClick= {
  () => setViewMode ('grid') ;
}className= {;
  `p-2 rounded $ {;
  viewMode === 'grid'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white' ;
}` ;
}> <Grid className="w-5 h-5" /> </button> <buttononClick= {
  () => setViewMode ('list') ;
}className= {;
  `p-2 rounded $ {;
  viewMode === 'list'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white' ;
}` ;
}> <List className="w-5 h-5" /> </button> </div> </div> </div> key= {;
  category ;
}onClick= {;
  () => setSelectedCategory (category) ;
}className= {;
  `px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 $ {;
  selectedCategory === category ? 'bg-cyan-500 text-black border-cyan-500': 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400' ;
}` ;
}> </button>) ) ;
}</div> </motion && motion.div> {;
  /* Services Grid */ ;
}<motion && motion.div > {;
  sortedServices && sortedServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}variants= {
  itemVariants
}className= {
  `bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 $ {
<<<<<<< HEAD

=======
  viewMode === 'list'? 'flex gap-6': ''
}`
}> </div> </div>)
}</div>)
}</div> </div>)
}{
  /* Features */
}<div> + {
  service.features.length - 4
}more features </div>)
}</div> </div> {
  /* Target Audience */
}{
  service.targetAudience && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Target Audience:</h4> <p className="text-sm text-gray-400" > {
  service.targetAudience
}</p> </div>)
}{
  /* Competitive Advantage */
}{
  service.competitiveAdvantage && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Competitive Advantage:</h4> <p className="text-sm text-gray-400" > {
  service.competitiveAdvantage
}</p> </div>)
}> Learn More <ArrowRight className="w-4 h-4" /> </Link> </div> </div> </div> </motion.div>) )
}</motion.div> {
  /* Results Summary */
}<motion.div > Showing {
  sortedServices.length
}of {
  allServices.length
}services </motion.div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.6
}viewport= {
  {
  once: true
}> <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a > Get Started Today </Link> <a
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            Showing {sorted_services.length} of {all_services.length} services;
          </motion.div>;
        </div>;
      </section>;
      {/* Call to Action */}
      <section className='py - 20 px - 4 bg - gradient - to - r from - gray - 900 to - gray - 800'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 3xl md:text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Join the future of technology with our innovative services.;
              Contact us today to discuss how we can help you achieve your;
              goals.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href={`mailto:${contact_info.email}`}
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25'              >;
                Get Started Today;
              </a>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>),
}
const item_variants = {
  hidden: {
  coordinate_y: 20, opacity: 0;
}
visible: {
  coordinate_y: 0, opacity: 1, transition: {
  duration: 0.5;
}
;
<<<<<<< HEAD
  {

<<<<<<< HEAD
}%`;
top: `$ {
  Math.random () * 100;
}%`;
}animate= {
  {
  coordinate_y: [0, -100, 0], opacity: [0.3, 1, 0.3];
}transition= {
  {
  duration: 3 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2;
}/>) );
}</div> <div className="relative z - 10 text - center max - w-6xl mx - auto" > <motion.h1 > 2036 Innovative Services </motion.h1> <motion.p > Experience the future of technology with our cutting - edge micro SAAS services;
AI platforms, and quantum solutions. Transform your business with next - generation innovation. </motion.p> <motion.div > <button className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover: from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25" > Explore Services </button> <button className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105" > Contact Us </button> </motion.div> </div> </section> </div> </motion.div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Revolutionary Services </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Discover our comprehensive portfolio of innovative micro SAAS services,
AI platforms, and cutting - edge technology solutions designed for the future. </p> </motion.div> {
  /* Filters and Controls */;
}<motion.div /> </div> <div className="flex gap - 4 items - center" > <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="rating" >Sort by Rating</option> <option value="market_size" >Sort by Market Size</option> </select> <div className="flex bg - gray - 800 / 50 border border - gray - 700 rounded - lg p - 1" > <button on_click= {
  () => setViewMode ('grid');
}className= {
  `p - 2 rounded $ {
  view_mode === 'grid'? 'bg - cyan - 500 text - black': 'text - gray - 400 hover:text - white';
}`;
}> <Grid className="w - 5 h - 5" /> </button> <button on_click= {
  () => setViewMode ('list');
}className= {
  `p - 2 rounded $ {
  view_mode === 'list'? 'bg - cyan - 500 text - black': 'text - gray - 400 hover:text - white';
}`;
}> <List className="w - 5 h - 5" /> </button> </div> </div> </div> key= {
  category;
}on_click= {
  () => setSelectedCategory (category);
}className= {
  `px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 $ {
  selected_category === category ? 'bg - cyan - 500 text - black border - cyan - 500': 'bg - gray - 800 / 50 text - gray - 300 border - gray - 700 hover:border - cyan - 400 hover:text - cyan - 400';
}`;
}> </button>) );
}</div> </motion.div> {
  /* Services Grid */;
}<motion.div > {
  sorted_services.map ( (service, index) => (<motion.div key= {
  service.id;
}variants= {
  item_variants;
}className= {
  `bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 border border - gray - 700 rounded - xl p - 6 hover:border - cyan - 400 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 $ {
  view_mode === 'list'? 'flex gap - 6': '';
}`;
}> </div> </div>);
}</div>);
}</div> </div>);
}{
  /* Features */;
}<div> + {
  service.features.length - 4;
}more features </div>);
}</div> </div> {
  /* Target Audience */;
}{
  service.target_audience && (<div> <h4 className="text - sm font - semibold text - gray - 300 mb - 2" >Target Audience:</h4> <p className="text - sm text - gray - 400" > {
  service.target_audience;
}</p> </div>);
}{
  /* Competitive Advantage */;
}{
  service.competitive_advantage && (<div> <h4 className="text - sm font - semibold text - gray - 300 mb - 2" >Competitive Advantage:</h4> <p className="text - sm text - gray - 400" > {
  service.competitive_advantage;
}</p> </div>);
}> Learn More <ArrowRight className="w - 4 h - 4" /> </Link> </div> </div> </div> </motion.div>) );
}</motion.div> {
  /* Results Summary */;
}<motion.div > Showing {
  sorted_services.length;
}of {
  all_services.length;
}services </motion.div> </div> </section> <motion.div initial= {
  viewMode === 'list'? 'flex gap-6': '' 
}` 
}> </div> </div>) ;
}</div>) ;
}</div> </div>) ;
}{;
  /* Features */ ;
}<div> + {;
  service && service.features.length - 4 ;
}more features </div>) ;
}</div> </div> {;
  /* Target Audience */ ;
}{;
  service && service.targetAudience && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Target Audience:</h4> <p className="text-sm text-gray-400" > {;
  service && service.targetAudience ;
}</p> </div>) ;
}{;
  /* Competitive Advantage */ ;
}{;
  service && service.competitiveAdvantage && (<div> <h4 className="text-sm font-semibold text-gray-300 mb-2" >Competitive Advantage:</h4> <p className="text-sm text-gray-400" > {;
  service && service.competitiveAdvantage ;
}</p> </div>) ;
}> Learn More <ArrowRight className="w-4 h-4" /> </Link> </div> </div> </div> </motion && motion.div>) ) ;
}</motion && motion.div> {;
  /* Results Summary */ ;
}<motion && motion.div > Showing {;
  sortedServices && sortedServices.length ;
}of {;
  allServices && allServices.length ;
}services </motion && motion.div> </div> </section> <motion&& motion.div initial= {
  {
  duration: 0 && 0.6 
}viewport= {
  {
}> <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a > Get Started Today </Link> <a ;
  )
}
=======
  duration: 0 && 0.6 
}viewport= {
  {
<<<<<<< HEAD
=======

  {

  duration: 0 && 0.6 

}viewport= {
  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  once: true 

}> <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a > Get Started Today </Link> <a ;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  opacity: 0, coordinate_y: 20;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.6;
}viewport= {
  {
  once: true;
}> <h2 className="text - 3xl md:text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Ready to Transform Your Business? </h2> <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center" > <a > Get Started Today </Link> <a;
<<<<<<< HEAD
<<<<<<< HEAD


  once: true
}> <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a > Get Started Today </Link> <a
  )
          >;
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join the future of technology with our innovative services.;
              Contact us today to discuss how we can help you achieve your goals.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25";
              >;
                Get Started Today;
              </a>;
              <a;
                href={`tel:${contactInfo.mobile}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105";
              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
