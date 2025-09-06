
=======


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2
} from 'lucide-react'
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3',;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function Comprehensive2025ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity')
  const categories = [
    { id: 'all', name: 'All Services', count: innovative2025MicroSaasExpansionV3.length }
    { id: 'AI & Analytics', name: 'AI & Analytics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('AI') && !s.category.includes('Healthcare') && !s.category.includes('HR') && !s.category.includes('Content') && !s.category.includes('Energy')).length }
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Healthcare')).length }
    { id: 'AI & HR Tech', name: 'AI & HR Tech', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('HR')).length }
    { id: 'AI & Content Creation', name: 'AI & Content Creation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Content')).length }
    { id: 'AI & Energy', name: 'AI & Energy', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Energy')).length }
    { id: 'AI & Robotics', name: 'AI & Robotics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Robotics')).length }
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Cybersecurity') |s.category.includes('Quantum')).length }
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Edge') |s.category.includes('IoT')).length }
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Space')).length }
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Neural')).length }
  ]
  const filteredServices = innovative2025MicroSaasExpansionV3
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' |service.category.includes(selectedCategory)
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const _filteredServices = innovative2025MicroSaasExpansionV3
    .filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory)

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
case 'popularity':
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        case 'popularity':
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        default: return 0
      }
    })
  const containerVariants = {
    hidden: { opacity: 0 }
<<<<<<< HEAD
<<<<<<< HEAD
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from 'react',
import Head from 'next / head',
import { motion, AnimatePresence } from 'framer-motion',
import {
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
import { innovative2025MicroSaasExpansionV3 } from '../data / 2025 - innovative - micro - saas - expansion - v3',
export default /**
 * Comprehensive2025ServicesShowcase - Function description
 */
function Comprehensive2025ServicesShowcase() {
  const [search_term, setSearchTerm] = useState (''),
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sort_by, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  const categories = [;
    { id: 'all', name: 'All Services', count: innovative2025MicroSaasExpansionV3.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('AI') && !s.category.includes ('Healthcare') && !s.category.includes ('HR') && !s.category.includes ('Content') && !s.category.includes ('Energy')).length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Healthcare')).length },
    { id: 'AI & HR Tech', name: 'AI & HR Tech', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('HR')).length },
    { id: 'AI & Content Creation', name: 'AI & Content Creation', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Content')).length },
    { id: 'AI & Energy', name: 'AI & Energy', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Energy')).length },
    { id: 'AI & Robotics', name: 'AI & Robotics', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Robotics')).length },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Cybersecurity') || s.category.includes ('Quantum')).length },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Edge') || s.category.includes ('IoT')).length },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Space')).length },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', count: innovative2025MicroSaasExpansionV3.filter (string => s.category.includes ('Neural')).length }
  ],
  const filtered_services = innovative2025MicroSaasExpansionV3;
    .filter (service => {
      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()),
      const matches_category = selected_category === 'all' || service.category.includes (selected_category),
      return matches_search && matches_category;
    });
    .sort ((a, b) => {
      switch (sort_by) {
        case 'popularity':;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        case 'price':;
          return parse_float (a.price.replace ('$', '')) - parse_float (b.price.replace ('$', '')),
        case 'rating':;
          return b.rating - a.rating,
        case 'newest':;
          return new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time (),
        default: return 0;
      }
    }),
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
        stagger_children: 0.1;
      }
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      transition: {
        duration: 0.5;
      }
    }
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Comprehensive2025ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const categories = [;
    { id: 'all', name: 'All Services', count: innovative2025MicroSaasExpansionV3.length },;
    { id: 'AI & Analytics', name: 'AI & Analytics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('AI') && !s.category.includes('Healthcare') && !s.category.includes('HR') && !s.category.includes('Content') && !s.category.includes('Energy')).length },;
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Healthcare')).length },;
    { id: 'AI & HR Tech', name: 'AI & HR Tech', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('HR')).length },;
    { id: 'AI & Content Creation', name: 'AI & Content Creation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Content')).length },;
    { id: 'AI & Energy', name: 'AI & Energy', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Energy')).length },;
    { id: 'AI & Robotics', name: 'AI & Robotics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Robotics')).length },;
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Quantum')).length },;
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length },;
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Space')).length },;
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Neural')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = innovative2025MicroSaasExpansionV3;
    .filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),;
        case 'price':;
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'newest':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        default: return 0;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
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
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
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

<<<<<<< HEAD
  },

=======


  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Comprehensive 2025 Innovative Services Showcase — Zion Tech Group","url":"https://ziontechgroup.com/comprehensive-2025-services-showcase","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>
      <EnhancedNavigation />

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white overflow - hidden">;
      <Head>;
        <title > Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services. Transform your business with Zion Tech Group." />;
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />;
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services." />;
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - 2025 - services - showcase" />;
        <script type="application / ld + json">{"@context":"https://schema.org", "@type":"WebPage", "headline":"Comprehensive 2025 Innovative Services Showcase — Zion Tech Group", "url":"https://ziontechgroup.com / comprehensive - 2025 - services - showcase", "isPartOf":{"@type":"WebSite", "name":"Zion Tech Group", "url":"https://ziontechgroup.com"}}</script></Head>;
      <EnhancedNavigation />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Hero Section */}
      <section className="relative py - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD


      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">

<<<<<<< HEAD
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 

              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,

=======

              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,

=======
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
=======
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-lg font-semibold">
                {innovative2025MicroSaasExpansionV3.length}+ Revolutionary Services
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold">
                AI-Powered Solutions
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-lg font-semibold">
                Quantum-Ready Technology
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent">;
              2025 Innovative Services Showcase;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto leading - relaxed mb - 8">;
              Discover our comprehensive collection of cutting - edge micro SAAS services, AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center mb - 12">;
              <div className="px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 rounded - full text - lg font - semibold">;
                {innovative2025MicroSaasExpansionV3.length}+ Revolutionary Services;
              </div>;
              <div className="px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - full text - lg font - semibold">;
                AI - Powered Solutions;
              </div>;
              <div className="px - 6 py - 3 bg - gradient - to - r from - green - 600 to - teal - 600 rounded - full text - lg font - semibold">;
                Quantum - Ready Technology;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Search and Filter Section */}
      <section className="py - 8 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
            {/* Search Bar */}
<<<<<<< HEAD


      {/* Search and Filter Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="relative flex - 1 max - w-md">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent";
              />;
            </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Category Filter */}
            <div className="flex flex - wrap gap - 2">;
              {categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 300 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                  }`}
<<<<<<< HEAD

=======

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
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >;
                  {category.name} ({category.count});
                </button>))}
            </div>;
<<<<<<< HEAD

            {/* View Mode and Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`p-2 rounded transition-all duration-300 ${;
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white';
                  }`  } catch (error) {
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
                  className={`p-2 rounded transition-all duration-300 ${;
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select

<<<<<<< HEAD
=======

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                    POPULAR
                  </div>
=======
=======
            {/* View Mode and Sort */}
            <div className="flex items - center gap - 4">;
              <div className="flex items - center bg - white / 10 rounded - lg p - 1">;
                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded transition - all duration - 300 ${
                    view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - white / 70 hover:text - white';
                  }`}
                >;
                  <Grid className="w - 5 h - 5" />;
                </button>;
                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded transition - all duration - 300 ${
                    view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - white / 70 hover:text - white';
                  }`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                >;
                  <List className="w - 5 h - 5" />;
                </button>;
              </div>;
              <select;
                value={sort_by}
                on_change={(e) => setSortBy (e.target.value as any)}
                className="px - 4 py - 2 bg - white / 10 border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 400";
              >;
                <option value="popularity">Most Popular</option>;
                <option value="price">Price: Low to High</option>;
                <option value="rating">Highest Rated</option>;
                <option value="newest">Newest First</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Services Grid */}
      <section className="py - 16 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
          >;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                variants={item_variants}
                className={`group relative ${
<<<<<<< HEAD

                  view_mode === 'grid';
                    ? 'p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
                    : 'p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300';

                }`}
              >;
                {/* Popular Badge */}
=======

      {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            {filteredServices.map((service, index) => (;
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
                className={`group relative ${;
                  viewMode === 'grid';
                    ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl';
                    : 'p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                {/* Popular Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {service.popular && (

                  <div className="absolute top - 4 right - 4 px - 3 py - 1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold rounded - full">;
                    POPULAR;
                  </div>)}

=======
                  view_mode === 'grid';
                    ? 'p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
                    : 'p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300';
                }`}
              >;
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top - 4 right - 4 px - 3 py - 1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold rounded - full">;
                    POPULAR;
                  </div>)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Service Header */}
                <div className="flex items - start gap - 4 mb - 6">;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} p - 4 flex items - center justify - center text - 2xl`}>;
                    {service.icon}
<<<<<<< HEAD


                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.tagline}</p>
                  </div>
                </div>

<<<<<<< HEAD
=======

                {/* Price and Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-white/60">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-white/60 text-sm">({service.reviews})</span>
                  </div>
                </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                  <div className="flex - 1">;
                    <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                    <p className="text - white / 70 text - sm leading - relaxed">{service.tagline}</p>;
                  </div>;
                </div>;
                {/* Price and Rating */}
                <div className="flex items - center justify - between mb - 4">;
                  <div className="flex items - center gap - 2">;
                    <span className="text - 3xl font - bold text - cyan - 400">{service.price}</span>;
                    <span className="text - white / 60">{service.period}</span>;
                  </div>;
                  <div className="flex items - center gap - 1">;
                    <StarIcon className="w - 5 h - 5 text - yellow - 400 fill - current" />;
                    <span className="text - white font - semibold">{service.rating}</span>;
                    <span className="text - white / 60 text - sm">({service.reviews})</span>;
                  </div>;
                </div>;
                {/* Description */}
                <p className="text - white / 80 leading - relaxed mb - 6">{service.description}</p>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Key Features */}
                <div className="mb - 6">;
                  <h4 className="text - white font - semibold mb - 3">Key Features:</h4>;
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 2 text - sm text - white / 70">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;
                        <span>{feature}</span>;
                      </div>))}
=======

                {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {service.features.length > 3 && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 3} more features
                      </div>

=======


                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
                {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-white/60">Market Size:</span>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Growth Rate:</span>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>

<<<<<<< HEAD
=======

                {/* ROI and Setup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm">{service.roi}</p>
                  <div className="mt-2 text-white/60 text-sm">
                    Setup Time: {service.setupTime} | Trial: {service.trialDays} days
                  </div>
                </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className="text - cyan - 400 text - sm font - medium">;
                        +{service.features.length - 3} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Market Info */}
                <div className="grid grid - cols - 2 gap - 4 mb - 6 text - sm">;
                  <div>;
                    <span className="text - white / 60">Market Size:</span>;
                    <div className="text - white font - medium">{service.market_size}</div>;
                  </div>;
                  <div>;
                    <span className="text - white / 60">Growth Rate:</span>;
                    <div className="text - white font - medium">{service.growth_rate}</div>;
                  </div>;
                </div>;
                {/* ROI and Setup */}
                <div className="mb - 6 p - 4 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - lg border border - cyan - 400 / 20">;
                  <div className="text - cyan - 400 font - semibold mb - 2">🚀 Expected ROI:</div>;
                  <p className="text - white / 80 text - sm">{service.roi}</p>;
                  <div className="mt - 2 text - white / 60 text - sm">;
                    Setup Time: {service.setup_time} | Trial: {service.trial_days} days;
                  </div>;
                </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Action Buttons */}
                <div className="flex flex - col sm:flex - row gap - 3">;
                  <a;
                    href={service.link}
<<<<<<< HEAD


                {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />

<<<<<<< HEAD
=======

                  </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <button className="px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/5">
                    Contact Sales
                  </button>
                </div>

<<<<<<< HEAD
=======

                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Ready to get started?</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">

<<<<<<< HEAD
=======

                      📞 {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')

                  setSelectedCategory('all')

<<<<<<< HEAD
=======

                }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex - 1 px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 rounded - lg font - semibold text - white text - center transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2";
                  >;
                    Learn More;
                    <ExternalLink className="w - 4 h - 4" />;
                  </a>;
                  <button className="px - 6 py - 3 border border - white / 20 hover:border - cyan - 400 / 30 rounded - lg font - semibold text - white transition - all duration - 300 hover:bg - white / 5">;
                    Contact Sales;
                  </button>;
                </div>;
                {/* Contact Info */}
                <div className="mt - 6 pt - 4 border - t border - white / 10 text - center">;
                  <div className="text - white / 60 text - sm mb - 2">Ready to get started?</div>;
                  <div className="flex items - center justify - center gap - 4 text - sm">;
                    <a href={`tel:${service.contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      📞 {service.contact_info.mobile}
                    </a>;
                    <a href={`mailto:${service.contact_info.email}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      ✉️ {service.contact_info.email}
                    </a>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className="text - center py - 20">;
              <div className="text - 6xl mb - 4">🔍</div>;
              <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
              <p className="text - white / 70 mb - 6">Try adjusting your search terms or filters</p>;
              <button;
                on_click={() => {
                  setSearchTerm (''),
                  setSelectedCategory ('all');
                }}
                className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg font - semibold text - white hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300";
              >;
                Clear Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* CTA Section */}
      <section className="py - 20 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
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
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />

<<<<<<< HEAD
=======

              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>

<<<<<<< HEAD
  )
=======
=======
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              Our team of experts is ready to help you implement these cutting - edge solutions;
              and drive innovation in your organization.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Schedule Consultation;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
    </div>);
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
        case 'rating':
          return b.rating - a.rating,
        case 'newest':

          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return 0
      }
    }),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Comprehensive 2025 Innovative Services Showcase — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/comprehensive-2025-services-showcase&quot; />
      
        <script type=&quot;application/ld+json&quot;>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebPage&quot;,&quot;headline&quot;:&quot;Comprehensive 2025 Innovative Services Showcase — Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com/comprehensive-2025-services-showcase&quot;,&quot;isPartOf&quot;:{&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com&quot;}}</script></Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Innovative Services Showcase
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-12&quot;>
              <div className=&quot;px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-lg font-semibold&quot;>
                {innovative2025MicroSaasExpansionV3.length}+ Revolutionary Services
              </div>
              <div className=&quot;px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold&quot;>
                AI-Powered Solutions
              </div>
              <div className=&quot;px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-lg font-semibold&quot;>
=======
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
  }
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Comprehensive2025ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const categories = [;
    { id: 'all', name: 'All Services', count: innovative2025MicroSaasExpansionV3.length },;
    { id: 'AI & Analytics', name: 'AI & Analytics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('AI') && !s.category.includes('Healthcare') && !s.category.includes('HR') && !s.category.includes('Content') && !s.category.includes('Energy')).length },;
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Healthcare')).length },;
    { id: 'AI & HR Tech', name: 'AI & HR Tech', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('HR')).length },;
    { id: 'AI & Content Creation', name: 'AI & Content Creation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Content')).length },;
    { id: 'AI & Energy', name: 'AI & Energy', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Energy')).length },;
    { id: 'AI & Robotics', name: 'AI & Robotics', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Robotics')).length },;
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Quantum')).length },;
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length },;
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Space')).length },;
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', count: innovative2025MicroSaasExpansionV3.filter(s => s.category.includes('Neural')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  ],;
  const filteredServices = innovative2025MicroSaasExpansionV3;
    .filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),;
        case 'price':;
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'newest':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        default: return 0;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
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
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
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
  },
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Comprehensive 2025 Innovative Services Showcase — Zion Tech Group","url":"https://ziontechgroup.com/comprehensive-2025-services-showcase","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>
      <EnhancedNavigation />
      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-lg font-semibold">
                {innovative2025MicroSaasExpansionV3.length}+ Revolutionary Services
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold">
                AI-Powered Solutions
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-lg font-semibold">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Quantum-Ready Technology
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Search and Filter Section */}
      <section className=&quot;py-8 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Search Bar */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                >
                  {_category.name} ({_category.count})
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className=&quot;flex items-center gap-4&quot;>
              <div className=&quot;flex items-center bg-white/10 rounded-lg p-1&quot;>
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className=&quot;px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;
              >
                <option value=&quot;popularity&quot;>Most Popular</option>
                <option value=&quot;price&quot;>Price: Low to High</option>
                <option value=&quot;rating&quot;>Highest Rated</option>
                <option value=&quot;newest&quot;>Newest First</option>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Search and Filter Section */}
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
      {/* Search and Filter Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            {/* View Mode and Sort */}
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
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
            {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  {category.name} ({category.count});
                </button>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
            {/* View Mode and Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`p-2 rounded transition-all duration-300 ${;
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white';
                  }`  } catch (error) {
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
                  className={`p-2 rounded transition-all duration-300 ${;
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
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
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popularity">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </select>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Services Grid */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`group relative ${
                  viewMode === 'grid' 
                    ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                    : 'p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300'}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className=&quot;absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full&quot;>
                    POPULAR
                  </div>
                )}

                {/* Service Header */}
                <div className=&quot;flex items-start gap-4 mb-6&quot;>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{service.tagline}</p>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-3xl font-bold text-cyan-400&quot;>{service.price}</span>
                    <span className=&quot;text-white/60&quot;>{service.period}</span>
                  </div>
                  <div className=&quot;flex items-center gap-1&quot;>
                    <StarIcon className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                    <span className=&quot;text-white font-semibold&quot;>{service.rating}</span>
                    <span className=&quot;text-white/60 text-sm&quot;>({service.reviews})</span>
                  </div>
                </div>

                {/* Description */}
                <p className=&quot;text-white/80 leading-relaxed mb-6&quot;>{service.description}</p>

                {/* Key Features */}
                <div className=&quot;mb-6&quot;>
                  <h4 className=&quot;text-white font-semibold mb-3&quot;>Key Features:</h4>
                  <div className=&quot;grid grid-cols-1 gap-2&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative ${
                  viewMode === 'grid'
                    ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                    : 'p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300'
                }`}
              >
                {/* Popular Badge */}
      {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >;
            {filteredServices.map((service, index) => (;
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
                className={`group relative ${;
                  viewMode === 'grid';
                    ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl';
                    : 'p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                {/* Popular Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                {/* Service Header */}
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.tagline}</p>
                  </div>
                </div>
                {/* Price and Rating */}
                {/* Price and Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-white/60">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-white/60 text-sm">({service.reviews})</span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                {/* Key Features */}
                {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.features.length > 3 && (
<<<<<<< HEAD
                      <div className=&quot;text-cyan-400 text-sm font-medium&quot;>
=======
                      <div className="text-cyan-400 text-sm font-medium">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
<<<<<<< HEAD

                {/* Market Info */}
                <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                  <div>
                    <span className=&quot;text-white/60&quot;>Market Size:</span>
                    <div className=&quot;text-white font-medium&quot;>{service.marketSize}</div>
                  </div>
                  <div>
                    <span className=&quot;text-white/60&quot;>Growth Rate:</span>
                    <div className=&quot;text-white font-medium&quot;>{service.growthRate}</div>
                  </div>
                </div>

                {/* ROI and Setup */}
                <div className=&quot;mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20&quot;>
                  <div className=&quot;text-cyan-400 font-semibold mb-2&quot;>🚀 Expected ROI:</div>
                  <p className=&quot;text-white/80 text-sm&quot;>{service.roi}</p>
                  <div className=&quot;mt-2 text-white/60 text-sm&quot;>
                    Setup Time: {service.setupTime} | Trial: {service.trialDays} days
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;flex flex-col sm:flex-row gap-3&quot;>
                  <a
                    href={service.link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
                  >
                    Learn More
                    <ExternalLink className=&quot;w-4 h-4&quot; />
                  </Link>
                  <button className=&quot;px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/5&quot;>
                    Contact Sales
                  </button>
                </div>

                {/* Contact Info */}
                <div className=&quot;mt-6 pt-4 border-t border-white/10 text-center&quot;>
                  <div className=&quot;text-white/60 text-sm mb-2&quot;>Ready to get started?</div>
                  <div className=&quot;flex items-center justify-center gap-4 text-sm&quot;>
                    <a href={`tel:${service.contactInfo.mobile}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      📞 {service.contactInfo.mobile}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      ✉️ {service.contactInfo.email}
                    </Link>
=======
                {/* Market Info */}
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
                {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-white/60">Market Size:</span>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div>
                    <span className="text-white/60">Growth Rate:</span>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>
                {/* ROI and Setup */}
                {/* ROI and Setup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm">{service.roi}</p>
                  <div className="mt-2 text-white/60 text-sm">
                    Setup Time: {service.setupTime} | Trial: {service.trialDays} days
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link}
                {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  </Link>
                  <button className="px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/5">
                    Contact Sales
                  </button>
                </div>
                {/* Contact Info */}
                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Ready to get started?</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      📞 {service.contactInfo.mobile}
                    </a>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email}
                    </a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/70 mb-6&quot;>Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm(''),
                  setSelectedCategory('all')
                }}
                className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"

=======
          {/* No Results */}
                      📞 {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')

                  setSelectedCategory('all')
                }}
                }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">

              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Our team of experts is ready to help you implement these cutting-edge solutions 
              and drive innovation in your organization.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Schedule Consultation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Call Us Now
              </Link>
=======
      {/* CTA Section */}
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
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
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions
              Our team of experts is ready to help you implement these cutting-edge solutions 
              Our team of experts is ready to help you implement these cutting-edge solutions
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <EnhancedFooter />
    </div>
  );
};
  )
<<<<<<< HEAD

}
=======
          >;
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Our team of experts is ready to help you implement these cutting-edge solutions;
              and drive innovation in your organization.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2";
              >;
                Schedule Consultation;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10";
              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
