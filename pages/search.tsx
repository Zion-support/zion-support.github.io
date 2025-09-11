
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
import React, { useState } from 'react';

import React, { useState, useEffect } from 'react',


=======import React, { useState } from 'react';
import React, { useState, useEffect } from 'react',
import Head from 'next/head';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';

import {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search,
  Filter,
  ArrowRight,
  Clock,
  Star,
  FileText,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Users,
  Settings,
  Globe,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';
const searchResults = [
  {
    id: 1
    title: 'AI Development Services'
    description: 'Comprehensive AI development solutions including machine learning, computer vision, and natural language processing.'
    url: '/ai-services'
    category: 'Services'
    type: 'Page'
    icon: Brain
    rating: 4.9
    lastUpdated: '2024-01-15'
  }
  {
    id: 2
    title: 'Cloud Infrastructure Setup'
    description: 'Complete guide to setting up scalable cloud infrastructure for your applications.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Cloud
    rating: 4.8
    lastUpdated: '2024-01-10'
  }
  {
    id: 3
    title: 'Cybersecurity Best Practices'
    description: 'Essential cybersecurity practices to protect your applications and data.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Shield
    rating: 4.7
    lastUpdated: '2024-01-08'
  }
  {
    id: 4
    title: 'Database Optimization'
    description: 'Learn database design principles and optimization techniques.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Database
    rating: 4.8
    lastUpdated: '2024-01-05'
  }
  {
    id: 5
    title: 'Our Team'
    description: 'Meet our talented team of experts who are passionate about technology and innovation.'
    url: '/team'
    category: 'Company'
    type: 'Page'
    icon: Users
    rating: 4.9
    lastUpdated: '2024-01-12'
  }
  {
    id: 6
    title: 'Contact Us'
    description: 'Get in touch with our team for project inquiries and support.'
    url: '/contact'
    category: 'Company'
    type: 'Page'
    icon: Settings
    rating: 4.9
    lastUpdated: '2024-01-14'
  }
];
const categories = [
  { name: 'All', count: searchResults.length }
  { name: 'Services', count: 1 }
  { name: 'Guides', count: 3 }
  { name: 'Company', count: 2 }
];
const filters = [
  { name: 'Pages', count: 3 }
  { name: 'Articles', count: 3 }
  { name: 'Recent', count: 4 }
  { name: 'Popular', count: 2 }
];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function SearchPage() {


import { 
  Search, Filter, Grid, List, ArrowRight, ExternalLink, 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon;
  X, Sliders, SortAsc, SortDesc
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
export default function SearchPage() {



export default function SearchPage() {



  const filteredResults = searchResults && searchResults.filter(result => {;
    const matchesQuery = result && result.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
                        result && result.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || result && result.category === selectedCategory;
    const matchesFilter = selectedFilter === 'All' || result && result.type === selectedFilter;

    return matchesQuery && matchesCategory && matchesFilter;
  });
=======


    return matchesQuery && matchesCategory && matchesFilter;
  });

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Search, Filter, Grid, List, ArrowRight, ExternalLink,;
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,;
  X, Sliders, SortAsc, SortDesc;
} from 'lucide-react',;
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
export default function SearchPage(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({;
    category: 'all';
    status: 'all',;
    priceRange: 'all',;
    technology: 'all';
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  // Mock data for search;
  const allServices = [;
    {;
      id: 'ai-business-intelligence';
      title: 'AI Business Intelligence';
      description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling';
      category: 'AI & Machine Learning';
      status: 'active',;
      price: '$499/month',;
      technology: 'AI/ML',;
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],;
      link: '/ai-business-intelligence',;
      icon: Brain,;
      color: 'from-purple-500 to-pink-500',;
      relevance: 95;
    },;
    {;
      id: 'quantum-cybersecurity',;
      title: 'Quantum Cybersecurity',;
      description: 'Future-proof security with quantum-resistant encryption and AI threat detection',;
      category: 'Cybersecurity',;
      status: 'active',;
      price: '$799/month',;
      technology: 'Quantum',;
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],;
      link: '/quantum-cybersecurity',;
      icon: Shield,;
      color: 'from-red-500 to-orange-500',;
      relevance: 92;
    },;
    {;
      id: 'ai-customer-experience',;
      title: 'AI Customer Experience',;
      description: 'Deliver personalized customer experiences at scale with AI-driven insights',;
      category: 'AI & Machine Learning',;
      status: 'active',;
      price: '$399/month',;
      technology: 'AI/ML',;
      features: ['Customer journey mappingAI personalizationSentiment analysisPredictive support'],;
      link: '/ai-customer-experience',;
      icon: Users,;
      color: 'from-green-500 to-teal-500',;
      relevance: 88;
    },;
    {;
      id: 'edge-computing-orchestration',;
      title: 'Edge Computing Orchestration',;
      description: 'Deploy and manage applications at the edge with intelligent orchestration',;
      category: 'Edge Computing',;
      status: 'active',;
      price: '$349/month',;
      technology: 'Edge',;
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],;
      link: '/edge-computing-orchestration',;
      icon: Network,;
      color: 'from-purple-500 to-pink-500',;
      relevance: 85;
    },;
    {;
      id: 'space-technology',;
      title: 'Space Technology Innovation',;
      description: 'Accelerate space exploration with cutting-edge technology solutions',;
      category: 'Space Technology',;
      status: 'beta',;
      price: '$2,499/month',;
      technology: 'Space',;
      features: ['Satellite managementAI mission planningQuantum communicationResource optimization'],;
      link: '/space-technology',;
      icon: Rocket,;
      color: 'from-violet-500 to-purple-500',;
      relevance: 82;
    },;
    {;
      id: 'neural-interface',;
      title: 'Neural Interface Development',;
      description: 'Build the future of human-computer interaction with neural interfaces',;
      category: 'Biotechnology',;
      status: 'beta',;
      price: '$899/month',;
      technology: 'Biotech',;
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],;
      link: '/neural-interface',;
      icon: Brain,;
      color: 'from-pink-500 to-rose-500',;
      relevance: 78;
    },;
    {;
      id: 'quantum-neural-networks',;
      title: 'Quantum Neural Networks',;
      description: 'Quantum-powered AI with advanced consciousness capabilities',;
      category: 'Quantum Computing',;
      status: 'beta',;
      price: '$1,299/month',;
      technology: 'Quantum',;
      features: ['Quantum algorithmsNeural optimizationConsciousness simulationResearch tools'],;
      link: '/quantum-neural-networks',;
      icon: Atom,;
      color: 'from-blue-500 to-cyan-500',;
      relevance: 75;
    },;
    {;
      id: 'autonomous-devops',;
      title: 'Autonomous DevOps',;
      description: 'AI-powered DevOps optimization and automation platform',;
      category: 'Cloud & DevOps',;
      status: 'active',;
      price: '$599/month',;
      technology: 'DevOps',;
      features: ['Auto-deploymentPerformance monitoringSecurity scanningCost optimization'],;
      link: '/autonomous-devops',;
      icon: Cpu,;
      color: 'from-emerald-500 to-teal-500',;
      relevance: 72;
    },;
    {;
      id: 'ai-autonomous-business',;
      title: 'AI Autonomous Business Manager',;
      description: 'Fully autonomous business operations powered by advanced AI',;
      category: 'AI & Machine Learning',;
      status: 'beta',;
      price: '$1,999/month',;
      technology: 'AI/ML',;
      features: ['Business automationDecision makingResource allocationPerformance optimization'],;
      link: '/ai-autonomous-business',;
      icon: Target,;
      color: 'from-indigo-500 to-purple-500',;
      relevance: 70;
    },;
    {;
      id: 'quantum-financial-trading',;
      title: 'Quantum Financial Trading',;
      description: 'Quantum computing powered financial analysis and trading strategies',;
      category: 'Financial Technology',;
      status: 'beta',;
      price: '$3,999/month',;
      technology: 'Quantum',;
      features: ['Quantum algorithmsRisk assessmentPortfolio optimizationReal-time analysis'],;
      link: '/quantum-financial-trading',;
      icon: TrendingUp,;
      color: 'from-emerald-500 to-green-500',;
      relevance: 68;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const categories = [;
    { id: 'all', name: 'All Categories', icon: '📂' },;
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', icon: '🧠' },;
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },;
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },;
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },;
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },;
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },;
    { id: 'Biotechnology', name: 'Biotechnology', icon: '🧬' },;
    { id: 'Financial Technology', name: 'Financial Technology', icon: '💰'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const statuses = [;
    { id: 'all', name: 'All Statuses', icon: '📊' },;
    { id: 'active', name: 'Active', icon: '✅' },;
    { id: 'beta', name: 'Beta', icon: '🧪' },;
    { id: 'coming-soon', name: 'Coming Soon', icon: '🚧'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', icon: '💰' },;
    { id: 'under-500', name: 'Under $500/month', icon: '💵' },;
    { id: '500-1000', name: '$500 - $1,000/month', icon: '💵' },;
    { id: '1000-2500', name: '$1,000 - $2,500/month', icon: '💵' },;
    { id: 'over-2500', name: 'Over $2,500/month', icon: '💵'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const technologies = [;
    { id: 'all', name: 'All Technologies', icon: '🔧' },;
    { id: 'AI/ML', name: 'AI/ML', icon: '🧠' },;
    { id: 'Quantum', name: 'Quantum', icon: '⚛️' },;
    { id: 'Edge', name: 'Edge', icon: '🌐' },;
    { id: 'Space', name: 'Space', icon: '🚀' },;
    { id: 'Biotech', name: 'Biotech', icon: '🧬' },;
    { id: 'DevOps', name: 'DevOps', icon: '⚙️'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Search function;
  const performSearch = () => {;
    if (!searchTerm.trim()) {;
      setSearchResults([]);
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    setIsSearching(true);
    // Simulate search delay;
    setTimeout(() => {;
      const results = allServices.filter(service => {;
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                            service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                            service.technology.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filters.category === 'all' || service.category === filters.category;
        const matchesStatus = filters.status === 'all' || service.status === filters.status;
        const matchesTechnology = filters.technology === 'all' || service.technology === filters.technology;
        let matchesPrice = true;
        if (filters.priceRange !== 'all') {;
          const price = parseInt(service.price.replace(/[^0-9]/g, '')),;
          switch (filters.priceRange) {;
            case 'under-500':;
              matchesPrice = price < 500;
              break,;
            case '500-1000':;
              matchesPrice = price >= 500 && price < 1000;
              break,;
            case '1000-2500':;
              matchesPrice = price >= 1000 && price < 2500;
              break,;
            case 'over-2500':;
              matchesPrice = price >= 2500;
              break;
            } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
        return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice;
      }),;
      // Sort results;
      const sortedResults = results.sort((a, b) => {;
        switch (sortBy) {;
          case 'relevance':;
            return b.relevance - a.relevance,;
          case 'price-low':;
            return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),;
          case 'price-high':;
            return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),;
          case 'name':;
            return a.title.localeCompare(b.title);
          case 'status':;
            return a.status.localeCompare(b.status);
          default: return 0;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      }),;
      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 500);
  },;
  // Handle search on Enter key;
  const handleKeyPress = (e: React.KeyboardEvent) => {;
    if (e.key === 'Enter') {;
      performSearch();
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  // Update search when filters change;
  useEffect(() => {;
    if (searchTerm.trim()) {;
      performSearch();
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [filters, sortBy]),
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: 'all',
      status: 'all',
      priceRange: 'all',
      technology: 'all'
    }),
    setSortBy('relevance')
  },
  return (
    <Layout>
      <Head>
        <title>Search - Zion Tech Group</title>
        <meta name="description" content="Search our website for information, guides, services, and more." />
      </Head>
      <div className="min-h-screen bg-gray-50">
==============>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <Layout>;
      <Head>;
        <title>Search - Zion Tech Group</title>;
        <meta name="description" content="Search our website for information, guides, services, and more." />;
      </Head>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              transition={{ duration: 0 && 0.8 }}>;
              <h1 className="text-5xl font-bold mb-6">;
                Search Our Website;
              </h1>;
              <p className="text-xl mb-8 text-blue-100">;
                Find the information you need quickly and easily.;
              </p>;

              {/* Search Bar */}
              {/* Search Bar */}              <div className="max-w-2xl mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;


                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />





            </motion.div>
          </div>
        </section>
        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
              {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Filters and Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                  {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
=======

=======

import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';
import Layout from './components / Layout';
import {
  Search,
  Filter,
  ArrowRight,
  Clock,
  Star,
  FileText,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Users,
  Settings,
  Globe,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp;
} from 'lucide-react';
;
const search_results = [;
  {
    id: 1,
    title: 'AI Development Services',
    description: 'Comprehensive AI development solutions including machine learning, computer vision, and natural language processing.',
    url: '/ai - services',
    category: 'Services',
    type: 'Page',
    icon: Brain,
    rating: 4.9,
    last_updated: '2024 - 01 - 15';
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Setup',
    description: 'Complete guide to setting up scalable cloud infrastructure for your applications.',
    url: '/guides',
    category: 'Guides',
    type: 'Article',
    icon: Cloud,
    rating: 4.8,
    last_updated: '2024 - 01 - 10';
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    description: 'Essential cybersecurity practices to protect your applications and data.',
    url: '/guides',
    category: 'Guides',
    type: 'Article',
    icon: Shield,
    rating: 4.7,
    last_updated: '2024 - 01 - 08';
  },
  {
    id: 4,
    title: 'Database Optimization',
    description: 'Learn database design principles and optimization techniques.',
    url: '/guides',
    category: 'Guides',
    type: 'Article',
    icon: Database,
    rating: 4.8,
    last_updated: '2024 - 01 - 05';
  },
  {
    id: 5,
    title: 'Our Team',
    description: 'Meet our talented team of experts who are passionate about technology and innovation.',
    url: '/team',
    category: 'Company',
    type: 'Page',
    icon: Users,
    rating: 4.9,
    last_updated: '2024 - 01 - 12';
  },
  {
    id: 6,
    title: 'Contact Us',
    description: 'Get in touch with our team for project inquiries and support.',
    url: '/contact',
    category: 'Company',
    type: 'Page',
    icon: Settings,
    rating: 4.9,
    last_updated: '2024 - 01 - 14';
  }
];
;
const categories = [;
  { name: 'All', count: search_results.length },
  { name: 'Services', count: 1 },
  { name: 'Guides', count: 3 },
  { name: 'Company', count: 2 }
];
;
const filters = [;
  { name: 'Pages', count: 3 },
  { name: 'Articles', count: 3 },
  { name: 'Recent', count: 4 },
  { name: 'Popular', count: 2 }
];
export default /**
 * SearchPage - Function description
 */
function SearchPage() {
  const [search_query, setSearchQuery] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('All');
  const [selected_filter, setSelectedFilter] = useState ('All');
  const [show_filters, setShowFilters] = useState (false);
;
  const filtered_results = search_results.filter (result => {
    const matches_query = result.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
                        result.description.toLowerCase ().includes (search_query.toLowerCase ());
    const matches_category = selected_category === 'All' || result.category === selected_category;
    const matches_filter = selected_filter === 'All' || result.type === selected_filter;
;
    return matches_query && matches_category && matches_filter;
  });
;
  return (
    <Layout>;
      <Head>;
        <title > Search - Zion Tech Group</title>;
        <meta name="description" content="Search our website for information, guides, services, and more." />;
      </Head>;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center max - w-4xl mx - auto";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text - 5xl font - bold mb - 6">;
                Search Our Website;
              </h1>;
              <p className="text - xl mb - 8 text - blue - 100">;
                Find the information you need quickly and easily.;
              </p>;
              {/* Search Bar */}
              <div className="max - w-2xl mx - auto">;
                <div className="relative">;
                  <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                  <input;
                    type="text";
                    placeholder="Search for services, guides, articles...";
                    value={search_query}
                    on_change={(e) => setSearchQuery (e.target.value)}
                    className="w - full pl - 12 pr - 4 py - 4 rounded - lg text - gray - 900 text - lg focus:outline - none focus:ring - 2 focus:ring - blue - 300";
                  />;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Filters Section */}
        <section className="py - 8 bg - white border - b">;
          <div className="container mx - auto px - 4">;
            <div className="flex flex - col lg:flex - row gap - 4 items - center justify - between">;
              <div className="flex flex - wrap gap - 4">;
                <button;
                  on_click={() => setShowFilters (!show_filters)}
                  className="flex items - center px - 4 py - 2 border border - gray - 300 rounded - lg hover:bg - gray - 50 transition - colors";
                >;
                  <Filter className="w - 4 h - 4 mr - 2" />;
                  Filters;
                  {show_filters ? <ChevronUp className="w - 4 h - 4 ml - 2" /> : <ChevronDown className="w - 4 h - 4 ml - 2" />}
                </button>;
                {categories.map ((category) => (
                  <button;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    key={category.name}
                    on_click={() => setSelectedCategory (category.name)}
                    className={`px - 4 py - 2 rounded - lg transition - colors ${
                      selected_category === category.name;
                        ? 'bg - blue - 600 text - white';
                        : 'bg - gray - 100 text - gray - 700 hover:bg - gray - 200';
                    }`}
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-center gap-2">

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >

                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Filters and Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {filteredResults.length} results found
              </div>
            </div>
            {showFilters && (
              <motion.div                {categories && categories.map((category) => (;
                  <button
                    key={category && category.name}
                    onClick={() => setSelectedCategory(category && category.name)}
                    className={`px-4 py-2 rounded-lg transition-colors ${;
                      selectedCategory === category && category.name;
                        ? 'bg-blue-600 text-white';
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                    }`}
                  >;
                    {category && category.name} ({category && category.count});
                  </button>;
                ))}
              <div className="text-sm text-gray-600">
                {filteredResults.length} results found
              </div>
            </div>
            {showFilters && (
              <motion.div
                className="mt-4 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a        {/* Search Results */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            {filteredResults && filteredResults.length > 0 ? (;
              <div className="space-y-6">;
                {filteredResults && filteredResults.map((result, index) => (;
                  <motion&& motion.div
                    key={result && result.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}

=======

                  >;
                    {category.name} ({category.count});
                  </button>))}
              </div>;
              <div className="text - sm text - gray - 600">;
                {filtered_results.length} results found;
              </div>;
            </div>;
            {show_filters && (
              <motion.div;
                className="mt - 4 p - 4 bg - gray - 50 rounded - lg";
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >;
                <div className="flex flex - wrap gap - 4">;
                  {filters.map ((filter) => (
                    <button;
                      key={filter.name}
                      on_click={() => setSelectedFilter (filter.name)}
                      className={`px - 3 py - 1 rounded - full text - sm transition - colors ${
                        selected_filter === filter.name;
                          ? 'bg - blue - 600 text - white';
                          : 'bg - white text - gray - 700 hover:bg - gray - 100';
                      }`}
                    >;
                      {filter.name} ({filter.count});
                    </button>))}
                </div>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Search Results */}
        <section className="py - 16">;
          <div className="container mx - auto px - 4">;
            {filtered_results.length > 0 ? (
              <div className="space - y-6">;
                {filtered_results.map ((result, index) => (
                  <motion.div;
                    key={result.id}
                    className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover:shadow - md transition - shadow";
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
            {/* Filters and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                  {Object.values(filters).some(f => f !== 'all') && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  )}
                </button>
            {/* Expanded Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
=======

=======
</Link>
                    </div>
                  </motion.div>
                ))}
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            ) : (
              <motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <h3 className="text-xl font-bold text-gray-900 mb-2">;
                          <Link
                            href={result && result.url}
                            className="hover:text-blue-600 transition-colors">;
                            {result && result.title}
                          </Link>;
                        </h3>;
                        <p className="text-gray-600 mb-4">;
                          {result && result.description}
                        </p>;
                        <div className="flex items-center text-sm text-gray-500">;
                          <Clock className="w-4 h-4 mr-1" />;
                          <span className="mr-4">Updated {result && result.lastUpdated}</span>;
                          <div className="flex items-center">;
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />;
                            <span>{result && result.rating}</span>;
                          </div>;
                        </div>;
                      </div>;                      <Link
                        href={result && result.url}
                        className="ml-4 text-blue-600 hover:text-blue-700 transition-colors">;
                        <ArrowRight className="w-5 h-5" />;
                      </Link>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            ) : (;
              <motion&& motion.div
            ) : (
              <motion.div
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}>;
                    </div>
                      </Link>                    </div>
                  </motion.div>
                ))}
              </div>
=======                className="text-center py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8 }}>;
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                  No results found;
                </h3>;
                <p className="text-gray-600 mb-6">;
                  Try adjusting your search terms or filters.;
                </p>;
                <button
                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedFilter('All');
                  }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors";
                >;
                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}
          </div>;
        </section>;


=======
    </Layout>);
}  );
}
);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
