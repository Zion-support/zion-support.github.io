



import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon


} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion',;
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations',;
export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]),

  // Combine all services
  const allServices = [...advancedInnovativeServices, ...emergingTechInnovations],

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, icon: '🧠' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Security', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length, icon: '🛡️' },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: allServices.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length, icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length, icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: allServices.filter(s => s.category.includes('Neural') || s.category.includes('BCI')).length, icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length, icon: '🏥' },
    { id: 'Climate & Sustainability', name: 'Climate', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length, icon: '🌍' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi')).length, icon: '🔗' },
    { id: 'Metaverse & VR/AR', name: 'Metaverse', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('VR/AR')).length, icon: '🌐' }
  ],

  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory),
      const price = parseFloat(service.price.replace('$', '').replace(, '')),
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1],
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''))
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default: return 0
      }
    })
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }






import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2,;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon;
} from 'lucide-react',;


import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';

export default function AdvancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])
  // Combine all services
  const allServices = [...advancedInnovativeServices, ...emergingTechInnovations]
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' }
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') |s.category.includes('Machine Learning')).length, icon: '🧠' }
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' }
    { id: 'Cybersecurity', name: 'Security', count: allServices.filter(s => s.category.includes('Cybersecurity') |s.category.includes('Security')).length, icon: '🛡️' }
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: allServices.filter(s => s.category.includes('Edge') |s.category.includes('IoT')).length, icon: '🌐' }
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length, icon: '🚀' }
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: allServices.filter(s => s.category.includes('Neural') |s.category.includes('BCI')).length, icon: '🧠' }
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length, icon: '🏥' }
    { id: 'Climate & Sustainability', name: 'Climate', count: allServices.filter(s => s.category.includes('Climate') |s.category.includes('Sustainability')).length, icon: '🌍' }
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain') |s.category.includes('DeFi')).length, icon: '🔗' }
    { id: 'Metaverse & VR/AR', name: 'Metaverse', count: allServices.filter(s => s.category.includes('Metaverse') |s.category.includes('VR/AR')).length, icon: '🌐' }
  ]
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' |service.category.includes(selectedCategory)
      const price = parseFloat(service.price.replace('$', '').replace(, ''))
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''))
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        default: return 0
      }
    })
  const containerVariants = {

    hidden: { opacity: 0 }

import React, { useState, useEffect } from 'react',
import Head from 'next / head',
import { motion, AnimatePresence } from 'framer-motion',
import {
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2,
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
import { advancedInnovativeServices } from '../data / 2025 - advanced - innovative - services - expansion',
import { emergingTechInnovations } from '../data / 2025 - emerging - tech - innovations',
export default /**
 * AdvancedServicesShowcase2025 - Function description
 */
function AdvancedServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState (''),
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sort_by, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  const [price_range, setPriceRange] = useState<[number, number]>([0, 10000]),
  // Combine all services;
  const all_services = [...advancedInnovativeServices, ...emergingTechInnovations],
  const categories = [;
    { id: 'all', name: 'All Services', count: all_services.length, icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: all_services.filter (string => s.category.includes ('AI') || s.category.includes ('Machine Learning')).length, icon: '🧠' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: all_services.filter (string => s.category.includes ('Quantum')).length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Security', count: all_services.filter (string => s.category.includes ('Cybersecurity') || s.category.includes ('Security')).length, icon: '🛡️' },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: all_services.filter (string => s.category.includes ('Edge') || s.category.includes ('IoT')).length, icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: all_services.filter (string => s.category.includes ('Space')).length, icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: all_services.filter (string => s.category.includes ('Neural') || s.category.includes ('BCI')).length, icon: '🧠' },
    { id: 'Healthcare AI', name: 'Healthcare', count: all_services.filter (string => s.category.includes ('Healthcare')).length, icon: '🏥' },
    { id: 'Climate & Sustainability', name: 'Climate', count: all_services.filter (string => s.category.includes ('Climate') || s.category.includes ('Sustainability')).length, icon: '🌍' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: all_services.filter (string => s.category.includes ('Blockchain') || s.category.includes ('DeFi')).length, icon: '🔗' },
    { id: 'Metaverse & VR / AR', name: 'Metaverse', count: all_services.filter (string => s.category.includes ('Metaverse') || s.category.includes ('VR / AR')).length, icon: '🌐' }
  ],
  const filtered_services = all_services;
    .filter (service => {
      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()),
      const matches_category = selected_category === 'all' || service.category.includes (selected_category),
      const price = parse_float (service.price.replace ('$', '').replace (, '')),
      const matches_price = price >= price_range[0] && price <= price_range[1],
      return matches_search && matches_category && matches_price;
    });
    .sort ((a, b) => {
      switch (sort_by) {
        case 'popularity':;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        case 'price':;
          return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, '')),
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


  };


  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0

  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,

      transition: {

        duration: 0.5;
      }
    }

  const getCategoryIcon = (category: string) => {

    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon |''
  }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon |'🚀'
  }
export default function AdvancedServicesShowcase2025(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]),;
  // Combine all services;
  const allServices = [...advancedInnovativeServices, ...emergingTechInnovations],;
  const categories = [;
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },;
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, icon: '🧠' },;
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' },;
    { id: 'Cybersecurity', name: 'Security', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length, icon: '🛡️' },;
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: allServices.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length, icon: '🌐' },;
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length, icon: '🚀' },;
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: allServices.filter(s => s.category.includes('Neural') || s.category.includes('BCI')).length, icon: '🧠' },;
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length, icon: '🏥' },;
    { id: 'Climate & Sustainability', name: 'Climate', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length, icon: '🌍' },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi')).length, icon: '🔗' },;
    { id: 'Metaverse & VR/AR', name: 'Metaverse', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('VR/AR')).length, icon: '🌐'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const price = parseFloat(service.price.replace('$', '').replace(, '')),;
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),;
        case 'price':;
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),;
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
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),



    return categoryData?.icon || '🚀'
  },


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Advanced Services Showcase  Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="2025 Advanced Services Showcase  Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services." />
        <meta name="keywords" content="advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-advanced-services-showcase" />
      </Head>
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
              2025 Advanced Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">



              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions
              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions, 




      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}








            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-white/70">Advanced Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-white/70">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white/70">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}

      <section className="px - 6 pb - 12">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - white / 5 backdrop - blur - xl rounded - 2xl p - 6 border border - white / 10";
          >;
            {/* Search Bar */}

      {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
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
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
          >
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."

                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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










                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
            {/* Filters Row */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Category</label>
                <select
                  value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedCategory(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>

                  ))}
                </select>
              </div>
              {/* Sort By */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Sort By */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Sort By</label>
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










                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Price Range */}
              {/* Price Range */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"

                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) |0, priceRange[1]])}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}

                    value={priceRange[0]  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}













                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                  <input
                    type="number"
                    placeholder="Max"

                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) |10000])}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}

                    value={priceRange[1]  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}













                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>

              {/* View Mode Toggle */}
              {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










              <div className="flex items-end">
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'
                    }`}
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

      {/* Services Grid/List */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            className="mb-8"
          >
            <p className="text-white/70">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </motion.div>

          {/* Services Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }

          {/* Services Display */  } catch (error) {
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
            animate="visible"
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"

            }
              } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.div

                  key={service.id}


                    ? "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
                  variants={item_variants}
                  className={view_mode === 'grid';
                    ? "group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
                    : "group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 hover:shadow - 2xl";
                  }
                >;
                  {/* Service Header */}
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
                  className={viewMode === 'grid'
                    ? "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
                    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}









                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`text-3xl ${service.color.includes('from-') ? '' : 'bg-gradient-to-r ' + service.color}`}>
                          {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-white/70 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Popular
                        </span>

                      )}
                    </div>
                    {/* Description */}
                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>
                    {/* Price and Details */}
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>
                    {/* Price and Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-white/60">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white/70">{service.customers}+ customers</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-white/60">({service.reviews})</span>
                      </div>
                    </div>

                    {/* Features */}
                    {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        {service.features.length > 3 && (
                          <div className="text-white/60 text-sm">
                            +{service.features.length - 3} more features
                          </div>

                        )}
                      </div>
                    </div>
                    {/* Category and Technology */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {getCategoryIcon(service.category)} {service.category}
                        </span>
                      </div>
                      <div className="text-white/60 text-sm">
                        {service.technology.slice(0, 2).join()}
                        {service.technology.length > 2 && '...'}
                      </div>
                    </div>
                    {/* ROI and Benefits */}
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </div>;
                    {/* Category and Technology */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {getCategoryIcon(service.category)} {service.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>
                      </div>
                      <div className="text-white/60 text-sm">
                        {service.technology.slice(0, 2).join()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="text-white/60 text-sm">
                        {service.technology.slice(0, 2).join(', ')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        {service.technology.length > 2 && '...'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </div>;
                    {/* ROI and Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                        <h4 className="text-cyan-400 font-semibold mb-2">ROI & Benefits</h4>
                        <p className="text-white/80 text-sm mb-3">{service.roi}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">

                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.link}
                              {benefit  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </span>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                    {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex gap-3">
                      <a
                        href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
                      <a

                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                      >
                        <ZapIcon className="w-4 h-4" />
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>

              ))}
            </AnimatePresence>
          </motion.div>
          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </AnimatePresence>;
          </motion.div>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <motion.div;

              initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              className="text-center py-20"
            >
              <div className="text-6xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {

                  setSearchTerm('');
                  setSelectedCategory('all');

                  setPriceRange([0, 10000])

                }}
                }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>

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










      <section className="px-6 py-20">
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
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />

              </a>
              </Link>










              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>

  );
};
  )

          >;
            <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - cyan - 100 bg - clip - text text - transparent">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - white / 80 mb - 8 max - w-2xl mx - auto">;
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Schedule Consultation;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10 flex items - center justify - center gap - 2";
              >;
                Call +1 302 464 0950;
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





