import React from "react";
import { Helmet } from 'react-helmet-async';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const ZionAiEmailAnalyzer = () => {
  const features = [
    {
      icon: "📧",
      title: "Email Analysis",
      description: "AI-powered analysis of email content, sentiment, and engagement",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Performance Metrics",
      description: "Track email performance and optimize campaigns automatically",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🎯",
      title: "Personalization",
      description: "Personalize email content based on recipient behavior and preferences",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Real-time Insights",
      description: "Get real-time insights and recommendations for better email performance",
      color: "from-orange-500 to-red-500"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Email Analyzer",
    "description": "AI-powered email analysis platform for better email marketing performance",
    "url": "https://ziontechgroup.com/zion-ai-email-analyzer",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "700"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Email Analyzer - AI-Powered Email Marketing Analytics"
            description="Analyze and optimize your email campaigns with AI-powered email analytics. Improve open rates, engagement, and conversions with intelligent insights."
            keywords="email analyzer, email analytics, email marketing, AI email insights, email optimization, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/zion-ai-email-analyzer"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                    <span className="text-blue-400 text-sm font-medium">AI-Powered Email Analytics</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Email Analyzer
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Analyze and optimize your email campaigns with AI-powered email analytics. 
                    Improve open rates, engagement, and conversions with intelligent insights.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg">
                      Get Started
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg">
                      View Demo
                    </FuturisticButtonEnhanced>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Email Analytics Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to analyze and optimize your email campaigns.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Analyze Your Emails?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of marketers using Zion AI Email Analyzer to improve 
                  their email performance and drive better results. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default ZionAiEmailAnalyzer;