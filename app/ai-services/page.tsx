import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AIServicesPage = () => {
  const aiServices = [
    {
      name: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-analytics",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards", "Data Visualization"]
    },
    {
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: <Zap className="w-8 h-8" />,
      link: "/ai-automation",
      features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Task Management"]
    },
    {
      name: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools",
      icon: <Code className="w-8 h-8" />,
      link: "/ai-content-generation",
      features: ["Content Creation", "SEO Optimization", "Multi-language Support", "Brand Consistency"]
    },
    {
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and support automation",
      icon: <Users className="w-8 h-8" />,
      link: "/ai-customer-service",
      features: ["24/7 Support", "Natural Language Processing", "Sentiment Analysis", "Escalation Management"]
    },
    {
      name: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and reporting",
      icon: <Database className="w-8 h-8" />,
      link: "/ai-data-analytics",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Business Intelligence"]
    },
    {
      name: "AI Marketing",
      description: "Optimize your marketing campaigns with AI-powered targeting and personalization",
      icon: <Mail className="w-8 h-8" />,
      link: "/ai-marketing",
      features: ["Customer Segmentation", "Personalization", "Campaign Optimization", "ROI Tracking"]
    }
  ];

  const categories = [
    {
      name: "Analytics & Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      count: 8,
      description: "AI-powered analytics and business intelligence solutions"
    },
    {
      name: "Automation",
      icon: <Zap className="w-6 h-6" />,
      count: 12,
      description: "Intelligent automation and workflow optimization"
    },
    {
      name: "Content & Creative",
      icon: <Code className="w-6 h-6" />,
      count: 6,
      description: "AI content generation and creative tools"
    },
    {
      name: "Customer Experience",
      icon: <Users className="w-6 h-6" />,
      count: 10,
      description: "AI-powered customer service and engagement"
    },
    {
      name: "Data & Insights",
      icon: <Database className="w-6 h-6" />,
      count: 7,
      description: "Advanced data analytics and insights"
    },
    {
      name: "Marketing & Sales",
      icon: <Mail className="w-6 h-6" />,
      count: 9,
      description: "AI-driven marketing and sales optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services designed to transform your business. From analytics to automation, we provide cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, business AI, AI consulting, AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

      <div className="relative z-10 pt-20 pb-16">
        <ResponsiveContainer>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your AI Journey
              </FuturisticButton>
              <FuturisticButton
                href="#services"
                variant="outline"
                size="lg"
                icon={<Star className="w-5 h-5" />}
              >
                Explore Solutions
              </FuturisticButton>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              AI Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{category.count} solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div id="services" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Featured AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI solutions. From automation to analytics, 
              we help you harness the full potential of artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/services"
                variant="outline"
                size="lg"
                icon={<DollarSign className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AIServicesPage;
