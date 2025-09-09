import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function StatsSection({ 
  stats, 
  title, 
  subtitle, 
  className = "",
  background = 'dark'
}) {
  const [counts, setCounts] = useState(new Array(stats.length).fill(0));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const backgroundClasses = {
    dark: 'bg-zion-slate-dark',
    light: 'bg-zion-blue-dark',
    gradient: 'bg-gradient-to-r from-zion-cyan to-zion-purple'
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      const timer = setInterval(() => {
        setCounts(prevCounts => 
          prevCounts.map((count, index) => {
            const targetValue = parseInt(stats[index].value.replace(/\D/g, ''));
            const increment = targetValue / steps;
            
            if (count < targetValue) {
              return Math.min(count + increment, targetValue);
            }
            return targetValue;
          })
        );
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, stats]);

  return (
    <section className={`py-16 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                {background === 'gradient' ? 
                  Math.round(counts[index]) : 
                  stat.value
                }
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-zion-slate-light text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}