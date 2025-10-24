'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe } from 'lucide-react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  features,
  benefits = [],
  ctaText = "Learn More",
  ctaLink = "/contact",
  icon: Icon = Star
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Icon className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature}</h3>
              </div>
            ))}
          </div>

          {benefits.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <a
              href={ctaLink}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;