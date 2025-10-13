import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart3, TrendingUp, Target, Eye, Heart, Star, CheckCircle, Sparkles, Mail, Smartphone, Globe, Cloud, Settings, Headphones, DollarSign, CreditCard, TrendingDown, Play, Zap, ShoppingCart, Store } from 'lucide-react';
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

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Customer Analytics",
      description: "Advanced analytics to understand customer behavior and preferences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Insights",
      description: "AI-powered predictions for customer lifetime value and churn risk",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sentiment Analysis",
      description: "Real-time sentiment analysis from customer feedback and interactions",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalization",
      description: "Hyper-personalized customer experiences based on AI insights",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Customer Insights",
    "description": "AI-powered customer insights platform for better customer understanding and engagement",
    "url": "https://ziontechgroup.com/zion-ai-customer-insights",
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
      "ratingValue": "4.8",
      "ratingCount": "1200"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Customer Insights - Advanced Customer Analytics Platform"
            description="Transform customer data into actionable insights with our AI-powered customer analytics platform. Understand behavior, predict trends, and personalize experiences."
            keywords="customer insights, customer analytics, AI customer intelligence, customer behavior, personalization, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/zion-ai-customer-insights"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-400 text-sm font-medium">AI-Powered Customer Insights</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Customer Insights
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Transform customer data into actionable insights with our AI-powered customer analytics platform. 
                    Understand behavior, predict trends, and personalize experiences.
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
                    Powerful Customer Intelligence Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to understand your customers like never before.
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Understand Your Customers Better?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses using Zion AI Customer Insights to make 
                  data-driven decisions and improve customer experiences. Start your free trial today.
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

export default ZionAICustomerInsightsPage;