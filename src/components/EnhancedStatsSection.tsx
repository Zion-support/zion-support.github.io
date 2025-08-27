import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud,
  Star,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';
interface Stat {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
  color: string;
  gradient: string;
  suffix?: string;
  prefix?: string;
}
export default function EnhancedStatsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats: Stat[] = [
    {
      icon: Users,
      value: "500",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide",
      color: "text-zion-cyan",
      gradient: "from-zion-cyan to-zion-blue"
    },
    {
      icon: TrendingUp,
      value: "95",
      label: "Success Rate",
      description: "Proven track record of delivery",
      color: "text-zion-purple",
      gradient: "from-zion-purple to-zion-cyan",
      suffix: "%"
    },
    {
      icon: Award,
      value: "10",
      label: "Years Experience",
      description: "Deep industry expertise",
      color: "text-zion-blue",
      gradient: "from-zion-blue to-zion-purple",
      suffix: "+"
    },
    {
      icon: Globe,
      value: "25",
      label: "Countries Served",
      description: "Global reach and support",
      color: "text-zion-cyan",
      gradient: "from-zion-cyan to-zion-purple",
      suffix: "+"
    },
    {
      icon: Zap,
      value: "99.9",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure",
      color: "text-zion-purple",
      gradient: "from-zion-purple to-zion-blue",
      suffix: "%"
    },
    {
      icon: Shield,
      value: "1000",
      label: "Security Audits",
      description: "Enterprise-grade protection",
      color: "text-zion-blue",
      gradient: "from-zion-blue to-zion-cyan",
      suffix: "+"
    }
  ];
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        const targetValue = parseInt(stat.value);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetValue / steps;
        let currentValue = 0;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [stat.label]: Math.floor(currentValue)
          }));
        }, duration / steps);
        
        return () => clearInterval(timer);
      });
    }
  }, [isInView, stats]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Zion Tech Group by the Numbers
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the key metrics that demonstrate our commitment to excellence and innovation.
          </p>
        </motion.div>
        {/* Stats grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              {/* Stat card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                {/* Value */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    {stat.prefix || ''}
                    {counts[stat.label] || 0}
                    {stat.suffix || ''}
                  </span>
                </div>
                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Star, label: "Client Satisfaction", value: "98%", color: "text-yellow-400" },
                { icon: CheckCircle, label: "Project Success", value: "99.2%", color: "text-green-400" },
                { icon: Clock, label: "Response Time", value: "<2hrs", color: "text-zion-cyan" },
                { icon: Target, label: "Goal Achievement", value: "96%", color: "text-zion-purple" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center`}>
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-zion-purple" />
              <span>AWS Advanced Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-zion-blue" />
              <span>AI Ethics Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}