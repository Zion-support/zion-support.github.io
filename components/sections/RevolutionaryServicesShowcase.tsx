<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap  } from 'lucide-react';
import { revolutionary2025MicroSaasServices  } from '../../data/revolutionary-2025-micro-saas';
import { emergingTech2025Services  } from '../../data/emerging-tech-2025-services';
import { enterpriseIT2025Services } from '../../data/enterprise-it-2025-services';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const RevolutionaryServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
  const categories = [
<<<<<<< HEAD
<<<<<<< HEAD
    {
      id: 'all'
      name: 'All Services'
      count:
        revolutionary2025MicroSaasServices.length +
        emergingTech2025Services.length +
        enterpriseIT2025Services.length
    }
    {
      id: 'ai'
      name: 'AI & ML'
      count: [
        ...revolutionary2025MicroSaasServices
        ...emergingTech2025Services
        ...enterpriseIT2025Services
      ].filter(s => s.category.includes('AI')).length
    }
    {
      id: 'quantum'
      name: 'Quantum Tech'
      count: [
        ...revolutionary2025MicroSaasServices
        ...emergingTech2025Services
        ...enterpriseIT2025Services
      ].filter(s => s.category.includes('Quantum')).length
    }
    {
      id: 'emerging'
      name: 'Emerging Tech'
      count: emergingTech2025Services.length
    }
    {
      id: 'enterprise'
      name: 'Enterprise IT'
      count: enterpriseIT2025Services.length
    }
    {
      id: 'revolutionary'
      name: 'Revolutionary'
      count: revolutionary2025MicroSaasServices.length
    setVisibleServices(prev => Math.min(prev + 12, filteredServices.length))
  };
  const containerVariants = {
    hidden: { opacity: 0 }
;
  const all_services = [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services];
;
  const filtered_services = active_category === 'all';
    ? all_services;
    : all_services.filter (service => {
        if (return service.category.includes ('AI')) {
  $2
}
        if (return service.category.includes ('Quantum')) {
  $2
}
        if (return emergingTech2025Services.includes (service)) {
  $2
}
        if (return enterpriseIT2025Services.includes (service)) {
  $2
}
        if (return revolutionary2025MicroSaasServices.includes (service)) {
  $2
}
        return true;
      });
;
  const load_more = () =>: any {
    setVisibleServices (prev => Math.min (prev + 12, filtered_services.length));    setVisibleServices (prev => Math.min (prev + 12, filtered_services.length));
  }
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
  };
    },  ];
  const allServices = [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services];
  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(service => {
        if (activeCategory === 'ai') return service.category.includes('AI');
        if (activeCategory === 'quantum') return service.category.includes('Quantum');
        if (activeCategory === 'emerging') return emergingTech2025Services.includes(service);
        if (activeCategory === 'enterprise') return enterpriseIT2025Services.includes(service);
        if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices.includes(service);
        return true
      });
  const loadMore = () => {
    setVisibleServices(prev => Math.min(prev + 12, filteredServices.length));    setVisibleServices(prev => Math.min(prev + 12, filteredServices.length))
  }
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const RevolutionaryServicesShowcase: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
    { id: 'all', name: 'All Services', count: revolutionary2025MicroSaasServices.length + emergingTech2025Services.length + enterpriseIT2025Services.length },
    { id: 'ai', name: 'AI & ML', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('AI')).length };
    { id: 'quantum', name: 'Quantum Tech', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('Quantum')).length };
    { id: 'emerging', name: 'Emerging Tech', count: emergingTech2025Services.length },
    { id: 'enterprise', name: 'Enterprise IT', count: enterpriseIT2025Services.length },
    { id: 'revolutionary', name: 'Revolutionary', count: revolutionary2025MicroSaasServices.length }
  ];
  const categories = [;
    {;
      id: 'all',;
      name: 'All Services',;
      count:;
        revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length +;
        emergingTech2025Services && emergingTech2025Services.length +;
        enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'ai',;
      name: 'AI & ML',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('AI')).length,;
    },;
    {;
      id: 'quantum',;
      name: 'Quantum Tech',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('Quantum')).length,;
    },;
    {;
      id: 'emerging',;
      name: 'Emerging Tech',;
      count: emergingTech2025Services && emergingTech2025Services.length,;
    },;
    {;
      id: 'enterprise',;
      name: 'Enterprise IT',;
      count: enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'revolutionary',;
      name: 'Revolutionary',;
      count: revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length,;
    },  ];


    visible: {
      opacity: 1
      transition: {

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
<<<<<<< HEAD


=======
        duration: 0.5
      }
    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        duration: 0.5,
      },
    },


<<<<<<< HEAD
<<<<<<< HEAD
        duration: 0.5
      }
    }
  }
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
        duration: 0 && 0.5,;
      },;
    },;
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const filteredServices = activeCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => {;
        if (activeCategory === 'ai') return service && service.category.includes('AI');
        if (activeCategory === 'quantum') return service && service.category.includes('Quantum');
        if (activeCategory === 'emerging') return emergingTech2025Services && emergingTech2025Services.includes(service);
        if (activeCategory === 'enterprise') return enterpriseIT2025Services && enterpriseIT2025Services.includes(service);
        if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.includes(service);
        return true;
      });
  const loadMore = () => {;
    setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length));    setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length));
  };

<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}
<<<<<<< HEAD

        <motion&& motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }


<<<<<<< HEAD
        <motion&& motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

        <motion&& motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  };



          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <motion&& motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}>;
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
              Revolutionary 2025;
            </span>;
            <br />;
            <span className='text-white'>Services</span>;
          </h2>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future with our cutting-edge AI, quantum computing,;
            and emerging technology solutions. Transform your business with;
            services that were once science fiction.          </p>;
        </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Category Filter */}
        <motion&& motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'          initial={{ opacity: 0, y: 20 }}              Revolutionary 2025
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary 2025
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* Category Filter */}
        <motion&& motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'          initial={{ opacity: 0, y: 20 }}              Revolutionary 2025

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary 2025

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </span>
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions.
            Transform your business with services that were once science fiction.
          </p>
        </motion.div>
        {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'        <motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </span>;
            <br />;
            <span className="text-white">Services</span>;
          </h2>;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions. ;
            Transform your business with services that were once science fiction.;
          </p>;
        </motion && motion.div>;
        {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"

  const _filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeCategory === 'ai') return service.category.includes('AI'),
        if (activeCategory === 'quantum') return service.category.includes('Quantum'),
        if (activeCategory === 'emerging') return emergingTech2025Services.includes(service),
        if (activeCategory === 'enterprise') return enterpriseIT2025Services.includes(service),
        if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices.includes(service),
        return true
      }),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },

  return (
    <section className=&quot;relative z-10 py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <motion.div 
          className=&quot;text-center mb-16&quot;
        duration: 0.5,
      },
    },

  };

  return (
    <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  };

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              Revolutionary 2025
            </span>
            <br />
            <span className='text-white'>Services</span>
          </h2>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum computing
            and emerging technology solutions. Transform your business with
            services that were once science fiction.          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'          initial={{ opacity: 0, y: 20 }}              Revolutionary 2025
            </span>
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions.
            Transform your business with services that were once science fiction.
          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<<<<<<< HEAD
<<<<<<< HEAD
          {categories.map(category => (            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleServices(12);              }}          {categories.map((category) => (
=======
          {categories.map((category) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {categories.map((category) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
<<<<<<< HEAD
<<<<<<< HEAD


              </span>
            </button>
          ))}

        </motion && motion.div>;





        </motion && motion.div>;
                setVisibleServices(12);                setVisibleServices(12)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
=======
                setVisibleServices(12)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                activeCategory === category && category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25';
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }`}
            >
              {category.name}
              <span className='ml-2 px-2 py-1 bg-white/20 rounded-full text-xs'>                {category.count}              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              <span className='ml-2 px-2 py-1 bg-white/20 rounded-full text-xs'>                {category.count}

<<<<<<< HEAD
                {category.count}

              </span>
            </button>
          ))}
        </motion.div>

=======
                setVisibleServices(12)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                activeCategory === category && category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25';
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50';
              }`}


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </span>
            </button>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
<<<<<<< HEAD
=======
        </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </motion && motion.div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */}
        <motion&& motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'          viewport={{ once: true }}          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible">;
          {filteredServices && filteredServices.slice(0, visibleServices).map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
              variants={itemVariants}
              className='group relative cursor-pointer'
<<<<<<< HEAD
              style={{ perspective: '1000px' }}>;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'>;
                {/* Background Effects */}

                <div className='absolute inset-0 rounded-2xl overflow-hidden'>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>;
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>                </div>;


<<<<<<< HEAD
              style={{ perspective: '1000px' }}>;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              style={{ perspective: '1000px' }}
            >
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'></div>
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'>
<<<<<<< HEAD
                {/* Background Effects */}
                <div className='absolute inset-0 rounded-2xl overflow-hidden'>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>;
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>                </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
              style={{ perspective: '1000px' }}>;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'>;
                {/* Background Effects */}

                <div className='absolute inset-0 rounded-2xl overflow-hidden'>;
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>;
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>                </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Popular Badge */}
                {service && service.popular && (;
                  <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'>;
                    <Star className='w-3 h-3 inline mr-1' />                    POPULAR              style={{ perspective: '1000px' }}
            >;
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75"></div>;
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full">;
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
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
  return (
    <section className='relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <div className='max - w-7xl mx - auto'>;
        {/* Header */}
        <motion.div;
          className='text - center mb - 16'          initial={{ opacity: 0, coordinate_y: 30 }}  }
;
  return (
    <section className="relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8">;
      <div className="max - w-7xl mx - auto">;
        {/* Header */}
        <motion.div;
          className="text - center mb - 16";
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h2 className='text - 5xl md:text - 6xl font - bold text - white mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
              Revolutionary 2025;
            </span>;
            <br />;
            <span className='text - white'>Services</span>;
          </h2>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Experience the future with our cutting - edge AI, quantum computing,
            and emerging technology solutions. Transform your business with;
            services that were once science fiction.          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          className='flex flex - wrap justify - center gap - 4 mb - 12'          initial={{ opacity: 0, coordinate_y: 20 }}              Revolutionary 2025;
            </span>;
            <br />;
            <span className="text - white">Services</span>;
          </h2>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Experience the future with our cutting - edge AI, quantum computing, and emerging technology solutions.;
            Transform your business with services that were once science fiction.;
          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          className='flex flex - wrap justify - center gap - 4 mb - 12'        <motion.div;
          className="flex flex - wrap justify - center gap - 4 mb - 12";
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >;
          {categories.map (category => (            <button;
              key={category.id}
              on_click={() => {
                setActiveCategory (category.id);
                setVisibleServices (12);              }}          {categories.map ((category) => (
            <button;
              key={category.id}
              on_click={() => {
                setActiveCategory (category.id);
                setVisibleServices (12);                setVisibleServices (12);
              }}
              className={`px - 6 py - 3 rounded - full font - semibold transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 ${
                active_category === category.id;
                  ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                  : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50 border border - gray - 600 / 50';
              }`}
            >;
              {category.name}
              <span className='ml - 2 px - 2 py - 1 bg - white / 20 rounded - full text - xs'>                {category.count}              <span className="ml - 2 px - 2 py - 1 bg - white / 20 rounded - full text - xs">;
                {category.count}
              </span>;
            </button>))}
        </motion.div>;
        {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              className='group relative cursor-pointer'




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              style={{ perspective: '1000px' }}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                {/* Background Effects */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="absolute inset-0 rounded-2xl overflow-hidden">;
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>;
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>;
                </div>;
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Star className="w-3 h-3 inline mr-1" />
                    POPULAR
                  </div>
                )}

<<<<<<< HEAD
                {/* Popular Badge */}
                {service && service.popular && (;
                  <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'>;
                    <Star className='w-3 h-3 inline mr-1' />                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">;
                    <Star className="w-3 h-3 inline mr-1" />;
                    POPULAR;
                  </div>;
                )}



                {/* Service Header */}
<<<<<<< HEAD
=======
=======
                {/* Service Header */}
                <div className='relative z-10'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='text-4xl'>{service.icon}</div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      <div>
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <motion.div;
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 12';
          variants={container_variants}
          initial='hidden';
          whileInView='visible'          viewport={{ once: true }}          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 12";
          variants={container_variants}
          initial="hidden";
          whileInView="visible";
        >;
          {filtered_services.slice (0, visible_services).map ((service, index) => (
            <motion.div;
              key={service.id}
              variants={item_variants}
              className='group relative cursor - pointer';
              style={{ perspective: '1000px' }}
            >;
              <div className='absolute -inset - 1 rounded - 2xl bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 opacity - 0 blur - lg transition - all duration - 300 group - hover:opacity - 75'></div>;
              <div className='relative bg - black / 80 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 6 overflow - hidden h - full'>;
                {/* Background Effects */}
                <div className='absolute inset - 0 rounded - 2xl overflow - hidden'>;
                  <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500'></div>;
                  <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - white / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 700'></div>                </div>;
                {/* Popular Badge */}
                {service.popular && (
                  <div className='absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300'>;
                    <Star className='w - 3 h - 3 inline mr - 1' />                    POPULAR              style={{ perspective: '1000px' }}
            >;
              <div className="absolute -inset - 1 rounded - 2xl bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 opacity - 0 blur - lg transition - all duration - 300 group - hover:opacity - 75"></div>;
              <div className="relative bg - black / 80 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 6 overflow - hidden h - full">;
                {/* Background Effects */}
                <div className="absolute inset - 0 rounded - 2xl overflow - hidden">;
                  <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500"></div>;
                  <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - white / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 700"></div>;
                </div>;
                {/* Popular Badge */}
                {service.popular && (
                  <div className='absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300'>;
                    <Star className='w - 3 h - 3 inline mr - 1' />                  <div className="absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300">;
                    <Star className="w - 3 h - 3 inline mr - 1" />;
                    POPULAR;
                  </div>)}
                {/* Service Header */}
                <div className='relative z - 10'>;
                  <div className='flex items - start justify - between mb - 4'>;
                    <div className='flex items - center space - x-3'>;
                      <div className='text - 4xl'>{service.icon}</div>;
                      <div>;
                        <h3 className='text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Service Header */}
                <div className='relative z-10'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center space-x-3'>
                      <div className='text-4xl'>{service.icon}</div>

                      <div>
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                          {service.name}
                        </h3>;
                        <p className='text - gray - 400 text - sm'>;
                          {service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    <div className='text - right'>;
                      <div className='text - 2xl font - bold text - white'>;
                        {service.price}
                      </div>;
                      <div className='text - gray - 400 text - sm'>;
                        {service.period}
<<<<<<< HEAD
<<<<<<< HEAD
                      </div>                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                    {service.description}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      </div>                    </div>;
                  </div>;

                  {/* Description */}
                  <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                    {service.description}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{service.icon}</div>
                      <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                  </div>
                  {/* Description */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='relative z-10'>;
                  <div className='flex items-start justify-between mb-4'>;
                    <div className='flex items-center space-x-3'>;
                      <div className='text-4xl'>{service && service.icon}</div>;
                      <div>;
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-400 text-sm'>;
                          {service && service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    <div className='text-right'>;
                      <div className='text-2xl font-bold text-white'>;
                        {service && service.price}
                      </div>;
                      <div className='text-gray-400 text-sm'>;
                        {service && service.period}
                      </div>                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text-gray-300 mb-4 leading-relaxed'>;
                    {service && service.description}
                  </p>                      <div>;
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">;
                          {service && service.name}
                        </h3>;
                        <p className="text-gray-400 text-sm">{service && service.tagline}</p>;
                      </div>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-white">{service && service.price}</div>;
                      <div className="text-gray-400 text-sm">{service && service.period}</div>;
                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text-gray-300 mb-4 leading-relaxed'>;
                    {service && service.description}
                  </p>;
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Stats Grid */}
                  <div className='grid grid-cols-2 gap-3 mb-4'>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Users className='w-4 h-4 text-cyan-400' />;
                      <span className='text-gray-300'>;
                        {service && service.customers}+ users;
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Star className='w-4 h-4 text-yellow-400' />;
                      <span className='text-gray-300'>;
                        {service && service.rating}/5 ({service && service.reviews});
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <TrendingUp className='w-4 h-4 text-green-400' />;
                      <span className='text-gray-300'>;
                        {service && service.growthRate}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Shield className='w-4 h-4 text-blue-400' />;
                      <span className='text-gray-300'>;
                        {service && service.trialDays} day trial;
                      </span>                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space-x-3 mt-6'>;
                  {/* Stats Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="grid grid-cols-2 gap-3 mb-4">;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Users className="w-4 h-4 text-cyan-400" />;
                      <span className="text-gray-300">{service && service.customers}+ users</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Star className="w-4 h-4 text-yellow-400" />;
                      <span className="text-gray-300">{service && service.rating}/5 ({service && service.reviews})</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <TrendingUp className="w-4 h-4 text-green-400" />;
                      <span className="text-gray-300">{service && service.growthRate}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Shield className="w-4 h-4 text-blue-400" />;
                      <span className="text-gray-300">{service && service.trialDays} day trial</span>;
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-6">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  {/* Action Buttons */}

                  <div className="flex space-x-3 mt-6">
                    <a
                      href={service.link}

                      target="_blank"
                      rel="noopener noreferrer"

                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn">;
                      <span>Get Started</span>;
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />;
                    </a>;
                    <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">;
                  </p>                      <div>;
                        <h3 className="text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                          {service.name}
                        </h3>;
                        <p className="text - gray - 400 text - sm">{service.tagline}</p>;
                      </div>;
                    </div>;
                    <div className="text - right">;
                      <div className="text - 2xl font - bold text - white">{service.price}</div>;
                      <div className="text - gray - 400 text - sm">{service.period}</div>;
                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                    {service.description}
                  </p>;
                  {/* Stats Grid */}
                  <div className='grid grid - cols - 2 gap - 3 mb - 4'>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Users className='w - 4 h - 4 text - cyan - 400' />;
                      <span className='text - gray - 300'>;
                        {service.customers}+ users;
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Star className='w - 4 h - 4 text - yellow - 400' />;
                      <span className='text - gray - 300'>;
                        {service.rating}/5 ({service.reviews});
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <TrendingUp className='w - 4 h - 4 text - green - 400' />;
                      <span className='text - gray - 300'>;
                        {service.growth_rate}
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Shield className='w - 4 h - 4 text - blue - 400' />;
                      <span className='text - gray - 300'>;
                        {service.trial_days} day trial;
                      </span>                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space - x-3 mt - 6'>;
                  {/* Stats Grid */}
                  <div className="grid grid - cols - 2 gap - 3 mb - 4">;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Users className="w - 4 h - 4 text - cyan - 400" />;
                      <span className="text - gray - 300">{service.customers}+ users</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Star className="w - 4 h - 4 text - yellow - 400" />;
                      <span className="text - gray - 300">{service.rating}/5 ({service.reviews})</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <TrendingUp className="w - 4 h - 4 text - green - 400" />;
                      <span className="text - gray - 300">{service.growth_rate}</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Shield className="w - 4 h - 4 text - blue - 400" />;
                      <span className="text - gray - 300">{service.trial_days} day trial</span>;
                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space - x-3 mt - 6'>;
                    <a;
                      href={service.link}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2 group / btn';
                    >;
                      <span > Get Started</span>;
                      <ArrowRight className='w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 300' />;
                    </a>;
                    <button className='px - 4 py - 3 border border - white / 20 hover:border - cyan - 400 / 50 text - white rounded - lg transition - all duration - 300 hover:bg - white / 5'>                      Learn More                    <a;
                      href={service.link}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2 group / btn";
                    >;
                      <span > Get Started</span>;
                      <ArrowRight className="w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 300" />;
                    </a>;
                    <button className="px - 4 py - 3 border border - white / 20 hover:border - cyan - 400 / 50 text - white rounded - lg transition - all duration - 300 hover:bg - white / 5">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      Learn More;
                    </button>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                    <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">
                      Learn More
                    </button>
                  </div>
                </div>
                {/* Floating Particles */}
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '20%', top: '30%' }}
                  ></div>
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '35%', top: '40%' }}
                  ></div>
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '50%', top: '50%' }}
                  ></div>
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '65%', top: '60%' }}
                  ></div>
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '80%', top: '70%' }}
                  ></div>                </div>                <div className="absolute inset-0 pointer-events-none overflow-hidden">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }}></div>
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }}></div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          ))}
        </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
                {/* Floating Particles */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Floating Particles */}
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '20%', top: '30%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '35%', top: '40%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '50%', top: '50%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '65%', top: '60%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '80%', top: '70%' }}></div>                </div>                <div className="absolute inset-0 pointer-events-none overflow-hidden">;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }}></div>;
              </div>;
            </motion && motion.div>;
          ))}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </motion && motion.div>;
        {/* Load More Button */}
        {visibleServices < filteredServices && filteredServices.length && (;
          <motion&& motion.div
            className='text-center'            initial={{ opacity: 0 }}          <motion && motion.div 

<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center'            initial={{ opacity: 0 }}          <motion.div 

            className="text-center"
          <motion.div 
            className="text-center"
        {/* Load More Button */}
        {visibleServices < filteredServices.length && (
          <motion.div
            className='text-center'            initial={{ opacity: 0 }}          <motion.div
            className='text-center'            initial={{ opacity: 0 }}          <motion.div 
            className="text-center"
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center"
=======

            className='text-center'            initial={{ opacity: 0 }}          <motion.div 

            className="text-center"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Load More Button */}
        {visibleServices < filteredServices.length && (
          <motion.div
            className='text-center'            initial={{ opacity: 0 }}



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <button
              onClick={loadMore}
<<<<<<< HEAD

<<<<<<< HEAD
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'            >              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'            >

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'            >              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'            >


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              Load More Revolutionary Services
            </button>
          </motion.div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        <motion&& motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion && motion.div 

        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Call to Action */}
        <motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion.div
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
<<<<<<< HEAD

        {/* Call to Action */}
        <motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}

          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-3xl font-bold text-white mb-4'>
            Ready to Experience the Future?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Join the revolution with our cutting-edge AI, quantum, and emerging
            technology services. Transform your business and stay ahead of the
            competition.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
            >
              Start Your Transformation
            </a>
            <a
              href='/pricing'
              className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'            >            Ready to Experience the Future?
=======

        <motion&& motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion && motion.div 

          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}>;
          <h3 className='text-3xl font-bold text-white mb-4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
            Join the revolution with our cutting-edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;
            <a
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'>;
              Start Your Transformation;
            </a>;
            <a
              href='/pricing'


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services.
            Transform your business and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Start Your Transformation
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
};
export default RevolutionaryServicesShowcase;  );
  )

  )
};
export default RevolutionaryServicesShowcase;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>            Ready to Experience the Future?;
          </h3>;
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services. ;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">;
            <a
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">;
              Start Your Transformation;
            </a>;
            <a
              href="/pricing" 
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
              View Pricing;
            </a>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
};
export default RevolutionaryServicesShowcase;  );

=======
  )

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};
export default RevolutionaryServicesShowcase;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Floating Particles */}
                <div className='absolute inset - 0 pointer - events - none overflow - hidden'>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '20%', top: '30%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '35%', top: '40%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '50%', top: '50%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '65%', top: '60%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '80%', top: '70%' }}
                  ></div>                </div>                <div className="absolute inset - 0 pointer - events - none overflow - hidden">;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '20%', top: '30%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '35%', top: '40%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '50%', top: '50%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '65%', top: '60%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '80%', top: '70%' }}></div>;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Load More Button */}
        {visible_services < filtered_services.length && (
          <motion.div;
            className='text - center'            initial={{ opacity: 0 }}          <motion.div;
            className="text - center";
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <button;
              on_click={load_more}
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40'            >              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Load More Revolutionary Services;
            </button>;
          </motion.div>)}
        {/* Call to Action */}
        <motion.div;
          className='text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20'          initial={{ opacity: 0, coordinate_y: 30 }}        <motion.div;
          className="text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20";
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h3 className='text - 3xl font - bold text - white mb - 4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
            Join the revolution with our cutting - edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex - col sm:flex - row items - center justify - center gap - 4'>;
            <a;
              href='/contact';
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40';
            >;
              Start Your Transformation;
            </a>;
            <a;
              href='/pricing';
              className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'            >            Ready to Experience the Future?;
          </h3>;
          <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
            Join the revolution with our cutting - edge AI, quantum, and emerging technology services.;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex - col sm: flex - row items - center justify - center gap - 4">;
            <a;
              href="/contact";
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Start Your Transformation;
            </a>;
            <a;
              href="/pricing";
              className="px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
            >;
              View Pricing;
            </a>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default RevolutionaryServicesShowcase);
}
;
export default RevolutionaryServicesShowcase;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default RevolutionaryServicesShowcase;

export default RevolutionaryServicesShowcase;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};


<<<<<<< HEAD
<<<<<<< HEAD
  );
}
};

export default RevolutionaryServicesShowcase;  )
}
export default RevolutionaryServicesShowcase;

export default RevolutionaryServicesShowcase;
export default RevolutionaryServicesShowcase;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
