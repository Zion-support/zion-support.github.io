    { id: 'all', name: 'All Services', count: revolutionary2025MicroSaasServices.length + emergingTech2025Services.length + enterpriseIT2025Services.length },
    { id: 'ai', name: 'AI & ML', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s = $2;
    { id: 'quantum', name: 'Quantum Tech', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s = $2;
    { id: 'emerging', name: 'Emerging Tech', count: emergingTech2025Services.length },
    { id: 'enterprise', name: 'Enterprise IT', count: enterpriseIT2025Services.length },
    { id: 'revolutionary', name: 'Revolutionary', count: revolutionary2025MicroSaasServices.length }


  return (
    <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}
;
const RevolutionaryServicesShowcase: React.FC = () => {const [activeCategory, setActiveCategory] = useState('all')const [visibleServices, setVisibleServices] = useState(12)const categories = [;
  const containerVariants = {hidden: { opacity: 0 }
    visible: {opacity: 1;
      transition: {staggerChildren: 0.1,},},}const itemVariants = {hidden: { opacity: 0, y: 20 }
    visible: {opacity: 1;
      y: 0;
      transition: {const filteredServices = activeCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => {if (activeCategory === 'ai') return service && service.category.includes('AI')if (activeCategory === 'quantum') return service && service.category.includes('Quantum')if (activeCategory === 'emerging') return emergingTech2025Services && emergingTech2025Services.includes(service)if (activeCategory === 'enterprise') return enterpriseIT2025Services && enterpriseIT2025Services.includes(service)if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.includes(service)return true;
      })const loadMore = () => {setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length))setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length))duration: 0.5,},},}return (<section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}return (<section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
        <motion.div;
          className="text-center mb-16";
  return (<section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
        <motion.div;
          className="text-center mb-16";
        <motion&& motion.div;
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }return (<section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}<motion.div;
          className='text-center mb-16';
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"

        <motion&& motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }




  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
const itemVariants = {}
    hidden: { opacity: 0, y: 20}
}
    visible: {
      opacity: 1;
y: 0;
transition: {
}
duration: 0.5}
      }
    }
const RevolutionaryServicesShowcase: React.FC = () => {}
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
  const categories = [
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap  } from 'lucide-react';
import { revolutionary2025MicroSaasServices  } from '../../data/revolutionary-2025-micro-saas';
import { emergingTech2025Services  } from '../../data/emerging-tech-2025-services';
import { enterpriseIT2025Services } from '../../data/enterprise-it-2025-services';
const RevolutionaryServicesShowcase: React.FC;
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
staggerChildren: 0.1,
      },
    },
  };



          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}






        {/* Category Filter */}
        <motion&& motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'          initial={{ opacity: 0, y: 20 }}              Revolutionary 2025

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary 2025



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



          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {categories.map((category) => (



                setActiveCategory(category.id);





        {/* Services Grid */}













                {/* Service Header */}


                <div className='relative z - 10'>;
                  <div className='flex items - start justify - between mb - 4'>;
                    <div className='flex items - center space - x-3'>;
                      <div className='text - 4xl'>{service.icon}</div>;
                      <div>;
                        <h3 className='text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;

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





        <motion.div;
className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12'

          variants={containerVariant}
}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }
}
            />;
          {filteredServices.slice(0, visibleServices).map((service, index) => (<motion.div;}
              key={service.id}
              variants={itemVariants}

className='group relative cursor-pointer'

              style={{ perspective: '1000px' }
}
                />;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'    /></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'    />;
              style={{ perspective: '1000px' }
}>;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'    /></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'    />;

                {/* Background Effects */}

                <div className='absolute inset-0 rounded-2xl overflow-hidden'    />
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover: opacity-100 transition-opacity duration-500'    /></div>
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700'    /></div>
                </div>
                {/* Popular Badge */}
                {service.popular && (
<div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'    />
                    <Star className='w-3 h-3 inline mr-1'    />
                    POPULAR;
                  </div>}
                }
}





                      <div    />
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'    />

        <motion.div;
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 12';
          variants={container_variants}
          initial='hidden';
          whileInView='visible'          viewport={{ once: true }
}          className=\'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 12\';
          variants={container_variants}"
          initial=\'hidden\';"
          whileInView=\"visible\"    />

          {filtered_services.slice (0, visible_services).map ((service, index) => (<motion.div;}
              key={service.id}
              variants={item_variants}
              className='group relative cursor - pointer';
              style={{ perspective: '1000px' }
}
                />;
              <div className='absolute -inset - 1 rounded - 2xl bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 opacity - 0 blur - lg transition - all duration - 300 group - hover:opacity - 75'    /></div>;
              <div className='relative bg - black / 80 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 6 overflow - hidden h - full'    />;
                {/* Background Effects */}
                <div className='absolute inset - 0 rounded - 2xl overflow - hidden'    />;
                  <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500'    /></div>;
                  <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - white / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 700'    /></div>                </div>;
                {/* Popular Badge */}
                {service.popular && (<div className='absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300'    />;}
                    <Star className='w - 3 h - 3 inline mr - 1'    />                    POPULAR              style={{ perspective: '1000px' }
}
            >;"
              <div className=\"absolute -inset - 1 rounded - 2xl bg - gradient - to - r from - cyan - 500 via - purple - 500 to - pink - 500 opacity - 0 blur - lg transition - all duration - 300 group - hover:opacity - 75\"    /></div>;"
              <div className=\"relative bg - black / 80 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 6 overflow - hidden h - full\"    />;
                {/* Background Effects */}"
                <div className=\"absolute inset - 0 rounded - 2xl overflow - hidden\"    />;"
                  <div className=\"absolute inset - 0 bg - gradient - to - r from - cyan - 500 / 20 via - purple - 500 / 20 to - pink - 500 / 20 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500\"    /></div>;"
                  <div className=\"absolute inset - 0 bg - gradient - to - br from - transparent via - white / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 700\"    /></div>;
                </div>;
                {/* Popular Badge */}
                {service.popular && (<div className='absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300'    />;"
                    <Star className='w - 3 h - 3 inline mr - 1'    />                  <div className=\"absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full shadow - lg transform scale - 0 group - hover:scale - 100 transition - transform duration - 300\"    />;"
                    <Star className=\"w - 3 h - 3 inline mr - 1\"    />;
                    POPULAR;
    </div>}
  );}
}
                {/* Service Header */}
                <div className='relative z - 10'    />;
                  <div className='flex items - start justify - between mb - 4'    />;
                    <div className='flex items - center space - x-3'    />;
                      <div className='text - 4xl'    />{service.icon}</div>;
                      <div    />;
                        <h3 className='text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300'    />;{/* Service Header */}
<div className='relative z-10'    />;
                  <div className='flex items-start justify-between mb-4'    />;
                    <div className='flex items-center space-x-3'    />;
                      <div className='text-4xl'    />{service.icon}</div>;
                      <div    />;
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'    />;
                {/* Popular Badge */}
                {service && service.popular && (<div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'    />;"
                    <Star className='w-3 h-3 inline mr-1'    />                  <div className=\"absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300\"    />;"
                    <Star className=\"w-3 h-3 inline mr-1\"    />;
                    POPULAR;}
                  </div>;}
                )}
                          {service.name}











            >
              Load More Revolutionary Services



          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'    />
            Join the revolution with our cutting-edge AI, quantum, and emerging;


export default RevolutionaryServicesShowcase;

;







