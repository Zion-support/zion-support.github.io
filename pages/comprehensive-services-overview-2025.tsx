

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon
} from 'lucide-react'
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',;
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',;

<<<<<<< HEAD
export default function ComprehensiveServicesOverviewPage() {

<<<<<<< HEAD
  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function ComprehensiveServicesOverviewPage() {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
<<<<<<< HEAD
<<<<<<< HEAD
];
=======
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',;
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',;
export default function ComprehensiveServicesOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity')
  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices]
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length }
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length }
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length }
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length }
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length }
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length }
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length }
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length }
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length }
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length }
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length }
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length }
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length }
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length }
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length }
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ]
  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
<<<<<<< HEAD
<<<<<<< HEAD



import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,;
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,;
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon;
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
export default function ComprehensiveServicesOverviewPage(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  // Combine all services;
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },;
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },;
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },;
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },;
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },;
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },;
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },;
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },;
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },;
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },;
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },;
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },;
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },;
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return b.popular ? 1 : -1,;
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


    }),
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  // Calculate market statistics
  const totalMarketSize = allServices.reduce((sum, service) => {
    const marketSize = service.marketSize.match(/\$([\d.]+)B/)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        case 'popularity':
          return b.popular ? 1 : -1
        case 'price':


        default: return 0
      }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0)

  }, 0),

=======
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0)
  }, 0)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi.match(/(\d+)%/)
    return sum + (roi ? parseInt(roi[1]) : 0)

<<<<<<< HEAD
<<<<<<< HEAD
  }, 0) / allServices.length,
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0),

    return sum + (roi ? parseInt(roi[1]) : 0)
  }, 0) / allServices.length;
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0);
        case 'popularity':
          return b.popular ? 1 : -1,
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
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

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon || '🚀'
  },

        case 'popularity':
          return b.popular ? 1 : -1
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''))
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        default: return 0
      }
    })
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon |'🚀'
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, 0) / allServices.length;

  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0);

=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,;
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,;
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon;
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
export default function ComprehensiveServicesOverviewPage(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');
  // Combine all services;
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },;
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },;
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },;
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },;
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },;
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },;
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },;
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },;
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },;
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },;
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },;
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },;
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },;
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'popularity':;
          return b.popular ? 1 : -1,;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }),
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Calculate market statistics
  const totalMarketSize = allServices.reduce((sum, service) => {
    const marketSize = service.marketSize.match(/\$([\d.]+)B/)
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, 0)
  }, 0),
  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi.match(/(\d+)%/)
    return sum + (roi ? parseInt(roi[1]) : 0)
  }, 0) / allServices.length
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0)

  }, 0) / allServices.length,
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0),
<<<<<<< HEAD
=======

  }, 0),

  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi.match(/(\d+)%/)
    return sum + (roi ? parseInt(roi[1]) : 0)

  }, 0) / allServices.length,
  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <Head>
        <title>Comprehensive Services Overview 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive micro SAAS services overview for 2025. Revolutionary AI, quantum computing, cybersecurity, and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS services, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-overview-2025" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======
=======
=======
import React, { useState } from 'react',
import Head from 'next / head',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon;
} from 'lucide-react',
import { comprehensiveMicroSaasServices } from '../data / comprehensive - 2025 - micro - saas - expansion',
import { specializedEmergingTechServices } from '../data / specialized - emerging - tech - services - 2025',
export default /**
 * ComprehensiveServicesOverviewPage - Function description
 */
function ComprehensiveServicesOverviewPage() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [search_term, setSearchTerm] = useState (''),
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sort_by, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity'),
  // Combine all services;
  const all_services = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: all_services.filter (string => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: all_services.filter (string => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: all_services.filter (string => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: all_services.filter (string => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: all_services.filter (string => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: all_services.filter (string => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: all_services.filter (string => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: all_services.filter (string => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: all_services.filter (string => s.category === 'Autonomous Systems').length },
    { id: 'AR / VR & Metaverse', name: 'AR / VR', icon: '🥽', count: all_services.filter (string => s.category === 'AR / VR & Metaverse').length },
    { id: '5G / 6G Networks', name: '5G / 6G', icon: '📡', count: all_services.filter (string => s.category === '5G / 6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: all_services.filter (string => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: all_services.filter (string => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: all_services.filter (string => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q - Internet', icon: '🌍', count: all_services.filter (string => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: all_services.filter (string => s.category === 'Neuromorphic Computing').length }
  ],
  // Filter and sort services;
  const filtered_services = all_services;
    .filter (service => {
      const matches_category = selected_category === 'all' || service.category === selected_category,
      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()),
      return matches_category && matches_search;
    });
    .sort ((a, b) => {
      switch (sort_by) {
        case 'popularity':;
          return b.popular ? 1 : -1,
        case 'price':;
          return parse_float (a.price.replace ('$', '').replace (, '')) - parse_float (b.price.replace ('$', '').replace (, '')),
        case 'rating':;
          return b.rating - a.rating,
        case 'newest':;
          return new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time (),
        default: return 0;
      }
    }),
  const getCategoryIcon = (category: string) =>: any {
    const category_data = categories.find (cat => cat.id === category),
    return category_data?.icon || '🚀';
  },
  // Calculate market statistics;
  const totalMarketSize = all_services.reduce ((sum, service) => {
    const market_size = service.market_size.match (/\$([\d.]+)B/),
    return sum + (market_size ? parse_float (market_size[1]) : 0);
  }, 0),
  const averageROI = all_services.reduce ((sum, service) => {
    const roi = service.roi.match (/(\d+)%/),
    return sum + (roi ? parse_int (roi[1]) : 0);
  }, 0) / all_services.length,
  const total_customers = all_services.reduce ((sum, service) => sum + service.customers, 0),
  return (
    <>;
      <Head>;
        <title > Comprehensive Services Overview 2025 - Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive micro SAAS services overview for 2025. Revolutionary AI, quantum computing, cybersecurity, and emerging technology solutions." />;
        <meta name="keywords" content="micro SAAS services, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - services - overview - 2025" />;
      </Head>;
      <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950">;
        {/* Hero Section */}
        <section className="py - 20 px - 6">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}


              {/* Market Statistics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                  <div className="text-white/60">Services Available</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">${totalMarketSize.toFixed(1)}B+</div>
                  <div className="text-white/60">Total Market Size</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">{totalCustomers.toLocaleString()}+</div>
                  <div className="text-white/60">Total Customers</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-orange-400">{averageROI.toFixed(0)}%+</div>
                  <div className="text-white/60">Average ROI</div>
                </div>
              </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              {/* Key Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">First-to-Market Solutions</h3>
                  <p className="text-white/70 text-sm">Revolutionary services that give you competitive advantages in emerging markets</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Optimization</h3>
                  <p className="text-white/70 text-sm">Advanced AI algorithms that continuously optimize and improve your operations</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/70 text-sm">Military-grade security with quantum-resistant encryption and AI threat detection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

            >;
              <h1 className="text - 5xl md:text - 6xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
                Revolutionary Micro SAAS Services 2025;
              </h1>;
              <p className="text - xl text - white / 70 max - w-3xl mx - auto mb - 8">;
                Discover our cutting - edge micro SAAS solutions that are transforming industries and driving the future of technology with AI, quantum computing, and emerging technologies;
              </p>;
              {/* Market Statistics */}
              <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 12">;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - blue - 400">{all_services.length}+</div>;
                  <div className="text - white / 60">Services Available</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - green - 400">${totalMarketSize.to_fixed (1)}B+</div>;
                  <div className="text - white / 60">Total Market Size</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - purple - 400">{total_customers.toLocaleString ()}+</div>;
                  <div className="text - white / 60">Total Customers</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - orange - 400">{averageROI.to_fixed (0)}%+</div>;
                  <div className="text - white / 60">Average ROI</div>;
                </div>;
              </div>;
              {/* Key Benefits */}
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-5xl mx - auto">;
                <div className="bg - gradient - to - br from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 2xl p - 6 border border - blue - 500 / 30">;
                  <div className="text - 4xl mb - 4">🚀</div>;
                  <h3 className="text - xl font - bold text - white mb - 2">First - to - Market Solutions</h3>;
                  <p className="text - white / 70 text - sm">Revolutionary services that give you competitive advantages in emerging markets</p>;
                </div>;
                <div className="bg - gradient - to - br from - green - 600 / 20 to - emerald - 600 / 20 rounded - 2xl p - 6 border border - green - 500 / 30">;
                  <div className="text - 4xl mb - 4">⚡</div>;
                  <h3 className="text - xl font - bold text - white mb - 2">AI - Powered Optimization</h3>;
                  <p className="text - white / 70 text - sm">Advanced AI algorithms that continuously optimize and improve your operations</p>;
                </div>;
                <div className="bg - gradient - to - br from - purple - 600 / 20 to - pink - 600 / 20 rounded - 2xl p - 6 border border - purple - 500 / 30">;
                  <div className="text - 4xl mb - 4">🛡️</div>;
                  <h3 className="text - xl font - bold text - white mb - 2">Enterprise Security</h3>;
                  <p className="text - white / 70 text - sm">Military - grade security with quantum - resistant encryption and AI threat detection</p>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
        {/* Search and Filters */}
=======

        {/* Search and Filters */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="px - 6 mb - 16">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex - col lg:flex - row gap - 6 items - center justify - between";
            >;
              {/* Search */}
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."

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
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
              {/* Sort and View Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-center gap-4">
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


                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="relative flex - 1 max - w-md">;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - white / 40 w - 5 h - 5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={search_term}
                  on_change={(e) => setSearchTerm (e.target.value)}
                  className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - white / 40 focus:outline - none focus:border - blue - 400 focus:ring - 2 focus:ring - blue - 400 / 20";
                />;
              </div>;
              {/* Sort and View Controls */}
              <div className="flex items - center gap - 4">;
                <select;
                  value={sort_by}
                  on_change={(e) => setSortBy (e.target.value as any)}
                  className="bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white focus:outline - none focus:border - blue - 400";
                >;
                  <option value="popularity">Most Popular</option>;
                  <option value="price">Price: Low to High</option>;
                  <option value="rating">Highest Rated</option>;
                  <option value="newest">Newest First</option>;
                </select>;
                <div className="flex bg - white / 10 rounded - xl p - 1">;
                  <button;
                    on_click={() => setViewMode ('grid')}
                    className={`p - 2 rounded - lg transition - all ${
                      view_mode === 'grid' ? 'bg - blue - 600 text - white' : 'text - white / 60 hover:text - white';
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }`}
                  >;
                    <Grid className="w - 5 h - 5" />;
                  </button>;
                  <button;
                    on_click={() => setViewMode ('list')}
                    className={`p - 2 rounded - lg transition - all ${
                      view_mode === 'list' ? 'bg - blue - 600 text - white' : 'text - white / 60 hover:text - white';
                    }`}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  >;
                    <List className="w - 5 h - 5" />;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
        {/* Category Filter */}
=======

        {/* Category Filter */}


        {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-6 mb-16">
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="px - 6 mb - 16">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex - wrap justify - center gap - 3";
            >;
              {categories.map ((category) => (
                <button;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */}
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 px-6">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Revolutionary Micro SAAS Services 2025
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology with AI, quantum computing, and emerging technologies
              </p>
              {/* Market Statistics */}
              {/* Market Statistics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                  <div className="text-white/60">Services Available</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">${totalMarketSize.toFixed(1)}B+</div>
                  <div className="text-white/60">Total Market Size</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">{totalCustomers.toLocaleString()}+</div>
                  <div className="text-white/60">Total Customers</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-orange-400">{averageROI.toFixed(0)}%+</div>
                  <div className="text-white/60">Average ROI</div>
                </div>
              </div>
              {/* Key Benefits */}
              {/* Key Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">First-to-Market Solutions</h3>
                  <p className="text-white/70 text-sm">Revolutionary services that give you competitive advantages in emerging markets</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Optimization</h3>
                  <p className="text-white/70 text-sm">Advanced AI algorithms that continuously optimize and improve your operations</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/70 text-sm">Military-grade security with quantum-resistant encryption and AI threat detection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Search and Filters */}
<<<<<<< HEAD
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Search */}
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-6 mb-16">
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
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            >
              {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

        <section className="px - 6 mb - 16">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex - col lg:flex - row gap - 6 items - center justify - between";
            >;
              {/* Search */}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
              {/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
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
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </div>
              {/* Sort and View Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-center gap-4">
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`p-2 rounded-lg transition-all ${;
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white';
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
                    className={`p-2 rounded-lg transition-all ${;
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white';
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
            </motion.div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
        {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-6 mb-16">
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
<<<<<<< HEAD
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
=======
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }`}
                >;
                  <span>{category.icon}</span>;
                  {category.name}
<<<<<<< HEAD
<<<<<<< HEAD
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Services Display */}
=======


        {/* Services Display */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        {/* Services Display */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg';
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  <span>{category.icon}</span>;
                  {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </motion.div>;
          </div>;
        </section>;
        {/* Services Display */  } catch (error) {
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
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredServices.map((service, index) => (
                    <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

        <section className="px - 6 pb - 20">;
          <div className="max - w-7xl mx - auto">;
            {view_mode === 'grid' ? (
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                <AnimatePresence mode="wait">;
                  {filtered_services.map ((service, index) => (
                    <motion.div;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={service.id}
                      initial={{ opacity: 0, coordinate_y: 30 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                      exit={{ opacity: 0, y: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      {/* Popular Badge */}
                      {service.popular && (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
                    >;
                      {/* Popular Badge */}
                      {service.popular && (


                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                      {/* Service Content */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-white/60 text-sm">{service.period}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/70 text-sm mb-4">{service.tagline}</p>

<<<<<<< HEAD
                        {/* Features */}
=======
                        <div className="absolute top - 4 right - 4 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1 z - 10">;
                          <Star className="w - 3 h - 3" />;
                          Popular;
                        </div>)}
                      {/* Service Content */}
                      <div className="p - 6">;
                        <div className="flex items - start justify - between mb - 4">;
                          <div className="text - 4xl">{service.icon}</div>;
                          <div className="text - right">;
                            <div className="text - 2xl font - bold text - white">{service.price}</div>;
                            <div className="text - white / 60 text - sm">{service.period}</div>;
                          </div>;
                        </div>;
                        <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                        <p className="text - white / 70 text - sm mb - 4">{service.tagline}</p>;

                        {/* Features */}


                        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                              <Check className="w-4 h-4 text-green-400" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <div className="space - y-2 mb - 6">;
                          {service.features.slice (0, 3).map ((feature, idx) => (
                            <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                              <Check className="w - 4 h - 4 text - green - 400" />;
<<<<<<< HEAD
                              {feature}
=======

                              {feature}


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
                        </div>;
                        {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                            <div className="text-xs text-white/60">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                            <div className="text-xs text-white/60">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                            <div className="text-xs text-white/60">Trial</div>
                          </div>
                        </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            </div>))}
                        </div>;
                        {/* Stats */}
                        <div className="grid grid - cols - 3 gap - 4 mb - 6 text - center">;
                          <div>;
                            <div className="text - lg font - bold text - blue - 400">{service.rating}</div>;
                            <div className="text - xs text - white / 60">Rating</div>;
                          </div>;
                          <div>;
                            <div className="text - lg font - bold text - green - 400">{service.customers}+</div>;
                            <div className="text - xs text - white / 60">Customers</div>;
                          </div>;
                          <div>;
                            <div className="text - lg font - bold text - purple - 400">{service.trial_days}d</div>;
                            <div className="text - xs text - white / 60">Trial</div>;
                          </div>;
                        </div>;

<<<<<<< HEAD
                        </Link>


                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {filteredServices.map((service, index) => (
                    <motion.div

                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                      exit={{ opacity: 0, y: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      {/* Popular Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      {service.popular && (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
                          <Star className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                      {/* Service Content */}
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                      {/* Service Content */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-white/60 text-sm">{service.period}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/70 text-sm mb-4">{service.tagline}</p>
                        {/* Features */}
                        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                              <Check className="w-4 h-4 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        {/* Stats */}
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
                        </div>;
                        {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                            <div className="text-xs text-white/60">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                            <div className="text-xs text-white/60">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                            <div className="text-xs text-white/60">Trial</div>
                          </div>
                        </div>
                        {/* CTA */}
                        <a;
                          href={service.link}
<<<<<<< HEAD
=======
                        {/* CTA */}
                        <a;
                          href={service.link}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {/* CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <a;
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
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4" />
<<<<<<< HEAD
<<<<<<< HEAD
                        </a>
                        </Link>
                      </div>
                    </motion.div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


                        </Link>
=======
                        </a>
                        </Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      </div>
                    </motion.div>
                  ))}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </AnimatePresence>
              </div>
            ) : (
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {filteredServices.map((service, index) => (
                    <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

                          target="_blank";
                          rel="noopener noreferrer";
                          className="w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 4 rounded - xl font - medium text - center block hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                        >;
                          Learn More;
                          <ExternalLink className="w - 4 h - 4" />;
                        </a>;
                      </div>;
                    </motion.div>))}
                </AnimatePresence>;
              </div>) : (
              <div className="space - y-6">;
                <AnimatePresence mode="wait">;
                  {filtered_services.map ((service, index) => (
                    <motion.div;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={service.id}
                      initial={{ opacity: 0, coordinate_x: -30 }}
                      animate={{ opacity: 1, coordinate_x: 0 }}
                      exit={{ opacity: 0, coordinate_x: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======


                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      initial={{ opacity: 0, x: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      exit={{ opacity: 0, x: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Icon and Basic Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <div className="flex-shrink-0">
                          <div className="text-6xl mb-4">{service.icon}</div>
                          {service.popular && (
=======
                      className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 p - 6";
                    >;
                      <div className="flex flex - col lg:flex - row gap - 6">;
                        {/* Left Side - Icon and Basic Info */}
                        <div className="flex - shrink - 0">;
                          <div className="text - 6xl mb - 4">{service.icon}</div>;
                          {service.popular && (


                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                        {/* Center - Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                              <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                              <p className="text-white/60 text-sm">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white">{service.price}</div>
                              <div className="text-white/60">{service.period}</div>
                            </div>
                          </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                          {/* Features Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>


                            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                          {/* Stats Row */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                          <div className="flex items-center gap-6 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{service.rating} ({service.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-400" />
                              <span>{service.customers}+ customers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-green-400" />
                              <span>{service.setupTime} setup</span>
                            </div>
                          </div>
                        </div>


                        {/* Right Side - CTA and Category */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                        <div className="flex-shrink-0 flex flex-col items-end gap-4">
                          <div className="text-right">
                            <div className="text-sm text-white/60 mb-1">Category</div>
                            <div className="flex items-center gap-2 text-white">
                              <span>{getCategoryIcon(service.category)}</span>
                              <span className="text-sm">{service.category}</span>
                            </div>
                          </div>
                          <a


                            href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />

                            <div className="bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full text - center">;
                              Popular;
                            </div>)}
                        </div>;
                        {/* Center - Service Details */}
                        <div className="flex - 1">;
                          <div className="flex items - start justify - between mb - 4">;
                            <div>;
                              <h3 className="text - 2xl font - bold text - white mb - 2">{service.name}</h3>;
                              <p className="text - white / 70 text - lg mb - 3">{service.tagline}</p>;
                              <p className="text - white / 60 text - sm">{service.description}</p>;
                            </div>;
                            <div className="text - right">;
                              <div className="text - 3xl font - bold text - white">{service.price}</div>;
                              <div className="text - white / 60">{service.period}</div>;
                            </div>;
                          </div>;
                          {/* Features Grid */}
                          <div className="grid grid - cols - 2 gap - 2 mb - 4">;
                            {service.features.slice (0, 6).map ((feature, idx) => (
                              <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                                <Check className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                                <span className="truncate">{feature}</span>;
                              </div>))}
                          </div>;
                          {/* Stats Row */}
                          <div className="flex items - center gap - 6 text - sm text - white / 60">;
                            <div className="flex items - center gap - 2">;
                              <Star className="w - 4 h - 4 text - yellow - 400" />;
                              <span>{service.rating} ({service.reviews} reviews)</span>;
                            </div>;
                            <div className="flex items - center gap - 2">;
                              <Users className="w - 4 h - 4 text - blue - 400" />;
                              <span>{service.customers}+ customers</span>;
                            </div>;
                            <div className="flex items - center gap - 2">;
                              <Clock className="w - 4 h - 4 text - green - 400" />;
                              <span>{service.setup_time} setup</span>;
                            </div>;
                          </div>;
                        </div>;
                        {/* Right Side - CTA and Category */}
                        <div className="flex - shrink - 0 flex flex - col items - end gap - 4">;
                          <div className="text - right">;
                            <div className="text - sm text - white / 60 mb - 1">Category</div>;
                            <div className="flex items - center gap - 2 text - white">;
                              <span>{getCategoryIcon (service.category)}</span>;
                              <span className="text - sm">{service.category}</span>;
                            </div>;
                          </div>;
                          <a;
                            href={service.link}
                            target="_blank";
                            rel="noopener noreferrer";
                            className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 6 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center gap - 2";
                          >;
                            Learn More;
                            <ArrowRight className="w - 4 h - 4" />;
                          </a>;
                        </div>;
                      </div>;
                    </motion.div>))}
                </AnimatePresence>;
              </div>)}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Icon and Basic Info */}
                      key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      initial={{ opacity: 0, x: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      exit={{ opacity: 0, x: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 p-6"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side - Icon and Basic Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="flex-shrink-0">
                          <div className="text-6xl mb-4">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center">
                              Popular
                            </div>
                          )}
                        </div>
                        {/* Center - Service Details */}
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                        {/* Center - Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                              <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                              <p className="text-white/60 text-sm">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white">{service.price}</div>
                              <div className="text-white/60">{service.period}</div>
                            </div>
                          </div>
                          {/* Features Grid */}
                          {/* Features Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                          {/* Stats Row */}
                            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>;
                          {/* Stats Row */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div className="flex items-center gap-6 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{service.rating} ({service.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-400" />
                              <span>{service.customers}+ customers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-green-400" />
                              <span>{service.setupTime} setup</span>
                            </div>
                          </div>
                        </div>
                        {/* Right Side - CTA and Category */}
                        {/* Right Side - CTA and Category */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="flex-shrink-0 flex flex-col items-end gap-4">
                          <div className="text-right">
                            <div className="text-sm text-white/60 mb-1">Category</div>
                            <div className="flex items-center gap-2 text-white">
                              <span>{getCategoryIcon(service.category)}</span>
                              <span className="text-sm">{service.category}</span>
                            </div>
                          </div>
                          <a
                            href={service.link}
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
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* No Results */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </motion.div>
<<<<<<< HEAD

=======
                className="text - center py - 20";
              >;
                <div className="text - 6xl mb - 4">🔍</div>;
                <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
                <p className="text - white / 60">Try adjusting your search or filter criteria</p>;
              </motion.div>)}
          </div>;
        </section>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            )}
          </div>
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Contact CTA */}
        <section className="px - 6 pb - 20">;
          <div className="max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
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
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-5 h-5" />
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  </Link>


=======
                  </a>
                  </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <a
                    href="tel:+13024640950"
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>

<<<<<<< HEAD
}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text - center";
            >;
              <div className="bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 12 border border - blue - 500 / 30">;
                <h2 className="text - 3xl font - bold text - white mb - 4">;
                  Ready to Transform Your Business?;
                </h2>;
                <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.;
                </p>;
                <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 4 px - 8 rounded - xl font - medium hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                  >;
                    Contact Sales Team;
                    <ArrowRight className="w - 5 h - 5" />;
                  </a>;
                  <a;
                    href="tel:+13024640950";
                    className="bg - white / 10 text - white py - 4 px - 8 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2";
                  >;
                    Call +1 302 464 0950;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>);
<<<<<<< HEAD
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Contact Sales Team
                    <ArrowRight className=&quot;w-5 h-5&quot; />
                  </Link>
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                  >
                    Call +1 302 464 0950
                  </Link>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


                </AnimatePresence>;
              </div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
            {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {filteredServices.length === 0 && (;
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
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>
        {/* Contact CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
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
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};
  )
              className="text-center";
            >;
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">;
                <h2 className="text-3xl font-bold text-white mb-4">;
                  Ready to Transform Your Business?;
                </h2>;
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
                  Join thousands of companies already using our revolutionary micro SAAS services to drive innovation and growth.;
                </p>;
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2";
                  >;
                    Contact Sales Team;
                    <ArrowRight className="w-5 h-5" />;
                  </a>;
                  <a;
                    href="tel:+13024640950";
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2";
                  >;
                    Call +1 302 464 0950;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
