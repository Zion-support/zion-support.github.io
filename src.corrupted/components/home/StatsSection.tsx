import { motion, useInView } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
interface Stat {;
  number: string,label: string,description: string,avatar: string,icon: React.ComponentType<{ className?: string }>;
  color: string;
};

interface StatsSectionProps {;
  stats: Stat[]
};

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {;
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  useEffect(() => {;
    if (isInView) {;
      const timer = setTimeout(() => {;
        stats.forEach((stat, index) => {;
          const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
          const suffix = stat.number.replace(/[0-9]/g, '')

          let current = 0;
          const increment = targetNumber / 50;

          const countTimer = setInterval(() => {;
            current += increment,;
            if (current >= targetNumber) {;
              current = targetNumber,;
              clearInterval(countTimer),;
            };

            setCounts(prev => ({;
              ...prev,;
              [stat.label]: Math.floor(current)
            })),;
          }, 50),;
        }),;
      }, 500),;

      return () => clearTimeout(timer),;
    };
  }, [isInView, stats]),;

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/80 to-zion-slate-dark" role="region" aria-labelledby="stats-heading">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <motion.div
          className="[^"]*"
          initial={{ opacity: 0, y: 30 }};
          whileInView={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          viewport={{ once: true }};
        >;
          <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">;
            Trusted by <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Industry Leaders</[^>]*>
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Our track record speaks for itself - delivering exceptional results across diverse industries;
          </[^>]*>
        </[^>]*>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {stats.map((stat, index) => (;
            <motion.div
              key={stat.label};
              className="[^"]*"
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              viewport={{ once: true }};
              whileHover={{;
                y: -8,transition: { duration: 0.3 };
              }};
            >;
              {/* Animated background */};
              <[^>]*/>

              {/* Icon container */};
              <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>;
                {React.createElement(stat.icon, { className: "w-8 h-8 text-white", "aria-hidden": "true" })};
                {/* Glow effect */};
                <[^>]*/>
              </[^>]*>

              {/* Animated number */};
              <motion.div
                className="[^"]*"
                initial={{ scale: 0.8 }};
                whileInView={{ scale: 1 }};
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }};
                viewport={{ once: true }};
              >;
                {counts[stat.label] || 0}
                {stat.number.includes('%') ? '%' : stat.number.includes('+') ? '+' : ''}
              </[^>]*>

              <h3 className="relative text-lg font-semibold text-zion-cyan mb-2 group-hover:text-zion-blue transition-colors duration-300">;
                {stat.label};
              </[^>]*>

              <p className="relative text-zion-slate-light text-sm leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">;
                {stat.description};
              </[^>]*>

              {/* Hover indicator */};
              <[^>]*/>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
},;

export default StatsSection;