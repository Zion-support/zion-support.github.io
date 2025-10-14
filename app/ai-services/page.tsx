import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServices = () => {
  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos in minutes with AI-powered script generation, voice synthesis, and smart editing",
      icon: <Video className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-video-generator",
      features: ["Script generation", "Voice synthesis", "Auto editing", "50+ languages"],
      featured: true
    },
    {
      title: "AI Customer Insights",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive behavior modeling",
      icon: <Brain className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-ai-customer-insights",
      features: ["Sentiment analysis", "Predictive analytics", "Real-time insights", "Multi-channel integration"],
      featured: true
    },
    {
      title: "AI Invoice Generator",
      description: "Automate invoice creation with AI-powered templates, smart data extraction, and automated billing workflows",
      icon: <Award className="w-8 h-8" />,
      price: "From $19/month",
      link: "/zion-ai-invoice-generator",
      features: ["Smart templates", "Auto data extraction", "Multi-currency", "Integration ready"],
      featured: false
    },
    {
      title: "AI Voice Assistant Pro",
      description: "Build intelligent voice assistants with natural language processing and multi-platform deployment",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-voice-assistant-pro",
      features: ["NLP processing", "Multi-platform", "Custom training", "API integration"],
      featured: false
    },
    {
      title: "AI Code Reviewer",
      description: "Automated code review with AI-powered analysis, security scanning, and performance optimization suggestions",
      icon: <Settings className="w-8 h-8" />,
      price: "From $59/month",
      link: "/zion-ai-code-reviewer",
      features: ["Security scanning", "Performance analysis", "Best practices", "Multi-language support"],
      featured: false
    },
    {
      title: "AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated clause extraction",
      icon: <Shield className="w-8 h-8" />,
      price: "From $79/month",
      link: "/zion-ai-contract-analyzer",
      features: ["Risk assessment", "Compliance checking", "Clause extraction", "Legal insights"],
      featured: false
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Optimize supply chain operations with AI-powered demand forecasting and inventory management",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $99/month",
      link: "/zion-ai-supply-chain-optimizer",
      features: ["Demand forecasting", "Inventory optimization", "Risk analysis", "Real-time monitoring"],
      featured: false
    },
    {
      title: "AI Translator Pro",
      description: "Advanced translation service with context-aware AI and real-time language processing",
      icon: <Globe className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-translator-pro",
      features: ["100+ languages", "Context awareness", "Real-time processing", "API integration"],
      featured: false
    },
    {
      title: "AI Data Cleaner",
      description: "Automated data cleaning and preprocessing with intelligent error detection and correction",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-data-cleaner",
      features: ["Error detection", "Auto correction", "Data validation", "Format standardization"],
      featured: false
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "Advanced AI Technology",
      description: "Powered by cutting-edge machine learning algorithms and neural networks"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry security standards"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Optimized for speed with sub-second response times and real-time processing"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our expert AI specialists"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including video generation, customer insights, automation tools, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, video generation, customer insights, business intelligence" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI Services
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your business with our comprehensive suite of AI-powered solutions. 
                  From video generation to customer insights, we provide cutting-edge artificial intelligence tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </FuturisticButton>
                  <FuturisticButton
                    variant="secondary"
                    size="lg"
                  >
                    View Pricing
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our AI Services
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Choose from our comprehensive range of AI-powered solutions designed to streamline your business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <FuturisticCard
                    key={index}
                    className={`p-6 h-full ${service.featured ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-400">
                        {service.icon}
                      </div>
                      {service.featured && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">
                        {service.price}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={service.link}
                      className="block w-full"
                    >
                      <FuturisticButton
                        variant="primary"
                        size="sm"
                        className="w-full group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </FuturisticButton>
                    </Link>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our AI Services?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We combine cutting-edge technology with industry expertise to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get started with our AI services today and experience the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                >
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default AIServices;
