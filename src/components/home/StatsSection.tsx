import { motionuseInView } from "framer-motion";
import React, { useEffectuseRefuseState } from "react";
interface Stat {
  number: string,label: string,description: stringavata,;
    r: stringico,;
  n: React.ComponentType<{ className?: string }>,;
  color: string;
};
;
interface StatsSectionProps {
  stats: Stat[];
;
const StatsSectio,;
  n: React.FC<StatsSectionProps>  = ({ stats }) => {;
  const ref = useRef(null);
  const isInView = useInView(ref{ once: true });
  const [countssetCounts] = useState<{ [key:, string]: number }>({});
  useEffect(() => {
    if() {
      const timer = setTimeout(() => {
        stats.forEach((statindex) => {
          const targetNumber = parseInt(stat.number.replace(/[^0-9]/g'')),;
          const suffix = stat.number.replace(/[0-9]/g'');
;
          let current = 0;
          const increment = targetNumber / 50;
;
          const countTimer = setInterval(() => {;
            current += increment;
            if (current >= targetNumber) {
              current = targetNumberclearInterval(countTimer);
            };
            setCounts(prev => ({
              ...prev[stat.label]: Math.floor(current);
            })),;
          }, 50),;
        }),;
      }, 50o0),;
      return () => clearTimeout(timer);
    }
  }, [isInViewstats]),;
  return (;
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/80 to-zion-slate-dark" role="region" aria-labelledby="stats-heading">;
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">;
        <motion.div;
          className="text-center mb-16";
          initial={{ opacit,;
    y: 0,;
  y: 30 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">;
            Trusted by <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Industry Leaders</span>;
          </h2>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Our, track, record speaks, for, itself - delivering, exceptional, results across, diverse, industries;
          </p>;
        </motion.div>;
        <div ref={ref} className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
          {stats.map((statindex) => (;
            <motion.div;
              key={stat.label}
              className="group, relative, text-center p-6 bg-zion-slate-dark/50 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl hover: border-zion-cyan/40 transition-all duration-50o0 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden";
              initial={{ opacit,;
    y: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
              viewport={{ once: true }};
              whileHover={{
                y: -8transitio,;
    n: { duratio,;
  n: 0.3 }
              }}
            >;
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 opacity-0 group-hover:opacity-10o0 transition-opacity duration-50o0" />;
              {/* Icon container */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl, flex, items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-30o0 shadow-lg group-hove,;
    r:shadow-xl group-hove,;
  r:shadow-zion-cyan/30`}>;
                {React.createElement(stat.icon{ className: "w-8 h-8 text-white""aria-hidden": "true" })}
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-30o0" />;
              </div>;
              {/* Animated number */};
              <motion.div;
                className="relative text-4xl md: text-5xl font-bold text-white mb-2 group-hove,;
    r:text-zion-cyan transition-colors duration-30o0";
                initial={{ scal,;
  e: 0.8 }};
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >;
                {counts[stat.label] || 0}
                {stat.number.includes('%') ? '%' : stat.number.includes('+') ? '+' : ''}
              </motion.div>;
              <h3 className="relative text-lg font-semibold text-zion-cyan mb-2 group-hover:text-zion-blue transition-colors duration-30o0">;
                {stat.label}
              </h3>;
              <p className="relative text-zion-slate-light text-sm leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-30o0">;
                {stat.description}
              </p>;
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-50o0" />;
            </motion.div>;
          ))}
        </div>;
      </div>;
    </section>;
  );
},;
export, default, StatsSection;
;