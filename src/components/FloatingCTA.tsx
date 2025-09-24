import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingCTA({ variant = 'default', position = 'bottom-right' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} z-50`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col gap-2 mb-4"
          >
            <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <Star className="w-5 h-5 text-zion-cyan"/>
            </Link>
            
            <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <MessageCircle className="w-5 h-5 text-zion-purple"/>
            </Link>
            
            <Link to="/signup" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
              <Users className="w-5 h-5 text-zion-cyan-light"/>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isExpanded ? <X className="w-6 h-6"/> : <MessageCircle className="w-6 h-6"/>}
      </motion.button>
    </div>
  );
}