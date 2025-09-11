<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import Head from 'next / head';
;
import { motion, AnimatePresence } from 'framer-motion';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Search,;
  CheckCircle,;
  ArrowRight,;
  Rocket,;
  Mail,;
  Phone,;
  MapPin,;
  MessageSquare,;
  Globe,;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';

<<<<<<< HEAD

import { motion, AnimatePresence } from 'framer-motion';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Search,;
  CheckCircle,;
  ArrowRight,;
  Rocket,;
  Mail,;
  Phone,;
  MapPin,;
  MessageSquare,;
  Globe,;

} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
=======
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const allServices = [
    ...revolutionary2027AIServices;
    ...revolutionary2027ITServices;
    ...revolutionary2027MicroSaasServices
  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount }
<<<<<<< HEAD
];
=======
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' };
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' };
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' }
  ];
<<<<<<< HEAD
  const sortOptions = [
import React, { useState, useMemo } from 'react',
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Search
  CheckCircle
  ArrowRight
  Rocket
  Mail
  Phone
  MapPin
  MessageSquare
  Globe;

import { motion, AnimatePresence } from 'framer-motion';
import {
=======

  const sortOptions = [
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Search,
  CheckCircle,
  ArrowRight,
  Rocket,
  Mail,
  Phone,
  MapPin,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  MessageSquare,
  Globe,
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components / ui / UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data / revolutionary - 2027 - ai - services';
import {revolutionary2027ITServices} from '../data / revolutionary - 2027 - it - services';
import {revolutionary2027MicroSaasServices} from '../data / revolutionary - 2027 - micro - saas';
;
<<<<<<< HEAD
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: ai_count },
    {
      id: 'quantum',
      name: 'Quantum Services',
      icon: '⚛️',
      count: quantum_count,
    },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: it_count },
    { id: 'micro - saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    {
      id: 'holographic',
      name: 'Holographic',
      icon: '🎭',
      count: holographic_count,
    },  ];
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under - 500', name: 'Under $500', range: 'Under $500' },
    { id: '500 - 2000', name: '$500 - $2, 000', range: '$500 - $2, 000' },
    { id: '2000 - 10000', name: '$2, 000 - $10, 000', range: '$2, 000 - $10, 000' },
    { id: 'over - 10000', name: 'Over $10, 000', range: 'Over $10, 000' },  ];
;
  const sort_options = [;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' },
<<<<<<< HEAD
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
if (selectedCategory === 'quantum') return service.category.includes('Quantum');
=======

=======
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true
      })
    }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Services',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'holographic',;
      name: 'Holographic',;
      icon: '🎭',;
      count: holographicCount,;
    },  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
    { id: 'launchDate', name: 'Launch Date' },  ];
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        if (selectedCategory === 'ai') return service && service.category.includes('AI');
        if (selectedCategory === 'quantum');
          return service && service.category.includes('Quantum');
        if (selectedCategory === 'it');
          return (
            service && service.category.includes('IT') ||;
            service && service.category.includes('Infrastructure');
          );
        if (selectedCategory === 'micro-saas');
          return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            service && service.category.includes('Micro SaaS') ||;
            service && service.category.includes('Marketing') ||;
            service && service.category.includes('Legal') ||;
            service && service.category.includes('Health');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          );
        if (selectedCategory === 'holographic');
          return service && service.category.includes('Holographic');
        return true;
      });    }
<<<<<<< HEAD
    // Price range filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        const price = parseInt(service && service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true
      })
    }
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI'),
        if (selectedCategory === 'quantum') return service.category.includes('Quantum'),
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure'),
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health'),
        if (selectedCategory === 'holographic') return service.category.includes('Holographic'),
        return true
      })
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
        if (selectedPriceRange === 'under-500') return price < 500,
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000,
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000,
        if (selectedPriceRange === 'over-10000') return price >= 10000,
        return true
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
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
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
    // Sort;
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return (
            parseInt(a && a.price.replace(/[^0-9]/g, '')) -;
            parseInt(b && b.price.replace(/[^0-9]/g, ''));
          );        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'customers':;
          return b.customers - a.customers,;
        case 'launchDate':;
          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
          );
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'rating':
    { id: 'launch_date', name: 'Launch Date' },  ];
;
  const filtered_services = useMemo (() => {
    let filtered = all_services;
;
    // Category filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        if (return service.category.includes ('AI')) {
  $2
}
        if (
          return service.category.includes ('Quantum')) {
  $2
}
        // Check condition
if (
          return () {
  $2
}
            service.category.includes ('IT') ||;
            service.category.includes ('Infrastructure'));
        // Check condition
if (
          return () {
  $2
}
            service.category.includes ('Micro SaaS') ||;
            service.category.includes ('Marketing') ||;
            service.category.includes ('Legal') ||;
            service.category.includes ('Health'));
        if (
          return service.category.includes ('Holographic')) {
  $2
}
        return true;
      });    }
    // Price range filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        const price = parse_int (service.price.replace (/[^0 - 9]/g, ''));
        // Check condition
if (return price < 500) {
  $2
}
        // Check condition
if (
          return price >= 500 && price < 2000) {
  $2
}
        // Check condition
if (
          return price >= 2000 && price < 10000) {
  $2
}
        // Check condition
if (return price >= 10000) {
  $2
}
        return true;
      });    }
    // Search filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service =>;
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.category.toLowerCase ().includes (search_term.toLowerCase ()));    }
    // Sort;
    filtered.sort ((a, b) => {
      switch (sort_by) {
        case 'price':;
          return (
            parse_int (a.price.replace (/[^0 - 9]/g, '')) -;
            parse_int (b.price.replace (/[^0 - 9]/g, '')));        case 'rating':;
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;
        default: return a && a.name.localeCompare(b && b.name),;
      }
    });
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };
  return (
    <UltraQuantumHolographicBackground intensity={2 && 2.0}>;
      <Head>;
        <title>;
          Revolutionary 2027 Services Showcase - Zion Tech Group |;
          Next-Generation AI, Quantum & Technology Solutions;
        </title>;
        <meta
          name='description'
          content='Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation.'
        />;
        <meta
          property='og:title'
          content='Revolutionary 2027 Services Showcase - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Explore the future of technology with our revolutionary 2027 services showcase.'
        />;
        <meta
          property='og:url'
          content='https://ziontechgroup && ziontechgroup.com/revolutionary-2027-services-showcase'
        />;
        <meta property='og:type' content='website' />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/revolutionary-2027-services-showcase'
        />;
      </Head>;
    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

    // Sort
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),

        case 'rating':
          return b.rating - a.rating,
        case 'customers':
          return b.customers - a.customers,
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return a.name.localeCompare(b.name)
      }
    }),

    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  MessageSquare,;
  Globe,;
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount }
    {
      id: 'quantum'
      name: 'Quantum Services'
      icon: '⚛️'
      count: quantumCount
    }
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount }
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
    {
      id: 'holographic'
      name: 'Holographic'
      icon: '🎭'
      count: holographicCount
    },  ];
<<<<<<< HEAD
=======
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
=======

=======
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...revolutionary2027AIServices;
    ...revolutionary2027ITServices;
    ...revolutionary2027MicroSaasServices;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: ai_count },
    {
      id: 'quantum',
      name: 'Quantum Services',
      icon: '⚛️',
      count: quantum_count,
    },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: it_count },
    { id: 'micro - saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    {
      id: 'holographic',
      name: 'Holographic',
      icon: '🎭',
      count: holographic_count,
    },  ];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'under-500', name: 'Under $500', range: 'Under $500' }
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' }
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' }
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name' }
    { id: 'price', name: 'Price' }
    { id: 'rating', name: 'Rating' }
    { id: 'customers', name: 'Customers' }
    { id: 'launchDate', name: 'Launch Date' },  ];
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'quantum')
          return service.category.includes('Quantum');
        if (selectedCategory === 'it')
          return (
            service.category.includes('IT') |
            service.category.includes('Infrastructure')
          );
        if (selectedCategory === 'micro-saas')
          return (
            service.category.includes('Micro SaaS') |
            service.category.includes('Marketing') |
            service.category.includes('Legal') |
            service.category.includes('Health')
          );
        if (selectedCategory === 'holographic')
          return service.category.includes('Holographic');
        return true;
      });    }
    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000')
          return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000')
          return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true;
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
          return (
            parseInt(a.price.replace(/[^0-9]/g, '')) -
            parseInt(b.price.replace(/[^0-9]/g, ''))
          );        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        case 'launchDate':
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
        default: return a.name.localeCompare(b.name)
      }
    });
    return filtered;  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  }
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <Head>
<<<<<<< HEAD
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group | Next-Generation AI, Quantum & Technology Solutions</title>
        <meta name="description" content="Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation." />
        <meta property="og:title" content="Revolutionary 2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore the future of technology with our revolutionary 2027 services showcase." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
      </Head>
      });    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        if (selectedPriceRange === 'under-500') return price < 500;


          >


<<<<<<< HEAD
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
=======
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8'>;
              Revolutionary 2027;
            </h1>;
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
              Services Showcase;
            </h2>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Experience the future of technology with our revolutionary AI,;
              Quantum Computing, and Next-Generation IT services. Each solution;
              delivers measurable ROI and transforms industries.;
            </p>;



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Contact Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>;
              <motion&& motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Phone className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.mobile}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-purple-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Mail className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.email}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-green-400'
<<<<<<< HEAD
=======
        <title>
          Revolutionary 2027 Services Showcase - Zion Tech Group
          Next-Generation AI, Quantum & Technology Solutions
        </title>
        <meta
          name='description'
          content='Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation.'
        />
        <meta
          property='og:title'
          content='Revolutionary 2027 Services Showcase - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Explore the future of technology with our revolutionary 2027 services showcase.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/revolutionary-2027-services-showcase'
        />
        <meta property='og:type' content='website' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/revolutionary-2027-services-showcase'
        />
      </Head>
      {/* Hero Section */}
      <section className='pt-24 pb-16 px-4 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto text-center relative z-10'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0.8 }}
import React, { useState, useMemo } from 'react';
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...revolutionary2027AIServices;
    ...revolutionary2027ITServices;
    ...revolutionary2027MicroSaasServices;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;
<<<<<<< HEAD
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
=======
=======
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under - 500', name: 'Under $500', range: 'Under $500' },
    { id: '500 - 2000', name: '$500 - $2, 000', range: '$500 - $2, 000' },
    { id: '2000 - 10000', name: '$2, 000 - $10, 000', range: '$2, 000 - $10, 000' },
    { id: 'over - 10000', name: 'Over $10, 000', range: 'Over $10, 000' },  ];
;
  const sort_options = [;

    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' },

=======
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true
      })
    }


  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Services',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'holographic',;
      name: 'Holographic',;
      icon: '🎭',;
      count: holographicCount,;
    },  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
<<<<<<< HEAD
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
=======
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
<<<<<<< HEAD
    { id: 'launchDate', name: 'Launch Date'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => {;
        if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true;
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
        if (selectedPriceRange === 'under-500') return price < 500,;
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000,;
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000,;
        if (selectedPriceRange === 'over-10000') return price >= 10000,;
        return true;
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
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'customers':;
          return b.customers - a.customers,;
        case 'launchDate':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),
    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <Head>
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group | Next-Generation AI, Quantum & Technology Solutions</title>
        <meta name="description" content="Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation." />
        <meta property="og:title" content="Revolutionary 2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore the future of technology with our revolutionary 2027 services showcase." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
      </Head>
      {/* Hero Section */}
      <section className='pt-24 pb-16 px-4 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto text-center relative z-10'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
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
=======
    { id: 'launchDate', name: 'Launch Date' },  ];

  const filteredServices = useMemo(() => {;
    let filtered = allServices;

    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        if (selectedCategory === 'ai') return service && service.category.includes('AI');
        if (selectedCategory === 'quantum');
          return service && service.category.includes('Quantum');
        if (selectedCategory === 'it');
          return (
            service && service.category.includes('IT') ||;
            service && service.category.includes('Infrastructure');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          );
        if (selectedCategory === 'micro-saas');
          return (

            service && service.category.includes('Micro SaaS') ||;
            service && service.category.includes('Marketing') ||;
            service && service.category.includes('Legal') ||;
            service && service.category.includes('Health');

          );
        if (selectedCategory === 'holographic');
          return service && service.category.includes('Holographic');
        return true;
      });    }


        if (selectedPriceRange === 'under-500') return price < 500;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
              Revolutionary 2027
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Showcase
            </h2>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Experience the future of technology with our revolutionary AI
              Quantum Computing, and Next-Generation IT services. Each solution
              delivers measurable ROI and transforms industries.
            </p>
            {/* Contact Information */}
<<<<<<< HEAD
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <motion.div className="flex items-center gap-2 text-cyan-400"
                whileHover={{ scale: 1.05 }}
=======


              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ type: 'spring', stiffness: 300 }}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI, Quantum Computing, and Next-Generation IT services.
              Each solution delivers measurable ROI and transforms industries.
            </p>
            {/* Contact Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>
              <motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
            {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <motion.div className="flex items-center gap-2 text-cyan-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>;
              <motion&& motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Phone className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.mobile}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-purple-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Mail className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.email}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-green-400'


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
<<<<<<< HEAD
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
<<<<<<< HEAD
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </motion.div>
<<<<<<< HEAD
            </div>

<<<<<<< HEAD
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
=======

                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <MapPin className='w-5 h-5' />;
                <span className='text-sm font-semibold'>;
                  {contactInfo && contactInfo.address}
                </span>              </motion && motion.div>;
            </div>;



            {/* CTA Buttons */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </div>
            {/* CTA Buttons */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Get Started Today
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
<<<<<<< HEAD
              </a>
<<<<<<< HEAD
            {/* CTA Buttons */}
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
              >
                <Rocket className='w-5 h-5 mr-2' />
            {/* CTA Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </Link>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======


                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                View All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;



      {/* Search and Filters */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      {/* Search and Filters */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
<<<<<<< HEAD
            </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'              />;
            </div>;



            {/* Filters */}

<<<<<<< HEAD
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'              />;
            </div>;
            {/* Filters */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </div>
            {/* Filters */}

=======
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
<<<<<<< HEAD
      {/* Search and Filters */}
      <section className='py-8 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50'>
            {/* Search Bar */}
            <div className='relative mb-6'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
      {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            {/* Filters */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              {/* Category Filter */}
            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ))}
                </select>
              </div>
              {/* Price Range Filter */}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </select>;
              </div>;


              {/* Price Range Filter */}


                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}

                </select>;
              </div>;

                  ))}

<<<<<<< HEAD
<<<<<<< HEAD
                </select>
              </div>
              {/* Price Range Filter */}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={e => setSelectedPriceRange(e.target.value)}
                  className='w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'
                >
                  {priceRanges.map(range => (                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Sort By */}
                  value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
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
              </div>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Sort By */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'
                >
                  {sortOptions.map(option => (                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Results Count */}
              <div className='flex items-end'>
                <div className='text-gray-300'>
                  <span className='text-sm'>Showing </span>
                  <span className='font-semibold text-cyan-400'>
                    {filteredServices.length}
                  </span>
                  <span className='text-sm'> of </span>
                  <span className='font-semibold text-purple-400'>
                    {allServices.length}
                  </span>
                  <span className='text-sm'> services</span>                </div>
<<<<<<< HEAD
=======


              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
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
                </select>;
              </div>;
              {/* Results Count */  } catch (error) {
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
              <div className="flex items-end">
                <div className="text-gray-300">
                  <span className="text-sm">Showing </span>
                  <span className="font-semibold text-cyan-400">{filteredServices.length}</span>
                  <span className="text-sm"> of </span>
                  <span className="font-semibold text-purple-400">{allServices.length}</span>
                  <span className="text-sm"> services</span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
                </select>;
</select>;
=======

                </select>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
=======

                </select>;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Results Count */}
              <div className='flex items-end'>;
                <div className='text-gray-300'>;
                  <span className='text-sm'>Showing </span>;
                  <span className='font-semibold text-cyan-400'>;
                    {filteredServices && filteredServices.length}
                  </span>;
                  <span className='text-sm'> of </span>;
                  <span className='font-semibold text-purple-400'>;
                    {allServices && allServices.length}
                  </span>;
                  <span className='text-sm'> services</span>                </div>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        case 'launch_date':;
          return (
            new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ());
        default: return a.name.locale_compare (b.name),
      }
    });
;
    return filtered;  }, [all_services, search_term, selected_category, selectedPriceRange, sort_by]);
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',  }
;
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>;
      <Head>;
        <title>;
          Revolutionary 2027 Services Showcase - Zion Tech Group |;
          Next - Generation AI, Quantum & Technology Solutions;
        </title>;
        <meta;
          name='description';
          content='Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting - edge solutions with proven ROI and real - world implementation.';
        />;
        <meta;
          property='og:title';
          content='Revolutionary 2027 Services Showcase - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Explore the future of technology with our revolutionary 2027 services showcase.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / revolutionary - 2027 - services - showcase';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / revolutionary - 2027 - services - showcase';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 24 pb - 16 px - 4 relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto text - center relative z - 10'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 6xl md:text - 8xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 8'>;
              Revolutionary 2027;
            </h1>;
            <h2 className='text - 4xl md:text - 6xl font - bold text - white mb - 6'>;
              Services Showcase;
            </h2>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;
              Experience the future of technology with our revolutionary AI,
              Quantum Computing, and Next - Generation IT services. Each solution;
              delivers measurable ROI and transforms industries.;
            </p>;
            {/* Contact Information */}
            <div className='flex flex - wrap items - center justify - center gap - 6 text - center mb - 8'>;
              <motion.div;
                className='flex items - center gap - 2 text - cyan - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </motion.div>;
              <motion.div;
                className='flex items - center gap - 2 text - purple - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </motion.div>;
              <motion.div;
                className='flex items - center gap - 2 text - green - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>              </motion.div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Get Started Today;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                View All Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filters */}
      <section className='py - 8 px - 4'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='bg - black / 40 backdrop - blur - lg rounded - 2xl p - 6 border border - gray - 700 / 50'>;
            {/* Search Bar */}
            <div className='relative mb - 6'>;
              <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search revolutionary services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 12 pr - 4 py - 4 bg - gray - 900 / 50 border border - gray - 600 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent'              />;
            </div>;
            {/* Filters */}
            <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
              {/* Category Filter */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Category;
                </label>;
                <select;
                  value={selected_category}
                  on_change={e => setSelectedCategory (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {categories.map (category => (                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>))}
                </select>;
              </div>;
              {/* Price Range Filter */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Price Range;
                </label>;
                <select;
                  value={selectedPriceRange}
                  on_change={e => setSelectedPriceRange (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {price_ranges.map (range => (                    <option key={range.id} value={range.id}>;
                      {range.name}
                    </option>))}
                </select>;
              </div>;
              {/* Sort By */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Sort By;
                </label>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {sort_options.map (option => (                    <option key={option.id} value={option.id}>;
                      {option.name}
                    </option>))}
                </select>;
              </div>;
              {/* Results Count */}
              <div className='flex items - end'>;
                <div className='text - gray - 300'>;
                  <span className='text - sm'>Showing </span>;
                  <span className='font - semibold text - cyan - 400'>;
                    {filtered_services.length}
                  </span>;
                  <span className='text - sm'> of </span>;
                  <span className='font - semibold text - purple - 400'>;
                    {all_services.length}
                  </span>;
                  <span className='text - sm'> services</span>                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          )}

                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {service.tagline  } catch (error) {
<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
      {/* Services Grid */}
      <section className='py-12 px-4'>
        <div className='max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
      {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className='group'
                  >
                    <div className='h-full bg-black/40 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm'>
                      {/* Service Header */}
                      <div className='p-6'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='text-4xl'>{service.icon}</div>
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
                    transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    whileHover={{ y: -10, scale: 1.02 }} className="group">
                    <div className="h-full bg-black/40 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                      {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                          {service.name}
                        </h3>
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2'>                          {service.tagline}
                        </p>
                        {/* Price */}
                        <div className='flex items-baseline gap-2 mb-4'>
                          <span className='text-3xl font-bold text-white'>
                            {service.price}
                          </span>
                          <span className='text-gray-400'>
                            {service.period}
                          </span>
                        </div>
                        {/* Description */}
                        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>                          {service.description}
                        </p>
                        {/* Features */}
                        <div className='mb-4'>
                          <h4 className='text-sm font-semibold text-gray-200 mb-2'>
                            Key Features:
                          </h4>
                          <ul className='space-y-1'>
                            {service.features
                              .slice(0, 3)
                              .map((feature, idx) => (
                                <li
                                  key={idx}
                                  className='flex items-center gap-2 text-xs text-gray-400'
                                >
                                  <CheckCircle className='w-3 h-3 text-emerald-400 flex-shrink-0' />
                                  <span className='line-clamp-1'>
                                    {feature}
                                  </span>
                                </li>
                              ))}                          </ul>
                        </div>
                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 mb-4 text-center'>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {service.tagline  } catch (error) {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </p>;
                        {/* Price */  } catch (error) {
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
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        {/* Description */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </p>;
                        {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        </div>;
=======

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                        </p>
=======
                        </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2'>                          {service && service.tagline}
                        </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {/* Price */}
                        <div className='flex items-baseline gap-2 mb-4'>;
                          <span className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </span>;
                          <span className='text-gray-400'>;
                            {service && service.period}
                          </span>;
                        </div>;
<<<<<<< HEAD
                        {/* Description */}
                        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>                          {service && service.description}
                        </p>;
                        {/* Features */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                        {/* Description */}
                        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>                          {service && service.description}
                        </p>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        {/* Features */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
<<<<<<< HEAD
<<<<<<< HEAD
                            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </ul>;
                        </div>;
                        {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{service.reviews}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
                        {/* Category Badge */}
                        <div className='mb-4'>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}
                          >                            {service.category}
                          </span>
                        </div>
                        {/* Action Buttons */}
                        <div className='flex gap-2'>
                          <a
                            href={service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
                          >
                            <ArrowRight className='w-4 h-4 mr-1' />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {/* Category Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>
                            {service.category}
                          </span>
                        </div>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>
                            {service.category}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                          </span>
                        </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service && service.color} text-white`}>                            {service && service.category}
                          </span>;
                        </div>;


                        {/* Action Buttons */}

                        {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex gap-2">
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />


                            Learn More
                          </Link>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <a
                            href={service && service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'>;
                            <ArrowRight className='w-4 h-4 mr-1' />;
                            Learn More;
                          </a>;
                          <a
                            href='/contact'
                            className='px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300'>;
                            <MessageSquare className='w-4 h-4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion && motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD
className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service && service.color} text-white`}>                            {service && service.category}
                          </span>;
                        </div>;
                        {/* Action Buttons */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div className="flex gap-2">
                          <a 
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </a>
                          <a 
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </a>
<<<<<<< HEAD
<<<<<<< HEAD
                        {/* Category Badge */}
                        <div className='mb-4'>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}
                          >                            {service.category}
                          </span>
                        </div>
                        {/* Action Buttons */}
                        <div className='flex gap-2'>
                          <a
                            href={service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
                          >
                            <ArrowRight className='w-4 h-4 mr-1' />
                        {/* Category Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>
                            {service.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </span>;
                        </div>;
                        {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex gap-2">
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </Link>
                          <a
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </Link>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>
                      </div>
                    </div>
                  </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
                ))}
=======

                ))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======

                ))}
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
              </div>;
<<<<<<< HEAD
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center py-16'
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-gray-400 mb-6'>
                  Try adjusting your search criteria or filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                >                  Clear Filters

                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
=======
            ) : (;
              <motion&& motion.div
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>;
            ) : (;
              <motion&& motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            </div>;
                            <div className='text - xs text - gray - 400'>Reviews</div>                          </div>;
                        </div>;
                        {/* Category Badge */}
                        <div className='mb - 4'>;
                          <span;
                            className={`inline - block px - 3 py - 1 rounded - full text - xs font - semibold ${service.color} text - white`}
                          >                            {service.category}
                          </span>;
                        </div>;
                        {/* Action Buttons */}
                        <div className='flex gap - 2'>;
                          <a;
                            href={service.link}
                            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm py - 2 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <ArrowRight className='w - 4 h - 4 mr - 1' />;
                            Learn More;
                          </a>;
                          <a;
                            href='/contact';
                            className='px - 4 py - 2 border border - gray - 600 text - gray - 200 hover:bg - gray - 700 hover:border - gray - 500 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <MessageSquare className='w - 4 h - 4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>) : (
              <motion.div;


      {/* Contact CTA Section */}
      <section className='py-16 px-4'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the future of technology with our revolutionary 2027
              services. Each solution is designed to deliver measurable ROI and
              competitive advantage.
            </p>

            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='text - center py - 16';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400 mb - 6'>;
                  Try adjusting your search criteria or filters;
                </p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                    setSelectedPriceRange ('all');
                  }}
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                >                  Clear Filters;
                </button>;
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </section>;
      {/* Contact CTA Section */}
      <section className='py - 16 px - 4'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg - gradient - to - r from - cyan - 900 / 50 to - purple - 900 / 50 backdrop - blur - lg rounded - 3xl p - 12 border border - cyan - 500 / 30';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Join the future of technology with our revolutionary 2027;
              services. Each solution is designed to deliver measurable ROI and;
              competitive advantage.;
            </p>;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services. 
              Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>
      {/* Contact CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            ) : (;
              <motion.div;
                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className='py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                animate={{ opacity: 1 }} className="text-center py-16">;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>;
                <button;
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">;
                  Clear Filters;
                </button>;
              </motion.div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </AnimatePresence>;
        </div>;
      </section>;
      {/* Contact CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-4">
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
            viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services.
              Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 mb-8'>
              <div className='flex items-center gap-2 text-cyan-400'>
                <Phone className='w-5 h-5' />
                <span className='font-semibold'>{contactInfo.mobile}</span>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'
              >
                <Rocket className='w-5 h-5 mr-2' />
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
<<<<<<< HEAD
                Start Your Transformation
              </Link>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
=======
<<<<<<< HEAD
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                Start Your Transformation
<<<<<<< HEAD
</a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
<<<<<<< HEAD
<<<<<<< HEAD

                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;

=======


                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                Explore All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </UltraQuantumHolographicBackground>;
  );


=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
);
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex - wrap items - center justify - center gap - 6 mb - 8'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Start Your Transformation;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                Explore All Services;
<<<<<<< HEAD
);
  )
      <section className="py-16 px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
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
            viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join the future of technology with our revolutionary 2027 services.;
              Each solution is designed to deliver measurable ROI and competitive advantage.;
            </p>;
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">;
              <div className="flex items-center gap-2 text-cyan-400">;
                <Phone className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center gap-2 text-purple-400">;
                <Mail className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.email}</span>;
              </div>;
              <div className="flex items-center gap-2 text-green-400">;
                <MapPin className="w-5 h-5" />;
                <span className="text-sm font-semibold">{contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex flex-wrap items-center justify-center gap-4">;
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">;
                <Rocket className="w-5 h-5 mr-2" />;
                Start Your Transformation;
              </a>;
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">;
                <Globe className="w-5 h-5 mr-2" />;
                Explore All Services;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </UltraQuantumHolographicBackground>;
  );
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
