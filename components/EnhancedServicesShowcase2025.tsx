
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
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {

} from 'react-icons/si';


interface Service {
  id: string;
  title: string;
  description: string;
  icon: React && React.ReactNode;
  category: string;
  features: string[];
  pricing: {;
    starter: number;
    professional: number;

    enterprise: number;
  }
  technologies: string[];
  benefits: string[];

;
interface ServiceCategory {

  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;

  color: string;  id: string
  name: string
  description: string
  icon: React.ReactNode

  color: string
}

const serviceCategories: ServiceCategory[] = [
  color: string;  id: string,
  name: string,
  description: string,
  icon: React.ReactNode,
  color: string;
}
const service_categories: ServiceCategory[] = [;
  {
    id: 'ai-automation-suite'
    title: 'AI-Powered Automation Suite'
    description:
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization'
    icon: <FaRobot className='w-6 h-6' />
    features: [

];
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const filteredServices = useMemo(() => {
    let filtered = services;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {

    if (searchTerm) {;
      filtered = filtered && filtered.filter(service => ;
        service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.technologies.some(tech => tech && tech.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
      );
    }

    return filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return a && a.pricing.starter - b && b.pricing.starter;
        case 'category':;
          return a && a.category.localeCompare(b && b.category);
        default:;
          return a && a.title.localeCompare(b && b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };

  const closeModal = () => {;
    setSelectedService(null);
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>;
      {/* Header */}
      <div className='container mx-auto px-4 py-16'>        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'      }
    })

  }, [selectedCategory, searchTerm, sortBy])

  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };

  const closeModal = () => {;
    setSelectedService(null);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-16">;
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

        default: return a.title.localeCompare(b.title)
      }
    })
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
  };

  const closeModal = () => {
    setSelectedService(null)
  };

;
const EnhancedServicesShowcase2025: React.FC = () => {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [selected_service, setSelectedService] = useState < Service | null>(null);
  const [search_term, setSearchTerm] = useState ('');
  const [sort_by, setSortBy] = useState<'name' | 'price' | 'category'>('name');
;
  const filtered_services = useMemo (() => {
    let filtered = services;
;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service => service.category === selected_category);
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (
        service =>;
          service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.technologies.some (tech =>;
            tech.toLowerCase ().includes (search_term.toLowerCase ())));
    }    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => service.category === selected_category);
    }
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service =>;
        service.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.technologies.some (tech => tech.toLowerCase ().includes (search_term.toLowerCase ())));
    }
    return filtered.sort ((a, b) => {
      switch (sort_by) {
        case 'price':;
          return a.pricing.starter - b.pricing.starter;
        case 'category':;
          return a.category.locale_compare (b.category);
        default:;
          return a.title.locale_compare (b.title);
      }
    });
  }, [selected_category, search_term, sort_by]);
;
  const handleServiceSelect = (service: Service) =>: any {
    setSelectedService (service);
  }
;
  const close_modal = () =>: any {
    setSelectedService (null);
  }
;
  return (
    <div className='min - h-screen bg - gradient - to - br from - gray - 900 via - blue - 900 to - purple - 900 text - white'>;
      {/* Header */}
      <div className='container mx - auto px - 4 py - 16'>        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            2025 Services Showcase
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our cutting-edge technology solutions designed for the
            future. From AI-powered automation to quantum computing, we're
            building tomorrow's innovations today.          </p>        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future.
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-12'

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search services, technologies, or features...'
                value={searchTerm}

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
              />;
              <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />;
            </div>;


            <select
              value={sortBy}
              onChange={e =>;
                setSortBy(e && e.target.value as 'name' | 'price' | 'category');
              }
              className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='name'>Sort by Name</option>
              <option value='price'>Sort by Price</option>

        {/* Category Tabs */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
          className='mb-12'>;
          <div className='flex flex-wrap justify-center gap-4'>            <buttonclassName="mb-12">;
          <div className="flex flex-wrap justify-center gap-4">;
            <button

              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${;
                selectedCategory === 'all';
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg';
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
              }`}
            >
              All Services
            </button>
            {serviceCategories.map(category => (              <button            {serviceCategories.map((category) => (
              <button

                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >;
                {category && category.icon}
                {category && category.name}
              </button>;
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}

        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'

              onClick={() => handleServiceSelect(service)}
            >;
              <div className='flex items-center gap-3 mb-4'>;
                <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>;
                  {service && service.icon}
                </div>;
                <div>;
                  <h3 className='text-xl font-bold text-white'>;
                    {service && service.title}
                  </h3>;
                  <p className='text-sm text-gray-400'>;
                    {;
                      serviceCategories && serviceCategories.find(c => c && c.id === service && service.category);
                        ?.name;
                    }

          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
        </motion.div>;
        {/* Category Tabs */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb - 12';
        >;
          <div className='flex flex - wrap justify - center gap - 4'>            <button          className="mb - 12";
        >;
          <div className="flex flex - wrap justify - center gap - 4">;
            <button;
              on_click={() => setSelectedCategory ('all')}
              className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 ${
                selected_category === 'all';
                  ? 'bg - gradient - to - r from - blue - 500 to - purple - 500 text - white shadow - lg';
                  : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
              }`}
            >;
              All Services;
            </button>;
            {service_categories.map (category => (              <button            {service_categories.map ((category) => (
              <button;
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? `bg - gradient - to - r ${category.color} text - white shadow - lg`;
                    : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
                }`}
              >;
                {category.icon}
                {category.name}
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          {filtered_services.map ((service, index) => (
            <motion.div;

              key={service.id}
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

                  </p>;
                </div>;
              </div>;

              <p className='text-gray-300 mb-4 line-clamp-3'>;
                {service && service.description}
              </p>;

              <div className='flex flex-wrap gap-2 mb-4'>;
                {service && service.technologies.slice(0, 3).map(tech => (;
                  <span
                    key={tech}

                    {tech}
                  </span>;
                ))}

                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">

                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>

              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.starter}

                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-16'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-gray-300 mb-2'>
              No services found
            </h3>
            <p className='text-gray-400'>
              Try adjusting your search terms or category filters

      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0 && 0.9, opacity: 0 }}
              className='bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto'
              onClick={e => e.stopPropagation()}

            >
              <div className='flex items-start justify-between mb-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl'>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className='text-3xl font-bold text-white mb-2'>
                      {selectedService.title}
                    </h2>
                    <p className='text-gray-400'>
                      {
                        serviceCategories.find(
                          c => c.id === selectedService.category
                        )?.name
                      }
                    </p>                  </div>;
                </div>;
                <button
                  onClick={closeModal}
                  className='p-2 hover:bg-white/10 rounded-lg transition-colors'>;
              <div className="flex items-start justify-between mb-6">;
                <div className="flex items-center gap-4">;
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">;
                    {selectedService && selectedService.icon}
                  </div>;
                  <div>;
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService && selectedService.title}</h2>;
                    <p className="text-gray-400">{serviceCategories && serviceCategories.find(c => c && c.id === selectedService && selectedService.category)?.name}</p>;
                  </div>;
                </div>;
                <button
                  onClick={closeModal}

                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}


                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Technologies
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {selectedService.technologies.map(tech => (
                    <span
                      key={tech}

                      {tech}
                    </span>;
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Pricing Plans
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {Object.entries(selectedService.pricing).map(
                    ([plan, price]) => (
                      <div
                        key={plan}
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center'
                      >
                        <h4 className='text-lg font-bold text-white capitalize mb-2'>
                          {plan}
                        </h4>
                        <div className='text-3xl font-bold text-blue-400 mb-2'>
                          ${price}
                          <span className='text-sm text-gray-400 font-normal'>
                            /month
                          </span>
                        </div>
                        <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'>
                          Get Started
                        </button>
                      </div>
                    )
                  )}                </div>                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
);

export default EnhancedServicesShowcase2025;  )
}
export default EnhancedServicesShowcase2025;

export default EnhancedServicesShowcase2025;

