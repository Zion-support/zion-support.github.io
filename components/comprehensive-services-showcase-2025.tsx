<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

import {
<<<<<<< HEAD
<<<<<<< HEAD
  Search
  Filter
  Grid3X3
  List
  Star
  Users
  TrendingUp
  Zap
  Brain
  Atom
  Shield
  Rocket
  Palette
  BookOpen
  Truck
  DollarSign
  Settings
  ArrowRight
  ChevronDown
  CheckCircle
  Clock
  Award
  Target
  Globe
  Sparkles
  Cpu
  Lock
  Cloud
  BarChart3
  Eye
  Heart
  Lightbulb
  Palette as PaletteIcon
  Code
  Database
  Shield as ShieldIcon
  Globe as GlobeIcon
  Zap as ZapIcon
  Target as TargetIcon;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';

  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;

import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  Palette,
  BookOpen,
  Truck,
  DollarSign,
  Settings,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  Palette as PaletteIcon,
  Code,
  Database,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
<<<<<<< HEAD

=======
  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon;
// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data / 2025 - innovative - real - micro - saas - services';
import { innovativeAIServicesEnhanced2025 } from '../data / 2025 - innovative - ai - services - enhanced';
import { innovativeITServicesEnhanced2025 } from '../data / 2025 - innovative - it - services - enhanced';
import { emergingTechServicesEnhanced2025 } from '../data / emerging - tech - services';
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon

=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
import { Search, Filter, Grid3X3, List;
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
 } from 'lucide-react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// Import service data
import { innovativeRealMicroSaasServices2025  } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025  } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025  } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
interface Service {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  id: string;
  name: string;
  tagline: string;
  price: string,
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  icon?: React.ReactNode;
const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service
    category: 'Micro SAAS'
    icon: <Rocket className='w-6 h-6' />
  }))
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service
    category: 'AI & Consciousness'
    icon: <Brain className='w-6 h-6' />
  }))
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service
    category: 'Enterprise IT'
    icon: <Shield className='w-6 h-6' />
  }))
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service
    category: 'Quantum & Emerging Tech'
    icon: <Atom className='w-6 h-6' />

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }))
];
const categories = [
  {
    name: 'All Services'
    icon: <Globe className='w-5 h-5' />
    count: allServices.length
  }
  {
    name: 'Micro SAAS'
    icon: <Rocket className='w-5 h-5' />
    count: innovativeRealMicroSaasServices2025.length
  }
  {
    name: 'AI & Consciousness'
    icon: <Brain className='w-5 h-5' />
    count: innovativeAIServicesEnhanced2025.length
  }
  {
    name: 'Enterprise IT'
    icon: <Shield className='w-5 h-5' />
    count: innovativeITServicesEnhanced2025.length
  }
  {
    name: 'Quantum & Emerging Tech'
    icon: <Atom className='w-5 h-5' />
    count: emergingTechServicesEnhanced2025.length
  },];  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length }
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length }
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length }
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length }
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
];

const priceRanges = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
];
const sortOptions = [

  icon?: React && React.ReactNode;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

];
const sortOptions = [
  icon?: React && React.ReactNode;
const allServices: Service[] = [;
  ...innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.map(service => ({;
    ...service,;
    category: 'Micro SAAS',;
    icon: <Rocket className='w-6 h-6' />,;
  })),;
  ...innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'AI & Consciousness',;
    icon: <Brain className='w-6 h-6' />,;
  })),;
  ...innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Enterprise IT',;
    icon: <Shield className='w-6 h-6' />,;
  })),;
  ...emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-6 h-6' />,;
  })),;
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service;
                setSelectedPriceRange('all')
];
const sortOptions = [
origin/cursor/automate-test-improve-and-merge-code-2533
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
{ label: 'Price: High to Low', value: 'price-high' },
origin/cursor/automate-test-improve-and-merge-code-2533
];
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function ComprehensiveServicesShowcase2025() {;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function ComprehensiveServicesShowcase2025() {;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ComprehensiveServicesShowcase2025() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
const [filteredServices, setFilteredServices] =
    useState<Service[]>(allServices);

  useEffect(() => {
    let filtered = allServices;
    // Filter by search term
    if (searchTerm) {
filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
filtered = filtered.filter(
        service => service.category === selectedCategory
      );
    }
    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
case 'under-50':
origin/cursor/automate-test-improve-and-merge-code-2533
            return price < 50;
          case '50-200':;
            return price >= 50 && price <= 200;
          case '200-500':;
            return price > 200 && price <= 500;
          case 'over-500':;
            return price > 500;
          default:
            return true;
        }
      });
    }
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
origin/cursor/automate-test-improve-and-merge-code-2533
          );
        case 'price-low':;
          return (
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
          );
        case 'price-high':;
          return (
            parseFloat(b && b.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
          );
        case 'newest':;
          return (
            new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ());
        case 'price - low':;
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));
        case 'price - high':;
          return (
            parse_float (b.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (a.price.replace (/[^0 - 9.]/g, '')));
        default:;
          return 0;
      }
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0
      }
    });
<<<<<<< HEAD
=======
=======
=======

    setFilteredServices(filtered)
    switch (category) {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setFilteredServices(filtered)

=======
    switch (category) {

    setFilteredServices(filtered)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const getCategoryColor = (category: string) => {;
    switch (category) {        case 'price-low':;
          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':;
          return parseFloat(b && b.price.replace(/[^0-9.]/g, '')) - parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
        default: return 0;
      }
    });
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'Micro SAAS':;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {
case 'Micro SAAS':
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness':;
        return 'from-purple-500 to-pink-500';
      case 'Enterprise IT':;
        return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech':;
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
case 'Micro SAAS':
origin/cursor/automate-test-improve-and-merge-code-2533
        return <Rocket className='w-5 h-5' />;
      case 'AI & Consciousness':;
        return <Brain className='w-5 h-5' />;
      case 'Enterprise IT':;
        return <Shield className='w-5 h-5' />;
      case 'Quantum & Emerging Tech':;
        return <Atom className='w-5 h-5' />;
<<<<<<< HEAD
<<<<<<< HEAD
      default:;
        return <Globe className='w-5 h-5' />;    }      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
<<<<<<< HEAD
<<<<<<< HEAD
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
  }
  };

=======
=======

      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Layout>;
      <Head>;
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>;
        <meta
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
      default:
        return <Globe className='w-5 h-5' />;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
<meta
origin/cursor/automate-test-improve-and-merge-code-2533
          name='description'
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.'
        />;
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                left: `${Math.random() * 100}%`
                top: `${Math.random() * 100}%`
              }}            />
=======

            />
            />
=======
  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div                top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
              </span>
              <br />
              <span className='text-white'>Services Showcase</span>
            </h1>
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Discover our complete portfolio of {allServices.length}+
              innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
                {
                  label: 'Total Services'
                  value: allServices.length
                  icon: <Globe className='w-8 h-8' />
                }
                {
                  label: 'AI Solutions'
                  value: innovativeAIServicesEnhanced2025.length
                  icon: <Brain className='w-8 h-8' />
                }
                {
                  label: 'IT Services'
                  value: innovativeITServicesEnhanced2025.length
                  icon: <Shield className='w-8 h-8' />
                }
                {
                  label: 'Emerging Tech'
                  value: emergingTechServicesEnhanced2025.length
                  icon: <Atom className='w-8 h-8' />
                },              ].map((stat, index) => (                { label: 'Total Services', value: allServices.length, icon: <Globe className="w-8 h-8" /> }
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> }
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> }
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }

                <motion.div
                  key={stat.label}
=======
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />
  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
              }}              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5}}
              style={{
            {/* Stats */}
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12'>;
              {[;
                {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],
              }}              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0 && 0.5,
              }}
              style={{
                left: `${Math && Math.random() * 100}%`,
                top: `${Math && Math.random() * 100}%`,
              }}            />;
          ))}
        </div>;
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion && motion.div                top: `${Math && Math.random() * 100}%`}}
            />;
          ))}
        </div>;
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
              </span>;
              <br />;
              <span className='text-white'>Services Showcase</span>;
            </h1>;
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>;
              Discover our complete portfolio of {allServices && allServices.length}+;
              innovative micro SAAS, AI, IT, and emerging technology services;
            </p>;
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
              {[;
                {;
                  label: 'Total Services',;
                  value: allServices && allServices.length,;
                  icon: <Globe className='w-8 h-8' />,;
                },;
                {;
                  label: 'AI Solutions',;
                  value: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length,;
                  icon: <Brain className='w-8 h-8' />,;
                },;
                {;
                  label: 'IT Services',;
                  value: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length,;
                  icon: <Shield className='w-8 h-8' />,;
                },;
                {;
                  label: 'Emerging Tech',;
                  value: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length,;
                  icon: <Atom className='w-8 h-8' />,;
                },              ].map((stat, index) => (                { label: 'Total Services', value: allServices && allServices.length, icon: <Globe className="w-8 h-8" /> },;
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.length, icon: <Brain className="w-8 h-8" /> },;
                { label: 'IT Services', value: innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.length, icon: <Shield className="w-8 h-8" /> },;
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.length, icon: <Atom className="w-8 h-8" /> }
                <motion&& motion.div
                  key={stat && stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
                x: [0, 100, 0]
                y: [0, -100, 0]
                opacity: [0.2, 0.8, 0.2]
              }}              transition={{
                duration: 10 + i * 2
                repeat: Infinity
                delay: i * 0.5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
              </span>
              <br />
              <span className='text-white'>Services Showcase</span>
            </h1>
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Discover our complete portfolio of {allServices.length}+
              innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
                {
                  label: 'Total Services'
                  value: allServices.length
                  icon: <Globe className='w-8 h-8' />
                }
                {
                  label: 'AI Solutions'
                  value: innovativeAIServicesEnhanced2025.length
                  icon: <Brain className='w-8 h-8' />
                }
                {
                  label: 'IT Services'
                  value: innovativeITServicesEnhanced2025.length
                  icon: <Shield className='w-8 h-8' />
                }
                {
                  label: 'Emerging Tech',
                  value: emergingTechServicesEnhanced2025.length,
                  icon: <Atom className='w-8 h-8' />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
className='text-center'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  <div className='text-sm text-cyan-300'>{stat.label}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                </motion.div>

              ))}
            </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Search Bar */}
<div className='max-w-2xl mx-auto'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>;
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-900 text-white'>                    {range && range.label}              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e && e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50";
              >;
                {priceRanges && priceRanges.map((range) => (;
                  <option key={range && range.value} value={range && range.value} className="bg-gray-900 text-white">;
                    {range && range.label}
                  </option>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Filters and Controls */}
<div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>
              {categories.map(category => (
                <button
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                      : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  {category.icon}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                  <span>{category.name}</span>
<span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
                    {category.count}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <span>{category.name}</span>
<span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
                    {category.count}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  </span>
                </button>
              ))}
            </div>

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            {/* Price and Sort Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-wrap items-center space-x-4'>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<div className='flex flex-wrap items-center space-x-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='flex flex-wrap items-center space-x-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}

              </select>;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-900 text-white'
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
                    {range.label}
                  </option>
                ))}
              </select>
              {/* Sort Options */}
              <select
                value={sortBy}
onChange={e => setSortBy(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {sortOptions.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                    className='bg-gray-900 text-white'
                  >
                    {option.label}
origin/cursor/automate-test-improve-and-merge-code-2533
                  </option>
                ))}
              </select>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Sort Options */}
              <select
                value={sortBy}

                ))}
              </select>
<<<<<<< HEAD
<<<<<<< HEAD

                <button

=======
              {/* View Mode Toggle */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <button
                <button

=======
              {/* View Mode Toggle */}
<<<<<<< HEAD
<<<<<<< HEAD
                <button
                <button

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
<div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <button
<<<<<<< HEAD

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
<Grid3X3 className='w-4 h-4' />
                </button>
origin/cursor/automate-test-improve-and-merge-code-2533
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-white'
                  }`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                >

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-gray-400'>            Showing {filteredServices.length} of {allServices.length} services      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="mb-8">;
          <p className="text-gray-400">;
          </p>;
        </div>;
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {filteredServices && filteredServices.map((service, index) => (          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices && filteredServices.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                >
<List className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Grid/List */}
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-gray-400'>
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>
        {viewMode === 'grid' ? (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
origin/cursor/automate-test-improve-and-merge-code-2533
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5, delay: index * 0.1 }}
className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className='ml-2'>{service && service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service && service.icon}              >;
                transition={{ duration: 0.5, delay: index * 0.1 }}

              >
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                  >
                    {getCategoryIcon(service.category)}
                    <span className='ml-2'>{service.category}</span>                  </span>
                </div>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service && service.icon}              >;
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {/* Category Badge */}
<<<<<<< HEAD
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
                  </span>
                </div>
                {/* Service Icon */}

                  </div>
                </div>
                {/* Service Info */}

                  {service.name}
                </h3>
                <p className='text-gray-400 mb-3 line-clamp-2'>
                  {service.tagline}
                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service.description}
                </p>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                  >
                    {getCategoryIcon(service.category)}
                    <span className='ml-2'>{service.category}</span>
                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
                {/* Service Info */}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      {/* Services Grid / List */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
        {/* Results Count */}
        <div className='mb - 8'>;
          <p className='text - gray - 400'>            Showing {filtered_services.length} of {all_services.length} services      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8 py-12">;
        {/* Results Count */}
        <div className="mb-8">;
          <p className="text-gray-400">;
          </p>;
        </div>;
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {filtered_services.map ((service, index) => (          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8">;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                {/* Category Badge */}
                <div className='absolute top - 4 right - 4'>;
                  <span;
                    className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}
                  >;
                    {getCategoryIcon (service.category)}
                    <span className='ml - 2'>{service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                    {service.icon}              >;
                {/* Category Badge */}
                <div className="absolute top-4 right-4">;
                  <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                    {getCategoryIcon (service.category)}
                    <span className="ml-2">{service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                <div className="mb-4">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition-transform duration-300">;
                    {service.icon}
                  </div>;
                </div>;
                {/* Service Info */}
                <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
<div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
                    {service.icon}
                  </div>
                </div>
                {/* Service Info */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
<h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  {service.name}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'>;
                  {service.tagline}
<<<<<<< HEAD
<<<<<<< HEAD
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                </p>;
                <p className='text - sm text - gray - 500 mb - 4 line - clamp - 3'>                  {service.description}
                </p>;
                {/* Price */}                  {service.name}
                </h3>;
                <p className="text - gray - 400 mb - 3 line-clamp-2">;
                  {service.tagline}
                </p>;
                <p className="text - sm text - gray - 500 mb - 4 line-clamp-3">;
                  {service.description}
<<<<<<< HEAD

                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">

                    <Users className="w-4 h-4" />


                {/* Price */}

                  {service.description}
                </p>

                {/* Price */}

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">;
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className="ml-2">{service && service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                <div className="mb-4">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">;
                    {service && service.icon}
                  </div>;
                </div>;
                {/* Service Info */}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                  {service && service.name}
                </h3>;
                <p className='text-gray-400 mb-3 line-clamp-2'>;
                  {service && service.tagline}
                </p>;
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service && service.description}
                </p>;
                {/* Price */}                  {service && service.name}
                </h3>;
                <p className="text-gray-400 mb-3 line-clamp-2">;
                  {service && service.tagline}
                </p>;
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">;
                  {service && service.description}
                </p>;
                {/* Price */}
                <div className='mb-4'>;
                  <span className='text-2xl font-bold text-cyan-400'>;
                    {service && service.price}
                  </span>;
                  <span className='text-gray-500 text-sm ml-2'>/month</span>;
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>;
                  <div className='flex items-center space-x-1 text-yellow-400'>;
                    <Star className='w-4 h-4 fill-current' />;
                    <span className='text-white'>{service && service.rating}</span>;
                    <span className='text-gray-500'>({service && service.reviews})</span>;
                  </div>;
                  <div className='flex items-center space-x-1 text-gray-400'>;
                    <Users className='w-4 h-4' />                    <span>{service && service.customers.toLocaleString()}</span>                  <div className="flex items-center space-x-1 text-gray-400">;
                    <Users className="w-4 h-4" />;
                    <span>{service && service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
                {/* Features Preview */}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                    )}
                  <div className="flex items-center justify-between">
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>
                  {service.description}
                </p>
                {/* Price */}
<div className='mb-4'>
                  <span className='text-2xl font-bold text-cyan-400'>
                    {service.price}
                  </span>
                  <span className='text-gray-500 text-sm ml-2'>/month</span>
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>
                  <div className='flex items-center space-x-1 text-yellow-400'>
                    <Star className='w-4 h-4 fill-current' />
                    <span className='text-white'>{service.rating}</span>
                    <span className='text-gray-500'>({service.reviews})</span>
                  </div>
                  <div className='flex items-center space-x-1 text-gray-400'>
                    <Users className='w-4 h-4' />
                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>
                {/* Features Preview */}
<div className='mb-4'>
                  <div className='text-xs text-gray-500 mb-2'>
                    Key Features:
                  </div>
                  <div className='space-y-1'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center space-x-2 text-sm text-gray-400'
                      >
                        <CheckCircle className='w-3 h-3 text-cyan-400' />
                        <span className='line-clamp-1'>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className='text-xs text-cyan-400'>
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
                {/* Market Info */}
<div className='mb-4 text-xs text-gray-500'>
                  <div className='flex items-center justify-between'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                {/* CTA Button */}
<button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
<<<<<<< HEAD

            {filteredServices.map((service, index) => (
              <motion.div
                </p>;
                {/* Price */}
                <div className='mb - 4'>;
                  <span className='text - 2xl font - bold text - cyan - 400'>;
                    {service.price}
                  </span>;
                  <span className='text - gray - 500 text - sm ml - 2'>/month</span>;
                {/* Stats */}
                <div className='flex items - center justify - between mb - 4 text - sm'>;
                  <div className='flex items - center space - x-1 text - yellow - 400'>;
                    <Star className='w - 4 h - 4 fill - current' />;
                    <span className='text - white'>{service.rating}</span>;
                    <span className='text - gray - 500'>({service.reviews})</span>;
                  </div>;
                  <div className='flex items - center space - x-1 text - gray - 400'>;
                    <Users className='w - 4 h - 4' />                    <span>{service.customers.toLocaleString ()}</span>                  <div className="flex items - center space - x-1 text - gray - 400">;
                    <Users className="w - 4 h - 4" />;
                    <span>{service.customers.toLocaleString ()}</span>;
                  </div>;
                </div>;
                {/* Features Preview */}
                <div className='mb - 4'>;
                  <div className='text - xs text - gray - 500 mb - 2'>;
                    Key Features:;
                  </div>;
                  <div className='space - y-1'>;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center space - x-2 text - sm text - gray - 400';
                      >;
                        <CheckCircle className='w - 3 h - 3 text - cyan - 400' />;
                        <span className='line - clamp - 1'>{feature}</span>;
                      </div>))}
                    {service.features.length > 3 && (
                      <div className='text - xs text - cyan - 400'>                        +{service.features.length - 3} more features                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 400">;
                        <CheckCircle className="w - 3 h - 3 text - cyan - 400" />;
                        <span className="line - clamp - 1">{feature}</span>;
                      </div>))}
                    {service.features.length > 3 && (
                      <div className="text - xs text - cyan - 400">;
                        +{service.features.length - 3} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Market Info */}
                <div className='mb - 4 text - xs text - gray - 500'>;
                  <div className='flex items - center justify - between'>                    <span > Market Size: {service.market_size}</span>                <div className="mb - 4 text - xs text - gray - 500">;
                  <div className="flex items - center justify - between">;
                    <span > Market Size: {service.market_size}</span>;
                    <span > Growth: {service.growth_rate}</span>;
                  </div>;
                </div>;
                {/* CTA Button */}
                <button className='w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 4 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105'>                  Learn More                <button className="w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 4 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105">;
                  Learn More;
                </button>;
              </motion.div>))}
          </div>) : (
          <div className='space - y-6'>            {filtered_services.map ((service, index) => (          <div className="space - y-6">;
            {filtered_services.map ((service, index) => (
              <motion.div;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<div className='space-y-6'>
            {filteredServices.map((service, index) => (
              <motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300'
              >
                <div className='flex items-start space-x-6'>
                  {/* Service Icon */}
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      {service.icon}
                    </div>
                  </div>
                  {/* Service Details */}
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='flex-1 min-w-0'>;
                    <div className='flex items-start justify-between mb-3'>;
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-lg text-cyan-300 mb-2'>;
                          {service && service.tagline}
                        </p>;
                        <p className='text-gray-400 mb-4'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='text-right'>;
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                          {service && service.price}
                        </div>;
                        <div className='text-gray-500 text-sm'>/month</div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='flex-1 min-w-0'>
                    <div className='flex items-start justify-between mb-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>
                          {service.name}
                        </h3>
                        <p className='text-lg text-cyan-300 mb-2'>
                          {service.tagline}
                        </p>
                        <p className='text-gray-400 mb-4'>
                          {service.description}
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>
                          {service.price}
                        </div>
                        <div className='text-gray-500 text-sm'>/month</div>
                        <span
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}
                        >
                          {service.category}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                        </span>
                      </div>
                    </div>
                    {/* Stats Row */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='flex items-center space-x-8 mb-4 text-sm'>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='flex items-center space-x-8 mb-4 text-sm'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <div className='flex items-center space-x-1 text-yellow-400'>
                        <Star className='w-4 h-4 fill-current' />
                        <span className='text-white font-medium'>
                          {service.rating}
                        </span>
                        <span className='text-gray-500'>
                          ({service.reviews} reviews)
                        </span>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Users className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.customers.toLocaleString()}
                        </span>
                        <span className='text-gray-500'>customers</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <TrendingUp className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.growthRate}
                        </span>
                        <span className='text-gray-500'>growth</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Globe className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.marketSize}
                        </span>
<<<<<<< HEAD
<<<<<<< HEAD
                        <span className='text-gray-500'>market</span>                      </div>
                    </div>
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{service.marketSize}</span>
                        <span className="text-gray-500">market</span>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                        <span className='text-gray-500'>market</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </div>
                    </div>
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>                          {service && service.category}                      <div className="text-right">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                        <div className="text-gray-500 text-sm">/month</div>;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items-center space-x-8 mb-4 text-sm'>;
                      <div className='flex items-center space-x-1 text-yellow-400'>;
                        <Star className='w-4 h-4 fill-current' />;
                        <span className='text-white font-medium'>;
                          {service && service.rating}
                        </span>;
                        <span className='text-gray-500'>;
                          ({service && service.reviews} reviews);
                        </span>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Users className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.customers.toLocaleString()}
                        </span>;
                        <span className='text-gray-500'>customers</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <TrendingUp className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.growthRate}
                        </span>;
                        <span className='text-gray-500'>growth</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Globe className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.marketSize}
                        </span>;
                        <span className='text-gray-500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">;
                        <Globe className="w-4 h-4" />;
                        <span className="text-white font-medium">{service && service.marketSize}</span>;
                        <span className="text-gray-500">market</span>;
                    </div>;
                    {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />

=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='mb-4'>
                      <div className='text-sm text-gray-500 mb-2'>
                        Key Features:
                      </div>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center space-x-2 text-sm text-gray-400'
                          >
                            <CheckCircle className='w-3 h-3 text-cyan-400 flex-shrink-0' />
                            <span>{feature}</span>
                          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                        ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {/* CTA */}
<div className='flex items-center justify-between'>
                      <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>
                        Learn More
                      </button>
                      <div className='text-xs text-gray-500'>
                        Launched:{' '}
<<<<<<< HEAD
                        {new Date(service.launchDate).toLocaleDateString()}                      </div>                    <div className="flex items-center justify-between">

                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {new Date(service.launchDate).toLocaleDateString()}

=======
                        {new Date(service.launchDate).toLocaleDateString()}
                      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </div>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD
                        ))}
                      </div>
                    </div>


                            <span>{feature}</span>

                          </div>
                        ))}
                      </div>
                    </div>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    {/* CTA */}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    {/* CTA */}
                    <div className='flex items-center justify-between'>;
                      <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'>;
                        Learn More;
                      </button>;
                      <div className='text-xs text-gray-500'>;
                        Launched:{' '}
                        {new Date(service && service.launchDate).toLocaleDateString()}                      </div>                    <div className="flex items-center justify-between">;
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">;
                        Learn More;
                      </button>;
                      <div className="text-xs text-gray-500">;
                        Launched: {new Date(service && service.launchDate).toLocaleDateString()}
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ))}
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className='text-center py-20'>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        {/* No Results */}
        {filteredServices.length === 0 && (
<div className='text-center py-20'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className='w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-cyan-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-gray-400 mb-6'>
              Try adjusting your search terms or filters to find what you're
<<<<<<< HEAD
              looking for.            </p>          <div className="text-center py-20">

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              looking for.
            </p>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            <button
              onClick={() => {;
                setSearchTerm('');
                setSelectedCategory('All Services');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion && motion.div      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'>;
                Get Started Today;
              </a>;
              <a
                href='/pricing'
<<<<<<< HEAD

=======
                setSelectedPriceRange('all')
                className='group bg - gradient - to - r from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-6'>;
                  {/* Service Icon */}
                  <div className='flex - shrink - 0'>;
                    <div className='w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                      {service.icon}              >;
                <div className="flex items-start space-x-6">;
                  {/* Service Icon */}
                  <div className="flex-shrink-0">;
                    <div className="w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition-transform duration-300">;
                      {service.icon}
                    </div>;
                  </div>;
                  {/* Service Details */}
                  <div className='flex - 1 min - w-0'>;
                    <div className='flex items - start justify - between mb - 3'>;
                        <h3 className='text - 2xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;
                          {service.name}
                        </h3>;
                        <p className='text - lg text - cyan - 300 mb - 2'>;
                          {service.tagline}
                        </p>;
                        <p className='text - gray - 400 mb - 4'>;
                          {service.description}
                        </p>;
                      </div>;
                      <div className='text - right'>;
                        <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                          {service.price}
                        </div>;
                        <div className='text - gray - 500 text - sm'>/month</div>;
                        <span;
                          className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}
                        >                          {service.category}                      <div className="text-right">;
                        <div className="text - 3xl font - bold text - cyan-400 mb-2">{service.price}</div>;
                        <div className="text - gray-500 text-sm">/month</div>;
                        <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items - center space - x-8 mb - 4 text - sm'>;
                      <div className='flex items - center space - x-1 text - yellow - 400'>;
                        <Star className='w - 4 h - 4 fill - current' />;
                        <span className='text - white font - medium'>;
                          {service.rating}
                        </span>;
                        <span className='text - gray - 500'>;
                          ({service.reviews} reviews);
                        </span>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Users className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.customers.toLocaleString ()}
                        </span>;
                        <span className='text - gray - 500'>customers</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <TrendingUp className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.growth_rate}
                        </span>;
                        <span className='text - gray - 500'>growth</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Globe className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.market_size}
                        </span>;
                        <span className='text - gray - 500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items - center space - x-1 text-gray-400">;
                        <Globe className="w-4 h-4" />;
                        <span className="text-white font-medium">{service.market_size}</span>;
                        <span className="text-gray-500">market</span>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <div className='text - sm text - gray - 500 mb - 2'>;
                        Key Features:;
                      </div>;
                      <div className='grid grid - cols - 2 gap - 2'>;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div;
                            key={idx}
                            className='flex items - center space - x-2 text - sm text - gray - 400';
                          >;
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="mb-4">;
                      <div className="text - sm text - gray-500 mb-2">Key Features:</div>;
                      <div className="grid grid - cols-2 gap-2">;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div key={idx} className="flex items - center space - x-2 text - sm text-gray-400">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 flex-shrink-0" />;
                          </div>))}
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>;
                      <button className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105'>;
                        Learn More;
                      </button>;
                      <div className='text - xs text - gray - 500'>;
                        Launched:{' '}
                        {new Date (service.launch_date).toLocaleDateString ()}                      </div>                    <div className="flex items-center justify-between">;
                      <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover: from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group-hover:scale-105">;
                        Learn More;
                      </button>;
                      <div className="text - xs text-gray-500">;
                        Launched: {new Date (service.launch_date).toLocaleDateString ()}
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>)}
        {/* No Results */}
        {filtered_services.length === 0 && (
          <div className='text - center py - 20'>;
            <div className='w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6'>;
              <Search className='w - 12 h - 12 text - cyan - 400' />;
            </div>;
            <h3 className='text - 2xl font - bold text - white mb - 2'>;
              No services found;
            </h3>;
            <p className='text - gray - 400 mb - 6'>;
              Try adjusting your search terms or filters to find what you're;
              looking for.            </p>          <div className="text-center py-20">;
            <div className="w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx-auto mb-6">;
              <Search className="w - 12 h - 12 text-cyan-400" />;
            </div>;
            <h3 className="text - 2xl font - bold text-white mb-2">No services found</h3>;
            <p className="text - gray-400 mb-6">;
              Try adjusting your search terms or filters to find what you're looking for.;
            <button;
              on_click={() => {
                setSearchTerm ('');
                setSelectedCategory ('All Services');
                setSelectedPriceRange ('all');
              }}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
setSelectedPriceRange('all');
              }}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      {/* CTA Section */}
<div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <motion.div

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className='text-4xl font-bold text-white mb-6'>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Ready to Transform Your Business?
<<<<<<< HEAD
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>
              Our team of experts is ready to help you implement the perfect
              solution for your needs. Get in touch today and discover how our
              innovative services can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'              >              Ready to Transform Your Business?
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              }}
              className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition-all duration-200";
            >;
              Clear All Filters;
            </button>;
          </div>)}
      </div>;
      {/* CTA Section */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<<<<<<< HEAD
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"

              >
                Get Started Today
              </a>
              <a

                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>

=======
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'>              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement the perfect solution for your needs. ;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <a
                href="/contact"
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
<h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>
              Our team of experts is ready to help you implement the perfect
              solution for your needs. Get in touch today and discover how our
              innovative services can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
              >
                Get Started Today
              </a>
              <a
href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
);
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
origin/cursor/automate-test-improve-and-merge-code-2533
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered)
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
}
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100
}%`;
top: `$ {
  Math.random () * 100
}%`
}/>) )
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion.div initial= {
<<<<<<< HEAD
=======
  {
  opacity: 0, y: 30
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  once: true 
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion && motion.div> </div> </div> </Layout>)   );

  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
}
      <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20 text - center'>          <motion.div      <div className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border-cyan-500 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py-20 text-center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105'              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'              >              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - cyan - 300 mb - 8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement the perfect solution for your needs.;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;
            <div className="flex flex - col sm: flex - row items - center justify - center space - y-4 sm:space-y-0 sm:space-x-6">;
              <a;
                href="/contact";
                className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan-500 / 25 hover:scale-105";
              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'                href="/pricing";
                className="border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition-all duration-200";
              >;
                View Pricing Plans;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </Layout>);
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || service.tagline.toLowerCase () .includes (search_term.toLowerCase () );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}//Sort services filtered.sort ( (a, b) => {
  switch (sort_by) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launch_date) .get_time () - new Date (a.launch_date) .get_time ();
case 'price - low': setFilteredServices (filtered);
}, [search_term, selected_category, selectedPriceRange, sort_by]);
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  once: true
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100;
}%`;
top: `$ {
  Math.random () * 100;
}%`;
}/>) );
}</div> <div className=" relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max-w-6xl mx-auto"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}> <h1 className=" text - 4xl sm:text - 5xl lg:text - 7xl font - bold text-white mb-6"> <span className=" bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion.div>) );
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name;
}on_click= {
  () => setSelectedCategory (category.name);
}className= {
  `flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 $ {
  selected_category === category.name ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25' : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
}`;
}> </span> </button>) );
}</div> </option>) );
}</select> {
  /* Sort Options */;
}<select </option>) );
}</select> <button on_click= {
  () => setViewMode ('grid');
}className= {
  `p - 2 rounded - md transition - all duration - 200 $ {
  view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
}`;
}> <Grid3X3 className=" w-4 h-4"/> </button> <button on_click= {
  () => setViewMode ('list');
}className= {
  `p - 2 rounded - md transition - all duration - 200 $ {
  view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - white';
}`;
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3;
}more features </div>);
}</div> </div> Learn More </button> </motion.div>) );
}</div> </span> </div> </div> </div>) );
}</div> </div> </div> </div> </div> </div> </motion.div>) );
}</div>);
}</div> <h3 className=" text - 2xl font - bold text-white mb-2">No services found</h3> <p className=" text - gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button on_click= {
  () => {
  > Clear All Filters </button> </div>);
}</div> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
  {
origin/cursor/automate-test-improve-and-merge-code-2533
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
