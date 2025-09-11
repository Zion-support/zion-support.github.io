

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      transition: {
        duration: 0.5;
      }
    }
<<<<<<< HEAD
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className="relative py - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
                Quantum-Ready Technology
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Search and Filter Section */}
      <section className="py - 8 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
            {/* Search Bar */}
<<<<<<< HEAD
=======


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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
                </button>))}
            </div>;

<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

                  view_mode === 'grid';
                    ? 'p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
                    : 'p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300';

                }`}
              >;
                {/* Popular Badge */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

                  <div className="absolute top - 4 right - 4 px - 3 py - 1 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold rounded - full">;
                    POPULAR;
                  </div>)}

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Service Header */}
                <div className="flex items - start gap - 4 mb - 6">;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} p - 4 flex items - center justify - center text - 2xl`}>;
                    {service.icon}
<<<<<<< HEAD
=======


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.tagline}</p>
                  </div>
                </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Key Features */}
                <div className="mb - 6">;
                  <h4 className="text - white font - semibold mb - 3">Key Features:</h4>;
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 2 text - sm text - white / 70">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;
                        <span>{feature}</span>;
                      </div>))}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.features.length > 3 && (


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Action Buttons */}
                <div className="flex flex - col sm:flex - row gap - 3">;
                  <a;
                    href={service.link}
<<<<<<< HEAD
=======


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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  </Link>


                  <button className="px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/5">
                    Contact Sales
                  </button>
                </div>


                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Ready to get started?</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">


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


                }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* CTA Section */}
      <section className="py - 20 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />


              </Link>


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

}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
<<<<<<< HEAD
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
=======

  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
<<<<<<< HEAD
  }
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
<<<<<<< HEAD
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,
=======


              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,

=======
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions, 
              Discover our comprehensive collection of cutting-edge micro SAAS services, AI solutions,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {/* Search and Filter Section */}
<<<<<<< HEAD
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
=======
      <section className="py - 8 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
=======
            <div className="flex flex - wrap gap - 2">;
              {categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 300 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                >;
                  {category.name} ({category.count});
                </button>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
=======

                >;
                  {category.name} ({category.count});
                </button>))}
            </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* View Mode and Sort */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {/* Services Grid */}
<<<<<<< HEAD
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
=======
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

                  view_mode === 'grid';
                    ? 'p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
                    : 'p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300';

                }`}
              >;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
=======
                <p className="text - white / 80 leading - relaxed mb - 6">{service.description}</p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {service.features.length > 3 && (
                      <div className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm">{service.roi}</p>
                  <div className="mt-2 text-white/60 text-sm">
                    Setup Time: {service.setupTime} | Trial: {service.trialDays} days
                  </div>
                </div>
                {/* Action Buttons */}
<<<<<<< HEAD
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
=======
                <div className="flex flex - col sm:flex - row gap - 3">;
                  <a;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  </Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Ready to get started?</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      📞 {service.contactInfo.mobile}
                    </a>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
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
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
              Our team of experts is ready to help you implement these cutting-edge solutions
              Our team of experts is ready to help you implement these cutting-edge solutions 
              Our team of experts is ready to help you implement these cutting-edge solutions
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  );
};
  )
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
=======

=======
}

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
