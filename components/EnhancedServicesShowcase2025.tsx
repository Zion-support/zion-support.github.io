import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 




  FaCogs,
  FaLightbulb,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaNetworkWired,
import { 

  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;

    enterprise: number;
  };
  technologies: string[];
  benefits: string[];
}


interface ServiceCategory {
  id: string;
  name: string;
  description: string;


import { 
import { 








    icon: <FaBrain className='w-8 h-8' />
    icon: <FaCloud className='w-8 h-8' />
    icon: <FaShieldAlt className='w-8 h-8' />
    icon: <FaDatabase className='w-8 h-8' />
    icon: <FaNetworkWired className='w-8 h-8' />
    icon: <FaRobot className='w-8 h-8' />
    icon: <FaBrain className="w-8 h-8" />
    icon: <FaCloud className='w-8 h-8' />
  },    icon: <FaCloud className="w-8 h-8" />
    icon: <FaShieldAlt className='w-8 h-8' />
  },    icon: <FaShieldAlt className="w-8 h-8" />
    icon: <FaDatabase className='w-8 h-8' />
  },    icon: <FaDatabase className="w-8 h-8" />
    icon: <FaNetworkWired className='w-8 h-8' />
  },    icon: <FaNetworkWired className="w-8 h-8" />
    icon: <FaRobot className='w-8 h-8' />
  },    icon: <FaRobot className="w-8 h-8" />

  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    icon: <FaBrain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and development operations',
    icon: <FaCloud className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Advanced security solutions for modern threats',
    icon: <FaShieldAlt className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'Comprehensive data management and analytics platforms',
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'iot',
    name: 'IoT & Edge Computing',
    description: 'Internet of Things and edge computing solutions',
    icon: <FaNetworkWired className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Intelligent automation for business processes',
    icon: <FaRobot className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500'
  }

    id: 'ai-automation-suite',
    title: 'AI-Powered Automation Suite',
    description: 'Comprehensive automation platform leveraging artificial intelligence for business process optimization',
    icon: <FaRobot className="w-6 h-6" />,
    category: 'automation',
    features: [
    icon: <FaRobot className='w - 8 h - 8' />,
  },    icon: <FaRobot className="w - 8 h - 8" />,
    icon: <FaRobot className='w - 6 h - 6' />,


      'Intelligent workflow automation',
      'Natural language processing',
      'Predictive analytics',
      'Real-time decision making',
      'Custom AI model training',
      'Multi-platform integration'
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    },

    benefits: [
      'Reduce manual tasks by 80%',
      'Improve accuracy by 95%',
      '24/7 automated operations',
  },
  {
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: <FaBrain className="w-6 h-6" />,
    category: 'ai-ml',
    features: [
      'Quantum algorithm optimization',
      'Hybrid classical-quantum computing',
      'Quantum machine learning',
      'Cryptographic solutions',
      'Quantum simulation tools',
      'API access to quantum hardware'
    ],
    pricing: {
      starter: 999,
      professional: 2499,
      enterprise: 4999
    

    },
    technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'C++', 'CUDA'],
    benefits: [
      'Solve previously impossible problems',
      'Exponential speed improvements',
      'Future-proof technology',
  },
  {
    icon: <FaNetworkWired className="w-6 h-6" />,
    benefits: [
      'Reduced latency by 90%',
      'Lower bandwidth costs',
      'Enhanced privacy',
      'Scalable edge deployment'
    ]
  },
  {
    id: 'quantum-cybersecurity',
    title: 'Quantum Cybersecurity Suite',
    description: 'Advanced security solutions leveraging quantum-resistant cryptography',
    icon: <FaShieldAlt className="w-6 h-6" />,
    category: 'security',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Advanced threat detection',
      'Zero-trust architecture',
      'Compliance frameworks',
    ],
    pricing: {
      starter: 399,
      professional: 999,
      enterprise: 2499
    

    },
    technologies: ['NIST PQC', 'QKD protocols', 'Zero Trust', 'SIEM', 'SOAR'],
    benefits: [
      'Future-proof security',
      'Quantum-resistant encryption',
      'Comprehensive compliance',
      'Advanced threat protection'
    ]
  },
  {
    id: 'data-fabric-platform',
    title: 'Intelligent Data Fabric Platform',
    description: 'Unified data management and analytics across all sources and formats',
    icon: <FaDatabase className="w-6 h-6" />,
    category: 'data',
    features: [
      'Unified data access',
      'Real-time analytics',
      'Data governance',
      'AI-powered insights',
      'Multi-cloud support',
    ],
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 1999
    },

    benefits: [
      'Unified data view',
      'Real-time insights',
      'Improved data quality',
    icon: <FaCloud className="w-6 h-6" />,

    icon: <FaRobot className='w-6 h-6' />,;
    icon: <FaBrain className='w-6 h-6' />,;
    icon: <FaNetworkWired className='w-6 h-6' />,;
    icon: <FaShieldAlt className='w-6 h-6' />,;
    icon: <FaDatabase className='w-6 h-6' />,;
    icon: <FaCloud className='w-6 h-6' />,      'Unified data viewReal-time insightsImproved data qualityReduced integration costs';
    icon: <FaCloud className='w-6 h-6' />,;
  }
];

const EnhancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = useMemo(() => {
    let filtered = services;



    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    


    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);






      }
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}






          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

        {/* Search and Filters */}
              <FaSearch className='absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400' />;


          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">

              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </motion.div>

              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />;


              <FaSearch className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400" />;







        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button





              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>






        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}








          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => handleServiceSelect(service)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}

                    {tech}
                  </span>
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
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}








      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}





              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}




                      </li>
                    ))}
                  </ul>
                </div>






                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>












                      {tech}
                    </span>
                  ))}
                </div>
              </div>






              {/* Pricing */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div
                      key={plan}
                      className="p-4 bg-white/5 border border-white/20 rounded-lg text-center"
                    >
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

export default EnhancedServicesShowcase2025;

export default EnhancedServicesShowcase2025;  );
export default EnhancedServicesShowcase2025;


      <AnimatePresence>;
      </AnimatePresence>;
export default EnhancedServicesShowcase2025);
export default EnhancedServicesShowcase2025;



