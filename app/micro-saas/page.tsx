import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Brain, Shield, BarChart3, Cloud, FileText, Cpu, Target, TrendingUp } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: "Zion AI Neural Interface",
      description: "Breakthrough brain-computer interface technology enabling direct neural communication with 99.9% signal accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/zion-ai-neural-interface",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,999/month",
      features: ["Neural Signal Processing", "Visual Cortex Interface", "Motor Control Integration", "Emotional State Recognition"],
      popular: true
    },
    {
      title: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights, real-time reporting, and predictive analytics for business intelligence.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/zion-analytics-pro",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $99/month",
      features: ["Real-time Analytics", "AI-powered Insights", "Custom Dashboards", "Automated Reporting"],
      popular: true
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution for small to medium businesses with 24/7 threat monitoring and automated response.",
      icon: <Shield className="w-8 h-8" />,
      path: "/zion-security-shield",
      color: "from-red-500 to-pink-500",
      price: "Starting at $149/month",
      features: ["24/7 Threat Monitoring", "Automated Incident Response", "Vulnerability Scanning", "Security Compliance"],
      popular: false
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and backup solution with enterprise-grade encryption and cross-platform synchronization.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/zion-cloud-vault",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $79/month",
      features: ["End-to-end Encryption", "Automated Backups", "File Versioning", "Team Collaboration"],
      popular: false
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform with multi-language support, brand voice training, and SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/zion-content-studio",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["AI Content Generation", "Multi-language Support", "Brand Voice Training", "SEO Optimization"],
      popular: true
    },
    {
      title: "Zion AI Code Assistant",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages and frameworks.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation Generation"],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Uptime Guarantee",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Support Available",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "50+",
      description: "Micro SAAS Products",
      icon: <Brain className="w-8 h-8" />
    },
    {
      metric: "10,000+",
      description: "Happy Customers",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Innovative micro SAAS solutions including AI neural interfaces, analytics platforms, security shields, and content studios. Powerful tools for modern businesses."
        keywords="micro SAAS, software as a service, AI tools, business software, analytics platform, security solutions, content creation, code assistant"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-300 font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Powerful Micro SAAS Tools
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our innovative micro SAAS solutions designed to solve specific business challenges. 
            From AI neural interfaces to advanced analytics platforms, we provide powerful tools that scale with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Try Free Demo
            </Link>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of micro SAAS solutions, each designed to address 
              specific business needs with powerful features and intuitive interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group ${
                  product.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700/50'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} mb-6`}>
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-purple-400 font-semibold mb-4">
                  {product.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={product.path}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    product.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Power Your Business with Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our micro SAAS solutions to streamline operations, 
              boost productivity, and drive growth with specialized tools designed for modern workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
