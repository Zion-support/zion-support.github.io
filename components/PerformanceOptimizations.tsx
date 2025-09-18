"use client";

import { memo, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

// Memoized components for better performance
export const MemoizedServiceCard = memo(({ 
  title, 
  description, 
  icon: Icon, 
  gradient,
  onClick 
}: {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="relative p-6">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} p-3 mb-4`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
      </div>
    </motion.div>
  );
});

MemoizedServiceCard.displayName = 'MemoizedServiceCard';

// Optimized navigation component
export const OptimizedNavigation = memo(({ 
  sections, 
  activeSection, 
  onSectionClick 
}: {
  sections: Array<{ id: string; label: string; icon: string }>;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}) => {
  const handleSectionClick = useCallback((sectionId: string) => {
    onSectionClick(sectionId);
  }, [onSectionClick]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-white font-bold text-xl">ZionTech Group</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4"
          >
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
});

OptimizedNavigation.displayName = 'OptimizedNavigation';

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const startTime = useMemo(() => Date.now(), []);
  
  const logPerformance = useCallback((componentName: string) => {
    const endTime = Date.now();
    const renderTime = endTime - startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} rendered in ${renderTime}ms`);
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && renderTime > 100) {
      // Track slow renders
      console.warn(`Slow render detected: ${componentName} took ${renderTime}ms`);
    }
  }, [startTime]);
  
  return { logPerformance };
};

// Image optimization component
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = "",
  priority = false 
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';