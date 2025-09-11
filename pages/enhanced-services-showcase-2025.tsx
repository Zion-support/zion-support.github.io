<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import Head from 'next / head';

import { motion, AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react',
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
import {
  Search
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Rocket
  Monitor
  Cpu
  Zap
  Database
  Cloud
  Lock
  Code
  Sparkles
  Target
  Award
  Lightbulb;} from 'lucide-react';
import {
  Search,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket,
  Monitor,
  Cpu,
  Zap,
  Database,
  Cloud,
  Lock,
  Code,
  Sparkles,
  Target,
  Award,;
  Lightbulb,;} from 'lucide-react';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount }
    {
      id: 'quantum'
      name: 'Quantum Computing'
      icon: '⚛️'
      count: quantumCount
    }
    {
      id: 'blockchain'
      name: 'Blockchain & Web3'
      icon: '⛓️'
      count: blockchainCount
    }
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount }
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount }
    {
      id: 'security'
      name: 'Cybersecurity'
      icon: '🔒'
      count: cybersecurityCount
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' }
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' }
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' }
    { id: 'premium', name: '$20K+/month', range: '$20K+' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name A-Z' }
    { id: 'price-low', name: 'Price Low to High' }
    { id: 'price-high', name: 'Price High to Low' }
    { id: 'rating', name: 'Rating' }
    { id: 'customers', name: 'Customer Count' },  ];
  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match |'0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    }
    let filtered = allServices.filter(service => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' && service.category.includes('AI')) |
        (selectedCategory === 'quantum' &&
          service.category.includes('Quantum')) |
        (selectedCategory === 'blockchain' &&
          service.category.includes('Blockchain')) |
        (selectedCategory === 'iot' && service.category.includes('IoT')) |
        (selectedCategory === 'space' && service.category.includes('Space')) |
        (selectedCategory === 'security' &&
          (service.category.includes('Security') |
            service.category.includes('Cybersecurity')));
      const matchesPrice =
        selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' &&
          parsePriceToNumber(service.price) < 2000) |
        (selectedPriceRange === 'medium' &&
          parsePriceToNumber(service.price) >= 2000 &&
          parsePriceToNumber(service.price) < 8000) |
        (selectedPriceRange === 'high' &&
          parsePriceToNumber(service.price) >= 8000 &&
          parsePriceToNumber(service.price) < 20000) |
        (selectedPriceRange === 'premium' &&
          parsePriceToNumber(service.price) >= 20000);
      return matchesSearch && matchesCategory && matchesPrice;    });
    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort(
          (a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Search,;
  Star,;
  Users,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Rocket,;
  Monitor,;
  Cpu,;
  Zap,;
  Database,;
  Cloud,;
  Lock,;
  Code,;
  Sparkles,;
  Target,;
  Award,;
  Lightbulb,;} from 'lucide-react';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Computing',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    {;
      id: 'blockchain',;
      name: 'Blockchain & Web3',;
      icon: '⛓️',;
      count: blockchainCount,;
    },;
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },;
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },;
    {;
      id: 'security',;
      name: 'Cybersecurity',;
      icon: '🔒',;
      count: cybersecurityCount,;
    },  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },;
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },;
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },;
    { id: 'premium', name: '$20K+/month', range: '$20K+' },  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customer Count' },  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter and sort services;
  const filteredServices = React && React.useMemo(() => {;
    const parsePriceToNumber = (price: string | number): number => {;
      if (typeof price === 'number') return price,;
      if (typeof price === 'string') {;
        const match = price && price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
<<<<<<< HEAD
<<<<<<< HEAD
        return isNaN(parsed) ? 0 : parsed
      }
      return 0
    };
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||

    let _filtered = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      
      const _matchesCategory = selectedCategory === 'all' || 

                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
(selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);
      return matchesSearch && matchesCategory && matchesPrice
    });
    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
    return filtered
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);
  const containerVariants = {
    hidden: { opacity: 0 }
  Search,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket,
  Monitor,
  Cpu,
  Zap,
  Database,
  Cloud,
  Lock,
  Code,
  Sparkles,
  Target,
  Award,
  Lightbulb,} from 'lucide-react';
import { innovative2025Services } from '../data / innovative - 2025 - services';
import { emergingTech2025Services } from '../data / emerging - tech - 2025 - services';
import EnhancedFuturisticBackground from '../components / ui / EnhancedFuturisticBackground';
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: ai_count },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: '⚛️',
      count: quantum_count,
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: '⛓️',
      count: blockchain_count,
    },
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iot_count },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: space_count },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: '🔒',
      count: cybersecurity_count,
    },  ];
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2K / month', range: 'Under $2K' },
    { id: 'medium', name: '$2K - $8K / month', range: '$2K - $8K' },
    { id: 'high', name: '$8K - $20K / month', range: '$8K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' },  ];
;
  const sort_options = [;
    { id: 'name', name: 'Name A - Z' },
    { id: 'price - low', name: 'Price Low to High' },
    { id: 'price - high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' },  ];
;
  // Filter and sort services;
  const filtered_services = React.useMemo (() => {
    const parsePriceToNumber = (price: string | number): number => {
      // Check condition
if (return price, ) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        const match = price.replace (/[^0 - 9.]/g, '');
        const parsed = parse_float (match || '0');
        return isNaN (parsed) ? 0 : parsed;
      }
      return 0;
    }
;
    let filtered = all_services.filter (service => {
      const matches_search =;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_term.toLowerCase ());
;
      const matches_category =;
        selected_category === 'all' ||;
        (selected_category === 'ai' && service.category.includes ('AI')) ||;
        (selected_category === 'quantum' &&;
          service.category.includes ('Quantum')) ||;
        (selected_category === 'blockchain' &&;
          service.category.includes ('Blockchain')) ||;
        (selected_category === 'iot' && service.category.includes ('IoT')) ||;
        (selected_category === 'space' && service.category.includes ('Space')) ||;
        (selected_category === 'security' &&;
          (service.category.includes ('Security') ||;
            service.category.includes ('Cybersecurity')));
;
      const matches_price =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parsePriceToNumber (service.price) < 2000) ||;
        (selectedPriceRange === 'medium' &&;
          parsePriceToNumber (service.price) >= 2000 &&;
          parsePriceToNumber (service.price) < 8000) ||;
        (selectedPriceRange === 'high' &&;
          parsePriceToNumber (service.price) >= 8000 &&;
          parsePriceToNumber (service.price) < 20000) ||;
        (selectedPriceRange === 'premium' &&;
          parsePriceToNumber (service.price) >= 20000);
;
      return matches_search && matches_category && matches_price;    });
;
    // Sort services;
    switch (sort_by) {
      case 'price - low':;
        filtered.sort (
          (a, b) => parsePriceToNumber (a.price) - parsePriceToNumber (b.price));
        break;
      case 'price - high':;
        filtered.sort (
          (a, b) => parsePriceToNumber (b.price) - parsePriceToNumber (a.price));        break;
      case 'rating':;
        filtered.sort ((a, b) => b.rating - a.rating);
        break;
      case 'customers':;
        filtered.sort ((a, b) => b.customers - a.customers);
        break;
      default:;
        filtered.sort ((a, b) => a.name.locale_compare (b.name));
    }
    return filtered;  }, [search_term, selected_category, selectedPriceRange, sort_by, all_services]);
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
    }
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    visible: {
      opacity: 1
      transition: {

    }
  };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD


  const containerVariants = {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }

import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Search, Star, Users, TrendingUp,;
  DollarSign, Clock, CheckCircle, ArrowRight,;
  Rocket, Monitor, Cpu,;
  Zap, Database, Cloud, Lock, Code,;
  Sparkles, Target, Award, Lightbulb;
} from 'lucide-react',;
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
export default function EnhancedServicesShowcase2025(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...innovative2025Services;
    ...emergingTech2025Services;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },;
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },;
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },;
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },;
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: cybersecurityCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },;
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },;
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },;
    { id: 'premium', name: '$20K+/month', range: '$20K+'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customer Count'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = React.useMemo(() => {;
    const parsePriceToNumber = (price: string | number): number => {;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return 0;
    };
    let filtered = allServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||;
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||;
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||;
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||;
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||;
                             (selectedCategory === 'space' && service.category.includes('Space')) ||;
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));
      const matchesPrice = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||;
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||;
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||;
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);
      return matchesSearch && matchesCategory && matchesPrice;
    });
    // Sort services;
    switch (sortBy) {;
      case 'price-low':;
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price)),;
        break,;
      case 'price-high':;
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price)),;
        break,;
      case 'rating':;
        filtered.sort((a, b) => b.rating - a.rating),;
        break,;
      case 'customers':;
        filtered.sort((a, b) => b.customers - a.customers),;
        break,;
      default:;
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]),;
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
<<<<<<< HEAD
=======
      y: 0,;
      transition: {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        duration: 0 && 0.5,;
      },;
    },;
  };
<<<<<<< HEAD
    >;
      <div className='min-h-screen'>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    >;
      <div className='min-h-screen'>;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        stagger_children: 0.1,
      },
    },  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
;
    >;
      <div className='min - h-screen'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Head>;
          <title>;
            2025 Innovative Services Showcase - Zion Tech Group | Revolutionary;
            AI, Quantum & Emerging Tech;
          </title>;
<<<<<<< HEAD
<<<<<<< HEAD
            href='https://ziontechgroup && ziontechgroup.com/enhanced-services-showcase-2025'
          />;
        </Head>;
  };
  return (
    <EnhancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum"
      particleCount={300}
      animationSpeed={1.5}
      y: 0;
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
    <EnhancedFuturisticBackground
      intensity="high"
      colorScheme="quantum"
      particleCount={300  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      animationSpeed={1.5  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    >
      <div className="min-h-screen">
        <Head>
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Tech</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2025" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
        </Head>
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <meta
            name='description'
            content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting-edge emerging technologies. Contact: +1 302 464 0950"
          />;
          <meta
            name='keywords'
            content='AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group'
          />;
          <meta name='author' content='Zion Tech Group' />;
          <meta
            property='og:title'
            content='2025 Innovative Services Showcase - Zion Tech Group'
          />;
          <meta
            property='og:description'
            content='Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950'
          />;
          <meta
            property='og:url'
            content='https://ziontechgroup && ziontechgroup.com/enhanced-services-showcase-2025'
          />;
          <meta property='og:type' content='website' />;
          <link
            rel='canonical'


            >
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              transition={{ duration: 0 && 0.8 }}>;
              <div className='flex items-center justify-center mb-6'>;
                <Sparkles className='w-12 h-12 text-cyan-400 mr-4' />;
                <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
                  2025 Innovation Showcase;
                </h1>;
                <Sparkles className='w-12 h-12 text-pink-400 ml-4' />;
              </div>;
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
                Revolutionary AI, Quantum Computing & Emerging Technology;
                Services;
              </p>;
              <p className='text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto'>;
                Discover our cutting-edge solutions that are transforming;
                industries and driving the future of technology;
              </p>;
<<<<<<< HEAD
=======



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2025 Innovation Showcase
                </h1>
                <Sparkles className="w-12 h-12 text-pink-400 ml-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, Quantum Computing & Emerging Technology Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and driving the future of technology
              </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Service Statistics */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
                <div className='text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl'>;
                  <div className='text-3xl font-bold text-cyan-400'>;
                    {allServices && allServices.length}
                  </div>;
                  <div className='text-gray-400'>Total Services</div>;
                </div>;
                <div className='text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl'>;
                  <div className='text-3xl font-bold text-purple-400'>;
                    {aiCount + quantumCount}
                  </div>;
                  <div className='text-gray-400'>AI & Quantum</div>;
                </div>;
                <div className='text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl'>;
                  <div className='text-3xl font-bold text-green-400'>;
                    {blockchainCount + iotCount}
                  </div>;
                  <div className='text-gray-400'>Emerging Tech</div>;
                </div>;
                <div className='text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl'>;
                  <div className='text-3xl font-bold text-pink-400'>;
                    {spaceCount + cybersecurityCount}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
                <div className='text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl'>
                  <div className='text-3xl font-bold text-cyan-400'>
                    {allServices.length}
                  </div>
                  <div className='text-gray-400'>Total Services</div>
              {/* Service Statistics */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
                  <div className="text-gray-400">Total Services</div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400">{aiCount + quantumCount}</div>
                  <div className="text-gray-400">AI & Quantum</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400">{blockchainCount + iotCount}</div>
                  <div className="text-gray-400">Emerging Tech</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400">{spaceCount + cybersecurityCount}</div>
                  <div className="text-gray-400">Specialized</div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD

                  </div>;
        {/* Search and Filters */}
        {/* Search and Filters */}
        <section className='relative z-10 py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-gray-800/40 border border-gray-700 rounded-2xl p-6'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {/* Search */}
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

=======


                  </div>;
                  <div className='text-gray-400'>Specialized</div>                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Search and Filters */}


                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
<<<<<<< HEAD
                </div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onChange={e => setSearchTerm(e && e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'                  />;
                </div>;
                {/* Category Filter */}
                <select
                  value={selectedCategory}
<<<<<<< HEAD
                  onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
</select>;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </div>
                {/* Category Filter */}
                <select
                  value={selectedCategory}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}

                </select>;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <meta;
            name='description';
            content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting - edge emerging technologies. Contact: +1 302 464 0950";
          />;
          <meta;
            name='keywords';
            content='AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group';
          />;
          <meta name='author' content='Zion Tech Group' />;
          <meta;
            property='og:title';
            content='2025 Innovative Services Showcase - Zion Tech Group';
          />;
          <meta;
            property='og:description';
            content='Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950';
          />;
          <meta;
            property='og:url';
            content='https://ziontechgroup.com / enhanced - services - showcase - 2025';
          />;
          <meta property='og:type' content='website' />;
          <link;
            rel='canonical';
            href='https://ziontechgroup.com / enhanced - services - showcase - 2025';
          />;
        </Head>;
        {/* Hero Section */}
        <section className='relative z - 10 pt - 20 pb - 16 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className='flex items - center justify - center mb - 6'>;
                <Sparkles className='w - 12 h - 12 text - cyan - 400 mr - 4' />;
                <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
                  2025 Innovation Showcase;
                </h1>;
                <Sparkles className='w - 12 h - 12 text - pink - 400 ml - 4' />;
              </div>;
              <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
                Revolutionary AI, Quantum Computing & Emerging Technology;
                Services;
              </p>;
              <p className='text - lg md:text - xl text - gray - 400 mb - 12 max - w-3xl mx - auto'>;
                Discover our cutting - edge solutions that are transforming;
                industries and driving the future of technology;
              </p>;
              {/* Service Statistics */}
              <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12'>;
                <div className='text - center p - 6 bg - gray - 800 / 40 border border - gray - 700 rounded - 2xl'>;
                  <div className='text - 3xl font - bold text - cyan - 400'>;
                    {all_services.length}
                  </div>;
                  <div className='text - gray - 400'>Total Services</div>;
                </div>;
                <div className='text - center p - 6 bg - gray - 800 / 40 border border - gray - 700 rounded - 2xl'>;
                  <div className='text - 3xl font - bold text - purple - 400'>;
                    {ai_count + quantum_count}
                  </div>;
                  <div className='text - gray - 400'>AI & Quantum</div>;
                </div>;
                <div className='text - center p - 6 bg - gray - 800 / 40 border border - gray - 700 rounded - 2xl'>;
                  <div className='text - 3xl font - bold text - green - 400'>;
                    {blockchain_count + iot_count}
                  </div>;
                  <div className='text - gray - 400'>Emerging Tech</div>;
                </div>;
                <div className='text - center p - 6 bg - gray - 800 / 40 border border - gray - 700 rounded - 2xl'>;
                  <div className='text - 3xl font - bold text - pink - 400'>;
                    {space_count + cybersecurity_count}
                  </div>;
                  <div className='text - gray - 400'>Specialized</div>                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Search and Filters */}
        <section className='relative z - 10 py - 8 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <div className='bg - gray - 800 / 40 border border - gray - 700 rounded - 2xl p - 6'>;
              <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
                {/* Search */}
                <div className='relative'>;
                  <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                  <input;
                    type='text';
                    placeholder='Search services...';
                    value={search_term}
                    on_change={e => setSearchTerm (e.target.value)}
                    className='w - full pl - 10 pr - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent'                  />;
                </div>;
                {/* Category Filter */}
                <select;
                  value={selected_category}
                  on_change={e => setSelectedCategory (e.target.value)}
                  className='px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                >;
                  {categories.map (category => (                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>))}
                </select>;
<<<<<<< HEAD
<<<<<<< HEAD
                  on_change={e => setSelectedPriceRange (e.target.value)}
                {/* Price Range Filter */}
                <select;
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
</select>;
                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
on_change={e => setSelectedPriceRange (e.target.value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                {/* Price Range Filter */}
                <select;
                  value={selectedPriceRange}


                  ))}

                </select>;


                {/* Sort Options */}
                <select
                  value={sortBy}


                  ))}
<<<<<<< HEAD

=======
                  on_change={e => setSelectedPriceRange (e.target.value)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className='px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                >;
                  {price_ranges.map (range => (                    <option key={range.id} value={range.id}>;
                      {range.name}
                    </option>))}
                </select>;
                {/* Sort Options */}
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                >;
                  {sort_options.map (option => (                    <option key={option.id} value={option.id}>;
                      {option.name}
                    </option>))}
<<<<<<< HEAD
                {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className='px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                >
                  {categories.map(category => (                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={e => setSelectedPriceRange(e.target.value)}
                  className='px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                >
                  {priceRanges.map(range => (                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                >
                  {sortOptions.map(option => (                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <select;
                  value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
<<<<<<< HEAD
                {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <select;
                  value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
                {/* Sort Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <select;
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                {/* Sort Options */}
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                >;
                  {sort_options.map (option => (                    <option key={option.id} value={option.id}>;
                      {option.name}
                    </option>))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </select>;
              </div>;
            </div>;
          </div>;
        </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <motion.div
              variants={containerVariants}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial="hidden"
              animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
<<<<<<< HEAD
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
                    layout className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                    key={service.id}
                    variants={itemVariants}
                    layout className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Popular</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    </h3>;
                    <p className='text - gray - 300 text - sm mb - 4 line - clamp - 2'>                      {service.description}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {/* Service Title and Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </p>;
                    {/* Price and Customer Count */}
                    <div className='flex items - center justify - between mb - 4'>;
                      <div className='text - 2xl font - bold text - cyan - 400'>;
                        {service.price}
                        <span className='text - gray - 400 text - lg'>;
                          {service.period}
<<<<<<< HEAD
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    </div>
                    {/* Service Title and Description */}
                    <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm mb-4 line-clamp-2'>                      {service.description}
                    </p>
                    {/* Price and Customer Count */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-2xl font-bold text-cyan-400'>
                        {service.price}
                        <span className='text-gray-400 text-lg'>
                          {service.period}
                        </span>
                      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {/* Service Title and Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                    </p>;
                    {/* Price and Customer Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
=======
=======

                    </p>;
                    {/* Price and Customer Count */}
                    <div className='flex items - center justify - between mb - 4'>;
                      <div className='text - 2xl font - bold text - cyan - 400'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                        {service.price}
                        <span className='text - gray - 400 text - lg'>;
                          {service.period}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-gray-400 text-lg">{service.period}</span>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers}</span>
<<<<<<< HEAD
<<<<<<< HEAD
                      </div>
                    </div>

                    {/* Key Features */}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </div>
                    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Key Features */}
                    <div className='mb-6'>
                      <div className='text-sm text-gray-400 mb-2'>
                        Key Features:
                      </div>
                      <ul className='space-y-1'>
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li
                            key={index}
                            className='flex items-center text-sm text-gray-300'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />
                            <span className='line-clamp-1'>{feature}</span>                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Market Position */}
                    <div className='mb-6 p-3 bg-gray-700/40 rounded-lg'>
                      <div className='text-xs text-gray-400 mb-1'>
                        Market Position
                      </div>
                      <div className='text-sm text-gray-300 line-clamp-2'>                        {service.marketPosition}
                      </div>
                    </div>
                    {/* ROI and Setup Time */}
                    <div className='flex items-center justify-between mb-6 text-sm'>
                      <div className='flex items-center space-x-1 text-green-400'>
                        <TrendingUp className='w-4 h-4' />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </div>
                    </div>

                    </div>;
                    {/* Service Title and Description */}
                    <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm mb-4 line-clamp-2'>                      {service && service.description}
                    </p>;
                    {/* Price and Customer Count */}
                    <div className='flex items-center justify-between mb-4'>;
                      <div className='text-2xl font-bold text-cyan-400'>;
                        {service && service.price}
                        <span className='text-gray-400 text-lg'>;
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='flex items-center space-x-2 text-sm text-gray-400'>;
                        <Users className='w-4 h-4' />                        <span>{service && service.customers}</span>;
                      </div>;
                    </div>;


                    {/* Key Features */}

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Key Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
<<<<<<< HEAD
<<<<<<< HEAD
                      </div>
                    </div>
                    {/* ROI and Setup Time */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </ul>;
                    </div>;
                    {/* Market Position */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {service.marketPosition  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </div>;
                    {/* ROI and Setup Time */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        ))}

                    <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {service.marketPosition}

                      </div>
                    </div>
                    {/* ROI and Setup Time */}

                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <span>Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
<<<<<<< HEAD
<<<<<<< HEAD
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={service.link} 
                        target="_blank" 
                        rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a 
                        href="/contact" className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500">
                        Contact Us
                      </Link>
                    </div>
                        href='/contact'


                    {/* Contact Information */}
                    {/* Action Buttons */}
                    <div className='flex gap-3'>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </div>
                    </div>

                      </ul>;
                    </div>;
                    {/* Market Position */}
                    <div className='mb-6 p-3 bg-gray-700/40 rounded-lg'>;
                      <div className='text-xs text-gray-400 mb-1'>;
                        Market Position;
                      </div>;
                      <div className='text-sm text-gray-300 line-clamp-2'>                        {service && service.marketPosition}
                      </div>;
                    </div>;
                    {/* ROI and Setup Time */}
                    <div className='flex items-center justify-between mb-6 text-sm'>;
                      <div className='flex items-center space-x-1 text-green-400'>;
                        <TrendingUp className='w-4 h-4' />;
                        <span>Average ROI</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-blue-400'>;
                        <Clock className='w-4 h-4' />                        <span>{service && service.setupTime}</span>;
                      </div>;
                    </div>;


                    {/* Action Buttons */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className='flex gap-3'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex gap-3">
<<<<<<< HEAD
<<<<<<< HEAD
                      <a
                        href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        target="_blank"
                        rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <a
                        href="/contact" className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500">
                        Contact Us
                      </Link>
                    </div>
                    {/* Contact Information */}
                    <div className='mt-4 pt-4 border-t border-gray-700'>
                      <div className='text-xs text-gray-400 mb-2'>
                        Contact Information:
                      </div>
                      <div className='text-xs text-gray-300 space-y-1'>                        <div>📱 {service.contactInfo.mobile}</div>
                    {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>📱 {service.contactInfo.mobile}</div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      <a
                        href={service && service.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center'>;
                        Learn More;
                        <ArrowRight className='w-4 h-4 ml-2' />;
                      </a>;
                      <a
                        href='/contact'


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
                      </div>
                    </div>


                        className='flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500'>                        Contact Us;
                      </a>;
                    </div>;



<<<<<<< HEAD
className='flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500'>                        Contact Us;
                      </a>;
                    </div>;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {/* Contact Information */}
                    <div className='mt-4 pt-4 border-t border-gray-700'>;
                      <div className='text-xs text-gray-400 mb-2'>;
                        Contact Information:;
                      </div>;
                      <div className='text-xs text-gray-300 space-y-1'>                        <div>📱 {service && service.contactInfo.mobile}</div>;
                        <div>✉️ {service && service.contactInfo.email}</div>;
                        <div>🌐 {service && service.contactInfo.website}</div>;
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
<<<<<<< HEAD
              </AnimatePresence>;
            </motion && motion.div>;
=======
=======
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
                      </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    </div>
                  </motion.div>
                ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </AnimatePresence>;
            </motion && motion.div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* No Results Message */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
                className='text-center py-16'>;
                <div className='text-6xl mb-4'>🔍</div>;
                <h3 className='text-2xl font-semibold text-white mb-2'>;
                  No services found;
                </h3>;
                <p className='text-gray-400'>;
                  Try adjusting your search criteria or filters;
                </p>              </motion && motion.div>;

<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </span>;
                      </div>;
                      <div className='flex items - center space - x-2 text - sm text - gray - 400'>;
                        <Users className='w - 4 h - 4' />                        <span>{service.customers}</span>;
                      </div>;
                    </div>;
                    {/* Key Features */}
                    <div className='mb - 6'>;
                      <div className='text - sm text - gray - 400 mb - 2'>;
                        Key Features:;
                      </div>;
                      <ul className='space - y-1'>;
                        {service.features.slice (0, 3).map ((feature, index) => (
                          <li;
                            key={index}
                            className='flex items - center text - sm text - gray - 300';
                          >;
                            <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />;
                            <span className='line - clamp - 1'>{feature}</span>                          </li>))}
                      </ul>;
                    </div>;
                    {/* Market Position */}
                    <div className='mb - 6 p - 3 bg - gray - 700 / 40 rounded - lg'>;
                      <div className='text - xs text - gray - 400 mb - 1'>;
                        Market Position;
                      </div>;
                      <div className='text - sm text - gray - 300 line - clamp - 2'>                        {service.market_position}
                      </div>;
                    </div>;
                    {/* ROI and Setup Time */}
                    <div className='flex items - center justify - between mb - 6 text - sm'>;
                      <div className='flex items - center space - x-1 text - green - 400'>;
                        <TrendingUp className='w - 4 h - 4' />;
                        <span > Average ROI</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - blue - 400'>;
                        <Clock className='w - 4 h - 4' />                        <span>{service.setup_time}</span>;
                      </div>;
                    </div>;
                    {/* Action Buttons */}
                    <div className='flex gap - 3'>;
                      <a;
                        href={service.link}
                        target='_blank';
                        rel='noopener noreferrer';
                        className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - xl text - center text - sm font - medium hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 flex items - center justify - center';
                      >;
                        Learn More;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />;
                      </a>;
                      <a;
                        href='/contact';
                        className='flex - 1 bg - gray - 700 / 60 text - white px - 4 py - 2 rounded - xl text - center text - sm font - medium hover:bg - gray - 600 / 60 transition - all duration - 300 border border - gray - 600 hover:border - gray - 500';
                      >                        Contact Us;
                      </a>;
                    </div>;
                    {/* Contact Information */}
                    <div className='mt - 4 pt - 4 border - t border - gray - 700'>;
                      <div className='text - xs text - gray - 400 mb - 2'>;
                        Contact Information:;
                      </div>;
                      <div className='text - xs text - gray - 300 space - y-1'>                        <div>📱 {service.contact_info.mobile}</div>;
                        <div>✉️ {service.contact_info.email}</div>;
                        <div>🌐 {service.contact_info.website}</div>;
                      </div>;
                    </div>;
                  </motion.div>))}
                  </motion.div>

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              </AnimatePresence>;
            </motion.div>;
            {/* No Results Message */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}

<<<<<<< HEAD
        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

          </div>;
        </section>;
        {/* Call to Action */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
=======
          </div>;
        </section>;


        {/* Call to Action */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='text-center py-16'
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-semibold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-gray-400'>
                  Try adjusting your search criteria or filters
                </p>              </motion.div>
            )}
          </div>
        </section>
        {/* Call to Action */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
              </AnimatePresence>;
            </motion.div>;
            {/* No Results Message */  } catch (error) {
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
                animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Call to Action */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              </AnimatePresence>;
            </motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            {/* No Results Message */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}

          </div>;
        </section>;


        {/* Call to Action */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
=======

        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Contact Information */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='flex items-center justify-center space-x-3'>
                  <div className='w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center'>
                    <Target className='w-6 h-6 text-cyan-400' />
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                  <span className="text-lg text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
<<<<<<< HEAD
              </div>
<<<<<<< HEAD
              {/* Action Buttons */}
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a 
                  href="/contact" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline">
                  <span className="relative">Start Your Transformation</span>
                  <Rocket className="ml-2 w-6 h-6" />
                </a>
                <a 
                  href="/pricing" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline">
                  <span className="relative">View Pricing</span>
                  <DollarSign className="ml-2 w-6 h-6" />
                </a>
                <a 
                  href=&quot;/contact&quot; className=&quot;inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline&quot;>
                  <span className=&quot;relative&quot;>Start Your Transformation</span>
                  <Rocket className=&quot;ml-2 w-6 h-6&quot; />
                </Link>
                <a 
                  href=&quot;/pricing&quot; className=&quot;inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline&quot;>
                  <span className=&quot;relative&quot;>View Pricing</span>
                  <DollarSign className=&quot;ml-2 w-6 h-6&quot; />
                </Link>

              {/* Action Buttons */}
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
=======

              transition={{ duration: 0 && 0.8 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join thousands of companies achieving breakthrough results with;
                our revolutionary services;
              </p>;
              {/* Contact Information */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
                <div className='flex items-center justify-center space-x-3'>;
                  <div className='w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center'>;
                    <Target className='w-6 h-6 text-cyan-400' />;
                  </div>;
                  <span className='text-lg text-white'>+1 302 464 0950</span>;
                </div>;
                <div className='flex items-center justify-center space-x-3'>;
                  <div className='w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center'>;
                    <Award className='w-6 h-6 text-purple-400' />;
                  </div>;
                  <span className='text-lg text-white'>;
                    kleber@ziontechgroup && ziontechgroup.com;
                  </span>;
                </div>;
                <div className='flex items-center justify-center space-x-3'>;
                  <div className='w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center'>;
                    <Lightbulb className='w-6 h-6 text-green-400' />;
                  </div>;
                  <span className='text-lg text-white'>;
                    364 E Main St STE 1008 Middletown DE 19709;
                  </span>                </div>;
              </div>;


              {/* Action Buttons */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </div>
              {/* Action Buttons */}
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
                <a
                  href="/contact" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline">
                  <span className="relative">Start Your Transformation</span>
                  <Rocket className="ml-2 w-6 h-6" />
                </Link>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <a
                  href='/contact'
                  className='inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline'>;
                  <span className='relative'>Start Your Transformation</span>;
                  <Rocket className='ml-2 w-6 h-6' />;
                </a>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a
                  href="/pricing" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline">
                  <span className="relative">View Pricing</span>
                  <DollarSign className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
<<<<<<< HEAD
                  href='/pricing'


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <a
                  href='/contact'
                  className='inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline'>;
                  <span className='relative'>Start Your Transformation</span>;
                  <Rocket className='ml-2 w-6 h-6' />;
                </a>;
                <a
                  href='/pricing'


=======
);
  )
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
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
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of companies achieving breakthrough results with our revolutionary services;
              </p>;
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">;
                    <Target className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <span className="text-lg text-white">+1 302 464 0950</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">;
                    <Award className="w-6 h-6 text-purple-400" />;
                  </div>;
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">;
                    <Lightbulb className="w-6 h-6 text-green-400" />;
                  </div>;
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>;
                </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </EnhancedFuturisticBackground>;
  );


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                animate={{ opacity: 1 }}
                className='text - center py - 16';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - semibold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400'>;
                  Try adjusting your search criteria or filters;
                </p>              </motion.div>)}
          </div>;
        </section>;
        {/* Call to Action */}
        <section className='relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join thousands of companies achieving breakthrough results with;
                our revolutionary services;
              </p>;
              {/* Contact Information */}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='flex items - center justify - center space - x-3'>;
                  <div className='w - 12 h - 12 bg - cyan - 500 / 20 rounded - full flex items - center justify - center'>;
                    <Target className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <span className='text - lg text - white'>+1 302 464 0950</span>;
                </div>;
                <div className='flex items - center justify - center space - x-3'>;
                  <div className='w - 12 h - 12 bg - purple - 500 / 20 rounded - full flex items - center justify - center'>;
                    <Award className='w - 6 h - 6 text - purple - 400' />;
                  </div>;
                  <span className='text - lg text - white'>;
                    kleber@ziontechgroup.com;
                  </span>;
                </div>;
                <div className='flex items - center justify - center space - x-3'>;
                  <div className='w - 12 h - 12 bg - green - 500 / 20 rounded - full flex items - center justify - center'>;
                    <Lightbulb className='w - 6 h - 6 text - green - 400' />;
                  </div>;
                  <span className='text - lg text - white'>;
                    364 E Main St STE 1008 Middletown DE 19709;
                  </span>                </div>;
              </div>;
              {/* Action Buttons */}
              <div className='flex flex - col sm: flex - row gap - 4 justify - center'>;
                <a;
                  href='/contact';
                  className='inline - flex items - center justify - center font - semibold transition - all duration - 300 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - black disabled:opacity - 50 disabled:cursor - not - allowed relative overflow - hidden group rounded - xl transform hover:scale - 105 active:scale - 95 px - 6 py - 3 text - lg bg - gradient - to - r from - blue - 600 via - blue - 500 to - blue - 600 hover:from - blue - 500 hover:via - blue - 400 hover:to - blue - 500 text - white shadow - lg hover:shadow - xl border border - blue - 500 / 20 no - underline';
                >;
                  <span className='relative'>Start Your Transformation</span>;
                  <Rocket className='ml - 2 w - 6 h - 6' />;
                </a>;
                <a;
                  href='/pricing';
                  className='inline - flex items - center justify - center font - semibold transition - all duration - 300 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - offset - black disabled:opacity - 50 disabled:cursor - not - allowed relative overflow - hidden group rounded - xl transform hover:scale - 105 active:scale - 95 px - 6 py - 3 text - lg bg - gradient - to - r from - gray - 700 via - gray - 600 to - gray - 700 hover:from - gray - 600 hover:via - gray - 500 hover:to - gray - 600 text - white shadow - lg hover:shadow - xl border border - gray - 500 / 20 no - underline';
                >;
                  <span className='relative'>View Pricing</span>;
                  <DollarSign className='ml - 2 w - 6 h - 6' />                </a>;
<<<<<<< HEAD
);
  )
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
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
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of companies achieving breakthrough results with our revolutionary services;
              </p>;
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">;
                    <Target className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <span className="text-lg text-white">+1 302 464 0950</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">;
                    <Award className="w-6 h-6 text-purple-400" />;
                  </div>;
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3">;
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">;
                    <Lightbulb className="w-6 h-6 text-green-400" />;
                  </div>;
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>;
                </div>;
              </div>;
              {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a;
                  href="/contact" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline">;
                  <span className="relative">Start Your Transformation</span>;
                  <Rocket className="ml-2 w-6 h-6" />;
                </a>;
                <a;
                  href="/pricing" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline">;
                  <span className="relative">View Pricing</span>;
                  <DollarSign className="ml-2 w-6 h-6" />;
                </a>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </EnhancedFuturisticBackground>;
  );
=======
<<<<<<< HEAD
    </EnhancedFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </EnhancedFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
