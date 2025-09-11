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



import {
  ChevronDown
  Star
  TrendingUp
  Zap
  Brain
  Cpu
  Shield
  Rocket
  Globe
  Database
  Lock
  Cloud
  Eye
  Timer
  Sparkles;


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
          return (innovationOrder[bLevel] || 0) - (innovationOrder[aLevel] || 0);
        case 'price':
          const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Advanced': 2, 'Emerging': 1 };
          return (innovationOrder[bLevel] || 0) - (innovationOrder[aLevel] || 0);
        case 'price':
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

  const containerVariants = {
}) => {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [sort_by, setSortBy] = useState<'innovation' | 'price' | 'rating'>('innovation');
;
  // Get unique categories;
  const categories = ['all', ...Array.from (new Set (services.map (service => service.category)))];
;
  // Filter and sort services;
  const filtered_services = services;
    .filter (service => selected_category === 'all' || service.category === selected_category);
    .sort ((a, b) => {
      switch (sort_by) {
        case 'innovation':;
          // Default to 'Advanced' if innovation_level is not available;
          const a_level = (a as any).innovation_level || 'Advanced';
          const b_level = (b as any).innovation_level || 'Advanced';
          const innovation_order = {
            Revolutionary: 4,
            Breakthrough: 3,
            Advanced: 2,
            Emerging: 1,
          }
          return (
            (innovation_order[b_level] || 0) - (innovation_order[a_level] || 0));
        case 'price':;
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));
        case 'rating':;
          return b.rating - a.rating;
        default:;
          return 0;      }        case 'price':;
          return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''));
        case 'rating':;
          return b.rating - a.rating;
        default: return 0;
      }
    });
    .slice (0, max_services);
;
  const container_variants = {    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
  };

      }    })
    .slice(0, maxServices);
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {

        staggerChildren: 0.1,
      },
    },  };

  };


  };

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

      <div className="absolute inset-0 pointer-events-none">;
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>;
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>;
      </div>;
  // Filter and sort services
  const _filteredServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort(_(a, _b) => {
      switch (sortBy) {
        case 'innovation':
          // Default to 'Advanced' if innovationLevel is not available
          const aLevel = (a as any).innovationLevel || 'Advanced'
          const bLevel = (b as any).innovationLevel || 'Advanced'
          const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Advanced': 2, 'Emerging': 1 },
          return (innovationOrder[bLevel] || 0) - (innovationOrder[aLevel] || 0),

        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
        case 'rating':
          return b.rating - a.rating,
        default: return 0
      }
    })
    .slice(0, maxServices),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  return (
    <section className=&quot;py-20 relative overflow-hidden&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl&quot;></div>
        <div className=&quot;absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl&quot;></div>
      </div>

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        duration: 0.6
        ease: 'easeOut' as const
      }
    }
  }
  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>
      </div>


  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>;
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>;
        <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>;
      </div>;
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };


      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

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

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;

        {/* Header */}
        <motion&& motion.div

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };


        {/* Header */}

        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}



            {title}
            className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6'          >            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6"
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6"          >

            {title}



            {title}          </motion && motion.h2>;
          <motion&& motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            {subtitle}

          </motion && motion.p>;
        </motion && motion.div>;


          >

            {subtitle}
          </motion.p>
        </motion.div>






                <button
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
        {/* Filters and Controls */}
        <motion&& motion.div          initial={{ opacity: 0, y: 20 }}
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


            </div>;
          </div>;


            >;
              <option value="innovation">Innovation Level</option>;
              <option value="price">Price</option>;
              <option value="rating">Rating</option>;
            </select>;
          </div>;




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
            </select>

          </div>
        </motion.div>

        </motion && motion.div>;


        </motion.div>


        {/* Call to Action */}
        <motion&& motion.div
            >
              <UltraFuturisticServiceCard
                service={service}
                className='h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300'              />              className="group"
            >
              <UltraFuturisticServiceCard
                service={service}
                className="h-full transform group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300"
              />

            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center mt-16'

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

                View Pricing;
              </a>;
            </div>;
          </div>;






        {/* Innovation Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

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
            ].map((stat, index) => (

                  className={`w-16 h-16 bg-gradient-to-br ${stat && stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>;
                  <stat && stat.icon className='w-8 h-8 text-white' />;
                </div>;
                <div className='text-3xl font-bold text-white mb-2'>;
                  {stat && stat.value}
                </div>;
                <div className='text-gray-400'>{stat && stat.label}</div>              </motion && motion.div>              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${stat && stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>;
                  <stat && stat.icon className="w-8 h-8 text-white" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat && stat.value}</div>;
                <div className="text-gray-400">{stat && stat.label}</div>;
              </motion && motion.div>;
            ))}
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );




            ))}
          </div>
        </motion.div>
      </div>
    </section>
export default UltraFuturistic2029ServiceShowcase;  )
}
export default UltraFuturistic2029ServiceShowcase;



                  services.reduce ((sum, s) => sum + s.rating, 0) /;
                  services.length).to_fixed (1),
                icon: TrendingUp,
                color: 'from - green - 500 to - teal - 500',
              },            ].map ((stat, index) => (              { label: 'Revolutionary Services', value: services.filter (string => s.innovation_level === 'Revolutionary').length, icon: Rocket, color: 'from - purple - 500 to - pink - 500' },
              { label: 'Patent Pending', value: services.filter (string => s.patent_status === 'Patent Pending').length, icon: Shield, color: 'from - blue - 500 to - cyan - 500' },
              { label: 'Total Customers', value: services.reduce ((sum, s) => sum + s.customers, 0), icon: Star, color: 'from - yellow - 500 to - orange - 500' },
              { label: 'Average Rating', value: (services.reduce ((sum, s) => sum + s.rating, 0) / services.length).to_fixed (1), icon: TrendingUp, color: 'from - green - 500 to - teal - 500' }
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text - center';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - br ${stat.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4`}
                >;
                  <stat.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <div className='text - 3xl font - bold text - white mb - 2'>;
                  {stat.value}
                </div>;
                <div className='text - gray - 400'>{stat.label}</div>              </motion.div>              >;
                <div className={`w - 16 h - 16 bg - gradient - to - br ${stat.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4`}>;
                  <stat.icon className="w - 8 h - 8 text - white" />;
                </div>;
                <div className="text - 3xl font - bold text - white mb - 2">{stat.value}</div>;
                <div className="text - gray - 400">{stat.label}</div>;
              </motion.div>))}
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default UltraFuturistic2029ServiceShowcase);
}
;
export default UltraFuturistic2029ServiceShowcase;
;=======
  );
  );

};


export default UltraFuturistic2029ServiceShowcase;
export default UltraFuturistic2029ServiceShowcase;
