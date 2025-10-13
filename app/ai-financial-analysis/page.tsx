import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, PieChart, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';
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

const AIFinancialAnalysisZionTechGroup = () => {
  const features = [
    {
      title: "Financial Forecasting",
      description: "Predict future financial performance with advanced AI models and machine learning",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
      description: "Identify and analyze financial risks with comprehensive risk modeling tools",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Portfolio Analysis",
      description: "Optimize investment portfolios with AI-powered analysis and recommendations",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor financial metrics and market conditions in real-time",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "For financial professionals",
      features: [
        "Advanced forecasting models",
        "Risk analysis tools",
        "Portfolio optimization",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$699",
      period: "month",
      description: "For financial institutions",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Real-time data feeds",
        "Priority support",
        "Compliance tools",
        "SLA guarantee"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      description: "Tailored solutions",
      features: [
        "Everything in Enterprise",
        "Custom development",
        "Dedicated support",
        "On-premise deployment",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Financial Analysis",
    "description": "AI-powered financial analysis platform with forecasting, risk assessment, and portfolio optimization",
    "url": "https://ziontechgroup.com/ai-financial-analysis",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "699",
      "priceCurrency": "USD"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI Financial Analysis - Zion Tech Group"
            description="AI-powered financial analysis platform with forecasting, risk assessment, portfolio optimization, and real-time monitoring for financial professionals."
            keywords="AI financial analysis, financial forecasting, risk assessment, portfolio optimization, financial modeling"
            canonicalUrl="https://ziontechgroup.com/ai-financial-analysis"
          />
          <StructuredData data={structuredData} />
          
          <Helmet>
            <title>AI Financial Analysis - Zion Tech Group</title>
            <meta name="description" content="AI-powered financial analysis platform with forecasting, risk assessment, and portfolio optimization." />
            <meta name="keywords" content="AI financial analysis, financial forecasting, risk assessment, portfolio optimization" />
            <link rel="canonical" href="https://ziontechgroup.com/ai-financial-analysis" />
          </Helmet>

          <main>
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer>
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                    <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 text-sm font-medium">AI-Powered Financial Analysis</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6">
                    AI Financial Analysis
                  </FuturisticTextEnhanced>
                  
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                    Transform your financial decision-making with our advanced AI-powered analysis platform. 
                    Forecasting, risk assessment, and portfolio optimization powered by machine learning.
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
                      icon={PieChart}
                      iconPosition="right">
                      View Demo
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
                    Advanced Financial Tools
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to make smarter financial decisions and optimize your investments.
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
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your financial analysis needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Finances?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of financial professionals using Zion AI Financial Analysis to make better decisions. 
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
                    icon={PieChart}
                    iconPosition="right">
                    View Demo
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

export default AIFinancialAnalysisZionTechGroup;