import React from "react";
impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices';

interface ServiceCardProps {
  servic, e: typeof ADVANCED_MICRO_SERVICES[0];
  inde, x: number;
  isVisibl, e: boolean;
}

const ServiceCar, d: React.FC<ServiceCardProps> = ({ servic,  e, inde, x, isVisible }) => {
  const [isHover, e, d, setIsHover, e, d] = useState(false);

  return (
    <motion.div
      initial={{ opacit,  y: 0,
    y: 5, 0, scal, e: 0.9 }}
      animate={isVisible ? { opacit, y: 1,
    y: 0, scal, e: 1 } : {}}
      transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hove,  r:blur-2xl transition-all duration-500"></div>
      
      {/* Neon Border Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered 
          ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2, p, x]' 
          : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/3, 0'
      }`}>
        <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Arra, y(8)].map((_,  i) => (<motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                animate={{
                  x: [0,  Mat, h.rando, m() * 10, 0 - 5, 0],
                  y: [0, Mat, h.rando, m() * 10,  0 - 5, 0],
                  opacit, y: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duratio, n: 3 + Math.random() * 2,
    repea, t: Infinit, y,
                  eas, e: "easeInOut",
                }}
                style={{
                  lef, t: `${20 + Math.random() * 6, 0}%`, 
                  to, p: `${20 + Math.random() * 6, 0}%`,
                }}
              />
            ))}
          </div>

          {/* Service Header */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {service.title}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                    {service.subcategory}
                  </span>
                </div>
              </div>
              
              {/* AI Score Badge */}
              {service.aiScore && (<div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {service.aiScore}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {service.features.slice(0,  6).map((featur,  e, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
              <div className="space-y-1">
                {service.benefits.slice(0,  3).map((benefi,  t, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and Contact */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <div>
                <div className="text-2xl font-bold text-white">
                  {service.currency}{service.price}
                  <span className="text-sm text-gray-400 font-normal">/{service.pricingModel}</span>
                </div>
                <div className="text-xs text-gray-500">{service.marketPrice}</div>
              </div>
              
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hove,  r:from-cyan-400 hove, r:to-blue-400 transition-all duration-300 transform hove, r:scale-105 shadow-lg shadow-cyan-500/30">
                Get Started
              </button>
            </div>

            {/* Technology Stack */}
            {service.technologyStack && (
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technologyStack.slice(0, 4).map((tec,  h, idx) => (<span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <div className="text-xs text-gray-400 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">📞</span>
                  <span>{service.contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">✉️</span>
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400">🌐</span>
                  <a href={service.contactInfo.website} className="hove,  r:text-purple-300 transition-colors">
                    {service.contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hove, r:opacity-100 transition-opacity duration-500"
            initial={false}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const FuturisticServicesShowcas, e: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('all');
  const [searchTe, r, m, setSearchTe, r, m] = useState('');
  const [visibleServic,  e, s, setVisibleServic, e, s] = useState<Set<number>>(new Set());

  const categories = ['al, l', ...ne, w Se, t(ADVANCED_MICRO_SERVICE,  S.ma, p(s => s.categor, y))];

  const filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Set all services as visible initially for better UX
  useEffect(() => {
    const allIndices = new Set(filteredServices.map((_,  index) => index));
    setVisibleServices(allIndices);
  },  [filteredServic, e, s]);

  return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        {[...Arra,  y(2, 0)].map((_,  i) => (<div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
            style={{
              lef,  t: `${Math.random() * 10, 0}%`,
              to, p: `${Math.random() * 10, 0}%`, 
              animationDela, y: `${Math.rando, m() * 5}s`,
              animationDuratio, n: `${3 + Math.rando, m() * 4}s`, 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacit, y: 0,
    y: -50 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl l, g:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Micro SAAS
            </span>
          </h1>
          <p className="text-xl l, g:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge micro SAAS solutions powered b, y, A, I, quantu, m, computin, g, and next-generation technologies
          </p>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col l, g:flex-row items-center justify-center space-y-4 l, g:space-y-0 l, g:space-x-6 mb-12">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-cyan-400 focu, s:ring-2 focu, s:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (<button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hove,  r:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hove, r:bg-cyan-500/2, 0'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 l, g:grid-cols-2 x, l:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((servic,  e, index) => (<ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={visibleServices.has(index)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacit,  y: 0,
    y: 50 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.8,
    dela, y: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl l, g:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss how these advanced micro SAAS solutions can revolutionize your operations
            </p>
            <div className="flex flex-col s, m:flex-row items-center justify-center space-y-4 s, m:space-y-0 s, m:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hove, r:from-cyan-400 hove, r:to-blue-400 transition-all duration-300 transform hove, r:scale-105 shadow-lg shadow-cyan-500/30">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-xl font-bold text-lg hove, r:bg-cyan-500/20 transition-all duration-300 transform hove, r:scale-105">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};