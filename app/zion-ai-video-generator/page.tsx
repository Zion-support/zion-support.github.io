import { Link } from 'react-router-dom';
import { ArrowRight, Video, Play, Edit, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mic, Palette, Share, Mail, Smartphone, Globe, Cloud, BarChart3, Target, Headphones, Layout } from 'lucide-react';
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

const ZionAIVideoGeneratorPage = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Video Generation",
      description: "Create professional videos from text prompts using advanced AI technology",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Smart Editing",
      description: "AI-powered editing tools for seamless video production and enhancement",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Synthesis",
      description: "Generate natural-sounding voiceovers in multiple languages and accents",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Effects",
      description: "Apply stunning visual effects and animations automatically",
      color: "from-orange-500 to-red-500"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Video Generator",
    "description": "AI-powered video generation platform for creating professional videos from text prompts",
    "url": "https://ziontechgroup.com/zion-ai-video-generator",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "800"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Video Generator - AI-Powered Video Creation Platform"
            description="Create professional videos from text prompts with our AI video generator. Generate voiceovers, apply effects, and produce stunning videos automatically."
            keywords="AI video generator, video creation, AI video production, video editing, voice synthesis, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/zion-ai-video-generator"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 text-sm font-medium">AI-Powered Video Generation</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Video Generator
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Create professional videos from text prompts with our AI video generator. 
                    Generate voiceovers, apply effects, and produce stunning videos automatically.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right">
                      Get Started
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={Play}
                      iconPosition="right">
                      Watch Demo
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
                    Powerful Video Creation Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to create professional videos effortlessly.
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
                        {feature.icon}
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
                  Ready to Create Amazing Videos?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of creators using Zion AI Video Generator to produce 
                  professional videos in minutes. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={Video}
                    iconPosition="right">
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

export default ZionAIVideoGeneratorPage;