import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Logo Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-bold">Z</span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-zion-cyan rounded-xl opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
      </motion.div>
      
      {/* Company Name */}
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-white">
          Zion Tech Group
        </h1>
        <p className="text-xs text-zion-cyan font-medium">
          AI & Technology Solutions
        </p>
      </div>
    </Link>
  );
}