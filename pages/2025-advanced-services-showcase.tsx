<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon
} from 'lucide-react'
import React, { useState, useEffect } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
=======
import {}
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, ;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon;
} from 'lucide-react',;'
import EnhancedNavigation from '../components/EnhancedNavigation',;'
import EnhancedFooter from '../components/EnhancedFooter',;'
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion',;'
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations',;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
export default function AdvancedServicesShowcase2025() { return null; }
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },'
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length, icon: '🧠' },'
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length, icon: '⚛️' },'
    { id: 'Cybersecurity', name: 'Security', count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length, icon: '🛡️' },'
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', count: allServices.filter(s => s.category.includes('Edge') || s.category.includes('IoT')).length, icon: '🌐' },'
    { id: 'Space Technology & Innovation', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length, icon: '🚀' },'
    { id: 'Neural Technology & BCI', name: 'Neural & BCI', count: allServices.filter(s => s.category.includes('Neural') || s.category.includes('BCI')).length, icon: '🧠' },'
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length, icon: '🏥' },'
    { id: 'Climate & Sustainability', name: 'Climate', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length, icon: '🌍' },'
    { id: 'Blockchain & DeFi', name: 'Blockchain', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('DeFi')).length, icon: '🔗' },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    { id: 'Metaverse & VR/AR', name: 'Metaverse', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('VR/AR')).length, icon: '🌐' }
<<<<<<< HEAD

=======
  ],

  const filteredServices = allServices;
    .filter(service => {}
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),'
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory),'
      const price = parseFloat(service.price.replace('$', '').replace(, '')),
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1],
<<<<<<< HEAD
      return matchesSearch && matchesCategory && matchesPrice
=======
import {
  ArrowRight,
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Target,
  Star,
  Sparkles,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  Globe,
  Code,
  Server,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  BarChart3,
  Cloud,
  Network,
  Search,
  Filter,
  Grid,
  List,
  Star as StarIcon,
  Eye,
  Heart,
  Share2,
  DollarSign,
  Calendar,
  Users as UsersIcon,
  Zap as ZapIcon,;
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';

  ];

  const filteredServices = allServices
    .filter(service => {
const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' ||
        service.category.includes(selectedCategory);
      const price = parseFloat(service.price.replace('$', '').replace(',', ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
      return matchesSearch && matchesCategory && matchesPrice;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    })
    .sort((a, b) => {}
      switch (sortBy) {'
        case 'popularity':
<<<<<<< HEAD
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        case 'price':
<<<<<<< HEAD
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),
=======
return (
            parseFloat(a.price.replace('$', '').replace(',', '')) -
            parseFloat(b.price.replace('$', '').replace(',', ''))
          );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),'
        case 'price':'
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        case 'rating':
          return b.rating - a.rating,'
        case 'newest':
<<<<<<< HEAD
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
<<<<<<< HEAD
        default: return 0
=======
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
        default:
          return 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      }
    }),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const containerVariants = {
=======
        default: return 0;
      }
    }),

  const containerVariants = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    hidden: { opacity: 0 },
    visible: {}
      opacity: 1,
<<<<<<< HEAD
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1
      }
    }
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
        staggerChildren: 0.1
      }
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
=======
      transition: {}
        staggerChildren: 0.1;
      }
    }
'
import React, { useState, useEffect } from 'react';'
import Head from 'next/head';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { motion, AnimatePresence } from 'framer-motion';
import {;
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star,;
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2,;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon;'
} from 'lucide-react',;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======

export default function AdvancedServicesShowcase2025(req, res) {
  try {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        default: return 0
      }
    })
  const containerVariants = {

    hidden: { opacity: 0 }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======

'
import EnhancedNavigation from '../components/EnhancedNavigation';'
import EnhancedFooter from '../components/EnhancedFooter';'
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';'
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        default: return 0;
      }
    })
  const containerVariants = {}
    hidden: { opacity: 0 }

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    visible: {
      opacity: 1
      transition: {
        stagger_children: 0.1;
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======


  };
=======
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
  }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
staggerChildren: 0.1,
      },
    },
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
<<<<<<< HEAD
<<<<<<< HEAD

  },
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      transition: {
=======
      transition: {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
    visible: {}
      opacity: 1;
      transition: {}
        stagger_children: 0.1;
      }
    }


  const itemVariants = {}
    hidden: { opacity: 0, y: 20 }
    visible: {}
      opacity: 1;
      y: 0;
      transition: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        duration: 0.5;
      }
    }

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀'
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const getCategoryIcon = (category: string) => {}
    const categoryData = categories.find(cat => cat.id === category);'
    return categoryData?.icon || '🚀'
  },


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Advanced Services Showcase — Zion Tech Group</title>"
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group." />"
        <meta property="og:title" content="2025 Advanced Services Showcase — Zion Tech Group" />"
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services." />"
        <meta name="keywords" content="advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />"
        <link rel="canonical" href="https://ziontechgroup.com/2025-advanced-services-showcase" />
      </Head>
      <EnhancedNavigation />
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀'
  },
=======
duration: 0.5,
      },
    },
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
return categoryData?.icon || '🚀';
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden'>
      <Head>
        <title>2025 Advanced Services Showcase — Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group.'
        />
        <meta
          property='og:title'
          content='2025 Advanced Services Showcase — Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services.'
        />
        <meta
          name='keywords'
          content='advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/2025-advanced-services-showcase'
        />
      </Head>
      <EnhancedNavigation />
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  },
  const getCategoryIcon = (category: string) =>: any {
    const category_data = categories.find (cat => cat.id === category),
    return category_data?.icon || '🚀';
  },
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white overflow - hidden">;
      <Head>;
        <title > 2025 Advanced Services Showcase — Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting - edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group." />;
        <meta property="og:title" content="2025 Advanced Services Showcase — Zion Tech Group" />;
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting - edge AI solutions, quantum technologies, and revolutionary IT services." />;
        <meta name="keywords" content="advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / 2025 - advanced - services - showcase" />;
      </Head>;
      <EnhancedNavigation />;

      {/* Hero Section */}


      {/* Hero Section */  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
=======
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
=======
      {/* Hero Section */}
<section className='relative py-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="relative py - 20 px - 6">;
=======
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
      <section className="relative py-20 px-6">"
        <div className="max-w-7xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
"
      <section className="relative py - 20 px - 6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions, 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Stats */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
=======
          >
<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent'>
              2025 Advanced Services Showcase
            </h1>
            <p className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8'>
              Discover our comprehensive collection of cutting-edge micro SAAS
              services, advanced AI solutions, quantum technologies, and
              revolutionary IT services that are transforming industries
              worldwide.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            </p>

            {/* Stats */}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Stats */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-white/70">Advanced Services</div>
<<<<<<< HEAD
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
=======
"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">"
              <div className="text-center">"
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>"
                <div className="text-white/70">Advanced Services</div>
              </div>"
              <div className="text-center">"
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="text-white/70">Technology Categories</div>
              </div>"
              <div className="text-center">"
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>"
                <div className="text-white/70">Uptime Guarantee</div>
              </div>"
              <div className="text-center">"
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>"
                <div className="text-white/70">Expert Support</div>
=======
=======
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-cyan-400 mb-2'>
                  {allServices.length}+
                </div>
                <div className='text-white/70'>Advanced Services</div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-purple-400 mb-2'>
                  15+
                </div>
                <div className='text-white/70'>Technology Categories</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  99.9%
                </div>
                <div className='text-white/70'>Uptime Guarantee</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-orange-400 mb-2'>
                  24/7
                </div>
                <div className='text-white/70'>Expert Support</div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

          >;
            <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent">;
              2025 Advanced Services Showcase;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto leading - relaxed mb - 8">;
              Discover our comprehensive collection of cutting - edge micro SAAS services, advanced AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.;
            </p>;
            {/* Stats */}
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12">;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - cyan - 400 mb - 2">{all_services.length}+</div>;
                <div className="text - white / 70">Advanced Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - purple - 400 mb - 2">15+</div>;
                <div className="text - white / 70">Technology Categories</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - green - 400 mb - 2">99.9%</div>;
                <div className="text - white / 70">Uptime Guarantee</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - orange - 400 mb - 2">24 / 7</div>;
                <div className="text - white / 70">Expert Support</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

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
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="mb-6">
              <div className="relative">
=======

"
            <div className="mb-6">"
              <div className="relative">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input"
                  type="text""
                  placeholder="Search services by name, description, or features..."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
=======

                  value={searchTerm  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              {/* Category Filter */}


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {/* Filters Row */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======

            {/* Filters Row */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  {categories.map((category) => (
=======
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
=======
      {/* Search and Filters */}
<section className='px-6 pb-12'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
className='bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10'
          >
            {/* Search Bar */}
            <div className='mb-6'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5' />
                <input
                  type='text'
                  placeholder='Search services by name, description, or features...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300'
                />
              </div>
            </div>
            {/* Filters Row */}
<div className='flex flex-col lg:flex-row gap-6'>
              {/* Category Filter */}
              <div className='flex-1'>
                <label className='block text-sm font-medium text-white/70 mb-3'>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  {categories.map(category => (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  ))  } catch (error) {
    console.error("Error:", error);
=======

                  ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Sort By */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
              <div className="flex-1">"
                <label className="block text-sm font-medium text-white/70 mb-3">Sort By</label>
                <select;
                  value={sortBy  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value as any)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >"
                  <option value="popularity">Popularity</option>"
                  <option value="price">Price (Low to High)</option>"
                  <option value="rating">Rating</option>"
                  <option value="newest">Newest</option>
                </select>
              </div>

<<<<<<< HEAD

              {/* Price Range */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
=======
                  ))}
                </select>
              </div>
              {/* Sort By */}
<div className='flex-1'>
                <label className='block text-sm font-medium text-white/70 mb-3'>
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className='w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  <option value='popularity'>Popularity</option>
                  <option value='price'>Price (Low to High)</option>
                  <option value='rating'>Rating</option>
                  <option value='newest'>Newest</option>
                </select>
              </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Price Range</label>
=======
"
              <div className="flex-1">"
                <label className="block text-sm font-medium text-white/70 mb-3">Price Range</label>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="flex gap-2">
                  <input"
                    type="number""
                    placeholder="Min"
<<<<<<< HEAD
<<<<<<< HEAD
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) |0, priceRange[1]])}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    value={priceRange[0]  } catch (error) {
    console.error("Error:", error);
=======

                    value={priceRange[0]  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                  <input"
                    type="number""
                    placeholder="Max"
<<<<<<< HEAD
<<<<<<< HEAD
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) |10000])}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    value={priceRange[1]  } catch (error) {
    console.error("Error:", error);
=======

                    value={priceRange[1]  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

              <div className="flex - 1">;
                <label className="block text - sm font - medium text - white / 70 mb - 3">Category</label>;
                <select;
                  value={selected_category}
                  on_change={(e) => setSelectedCategory (e.target.value)}
                  className="w - full bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white focus:outline - none focus:border - cyan - 400 focus:bg - white / 15 transition - all duration - 300";
                >;
                  {categories.map ((category) => (
                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>))}
                </select>;
              </div>;
              {/* Sort By */}
              <div className="flex - 1">;
                <label className="block text - sm font - medium text - white / 70 mb - 3">Sort By</label>;
                <select;
                  value={sort_by}
                  on_change={(e) => setSortBy (e.target.value as any)}
                  className="w - full bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white focus:outline - none focus:border - cyan - 400 focus:bg - white / 15 transition - all duration - 300";
                >;
                  <option value="popularity">Popularity</option>;
                  <option value="price">Price (Low to High)</option>;
                  <option value="rating">Rating</option>;
                  <option value="newest">Newest</option>;
                </select>;
              </div>;
              {/* Price Range */}
              <div className="flex - 1">;
                <label className="block text - sm font - medium text - white / 70 mb - 3">Price Range</label>;
                <div className="flex gap - 2">;
                  <input;
                    type="number";
                    placeholder="Min";
                    value={price_range[0]}
                    on_change={(e) => setPriceRange ([parse_int (e.target.value) || 0, price_range[1]])}
                    className="flex - 1 bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white placeholder - white / 50 focus:outline - none focus:border - cyan - 400 focus:bg - white / 15 transition - all duration - 300";
                  />;
                  <input;
                    type="number";
                    placeholder="Max";
                    value={price_range[1]}
                    on_change={(e) => setPriceRange ([price_range[0], parse_int (e.target.value) || 10000])}
                    className="flex - 1 bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white placeholder - white / 50 focus:outline - none focus:border - cyan - 400 focus:bg - white / 15 transition - all duration - 300";
                  />;
                </div>;
              </div>;

              {/* View Mode Toggle */}


              {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="flex items-end">
=======

"
              <div className="flex items-end">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button'
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${'
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'`
                    }`}
                  >"
                    <Grid className="w-5 h-5" />
=======
              <div className="flex items-end">
                <div className="flex bg-white/10 rounded-xl p-1">
=======
              {/* Price Range */}
<div className='flex-1'>
                <label className='block text-sm font-medium text-white/70 mb-3'>
                  Price Range
                </label>
                <div className='flex gap-2'>
                  <input
                    type='number'
                    placeholder='Min'
                    value={priceRange[0]}
                    onChange={e =>
                      setPriceRange([
                        parseInt(e.target.value) || 0,
                        priceRange[1],
                      ])
                    }
                    className='flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300'
                  />
                  <input
                    type='number'
                    placeholder='Max'
                    value={priceRange[1]}
                    onChange={e =>
                      setPriceRange([
                        priceRange[0],
                        parseInt(e.target.value) || 10000,
                      ])
                    }
                    className='flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300'
                  />
                </div>
              </div>
              {/* View Mode Toggle */}
<div className='flex items-end'>
                <div className='flex bg-white/10 rounded-xl p-1'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500 text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <Grid className='w-5 h-5' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </button>
<<<<<<< HEAD
                  <button
<<<<<<< HEAD
=======
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
<<<<<<< HEAD
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white'
                    }`}
=======
              <div className="flex items - end">;
                <div className="flex bg - white / 10 rounded - xl p - 1">;
                  <button;
                    on_click={() => setViewMode ('grid')}
                    className={`p - 2 rounded - lg transition - all duration - 300 ${
                      view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - white / 70 hover:text - white';
                    }`}
                  >;
                    <Grid className="w - 5 h - 5" />;
                  </button>;
                  <button;
                    on_click={() => setViewMode ('list')}
                    className={`p - 2 rounded - lg transition - all duration - 300 ${
                      view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - white / 70 hover:text - white';
                    }`}

=======
                  >;
                    <List className="w - 5 h - 5" />;
                  </button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid / List */}
      <section className="px - 6 pb - 20">;
        <div className="max - w-7xl mx - auto">;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
viewMode === 'list'
                        ? 'bg-cyan-500 text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <List className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid/List */}
<section className='px-6 pb-20'>
        <div className='max-w-7xl mx-auto'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {/* Results Count */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="mb-8"
          >"
            <p className="text-white/70">
<<<<<<< HEAD
=======
className='mb-8'
          >
            <p className='text-white/70'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Services Display */}
          <motion.div
            variants={containerVariants}
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {/* Services Display */  } catch (error) {
    console.error("Error:", error);
=======
              Showing {filteredServices.length} of {allServices.length} services;
            </p>
          </motion.div>
"
            initial="hidden""
            animate="visible"'
            className={viewMode === 'grid' "
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8""
              : "space-y-6"
            }

          {/* Services Display */  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div;
            variants={containerVariants  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
<<<<<<< HEAD
<<<<<<< HEAD
=======

            className="mb - 8";
          >;
            <p className="text - white / 70">;
              Showing {filtered_services.length} of {all_services.length} services;
            </p>;
          </motion.div>;
          {/* Services Display */}
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid';
              ? "grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              : "space - y-6";

            }


              } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
=======

"
            initial="hidden""
            animate="visible"'
            className={viewMode === 'grid'"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8""
              : "space-y-6"


          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.div;
<<<<<<< HEAD

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
                  <div className="p - 6">;
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="flex items - center gap - 3">;
                        <div className={`text - 3xl ${service.color.includes ('from-') ? '' : 'bg - gradient - to - r ' + service.color}`}>;
                          {service.icon}
                        </div>;
                        <div>;
                          <h3 className="text - xl font - bold text - white mb - 1">{service.name}</h3>;
                          <p className="text - white / 70 text - sm">{service.tagline}</p>;
                        </div>;
                      </div>;
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
          {/* Services Display */}
          <motion.div
            variants={containerVariants}
initial='hidden'
            animate='visible'
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <AnimatePresence mode='wait'>
              {filteredServices.map((service, index) => (
                <motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  key={service.id  } catch (error) {
    console.error("Error:", error);
=======
                  key={service.id  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  variants={itemVariants  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
                  className={viewMode === 'grid'"
                    ? "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl""
                    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
                    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  {/* Service Header */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
=======
"
                  <div className="p-6">"
                    <div className="flex items-start justify-between mb-4">"
                      <div className="flex items-center gap-3">'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        <div className={`text-3xl ${service.color.includes('from-') ? '' : 'bg-gradient-to-r ' + service.color}`}>
                          {service.icon  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                        </div>
                        <div>"
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>"
                          <p className="text-white/70 text-sm">{service.tagline}</p>
                        </div>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
=======
=======
                  key={service.id}
                  variants={itemVariants}
className={
                    viewMode === 'grid'
                      ? 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                      : 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl'
                  }
                >
                  {/* Service Header */}
                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex items-center gap-3'>
                        <div
                          className={`text-3xl ${service.color.includes('from-') ? '' : 'bg-gradient-to-r ' + service.color}`}
                        >
                          {service.icon}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-white mb-1'>
                            {service.name}
                          </h3>
                          <p className='text-white/70 text-sm'>
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          Popular
                        </span>
                      )}
                    </div>
                    {/* Description */}
<<<<<<< HEAD
                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>
                    {/* Price and Details */}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      {service.popular && (


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<p className='text-white/80 mb-4 leading-relaxed'>
                      {service.description}
                    </p>

                    {/* Price and Details */}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      )  } catch (error) {
    console.error("Error:", error);
=======

                      {service.popular && (



                      )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                    {/* Description */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>
                    {/* Price and Details */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-white/60">{service.period}</span>
<<<<<<< HEAD
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4 text-blue-400" />
=======

"
                    <div className="flex items-center justify-between mb-4">"
                      <div className="flex items-center gap-4">"
                        <div className="flex items-center gap-2">"
                          <DollarSign className="w-4 h-4 text-green-400" />"
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>"
                          <span className="text-white/60">{service.period}</span>
                        </div>"
                        <div className="flex items-center gap-2">"
                          <UsersIcon className="w-4 h-4 text-blue-400" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <span className="text-white/70">{service.customers}+ customers</span>
                        </div>
                      </div>"
                      <div className="flex items-center gap-1">"
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />"
                        <span className="text-white font-medium">{service.rating}</span>"
                        <span className="text-white/60">({service.reviews})</span>
                      </div>
                    </div>

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                          <DollarSign className='w-4 h-4 text-green-400' />
                          <span className='text-2xl font-bold text-green-400'>
                            {service.price}
                          </span>
                          <span className='text-white/60'>
                            {service.period}
                          </span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                        </div>
                        <div className='flex items-center gap-2'>
                          <UsersIcon className='w-4 h-4 text-blue-400' />
                          <span className='text-white/70'>
                            {service.customers}+ customers
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <StarIcon className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-white font-medium'>
                          {service.rating}
                        </span>
                        <span className='text-white/60'>
                          ({service.reviews})
                        </span>
                      </div>
                    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
=======
                    {/* Features */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
                    <div className="mb-6">"
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => ("
                          <div key={idx} className="flex items-center gap-2">"
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />"
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>

                        {service.features.length > 3 && (

"
                          <div className="text - white / 60 text - sm">;
                            +{service.features.length - 3} more features;
                          </div>)}
                      </div>;
                    </div>;

                    {/* Category and Technology */}"
                    <div className="flex items - center justify - between mb - 6">;"
                      <div className="flex items - center gap - 2">;"
                        <span className="text - xs bg - white / 10 text - white / 70 px - 3 py - 1 rounded - full">;
                          {getCategoryIcon (service.category)} {service.category}
                        </span>;
                      </div>;"
                      <div className="text - white / 60 text - sm">;
                        {service.technology.slice (0, 2).join ()}
'
                        {service.technology.length > 2 && '...'}


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                        )  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
=======
                    {/* Features */}
<div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-1 gap-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-2'>
                            <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                            <span className='text-white/80 text-sm'>
                              {feature}
                            </span>
                          </div>
<<<<<<< HEAD
                        )  } catch (error) {
    console.error("Error:", error);
=======

                        )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </div>;
<<<<<<< HEAD
                    {/* Category and Technology */  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
            animate={{ opacity: 1, y: 0 }  } catch (error) {
=======
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {getCategoryIcon(service.category)} {service.category  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
=======
                    {/* Category and Technology */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                    <div className="flex items-center justify-between mb-6">"
                      <div className="flex items-center gap-2">"
                        <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                          {getCategoryIcon(service.category)} {service.category  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
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

              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Stats */}

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."

                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})

                    </option>

                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-white/70 mb-3">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"

                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                  <input
                    type="number"
                    placeholder="Max"

                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex bg-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`p-2 rounded-lg transition-all duration-300 ${;
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

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

            className="mb-8"
          >
            <p className="text-white/70">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </motion.div>

            initial="hidden"
            animate="visible"
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"

          >
            <AnimatePresence mode="wait">

              {filteredServices.map((service, index) => (
                <motion.div

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

                          Popular
                        </span>

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

                          {getCategoryIcon(service.category)} {service.category}
                        </span>
                      </div>
                      <div className="text-white/60 text-sm">

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                        </span>
                      </div>"
                      <div className="text-white/60 text-sm">
                        {service.technology.slice(0, 2).join()  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                      <div className="text-white/60 text-sm">'
                        {service.technology.slice(0, 2).join(', ')  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
                        {service.technology.length > 2 && '...'  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>;
                    </div>;
                    {/* ROI and Benefits */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                        <h4 className="text-cyan-400 font-semibold mb-2">ROI & Benefits</h4>
                        <p className="text-white/80 text-sm mb-3">{service.roi}</p>
                        <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
                              {benefit}
=======
=======

"
                    <div className="mb-6">"
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">"
                        <h4 className="text-cyan-400 font-semibold mb-2">ROI & Benefits</h4>"
                        <p className="text-white/80 text-sm mb-3">{service.roi}</p>"
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.slice(0, 2).map((benefit, idx) => ("
                            <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                              {benefit}


                            </span>))}
                        </div>;
                      </div>;
                    </div>;

                    {/* Action Buttons */}"
                    <div className="flex gap - 3">;
                      <a;

                        href={service.link}


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
                        ))}
                        {service.features.length > 3 && (
                          <div className='text-white/60 text-sm'>
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Category and Technology */}
<div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center gap-2'>
                        <span className='text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full'>
                          {getCategoryIcon(service.category)} {service.category}
                        </span>
                      </div>
                      <div className='text-white/60 text-sm'>
                        {service.technology.slice(0, 2).join(', ')}
                        {service.technology.length > 2 && '...'}
                      </div>
                    </div>
                    {/* ROI and Benefits */}
<div className='mb-6'>
                      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20'>
                        <h4 className='text-cyan-400 font-semibold mb-2'>
                          ROI & Benefits
                        </h4>
                        <p className='text-white/80 text-sm mb-3'>
                          {service.roi}
                        </p>
                        <div className='flex flex-wrap gap-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <span
                              key={idx}
                              className='text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full'
                            >
                              {benefit}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                              {benefit  } catch (error) {
    console.error("Error:", error);
=======

                              {benefit  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </span>;
                          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                    </div>;
                    {/* Action Buttons */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                    <div className="flex gap-3">
<<<<<<< HEAD
                      <a
                        href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
=======
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
=======
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
<div className='flex gap-3'>
                      <a
                        href={service.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      >
                        <ExternalLink className='w-4 h-4' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        Learn More
                      </a>
                      <a
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                      >
                        <ZapIcon className="w-4 h-4" />
                        Contact
                      </a>
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
                    </div>
                  </div>
                </motion.div>

                        target="_blank";
                        rel="noopener noreferrer";
                        className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 text - white font - semibold py - 3 px - 4 rounded - xl transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2";
                      >;
                        <ExternalLink className="w - 4 h - 4" />;
                        Learn More;
                      </a>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <a;
                        href={service.link  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
                        target="_blank""
                        rel="noopener noreferrer""
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >"
                        <ExternalLink className="w-4 h-4" />
                        Learn More;
                      </a>
                      <a;
"
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
                      >"
                        <ZapIcon className="w-4 h-4" />
                        Contact;
                      </a>
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


          {/* No Results */}
=======
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
=======
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
className='bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      >
                        <ZapIcon className='w-4 h-4' />
                        Contact
                      </a>
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {/* No Results */}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {filtered_services.length === 0 && (
            <motion.div;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="text-center py-20"
            >"
              <div className="text-6xl mb-4">🔍</div>"
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>"
              <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
<<<<<<< HEAD
              <button
                onClick={() => {

<<<<<<< HEAD
=======
                  setSearchTerm('');
                  setSelectedCategory('all');

                  setPriceRange([0, 10000])
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


                }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <button;
                onClick={() => {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"

                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              className="text-center py-20"
=======
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
className='text-center py-20'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                No services found
              </h3>
              <p className='text-white/70 mb-6'>
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
<<<<<<< HEAD

=======
                  setSearchTerm('');
                  setSelectedCategory('all');
setPriceRange([0, 10000]);
                }}
                className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300'
                  setPriceRange([0, 10000])
                }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                Clear Filters;
              </button>
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          )  } catch (error) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          )  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
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

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
=======


      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
=======
          )}
        </div>
      </section>
      {/* CTA Section */}
<section className='px-6 py-20'>
        <div className='max-w-4xl mx-auto text-center'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======
=======
              className="text - center py - 20";
            >;
              <div className="text - 6xl mb - 4">🔍</div>;
              <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
              <p className="text - white / 70 mb - 6">Try adjusting your search criteria or filters</p>;
              <button;
                on_click={() => {
                  setSearchTerm (''),
                  setSelectedCategory ('all'),
                  setPriceRange ([0, 10000]);
                }}
                className="bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300";
              >;
                Clear Filters;
              </button>;
            </motion.div>)}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="px - 6 py - 20">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}


              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <a
                href="tel:+13024640950"
=======

          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


"
      <section className="px-6 py-20">"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
              <a"
                href="tel:+13024640950""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950;
              </a>
<<<<<<< HEAD

=======
=======
<h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-white/80 mb-8 max-w-2xl mx-auto'>
              Our advanced services are designed to give you a competitive edge
              in the rapidly evolving technology landscape.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2'
              >
                Schedule Consultation
                <ArrowRight className='w-5 h-5' />
              </a>
              </Link>
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2'
              >
                Call +1 302 464 0950
              </a>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >;
=======

          >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - cyan - 100 bg - clip - text text - transparent">;
              Ready to Transform Your Business?;
            </h2>;"
            <p className="text - xl text - white / 80 mb - 8 max - w-2xl mx - auto">;
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.;
            </p>;"
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;"
                href="mailto:kleber@ziontechgroup.com";"
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Schedule Consultation;"
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;"
                href="tel:+13024640950";"
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10 flex items - center justify - center gap - 2";
              >;
                Call +1 302 464 0950;
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
<<<<<<< HEAD
=======
    </div>);
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/80 mb-8 max-w-2xl mx-auto&quot;>
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Schedule Consultation
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2&quot;
              >
                Call +1 302 464 0950
              </Link>
=======
      {/* CTA Section */}
=======
          )  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
