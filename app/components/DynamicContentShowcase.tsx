import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DynamicContentShowcase() {
  const features = [
    {
      title: 'AI-Powered Content',
      description: 'Dynamic content that adapts to user behavior and preferences',
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Real-time Updates',
      description: 'Content that updates automatically based on latest data',
      icon: <ArrowRight className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-4">
        Dynamic Content Showcase
      </h3>
      <p className="text-gray-300 mb-6">
        Experience our cutting-edge dynamic content system that adapts to your needs.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.icon}
            <div>
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/contact"
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
      >
        Contact Us
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  );
}