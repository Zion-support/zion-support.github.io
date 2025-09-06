
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
import React, { useState } from 'react';

import { motion } from 'framer-motion';


} from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';
import { CuttingEdgeInnovation2029 } from '../../data/2029-cutting-edge-innovations';
type Service = CuttingEdgeInnovation2029 | any;

=======


  ChevronDown,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Globe,
  Database,
  Lock,
  Cloud,
  Eye,

  Timer,;
  Sparkles,;


} from 'lucide-react';
import UltraFuturisticServiceCard from '../ui / UltraFuturisticServiceCard';
import { CuttingEdgeInnovation2029 } from '../../data / 2029 - cutting - edge - innovations';
;
type Service = CuttingEdgeInnovation2029 | any;
;
interface UltraFuturistic2029ServiceShowcaseProps {
interface UltraFuturistic2029ServiceShowcaseProps {;
  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;

const categoryColors: { [key: string]: string } = {
  'AI & Consciousness': 'from-purple-600 to-pink-600'
  'Quantum & Neuroscience': 'from-indigo-600 to-purple-600'
  'Space Colonization': 'from-red-600 to-orange-600'
  'Space Mining': 'from-yellow-600 to-orange-600'
  'Space Architecture': 'from-green-600 to-teal-600'
  'Space Energy': 'from-yellow-500 to-orange-500'
  'AI & Business': 'from-blue-600 to-cyan-600'
  'Quantum & Time': 'from-green-600 to-emerald-600'
  'AI & Augmented Reality': 'from-orange-600 to-red-600'
}
const categoryIcons: { [key: string]: any } = {
  'AI & Consciousness': Brain
  'Quantum & Neuroscience': Cpu
  'Space Colonization': Rocket
  'Space Mining': Zap
  'Space Architecture': Globe
  'Space Energy': Sparkles
  'AI & Business': Database
  'Quantum & Time': Timer
  'AI & Augmented Reality': Eye
}
const UltraFuturistic2029ServiceShowcase: React.FC<
  UltraFuturistic2029ServiceShowcaseProps
> = ({
  services
  title = '2029 Ultra-Futuristic Innovations'
  subtitle = 'Experience the future of technology with our revolutionary services'
  maxServices = 12
}) => {
=======

const categoryColors: { [key: string]: string } = {;
  'AI & Consciousness': 'from-purple-600 to-pink-600',;
  'Quantum & Neuroscience': 'from-indigo-600 to-purple-600',;
  'Space Colonization': 'from-red-600 to-orange-600',;
  'Space Mining': 'from-yellow-600 to-orange-600',;
  'Space Architecture': 'from-green-600 to-teal-600',;
  'Space Energy': 'from-yellow-500 to-orange-500',;
  'AI & Business': 'from-blue-600 to-cyan-600',;
  'Quantum & Time': 'from-green-600 to-emerald-600',;
  'AI & Augmented Reality': 'from-orange-600 to-red-600',;
};

const categoryIcons: { [key: string]: any } = {;
  'AI & Consciousness': Brain,;
  'Quantum & Neuroscience': Cpu,;
  'Space Colonization': Rocket,;
  'Space Mining': Zap,;
  'Space Architecture': Globe,;
  'Space Energy': Sparkles,;
  'AI & Business': Database,;
  'Quantum & Time': Timer,;
  'AI & Augmented Reality': Eye,;
};

const UltraFuturistic2029ServiceShowcase: React.FC<;
  UltraFuturistic2029ServiceShowcaseProps;
> = ({;
  services,;
  title = '2029 Ultra-Futuristic Innovations',;
  subtitle = 'Experience the future of technology with our revolutionary services',;
  maxServices = 12,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'innovation' | 'price' | 'rating'>(
    'innovation'
  );

  max_services?: number;
;
const category_colors: { [key: string]: string } = {
  'AI & Consciousness': 'from - purple - 600 to - pink - 600',
  'Quantum & Neuroscience': 'from - indigo - 600 to - purple - 600',
  'Space Colonization': 'from - red - 600 to - orange - 600',
  'Space Mining': 'from - yellow - 600 to - orange - 600',
  'Space Architecture': 'from - green - 600 to - teal - 600',
  'Space Energy': 'from - yellow - 500 to - orange - 500',
  'AI & Business': 'from - blue - 600 to - cyan - 600',
  'Quantum & Time': 'from - green - 600 to - emerald - 600',
  'AI & Augmented Reality': 'from - orange - 600 to - red - 600',
}
;
const category_icons: { [key: string]: any } = {
  'AI & Consciousness': Brain,
  'Quantum & Neuroscience': Cpu,
  'Space Colonization': Rocket,
  'Space Mining': Zap,
  'Space Architecture': Globe,
  'Space Energy': Sparkles,
  'AI & Business': Database,
  'Quantum & Time': Timer,
  'AI & Augmented Reality': Eye,
}
;
const UltraFuturistic2029ServiceShowcase: React.FC<;
  UltraFuturistic2029ServiceShowcaseProps;
> = ({
  services,
  title = '2029 Ultra - Futuristic Innovations',
  subtitle = 'Experience the future of technology with our revolutionary services',
  max_services = 12,
}) => {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [sort_by, setSortBy] = useState<'innovation' | 'price' | 'rating'>(
    'innovation');
;
  // Get unique categories;
  const categories = [;
    'all',
    ...Array.from (new Set (services.map (service => service.category))),
  ];
;
  // Filter and sort services;
  const filtered_services = services;
    .filter (
      service =>;
        selected_category === 'all' || service.category === selected_category)    .sort ((a, b) => {import UltraFuturisticServiceCard from '../ui / UltraFuturisticServiceCard';
import { CuttingEdgeInnovation2029 } from '../../data / 2029 - cutting - edge - innovations';
type Service = CuttingEdgeInnovation2029 | any;
;

interface UltraFuturistic2029ServiceShowcaseProps {
  services: Service[]
=======

  // Get unique categories;
  const categories = [;
    'all',;
    ...Array && Array.from(new Set(services && services.map(service => service && service.category))),;
  ];

  // Filter and sort services;
  const filteredServices = services;
    .filter(;
      service =>;
        selectedCategory === 'all' || service && service.category === selectedCategory;
    )    .sort((a, b) => {import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

=======
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Eye, Timer, Sparkles } from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

import { CuttingEdgeInnovation2029 } from '../../data/2029-cutting-edge-innovations';
type Service = CuttingEdgeInnovation2029 | any;

interface UltraFuturistic2029ServiceShowcaseProps {;
  services: Service[],;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title?: string;
  subtitle?: string;


const categoryColors: { [key: string]: string } = {;
  'AI & Consciousness': 'from-purple-600 to-pink-600Quantum & Neuroscience': 'from-indigo-600 to-purple-600Space Colonization': 'from-red-600 to-orange-600Space Mining': 'from-yellow-600 to-orange-600Space Architecture': 'from-green-600 to-teal-600Space Energy': 'from-yellow-500 to-orange-500AI & Business': 'from-blue-600 to-cyan-600Quantum & Time': 'from-green-600 to-emerald-600AI & Augmented Reality': 'from-orange-600 to-red-600';
};

const categoryIcons: { [key: string]: any } = {;

=======
  max_services?: number;
}
const category_colors: { [key: string]: string } = {
  'AI & Consciousness': 'from - purple - 600 to - pink - 600Quantum & Neuroscience': 'from - indigo - 600 to - purple - 600Space Colonization': 'from - red - 600 to - orange - 600Space Mining': 'from - yellow - 600 to - orange - 600Space Architecture': 'from - green - 600 to - teal - 600Space Energy': 'from - yellow - 500 to - orange - 500AI & Business': 'from - blue - 600 to - cyan - 600Quantum & Time': 'from - green - 600 to - emerald - 600AI & Augmented Reality': 'from - orange - 600 to - red - 600';
}
;
const category_icons: { [key: string]: any } = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  'AI & Consciousness': Brain;
  'Quantum & Neuroscience': Cpu;
  'Space Colonization': Rocket;
  'Space Mining': Zap;
  'Space Architecture': Globe;
  'Space Energy': Sparkles;
  'AI & Business': Database;
  'Quantum & Time': Timer;

  'AI & Augmented Reality': Eye;
};
const UltraFuturistic2029ServiceShowcase: React.FC<UltraFuturistic2029ServiceShowcaseProps> = ({;

=======
  'AI & Augmented Reality': Eye;
}
;
const UltraFuturistic2029ServiceShowcase: React.FC < UltraFuturistic2029ServiceShowcaseProps> = ({
  services;
  title = "2029 Ultra - Futuristic Innovations";
  subtitle = "Experience the future of technology with our revolutionary services";

    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)

    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          // Default to 'Advanced' if innovationLevel is not available
          const aLevel = (a as any).innovationLevel |'Advanced';
          const bLevel = (b as any).innovationLevel |'Advanced';
          const innovationOrder = {
            Revolutionary: 4
            Breakthrough: 3
            Advanced: 2
            Emerging: 1
          }
          return (
            (innovationOrder[bLevel] |0) - (innovationOrder[aLevel] |0)
          const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Advanced': 2, 'Emerging': 1 };
          return (innovationOrder[bLevel] || 0) - (innovationOrder[aLevel] || 0);
        case 'price':
=======
          );
        case 'price':
          return (
            parseFloat(a.price.replace(/[^0-9.]/g, '')) -
            parseFloat(b.price.replace(/[^0-9.]/g, ''))
          );
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;      }        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default: return 0

      }
    })
    .slice(0, maxServices);
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
        staggerChildren: 0.1,
      },
    },  };

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {


  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };

  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut' as const,;
      },;
    },;
  };


  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background Elements */}

      <div className='absolute inset-0 pointer-events-none'>;
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>;
      </div>;
=======
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };


      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <section className="py-20 relative overflow-hidden">;
      {/* Background Elements */}

      <div className="absolute inset-0 pointer-events-none">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>;
      </div>;

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;

        {/* Header */}
        <motion&& motion.div
=======

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

=======
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}

        {/* Header */}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'        >          className="text-center mb-16"
          className='text-center mb-16'        >

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6"
          >





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {title}
          </motion && motion.h2>;
          <motion&& motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'          >            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'          >

          >

            {subtitle}
          </motion.p>
        </motion.div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Filters and Controls */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-12'
        >
          {/* Category Filter */}
          <div className='flex items-center space-x-2'>
            <span className='text-gray-300 text-sm font-medium'>
              Filter by:
            </span>
            <div className='flex flex-wrap gap-2'>
              {categories.map(category => (                <button          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (


                <button


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg';
                      : 'bg-gray-900/50 text-gray-300 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50';
                  }`}
                >;
                  {category === 'all' ? 'All Categories' : category}
                </button>;
              ))}
            </div>
          </div>
          {/* Sort Options */}
          <div className='flex items-center space-x-2'>;
            <span className='text-gray-300 text-sm font-medium'>Sort by:</span>;
          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 text-sm font-medium">Sort by:</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <select
              value={sortBy}
              onChange={e => setSortBy(e && e.target.value as any)}
              className='px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500';
            >;
              <option value='innovation'>Innovation Level</option>;
              <option value='price'>Price</option>;
              <option value='rating'>Rating</option>            </select>            <select
              value={sortBy}


            >;
              <option value="innovation">Innovation Level</option>;
              <option value="price">Price</option>;
              <option value="rating">Rating</option>;
            </select>;
          </div>;


=======


          {/* Sort Options */}
          <div className='flex items-center space-x-2'>
            <span className='text-gray-300 text-sm font-medium'>Sort by:</span>


            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className='px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500'
            >
              <option value='innovation'>Innovation Level</option>
              <option value='price'>Price</option>
              <option value='rating'>Rating</option>            </select>            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500"
            >
              <option value="innovation">Innovation Level</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </motion.div>
              <option value='rating'>Rating</option>            </select>

            </select>

          </div>
        </motion.div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'        >          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className='group'
            >
              <UltraFuturisticServiceCard
                service={service}
                className='h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300'              />              className="group"
            >
              <UltraFuturisticServiceCard
                service={service}
                className="h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300"
            </motion.div>
          ))}
        </motion.div>
                className='h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300'              />

              />

            </motion.div>
          ))}
        </motion.div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center mt-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        >
          <div className='bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Experience the Future?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of forward-thinking companies already using our
              revolutionary 2029 technology solutions.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <a
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25'              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold'>        >;
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Experience the Future?;
            </h3>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join thousands of forward-thinking companies already using our revolutionary 2029 technology solutions.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-purple-500/25">;
                Get Started Today;
              </a>;
              <a
                href='/pricing'
                className='px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold'                href="/pricing"
                className="px-8 py-4 bg-gray-900/50 text-white rounded-xl hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 text-lg font-semibold"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>


                View Pricing;
              </a>;
            </div>;
          </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Innovation Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-20'


          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                label: 'Revolutionary Services'
                value: services.filter(
                  s => s.innovationLevel === 'Revolutionary'
                ).length
                icon: Rocket
                color: 'from-purple-500 to-pink-500'
              }
              {
                label: 'Patent Pending'
                value: services.filter(s => s.patentStatus === 'Patent Pending')
                  .length
                icon: Shield
                color: 'from-blue-500 to-cyan-500'
              }
              {
                label: 'Total Customers'
                value: services.reduce((sum, s) => sum + s.customers, 0)
                icon: Star
                color: 'from-yellow-500 to-orange-500'
              }
=======
        </motion.div>;
        {/* Innovation Stats */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt - 20';
          <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 8'>;
            {[;
              {
                label: 'Revolutionary Services',
                value: services.filter (
                  string => s.innovation_level === 'Revolutionary').length,
                icon: Rocket,
                color: 'from - purple - 500 to - pink - 500',
              },
              {
                label: 'Patent Pending',
                value: services.filter (string => s.patent_status === 'Patent Pending');
                  .length,
                icon: Shield,
                color: 'from - blue - 500 to - cyan - 500',
              },
              {
                label: 'Total Customers',
                value: services.reduce ((sum, s) => sum + s.customers, 0),
                icon: Star,
                color: 'from - yellow - 500 to - orange - 500',
              },
              {
                label: 'Average Rating'
                value: (
                  services.reduce((sum, s) => sum + s.rating, 0) /
                  services.length
                ).toFixed(1)
                icon: TrendingUp
                color: 'from-green-500 to-teal-500'
              },            ].map((stat, index) => (              { label: 'Revolutionary Services', value: services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' }
              { label: 'Patent Pending', value: services.filter(s => s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' }
              { label: 'Total Customers', value: services.reduce((sum, s) => sum + s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' }
              { label: 'Average Rating', value: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }
                ).toFixed(1),
                icon: TrendingUp,
                color: 'from-green-500 to-teal-500',
              },            ].map((stat, index) => (              { label: 'Revolutionary Services', value: services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' },
              { label: 'Patent Pending', value: services.filter(s => s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' },
              { label: 'Total Customers', value: services.reduce((sum, s) => sum + s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' },
              { label: 'Average Rating', value: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }

        {/* Innovation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-20'

        >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                label: 'Revolutionary Services'
                value: services.filter(
                  s => s.innovationLevel === 'Revolutionary'
                ).length
                icon: Rocket
                color: 'from-purple-500 to-pink-500'
              }
              {
                label: 'Patent Pending'
                value: services.filter(s => s.patentStatus === 'Patent Pending')
                  .length
                icon: Shield
                color: 'from-blue-500 to-cyan-500'
              }
              {
                label: 'Total Customers'
                value: services.reduce((sum, s) => sum + s.customers, 0)
                icon: Star
                color: 'from-yellow-500 to-orange-500'
              }
              {
                label: 'Average Rating'
                value: (
                  services.reduce((sum, s) => sum + s.rating, 0) /
                  services.length
                ).toFixed(1),
                icon: TrendingUp,
                color: 'from-green-500 to-teal-500',
              },            ].map((stat, index) => (              { label: 'Revolutionary Services', value: services.filter(s => s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' },
              { label: 'Patent Pending', value: services.filter(s => s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' },
              { label: 'Total Customers', value: services.reduce((sum, s) => sum + s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' },
              { label: 'Average Rating', value: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }

            ].map((stat, index) => (

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <motion.div
<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>;
            {[;
              {;
                label: 'Revolutionary Services',;
                value: services && services.filter(;
                  s => s && s.innovationLevel === 'Revolutionary';
                ).length,;
                icon: Rocket,;
                color: 'from-purple-500 to-pink-500',;
              },;
              {;
                label: 'Patent Pending',;
                value: services && services.filter(s => s && s.patentStatus === 'Patent Pending');
                  .length,;
                icon: Shield,;
                color: 'from-blue-500 to-cyan-500',;
              },;
              {;
                label: 'Total Customers',;
                value: services && services.reduce((sum, s) => sum + s && s.customers, 0),;
                icon: Star,;
                color: 'from-yellow-500 to-orange-500',;
              },;
              {;
                label: 'Average Rating',;
                value: (;
                  services && services.reduce((sum, s) => sum + s && s.rating, 0) /;
                  services && services.length;
                ).toFixed(1),;
                icon: TrendingUp,;
                color: 'from-green-500 to-teal-500',;
              },            ].map((stat, index) => (              { label: 'Revolutionary Services', value: services && services.filter(s => s && s.innovationLevel === 'Revolutionary').length, icon: Rocket, color: 'from-purple-500 to-pink-500' },;
              { label: 'Patent Pending', value: services && services.filter(s => s && s.patentStatus === 'Patent Pending').length, icon: Shield, color: 'from-blue-500 to-cyan-500' },;
              { label: 'Total Customers', value: services && services.reduce((sum, s) => sum + s && s.customers, 0), icon: Star, color: 'from-yellow-500 to-orange-500' },;
              { label: 'Average Rating', value: (services && services.reduce((sum, s) => sum + s && s.rating, 0) / services && services.length).toFixed(1), icon: TrendingUp, color: 'from-green-500 to-teal-500' }
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center'




              >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className='w-8 h-8 text-white' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-400'>{stat.label}</div>              </motion.div>              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
