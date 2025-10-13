import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  Brain,
  PieChart,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const AIFinancialAnalysisPage = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Financial Analytics",
      description: "Comprehensive financial analysis with machine learning algorithms",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Predictions",
      description: "Get accurate financial predictions and forecasts using advanced AI models",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-time Insights",
      description: "Monitor your financial data in real-time with instant updates and alerts",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Visual Dashboards",
      description: "Beautiful, interactive dashboards for financial data visualization",
      color: "from-orange-500 to-red-500",
    }
  ];

  const benefits = [
    "Make data-driven financial decisions",
    "Reduce analysis time by 90%",
    "Identify hidden financial patterns",
    "Scale to handle any data volume",
    "Integrate with existing systems"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Financial Analysis",
    "description": "Advanced AI financial analysis platform with real-time insights and predictive modeling",
    "url": "https://ziontechgroup.com/ai-financial-analysis",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1500"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Financial Analysis - Advanced Financial Analytics Platform"
            description="Transform your financial data into actionable insights with our advanced AI financial analysis platform. Get real-time predictions, automated reporting, and intelligent recommendations."
            keywords="AI financial analysis, financial analytics, business intelligence, machine learning, predictive analytics, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/ai-financial-analysis"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 text-sm font-medium">AI-Powered Financial Analysis</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Financial Analysis
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Transform your financial data into actionable insights with our advanced AI financial analysis platform. 
                    Get real-time predictions, automated reporting, and intelligent recommendations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={Zap}
                      iconPosition="right">
                      Get Started
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={ArrowRight}
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
                    Powerful Financial Analysis Features
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Zion AI Financial Analysis?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Experience the benefits of AI-powered financial analysis
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Financial Analysis?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses using Zion AI Financial Analysis to make 
                  data-driven financial decisions and drive growth. Start your free trial today.
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
};

export default AIFinancialAnalysisPage;