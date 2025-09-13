import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, ClockIcon, UsersIcon, TrendingUpIcon } from '@heroicons/react/24/outline';

const NewContentPromotionBanner2025 = () => {
  const stats = [
    { icon: ClockIcon, value: "50+", label: "New Articles" },
    { icon: UsersIcon, value: "10K+", label: "Monthly Readers" },
    { icon: TrendingUpIcon, value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4" />
            New Content Alert
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fresh Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Every Week
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on AI, quantum computing, 
            neural interfaces, and cutting-edge technology trends.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore New Content
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Get Notified
              <ClockIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-bold text-lg">TechCorp</div>
              <div className="text-white font-bold text-lg">InnovateLab</div>
              <div className="text-white font-bold text-lg">FutureTech</div>
              <div className="text-white font-bold text-lg">QuantumAI</div>
              <div className="text-white font-bold text-lg">NeuralNet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce" />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default NewContentPromotionBanner2025;