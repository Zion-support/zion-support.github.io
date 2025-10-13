import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, Globe, BarChart3 } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

const AIServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const aiServices = [
    {
      id: "ai-analytics",
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "analytics",
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "Automated reporting"],
      price: "From $299/month",
      link: "/ai-analytics"
    },
    {
      id: "ai-automation",
      title: "AI Process Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      icon: <Zap className="w-8 h-8" />,
      category: "automation",
      features: ["Workflow automation", "Document processing", "Email automation", "Task scheduling"],
      price: "From $199/month",
      link: "/ai-automation"
    },
    {
      id: "ai-content-generation",
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our advanced AI writing tools.",
      icon: <Brain className="w-8 h-8" />,
      category: "content",
      features: ["Blog posts", "Marketing copy", "Product descriptions", "Social media content"],
      price: "From $149/month",
      link: "/ai-content-generation"
    },
    {
      id: "ai-customer-service",
      title: "AI Customer Service",
      description: "Enhance customer support with intelligent chatbots and automated responses.",
      icon: <Shield className="w-8 h-8" />,
      category: "customer",
      features: ["24/7 chatbot", "Sentiment analysis", "Ticket routing", "Knowledge base"],
      price: "From $399/month",
      link: "/ai-customer-service"
    },
    {
      id: "ai-cybersecurity",
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection and security monitoring.",
      icon: <Shield className="w-8 h-8" />,
      category: "security",
      features: ["Threat detection", "Anomaly monitoring", "Incident response", "Security analytics"],
      price: "From $599/month",
      link: "/ai-cybersecurity"
    },
    {
      id: "ai-predictive-analytics",
      title: "AI Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with predictive modeling.",
      icon: <Globe className="w-8 h-8" />,
      category: "analytics",
      features: ["Demand forecasting", "Risk assessment", "Market analysis", "Trend prediction"],
      price: "From $499/month",
      link: "/ai-predictive-analytics"
    }
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "analytics", name: "Analytics" },
    { id: "automation", name: "Automation" },
    { id: "content", name: "Content" },
    { id: "customer", name: "Customer Service" },
    { id: "security", name: "Security" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services including analytics, automation, content generation, customer service, and cybersecurity solutions. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI content generation, AI customer service, AI cybersecurity"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From analytics to automation, we provide cutting-edge artificial intelligence services 
            that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <FuturisticCard
                key={service.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-cyan-400 font-semibold mb-4">
                    {service.price}
                  </div>

                  {/* CTA Button */}
                  <FuturisticButton
                    href={service.link}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our AI experts help you identify the perfect solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Get Free Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Live Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
