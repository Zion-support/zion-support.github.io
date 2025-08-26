import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, TrendingUp } from 'lucide-react';

export const FeaturedListingsSection = () => {
  const featuredServices = [
    {
      id: 'ai-autonomous-platform',
      title: 'AI Autonomous Business Platform',
      description: 'Next-generation AI platform that autonomously manages business operations',
      category: 'AI & Automation',
      rating: 4.9,
      reviewCount: 127,
      price: '$2,999',
      delivery: '4-6 weeks',
      team: '5-8 experts',
      image: '/images/ai-platform.jpg',
      features: ['Machine Learning', 'Process Automation', 'Real-time Analytics', 'API Integration']
    },
    {
      id: 'quantum-computing-solutions',
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex problem solving',
      category: 'Emerging Tech',
      rating: 4.8,
      reviewCount: 89,
      price: '$5,999',
      delivery: '8-12 weeks',
      team: '8-12 experts',
      image: '/images/quantum-computing.jpg',
      features: ['Quantum Algorithms', 'Optimization', 'Research & Development', 'Custom Solutions']
    },
    {
      id: 'cybersecurity-suite',
      title: 'Advanced Cybersecurity Suite',
      description: 'Comprehensive security solutions for enterprise-level protection',
      category: 'Security',
      rating: 4.9,
      reviewCount: 203,
      price: '$3,499',
      delivery: '6-8 weeks',
      team: '6-10 experts',
      image: '/images/cybersecurity.jpg',
      features: ['Threat Detection', 'Compliance', '24/7 Monitoring', 'Incident Response']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our most popular and highly-rated solutions that deliver exceptional value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/services/${service.id}`}>
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 h-full border border-slate-500 hover:border-cyan-500 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  {/* Service image placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-slate-600 to-slate-500 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-4xl text-slate-400">🚀</div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{service.category}</span>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-gray-400">({service.reviewCount})</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Service details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{service.delivery}</div>
                      <div className="text-gray-400 text-xs">Delivery</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{service.team}</div>
                      <div className="text-gray-400 text-xs">Team</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white font-medium text-sm">{service.price}</div>
                      <div className="text-gray-400 text-xs">Starting</div>
                    </div>
                  </div>
                  
                  {/* CTA button */}
                  <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-xl font-semibold group-hover:from-cyan-600 group-hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};