import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Download, Settings, Sparkles, CheckCircle, Star, Users, Brain, Mail, Smartphone, Globe, Database, BarChart3, Target, Headphones, Layout, CreditCard, Calculator, Play } from 'lucide-react';
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

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Invoice Generation",
      description: "Automatically generate professional invoices from transaction data",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Smart Calculations",
      description: "Automatic tax calculations, discounts, and payment terms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Seamless integration with payment processors and accounting systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Centralized invoice management and tracking system",
      color: "from-orange-500 to-red-500"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Invoice Generator",
    "description": "AI-powered invoice generation platform for automated billing and payment processing",
    "url": "https://ziontechgroup.com/zion-ai-invoice-generator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "600"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Zion AI Invoice Generator - Automated Invoice Creation Platform"
            description="Streamline your billing process with our AI invoice generator. Automatically create professional invoices, calculate taxes, and integrate with payment systems."
            keywords="AI invoice generator, automated billing, invoice creation, payment processing, accounting automation, Zion Tech Group"
            canonicalUrl="https://ziontechgroup.com/zion-ai-invoice-generator"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="text-center relative z-10">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
                    <Sparkles className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 text-sm font-medium">AI-Powered Invoice Generation</span>
                  </div>
                  
                  <FuturisticTextEnhanced
                    variant="display"
                    size="5xl"
                    gradient={true}
                    glow={true}
                    className="mb-6 leading-tight">
                    Zion AI Invoice Generator
                  </FuturisticTextEnhanced>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                    Streamline your billing process with our AI invoice generator. 
                    Automatically create professional invoices, calculate taxes, and integrate with payment systems.
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
                      icon={FileText}
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
                    Powerful Invoice Generation Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Automate your entire billing process with intelligent invoice generation.
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
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Automate Your Invoicing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of businesses using Zion AI Invoice Generator to streamline 
                  their billing process and get paid faster. Start your free trial today.
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
                    icon={FileText}
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

export default ZionAIInvoiceGeneratorPage;