import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, DollarSign, Globe, Settings, Target, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence platform with AI-powered insights and real-time analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $299/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      category: "Analytics",
      rating: 4.9,
      reviews: 127,
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with advanced threat detection and prevention",
      icon: <Shield className="w-8 h-8" />,
      price: "From $199/month",
      features: ["Threat monitoring", "Vulnerability scanning", "Incident response", "Compliance reporting"],
      category: "Security",
      rating: 4.8,
      reviews: 89,
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption",
      icon: <Globe className="w-8 h-8" />,
      price: "From $149/month",
      features: ["Encrypted storage", "Automated backups", "Version control", "Access management"],
      category: "Storage",
      rating: 4.7,
      reviews: 156,
      featured: true
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams",
      icon: <Brain className="w-8 h-8" />,
      price: "From $99/month",
      features: ["Content generation", "SEO optimization", "Brand consistency", "Collaboration tools"],
      category: "Content",
      rating: 4.6,
      reviews: 98
    },
    {
      id: "zion-data-sync",
      name: "Zion Data Sync",
      description: "Automated data synchronization and integration across multiple platforms",
      icon: <Settings className="w-8 h-8" />,
      price: "From $179/month",
      features: ["Real-time sync", "Data transformation", "Error handling", "Monitoring"],
      category: "Integration",
      rating: 4.8,
      reviews: 112
    },
    {
      id: "zion-lead-magnet",
      name: "Zion Lead Magnet",
      description: "Lead generation and management system with AI-powered qualification",
      icon: <Target className="w-8 h-8" />,
      price: "From $129/month",
      features: ["Lead scoring", "Automated nurturing", "CRM integration", "Analytics"],
      category: "Marketing",
      rating: 4.7,
      reviews: 134
    }
  ];

  // const categories = ["All", "Analytics", "Security", "Storage", "Content", "Integration", "Marketing"];

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions including analytics, security, storage, and content management. Deploy powerful software instantly." />
        <meta name="keywords" content="micro SAAS, software as a service, business software, analytics, security, cloud storage, content management" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      <SEOOptimizer
        title="Micro SAAS - Zion Tech Group"
        description="Ready-to-use software solutions for modern businesses"
        keywords="micro SAAS, software solutions, business automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy powerful software solutions instantly with our comprehensive suite of micro SAAS applications designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform inline" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured <span className="text-cyan-400">Solutions</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our most popular micro SAAS applications trusted by businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group ${service.featured ? 'ring-2 ring-cyan-400/50' : ''}`}>
                  {service.featured && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Deploy Your Micro SAAS?
              </h2>
              <p className="text-gray-300 mb-8">
                Get started with our micro SAAS solutions today and transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform inline" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}