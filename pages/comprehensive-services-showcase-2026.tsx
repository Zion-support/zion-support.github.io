<<<<<<< HEAD

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
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import {;
  Search,;
  Filter,;
  Star,;
  Users,;
  TrendingUp,;
  Clock,;
  Zap,;
  Shield,;
  Cloud,;
  Brain,;
  Database,;
  Globe,;
  Robot,;
  Cube,;
  Sparkles,;
} from 'lucide-react';
interface Service {;
import { motion } from 'framer-motion';
import { innovativeMicroSaasServices2026 } from '../data / 2026 - innovative - micro - saas - expansion';
import { specializedITSolutions2026 } from '../data / 2026 - specialized - it - solutions';
import { emergingTechServices2026 } from '../data / 2026 - emerging - tech - services';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';
import { innovativeMicroSaasServices2026  } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026  } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';

<<<<<<< HEAD
import {
  Search
  Filter
  Star
  Users
  TrendingUp
  Clock
  Zap
  Shield
  Cloud
  Brain
  Database
  Globe
  Robot
  Cube
  Sparkles;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
import React, { useState, useEffect } from 'react';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

interface Service {
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
=======
import { innovativeMicroSaasServices2026 } from '../data / 2026 - innovative - micro - saas - expansion';
import { specializedITSolutions2026 } from '../data / 2026 - specialized - it - solutions';
import { emergingTechServices2026 } from '../data / 2026 - emerging - tech - services';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Clock,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Robot,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Cube,
  Sparkles,
} from 'lucide-react';
;
interface Service {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { motion } from 'framer-motion';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';

<<<<<<< HEAD
<<<<<<< HEAD
  Cube,;
  Sparkles,;
} from 'lucide-react';

interface Service {
import {;
  Search, Filter, Star, Users, TrendingUp,;
  Clock, Zap, Shield, Cloud, Brain,;
  Database, Globe, Robot, Cube, Sparkles;
} from 'lucide-react',;
interface Service {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
<<<<<<< HEAD
<<<<<<< HEAD
  market_size: string;
  growth_rate: string;
  contact_info: {
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];

  market_size: string;
  growth_rate: string;
  contact_info: {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    mobile: string;
    email: string;
    address: string;
    website: string;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },;


  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
<<<<<<< HEAD
  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;
  customers: number;
  rating: number;
  reviews: number;
const ComprehensiveServicesShowcase2026: React.FC = () => {;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    mobile: string;
    email: string;
    address: string;

    website: string;
  }

  },;
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
=======
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  customers: number;
  rating: number;

  reviews: number;
const ComprehensiveServicesShowcase2026: React.FC = () => {;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Clock, Zap, Shield, Cloud, Brain, 
  Database, Globe, Robot, Cube, Sparkles
} from 'lucide-react';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  contactInfo: {
<<<<<<< HEAD
=======
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    mobile: string,
    email: string,
    address: string,
    website: string
<<<<<<< HEAD
},
=======
  
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}
<<<<<<< HEAD
const ComprehensiveServicesShowcase2026: React.FC = () => {
<<<<<<< HEAD
  const allServices = [
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;
    ...emergingTechServices2026
  ];
  const categories = [
=======

const ComprehensiveServicesShowcase2026: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const allServices = [
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;

    ...emergingTechServices2026
  ];
  const categories = [


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const allServices = [;
    ...innovativeMicroSaasServices2026,;
    ...specializedITSolutions2026,;
    ...emergingTechServices2026,;
  ];
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const categories = [;
    'all',;
    'Business Intelligence & Analytics',;
    'Content Creation & Marketing',;
    'Customer Service & Support',;
    'E-commerce & Retail',;
    'HR & Recruitment',;
    'Financial Management',;
    'Project Management',;
    'Education & Training',;
    'Healthcare & Medical',;
    'Cloud Infrastructure & DevOps',;
    'Cybersecurity & Threat Intelligence',;
    'Data Engineering & Analytics',;
    'API Management & Integration',;
    'Network Monitoring & Management',;
    'Database Management & Optimization',;
    'IT Service Management',;
    'Backup & Disaster Recovery',;
    'Quantum Computing & AI',;
    'Blockchain & Web3',;
    'Internet of Things (IoT)',;
    'Edge Computing & 5G',;
    'AR/VR & Immersive Technology',;
    'Robotics & Automation',;
    'Digital Twin & Simulation',  ];
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    'allBusiness Intelligence & AnalyticsContent Creation & MarketingCustomer Service & SupportE-commerce & RetailHR & RecruitmentFinancial ManagementProject Management';
    'Education & TrainingHealthcare & MedicalCloud Infrastructure & DevOpsCybersecurity & Threat IntelligenceData Engineering & AnalyticsAPI Management & IntegrationNetwork Monitoring & ManagementDatabase Management & Optimization';
    'IT Service ManagementBackup & Disaster RecoveryQuantum Computing & AIBlockchain & Web3Internet of Things (IoT)Edge Computing & 5GAR/VR & Immersive TechnologyRobotics & Automation';
    'Digital Twin & Simulation'
  ];
<<<<<<< HEAD
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-400', label: '$200 - $400' },
    { value: '400-600', label: '$400 - $600' },
    { value: '600+', label: '$600+' }
];
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'all' || (() => {
      const price = parseInt(service.price.replace('$', ''));
      switch (selectedPriceRange) {
        case '0-100': return price <= 100;
        case '100-200': return price > 100 && price <= 200;
        case '200-400': return price > 200 && price <= 400;
        case '400-600': return price > 400 && price <= 600;
        case '600+': return price > 600;
        default: return true
      }
    })();
    return matchesSearch && matchesCategory && matchesPrice
  });
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {;
    mobile: string;
    email: string;
    address: string;

    website: string;
  }

  },;
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;

  reviews: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
const ComprehensiveServicesShowcase2026: React.FC = () => {;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
<<<<<<< HEAD
  const allServices = [
    ...innovativeMicroSaasServices2026
    ...specializedITSolutions2026
    ...emergingTechServices2026
  ];
  const categories = [
    'all'
    'Business Intelligence & Analytics'
    'Content Creation & Marketing'
    'Customer Service & Support'
    'E-commerce & Retail'
    'HR & Recruitment'
    'Financial Management'
    'Project Management'
    'Education & Training'
    'Healthcare & Medical'
    'Cloud Infrastructure & DevOps'
    'Cybersecurity & Threat Intelligence'
    'Data Engineering & Analytics'
    'API Management & Integration'
    'Network Monitoring & Management'
    'Database Management & Optimization'
    'IT Service Management'
    'Backup & Disaster Recovery'
    'Quantum Computing & AI'
    'Blockchain & Web3'
    'Internet of Things (IoT)'
    'Edge Computing & 5G'
    'AR/VR & Immersive Technology'
    'Robotics & Automation'
    'Digital Twin & Simulation',  ];
  const priceRanges = [
    { value: 'all', label: 'All Prices' }
    { value: '0-100', label: '$0 - $100' }
    { value: '100-200', label: '$100 - $200' }
    { value: '200-400', label: '$200 - $400' }
    { value: '400-600', label: '$400 - $600' }
    { value: '600+', label: '$600+' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesPrice =
      selectedPriceRange === 'all' |
      (() => {
        const price = parseInt(service.price.replace('$', ''));
        switch (selectedPriceRange) {
          case '0-100':
            return price <= 100;
          case '100-200':
            return price > 100 && price <= 200;
          case '200-400':
            return price > 200 && price <= 400;
          case '400-600':
            return price > 400 && price <= 600;
          case '600+':
            return price > 600;
          default: return true
        }
      })();
    return matchesSearch && matchesCategory && matchesPrice;  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'price-low':
        return (
          parseInt(a.price.replace('$', '')) -
          parseInt(b.price.replace('$', ''))
        );
      case 'price-high':
        return (
          parseInt(b.price.replace('$', '')) -
          parseInt(a.price.replace('$', ''))
        );      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;    }
  });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  const allServices = [
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;

    ...emergingTechServices2026
  ];
  const categories = [


<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Business Intelligence & Analytics': <Database className='w-5 h-5' />
      'Content Creation & Marketing': <Sparkles className='w-5 h-5' />
      'Customer Service & Support': <Users className='w-5 h-5' />
      'E-commerce & Retail': <Globe className='w-5 h-5' />
      'HR & Recruitment': <Users className='w-5 h-5' />
      'Financial Management': <TrendingUp className='w-5 h-5' />
      'Project Management': <Clock className='w-5 h-5' />
      'Education & Training': <Brain className='w-5 h-5' />
      'Healthcare & Medical': <Shield className='w-5 h-5' />
      'Cloud Infrastructure & DevOps': <Cloud className='w-5 h-5' />
      'Cybersecurity & Threat Intelligence': <Shield className='w-5 h-5' />
      'Data Engineering & Analytics': <Database className='w-5 h-5' />
      'API Management & Integration': <Zap className='w-5 h-5' />
      'Network Monitoring & Management': <Globe className='w-5 h-5' />
      'Database Management & Optimization': <Database className='w-5 h-5' />
      'IT Service Management': <Users className='w-5 h-5' />
      'Backup & Disaster Recovery': <Cloud className='w-5 h-5' />
      'Quantum Computing & AI': <Brain className='w-5 h-5' />
      'Blockchain & Web3': <Cube className='w-5 h-5' />
      'Internet of Things (IoT)': <Zap className='w-5 h-5' />
      'Edge Computing & 5G': <Globe className='w-5 h-5' />
      'AR/VR & Immersive Technology': <Cube className='w-5 h-5' />
      'Robotics & Automation': <Robot className='w-5 h-5' />
      'Digital Twin & Simulation': <Cube className='w-5 h-5' />
    }
    return iconMap[category] |<Sparkles className='w-5 h-5' />;
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const allServices = [;
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;
    ...emergingTechServices2026;
  ];
  const categories = [;
    'allBusiness Intelligence & AnalyticsContent Creation & MarketingCustomer Service & SupportE-commerce & RetailHR & RecruitmentFinancial ManagementProject Management';
    'Education & TrainingHealthcare & MedicalCloud Infrastructure & DevOpsCybersecurity & Threat IntelligenceData Engineering & AnalyticsAPI Management & IntegrationNetwork Monitoring & ManagementDatabase Management & Optimization';
    'IT Service ManagementBackup & Disaster RecoveryQuantum Computing & AIBlockchain & Web3Internet of Things (IoT)Edge Computing & 5GAR/VR & Immersive TechnologyRobotics & Automation';
    'Digital Twin & Simulation';
  ];

<<<<<<< HEAD
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-400', label: '$200 - $400' },
    { value: '400-600', label: '$400 - $600' },
    { value: '600+', label: '$600+' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || (() => {
      const price = parseInt(service.price.replace('$', ''));
      switch (selectedPriceRange) {
        case '0-100': return price <= 100;
        case '100-200': return price > 100 && price <= 200;
        case '200-400': return price > 200 && price <= 400;
        case '400-600': return price > 400 && price <= 600;
        case '600+': return price > 600;
        default: return true
      }
    })();
    
    return matchesSearch && matchesCategory && matchesPrice
  });


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const priceRanges = [;
    { value: 'all', label: 'All Prices' },;
    { value: '0-100', label: '$0 - $100' },;
    { value: '100-200', label: '$100 - $200' },;
    { value: '200-400', label: '$200 - $400' },;
    { value: '400-600', label: '$400 - $600' },;
<<<<<<< HEAD
<<<<<<< HEAD
          default: return true,;
        }
      })();
=======
<<<<<<< HEAD
    { value: '600+', label: '$600+' },;
  ];
=======
    { value: '600+', label: '$600+' },;
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
<<<<<<< HEAD
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
=======

    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const matchesPrice =;
      selectedPriceRange === 'all' ||;
      (() => {;
        const price = parseInt(service && service.price.replace('$', ''));
        switch (selectedPriceRange) {;
          case '0-100':;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            return price <= 100;
          case '100-200':;
            return price > 100 && price <= 200;
          case '200-400':;
            return price > 200 && price <= 400;
          case '400-600':;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState ('all');
  const [sort_by, setSortBy] = useState ('popularity');
;
  const all_services = [;
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026,
  ];
;
  const categories = [;
    'all',
    'Business Intelligence & Analytics',
    'Content Creation & Marketing',
    'Customer Service & Support',
    'E - commerce & Retail',
    'HR & Recruitment',
    'Financial Management',
    'Project Management',
    'Education & Training',
    'Healthcare & Medical',
    'Cloud Infrastructure & DevOps',
    'Cybersecurity & Threat Intelligence',
    'Data Engineering & Analytics',
    'API Management & Integration',
    'Network Monitoring & Management',
    'Database Management & Optimization',
    'IT Service Management',
    'Backup & Disaster Recovery',
    'Quantum Computing & AI',
    'Blockchain & Web3',
    'Internet of Things (IoT)',
    'Edge Computing & 5G',
    'AR / VR & Immersive Technology',
    'Robotics & Automation',
    'Digital Twin & Simulation',  ];
;
  const price_ranges = [;
    { value: 'all', label: 'All Prices' },
    { value: '0 - 100', label: '$0 - $100' },
    { value: '100 - 200', label: '$100 - $200' },
    { value: '200 - 400', label: '$200 - $400' },
    { value: '400 - 600', label: '$400 - $600' },
    { value: '600+', label: '$600+' },
  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_term.toLowerCase ());
;
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
;
    const matches_price =;
      selectedPriceRange === 'all' ||;
      (() => {
        const price = parse_int (service.price.replace ('$', ''));
        switch (selectedPriceRange) {
          case '0 - 100':;
            return price <= 100;
          case '100 - 200':;
            return price > 100 && price <= 200;
          case '200 - 400':;
            return price > 200 && price <= 400;
          case '400 - 600':;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            return price > 400 && price <= 600;
          case '600+':;
            return price > 600;

          default: return true,;

        }
      })();

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    return matches_search && matches_category && matches_price;  });
;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'popularity':;
        return b.popular ? 1 : -1;
      case 'price - low':;
        return (
          parse_int (a.price.replace ('$', '')) -;
          parse_int (b.price.replace ('$', '')));
      case 'price - high':;
        return (
          parse_int (b.price.replace ('$', '')) -;
          parse_int (a.price.replace ('$', '')));      case 'rating':;
<<<<<<< HEAD
<<<<<<< HEAD
        return b.customers - a.customers;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        return b.rating - a.rating;
      case 'customers':;
        return b.customers - a.customers;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React && React.ReactNode } = {;
      'Business Intelligence & Analytics': <Database className='w-5 h-5' />,;
      'Content Creation & Marketing': <Sparkles className='w-5 h-5' />,;
      'Customer Service & Support': <Users className='w-5 h-5' />,;
      'E-commerce & Retail': <Globe className='w-5 h-5' />,;
      'HR & Recruitment': <Users className='w-5 h-5' />,;
      'Financial Management': <TrendingUp className='w-5 h-5' />,;
      'Project Management': <Clock className='w-5 h-5' />,;
      'Education & Training': <Brain className='w-5 h-5' />,;
      'Healthcare & Medical': <Shield className='w-5 h-5' />,;
      'Cloud Infrastructure & DevOps': <Cloud className='w-5 h-5' />,;
      'Cybersecurity & Threat Intelligence': <Shield className='w-5 h-5' />,;
      'Data Engineering & Analytics': <Database className='w-5 h-5' />,;
      'API Management & Integration': <Zap className='w-5 h-5' />,;
      'Network Monitoring & Management': <Globe className='w-5 h-5' />,;
      'Database Management & Optimization': <Database className='w-5 h-5' />,;
      'IT Service Management': <Users className='w-5 h-5' />,;
      'Backup & Disaster Recovery': <Cloud className='w-5 h-5' />,;
      'Quantum Computing & AI': <Brain className='w-5 h-5' />,;
      'Blockchain & Web3': <Cube className='w-5 h-5' />,;
      'Internet of Things (IoT)': <Zap className='w-5 h-5' />,;
      'Edge Computing & 5G': <Globe className='w-5 h-5' />,;
      'AR/VR & Immersive Technology': <Cube className='w-5 h-5' />,;
      'Robotics & Automation': <Robot className='w-5 h-5' />,;
      'Digital Twin & Simulation': <Cube className='w-5 h-5' />,;
    };
    return iconMap[category] || <Sparkles className='w-5 h-5' />;
  };
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'>;
      {/* Hero Section */}
      <div className='relative overflow-hidden'>;
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            transition={{ duration: 0 && 0.8 }}
            className='text-center'>;
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>;
              ZionTech Group;
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>;
                2026 Services;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
      default:;
        return 0;    }
  });
;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ReactNode } = {
      'Business Intelligence & Analytics': <Database className='w - 5 h - 5' />,
      'Content Creation & Marketing': <Sparkles className='w - 5 h - 5' />,
      'Customer Service & Support': <Users className='w - 5 h - 5' />,
      'E - commerce & Retail': <Globe className='w - 5 h - 5' />,
      'HR & Recruitment': <Users className='w - 5 h - 5' />,
      'Financial Management': <TrendingUp className='w - 5 h - 5' />,
      'Project Management': <Clock className='w - 5 h - 5' />,
      'Education & Training': <Brain className='w - 5 h - 5' />,
      'Healthcare & Medical': <Shield className='w - 5 h - 5' />,
      'Cloud Infrastructure & DevOps': <Cloud className='w - 5 h - 5' />,
      'Cybersecurity & Threat Intelligence': <Shield className='w - 5 h - 5' />,
      'Data Engineering & Analytics': <Database className='w - 5 h - 5' />,
      'API Management & Integration': <Zap className='w - 5 h - 5' />,
      'Network Monitoring & Management': <Globe className='w - 5 h - 5' />,
      'Database Management & Optimization': <Database className='w - 5 h - 5' />,
      'IT Service Management': <Users className='w - 5 h - 5' />,
      'Backup & Disaster Recovery': <Cloud className='w - 5 h - 5' />,
      'Quantum Computing & AI': <Brain className='w - 5 h - 5' />,
      'Blockchain & Web3': <Cube className='w - 5 h - 5' />,
      'Internet of Things (IoT)': <Zap className='w - 5 h - 5' />,
      'Edge Computing & 5G': <Globe className='w - 5 h - 5' />,
      'AR / VR & Immersive Technology': <Cube className='w - 5 h - 5' />,
      'Robotics & Automation': <Robot className='w - 5 h - 5' />,
      'Digital Twin & Simulation': <Cube className='w - 5 h - 5' />,
    }
    return icon_map[category] || <Sparkles className='w - 5 h - 5' />;
  }
;
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - indigo - 900'>;
      {/* Hero Section */}
      <div className='relative overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20'></div>;
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24'>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold text - white mb - 6'>;
              ZionTech Group;
              <span className='block text - transparent bg - clip - text bg - gradient - to - r from - cyan - 400 to - blue - 500'>;
                2026 Services;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Discover our comprehensive suite of innovative micro SAAS;
              services, IT solutions, and emerging technology platforms designed;
              to transform your business.;
            </p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400';
              />;
            </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Filter */}
            <div>;
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {categories && categories.map(category => (;
                  <option
                    key={category}
                    value={category}
                    className='bg-gray-800 text-white'>;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
<<<<<<< HEAD
              </select>;
            </div>;
=======

              </select>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Price Range Filter */}
            <div>;
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-800 text-white'>;
                    {range && range.label}
                  </option>;
                ))}
<<<<<<< HEAD
              </select>;
            </div>;
=======

              </select>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Sort By */}
            <div>;
              <select
                value={sortBy}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={e => setSortBy(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                <option value='popularity' className='bg-gray-800 text-white'>;
                  Sort by Popularity;
                </option>;
                <option value='price-low' className='bg-gray-800 text-white'>;
                  Price: Low to High;
                </option>;
                <option value='price-high' className='bg-gray-800 text-white'>;
                  Price: High to Low;
                </option>;
                <option value='rating' className='bg-gray-800 text-white'>;
                  Sort by Rating;
                </option>;
                <option value='customers' className='bg-gray-800 text-white'>;
                  Sort by Customers;
                </option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>;
        <div className='mb-8'>;
          <h2 className='text-3xl font-bold text-white mb-2'>;
            {filteredServices && filteredServices.length} Services Found;
          </h2>;
          <p className='text-gray-300'>;
            Discover innovative solutions tailored to your business needs;
          </p>;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {sortedServices && sortedServices.map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
              className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105'>;
              {/* Service Header */}
              <div className='flex items-start justify-between mb-4'>;
                <div className='flex items-center space-x-3'>;
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service && service.color} flex items-center justify-center text-2xl`}>;
                    {service && service.icon}
                  </div>;
                  <div>;
                    <h3 className='text-xl font-bold text-white'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-sm text-gray-300'>{service && service.category}</p>;
                  </div>;
                </div>;
                {service && service.popular && (;
                  <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>;
                    Popular;
                  </div>;
                )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <div className='flex items - center space - x-2 text - white'>;
                <Users className='w - 5 h - 5' />;
                <span>{all_services.length}+ Services</span>;
              </div>;
              <div className='flex items - center space - x-2 text - white'>;
                <Star className='w - 5 h - 5 text - yellow - 400' />;
                <span > 4.5+ Average Rating</span>;
              </div>;
              <div className='flex items - center space - x-2 text - white'>;
                <TrendingUp className='w - 5 h - 5 text - green - 400' />;
                <span > Growing Rapidly</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Search and Filters */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8'>;
        <div className='bg - white / 10 backdrop - blur - lg rounded - 2xl p - 6 border border - white / 20'>;
          <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 10 pr - 4 py - 2 bg - white / 20 border border - white / 30 rounded - lg text - white placeholder - gray - 300 focus:outline - none focus:ring - 2 focus:ring - cyan - 400';
              />;
            </div>;
            {/* Category Filter */}
            <div>;
              <select;
                value={selected_category}
                on_change={e => setSelectedCategory (e.target.value)}
                className='w - full px - 4 py - 2 bg - white / 20 border border - white / 30 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 400';
              >;
                {categories.map (category => (
                  <option;
                    key={category}
                    value={category}
                    className='bg - gray - 800 text - white';
                  >;
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>;
            </div>;
            {/* Price Range Filter */}
            <div>;
              <select;
                value={selectedPriceRange}
                on_change={e => setSelectedPriceRange (e.target.value)}
                className='w - full px - 4 py - 2 bg - white / 20 border border - white / 30 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 400';
              >;
                {price_ranges.map (range => (
                  <option;
                    key={range.value}
                    value={range.value}
                    className='bg - gray - 800 text - white';
                  >;
                    {range.label}
                  </option>))}
              </select>;
            </div>;
            {/* Sort By */}
            <div>;
              <select;
                value={sort_by}
                on_change={e => setSortBy (e.target.value)}
                className='w - full px - 4 py - 2 bg - white / 20 border border - white / 30 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 400';
              >;
                <option value='popularity' className='bg - gray - 800 text - white'>;
                  Sort by Popularity;
                </option>;
                <option value='price - low' className='bg - gray - 800 text - white'>;
                  Price: Low to High;
                </option>;
                <option value='price - high' className='bg - gray - 800 text - white'>;
                  Price: High to Low;
                </option>;
                <option value='rating' className='bg - gray - 800 text - white'>;
                  Sort by Rating;
                </option>;
                <option value='customers' className='bg - gray - 800 text - white'>;
                  Sort by Customers;
                </option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </div>;
{/* Services Grid */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 8'>;
        <div className='mb - 8'>;
          <h2 className='text - 3xl font - bold text - white mb - 2'>;
            {filtered_services.length} Services Found;
          </h2>;
          <p className='text - gray - 300'>;
            Discover innovative solutions tailored to your business needs;
          </p>;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
          {sorted_services.map ((service, index) => (
            <motion.div;
              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg - white / 10 backdrop - blur - lg rounded - 2xl p - 6 border border - white / 20 hover:border - cyan - 400 / 50 transition - all duration - 300 hover:transform hover:scale - 105';
            >;
              {/* Service Header */}
              <div className='flex items - start justify - between mb - 4'>;
                <div className='flex items - center space - x-3'>;
                  <div;
                    className={`w - 12 h - 12 rounded - xl bg - gradient - to - r ${service.color} flex items - center justify - center text - 2xl`}
                  >;
                    {service.icon}
                  </div>;
                  <div>;
                    <h3 className='text - xl font - bold text - white'>;
                      {service.name}
                    </h3>;
                    <p className='text - sm text - gray - 300'>{service.category}</p>;
                  </div>;
                </div>;
                {service.popular && (
                  <div className='bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black px - 3 py - 1 rounded - full text - xs font - bold'>;
                    Popular;
                  </div>)}
              </div>;
              {/* Service Details */}
              <p className='text - gray - 300 mb - 4'>{service.tagline}</p>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Price and Trial */}
              <div className='flex items - center justify - between mb - 4'>;
                <div className='text - 2xl font - bold text - white'>;
                  {service.price}
                  <span className='text - sm text - gray - 400'>;
                    {service.period}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
              {/* Service Details */}
              <p className='text-gray-300 mb-4'>{service && service.tagline}</p>;
              {/* Price and Trial */}
              <div className='flex items-center justify-between mb-4'>;
                <div className='text-2xl font-bold text-white'>;
                  {service && service.price}
                  <span className='text-sm text-gray-400'>;
                    {service && service.period}
                  </span>;
                </div>;
                <div className='text-sm text-gray-300'>;
                  {service && service.trialDays} days free trial;
                </div>;
              </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Features */}
              <div className='mb-4'>;
                <h4 className='text-sm font-semibold text-white mb-2'>;
                  Key Features:;
                </h4>;
                <ul className='space-y-1'>;
                  {service && service.features.slice(0, 3).map((feature, idx) => (;
                    <li
                      key={idx}
                      className='text-xs text-gray-300 flex items-center'>;
                      <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2'></div>;
                      {feature}
                    </li>;
                  ))}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </span>;
                </div>;
                <div className='text - sm text - gray - 300'>;
                  {service.trial_days} days free trial;
                </div>;
              </div>;
              {/* Features */}
              <div className='mb - 4'>;
                <h4 className='text - sm font - semibold text - white mb - 2'>;
                  Key Features:;
                </h4>;
                <ul className='space - y-1'>;
                  {service.features.slice (0, 3).map ((feature, idx) => (
                    <li;
                      key={idx}
                      className='text - xs text - gray - 300 flex items - center';
                    >;
                      <div className='w - 1.5 h - 1.5 bg - cyan - 400 rounded - full mr - 2'></div>;
                      {feature}
                    </li>))}
                </ul>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Stats */}
              <div className='grid grid - cols - 3 gap - 4 mb - 4 text - center'>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.rating}
                  </div>;
                  <div className='text - xs text - gray - 400'>Rating</div>;
                </div>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.customers}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </ul>;
              </div>;
              {/* Stats */}
              <div className='grid grid-cols-3 gap-4 mb-4 text-center'>;
                <div>;
                  <div className='text-lg font-bold text-white'>;
                    {service && service.rating}
                  </div>;
                  <div className='text-xs text-gray-400'>Rating</div>;
                </div>;
                <div>;
                  <div className='text-lg font-bold text-white'>;
                    {service && service.customers}
                  </div>;
                  <div className='text-xs text-gray-400'>Customers</div>;
                </div>;
                <div>;
                  <div className='text-lg font-bold text-white'>;
                    {service && service.setupTime}
                  </div>;
                  <div className='text-xs text-gray-400'>Setup</div>;
                </div>;
              </div>;
              {/* Market Info */}
              <div className='mb-4 p-3 bg-white/5 rounded-lg'>;
                <div className='text-xs text-gray-300 mb-1'>;
                  Market Size: {service && service.marketSize}
                </div>;
                <div className='text-xs text-gray-300'>;
                  Growth Rate: {service && service.growthRate}
                </div>;
              </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* CTA Button */}
              <a
                href={service && service.link}
                target='_blank'
                rel='noopener noreferrer'
<<<<<<< HEAD
                className='block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                Learn More & Get Started;
              </a>;
=======

                className='block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                Learn More & Get Started;
              </a>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Contact Info */}
              <div className='mt-4 text-center'>;
                <div className='text-xs text-gray-400'>;
                  Contact: {service && service.contactInfo.email}
                </div>;
                <div className='text-xs text-gray-400'>;
                  Phone: {service && service.contactInfo.mobile}
                </div>;
              </div>;
            </motion && motion.div>;
          ))}
<<<<<<< HEAD
        </div>;
      </div>;
=======

        </div>;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Contact Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30'>;
          <div className='text-center'>;
            <h2 className='text-3xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Get in touch with our team to discuss how our innovative services;
              can help you achieve your goals.;
            </p>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Users className='w-8 h-8 text-cyan-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Expert Team;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Dedicated professionals ready to help;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Zap className='w-8 h-8 text-blue-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Fast Implementation;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Quick setup and deployment;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Shield className='w-8 h-8 text-purple-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  24/7 Support;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Round-the-clock assistance;
                </p>;
              </div>;
            </div>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'>;
                Email Us;
              </a>;
              <a
                href='tel:+13024640950'
<<<<<<< HEAD
      'Business Intelligence & Analytics': <Database className="w-5 h-5" />;
      'Content Creation & Marketing': <Sparkles className="w-5 h-5" />;
      'Customer Service & Support': <Users className="w-5 h-5" />;
      'E-commerce & Retail': <Globe className="w-5 h-5" />;
      'HR & Recruitment': <Users className="w-5 h-5" />;
      'Financial Management': <TrendingUp className="w-5 h-5" />;
      'Project Management': <Clock className="w-5 h-5" />;
      'Education & Training': <Brain className="w-5 h-5" />;
      'Healthcare & Medical': <Shield className="w-5 h-5" />;
      'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />;
      'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />;
      'Data Engineering & Analytics': <Database className="w-5 h-5" />;
      'API Management & Integration': <Zap className="w-5 h-5" />;
      'Network Monitoring & Management': <Globe className="w-5 h-5" />;
      'Database Management & Optimization': <Database className="w-5 h-5" />;
      'IT Service Management': <Users className="w-5 h-5" />;
      'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />;
      'Quantum Computing & AI': <Brain className="w-5 h-5" />;
      'Blockchain & Web3': <Cube className="w-5 h-5" />;
      'Internet of Things (IoT)': <Zap className="w-5 h-5" />;
      'Edge Computing & 5G': <Globe className="w-5 h-5" />;
      'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />;
      'Robotics & Automation': <Robot className="w-5 h-5" />;
      'Digital Twin & Simulation': <Cube className="w-5 h-5" />
    };
    return iconMap[category] || <Sparkles className="w-5 h-5" />
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

  const _filteredServices = allServices.filter(service => {_const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    
    const matchesPrice = selectedPriceRange === 'all' || (() => {
      const price = parseInt(service.price.replace('$', '')),
      switch (selectedPriceRange) {
        case '0-100': return price <= 100,
        case '100-200': return price > 100 && price <= 200,
        case '200-400': return price > 200 && price <= 400,
        case '400-600': return price > 400 && price <= 600,
        case '600+': return price > 600,
        default: return true
      }
    })(),

    return matchesSearch && matchesCategory && matchesPrice
  }),

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1,
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')),
      case 'rating':
        return b.rating - a.rating,
      case 'customers':
      case 'rating':
        return b.rating - a.rating,
      case 'customers':

        return b.customers - a.customers,
      default: return 0
    }
  }),

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900&quot;>
        {/* Hero Section */}
        <div className=&quot;relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center"
    { value: '600+', label: '$600+'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = selectedPriceRange === 'all' || (() => {;
      const price = parseInt(service.price.replace('$', '')),;
      switch (selectedPriceRange) {;
        case '0-100': return price <= 100,;
        case '100-200': return price > 100 && price <= 200,;
        case '200-400': return price > 200 && price <= 400,;
        case '400-600': return price > 400 && price <= 600,;
        case '600+': return price > 600,;
        default: return true;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    })(),;
    return matchesSearch && matchesCategory && matchesPrice;
  }),;
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'popularity':;
        return b.popular ? 1 : -1,;
      case 'price-low':;
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),;
      case 'price-high':;
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')),;
      case 'rating':;
        return b.rating - a.rating,;
      case 'customers':;
=======

        return b.rating - a.rating;
      case 'customers':;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return b.customers - a.customers,;
      default: return 0;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }),
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Business Intelligence & Analytics': <Database className="w-5 h-5" />,
      'Content Creation & Marketing': <Sparkles className="w-5 h-5" />,
      'Customer Service & Support': <Users className="w-5 h-5" />,
      'E-commerce & Retail': <Globe className="w-5 h-5" />,
      'HR & Recruitment': <Users className="w-5 h-5" />,
      'Financial Management': <TrendingUp className="w-5 h-5" />,
      'Project Management': <Clock className="w-5 h-5" />,
      'Education & Training': <Brain className="w-5 h-5" />,
      'Healthcare & Medical': <Shield className="w-5 h-5" />,
      'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />,
      'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />,
      'Data Engineering & Analytics': <Database className="w-5 h-5" />,
      'API Management & Integration': <Zap className="w-5 h-5" />,
      'Network Monitoring & Management': <Globe className="w-5 h-5" />,
      'Database Management & Optimization': <Database className="w-5 h-5" />,
      'IT Service Management': <Users className="w-5 h-5" />,
      'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />,
      'Quantum Computing & AI': <Brain className="w-5 h-5" />,
      'Blockchain & Web3': <Cube className="w-5 h-5" />,
      'Internet of Things (IoT)': <Zap className="w-5 h-5" />,
      'Edge Computing & 5G': <Globe className="w-5 h-5" />,
      'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />,
      'Robotics & Automation': <Robot className="w-5 h-5" />,
      'Digital Twin & Simulation': <Cube className="w-5 h-5" />
    },
    return iconMap[category] || <Sparkles className="w-5 h-5" />
  },
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                ZionTech Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  2026 Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and emerging technology platforms designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5" />
                  <span>{allServices.length}+ Services</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.5+ Average Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Growing Rapidly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className='flex items-center space-x-2 text-white'>
                <TrendingUp className='w-5 h-5 text-green-400' />
                <span>Growing Rapidly</span>
  }),;
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React.ReactNode } = {;
      'Business Intelligence & Analytics': <Database className="w-5 h-5" />;
      'Content Creation & Marketing': <Sparkles className="w-5 h-5" />;
      'Customer Service & Support': <Users className="w-5 h-5" />;
      'E-commerce & Retail': <Globe className="w-5 h-5" />;
      'HR & Recruitment': <Users className="w-5 h-5" />,;
      'Financial Management': <TrendingUp className="w-5 h-5" />,;
      'Project Management': <Clock className="w-5 h-5" />,;
      'Education & Training': <Brain className="w-5 h-5" />,;
      'Healthcare & Medical': <Shield className="w-5 h-5" />,;
      'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />,;
      'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />,;
      'Data Engineering & Analytics': <Database className="w-5 h-5" />,;
      'API Management & Integration': <Zap className="w-5 h-5" />,;
      'Network Monitoring & Management': <Globe className="w-5 h-5" />,;
      'Database Management & Optimization': <Database className="w-5 h-5" />,;
      'IT Service Management': <Users className="w-5 h-5" />,;
      'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />,;
      'Quantum Computing & AI': <Brain className="w-5 h-5" />,;
      'Blockchain & Web3': <Cube className="w-5 h-5" />,;
      'Internet of Things (IoT)': <Zap className="w-5 h-5" />,;
      'Edge Computing & 5G': <Globe className="w-5 h-5" />,;
      'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />,;
      'Robotics & Automation': <Robot className="w-5 h-5" />,;
      'Digital Twin & Simulation': <Cube className="w-5 h-5" />;
    },;
    return iconMap[category] || <Sparkles className="w-5 h-5" />;
  },;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">;
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
        <div className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>;
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
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
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center";
            >;
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
                ZionTech Group;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">;
                  2026 Services;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and emerging technology platforms designed to transform your business.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <div className="flex items-center space-x-2 text-white">;
                  <Users className="w-5 h-5" />;
                  <span>{allServices.length}+ Services</span>;
                </div>;
                <div className="flex items-center space-x-2 text-white">;
                  <Star className="w-5 h-5 text-yellow-400" />;
                  <span>4.5+ Average Rating</span>;
                </div>;
                <div className="flex items-center space-x-2 text-white">;
                  <TrendingUp className="w-5 h-5 text-green-400" />;
                  <span>Growing Rapidly</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">;
              {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
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
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400";
                />;
              </div>;
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>;
                <select;
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
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category  } catch (error) {
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
              {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>;
                <select;
                  value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedPriceRange(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800 text-white">
                      {range.label  } catch (error) {
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
              {/* Sort By */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>;
                <select;
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popularity" className="bg-gray-800 text-white">Sort by Popularity</option>
                  <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                  <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                  <option value="customers" className="bg-gray-800 text-white">Sort by Customers</option>
                </select>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
      </div>
      {/* Search and Filters */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400'
              />
            </div>
            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
              >
                {categories.map(category => (
                  <option
                    key={category}
                    value={category}
                    className='bg-gray-800 text-white'
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
              >
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-800 text-white'
                  >
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Sort By */}
            <div>
=======
;
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - indigo - 900'>;
      {/* Hero Section */}
      <div className='relative overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20'></div>;
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 24'>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold text - white mb - 6'>;
              ZionTech Group;
              <span className='block text - transparent bg - clip - text bg - gradient - to - r from - cyan - 400 to - blue - 500'>;
                2026 Services;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;

              Discover our comprehensive suite of innovative micro SAAS;
              services, IT solutions, and emerging technology platforms designed;
              to transform your business.;
            </p>;

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400';
              />;
            </div>;


            {/* Category Filter */}
            <div>;
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {categories && categories.map(category => (;
                  <option
                    key={category}
                    value={category}
                    className='bg-gray-800 text-white'>;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}

              </select>;
            </div>;


            {/* Price Range Filter */}
            <div>;
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-800 text-white'>;
                    {range && range.label}
                  </option>;
                ))}

              </select>;
            </div>;


            {/* Sort By */}
            <div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400'
              >
                <option value='popularity' className='bg-gray-800 text-white'>
                  Sort by Popularity
                </option>
                <option value='price-low' className='bg-gray-800 text-white'>
                  Price: Low to High
                </option>
                <option value='price-high' className='bg-gray-800 text-white'>
                  Price: High to Low
                </option>
                <option value='rating' className='bg-gray-800 text-white'>
                  Sort by Rating
                </option>
                <option value='customers' className='bg-gray-800 text-white'>
                  Sort by Customers
                </option>
              </select>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */  } catch (error) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-gray-300">
              Discover innovative solutions tailored to your business needs
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                      {service.icon}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-300">{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
<<<<<<< HEAD
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Service Details */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                {/* Price and Trial */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                  )}
                </div>

                {/* Service Details */}
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                
                {/* Price and Trial */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">
                    {service.price}<span className="text-sm text-gray-400">{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {service.trialDays} days free trial
                  </div>
                </div>
<<<<<<< HEAD
                {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                {/* Features */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
<<<<<<< HEAD
                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
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
=======
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{service.customers}</div>
                    <div className="text-xs text-gray-400">Customers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{service.setupTime}</div>
                    <div className="text-xs text-gray-400">Setup</div>
                  </div>
                </div>
<<<<<<< HEAD
                {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

                {/* Market Info */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-gray-300 mb-1">Market Size: {service.marketSize}</div>
                  <div className="text-xs text-gray-300">Growth Rate: {service.growthRate}</div>
                </div>
<<<<<<< HEAD
                {/* CTA Button */  } catch (error) {
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
=======

                {/* CTA Button */}
                <a
                  href={service.link}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More & Get Started
<<<<<<< HEAD
                </Link>
                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400">
                    Contact: {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <div className="text-xs text-gray-400">
                    Phone: {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
        {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
                </a>

                {/* Contact Info */}
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400">
                    Contact: {service.contactInfo.email}
                  </div>
                  <div className="text-xs text-gray-400">
                    Phone: {service.contactInfo.mobile}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our innovative services can help you achieve your goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-sm">Dedicated professionals ready to help</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                  <p className="text-gray-300 text-sm">Quick setup and deployment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300 text-sm">Round-the-clock assistance</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Email Us
<<<<<<< HEAD
                </Link>
=======
                </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <a
                  href="tel:+13024640950"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Call Us
<<<<<<< HEAD
<<<<<<< HEAD
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
                >
                  Email Us
                </Link>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300&quot;
                >
                  Call Us
                </Link>

              </div>
                </Link>
              </div>
=======
<<<<<<< HEAD
                </a>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Get in touch with our team to discuss how our innovative services can help you achieve your goals.
              </p>
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Users className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Expert Team</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Dedicated professionals ready to help</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Zap className=&quot;w-8 h-8 text-blue-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Fast Implementation</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Quick setup and deployment</p>
                </div>
                <div className=&quot;text-center&quot;>
                  <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <Shield className=&quot;w-8 h-8 text-purple-400&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>24/7 Support</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>Round-the-clock assistance</p>
                </div>
=======
                </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'>;
=======

                className='bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                className='bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  /* CTA Button */ 
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) ) 
}</div> </div> <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className=" text-center"> <div className=" w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Users className=" w-8 h-8 text-cyan-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Expert Team</h3> <p className=" text-gray-300 text-sm">Dedicated professionals ready to help</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Zap className=" w-8 h-8 text-blue-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Fast Implementation</h3> <p className=" text-gray-300 text-sm">Quick setup and deployment</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className=" w-8 h-8 text-purple-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">24/7 Support</h3> <p className=" text-gray-300 text-sm">Round-the-clock assistance</p> </div> </div> <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300" > Call Us </Link> </div> </div> </div> </div> </div>) 
};


<<<<<<< HEAD
<<<<<<< HEAD
{/* Services Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-white mb-2'>
            {filteredServices.length} Services Found
          </h2>
          <p className='text-gray-300'>
            Discover innovative solutions tailored to your business needs
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105'
            >
              {/* Service Header */}
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {service.name}
                    </h3>
                    <p className='text-sm text-gray-300'>{service.category}</p>
                  </div>
                </div>
                {service.popular && (
                  <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                    Popular
                  </div>
                )}
              </div>
              {/* Service Details */}
              <p className='text-gray-300 mb-4'>{service.tagline}</p>
              {/* Price and Trial */}
              <div className='flex items-center justify-between mb-4'>
                <div className='text-2xl font-bold text-white'>
                  {service.price}
                  <span className='text-sm text-gray-400'>
                    {service.period}
                  </span>
                </div>
                <div className='text-sm text-gray-300'>
                  {service.trialDays} days free trial
                </div>
              </div>
              {/* Features */}
              <div className='mb-4'>
                <h4 className='text-sm font-semibold text-white mb-2'>
                  Key Features:
                </h4>
                <ul className='space-y-1'>
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className='text-xs text-gray-300 flex items-center'
                    >
                      <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Stats */}
              <div className='grid grid-cols-3 gap-4 mb-4 text-center'>
                <div>
                  <div className='text-lg font-bold text-white'>
                    {service.rating}
                  </div>
                  <div className='text-xs text-gray-400'>Rating</div>
                </div>
                <div>
                  <div className='text-lg font-bold text-white'>
                    {service.customers}
                  </div>
                  <div className='text-xs text-gray-400'>Customers</div>
                </div>
                <div>
                  <div className='text-lg font-bold text-white'>
                    {service.setupTime}
                  </div>
                  <div className='text-xs text-gray-400'>Setup</div>
                </div>
              </div>
              {/* Market Info */}
              <div className='mb-4 p-3 bg-white/5 rounded-lg'>
                <div className='text-xs text-gray-300 mb-1'>
                  Market Size: {service.marketSize}
                </div>
                <div className='text-xs text-gray-300'>
                  Growth Rate: {service.growthRate}
                </div>
              </div>
              {/* CTA Button */}
              <a
                href={service.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'
              >
                Learn More & Get Started
              </a>
              {/* Contact Info */}
              <div className='mt-4 text-center'>
                <div className='text-xs text-gray-400'>
                  Contact: {service.contactInfo.email}
                </div>
                <div className='text-xs text-gray-400'>
                  Phone: {service.contactInfo.mobile}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Contact Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Get in touch with our team to discuss how our innovative services
              can help you achieve your goals.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='w-8 h-8 text-cyan-400' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Expert Team
                </h3>
                <p className='text-gray-300 text-sm'>
                  Dedicated professionals ready to help
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Zap className='w-8 h-8 text-blue-400' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  Fast Implementation
                </h3>
                <p className='text-gray-300 text-sm'>
                  Quick setup and deployment
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='w-8 h-8 text-purple-400' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  24/7 Support
                </h3>
                <p className='text-gray-300 text-sm'>
                  Round-the-clock assistance
                </p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'
              >
                Email Us
              </a>
              <a
                href='tel:+13024640950'
                className='bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'
              >
                Call Us
              </a>            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  /* Category Filter */
}<div> <select </option>) )
}</select> </div> {
  /* Price Range Filter */
}<div> <select </option>) )
}</select> </div> {
  /* Sort By */
}<div> <select > <option value="popularity" className="bg-gray-800 text-white" >Sort by Popularity</option> <option value="price-low" className="bg-gray-800 text-white" >Price: Low to High</option> <option value="price-high" className="bg-gray-800 text-white" >Price: High to Low</option> <option value="rating" className="bg-gray-800 text-white" >Sort by Rating</option> <option value="customers" className="bg-gray-800 text-white" >Sort by Customers</option> </select> </div> </div> </div> </div> </h2> <p className="text-gray-300" > Discover innovative solutions tailored to your business needs </p> </div> Popular </div>)
}</div> </li>) )
}</ul> </div> </div> {
  /* CTA Button */
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) )
}</div> </div> <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className=" text-center"> <div className=" w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Users className=" w-8 h-8 text-cyan-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Expert Team</h3> <p className=" text-gray-300 text-sm">Dedicated professionals ready to help</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Zap className=" w-8 h-8 text-blue-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Fast Implementation</h3> <p className=" text-gray-300 text-sm">Quick setup and deployment</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className=" w-8 h-8 text-purple-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">24/7 Support</h3> <p className=" text-gray-300 text-sm">Round-the-clock assistance</p> </div> </div> <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300" > Call Us </Link> </div> </div> </div> </div> </div>)
}
                className='bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                  <div className='text - xs text - gray - 400'>Customers</div>;
                </div>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.setup_time}
                  </div>;
                  <div className='text - xs text - gray - 400'>Setup</div>;
                </div>;
              </div>;
              {/* Market Info */}
              <div className='mb - 4 p - 3 bg - white / 5 rounded - lg'>;
                <div className='text - xs text - gray - 300 mb - 1'>;
                  Market Size: {service.market_size}
                </div>;
                <div className='text - xs text - gray - 300'>;
                  Growth Rate: {service.growth_rate}
                </div>;
              </div>;
              {/* CTA Button */}
              <a;
                href={service.link}
                target='_blank';
                rel='noopener noreferrer';
                className='block w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - center py - 3 px - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105';
              >;
                Learn More & Get Started;
              </a>;
              {/* Contact Info */}
              <div className='mt - 4 text - center'>;
                <div className='text - xs text - gray - 400'>;
                  Contact: {service.contact_info.email}
                </div>;
                <div className='text - xs text - gray - 400'>;
                  Phone: {service.contact_info.mobile}
                </div>;
              </div>;
            </motion.div>))}
        </div>;
      </div>;
      {/* Contact Section */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        <div className='bg - gradient - to - r from - cyan - 600 / 20 to - blue - 600 / 20 rounded - 2xl p - 8 border border - cyan - 400 / 30'>;
          <div className='text - center'>;
            <h2 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Get in touch with our team to discuss how our innovative services;
              can help you achieve your goals.;
            </p>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - cyan - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Users className='w - 8 h - 8 text - cyan - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Expert Team;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Dedicated professionals ready to help;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Zap className='w - 8 h - 8 text - blue - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Fast Implementation;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Quick setup and deployment;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Shield className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  24 / 7 Support;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Round - the - clock assistance;
                </p>;
              </div>;
            </div>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <a;
                href='mailto:kleber@ziontechgroup.com';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300';
              >;
                Email Us;
              </a>;
              <a;
                href='tel:+13024640950';
                className='bg - white / 10 text - white px - 8 py - 3 rounded - lg font - semibold border border - white / 30 hover:bg - white / 20 transition - all duration - 300';
              >;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Call Us;
              </a>            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
},;


<<<<<<< HEAD
export default ComprehensiveServicesShowcase2026;


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>),
}
;
  /* Category Filter */;
}<div> <select </option>) );
}</select> </div> {
  /* Price Range Filter */;
}<div> <select </option>) );
}</select> </div> {
  /* Sort By */;
}<div> <select > <option value="popularity" className="bg - gray - 800 text - white" >Sort by Popularity</option> <option value="price - low" className="bg - gray - 800 text - white" >Price: Low to High</option> <option value="price - high" className="bg - gray - 800 text - white" >Price: High to Low</option> <option value="rating" className="bg - gray - 800 text - white" >Sort by Rating</option> <option value="customers" className="bg - gray - 800 text - white" >Sort by Customers</option> </select> </div> </div> </div> </div> </h2> <p className="text - gray - 300" > Discover innovative solutions tailored to your business needs </p> </div> Popular </div>);
}</div> </li>) );
}</ul> </div> </div> {
  /* CTA Button */;
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) );
}</div> </div> <div className="bg - gradient - to - r from - cyan - 600 / 20 to - blue - 600 / 20 rounded - 2xl p - 8 border border - cyan - 400 / 30"> <div className="text - center"> <h2 className="text - 3xl font - bold text - white mb - 4"> text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8"> <div className=" text - center"> <div className=" w - 16 h - 16 bg - cyan - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Users className=" w - 8 h - 8 text - cyan - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">Expert Team</h3> <p className=" text - gray - 300 text - sm">Dedicated professionals ready to help</p> </div> <div className=" text - center"> <div className=" w - 16 h - 16 bg - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Zap className=" w - 8 h - 8 text - blue - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">Fast Implementation</h3> <p className=" text - gray - 300 text - sm">Quick setup and deployment</p> </div> <div className=" text - center"> <div className=" w - 16 h - 16 bg - purple - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Shield className=" w - 8 h - 8 text - purple - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">24 / 7 Support</h3> <p className=" text - gray - 300 text - sm">Round - the - clock assistance</p> </div> </div> <div className=" flex flex - col sm:flex - row gap - 4 justify - center items - center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg - white / 10 text - white px - 8 py - 3 rounded - lg font - semibold border border - white / 30 hover:bg - white / 20 transition - all duration - 300" > Call Us </Link> </div> </div> </div> </div> </div>);
}
export default ComprehensiveServicesShowcase2026;
<<<<<<< HEAD

  /* CTA Button */ 
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) ) 
}</div> </div> <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30"> <div className="text-center"> <h2 className="text-3xl font-bold text-white mb-4"> text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className=" text-center"> <div className=" w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Users className=" w-8 h-8 text-cyan-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Expert Team</h3> <p className=" text-gray-300 text-sm">Dedicated professionals ready to help</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Zap className=" w-8 h-8 text-blue-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">Fast Implementation</h3> <p className=" text-gray-300 text-sm">Quick setup and deployment</p> </div> <div className=" text-center"> <div className=" w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"> <Shield className=" w-8 h-8 text-purple-400"/> </div> <h3 className=" text-lg font-semibold text-white mb-2">24/7 Support</h3> <p className=" text-gray-300 text-sm">Round-the-clock assistance</p> </div> </div> <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300" > Call Us </Link> </div> </div> </div> </div> </div>) 
};
  )
},
export default ComprehensiveServicesShowcase2026,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">;
            <div className="text-center">;
              <h2 className="text-3xl font-bold text-white mb-4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Get in touch with our team to discuss how our innovative services can help you achieve your goals.;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Users className="w-8 h-8 text-cyan-400" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>;
                  <p className="text-gray-300 text-sm">Dedicated professionals ready to help</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Zap className="w-8 h-8 text-blue-400" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>;
                  <p className="text-gray-300 text-sm">Quick setup and deployment</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Shield className="w-8 h-8 text-purple-400" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>;
                  <p className="text-gray-300 text-sm">Round-the-clock assistance</p>;
                </div>;
              </div>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <a;
                  href="mailto:kleber@ziontechgroup.com";
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300";
                >;
                  Email Us;
                </a>;
                <a;
                  href="tel:+13024640950";
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300";
                >;
                  Call Us;
                </a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
  );
},;
export default ComprehensiveServicesShowcase2026;
=======
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ComprehensiveServicesShowcase2026;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
