import React, { useState } from 'react';
import { Zap, Shield, Star, Users, ArrowRight } from 'lucide-react';

interface PromotionFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const features: PromotionFeature[] = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.',
      icon: Shield
    },
    {
      title: 'Proven Track Record',
      description: 'Trusted by 500+ companies worldwide with 99.9% uptime.',
      icon: Star
    },
    {
      title: 'Expert Team',
      description: 'Our certified professionals deliver world-class solutions.',
      icon: Users
    }
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with Zion Tech
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of companies already using our AI and IT solutions to drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;