import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Error Boundary Component
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

// Import service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    {
      id: 'ai',
      name: 'AI Services',
      count: innovativeAIServicesEnhanced2025.length,
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS',
      count: innovativeRealMicroSaasServices2025.length,
    },
    {
      id: 'it',
      name: 'IT Services',
      count: innovativeITServicesEnhanced2025.length,
    },
    {
      id: 'emerging',
      name: 'Emerging Tech',
      count: emergingTechServicesEnhanced2025.length,
    },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? allServices
      : allServices.filter(service => service.category === selectedCategory);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'>
        {/* Hero Section */}
        <section className='relative py-20 px-4'>
          <div className='max-w-7xl mx-auto text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-5xl md:text-7xl font-bold text-white mb-6'
            >
              Zion Tech Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'
            >
              Leading provider of innovative technology solutions and
              cutting-edge services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
                Explore Services
              </button>
              <button className='border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors'>
                Contact Us
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl font-bold text-white text-center mb-12'
            >
              Our Services
            </motion.h2>

            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <AnimatePresence>
                {filteredServices.slice(0, 12).map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors'
                  >
                    <h3 className='text-xl font-semibold text-white mb-3'>
                      {service.name}
                    </h3>
                    <p className='text-gray-300 mb-4'>{service.summary}</p>
                    <div className='text-blue-400 font-semibold'>
                      {service.pricing}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl font-bold text-white mb-8'
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl text-gray-300 mb-8'
            >
              Contact us today to discuss your project requirements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
              >
                Email Us
              </a>
              <a
                href='tel:+13024640950'
                className='border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors'
              >
                Call Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default Homepage2025;
