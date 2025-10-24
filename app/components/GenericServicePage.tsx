'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe } from 'lucide-react';

interface GenericServicePageProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title = "Professional Services",
  subtitle = "Comprehensive solutions for your business needs",
  description = "We provide cutting-edge technology solutions tailored to your specific requirements, ensuring maximum efficiency and growth.",
  features = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick deployment and setup with minimal downtime"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across multiple time zones"
    }
  ],
  benefits = [
    "Increase productivity by up to 40%",
    "Reduce operational costs by 30%",
    "Improve customer satisfaction",
    "Scale your business efficiently"
  ],
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">{subtitle}</p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

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

export default GenericServicePage;