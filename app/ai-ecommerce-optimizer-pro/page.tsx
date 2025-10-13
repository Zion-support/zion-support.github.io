"use client";
import { Brain, Zap, CheckCircle, Star, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Optimization",
      description: "Advanced machine learning algorithms analyze customer behavior and optimize your store automatically",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Conversion Rate Optimization",
      description: "Increase your conversion rates by up to 40% with intelligent product recommendations and layout optimization",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Real-time Analytics",
      description: "Get detailed insights into customer behavior, sales patterns, and performance metrics",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automated A/B Testing",
      description: "Continuously test and optimize your store elements for maximum performance",
      color: "from-yellow-500 to-orange-500",
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 40%",
    "Reduce cart abandonment by 25%",
    "Optimize product recommendations",
    "Improve user experience",
    "Boost revenue and profitability"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      content: "Zion AI E-commerce Optimizer has transformed our online store. Our conversion rates increased by 35% in just 3 months.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "CEO",
      company: "TechGadgets",
      content: "The AI-powered recommendations are incredible. Our average order value increased by 28% since implementing this tool.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Director",
      company: "HomeDecor Plus",
      content: "The automated A/B testing saves us hours of work and delivers better results than our manual testing ever did.",
      rating: 5,
      avatar: "LR",
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI E-commerce Optimizer Pro",
    "description": "AI-powered e-commerce optimization platform for increased conversions and revenue",
    "url": "https://ziontechgroup.com/ai-ecommerce-optimizer-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI E-commerce Optimizer Pro - Boost Your Online Store Performance"
            description="Increase conversions, reduce cart abandonment, and boost revenue with AI-powered e-commerce optimization. Transform your online store today."
            keywords="e-commerce optimization, conversion rate optimization, AI e-commerce, online store optimization, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/ai-ecommerce-optimizer-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                    <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">AI-Powered E-commerce Optimization</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI E-commerce Optimizer Pro
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Boost your online store performance with AI-powered optimization. 
                    Increase conversions, reduce cart abandonment, and maximize revenue.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
                      icon={BarChart3}
                      iconPosition="right">
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
                    Powerful Optimization Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to optimize every aspect of your e-commerce store.
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
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Proven Results
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See the impact of AI-powered optimization on your e-commerce store
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                      <span className="text-lg text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by E-commerce Leaders
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what e-commerce professionals are saying about our optimization platform
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <FuturisticCardEnhanced key={index} className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Store?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of e-commerce businesses using Zion AI E-commerce Optimizer Pro 
                  to boost their online performance. Start your free trial today.
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
                    icon={TrendingUp}
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
}