"use client";

import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOOptimizer from './components/SEOOptimizer';
import { Brain, Zap, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure and cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime",
      link: "/it-services"
    },
    {
      title: "Performance Optimization",
      description: "Advanced performance monitoring and optimization for maximum efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "3x faster",
      link: "/performance"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance to ensure reliable solutions",
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      stats: "100% tested",
      link: "/quality"
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="ZionTechGroup - AI & IT Solutions"
        description="Transform your business with cutting-edge AI and IT solutions. Expert consulting, development, and support services."
        keywords={['AI solutions', 'IT services', 'business transformation', 'technology consulting']}
        canonicalUrl="https://ziontechgroup.com"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Transform Your Business with AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We deliver cutting-edge AI and IT solutions that drive growth, efficiency, and innovation for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our Core Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-400">
                          {feature.stats}
                        </span>
                        <a 
                          href={feature.link}
                          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's work together to create innovative solutions that drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;