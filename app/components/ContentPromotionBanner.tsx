'use client';
import React from 'react';
import { ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Join thousands of companies already using our solutions to achieve 300% ROI and 70% cost reduction",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  features = [
    {
      icon: Star,
      title: 'Proven Results',
      description: '300% ROI average across all implementations'
    },
    {
      icon: Users,
      title: 'Trusted by 500+',
      description: 'Companies worldwide trust our solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Deploy in weeks, not months'
    }
  ]
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
