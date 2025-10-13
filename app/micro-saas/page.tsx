import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Package, ArrowRight, CheckCircle, Star, Zap, Shield, Globe, BarChart3, Brain, Mic } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

const MicroSaasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const microSaasProducts = [
    {
      id: "zion-ai-neural-interface",
      title: "Zion AI Neural Interface",
      description: "Revolutionary brain-computer interface for thought-to-text conversion and mind control.",
      icon: <Brain className="w-8 h-8" />,
      category: "ai",
      features: ["Thought-to-text conversion", "Mind control interface", "Neural pattern recognition", "Real-time processing"],
      price: "From $199/month",
      link: "/zion-ai-neural-interface",
      featured: true
    },
    {
      id: "ai-voice-cloning-studio",
      title: "AI Voice Cloning Studio",
      description: "Professional voice synthesis with 95% accuracy and multi-language support.",
      icon: <Mic className="w-8 h-8" />,
      category: "ai",
      features: ["Voice cloning", "Multi-language support", "Real-time synthesis", "Custom voice training"],
      price: "From $29/month",
      link: "/ai-voice-cloning-studio",
      featured: true
    },
    {
      id: "ai-quantum-financial-oracle",
      title: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions with 99.7% accuracy for market analysis.",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "finance",
      features: ["Market prediction", "Risk analysis", "Portfolio optimization", "Real-time alerts"],
      price: "From $199/month",
      link: "/ai-quantum-financial-oracle",
      featured: true
    },
    {
      id: "zion-analytics-pro",
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "analytics",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      price: "From $299/month",
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response.",
      icon: <Shield className="w-8 h-8" />,
      category: "security",
      features: ["Threat detection", "Automated response", "Security monitoring", "Incident management"],
      price: "From $499/month",
      link: "/zion-security-shield"
    },
    {
      id: "ai-space-mission-optimizer",
      title: "AI Space Mission Optimizer",
      description: "Advanced space mission optimization with 99.9% trajectory accuracy.",
      icon: <Globe className="w-8 h-8" />,
      category: "space",
      features: ["Trajectory optimization", "Mission planning", "Risk assessment", "Resource management"],
      price: "From $499/month",
      link: "/ai-space-mission-optimizer",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "ai", name: "AI Solutions" },
    { id: "analytics", name: "Analytics" },
    { id: "security", name: "Security" },
    { id: "finance", name: "Finance" },
    { id: "space", name: "Space Tech" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our innovative micro SAAS solutions including AI neural interface, voice cloning, financial oracle, and more. Ready-to-deploy software for immediate business impact."
        keywords="micro SAAS, software solutions, AI tools, business software, ready-to-use, Zion Tech Group, neural interface, voice cloning"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Package className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Ready-to-Deploy Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business instantly with our innovative micro SAAS solutions. 
            Ready-to-deploy software that delivers immediate value and competitive advantage.
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
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <FuturisticCard
                key={product.id}
                className={`group hover:scale-105 transition-all duration-300 ${
                  product.featured ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  {/* Product Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h3>

                  {/* Product Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-purple-400 font-semibold mb-4">
                    {product.price}
                  </div>

                  {/* CTA Button */}
                  <FuturisticButton
                    href={product.link}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Your Next Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose from our extensive library of micro SAAS solutions or let us create 
            a custom solution tailored to your specific business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Package className="w-5 h-5" />}
            >
              Get Custom Solution
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View All Solutions
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
