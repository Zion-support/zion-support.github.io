import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingCTA({ variant = 'default', position = 'bottom-right' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} z-50`}>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-4 mb-4 space-y-2"
          >
            <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <Star className="w-5 h-5 text-zion-cyan"/>
              <span className="text-sm font-medium">Marketplace</span>
            </Link>
            
            <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <MessageCircle className="w-5 h-5 text-zion-purple"/>
              <span className="text-sm font-medium">Contact</span>
            </Link>
            
            <Link to="/signup" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <Users className="w-5 h-5 text-zion-cyan-light"/>
              <span className="text-sm font-medium">Sign Up</span>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isExpanded ? (
          <X className="w-6 h-6"/>
        ) : (
          <MessageCircle className="w-6 h-6"/>
        )}
      </motion.button>
    </div>
  );
}