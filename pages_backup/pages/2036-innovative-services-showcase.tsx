
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

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<;
    'name' | 'price' | 'rating' | 'marketSize';
  >('name');


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

        return (b.rating |0) - (a.rating |0);
      case 'marketSize':

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2036-innovative-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2036-innovative-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2036-innovative-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default 2036-innovative-services-showcase;