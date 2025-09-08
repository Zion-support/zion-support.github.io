import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
