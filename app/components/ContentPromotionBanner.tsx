"use client";
import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Globe,
} from "lucide-react";

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description:
        "Advanced AI technology to transform your business operations and improve efficiency",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Lightning-fast processing and real-time analytics for optimal results",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with encryption and compliance standards",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide deployment with local support and compliance",
    },
  ];

  const benefits = [
    "Advanced AI technology integration",
    "Real-time processing and analytics",
    "Enterprise-grade security and compliance",
    "Scalable and flexible solutions",
    "24/7 technical support",
    "Easy integration with existing systems",
    "Cost-effective pricing plans",
    "Proven track record of success",
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of companies already using our AI and IT solutions to
            drive growth and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex items-center text-purple-100">
                <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {benefits.slice(4).map((benefit, index) => (
              <div key={index} className="flex items-center text-purple-100">
                <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
