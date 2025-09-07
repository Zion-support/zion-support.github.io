
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface Service {
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  Lock,
  Code,
  Database,
  Cloud,
import Button from '../ui / Button';
interface Service {
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
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useState, useMemo } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
=======
<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
>>>>>>> origin/chore/fix-lint-and-merge
import { Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Zap, Shield, Rocket;
<<<<<<< HEAD
import {
origin/cursor/automate-test-improve-and-merge-code-2533
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Zap
  Shield
  Rocket
  Brain
  Globe
  Lock
  Code
  Database
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Star,;
  Users,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Zap,;
  Shield,;
  Rocket,;
  Brain,;
  Globe,;
  Lock,;
  Code,;
  Database,;
  Cloud,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Zap
  Shield
  Rocket
  Brain
  Globe
  Lock
  Code
  Database
  Cloud;
  Brain, Globe, Lock, Code, Database, Cloud;
  } from 'lucide-react';
import {Star;
  Users;
  TrendingUp;
  DollarSign;
  Clock;
  CheckCircle;
  ArrowRight;
  Zap;
  Shield;
  Rocket;
  Brain;
  Globe;
  Lock;
  Code;
  Database;
  Cloud;Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Zap,Shield,Rocket,Brain,Globe,Lock,Code,Database,Cloud,Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Zap,Shield,Rocket,Brain,Globe,Lock,Code,Database,Cloud,import Button from '../ui/Button';
interface Service  {id: string;
=======
}
  Brain, Globe, Lock, Code, Database, Cloud}
 } from 'lucide-react';
import {
  Star;
Users,
TrendingUp;
DollarSign,
Clock;
CheckCircle,
ArrowRight;
Zap,
Shield;
Rocket,
Brain;
Globe,
Lock;
Code,
Database;
Cloud;

import Button from '../ui/Button';
interface Service {;
  id: string;

>>>>>>> origin/chore/fix-lint-and-merge
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
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
<<<<<<< HEAD
<<<<<<< HEAD
  variant: string;contactInfo: {mobile: string;
  variant: string;contactInfo: {mobile: string;
    email: string;
    address: string;
    website: string;
=======
  variant: string;
<<<<<<< HEAD
  contact_info: {
=======

  contact_info: {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    mobile: string;
    email: string;
    address: string;
    website: string;
  }
<<<<<<< HEAD
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;
  customers: number;
  rating: number;
  reviews: number;
;
interface EnhancedServiceShowcaseProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

  variant: string;

  contactInfo: {
    mobile: string;

    email: string;
    address: string;}
    website: string;}
>>>>>>> origin/chore/fix-lint-and-merge
  },realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
<<<<<<< HEAD

<<<<<<< HEAD
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  Lock,
  Code,
  Database,;
  Cloud,;
import {;
  Star,;
  Users,;
  TrendingUp,;
  DollarSign,;
  Clock,;
  CheckCircle,;
  ArrowRight,;
  Zap,;
  Shield,;
  Rocket,;
  Brain,;
  Globe,;
  Lock,;
  Code,;
  Database,;
  Cloud,;
=======
  reviews: number
}
=======
  reviews: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface EnhancedServiceShowcaseProps {
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  title: string;
  subtitle: string;
  show_filters?: boolean;
  services?: Service[];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { 
  Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Zap, Shield, Rocket,
  Brain, Globe, Lock, Code, Database, Cloud
} from 'lucide-react',
import Button from '../ui/Button';
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
  variant: string,
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
<<<<<<< HEAD
    website: string},
  realImplementation: boolean,
=======
    website: string
},
    realImplementation: boolean,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
<<<<<<< HEAD
  reviews: number}
<<<<<<< HEAD
=======
=======
  reviews: number
}
interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean;
  services?: Service[];
  maxServices?: number
}
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  subtitle;
  showFilters = false;
  services = []
  maxServices = 12
<<<<<<< HEAD
  maxServices?: number
=======
<<<<<<< HEAD
}) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean,
  services?: Service[],
  maxServices?: number
=======

<<<<<<< HEAD
  maxServices?: number}
}
>>>>>>> origin/chore/fix-lint-and-merge
}

<<<<<<< HEAD
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
=======
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps    /> = ({
  title;
  subtitle;
<<<<<<< HEAD
  showFilters = false;
  services = []
  maxServices = 12
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  title,
  subtitle,
  showFilters = $2;
  services = $2;
  maxServices = 12
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('popular'),

  const categories = [
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = []
  const filteredServices = useMemo(() => {}
    const filtered = services.filter(service => {'
      const matchesCategory = selectedCategory === 'all' |'
                             (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |'
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |'
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') |service.category.includes('DeFi') |service.category.includes('NFT'))) |'
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |'
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') |service.category.includes('Autonomous') |service.category.includes('Space') |service.category.includes('Biotech')));'
      const matchesPrice = selectedPriceRange === 'all' |'
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) |'
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) |'
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) |'
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  max_services?: number;
;
const EnhancedServiceShowcase: React.FC < EnhancedServiceShowcaseProps> = ({
  title,
  subtitle,
  show_filters = false,
  services = [],
  max_services = 12, }) => {  title;
  subtitle;
  show_filters = false;
  services = [],
  max_services = 12;
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState < string>('all');
  const [sort_by, setSortBy] = useState < string>('popular');
;
  const categories = [;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🧠' },
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
<<<<<<< HEAD
  ],

  const priceRanges = [
=======
<<<<<<< HEAD
];
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K/month' },
    { id: 'medium', name: '$1K - $5K/month' },
    { id: 'high', name: '$5K - $20K/month' },
    { id: 'premium', name: '$20K+/month' }
<<<<<<< HEAD
  ],
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
];
>>>>>>> merged-prs-20250907-203621
  const sortOptions = [
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const sortOptions = [
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' }
<<<<<<< HEAD
  ],

<<<<<<< HEAD
  const filteredServices = $2;
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000),

      return matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)),
        break,
=======
      case 'rating:;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;
      case 'roi':;

      case price - low:;
        filtered.sort (
          (a, b) =>;'
            parse_float (a.price.replace (/[$]/g, ')) -;
            parse_float (b.price.replace (/[$]/g, '')));
=======
<<<<<<< HEAD
];
=======
  ];


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const filteredServices = useMemo(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' |
                             (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') |service.category.includes('DeFi') |service.category.includes('NFT'))) |
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') |service.category.includes('Autonomous') |service.category.includes('Space') |service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' |
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice
    });
    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
      case 'roi':
        filtered.sort((a, b) => {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({;
  title,;
  subtitle,;
  showFilters = false,;
  services = [],;
  maxServices = 12,}) => {  title;

  subtitle;
  showFilters = false;
  services = [],;
  maxServices = 12;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'ai', name: 'AI & ML', icon: '🧠' },;
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },;
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },;
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },;
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' },  ];    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices' },;
    { id: 'low', name: 'Under $1K/month' },;
    { id: 'medium', name: '$1K - $5K/month' },;
    { id: 'high', name: '$5K - $20K/month' },;
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [;
    { id: 'popular', name: 'Most Popular' },;
    { id: 'rating', name: 'Highest Rated' },;
    { id: 'roi', name: 'Best ROI' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
  ];
  const filteredServices = useMemo(() => {;
    let filtered = services && services.filter(service => {;
      const matchesCategory =;
        selectedCategory === 'all' ||;
        (selectedCategory === 'ai' &&;
          (service && service.category.includes('AI') ||;
            service && service.category.includes('Machine Learning'))) ||;
        (selectedCategory === 'quantum' &&;
          (service && service.category.includes('Quantum') ||;
            service && service.category.includes('Space'))) ||;
        (selectedCategory === 'blockchain' &&;
          (service && service.category.includes('Blockchain') ||;
            service && service.category.includes('DeFi') ||;
            service && service.category.includes('NFT'))) ||;
        (selectedCategory === 'enterprise' &&;
          (service && service.category.includes('Enterprise') ||;
            service && service.category.includes('IT'))) ||;
        (selectedCategory === 'emerging' &&;
          (service && service.category.includes('Neural') ||;
            service && service.category.includes('Autonomous') ||;
            service && service.category.includes('Space') ||;
            service && service.category.includes('Biotech')));
      const matchesPrice =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;
        (selectedPriceRange === 'premium' &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;    });  ];
  const filteredServices = useMemo(() => {;
    const filtered = services && services.filter(service => {;
      const matchesCategory = selectedCategory === 'all' || ;
                             (selectedCategory === 'ai' && (service && service.category.includes('AI') || service && service.category.includes('Machine Learning'))) ||;
                             (selectedCategory === 'quantum' && (service && service.category.includes('Quantum') || service && service.category.includes('Space'))) ||;
                             (selectedCategory === 'blockchain' && (service && service.category.includes('Blockchain') || service && service.category.includes('DeFi') || service && service.category.includes('NFT'))) ||;
                             (selectedCategory === 'enterprise' && (service && service.category.includes('Enterprise') || service && service.category.includes('IT'))) ||;
                             (selectedCategory === 'emerging' && (service && service.category.includes('Neural') || service && service.category.includes('Autonomous') || service && service.category.includes('Space') || service && service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === 'medium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;
                          (selectedPriceRange === 'high' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;
                          (selectedPriceRange === 'premium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;
    });
    // Sort services;
    switch (sortBy) {;
      case 'popular':;
        filtered && filtered.sort((a, b) => (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0));
        break;
      case 'rating':;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;
      case 'roi':;
        filtered && filtered.sort((a, b) => {;
          const aROI = parseInt(a && a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b && b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI;
        });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        break;
      case price - high':;
        filtered.sort (
          (a, b) =>;'
            parse_float (b.price.replace (/[$]/g, )) -;'
            parse_float (a.price.replace (/[$]/g, ')));
        break;
        filtered && filtered.sort((a, b) => {const aROI = parseInt(a && a.roi.match(/\d+/)?.[0] || '0')const bROI = parseInt(b && b.roi.match(/\d+/)?.[0] || '0')return bROI - aROI;const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0')const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0')return bROI - aROI;})break;
      case 'price-low':;
        filtered && filtered.sort((a, b) =>;
            parseFloat(a && a.price.replace(/[$]/g, '')) -;
            parseFloat(b && b.price.replace(/[$]/g, '')))break;
      case 'price-high':;
        filtered && filtered.sort((a, b) =>;
            parseFloat(b && b.price.replace(/[$]/g, '')) -;
<<<<<<< HEAD
            parseFloat(a && a.price.replace(/[$]/g, '')))const price_ranges = [;
    { id: 'all', name: 'All Prices' },{ id: 'low', name: 'Under $1K / month' },{ id: 'medium', name: '$1K - $5K / month' },{ id: 'high', name: '$5K - $20K / month' },{ id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];const sort_options = [;
    { id: 'popular', name: 'Most Popular' },{ id: 'rating', name: 'Highest Rated' },{ id: 'roi', name: 'Best ROI' },{ id: 'price - low', name: 'Price Low to High' },{ id: 'price - high', name: 'Price High to Low' },];const filtered_services = useMemo (() => {let filtered = services.filter (service => {const matches_category =;
=======
            parseFloat(a && a.price.replace(/[$]/g, ''));
        );
;
  const price_ranges = [;
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1K / month' },
    { id: 'medium', name: '$1K - $5K / month' },
    { id: 'high', name: '$5K - $20K / month' },
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
;
  const sort_options = [;
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'roi', name: 'Best ROI' },
    { id: 'price - low', name: 'Price Low to High' },
    { id: 'price - high', name: 'Price High to Low' },
  ];
;
  const filtered_services = useMemo (() => {
    let filtered = services.filter (service => {
      const matches_category =;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        selected_category === 'all' ||;
        (selected_category === 'ai' &&;
          (service.category.includes ('AI') ||;
            service.category.includes ('Machine Learning'))) ||;
        (selected_category === 'quantum' &&;
          (service.category.includes ('Quantum') ||;
            service.category.includes ('Space'))) ||;
        (selected_category === 'blockchain' &&;
          (service.category.includes ('Blockchain') ||;
            service.category.includes ('DeFi') ||;
            service.category.includes ('NFT'))) ||;
        (selected_category === 'enterprise' &&;
          (service.category.includes ('Enterprise') ||;
            service.category.includes ('IT'))) ||;
        (selected_category === 'emerging' &&;
          (service.category.includes ('Neural') ||;
            service.category.includes ('Autonomous') ||;
            service.category.includes ('Space') ||;
            service.category.includes ('Biotech')))const matches_price =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 1000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 5000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;
        (selectedPriceRange === 'premium' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 20000)return matches_category && matches_price;    })];const filtered_services = useMemo (() => {const filtered = services.filter (service => {const matches_category = selected_category === 'all' ||;
                            (selected_category === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning'))) ||;
                            (selected_category === 'quantum' && (service.category.includes ('Quantum') || service.category.includes ('Space'))) ||;
                            (selected_category === 'blockchain' && (service.category.includes ('Blockchain') || service.category.includes ('DeFi') || service.category.includes ('NFT'))) ||;
                            (selected_category === 'enterprise' && (service.category.includes ('Enterprise') || service.category.includes ('IT'))) ||;
                            (selected_category === 'emerging' && (service.category.includes ('Neural') || service.category.includes ('Autonomous') || service.category.includes ('Space') || service.category.includes ('Biotech')))const matches_price = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === 'medium' && parse_float (service.price.replace (/[$]/g, '')) >= 1000 && parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
                          (selectedPriceRange === 'high' && parse_float (service.price.replace (/[$]/g, '')) >= 5000 && parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;
                          (selectedPriceRange === 'premium' && parse_float (service.price.replace (/[$]/g, '')) >= 20000)return matches_category && matches_price;
    })// Sort services;
    switch (sort_by) {case 'popular':;
        filtered.sort ((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))break;
    });
    // Sort services;
    switch (sortBy) {'
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;'
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;'
      case 'roi':
        filtered.sort((a, b) => {}
  subtitle;
  showFilters = false;
  services = [],;
  maxServices = 12;'
  const [selectedCategory, setSelectedCategory] = useState<string>('all');'
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');'
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [;'
    { id: 'all', name: 'All Services', icon: '🚀' },;'
    { id: 'ai', name: 'AI & ML', icon: '🧠' },;'
    { id: 'quantum', name: 'Quantum', icon: '⚛️' },;'
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },;'
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },;'
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' },  ];    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];
  const priceRanges = [;'
    { id: 'all', name: 'All Prices' },;'
    { id: 'low', name: 'Under $1K/month' },;'
    { id: 'medium', name: '$1K - $5K/month' },;'
    { id: 'high', name: '$5K - $20K/month' },;'
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [;'
    { id: 'popular', name: 'Most Popular' },;'
    { id: 'rating', name: 'Highest Rated' },;'
    { id: 'roi', name: 'Best ROI' },;'
    { id: 'price-low', name: 'Price Low to High' },;'
    { id: 'price-high', name: 'Price High to Low' },;
  ];
  const filteredServices = useMemo(() => {;
    let filtered = services && services.filter(service => {;
      const matchesCategory =;'
        selectedCategory === 'all' ||;'
        (selectedCategory === 'ai' &&;'
          (service && service.category.includes('AI') ||;'
            service && service.category.includes('Machine Learning'))) ||;'
        (selectedCategory === 'quantum' &&;'
          (service && service.category.includes('Quantum') ||;'
            service && service.category.includes('Space'))) ||;'
        (selectedCategory === 'blockchain' &&;'
          (service && service.category.includes('Blockchain') ||;'
            service && service.category.includes('DeFi') ||;'
            service && service.category.includes('NFT'))) ||;'
        (selectedCategory === 'enterprise' &&;'
          (service && service.category.includes('Enterprise') ||;'
            service && service.category.includes('IT'))) ||;'
        (selectedCategory === 'emerging' &&;'
          (service && service.category.includes('Neural') ||;'
            service && service.category.includes('Autonomous') ||;'
            service && service.category.includes('Space') ||;'
            service && service.category.includes('Biotech')));
      const matchesPrice =;'
        selectedPriceRange === 'all' ||;'
        (selectedPriceRange === 'low' &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;'
        (selectedPriceRange === 'medium' &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;'
        (selectedPriceRange === 'high' &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;'
        (selectedPriceRange === 'premium' &&;'
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
  const filteredServices = useMemo(() => {;
    const filtered = services && services.filter(service => {;'
      const matchesCategory = selectedCategory === 'all' || ;'
                             (selectedCategory === 'ai' && (service && service.category.includes('AI') || service && service.category.includes('Machine Learning'))) ||;'
                             (selectedCategory === 'quantum' && (service && service.category.includes('Quantum') || service && service.category.includes('Space'))) ||;'
                             (selectedCategory === 'blockchain' && (service && service.category.includes('Blockchain') || service && service.category.includes('DeFi') || service && service.category.includes('NFT'))) ||;'
                             (selectedCategory === 'enterprise' && (service && service.category.includes('Enterprise') || service && service.category.includes('IT'))) ||;'
                             (selectedCategory === 'emerging' && (service && service.category.includes('Neural') || service && service.category.includes('Autonomous') || service && service.category.includes('Space') || service && service.category.includes('Biotech')));'
      const matchesPrice = selectedPriceRange === 'all' ||;'
                          (selectedPriceRange === 'low' && parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;'
                          (selectedPriceRange === 'medium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 5000) ||;'
                          (selectedPriceRange === 'high' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service && service.price.replace(/[$]/g, '')) < 20000) ||;'
                          (selectedPriceRange === 'premium' && parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
    // Sort services;
    switch (sortBy) {;'
      case 'popular':;
        filtered && filtered.sort((a, b) => (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0));
        break;'
      case 'rating':;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;'
      case 'roi':;
        filtered.sort ((a, b) => {const aROI = parse_int (a.roi.match (/\d+/)?.[0] || '0')const bROI = parse_int (b.roi.match (/\d+/)?.[0] || '0')return bROI - aROI;
        })break;
      case 'price - low':;
        filtered.sort (
          (a, b) =>;'
            parse_float (a.price.replace (/[$]/g, '')) -;'
            parse_float (b.price.replace (/[$]/g, '')))break;'
      case 'price - high':;'
=======
  showFilters;

const [selectedCategory, setSelectedCategory] = useState<string    />('all');

const [selectedPriceRange, setSelectedPriceRange] = useState<string    />('all');

const [sortBy, setSortBy] = useState<string    />('popular');

const categories = [

    { id: 'all'}
  name: 'All Services', icon: '🚀'}
},
    { id: 'ai'}
  name: 'AI & ML', icon: '🧠'}
},
    { id: 'quantum'}
  name: 'Quantum', icon: '⚛️'}
},
    { id: 'blockchain'}
  name: 'Blockchain', icon: '⛓️'}
},
    { id: 'enterprise'}
  name: 'Enterprise', icon: '🏢'}
},
{ id: 'emerging'}
  name: 'Emerging Tech', icon: '🌟'}
}
  ];

const priceRanges = [
    { id: 'all'}
  name: 'All Prices'}
},
    { id: 'low'}
  name: 'Under $1K/month'}
},
    { id: 'medium'}
  name: '$1K - $5K/month'}
},
    { id: 'high'}
  name: '$5K - $20K/month'}
},
{ id: 'premium'}
  name: '$20K+/month'}
}
  ];

const sortOptions = [
    { id: 'popular'}
  name: 'Most Popular'}
},
    { id: 'rating'}
  name: 'Highest Rated'}
},
    { id: 'roi'}
  name: 'Best ROI'}
},
    { id: 'price-low'}
  name: 'Price Low to High'}
},
{ id: 'price-high'}
  name: 'Price High to Low'}
}
  ];

const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
     ;
  const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' &&
          (service.category.includes('AI') |
            service.category.includes('Machine Learning'))) |
        (selectedCategory === 'quantum' &&
          (service.category.includes('Quantum') |
            service.category.includes('Space'))) |
        (selectedCategory === 'blockchain' &&
          (service.category.includes('Blockchain') |
            service.category.includes('DeFi') |
            service.category.includes('NFT'))) |
        (selectedCategory === 'enterprise' &&
          (service.category.includes('Enterprise') |
            service.category.includes('IT'))) |
        (selectedCategory === 'emerging' &&
          (service.category.includes('Neural') |
            service.category.includes('Autonomous') |
            service.category.includes('Space') |
            service.category.includes('Biotech')));

const matchesPrice =
        selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' &&
          parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
        (selectedPriceRange === 'medium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 1000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
        (selectedPriceRange === 'high' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 5000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
        (selectedPriceRange === 'premium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
}
      return matchesCategory && matchesPrice;}
    });
    // Sort services;
switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
>>>>>>> merged-prs-20250907-203621
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = $2;
          const bROI = $2;
          return bROI - aROI
        }),
        break,
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, ''))),
        break,
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, ''))),
        break,
      default: break}

<<<<<<< HEAD
    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]),

  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
=======
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');

const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');}
return bROI - aROI;}
        });
        break;

      case 'price-low':;
        filtered && filtered.sort((a, b) =>;
            parseFloat(a && a.price.replace(/[$]/g, '')) -;
            parseFloat(b && b.price.replace(/[$]/g, '')))break;
      case 'price-high':;
        filtered && filtered.sort((a, b) =>;
            parseFloat(b && b.price.replace(/[$]/g, '')) -;
            parseFloat(a && a.price.replace(/[$]/g, '')))const price_ranges = [
  { id: 'all'}
  name: 'All Prices'}
},{ id: 'low'}
  name: 'Under $1K / month'}
},{ id: 'medium'}
  name: '$1K - $5K / month'}
},{ id: 'high'}
  name: '$5K - $20K / month'}
},{ id: 'premium'}
  name: '$20K+/month'}
}  ];    { id: 'premium'}
  name: '$20K+/month'}
}
  ];

const sort_options = [
  { id: 'popular'}
  name: 'Most Popular'}
},{ id: 'rating'}
  name: 'Highest Rated'}
},{ id: 'roi'}
  name: 'Best ROI'}
},{ id: 'price - low'}
  name: 'Price Low to High'}
},{ id: 'price - high'}
  name: 'Price High to Low'}
}];

const filtered_services = useMemo (() => {let filtered = services.filter (service => ;
  const matches_category =;
        selected_category === 'all' ||;
        (selected_category === 'ai' &&;
          (service.category.includes ('AI') ||;
            service.category.includes ('Machine Learning'))) ||;
        (selected_category === 'quantum' &&;
          (service.category.includes ('Quantum') ||;
            service.category.includes ('Space'))) ||;
        (selected_category === 'blockchain' &&;
          (service.category.includes ('Blockchain') ||;
            service.category.includes ('DeFi') ||;
            service.category.includes ('NFT'))) ||;
        (selected_category === 'enterprise' &&;
          (service.category.includes ('Enterprise') ||;
            service.category.includes ('IT'))) ||;
        (selected_category === 'emerging' &&;
          (service.category.includes ('Neural') ||;
            service.category.includes ('Autonomous') ||;
            service.category.includes ('Space') ||;
            service.category.includes ('Biotech')))const matches_price =;
        selectedPriceRange === 'all' ||;
        (selectedPriceRange === 'low' &&;
          parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === 'medium' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 1000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parse_float (service.price.replace (/[$]/g, '')) >= 5000 &&;
          parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;}
        (selectedPriceRange === 'premium' &&;}
          parse_float (service.price.replace (/[$]/g, '')) >= 20000)return matches_category && matches_price;    })];

const filtered_services = useMemo (() => {const filtered = services.filter (service => ;
  const matches_category = selected_category === 'all' ||;
                            (selected_category === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning'))) ||;
                            (selected_category === 'quantum' && (service.category.includes ('Quantum') || service.category.includes ('Space'))) ||;
                            (selected_category === 'blockchain' && (service.category.includes ('Blockchain') || service.category.includes ('DeFi') || service.category.includes ('NFT'))) ||;
                            (selected_category === 'enterprise' && (service.category.includes ('Enterprise') || service.category.includes ('IT'))) ||;
                            (selected_category = == 'emerging' && (service.category.includes ('Neural') || service.category.includes ('Autonomous') || service.category.includes ('Space') || service.category.includes ('Biotech'));
  const matches_price = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parse_float (service.price.replace (/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === 'medium' && parse_float (service.price.replace (/[$]/g, '')) >= 1000 && parse_float (service.price.replace (/[$]/g, '')) < 5000) ||;
                          (selectedPriceRange === 'high' && parse_float (service.price.replace (/[$]/g, '')) >= 5000 && parse_float (service.price.replace (/[$]/g, '')) < 20000) ||;
                          (selectedPriceRange = == 'premium' && parse_float (service.price.replace (/[$]/g, '')) >= 20000;}
  return matches_category && matches_price;}
    })// Sort services;
    switch (sort_by) {case 'popular':;
        filtered.sort ((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))break;
      case 'rating':;
        filtered.sort ((a, b) => (b.rating || 0) - (a.rating || 0))break;
      case 'roi':;
        filtered.sort ((a, b) => {const aROI = parse_int (a.roi.match (/\d+/)?.[0] || '0';
  const bROI = parse_int (b.roi.match (/\d+/)?.[0] || '0';}
  return bROI - aROI;}
        })break;
      case 'price - low':;
        filtered.sort ((a, b) =>;
            parse_float (a.price.replace (/[$]/g, '')) -;
            parse_float (b.price.replace (/[$]/g, '')))break;
      case 'price - high':;
>>>>>>> origin/chore/fix-lint-and-merge
        filtered.sort ((a, b) =>;
            parse_float (b.price.replace (/[$]/g, '')) -;
<<<<<<< HEAD
            parse_float (a.price.replace (/[$]/g, '')))break;
      default:;
        break;
    }
=======
            parse_float (a.price.replace (/[$]/g, '')));
        break;
      default:;
        break;
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0');
          return bROI - aROI
        });
    return filtered.slice (0, max_services);
  }, [services, selected_category, selectedPriceRange, sort_by, max_services]);
;
  const stats = [;
    {
      label: 'Total Services',
      value: services.length,
      icon: Rocket,
      color: 'text - blue - 400',
    },
    {
      label: 'Active Customers',
      value: services.reduce ((sum, s) => sum + (s.customers || 0), 0),
      icon: Users,
      color: 'text - green - 400',
    },
    {
      label: 'Average Rating',
      value: (
        services.reduce ((sum, s) => sum + (s.rating || 0), 0) / services.length).to_fixed (1),
      icon: Star,
      color: 'text - yellow - 400',
    },
    {
      label: 'Market Growth',
      value: '300%+',
      icon: TrendingUp,
      color: 'text - purple - 400',
    },
  ];
;
  return (
    <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <div className='max - w-7xl mx - auto'>;
        {/* Header */}
        <div className='text - center mb - 16'>          <motion.h2;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'          >        });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        break;
      case 'price - low':;
        filtered.sort ((a, b) => parse_float (a.price.replace (/[$]/g, '')) - parse_float (b.price.replace (/[$]/g, '')))break;
      case 'price - high':;
<<<<<<< HEAD
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, '')) - parse_float (a.price.replace (/[$]/g, '')))break;
<<<<<<< HEAD
    return filtered && filtered.slice(0, maxServices)}, [services, selectedCategory, selectedPriceRange, sortBy, maxServices])const stats = [;
    {label: 'Total Services',value: services && services.length,icon: Rocket,color: 'text-blue-400',},{label: 'Active Customers',value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0),icon: Users,color: 'text-green-400',},{label: 'Average Rating',value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length;
      ).toFixed(1),icon: Star,color: 'text-yellow-400',},{label: 'Market Growth',value: '300%+',icon: TrendingUp,color: 'text-purple-400',},return (<section className='py-20 px-4 sm:px-6 lg:px-8'>;
=======
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, '')) - parse_float (a.price.replace (/[$]/g, '')));
        break;
<<<<<<< HEAD
    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
=======


    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const stats = [;
    {;
      label: 'Total Services',;
      value: services && services.length,;
      icon: Rocket,;
      color: 'text-blue-400',;
    },;
    {;
      label: 'Active Customers',;
      value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0),;
      icon: Users,;
      color: 'text-green-400',;
    },;
    {;
      label: 'Average Rating',;
      value: (;
        services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length;
      ).toFixed(1),;
      icon: Star,;
      color: 'text-yellow-400',;
    },;
    {;
      label: 'Market Growth',;
      value: '300%+',;
      icon: TrendingUp,;
      color: 'text-purple-400',;
    },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];
  ];



  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}<div className='text-center mb-16'>          <motion&& motion.h2;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>        })break;
      case 'price-low':;
        filtered && filtered.sort((a, b) => parseFloat(a && a.price.replace(/[$]/g, '')) - parseFloat(b && b.price.replace(/[$]/g, '')))break;
      case 'price-high':;
        filtered && filtered.sort((a, b) => parseFloat(b && b.price.replace(/[$]/g, '')) - parseFloat(a && a.price.replace(/[$]/g, '')))break;
      default: break;
    }
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (<section className="py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}<div className='text-center mb-16'>;
          <motion.h2;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6';
          >;
        {/* Header */}
        <div className='text-center mb-16'>          <motion&& motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>        });
        break;
      case 'price-low':;
        filtered && filtered.sort((a, b) => parseFloat(a && a.price.replace(/[$]/g, '')) - parseFloat(b && b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':;
        filtered && filtered.sort((a, b) => parseFloat(b && b.price.replace(/[$]/g, '')) - parseFloat(a && a.price.replace(/[$]/g, '')));
        break;
      default: break;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return filtered && filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [;
    { label: 'Total Services', value: services && services.length, icon: Rocket, color: 'text-blue-400' },;
    { label: 'Active Customers', value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0), icon: Users, color: 'text-green-400' },;
    { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ],

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
<<<<<<< HEAD
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="text-center mb-16">
                             (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') || service.category.includes('Space'))) ||
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') || service.category.includes('DeFi') || service.category.includes('NFT'))) ||
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('IT'))) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') || service.category.includes('Autonomous') || service.category.includes('Space') || service.category.includes('Biotech'))),

      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) ||
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) ||
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) ||
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000),

      return matchesCategory && matchesPrice
    }),

    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)),
        break,
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)),
        break,
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] || '0')
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] || '0')
          return bROI - aROI
        }),
        break,
    }

    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]),

  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' },
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text-green-400' },
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating || 0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ],

  return (
    <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-16&quot;>

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Zap
  Shield
  Rocket
  Brain
  Globe
  Lock
  Code
  Database
  Cloud;

  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  Lock,
  Code,
  Database,;
  Cloud,;
import Button from '../ui/Button';
interface Service {
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
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string;
  }

  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;

  reviews: number;

interface EnhancedServiceShowcaseProps {
  title: string;
  subtitle: string;
  showFilters?: boolean;
  services?: Service[];

  maxServices?: number;
const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  title
  subtitle
  showFilters = false
  services = []
  maxServices = 12,}) => {  title;
  subtitle;
  showFilters = false;
  services = []
  maxServices = 12
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' }
    { id: 'ai', name: 'AI & ML', icon: '🧠' }
    { id: 'quantum', name: 'Quantum', icon: '⚛️' }
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️' }
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' }
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' },  ];    { id: 'emerging', name: 'Emerging Tech', icon: '🌟' }
  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices' }
    { id: 'low', name: 'Under $1K/month' }
    { id: 'medium', name: '$1K - $5K/month' }
    { id: 'high', name: '$5K - $20K/month' }
    { id: 'premium', name: '$20K+/month' },  ];    { id: 'premium', name: '$20K+/month' }
  ];
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' }
    { id: 'rating', name: 'Highest Rated' }
    { id: 'roi', name: 'Best ROI' }
    { id: 'price-low', name: 'Price Low to High' }
    { id: 'price-high', name: 'Price High to Low' }
  ];
  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' &&
          (service.category.includes('AI') |
            service.category.includes('Machine Learning'))) |
        (selectedCategory === 'quantum' &&
          (service.category.includes('Quantum') |
            service.category.includes('Space'))) |
        (selectedCategory === 'blockchain' &&
          (service.category.includes('Blockchain') |
            service.category.includes('DeFi') |
            service.category.includes('NFT'))) |
        (selectedCategory === 'enterprise' &&
          (service.category.includes('Enterprise') |
            service.category.includes('IT'))) |
        (selectedCategory === 'emerging' &&
          (service.category.includes('Neural') |
            service.category.includes('Autonomous') |
            service.category.includes('Space') |
            service.category.includes('Biotech')));
      const matchesPrice =
        selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' &&
          parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
        (selectedPriceRange === 'medium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 1000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
        (selectedPriceRange === 'high' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 5000 &&
          parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
        (selectedPriceRange === 'premium' &&
          parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice;    });  ];
  const filteredServices = useMemo(() => {
    const filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' |
                             (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |
                             (selectedCategory === 'quantum' && (service.category.includes('Quantum') |service.category.includes('Space'))) |
                             (selectedCategory === 'blockchain' && (service.category.includes('Blockchain') |service.category.includes('DeFi') |service.category.includes('NFT'))) |
                             (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') |service.category.includes('IT'))) |
                             (selectedCategory === 'emerging' && (service.category.includes('Neural') |service.category.includes('Autonomous') |service.category.includes('Space') |service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === 'all' |
                          (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$]/g, '')) < 1000) |
                          (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, '')) < 5000) |
                          (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$]/g, '')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, '')) >= 20000);
      return matchesCategory && matchesPrice
    });
    // Sort services
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
      case 'roi':
        filtered.sort((a, b) => {
          const aROI = parseInt(a.roi.match(/\d+/)?.[0] |'0');
          const bROI = parseInt(b.roi.match(/\d+/)?.[0] |'0');
          return bROI - aROI;
        });
        break;
      case 'price-low':
        filtered.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[$]/g, '')) -
            parseFloat(b.price.replace(/[$]/g, ''))
        );
        break;
      case 'price-high':
        filtered.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[$]/g, '')) -
            parseFloat(a.price.replace(/[$]/g, ''))
        );
        break;
      default:
        break;
    }
    return filtered.slice(0, maxServices);
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [
    {
      label: 'Total Services'
      value: services.length
      icon: Rocket
      color: 'text-blue-400'
    }
    {
      label: 'Active Customers'
      value: services.reduce((sum, s) => sum + (s.customers |0), 0)
      icon: Users
      color: 'text-green-400'
    }
    {
      label: 'Average Rating'
      value: (
        services.reduce((sum, s) => sum + (s.rating |0), 0) / services.length
      ).toFixed(1)
      icon: Star
      color: 'text-yellow-400'
    }
    {
      label: 'Market Growth'
      value: '300%+'
      icon: TrendingUp
      color: 'text-purple-400'
    }
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'          >        });
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$]/g, '')) - parseFloat(b.price.replace(/[$]/g, '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$]/g, '')) - parseFloat(a.price.replace(/[$]/g, '')));
        break;
      default: break
    }
    return filtered.slice(0, maxServices)
  }, [services, selectedCategory, selectedPriceRange, sortBy, maxServices]);
  const stats = [
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text-blue-400' }
    { label: 'Active Customers', value: services.reduce((sum, s) => sum + (s.customers |0), 0), icon: Users, color: 'text-green-400' }
    { label: 'Average Rating', value: (services.reduce((sum, s) => sum + (s.rating |0), 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400' }
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text-purple-400' }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}





            {title}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >

            {title}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            {subtitle}

          </motion && motion.p>;



<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {title}
          </motion && motion.h2>;
          <motion&& motion.p;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto';
          >;
            {subtitle}
<<<<<<< HEAD
          </motion.p>;
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >;
          >;
            transition={{ duration: 0.8, delay: 0.2 }}
className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'
          >
            {subtitle}
          </motion.p>
=======

          </motion && motion.p>;


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

            {subtitle}
          </motion.p>

<<<<<<< HEAD
            {subtitle}
=======

<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion && motion.p>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Stats */}
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}>;
            {stats.map((stat, index) => (</motion.h2>;
          <motion.p;
            }
            initial={{ "opacity": 0, "y": 30 
=======
    return filtered && filtered.slice(0, maxServices)}, [services, selectedCategory, selectedPriceRange, sortBy, maxServices])const stats = [
  {label: 'Total Services'}
  value: services && services.length,icon: Rocket,color: 'text-blue-400'},{label: 'Active Customers'}
  value: services && services.reduce((sum, s) => sum + (s && s.customers || 0), 0),icon: Users,color: 'text-green-400'},{label: 'Average Rating'}
  value: (services && services.reduce((sum, s) => sum + (s && s.rating || 0), 0) / services && services.length;}
      ).toFixed(1),icon: Star,color: 'text-yellow-400'},{label: 'Market Growth'}
  value: '300%+',icon: TrendingUp,color: 'text-purple-400'},return (<section className='py-20 px-4 sm:px-6 lg:px-8'    />;
      <div className='max-w-7xl mx-auto'    />;

        {/* Header */}

        <div className='text-center mb-16'    />
          <motion.h2;
initial={{ opacity: 0, y: 30 }
}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'
              />

            {titl}
}
          </motion && motion.h2>;
          <motion&& motion.p;
            initial={{ opacity: 0, y: 30 }
}
            whileInView={{ opacity: 1, y: 0 }
}
            transition={{ duration: 0.8, delay: 0.2 }}
className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'    />

            {subtitl}
}
          </motion.p>;
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >>

            {subtitle}
          </motion.p>;
            {subtitle}
          {/* Stats */}
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }
}
            whileInView={{ opacity: 1, y: 0 }
}    />;
            {stats.map((stat, index) => (</motion.h2>;
          <motion.p;}
            initial={{ opacity: 0, y: 30 }
>>>>>>> origin/chore/fix-lint-and-merge
}
            whileInView={{ opacity: 1, y: 0 }
}
            transition={{ duration: 0.8, delay: 0.2 }}
          {/* Stats *}
}
          <motion.div;
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto';
          >;
            {stats.map((stat, index) => (<div key={index} className='text-center'>;
                <div className={`${stat.color} mb-2 flex justify-center`}>;
                  <stat.icon className='w-8 h-8' />;
=======
            initial={{ opacity: 0, y: 30 }
}
            whileInView={{ opacity: 1, y: 0 }
}
            transition={{ duration: 0.8, delay: 0.4 }
}
className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'    />

            {stats.map((stat, index) => (<div key={index} className='text-center'    />;
                <div className={`${stat.color} mb-2 flex justify-center`}    />

<<<<<<< HEAD
                  <stat.icon className='w-8 h-8'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                </div>;
                <div className='text-2xl font-bold text-white'    />;
                  {stat.value}
                </div>;
                <div className='text-sm text-gray-400'    />{stat.label}</div>;
              </div>;
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.4 }}
className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'
          >
            {stats.map((stat, index) => (
              <div key={index} className=text-center'>
                <div className={`${stat.color} mb-2 flex justify-center`}>'
                  <stat.icon className=w-8 h-8 />
                </div>'
                <div className='text-2xl font-bold text-white>
                  {stat.value}
=======
<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            {stats.map((stat, index) => (
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

            {subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'

          >
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className='w-8 h-8' />
                </div>
                <div className='text-2xl font-bold text-white'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>              </div>          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon className="w-8 h-8" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
            ))}
          </motion.div>;
        </div>;
            ))}
=======

          </motion && motion.div>;
        </div>;




>>>>>>> merged-prs-20250907-203621
            ))}
          </motion.div>
        </div>

<<<<<<< HEAD
        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
<<<<<<< HEAD
            ))}
          </motion.div>
        </div>

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Filters */}
<<<<<<< HEAD
        {showFilters && (<motion&& motion.div;
            }
            initial={{ "opacity": 0, "y": 30 
=======
        {showFilters && (<motion&& motion.div;}
            initial={{ opacity: 0, y: 30 }
>>>>>>> origin/chore/fix-lint-and-merge
}

<<<<<<< HEAD
            whileInView={{ opacity: 1, y: 0 }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
            transition={{ "duration": 0.8, "delay": 0.6 }}
className='mb-12''
          >
<<<<<<< HEAD
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>'
              <div className='grid grid-cols-1 "md":grid-cols-3 gap-6'>'
>>>>>>> merged-prs-20250907-203621
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
<<<<<<< HEAD
=======
            whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.6 }}
className='mb-12';
          >;
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>;
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
                {/* Category Filter */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-3'>;
                    Category;
                  </label>;
            transition={{ duration: 0.8, delay: 0.6 }}
className='mb-12'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

              <div className=grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Category Filter */}
                <div>'
                  <label className=block text-sm font-medium text-gray-300 mb-3>
                    Category;
                  </label>
                  <select;
                    value={selectedCategory}
                {/* Category Filter */}
                <div>;"
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent''
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
=======
=======
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb-12'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Category Filter */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-3'>
                    Category
                  </label>
                  <select
                    value={selectedCategory}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0.8, delay: 0.6 }}
className='mb-12'
              />
            <div className='bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'    />
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'    />
                {/* Category Filter */}
                <div    />
                  <label className='block text-sm font-medium text-gray-300 mb-3'    />
                    Category;
                  </label>
                  <select;
value={selectedCategory}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
                    onChange={e =    /> setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {categories.map(category => (}
                      <option key={category.id} value={category.id}    />

                        {category.icon} {category.nam}
}
                      </option>;
                    ))}
                  </select>;
                </div>;
<<<<<<< HEAD


                {/* Price Range Filter */}
                <div>
<label className='block text-sm font-medium text-gray-300 mb-3'>
                    Price Range
                  </label>
                  <select;
                    value={selectedCategory}{/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}onChange={e => setSelectedCategory(e.target.value)}
                    className=w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent;
                  >;
                    {categories.map(category => (<option key={category.id} value={category.id}>;
=======
<<<<<<< HEAD
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {categories.map(category => (                      <option key={category.id} value={category.id}>          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select
                    value={selectedCategory}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        {category.icon} {category.name}
                      </option>
                    ))}
<<<<<<< HEAD
          whileInView={{ opacity: 1, y: 0 }}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </select>;
                </div>;


<<<<<<< HEAD



                {/* Price Range Filter */}


=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Price Range Filter */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {range.name}

                  </select>;
                </div>;


<<<<<<< HEAD



=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Sort Options */}


                        {option.name}
                      </option>
<<<<<<< HEAD
                    ))}

                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                    {categories.map(category => (                      <option key={category.id} value={category.id}>

                      <option key={category.id} value={category.id}>

                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-Price Range">Price Range</label>
                  <select
      default: break;
    }
    return filtered.slice (0, max_services);
  }, [services, selected_category, selectedPriceRange, sort_by, max_services]);
;
  const stats = [;
    { label: 'Total Services', value: services.length, icon: Rocket, color: 'text - blue - 400' },
    { label: 'Active Customers', value: services.reduce ((sum, s) => sum + (s.customers || 0), 0), icon: Users, color: 'text - green - 400' },
    { label: 'Average Rating', value: (services.reduce ((sum, s) => sum + (s.rating || 0), 0) / services.length).to_fixed (1), icon: Star, color: 'text - yellow - 400' },
    { label: 'Market Growth', value: '300%+', icon: TrendingUp, color: 'text - purple - 400' }
  ];
;
  return (
    <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
      <div className="max - w-7xl mx - auto">;
        {/* Header */}
        <div className="text - center mb - 16">;
          <motion.h2;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6'            className="text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6";
          >;
            {title}
          </motion.h2>;
          <motion.p;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'          >            className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto";
          >;
            {subtitle}
          </motion.p>;
          {/* Stats */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto';
          >;
            {stats.map ((stat, index) => (
              <div key={index} className='text - center'>;
                <div className={`${stat.color} mb - 2 flex justify - center`}>;
                  <stat.icon className='w - 8 h - 8' />;
                </div>;
                <div className='text - 2xl font - bold text - white'>;
                  {stat.value}
                </div>;
                <div className='text - sm text - gray - 400'>{stat.label}</div>              </div>          >;
            {stats.map ((stat, index) => (
              <div key={index} className="text - center">;
                <div className={`${stat.color} mb - 2 flex justify - center`}>;
                  <stat.icon className="w - 8 h - 8" />;
                </div>;
                <div className="text - 2xl font - bold text - white">{stat.value}</div>;
                <div className="text - sm text - gray - 400">{stat.label}</div>;
              </div>))}
          </motion.div>;
        </div>;
        {/* Filters */}
        {show_filters && (
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mb - 12';
          >;
            <div className='bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50'>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
                {/* Category Filter */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Category;
                  </label>;
                  <select;
                    value={selected_category}
                    on_change={e => setSelectedCategory (e.target.value)}
                    className='w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                  >;
                    {categories.map (category => (                      <option key={category.id} value={category.id}>          >;
            <div className="bg - gray - 900 / 50 backdrop - blur - sm rounded - 2xl p - 6 border border - gray - 700 / 50">;
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
                {/* Category Filter */}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 3" html_for="input - Category">Category</label>;
                  <select;
                    value={selected_category}
                    on_change={(e) => setSelectedCategory (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  >;
                    {categories.map ((category) => (
                      <option key={category.id} value={category.id}>;
>>>>>>> merged-prs-20250907-203621
                        {category.icon} {category.name}
                      </option>))}
                  </select>;
                </div>;
                {/* Price Range Filter */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Price Range;
                  </label>;
                  <select;
                    value={selectedPriceRange}
                    onChange={e => setSelectedPriceRange(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>

                      <option key={range.id} value={range.id}>

                        {range.name}
                      </option>
                    ))}
<<<<<<< HEAD
=======
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3" htmlFor="input-Sort By">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>

                      <option key={option.id} value={option.id}>

                        {option.name}
                      </option>
                    ))}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}

                      </option>))}
                  </select>;
                </div>;
                {/* Sort Options */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 3'>;
                    Sort By;
                  </label>;
                  <select;
                    value={sort_by}
                    on_change={e => setSortBy (e.target.value)}
                    className='w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                  >;
                    {sort_options.map (option => (                      <option key={option.id} value={option.id}>                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  >;
                    {sort_options.map ((option) => (
                      <option key={option.id} value={option.id}>;
                        {option.name}
                      </option>))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </select>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className=block text-sm font-medium text-gray-300 mb-3>Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
<<<<<<< HEAD
=======
                    {priceRanges.map(range => (
                      <option key={range.id} value={range.id}>
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>


                        {range.name}
                      </option>;
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
<label className='block text-sm font-medium text-gray-300 mb-3'>
                    Sort By
                  </label>
                  <select;
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}'
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>


                  </label>
=======
                  </select>;
                </div>;{/* Price Range Filter */}
                <div    />;
<label className='block text-sm font-medium text-gray-300 mb-3'    />;
                    Price Range;
                  </label>;
                  <select;
                    value={selectedPriceRange}
                    onChange={e =    /> setSelectedPriceRange(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent'>

                    {priceRanges.map(range => (<option key={range.id} value={range.i}
}    />;
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}    />;
>>>>>>> merged-prs-20250907-203621
                        {range.name}
                      </option>
                    ))}
<<<<<<< HEAD
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
=======
                  </select>;
                </div>;
                  </select>;
                </div>;{/* Sort Options */}
                <div    />;
<label className='block text-sm font-medium text-gray-300 mb-3'    />;
                    Sort By;
                  </label>;
>>>>>>> origin/chore/fix-lint-and-merge
                  <select;
                    value={sortBy}
                    onChange={e =    /> setSortBy(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent'>

                    {sortOptions.map(option => (<option key={option.id} value={option.i}
}    />;
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}    />;
>>>>>>> merged-prs-20250907-203621
                        {option.name}
                      </option>;
                    ))}
<<<<<<< HEAD
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
=======
                {/* Price Range Filter */}
<<<<<<< HEAD
                <div    />
                  <label className='block text-sm font-medium text-gray-300 mb-3'    />
                    Price Range
                  </label>
                  <select
=======
                <div    />;
                  <label className='block text-sm font-medium text-gray-300 mb-3'    />;
                    Price Range;
                  </label>;
                  <select;
>>>>>>> origin/chore/fix-lint-and-merge
                    value={selectedPriceRange}
                    onChange={e =    /> setSelectedPriceRange(e && e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent'>

                    {priceRanges && priceRanges.map(range => (                      <option key={range && range.id} value={range && range.i}
<<<<<<< HEAD
}    />                  <select
=======
}    />                  <select;
>>>>>>> origin/chore/fix-lint-and-merge
                    value={selectedPriceRange}
                    onChange={(e) =    /> setSelectedPriceRange(e && e.target.value)}
                    className=\"w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent\">

                    {priceRanges && priceRanges.map((range) => (<option key={range && range.id} value={range && range.i}
<<<<<<< HEAD
}    />
=======
}    />;
>>>>>>> origin/chore/fix-lint-and-merge
                        {range && range.name}
                      </option>;
                    value={selectedPriceRange}
                    on_change={(e) => setSelectedPriceRange (e.target.value)}"
                    className=\"w - full bg - gray - 800 / 50 border border - gray - 600 rounded - lg px - 4 py - 2 text - white focus: ring - 2 focus:ring - cyan - 500 focus:border - transparent\">

                    {price_ranges.map ((range) => (<option key={range.id} value={range.i}
}    />;
                        {range.name}
                    ))}
                {/* Sort Options */}
<<<<<<< HEAD
                <div    />
                  <label className='block text-sm font-medium text-gray-300 mb-3'    />
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                  </select    />
                </div>
              </div>
            </div>
          </motion.div>
        )}

<<<<<<< HEAD
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
<<<<<<< HEAD
          whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.8 }}
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
        >;
          <AnimatePresence>;
            {filteredServices.map((service, index) => (<motion.div;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </motion.div>)}
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          <AnimatePresence>;
            {filtered_services.map ((service, index) => (<motion.div;
          transition={{ duration: 0.8, delay: 0.8 }}'"
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          <AnimatePresence>;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
          </motion.div>)}
=======
                <div    />;
                  <label className='block text-sm font-medium text-gray-300 mb-3'    />;
                    Sort By;
                  </label>;
                  <select;
                    value={sortBy}
                  </select    />;
                </div>;
              </div>;
            </div>;
        {/* Services Grid */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }
}

          whileInView={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.8, delay: 0.8 }
}
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            />
          <AnimatePresence    />
            {filteredServices.map((service, index) => (
              <motion.div}
}
          </motion.div    />)}
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }
}
          whileInView={{ opacity: 1, coordinate_y: 0 }
}
          transition={{ duration: 0.8, delay: 0.8 }
}"
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'            />          className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8\">

          <AnimatePresence    />;
            {filtered_services.map ((service, index) => (<motion.div;}
                key={service.id}
<<<<<<< HEAD
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
=======
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }
}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }
}
>>>>>>> origin/chore/fix-lint-and-merge

                transition={{ duration: 0.6, delay: index * 0.1 }
}

<<<<<<< HEAD
                whileHover={{ "y": -5, "scale": 1.02 }}
className='group''
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                whileHover={{ y: -5, scale: 1.02 }}
className='group'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full>                      ⭐ Most Popular


<<<<<<< HEAD
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Most Popular
=======
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular

                      ⭐ Most Popular



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </div>
=======
                whileHover={{ y: -5, scale: 1.02 }}
className='group'
                  />
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'    />
                  {/* Popular Badge */}
                  {service.popular && (

                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'    />
                      ⭐ Most Popular;
}
                    </div>}
>>>>>>> origin/chore/fix-lint-and-merge
                  )}

                  {/* Header */}

<<<<<<< HEAD
<div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-3xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
                transition={{ duration: 0.6, delay: index * 0.1 }}whileHover={{ y: -5, scale: 1.02 }}
className='group';
              >;
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>;
                  {/* Popular Badge */}
                  {service.popular && (<div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular;
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>;
                      ⭐ Most Popular;
<<<<<<< HEAD
                    </div>;
                  )}{/* Header */}<div className='mb-6'>;
                    <div className='flex items-center justify-between mb-4'>;
                      <div className='text-3xl'>{service.icon}</div>;
                      <div className='text-right'>;
                        <div className='text-2xl font-bold text-white'>;
=======
                    </div>)}
                  {/* Header */}
                  <div className='mb - 6'>;
                    <div className='flex items - center justify - between mb - 4'>;
                      <div className='text - 3xl'>{service.icon}</div>;
                      <div className='text - right'>;
                        <div className='text - 2xl font - bold text - white'>;
<<<<<<< HEAD
                whileHover={{ y: -5, scale: 1.02 }}
                className='group'

              >
                <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full'>
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
>>>>>>> merged-prs-20250907-203621
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Most Popular
<<<<<<< HEAD
=======
                    </div>
                  )}
                    <div className='absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full'>                      ⭐ Most Popular

                      ⭐ Most Popular

>>>>>>> merged-prs-20250907-203621
                    </div>
                  )}

                  {/* Header */}
<<<<<<< HEAD
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
=======
                  <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-3xl'>{service.icon}</div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-white'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          {service.price}
=======
<div className='mb-6'    />
                    <div className='flex items-center justify-between mb-4'    />
                      <div className='text-3xl'    />{service.icon}</div>
                      <div className='text-right'    />
                        <div className='text-2xl font-bold text-white'    />

                          {service.pric}
}
>>>>>>> origin/chore/fix-lint-and-merge
                        </div>;
                        <div className='text - sm text - gray - 400'    />;
                          {service.period}
<<<<<<< HEAD
                    </h3>;
                    <p className='text - gray - 300 text - sm leading - relaxed'    />                      {service.tagline}                      </div>;
                    </div>;"
                    <h3 className=\"text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors\"    />;
                      {service.name}
                    </h3>;"
                    <p className=\"text - gray - 300 text - sm leading - relaxed\"    />;
                      {service.tagline}</div>;
                    </div>;
<<<<<<< HEAD
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
=======
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                      {service.name}

                    </h3>
<<<<<<< HEAD
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}

=======
<<<<<<< HEAD
                        </div>

                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}                      </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>
<<<<<<< HEAD
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    </h3>;
                    <p className='text - gray - 300 text - sm leading - relaxed'>                      {service.tagline}                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
origin/cursor/automate-test-improve-and-merge-code-2533
                          {service.price}
                        </div>;'
                        <div className='text - sm text - gray - 400'>;
                          {service.period}
                    </h3>;'
                    <p className='text - gray - 300 text - sm leading - relaxed'>                      {service.tagline}                      </div>;
                    </div>;"
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
                      {service.name}
                    </h3>;"
                    <p className="text - gray - 300 text - sm leading - relaxed">;
                      {service.tagline}
<<<<<<< HEAD
=======




                      </div>
                    </div>
                    <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
<<<<<<< HEAD
                    </h3>'
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}
=======
                    </h3>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    <p className='text-gray-300 text-sm leading-relaxed'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
                      {service.tagline}
<<<<<<< HEAD
                    </p>
                  </div>
<<<<<<< HEAD

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
=======
                    </h3>;
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}<p className='text-gray-300 text-sm leading-relaxed'>;
                      {service.tagline}</p>;
                  </div>;
=======

                    <p className='text-gray-300 text-sm leading-relaxed'    />
                      {service.tagline}

                    </p>
                  </div>

>>>>>>> origin/chore/fix-lint-and-merge
                  {/* Features */}
                  <div className='mb-6'    />;
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'    />;
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400'    />;
                      Key Features;
                    </h4>;
                    <ul className='space-y-2'    />;
                      {service.features.slice(0, 4).map((feature, idx) => (<li;}
                          key={idx}
                          className='text-sm text-gray-400 flex items-start'    />;
                          <span className='text-cyan-400 mr-2'    />•</span>                          {feature}                      Key Features;
                    </h4>;"
                    <ul className=\"space-y-2\"    />;"
                      {service && service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className=\"text-sm text-gray-400 flex items-start\"    />;
                    </p>;
                  </div>;
                  {/* Features */}

<<<<<<< HEAD
<div className='mb-6'>'
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>'
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />'

                  {/* Features */}

                  {/* Features */}
                  <div className=mb-6>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400 />
=======


                      Key Features
                    </h4>
                    <ul className='space-y-2'>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className='text-sm text-gray-400 flex items-start'>;
                          <span className='text-cyan-400 mr-2'>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className="space-y-2">;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;
                        <li key={idx} className="text-sm text-gray-400 flex items-start">;
                          <span className="text-cyan-400 mr-2">•</span>;

<<<<<<< HEAD
                  {/* Features */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    <p className='text-gray-300 text-sm leading-relaxed'>                      {service.tagline}

                      {service.tagline}

                    </p>
                  </div>
                  {/* Features */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
<<<<<<< HEAD
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
=======
<<<<<<< HEAD
=======
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                          {feature}
                        </li>;
                      ))}
                    </ul>
                  </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                          {feature}
                        </li>
                      ))}
<<<<<<< HEAD
                    </ul>
                  </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  {/* Stats */}
<<<<<<< HEAD
=======

                        {service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'>Rating</div>;'
                    </div>;
                    <div>;

                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;'
                        {service.trialDays}
                  <div className=grid grid-cols-3 gap-4 mb-6 text-center>

<<<<<<< HEAD
=======
<<<<<<< HEAD
                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.rating}
                      </div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.customers?.toLocaleString() |0}
                      </div>
                      <div className='text-xs text-gray-400'>Customers</div>
                    </div>
                    <div>
                      <div className=text-lg font-bold text-white>
                        {service.trialDays}
                      </div>
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
<<<<<<< HEAD
                          {feature}
                        </li>;
                      ))}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |0}</div>
                      <div className=text-xs text-gray-400>Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
                  {/* Features */}'
                  <div className='mb-6>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400' />

                      Key Features;
                    </h4>'
                    <ul className='space-y-2'>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li;
                          key={idx}'
                          className='text-sm text-gray-400 flex items-start'>;'
                          <span className='text-cyan-400 mr-2'>•</span>                          {feature}                      Key Features;
                    </h4>;"
                    <ul className="space-y-2">;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;"
                        <li key={idx} className="text-sm text-gray-400 flex items-start">;
                    </p>
                  </div>
                  {/* Features */}
<div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />
                      Key Features;
                    </h4>"
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => ("
                        <li key={idx} className="text-sm text-gray-400 flex items-start">"
                          <span className="text-cyan-400 mr-2">•</span>

                    <ul className='space-y-2'>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className='text-sm text-gray-400 flex items-start'
                        >
                          <span className='text-cyan-400 mr-2'>•</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                          {feature}
                        </li>;
                      ))}

                  {/* Stats */}'
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

<div className='grid grid-cols-3 gap-4 mb-6 text-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.rating}
                      </div>'
                      <div className='text-xs text-gray-400'>Rating</div>
                    </div>
                    <div>'
                      <div className='text-lg font-bold text-white'>'
                        {service.customers?.toLocaleString() |'0'}
                      </div>'
                      <div className='text-xs text-gray-400'>Customers</div>
                    </div>
                    <div>'
                      <div className='text-lg font-bold text-white'>
                        {service.trialDays}
                      </div>'
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
                          {feature}
                        </li>;
                      ))}"
                      <div className="text-lg font-bold text-white">{service.rating}</div>"
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>'"
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |'0'}</div>"
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>"
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>"
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>
                  {/* ROI Highlight */}


<<<<<<< HEAD
=======
<div className='mb-6'    />
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'    />
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400'    />
                      Key Features;
                    </h4>

                    <ul className='space-y-2'    />
                      {service.features.slice(0, 4).map((feature, idx) => (}
                        <li;}
key={idx}
                          className='text-sm text-gray-400 flex items-start'
                            />
                          <span className='text-cyan-400 mr-2'    />•</span>
                          {feature}
                        </li>;
                      ))}
=======
<<<<<<< HEAD
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                  <div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'>
                    <div className='text-sm text-green-400 font-semibold mb-1'>
                      🚀 ROI Promise
                    </div>
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service.roi}                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.roi}

<<<<<<< HEAD
                      {service.roi}

                    </div>
                  </div>
                  {/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  {/* Stats */}

<div className='grid grid-cols-3 gap-4 mb-6 text-center'    />
                    <div    />
                      <div className='text-lg font-bold text-white'    />

                        {service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'    />Rating</div>;
                    </div>;
                    <div    />;
                      <div className='text-lg font-bold text-white'    />;
                        {service.customers?.toLocaleString() |'0'}
                      </div>;
                      <div className='text-xs text-gray-400'    />Customers</div>;
                    </div>;
                    <div    />;
                      <div className='text-lg font-bold text-white'    />;
                        {service.trialDays}

                      </div>

                      <div className='text-xs text-gray-400'    />Trial Days</div>
                    </div>
                  </div>
                  {/* ROI Highlight */}
<div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'    />
                    <div className='text-sm text-green-400 font-semibold mb-1'    />
                      🚀 ROI Promise;
                    </div>
                    <div className='text-xs text-gray-300 leading-relaxed'    />
>>>>>>> origin/chore/fix-lint-and-merge
                      {service.roi}

                    </div>
                  </div>
                  {/* Market Position */}

<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      {service.marketPosition}
                    </div>
<<<<<<< HEAD
                    <div className='text-xs text-gray-300 leading-relaxed'>
                      </div>;
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                          {feature}
                        </li>;
                      ))}
                      <div className="text-lg font-bold text-white">{service.rating}</div>;
                      <div className="text-xs text-gray-400">Rating</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |'0'}</div>;
                      <div className="text-xs text-gray-400">Customers</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>;
                      <div className="text-xs text-gray-400">Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}<div className='text-xs text-gray-400'>Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}
<div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'>;
                    <div className='text-sm text-green-400 font-semibold mb-1'>;
                      🚀 ROI Promise;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>;
                      {service.roi}</div>;
                  </div>;
                  {/* Market Position */}<div className="mb-6 p-4 bg-gray-800/30 rounded-lg">;
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>;
                    <div className="text-xs text-gray-300 leading-relaxed">;
                      {service.marketPosition}
                    </div>
                  </div>
                  {/* Stats */}'
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                    <div>;'
                      <div className='text-lg font-bold text-white'>;
                        {service && service.rating}
                      </div>;'
                      <div className='text-xs text-gray-400'>Rating</div>;
                    </div>;
                    <div>;'
                      <div className='text-lg font-bold text-white'>;'
                        {service && service.customers?.toLocaleString() || '0'}
                      </div>;'
                      <div className='text-xs text-gray-400'>Customers</div>;
                    </div>;
                    <div>;'
                      <div className='text-lg font-bold text-white'>;
                        {service && service.trialDays}
                      </div>;'
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;"
                      <div className="text-lg font-bold text-white">{service && service.rating}</div>;"
                      <div className="text-xs text-gray-400">Rating</div>;
                    </div>;
                    <div>;'"
                      <div className="text-lg font-bold text-white">{service && service.customers?.toLocaleString() || '0'}</div>;"
                      <div className="text-xs text-gray-400">Customers</div>;
                    </div>;
                    <div>;"
                      <div className="text-lg font-bold text-white">{service && service.trialDays}</div>;"
                      <div className="text-xs text-gray-400">Trial Days</div>;
                    </div>;
=======
                  </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </ul>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'>Rating</div>;
                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.customers?.toLocaleString() || '0'}
                      </div>;
                      <div className='text-xs text-gray-400'>Customers</div>;
                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.trialDays}
                      </div>;
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.rating}</div>;
                      <div className="text-xs text-gray-400">Rating</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.customers?.toLocaleString() || '0'}</div>;
                      <div className="text-xs text-gray-400">Customers</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.trialDays}</div>;
                      <div className="text-xs text-gray-400">Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}
                  <div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20'>;
                    <div className='text-sm text-green-400 font-semibold mb-1'>;
                      🚀 ROI Promise;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service && service.roi}                  <div className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">;
                    <div className="text-sm text-green-400 font-semibold mb-1">🚀 ROI Promise</div>;
                    <div className="text-xs text-gray-300 leading-relaxed">;
                      {service && service.roi}
                    </div>;
                  </div>;
                  {/* Market Position */}
                  <div className='mb-6 p-4 bg-gray-800/30 rounded-lg'>;
                    <div className='text-sm text-cyan-400 font-semibold mb-2'>;
                      📊 Market Position;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>                      {service && service.marketPosition}                  <div className="mb-6 p-4 bg-gray-800/30 rounded-lg">;
                    <div className="text-sm text-cyan-400 font-semibold mb-2">📊 Market Position</div>;
                    <div className="text-xs text-gray-300 leading-relaxed">;
                      {service && service.marketPosition}
                    </div>;
<<<<<<< HEAD
                  </div>;<Button;
                      href={service && service.link}
                      variant='primary';
                      className='w-full group-hover:bg-cyan-500 transition-colors'>;
                      Get Started;
                      <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />                    </Button>;
                  </div>;{/* Contact Info */}                    <Button;
                      href={service && service.link}
                  <div className="mt-auto">;
                  {/* Contact Info */}                    <Button;
                      href={service && service.link}
                  <div className="mt-auto">;
                    <Button;
                      href={service.link}
                      variant="primary";
=======
                  </div>;
<<<<<<< HEAD
=======


                  {/* CTA */}

                  {/* CTA */}
                  <div className='mt-auto'>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                    <Button
                      href={service && service.link}
                      variant='primary'

<<<<<<< HEAD
                  {/* CTA */}
=======
                      className='w-full group-hover:bg-cyan-500 transition-colors'>;
                      Get Started;
                      <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />                    </Button>;
                  </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {/* Contact Info */}                    <Button
                      href={service && service.link}
                  <div className="mt-auto">
                  <div className='mt-auto'>

                    <Button
                      href={service.link}
                      variant="primary"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="w-full group-hover:bg-cyan-500 transition-colors">;
                      Get Started;
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />;
                    </Button>;
                  </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  {/* Contact Info */}
                  <div className='mt-4 text-center'>;
                    <div className='text-xs text-gray-500'>;<div className='mb-6 p-4 bg-gray-800/30 rounded-lg'>;
                    <div className='text-sm text-cyan-400 font-semibold mb-2'>;
                      📊 Market Position;
                    </div>;
                    <div className='text-xs text-gray-300 leading-relaxed'>;
                      {service.marketPosition}
                    </div>;
                  </div>;
>>>>>>> merged-prs-20250907-203621
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() || '0'}</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
                      <div className="text-xs text-gray-400">Trial Days</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Call to Action */}

                className='text-lg px-8 py-4'>;
                Schedule a Consultation;
                <ArrowRight className=ml-2 w-5 h-5' />;
              </Button>;
              <Button'
                href=/pricing'
                variant='secondary
                className='text-lg px-8 py-4'>;
                View Pricing Plans;
                <DollarSign className=ml-2 w-5 h-5' />;
              </Button>;
            </div>;'
            <div className=mt-6 text-sm text-gray-400>;
              <p>;'
                📞 Call us:{' }
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{ '}'
                <span className=text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;'
                🌐 Visit:{' }
                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
              </p>            </div>            <div className=mt-6 text-sm text-gray-400">;"
              <p>📞 Call us: <span className=text-cyan-400>+1 302 464 0950</span></p>;"
              <p>📧 Email: <span className="text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
}

export default EnhancedServiceShowcase;  );
}
export default EnhancedServiceShowcase;
                    </p>;
                  </div>;
                  {/* Features */}
                  <div className=mb - 6'>;'
                    <h4 className=text - sm font - semibold text - gray - 300 mb - 3 flex items - center>;'
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400 />;
                      Key Features;
                    </h4>;
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li;
                          key={idx}
                          className=text - sm text - gray - 400 flex items - start';
                        >;'
                          <span className=text - cyan - 400 mr - 2>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className=space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => ("
                        <li key={idx} className=text - sm text - gray - 400 flex items - start>;"
                          <span className="text - cyan - 400 mr - 2>•</span>;
                          {feature}
                        </li>))}
                    </ul>;
=======
<div className='mb-6 p-4 bg-gray-800/30 rounded-lg'    />
                    <div className='text-sm text-cyan-400 font-semibold mb-2'    />
                      📊 Market Position;
                    </div>
                    <div className='text-xs text-gray-300 leading-relaxed'    />

                      {service.marketPosition}
                    </div>;
                  </div>;
                  {/* CTA */}
<<<<<<< HEAD
                  <div className="mt-auto">
                    <Button
                      href={service.link}
                      variant="primary"
                      className="w-full group-hover:bg-cyan-500 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
=======
<div className='mt-auto'    />;
                    <Button;
                      href={service.link}
                      variant='primary';
                      className='w-full group-hover:bg-cyan-500 transition-colors'    />

                      Get Started;
                      <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform'    />;
                    </Button>;
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>;

<<<<<<< HEAD
                    <div className=text - xs text - gray - 300 leading - relaxed">;
                      {service.roi}
                    </div>;
                  </div>;

                    <div className="text - xs text - gray - 300 leading - relaxed>;
                      {service.market_position}
=======
<div className='mt-4 text-center'    />
                    <div className='text-xs text-gray-500'    />

                      Contact: {' }
}
                      <span className='text-cyan-400'    />;
                        {service && service.contactInfo.mobile}
                      </span>;
                    </div>;
                    <div className='text-xs text-gray-500'    />;

                      Email: {' '}

                      <span className='text-cyan-400'    />

                        {service.contactInfo.emai}
}
                      </span>;
>>>>>>> origin/chore/fix-lint-and-merge
                    </div>;
                  </div>;

                      Email: <span className=text - cyan - 400">{service.contact_info.email}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
              </motion.div>))}
          </AnimatePresence>;
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}

<<<<<<< HEAD
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting - edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;

              <p>🌐 Visit: <span className="text - cyan - 400">https://ziontechgroup.com</span></p>;
          </div>;
        </motion.div>;
      </div>;

    </section>);
}
export default EnhancedServiceShowcase);
}
export default EnhancedServiceShowcase;
  );

}


        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {/* Contact Info */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <div className="mt-4 text-center">
                    <div className="text-xs text-gray-500">
                      Contact: <span className="text-cyan-400">{service.contactInfo.mobile}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Email: <span className="text-cyan-400">{service.contactInfo.email}</span>
<<<<<<< HEAD
                  {/* Contact Info */}
                  <div className='mt-4 text-center'>;
                    <div className='text-xs text-gray-500'>;
<div className='mb-6 p-4 bg-gray-800/30 rounded-lg'>
                    <div className='text-sm text-cyan-400 font-semibold mb-2'>
                      📊 Market Position
                    </div>
                    <div className='text-xs text-gray-300 leading-relaxed'>
                      {service.marketPosition}
                    </div>
                  </div>
                  {/* CTA */}
<div className='mt-auto'>
                    <Button
                      href={service.link}
                      variant='primary'
                      className='w-full group-hover:bg-cyan-500 transition-colors'
                    >
                      Get Started
                      <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </Button>
                  </div>
                  {/* Contact Info */}
<div className='mt-4 text-center'>
                    <div className='text-xs text-gray-500'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      Contact:{' '}
                      <span className='text-cyan-400'>;
                        {service && service.contactInfo.mobile}
                      </span>;
                    </div>;'
                    <div className='text-xs text-gray-500'>;'
                      Email:{' '}'
                      <span className='text-cyan-400'>;
                        {service && service.contactInfo.email}"
                      </span>                    </div>                  <div className="mt-4 text-center">;"
                    <div className="text-xs text-gray-500">;"
                      Contact: <span className="text-cyan-400">{service && service.contactInfo.mobile}</span>;
                    </div>;"
                    <div className="text-xs text-gray-500">;"
                      Email: <span className="text-cyan-400">{service && service.contactInfo.email}</span>;
                  </div>;
                </div>;
              </motion && motion.div>;
=======
<<<<<<< HEAD
=======
                    </div>
                  </div>
                </div>
              </motion.div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </AnimatePresence>;
        </motion && motion.div>;


<<<<<<< HEAD
                      <span className='text-cyan-400'>
                        {service.contactInfo.email}
                      </span>
                    </div>
=======



<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
          </AnimatePresence>
        </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Call to Action */}
>>>>>>> merged-prs-20250907-203621
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
<<<<<<< HEAD
=======
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'>'
            <h3 className='text-2xl font-bold text-white mb-4'>'
=======
              </motion.div>;
            ))}
=======
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
>>>>>>> merged-prs-20250907-203621
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. 
              Get started today and see the future of business technology.
<<<<<<< HEAD
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />
              <Button
href='/contact'
                variant='primary'

                className='text-lg px-8 py-4'    />
                Schedule a Consultation
                <ArrowRight className='ml-2 w-5 h-5'    />
=======
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
                View Pricing Plans
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
                Schedule a Consultation
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
              <Button href=&quot;/pricing&quot; variant=&quot;secondary&quot; className=&quot;text-lg px-8 py-4&quot;>
                View Pricing Plans
                <DollarSign className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
            </div>
            <div className=&quot;mt-6 text-sm text-gray-400&quot;>
              <p>📞 Call us: <span className=&quot;text-cyan-400&quot;>+1 302 464 0950</span></p>
              <p>📧 Email: <span className=&quot;text-cyan-400&quot;>kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className=&quot;text-cyan-400&quot;>https://ziontechgroup.com</span></p>

            </div>
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text-center mt-16'

        >
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of companies already achieving breakthrough results
              with our cutting-edge AI, quantum, and blockchain solutions. Get
              started today and see the future of business technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }
}

          whileInView={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.8, delay: 1.0 }
}
className='text-center mt-16'
            />
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'    />
            <h3 className='text-2xl font-bold text-white mb-4'    />
>>>>>>> origin/chore/fix-lint-and-merge
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'    />
              Join thousands of companies already achieving breakthrough results;
with our cutting-edge AI, quantum, and blockchain solutions. Get;
started today and see the future of business technology.
            </p>
<<<<<<< HEAD
              <Button
                href='/contact'
                variant='primary'
        {/* Call to Action */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 1.0 }}
className='text-center mt-16';
        >;
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting-edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Button;
                href='/contact';
                variant='primary';
                className='text-lg px-8 py-4'>;
                Schedule a Consultation;
                <ArrowRight className='ml-2 w-5 h-5' />;
              </Button>;
              <Button;
                href='/pricing';
                variant='secondary';
                className='text-lg px-8 py-4'>;
                View Pricing Plans;
                <DollarSign className='ml-2 w-5 h-5' />;
              </Button>;
            </div>;
            <div className='mt-6 text-sm text-gray-400'>;
              <p>;
                📞 Call us:{' '}
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{' '}
                <span className='text-cyan-400'>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;
                🌐 Visit:{' '}<span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
                🌐 Visit:{' '}

                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
                🌐 Visit:{' '}<span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
              </p>            </div>            <div className="mt-6 text-sm text-gray-400">;
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>;
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup && ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
<<<<<<< HEAD
  )}export default EnhancedServiceShowcase;  )}export default EnhancedServiceShowcase;
=======
  );


<<<<<<< HEAD
              <Button
                href='/contact'
                variant='primary'
                className='text-lg px-8 py-4'
              >
                Schedule a Consultation
                <ArrowRight className='ml-2 w-5 h-5' />
>>>>>>> merged-prs-20250907-203621
              </Button>
              <Button
                href='/pricing'
                variant='secondary'
<<<<<<< HEAD
                className='text-lg px-8 py-4'    />
                View Pricing Plans
                <DollarSign className='ml-2 w-5 h-5'    />
              </Button>
            </div>
            <div className='mt-6 text-sm text-gray-400'    />
              <p    />
                📞 Call us: {' }

                <span className='text-cyan-400'    />+1 302 464 0950</span>
              </p>
              <p    />
                📧 Email: {' }

                <span className='text-cyan-400'    />kleber@ziontechgroup && ziontechgroup.com</span>
=======
                className='text-lg px-8 py-4'
              >
                View Pricing Plans
                <DollarSign className='ml-2 w-5 h-5' />
              </Button>
            </div>
            <div className='mt-6 text-sm text-gray-400'>
              <p>
                📞 Call us:{' '}
                <span className='text-cyan-400'>+1 302 464 0950</span>
              </p>
              <p>
                📧 Email:{' '}
                <span className='text-cyan-400'>kleber@ziontechgroup.com</span>
>>>>>>> merged-prs-20250907-203621
              </p>
              <p>
                🌐 Visit:{' '}
                <span className='text-cyan-400'>https://ziontechgroup.com</span>
              </p>            </div>            <div className="mt-6 text-sm text-gray-400">
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup.com</span></p>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  );
}
export default EnhancedServiceShowcase;  )
}
export default EnhancedServiceShowcase;

"
=======
=======
};
export default EnhancedServiceShowcase;  );
};
export default EnhancedServiceShowcase;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </p>;
                  </div>;
                  {/* Features */}
                  <div className='mb - 6'>;
                    <h4 className='text - sm font - semibold text - gray - 300 mb - 3 flex items - center'>;
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400' />;
                      Key Features;
                    </h4>;
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (<li;
                          key={idx}
                          className='text - sm text - gray - 400 flex items - start';
                        >;
                          <span className='text - cyan - 400 mr - 2'>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className="space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => (<li key={idx} className="text - sm text - gray - 400 flex items - start">;
          transition={{ duration: 0.8, delay: 1.0 }}
className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of companies already achieving breakthrough results
              with our cutting-edge AI, quantum, and blockchain solutions. Get
              started today and see the future of business technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <Button
                href='/contact'
                variant='primary'
                className='text-lg px-8 py-4'>;
                Schedule a Consultation;'
                <ArrowRight className='ml-2 w-5 h-5' />;
              </Button>;
              <Button'
                href='/pricing''
                variant='secondary''
                className='text-lg px-8 py-4'>;
                View Pricing Plans;'
                <DollarSign className='ml-2 w-5 h-5' />;
              </Button>;
            </div>;'
            <div className='mt-6 text-sm text-gray-400'>;
              <p>;'
                📞 Call us:{' '}'
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;'
                📧 Email:{' '}'
                <span className='text-cyan-400'>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;'
                🌐 Visit:{' '}'
                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;"
              </p>            </div>            <div className="mt-6 text-sm text-gray-400">;"
              <p>📞 Call us: <span className="text-cyan-400">+1 302 464 0950</span></p>;"
              <p>📧 Email: <span className="text-cyan-400">kleber@ziontechgroup && ziontechgroup.com</span></p>;"
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
};

export default EnhancedServiceShowcase;  );
};
export default EnhancedServiceShowcase;
                    </p>;
                  </div>;
                  {/* Features */}'
                  <div className='mb - 6'>;'
                    <h4 className='text - sm font - semibold text - gray - 300 mb - 3 flex items - center'>;'
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400' />;
                      Key Features;
                    </h4>;'
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li;
                          key={idx}'
                          className='text - sm text - gray - 400 flex items - start';
                        >;'
                          <span className='text - cyan - 400 mr - 2'>•</span>                          {feature}                      Key Features;
                    </h4>;"
                    <ul className="space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => ("
                        <li key={idx} className="text - sm text - gray - 400 flex items - start">;"
                          <span className="text - cyan - 400 mr - 2">•</span>;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;
                  {/* Stats */}
                  <div className='grid grid - cols - 3 gap - 4 mb - 6 text - center'>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.rating}
                      </div>;
                      <div className='text - xs text - gray - 400'>Rating</div>;
                    </div>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.customers?.toLocaleString () || '0'}
                      </div>;
                      <div className='text - xs text - gray - 400'>Customers</div>;
                    </div>;
                    <div>;
                      <div className='text - lg font - bold text - white'>;
                        {service.trial_days}
                      </div>;
                      <div className='text - xs text - gray - 400'>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                      <div className="text - lg font - bold text - white">{service.rating}</div>;
                      <div className="text - xs text - gray - 400">Rating</div>;
                    </div>;
                    <div>;
                      <div className="text - lg font - bold text - white">{service.customers?.toLocaleString () || '0'}</div>;
                      <div className="text - xs text - gray - 400">Customers</div>;
                    </div>;
                    <div>;
                      <div className="text - lg font - bold text - white">{service.trial_days}</div>;
                      <div className="text - xs text - gray - 400">Trial Days</div>;
                    </div>;
                  </div>;
                  {/* ROI Highlight */}
                  <div className='mb - 6 p - 4 bg - gradient - to - r from - green - 900 / 20 to - blue - 900 / 20 rounded - lg border border - green - 500 / 20'>;
                    <div className='text - sm text - green - 400 font - semibold mb - 1'>;
                      🚀 ROI Promise;
                    </div>;
                    <div className='text - xs text - gray - 300 leading - relaxed'>                      {service.roi}                  <div className="mb - 6 p - 4 bg - gradient - to - r from - green - 900 / 20 to - blue - 900 / 20 rounded - lg border border - green - 500 / 20">;
                    <div className="text - sm text - green - 400 font - semibold mb - 1">🚀 ROI Promise</div>;
                    <div className="text - xs text - gray - 300 leading - relaxed">;
                      {service.roi}
                    </div>;
                  </div>;
                  {/* Market Position */}
                  <div className='mb - 6 p - 4 bg - gray - 800 / 30 rounded - lg'>;
                    <div className='text - sm text - cyan - 400 font - semibold mb - 2'>;
                      📊 Market Position;
                    </div>;
                    <div className='text - xs text - gray - 300 leading - relaxed'>                      {service.market_position}                  <div className="mb - 6 p - 4 bg - gray - 800 / 30 rounded - lg">;
                    <div className="text - sm text - cyan - 400 font - semibold mb - 2">📊 Market Position</div>;
                    <div className="text - xs text - gray - 300 leading - relaxed">;
                      {service.market_position}
                    </div>;
                  </div>;
                  {/* CTA */}
                  <div className='mt - auto'>;
                    <Button;
                      href={service.link}
                      variant='primary';
                      className='w - full group - hover:bg - cyan - 500 transition - colors';
                    >;
                      Get Started;
                      <ArrowRight className='ml - 2 w - 4 h - 4 group - hover:translate - x-1 transition - transform' />                    </Button>;
                  </div>;
                  {/* Contact Info */}                    <Button;
                      href={service.link}
                      variant="primary";
                      className="w - full group - hover:bg - cyan - 500 transition - colors";
                    >;
                      Get Started;
                      <ArrowRight className="ml - 2 w - 4 h - 4 group - hover:translate - x-1 transition - transform" />;
                    </Button>;
                  </div>;
                  {/* Contact Info */}
                  <div className='mt - 4 text - center'>;
                    <div className='text - xs text - gray - 500'>;
                      Contact:{' '}
                      <span className='text - cyan - 400'>;
                        {service.contact_info.mobile}
                      </span>;
                    </div>;
                    <div className='text - xs text - gray - 500'>;
                      Email:{' '}
                      <span className='text - cyan - 400'>;
                        {service.contact_info.email}
                      </span>                    </div>                  <div className="mt - 4 text - center">;
                    <div className="text - xs text - gray - 500">;
                      Contact: <span className="text - cyan - 400">{service.contact_info.mobile}</span>;
                    </div>;
                    <div className="text - xs text - gray - 500">;
                      Email: <span className="text - cyan - 400">{service.contact_info.email}</span>;
                  </div>;
                </div>;
              </motion.div>))}
          </AnimatePresence>;
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text - center mt - 16';
          <div className='bg - gradient - to - r from - cyan - 900 / 20 to - purple - 900 / 20 backdrop - blur - sm rounded - 2xl p - 8 border border - cyan - 500 / 20'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting - edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='/contact';
                variant='primary';
                className='text - lg px - 8 py - 4';
              >;
=======
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />
              <Button;
href='/contact'
                variant='primary'

                className='text-lg px-8 py-4'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                Schedule a Consultation;
                <ArrowRight className='ml-2 w-5 h-5'    />;
              </Button>;
              <Button;
                href='/pricing';
                variant='secondary';
<<<<<<< HEAD
                className='text - lg px - 8 py - 4';
              >;
                View Pricing Plans;
                <DollarSign className='ml - 2 w - 5 h - 5' />;
              </Button>;
            </div>;
            <div className='mt - 6 text - sm text - gray - 400'>;
              <p>;
                📞 Call us:{' '}
                <span className='text - cyan - 400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{' '}
                <span className='text - cyan - 400'>kleber@ziontechgroup.com</span>;
              </p>;
              <p>;
                🌐 Visit:{' '}
                <span className='text - cyan - 400'>https://ziontechgroup.com</span>;
              </p>            </div>            <div className="mt - 6 text - sm text - gray - 400">;
              <p>📞 Call us: <span className="text - cyan - 400">+1 302 464 0950</span></p>;
              <p>📧 Email: <span className="text - cyan - 400">kleber@ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text - cyan - 400">https://ziontechgroup.com</span></p>;
          </div>;
        </motion.div>;
      </div>;
    </section>)}export default EnhancedServiceShowcase)}export default EnhancedServiceShowcase;
  )}<span className='text-cyan-400'>https://ziontechgroup.com</span>;
              </p>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
    </section>);
=======
                className='text-lg px-8 py-4'    />;
                View Pricing Plans;
                <DollarSign className='ml-2 w-5 h-5'    />;
              </Button>;
            </div>;
            <div className='mt-6 text-sm text-gray-400'    />;
              <p    />;
                📞 Call us: {' }
>>>>>>> origin/chore/fix-lint-and-merge
}
                <span className='text-cyan-400'    />+1 302 464 0950</span>;
              </p>;
              <p    />;
                📧 Email: {' }
}
<<<<<<< HEAD
;
export default EnhancedServiceShowcase;
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );

};


<<<<<<< HEAD
)}export default EnhancedServiceShowcase;
            <div className = $2;
export default EnhancedServiceShowcase,
                <span className='text-cyan-400'>https://ziontechgroup.com</span>
=======
                <span className='text-cyan-400'    />kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p    />;
>>>>>>> origin/chore/fix-lint-and-merge

                🌐 Visit: {' '}

                <span className='text-cyan-400'    />https://ziontechgroup.com</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
<<<<<<< HEAD
  );
}
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default EnhancedServiceShowcase;  )
}
export default EnhancedServiceShowcase;

<<<<<<< HEAD
<<<<<<< HEAD
"
);
}
export default EnhancedServiceShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533
'"`

=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
export default EnhancedServiceShowcase;

}
}
}
}
}
}
export default EnhancedServiceShowcase;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
