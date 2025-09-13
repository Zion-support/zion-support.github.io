import React from 'react';
import { Eye, Volume2, MousePointer, Keyboard } from 'lucide-react';

const AccessibilityEnhancer = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast ratios, screen reader support, and visual indicators",
      compliance: "WCAG 2.1 AA"
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and sound alternatives",
      compliance: "WCAG 2.1 AA"
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Large click targets, keyboard navigation, and gesture alternatives",
      compliance: "WCAG 2.1 AA"
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility and focus management",
      compliance: "WCAG 2.1 AA"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Accessibility Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inclusive
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Design</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ensuring our website is accessible to everyone, regardless of ability or technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessibilityFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold text-white">
                  {feature.compliance}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;