

=======
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check;
  Brain, Atom, Shield, Building, Globe;
  Users, TrendingUp, Award, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',

  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025
  ...innovativeMicroSaasExpansion2025
  ...cuttingEdgeITInfrastructureServices,];  website: 'https://ziontechgroup.com'
}
const allServices = [
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices

];
const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',

    description: 'Complete portfolio of advanced services'
  }
  {
    id: 'enterprise'
    name: 'Enterprise Solutions'
    icon: <Building className="w-6 h-6" />
    color: 'from-blue-500 to-purple-500'
    description: 'Enterprise-grade AI and IT solutions'
  }
  {
    id: 'micro-saas'
    name: 'Micro SAAS'
    icon: <Globe className="w-6 h-6" />
    color: 'from-green-500 to-emerald-500'
    description: 'Innovative micro SAAS solutions'
  }
  {
    id: 'infrastructure'
    name: 'IT Infrastructure'
    icon: <Shield className="w-6 h-6" />
    color: 'from-orange-500 to-red-500'
    description: 'Cutting-edge infrastructure services'
  }
  {
    id: 'ai-ml'
    name: 'AI & Machine Learning'
    icon: <Brain className="w-6 h-6" />
    color: 'from-purple-500 to-pink-500'
    description: 'Advanced AI and ML platforms'
  }
  {
    id: 'quantum'
    name: 'Quantum Computing'
    icon: <Atom className="w-6 h-6" />
    color: 'from-violet-500 to-indigo-500'
    description: 'Quantum computing solutions'
  }

];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other'
};


const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;

  Search,;
  Grid,;
  List,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Check,;
  Brain,;
  Atom,;
  Shield,;
  Building,;
  Globe,;
  Users,;
  TrendingUp,;
  Award,;
  Phone,;
  Mail,;
  MapPin,;
} from 'lucide-react';
// Mock service data;
const advancedEnterpriseServices2025 = [;
  {;
    id: "enterprise-1",;
    title: "Enterprise AI Solutions",;
    description: "Comprehensive AI implementation for large enterprises",;
    category: "enterprise",;
    price: "$50,000+",;
    rating: 4 && 4.9,;
    tags: ["AI", "Machine Learning", "Enterprise"],;
    color: "from-blue-500 to-purple-500",;
    icon: "🤖",;
  },;
];
const innovativeMicroSaasExpansion2025 = [;
  {;
    id: "micro-1",;
    title: "Micro SaaS Platform",;
    description: "Lightweight SaaS solutions for small businesses",;
    category: "micro-saas",;
    price: "$99/month",;
    rating: 4 && 4.7,;
    tags: ["SaaS", "Micro Services", "Cloud"],;
    color: "from-green-500 to-teal-500",;
    icon: "⚡",;
  },;
];
const cuttingEdgeITInfrastructureServices = [;
  {;
    id: "infra-1",;
    title: "Cloud Infrastructure",;
    description: "Scalable cloud infrastructure solutions",;
    category: "infrastructure",;
    price: "$5,000/month",;
    rating: 4 && 4.8,;
    tags: ["Cloud", "Infrastructure", "DevOps"],;
    color: "from-orange-500 to-red-500",;
    icon: "☁️",;
  },;
];// Import our new service data;
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
  return 'Contact for pricing'
};
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return []

};
const allServices = [;
  ...advancedEnterpriseServices2025,;
  ...innovativeMicroSaasExpansion2025,;
  ...cuttingEdgeITInfrastructureServices,];  website: 'https://ziontechgroup && ziontechgroup.com';
};
const allServices = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;



=======
export default function AdvancedServicesShowcase() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);


  useEffect(() => {;
    let filtered = allServices;
    // Filter by category;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;

        const category = getServiceCategory(service).toLowerCase();


  }, [selectedCategory, searchTerm]);
  const ServiceCard = ({ service }: { service: any }) => (;
    <motion&& motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${


            ))}

            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{getServiceFeatures(service).length - 3} more features
              </span>

            )}

        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.roi}

          </p>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.marketPosition}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  )
  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
          </div>;
        </div>;
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
            ROI & Benefits:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            {service && service.roi}
          </p>;
        </div>;
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
            Market Position:;
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className='flex items-center justify-between'>;
          <a
            href={service && service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
            Learn More;
            <ArrowRight className='w-4 h-4' />;
          </a>;
          <a
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>            {service && service.roi}
          </p>;
        </div>;
        <div className="mb-6">;
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>;
          <p className="text-sm text-gray-600 dark:text-gray-400">;
            {service && service.marketPosition}
          </p>;
        </div>;
        <div className="flex items-center justify-between">;
          <a
            href={service && service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
            Learn More;
            <ArrowRight className="w-4 h-4" />;
          </a>;
          <a
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300">;
import React, { useState, useEffect } from './react';
import { motion, AnimatePresence  } from './framer-motion';
  Search,
  Grid,
  List,
  Star,
  CheckCircle,
  ArrowRight,
  Check,
  Brain,
  Atom,
  Shield,
  Building,
  Globe,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
;
// Mock service data;
const advancedEnterpriseServices2025 = [;
  {
    id: "enterprise - 1",
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI implementation for large enterprises",
    category: "enterprise",
    price: "$50, 000+",
    rating: 4.9,
    tags: ["AI", "Machine Learning", "Enterprise"],
    color: "from - blue - 500 to - purple - 500",
    icon: "🤖",
  },
];
;
const innovativeMicroSaasExpansion2025 = [;
  {
    id: "micro - 1",
    title: "Micro SaaS Platform",
    description: "Lightweight SaaS solutions for small businesses",
    category: "micro - saas",
    price: "$99 / month",
    rating: 4.7,
    tags: ["SaaS", "Micro Services", "Cloud"],
    color: "from - green - 500 to - teal - 500",
    icon: "⚡",
  },
];
;
const cuttingEdgeITInfrastructureServices = [;
  {
    id: "infra - 1",
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure solutions",
    category: "infrastructure",
    price: "$5, 000 / month",
    rating: 4.8,
    tags: ["Cloud", "Infrastructure", "DevOps"],
    color: "from - orange - 500 to - red - 500",
    icon: "☁️",
  },
];// Import our new service data;
import { advancedEnterpriseServices2025 } from '../data / 2025 - advanced - enterprise - services - expansion';
import { innovativeMicroSaasExpansion2025 } from '../data / 2025 - innovative - micro - saas - expansion';
import { cuttingEdgeITInfrastructureServices } from '../data / 2025 - cutting - edge - it - infrastructure';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const all_services = [;
  ...advancedEnterpriseServices2025,
  ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices, ];  website: 'https://ziontechgroup.com';
}
;
const all_services = [;
  ...advancedEnterpriseServices2025;
      ...innovativeMicroSaasExpansion2025;
  ...cuttingEdgeITInfrastructureServices;
const categories = [;
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className='w - 6 h - 6' />,
    color: 'from - gray - 500 to - slate - 500',
    description: 'Complete portfolio of advanced services',    color: 'from - gray - 500 to - slate - 500',
    description: 'Complete portfolio of advanced services';
  }
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w - 6 h - 6" />,
    color: 'from - blue - 500 to - purple - 500',
    description: 'Enterprise - grade AI and IT solutions';
  }
  {
    id: 'micro - saas',
    name: 'Micro SAAS',
    icon: <Globe className="w - 6 h - 6" />,
    color: 'from - green - 500 to - emerald - 500',
    description: 'Innovative micro SAAS solutions';
  }
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w - 6 h - 6" />,
    color: 'from - orange - 500 to - red - 500',
    description: 'Cutting - edge infrastructure services';
  }
  {
    id: 'ai - ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w - 6 h - 6" />,
    color: 'from - purple - 500 to - pink - 500',
    description: 'Advanced AI and ML platforms';
  }
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className="w - 6 h - 6" />,
    color: 'from - violet - 500 to - indigo - 500',
    description: 'Quantum computing solutions',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className='w - 6 h - 6' />,
    color: 'from - blue - 500 to - purple - 500',
    description: 'Enterprise - grade AI and IT solutions',
  },
  {
    id: 'micro - saas',
    name: 'Micro SAAS',
    icon: <Globe className='w - 6 h - 6' />,
    color: 'from - green - 500 to - emerald - 500',
    description: 'Innovative micro SAAS solutions',
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className='w - 6 h - 6' />,
    color: 'from - orange - 500 to - red - 500',
    description: 'Cutting - edge infrastructure services',
  },
  {
    id: 'ai - ml',
    name: 'AI & Machine Learning',
    icon: <Brain className='w - 6 h - 6' />,
    color: 'from - purple - 500 to - pink - 500',
    description: 'Advanced AI and ML platforms',
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className='w - 6 h - 6' />,
    color: 'from - violet - 500 to - indigo - 500',
    description: 'Quantum computing solutions',
  }, ];
;
const getServiceCategory = (service: any) =>: any {
  // Check condition
if (return service.category) {
  $2
}
  return 'Other';}    description: 'Quantum computing solutions';
  }
];
;
const getServiceCategory = (service: any) =>: any {
  // Check condition
if (return service.category) {
  $2
}
  return 'Other';  return 'Other';
}
;
const getServicePricing = (service: any) =>: any {
  // Check condition
if (return `${service.price}${service.period}`) {
  $2
}
  // Check condition
if (return service.pricing.starter) {
  $2
}
  // Check condition
if (return `$${service.pricing.monthly}/month`) {
  $2
}
  return 'Contact for pricing';}  return 'Contact for pricing';
}
;
const getServiceFeatures = (service: any) =>: any {
  // Check condition
if (return service.features) {
  $2
}
  // Check condition
if (return service.key_features) {
  $2
}
  return [];
}  return [];
}
;
  const [selected_category, setSelectedCategory] = useState ('all');
  const [search_term, setSearchTerm] = useState ('');
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtered_services, setFilteredServices] = useState (all_services);
;
  useEffect (() => {
    let filtered = all_services;
;
    // Filter by category;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        const category = getServiceCategory (service).toLowerCase ();
        // Check condition
if (
          return () {
  $2
}
            category.includes ('enterprise') ||;
            category.includes ('legal') ||;
            category.includes ('financial'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('marketing') ||;
            category.includes ('social') ||;
            category.includes ('customer') ||;
            category.includes ('project'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('infrastructure') ||;
            category.includes ('network') ||;
            category.includes ('data center') ||;
            category.includes ('edge'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('ai') ||;
            category.includes ('machine learning') ||;
            category.includes ('nlp') ||;
            category.includes ('ml'));
        // Check condition
if (
          return () {
  $2
}
            category.includes ('quantum') ||;
            category.includes ('quantum - resistant'));
        return false;
      });
    }
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
          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          getServiceCategory (service);
            .toLowerCase ();
            .includes (search_term.toLowerCase ()));
    }
    setFilteredServices (filtered);  }, [selected_category, search_term]);    }
    // Filter by search term;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service =>;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        getServiceCategory (service).toLowerCase ().includes (search_term.toLowerCase ()));
    }
    setFilteredServices (filtered);
  }, [selected_category, search_term]);
;
  const ServiceCard = ({ service }: { service: any }) =>: any (
    <motion.div;
      initial={{ opacity: 0, coordinate_y: 20 }}
      animate={{ opacity: 1, coordinate_y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg - white dark:bg - gray - 800 rounded - 2xl shadow - lg hover:shadow - 2xl transition - all duration - 300 overflow - hidden border border - gray - 200 dark:border - gray - 700 ${
        service.popular ? 'ring - 2 ring - blue - 500' : '';
      }`}
    >;
      {service.popular && (
        <div className='absolute top - 4 right - 4 bg - blue - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold flex items - center gap - 1'>;
          <Star className='w - 4 h - 4' />;
          Popular;
        </div>)}
      <div;
        className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}
      >;
        <span className='text - 4xl'>{service.icon}</span>;
      </div>;
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 dark:text - white mb - 2'>;
            {service.name}
          </h3>;
        </div>;
        <p className='text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2'>;
          {service.tagline}
        </p>;
        <div className='flex items - center justify - between mb - 4'>;
          <span className='text - 2xl font - bold text - gray - 900 dark:text - white'>;
            {getServicePricing (service)}
          </span>;
          <span className='text - sm text - gray - 500 dark:text - gray - 400'>;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className='space - y-3 mb - 6'>;
          <div className='flex items - center gap - 2'>;
            <CheckCircle className='w - 4 h - 4 text - green - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <Users className='w - 4 h - 4 text - blue - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
              {service.customers ? service.customers.toLocaleString () : '1000'}+;
              customers;
            </span>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <Star className='w - 4 h - 4 text - yellow - 500' />;
            <span className='text - sm text - gray - 600 dark:text - gray - 400'>              {service.rating}/5 ({service.reviews} reviews);
            </span>;
          </div>;
        </div>          Popular;
        </div>)}
      <div className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}>;
        <span className="text - 4xl">{service.icon}</span>;
      </div>;
      <div className="p - 6">;
        <div className="flex items - start justify - between mb - 3">;
          <h3 className="text - xl font - bold text - gray - 900 dark:text - white mb - 2">;
            {service.name}
          </h3>;
        </div>;
        <p className="text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2">;
          {service.tagline}
        </p>;
        <div className="flex items - center justify - between mb - 4">;
          <span className="text - 2xl font - bold text - gray - 900 dark:text - white">;
            {getServicePricing (service)}
          </span>;
          <span className="text - sm text - gray - 500 dark:text - gray - 400">;
            {service.trial_days} day trial;
          </span>;
        </div>;
        <div className="space - y-3 mb - 6">;
          <div className="flex items - center gap - 2">;
            <CheckCircle className="w - 4 h - 4 text - green - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.setup_time} setup;
            </span>;
          </div>;
          <div className="flex items - center gap - 2">;
            <Users className="w - 4 h - 4 text - blue - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.customers ? service.customers.toLocaleString () : '1000'}+ customers;
            </span>;
          </div>;
          <div className="flex items - center gap - 2">;
            <Star className="w - 4 h - 4 text - yellow - 500" />;
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;
              {service.rating}/5 ({service.reviews} reviews);
            </span>;
          </div>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            Key Features:;
          </h4>;
          <div className='space - y-1'>;
            {getServiceFeatures (service);
              .slice (0, 3);
              .map ((feature: string, index: number) => (
                <div key={index} className='flex items - center gap - 2'>;
                  <Check className='w - 3 h - 3 text - green - 500' />;
                  <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
                    {feature}
                  </span>;
                </div>))}
            {getServiceFeatures (service).length > 3 && (
              <span className='text - sm text - gray - 500 dark:text - gray - 400'>                +{getServiceFeatures (service).length - 3} more features;
        <div className="mb - 6">;
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Key Features:</h4>;
          <div className="space - y-1">;
            {getServiceFeatures (service).slice (0, 3).map ((feature: string, index: number) => (
              <div key={index} className="flex items - center gap - 2">;
                <Check className="w - 3 h - 3 text - green - 500" />;
                <span className="text - sm text - gray - 600 dark:text - gray - 400">{feature}</span>;
              </div>))}
            {getServiceFeatures (service).length > 3 && (
              <span className="text - sm text - gray - 500 dark:text - gray - 400">;
              </span>)}
          </div>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            ROI & Benefits:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {service.roi}
          </p>;
        </div>;
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
            Market Position:;
          </h4>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {service.market_position}
          </p>;
        </div>;
        <div className='flex items - center justify - between'>;
          <a;
            href={service.link}
            className='inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
          >;
            Learn More;
            <ArrowRight className='w - 4 h - 4' />;
          </a>;
          <a;
            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
            className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'          >            {service.roi}
          </p>;
        </div>;
        <div className="mb - 6">;
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Market Position:</h4>;
          <p className="text - sm text - gray - 600 dark:text - gray - 400">;
            {service.market_position}
          </p>;
        </div>;
        <div className="flex items - center justify - between">;
          <a;
            href={service.link}
            className="inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
          >;
            Learn More;
            <ArrowRight className="w - 4 h - 4" />;
          </a>;
          <a;
            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
            className="inline - flex items - center gap - 2 bg - gray - 100 dark: bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300";
          >;
            Contact;
          </a>;
        </div>;
      </div>;


                Contact Sales;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      />;


      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>;
        <div className='absolute inset-0 bg-black opacity-20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <div className='text-center'>;
            <motion&& motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-4xl md:text-6xl font-bold text-white mb-6'>;
              2025 Advanced Services Showcase;
            </motion && motion.h1>;
            <motion&& motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto'>;
              Discover our comprehensive portfolio of real, innovative, and;
              market-ready solutions. From AI-powered enterprise services to;
              cutting-edge quantum computing platforms.;
            </motion && motion.p>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}


              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>30+ New Services</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />;
                <span>Real Implementations</span>;
              </div>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>Market Validated</span>              <div className="flex items-center gap-2 text-white">;
                <CheckCircle className="w-5 h-5 text-green-300" />;
                <span>Market Validated</span>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;



      {/* Contact Information Banner */}

=======
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">

              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Services Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">;
                Get Quote;
                <ArrowRight className="w-4 h-4" />;
              </a>;
              <a
                href={contactInfo && contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"


                Visit Website;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent';
                />;
              </div>;
            </div>;
            <div className='flex items-center gap-4'>;
              <div className='flex items-center gap-2'>;

                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}
                >;
                  <Grid className='w-5 h-5' />                </button>                <button
                  onClick={() => setViewMode('list')}

                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid' ;
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' ;
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';

                  }`}
                >;
                  <Grid className="w-5 h-5" />;
                </button>;
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600';
                  }`}


          {/* Category Filters */}
          <div className="mt-6">;
            <div className="flex flex-wrap gap-3">;
              {categories && categories.map((category) => (;
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                    selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r text-white shadow-lg';
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';
                  } ${category && category.color}`}
                >;
                  {category && category.icon}
                  {category && category.name}
                </button>;

=======
                </button>
              </div>
            </div>
          </div>


                <button


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r text - white shadow - lg';
                      : 'bg - white dark:bg - gray - 800 text - gray - 700 dark:text - gray - 300 border border - gray - 200 dark:border - gray - 600 hover:bg - gray - 50 dark:hover:bg - gray - 700';
                  } ${category.color}`}
                >;
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

            </div>;
          </div>;
        </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Results Summary */}


                </div>;
              </div>;
            </div>;
          </div>;
        </div>;

=======
        <div className="space-y-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {viewMode === 'grid' ? (

=======
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filteredServices.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              ) : (
                <div className='space-y-6'>
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service) => (
                  {filteredServices.map(service => (                    <ServiceList key={service.id} service={service} />

                    <ServiceList key={service.id} service={service} />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>

        </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <div className='mt-16 text-center'>;
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white'>;
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement these;
              cutting-edge solutions. Get in touch today to discuss your;
              specific needs and discover how we can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>;
                Start Your Transformation;
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?

            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions.
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
