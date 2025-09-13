import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Star, Users } from 'lucide-react';
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
            className="bg-white rounded-lg shadow-lg p-4 space-y-2"
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
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className="bg-zion-blue text-white p-3 rounded-full shadow-lg hover:bg-zion-blue-dark transition-colors"
          >
            <MessageCircle className="w-6 h-6"/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}