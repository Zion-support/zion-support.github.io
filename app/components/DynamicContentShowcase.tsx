import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that adapt and learn from your business data.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Scalable Cloud Infrastructure',
      description: 'Enterprise-grade cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and security protocols to protect your data.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized systems that deliver exceptional speed and reliability.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Zion Tech Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
