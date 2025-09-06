
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
import Head from 'next / head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {
<<<<<<< HEAD
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
  Mail,
  MapPin,} from 'lucide-react';import {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;

  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;
<<<<<<< HEAD
<<<<<<< HEAD
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin
<<<<<<< HEAD
 } from 'lucide-react';
=======
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';
<<<<<<< HEAD

import { Zap, Star } from 'lucide-react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
=======
=======
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin;
import Layout from '../components / layout / Layout';
import { cuttingEdgeAIServices2025 } from '../data / 2025 - cutting - edge - ai - services';
import { cuttingEdgeQuantumServices2025 } from '../data / 2025 - cutting - edge - quantum - services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data / 2025 - cutting - edge - enterprise - it';
import { cuttingEdgeMicroSaasServices2025 } from '../data / 2025 - cutting - edge - micro - saas';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import { Zap, Star } from 'lucide-react';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
<<<<<<< HEAD
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
=======
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
    count: cuttingEdgeAIServices2025.length
  };
=======
  website: 'https://ziontechgroup.com',
}
;
const hero_stats = [;
  {
    label: 'Cutting - Edge Services',
    value: '25+',
    icon: <Star className='w - 5 h - 5' />,
  },
  {
    label: 'Innovation Areas',
    value: '8+',
    icon: <Brain className='w - 5 h - 5' />,
  },
  {
    label: 'Market Coverage',
    value: '$500B+',
    icon: <TrendingUp className='w - 5 h - 5' />,
  },
  {
    label: 'Success Rate',
    value: '99.9%',
    icon: <Award className='w - 5 h - 5' />,
  }, ];  { label: 'Cutting - Edge Services', value: '25+', icon: <Star className="w - 5 h - 5" /> },
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w - 5 h - 5" /> },
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w - 5 h - 5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w - 5 h - 5" /> }
const service_categories = [;
  {
    title: 'AI & Consciousness',
    description:;
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from - violet - 500 to - purple - 600',
    gradient: 'bg - gradient - to - r from - violet - 500 to - purple - 600',    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from - violet - 500 to - purple - 600',
    gradient: 'bg - gradient - to - r from - violet - 500 to - purple - 600',
    count: cuttingEdgeAIServices2025.length,
  },
  {
    title: 'Quantum & Emerging Tech',
    description:;
      'Breakthrough quantum computing and space technology solutions',    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from - indigo - 500 to - blue - 600',
    gradient: 'bg - gradient - to - r from - indigo - 500 to - blue - 600',
    count: cuttingEdgeQuantumServices2025.length,
  },  {    count: cuttingEdgeAIServices2025.length;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
<<<<<<< HEAD
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    count: cuttingEdgeQuantumServices2025.length
  };
=======
    color: 'from - indigo - 500 to - blue - 600',
    gradient: 'bg - gradient - to - r from - indigo - 500 to - blue - 600',
    count: cuttingEdgeQuantumServices2025.length,
  },    count: cuttingEdgeQuantumServices2025.length;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
<<<<<<< HEAD
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length
  };
=======
    color: 'from - blue - 500 to - cyan - 600',
    gradient: 'bg - gradient - to - r from - blue - 500 to - cyan - 600',
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {    count: cuttingEdgeEnterpriseITServices2025.length;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
<<<<<<< HEAD
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length
=======
    color: 'from - teal - 500 to - emerald - 600',
    gradient: 'bg - gradient - to - r from - teal - 500 to - emerald - 600',
    count: cuttingEdgeMicroSaasServices2025.length,
  }, ];    count: cuttingEdgeMicroSaasServices2025.length;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
];
<<<<<<< HEAD
export default function CuttingEdgeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [
<<<<<<< HEAD
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
=======
    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    ...cuttingEdgeMicroSaasServices2025
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory
<<<<<<< HEAD
=======
  });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const containerVariants = {
    hidden: { opacity: 0 }
=======
;
export default /**
 * CuttingEdgeServicesShowcase2025 - Function description
 */
function CuttingEdgeServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
;
  const all_services = [;
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025,
  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tags.some (tag =>;
        tag.toLowerCase ().includes (search_term.toLowerCase ()));
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    return matches_search && matches_category;  });    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tags.some (tag => tag.toLowerCase ().includes (search_term.toLowerCase ()));
    const matches_category = selected_category === 'all' || service.category === selected_category;
    return matches_search && matches_category;
  const container_variants = {
    hidden: { opacity: 0 },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    visible: {
      opacity: 1
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1
      }
<<<<<<< HEAD
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
=======
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
=======
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      }
    }
  }
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    <>;
      <Head>;
        <title>;
          Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future;
          Technology Solutions;
        </title>;
        <meta
          name='description'
          content='Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.'
        />;
        <meta
          name='keywords'
          content='cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology'
<<<<<<< HEAD
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />      </Head>
      <Layout>
=======
        />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
        <link rel='icon' href='/favicon && favicon.ico' />      </Head>;

      <Layout>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Hero Section */}
        <section className='relative overflow-hidden'>;
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0.9 }}        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
=======
    <>
      <Head>
        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
      <Layout>
=======
              transition={{ duration: 0 && 0.8 }}
              className='text-center'>;
              <motion&& motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0 && 0.9 }}        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>;
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />;
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;

      <Layout>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Hero Section */}
        <section className='relative overflow-hidden'>;
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>        <section className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>;
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'              className="text-center"
=======
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
              className="text-center"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
<<<<<<< HEAD
=======
                initial={{ opacity: 0, scale: 0.9 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge Services
<<<<<<< HEAD
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Showcase 2025
                </span>
              </motion.h1>
              <motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  Showcase 2025
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
<<<<<<< HEAD
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover revolutionary technology solutions that are reshaping
                industries and defining the future. From AI consciousness to
                space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Discover revolutionary technology solutions that are reshaping industries and defining the future.
=======
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.6 }}>;
                {heroStats && heroStats.map((stat, index) => (;
                  <div key={index} className='text-center'>;
                    <div className='flex justify-center mb-2'>;
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>;
                        {stat && stat.icon}
                      </div>;
                    </div>;
                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>;
                      {stat && stat.value}
                    </div>;
                    <div className='text-sm text-white/70'>{stat && stat.label}</div>                  </div>                  <div key={index} className="text-center">;
                    <div className="flex justify-center mb-2">;
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">;
                        {stat && stat.icon}
                      </div>;
                    </div>;
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat && stat.value}</div>;
                    <div className="text-sm text-white/70">{stat && stat.label}</div>;
<<<<<<< HEAD
=======
=======
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
<<<<<<< HEAD
              </motion.div>
              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion.div
=======
              </motion && motion.div>;

              {/* CTA Buttons */}
<<<<<<< HEAD
              <motion&& motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion && motion.div 
=======
<<<<<<< HEAD
              <motion&& motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion && motion.div 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
              <motion.div 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.8 }}>;
                <a
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  href='#services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                  Explore Services;
                  <ArrowRight className='ml-2 w-5 h-5' />;
                </a>;
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'>                >;
                  Explore Services;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </a>;
=======
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                <a
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
<<<<<<< HEAD
        <section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              className='flex flex-col lg:flex-row gap-6 items-center justify-between'              initial={{ opacity: 0, y: 20 }}        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
=======
        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
=======
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">;
                  Get Started;
                </a>;
              </motion && motion.div>;
            </motion && motion.div>;
          </div>;
        </section>;

        {/* Search and Filter Section */}
        <section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <motion&& motion.div
              className='flex flex-col lg:flex-row gap-6 items-center justify-between'              initial={{ opacity: 0, y: 20 }}        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
              initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}>;
              {/* Search */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              <div className='relative flex-1 max-w-md'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />;
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />
              </div>
=======
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>                <button<input
=======
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
<<<<<<< HEAD
=======
                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300";
                />;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
=======
=======

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === 'all';
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                  }`}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                >;
                  All ({allServices && allServices.length});
                </button>;
                {serviceCategories && serviceCategories.map(category => (                  <button                {serviceCategories && serviceCategories.map((category) => (;
<<<<<<< HEAD
=======
=======
                >
                  All ({allServices.length})
                </button>
                {serviceCategories.map((category) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  <button
                    key={category && category.title}
                    onClick={() => setSelectedCategory(category && category.title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                      selectedCategory === category && category.title;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                    }`}
                  >;
                    {category && category.title} ({category && category.count});
                  </button>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
=======
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* View Mode Toggle */}
              <div className='flex items-center gap-2'>                <button              <div className="flex items-center gap-2">;
<<<<<<< HEAD
=======
=======
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';
                  }`}
<<<<<<< HEAD
                >;
                  <Grid className='w-5 h-5' />                </button>                  <Grid className="w-5 h-5" />;
                </button>;
=======
<<<<<<< HEAD
                >;
                  <Grid className='w-5 h-5' />                </button>                  <Grid className="w-5 h-5" />;
                </button>;
=======
                >
                  <Grid className="w-5 h-5" />
                </button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';
                  }`}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                >
                  <List className='w-5 h-5' />                </button>                  <List className="w-5 h-5" />
=======
                >
                  <List className="w-5 h-5" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </button>
              </div>
            </motion.div>
          </div>
        </section>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                >;
                  <List className='w-5 h-5' />                </button>                  <List className="w-5 h-5" />;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Services Grid */}
<<<<<<< HEAD
        <section
          id='services'
          className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <motion&& motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }>            <motion&& motion.div
<<<<<<< HEAD
=======
=======
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
<<<<<<< HEAD
=======
=======
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}>;
                  {/* Service Header */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  <div
<<<<<<< HEAD
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
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
          Cutting - Edge Services Showcase 2025 - Zion Tech Group | Future;
          Technology Solutions;
        </title>;
        <meta;
          name='description';
          content='Explore our revolutionary cutting - edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.';
        />;
        <meta;
          name='keywords';
          content='cutting - edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology';
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
                className='text - 4xl md:text - 6xl lg:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6'                initial={{ opacity: 0, scale: 0.9 }}        <title > Cutting - Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>;
        <meta name="description" content="Explore our revolutionary cutting - edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />;
        <meta name="keywords" content="cutting - edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />;
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
                Cutting - Edge Services;
                <span className='block text - 2xl md:text - 3xl lg:text - 4xl mt - 4 text - white / 90'>;
                  Showcase 2025;
                </span>;
              </motion.h1>;
              <motion.p;
                className='text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto mb - 12 leading - relaxed'                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text - 2xl md:text - 3xl lg:text - 4xl mt - 4 text - white / 90">;
                  Showcase 2025;
                </span>;
              </motion.h1>;
              <motion.p;
                className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto mb - 12 leading - relaxed";
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >;
                Discover revolutionary technology solutions that are reshaping;
                industries and defining the future. From AI consciousness to;
                space mining, experience the cutting edge of innovation.;
              </motion.p>;
              {/* Hero Stats */}
              <motion.div;
                className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12'                initial={{ opacity: 0, coordinate_y: 20 }}                Discover revolutionary technology solutions that are reshaping industries and defining the future.;
                From AI consciousness to space mining, experience the cutting edge of innovation.;
              </motion.p>;
              {/* Hero Stats */}
              <motion.div;
                className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12";
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >;
                {hero_stats.map ((stat, index) => (
                  <div key={index} className='text - center'>;
                    <div className='flex justify - center mb - 2'>;
                      <div className='p - 3 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30'>;
                        {stat.icon}
                      </div>;
                    </div>;
                    <div className='text - 2xl md:text - 3xl font - bold text - white mb - 1'>;
                      {stat.value}
                    </div>;
                    <div className='text - sm text - white / 70'>{stat.label}</div>                  </div>                  <div key={index} className="text - center">;
                    <div className="flex justify - center mb - 2">;
                      <div className="p - 3 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30">;
                        {stat.icon}
                      </div>;
                    </div>;
                    <div className="text - 2xl md:text - 3xl font - bold text - white mb - 1">{stat.value}</div>;
                    <div className="text - sm text - white / 70">{stat.label}</div>))}
              </motion.div>;
              {/* CTA Buttons */}
              <motion.div;
                className='flex flex - col sm:flex - row gap - 4 justify - center'                initial={{ opacity: 0, coordinate_y: 20 }}              <motion.div;
                className="flex flex - col sm:flex - row gap - 4 justify - center";
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >;
                <a;
                  href='#services';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25';
                >;
                  Explore Services;
                  <ArrowRight className='ml - 2 w - 5 h - 5' />;
                </a>;
                <a;
                  href='/contact';
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105'                >                >;
                  Explore Services;
                  <ArrowRight className="ml - 2 w - 5 h - 5" />;
                </a>;
                <a;
                  href="/contact";
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Get Started;
                </a>;
              </motion.div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Search and Filter Section */}
        <section className='py - 12 bg - black / 50 backdrop - blur - sm border - t border - cyan - 500 / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <motion.div;
              className='flex flex - col lg:flex - row gap - 6 items - center justify - between'              initial={{ opacity: 0, coordinate_y: 20 }}        <section className="py - 12 bg - black / 50 backdrop - blur - sm border - t border - cyan - 500 / 20">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              className="flex flex - col lg:flex - row gap - 6 items - center justify - between";
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >;
              {/* Search */}
              <div className='relative flex - 1 max - w-md'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - cyan - 400 w - 5 h - 5' />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={search_term}
                  on_change={e => setSearchTerm (e.target.value)}
                  className='w - full pl - 10 pr - 4 py - 3 bg - black / 50 border border - cyan - 500 / 30 rounded - lg text - white placeholder - white / 50 focus:outline - none focus:border - cyan - 500 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300'                />;
              </div>;
              {/* Category Filter */}
              <div className='flex flex - wrap gap - 2'>                <button                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - black / 50 border border - cyan - 500 / 30 rounded - lg text - white placeholder - white / 50 focus:outline - none focus:border - cyan - 500 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300";
                />;
              </div>;
              {/* Category Filter */}
              <div className='flex flex - wrap gap - 2'>              <div className="flex flex - wrap gap - 2">;
                <button;
                  on_click={() => setSelectedCategory ('all')}
                  className={`px - 4 py - 2 rounded - full text - sm font - medium transition - all duration - 300 ${
                    selected_category === 'all';
                      ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                      : 'bg - black / 50 border border - cyan - 500 / 30 text - cyan - 400 hover:bg - cyan - 500 / 10';
                  }`}
                >;
                  All ({all_services.length});
                </button>;
                {service_categories.map (category => (                  <button                {service_categories.map ((category) => (
                  <button;
                    key={category.title}
                    on_click={() => setSelectedCategory (category.title)}
                    className={`px - 4 py - 2 rounded - full text - sm font - medium transition - all duration - 300 ${
                      selected_category === category.title;
                        ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                        : 'bg - black / 50 border border - cyan - 500 / 30 text - cyan - 400 hover:bg - cyan - 500 / 10';
                    }`}
                  >;
                    {category.title} ({category.count});
                  </button>))}
              </div>;
              {/* View Mode Toggle */}
              <div className='flex items - center gap - 2'>                <button              <div className="flex items - center gap - 2">;
                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded - lg transition - all duration - 300 ${
                    view_mode === 'grid';
                      ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 50';
                      : 'bg - black / 50 text - white / 70 hover:text - white hover:bg - black / 70';
                  }`}
                >;
                  <Grid className='w - 5 h - 5' />                </button>                  <Grid className="w - 5 h - 5" />;
                </button>;
                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded - lg transition - all duration - 300 ${
                    view_mode === 'list';
                      ? 'bg - cyan - 500 / 20 text - cyan - 400 border border - cyan - 500 / 50';
                      : 'bg - black / 50 text - white / 70 hover:text - white hover:bg - black / 70';
                  }`}
                >;
                  <List className='w - 5 h - 5' />                </button>                  <List className="w - 5 h - 5" />;
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Grid */}
        <section;
          id='services';
          className='py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black';
        >;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <motion.div;
              variants={container_variants}
              initial='hidden';
              whileInView='visible';
              viewport={{ once: true }}
              className={
                view_mode === 'grid';
                  ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                  : 'space - y-6';
              }            >            <motion.div;
              variants={container_variants}
              initial="hidden";
              whileInView="visible";
              viewport={{ once: true }}
              className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
            >;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={item_variants}
                  className={`group relative overflow - hidden rounded - 2xl border border - cyan - 500 / 20 bg - gradient - to - br from - black / 80 via - purple - 900 / 10 to - black / 80 backdrop - blur - sm hover:border - cyan - 500 / 50 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 ${
                    view_mode === 'list' ? 'flex flex - col lg:flex - row' : '';
                  }`}
                >;
                  {/* Service Header */}
                  <div;
                    className={`p - 6 ${view_mode === 'list' ? 'lg:w - 1/3' : ''}`}
                  >;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='flex - 1'>;
                        <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                          {service.name}
                        </h3>;
                        <p className='text - white / 70 text - sm leading - relaxed'>;
                          {service.description}
<<<<<<< HEAD
                        </p>
                      </div>
                      <div className='ml-4'>
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>
                          <Star className='w-6 h-6 text-cyan-400' />                        </div>                          {service.name}
=======
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Tags */}
<<<<<<< HEAD
                    <div className='flex flex-wrap gap-2 mb-4'>;
                      {service && service.tags.slice(0, 3).map((tag, tagIndex) => (;
                        <span
                          key={tagIndex}
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'>                    <div className="flex flex-wrap gap-2 mb-4">;
                      {service && service.tags.slice(0, 3).map((tag, tagIndex) => (;
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
<<<<<<< HEAD
=======
=======
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          {tag}
                        </span>;
                      ))}
<<<<<<< HEAD
<<<<<<< HEAD
                    </div>
                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>
                      <span>Market: {service.marketSize}</span>
                      <span className='text-cyan-400'>{service.category}</span>                    </div>
=======
                    </div>

                    {/* Market Info */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-cyan-400">{service.category}</span>
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  </div>
                  {/* Service Details */}
<<<<<<< HEAD
                  <div
                    className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}
                  >                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-cyan-400">{service.category}</span>
                    </div>
                  </div>
=======
                    </div>;

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>;
                      <span>Market: {service && service.marketSize}</span>;
                      <span className='text-cyan-400'>{service && service.category}</span>                    </div>;
                  </div>;

                  {/* Service Details */}
                  <div
                    className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">;
                      <span>Market: {service && service.marketSize}</span>;
                      <span className="text-cyan-400">{service && service.category}</span>;
                    </div>;
                  </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  {/* Service Details */}
                  <div
                    className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>;
                    <div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;
                        Key Features;
                      </h4>;
                      <ul className='space-y-2'>;
                        {service && service.features;
                          .slice(0, 3);
                          .map((feature, featureIndex) => (;
                            <li
                              key={featureIndex}
<<<<<<< HEAD
                              className='flex items-start text-sm text-white/80'
                            >
                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0' />
                              <span>{feature}</span>
                            </li>
                          ))}                      </ul>
=======
                  <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    </div>
=======
                              className='flex items-start text-sm text-white/80'>;
                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0 && 0.5 mr-2 flex-shrink-0' />;
                              <span>{feature}</span>;
                            </li>;
                          ))}                      </ul>;
                    </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* Pricing */}
<<<<<<< HEAD
                    <div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>                      <ul className="space-y-2">;
                        {service && service.features.slice(0, 3).map((feature, featureIndex) => (;
                          <li key={featureIndex} className="flex items-start text-sm text-white/80">;
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0 && 0.5 mr-2 flex-shrink-0" />;
                            <span>{feature}</span>;
                          </li>;
                        ))}
<<<<<<< HEAD
                    </div>
=======
                        </p>;
                      </div>;
                      <div className='ml - 4'>;
                        <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center'>;
                          <Star className='w - 6 h - 6 text - cyan - 400' />                        </div>                          {service.name}
                        </h3>;
                        <p className="text - white / 70 text - sm leading - relaxed">;
                          {service.description}
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
                      <span className='text - cyan - 400'>{service.category}</span>                    </div>;
                  </div>;
                  {/* Service Details */}
                  <div;
                    className={`px - 6 pb - 6 ${view_mode === 'list' ? 'lg:w - 2/3' : ''}`}
                  >                    <div className="flex items - center justify - between text - sm text - white / 60 mb - 4">;
                      <span > Market: {service.market_size}</span>;
                      <span className="text - cyan - 400">{service.category}</span>;
                    </div>;
                  </div>;
                  {/* Service Details */}
                  <div;
                    className={`px - 6 pb - 6 ${view_mode === 'list' ? 'lg:w - 2/3' : ''}`}
                  >;
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Key Features;
                      </h4>;
                      <ul className='space - y-2'>;
                        {service.features;
                          .slice (0, 3);
                          .map ((feature, feature_index) => (
                            <li;
                              key={feature_index}
                              className='flex items - start text - sm text - white / 80';
                            >;
                              <CheckCircle className='w - 4 h - 4 text - cyan - 400 mt - 0.5 mr - 2 flex - shrink - 0' />;
                              <span>{feature}</span>;
                            </li>))}                      </ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>                      <ul className="space - y-2">;
                        {service.features.slice (0, 3).map ((feature, feature_index) => (
                          <li key={feature_index} className="flex items - start text - sm text - white / 80">;
                            <CheckCircle className="w - 4 h - 4 text - cyan - 400 mt - 0.5 mr - 2 flex - shrink - 0" />;
                            <span>{feature}</span>;
                          </li>))}
                    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}
<<<<<<< HEAD
                        </span>                      </div>
                    </div>
                    {/* CTA */}
                    <div className='flex items-center justify-between'>                        Starting From
=======
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </h4>
                      <div className="text-2xl font-bold text-white">
                        ${service.pricing.starter.price}
                        <span className="text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>
                      </div>
                    </div>
=======
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
<<<<<<< HEAD
                    <div className='flex items-center justify-between'>                        Starting From;
                      </h4>;
                      <div className="text-2xl font-bold text-white">;
                        ${service && service.pricing.starter && starter.price}
                        <span className="text-sm font-normal text-white/60">/{service && service.pricing.starter && starter.period}</span>;
                      </div>;
                    </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    {/* CTA */}
                    <div className='flex items-center justify-between'>;
                      <a
                        href={service && service.website}
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium'>;
                        Learn More;
                        <ExternalLink className='ml-1 w-4 h-4' />;
                      </a>;
                      <a
                        href='/contact'
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4' />                      </a>                      <a
                        href={service && service.website}
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium">;
                        Learn More;
                        <ExternalLink className="ml-1 w-4 h-4" />;
                      </a>;
<<<<<<< HEAD
                      <a
                        href="/contact"
=======
=======
                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      <a
                        href="/contact"
<<<<<<< HEAD
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                        Get Started;
                        <ArrowRight className="ml-2 w-4 h-4" />;
                      </a>;
                    </div>;
                  </div>;
<<<<<<< HEAD

                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />;
                </motion && motion.div>;
=======
=======

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}
            </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />;
                </motion && motion.div>;
              ))}
<<<<<<< HEAD
            </motion.div>
=======
            </motion && motion.div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                className='text-center py-20'>;
                <div className='text-6xl mb-4'>🔍</div>;
                <h3 className='text-2xl font-bold text-white mb-2'>;
                  No services found;
                </h3>;
                <p className='text-white/70 mb-6'>;
                  Try adjusting your search terms or category filter;
                </p>;
                <button
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                >              >;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>;
<<<<<<< HEAD
=======
=======
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <button
                  onClick={() => {;
                    setSearchTerm('');
<<<<<<< HEAD

                    setSelectedCategory('all')
=======
                    setSelectedCategory('all');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300";
                >;
                  Clear Filters;
                </button>;
              </motion && motion.div>;
<<<<<<< HEAD
=======
=======
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}
<<<<<<< HEAD
          </div>
        </section>
<<<<<<< HEAD
=======
          </div>;
        </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-white/80 mb-8 leading-relaxed'>
                Our cutting-edge services are designed to give you a competitive
                advantage in the rapidly evolving technology landscape. Let's
                discuss how we can help you achieve your goals.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
=======
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-white/80 mb-8 leading-relaxed'>;
                Our cutting-edge services are designed to give you a competitive;
                advantage in the rapidly evolving technology landscape. Let's;
                discuss how we can help you achieve your goals.;
              </p>;

              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5' />;
                </a>;
                <a
<<<<<<< HEAD
                  href={`tel:${contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'
                >
                  <Phone className='mr-2 w-5 h-5' />                  Call Now                Ready to Transform Your Business?
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape.
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
=======
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'>;
                  <Phone className='mr-2 w-5 h-5' />                  Call Now                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-white/80 mb-8 leading-relaxed">;
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. ;
                Let's discuss how we can help you achieve your goals.;
              </p>;

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                  Start Your Journey;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </a>;
                <a
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">;
                  <Phone className="mr-2 w-5 h-5" />;
                  Call Now;
                </a>;
              </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              {/* Contact Info */}
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>;
                <div className='flex flex-col items-center'>;
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <Phone className='w-6 h-6 text-cyan-400' />;
                  </div>;
                  <div className='text-white font-semibold'>Phone</div>;
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className='flex flex-col items-center'>;
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <Mail className='w-6 h-6 text-cyan-400' />;
                  </div>;
                  <div className='text-white font-semibold'>Email</div>;
                  <a
<<<<<<< HEAD
                    href={`mailto:${contactInfo.email}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>
                    <MapPin className='w-6 h-6 text-cyan-400' />
                  </div>
                  <div className='text-white font-semibold'>Address</div>
                  <div className='text-white/70 text-sm'>
                    {contactInfo.address}
                  </div>                </div>                  </div>
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
);
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) |const containerVariants = {
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
  duration: 0.5
};}
=======
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

  const matchesSearch = service && service.name.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.description.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || const containerVariants = {;
  hidden: {;
  opacity: 0 ;
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

};}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
  coordinate_y: 0, opacity: 1, transition: {
  duration: 0.5;
}}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
