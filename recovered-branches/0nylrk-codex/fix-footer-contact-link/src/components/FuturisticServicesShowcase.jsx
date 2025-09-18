import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices';
const ServiceCard = ({ service, index, isVisible }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (<motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative group" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      
      {/* Neon Border Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isHovered
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-[2px]'
            : 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30'}`}>
        <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 h-full">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (<motion.div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.6, 0.2, 0.6],
            }} transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
            }} style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
            }}/>))}
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
                </div>)}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <span className="truncate">{feature}</span>
                </div>))}
            </div>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit, idx) => (<div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>))}
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
              
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                Get Started
              </button>
            </div>

            {/* Technology Stack */}
            {service.technologyStack && (<div className="mt-4 pt-4 border-t border-gray-700/50">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technologyStack.slice(0, 4).map((tech, idx) => (<span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30">
                      {tech}
                    </span>))}
                </div>
              </div>)}

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
                  <a href={service.contactInfo.website} className="hover:text-purple-300 transition-colors">
                    {service.contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={false}/>
        </div>
      </div>
    </motion.div>);
};

export default FuturisticServicesShowcase;
