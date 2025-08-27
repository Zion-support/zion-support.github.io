import React from 'react';
import { motion } from 'framer-motion';
interface HeroFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
interface HeroFeaturesProps {
  features: HeroFeature[];
}
const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
          role="article"
          aria-labelledby={`feature-${index}-title`}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
            <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h3 id={`feature-${index}-title`} className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-zion-slate-light text-sm">{feature.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
export default HeroFeatures;