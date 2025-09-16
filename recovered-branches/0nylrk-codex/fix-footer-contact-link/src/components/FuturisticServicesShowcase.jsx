<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const FuturisticServicesShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticServicesShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FuturisticServicesShowcase;