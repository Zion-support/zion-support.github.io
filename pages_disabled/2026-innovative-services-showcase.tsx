<<<<<<< HEAD


import React, { useState, useMemo } from 'react';
import Head from 'next / head';
import Link from 'next / link';

import { motion, AnimatePresence } from 'framer-motion';


<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';
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
  Zap,;
  Brain,;
  Globe,;
  Shield,;
  Phone,;
  Mail,;
} from 'lucide-react';import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail } from 'lucide-react';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link';

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
  Zap
  Brain
  Globe
  Shield
  Phone
  Mail;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail } from 'lucide-react';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
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
  Zap,
  Brain,
  Globe,
  Shield,
  Phone,;
  Mail,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail } from 'lucide-react';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail } from 'lucide-react';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
<<<<<<< HEAD
<<<<<<< HEAD

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount }
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount }
    {
      id: 'enterprise'
      name: 'Enterprise IT'
      icon: '🏢'
      count: enterpriseCount
    }
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
    {
      id: 'emerging'
      name: 'Emerging Tech'
      icon: '🔬'
      count: emergingTechCount
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $500', range: 'Under $500' }
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' }
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name' }
    { id: 'price', name: 'Price' }
    { id: 'rating', name: 'Rating' }
    { id: 'popularity', name: 'Popularity' },  ];

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedCategory) {
          case 'ai':
            return service.category?.includes('AI');
          case 'quantum':
            return service.category?.includes('Quantum');
          case 'enterprise':
            return service.category?.includes('Enterprise');
          case 'micro-saas':
            return service.category?.includes('Micro SaaS');
          case 'emerging':
<<<<<<< HEAD
<<<<<<< HEAD
// Price range filter
            return (
              service.category?.includes('Emerging') |
              service.category?.includes('Neuromorphic') |
              service.category?.includes('Synthetic')
            );
          default: return true
        }
      });    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            return service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic');
          default: return true
        }
      })
    }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'low':
<<<<<<< HEAD
<<<<<<< HEAD

          default: return true
        }
      })
    }
// Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        switch (selectedPriceRange) {
          case 'low':
            return price < 500,
          case 'medium':
            return price >= 500 && price <= 1000,
          case 'high':
            return price > 1000,
          default: return true
        }
      })
    }

    // Search filter
    if (searchTerm) {_filtered = filtered.filter(service =>

        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
// Sort
            return price < 500;
          case 'medium':
            return price >= 500 && price <= 1000;
          case 'high':
            return price > 1000;
          default: return true
        }
      });    }
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );    }
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'rating':
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount },;
    {;
      id: 'enterprise',;
      name: 'Enterprise IT',;
      icon: '🏢',;
      count: enterpriseCount,;
    },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'emerging',;
      name: 'Emerging Tech',;
      icon: '🔬',;
      count: emergingTechCount,;
    },  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $500', range: 'Under $500' },;
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' },;
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000' },  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'popularity', name: 'Popularity' },  ];
<<<<<<< HEAD
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
=======

  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        switch (selectedCategory) {;
          case 'ai':;
            return service && service.category?.includes('AI');
          case 'quantum':;
            return service && service.category?.includes('Quantum');
          case 'enterprise':;
            return service && service.category?.includes('Enterprise');
          case 'micro-saas':;
            return service && service.category?.includes('Micro SaaS');
          case 'emerging':;
            return (
              service && service.category?.includes('Emerging') ||;
              service && service.category?.includes('Neuromorphic') ||;
              service && service.category?.includes('Synthetic');
            );
          default: return true,;
        }
      });    }
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Price range filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        const price = parseInt(service && service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {;
          case 'low':;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            return price < 500;
          case 'medium':;
            return price >= 500 && price <= 1000;
          case 'high':;
            return price > 1000;


          return b.rating - a.rating;
        case 'popularity':;
          return b.customers - a.customers;


          default: return true,;
        }
      });    }

    // Search filter;
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        service =>;
          service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Sort;
    filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          const priceA = parseInt(a && a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b && b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'popularity':;
          return b && b.customers - a && a.customers;
        default: return a && a.name.localeCompare(b && b.name),;
<<<<<<< HEAD
<<<<<<< HEAD
      }
    });
    return filtered
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]);
  const containerVariants = {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    });


    return filtered
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]);

  const containerVariants = {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        default: return a.name.locale_compare (b.name),
      }
    });
;
    return filtered;  }, [all_services, selected_category, selectedPriceRange, search_term, sort_by]);
;
  const container_variants = {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
    }
  };
=======

=======
    }
  };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
<<<<<<< HEAD
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default: return a.name.localeCompare(b.name)
      }
    });
    return filtered;  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]);
  const containerVariants = {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1
      }
    },  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        default: return a.name.locale_compare (b.name),
      }
    });
;
    return filtered;  }, [all_services, selected_category, selectedPriceRange, search_term, sort_by]);
;
  const container_variants = {

    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {

=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

        duration: 0.5
      }
    },  }
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        duration: 0.5,
      },
    },  };

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Innovative2026ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...innovative2026MicroSaasServicesV4;
    ...emergingTech2026ServicesV4;
    ...enterpriseIT2026ServicesV4;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length;
  const microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length;
  const emergingTechCount = allServices.filter(service => service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic')).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount },;
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    { id: 'emerging', name: 'Emerging Tech', icon: '🔬', count: emergingTechCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $500', range: 'Under $500' },;
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' },;
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'popularity', name: 'Popularity'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => {;
        switch (selectedCategory) {;
          case 'ai':;
            return service.category?.includes('AI');
          case 'quantum':;
            return service.category?.includes('Quantum');
          case 'enterprise':;
            return service.category?.includes('Enterprise');
          case 'micro-saas':;
            return service.category?.includes('Micro SaaS');
          case 'emerging':;
            return service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic');
          default: return true;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Price range filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered.filter(service => {;
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),;
        switch (selectedPriceRange) {;
          case 'low':;
            return price < 500,;
          case 'medium':;
            return price >= 500 && price <= 1000,;
          case 'high':;
            return price > 1000,;
          default: return true;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Search filter;
    if (searchTerm) {;
      filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Sort;
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          const priceA = parseInt(a.price.replace(/[^0-9]/g, '')),;
          const priceB = parseInt(b.price.replace(/[^0-9]/g, '')),;
          return priceA - priceB,;
        case 'rating':;
          return b.rating - a.rating,;
        case 'popularity':;
          return b.customers - a.customers,;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),;
    return filtered;
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]),;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

          href='https://ziontechgroup && ziontechgroup.com/2026-innovative-services-showcase'
        />;
      </Head>;


<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <Head>
        <title>2026 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2026 services, innovative technology, AI services, quantum computing, emerging tech, enterprise IT, micro SaaS, Zion Tech Group" />
        <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
      </Head>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <UltraAdvancedFuturisticBackground2026
        intensity='extreme'
        colorScheme='neural-network'        particleCount={800}
<<<<<<< HEAD
=======
        animationSpeed={3 && 3.0}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <UltraAdvancedFuturisticBackground2026
        intensity='extreme'
        colorScheme='neural-network'        particleCount={800}
        animationSpeed={3 && 3.0}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>2026 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2026 services, innovative technology, AI services, quantum computing, emerging tech, enterprise IT, micro SaaS, Zion Tech Group" />
        <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
      </Head>
<<<<<<< HEAD

<<<<<<< HEAD
        animationSpeed={3.0}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <UltraAdvancedFuturisticBackground2026
        intensity='extreme'
        colorScheme='neural-network'        particleCount={800}
        animationSpeed={3.0}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetworks={true}
        enableMultidimensional={true}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;

      <UltraAdvancedNavigation2026 />;
<<<<<<< HEAD
      <div className='min-h-screen relative z-10'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className='min-h-screen relative z-10'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto text-center'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
      />
      <UltraAdvancedNavigation2026 />
      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="mb-8"
      />
      <UltraAdvancedNavigation2026 />
      <div className='min-h-screen relative z-10'>
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-8'
        intensity="extreme"
        colorScheme="neural-network"
        particleCount={800  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        animationSpeed={3.0  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        enableHolographic={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        enableQuantumEffects={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        enableNeuralNetworks={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        enableMultidimensional={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <UltraAdvancedNavigation2026 />
      <div className="min-h-screen relative z-10">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              className="mb-8"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                2026 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
                Discover the future of technology with our cutting-edge 2026 services.
                From AI-powered solutions to quantum computing and emerging technologies,
                transform your business with next-generation innovation.
              </p>
            </motion.div>
            <motion.div
<<<<<<< HEAD
className="flex flex-wrap justify-center gap-4 mb-12"
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
<<<<<<< HEAD
=======
                Discover the future of technology with our cutting-edge 2026 services. 
                From AI-powered solutions to quantum computing and emerging technologies,
                transform your business with next-generation innovation.
              </p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </motion.div>
            <motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
                <span className="text-blue-400 font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
                <span className="text-purple-400 font-semibold">AI-Powered</span>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
                <span className="text-green-400 font-semibold">Quantum Ready</span>
              </div>
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3">
                <span className="text-orange-400 font-semibold">Future-Proof</span>
              </div>

            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.4 }}
              className='max-w-4xl mx-auto'
            {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
              className="max-w-4xl mx-auto"
=======


              transition={{ duration: 0 && 0.8 }}
              className='mb-8'>;
              <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>;
                2026 Innovative Services;
              </h1>;
              <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
                Discover the future of technology with our cutting-edge 2026;
                services. From AI-powered solutions to quantum computing and;
                emerging technologies, transform your business with;
                next-generation innovation.              </p>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            {/* Search and Filters */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              className='max-w-4xl mx-auto'>;
              <div className='relative mb-8'>;
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
                <input
                  type='text'
                  placeholder='Search innovative services...'
                  value={searchTerm}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
<<<<<<< HEAD
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {categories.map((category) => (
                  <button


<<<<<<< HEAD
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {categories.map((category) => (
                  <button
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
=======
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>
              <div className='flex flex-wrap gap-4 justify-center mb-8'>
                {categories.map(category => (                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    }`}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {categories.map((category) => (
                  <button


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent';
                />;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex flex-wrap gap-4 justify-center mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }`}
                  >;
                    <span className='mr-2'>{category && category.icon}</span>                    {category && category.name} ({category && category.count});
                  </button>;

                ))}
<<<<<<< HEAD
<<<<<<< HEAD
                    }`}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
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
                    className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {priceRanges.map((range) => (
                  <button

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className='flex flex-wrap gap-4 justify-center'>
                {priceRanges.map(range => (                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                      selectedPriceRange === range.id
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
              <div className='flex flex-wrap gap-4 justify-center'>;
                {priceRanges && priceRanges.map(range => (                  <button
                    key={range && range.id}
                    onClick={() => setSelectedPriceRange(range && range.id)}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${;
                      selectedPriceRange === range && range.id;
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
<<<<<<< HEAD
                    }`}
=======

                    }`}
                  >;
                    {range && range.name}
                  </button>;
                ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
<<<<<<< HEAD
        {/* Services Grid */}
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
    <>;
      <Head>;
        <title > 2026 Innovative Services Showcase - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Discover cutting - edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions. Transform your business with next - generation technology.';
        />;
        <meta;
          name='keywords';
          content='2026 services, innovative technology, AI services, quantum computing, emerging tech, enterprise IT, micro SaaS, Zion Tech Group';
        />;
        <meta;
          property='og:title';
          content='2026 Innovative Services Showcase - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Discover cutting - edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions.';
        />;
        <meta property='og:type' content='website' />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / 2026 - innovative - services - showcase';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / 2026 - innovative - services - showcase';
        />;
      </Head>;
      <UltraAdvancedFuturisticBackground2026;
        intensity='extreme';
        color_scheme='neural - network'        particle_count={800}
        animation_speed={3.0}
        enable_holographic={true}
        enableQuantumEffects={true}
        enableNeuralNetworks={true}
        enable_multidimensional={true}
      />;
      <UltraAdvancedNavigation2026 />;
      <div className='min - h-screen relative z - 10'>;
        {/* Hero Section */}
        <section className='relative py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb - 8';
            >;
              <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6'>;
                2026 Innovative Services;
              </h1>;
              <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
                Discover the future of technology with our cutting - edge 2026;
                services. From AI - powered solutions to quantum computing and;
                emerging technologies, transform your business with;
                next - generation innovation.              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex flex - wrap justify - center gap - 4 mb - 12';
            >;
              <div className='bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 backdrop - blur - sm border border - blue - 500 / 30 rounded - full px - 6 py - 3'>;
                <span className='text - blue - 400 font - semibold'>;
                  {all_services.length}+ Services;
                </span>;
              </div>;
              <div className='bg - gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - sm border border - purple - 500 / 30 rounded - full px - 6 py - 3'>;
                <span className='text - purple - 400 font - semibold'>;
                  AI - Powered;
                </span>;
              </div>;
              <div className='bg - gradient - to - r from - green - 600 / 20 to - emerald - 600 / 20 backdrop - blur - sm border border - green - 500 / 30 rounded - full px - 6 py - 3'>;
                <span className='text - green - 400 font - semibold'>;
                  Quantum Ready;
                </span>;
              </div>;
              <div className='bg - gradient - to - r from - orange - 600 / 20 to - red - 600 / 20 backdrop - blur - sm border border - orange - 500 / 30 rounded - full px - 6 py - 3'>;
                <span className='text - orange - 400 font - semibold'>;
                  Future - Proof;
                </span>              </div>;
            </motion.div>;
            {/* Search and Filters */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='max - w-4xl mx - auto';
            >;
              <div className='relative mb - 8'>;
                <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                <input;
                  type='text';
                  placeholder='Search innovative services...';
                  value={search_term}
                  on_change={e => setSearchTerm (e.target.value)}
                  className='w - full pl - 12 pr - 4 py - 4 bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 / 50 focus:border - transparent';
                />;
              </div>;
              <div className='flex flex - wrap gap - 4 justify - center mb - 8'>;
                {categories.map (category => (                  <button;
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 6 py - 3 rounded - full backdrop - blur - sm border transition - all duration - 300 ${
                      selected_category === category.id;
                        ? 'bg - gradient - to - r from - blue - 600 / 30 to - purple - 600 / 30 border - blue - 500 / 50 text - blue - 300';
                        : 'bg - gray - 900 / 30 border - gray - 700 / 50 text - gray - 300 hover:bg - gray - 800 / 50';
                    }`}
                  >;
                    <span className='mr - 2'>{category.icon}</span>                    {category.name} ({category.count});
                  </button>))}
              </div>;
              <div className='flex flex - wrap gap - 4 justify - center'>;
                {price_ranges.map (range => (                  <button;
                    key={range.id}
                    on_click={() => setSelectedPriceRange (range.id)}
                    className={`px - 4 py - 2 rounded - lg backdrop - blur - sm border transition - all duration - 300 ${
                      selectedPriceRange === range.id;
                        ? 'bg - gradient - to - r from - green - 600 / 30 to - emerald - 600 / 30 border - green - 500 / 50 text - green - 300';
                        : 'bg - gray - 900 / 30 border - gray - 700 / 50 text - gray - 300 hover:bg - gray - 800 / 50';
                    }`}
                  >;
                    {range.name}
                  </button>))}
=======
                    }`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Grid */}
        <section className='py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
              <div className="flex flex-wrap gap-4 justify-center">
                {priceRanges.map((range) => (
                  <button
<<<<<<< HEAD
                    key={range.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onClick={() => setSelectedPriceRange(range.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${;
                      selectedPriceRange === range.id;
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {range.name  } catch (error) {
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
          </div>;
        </section>;
=======
=======

              </div>;

              <div className='flex flex-wrap gap-4 justify-center'>;
                {priceRanges && priceRanges.map(range => (                  <button
                    key={range && range.id}
                    onClick={() => setSelectedPriceRange(range && range.id)}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${;
                      selectedPriceRange === range && range.id;
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';

                    }`}
                  >;
                    {range && range.name}
                  </button>;
                ))}

              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* Services Grid */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Users className='w-4 h-4 text-blue-400' />
                          <span className='text-gray-300 text-sm'>
                            {service.customers}+
                          </span>
                        </div>
                      </div>

                      </p>;
                      <div className='flex items - center justify - between mb - 4'>;
                        <div className='flex items - center space - x-2'>;
                          <Star className='w - 4 h - 4 text - yellow - 500 fill - current' />;
                          <span className='text - white text - sm'>;
                            {service.rating}
                          </span>;
                          <span className='text - gray - 400 text - sm'>;
                            ({service.reviews});
                          </span>;
                        </div>;
                        <div className='flex items - center space - x-2'>;
                          <Users className='w - 4 h - 4 text - blue - 400' />;
                          <span className='text - gray - 300 text - sm'>;
                            {service.customers}+;
                          </span>;
                        </div>;
                      </div>;
                      <div className='flex items - center justify - between mb - 4'>;
                        <div className='text - 2xl font - bold text - white'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {service.price}
                        </div>;
                        <div className='text - gray - 400 text - sm'>;
                          {service.period}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </div>;
                      <h3 className='text-xl font-bold text-white mb-2'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 text-sm'>{service && service.tagline}</p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
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
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105">
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className={`p-6 bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm">{service.tagline}</p>
                    </div>
                    {/* Service Content */}
                    <div className='p-6'>
                      <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                        {service.description}
                      </p>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-2'>
                          <Star className='w-4 h-4 text-yellow-500 fill-current' />
                          <span className='text-white text-sm'>
                            {service.rating}
                          </span>
                          <span className='text-gray-400 text-sm'>
                            ({service.reviews})
                          </span>
                    {/* Service Content */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="p-6">
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{service.customers}+</span>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='text-2xl font-bold text-white'>
                          {service.price}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-gray-400 text-sm">{service.period}</div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{service.setupTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300 text-sm">{service.trialDays} days trial</span>
                        </div>
                      </div>
                      {/* Features Preview */}
                        </div>;
                      </div>;
                      {/* Category Badge */}
                      <div className='mb-4'>;
                        <span
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-2'>
                          <Clock className='w-4 h-4 text-green-400' />
                          <span className='text-gray-300 text-sm'>
                            {service.setupTime}
                          </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Zap className='w-4 h-4 text-yellow-400' />
                          <span className='text-gray-300 text-sm'>
                            {service.trialDays} days trial
                          </span>                        </div>
                      </div>
                      {/* Features Preview */}
                      <div className='mb-4'>
                        <h4 className='text-white font-semibold mb-2'>
                          Key Features:
                        </h4>
                        <div className='space-y-1'>
                          {service.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <div
                                key={index}
                                className='flex items-center space-x-2'
                              >
                                <CheckCircle className='w-3 h-3 text-green-400' />
                                <span className='text-gray-300 text-xs'>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          {service.features.length > 3 && (
                            <span className='text-gray-500 text-xs'>
                              +{service.features.length - 3} more features
                            </span>                          )}
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className='mb-4'>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}
                        >                          {service.category}
                        </span>
                      </div>
                      {/* CTA Button */}
                      {/* Features Preview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    {/* Service Content */}
                    <div className='p-6'>;
                      <p className='text-gray-300 text-sm mb-4 line-clamp-3'>;
                        {service && service.description}
                      </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className='flex items-center justify-between mb-4'>;
                        <div className='flex items-center space-x-2'>;
                          <Star className='w-4 h-4 text-yellow-500 fill-current' />;
                          <span className='text-white text-sm'>;
                            {service && service.rating}
                          </span>;
                          <span className='text-gray-400 text-sm'>;
                            ({service && service.reviews});
                          </span>;
                        </div>;
                        <div className='flex items-center space-x-2'>;
                          <Users className='w-4 h-4 text-blue-400' />;
                          <span className='text-gray-300 text-sm'>;
                            {service && service.customers}+;
                          </span>;
                        </div>;
                      </div>;




                      <div className='flex items-center justify-between mb-4'>;
                        <div className='flex items-center space-x-2'>;
                          <Clock className='w-4 h-4 text-green-400' />;
                          <span className='text-gray-300 text-sm'>;
                            {service && service.setupTime}
                          </span>;
                        </div>;
                        <div className='flex items-center space-x-2'>;
                          <Zap className='w-4 h-4 text-yellow-400' />;
                          <span className='text-gray-300 text-sm'>;
                            {service && service.trialDays} days trial;
                          </span>                        </div>;
                      </div>;



                      {/* Features Preview */}
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      <div className='mb-4'>
                        <h4 className='text-white font-semibold mb-2'>
                          Key Features:
                        </h4>
                        <div className='space-y-1'>
                          {service.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <div
                                key={index}
                                className='flex items-center space-x-2'
                              >
                                <CheckCircle className='w-3 h-3 text-green-400' />
                                <span className='text-gray-300 text-xs'>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          {service.features.length > 3 && (
                            <span className='text-gray-500 text-xs'>
                              +{service.features.length - 3} more features
                            </span>                          )}
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div className='mb-4'>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}
                        >                          {service.category}
                        </span>
                      </div>
                      {/* CTA Button */}
                      {/* Features Preview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-gray-500 text-xs">+{service.features.length - 3} more features</span>
                          )}
                        </div>
                      </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}>
                          {service.category}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </span>
                      </div>
{/* CTA Button */}
                      <Link href={service.link}>
<<<<<<< HEAD
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service && service.textColor} bg-opacity-20`}>                          {service && service.category}
                        </span>;
                      </div>;
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          {service.features.length > 3 && (
                            <span className="text-gray-500 text-xs">+{service.features.length - 3} more features</span>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>;
                      </div>;
                      {/* Category Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}>
                          {service.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>;
                      </div>;
                      {/* CTA Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <Link href={service.link}>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
=======
=======
                        </span>
                      </div>
                      {/* CTA Button */}
                      <Link href={service.link}>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service && service.textColor} bg-opacity-20`}>                          {service && service.category}
                        </span>;
                      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <span className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </button>
                      </Link>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />                  </div>
                </motion.div>
              ))}
            </motion.div>
<<<<<<< HEAD
{/* CTA Button */}
                      <Link href={service && service.link}>;
                        <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>;
                          <span className='flex items-center justify-center space-x-2'>;
                            <span>Learn More</span>;
                            <ArrowRight className='w-4 h-4' />                          </span>;
                        </button>;
                      </Link>;
                    </div>;
            </motion.div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
                className='text-center py-16'
                    {/* Hover Effect Overlay */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </motion.div>;
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
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </motion && motion.div>;

            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}


<<<<<<< HEAD
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all')
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300'                >
                  Clear Filters
                </button>
              </motion.div>
            )}
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </section>
        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
<<<<<<< HEAD
                  }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                    setSelectedPriceRange('all')
                  }}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
            )}
          </div>
        </section>
        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
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
        {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </section>;


        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div
<<<<<<< HEAD
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}



            >

<<<<<<< HEAD
<<<<<<< HEAD
            >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to learn more about our innovative 2026 services and how they can revolutionize your operations.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6'>
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                  <h3 className='text-white font-semibold mb-2'>Call Us</h3>
                  <p className='text-blue-300'>+1 302 464 0950</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-blue-300">+1 302 464 0950</p>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-purple-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-green-300">ziontechgroup.com</p>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started Today
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href='/contact'>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started Today
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started Today
<<<<<<< HEAD
=======

              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started Today
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}
=======

              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
            >;
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;

                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Contact our team to learn more about our innovative 2026;
                services and how they can revolutionize your operations.;
              </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
                <div className='bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6'>;
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-4' />;
                  <h3 className='text-white font-semibold mb-2'>Call Us</h3>;
                  <p className='text-blue-300'>+1 302 464 0950</p>;
                </div>;
                <div className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6'>;
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-4' />;
                  <h3 className='text-white font-semibold mb-2'>Email Us</h3>;
                  <p className='text-purple-300'>kleber@ziontechgroup && ziontechgroup.com</p>;
                </div>;
                <div className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6'>;
                  <Globe className='w-8 h-8 text-green-400 mx-auto mb-4' />;
                  <h3 className='text-white font-semibold mb-2'>Visit Us</h3>;
                  <p className='text-green-300'>ziontechgroup && ziontechgroup.com</p>;
                </div>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href='/contact'>;
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>                  Get Started Today;
                </button>;
              </Link>;
            </motion && motion.div>;
<<<<<<< HEAD
);
  )
            >;
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Contact our team to learn more about our innovative 2026 services and how they can revolutionize your operations.;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">;
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />;
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>;
                  <p className="text-blue-300">+1 302 464 0950</p>;
                </div>;
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">;
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />;
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>;
                  <p className="text-purple-300">kleber@ziontechgroup.com</p>;
                </div>;
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">;
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />;
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>;
                  <p className="text-green-300">ziontechgroup.com</p>;
                </div>;
              </div>;
              <Link href="/contact">;
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">;
                  Get Started Today;
                </button>;
              </Link>;
            </motion.div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </section>;
      </div>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>;
                      </div>;
                      <div className='flex items - center justify - between mb - 4'>;
                        <div className='flex items - center space - x-2'>;
                          <Clock className='w - 4 h - 4 text - green - 400' />;
                          <span className='text - gray - 300 text - sm'>;
                            {service.setup_time}
                          </span>;
                        </div>;
                        <div className='flex items - center space - x-2'>;
                          <Zap className='w - 4 h - 4 text - yellow - 400' />;
                          <span className='text - gray - 300 text - sm'>;
                            {service.trial_days} days trial;
                          </span>                        </div>;
                      </div>;
                      {/* Features Preview */}
                      <div className='mb - 4'>;
                        <h4 className='text - white font - semibold mb - 2'>;
                          Key Features:;
                        </h4>;
                        <div className='space - y-1'>;
                          {service.features;
                            .slice (0, 3);
                            .map ((feature, index) => (
                              <div;
                                key={index}
                                className='flex items - center space - x-2';
                              >;
                                <CheckCircle className='w - 3 h - 3 text - green - 400' />;
                                <span className='text - gray - 300 text - xs'>;
                                  {feature}
                                </span>;
                              </div>))}
                          {service.features.length > 3 && (
                            <span className='text - gray - 500 text - xs'>;
                              +{service.features.length - 3} more features;
                            </span>                          )}
                        </div>;
                      </div>;
                      {/* Category Badge */}
                      <div className='mb - 4'>;
                        <span;
                          className={`inline - block px - 3 py - 1 rounded - full text - xs font - medium ${service.text_color} bg - opacity - 20`}
                        >                          {service.category}
                        </span>;
                      </div>;
                      {/* CTA Button */}
                      <Link href={service.link}>;
                        <button className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700 text - white font - semibold py - 3 px - 6 rounded - xl transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg'>;
                          <span className='flex items - center justify - center space - x-2'>;
                            <span > Learn More</span>;
                            <ArrowRight className='w - 4 h - 4' />                          </span>;
                        </button>;
                      </Link>;
                    </div>;
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset - 0 bg - gradient - to - t from - black / 60 via - transparent to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 rounded - 2xl' />                  </div>;
                </motion.div>))}
            </motion.div>;
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text - center py - 16';
              >;
                <div className='text - gray - 400 text - xl mb - 4'>;
                  No services found matching your criteria;
                </div>                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                    setSelectedPriceRange ('all');
                  }}
                  className='bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - xl hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300'                >;
                  Clear Filters;
                </button>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Contact Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Contact our team to learn more about our innovative 2026;
                services and how they can revolutionize your operations.;
              </p>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='bg - gradient - to - br from - blue - 600 / 20 to - cyan - 600 / 20 backdrop - blur - sm border border - blue - 500 / 30 rounded - xl p - 6'>;
                  <Phone className='w - 8 h - 8 text - blue - 400 mx - auto mb - 4' />;
                  <h3 className='text - white font - semibold mb - 2'>Call Us</h3>;
                  <p className='text - blue - 300'>+1 302 464 0950</p>;
                </div>;
                <div className='bg - gradient - to - br from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl p - 6'>;
                  <Mail className='w - 8 h - 8 text - purple - 400 mx - auto mb - 4' />;
                  <h3 className='text - white font - semibold mb - 2'>Email Us</h3>;
                  <p className='text - purple - 300'>kleber@ziontechgroup.com</p>;
                </div>;
                <div className='bg - gradient - to - br from - green - 600 / 20 to - emerald - 600 / 20 backdrop - blur - sm border border - green - 500 / 30 rounded - xl p - 6'>;
                  <Globe className='w - 8 h - 8 text - green - 400 mx - auto mb - 4' />;
                  <h3 className='text - white font - semibold mb - 2'>Visit Us</h3>;
                  <p className='text - green - 300'>ziontechgroup.com</p>;
                </div>;
              </div>;
              <Link href='/contact'>;
                <button className='bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700 text - white font - semibold py - 4 px - 8 rounded - xl text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg'>                  Get Started Today;
                </button>;
              </Link>;
            </motion.div>;
          </div>;
        </section>;
      </div>;

    </>;
  );
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
