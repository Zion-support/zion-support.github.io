import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Star, 
  Zap, 
  Shield,
  Award,
  Rocket
} from 'lucide-react';

interface Stat {
  id: string;
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
  color: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    id: 'clients',
    icon: Users,
    value: '500+',
    label: 'Global Clients',
    description: 'Serving businesses across 50+ countries',
    color: 'zion-cyan',
    gradient: 'from-zion-cyan to-zion-blue'
  },
  {
    id: 'uptime',
    icon: Shield,
    value: '99.99%',
    label: 'Uptime Guarantee',
    description: 'Enterprise-grade reliability and performance',
    color: 'zion-purple',
    gradient: 'from-zion-purple to-zion-cyan'
  },
  {
    id: 'roi',
    icon: TrendingUp,
    value: '600%',
    label: 'Average ROI',
    description: 'Proven business impact and cost savings',
    color: 'zion-blue',
    gradient: 'from-zion-blue to-zion-purple'
  },
  {
    id: 'satisfaction',
    icon: Star,
    value: '4.9/5',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
    color: 'zion-cyan',
    gradient: 'from-zion-cyan to-zion-purple'
  },
  {
    id: 'innovation',
    icon: Zap,
    value: '50+',
    label: 'Patents & Innovations',
    description: 'Leading edge technology development',
    color: 'zion-purple',
    gradient: 'from-zion-purple to-zion-blue'
  },
  {
    id: 'growth',
    icon: Rocket,
    value: '300%',
    label: 'Annual Growth',
    description: 'Rapidly expanding global presence',
    color: 'zion-blue',
    gradient: 'from-zion-blue to-zion-cyan'
  }
];

export default function EnhancedStatsSection() {
  const [countedValues, setCountedValues] = useState<{ [key: string]: number }>({});
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const animateCount = (target: string, duration: number = 2000) => {
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const start = 0;
    const increment = numericValue / (duration / 16); // 60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      setCountedValues(prev => ({
        ...prev,
        [target]: Math.floor(current)
      }));
    }, 16);

    return timer;
  };

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        const timer = setTimeout(() => {
          animateCount(stat.value);
        }, stats.indexOf(stat) * 200);
        return () => clearTimeout(timer);
      });
    }
  }, [inView]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6
              }
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Proven Results & Global Impact
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional value and innovation to businesses worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }
              }}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  borderColor: `rgba(34, 221, 210, 0.5)`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.gradient} bg-opacity-20 flex items-center justify-center mx-auto mb-6 relative z-10 border border-white/20`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-10 h-10 text-${stat.color}`} />
                </motion.div>

                {/* Value */}
                <motion.div
                  className="mb-4 relative z-10"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    {countedValues[stat.value] || 0}
                    {stat.value.includes('%') && '%'}
                    {stat.value.includes('/') && stat.value.split('/')[1]}
                  </span>
                </motion.div>

                {/* Label */}
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.6
              }
            }
          }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 lg:p-12 text-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Industry Recognition & Awards
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Consistently recognized as a leader in innovation, receiving prestigious awards for our groundbreaking technology solutions and exceptional client service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
                <div className="text-gray-300">Industry Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">Top 10</div>
                <div className="text-gray-300">Global Tech Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue mb-2">100%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}