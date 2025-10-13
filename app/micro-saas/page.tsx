import React from "react";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      featured: true,
      features: ["Real-time Analytics", "AI Predictions", "Custom Dashboards", "API Integration"]
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true,
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Email Integration"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      features: ["Content Generation", "Multi-Channel", "A/B Testing", "Analytics"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Clock className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      features: ["Task Prioritization", "Resource Allocation", "Time Tracking", "Team Collaboration"]
    }
  ];

  const categories = [
    {
      name: "Analytics & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      count: 12,
      description: "Business intelligence and data analytics solutions"
    },
    {
      name: "Security",
      icon: <Shield className="w-6 h-6" />,
      count: 8,
      description: "Cybersecurity and data protection tools"
    },
    {
      name: "AI & Automation",
      icon: <Brain className="w-6 h-6" />,
      count: 15,
      description: "Artificial intelligence and automation platforms"
    },
    {
      name: "Cloud & Storage",
      icon: <Cloud className="w-6 h-6" />,
      count: 6,
      description: "Cloud computing and storage solutions"
    },
    {
      name: "Development",
      icon: <Code className="w-6 h-6" />,
      count: 10,
      description: "Development tools and productivity software"
    },
    {
      name: "Database",
      icon: <Database className="w-6 h-6" />,
      count: 5,
      description: "Database management and optimization tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive collection of micro SAAS solutions designed to accelerate your business growth. From AI analytics to cybersecurity, find the perfect tool for your needs."
        keywords="micro SAAS, business software, AI tools, analytics, cybersecurity, cloud solutions, productivity software, business automation"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <div className="relative z-10 pt-20 pb-16">
        <ResponsiveContainer>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementations - just powerful tools that work.
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
                href="#products"
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
              Browse by Category
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

          {/* Featured Products */}
          <div id="products" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Featured Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <FuturisticCard
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{product.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={product.link}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive collection of micro SAAS solutions and start transforming your business today. 
              All solutions come with 24/7 support and regular updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Now
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

export default MicroSaasPage;
