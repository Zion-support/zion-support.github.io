import React from 'react';
import Link from 'next/link';
import { 
  MegaphoneIcon, 
  ArrowRightIcon, 
  SparklesIcon, 
  ClockIcon,
  FireIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const NewContentAnnouncementBanner2025 = () => {
  const highlights = [
    "50+ New Articles",
    "10 Case Studies",
    "5 Technology Insights",
    "Weekly Updates"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-pink-500/30" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-300/20 rounded-full animate-bounce" />
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-300/20 rounded-full animate-bounce delay-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <MegaphoneIcon className="w-6 h-6" />
            MAJOR ANNOUNCEMENT
            <FireIcon className="w-5 h-5 text-yellow-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            NEW CONTENT
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              EXPLOSION 2025
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
            🚀 Fresh insights, breakthrough case studies, and cutting-edge technology analysis
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-lg"
              >
                <StarIcon className="w-5 h-5 text-yellow-300" />
                {highlight}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              What's New This Month?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">📚 Content Library</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• AI Consciousness Research Papers</li>
                  <li>• Quantum Computing Business Applications</li>
                  <li>• Neural Interface Implementation Guides</li>
                  <li>• Cloud Optimization Best Practices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">🎯 Case Studies</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• E-commerce AI Transformation</li>
                  <li>• Financial Services Quantum Solutions</li>
                  <li>• Healthcare Neural Interface Platform</li>
                  <li>• Enterprise Cloud Migration Success</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/content"
              className="group inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              <SparklesIcon className="w-6 h-6" />
              EXPLORE NEW CONTENT
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/newsletter"
              className="group inline-flex items-center gap-3 border-3 border-white text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105"
            >
              <ClockIcon className="w-6 h-6" />
              GET NOTIFIED FIRST
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-white/80 text-lg mb-6 font-medium">
              Join 50,000+ professionals already benefiting from our insights
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="text-white font-bold text-xl">TechLeaders</div>
              <div className="text-white font-bold text-xl">InnovateCorp</div>
              <div className="text-white font-bold text-xl">FutureTech</div>
              <div className="text-white font-bold text-xl">QuantumAI</div>
              <div className="text-white font-bold text-xl">NeuralNet</div>
              <div className="text-white font-bold text-xl">CloudScale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-300/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-orange-300/20 rounded-full animate-bounce delay-500" />
    </section>
  );
};

export default NewContentAnnouncementBanner2025;