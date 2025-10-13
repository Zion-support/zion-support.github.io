import { useState, useEffect } from 'react';
import { Sparkles, PenTool, Video, Image, FileText, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const AIContentStudioZionTechGroup = () => {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI writing models",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Generation",
      description: "Create professional videos from text prompts with AI-powered video generation technology",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image Creation",
      description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Content Optimization",
      description: "Optimize content for SEO, engagement, and conversion with AI-powered analysis",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "month",
      description: "Perfect for individual content creators",
      features: [
        "100 AI-generated articles per month",
        "50 AI-generated images per month",
        "10 AI-generated videos per month",
        "Basic SEO optimization",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "For professional content teams",
      features: [
        "Unlimited AI-generated content",
        "Advanced AI models",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "Custom brand voice"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom AI training",
        "API access",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Content Studio",
    "description": "AI-powered content creation platform for articles, videos, images, and marketing materials",
    "url": "https://ziontechgroup.com/ai-content-studio",
    "applicationCategory": "ContentCreationApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI Content Studio - Zion Tech Group"
            description="AI-powered content creation platform for articles, videos, images, and marketing materials. Create professional content at scale with advanced AI technology."
            keywords="AI content creation, content studio, AI writing, video generation, image creation, content marketing"
            canonicalUrl="https://ziontechgroup.com/ai-content-studio"
          />
          <StructuredData data={structuredData} />
          
          <Helmet>
            <title>AI Content Studio - Zion Tech Group</title>
            <meta name="description" content="AI-powered content creation platform for articles, videos, images, and marketing materials." />
            <meta name="keywords" content="AI content creation, content studio, AI writing, video generation, image creation" />
            <link rel="canonical" href="https://ziontechgroup.com/ai-content-studio" />
          </Helmet>

          <main>
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer>
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">AI-Powered Content Creation</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6">
                    AI Content Studio
                  </FuturisticTextEnhanced>
                  
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                    Create professional content at scale with our advanced AI-powered platform. 
                    Generate articles, videos, images, and marketing materials with cutting-edge technology.
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
                      Watch Demo
                    </FuturisticButtonEnhanced>
                  </div>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Content Creation Tools
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to create professional content across all formats and platforms.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your content creation needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300 mt-2">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        href="/contact"
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Create Amazing Content?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of creators using Zion AI Content Studio to produce professional content at scale. 
                  Start your free trial today.
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
                    Watch Demo
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

export default AIContentStudioZionTechGroup;