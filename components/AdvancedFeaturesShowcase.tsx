<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
BrainZapShieldGlobeCpuDatabase

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
}

const features: Feature[] = [
  {
    title: "Neural Processing",
    description: "Advanced neural networks that mimic human brain functions",
    icon: Brain,
    benefits: ["Pattern Recognition"Learning Capabilities"Adaptive Responses"]
  },
  {
    title: "Quantum Computing",
    description: "Leveraging quantum mechanics for unprecedented processing power",
    icon: Zap,
    benefits: ["Exponential Speed"Complex Calculations"Future-Ready"]
  },
  {
    title: "Security First",
    description: "Built-in security protocols and privacy protection",
    icon: Shield,
    benefits: ["Data Protection"Privacy Controls"Compliance Ready"]
  },
  {
    title: "Global Scale",
    description: "Designed to operate across multiple regions and time zones",
    icon: Globe,
    benefits: ["Multi-Region"24/7 Availability"Localized Support"]
  },
  {
    title: "High Performance",
    description: "Optimized for speed and efficiency in all operations",
    icon: Cpu,
    benefits: ["Fast Processing"Low Latency"Scalable Architecture"]
  },
  {
    title: "Data Intelligence",
    description: "Advanced analytics and insights from your data",
    icon: Database,
    benefits: ["Real-time Analytics"Predictive Insights"Data Visualization"]
  }
];

export default function AdvancedFeaturesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Features
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make our AI solutions revolutionary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureindex) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-white/70 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-white/60">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
