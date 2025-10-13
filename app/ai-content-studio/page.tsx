<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function aiContentStudio() {
  return (
=======

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiContentStudioPage() {
        return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6eb7
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Content Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Content Studio</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
=======

export default function AicontentstudioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Content Studio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
=======
import { Sparkles, PenTool, Video, Image, FileText, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
=======


import { Sparkles, PenTool, Video, Image, FileText, CheckCircle, ArrowRight, Star } from 'lucide-react';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
<<<<<<< HEAD
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
=======

import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

const AIContentStudioZionTechGroup = () => {
=======

import { Helmet } from 'react-helmet-async';
import PerformanceOptimizer from "../components/PerformanceOptimizer";

export default function AiContentStudioPage() {

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  const features = [
    {,
    title: "AI Writing Assistant",
        description: "Generate high-quality articles, blogs, and marketing copy with advanced AI writing models",
        icon: <PenTool className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500"
    },
    {,
    title: "Video Generation",
        description: "Create professional videos from text prompts with AI-powered video generation technology",
        icon: <Video className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500"
    },
<<<<<<< HEAD
    {
      title: "Image Creation",
      description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
=======
    {,
    title: "Image Creation",
        description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
        icon: <img className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    },
    {,
    title: "Content Optimization",
        description: "Optimize content for SEO, engagement, and conversion with AI-powered analysis",
        icon: <FileText className="w-8 h-8" />,
        color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {,
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
<<<<<<< HEAD
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for content teams and agencies",
      features: [
=======
    {,
    name: "Studio Pro",
        price: "$149",
        period: "month",
        description: "Ideal for content teams and agencies",
        features: [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        "Unlimited AI-generated content",
        "Advanced video generation",
        "Premium image models",
        "Advanced SEO optimization",
        "Priority support",
        "Team collaboration",
        "Brand voice customization",
        "API access"
      ],
        popular: true
    },
<<<<<<< HEAD
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
=======
    {,
    name: "Enterprise",
        price: "$299",
        period: "month",
        description: "For large content operations",
        features: [
        "Everything in Studio Pro",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        "Custom AI model training",
        "White-label solution",
        "Dedicated support team",
        "SLA guarantee",
        "Custom integrations",
        "Advanced analytics"
      ],
        popular: false
    }
<<<<<<< HEAD
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Manager",
      company: "MarketingPro",
      content: "Zion AI Content Studio has transformed our content creation process. We can now produce high-quality content at scale.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      company: "BrandStudio",
      content: "The video generation capabilities are incredible. We can create professional videos in minutes instead of hours.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Social Media Manager",
      company: "DigitalFirst",
      content: "The AI writing assistant produces content that's indistinguishable from human-written copy. It's a game-changer.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Content Studio",
    "description": "AI-powered content creation platform for writing, video, and image generation",
    "url": "https://ziontechgroup.com/ai-content-studio",
    "applicationCategory": "ContentCreationApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "199",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI Content Studio - Zion Tech Group"
            description="Create stunning content with AI-powered writing, video, and image generation tools. Perfect for content creators, marketers, and agencies."
            keywords="AI content creation, content generation, video creation, image generation, content marketing, AI writing"
            canonical="https://ziontechgroup.com/ai-content-studio"
          />
          <StructuredData data={structuredData} />
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiContentStudioPage() {
        return (
=======

  ];

  const testimonials = [
    {,
    name: "Lisa Wang",
        role: "Content Manager",
        company: "Creative Agency",
        content: "Zion AI Content Studio has transformed our content creation process. We can now produce high-quality content at scale like never before.",
        rating: 5,
        avatar: "LW"
    },
    {,
    name: "David Kim",
        role: "Marketing Director",
        company: "TechStart Inc",
        content: "The AI-powered video generation is incredible. We've reduced our video production time by 80% while maintaining quality.",
        rating: 5,
        avatar: "DK"
    },
    {,
    name: "Maria Garcia",
        role: "Creative Director",
        company: "Design Studio",
        content: "The design automation features are game-changing. We can create professional visuals in minutes instead of hours.",
        rating: 5,
        avatar: "MG"
    }
  ];

  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Content Studio solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Content Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai content studio solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ad48
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">AI-Powered Content Creation</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Zion AI Content Studio
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Create stunning content with AI-powered writing, video, and image generation tools. 
                  Perfect for content creators, marketers, and agencies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={PenTool}
                    iconPosition="left">
                    Start Creating
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#demo"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Watch Demo
                  </FuturisticButtonEnhanced>
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
                    Harness the power of AI to create engaging content across all formats and platforms.
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
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
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
                        <div className="text-4xl font-bold text-purple-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Content Creators Worldwide
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what content creators are saying about Zion AI Content Studio
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
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
                  Join thousands of content creators using Zion AI Content Studio to produce 
                  engaging content at scale. Start your free trial today.
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
                    icon={PenTool}
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

export default AIContentStudioZionTechGroup;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
