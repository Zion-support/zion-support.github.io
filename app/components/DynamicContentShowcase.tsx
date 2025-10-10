'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

interface DynamicContentShowcaseProps {
  title?: string;
  subtitle?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  title = "Revolutionary AI Solutions",
  subtitle = "Transform your business with cutting-edge artificial intelligence and automation",
  features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that adapt and learn from your data'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with 99.9% uptime and sub-second response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Deploy anywhere in the world with automatic scaling and load balancing'
    }
  ],
  ctaText = "Get Started Today",
  ctaLink = "/contact"
}) => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 ${
                  index === currentFeature
                    ? 'bg-purple-500/20 border border-purple-500/50 scale-105'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    index === currentFeature
                      ? 'bg-purple-500'
                      : 'bg-cyan-500'
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {features[currentFeature].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {features[currentFeature].description}
                </p>
                <div className="flex justify-center space-x-2">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentFeature
                          ? 'bg-purple-500'
                          : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-300">+1-302-464-0950</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-300">kleber@ziontechgroup.com</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-gray-300">Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
