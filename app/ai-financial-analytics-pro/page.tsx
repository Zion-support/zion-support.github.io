"use client";
import { Brain, Shield, CheckCircle, Star, Target, BarChart3, ArrowRight } from 'lucide-react';
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

export default function AIFinancialAnalyticsProPage() {
  const benefits = [
    "Make data-driven financial decisions",
    "Reduce analysis time by 90%",
    "Identify hidden financial patterns",
    "Scale to handle any data volume",
    "Integrate with existing systems"
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your financial data to provide actionable insights",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics",
      description: "Monitor your financial performance in real-time with comprehensive dashboards and reports",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Risk Management",
      description: "Advanced risk assessment and fraud detection to protect your financial assets",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Predictive Modeling",
      description: "Forecast future trends and make informed decisions with AI-powered predictions",
      color: "from-orange-500 to-red-500",
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp Inc",
      content: "Zion AI Financial Analytics has transformed our financial decision-making process. The insights are incredibly accurate and actionable.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Financial Director",
      company: "Global Finance",
      content: "The predictive analytics capabilities are outstanding. We've been able to identify risks and opportunities we never saw before.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Lisa Rodriguez",
      role: "VP Finance",
      company: "Enterprise Solutions",
      content: "The real-time dashboards give us complete visibility into our financial performance. It's a game-changer for our business.",
      rating: 5,
      avatar: "LR",
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Financial Analytics Pro",
    "description": "Advanced AI financial analytics platform with real-time insights and predictive modeling",
    "url": "https://ziontechgroup.com/ai-financial-analytics-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1800"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Financial Analytics Pro - Advanced Financial Intelligence"
            description="Transform your financial data into actionable insights with our advanced AI financial analytics platform. Get real-time predictions, automated reporting, and intelligent recommendations."
            keywords="AI financial analytics, financial intelligence, business intelligence, machine learning, predictive analytics, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/ai-financial-analytics-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                    <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">AI-Powered Financial Analytics</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Financial Analytics Pro
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Transform your financial data into actionable insights with our advanced AI financial analytics platform. 
                    Get real-time predictions, automated reporting, and intelligent recommendations.
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
                    Powerful Financial Analytics Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to unlock insights from your financial data and make better decisions.
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
                    Why Choose Zion AI Financial Analytics Pro?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Experience the benefits of AI-powered financial analytics
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
                    Trusted by Financial Leaders
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what financial professionals are saying about our analytics platform
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
                  Ready to Transform Your Financial Analytics?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of financial professionals using Zion AI Financial Analytics Pro 
                  to make data-driven decisions and drive growth. Start your free trial today.
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
                    icon={BarChart3}
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