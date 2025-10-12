import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FuturisticServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  href = '/contact',
  className = ''
}) => {
  return (
    <>
      <Helmet>
        <title>Service Card - Zion Tech Group</title>
      </Helmet>
      
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative overflow-hidden rounded-2xl p-6
          bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60
          backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50
          shadow-2xl hover:shadow-cyan-500/20
          transition-all duration-300 ease-out
          ${className}
        `}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{description}</p>
          
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Link
            to={href}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default FuturisticServiceCard;