"use client";

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

interface InteractiveCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

const InteractiveCard = ({ icon, title, description, gradient, delay = 0 }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: isHovered ? 1.05 : 1,
      rotateY: isHovered ? 5 : 0,
      transition: { duration: 0.3 }
    });
  }, [isHovered, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 cursor-pointer"
    >
      <motion.div
        animate={controls}
        className="relative z-10"
      >
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
      
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const InteractiveFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and automated analysis to drive better business decisions.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and smart caching.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and comprehensive compliance frameworks.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Scalable Growth",
      description: "Scale seamlessly from startup to enterprise with our flexible architecture and pricing.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI-powered business solutions with cutting-edge technology and unmatched performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <InteractiveCard
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Interactive stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2"
            >
              99.9%
            </motion.div>
            <p className="text-gray-300">Uptime Guarantee</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2"
            >
              10x
            </motion.div>
            <p className="text-gray-300">Performance Boost</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2"
            >
              50K+
            </motion.div>
            <p className="text-gray-300">Happy Customers</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;